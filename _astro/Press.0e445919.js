import{c as o,o as n,a as r,S as s}from"./web.7422b675.js";import{T as c}from"./TextPage.ec6b1895.js";import{r as i}from"./requestService.c99d9e9f.js";import"./Text.e6e267e5.js";import"./Button.8c23db01.js";import"./Link.dd352ffb.js";const f=()=>{const[t,a]=o(null);return n(async()=>{try{const e=await i.getPressData();a(e)}catch(e){console.error(e)}}),r(s,{get when(){return t()!==null},get children(){return r(c,{get title(){return t().title},get text(){return t().text}})}})};export{f as default};