import{c as i,a as w,S as s,b,o as H,d as h}from"./solid.b3c5d923.js";import{g as U,a as k,i as c,c as g,t as B}from"./web.78e1faad.js";import{I as N}from"./Button.8d751524.js";import{R as A,r as v,A as y}from"./requestService.f71aa72b.js";import{T}from"./Text.3a1afe57.js";import"./Link.75028d9e.js";const C="_article_myw4u_1",M="_image_myw4u_13",R="_titleBox_myw4u_19",E="_title_myw4u_19",I="_subtitle_myw4u_29",q="_content_myw4u_35",o={article:C,image:M,titleBox:R,title:E,subtitle:I,content:q},j=B("<p>"),z=B("<div><div><h1></h1><h2></h2></div><!#><!/><!#><!/>"),F=t=>(()=>{const l=U(z),n=l.firstChild,a=n.firstChild,r=a.nextSibling,m=n.nextSibling,[u,_]=k(m.nextSibling),d=u.nextSibling,[D,L]=k(d.nextSibling);return c(a,i(T,{get en(){return t.title.english},get de(){return t.title.german}})),c(r,i(T,{get en(){return t.subtitle.english},get de(){return t.subtitle.german}})),c(l,i(N,{get className(){return o.image},get imageUrl(){return t.imageUrl}}),u,_),c(l,i(s,{get when(){return t.content!==void 0},get children(){const e=U(j);return c(e,i(A,{get en(){return t.content.english},get de(){return t.content.german}})),w(()=>g(e,o.content)),e}}),D,L),w(e=>{const $=o.article,x=o.titleBox,S=o.title,f=o.subtitle;return $!==e._v$&&g(l,e._v$=$),x!==e._v$2&&g(n,e._v$2=x),S!==e._v$3&&g(a,e._v$3=S),f!==e._v$4&&g(r,e._v$4=f),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),l})(),V=()=>{const[t,l]=b(null),[n,a]=b(null),[r,m]=b(null);return H(async()=>{try{const u=await v.getHomeBannerData();l(u);const _=await v.getHomeLunchSectionData();a(_);const d=await v.getHomeDinnerSectionData();m(d)}catch(u){console.error(u)}}),[i(s,{get when(){return h(()=>t()!==null)()&&t().subtitle!==null},get children(){return i(F,{get title(){return t().title},get subtitle(){return t().subtitle},get content(){return t().content},get imageUrl(){return t().imageUrl}})}}),i(s,{get when(){return h(()=>n()!==null&&n().buttonText!==null)()&&n().buttonLink!==null},get children(){return i(y,{get imageUrl(){return n().imageUrl},get title(){return n().title},get content(){return n().content},get linkText(){return n().buttonText},get linkUrl(){return n().buttonLink}})}}),i(s,{get when(){return h(()=>r()!==null&&r().buttonText!==null)()&&r().buttonLink!==null},get children(){return i(y,{get imageUrl(){return r().imageUrl},get title(){return r().title},get content(){return r().content},get linkText(){return r().buttonText},get linkUrl(){return r().buttonLink},reverse:!0})}})]};export{V as default};
