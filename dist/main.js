(()=>{"use strict";var e={174:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([e.id,"\nbody {\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #ffffff; \n    text-align: center;\n}\n.container{\n\n    margin-left: auto;\n    margin-right: auto;\n\n    background-color: #ffffff;\n    font-family: 'Papyrus', sans-serif;\n    width: 700px;\n    height: 750px;\n    border-radius: 10px;\n}\n.cards{\n    display: inline-block;\n}\nimg{\n    width: 20%;\n    height: auto;\n}\n#dealersHiddenCard{\n    \n    width:140px;\n    height:195px;\n\n    background-color: #89868693; \n    border: 1px solid black;\n    border-radius: 6px;\n}\n\n#popUpWindow{\n    background-color: rgb(255, 255, 255);\n    margin: 0;\n    top: 50px;\n    left: 65%;\n    font-family: 'Papyrus', sans-serif;\n    border-radius: 10px;\n\n  }\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},892:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(379),o=n.n(r),s=n(795),i=n.n(s),a=n(569),c=n.n(a),u=n(565),l=n.n(u),d=n(216),f=n.n(d),p=n(589),h=n.n(p),m=n(174),y={};y.styleTagTransform=h(),y.setAttributes=l(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=f(),o()(m.Z,y);const g=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],u=r.base?c[0]+r.base:c[0],l=s[u]||0,d="".concat(u," ").concat(l);s[u]=l+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=n(s[i]);t[a].references--}for(var c=r(e,o),u=0;u<s.length;u++){var l=n(s[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},293:(e,t,n)=>{const r=n(218);e.exports.drawCard=function(e,t){return r.get(`https://www.deckofcardsapi.com/api/deck/${e}/draw/?count=${t}`).then((function(e){return e.data.cards}))},e.exports.getNewDeck=function(){return r.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6").then((e=>e.data.deck_id))}},218:(e,t,n)=>{function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,i=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>i(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,d=u("undefined"),f=c("ArrayBuffer"),p=u("string"),h=u("function"),m=u("number"),y=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==i(e))return!1;const t=s(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=c("Date"),v=c("File"),w=c("Blob"),E=c("FileList"),O=c("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function T(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n.g,A=e=>!d(e)&&e!==R,C=(x="undefined"!=typeof Uint8Array&&s(Uint8Array),e=>x&&e instanceof x);var x;const N=c("HTMLFormElement"),j=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=c("RegExp"),B=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},k="abcdefghijklmnopqrstuvwxyz",L="0123456789",U={DIGIT:L,ALPHA:k,ALPHA_DIGIT:k+k.toUpperCase()+L},_=c("AsyncFunction");var D={isArray:l,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=i(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:p,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:g,isUndefined:d,isDate:b,isFile:v,isBlob:w,isRegExp:P,isFunction:h,isStream:e=>y(e)&&h(e.pipe),isURLSearchParams:O,isTypedArray:C,isFileList:E,forEach:S,merge:function e(){const{caseless:t}=A(this)&&this||{},n={},r=(r,o)=>{const s=t&&T(n,o)||o;g(n[s])&&g(r)?n[s]=e(n[s],r):g(r)?n[s]=e({},r):l(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(S(t,((t,o)=>{n&&h(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:N,hasOwnProperty:j,hasOwnProp:j,reduceDescriptors:B,freezeMethods:e=>{B(e,((t,n)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];h(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:T,global:R,isContextDefined:A,ALPHABET:U,generateString:(e=16,t=U.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return S(e,((e,t)=>{const s=n(e,r+1);!d(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:_,isThenable:e=>e&&(y(e)||h(e))&&h(e.then)&&h(e.catch)};function F(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}D.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const I=F.prototype,M={};function H(e){return D.isPlainObject(e)||D.isArray(e)}function q(e){return D.endsWith(e,"[]")?e.slice(0,-2):e}function z(e,t,n){return e?e.concat(t).map((function(e,t){return e=q(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{M[e]={value:e}})),Object.defineProperties(F,M),Object.defineProperty(I,"isAxiosError",{value:!0}),F.from=(e,t,n,r,o,s)=>{const i=Object.create(I);return D.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),F.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const J=D.toFlatObject(D,{},null,(function(e){return/^is[A-Z]/.test(e)}));function V(e,t,n){if(!D.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!D.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&D.isSpecCompliantForm(t);if(!D.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(D.isDate(e))return e.toISOString();if(!a&&D.isBlob(e))throw new F("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(e)||D.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(D.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(D.isArray(e)&&function(e){return D.isArray(e)&&!e.some(H)}(e)||(D.isFileList(e)||D.endsWith(n,"[]"))&&(a=D.toArray(e)))return n=q(n),a.forEach((function(e,r){!D.isUndefined(e)&&null!==e&&t.append(!0===i?z([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!H(e)||(t.append(z(o,n,s),c(e)),!1)}const l=[],d=Object.assign(J,{defaultVisitor:u,convertValue:c,isVisitable:H});if(!D.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!D.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),D.forEach(n,(function(n,s){!0===(!(D.isUndefined(n)||null===n)&&o.call(t,n,D.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function W(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function $(e,t){this._pairs=[],e&&V(e,this,t)}const K=$.prototype;function G(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Y(e,t,n){if(!t)return e;const r=n&&n.encode||G,o=n&&n.serialize;let s;if(s=o?o(t,n):D.isURLSearchParams(t)?t.toString():new $(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}K.append=function(e,t){this._pairs.push([e,t])},K.toString=function(e){const t=e?function(t){return e.call(this,t,W)}:W;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Z=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Q={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},X={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:$,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function ee(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&D.isArray(r)?r.length:s,a?(D.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&D.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&D.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(D.isFormData(e)&&D.isFunction(e.entries)){const n={};return D.forEachEntry(e,((e,r)=>{t(function(e){return D.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const te={"Content-Type":void 0},ne={transitional:Q,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=D.isObject(e);if(o&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return r&&r?JSON.stringify(ee(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return V(e,new X.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return X.isNode&&D.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=D.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return V(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(D.isString(e))try{return(0,JSON.parse)(e),D.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ne.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&D.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw F.from(e,F.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:X.classes.FormData,Blob:X.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};D.forEach(["delete","get","head"],(function(e){ne.headers[e]={}})),D.forEach(["post","put","patch"],(function(e){ne.headers[e]=D.merge(te)}));var re=ne;const oe=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),se=Symbol("internals");function ie(e){return e&&String(e).trim().toLowerCase()}function ae(e){return!1===e||null==e?e:D.isArray(e)?e.map(ae):String(e)}function ce(e,t,n,r,o){return D.isFunction(r)?r.call(this,t,n):(o&&(t=n),D.isString(t)?D.isString(r)?-1!==t.indexOf(r):D.isRegExp(r)?r.test(t):void 0:void 0)}class ue{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ie(t);if(!o)throw new Error("header name must be a non-empty string");const s=D.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ae(e))}const s=(e,t)=>D.forEach(e,((e,n)=>o(e,n,t)));return D.isPlainObject(e)||e instanceof this.constructor?s(e,t):D.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&oe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ie(e)){const n=D.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(D.isFunction(t))return t.call(this,e,n);if(D.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ie(e)){const n=D.findKey(this,e);return!(!n||void 0===this[n]||t&&!ce(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ie(e)){const o=D.findKey(n,e);!o||t&&!ce(0,n[o],o,t)||(delete n[o],r=!0)}}return D.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ce(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return D.forEach(this,((r,o)=>{const s=D.findKey(n,o);if(s)return t[s]=ae(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ae(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return D.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&D.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[se]=this[se]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ie(e);t[r]||(function(e,t){const n=D.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return D.isArray(e)?e.forEach(r):r(e),this}}ue.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),D.freezeMethods(ue.prototype),D.freezeMethods(ue);var le=ue;function de(e,t){const n=this||re,r=t||n,o=le.from(r.headers);let s=r.data;return D.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function fe(e){return!(!e||!e.__CANCEL__)}function pe(e,t,n){F.call(this,null==e?"canceled":e,F.ERR_CANCELED,t,n),this.name="CanceledError"}D.inherits(pe,F,{__CANCEL__:!0});var he=X.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),D.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),D.isString(r)&&i.push("path="+r),D.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function me(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var ye=X.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=D.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ge(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,d=0;for(;l!==s;)d+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const f=u&&c-u;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const be={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=le.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}D.isFormData(r)&&(X.isStandardBrowserEnv||X.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=me(e.baseURL,e.url);function l(){if(!c)return;const r=le.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),Y(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new F("Request aborted",F.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new F("Network Error",F.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Q;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new F(t,r.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,c)),c=null},X.isStandardBrowserEnv){const t=(e.withCredentials||ye(u))&&e.xsrfCookieName&&he.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&D.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),D.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",ge(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new pe(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);d&&-1===X.protocols.indexOf(d)?n(new F("Unsupported protocol "+d+":",F.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};D.forEach(be,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function ve(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pe(null,e)}function we(e){return ve(e),e.headers=le.from(e.headers),e.data=de.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=D.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=D.isString(n)?be[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new F(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(D.hasOwnProp(be,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!D.isFunction(r))throw new TypeError("adapter is not a function");return r})(e.adapter||re.adapter)(e).then((function(t){return ve(e),t.data=de.call(e,e.transformResponse,t),t.headers=le.from(t.headers),t}),(function(t){return fe(t)||(ve(e),t&&t.response&&(t.response.data=de.call(e,e.transformResponse,t.response),t.response.headers=le.from(t.response.headers))),Promise.reject(t)}))}const Ee=e=>e instanceof le?e.toJSON():e;function Oe(e,t){t=t||{};const n={};function r(e,t,n){return D.isPlainObject(e)&&D.isPlainObject(t)?D.merge.call({caseless:n},e,t):D.isPlainObject(t)?D.merge({},t):D.isArray(t)?t.slice():t}function o(e,t,n){return D.isUndefined(t)?D.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!D.isUndefined(t))return r(void 0,t)}function i(e,t){return D.isUndefined(t)?D.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ee(e),Ee(t),!0)};return D.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);D.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Se={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Se[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Te={};Se.transitional=function(e,t,n){function r(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new F(r(o," has been removed"+(t?" in "+t:"")),F.ERR_DEPRECATED);return t&&!Te[o]&&(Te[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var Re={assertOptions:function(e,t,n){if("object"!=typeof e)throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new F("option "+s+" must be "+n,F.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new F("Unknown option "+s,F.ERR_BAD_OPTION)}},validators:Se};const Ae=Re.validators;class Ce{constructor(e){this.defaults=e,this.interceptors={request:new Z,response:new Z}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Oe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&Re.assertOptions(n,{silentJSONParsing:Ae.transitional(Ae.boolean),forcedJSONParsing:Ae.transitional(Ae.boolean),clarifyTimeoutError:Ae.transitional(Ae.boolean)},!1),null!=r&&(D.isFunction(r)?t.paramsSerializer={serialize:r}:Re.assertOptions(r,{encode:Ae.function,serialize:Ae.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&D.merge(o.common,o[t.method]),s&&D.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=le.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,d=0;if(!a){const e=[we.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);d<l;)u=u.then(e[d++],e[d++]);return u}l=i.length;let f=t;for(d=0;d<l;){const e=i[d++],t=i[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{u=we.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,l=c.length;d<l;)u=u.then(c[d++],c[d++]);return u}getUri(e){return Y(me((e=Oe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],(function(e){Ce.prototype[e]=function(t,n){return this.request(Oe(n||{},{method:e,url:t,data:(n||{}).data}))}})),D.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Oe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ce.prototype[e]=t(),Ce.prototype[e+"Form"]=t(!0)}));var xe=Ce;class Ne{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new pe(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ne((function(t){e=t})),cancel:e}}}var je=Ne;const Pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pe).forEach((([e,t])=>{Pe[t]=e}));var Be=Pe;const ke=function e(t){const n=new xe(t),o=r(xe.prototype.request,n);return D.extend(o,xe.prototype,n,{allOwnKeys:!0}),D.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(Oe(t,n))},o}(re);ke.Axios=xe,ke.CanceledError=pe,ke.CancelToken=je,ke.isCancel=fe,ke.VERSION="1.4.0",ke.toFormData=V,ke.AxiosError=F,ke.Cancel=ke.CanceledError,ke.all=function(e){return Promise.all(e)},ke.spread=function(e){return function(t){return e.apply(null,t)}},ke.isAxiosError=function(e){return D.isObject(e)&&!0===e.isAxiosError},ke.mergeConfig=Oe,ke.AxiosHeaders=le,ke.formToJSON=e=>ee(D.isHTMLForm(e)?new FormData(e):e),ke.HttpStatusCode=Be,ke.default=ke,e.exports=ke}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{n(892);const{getNewDeck:e,drawCard:t}=n(293),r={cards:[],cardvalue:0,getCardValue(){this.cardvalue=0;for(const e of this.cards)"JACK"===e.value|"QUEEN"===e.value|"KING"===e.value&&(e.value=10),"ACE"===e.value&&(e.value=11),this.cardvalue+=parseInt(e.value)}},o={cards:[],cardvalue:0,money:100,bet:0,getCardValue(){this.cardvalue=0;for(const e of this.cards)"JACK"===e.value|"QUEEN"===e.value|"KING"===e.value&&(e.value=10),"ACE"===e.value&&(e.value=11),this.cardvalue+=parseInt(e.value)},refreshMoney(){playersMoney.innerText=this.money},aceCounter(){let e=0;for(const t of this.cards)11===t.value&&e++;e!==l&&(l=e-p)}},s={BlackJack:1.5,TripleSeven:1.5,Bust:0,DealerBust:2,LowerThanDealer:0,HigherThanDealer:2};let i=!1,a="",c=0,u=0,l=0,d=!1,f=!1,p=0;document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("dealersHand"),h=document.querySelectorAll(".dealersCard"),m=document.getElementById("dealersHiddenCard"),y=document.getElementById("playersHand"),g=document.getElementsByClassName("playersCard"),b=document.getElementById("hit"),v=document.getElementById("stay"),w=document.getElementById("newGame"),E=document.getElementById("playersMoney"),O=document.getElementById("betInput"),S=document.getElementById("bet"),T=document.getElementById("popUpWindow"),R=document.getElementById("instructions");function A(){C("Push! We have the same cardvalue, you get your bet back!",2500),o.money+=parseInt(o.bet),o.refreshMoney(),f=!1}function C(e,t){R.innerText=e,T.showModal(),setTimeout((()=>{T.close()}),t)}function x(){setTimeout((()=>{t(a,1).then((e=>{r.cards.push(e[0]);const t=document.createElement("img");t.setAttribute("id",`dealersHitCard ${u+1}`),t.src=e[0].image,n.appendChild(t),r.getCardValue(),u++,r.cardvalue<17?x():setTimeout((()=>{N()}),500)}))}),2500)}function N(){d&&(2===o.cards.length&&21===o.cardvalue&&(d=!1,f=!0,m.style="display: none",h[1].style="display:",21===r.cardvalue?setTimeout((()=>{A()}),1e3):(setTimeout((()=>{C(`Black Jack! You won ${s.BlackJack*o.bet}€`,2500),o.money+=s.BlackJack*o.bet,o.refreshMoney(),d=!1}),1e3),f=!1)),3===o.cards.length&&"7"===o.cards[0].value&&"7"===o.cards[1].value&&"7"===o.cards[2].value&&(C(`WoW! Triple Seven! You won ${s.TripleSeven*o.bet}€`,2500),o.money+=s.tripleSeven*o.bet,o.refreshMoney(),d=!1),o.cardvalue>21&&(0!==l&&(o.cardvalue-=10,p++),o.cardvalue>21&&(C(`Bust! Your cardvalue of ${o.cardvalue} is too high. You lost your bet!`,2500),d=!1))),f&&(r.cardvalue<=21&&r.cardvalue>o.cardvalue?(C(`You lose against the dealer with ${o.cardvalue} to ${r.cardvalue}!`,2500),f=!1):r.cardvalue>21&&(C("My cardvalue is too high...you win "+s.DealerBust*o.bet,2500),o.money+=s.DealerBust*o.bet,o.refreshMoney(),f=!1),r.cardvalue<o.cardvalue&&(C(`Good game! You won ${s.HigherThanDealer*o.bet}€`,2500),o.money+=s.HigherThanDealer*o.bet,o.refreshMoney(),f=!1),r.cardvalue===o.cardvalue&&A())}E.innerText=o.money,setTimeout((()=>{C('Click "New Game" to start!',1500)}),1e3),w.addEventListener("click",(()=>{e().then((function(e){a=e})),h[1].style="display: none",h[2].style="display: none",o.bet=0,S.innerText=o.bet,r.cards=[],r.cardvalue=0,o.cards=[],o.cardvalue=0,l=0;for(const e of h)e.src="";for(const e of g)e.src="";for(let e=1;e<=c;e++)document.getElementById(`playersHitCard ${e}`).remove();for(let e=1;e<=u;e++)document.getElementById(`dealersHitCard ${e}`).remove();c=0,u=0,i=!0,d=!1,f=!1,setTimeout((()=>{C("Make your bet!",1e3)}),250)})),O.addEventListener("keyup",(e=>{i&&13===e.keyCode&&""!==O.value&&(O.value>o.money?C("You don't have that much money to bet!",1e3):(o.bet=O.value,S.innerText=o.bet,o.money-=o.bet,o.refreshMoney(),i=!1,d=!0,O.value="",t(a,2).then((e=>{r.cards=e,h[0].src=r.cards[0].image,h[1].src=r.cards[1].image,h[2].style="display:",r.getCardValue()})),t(a,2).then((e=>{o.cards=e,g[0].src=o.cards[0].image,g[1].src=o.cards[1].image,o.getCardValue(),o.aceCounter(),setTimeout((()=>{N()}),1e3)}))))})),b.addEventListener("click",(()=>{d&&t(a,1).then((e=>{o.cards.push(e[0]);const t=document.createElement("img");t.setAttribute("id",`playersHitCard ${c+1}`),t.src=e[0].image,y.appendChild(t),o.getCardValue(),o.aceCounter(),c++,setTimeout((()=>{N()}),250)}))})),v.addEventListener("click",(()=>{d=!1,f=!0,m.style="display: none",h[1].style="display:",r.cardvalue<17?setTimeout((()=>{C("I have to take more cards",1e3),x()}),1e3):setTimeout((()=>{N()}),500)}))}))})()})();