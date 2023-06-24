import { LitElement, html, customElement } from "lit-element";
import { PluginClient } from "@remixproject/plugin";
import { createClient } from "@remixproject/plugin-webview";
import {
  CompilationFileSources,
  CompilationResult,
} from "@remixproject/plugin-api/";
import { Status } from "@remixproject/plugin-utils";
import axios from "axios";
import { print } from "graphql";
import gql from "graphql-tag";
import { v4 as uuidv4 } from "uuid";
import firebase from "./firebase";

import encouragement from "./encouragement";

type contract = {
  abi: any[];
};

type ContractMap = {
  [contractName: string]: contract;
};

type dapp = {
  mnemonic: string;
  abi: any[];
};

type dappMap = {
  [name: string]: dapp;
};

@customElement("dappos-plugin")
export class dapposDapp extends LitElement {
  /** client to communicate with the IDE */
  private client = createClient(new PluginClient());
  private contracts: ContractMap = {};
  private contractAlerts: any = {};
  private dapposDapps: dappMap = {};

  constructor() {
    super();
    this.init();
  }

  async init() {
    await this.client.onload();
    this.client.solidity.on(
      "compilationFinished",
      (
        file: string,
        src: CompilationFileSources,
        version: string,
        result: CompilationResult
      ) => {
        if (!result) return;
        this.contracts = this.createContracts(result);
        const status: Status = {
          key: "succeed",
          type: "success",
          title: "New interface generated",
        };
        this.client.emit("statusChanged", status);
        this.requestUpdate();
      }
    );
  }

  /** ⚠️ If you're using LitElement you should disable Shadow Root ⚠️ */
  createRenderRoot() {
    return this;
  }

  createContracts(result: CompilationResult) {
    return Object.keys(result.contracts).reduce((acc, fileName) => {
      const contracts = result.contracts[fileName];
      Object.keys(contracts).forEach(
        (name) => (acc[name] = { abi: contracts[name].abi })
      );
      return acc;
    }, {});
  }

  async generateInterface() {
    try {
      const dappName = (<HTMLInputElement>document.getElementById("dappName"))
        .value;
      if (dappName.trim() === "") {
        throw new Error("Please enter a name for your dapp");
      }

      const dappAddress = (<HTMLInputElement>(
        document.getElementById("dappAddress")
      )).value;
      if (!/^(0x)+[0-9a-fA-F]{40}$/i.test(dappAddress)) {
        throw new Error("Please enter a valid contract address");
      }

      const selectedContractNames = [].slice
        .call(document.querySelectorAll("input[type=checkbox]:checked"))
        .map((checked) => (<HTMLInputElement>checked).value);

      const combinedAbi = selectedContractNames.reduce((acc, name) => {
        return acc.concat(this.contracts[name].abi);
      }, <any>[]);

      if (combinedAbi.length === 0) {
        throw new Error("Please select at least one contract");
      }

      if (dappName.includes("/")) {
        throw new Error(
          'Dapp name cannot contain "/". Please choose another name.'
        );
      }

      this.client.emit("statusChanged", {
        key: "loading",
        type: "info",
        title: "Generating ...",
      });

      let uniqueId = localStorage.getItem("uniqueId");
      if (!uniqueId) {
        uniqueId = uuidv4();
        localStorage.setItem("uniqueId", uniqueId);
      }

      const dappId = uuidv4();

      const initialFrontendStructure = {
        sections: [
          {
            id: uuidv4(),
            backgroundColor: "#1b2129",
            config: {
              configOpen: true,
              configActive: true,
              selectedBlockConfig: "",
            },
            blocks: [],
          },
        ],
        font: {
          fontFamily: "Chakra Petch",
          config: { configOpen: true, configActive: true },
        },
        connectButton: { backgroundColor: "", textColor: "" },
      };

      const dapp = {
        id: dappId,
        dappName: dappName,
        walletConnected: false,
        dappSaved: false,
        frontendStructure: initialFrontendStructure,
        contracts: selectedContractNames.map((name) => {
          return {
            address: dappAddress,
            abi: this.contracts[name].abi,
            name: name,
          };
        }),
        images: [],
        config: { windowClick: false },
      };

      const db = firebase.firestore();

      try {
        const response = await db
          .collection("remixUsers")
          .doc(uniqueId)
          .collection("dapps")
          .doc(dappId)
          .set(dapp);
      } catch (error) {
        console.log("error: ", error);
      }

      const newWindowUrl = `https://app.dappos.io//DappBuilder?uniqueId=${encodeURIComponent(
        uniqueId
      )}&dappId=${encodeURIComponent(dappId)}`;

      window.open(newWindowUrl, "_blank");

      setTimeout(() => {
        this.client.emit("statusChanged", { key: "none" });
      }, 10000);
    } catch (err) {
      this.showAlert(err);
    }
  }

  showAlert(err?: string) {
    if (!err) {
      const message =
        encouragement[Math.floor(Math.random() * encouragement.length)];
      this.contractAlerts = { message, type: "success" };
    } else {
      const message = `${err}`;
      this.contractAlerts = { message, type: "warning" };
    }
    this.requestUpdate();
    setTimeout(() => {
      this.contractAlerts = {};
      this.requestUpdate();
    }, 5000);
  }

  render() {
    const isContracts = Object.keys(this.contracts).length > 0;

    const availableContracts = isContracts
      ? Object.keys(this.contracts).map((name, index) => {
          return html`
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="${name}"
                id="${index}"
                checked
              />
              <label>
                ${name} [${this.contracts[name].abi.length} functions]
              </label>
            </div>
          `;
        })
      : html`
          <div class="list-group-item">
            None found, please compile a contract using the Solidity Compiler
            tab <img src="./compiler.png" width="30" />
          </div>
        `;

    const form = html`
      <div>
        <div class="form-group">
          <label for="dappContracts">Available Contracts:</label>
          ${availableContracts}
        </div>
        <div class="form-group">
          <label for="dappName">Dapp Name: </label>
          <input
            type="text"
            class="form-control"
            id="dappName"
            ?disabled="${!isContracts}"
            value="${Object.keys(this.contracts)[0] || ""}"
          />
        </div>
        <div class="form-group">
          <label for="dappAddress">Deployed Address: </label>
          <input
            type="text"
            class="form-control"
            id="dappAddress"
            placeholder="0xabc..."
            ?disabled="${!isContracts}"
          />
        </div>
        <button
          type="submit"
          style="margin:10px 0 3px 0"
          class="btn btn-lg btn-primary mb-2"
          @click="${() => this.generateInterface()}"
          ?disabled="${!isContracts}"
        >
          Create Dapp
        </button>
      </div>
    `;

    const contractAlerts = html`
      <div
        class="alert alert-${this.contractAlerts.type}"
        role="alert"
        ?hidden="${Object.keys(this.contractAlerts).length === 0}"
      >
        <img style="margin: 0 0 0 0" src="./chelsea.png" width="50" /> ${this
          .contractAlerts.message}
      </div>
    `;

    return html`
      <style>
        main {
          padding: 10px;
        }
        #alerts {
          margin-top: 20px;
          font-size: 0.8rem;
        }
        .alert {
          animation: enter 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        @keyframes enter {
          0% {
            opacity: 0;
            transform: translateY(50px) scaleY(1.2);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
        }
      </style>
      <main>
        <h4>Dappos</b></h4>
        <h8>Dapps interfaces with no-code</h8>
        <div style="margin: 10px 0  0 0" id="form">${form}</div>
        <div id="alerts" style="margin: 0 0  0 0">${contractAlerts}</div>
        <h6 style="margin: 10px 0  0 0">Need help?</h6>
        <h6>
          <a href="https://docs.dappos.io/" target="_blank">dappos docs</a>
        </h6>
      </main>
    `;
  }
}
