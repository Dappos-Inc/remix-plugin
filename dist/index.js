!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=123)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Bl})),n.d(t,"b",(function(){return Fu})),n.d(t,"c",(function(){return Iu})),n.d(t,"d",(function(){return fu})),n.d(t,"e",(function(){return $l})),n.d(t,"f",(function(){return Vu})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return Uu})),n.d(t,"i",(function(){return Gl})),n.d(t,"j",(function(){return Kl})),n.d(t,"k",(function(){return F})),n.d(t,"l",(function(){return hh})),n.d(t,"m",(function(){return mt})),n.d(t,"n",(function(){return $})),n.d(t,"o",(function(){return z})),n.d(t,"p",(function(){return cu})),n.d(t,"q",(function(){return b})),n.d(t,"r",(function(){return st})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return iu})),n.d(t,"u",(function(){return sh})),n.d(t,"v",(function(){return vh})),n.d(t,"w",(function(){return yh})),n.d(t,"x",(function(){return Nu})),n.d(t,"y",(function(){return gu})),n.d(t,"z",(function(){return yu})),n.d(t,"A",(function(){return du})),n.d(t,"B",(function(){return ih})),n.d(t,"C",(function(){return mh})),n.d(t,"D",(function(){return Mu})),n.d(t,"E",(function(){return vu})),n.d(t,"F",(function(){return Au})),n.d(t,"G",(function(){return Du})),n.d(t,"H",(function(){return Pu})),n.d(t,"I",(function(){return Ml})),n.d(t,"J",(function(){return Pl})),n.d(t,"K",(function(){return xu})),n.d(t,"L",(function(){return ch})),n.d(t,"M",(function(){return Wl})),n.d(t,"N",(function(){return Yl})),n.d(t,"O",(function(){return Jl})),n.d(t,"P",(function(){return Zl})),n.d(t,"Q",(function(){return eh})),n.d(t,"R",(function(){return th})),n.d(t,"S",(function(){return wh})),n.d(t,"T",(function(){return Cl})),n.d(t,"U",(function(){return Al})),n.d(t,"V",(function(){return Ru})),n.d(t,"W",(function(){return Lu})),n.d(t,"X",(function(){return oh})),n.d(t,"Y",(function(){return ah})),n.d(t,"Z",(function(){return Tl})),n.d(t,"ab",(function(){return bl})),n.d(t,"bb",(function(){return bu})),n.d(t,"cb",(function(){return wu})),n.d(t,"db",(function(){return ph})),n.d(t,"eb",(function(){return gh})),n.d(t,"fb",(function(){return nh})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return Hl})),n.d(t,"ib",(function(){return Nl})),n.d(t,"jb",(function(){return Ol})),n.d(t,"kb",(function(){return rh})),n.d(t,"lb",(function(){return ku})),n.d(t,"mb",(function(){return Sl}));var r=n(2),i=n(7),s=n(5),o=n(1),a=n(4);const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.22.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s.b("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s.a.DEBUG){const n=t.map(y);h.debug(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s.a.ERROR){const n=t.map(y);h.error(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s.a.WARN){const n=t.map(y);h.warn(`Firestore (${l}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function w(e,t){e||v()}function b(e,t){e||v()}function _(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o.c{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class C{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new I;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(w("string"==typeof t.accessToken),new T(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return w(null===e||"string"==typeof e),new u(e)}}class D{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class O{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new D(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.T;return this.T=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(w("string"==typeof e.token),this.T=e.token,new N(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=P(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function R(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function j(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new F(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new F(0,0))}static max(){return new V(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===B.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof B?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class U extends B{construct(e,t,n){return new U(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new U(t)}static emptyPath(){return new U([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends B{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new E(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new E(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(U.fromString(e))}static fromName(e){return new $(U.fromString(e).popFirst(5))}static empty(){return new $(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===U.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new U(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function K(e){return e.fields.find(e=>2===e.kind)}function Q(e){return e.fields.filter(e=>2!==e.kind)}G.UNKNOWN_ID=-1;class H{constructor(e,t){this.fieldPath=e,this.kind=t}}class W{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new W(0,J.min())}}function X(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=V.fromTimestamp(1e9===r?new F(n+1,0):new F(n,r));return new J(i,$.empty(),t)}function Y(e){return new J(e.readTime,e.key,-1)}class J{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new J(V.min(),$.empty(),-1)}static max(){return new J(V.max(),$.empty(),-1)}}function Z(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=$.comparator(e.documentKey,t.documentKey),0!==n?n:R(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class te{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){if(e.code!==S.FAILED_PRECONDITION||e.message!==ee)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new re((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof re?t:re.resolve(t)}catch(e){return re.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):re.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):re.reject(t)}static resolve(e){return new re((t,n)=>{t(e)})}static reject(e){return new re((t,n)=>{n(e)})}static waitFor(e){return new re((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=re.resolve(!1);for(const n of e)t=t.next(e=>e?re.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new re((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next(e=>{s[c]=e,++o,o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new re((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new I,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new ae(e,t.error)):this.v.resolve()},this.transaction.onerror=t=>{const n=de(t.target.error);this.v.reject(new ae(e,n))}}static open(e,t,n,r){try{return new ie(t,e.transaction(r,n))}catch(e){throw new ae(t,e)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ue(t)}}class se{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===se.S(Object(o.m)())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),le(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Object(o.o)())return!1;if(se.C())return!0;const e=Object(o.m)(),t=se.S(e),n=0<t&&t<10,r=se.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var t;return void 0!==e&&"YES"===(null===(t=e.env)||void 0===t?void 0:t.k)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async $(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new ae(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new E(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new E(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ae(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.O(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.$(e);const t=ie.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.P(),e)).catch(e=>(t.abort(e),re.reject(e))).toPromise();return s.catch(()=>{}),await t.R,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oe{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return le(this.L.delete())}}class ae extends E{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ce(e){return"IndexedDbTransactionError"===e.name}class ue{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),le(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),le(this.store.add(e))}get(e){return le(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),le(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),le(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new re((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new re((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}J(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,(e,t,n)=>n.delete())}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Z(e){const t=this.cursor({});return new re((n,r)=>{t.onerror=e=>{const t=de(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}W(e,t){const n=[];return new re((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new oe(i),o=t(i.primaryKey,i.value,s);if(o instanceof re){const e=o.catch(e=>(s.done(),re.reject(e)));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}}).next(()=>re.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function le(e){return new re((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=de(e.target.error);n(t)}})}let he=!1;function de(e){const t=se.S(Object(o.m)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return he||(he=!0,setTimeout(()=>{throw e},0)),e}}return e}class fe{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){p("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{p("IndexBackiller","Documents written: "+await this.tt.nt())}catch(e){ce(e)?p("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ne(e)}await this.et(6e4)})}}class pe{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const n=new Set;let r=t,i=!0;return re.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return p("IndexBackiller","Processing collection: "+t),this.it(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.rt(r,n)).next(n=>(p("IndexBackiller","Updating offset: "+n),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}rt(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=Y(t);Z(r,n)>0&&(n=r)}),new J(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function ge(e){return null==e}function ye(e){return 0===e&&1/e==-1/0}function ve(e){return"number"==typeof e&&Number.isInteger(e)&&!ye(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=_e(t)),t=be(e.get(n),t);return _e(t)}function be(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function _e(e){return e+""}function Se(e){const t=e.length;if(w(t>=2),2===t)return w(""===e.charAt(0)&&""===e.charAt(1)),U.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&v(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:v()}s=t+2}return new U(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me.ct=-1;const Ee=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){return[e,we(t)]}function Te(e,t,n){return[e,we(t),n]}const xe={},Ce=["prefixPath","collectionGroup","readTime","documentId"],Ae=["prefixPath","collectionGroup","documentId"],De=["collectionGroup","readTime","prefixPath","documentId"],Oe=["canonicalId","targetId"],Ne=["targetId","path"],ke=["path","targetId"],Pe=["collectionId","parent"],Me=["indexId","uid"],Re=["uid","sequenceNumber"],Le=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],je=["indexId","uid","orderedDocumentKey"],Fe=["userId","collectionPath","documentId"],Ve=["userId","collectionPath","largestBatchId"],Be=["userId","collectionGroup","largestBatchId"],Ue=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],qe=[...Ue,"documentOverlays"],ze=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$e=ze,Ge=[...$e,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends te{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function Qe(e,t){const n=_(e);return se.M(n.ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function We(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Xe(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new Ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Je(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Je(this.root,e,this.comparator,!1)}getReverseIterator(){return new Je(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Je(this.root,e,this.comparator,!0)}}class Je{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ze.RED,this.left=null!=r?r:Ze.EMPTY,this.right=null!=i?i:Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ze(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ze.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1,Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tt(this.data.getIterator())}getIteratorFrom(e){return new tt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof et))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class tt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function nt(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.fields=e,e.sort(z.comparator)}static empty(){return new rt([])}unionWith(e){let t=new et(z.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new it("Invalid base64 string: "+e):e}}(e);return new ot(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const at=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ct(e){if(w(!!e),"string"==typeof e){let t=0;const n=at.exec(e);if(w(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ut(e.seconds),nanos:ut(e.nanos)}}function ut(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function lt(e){return"string"==typeof e?ot.fromBase64String(e):ot.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function dt(e){const t=e.mapValue.fields.__previous_value__;return ht(t)?dt(t):t}function ft(e){const t=ct(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class mt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new mt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof mt&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},yt={nullValue:"NULL_VALUE"};function vt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ht(e)?4:Nt(e)?9007199254740991:10:v()}function wt(e,t){if(e===t)return!0;const n=vt(e);if(n!==vt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ft(e).isEqual(ft(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ct(e.timestampValue),r=ct(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return lt(e.bytesValue).isEqual(lt(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ut(e.geoPointValue.latitude)===ut(t.geoPointValue.latitude)&&ut(e.geoPointValue.longitude)===ut(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ut(e.integerValue)===ut(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ut(e.doubleValue),r=ut(t.doubleValue);return n===r?ye(n)===ye(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(He(n)!==He(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!wt(n[e],r[e])))return!1;return!0}(e,t);default:return v()}}function bt(e,t){return void 0!==(e.values||[]).find(e=>wt(e,t))}function _t(e,t){if(e===t)return 0;const n=vt(e),r=vt(t);if(n!==r)return R(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ut(e.integerValue||e.doubleValue),r=ut(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return St(e.timestampValue,t.timestampValue);case 4:return St(ft(e),ft(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){const n=lt(e),r=lt(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=R(n[e],r[e]);if(0!==t)return t}return R(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=R(ut(e.latitude),ut(t.latitude));return 0!==n?n:R(ut(e.longitude),ut(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=_t(n[e],r[e]);if(t)return t}return R(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===gt.mapValue&&t===gt.mapValue)return 0;if(e===gt.mapValue)return 1;if(t===gt.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=R(r[e],s[e]);if(0!==t)return t;const o=_t(n[r[e]],i[s[e]]);if(0!==o)return o}return R(r.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function St(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);const n=ct(e),r=ct(t),i=R(n.seconds,r.seconds);return 0!==i?i:R(n.nanos,r.nanos)}function Et(e){return function e(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const t=ct(e);return`time(${t.seconds},${t.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?lt(t.bytesValue).toBase64():"referenceValue"in t?(r=t.referenceValue,$.fromName(r).toString()):"geoPointValue"in t?`geo(${(n=t.geoPointValue).latitude},${n.longitude})`:"arrayValue"in t?function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=e(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${e(t.fields[s])}`;return r+"}"}(t.mapValue):v();var n,r}(e)}function It(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Tt(e){return!!e&&"integerValue"in e}function xt(e){return!!e&&"arrayValue"in e}function Ct(e){return!!e&&"nullValue"in e}function At(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Dt(e){return!!e&&"mapValue"in e}function Ot(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return We(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ot(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ot(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Nt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function kt(e){return"nullValue"in e?yt:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?It(mt.empty(),$.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:v()}function Pt(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?It(mt.empty(),$.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?gt:v()}function Mt(e,t){const n=_t(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Rt(e,t){const n=_t(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Dt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ot(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ot(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Dt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Dt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){We(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new Lt(Ot(this.value))}}function jt(e){const t=[];return We(e.fields,(e,n)=>{const r=new z([e]);if(Dt(n)){const e=jt(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new rt(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ft{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ft(e,0,V.min(),V.min(),V.min(),Lt.empty(),0)}static newFoundDocument(e,t,n,r){return new Ft(e,1,t,V.min(),n,r,0)}static newNoDocument(e,t){return new Ft(e,2,t,V.min(),V.min(),Lt.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,V.min(),V.min(),Lt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(V.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this.position=e,this.inclusive=t}}function Bt(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?$.comparator($.fromName(o.referenceValue),n.key):_t(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ut(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!wt(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t="asc"){this.field=e,this.dir=t}}function zt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{}class Gt extends $t{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new en(e,t,n):"array-contains"===t?new sn(e,n):"in"===t?new on(e,n):"not-in"===t?new an(e,n):"array-contains-any"===t?new cn(e,n):new Gt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tn(e,n):new nn(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(_t(t,this.value)):null!==t&&vt(this.value)===vt(t)&&this.matchesComparison(_t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Kt extends $t{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Kt(e,t)}matches(e){return Qt(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(e=>e.isInequality());return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Qt(e){return"and"===e.op}function Ht(e){return"or"===e.op}function Wt(e){return Xt(e)&&Qt(e)}function Xt(e){for(const t of e.filters)if(t instanceof Kt)return!1;return!0}function Yt(e,t){return e instanceof Gt?function(e,t){return t instanceof Gt&&e.op===t.op&&e.field.isEqual(t.field)&&wt(e.value,t.value)}(e,t):e instanceof Kt?function(e,t){return t instanceof Kt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Yt(n,t.filters[r]),!0)}(e,t):void v()}function Jt(e,t){const n=e.filters.concat(t);return Kt.create(n,e.op)}function Zt(e){return e instanceof Gt?function(e){return`${e.field.canonicalString()} ${e.op} ${Et(e.value)}`}(e):e instanceof Kt?function(e){return e.op.toString()+" {"+e.getFilters().map(Zt).join(" ,")+"}"}(e):"Filter"}class en extends Gt{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class tn extends Gt{constructor(e,t){super(e,"in",t),this.keys=rn("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nn extends Gt{constructor(e,t){super(e,"not-in",t),this.keys=rn("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rn(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>$.fromName(e.referenceValue))}class sn extends Gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xt(t)&&bt(t.arrayValue,this.value)}}class on extends Gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&bt(this.value.arrayValue,t)}}class an extends Gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(bt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!bt(this.value.arrayValue,t)}}class cn extends Gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xt(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>bt(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function ln(e,t=null,n=[],r=[],i=null,s=null,o=null){return new un(e,t,n,r,i,s,o)}function hn(e){const t=_(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>function e(t){if(t instanceof Gt)return t.field.canonicalString()+t.op.toString()+Et(t.value);if(Wt(t))return t.filters.map(t=>e(t)).join(",");{const n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}}(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),ge(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Et(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Et(e)).join(",")),t.dt=e}return t.dt}function dn(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!zt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Yt(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ut(e.startAt,t.startAt)&&Ut(e.endAt,t.endAt)}function fn(e){return $.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function pn(e,t){return e.filters.filter(e=>e instanceof Gt&&e.field.isEqual(t))}function mn(e,t,n){let r=yt,i=!0;for(const n of pn(e,t)){let e=yt,t=!0;switch(n.op){case"<":case"<=":e=kt(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=yt}Mt({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Mt({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function gn(e,t,n){let r=gt,i=!0;for(const n of pn(e,t)){let e=gt,t=!0;switch(n.op){case">=":case">":e=Pt(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=gt}Rt({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Rt({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function vn(e,t,n,r,i,s,o,a){return new yn(e,t,n,r,i,s,o,a)}function wn(e){return new yn(e)}function bn(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function _n(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Sn(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function En(e){return null!==e.collectionGroup}function In(e){const t=_(e);if(null===t.wt){t.wt=[];const e=Sn(t),n=_n(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new qt(e)),t.wt.push(new qt(z.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new qt(z.keyField(),e))}}}return t.wt}function Tn(e){const t=_(e);if(!t._t)if("F"===t.limitType)t._t=ln(t.path,t.collectionGroup,In(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of In(t)){const t="desc"===n.dir?"asc":"desc";e.push(new qt(n.field,t))}const n=t.endAt?new Vt(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vt(t.startAt.position,t.startAt.inclusive):null;t._t=ln(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function xn(e,t){t.getFirstInequalityField(),Sn(e);const n=e.filters.concat([t]);return new yn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Cn(e,t,n){return new yn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function An(e,t){return dn(Tn(e),Tn(t))&&e.limitType===t.limitType}function Dn(e){return`${hn(Tn(e))}|lt:${e.limitType}`}function On(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Zt(e)).join(", ")}]`),ge(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Et(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Et(e)).join(",")),`Target(${t})`}(Tn(e))}; limitType=${e.limitType})`}function Nn(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of In(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Bt(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,In(e),t))&&!(e.endAt&&!function(e,t,n){const r=Bt(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,In(e),t))}(e,t)}function kn(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Pn(e){return(t,n)=>{let r=!1;for(const i of In(e)){const e=Mn(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Mn(e,t,n){const r=e.field.isKeyField()?$.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?_t(r,i):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){We(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return Xe(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new Ye($.comparator);function jn(){return Ln}const Fn=new Ye($.comparator);function Vn(...e){let t=Fn;for(const n of e)t=t.insert(n.key,n);return t}function Bn(e){let t=Fn;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Un(){return zn()}function qn(){return zn()}function zn(){return new Rn(e=>e.toString(),(e,t)=>e.isEqual(t))}const $n=new Ye($.comparator),Gn=new et($.comparator);function Kn(...e){let t=Gn;for(const n of e)t=t.add(n);return t}const Qn=new et(R);function Hn(){return Qn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ye(t)?"-0":t}}function Xn(e){return{integerValue:""+e}}function Yn(e,t){return ve(t)?Xn(t):Wn(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this._=void 0}}function Zn(e,t,n){return e instanceof nr?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ht(t)&&(t=dt(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof rr?ir(e,t):e instanceof sr?or(e,t):function(e,t){const n=tr(e,t),r=cr(n)+cr(e.gt);return Tt(n)&&Tt(e.gt)?Xn(r):Wn(e.serializer,r)}(e,t)}function er(e,t,n){return e instanceof rr?ir(e,t):e instanceof sr?or(e,t):n}function tr(e,t){return e instanceof ar?Tt(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class nr extends Jn{}class rr extends Jn{constructor(e){super(),this.elements=e}}function ir(e,t){const n=ur(t);for(const t of e.elements)n.some(e=>wt(e,t))||n.push(t);return{arrayValue:{values:n}}}class sr extends Jn{constructor(e){super(),this.elements=e}}function or(e,t){let n=ur(t);for(const t of e.elements)n=n.filter(e=>!wt(e,t));return{arrayValue:{values:n}}}class ar extends Jn{constructor(e,t){super(),this.serializer=e,this.gt=t}}function cr(e){return ut(e.integerValue||e.doubleValue)}function ur(e){return xt(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.field=e,this.transform=t}}class hr{constructor(e,t){this.version=e,this.transformResults=t}}class dr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new dr}static exists(e){return new dr(void 0,e)}static updateTime(e){return new dr(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fr(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class pr{}function mr(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Tr(e.key,dr.none()):new br(e.key,e.data,dr.none());{const n=e.data,r=Lt.empty();let i=new et(z.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new _r(e.key,r,new rt(i.toArray()),dr.none())}}function gr(e,t,n){e instanceof br?function(e,t,n){const r=e.value.clone(),i=Er(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof _r?function(e,t,n){if(!fr(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Er(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Sr(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function yr(e,t,n,r){return e instanceof br?function(e,t,n,r){if(!fr(e.precondition,t))return n;const i=e.value.clone(),s=Ir(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof _r?function(e,t,n,r){if(!fr(e.precondition,t))return n;const i=Ir(e.fieldTransforms,r,t),s=t.data;return s.setAll(Sr(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return fr(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function vr(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=tr(r.transform,e||null);null!=i&&(null===n&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function wr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&L(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof rr&&t instanceof rr||e instanceof sr&&t instanceof sr?L(e.elements,t.elements,wt):e instanceof ar&&t instanceof ar?wt(e.gt,t.gt):e instanceof nr&&t instanceof nr}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class br extends pr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _r extends pr{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sr(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Er(e,t,n){const r=new Map;w(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,er(o,a,n[i]))}return r}function Ir(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Zn(e,s,t))}return r}class Tr extends pr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xr extends pr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&gr(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=yr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=yr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=qn();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=mr(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(V.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Kn())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>wr(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>wr(e,t))}}class Ar{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){w(e.mutations.length===n.length);let r=$n;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Ar(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nr,kr;function Pr(e){switch(e){default:return v();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Mr(e){if(void 0===e)return m("GRPC error has no .code"),S.UNKNOWN;switch(e){case Nr.OK:return S.OK;case Nr.CANCELLED:return S.CANCELLED;case Nr.UNKNOWN:return S.UNKNOWN;case Nr.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Nr.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Nr.INTERNAL:return S.INTERNAL;case Nr.UNAVAILABLE:return S.UNAVAILABLE;case Nr.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Nr.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Nr.NOT_FOUND:return S.NOT_FOUND;case Nr.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Nr.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Nr.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Nr.ABORTED:return S.ABORTED;case Nr.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Nr.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Nr.DATA_LOSS:return S.DATA_LOSS;default:return v()}}(kr=Nr||(Nr={}))[kr.OK=0]="OK",kr[kr.CANCELLED=1]="CANCELLED",kr[kr.UNKNOWN=2]="UNKNOWN",kr[kr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",kr[kr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",kr[kr.NOT_FOUND=5]="NOT_FOUND",kr[kr.ALREADY_EXISTS=6]="ALREADY_EXISTS",kr[kr.PERMISSION_DENIED=7]="PERMISSION_DENIED",kr[kr.UNAUTHENTICATED=16]="UNAUTHENTICATED",kr[kr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",kr[kr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",kr[kr.ABORTED=10]="ABORTED",kr[kr.OUT_OF_RANGE=11]="OUT_OF_RANGE",kr[kr.UNIMPLEMENTED=12]="UNIMPLEMENTED",kr[kr.INTERNAL=13]="INTERNAL",kr[kr.UNAVAILABLE=14]="UNAVAILABLE",kr[kr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Lr}static getOrCreateInstance(){return null===Lr&&(Lr=new Rr),Lr}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Lr=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new a.e([4294967295,4294967295],0);function Vr(e){const t=jr().encode(e),n=new a.f;return n.update(t),new Uint8Array(n.digest())}function Br(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new a.e([n,r],0),new a.e([i,s],0)]}class Ur{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new qr("Invalid padding: "+t);if(n<0)throw new qr("Invalid hash count: "+n);if(e.length>0&&0===this.hashCount)throw new qr("Invalid hash count: "+n);if(0===e.length&&0!==t)throw new qr("Invalid padding when bitmap length is 0: "+t);this.It=8*e.length-t,this.Tt=a.e.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(a.e.fromNumber(n)));return 1===r.compare(Fr)&&(r=new a.e([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=Vr(e),[n,r]=Br(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Ur(i,r,t);return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.It)return;const t=Vr(e),[n,r]=Br(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class qr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,$r.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new zr(V.min(),r,new Ye(R),jn(),Kn())}}class $r{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new $r(n,t,Kn(),Kn(),Kn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Kr{constructor(e,t){this.targetId=e,this.Vt=t}}class Qr{constructor(e,t,n=ot.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Hr{constructor(){this.St=0,this.Dt=Yr(),this.Ct=ot.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Kn(),t=Kn(),n=Kn();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new $r(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Yr()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Wr{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=jn(),this.zt=Xr(),this.Wt=new Ye(R)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((e,n)=>{this.te(n)&&t(n)})}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const s=i.target;if(fn(s))if(0===r){const e=new $(s.path);this.Yt(n,e,Ft.newNoDocument(e,V.min()))}else w(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Rr.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=lt(i).toUint8Array()}catch(e){if(e instanceof it)return g("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Ur(a,s,o)}catch(e){return g(e instanceof qr?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)}),r}ce(e){const t=new Map;this.Qt.forEach((n,r)=>{const i=this.se(r);if(i){if(n.current&&fn(i.target)){const t=new $(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,Ft.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}});let n=Kn();this.zt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.jt.forEach((t,n)=>n.setReadTime(e));const r=new zr(e,t,this.Wt,this.jt,n);return this.jt=jn(),this.zt=Xr(),this.Wt=new Ye(R),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Hr,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new et(R),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Hr),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Xr(){return new Ye($.comparator)}function Yr(){return new Ye($.comparator)}const Jr={asc:"ASCENDING",desc:"DESCENDING"},Zr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ei={and:"AND",or:"OR"};class ti{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ni(e,t){return e.useProto3Json||ge(t)?t:{value:t}}function ri(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ii(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function si(e,t){return ri(e,t.toTimestamp())}function oi(e){return w(!!e),V.fromTimestamp(function(e){const t=ct(e);return new F(t.seconds,t.nanos)}(e))}function ai(e,t){return function(e){return new U(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ci(e){const t=U.fromString(e);return w(Ai(t)),t}function ui(e,t){return ai(e.databaseId,t.path)}function li(e,t){const n=ci(t);if(n.get(1)!==e.databaseId.projectId)throw new E(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $(pi(n))}function hi(e,t){return ai(e.databaseId,t)}function di(e){const t=ci(e);return 4===t.length?U.emptyPath():pi(t)}function fi(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pi(e){return w(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function mi(e,t,n){return{name:ui(e,t),fields:n.value.mapValue.fields}}function gi(e,t,n){const r=li(e,t.name),i=oi(t.updateTime),s=t.createTime?oi(t.createTime):V.min(),o=new Lt({mapValue:{fields:t.fields}}),a=Ft.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function yi(e,t){let n;if(t instanceof br)n={update:mi(e,t.key,t.value)};else if(t instanceof Tr)n={delete:ui(e,t.key)};else if(t instanceof _r)n={update:mi(e,t.key,t.data),updateMask:Ci(t.fieldMask)};else{if(!(t instanceof xr))return v();n={verify:ui(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof nr)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof rr)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof sr)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ar)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw v()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:si(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v()}(e,t.precondition)),n}function vi(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?dr.updateTime(oi(e.updateTime)):void 0!==e.exists?dr.exists(e.exists):dr.none()}(t.currentDocument):dr.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)w("REQUEST_TIME"===t.setToServerValue),n=new nr;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new rr(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new sr(e)}else"increment"in t?n=new ar(e,t.increment):v();const r=z.fromServerFormat(t.fieldPath);return new lr(r,n)}(e,t)):[];if(t.update){t.update.name;const i=li(e,t.update.name),s=new Lt({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new rt(t.map(e=>z.fromServerFormat(e)))}(t.updateMask);return new _r(i,s,e,n,r)}return new br(i,s,n,r)}if(t.delete){const r=li(e,t.delete);return new Tr(r,n)}if(t.verify){const r=li(e,t.verify);return new xr(r,n)}return v()}function wi(e,t){return{documents:[hi(e,t.path)]}}function bi(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=hi(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=hi(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return function e(t){return t instanceof Gt?function(e){if("=="===e.op){if(At(e.value))return{unaryFilter:{field:Ti(e.field),op:"IS_NAN"}};if(Ct(e.value))return{unaryFilter:{field:Ti(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(At(e.value))return{unaryFilter:{field:Ti(e.field),op:"IS_NOT_NAN"}};if(Ct(e.value))return{unaryFilter:{field:Ti(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(e.field),op:Ei(e.op),value:e.value}}}(t):t instanceof Kt?function(t){const n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:Ii(t.op),filters:n}}}(t):v()}(Kt.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Ti(e.field),direction:Si(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ni(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function _i(e){let t=di(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){w(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=xi(e.unaryFilter.field);return Gt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=xi(e.unaryFilter.field);return Gt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=xi(e.unaryFilter.field);return Gt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=xi(e.unaryFilter.field);return Gt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?function(e){return Gt.create(xi(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Kt.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return v()}}(t.compositeFilter.op))}(t):v()}(e);return t instanceof Kt&&Wt(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new qt(xi(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ge(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Vt(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Vt(n,t)}(n.endAt)),vn(t,i,o,s,a,"F",c,u)}function Si(e){return Jr[e]}function Ei(e){return Zr[e]}function Ii(e){return ei[e]}function Ti(e){return{fieldPath:e.canonicalString()}}function xi(e){return z.fromServerFormat(e.fieldPath)}function Ci(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ai(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,n,r,i=V.min(),s=V.min(),o=ot.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.fe=e}}function Ni(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ki(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:ui(e,t.key),fields:t.data.value.mapValue.fields,updateTime:ri(e,t.version.toTimestamp()),createTime:ri(e,t.createTime.toTimestamp())}}(e.fe,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Pi(t.version)};else{if(!t.isUnknownDocument())return v();r.unknownDocument={path:n.path.toArray(),version:Pi(t.version)}}return r}function ki(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Pi(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Mi(e){const t=new F(e.seconds,e.nanoseconds);return V.fromTimestamp(t)}function Ri(e,t){const n=(t.baseMutations||[]).map(t=>vi(e.fe,t));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map(t=>vi(e.fe,t)),i=F.fromMillis(t.localWriteTimeMs);return new Cr(t.batchId,i,n,r)}function Li(e){const t=Mi(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Mi(e.lastLimboFreeSnapshotVersion):V.min();let r;var i;return void 0!==e.query.documents?(w(1===(i=e.query).documents.length),r=Tn(wn(di(i.documents[0])))):r=function(e){return Tn(_i(e))}(e.query),new Di(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,ot.fromBase64String(e.resumeToken))}function ji(e,t){const n=Pi(t.snapshotVersion),r=Pi(t.lastLimboFreeSnapshotVersion);let i;i=fn(t.target)?wi(e.fe,t.target):bi(e.fe,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:hn(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Fi(e){const t=_i({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Cn(t,t.limit,"L"):t}function Vi(e,t){return new Dr(t.largestBatchId,vi(e.fe,t.overlayMutation))}function Bi(e,t){const n=t.path.lastSegment();return[e,we(t.path.popLast()),n]}function Ui(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Pi(r.readTime),documentKey:we(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{getBundleMetadata(e,t){return zi(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Mi(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return zi(e).put({bundleId:(n=t).id,createTime:Pi(oi(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return $i(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Fi(t.bundledQuery),readTime:Mi(t.readTime)};var t})}saveNamedQuery(e,t){return $i(e).put(function(e){return{name:e.name,readTime:Pi(oi(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function zi(e){return Qe(e,"bundles")}function $i(e){return Qe(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const n=t.uid||"";return new Gi(e,n)}getOverlay(e,t){return Ki(e).get(Bi(this.userId,t)).next(e=>e?Vi(this.serializer,e):null)}getOverlays(e,t){const n=Un();return re.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,i)=>{const s=new Dr(t,i);r.push(this.we(e,s))}),re.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(we(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Ki(e).J("collectionPathOverlayIndex",r))}),re.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Un(),i=we(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ki(e).j("collectionPathOverlayIndex",s).next(e=>{for(const t of e){const e=Vi(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=Un();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ki(e).X({index:"collectionGroupOverlayIndex",range:o},(e,t,n)=>{const o=Vi(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}we(e,t){return Ki(e).put(function(e,t,n){const[r,i,s]=Bi(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:yi(e.fe,n.mutation)}}(this.serializer,this.userId,t))}}function Ki(e){return Qe(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(ut(e.integerValue));else if("doubleValue"in e){const n=ut(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),ye(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(""+(n.seconds||"")),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(lt(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Nt(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):v()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),$.fromName(e).path.forEach(e=>{this.ye(t,60),this.be(e,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}function Hi(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Wi(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Hi(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Qi.Ve=new Qi;class Xi{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.De(n.value),n=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ne(n.value),n=t.next();this.ke()}Me(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.De(e);else if(e<2048)this.De(960|e>>>6),this.De(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.De(480|e>>>12),this.De(128|63&e>>>6),this.De(128|63&e);else{const e=t.codePointAt(0);this.De(240|e>>>18),this.De(128|63&e>>>12),this.De(128|63&e>>>6),this.De(128|63&e)}}this.Ce()}$e(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ne(e);else if(e<2048)this.Ne(960|e>>>6),this.Ne(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ne(480|e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e);else{const e=t.codePointAt(0);this.Ne(240|e>>>18),this.Ne(128|63&e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e)}}this.ke()}Oe(e){const t=this.Fe(e),n=Wi(t);this.Be(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Le(e){const t=this.Fe(e),n=Wi(t);this.Be(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}De(e){const t=255&e;0===t?(this.Ue(0),this.Ue(255)):255===t?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;0===t?(this.Ge(0),this.Ge(255)):255===t?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Yi{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class Ji{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Zi{constructor(){this.je=new Xi,this.ze=new Yi(this.je),this.We=new Ji(this.je)}seed(e){this.je.seed(e)}He(e){return 0===e?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Je(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new es(this.indexId,this.documentKey,this.arrayValue,n)}}function ts(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=ns(e.arrayValue,t.arrayValue),0!==n?n:(n=ns(e.directionalValue,t.directionalValue),0!==n?n:$.comparator(e.documentKey,t.documentKey)))}function ns(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const e=t;e.isInequality()?this.Ze=e:this.Xe.push(e)}}tn(e){w(e.collectionGroup===this.collectionId);const t=K(e);if(void 0!==t&&!this.en(t))return!1;const n=Q(e);let r=0,i=0;for(;r<n.length&&this.en(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ze){const e=n[r];if(!this.nn(this.Ze,e)||!this.sn(this.Ye[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ye.length||!this.sn(this.Ye[i++],e))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e){if(0===e.getFilters().length)return[];const t=function e(t){if(w(t instanceof Gt||t instanceof Kt),t instanceof Gt)return t;if(1===t.filters.length)return e(t.filters[0]);const n=t.filters.map(t=>e(t));let r=Kt.create(n,t.op);return r=ls(r),as(r)?r:(w(r instanceof Kt),w(Qt(r)),w(r.filters.length>1),r.filters.reduce((e,t)=>cs(e,t)))}(function e(t){var n,r;if(w(t instanceof Gt||t instanceof Kt),t instanceof Gt){if(t instanceof on){const e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>Gt.create(t.field,"==",e)))||[];return Kt.create(e,"or")}return t}const i=t.filters.map(t=>e(t));return Kt.create(i,t.op)}(e));return w(as(t)),ss(t)||os(t)?[t]:t.getFilters()}function ss(e){return e instanceof Gt}function os(e){return e instanceof Kt&&Wt(e)}function as(e){return ss(e)||os(e)||function(e){if(e instanceof Kt&&Ht(e)){for(const t of e.getFilters())if(!ss(t)&&!os(t))return!1;return!0}return!1}(e)}function cs(e,t){let n;return w(e instanceof Gt||e instanceof Kt),w(t instanceof Gt||t instanceof Kt),n=e instanceof Gt?t instanceof Gt?function(e,t){return Kt.create([e,t],"and")}(e,t):us(e,t):t instanceof Gt?us(t,e):function(e,t){if(w(e.filters.length>0&&t.filters.length>0),Qt(e)&&Qt(t))return Jt(e,t.getFilters());const n=Ht(e)?e:t,r=Ht(e)?t:e,i=n.filters.map(e=>cs(e,r));return Kt.create(i,"or")}(e,t),ls(n)}function us(e,t){if(Qt(t))return Jt(t,e.getFilters());{const n=t.filters.map(t=>cs(e,t));return Kt.create(n,"or")}}function ls(e){if(w(e instanceof Gt||e instanceof Kt),e instanceof Gt)return e;const t=e.getFilters();if(1===t.length)return ls(t[0]);if(Xt(e))return e;const n=t.map(e=>ls(e)),r=[];return n.forEach(t=>{t instanceof Gt?r.push(t):t instanceof Kt&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:Kt.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hs{constructor(){this.rn=new ds}addToCollectionParentIndex(e,t){return this.rn.add(t),re.resolve()}getCollectionParents(e,t){return re.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return re.resolve()}deleteFieldIndex(e,t){return re.resolve()}getDocumentsMatchingTarget(e,t){return re.resolve(null)}getIndexType(e,t){return re.resolve(0)}getFieldIndexes(e,t){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,t){return re.resolve(J.min())}getMinOffsetFromCollectionGroup(e,t){return re.resolve(J.min())}updateCollectionGroup(e,t,n){return re.resolve()}updateIndexEntries(e,t){return re.resolve()}}class ds{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new et(U.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new et(U.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Uint8Array(0);class ps{constructor(e,t){this.user=e,this.databaseId=t,this.on=new ds,this.un=new Rn(e=>hn(e),(e,t)=>dn(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const i={collectionId:n,parent:we(r)};return ms(e).put(i)}return re.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[j(t),""],!1,!0);return ms(e).j(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Se(r.parent))}return n})}addFieldIndex(e,t){const n=ys(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=vs(e);return i.next(e=>{n.put(Ui(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=ys(e),r=vs(e),i=gs(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const n=gs(e);let r=!0;const i=new Map;return re.forEach(this.cn(t),t=>this.an(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=Kn();const r=[];return re.forEach(i,(i,s)=>{var o;p("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${hn(t)}`);const a=function(e,t){const n=K(t);if(void 0===n)return null;for(const t of pn(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Q(t))for(const t of pn(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Q(t)){const t=0===i.kind?mn(e,i.fieldPath,e.startAt):gn(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Vt(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Q(t)){const t=0===i.kind?gn(e,i.fieldPath,e.endAt):mn(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Vt(n,r)}(s,i),h=this.hn(i,s,u),d=this.hn(i,s,l),f=this.ln(i,s,c),m=this.fn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return re.forEach(m,i=>n.H(i,t.limit).next(t=>{t.forEach(t=>{const n=$.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return re.resolve(null)})}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:is(Kt.create(e.filters,"and")).map(t=>ln(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.dn(t[l/c]):fs,h=this.wn(e,a,n[l%c],r),d=this._n(e,a,i[l%c],s),f=o.map(t=>this.wn(e,a,t,!0));u.push(...this.createRange(h,d,f))}return u}wn(e,t,n,r){const i=new es(e,$.empty(),t,n);return r?i:i.Je()}_n(e,t,n,r){const i=new es(e,$.empty(),t,n);return r?i.Je():i}an(e,t){const n=new rs(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.tn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.cn(t);return re.forEach(r,t=>this.an(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new et(z.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n)}mn(e,t){const n=new Zi;for(const r of Q(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.He(r.kind);Qi.Ve._e(e,i)}return n.Qe()}dn(e){const t=new Zi;return Qi.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const n=new Zi;return Qi.Ve._e(It(this.databaseId,t),n.He(function(e){const t=Q(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Qe()}ln(e,t,n){if(null===n)return[];let r=[];r.push(new Zi);let i=0;for(const s of Q(e)){const e=n[i++];for(const n of r)if(this.yn(t,s.fieldPath)&&xt(e))r=this.pn(r,s,e);else{const t=n.He(s.kind);Qi.Ve._e(e,t)}}return this.In(r)}hn(e,t,n){return this.ln(e,t,n.position)}In(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Qe();return t}pn(e,t,n){const r=[...e],i=[];for(const e of n.arrayValue.values||[])for(const n of r){const r=new Zi;r.seed(n.Qe()),Qi.Ve._e(e,r.He(t.kind)),i.push(r)}return i}yn(e,t){return!!e.filters.find(e=>e instanceof Gt&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=ys(e),r=vs(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next(e=>{const t=[];return re.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new W(t.sequenceNumber,new J(Mi(t.readTime),new $(Se(t.documentKey)),t.largestBatchId)):W.empty(),r=e.fields.map(([e,t])=>new H(z.fromServerFormat(e),t));return new G(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:R(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=ys(e),i=vs(e);return this.Tn(e).next(e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>re.forEach(t,t=>i.put(Ui(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return re.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?re.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),re.forEach(i,n=>this.En(e,t,n).next(t=>{const i=this.An(r,n);return t.isEqual(i)?re.resolve():this.vn(e,r,n,t,i)}))))})}Rn(e,t,n,r){return gs(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,n,r){return gs(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}En(e,t,n){const r=gs(e);let i=new et(ts);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},(e,r)=>{i=i.add(new es(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}An(e,t){let n=new et(ts);const r=this.mn(t,e);if(null==r)return n;const i=K(t);if(null!=i){const s=e.data.field(i.fieldPath);if(xt(s))for(const i of s.arrayValue.values||[])n=n.add(new es(t.indexId,e.key,this.dn(i),r))}else n=n.add(new es(t.indexId,e.key,fs,r));return n}vn(e,t,n,r,i){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=nt(s),c=nt(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=nt(o)):t?(i(a),a=nt(s)):(a=nt(s),c=nt(o))}}(r,i,ts,r=>{s.push(this.Rn(e,t,n,r))},r=>{s.push(this.Pn(e,t,n,r))}),re.waitFor(s)}Tn(e){let t=1;return vs(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>ts(e,t)).filter((e,t,n)=>!t||0!==ts(e,n[t-1]));const r=[];r.push(e);for(const i of n){const n=ts(i,e),s=ts(i,t);if(0===n)r[0]=e.Je();else if(n>0&&s<0)r.push(i),r.push(i.Je());else if(s>0)break}r.push(t);const i=[];for(let e=0;e<r.length;e+=2){if(this.bn(r[e],r[e+1]))return[];const t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,fs,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,fs,[]];i.push(IDBKeyRange.bound(t,n))}return i}bn(e,t){return ts(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ws)}getMinOffset(e,t){return re.mapArray(this.cn(t),t=>this.an(e,t).next(e=>e||v())).next(ws)}}function ms(e){return Qe(e,"collectionParents")}function gs(e){return Qe(e,"indexEntries")}function ys(e){return Qe(e,"indexConfiguration")}function vs(e){return Qe(e,"indexState")}function ws(e){w(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Z(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new J(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class _s{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new _s(e,_s.DEFAULT_COLLECTION_PERCENTILE,_s.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{w(1===a)}));const u=[];for(const e of n.mutations){const r=Te(t,e.key.path,n.batchId);s.push(i.delete(r)),u.push(e.key)}return re.waitFor(s).next(()=>u)}function Es(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw v();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_s.DEFAULT_COLLECTION_PERCENTILE=10,_s.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_s.DEFAULT=new _s(41943040,_s.DEFAULT_COLLECTION_PERCENTILE,_s.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_s.DISABLED=new _s(-1,0,0);class Is{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Vn={}}static de(e,t,n,r){w(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Is(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xs(e).X({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=Cs(e),s=xs(e);return s.add({}).next(o=>{w("number"==typeof o);const a=new Cr(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>yi(e.fe,t)),i=n.mutations.map(t=>yi(e.fe,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new et((e,t)=>R(e.canonicalString(),t.canonicalString()));for(const e of r){const t=Te(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,xe))}return l.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Vn[o]=a.keys()}),re.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return xs(e).get(t).next(e=>e?(w(e.userId===this.userId),Ri(this.serializer,e)):null)}Sn(e,t){return this.Vn[t]?re.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Vn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return xs(e).X({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(w(t.batchId>=n),i=Ri(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return xs(e).X({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return xs(e).j("userMutationsIndex",t).next(e=>e.map(e=>Ri(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ie(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Cs(e).X({range:r},(n,r,s)=>{const[o,a,c]=n,u=Se(a);if(o===this.userId&&t.path.isEqual(u))return xs(e).get(c).next(e=>{if(!e)throw v();w(e.userId===this.userId),i.push(Ri(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new et(R);const r=[];return t.forEach(t=>{const i=Ie(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Cs(e).X({range:s},(e,r,i)=>{const[s,o,a]=e,c=Se(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),re.waitFor(r).next(()=>this.Dn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Ie(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new et(R);return Cs(e).X({range:s},(e,t,i)=>{const[s,a,c]=e,u=Se(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.Dn(e,o))}Dn(e,t){const n=[],r=[];return t.forEach(t=>{r.push(xs(e).get(t).next(e=>{if(null===e)throw v();w(e.userId===this.userId),n.push(Ri(this.serializer,e))}))}),re.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return Ss(e.ht,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),re.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return re.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Cs(e).X({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=Se(e[1]);r.push(t)}else n.done()}).next(()=>{w(0===r.length)})})}containsKey(e,t){return Ts(e,this.userId,t)}xn(e){return As(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ts(e,t,n){const r=Ie(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Cs(e).X({range:s,Y:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function xs(e){return Qe(e,"mutations")}function Cs(e){return Qe(e,"documentMutations")}function As(e){return Qe(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ds(0)}static Mn(){return new Ds(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const n=new Ds(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(e=>V.fromTimestamp(new F(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.$n(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(n=>(n.targetCount+=1,this.Bn(t,n),this.On(e,n))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ns(e).delete(t.targetId)).next(()=>this.$n(e)).next(t=>(w(t.targetCount>0),t.targetCount-=1,this.On(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return Ns(e).X((s,o)=>{const a=Li(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>re.waitFor(i)).next(()=>r)}forEachTarget(e,t){return Ns(e).X((e,n)=>{const r=Li(n);t(r)})}$n(e){return ks(e).get("targetGlobalKey").next(e=>(w(null!==e),e))}On(e,t){return ks(e).put("targetGlobalKey",t)}Fn(e,t){return Ns(e).put(ji(this.serializer,t))}Bn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.$n(e).next(e=>e.targetCount)}getTargetData(e,t){const n=hn(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Ns(e).X({range:r,index:"queryTargetsIndex"},(e,n,r)=>{const s=Li(n);dn(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=Ps(e);return t.forEach(t=>{const s=we(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),re.waitFor(r)}removeMatchingKeys(e,t,n){const r=Ps(e);return re.forEach(t,t=>{const i=we(t.path);return re.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=Ps(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Ps(e);let i=Kn();return r.X({range:n,Y:!0},(e,t,n)=>{const r=Se(e[1]),s=new $(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=we(t.path),r=IDBKeyRange.bound([n],[j(n)],!1,!0);let i=0;return Ps(e).X({index:"documentTargetsIndex",Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}le(e,t){return Ns(e).get(t).next(e=>e?Li(e):null)}}function Ns(e){return Qe(e,"targets")}function ks(e){return Qe(e,"targetGlobal")}function Ps(e){return Qe(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms([e,t],[n,r]){const i=R(e,n);return 0===i?R(t,r):i}class Rs{constructor(e){this.Ln=e,this.buffer=new et(Ms),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ms(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ls{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(e){p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ce(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ne(e)}await this.Qn(3e5)})}}class js{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return re.resolve(me.ct);const n=new Rs(t);return this.jn.forEachTarget(e,e=>n.Kn(e.sequenceNumber)).next(()=>this.jn.Wn(e,e=>n.Kn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),re.resolve(bs)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bs):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s.a.DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),re.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}function Fs(e,t){return new js(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.db=e,this.garbageCollector=Fs(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Jn(e){let t=0;return this.Wn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(e,n)=>t(n))}addReference(e,t,n){return Bs(e,n)}removeReference(e,t,n){return Bs(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Bs(e,t)}Xn(e,t){return function(e,t){let n=!1;return As(e).Z(r=>Ts(e,r,t).next(e=>(e&&(n=!0),re.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Yn(e,(s,o)=>{if(o<=t){const t=this.Xn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,V.min()),Ps(e).delete([0,we(s.path)])))});r.push(t)}}).next(()=>re.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Bs(e,t)}Yn(e,t){const n=Ps(e);let r,i=me.ct;return n.X({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==me.ct&&t(new $(Se(r)),i),i=o,r=s):i=me.ct}).next(()=>{i!==me.ct&&t(new $(Se(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Bs(e,t){return Ps(e).put(function(e,t){return{targetId:0,path:we(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.changes=new Rn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?re.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Ks(e).put(n)}removeEntry(e,t,n){return Ks(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],ki(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Zn(e,n)))}getEntry(e,t){let n=Ft.newInvalidDocument(t);return Ks(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Qs(t))},(e,r)=>{n=this.ts(t,r)}).next(()=>n)}es(e,t){let n={size:0,document:Ft.newInvalidDocument(t)};return Ks(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Qs(t))},(e,r)=>{n={document:this.ts(t,r),size:Es(r)}}).next(()=>n)}getEntries(e,t){let n=jn();return this.ns(e,t,(e,t)=>{const r=this.ts(e,t);n=n.insert(e,r)}).next(()=>n)}ss(e,t){let n=jn(),r=new Ye($.comparator);return this.ns(e,t,(e,t)=>{const i=this.ts(e,t);n=n.insert(e,i),r=r.insert(e,Es(t))}).next(()=>({documents:n,rs:r}))}ns(e,t,n){if(t.isEmpty())return re.resolve();let r=new et(Ws);t.forEach(e=>r=r.add(e));const i=IDBKeyRange.bound(Qs(r.first()),Qs(r.last())),s=r.getIterator();let o=s.getNext();return Ks(e).X({index:"documentKeyIndex",range:i},(e,t,r)=>{const i=$.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Ws(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(Qs(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),ki(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ks(e).j(IDBKeyRange.bound(s,o,!0)).next(e=>{let n=jn();for(const i of e){const e=this.ts($.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(Nn(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=jn();const s=Hs(t,n),o=Hs(t,J.max());return Ks(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.ts($.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new $s(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Gs(e).get("remoteDocumentGlobalKey").next(e=>(w(!!e),e))}Zn(e,t){return Gs(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const e=function(e,t){let n;if(t.document)n=gi(e.fe,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=$.fromSegments(t.noDocument.path),r=Mi(t.noDocument.readTime);n=Ft.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return v();{const e=$.fromSegments(t.unknownDocument.path),r=Mi(t.unknownDocument.version);n=Ft.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new F(e[0],e[1]);return V.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(V.min()))return e}return Ft.newInvalidDocument(e)}}function zs(e){return new qs(e)}class $s extends Us{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new Rn(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new et((e,t)=>R(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.us.get(i);if(t.push(this.os.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Ni(this.os.serializer,s);r=r.add(i.path.popLast());const c=Es(a);n+=c-o.size,t.push(this.os.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Ni(this.os.serializer,s.convertToNoDocument(V.min()));t.push(this.os.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.os.updateMetadata(e,n)),re.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(e=>(this.us.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:e,rs:t})=>(t.forEach((t,n)=>{this.us.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function Gs(e){return Qe(e,"remoteDocumentGlobal")}function Ks(e){return Qe(e,"remoteDocumentsV14")}function Qs(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Hs(e,t){const n=t.documentKey.path.toArray();return[e,ki(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Ws(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=R(n[e],r[e]),i)return i;return i=R(n.length,r.length),i||(i=R(n[n.length-2],r[r.length-2]),i||R(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Xs{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&yr(n.mutation,e,rt.empty(),F.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Kn()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Kn()){const r=Un();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Vn();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Un();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Kn()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=jn();const s=zn(),o=zn();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof _r)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),yr(o.mutation,t,o.mutation.getFieldMask(),F.now())):s.set(t.key,rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new Xs(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=zn();let r=new Ye((e,t)=>e-t),i=Kn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||rt.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Kn()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=qn();c.forEach(e=>{if(!i.has(e)){const r=mr(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return re.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return function(e){return $.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):En(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):re.resolve(Un());let o=-1,a=i;return s.next(t=>re.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?re.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,Kn())).next(e=>({batchId:o,changes:Bn(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(e=>{let t=Vn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Vn();return this.indexManager.getCollectionParents(e,r).next(s=>re.forEach(s,s=>{const o=function(e,t){return new yn(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Ft.newInvalidDocument(r)))});let n=Vn();return e.forEach((e,i)=>{const s=r.get(e);void 0!==s&&yr(s.mutation,i,rt.empty(),F.now()),Nn(t,i)&&(n=n.insert(e,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return re.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:oi(n.createTime)}),re.resolve()}getNamedQuery(e,t){return re.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:Fi(e.bundledQuery),readTime:oi(e.readTime)}}(t)),re.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.overlays=new Ye($.comparator),this.ls=new Map}getOverlay(e,t){return re.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Un();return re.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.we(e,t,r)}),re.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.ls.delete(n)),re.resolve()}getOverlaysForCollection(e,t,n){const r=Un(),i=t.length+1,s=new $(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return re.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ye((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Un(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Un(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return re.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Dr(t,n));let i=this.ls.get(t);void 0===i&&(i=Kn(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.fs=new et(to.ds),this.ws=new et(to._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new to(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ys(new to(e,t))}ps(e,t){e.forEach(e=>this.removeReference(e,t))}Is(e){const t=new $(new U([])),n=new to(t,e),r=new to(t,e+1),i=[];return this.ws.forEachInRange([n,r],e=>{this.ys(e),i.push(e.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new $(new U([])),n=new to(t,e),r=new to(t,e+1);let i=Kn();return this.ws.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new to(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class to{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return $.comparator(e.key,t.key)||R(e.As,t.As)}static _s(e,t){return R(e.As,t.As)||$.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new et(to.ds)}checkEmpty(e){return re.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Cr(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.Rs=this.Rs.add(new to(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return re.resolve(s)}lookupMutationBatch(e,t){return re.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return re.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new to(t,0),r=new to(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],e=>{const t=this.Ps(e.As);i.push(t)}),re.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new et(R);return t.forEach(e=>{const t=new to(e,0),r=new to(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],e=>{n=n.add(e.As)})}),re.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;$.isDocumentKey(i)||(i=i.child(""));const s=new to(new $(i),0);let o=new et(R);return this.Rs.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)},s),re.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach(e=>{const n=this.Ps(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){w(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return re.forEach(t.mutations,r=>{const i=new to(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=n})}Cn(e){}containsKey(e,t){const n=new to(t,0),r=this.Rs.firstAfterOrEqual(n);return re.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.Ds=e,this.docs=new Ye($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return re.resolve(n?n.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let n=jn();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ft.newInvalidDocument(e))}),re.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=jn();const s=t.path,o=new $(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Z(Y(o),n)<=0||(r.has(o.key)||Nn(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return re.resolve(i)}getAllFromCollectionGroup(e,t,n,r){v()}Cs(e,t){return re.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new io(this)}getSize(e){return re.resolve(this.size)}}class io extends Us{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)}),re.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.persistence=e,this.xs=new Rn(e=>hn(e),dn),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Ns=0,this.ks=new eo,this.targetCount=0,this.Ms=Ds.kn()}forEachTarget(e,t){return this.xs.forEach((e,n)=>t(n)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),re.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Ds(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,re.resolve()}updateTargetData(e,t){return this.Fn(t),re.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),re.waitFor(i).next(()=>r)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return re.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),re.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),re.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),re.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return re.resolve(n)}containsKey(e,t){return re.resolve(this.ks.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){this.$s={},this.overlays={},this.Os=new me(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new so(this),this.indexManager=new hs,this.remoteDocumentCache=function(e){return new ro(e)}(e=>this.referenceDelegate.Ls(e)),this.serializer=new Oi(t),this.qs=new Js(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zs,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new no(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new ao(this.Os.next());return this.referenceDelegate.Us(),n(r).next(e=>this.referenceDelegate.Ks(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gs(e,t){return re.or(Object.values(this.$s).map(n=>()=>n.containsKey(e,t)))}}class ao extends te{constructor(e){super(),this.currentSequenceNumber=e}}class co{constructor(e){this.persistence=e,this.Qs=new eo,this.js=null}static zs(e){return new co(e)}get Ws(){if(this.js)return this.js;throw v()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),re.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),re.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),re.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(e=>this.Ws.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ws.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.Ws,n=>{const r=$.fromPath(n);return this.Hs(e,r).next(e=>{e||t.removeEntry(r,V.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return re.or([()=>re.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.serializer=e}O(e,t,n,r){const i=new ie("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ee,{unique:!0}),e.createObjectStore("documentMutations")}(e),lo(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=re.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),lo(e)),s=s.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:V.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store("mutations").j().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ee,{unique:!0});const r=t.store("mutations"),i=n.map(e=>r.put(e));return re.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Ys(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i)))),n<7&&r>=7&&(s=s.next(()=>this.Zs(i))),n<8&&r>=8&&(s=s.next(()=>this.ti(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(s=s.next(()=>this.ei(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Fe});t.createIndex("collectionPathOverlayIndex",Ve,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Be,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Ce});t.createIndex("documentKeyIndex",Ae),t.createIndex("collectionGroupIndex",De)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.si(e,i))),n<15&&r>=15&&(s=s.next(()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Me}).createIndex("sequenceNumberIndex",Re,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Le}).createIndex("documentKeyIndex",je,{unique:!1})}(e))),s}Xs(e){let t=0;return e.store("remoteDocuments").X((e,n)=>{t+=Es(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Ys(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next(t=>re.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next(n=>re.forEach(n,n=>{w(n.userId===t.userId);const r=Ri(this.serializer,n);return Ss(e,t.userId,r).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const r=[];return n.X((n,i)=>{const s=new U(n),o=function(e){return[0,we(e)]}(s);r.push(t.get(o).next(n=>n?re.resolve():(n=>t.put({targetId:0,path:we(n),sequenceNumber:e.highestListenSequenceNumber}))(s)))}).next(()=>re.waitFor(r))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:Pe});const n=t.store("collectionParents"),r=new ds,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:we(r)})}};return t.store("remoteDocuments").X({Y:!0},(e,t)=>{const n=new U(e);return i(n.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([e,t,n],r)=>{const s=Se(t);return i(s.popLast())}))}ei(e){const t=e.store("targets");return t.X((e,n)=>{const r=Li(n),i=ji(this.serializer,r);return t.put(i)})}ni(e,t){const n=t.store("remoteDocuments"),r=[];return n.X((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new $(U.fromString(o.document.name).popFirst(5)):o.noDocument?$.fromSegments(o.noDocument.path):o.unknownDocument?$.fromSegments(o.unknownDocument.path):v()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>re.waitFor(r))}si(e,t){const n=t.store("mutations"),r=zs(this.serializer),i=new oo(co.zs,this.serializer.fe);return n.j().next(e=>{const n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Kn();Ri(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),re.forEach(n,(e,n)=>{const s=new u(n),o=Gi.de(this.serializer,s),a=i.getIndexManager(s),c=Is.de(s,this.serializer,a,i.referenceDelegate);return new Ys(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Ke(t,me.ct),e).next()})})}}function lo(e){e.createObjectStore("targetDocuments",{keyPath:Ne}).createIndex("documentTargetsIndex",ke,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Oe,{unique:!0}),e.createObjectStore("targetGlobal")}const ho="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fo{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ii=i,this.window=s,this.document=o,this.ri=c,this.oi=u,this.ui=l,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!fo.D())throw new E(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Vs(this,r),this.di=t+"main",this.serializer=new Oi(a),this.wi=new se(this.di,this.ui,new uo(this.serializer)),this.Bs=new Os(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zs(this.serializer),this.qs=new qi,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(S.FAILED_PRECONDITION,ho);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new me(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>mo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(ce(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return po(e).get("owner").next(e=>re.resolve(this.Ri(e)))}Pi(e){return mo(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Qe(e,"clientMetadata");return t.j().next(e=>{const n=this.Si(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return re.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?re.resolve(!0):po(e).get("owner").next(t=>{if(null!==t&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new E(S.FAILED_PRECONDITION,ho);return!1}}return!(!this.networkEnabled||!this.inForeground)||mo(e).j().next(e=>void 0===this.Si(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ke(e,me.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(e=>this.Vi(e.updateTimeMs,t)&&!this.Ci(e.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>mo(e).j().next(e=>this.Si(e,18e5).map(e=>e.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return Is.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ps(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Gi.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.ui)?Ge:14===s?$e:13===s?ze:12===s?qe:11===s?Ue:void v();var s;let o;return this.wi.runTransaction(e,r,i,r=>(o=new Ke(r,this.Os?this.Os.next():me.ct),"readwrite-primary"===t?this.Ti(o).next(e=>!!e||this.Ei(o)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new E(S.FAILED_PRECONDITION,ee);return n(o)}).next(e=>this.vi(o).next(()=>e)):this.Oi(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}Oi(e){return po(e).get("owner").next(e=>{if(null!==e&&this.Vi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.Ri(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new E(S.FAILED_PRECONDITION,ho)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return po(e).put("owner",t)}static D(){return se.D()}Ai(e){const t=po(e);return t.get("owner").next(e=>this.Ri(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):re.resolve())}Vi(e,t){const n=Date.now();return!(e<n-t||e>n&&(m(`Detected an update time that is in the future: ${e} > ${n}`),1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();const e=/(?:Version|Mobile)\/1[456]/;Object(o.p)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Di(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(e){}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function po(e){return Qe(e,"owner")}function mo(e){return Qe(e,"clientMetadata")}function go(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yo{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=Kn(),r=Kn();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new yo(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next(i=>i||this.Gi(e,t,r,n)).next(n=>n||this.Qi(e,t))}Ki(e,t){if(bn(t))return re.resolve(null);let n=Tn(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Cn(t,null,"F"),n=Tn(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=Kn(...r);return this.Ui.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,Cn(t,null,"F")):this.Wi(e,s,t,n)}))})))}Gi(e,t,n,r){return bn(t)||r.isEqual(V.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next(i=>{const o=this.ji(t,i);return this.zi(t,o,n,r)?this.Qi(e,t):(d()<=s.a.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),On(t)),this.Wi(e,o,t,X(r,-1)))})}ji(e,t){let n=new et(Pn(e));return t.forEach((t,r)=>{Nn(e,r)&&(n=n.add(r))}),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return d()<=s.a.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",On(t)),this.Ui.getDocumentsMatchingQuery(e,t,J.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Ye(R),this.Yi=new Rn(e=>hn(e),dn),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ys(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function bo(e,t,n,r){return new wo(e,t,n,r)}async function _o(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=Kn();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({er:e,removedBatchIds:i,addedBatchIds:s}))})})}function So(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Bs.getLastRemoteSnapshotVersion(e))}function Eo(e,t,n){let r=Kn(),i=Kn();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=jn();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(V.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{nr:r,sr:i}})}function Io(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function To(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Bs.getTargetData(e,t).next(i=>i?(r=i,re.resolve(r)):n.Bs.allocateTargetId(e).next(i=>(r=new Di(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e})}async function xo(e,t,n){const r=_(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!ce(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Co(e,t,n){const r=_(e);let i=V.min(),s=Kn();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=_(e),i=r.Yi.get(n);return void 0!==i?re.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,Tn(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:V.min(),n?s:Kn())).next(e=>(Oo(r,kn(t),e),{documents:e,ir:s})))}function Ao(e,t){const n=_(e),r=_(n.Bs),i=n.Ji.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.le(e,t).next(e=>e?e.target:null))}function Do(e,t){const n=_(e),r=n.Xi.get(t)||V.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.Zi.getAllFromCollectionGroup(e,t,X(r,-1),Number.MAX_SAFE_INTEGER)).then(e=>(Oo(n,t,e),e))}function Oo(e,t,n){let r=e.Xi.get(t)||V.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Xi.set(t,r)}async function No(e,t,n=Kn()){const r=await To(e,Tn(Fi(t.bundledQuery))),i=_(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=oi(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.qs.saveNamedQuery(e,t);const o=r.withResumeToken(ot.EMPTY_BYTE_STRING,s);return i.Ji=i.Ji.insert(o.targetId,o),i.Bs.updateTargetData(e,o).next(()=>i.Bs.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Bs.addMatchingKeys(e,n,r.targetId)).next(()=>i.qs.saveNamedQuery(e,t))})}function ko(e,t){return`firestore_clients_${e}_${t}`}function Po(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function Mo(e,t){return`firestore_targets_${e}_${t}`}class Ro{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static ar(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new E(r.error.code,r.error.message))),s?new Ro(e,t,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Lo{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static ar(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new E(n.error.code,n.error.message))),i?new Lo(e,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class jo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Hn();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=ve(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new jo(e,i):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Fo{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Fo(t.clientId,t.onlineState):(m("SharedClientState","Failed to parse online state: "+e),null)}}class Vo{constructor(){this.activeTargetIds=Hn()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bo{constructor(e,t,n,r,i){this.window=e,this.ii=t,this.persistenceKey=n,this.wr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Ye(R),this.started=!1,this.yr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=ko(this.persistenceKey,this.wr),this.Ir=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.gr=this.gr.insert(this.wr,new Vo),this.Tr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.vr=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.Rr=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const t of e){if(t===this.wr)continue;const e=this.getItem(ko(this.persistenceKey,t));if(e){const n=jo.ar(t,e);n&&(this.gr=this.gr.insert(n.clientId,n))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const e=this.br(t);e&&this.Vr(e)}for(const e of this.yr)this.mr(e);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,n){this.Dr(e,t,n),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Mo(this.persistenceKey,e));if(n){const r=Lo.ar(e,n);r&&(t=r.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Mo(this.persistenceKey,e))}updateQueryState(e,t,n){this.kr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Cr(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Tr.test(t.key)){if(null==t.newValue){const e=this.Or(t.key);return this.Fr(e,null)}{const e=this.Br(t.key,t.newValue);if(e)return this.Fr(e.clientId,e)}}else if(this.Er.test(t.key)){if(null!==t.newValue){const e=this.Lr(t.key,t.newValue);if(e)return this.qr(e)}}else if(this.Ar.test(t.key)){if(null!==t.newValue){const e=this.Ur(t.key,t.newValue);if(e)return this.Kr(e)}}else if(t.key===this.vr){if(null!==t.newValue){const e=this.br(t.newValue);if(e)return this.Vr(e)}}else if(t.key===this.Ir){const e=function(e){let t=me.ct;if(null!=e)try{const n=JSON.parse(e);w("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==me.ct&&this.sequenceNumberHandler(e)}else if(t.key===this.Rr){const e=this.Gr(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Qr(e)))}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,n){const r=new Ro(this.currentUser,e,t,n),i=Po(this.persistenceKey,this.currentUser,e);this.setItem(i,r.hr())}Cr(e){const t=Po(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,n){const r=Mo(this.persistenceKey,e),i=new Lo(e,t,n);this.setItem(r,i.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const n=this.Or(e);return jo.ar(n,t)}Lr(e,t){const n=this.Er.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Ro.ar(new u(i),r,t)}Ur(e,t){const n=this.Ar.exec(e),r=Number(n[1]);return Lo.ar(r,t)}br(e){return Fo.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const n=t?this.gr.insert(e,t):this.gr.remove(e),r=this.Sr(this.gr),i=this.Sr(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.Wr(s,o).then(()=>{this.gr=n})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=Hn();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Uo{constructor(){this.Hr=new Vo,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Vo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o=null;function Go(){return null===$o?$o=268435456+Math.round(2147483648*Math.random()):$o++,"0x"+$o.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ko={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="WebChannelConnection";class Wo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const s=Go(),o=this.To(e,t);p("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(e,o,a,n).then(t=>(p("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw g("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}To(e,t){const n=Ko[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=Go();return new Promise((s,o)=>{const c=new a.i;c.setWithCredentials(!0),c.listenOnce(a.c.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case a.a.NO_ERROR:const t=c.getResponseJson();p(Ho,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case a.a.TIMEOUT:p(Ho,`RPC '${e}' ${i} timed out`),o(new E(S.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=c.getStatus();if(p(Ho,`RPC '${e}' ${i} failed with status:`,n,"response text:",c.getResponseText()),n>0){let e=c.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(t)>=0?t:S.UNKNOWN}(t.status);o(new E(e,t.message))}else o(new E(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else o(new E(S.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p(Ho,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);p(Ho,`RPC '${e}' ${i} sending request:`,r),c.send(t,"POST",u,n,15)})}Ro(e,t,n){const r=Go(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Object(a.j)(),o=Object(a.k)(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new a.d({})),this.Eo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const l=i.join("");p(Ho,`Creating RPC '${e}' stream ${r}: ${l}`,c);const h=s.createWebChannel(l,c);let d=!1,f=!1;const m=new Qo({ro:t=>{f?p(Ho,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(p(Ho,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),p(Ho,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},oo:()=>h.close()}),y=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return y(h,a.h.EventType.OPEN,()=>{f||p(Ho,`RPC '${e}' stream ${r} transport opened.`)}),y(h,a.h.EventType.CLOSE,()=>{f||(f=!0,p(Ho,`RPC '${e}' stream ${r} transport closed`),m.wo())}),y(h,a.h.EventType.ERROR,t=>{f||(f=!0,g(Ho,`RPC '${e}' stream ${r} transport errored:`,t),m.wo(new E(S.UNAVAILABLE,"The operation could not be completed")))}),y(h,a.h.EventType.MESSAGE,t=>{var n;if(!f){const i=t.data[0];w(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){p(Ho,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Nr[e];if(void 0!==t)return Mr(t)}(t),i=o.message;void 0===n&&(n=S.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),f=!0,m.wo(new E(n,i)),h.close()}else p(Ho,`RPC '${e}' stream ${r} received:`,i),m._o(i)}}),y(o,a.b.STAT_EVENT,t=>{t.stat===a.g.PROXY?p(Ho,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===a.g.NOPROXY&&p(Ho,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(){return"undefined"!=typeof window?window:null}function Yo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(e){return new ti(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Zo(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===S.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Fo===t&&this.Zo(e,n)},t=>{e(()=>{const e=new E(S.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)})})}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(e=>{n(()=>this.tu(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ta extends ea{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(w(void 0===t||"string"==typeof t),ot.fromBase64String(t||"")):(w(void 0===t||t instanceof Uint8Array),ot.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?S.UNKNOWN:Mr(e.code);return new E(t,e.message||"")}(o);n=new Qr(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=li(e,r.document.name),s=oi(r.document.updateTime),o=r.document.createTime?oi(r.document.createTime):V.min(),a=new Lt({mapValue:{fields:r.document.fields}}),c=Ft.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Gr(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=li(e,r.document),s=r.readTime?oi(r.readTime):V.min(),o=Ft.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Gr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=li(e,r.document),s=r.removedTargetIds||[];n=new Gr([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Or(r,i),o=e.targetId;n=new Kr(o,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return V.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?oi(t.readTime):V.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=fi(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=fn(r)?{documents:wi(e,r)}:{query:bi(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ii(e,t.resumeToken);const r=ni(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(V.min())>0){n.readTime=ri(e,t.snapshotVersion.toTimestamp());const r=ni(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=fi(this.serializer),t.removeTarget=e,this.Wo(t)}}class na extends ea{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(w(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=function(e,t){return e&&e.length>0?(w(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?oi(e.updateTime):oi(t);return n.isEqual(V.min())&&(n=oi(t)),new hr(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=oi(e.commitTime);return this.listener.cu(n,t)}return w(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=fi(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>yi(this.serializer,e))};this.Wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new E(S.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(S.UNKNOWN,e.toString())})}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.vo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(S.UNKNOWN,e.toString())})}terminate(){this.lu=!0}}class ia{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu("Connection failed 1 times. Most recent error: "+e.toString()),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(m(t),this.mu=!1):p("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(e=>{n.enqueueAndForget(async()=>{pa(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t.vu.add(4),await aa(t),t.bu.set("Unknown"),t.vu.delete(4),await oa(t)}(this))})}),this.bu=new ia(n,r)}}async function oa(e){if(pa(e))for(const t of e.Ru)await t(!0)}async function aa(e){for(const t of e.Ru)await t(!1)}function ca(e,t){const n=_(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),fa(n)?da(n):ka(n).Ko()&&la(n,t))}function ua(e,t){const n=_(e),r=ka(n);n.Au.delete(t),r.Ko()&&ha(n,t),0===n.Au.size&&(r.Ko()?r.jo():pa(n)&&n.bu.set("Unknown"))}function la(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(V.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ka(e).su(t)}function ha(e,t){e.Vu.qt(t),ka(e).iu(t)}function da(e){e.Vu=new Wr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),ka(e).start(),e.bu.gu()}function fa(e){return pa(e)&&!ka(e).Uo()&&e.Au.size>0}function pa(e){return 0===_(e).vu.size}function ma(e){e.Vu=void 0}async function ga(e){e.Au.forEach((t,n)=>{la(e,t)})}async function ya(e,t){ma(e),fa(e)?(e.bu.Iu(t),da(e)):e.bu.set("Unknown")}async function va(e,t,n){if(e.bu.set("Online"),t instanceof Qr&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await wa(e,n)}else if(t instanceof Gr?e.Vu.Ht(t):t instanceof Kr?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(V.min()))try{const t=await So(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(ot.EMPTY_BYTE_STRING,r.snapshotVersion)),ha(e,t);const i=new Di(r.target,t,n,r.sequenceNumber);la(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await wa(e,t)}}async function wa(e,t,n){if(!ce(t))throw t;e.vu.add(1),await aa(e),e.bu.set("Offline"),n||(n=()=>So(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await oa(e)})}function ba(e,t){return t().catch(n=>wa(e,n,t))}async function _a(e){const t=_(e),n=Pa(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Sa(t);)try{const e=await Io(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Ea(t,e)}catch(e){await wa(t,e)}Ia(t)&&Ta(t)}function Sa(e){return pa(e)&&e.Eu.length<10}function Ea(e,t){e.Eu.push(t);const n=Pa(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Ia(e){return pa(e)&&!Pa(e).Uo()&&e.Eu.length>0}function Ta(e){Pa(e).start()}async function xa(e){Pa(e).hu()}async function Ca(e){const t=Pa(e);for(const n of e.Eu)t.uu(n.mutations)}async function Aa(e,t,n){const r=e.Eu.shift(),i=Ar.from(r,t,n);await ba(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await _a(e)}async function Da(e,t){t&&Pa(e).ou&&await async function(e,t){if(Pr(n=t.code)&&n!==S.ABORTED){const n=e.Eu.shift();Pa(e).Qo(),await ba(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await _a(e)}var n}(e,t),Ia(e)&&Ta(e)}async function Oa(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=pa(n);n.vu.add(3),await aa(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await oa(n)}async function Na(e,t){const n=_(e);t?(n.vu.delete(2),await oa(n)):t||(n.vu.add(2),await aa(n),n.bu.set("Unknown"))}function ka(e){return e.Su||(e.Su=function(e,t,n){const r=_(e);return r.fu(),new ta(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{uo:ga.bind(null,e),ao:ya.bind(null,e),nu:va.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),fa(e)?da(e):e.bu.set("Unknown")):(await e.Su.stop(),ma(e))})),e.Su}function Pa(e){return e.Du||(e.Du=function(e,t,n){const r=_(e);return r.fu(),new na(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:xa.bind(null,e),ao:Da.bind(null,e),au:Ca.bind(null,e),cu:Aa.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await _a(e)):(await e.Du.stop(),e.Eu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ma{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ma(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ra(e,t){if(m("AsyncQueue",`${t}: ${e}`),ce(e))return new E(S.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(e,t)=>$.comparator(e.key,t.key),this.keyedMap=Vn(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new La(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof La))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new La;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.Cu=new Ye($.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):v():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,n)=>{e.push(n)}),e}}class Fa{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new Fa(e,t,La.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&An(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.Nu=void 0,this.listeners=[]}}class Ba{constructor(){this.queries=new Rn(e=>Dn(e),An),this.onlineState="Unknown",this.ku=new Set}}async function Ua(e,t){const n=_(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Va),i)try{s.Nu=await n.onListen(r)}catch(e){const n=Ra(e,`Initialization of query '${On(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&Ga(n)}async function qa(e,t){const n=_(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function za(e,t){const n=_(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.$u(e)&&(r=!0);i.Nu=e}}r&&Ga(n)}function $a(e,t,n){const r=_(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Ga(e){e.ku.forEach(e=>{e.next()})}class Ka{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Fa(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Fa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.serializer=e}rr(e){return li(this.serializer,e)}ur(e){return e.metadata.exists?gi(this.serializer,e.document,!1):Ft.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return oi(e)}}class Wa{constructor(e,t,n){this.ju=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Xa(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const n=U.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,n=new Ha(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.rr(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Kn()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=_(e);let s=Kn(),o=jn();for(const e of n){const n=t.rr(e.metadata.name);e.document&&(s=s.add(n));const r=t.ur(e);r.setReadTime(t.cr(e.metadata.readTime)),o=o.insert(n,r)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await To(i,function(e){return Tn(wn(U.fromString("__bundle__/docs/"+e)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>Eo(e,a,o).next(t=>(a.apply(e),t)).next(t=>i.Bs.removeMatchingKeysForTargetId(e,c.targetId).next(()=>i.Bs.addMatchingKeys(e,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(e,t.nr,t.sr)).next(()=>t.nr)))}(this.localStore,new Ha(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const e of this.queries)await No(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function Xa(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.key=e}}class Ja{constructor(e){this.key=e}}class Za{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Kn(),this.mutatedKeys=Kn(),this.tc=Pn(e),this.ec=new La(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new ja,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=Nn(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.tc(e.doc,t.doc)),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Fa(this.query,e.ec,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ja,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(e=>this.Yu=this.Yu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Yu=this.Yu.delete(e)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Kn(),this.ec.forEach(e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))});const t=[];return e.forEach(e=>{this.Zu.has(e)||t.push(new Ja(e))}),this.Zu.forEach(n=>{e.has(n)||t.push(new Ya(n))}),t}hc(e){this.Yu=e.ir,this.Zu=Kn();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Fa.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class ec{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class tc{constructor(e){this.key=e,this.fc=!1}}class nc{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new Rn(e=>Dn(e),An),this._c=new Map,this.mc=new Set,this.gc=new Ye($.comparator),this.yc=new Map,this.Ic=new eo,this.Tc={},this.Ec=new Map,this.Ac=Ds.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function rc(e,t){const n=Dc(e);let r,i;const s=n.wc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const e=await To(n.localStore,Tn(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await ic(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&ca(n.remoteStore,e)}return i}async function ic(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await Co(e.localStore,t.query,!1).then(({documents:e})=>t.view.sc(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return mc(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const s=await Co(e.localStore,t,!0),o=new Za(t,s.ir),a=o.sc(s.documents),c=$r.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);mc(e,n,u.cc);const l=new ec(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function sc(e,t){const n=_(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(e=>!An(e,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ua(n.remoteStore,r.targetId),fc(n,r.targetId)}).catch(ne)):(fc(n,r.targetId),await xo(n.localStore,r.targetId,!0))}async function oc(e,t){const n=_(e);try{const e=await function(e,t){const n=_(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(ot.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Bs.updateTargetData(e,u))});let a=jn(),c=Kn();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Eo(e,s,t.documentUpdates).next(e=>{a=e.nr,c=e.sr})),!r.isEqual(V.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next(t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return re.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,c)).next(()=>a)}).then(e=>(n.Ji=i,e))}(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.yc.get(t);r&&(w(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?w(r.fc):e.removedDocuments.size>0&&(w(r.fc),r.fc=!1))}),await vc(n,e,t)}catch(e){await ne(e)}}function ac(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(r=!0)}),r&&Ga(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function cc(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),s=i&&i.key;if(s){let e=new Ye($.comparator);e=e.insert(s,Ft.newNoDocument(s,V.min()));const n=Kn().add(s),i=new zr(V.min(),new Map,new Ye(R),e,n);await oc(r,i),r.gc=r.gc.remove(s),r.yc.delete(t),yc(r)}else await xo(r.localStore,t,!1).then(()=>fc(r,t,n)).catch(ne)}async function uc(e,t){const n=_(e),r=t.batch.batchId;try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=re.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);w(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Kn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);dc(n,r,null),hc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vc(n,e)}catch(e){await ne(e)}}async function lc(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(w(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);dc(r,t,n),hc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await vc(r,e)}catch(n){await ne(n)}}function hc(e,t){(e.Ec.get(t)||[]).forEach(e=>{e.resolve()}),e.Ec.delete(t)}function dc(e,t,n){const r=_(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function fc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(t=>{e.Ic.containsKey(t)||pc(e,t)})}function pc(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(ua(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),yc(e))}function mc(e,t,n){for(const r of n)r instanceof Ya?(e.Ic.addReference(r.key,t),gc(e,r)):r instanceof Ja?(p("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||pc(e,r.key)):v()}function gc(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(p("SyncEngine","New document in limbo: "+n),e.mc.add(r),yc(e))}function yc(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new $(U.fromString(t)),r=e.Ac.next();e.yc.set(r,new tc(n)),e.gc=e.gc.insert(n,r),ca(e.remoteStore,new Di(Tn(wn(n.path)),r,"TargetPurposeLimboResolution",me.ct))}}async function vc(e,t,n){const r=_(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((e,a)=>{o.push(r.Rc(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=yo.Li(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.dc.nu(i),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>re.forEach(t,t=>re.forEach(t.Fi,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>re.forEach(t.Bi,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ce(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,s))}async function wc(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await _o(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach(e=>{e.forEach(e=>{e.reject(new E(S.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ec.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await vc(n,e.er)}}function bc(e,t){const n=_(e),r=n.yc.get(t);if(r&&r.fc)return Kn().add(r.key);{let e=Kn();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}async function _c(e,t){const n=_(e),r=await Co(n.localStore,t.query,!0),i=t.view.hc(r);return n.isPrimaryClient&&mc(n,t.targetId,i.cc),i}async function Sc(e,t){const n=_(e);return Do(n.localStore,t).then(e=>vc(n,e))}async function Ec(e,t,n,r){const i=_(e),s=await function(e,t){const n=_(e),r=_(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Sn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):re.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await _a(i.remoteStore):"acknowledged"===n||"rejected"===n?(dc(i,t,r||null),hc(i,t),function(e,t){_(_(e).mutationQueue).Cn(t)}(i.localStore,t)):v(),await vc(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Ic(e,t,n){const r=_(e),i=[],s=[];for(const e of t){let t;const n=r._c.get(e);if(n&&0!==n.length){t=await To(r.localStore,Tn(n[0]));for(const e of n){const t=r.wc.get(e),n=await _c(r,t);n.snapshot&&s.push(n.snapshot)}}else{const n=await Ao(r.localStore,e);t=await To(r.localStore,n),await ic(r,Tc(n),e,!1,t.resumeToken)}i.push(t)}return r.dc.nu(s),i}function Tc(e){return vn(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function xc(e){const t=_(e);return _(_(t.localStore).persistence).$i()}async function Cc(e,t,n,r){const i=_(e);if(i.vc)return void p("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Do(i.localStore,kn(s[0])),r=zr.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,ot.EMPTY_BYTE_STRING);await vc(i,e,r);break}case"rejected":await xo(i.localStore,t,!0),fc(i,t,r);break;default:v()}}async function Ac(e,t,n){const r=Dc(e);if(r.vc){for(const e of t){if(r._c.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await Ao(r.localStore,e),n=await To(r.localStore,t);await ic(r,Tc(t),n.targetId,!1,n.resumeToken),ca(r.remoteStore,n)}for(const e of n)r._c.has(e)&&await xo(r.localStore,e,!1).then(()=>{ua(r.remoteStore,e),fc(r,e)}).catch(ne)}}function Dc(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=bc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cc.bind(null,t),t.dc.nu=za.bind(null,t.eventManager),t.dc.Pc=$a.bind(null,t.eventManager),t}function Oc(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=lc.bind(null,t),t}class Nc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Jo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return bo(this.persistence,new vo,e.initialUser,this.serializer)}createPersistence(e){return new oo(co.zs,this.serializer)}createSharedClientState(e){return new Uo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kc extends Nc{constructor(e,t,n){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Oc(this.Vc.syncEngine),await _a(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return bo(this.persistence,new vo,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ls(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new pe(t,this.persistence);return new fe(e.asyncQueue,n)}createPersistence(e){const t=go(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?_s.withCacheSize(this.cacheSizeBytes):_s.DEFAULT;return new fo(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Xo(),Yo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Uo}}class Pc extends kc{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof Bo&&(this.sharedClientState.syncEngine={jr:Ec.bind(null,t),zr:Cc.bind(null,t),Wr:Ac.bind(null,t),$i:xc.bind(null,t),Qr:Sc.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async e=>{await async function(e,t){const n=_(e);if(Dc(n),Oc(n),!0===t&&!0!==n.vc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Ic(n,e.toArray());n.vc=!0,await Na(n.remoteStore,!0);for(const e of t)ca(n.remoteStore,e)}else if(!1===t&&!1!==n.vc){const e=[];let t=Promise.resolve();n._c.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(fc(n,i),xo(n.localStore,i,!0))),ua(n.remoteStore,i)}),await t,await Ic(n,e),function(e){const t=_(e);t.yc.forEach((e,n)=>{ua(t.remoteStore,n)}),t.Ic.Ts(),t.yc=new Map,t.gc=new Ye($.comparator)}(n),n.vc=!1,await Na(n.remoteStore,!1)}}(this.Vc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Xo();if(!Bo.D(t))throw new E(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=go(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Bo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Mc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ac(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=wc.bind(null,this.syncEngine),await Na(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ba}createDatastore(e){const t=Jo(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Wo(r));var r;return function(e,t,n,r){return new ra(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>ac(this.syncEngine,e,0),s=zo.D()?new zo:new qo,new sa(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new nc(e,t,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);p("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await aa(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):m("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new I,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(e=>{e&&e.Qu()?this.metadata.resolve(e.Gu.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.Gu)))},e=>this.metadata.reject(e))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(null===e)return null;const t=this.xc.decode(e),n=Number(t);isNaN(n)&&this.Mc(`length string (${t}) is not valid number`);const r=await this.$c(n);return new Qa(JSON.parse(r),e.length+n)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(0===this.buffer.length)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error("Invalid bundle format: "+e)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=_(e),r=fi(n.serializer)+"/documents",i={documents:t.map(e=>ui(n.serializer,e))},s=await n.vo("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach(e=>{const t=function(e,t){return"found"in t?function(e,t){w(!!t.found),t.found.name,t.found.updateTime;const n=li(e,t.found.name),r=oi(t.found.updateTime),i=t.found.createTime?oi(t.found.createTime):V.min(),s=new Lt({mapValue:{fields:t.found.fields}});return Ft.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){w(!!t.missing),w(!!t.readTime);const n=li(e,t.missing),r=oi(t.readTime);return Ft.newNoDocument(n,r)}(e,t):v()}(n.serializer,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());w(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Tr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=$.fromPath(t);this.mutations.push(new xr(n,this.precondition(n)))}),await async function(e,t){const n=_(e),r=fi(n.serializer)+"/documents",i={writes:t.map(e=>yi(n.serializer,e))};await n.Io("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw v();t=V.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new E(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(V.min())?dr.exists(!1):dr.updateTime(t):dr.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(V.min()))throw new E(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return dr.updateTime(t)}return dr.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Bc=n.maxAttempts,this.qo=new Zo(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new Fc(this.datastore),t=this.qc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Uc(e)}))}).catch(e=>{this.Uc(e)})})}qc(e){try{const t=this.updateFunction(e);return!ge(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Pr(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=M.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ra(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Uc(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await _o(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function qc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await $c(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>Oa(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Oa(t.remoteStore,n)),e._onlineComponents=t}function zc(e){return"FirebaseError"===e.name?e.code===S.FAILED_PRECONDITION||e.code===S.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function $c(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!zc(n))throw n;g("Error using user provided cache. Falling back to memory cache: "+n),await Uc(e,new Nc)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await Uc(e,new Nc);return e._offlineComponents}async function Gc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await qc(e,e._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await qc(e,new Mc))),e._onlineComponents}function Kc(e){return $c(e).then(e=>e.persistence)}function Qc(e){return $c(e).then(e=>e.localStore)}function Hc(e){return Gc(e).then(e=>e.remoteStore)}function Wc(e){return Gc(e).then(e=>e.syncEngine)}function Xc(e){return Gc(e).then(e=>e.datastore)}async function Yc(e){const t=await Gc(e),n=t.eventManager;return n.onListen=rc.bind(null,t.syncEngine),n.onUnlisten=sc.bind(null,t.syncEngine),n}function Jc(e,t,n={}){const r=new I;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Lc({next:s=>{t.enqueueAndForget(()=>qa(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new E(S.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new E(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Ka(wn(n.path),s,{includeMetadataChanges:!0,Ku:!0});return Ua(e,o)}(await Yc(e),e.asyncQueue,t,n,r)),r.promise}function Zc(e,t,n={}){const r=new I;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Lc({next:n=>{t.enqueueAndForget(()=>qa(e,o)),n.fromCache&&"server"===r.source?i.reject(new E(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Ka(n,s,{includeMetadataChanges:!0,Ku:!0});return Ua(e,o)}(await Yc(e),e.asyncQueue,t,n,r)),r.promise}function eu(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?jr().encode(e):e,function(e,t){return new jc(e,t)}(function(e,t){if(e instanceof Uint8Array)return Rc(e,t);if(e instanceof ArrayBuffer)return Rc(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,Jo(t));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){const r=_(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=_(e),r=oi(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.qs.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Xa(r));const i=new Wa(r,e.localStore,t.serializer);let s=await t.bc();for(;s;){const e=await i.zu(s);e&&n._updateProgress(e),s=await t.bc()}const o=await i.complete();return await vc(e,o.Ju,void 0),await function(e,t){const n=_(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.qs.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Hu)}catch(e){return g("SyncEngine","Loading bundle failed with "+e),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}(await Wc(e),i,r)})}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tu(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const nu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(e,t,n){if(!n)throw new E(S.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function iu(e,t,n,r){if(!0===t&&!0===r)throw new E(S.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function su(e){if(!$.isDocumentKey(e))throw new E(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ou(e){if($.isDocumentKey(e))throw new E(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function au(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":v()}function cu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=au(e);throw new E(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function uu(e,t){if(t<=0)throw new E(S.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new E(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tu(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new E(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new E(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new E(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class hu{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new x;switch(e.type){case"firstParty":return new O(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new E(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=nu.get(e);t&&(p("ComponentProvider","Removing Datastore"),nu.delete(e),t.terminate())}(this),Promise.resolve()}}function du(e,t,n,r={}){var i;const s=(e=cu(e,hu))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=u.MOCK_USER;else{t=Object(o.f)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new E(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new C(new T(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fu(this.firestore,e,this._key)}}class pu{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new pu(this.firestore,e,this._query)}}class mu extends pu{constructor(e,t,n){super(e,t,wn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fu(this.firestore,null,new $(e))}withConverter(e){return new mu(this.firestore,e,this._path)}}function gu(e,t,...n){if(e=Object(o.l)(e),ru("collection","path",t),e instanceof hu){const r=U.fromString(t,...n);return ou(r),new mu(e,null,r)}{if(!(e instanceof fu||e instanceof mu))throw new E(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(U.fromString(t,...n));return ou(r),new mu(e.firestore,null,r)}}function yu(e,t){if(e=cu(e,hu),ru("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new E(S.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new pu(e,null,function(e){return new yn(U.emptyPath(),e)}(t))}function vu(e,t,...n){if(e=Object(o.l)(e),1===arguments.length&&(t=M.A()),ru("doc","path",t),e instanceof hu){const r=U.fromString(t,...n);return su(r),new fu(e,null,new $(r))}{if(!(e instanceof fu||e instanceof mu))throw new E(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(U.fromString(t,...n));return su(r),new fu(e.firestore,e instanceof mu?e.converter:null,new $(r))}}function wu(e,t){return e=Object(o.l)(e),t=Object(o.l)(t),(e instanceof fu||e instanceof mu)&&(t instanceof fu||t instanceof mu)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function bu(e,t){return e=Object(o.l)(e),t=Object(o.l)(t),e instanceof pu&&t instanceof pu&&e.firestore===t.firestore&&An(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _u{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Zo(this,"async_queue_retry"),this.Xc=()=>{const e=Yo();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Yo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Yo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new I;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ce(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(e=>{this.Wc=e,this.Hc=!1;throw m("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.Hc=!1,e))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=Ma.createAndSchedule(this,e,t,n,e=>this.na(e));return this.zc.push(r),r}Zc(){this.Wc&&v()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Su(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}class Eu{constructor(){this._progressObserver={},this._taskCompletionResolver=new I,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=-1;class Tu extends hu{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new _u,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cu(this),this._firestoreClient.terminate()}}function xu(e){return e._firestoreClient||Cu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Cu(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new pt(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,tu(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Bc(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function Au(e,t){ju(e=cu(e,Tu));const n=xu(e);if(n._uninitializedComponentsProvider)throw new E(S.FAILED_PRECONDITION,"SDK cache is already specified.");g("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new Mc;return Ou(n,i,new kc(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Du(e){ju(e=cu(e,Tu));const t=xu(e);if(t._uninitializedComponentsProvider)throw new E(S.FAILED_PRECONDITION,"SDK cache is already specified.");g("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new Mc;return Ou(t,r,new Pc(r,n.cacheSizeBytes))}function Ou(e,t,n){const r=new I;return e.asyncQueue.enqueue(async()=>{try{await Uc(e,n),await qc(e,t),r.resolve()}catch(e){const t=e;if(!zc(t))throw t;g("Error enabling indexeddb cache. Falling back to memory cache: "+t),r.reject(t)}}).then(()=>r.promise)}function Nu(e){if(e._initialized&&!e._terminated)throw new E(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new I;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!se.D())return Promise.resolve();const t=e+"main";await se.delete(t)}(go(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function ku(e){return function(e){const t=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t){const n=_(e);pa(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Ec.get(e)||[];r.push(t),n.Ec.set(e,r)}catch(e){const n=Ra(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}(await Wc(e),t)),t.promise}(xu(e=cu(e,Tu)))}function Pu(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Kc(e),n=await Hc(e);return t.setNetworkEnabled(!0),function(e){const t=_(e);return t.vu.delete(0),oa(t)}(n)})}(xu(e=cu(e,Tu)))}function Mu(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Kc(e),n=await Hc(e);return t.setNetworkEnabled(!1),async function(e){const t=_(e);t.vu.add(0),await aa(t),t.bu.set("Offline")}(n)})}(xu(e=cu(e,Tu)))}function Ru(e,t){const n=xu(e=cu(e,Tu)),r=new Eu;return eu(n,e._databaseId,t,r),r}function Lu(e,t){return function(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=_(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.qs.getNamedQuery(e,t))}(await Qc(e),t))}(xu(e=cu(e,Tu)),t).then(t=>t?new pu(e,null,t.query):null)}function ju(e){if(e._initialized||e._terminated)throw new E(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fu(ot.fromBase64String(e))}catch(e){throw new E(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Fu(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bu{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=/^__.*__$/;class zu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new _r(e,this.data,this.fieldMask,t,this.fieldTransforms):new br(e,this.data,t,this.fieldTransforms)}}class $u{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new _r(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Ku{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Ku(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return dl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Gu(this.ca)&&qu.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Qu{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Jo(e)}ya(e,t,n,r=!1){return new Ku({ca:e,methodName:t,ga:n,path:z.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hu(e){const t=e._freezeSettings(),n=Jo(e._databaseId);return new Qu(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Wu(e,t,n,r,i,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,i);cl("Data must be an object, but it was:",o,r);const a=ol(r,o);let c,u;if(s.merge)c=new rt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=ul(t,r,n);if(!o.contains(i))throw new E(S.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);fl(e,i)||e.push(i)}c=new rt(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new zu(new Lt(a),c,u)}class Xu extends Bu{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(this._methodName+"() can only appear at the top level of your update data"):e._a(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xu}}function Yu(e,t,n){return new Ku({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Ju extends Bu{_toFieldTransform(e){return new lr(e.path,new nr)}isEqual(e){return e instanceof Ju}}class Zu extends Bu{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Yu(this,e,!0),n=this.pa.map(e=>sl(e,t)),r=new rr(n);return new lr(e.path,r)}isEqual(e){return this===e}}class el extends Bu{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Yu(this,e,!0),n=this.pa.map(e=>sl(e,t)),r=new sr(n);return new lr(e.path,r)}isEqual(e){return this===e}}class tl extends Bu{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new ar(e.serializer,Yn(e.serializer,this.Ia));return new lr(e.path,t)}isEqual(e){return this===e}}function nl(e,t,n,r){const i=e.ya(1,t,n);cl("Data must be an object, but it was:",i,r);const s=[],a=Lt.empty();We(r,(e,r)=>{const c=hl(t,e,n);r=Object(o.l)(r);const u=i.da(c);if(r instanceof Xu)s.push(c);else{const e=sl(r,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new rt(s);return new $u(a,c,i.fieldTransforms)}function rl(e,t,n,r,i,s){const a=e.ya(1,t,n),c=[ul(t,r,n)],u=[i];if(s.length%2!=0)throw new E(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)c.push(ul(t,s[e])),u.push(s[e+1]);const l=[],h=Lt.empty();for(let e=c.length-1;e>=0;--e)if(!fl(l,c[e])){const t=c[e];let n=u[e];n=Object(o.l)(n);const r=a.da(t);if(n instanceof Xu)l.push(t);else{const e=sl(n,r);null!=e&&(l.push(t),h.set(t,e))}}const d=new rt(l);return new $u(h,d,a.fieldTransforms)}function il(e,t,n,r=!1){return sl(n,e.ya(r?4:3,t))}function sl(e,t){if(al(e=Object(o.l)(e)))return cl("Unsupported field value:",t,e),ol(e,t);if(e instanceof Bu)return function(e,t){if(!Gu(t.ca))throw t._a(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t._a(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=sl(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o.l)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Yn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=F.fromDate(e);return{timestampValue:ri(t.serializer,n)}}if(e instanceof F){const n=new F(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ri(t.serializer,n)}}if(e instanceof Uu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Fu)return{bytesValue:ii(t.serializer,e._byteString)};if(e instanceof fu){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ai(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a("Unsupported field value: "+au(e))}(e,t)}function ol(e,t){const n={};return Xe(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):We(e,(e,r)=>{const i=sl(r,t.ha(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function al(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof F||e instanceof Uu||e instanceof Fu||e instanceof fu||e instanceof Bu)}function cl(e,t,n){if(!al(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=au(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function ul(e,t,n){if((t=Object(o.l)(t))instanceof Vu)return t._internalPath;if("string"==typeof t)return hl(e,t);throw dl("Field path arguments must be of type string or ",e,!1,void 0,n)}const ll=new RegExp("[~\\*/\\[\\]]");function hl(e,t,n){if(t.search(ll)>=0)throw dl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vu(...t.split("."))._internalPath}catch(r){throw dl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function dl(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new E(S.INVALID_ARGUMENT,a+e+c)}function fl(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new fu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ml(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gl("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ml extends pl{data(){return super.data()}}function gl(e,t){return"string"==typeof t?hl(e,t):t instanceof Vu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vl{}class wl extends vl{}function bl(e,t,...n){let r=[];t instanceof vl&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof El).length,n=e.filter(e=>e instanceof _l).length;if(t>1||t>0&&n>0)throw new E(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const t of r)e=t._apply(e);return e}class _l extends wl{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new _l(e,t,n)}_apply(e){const t=this._parse(e);return Fl(e._query,t),new pu(e.firestore,e.converter,xn(e._query,t))}_parse(e){const t=Hu(e.firestore);return function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){jl(o,s);const t=[];for(const n of o)t.push(Ll(r,e,n));a={arrayValue:{values:t}}}else a=Ll(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||jl(o,s),a=il(n,"where",o,"in"===s||"not-in"===s);return Gt.create(i,s,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}}function Sl(e,t,n){const r=t,i=gl("where",e);return _l._create(i,r,n)}class El extends vl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new El(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Kt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)Fl(n,e),n=xn(n,e)}(e._query,t),new pu(e.firestore,e.converter,xn(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Il extends wl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Il(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new E(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new E(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new qt(t,n);return function(e,t){if(null===_n(e)){const n=Sn(e);null!==n&&Vl(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new pu(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new yn(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Tl(e,t="asc"){const n=t,r=gl("orderBy",e);return Il._create(r,n)}class xl extends wl{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new xl(e,t,n)}_apply(e){return new pu(e.firestore,e.converter,Cn(e._query,this._limit,this._limitType))}}function Cl(e){return uu("limit",e),xl._create("limit",e,"F")}function Al(e){return uu("limitToLast",e),xl._create("limitToLast",e,"L")}class Dl extends wl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Dl(e,t,n)}_apply(e){const t=Rl(e,this.type,this._docOrFields,this._inclusive);return new pu(e.firestore,e.converter,function(e,t){return new yn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Ol(...e){return Dl._create("startAt",e,!0)}function Nl(...e){return Dl._create("startAfter",e,!1)}class kl extends wl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new kl(e,t,n)}_apply(e){const t=Rl(e,this.type,this._docOrFields,this._inclusive);return new pu(e.firestore,e.converter,function(e,t){return new yn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Pl(...e){return kl._create("endBefore",e,!1)}function Ml(...e){return kl._create("endAt",e,!0)}function Rl(e,t,n,r){if(n[0]=Object(o.l)(n[0]),n[0]instanceof pl)return function(e,t,n,r,i){if(!r)throw new E(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of In(e))if(n.field.isKeyField())s.push(It(t,r.key));else{const e=r.data.field(n.field);if(ht(e))throw new E(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new E(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Vt(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Hu(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new E(S.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const c=i[s];if(o[s].field.isKeyField()){if("string"!=typeof c)throw new E(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!En(e)&&-1!==c.indexOf("/"))throw new E(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=e.path.child(U.fromString(c));if(!$.isDocumentKey(n))throw new E(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new $(n);a.push(It(t,i))}else{const e=il(n,r,c);a.push(e)}}return new Vt(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Ll(e,t,n){if("string"==typeof(n=Object(o.l)(n))){if(""===n)throw new E(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!En(t)&&-1!==n.indexOf("/"))throw new E(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(U.fromString(n));if(!$.isDocumentKey(r))throw new E(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return It(e,new $(r))}if(n instanceof fu)return It(e,n._key);throw new E(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${au(n)}.`)}function jl(e,t){if(!Array.isArray(e)||0===e.length)throw new E(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Fl(e,t){if(t.isInequality()){const n=Sn(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new E(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=_n(e);null!==i&&Vl(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new E(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Vl(e,t,n){if(!n.isEqual(t))throw new E(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Bl{convertValue(e,t="none"){switch(vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return We(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new Uu(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=dt(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ft(e));default:return null}}convertTimestamp(e){const t=ct(e);return new F(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=U.fromString(e);w(Ai(n));const r=new mt(n.get(1),n.get(3)),i=new $(n.popFirst(5));return r.isEqual(t)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class ql extends Bl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fu(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $l extends pl{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(gl("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Gl extends $l{data(e={}){return super.data(e)}}class Kl{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new zl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Gl(this._firestore,this._userDataWriter,n.key,n,new zl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Gl(e._firestore,e._userDataWriter,n.doc.key,n.doc,new zl(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Gl(e._firestore,e._userDataWriter,t.doc.key,t.doc,new zl(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Ql(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ql(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}function Hl(e,t){return e instanceof $l&&t instanceof $l?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Kl&&t instanceof Kl&&e._firestore===t._firestore&&bu(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(e){e=cu(e,fu);const t=cu(e.firestore,Tu);return Jc(xu(t),e._key).then(n=>uh(t,e,n))}class Xl extends Bl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fu(this.firestore,null,t)}}function Yl(e){e=cu(e,fu);const t=cu(e.firestore,Tu),n=xu(t),r=new Xl(t);return function(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=_(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new E(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Ra(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Qc(e),t,n)),n.promise}(n,e._key).then(n=>new $l(t,r,e._key,n,new zl(null!==n&&n.hasLocalMutations,!0),e.converter))}function Jl(e){e=cu(e,fu);const t=cu(e.firestore,Tu);return Jc(xu(t),e._key,{source:"server"}).then(n=>uh(t,e,n))}function Zl(e){e=cu(e,pu);const t=cu(e.firestore,Tu),n=xu(t),r=new Xl(t);return yl(e._query),Zc(n,e._query).then(n=>new Kl(t,r,e,n))}function eh(e){e=cu(e,pu);const t=cu(e.firestore,Tu),n=xu(t),r=new Xl(t);return function(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await Co(e,t,!0),i=new Za(t,r.ir),s=i.sc(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Ra(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Qc(e),t,n)),n.promise}(n,e._query).then(n=>new Kl(t,r,e,n))}function th(e){e=cu(e,pu);const t=cu(e.firestore,Tu),n=xu(t),r=new Xl(t);return Zc(n,e._query,{source:"server"}).then(n=>new Kl(t,r,e,n))}function nh(e,t,n){e=cu(e,fu);const r=cu(e.firestore,Tu),i=Ul(e.converter,t,n);return ch(r,[Wu(Hu(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,dr.none())])}function rh(e,t,n,...r){e=cu(e,fu);const i=cu(e.firestore,Tu),s=Hu(i);let a;return a="string"==typeof(t=Object(o.l)(t))||t instanceof Vu?rl(s,"updateDoc",e._key,t,n,r):nl(s,"updateDoc",e._key,t),ch(i,[a.toMutation(e._key,dr.exists(!0))])}function ih(e){return ch(cu(e.firestore,Tu),[new Tr(e._key,dr.none())])}function sh(e,t){const n=cu(e.firestore,Tu),r=vu(e),i=Ul(e.converter,t);return ch(n,[Wu(Hu(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,dr.exists(!1))]).then(()=>r)}function oh(e,...t){var n,r,i;e=Object(o.l)(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||Su(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Su(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof fu)l=cu(e.firestore,Tu),h=wn(e._key.path),u={next:n=>{t[a]&&t[a](uh(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=cu(e,pu);l=cu(n.firestore,Tu),h=n._query;const r=new Xl(l);u={next:e=>{t[a]&&t[a](new Kl(l,r,n,e))},error:t[a+1],complete:t[a+2]},yl(e._query)}return function(e,t,n,r){const i=new Lc(r),s=new Ka(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>Ua(await Yc(e),s)),()=>{i.Dc(),e.asyncQueue.enqueueAndForget(async()=>qa(await Yc(e),s))}}(xu(l),h,c,u)}function ah(e,t){return function(e,t){const n=new Lc(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).ku.add(t),t.next()}(await Yc(e),n)),()=>{n.Dc(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).ku.delete(t)}(await Yc(e),n))}}(xu(e=cu(e,Tu)),Su(t)?t:{next:t})}function ch(e,t){return function(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){const r=Oc(e);try{const e=await function(e,t){const n=_(e),r=F.now(),i=t.reduce((e,t)=>e.add(t.key),Kn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=jn(),c=Kn();return n.Zi.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i;const o=[];for(const e of t){const t=vr(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new _r(e.key,t,jt(t.value.mapValue),dr.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:Bn(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new Ye(R)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await vc(r,e.changes),await _a(r.remoteStore)}catch(e){const t=Ra(e,"Failed to persist write");n.reject(t)}}(await Wc(e),t,n)),n.promise}(xu(e),t)}function uh(e,t,n){const r=n.docs.get(t._key),i=new Xl(e);return new $l(e,i,t._key,r,new zl(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lh={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Hu(e)}set(e,t,n){this._verifyNotCommitted();const r=dh(e,this._firestore),i=Ul(r.converter,t,n),s=Wu(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,dr.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=dh(e,this._firestore);let s;return s="string"==typeof(t=Object(o.l)(t))||t instanceof Vu?rl(this._dataReader,"WriteBatch.update",i._key,t,n,r):nl(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,dr.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=dh(e,this._firestore);return this._mutations=this._mutations.concat(new Tr(t._key,dr.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function dh(e,t){if((e=Object(o.l)(e)).firestore!==t)throw new E(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Hu(e)}get(e){const t=dh(e,this._firestore),n=new ql(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return v();const r=e[0];if(r.isFoundDocument())return new pl(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new pl(this._firestore,n,t._key,null,t.converter);throw v()})}set(e,t,n){const r=dh(e,this._firestore),i=Ul(r.converter,t,n),s=Wu(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=dh(e,this._firestore);let s;return s="string"==typeof(t=Object(o.l)(t))||t instanceof Vu?rl(this._dataReader,"Transaction.update",i._key,t,n,r):nl(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=dh(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=dh(e,this._firestore),n=new Xl(this._firestore);return super.get(e).then(e=>new $l(this._firestore,n,t._key,e._document,new zl(!1,!1),t.converter))}}function ph(e,t,n){e=cu(e,Tu);const r=Object.assign(Object.assign({},lh),n);return function(e){if(e.maxAttempts<1)throw new E(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new I;return e.asyncQueue.enqueueAndForget(async()=>{const i=await Xc(e);new Vc(e.asyncQueue,i,n,t,r).run()}),r.promise}(xu(e),n=>t(new fh(e,n)),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){return new Xu("deleteField")}function gh(){return new Ju("serverTimestamp")}function yh(...e){return new Zu("arrayUnion",e)}function vh(...e){return new el("arrayRemove",e)}function wh(e){return new tl("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(r.SDK_VERSION),Object(r._registerComponent)(new i.a("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Tu(new A(e.getProvider("auth-internal")),new k(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mt(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Object(r.registerVersion)(c,"3.12.0",e),Object(r.registerVersion)(c,"3.12.0","esm2017")}()}).call(this,n(16))},function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return I})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return C})),n.d(t,"h",(function(){return T})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return O})),n.d(t,"m",(function(){return g})),n.d(t,"n",(function(){return y})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return v})),n.d(t,"q",(function(){return b}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const c=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==c)throw new o;const u=i<<2|s>>4;if(r.push(u),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==c){const e=a<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){return function(e){const t=i(e);return s.encodeByteArray(t,!0)}(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=u(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,h=()=>{try{return l()||(()=>{if(void 0===r||void 0===r.env)return;const e=r.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&c(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},d=e=>{const t=(e=>{var t,n;return null===(n=null===(t=h())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},f=()=>{var e;return null===(e=h())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[a(JSON.stringify({alg:"none",type:"JWT"})),a(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"object"==typeof self&&self.self===self}function v(){return!function(){var t;const n=null===(t=h())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){try{return"object"==typeof indexedDB}catch(e){return!1}}function b(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(E,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new _(r,o,n)}}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function T(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(x(n)&&x(s)){if(!T(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function x(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=new A(e,t);return n.subscribe.bind(n)}class A{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e){return e&&e._delegate?e._delegate:e}}).call(this,n(37),n(16))},function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseError",(function(){return s.c})),n.d(t,"SDK_VERSION",(function(){return F})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return T})),n.d(t,"_addComponent",(function(){return D})),n.d(t,"_addOrOverwriteComponent",(function(){return O})),n.d(t,"_apps",(function(){return C})),n.d(t,"_clearComponents",(function(){return M})),n.d(t,"_components",(function(){return A})),n.d(t,"_getProvider",(function(){return k})),n.d(t,"_registerComponent",(function(){return N})),n.d(t,"_removeServiceInstance",(function(){return P})),n.d(t,"deleteApp",(function(){return q})),n.d(t,"getApp",(function(){return B})),n.d(t,"getApps",(function(){return U})),n.d(t,"initializeApp",(function(){return V})),n.d(t,"onLog",(function(){return $})),n.d(t,"registerVersion",(function(){return z})),n.d(t,"setLogLevel",(function(){return G}));var r=n(7),i=n(5),s=n(1);let o,a;const c=new WeakMap,u=new WeakMap,l=new WeakMap,h=new WeakMap,d=new WeakMap;let f={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(y(this),t),g(c.get(this))}:function(...t){return g(e.apply(y(this),t))}:function(t,...n){const r=e.call(y(this),t,...n);return l.set(r,t.sort?t.sort():[t]),g(r)}}function m(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(u.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});u.set(e,t)}(e),t=e,(o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,f):e);var t}function g(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),d.set(t,e),t}(e);if(h.has(e))return h.get(e);const t=m(e);return t!==e&&(h.set(e,t),d.set(t,e)),t}const y=e=>d.get(e);const v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],b=new Map;function _(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(b.get(t))return b.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!v.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return b.set(t,s),s}f=(e=>({...e,get:(t,n,r)=>_(t,n)||e.get(t,n,r),has:(t,n)=>!!_(t,n)||e.has(t,n)}))(f);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const E="@firebase/app",I=new i.b("@firebase/app"),T="[DEFAULT]",x={[E]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},C=new Map,A=new Map;function D(e,t){try{e.container.addComponent(t)}catch(n){I.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function O(e,t){e.container.addOrOverwriteComponent(t)}function N(e){const t=e.name;if(A.has(t))return I.debug(`There were multiple attempts to register component ${t}.`),!1;A.set(t,e);for(const t of C.values())D(t,e);return!0}function k(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function P(e,t,n=T){k(e,t).clearInstance(n)}function M(){A.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},L=new s.b("app","Firebase",R);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F="9.22.0";function V(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:T,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw L.create("bad-app-name",{appName:String(o)});if(n||(n=Object(s.j)()),!n)throw L.create("no-options");const a=C.get(o);if(a){if(Object(s.h)(n,a.options)&&Object(s.h)(i,a.config))return a;throw L.create("duplicate-app",{appName:o})}const c=new r.b(o);for(const e of A.values())c.addComponent(e);const u=new j(n,i,c);return C.set(o,u),u}function B(e=T){const t=C.get(e);if(!t&&e===T&&Object(s.j)())return V();if(!t)throw L.create("no-app",{appName:e});return t}function U(){return Array.from(C.values())}async function q(e){const t=e.name;C.has(t)&&(C.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function z(e,t,n){var i;let s=null!==(i=x[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void I.warn(e.join(" "))}N(new r.a(s+"-version",()=>({library:s,version:t}),"VERSION"))}function $(e,t){if(null!==e&&"function"!=typeof e)throw L.create("invalid-log-argument");Object(i.d)(e,t)}function G(e){Object(i.c)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="firebase-heartbeat-store";let Q=null;function H(){return Q||(Q=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=g(o);return r&&o.addEventListener("upgradeneeded",e=>{r(g(o.result),e.oldVersion,e.newVersion,g(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(K)}}}).catch(e=>{throw L.create("idb-open",{originalErrorMessage:e.message})})),Q}async function W(e,t){try{const n=(await H()).transaction(K,"readwrite"),r=n.objectStore(K);await r.put(t,X(e)),await n.done}catch(e){if(e instanceof s.c)I.warn(e.message);else{const t=L.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});I.warn(t.message)}}}function X(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Z(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=J();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=J(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ee(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ee(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(s.d)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function J(){return(new Date).toISOString().substring(0,10)}class Z{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s.o)()&&Object(s.q)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await H();return await t.transaction(K).objectStore(K).get(X(e))}catch(e){if(e instanceof s.c)I.warn(e.message);else{const t=L.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});I.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return W(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return W(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ee(e){return Object(s.d)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;te="",N(new r.a("platform-logger",e=>new S(e),"PRIVATE")),N(new r.a("heartbeat",e=>new Y(e),"PRIVATE")),z(E,"0.9.10",te),z(E,"0.9.10","esm2017"),z("fire-js","")},function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return i})),n.d(t,"__assign",(function(){return s})),n.d(t,"__rest",(function(){return o})),n.d(t,"__decorate",(function(){return a})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return l})),n.d(t,"__generator",(function(){return h})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return f})),n.d(t,"__read",(function(){return p})),n.d(t,"__spread",(function(){return m})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return y})),n.d(t,"__asyncGenerator",(function(){return v})),n.d(t,"__asyncDelegator",(function(){return w})),n.d(t,"__asyncValues",(function(){return b})),n.d(t,"__makeTemplateObject",(function(){return _})),n.d(t,"__importStar",(function(){return S})),n.d(t,"__importDefault",(function(){return E}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function h(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function d(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function f(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function p(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function v(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){s.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=i[e](t)).value instanceof y?Promise.resolve(n.value.v).then(c,u):l(s[0][2],n)}catch(e){l(s[0][3],e)}var n}function c(e){a("next",e)}function u(e){a("throw",e)}function l(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function b(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=f(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,i,(t=e[n](t)).done,t.value)}))}}}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return mr})),n.d(t,"b",(function(){return yr})),n.d(t,"c",(function(){return gr})),n.d(t,"d",(function(){return wr})),n.d(t,"e",(function(){return Er})),n.d(t,"f",(function(){return Sr})),n.d(t,"g",(function(){return vr})),n.d(t,"h",(function(){return br})),n.d(t,"i",(function(){return _r})),n.d(t,"j",(function(){return fr})),n.d(t,"k",(function(){return pr}));var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var h="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(e,t,n){return e.call.apply(e.bind,arguments)}function p(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function g(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function v(){this.s=this.s,this.o=this.o}v.prototype.s=!1,v.prototype.ra=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,h)&&e[h]||(e[h]=++d))},v.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function b(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function _(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(u(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function S(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var E=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(e){}return e}();function I(e){return/^[\s\xa0]*$/.test(e)}var T=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return e<t?-1:e>t?1:0}function C(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function A(e){return-1!=C().indexOf(e)}function D(e){return D[" "](e),e}function O(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}D[" "]=c;var N,k,P=A("Opera"),M=A("Trident")||A("MSIE"),R=A("Edge"),L=R||M,j=A("Gecko")&&!(-1!=C().toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),F=-1!=C().toLowerCase().indexOf("webkit")&&!A("Edge");function V(){var e=a.document;return e?e.documentMode:void 0}e:{var B="",U=(k=C(),j?/rv:([^\);]+)(\)|;)/.exec(k):R?/Edge\/([\d\.]+)/.exec(k):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(k):F?/WebKit\/(\S+)/.exec(k):P?/(?:Version)[ \/]?(\S+)/.exec(k):void 0);if(U&&(B=U?U[1]:""),M){var q=V();if(null!=q&&q>parseFloat(B)){N=String(q);break e}}N=B}var z,$={};if(a.document&&M){var G=V();z=G||(parseInt(N,10)||void 0)}else z=void 0;var K=z;function Q(e,t){if(S.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{D(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:H[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Q.$.h.call(this)}}y(Q,S);var H={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),X=0;function Y(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function J(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Z(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ee(e){const t={};for(const n in e)t[n]=e[n];return t}const te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<te.length;t++)n=te[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function re(e){this.src=e,this.g={},this.h=0}function ie(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=w(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(J(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function se(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}re.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=se(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Y(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var oe="closure_lm_"+(1e6*Math.random()|0),ae={};function ce(e,t,n,r,i){if(r&&r.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=me(r),t&&t[W]?t.P(n,r,l(i)?!!i.capture:!!i,s):ue(t,n,r,!0,i,s)}(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ce(e,t[s],n,r,i);return null}return n=me(n),e&&e[W]?e.O(t,n,l(r)?!!r.capture:!!r,i):ue(e,t,n,!1,r,i)}function ue(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=fe(e);if(a||(e[oe]=a=new re(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){const e=de;return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)E||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(he(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function le(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[W])ie(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(he(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=fe(t))?(ie(n,e),0==n.h&&(n.src=null,t[oe]=null)):J(e)}}}function he(e){return e in ae?ae[e]:ae[e]="on"+e}function de(e,t){if(e.fa)e=!0;else{t=new Q(t,this);var n=e.listener,r=e.la||e.src;e.ia&&le(e),e=n.call(r,t)}return e}function fe(e){return(e=e[oe])instanceof re?e:null}var pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(e){return"function"==typeof e?e:(e[pe]||(e[pe]=function(t){return e.handleEvent(t)}),e[pe])}function ge(){v.call(this),this.i=new re(this),this.S=this,this.J=null}function ye(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new S(t,e);else if(t instanceof S)t.target=t.target||e;else{var i=t;ne(t=new S(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ve(o,r,!0,t)&&i}if(i=ve(o=t.g=e,r,!0,t)&&i,i=ve(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ve(o=t.g=n[s],r,!1,t)&&i}function ve(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ie(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(ge,v),ge.prototype[W]=!0,ge.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else i=l(i)?!!i.capture:!!i,r=me(r),t&&t[W]?(t=t.i,(n=String(n).toString())in t.g&&(-1<(r=se(o=t.g[n],r,i,s))&&(J(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--)))):t&&(t=fe(t))&&(n=t.g[n.toString()],t=-1,n&&(t=se(n,r,i,s)),(r=-1<t?n[t]:null)&&le(r))}(this,e,t,n,r)},ge.prototype.N=function(){if(ge.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)J(n[r]);delete t.g[e],t.h--}}this.J=null},ge.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ge.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var we=a.JSON.stringify;function be(){var e=Ce;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var _e,Se=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ee,e=>e.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ie(e){a.setTimeout(()=>{throw e},0)}function Te(e,t){_e||function(){var e=a.Promise.resolve(void 0);_e=function(){e.then(Ae)}}(),xe||(_e(),xe=!0),Ce.add(e,t)}var xe=!1,Ce=new class{constructor(){this.h=this.g=null}add(e,t){const n=Se.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ae(){for(var e;e=be();){try{e.h.call(e.g)}catch(e){Ie(e)}var t=Se;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}xe=!1}function De(e,t){ge.call(this),this.h=e||1,this.g=t||a,this.j=m(this.qb,this),this.l=Date.now()}function Oe(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ne(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}y(De,ge),(r=De.prototype).ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ye(this,"tick"),this.ga&&(Oe(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){De.$.N.call(this),Oe(this),delete this.g};class ke extends v{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=Ne(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);const n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(e){v.call(this),this.h=e,this.g={}}y(Pe,v);var Me=[];function Re(e,t,n,r){Array.isArray(n)||(n&&(Me[0]=n.toString()),n=Me);for(var i=0;i<n.length;i++){var s=ce(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Le(e){Z(e.g,(function(e,t){this.g.hasOwnProperty(t)&&le(e)}),e),e.g={}}function je(){this.g=!0}function Fe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return we(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Pe.prototype.N=function(){Pe.$.N.call(this),Le(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},je.prototype.Ea=function(){this.g=!1},je.prototype.info=function(){};var Ve={},Be=null;function Ue(){return Be=Be||new ge}function qe(e){S.call(this,Ve.Ta,e)}function ze(e){const t=Ue();ye(t,new qe(t))}function $e(e,t){S.call(this,Ve.STAT_EVENT,e),this.stat=t}function Ge(e){const t=Ue();ye(t,new $e(t,e))}function Ke(e,t){S.call(this,Ve.Ua,e),this.size=t}function Qe(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}Ve.Ta="serverreachability",y(qe,S),Ve.STAT_EVENT="statevent",y($e,S),Ve.Ua="timingevent",y(Ke,S);var He={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},We={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xe(){}function Ye(e){return e.h||(e.h=e.i())}function Je(){}Xe.prototype.h=null;var Ze,et={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function tt(){S.call(this,"d")}function nt(){S.call(this,"c")}function rt(){}function it(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Pe(this),this.P=ot,e=L?125:void 0,this.V=new De(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new st}function st(){this.i=null,this.g="",this.h=!1}y(tt,S),y(nt,S),y(rt,Xe),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},Ze=new rt;var ot=45e3,at={},ct={};function ut(e,t,n){e.L=1,e.v=At(Et(t)),e.s=n,e.S=!0,lt(e,null)}function lt(e,t){e.G=Date.now(),pt(e),e.A=Et(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Ut(n.i,"t",r),e.C=0,n=e.l.I,e.h=new st,e.g=Un(e.l,n?t:null,!e.s),0<e.O&&(e.M=new ke(m(e.Pa,e,e.g),e.O)),Re(e.U,e.g,"readystatechange",e.nb),t=e.I?ee(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ze(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function ht(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function dt(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=ft(e,n),r==ct){4==t&&(e.o=4,Ge(14),i=!1),Fe(e.j,e.m,null,"[Incomplete Response]");break}if(r==at){e.o=4,Ge(15),Fe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Fe(e.j,e.m,r,null),wt(e,r)}ht(e)&&r!=ct&&r!=at&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ge(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pn(t),t.L=!0,Ge(11))):(Fe(e.j,e.m,n,"[Invalid Chunked Response]"),vt(e),yt(e))}function ft(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ct:(n=Number(t.substring(n,r)),isNaN(n)?at:(r+=1)+n>t.length?ct:(t=t.substr(r,n),e.C=r+n,t))}function pt(e){e.Y=Date.now()+e.P,mt(e,e.P)}function mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Qe(m(e.lb,e),t)}function gt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function yt(e){0==e.l.H||e.J||Ln(e.l,e)}function vt(e){gt(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,Oe(e.V),Le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function wt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Qt(n.h,e)))if(!e.K&&Qt(n.h,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Rn(n),Tn(n)}kn(n),Ge(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=Qe(m(n.ib,n),6e3));if(1>=Kt(n.h)&&n.na){try{n.na()}catch(e){}n.na=void 0}}else Fn(n,11)}else if((e.K||n.g==e)&&Rn(n),!I(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const t=u[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const i=u[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ht(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Ct(r.G,r.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms"));var o=e;if((r=n).wa=Bn(r,r.I?r.oa:null,r.Y),o.K){Wt(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(gt(a),pt(a)),r.g=o}else Nn(r);0<n.i.length&&Cn(n)}else"stop"!=u[0]&&"close"!=u[0]||Fn(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Fn(n,7):In(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}ze()}catch(e){}}function bt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(u(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(r=it.prototype).setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==vn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const h=vn(this.g);var t=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||L||this.g&&(this.h.h||this.g.ja()||wn(this.g)))){this.J||4!=h||7==t||ze(),gt(this);var n=this.g.da();this.aa=n;t:if(ht(this)){var r=wn(this.g);e="";var i=r.length,s=4==vn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){vt(this),yt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Ge(12),vt(this),yt(this);break e}Fe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wt(this,n)}this.S?(dt(this,h,o),L&&this.i&&3==h&&(Re(this.U,this.V,"tick",this.mb),this.V.start())):(Fe(this.j,this.m,o,null),wt(this,o)),4==h&&vt(this),this.i&&!this.J&&(4==h?Ln(this.l,this):(this.i=!1,pt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),vt(this),yt(this)}}}catch(e){}},r.mb=function(){if(this.g){var e=vn(this.g),t=this.g.ja();this.C<t.length&&(gt(this),dt(this,e,t),this.i&&4!=e&&pt(this))}},r.cancel=function(){this.J=!0,vt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(ze(),Ge(17)),vt(this),this.o=2,yt(this)):mt(this,this.Y-e)};var _t=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function St(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof St){this.h=void 0!==t?t:e.h,It(this,e.j),this.s=e.s,this.g=e.g,Tt(this,e.m),this.l=e.l,t=e.i;var n=new jt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),xt(this,n),this.o=e.o}else e&&(n=String(e).match(_t))?(this.h=!!t,It(this,n[1]||"",!0),this.s=Dt(n[2]||""),this.g=Dt(n[3]||"",!0),Tt(this,n[4]),this.l=Dt(n[5]||"",!0),xt(this,n[6]||"",!0),this.o=Dt(n[7]||"")):(this.h=!!t,this.i=new jt(null,this.h))}function Et(e){return new St(e)}function It(e,t,n){e.j=n?Dt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Tt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xt(e,t,n){t instanceof jt?(e.i=t,function(e,t){t&&!e.j&&(Ft(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Vt(this,t),Ut(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Ot(t,Rt)),e.i=new jt(t,e.h))}function Ct(e,t,n){e.i.set(t,n)}function At(e){return Ct(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Dt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ot(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Nt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Nt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}St.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ot(t,kt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ot(t,kt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ot(n,"/"==n.charAt(0)?Mt:Pt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ot(n,Lt)),e.join("")};var kt=/[#\/\?@]/g,Pt=/[#\?:]/g,Mt=/[#\?]/g,Rt=/[#\?@]/g,Lt=/#/g;function jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ft(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Vt(e,t){Ft(e),t=qt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Bt(e,t){return Ft(e),t=qt(e,t),e.g.has(t)}function Ut(e,t,n){Vt(e,t),0<n.length&&(e.i=null,e.g.set(qt(e,t),b(n)),e.h+=n.length)}function qt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(r=jt.prototype).add=function(e,t){Ft(this),this.i=null,e=qt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Ft(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.sa=function(){Ft(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){Ft(this);let t=[];if("string"==typeof e)Bt(this,e)&&(t=t.concat(this.g.get(qt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return Ft(this),this.i=null,Bt(this,e=qt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function zt(e){this.l=e||$t,a.PerformanceNavigationTiming?e=0<(e=a.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.g&&a.g.Ka&&a.g.Ka()&&a.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $t=10;function Gt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Kt(e){return e.h?1:e.g?e.g.size:0}function Qt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ht(e,t){e.g?e.g.add(t):e.h=t}function Wt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Xt(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return b(e.i)}function Yt(){}function Jt(){this.g=new Yt}function Zt(e,t,n){const r=n||"";try{bt(e,(function(e,n){let i=e;l(e)&&(i=we(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function en(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function tn(e){this.l=e.fc||null,this.j=e.ob||!1}function nn(e,t){ge.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}zt.prototype.cancel=function(){if(this.i=Xt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Yt.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Yt.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(tn,Xe),tn.prototype.g=function(){return new nn(this.l,this.j)},tn.prototype.i=function(e){return function(){return e}}({}),y(nn,ge);var rn=0;function sn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function on(e){e.readyState=4,e.l=null,e.j=null,e.A=null,an(e)}function an(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(r=nn.prototype).open=function(e,t){if(this.readyState!=rn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,an(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||a).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,on(this)),this.readyState=rn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?on(this):an(this),3==this.readyState&&sn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,on(this))},r.Ya=function(e){this.g&&(this.response=e,on(this))},r.ka=function(){this.g&&on(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var cn=a.JSON.parse;function un(e){ge.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ln,this.L=this.M=!1}y(un,ge);var ln="",hn=/^https?$/i,dn=["POST","PUT"];function fn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,pn(e),gn(e)}function pn(e){e.F||(e.F=!0,ye(e,"complete"),ye(e,"error"))}function mn(e){if(e.h&&void 0!==o&&(!e.C[1]||4!=vn(e)||2!=e.da()))if(e.v&&4==vn(e))Ne(e.La,0,e);else if(ye(e,"readystatechange"),4==vn(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.I).match(_t)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!hn.test(i?i.toLowerCase():"")}n=r}if(n)ye(e,"complete"),ye(e,"success");else{e.m=6;try{var c=2<vn(e)?e.g.statusText:""}catch(e){c=""}e.j=c+" ["+e.da()+"]",pn(e)}}finally{gn(e)}}}function gn(e,t){if(e.g){yn(e);const n=e.g,r=e.C[0]?c:null;e.g=null,e.C=null,t||ye(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function yn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function vn(e){return e.g?e.g.readyState:0}function wn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ln:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function bn(e){let t="";return Z(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function _n(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ct(e,t,n))}function Sn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function En(e){this.Ga=0,this.i=[],this.j=new je,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sn("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sn("baseRetryDelayMs",5e3,e),this.hb=Sn("retryDelaySeedMs",1e4,e),this.eb=Sn("forwardChannelMaxRetries",2,e),this.xa=Sn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new zt(e&&e.concurrentRequestLimit),this.Ja=new Jt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function In(e){if(xn(e),3==e.H){var t=e.W++,n=Et(e.G);Ct(n,"SID",e.J),Ct(n,"RID",t),Ct(n,"TYPE","terminate"),Dn(e,n),(t=new it(e,e.j,t,void 0)).L=2,t.v=At(Et(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=Un(t.l,null),t.g.ha(t.v)),t.G=Date.now(),pt(t)}Vn(e)}function Tn(e){e.g&&(Pn(e),e.g.cancel(),e.g=null)}function xn(e){Tn(e),e.u&&(a.clearTimeout(e.u),e.u=null),Rn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&a.clearTimeout(e.m),e.m=null)}function Cn(e){Gt(e.h)||e.m||(e.m=!0,Te(e.Na,e),e.C=0)}function An(e,t){var n;n=t?t.m:e.W++;const r=Et(e.G);Ct(r,"SID",e.J),Ct(r,"RID",n),Ct(r,"AID",e.V),Dn(e,r),e.o&&e.s&&_n(r,e.o,e.s),n=new it(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=On(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ht(e.h,n),ut(n,r,t)}function Dn(e,t){e.ma&&Z(e.ma,(function(e,n){Ct(t,n,e)})),e.l&&bt({},(function(e,n){Ct(t,n,e)}))}function On(e,t,n){n=Math.min(e.i.length,n);var r=e.l?m(e.l.Va,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Zt(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function Nn(e){e.g||e.u||(e.ba=1,Te(e.Ma,e),e.A=0)}function kn(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Qe(m(e.Ma,e),jn(e,e.A)),e.A++,!0)}function Pn(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Mn(e){e.g=new it(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Et(e.wa);Ct(t,"RID","rpc"),Ct(t,"SID",e.J),Ct(t,"CI",e.M?"0":"1"),Ct(t,"AID",e.V),Ct(t,"TYPE","xmlhttp"),Dn(e,t),e.o&&e.s&&_n(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=At(Et(t)),n.s=null,n.S=!0,lt(n,e)}function Rn(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function Ln(e,t){var n=null;if(e.g==t){Rn(e),Pn(e),e.g=null;var r=2}else{if(!Qt(e.h,t))return;n=t.F,Wt(e.h,t),r=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;ye(r=Ue(),new Ke(r,n)),Cn(e)}else Nn(e);else if(3==(i=t.o)||0==i&&0<e.ta||!(1==r&&function(e,t){return!(Kt(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.F.concat(e.i),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=Qe(m(e.Na,e,t),jn(e,e.C)),e.C++,!0))}(e,t)||2==r&&kn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Fn(e,5);break;case 4:Fn(e,10);break;case 3:Fn(e,6);break;default:Fn(e,2)}}function jn(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Fn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=m(e.pb,e);n||(n=new St("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||It(n,"https"),At(n)),function(e,t){const n=new je;if(a.Image){const r=new Image;r.onload=g(en,n,r,"TestLoadImage: loaded",!0,t),r.onerror=g(en,n,r,"TestLoadImage: error",!1,t),r.onabort=g(en,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=g(en,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Ge(2);e.H=0,e.l&&e.l.za(t),Vn(e),xn(e)}function Vn(e){if(e.H=0,e.pa=[],e.l){const t=Xt(e.h);0==t.length&&0==e.i.length||(_(e.pa,t),_(e.pa,e.i),e.h.i.length=0,b(e.i),e.i.length=0),e.l.ya()}}function Bn(e,t,n){var r=n instanceof St?Et(n):new St(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Tt(r,r.m);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new St(null,void 0);r&&It(s,r),t&&(s.g=t),i&&Tt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Ct(r,n,t),Ct(r,"VER",e.qa),Dn(e,r),r}function Un(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new un(new tn({ob:!0})):new un(e.va)).Oa(e.I),t}function qn(){}function zn(){if(M&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function $n(e,t){ge.call(this),this.g=new En(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!I(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Qn(this)}function Gn(e){tt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Kn(){nt.call(this),this.status=1}function Qn(e){this.g=e}function Hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Wn(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function Xn(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(r=un.prototype).Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ze.g(),this.C=this.u?Ye(this.u):Ye(Ze),this.g.onreadystatechange=m(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void fn(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=a.FormData&&e instanceof a.FormData,!(0<=w(dn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yn(this),0<this.B&&((this.L=function(e){return M&&O($,9,(function(){let e=0;const t=T(String(N)).split("."),n=T("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=x(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||x(0==i[2].length,0==s[2].length)||x(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.ua,this)):this.A=Ne(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){fn(this,e)}},r.ua=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ye(this,"complete"),ye(this,"abort"),gn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gn(this,!0)),un.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?mn(this):this.kb())},r.kb=function(){mn(this)},r.da=function(){try{return 2<vn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),cn(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=En.prototype).qa=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new it(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=ee(s),ne(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=On(this,i,t),Ct(n=Et(this.G),"RID",e),Ct(n,"CVER",22),this.F&&Ct(n,"X-HTTP-Session-Id",this.F),Dn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(bn(s)))+"&"+t:this.o&&_n(n,this.o,s)),Ht(this.h,i),this.bb&&Ct(n,"TYPE","init"),this.P?(Ct(n,"$req",t),Ct(n,"SID","null"),i.ba=!0,ut(i,n,null)):ut(i,n,t),this.H=2}}else 3==this.H&&(e?An(this,e):0==this.i.length||Gt(this.h)||An(this))},r.Ma=function(){if(this.u=null,Mn(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Qe(m(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ge(10),Tn(this),Mn(this))},r.ib=function(){null!=this.v&&(this.v=null,Tn(this),kn(this),Ge(19))},r.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))},(r=qn.prototype).Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.Va=function(){},zn.prototype.g=function(e,t){return new $n(e,t)},y($n,ge),$n.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Ge(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=Bn(e,null,e.Y),Cn(e)},$n.prototype.close=function(){In(this.g)},$n.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=we(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.fb++,e)),3==t.H&&Cn(t)},$n.prototype.N=function(){this.g.l=null,delete this.j,In(this.g),delete this.g,$n.$.N.call(this)},y(Gn,tt),y(Kn,nt),y(Qn,qn),Qn.prototype.Ba=function(){ye(this.g,"a")},Qn.prototype.Aa=function(e){ye(this.g,new Gn(e))},Qn.prototype.za=function(e){ye(this.g,new Kn)},Qn.prototype.ya=function(){ye(this.g,"b")},y(Hn,(function(){this.blockSize=-1})),Hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Hn.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)Wn(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Wn(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Wn(this,r),i=0;break}}this.h=i,this.i+=t},Hn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Yn={};function Jn(e){return-128<=e&&128>e?O(Yn,e,(function(e){return new Xn([0|e],0>e?-1:0)})):new Xn([0|e],0>e?-1:0)}function Zn(e){if(isNaN(e)||!isFinite(e))return tr;if(0>e)return or(Zn(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=er;return new Xn(t,0)}var er=4294967296,tr=Jn(0),nr=Jn(1),rr=Jn(16777216);function ir(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function sr(e){return-1==e.h}function or(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Xn(n,~e.h).add(nr)}function ar(e,t){return e.add(or(t))}function cr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ur(e,t){this.g=e,this.h=t}function lr(e,t){if(ir(t))throw Error("division by zero");if(ir(e))return new ur(tr,tr);if(sr(e))return t=lr(or(e),t),new ur(or(t.g),or(t.h));if(sr(t))return t=lr(e,or(t)),new ur(or(t.g),t.h);if(30<e.g.length){if(sr(e)||sr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=nr,r=t;0>=r.X(e);)n=hr(n),r=hr(r);var i=dr(n,1),s=dr(r,1);for(r=dr(r,2),n=dr(n,2);!ir(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=dr(r,1),n=dr(n,1)}return t=ar(e,i.R(t)),new ur(i,t)}for(i=tr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=Zn(n)).R(t);sr(o)||0<o.X(e);)o=(s=Zn(n-=r)).R(t);ir(s)&&(s=nr),i=i.add(s),e=ar(e,o)}return new ur(i,e)}function hr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Xn(n,e.h)}function dr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Xn(i,e.h)}(r=Xn.prototype).ea=function(){if(sr(this))return-or(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:er+r)*t,t*=er}return e},r.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(ir(this))return"0";if(sr(this))return"-"+or(this).toString(e);for(var t=Zn(Math.pow(e,6)),n=this,r="";;){var i=lr(n,t).g,s=((0<(n=ar(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(ir(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return sr(e=ar(this,e))?-1:ir(e)?0:1},r.abs=function(){return sr(this)?or(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Xn(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(ir(this)||ir(e))return tr;if(sr(this))return sr(e)?or(this).R(or(e)):or(or(this).R(e));if(sr(e))return or(this.R(or(e)));if(0>this.X(rr)&&0>e.X(rr))return Zn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,cr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,cr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,cr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,cr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Xn(n,0)},r.gb=function(e){return lr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Xn(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Xn(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Xn(n,this.h^e.h)},zn.prototype.createWebChannel=zn.prototype.g,$n.prototype.send=$n.prototype.u,$n.prototype.open=$n.prototype.m,$n.prototype.close=$n.prototype.close,He.NO_ERROR=0,He.TIMEOUT=8,He.HTTP_ERROR=6,We.COMPLETE="complete",Je.EventType=et,et.OPEN="a",et.CLOSE="b",et.ERROR="c",et.MESSAGE="d",ge.prototype.listen=ge.prototype.O,un.prototype.listenOnce=un.prototype.P,un.prototype.getLastError=un.prototype.Sa,un.prototype.getLastErrorCode=un.prototype.Ia,un.prototype.getStatus=un.prototype.da,un.prototype.getResponseJson=un.prototype.Wa,un.prototype.getResponseText=un.prototype.ja,un.prototype.send=un.prototype.ha,un.prototype.setWithCredentials=un.prototype.Oa,Hn.prototype.digest=Hn.prototype.l,Hn.prototype.reset=Hn.prototype.reset,Hn.prototype.update=Hn.prototype.j,Xn.prototype.add=Xn.prototype.add,Xn.prototype.multiply=Xn.prototype.R,Xn.prototype.modulo=Xn.prototype.gb,Xn.prototype.compare=Xn.prototype.X,Xn.prototype.toNumber=Xn.prototype.ea,Xn.prototype.toString=Xn.prototype.toString,Xn.prototype.getBits=Xn.prototype.D,Xn.fromNumber=Zn,Xn.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return or(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=Zn(Math.pow(n,8)),i=tr,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=Zn(Math.pow(n,o)),i=i.R(o).add(Zn(a))):i=(i=i.R(r)).add(Zn(a))}return i};var fr=s.createWebChannelTransport=function(){return new zn},pr=s.getStatEventTarget=function(){return Ue()},mr=s.ErrorCode=He,gr=s.EventType=We,yr=s.Event=Ve,vr=s.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wr=s.FetchXmlHttpFactory=tn,br=s.WebChannel=Je,_r=s.XhrIo=un,Sr=s.Md5=Hn,Er=s.Integer=Xn}).call(this,n(37))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},function(e,t,n){"use strict";var r=n(29),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function o(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===i.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:o,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):s(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(1);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(41),t),r.__exportStar(n(42),t),r.__exportStar(n(45),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(49),t),r.__exportStar(n(50),t),r.__exportStar(n(51),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(52),t),r.__exportStar(n(53),t),r.__exportStar(n(54),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(62),t),r.__exportStar(n(63),t),r.__exportStar(n(64),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(65),t),r.__exportStar(n(66),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(72),t),r.__exportStar(n(73),t),r.__exportStar(n(74),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(15);r.__exportStar(n(90),t),r.__exportStar(n(28),t),r.__exportStar(n(91),t),r.__exportStar(n(92),t),r.__exportStar(n(93),t),r.__exportStar(n(94),t),r.__exportStar(n(95),t),r.__exportStar(n(96),t),r.__exportStar(n(97),t),r.__exportStar(n(98),t),r.__exportStar(n(99),t),r.__exportStar(n(100),t)},function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return i})),n.d(t,"__assign",(function(){return s})),n.d(t,"__rest",(function(){return o})),n.d(t,"__decorate",(function(){return a})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return l})),n.d(t,"__generator",(function(){return h})),n.d(t,"__createBinding",(function(){return d})),n.d(t,"__exportStar",(function(){return f})),n.d(t,"__values",(function(){return p})),n.d(t,"__read",(function(){return m})),n.d(t,"__spread",(function(){return g})),n.d(t,"__spreadArrays",(function(){return y})),n.d(t,"__await",(function(){return v})),n.d(t,"__asyncGenerator",(function(){return w})),n.d(t,"__asyncDelegator",(function(){return b})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return S})),n.d(t,"__importStar",(function(){return I})),n.d(t,"__importDefault",(function(){return T})),n.d(t,"__classPrivateFieldGet",(function(){return x})),n.d(t,"__classPrivateFieldSet",(function(){return C}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function h(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function f(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function y(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){s.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=i[e](t)).value instanceof v?Promise.resolve(n.value.v).then(c,u):l(s[0][2],n)}catch(e){l(s[0][3],e)}var n}function c(e){a("next",e)}function u(e){a("throw",e)}function l(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1])}}function b(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:v(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,i,(t=e[n](t)).done,t.value)}))}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var E=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function I(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return E(t,e),t}function T(e){return e&&e.__esModule?e:{default:e}}function x(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function C(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(19),t),r.__exportStar(n(20),t),r.__exportStar(n(101),t),r.__exportStar(n(102),t),r.__exportStar(n(103),t)},function(e,t){},function(e,t,n){"use strict";function r(e,t){if("string"!=typeof t.name)throw new Error("Profile should have a name");const n=(t.methods||[]).reduce((n,r)=>Object.assign(Object.assign({},n),{[r]:e.call.bind(e,t.name,r)}),{});return Object.assign({on:(n,r)=>{e.on.call(e,t.name,n,r)}},n)}Object.defineProperty(t,"__esModule",{value:!0}),t.getApiMap=t.createApi=void 0,t.createApi=r,t.getApiMap=function(e,t){return Object.keys(t).reduce((n,i)=>{const s=t[i];return Object.assign(Object.assign({},n),{[i]:r(e,s)})},{})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PluginClient=t.handleConnectionError=t.defaultOptions=void 0;const r=n(3),i=n(39),s=n(40),o=n(14);function a(e){const t=e?"Make sure the port of the IDE is "+e.port:"If you are using a local IDE, make sure to add devMode in client options";throw new Error("Not connected to the IDE. "+t)}t.defaultOptions={customTheme:!1,customApi:s.remixProfiles},t.handleConnectionError=a;t.PluginClient=class{constructor(e={}){this.id=0,this.isLoaded=!1,this.events=new i.EventEmitter,this.activateService={},this.options=Object.assign(Object.assign({},t.defaultOptions),e),this.events.once("loaded",()=>{this.isLoaded=!0,this.onActivation&&this.onActivation()})}onload(e){return new Promise((t,n)=>{const r=()=>{t(),e&&e()};this.isLoaded?r():this.events.once("loaded",()=>r())})}askUserPermission(e,t){if(!this.currentRequest)return Promise.resolve(!0);if(this.methods.includes(e)){const n=this.currentRequest.from,r=this.name;return this.call("manager","canCall",n,r,e,t)}return Promise.resolve(!1)}canDeactivate(e){return!0}call(e,t,...n){return this.isLoaded||a(this.options.devMode),this.id++,new Promise((r,i)=>{const s=o.callEvent(e,t,this.id);this.events.once(s,(e,t)=>{t?i(new Error("Error from IDE : "+t)):r(e)}),this.events.emit("send",{action:"request",name:e,key:t,payload:n,id:this.id})})}cancel(e,t){this.isLoaded||a(this.options.devMode),this.events.emit("send",{action:"cancel",name:e,key:t})}on(e,t,n){const r=o.listenEvent(e,t);this.events.on(r,n),this.events.emit("send",{action:"on",name:e,key:t,id:this.id})}once(e,t,n){const r=o.listenEvent(e,t);this.events.once(r,n),this.events.emit("send",{action:"once",name:e,key:t,id:this.id})}off(e,t){const n=o.listenEvent(e,t);this.events.removeAllListeners(n),this.events.emit("send",{action:"off",name:e,key:t,id:this.id})}emit(e,...t){this.isLoaded||a(this.options.devMode),this.events.emit("send",{action:"emit",key:e,payload:t})}createService(e,t){return r.__awaiter(this,void 0,void 0,(function*(){if(this.methods&&this.methods.includes(e))throw new Error("A service cannot have the same name as an exposed method");const n=o.createService(e,t);return yield o.activateService(this,n),n}))}prepareService(e,t){return this.activateService[e]=()=>r.__awaiter(this,void 0,void 0,(function*(){if(this.methods&&this.methods.includes(e))throw new Error("A service cannot have the same name as an exposed method");const n=yield t(),r=o.createService(e,n);return yield o.activateService(this,r),delete this.activateService[e],r}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(46),t),r.__exportStar(n(47),t),r.__exportStar(n(48),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(55),t),r.__exportStar(n(56),t),r.__exportStar(n(57),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(58),t),r.__exportStar(n(59),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(60),t),r.__exportStar(n(61),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(67),t),r.__exportStar(n(68),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(69),t),r.__exportStar(n(70),t),r.__exportStar(n(71),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(75),t),r.__exportStar(n(76),t),r.__exportStar(n(77),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRootPath=t.getMethodPath=void 0,t.getMethodPath=function(e,t){if(!t)return e;const n=t.split(".");return n.shift(),n.push(e),n.join(".")},t.getRootPath=function(e){return e.split(".").shift()}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(6);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(6),i=n(111),s={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(a=n(33)),a),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c}).call(this,n(16))},function(e,t,n){"use strict";var r=n(6),i=n(112),s=n(114),o=n(30),a=n(115),c=n(118),u=n(119),l=n(34);e.exports=function(e){return new Promise((function(t,n){var h=e.data,d=e.headers;r.isFormData(h)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(p+":"+m)}var g=a(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),o(g,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in f?c(f.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:r,config:e,request:f};i(t,n,s),f=null}},f.onabort=function(){f&&(n(l("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){n(l("Network Error",e,null,f)),f=null},f.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var y=(e.withCredentials||u(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in f&&r.forEach(d,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete d[t]:f.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),n(e),f=null)})),h||(h=null),f.send(h)}))}},function(e,t,n){"use strict";var r=n(113);e.exports=function(e,t,n,i,s){var o=new Error(e);return r(o,t,n,i,s)}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],s=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(s,u),r.forEach(o,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(void 0,t[i])})),r.forEach(a,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=i.concat(s).concat(o).concat(a),h=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(h,u),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(3).__exportStar(n(104),t)},function(e,t,n){"use strict";var r,i="object"==typeof Reflect?Reflect:null,s=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise((function(n,r){function i(){void 0!==s&&e.removeListener("error",s),n([].slice.call(arguments))}var s;"error"!==t&&(s=function(n){e.removeListener(t,i),r(n)},e.once("error",s)),e.once(t,i)}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var c=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function h(e,t,n,r){var i,s,o,a;if(u(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),o=s[t]),void 0===o)o=s[t]=n,++e._eventsCount;else if("function"==typeof o?o=s[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),(i=l(e))>0&&o.length>i&&!o.warned){o.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=o.length,a=c,console&&console.warn&&console.warn(a)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=d.bind(r);return i.listener=n,r.wrapFn=i,i}function p(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):g(i,i.length)}function m(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return l(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=i[e];if(void 0===c)return!1;if("function"==typeof c)s(c,this,t);else{var u=c.length,l=g(c,u);for(n=0;n<u;++n)s(l[n],this,t)}return!0},a.prototype.addListener=function(e,t){return h(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return h(this,e,t,!0)},a.prototype.once=function(e,t){return u(t),this.on(e,f(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,f(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,r,i,s,o;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,i=s;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,o||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,s=Object.keys(n);for(r=0;r<s.length;++r)"removeListener"!==(i=s[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},a.prototype.listeners=function(e){return p(this,e,!0)},a.prototype.rawListeners=function(e){return p(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},a.prototype.listenerCount=m,a.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(8),t),r.__exportStar(n(21),t),r.__exportStar(n(9),t),r.__exportStar(n(10),t),r.__exportStar(n(22),t),r.__exportStar(n(23),t),r.__exportStar(n(24),t),r.__exportStar(n(11),t),r.__exportStar(n(12),t),r.__exportStar(n(25),t),r.__exportStar(n(26),t),r.__exportStar(n(13),t),r.__exportStar(n(27),t),r.__exportStar(n(78),t),r.__exportStar(n(81),t),r.__exportStar(n(89),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(43),t),r.__exportStar(n(44),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.compilerProfile=void 0,t.compilerProfile={name:"solidity",methods:["compile","getCompilationResult","compileWithParameters","setCompilerConfig"],events:["compilationFinished"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.contentImportProfile=void 0,t.contentImportProfile={name:"contentImport",methods:["resolve","resolveAndSave"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.editorProfile=void 0,t.editorProfile={name:"editor",methods:["discardHighlight","highlight","addAnnotation","clearAnnotations","discardHighlightAt","gotoLine"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filSystemProfile=void 0,t.filSystemProfile={name:"fileManager",displayName:"Native Filemanager for Remix vscode plugin",description:"Provides communication between vscode filemanager and remix-plugin",location:"sidePanel",documentation:"https://remix-ide.readthedocs.io/en/latest/solidity_editor.html",version:"0.0.1",methods:["getFolder","getCurrentFile","getFile","setFile","switchFile","open","writeFile","readFile","rename","copyFile","mkdir","readdir","closeAllFiles","closeFile","remove"],events:["currentFileChanged","fileAdded","fileClosed","fileRemoved","fileRenamed","fileSaved","noFileSelected","folderAdded"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filePanelProfile=void 0,t.filePanelProfile={name:"filePanel",displayName:"File explorers",description:"Provides communication between remix file explorers and remix-plugin",location:"sidePanel",documentation:"",version:"0.0.1",methods:["getCurrentWorkspace","getWorkspaces","createWorkspace","registerContextMenuItem","renameWorkspace","deleteWorkspace"],events:["setWorkspace","workspaceRenamed","workspaceDeleted","workspaceCreated"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dGitProfile=void 0,t.dGitProfile={name:"dGitProvider",methods:["clone","addremote","delremote","remotes","init","status","log","commit","add","rm","lsfiles","readblob","resolveref","branch","branches","checkout","currentbranch","zip","push","pull","setIpfsConfig","getItem","setItem","localStorageUsed"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.gitProfile=void 0,t.gitProfile={name:"remixd.git",methods:["clone","checkout","init","add","commit","fetch","pull","push","reset","status","remote","log"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.networkProfile=void 0,t.networkProfile={name:"network",methods:["addNetwork","detectNetwork","getEndpoint","getNetworkProvider","removeNetwork"],events:["providerChanged"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pluginManagerProfile=void 0,t.pluginManagerProfile={name:"manager",methods:["getProfile","updateProfile","activatePlugin","deactivatePlugin","isActive","canCall"],events:["pluginActivated","pluginDeactivated","profileAdded","profileUpdated"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.settingsProfile=void 0,t.settingsProfile={name:"settings",methods:["getGithubAccessToken"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.themeProfile=void 0,t.themeProfile={name:"theme",methods:["currentTheme"],events:["themeChanged"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.udappProfile=void 0,t.udappProfile={name:"udapp",methods:["createVMAccount","getAccounts","sendTransaction","getSettings","setEnvironmentMode"],events:["newTransaction"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unitTestProfile=void 0,t.unitTestProfile={name:"unitTest",methods:["testFromPath","testFromSource"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(79),t),r.__exportStar(n(80),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.windowProfile=void 0,t.windowProfile={name:"window",methods:["prompt","confirm","alert"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remixProfiles=t.remixApi=void 0;const r=n(8),i=n(10),s=n(9),o=n(11),a=n(13),c=n(26),u=n(27),l=n(21),h=n(25),d=n(24),f=n(82),p=n(12),m=n(22),g=n(23),y=n(85);t.remixApi=Object.freeze({manager:p.pluginManagerProfile,solidity:Object.assign(Object.assign({},r.compilerProfile),{name:"solidity"}),fileManager:Object.assign(Object.assign({},i.filSystemProfile),{name:"fileManager"}),dGitProvider:g.dGitProfile,filePanel:m.filePanelProfile,solidityUnitTesting:Object.assign(Object.assign({},u.unitTestProfile),{name:"solidityUnitTesting"}),editor:s.editorProfile,network:o.networkProfile,udapp:a.udappProfile,contentImport:l.contentImportProfile,settings:h.settingsProfile,theme:c.themeProfile,vscodeExtAPI:f.vscodeExtProfile,terminal:y.terminalProfile}),t.remixProfiles=Object.freeze({manager:p.pluginManagerProfile,solidity:Object.assign(Object.assign({},r.compilerProfile),{name:"solidity"}),fileManager:Object.assign(Object.assign({},i.filSystemProfile),{name:"fileManager"}),git:Object.assign(Object.assign({},d.gitProfile),{name:"git"}),dGitProvider:g.dGitProfile,filePanel:m.filePanelProfile,solidityUnitTesting:Object.assign(Object.assign({},u.unitTestProfile),{name:"solidityUnitTesting"}),editor:s.editorProfile,network:o.networkProfile,udapp:a.udappProfile,contentImport:l.contentImportProfile,settings:h.settingsProfile,theme:c.themeProfile,vscodeExtAPI:f.vscodeExtProfile,terminal:y.terminalProfile})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(83),t),r.__exportStar(n(84),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.vscodeExtProfile=void 0,t.vscodeExtProfile={name:"vscodeExtAPI",methods:["executeCommand"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);r.__exportStar(n(86),t),r.__exportStar(n(87),t),r.__exportStar(n(88),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.terminalProfile=void 0,t.terminalProfile={name:"terminal",methods:["log"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.standardProfiles=void 0;const r=n(8),i=n(10),s=n(9),o=n(11),a=n(13),c=n(12);t.standardProfiles=Object.freeze({manager:c.pluginManagerProfile,solidity:Object.assign(Object.assign({},r.compilerProfile),{name:"solidity"}),fileManager:Object.assign(Object.assign({},i.filSystemProfile),{name:"fileManager"}),editor:s.editorProfile,network:o.networkProfile,udapp:a.udappProfile})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listenEvent=t.callEvent=void 0,t.callEvent=function(e,t,n){return`[${e}] ${t}-${n}`},t.listenEvent=function(e,t){return`[${e}] ${t}`}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PluginService=t.activateService=t.createService=t.getMethods=t.isPluginService=void 0;const r=n(15),i=n(28);function s(e){if(e.methods){for(const t of e.methods)if(!(t in e))throw new Error(`Method ${t} is not part of serivce`);return e.methods}if(t.isPluginService(e)){const t=Object.getPrototypeOf(e);return Object.getOwnPropertyNames(t).filter(e=>"constructor"!==e&&!e.startsWith("_"))}return Object.getOwnPropertyNames(e).filter(t=>"function"==typeof e[t]&&!t.startsWith("_"))}function o(e,n){if(n.path&&i.getRootPath(n.path)!==e)throw new Error(`Service path ${n.path} is different from the one provided: ${e}`);const r=s(n);for(const t of r)if(!(t in n))throw new Error(`Method ${t} is not part of service ${e}`);return t.isPluginService(n)?(n.methods||(n.methods=r),n):Object.assign(Object.assign({},n),{methods:r,path:e})}function a(e,t){e.methods=[...e.methods||[],...t.methods];const n=s(t);for(const r of n)e[`${t.path}.${r}`]=t[r].bind(t);return e.call("manager","updateProfile",{methods:e.methods})}t.isPluginService=e=>e instanceof c,t.getMethods=s,t.createService=o,t.activateService=a;class c{emit(e,...t){this.plugin.emit(e,...t)}createService(e,t){return r.__awaiter(this,void 0,void 0,(function*(){if(this.methods.includes(e))throw new Error("A service cannot have the same name as an exposed method");const n=o(`${this.path}.${e}`,t);return yield a(this.plugin,n),n}))}prepareService(e,t){if(this.methods.includes(e))throw new Error("A service cannot have the same name as an exposed method");const n=`${this.path}.${e}`;this.plugin.activateService[n]=()=>r.__awaiter(this,void 0,void 0,(function*(){const e=t(),r=o(n,e);return yield a(this.plugin,r),delete this.plugin.activateService[n],r}))}}t.PluginService=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PluginQueueItem=void 0;const r=n(15);t.PluginQueueItem=class{constructor(e,t,n,r,i,s){this.options={},this.resolve=e,this.reject=t,this.method=r,this.request=n,this.timer=void 0,this.timedout=!1,this.canceled=!1,this.finished=!1,this.running=!1,this.args=s,this.options=i}setCurrentRequest(e){throw new Error("Cannot call this directly")}callMethod(e,t){throw new Error("Cannot call this directly")}letContinue(){throw new Error("Cannot call this directly")}cancel(){this.canceled=!0,clearTimeout(this.timer),this.reject(`[CANCEL] Canceled call ${this.method} from ${this.request.from}`),this.running&&this.letContinue()}run(){return r.__awaiter(this,void 0,void 0,(function*(){if(this.canceled)this.letContinue();else{this.timer=setTimeout(()=>{this.timedout=!0,this.reject(`[TIMEOUT] Timeout for call ${this.method} from ${this.request.from}`),this.letContinue()},this.options.queueTimeout||1e4),this.running=!0,this.setCurrentRequest(this.request);try{const e=yield this.callMethod(this.method,this.args);if(this.timedout||this.canceled)return;this.resolve(e)}catch(e){this.reject(e)}this.finished=!0,this.running=!1,clearTimeout(this.timer),this.letContinue()}}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createConnectorClient=t.applyApi=t.connectClient=t.isPluginMessage=t.isHandshake=void 0;const r=n(3),i=n(14),s=n(20),o=n(19);function a(e){return"handshake"===e.key&&("request"===e.action||"call"===e.action)}function c(e,t=new s.PluginClient){let n=!1;return e.on(({action:s,key:o,name:c,payload:u,id:l,requestInfo:h,error:d})=>r.__awaiter(this,void 0,void 0,(function*(){try{if(a({action:s,key:o})){n||(n=!0,t.events.on("send",t=>e.send(t)),t.events.emit("loaded"),t.name=u[0]);const r={action:"response",name:c,key:o,id:l,payload:t.methods};return void e.send(r)}if(!n)throw new Error("Handshake before communicating");switch(s){case"emit":case"notification":t.events.emit(i.listenEvent(c,o),...u);break;case"response":t.events.emit(i.callEvent(c,o,l),u,d),delete t.currentRequest;break;case"call":case"request":{const n=h&&h.path,r=i.getMethodPath(o,n);if(!t[r])throw new Error(`Method ${r} doesn't exist on plugin ${c}`);t.currentRequest=h;const s=yield t[r](...u),a={action:"response",name:c,key:o,id:l,payload:s};e.send(a);break}}}catch(t){console.error(t);const n={action:"request"===s?"response":s,name:c,key:o,id:l,error:t.message||t};e.send(n)}}))),n||e.send({action:"request",key:"handshake",id:-1}),t}function u(e){const t=e.options.customApi||{};for(const n in t){if(e[n]){throw new Error(`Your plugin client should have a method/attribut named "${n}" as it is the name of another plugin. `+'To prevent this set the option "customApi" to "null" in the client\'s options. '+'For exemple: "const client = createClient(new PluginClient<any, any>({ customApi: null }))".')}e[n]=o.createApi(e,t[n])}}t.isHandshake=a,t.isPluginMessage=function(e){return"object"==typeof e&&"action"in e&&"name"in e},t.connectClient=c,t.applyApi=u,t.createConnectorClient=(e,t=new s.PluginClient)=>{const n=t;return c(e,n),u(n),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PluginNode=void 0;const r=n(14);class i{constructor(e,t){this.path=e,this.client=t}get(e){return new i(`${this.path}.${e}`,this.client)}call(e,...t){return this.client.call(this.path,e,t)}on(e,t){this.client.on(r.getRootPath(this.path),e,t)}}t.PluginNode=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkOrigin=t.getDevmodeOrigins=t.getOriginsFromUrl=t.remixOrgins=void 0;const r=n(3);function i(e){return r.__awaiter(this,void 0,void 0,(function*(){return(yield fetch(e)).json()}))}function s({devMode:e}){return[...e.port?["http://127.0.0.1:"+e.port,"http://localhost:"+e.port,"https://127.0.0.1:"+e.port,"https://localhost:"+e.port]:[],...e.origins?"string"==typeof e.origins?[e.origins]:e.origins:[]]}t.remixOrgins="https://gist.githubusercontent.com/EthereumRemix/091ccc57986452bbb33f57abfb13d173/raw/3367e019335746b73288e3710af2922d4c8ef5a3/origins.json",t.getOriginsFromUrl=i,t.getDevmodeOrigins=s,t.checkOrigin=function(e,t={}){return r.__awaiter(this,void 0,void 0,(function*(){let n=[];if(t.allowOrigins)if(Array.isArray(t.allowOrigins))n=n.concat(t.allowOrigins);else{const e=yield i(t.allowOrigins);n=n.concat(e)}else{if(!t.devMode)return!0;{const e=s(t);n=n.concat(e)}}return n.includes(e)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createClient=t.WebviewConnector=void 0;const r=n(3),i=n(17),s=n(105);class o{constructor(e){this.options=e;try{return this.isVscode=void 0!==acquireTheiaApi,void(this.source=acquireTheiaApi())}catch(e){this.isVscode=!1}this.source=window.parent}send(e){if(this.isVscode)this.source.postMessage(e);else if(this.origin||i.isHandshake(e)){const t=this.origin||"*";this.source.postMessage(e,t)}}on(e){window.addEventListener("message",t=>r.__awaiter(this,void 0,void 0,(function*(){if(t.source&&t.data){if(t.origin.indexOf("vscode-webview:")>-1){if(t.data.action&&"paste"===t.data.action)return void this.pasteClipBoard(t);if(t.data.action&&"copy"===t.data.action){const e={action:"copy",data:document.getSelection().toString()};return void window.parent.postMessage(e,"*")}}if(i.isPluginMessage(t.data)){if(!this.isVscode){if(!(yield i.checkOrigin(t.origin,this.options)))return console.warn("Origin provided is not allow in message",t);i.isHandshake(t.data)&&(this.origin=t.origin,this.source=t.source,t.data.payload[1]&&"vscode"==t.data.payload[1]&&this.forwardEvents())}e(t.data)}}})),!1)}pasteClipBoard(e){this.insertAtCursor(document.activeElement,e.data.data)}insertAtCursor(e,t){const n=e.value;e.selectionStart||"0"==e.selectionStart?e.value=e.value.substring(0,e.selectionStart)+t+e.value.substring(e.selectionEnd,e.value.length):e.value+=t;const r=new Event("input",{bubbles:!0});r.simulated=!0;const i=e._valueTracker;i&&i.setValue(n),e.dispatchEvent(r)}forwardEvents(){document.addEventListener("keydown",e=>{const t={altKey:e.altKey,code:e.code,ctrlKey:e.ctrlKey,isComposing:e.isComposing,key:e.key,location:e.location,metaKey:e.metaKey,repeat:e.repeat,shiftKey:e.shiftKey,action:"keydown"};window.parent.postMessage(t,"*")}),document.body.onclick=function(e){var t;const n=null===(t=e.target)||void 0===t?void 0:t.closest("a");if(n){const e=n.getAttribute("href");if("#"!=e)return window.parent.postMessage({action:"emit",payload:{href:e}},"*"),!1}return!0}}}function a(e){const t=e.brightness||e.quality;if(document.documentElement.style.setProperty("--brightness",t),e.colors)for(const[t,n]of Object.entries(e.colors))document.documentElement.style.setProperty("--"+t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),n);if(e.breakpoints)for(const[t,n]of Object.entries(e.breakpoints))document.documentElement.style.setProperty("--breakpoint-"+t,n+"px");e.fontFamily&&document.documentElement.style.setProperty("--font-family",e.fontFamily),e.space&&document.documentElement.style.setProperty("--space",e.space+"px")}t.WebviewConnector=o,t.createClient=e=>{const t=e||new i.PluginClient,n=t.options,c=new o(n);return i.connectClient(c,t),i.applyApi(t),n.customTheme||function(e){r.__awaiter(this,void 0,void 0,(function*(){let t;const n=()=>(t||(t=document.createElement("link"),t.setAttribute("rel","stylesheet"),document.head.prepend(t)),t),i=(e,t=null)=>{s.default.get(e).then(()=>{n().setAttribute("href",e)}).catch(()=>{t&&n().setAttribute("href",t)})},o=e=>{if(e.url){const t=e.url.replace(/^http:/,"protocol:").replace(/^https:/,"protocol:"),n=/^https:/,r=t.replace(/^protocol:/,"https:"),s=t.replace(/^protocol:/,"http:");(n.test(e.url)||!n.test(e.url)&&n.test(window.location.href))&&i(r,s),n.test(e.url)||n.test(window.location.href)||i(s),document.documentElement.style.setProperty("--theme",e.quality)}};return e.onload(()=>r.__awaiter(this,void 0,void 0,(function*(){e.on("theme","themeChanged",e=>{o(e),a(e)});const t=yield e.call("theme","currentTheme");o(t),a(t)}))),t}))}(t),t}},function(e,t,n){e.exports=n(106)},function(e,t,n){"use strict";var r=n(6),i=n(29),s=n(107),o=n(35);function a(e){var t=new s(e),n=i(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=a(n(32));c.Axios=s,c.create=function(e){return a(o(c.defaults,e))},c.Cancel=n(36),c.CancelToken=n(120),c.isCancel=n(31),c.all=function(e){return Promise.all(e)},c.spread=n(121),c.isAxiosError=n(122),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(6),i=n(30),s=n(108),o=n(109),a=n(35);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(6);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},function(e,t,n){"use strict";var r=n(6),i=n(110),s=n(31),o=n(32);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return a(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(34);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(6);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(116),i=n(117);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(6),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},function(e,t,n){"use strict";var r=n(6);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(36);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},function(e,t,n){"use strict";n.r(t),n.d(t,"dapposDapp",(function(){return tt}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},s=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${s}--\x3e`,a=new RegExp(`${s}|${o}`);class c{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,c=-1,l=0;const{strings:f,values:{length:p}}=e;for(;l<p;){const e=i.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)u(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=f[l],n=d.exec(t)[2],r=n.toLowerCase()+"$lit$",i=e.getAttribute(r);e.removeAttribute(r);const s=i.split(a);this.parts.push({type:"attribute",index:c,name:n,strings:s}),l+=s.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const r=e.parentNode,i=t.split(a),s=i.length-1;for(let t=0;t<s;t++){let n,s=i[t];if(""===s)n=h();else{const e=d.exec(s);null!==e&&u(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(s)}r.insertBefore(n,e),this.parts.push({type:"node",index:++c})}""===i[s]?(r.insertBefore(h(),e),n.push(e)):e.data=i[s],l+=s}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&c!==o||(c++,t.insertBefore(h(),e)),o=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(n.push(e),c--),l++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),l++}}else i.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const u=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},l=e=>-1!==e.index,h=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,133,null,!1);let s=m(r),o=r[s],a=-1,c=0;const u=[];let l=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(u.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==o&&o.index===a;)o.index=null!==l?-1:o.index-c,s=m(r,s),o=r[s]}u.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},m=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(l(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const g=new WeakMap,y=e=>"function"==typeof e&&g.has(e),v={},w={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let s,o=0,a=0,c=i.nextNode();for(;o<n.length;)if(s=n[o],l(s)){for(;a<s.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=t.pop(),c=i.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),S=` ${s} `;class E{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const a=d.exec(e);t+=null===a?e+(n?S:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==_&&(t=_.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const I=e=>null===e||!("object"==typeof e||"function"==typeof e),T=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!T(e))return e}let r="";for(let i=0;i<t;i++){r+=e[i];const t=n[i];if(void 0!==t){const e=t.value;if(I(e)||!T(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||I(e)&&e===this.value||(this.value=e,y(e)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class A{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(h()),this.endNode=e.appendChild(h())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=h()),e.__insert(this.endNode=h())}insertAfterPart(e){e.__insert(this.startNode=h()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&(I(e)?e!==this.value&&this.__commitText(e):e instanceof E?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):T(e)?this.__commitIterable(e):e===w?(this.value=w,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const n=new b(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)n=t[r],void 0===n&&(n=new A(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class D{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class O extends x{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends C{}let k=!1;(()=>{try{const e={get capture(){return k=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class P{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=M(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const M=e=>e&&(k?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function R(e){let t=L.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},L.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(s);return n=t.keyString.get(r),void 0===n&&(n=new c(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const L=new Map,j=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const F=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,r){const i=t[0];if("."===i){return new O(e,t.slice(1),n).parts}if("@"===i)return[new P(e,t.slice(1),r.eventContext)];if("?"===i)return[new D(e,t.slice(1),n)];return new x(e,t,n).parts}handleTextExpression(e){return new A(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const V=(e,...t)=>new E(e,t,"html",F),B=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const q=e=>t=>{const n=B(t.type,e);let r=L.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},L.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(s);if(i=r.keyString.get(o),void 0===i){const n=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(n,e),i=new c(t,n),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i},z=["html","svg"],$=new Set,G=(e,t,n)=>{$.add(e);const r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:s}=i;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,e);const o=document.createElement("style");for(let e=0;e<s;e++){const t=i[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{z.forEach(t=>{const n=L.get(B(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),f(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const s=document.createTreeWalker(r,133,null,!1);let o=m(i),a=0,c=-1;for(;s.nextNode();){c++;for(s.currentNode===n&&(a=p(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===c;){if(a>0){for(;-1!==o;)i[o].index+=a,o=m(i,o);return}o=m(i,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),f(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const K={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Q=(e,t)=>t!==e&&(t==t||e==e),H={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Q};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=H){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this.requestUpdateInternal(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||H}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=Q){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||K,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||K.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=H){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const i=this.constructor;n=n||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;const X=Element.prototype;X.msMatchesSelector||X.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class Z{constructor(e,t){if(t!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ee={};class te extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Y){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Z(String(t),J)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ee&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ee}}te.finalized=!0,te.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,s=j.has(t),o=U&&11===t.nodeType&&!!t.host,a=o&&!$.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=j.get(t);void 0===r&&(i(t,t.firstChild),j.set(t,r=new A(Object.assign({templateFactory:R},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:q(r)},n)),a){const e=j.get(c);j.delete(c);const n=e.value instanceof b?e.value.template:void 0;G(r,c,n),i(t,t.firstChild),t.appendChild(c),j.set(t,e)}!s&&o&&window.ShadyCSS.styleElement(t.host)};var ne=n(17),re=n(38);var ie={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let se;const oe=new Uint8Array(16);function ae(){if(!se&&(se="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!se))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return se(oe)}const ce=[];for(let e=0;e<256;++e)ce.push((e+256).toString(16).slice(1));function ue(e,t=0){return(ce[e[t+0]]+ce[e[t+1]]+ce[e[t+2]]+ce[e[t+3]]+"-"+ce[e[t+4]]+ce[e[t+5]]+"-"+ce[e[t+6]]+ce[e[t+7]]+"-"+ce[e[t+8]]+ce[e[t+9]]+"-"+ce[e[t+10]]+ce[e[t+11]]+ce[e[t+12]]+ce[e[t+13]]+ce[e[t+14]]+ce[e[t+15]]).toLowerCase()}var le=function(e,t,n){if(ie.randomUUID&&!t&&!e)return ie.randomUUID();const r=(e=e||{}).random||(e.rng||ae)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return ue(r)},he=n(1),de=n(7),fe=n(2),pe=n(5);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(e,t){this._delegate=e,this.firebase=t,Object(fe._addComponent)(e,new de.a("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(fe.deleteApp)(this._delegate)))}_getService(e,t=fe._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=fe._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(fe._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){Object(fe._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ye=new he.b("app-compat","Firebase",ge);const ve=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(r,i={}){const s=fe.initializeApp(r,i);if(Object(he.e)(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o},app:r,registerVersion:fe.registerVersion,setLogLevel:fe.setLogLevel,onLog:fe.onLog,apps:null,SDK_VERSION:fe.SDK_VERSION,INTERNAL:{registerComponent:function(t){const i=t.name,s=i.replace("-compat","");if(fe._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=r())=>{if("function"!=typeof e[s])throw ye.create("invalid-app-argument",{appName:i});return e[s]()};void 0!==t.serviceProps&&Object(he.i)(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:fe}};function r(e){if(e=e||fe._DEFAULT_ENTRY_NAME,!Object(he.e)(t,e))throw ye.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),r.App=e,n}(me);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(he.i)(t,e)},createSubscribe:he.g,ErrorFactory:he.b,deepExtend:he.i}),t}(),we=new pe.b("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(Object(he.n)()&&void 0!==self.firebase){we.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&we.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const be=ve;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _e;Object(fe.registerVersion)("@firebase/app-compat","0.2.10",_e);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
be.registerVersion("firebase","9.22.0","app-compat");var Se=n(0);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ee(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new Se.g("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){if("undefined"==typeof Uint8Array)throw new Se.g("unimplemented","Uint8Arrays are not available in this environment.")}function Te(){if(!Object(Se.r)())throw new Se.g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class xe{constructor(e){this._delegate=e}static fromBase64String(e){return Te(),new xe(Se.b.fromBase64String(e))}static fromUint8Array(e){return Ie(),new xe(Se.b.fromUint8Array(e))}toBase64(){return Te(),this._delegate.toBase64()}toUint8Array(){return Ie(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Ae{enableIndexedDbPersistence(e,t){return Object(Se.F)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(Se.G)(e._delegate)}clearIndexedDbPersistence(e){return Object(Se.x)(e._delegate)}}class De{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Se.m||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(Se.s)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(Se.A)(this._delegate,e,t,n)}enableNetwork(){return Object(Se.H)(this._delegate)}disableNetwork(){return Object(Se.D)(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(Se.t)("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(Se.lb)(this._delegate)}onSnapshotsInSync(e){return Object(Se.Y)(this._delegate,e)}get app(){if(!this._appCompat)throw new Se.g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ze(this,Object(Se.y)(this._delegate,e))}catch(e){throw Re(e,"collection()","Firestore.collection()")}}doc(e){try{return new Me(this,Object(Se.E)(this._delegate,e))}catch(e){throw Re(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Be(this,Object(Se.z)(this._delegate,e))}catch(e){throw Re(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(Se.db)(this._delegate,t=>e(new Ne(this,t)))}batch(){return Object(Se.K)(this._delegate),new ke(new Se.l(this._delegate,e=>Object(Se.L)(this._delegate,e)))}loadBundle(e){return Object(Se.V)(this._delegate,e)}namedQuery(e){return Object(Se.W)(this._delegate,e).then(e=>e?new Be(this,e):null)}}class Oe extends Se.a{constructor(e){super(),this.firestore=e}convertBytes(e){return new xe(new Se.b(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Me.forKey(t,this.firestore,null)}}class Ne{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Oe(e)}get(e){const t=$e(e);return this._delegate.get(t).then(e=>new Fe(this._firestore,new Se.e(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=$e(e);return n?(Ee("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=$e(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=$e(e);return this._delegate.delete(t),this}}class ke{constructor(e){this._delegate=e}set(e,t,n){const r=$e(e);return n?(Ee("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=$e(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=$e(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Pe{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Se.i(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ve(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Pe.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Pe(e,new Oe(e),t),r.set(t,i)),i}}Pe.INSTANCES=new WeakMap;class Me{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Oe(e)}static forPath(e,t,n){if(e.length%2!=0)throw new Se.g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Me(t,new Se.d(t._delegate,n,new Se.n(e)))}static forKey(e,t,n){return new Me(t,new Se.d(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ze(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ze(this.firestore,Object(Se.y)(this._delegate,e))}catch(e){throw Re(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=Object(he.l)(e))instanceof Se.d&&Object(Se.cb)(this._delegate,e)}set(e,t){t=Ee("DocumentReference.set",t);try{return t?Object(Se.fb)(this._delegate,e,t):Object(Se.fb)(this._delegate,e)}catch(e){throw Re(e,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(Se.kb)(this._delegate,e):Object(Se.kb)(this._delegate,e,t,...n)}catch(e){throw Re(e,"updateDoc()","DocumentReference.update()")}}delete(){return Object(Se.B)(this._delegate)}onSnapshot(...e){const t=Le(e),n=je(e,e=>new Fe(this.firestore,new Se.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(Se.X)(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Object(Se.N)(this._delegate):"server"===(null==e?void 0:e.source)?Object(Se.O)(this._delegate):Object(Se.M)(this._delegate),t.then(e=>new Fe(this.firestore,new Se.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new Me(this.firestore,e?this._delegate.withConverter(Pe.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Re(e,t,n){return e.message=e.message.replace(t,n),e}function Le(e){for(const t of e)if("object"==typeof t&&!Ce(t))return t;return{}}function je(e,t){var n,r;let i;return i=Ce(e[0])?e[0]:Ce(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Fe{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Me(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(Se.hb)(this._delegate,e._delegate)}}class Ve extends Fe{data(e){const t=this._delegate.data(e);return Object(Se.q)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Be{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Oe(e)}where(e,t,n){try{return new Be(this.firestore,Object(Se.ab)(this._delegate,Object(Se.mb)(e,t,n)))}catch(e){throw Re(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Be(this.firestore,Object(Se.ab)(this._delegate,Object(Se.Z)(e,t)))}catch(e){throw Re(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Be(this.firestore,Object(Se.ab)(this._delegate,Object(Se.T)(e)))}catch(e){throw Re(e,"limit()","Query.limit()")}}limitToLast(e){try{return new Be(this.firestore,Object(Se.ab)(this._delegate,Object(Se.U)(e)))}catch(e){throw Re(e,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Be(this.firestore,Object(Se.ab)(this._delegate,Object(Se.jb)(...e)))}catch(e){throw Re(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Be(this.firestore,Object(Se.ab)(this._delegate,Object(Se.ib)(...e)))}catch(e){throw Re(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Be(this.firestore,Object(Se.ab)(this._delegate,Object(Se.J)(...e)))}catch(e){throw Re(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Be(this.firestore,Object(Se.ab)(this._delegate,Object(Se.I)(...e)))}catch(e){throw Re(e,"endAt()","Query.endAt()")}}isEqual(e){return Object(Se.bb)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Object(Se.Q)(this._delegate):"server"===(null==e?void 0:e.source)?Object(Se.R)(this._delegate):Object(Se.P)(this._delegate),t.then(e=>new qe(this.firestore,new Se.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=Le(e),n=je(e,e=>new qe(this.firestore,new Se.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(Se.X)(this._delegate,t,n)}withConverter(e){return new Be(this.firestore,e?this._delegate.withConverter(Pe.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Ue{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ve(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class qe{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Be(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ve(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new Ue(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Ve(this._firestore,n))})}isEqual(e){return Object(Se.hb)(this._delegate,e._delegate)}}class ze extends Be{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Me(this.firestore,e):null}doc(e){try{return new Me(this.firestore,void 0===e?Object(Se.E)(this._delegate):Object(Se.E)(this._delegate,e))}catch(e){throw Re(e,"doc()","CollectionReference.doc()")}}add(e){return Object(Se.u)(this._delegate,e).then(e=>new Me(this.firestore,e))}isEqual(e){return Object(Se.cb)(this._delegate,e._delegate)}withConverter(e){return new ze(this.firestore,e?this._delegate.withConverter(Pe.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function $e(e){return Object(Se.p)(e,Se.d)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(...e){this._delegate=new Se.f(...e)}static documentId(){return new Ge(Se.o.keyField().canonicalString())}isEqual(e){return(e=Object(he.l)(e))instanceof Se.f&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(Se.eb)();return e._methodName="FieldValue.serverTimestamp",new Ke(e)}static delete(){const e=Object(Se.C)();return e._methodName="FieldValue.delete",new Ke(e)}static arrayUnion(...e){const t=Object(Se.w)(...e);return t._methodName="FieldValue.arrayUnion",new Ke(t)}static arrayRemove(...e){const t=Object(Se.v)(...e);return t._methodName="FieldValue.arrayRemove",new Ke(t)}static increment(e){const t=Object(Se.S)(e);return t._methodName="FieldValue.increment",new Ke(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe={Firestore:De,GeoPoint:Se.h,Timestamp:Se.k,Blob:xe,Transaction:Ne,WriteBatch:ke,DocumentReference:Me,DocumentSnapshot:Fe,Query:Be,QueryDocumentSnapshot:Ve,QuerySnapshot:qe,CollectionReference:ze,FieldPath:Ge,FieldValue:Ke,setLogLevel:function(e){Object(Se.gb)(e)},CACHE_SIZE_UNLIMITED:Se.c};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var He,We;We=(e,t)=>new De(e,t,new Ae),(He=be).INTERNAL.registerComponent(new de.a("firestore-compat",e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("firestore").getImmediate();return We(t,n)},"PUBLIC").setServiceProps(Object.assign({},Qe))),He.registerVersion("@firebase/firestore-compat","0.3.9");be.initializeApp({apiKey:"AIzaSyAQRKRfVMQEcW4LrEIcJnDixaqXsutmroc",authDomain:"appdapposprod.firebaseapp.com",projectId:"appdapposprod",storageBucket:"appdapposprod.appspot.com",messagingSenderId:"446253381595",appId:"1:446253381595:web:1c9a30607456f3dd2f19fe",measurementId:"G-2ZPRPNNMC0"});var Xe=be,Ye=n(18),Je=n.n(Ye),Ze=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},et=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))};let tt=class extends te{constructor(){super(),this.client=Object(re.createClient)(new ne.PluginClient),this.contracts={},this.contractAlerts={},this.dapposDapps={},this.init()}init(){return et(this,void 0,void 0,(function*(){yield this.client.onload(),this.client.solidity.on("compilationFinished",(e,t,n,r)=>{if(!r)return;this.contracts=this.createContracts(r);this.client.emit("statusChanged",{key:"succeed",type:"success",title:"New interface generated"}),this.requestUpdate()})}))}createRenderRoot(){return this}createContracts(e){return Object.keys(e.contracts).reduce((t,n)=>{const r=e.contracts[n];return Object.keys(r).forEach(e=>t[e]={abi:r[e].abi}),t},{})}generateInterface(){return et(this,void 0,void 0,(function*(){try{const e=document.getElementById("dappName").value;if(""===e.trim())throw new Error("Please enter a name for your dapp");const t=document.getElementById("dappAddress").value;if(!/^(0x)+[0-9a-fA-F]{40}$/i.test(t))throw new Error("Please enter a valid contract address");const n=[].slice.call(document.querySelectorAll("input[type=checkbox]:checked")).map(e=>e.value);if(0===n.reduce((e,t)=>e.concat(this.contracts[t].abi),[]).length)throw new Error("Please select at least one contract");if(e.includes("/"))throw new Error('Dapp name cannot contain "/". Please choose another name.');this.client.emit("statusChanged",{key:"loading",type:"info",title:"Generating ..."});let r=localStorage.getItem("uniqueId");r||(r=le(),localStorage.setItem("uniqueId",r));const i=le(),s={id:i,dappName:e,walletConnected:!1,dappSaved:!1,frontendStructure:{sections:[{id:le(),backgroundColor:"#1b2129",config:{configOpen:!0,configActive:!0,selectedBlockConfig:""},blocks:[]}],font:{fontFamily:"Chakra Petch",config:{configOpen:!0,configActive:!0}},connectButton:{backgroundColor:"",textColor:""}},contracts:n.map(e=>({address:t,abi:this.contracts[e].abi,name:e})),images:[],config:{windowClick:!1}},o=Xe.firestore();try{yield o.collection("remixUsers").doc(r).collection("dapps").doc(i).set(s)}catch(e){console.log("error: ",e)}const a=`https://app.dappos.io//DappBuilder?uniqueId=${encodeURIComponent(r)}&dappId=${encodeURIComponent(i)}`;window.open(a,"_blank"),setTimeout(()=>{this.client.emit("statusChanged",{key:"none"})},1e4)}catch(e){this.showAlert(e)}}))}showAlert(e){if(e){const t=""+e;this.contractAlerts={message:t,type:"warning"}}else{const e=Je.a[Math.floor(Math.random()*Je.a.length)];this.contractAlerts={message:e,type:"success"}}this.requestUpdate(),setTimeout(()=>{this.contractAlerts={},this.requestUpdate()},5e3)}render(){const e=Object.keys(this.contracts).length>0,t=e?Object.keys(this.contracts).map((e,t)=>V`
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="${e}"
                id="${t}"
                checked
              />
              <label>
                ${e} [${this.contracts[e].abi.length} functions]
              </label>
            </div>
          `):V`
          <div class="list-group-item">
            None found, please compile a contract using the Solidity Compiler
            tab <img src="./compiler.png" width="30" />
          </div>
        `,n=V`
      <div>
        <div class="form-group">
          <label for="dappContracts">Available Contracts:</label>
          ${t}
        </div>
        <div class="form-group">
          <label for="dappName">Dapp Name: </label>
          <input
            type="text"
            class="form-control"
            id="dappName"
            ?disabled="${!e}"
            value="${Object.keys(this.contracts)[0]||""}"
          />
        </div>
        <div class="form-group">
          <label for="dappAddress">Deployed Address: </label>
          <input
            type="text"
            class="form-control"
            id="dappAddress"
            placeholder="0xabc..."
            ?disabled="${!e}"
          />
        </div>
        <button
          type="submit"
          style="margin:10px 0 3px 0"
          class="btn btn-lg btn-primary mb-2"
          @click="${()=>this.generateInterface()}"
          ?disabled="${!e}"
        >
          Create Dapp
        </button>
      </div>
    `,r=V`
      <div
        class="alert alert-${this.contractAlerts.type}"
        role="alert"
        ?hidden="${0===Object.keys(this.contractAlerts).length}"
      >
        <img style="margin: 0 0 0 0" src="./chelsea.png" width="50" /> ${this.contractAlerts.message}
      </div>
    `;return V`
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
        <div style="margin: 10px 0  0 0" id="form">${n}</div>
        <div id="alerts" style="margin: 0 0  0 0">${r}</div>
        <h6 style="margin: 10px 0  0 0">Need help?</h6>
        <h6>
          <a href="https://docs.dappos.io/" target="_blank">dappos docs</a>
        </h6>
      </main>
    `}};var nt;tt=Ze([(nt="dappos-plugin",e=>"function"==typeof e?((e,t)=>(window.customElements.define(e,t),t))(nt,e):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(nt,e))],tt)}]);