import{c as n,o,a as r,S as s}from"./web.370a70f4.js";import{T as c}from"./TextPage.d8e5503b.js";import{r as i}from"./requestService.bf8adc37.js";import"./Text.effc4c03.js";const g=()=>{const[t,a]=n(null);return o(async()=>{try{const e=await i.getImprintData();a(e)}catch(e){console.error(e)}}),r(s,{get when(){return t()!==null},get children(){return r(c,{get title(){return t().title},get text(){return t().text}})}})};export{g as default};
