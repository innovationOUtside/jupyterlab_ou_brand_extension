"use strict";(self.webpackChunkjupyterlab_ou_brand_extension=self.webpackChunkjupyterlab_ou_brand_extension||[]).push([[747],{150:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(645),a=t.n(r),o=t(667),i=t.n(o),c=t(240),s=t(171),d=a()((function(e){return e[1]})),u=i()(c.Z),l=i()(s.Z);d.push([e.id,"#jp-MainLogo {\n    background-image: url("+u+");\n    background-repeat: no-repeat;\n}\n\n#jp-MainLogo > svg {\n    visibility: hidden;\n}\n\n#jp-RetroLogo {\n    background-image: url("+l+");\n    background-repeat: no-repeat;\n}\n\n#jp-RetroLogo > svg {\n    visibility: hidden;\n}\n",""]);const f=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},240:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"4399d5b013af5528f39c6d043e26f8edb99dcdd8380ede091cfe28224e69e084.png"},171:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"40c6dd377183cf4944e5395c9b4a2c124392a0e8ab428d1c268c03a042536b14.png"},379:(e,n,t)=>{var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function i(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],a=0;a<e.length;a++){var c=e[a],s=n.base?c[0]+n.base:c[0],d=t[s]||0,u="".concat(s," ").concat(d);t[s]=d+1;var l=i(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(o[l].references++,o[l].updater(f)):o.push({identifier:u,updater:v(f,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function l(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(e,n){var t,r,a;if(n.singleton){var o=h++;t=p||(p=s(n)),r=l.bind(null,t,o,!1),a=l.bind(null,t,o,!0)}else t=s(n),r=f.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=i(t[r]);o[a].references--}for(var s=c(e,n),d=0;d<t.length;d++){var u=i(t[d]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=s}}}},747:(e,n,t)=>{t.r(n);var r=t(379),a=t.n(r),o=t(150);a()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;let i=document.head||document.getElementsByTagName("head")[0],c=document.createElement("link"),s=document.getElementsByClassName("favicon");c.rel="icon",c.type="image/x-icon",c.href="https://www.open.ac.uk/oudigital/v4/external/img/favicons/favicon.png",s&&(c.classList=s[0].classList,i.removeChild(s[0])),i.appendChild(c)}}]);