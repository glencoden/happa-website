const S={context:void 0,registry:void 0};function H(e){S.context=e}function ee(){return{...S.context,id:`${S.context.id}${S.context.count++}-`,count:0}}const te=(e,t)=>e===t,he=Symbol("solid-proxy"),ne=Symbol("solid-track"),$={equals:te};let G=X;const v=1,I=2,Q={owned:null,cleanups:null,context:null,owner:null};var f=null;let F=null,o=null,a=null,A=null,T=0;function D(e,t){const s=o,n=f,r=e.length===0,l=r?Q:{owned:null,cleanups:null,context:null,owner:t===void 0?n:t},i=r?e:()=>e(()=>g(()=>j(l)));f=l,o=null;try{return E(i,!0)}finally{o=s,f=n}}function se(e,t){t=t?Object.assign({},$,t):$;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=r=>(typeof r=="function"&&(r=r(s.value)),W(s,r));return[V.bind(s),n]}function pe(e,t,s){const n=K(e,t,!1,v);M(n)}function re(e,t,s){G=ce;const n=K(e,t,!1,v);(!s||!s.render)&&(n.user=!0),A?A.push(n):M(n)}function x(e,t,s){s=s?Object.assign({},$,s):$;const n=K(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=s.equals||void 0,M(n),V.bind(n)}function de(e){return E(e,!1)}function g(e){if(o===null)return e();const t=o;o=null;try{return e()}finally{o=t}}function we(e){re(()=>g(e))}function le(e){return f===null||(f.cleanups===null?f.cleanups=[e]:f.cleanups.push(e)),e}function be(){return o}function ue(e){const t=x(e),s=x(()=>q(t()));return s.toArray=()=>{const n=s();return Array.isArray(n)?n:n!=null?[n]:[]},s}function V(){if(this.sources&&this.state)if(this.state===v)M(this);else{const e=a;a=null,E(()=>R(this),!1),a=e}if(o){const e=this.observers?this.observers.length:0;o.sources?(o.sources.push(this),o.sourceSlots.push(e)):(o.sources=[this],o.sourceSlots=[e]),this.observers?(this.observers.push(o),this.observerSlots.push(o.sources.length-1)):(this.observers=[o],this.observerSlots=[o.sources.length-1])}return this.value}function W(e,t,s){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&E(()=>{for(let r=0;r<e.observers.length;r+=1){const l=e.observers[r],i=F&&F.running;i&&F.disposed.has(l),(i?!l.tState:!l.state)&&(l.pure?a.push(l):A.push(l),l.observers&&Y(l)),i||(l.state=v)}if(a.length>1e6)throw a=[],new Error},!1)),t}function M(e){if(!e.fn)return;j(e);const t=f,s=o,n=T;o=f=e,ie(e,e.value,n),o=s,f=t}function ie(e,t,s){let n;try{n=e.fn(t)}catch(r){return e.pure&&(e.state=v,e.owned&&e.owned.forEach(j),e.owned=null),e.updatedAt=s+1,z(r)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?W(e,n):e.value=n,e.updatedAt=s)}function K(e,t,s,n=v,r){const l={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:f,context:null,pure:s};return f===null||f!==Q&&(f.owned?f.owned.push(l):f.owned=[l]),l}function O(e){if(e.state===0)return;if(e.state===I)return R(e);if(e.suspense&&g(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<T);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===v)M(e);else if(e.state===I){const n=a;a=null,E(()=>R(e,t[0]),!1),a=n}}function E(e,t){if(a)return e();let s=!1;t||(a=[]),A?s=!0:A=[],T++;try{const n=e();return oe(s),n}catch(n){s||(A=null),a=null,z(n)}}function oe(e){if(a&&(X(a),a=null),e)return;const t=A;A=null,t.length&&E(()=>G(t),!1)}function X(e){for(let t=0;t<e.length;t++)O(e[t])}function ce(e){let t,s=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[s++]=n:O(n)}for(S.context&&H(),t=0;t<s;t++)O(e[t])}function R(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const n=e.sources[s];if(n.sources){const r=n.state;r===v?n!==t&&(!n.updatedAt||n.updatedAt<T)&&O(n):r===I&&R(n,t)}}}function Y(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=I,s.pure?a.push(s):A.push(s),s.observers&&Y(s))}}function j(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),r=s.observers;if(r&&r.length){const l=r.pop(),i=s.observerSlots.pop();n<r.length&&(l.sourceSlots[i]=n,r[n]=l,s.observerSlots[n]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)j(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function z(e){throw e}function q(e){if(typeof e=="function"&&!e.length)return q(e());if(Array.isArray(e)){const t=[];for(let s=0;s<e.length;s++){const n=q(e[s]);Array.isArray(n)?t.push.apply(t,n):t.push(n)}return t}return e}const fe=Symbol("fallback");function B(e){for(let t=0;t<e.length;t++)e[t]()}function ae(e,t,s={}){let n=[],r=[],l=[],i=0,c=t.length>1?[]:null;return le(()=>B(l)),()=>{let h=e()||[],d,u;return h[ne],g(()=>{let p=h.length,m,C,L,N,U,w,b,y,k;if(p===0)i!==0&&(B(l),l=[],n=[],r=[],i=0,c&&(c=[])),s.fallback&&(n=[fe],r[0]=D(_=>(l[0]=_,s.fallback())),i=1);else if(i===0){for(r=new Array(p),u=0;u<p;u++)n[u]=h[u],r[u]=D(P);i=p}else{for(L=new Array(p),N=new Array(p),c&&(U=new Array(p)),w=0,b=Math.min(i,p);w<b&&n[w]===h[w];w++);for(b=i-1,y=p-1;b>=w&&y>=w&&n[b]===h[y];b--,y--)L[y]=r[b],N[y]=l[b],c&&(U[y]=c[b]);for(m=new Map,C=new Array(y+1),u=y;u>=w;u--)k=h[u],d=m.get(k),C[u]=d===void 0?-1:d,m.set(k,u);for(d=w;d<=b;d++)k=n[d],u=m.get(k),u!==void 0&&u!==-1?(L[u]=r[d],N[u]=l[d],c&&(U[u]=c[d]),u=C[u],m.set(k,u)):l[d]();for(u=w;u<p;u++)u in L?(r[u]=L[u],l[u]=N[u],c&&(c[u]=U[u],c[u](u))):r[u]=D(P);r=r.slice(0,i=p),n=h.slice(0)}return r});function P(p){if(l[u]=p,c){const[m,C]=se(u);return c[u]=C,t(h[u],m)}return t(h[u])}}}let J=!1;function ge(){J=!0}function ye(e,t){if(J&&S.context){const s=S.context;H(ee());const n=g(()=>e(t||{}));return H(s),n}return g(()=>e(t||{}))}const Z=e=>`Stale read from <${e}>.`;function Ae(e){const t="fallback"in e&&{fallback:()=>e.fallback};return x(ae(()=>e.each,e.children,t||void 0))}function ve(e){const t=e.keyed,s=x(()=>e.when,void 0,{equals:(n,r)=>t?n===r:!n==!r});return x(()=>{const n=s();if(n){const r=e.children;return typeof r=="function"&&r.length>0?g(()=>r(t?n:()=>{if(!g(s))throw Z("Show");return e.when})):r}return e.fallback},void 0,void 0)}function me(e){let t=!1;const s=(l,i)=>l[0]===i[0]&&(t?l[1]===i[1]:!l[1]==!i[1])&&l[2]===i[2],n=ue(()=>e.children),r=x(()=>{let l=n();Array.isArray(l)||(l=[l]);for(let i=0;i<l.length;i++){const c=l[i].when;if(c)return t=!!l[i].keyed,[i,c,l[i]]}return[-1]},void 0,{equals:s});return x(()=>{const[l,i,c]=r();if(l<0)return e.fallback;const h=c.children;return typeof h=="function"&&h.length>0?g(()=>h(t?i:()=>{if(g(r)[0]!==l)throw Z("Match");return c.when})):h},void 0,void 0)}function Se(e){return e}export{he as $,Ae as F,Se as M,ve as S,pe as a,me as b,ye as c,x as d,se as e,ne as f,be as g,de as h,le as i,D as j,ge as k,we as o,S as s,g as u};
