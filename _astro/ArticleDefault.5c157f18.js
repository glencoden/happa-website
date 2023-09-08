import{a as n,M as b,j as E,g as h,f as v,i as c,d as k,e as f,s as C,S,h as w,t as B}from"./web.2e527041.js";import{I,B as N,a as O}from"./Image.e8b9a164.js";import{L as x,p as z,l as F,T}from"./Text.78ea60da.js";import{L as G}from"./Link.be59cf21.js";import{R as P}from"./requestService.e54d0e9c.js";const j={[x.English]:["SU","MO","TU","WE","TH","FR","SA"],[x.German]:["SO","MO","DI","MI","DO","FR","SA"]},H=({dateString:e})=>{const r=z(F),[d,o]=e.split("T");if(!d||!o)return console.warn("date string expected"),null;const[$,i,s]=d.split("-"),u=o.slice(0,5),_=j[r()][new Date(e).getDay()];return n(E,{get children(){return[n(b,{get when(){return r()===x.English},children:`${_}, ${i}/${s}/${$}, from ${u}`}),n(b,{get when(){return r()===x.German},children:`${_}, ${s}.${i}.${$}, ab ${u} Uhr`})]}})},W="_article_1k6k4_1",q="_image_1k6k4_12",J="_textBox_1k6k4_16",K="_title_1k6k4_20",Q="_date_1k6k4_27",V="_content_1k6k4_35",X="_articleReverse_1k6k4_50",Y="_textBoxReverse_1k6k4_59",l={article:W,image:q,textBox:J,title:K,date:Q,content:V,articleReverse:X,textBoxReverse:Y},Z=B("<time>"),p=B("<p>"),ee=B("<div><!#><!/><div><h3></h3><!#><!/><!#><!/><!#><!/>"),ae=e=>(()=>{const r=h(ee),d=r.firstChild,[o,$]=v(d.nextSibling),i=o.nextSibling,s=i.firstChild,u=s.nextSibling,[_,U]=v(u.nextSibling),y=_.nextSibling,[R,A]=v(y.nextSibling),D=R.nextSibling,[L,M]=v(D.nextSibling);return c(r,n(I,{get className(){return l.image},get imageUrl(){return e.imageUrl}}),o,$),c(s,n(T,{get en(){return e.title.english},get de(){return e.title.german}})),c(i,n(S,{get when(){return e.date!==void 0},get children(){const t=h(Z);return c(t,n(H,{get dateString(){return e.date}})),k(a=>{const m=l.date,g=e.date;return m!==a._v$&&f(t,a._v$=m),g!==a._v$2&&C(t,"datetime",a._v$2=g),a},{_v$:void 0,_v$2:void 0}),t}}),_,U),c(i,n(S,{get when(){return e.content!==void 0},get children(){const t=h(p);return c(t,n(P,{get en(){return e.content.english},get de(){return e.content.german}})),k(()=>f(t,l.content)),t}}),R,A),c(i,n(S,{get when(){return e.linkText!==void 0&&e.linkUrl!==void 0},get children(){return n(G,{get linkUrl(){return e.linkUrl},get children(){return n(N,{get size(){return O.Large},get children(){return n(T,{get en(){return e.linkText.english},get de(){return e.linkText.german}})}})}})}}),L,M),k(t=>{const a={[l.article]:!0,[l.articleReverse]:!!e.reverse},m={[l.textBox]:!0,[l.textBoxReverse]:!!e.reverse},g=l.title;return t._v$3=w(r,a,t._v$3),t._v$4=w(i,m,t._v$4),g!==t._v$5&&f(s,t._v$5=g),t},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),r})();export{ae as A};
