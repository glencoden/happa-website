import{g as m,a as u,i,c as a,t as v,s as A}from"./web.c4278b29.js";import{c as l,a as $,S as b}from"./solid.f82a30ea.js";import{I as C}from"./Image.bd65ecf9.js";import{T as d}from"./Text.8436a095.js";const E="_article_qkfls_1",F="_image_qkfls_12",I="_textBox_qkfls_18",T="_title_qkfls_22",U="_subtitle_qkfls_27",y="_content_qkfls_33",D="_titleBox_qkfls_59",r={article:E,image:F,textBox:I,title:T,subtitle:U,content:y,titleBox:D},M=v("<time>"),R=v("<p>"),j=v("<div><!#><!/><div><h3></h3><!#><!/><!#><!/>"),K=e=>(()=>{const o=m(j),h=o.firstChild,[f,k]=u(h.nextSibling),c=f.nextSibling,g=c.firstChild,S=g.nextSibling,[x,q]=u(S.nextSibling),B=x.nextSibling,[N,w]=u(B.nextSibling);return i(o,l(C,{get className(){return r.image},get imageUrl(){return e.imageUrl}}),f,k),i(g,l(d,{get en(){return e.title.english},get de(){return e.title.german}})),i(c,l(b,{get when(){return e.date!==void 0},get children(){const t=m(M);return i(t,l(d,{en:"Fri, August 20, 2022, from 7:30 p.m",de:"Fr, 20.08.2022, ab 19:30 uhr"})),$(n=>{const _=r.subtitle,s=e.date;return _!==n._v$&&a(t,n._v$=_),s!==n._v$2&&A(t,"datetime",n._v$2=s),n},{_v$:void 0,_v$2:void 0}),t}}),x,q),i(c,l(b,{get when(){return e.content!==void 0},get children(){const t=m(R);return i(t,l(d,{get en(){return e.content.english},get de(){return e.content.german}})),$(()=>a(t,r.content)),t}}),N,w),$(t=>{const n=r.article,_=r.textBox,s=r.title;return n!==t._v$3&&a(o,t._v$3=n),_!==t._v$4&&a(c,t._v$4=_),s!==t._v$5&&a(g,t._v$5=s),t},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),o})();export{K as default};
