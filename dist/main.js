(()=>{"use strict";var t={40:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"img {\n    height: 60px;\n    width: 60px;\n}\n\nimg:hover {\n    height: 70px;\n    width: 70px;\n}",""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var p=[].concat(t[s]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],p=i[s]||0,d="".concat(s," ").concat(p);i[s]=p+1;var l=n(d),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==l)e[l].references++,e[l].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var p=n(i[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{const t=n.p+"4e3d60cd93c0f851f657.png";var e=n(379),r=n.n(e),o=n(795),i=n.n(o),a=n(569),c=n.n(a),u=n(565),s=n.n(u),p=n(216),d=n.n(p),l=n(589),m=n.n(l),f=n(40),v={};function h(){const t=document.createElement("form"),e=document.createElement("div"),n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("placeholder","name");const r=document.createElement("input");r.setAttribute("type","date"),e.append(n,r);const o=document.createElement("div"),i=document.createElement("select");i.setAttribute("name","Priority");const a=document.createElement("option");a.setAttribute("value","Set Prioirity"),a.textContent="Set Priority";const c=document.createElement("option");c.setAttribute("value","low"),c.textContent="Low";const u=document.createElement("option");u.setAttribute("value","medium"),u.textContent="Medium";const s=document.createElement("option");s.setAttribute("value","high"),s.textContent="High",i.append(a,c,u,s);const p=document.createElement("input");p.setAttribute("type","submit"),p.setAttribute("value","Submit");const d=document.createElement("input");return d.setAttribute("type","button"),d.setAttribute("value","Cancle"),d.setAttribute("id","button"),o.append(i,p,d),t.append(e,o),t}v.styleTagTransform=m(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const b=document.querySelector("body"),y=document.createElement("h1");y.textContent="Todo App!",b.appendChild(y),b.appendChild(function(){const e=document.createElement("div"),n=document.createElement("img");return n.src=t,n.addEventListener("click",(function(){e.removeChild(n),e.appendChild(h())})),e.appendChild(h()),e.appendChild(n),e}())})()})();