import{c as o,o as n,a as r,S as s}from"./web.7422b675.js";import{T as c}from"./TextPage.042232a6.js";import{r as i}from"./requestService.0794e922.js";import"./Text.cf04a2b8.js";import"./Link.dd352ffb.js";const d=()=>{const[t,a]=o(null);return n(async()=>{try{const e=await i.getPressData();a(e)}catch(e){console.error(e)}}),r(s,{get when(){return t()!==null},get children(){return r(c,{get title(){return t().title},get text(){return t().text}})}})};export{d as default};
