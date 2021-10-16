/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class s{constructor(t,s){if(s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const e=new Map,n=t=>(t=>{let n=e.get(t);return void 0===n&&e.set(t,n=new s(t,i)),n})("string"==typeof t?t:t+""),o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return n(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h,r,l,a;const d={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,i)=>i!==t&&(i==i||t==t),c={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=c){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(o(t))}else void 0!==t&&i.push(o(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=c){var e,n;const o=this.constructor.Πp(t,s);if(void 0!==o&&!0===s.reflect){const h=(null!==(n=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==n?n:d.toAttribute)(i,s.type);this.Πh=t,null==h?this.removeAttribute(o):this.setAttribute(o,h),this.Πh=null}}K(t,i){var s,e,n;const o=this.constructor,h=o.Πm.get(t);if(void 0!==h&&this.Πh!==h){const t=o.getPropertyOptions(h),r=t.converter,l=null!==(n=null!==(e=null===(s=r)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof r?r:null)&&void 0!==n?n:d.fromAttribute;this.Πh=h,this[h]=l(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p,f,g,b;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null===(r=(h=globalThis).reactiveElementPlatformSupport)||void 0===r||r.call(h,{ReactiveElement:v}),(null!==(l=(a=globalThis).reactiveElementVersions)&&void 0!==l?l:a.reactiveElementVersions=[]).push("1.0.0-rc.2");const y=globalThis.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,S="?"+m,x=`<${S}>`,$=document,k=(t="")=>$.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,j=/>/g,N=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,A=/'/g,E=/"/g,I=/^(?:script|style|textarea)$/i,R=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),U=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),z=new WeakMap,P=$.createTreeWalker($,129,null,!1);class D{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,o=0;const h=t.length-1,r=this.parts,[l,a]=((t,i)=>{const s=t.length-1,e=[];let n,o=2===i?"<svg>":"",h=T;for(let i=0;i<s;i++){const s=t[i];let r,l,a=-1,d=0;for(;d<s.length&&(h.lastIndex=d,l=h.exec(s),null!==l);)d=h.lastIndex,h===T?"!--"===l[1]?h=O:void 0!==l[1]?h=j:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),h=N):void 0!==l[3]&&(h=N):h===N?">"===l[0]?(h=null!=n?n:T,a=-1):void 0===l[1]?a=-2:(a=h.lastIndex-l[2].length,r=l[1],h=void 0===l[3]?N:'"'===l[3]?E:A):h===E||h===A?h=N:h===O||h===j?h=T:(h=N,n=void 0);const u=h===N&&t[i+1].startsWith("/>")?" ":"";o+=h===T?s+x:a>=0?(e.push(r),s.slice(0,a)+"$lit$"+s.slice(a)+m+u):s+m+(-2===a?(e.push(void 0),i):u)}const r=o+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==w?w.createHTML(r):r,e]})(t,i);if(this.el=D.createElement(l,s),P.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=P.nextNode())&&r.length<h;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(m)){const s=a[o++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(m),i=/([.?@])?(.*)/.exec(s);r.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?J:"@"===i[1]?K:q})}else r.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(I.test(e.tagName)){const t=e.textContent.split(m),i=t.length-1;if(i>0){e.textContent=y?y.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],k()),P.nextNode(),r.push({type:2,index:++n});e.append(t[i],k())}}}else if(8===e.nodeType)if(e.data===S)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(m,t+1));)r.push({type:7,index:n}),t+=m.length-1}n++}}static createElement(t,i){const s=$.createElement("template");return s.innerHTML=t,s}}function L(t,i,s=t,e){var n,o,h,r;if(i===U)return i;let l=void 0!==e?null===(n=s.Σi)||void 0===n?void 0:n[e]:s.Σo;const a=C(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(o=null==l?void 0:l.O)||void 0===o||o.call(l,!1),void 0===a?l=void 0:(l=new a(t),l.T(t,s,e)),void 0!==e?(null!==(h=(r=s).Σi)&&void 0!==h?h:r.Σi=[])[e]=l:s.Σo=l),void 0!==l&&(i=L(t,l.S(t,i.values),l,e)),i}class W{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:$).importNode(s,!0);P.currentNode=n;let o=P.nextNode(),h=0,r=0,l=e[0];for(;void 0!==l;){if(h===l.index){let i;2===l.type?i=new B(o,o.nextSibling,this,t):1===l.type?i=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(i=new Z(o,this,t)),this.l.push(i),l=e[++r]}h!==(null==l?void 0:l.index)&&(o=P.nextNode(),h++)}return n}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class B{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=L(this,t,i),C(t)?t===_||null==t||""===t?(this.H!==_&&this.R(),this.H=_):t!==this.H&&t!==U&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return M(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$($.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=D.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===n)this.H.v(s);else{const t=new W(n,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=z.get(t.strings);return void 0===i&&z.set(t.strings,i=new D(t)),i}g(t){M(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const n of t)e===i.length?i.push(s=new B(this.k(k()),this.k(k()),this,this.options)):s=i[e],s.I(n),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class q{constructor(t,i,s,e,n){this.type=1,this.H=_,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(_),this.strings=s):this.H=_}get tagName(){return this.element.tagName}I(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=L(this,t,i,0),o=!C(t)||t!==this.H&&t!==U,o&&(this.H=t);else{const e=t;let h,r;for(t=n[0],h=0;h<n.length-1;h++)r=L(this,e[s+h],i,h),r===U&&(r=this.H[h]),o||(o=!C(r)||r!==this.H[h]),r===_?t=_:t!==_&&(t+=(null!=r?r:"")+n[h+1]),this.H[h]=r}o&&!e&&this.W(t)}W(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends q{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===_?void 0:t}}class J extends q{constructor(){super(...arguments),this.type=4}W(t){t&&t!==_?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class K extends q{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=L(this,t,i,0))&&void 0!==s?s:_)===U)return;const e=this.H,n=t===_&&e!==_||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==_&&(e===_||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class Z{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){L(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,G,Q,V,X,Y;null===(f=(p=globalThis).litHtmlPlatformSupport)||void 0===f||f.call(p,D,B),(null!==(g=(b=globalThis).litHtmlVersions)&&void 0!==g?g:b.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(F=(Y=globalThis).litElementVersions)&&void 0!==F?F:Y.litElementVersions=[]).push("3.0.0-rc.2");class tt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let h=o._$litPart$;if(void 0===h){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=h=new B(i.insertBefore(k(),t),t,void 0,s)}return h.I(t),h})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return U}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:tt}),null===(X=(V=globalThis).litElementPlatformSupport)||void 0===X||X.call(V,{LitElement:tt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){var i;if(super(t),t.type!==it||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).filter((i=>t[i])).join(" ")}update(t,[i]){if(void 0===this.bt){this.bt=new Set;for(const t in i)i[t]&&this.bt.add(t);return this.render(i)}const s=t.element.classList;this.bt.forEach((t=>{t in i||(s.remove(t),this.bt.delete(t))}));for(const t in i){const e=!!i[t];e!==this.bt.has(t)&&(e?(s.add(t),this.bt.add(t)):(s.remove(t),this.bt.delete(t)))}return U}}),et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):et(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ot(t){return nt({...t,state:!0,attribute:!1})}var ht=function(t,i,s,e){for(var n,o=arguments.length,h=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(h=(o<3?n(h):o>3?n(i,s,h):n(i,s))||h);return o>3&&h&&Object.defineProperty(i,s,h),h};let rt=class extends tt{hp=100;step=5;undead=!1;get value(){return this.gauge}set value(t){this.gauge=t}gauge=100;active=!1;shakeInterval;dead=!1;addDamage(){this.gauge=this.gauge-(this.gauge<this.step?this.gauge:this.step),this.shake(),this.gauge<=0&&!this.undead&&(this.dead=!0),this.requestUpdate()}shake(){this.shakeInterval&&clearInterval(this.shakeInterval),this.active=!0;let t=8;const i=this.shadowRoot.querySelector("#container");this.shakeInterval=setInterval((()=>{t-=1,t<0&&(this.shakeInterval&&clearInterval(this.shakeInterval),this.active=!1,this.requestUpdate()),t>4&&(i.style.transform=`translate3d(${3*Math.random()}px,\n          ${3*Math.random()}px,\n          ${2*Math.random()}px)`)}),60)}resurrect(){this.gauge=this.hp,this.dead=!1,this.requestUpdate()}render(){const t=100-this.gauge/this.hp*100;return R`
      <style>
        .gauge-container {
          position: relative;
          cursor: pointer;
        }
        .gauge-container.dead .content {
          animation: 0.4s ease-out 0s 1 forwards dead;
        }
        .gauge {
          display: inline-flex;
          position: absolute;
          top: -6px;
          right: -50%;
          border: 2px solid #fff;
          border-width: 2px 3px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.72);
          width: 100px;
          height: 12px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.48);
          visibility: hidden;
        }
        .gauge.active {
          visibility: visible;
        }
        .current {
          width: 100%;
          height: 100%;
          background: #f93131;
          border-radius: 2px;
        }
        .sub {
          border-radius: 1px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          transition: transform 0.6s ease-out;
        }
        @keyframes dead {
          0% {
            opacity: 1;
            filter: blur(0);
          }
          100% {
            opacity: 0;
            filter: blur(4px);
          }
        }
      </style>
      <div
        id="container"
        class=${st({"gauge-container":!0,dead:this.dead})}
      >
        <div class=${st({gauge:!0,active:this.active})}>
          <div
            class="sub"
            style="transform: translate(-${t}%)"
          ></div>
          <div
            class="current"
            style="transform: translate(-${t}%)"
          ></div>
        </div>
        <div class="content" @click=${this.addDamage} tabindex="0">
          <slot></slot>
        </div>
      </div>
    `}};ht([nt({type:Number})],rt.prototype,"hp",void 0),ht([nt({type:Number})],rt.prototype,"step",void 0),ht([nt({type:Boolean})],rt.prototype,"undead",void 0),ht([nt({type:Number})],rt.prototype,"value",null),ht([ot()],rt.prototype,"gauge",void 0),ht([ot()],rt.prototype,"active",void 0),ht([ot()],rt.prototype,"shakeInterval",void 0),ht([ot()],rt.prototype,"dead",void 0),rt=ht([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */)("nn-damage-gauge")],rt);export{rt as NNDamageGauge};
