import{c as n,o,a as r,S as s}from"./web.2e527041.js";import{T as c}from"./TextPage.69041bb3.js";import{r as i}from"./requestService.9cd37b6b.js";import"./Text.a434719a.js";const g=()=>{const[t,a]=n(null);return o(async()=>{try{const e=await i.getImprintData();a(e)}catch(e){console.error(e)}}),r(s,{get when(){return t()!==null},get children(){return r(c,{get title(){return t().title},get text(){return t().text}})}})};export{g as default};