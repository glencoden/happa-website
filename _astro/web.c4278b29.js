import{a as x,h as N,i as m,s as d,u as S}from"./solid.f82a30ea.js";function H(i,t,e){let s=e.length,l=t.length,o=s,f=0,n=0,r=t[l-1].nextSibling,c=null;for(;f<l||n<o;){if(t[f]===e[n]){f++,n++;continue}for(;t[l-1]===e[o-1];)l--,o--;if(l===f){const y=o<s?n?e[n-1].nextSibling:e[o-n]:r;for(;n<o;)i.insertBefore(e[n++],y)}else if(o===n)for(;f<l;)(!c||!c.has(t[f]))&&t[f].remove(),f++;else if(t[f]===e[o-1]&&e[n]===t[l-1]){const y=t[--l].nextSibling;i.insertBefore(e[n++],t[f++].nextSibling),i.insertBefore(e[--o],y),t[l]=e[o]}else{if(!c){c=new Map;let h=n;for(;h<o;)c.set(e[h],h++)}const y=c.get(t[f]);if(y!=null)if(n<y&&y<o){let h=f,u=1,$;for(;++h<l&&h<o&&!(($=c.get(t[h]))==null||$!==y+u);)u++;if(u>y-n){const C=t[f];for(;n<y;)i.insertBefore(e[n++],C)}else i.replaceChild(e[n++],t[f++])}else f++;else t[f++].remove()}}}const w="_$DX_DELEGATE";function L(i,t,e,s={}){let l;return N(o=>{l=o,t===document?i():M(t,i(),t.firstChild?null:void 0,e)},s.owner),()=>{l(),t.textContent=""}}function q(i,t,e){let s;const l=()=>{const f=document.createElement("template");return f.innerHTML=i,e?f.content.firstChild.firstChild:f.content.firstChild},o=t?()=>(s||(s=l())).cloneNode(!0):()=>S(()=>document.importNode(s||(s=l()),!0));return o.cloneNode=o,o}function k(i,t=window.document){const e=t[w]||(t[w]=new Set);for(let s=0,l=i.length;s<l;s++){const o=i[s];e.has(o)||(e.add(o),t.addEventListener(o,T))}}function B(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)}function D(i,t){t==null?i.removeAttribute("class"):i.className=t}function O(i,t,e,s){if(s)Array.isArray(e)?(i[`$$${t}`]=e[0],i[`$$${t}Data`]=e[1]):i[`$$${t}`]=e;else if(Array.isArray(e)){const l=e[0];i.addEventListener(t,e[0]=o=>l.call(i,e[1],o))}else i.addEventListener(t,e)}function K(i,t,e={}){const s=Object.keys(t||{}),l=Object.keys(e);let o,f;for(o=0,f=l.length;o<f;o++){const n=l[o];!n||n==="undefined"||t[n]||(b(i,n,!1),delete e[n])}for(o=0,f=s.length;o<f;o++){const n=s[o],r=!!t[n];!n||n==="undefined"||e[n]===r||!r||(b(i,n,!0),e[n]=r)}return e}function Y(i,t,e){if(!t)return e?B(i,"style"):t;const s=i.style;if(typeof t=="string")return s.cssText=t;typeof e=="string"&&(s.cssText=e=void 0),e||(e={}),t||(t={});let l,o;for(o in e)t[o]==null&&s.removeProperty(o),delete e[o];for(o in t)l=t[o],l!==e[o]&&(s.setProperty(o,l),e[o]=l);return e}function M(i,t,e,s){if(e!==void 0&&!s&&(s=[]),typeof t!="function")return a(i,t,s,e);x(l=>a(i,t(),l,e),s)}function P(i,t,e={}){d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=globalThis._$HY.load,d.gather=l=>E(t,l),d.registry=new Map,d.context={id:e.renderId||"",count:0},E(t,e.renderId);const s=L(i,t,[...t.childNodes],e);return d.context=null,s}function I(i){let t,e;if(!d.context||!(t=d.registry.get(e=_()))){if(d.context&&console.warn("Unable to find DOM nodes for hydration key:",e),!i)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+e);return i()}return d.completed&&d.completed.add(t),d.registry.delete(e),t}function U(i){let t=i,e=0,s=[];if(d.context)for(;t;){if(t.nodeType===8){const l=t.nodeValue;if(l==="#")e++;else if(l==="/"){if(e===0)return[t,s];e--}}s.push(t),t=t.nextSibling}return[t,s]}function V(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:i,events:t}=d;for(t.queued=!1;t.length;){const[e,s]=t[0];if(!i.has(e))return;T(s),t.shift()}}),d.events.queued=!0)}function b(i,t,e){const s=t.trim().split(/\s+/);for(let l=0,o=s.length;l<o;l++)i.classList.toggle(s[l],e)}function T(i){const t=`$$${i.type}`;let e=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==e&&Object.defineProperty(i,"target",{configurable:!0,value:e}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return e||document}}),d.registry&&!d.done&&(d.done=_$HY.done=!0);e;){const s=e[t];if(s&&!e.disabled){const l=e[`${t}Data`];if(l!==void 0?s.call(e,l,i):s.call(e,i),i.cancelBubble)return}e=e._$host||e.parentNode||e.host}}function a(i,t,e,s,l){if(d.context){!e&&(e=[...i.childNodes]);let n=[];for(let r=0;r<e.length;r++){const c=e[r];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():n.push(c)}e=n}for(;typeof e=="function";)e=e();if(t===e)return e;const o=typeof t,f=s!==void 0;if(i=f&&e[0]&&e[0].parentNode||i,o==="string"||o==="number"){if(d.context)return e;if(o==="number"&&(t=t.toString()),f){let n=e[0];n&&n.nodeType===3?n.data=t:n=document.createTextNode(t),e=g(i,e,s,n)}else e!==""&&typeof e=="string"?e=i.firstChild.data=t:e=i.textContent=t}else if(t==null||o==="boolean"){if(d.context)return e;e=g(i,e,s)}else{if(o==="function")return x(()=>{let n=t();for(;typeof n=="function";)n=n();e=a(i,n,e,s)}),()=>e;if(Array.isArray(t)){const n=[],r=e&&Array.isArray(e);if(A(n,t,e,l))return x(()=>e=a(i,n,e,s,!0)),()=>e;if(d.context){if(!n.length)return e;for(let c=0;c<n.length;c++)if(n[c].parentNode)return e=n}if(n.length===0){if(e=g(i,e,s),f)return e}else r?e.length===0?p(i,n,s):H(i,e,n):(e&&g(i),p(i,n));e=n}else if(t.nodeType){if(d.context&&t.parentNode)return e=f?[t]:t;if(Array.isArray(e)){if(f)return e=g(i,e,s,t);g(i,e,null,t)}else e==null||e===""||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);e=t}else console.warn("Unrecognized value. Skipped inserting",t)}return e}function A(i,t,e,s){let l=!1;for(let o=0,f=t.length;o<f;o++){let n=t[o],r=e&&e[o],c;if(!(n==null||n===!0||n===!1))if((c=typeof n)=="object"&&n.nodeType)i.push(n);else if(Array.isArray(n))l=A(i,n,r)||l;else if(c==="function")if(s){for(;typeof n=="function";)n=n();l=A(i,Array.isArray(n)?n:[n],Array.isArray(r)?r:[r])||l}else i.push(n),l=!0;else{const y=String(n);r&&r.nodeType===3&&r.data===y?i.push(r):i.push(document.createTextNode(y))}}return l}function p(i,t,e=null){for(let s=0,l=t.length;s<l;s++)i.insertBefore(t[s],e)}function g(i,t,e,s){if(e===void 0)return i.textContent="";const l=s||document.createTextNode("");if(t.length){let o=!1;for(let f=t.length-1;f>=0;f--){const n=t[f];if(l!==n){const r=n.parentNode===i;!o&&!f?r?i.replaceChild(l,n):i.insertBefore(l,e):r&&n.remove()}else o=!0}}else i.insertBefore(l,e);return[l]}function E(i,t){const e=i.querySelectorAll("*[data-hk]");for(let s=0;s<e.length;s++){const l=e[s],o=l.getAttribute("data-hk");(!t||o.startsWith(t))&&!d.registry.has(o)&&d.registry.set(o,l)}}function _(){const i=d.context;return`${i.id}${i.count++}`}const R=(...i)=>(m(),P(...i));export{U as a,K as b,D as c,k as d,O as e,Y as f,I as g,L as h,M as i,R as j,V as r,B as s,q as t};
