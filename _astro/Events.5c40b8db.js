import{c as i,o as v,a as r,b as o,S as u,F as p}from"./web.2e527041.js";import{A as d}from"./ArticleBanner.e0d40abf.js";import{A as g}from"./ArticleDefault.899d251c.js";import{r as s}from"./requestService.9cd37b6b.js";import"./Image.e8b9a164.js";import"./Link.be59cf21.js";import"./Text.a434719a.js";const E=()=>{const[n,c]=i(null),[l,m]=i(null),[e,b]=i(null);return v(async()=>{try{const t=await s.getEventsBannerData();c(t);const a=await s.getEventsPublicData();m(a);const h=await s.getEventsPrivateData();b(h)}catch(t){console.error(t)}}),[r(u,{get when(){return o(()=>n()!==null)()&&n().subtitle!==null},get children(){return r(d,{get title(){return n().title},get subtitle(){return n().subtitle},get content(){return n().content},get imageUrl(){return n().imageUrl}})}}),r(u,{get when(){return l()!==null},get children(){return r(p,{get each(){return l()},children:(t,a)=>r(u,{when:t!==null,get children(){return r(g,{get imageUrl(){return t.imageUrl},get title(){return t.title},get date(){return t.date},get content(){return t.content},get linkText(){return t.buttonText},get linkUrl(){return t.buttonLink},get reverse(){return a()%2===1}})}})})}}),r(u,{get when(){return o(()=>e()!==null&&e().buttonText!==null)()&&e().buttonLink!==null},get children(){return r(g,{get imageUrl(){return e().imageUrl},get title(){return e().title},get content(){return e().content},get linkText(){return e().buttonText},get linkUrl(){return e().buttonLink},get reverse(){return o(()=>!!Array.isArray(l()))()&&l().length%2===1}})}})]};export{E as default};