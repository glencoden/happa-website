import{c as l,o as S,a as r,b as i,S as u}from"./web.2e527041.js";import{A as p}from"./ArticleBanner.e0d40abf.js";import{A as c}from"./ArticleDefault.899d251c.js";import{r as a}from"./requestService.9cd37b6b.js";import"./Image.e8b9a164.js";import"./Link.be59cf21.js";import"./Text.a434719a.js";const L=()=>{const[n,g]=l(null),[t,s]=l(null),[e,m]=l(null);return S(async()=>{try{const o=await a.getHomeBannerData();g(o);const b=await a.getHomeLunchSectionData();s(b);const h=await a.getHomeDinnerSectionData();m(h)}catch(o){console.error(o)}}),[r(u,{get when(){return i(()=>n()!==null)()&&n().subtitle!==null},get children(){return r(p,{get title(){return n().title},get subtitle(){return n().subtitle},get content(){return n().content},get imageUrl(){return n().imageUrl}})}}),r(u,{get when(){return i(()=>t()!==null&&t().buttonText!==null)()&&t().buttonLink!==null},get children(){return r(c,{get imageUrl(){return t().imageUrl},get title(){return t().title},get content(){return t().content},get linkText(){return t().buttonText},get linkUrl(){return t().buttonLink}})}}),r(u,{get when(){return i(()=>e()!==null&&e().buttonText!==null)()&&e().buttonLink!==null},get children(){return r(c,{get imageUrl(){return e().imageUrl},get title(){return e().title},get content(){return e().content},get linkText(){return e().buttonText},get linkUrl(){return e().buttonLink},reverse:!0})}})]};export{L as default};