(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1636:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(6907)},315:function(e,t,n){Promise.resolve().then(n.t.bind(n,7100,23)),Promise.resolve().then(n.bind(n,5929))},4283:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:a}=n;return a?o.innerHTML=a.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&l.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=l.length;t<n;t++){let n=l[t];if(i(n,e))return l.splice(t,1),!1}return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(a-l.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},366:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return p},initScriptLoader:function(){return g},default:function(){return y}});let r=n(1400),o=n(1614),i=r._(n(108)),a=o._(n(9873)),l=n(6915),u=n(4283),c=n(366),s=new Map,f=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:l="afterInteractive",onError:c}=e,h=n||t;if(h&&f.has(h))return;if(s.has(t)){f.add(h),s.get(t).then(r,c);return}let p=()=>{o&&o(),f.add(h)},g=document.createElement("script"),v=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),p()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(i?(g.innerHTML=i.__html||"",p()):a?(g.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",p()):t&&(g.src=t,s.set(t,v)),Object.entries(e))){if(void 0===r||d.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===l&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",l),document.body.appendChild(g)};function p(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function g(e){e.forEach(p),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}()}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:u="afterInteractive",onError:s,...d}=e,{updateScripts:p,scripts:g,getIsSsr:v,appDir:y,nonce:m}=(0,a.useContext)(l.HeadManagerContext),b=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;b.current||(o&&e&&f.has(e)&&o(),b.current=!0)},[o,t,n]);let _=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!_.current&&("afterInteractive"===u?h(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),_.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(p?(g[u]=(g[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:s,...d}]),p(g)):v&&v()?f.add(t||n):v&&!v()&&h(e)),y){if("beforeInteractive"===u)return n?(i.default.preload(n,d.integrity?{as:"script",integrity:d.integrity}:{as:"script"}),a.default.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(d.dangerouslySetInnerHTML&&(d.children=d.dangerouslySetInnerHTML.__html,delete d.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...d}])+")"}}));"afterInteractive"===u&&n&&i.default.preload(n,d.integrity?{as:"script",integrity:d.integrity}:{as:"script"})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let y=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5929:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(9953),o=n(6354),i=n(3328),a=n(6213),l=n.n(a),u=n(9873);function c(){let e=(0,i.usePathname)(),t=(0,i.useSearchParams)();return((0,u.useEffect)(()=>{e&&(console.log("GAnalytics pageview for ".concat(e,".")),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"pageview",page:e}))},[e,t]),"undefined"==typeof window)?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("noscript",{children:(0,r.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=".concat(o.Ax),height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,r.jsx)(l(),{src:"https://www.googletagmanager.com/gtag/js?id=G-KKZWBLYQN4"}),(0,r.jsx)(l(),{id:"gtag",children:"window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config', 'G-KKZWBLYQN4');"})]})}},6354:function(e,t,n){"use strict";n.d(t,{Ax:function(){return l},ID:function(){return a},wb:function(){return i}});var r=n(7822),o=n(1636);let i="ACS",a=[["About","about"],["Research","research"],["Posts","posts"],["Team","team"],["Contact","contact"]];(0,r.join)(o.cwd(),"public");let l="G-KKZWBLYQN4"},7100:function(){},7822:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",o=0,i=-1,a=0,l=0;l<=e.length;++l){if(l<e.length)n=e.charCodeAt(l);else if(47===n)break;else n=47;if(47===n){if(i===l-1||1===a);else if(i!==l-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var u=r.lastIndexOf("/");if(u!==r.length-1){-1===u?(r="",o=0):o=(r=r.slice(0,u)).length-1-r.lastIndexOf("/"),i=l,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=l,a=0;continue}}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,l):r=e.slice(i+1,l),o=l-i-1;i=l,a=0}else 46===n&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r,o="",i=!1,a=arguments.length-1;a>=-1&&!i;a--)a>=0?r=arguments[a]:(void 0===e&&(e=""),r=e),t(r),0!==r.length&&(o=r+"/"+o,i=47===r.charCodeAt(0));return(o=n(o,!i),i)?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var o=arguments[n];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=r.resolve(e))===(n=r.resolve(n)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var i=e.length,a=i-o,l=1;l<n.length&&47===n.charCodeAt(l);++l);for(var u=n.length-l,c=a<u?a:u,s=-1,f=0;f<=c;++f){if(f===c){if(u>c){if(47===n.charCodeAt(l+f))return n.slice(l+f+1);if(0===f)return n.slice(l+f)}else a>c&&(47===e.charCodeAt(o+f)?s=f:0===f&&(s=0));break}var d=e.charCodeAt(o+f);if(d!==n.charCodeAt(l+f))break;47===d&&(s=f)}var h="";for(f=o+s+1;f<=i;++f)(f===i||47===e.charCodeAt(f))&&(0===h.length?h+="..":h+="/..");return h.length>0?h+n.slice(l+s):(l+=s,47===n.charCodeAt(l)&&++l,n.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,o=-1,i=!0,a=e.length-1;a>=1;--a)if(47===(n=e.charCodeAt(a))){if(!i){o=a;break}}else i=!1;return -1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var r,o=0,i=-1,a=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var l=n.length-1,u=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!a){o=r+1;break}}else -1===u&&(a=!1,u=r+1),l>=0&&(c===n.charCodeAt(l)?-1==--l&&(i=r):(l=-1,i=u))}return o===i?i=u:-1===i&&(i=e.length),e.slice(o,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){o=r+1;break}}else -1===i&&(a=!1,i=r+1);return -1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var n=-1,r=0,o=-1,i=!0,a=0,l=e.length-1;l>=0;--l){var u=e.charCodeAt(l);if(47===u){if(!i){r=l+1;break}continue}-1===o&&(i=!1,o=l+1),46===u?-1===n?n=l:1!==a&&(a=1):-1!==n&&(a=-1)}return -1===n||-1===o||0===a||1===a&&n===o-1&&n===r+1?"":e.slice(n,o)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var o=e.charCodeAt(0),i=47===o;i?(r.root="/",n=1):n=0;for(var a=-1,l=0,u=-1,c=!0,s=e.length-1,f=0;s>=n;--s){if(47===(o=e.charCodeAt(s))){if(!c){l=s+1;break}continue}-1===u&&(c=!1,u=s+1),46===o?-1===a?a=s:1!==f&&(f=1):-1!==a&&(f=-1)}return -1===a||-1===u||0===f||1===f&&a===u-1&&a===l+1?-1!==u&&(0===l&&i?r.base=r.name=e.slice(1,u):r.base=r.name=e.slice(l,u)):(0===l&&i?(r.name=e.slice(1,a),r.base=e.slice(1,u)):(r.name=e.slice(l,a),r.base=e.slice(l,u)),r.ext=e.slice(a,u)),l>0?r.dir=e.slice(0,l-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(114);e.exports=o}()},6907:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u=[],c=!1,s=-1;function f(){c&&r&&(c=!1,r.length?u=r.concat(u):s=-1,u.length&&d())}function d(){if(!c){var e=l(f);c=!0;for(var t=u.length;t;){for(r=u,u=[];++s<t;)r&&r[s].run();s=-1,t=u.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||c||l(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},9911:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(9873),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,s=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:s,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},9953:function(e,t,n){"use strict";e.exports=n(9911)},3328:function(e,t,n){e.exports=n(988)},6213:function(e,t,n){e.exports=n(3484)}},function(e){e.O(0,[159,890,744],function(){return e(e.s=315)}),_N_E=e.O()}]);