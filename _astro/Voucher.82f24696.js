import{c as o,o as a,a as r,b as i,S as u}from"./web.7422b675.js";import{A as l}from"./ArticleBanner.b3daa4e5.js";import{r as c}from"./requestService.e3686a4d.js";import"./Button.8c23db01.js";import"./Image.58c0fb1d.js";import"./Link.dd352ffb.js";import"./Text.e6e267e5.js";const S=()=>{const[t,n]=o(null);return a(async()=>{try{const e=await c.getVoucherData();n(e)}catch(e){console.error(e)}}),r(u,{get when(){return i(()=>t()!==null)()&&t().subtitle!==null},get children(){return r(l,{get title(){return t().title},get subtitle(){return t().subtitle},get content(){return t().content},get linkText(){return t().buttonText},get linkUrl(){return t().buttonLink},get imageUrl(){return t().imageUrl}})}})};export{S as default};