import{c as r,M as d,F as o,b as y,d as M,a as _,e as p,o as $,S as g}from"./solid.3579ee0f.js";import{g as s,t as l,i as E,c as S}from"./web.8709849f.js";import{p as R,l as A,L as c,T as L}from"./Text.d5e5dab6.js";const T=l("<span>Loading..."),G=l("<span>"),m=l("<div>Loading..."),f=l("<br>"),w=({children:t})=>r(o,{each:t,get fallback(){return s(T)},children:e=>{const n=[];return e.marks.forEach(a=>{switch(a){case"strong":n.push("font-weight-bold");break}}),n.length===0?M(()=>e.text):(()=>{const a=s(G);return E(a,()=>e.text),_(()=>S(a,n.join(" "))),a})()}}),q=({en:t,de:e})=>{const n=R(A);return r(y,{get children(){return[r(d,{get when(){return n()===c.English},get children(){return r(o,{each:t,get fallback(){return s(m)},children:a=>[r(w,{get children(){return a.children}}),s(f)]})}}),r(d,{get when(){return n()===c.German},get children(){return r(o,{each:e,get fallback(){return s(m)},children:a=>[r(w,{get children(){return a.children}}),s(f)]})}})]}})},x=t=>Array.isArray(t)?t.map(e=>Array.isArray(e.children)?{children:e.children}:(console.warn("unexpected parser input:",e.children),{children:[]})):(console.warn("unexpected parser input:",t),[]),v=t=>{const e=t?.result;return Array.isArray(e)?e.map(n=>({title:{[c.English]:n.title?.en||"",[c.German]:n.title?.de||""},menu:{[c.English]:x(n.menu?.en),[c.German]:x(n.menu?.de)}})):(console.warn("unexpected parser input:",e),[])},b="hwz0ma01",j="production",C=`https://${b}.api.sanity.io/v2021-10-21/data/query/${j}`;class I{_get(e){return fetch(e).then(n=>n.json()).catch(console.error)}_createSanityUrl(e){return`${C}?query=${e}`}getLunchMenuData(){const e=this._createSanityUrl(encodeURIComponent('*[_type == "lunchMenu"]'));return this._get(e).then(v)}}const N=new I,k=()=>{const[t,e]=p(null),[n,a]=p(null);return $(async()=>{try{const u=await N.getLunchMenuData(),i=u[0]?.title,h=u[0]?.menu;if(!i||!h){console.warn("unexpected lunch menu data",u);return}e(i),a(h)}catch(u){console.error(u)}}),[r(g,{get when(){return t()!==null},get children(){return r(L,{get en(){return t()[c.English]},get de(){return t()[c.German]}})}}),r(g,{get when(){return n()!==null},get children(){return r(q,{get en(){return n()[c.English]},get de(){return n()[c.German]}})}})]};export{k as default};
