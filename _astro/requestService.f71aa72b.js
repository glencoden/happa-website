import{g as s,t as g,i as o,c as $,a as m,s as q,b as R}from"./web.78e1faad.js";import{c as r,M as L,F as S,e as z,d as F,a as v,S as f}from"./solid.b3c5d923.js";import{I as j,B as H,a as J}from"./Button.8d751524.js";import{L as K}from"./Link.75028d9e.js";import{p as O,l as P,L as n,T as y}from"./Text.3a1afe57.js";const Q="_bold_uz1c4_1",V={bold:Q},W=g("<span>Loading..."),X=g("<span>"),B=g("<div>Loading..."),T=g("<br>"),w=({children:t})=>r(S,{each:t,get fallback(){return s(W)},children:e=>{const a=[];return e.marks.forEach(l=>{switch(l){case"strong":a.push(V.bold);break}}),a.length===0?F(()=>e.text):(()=>{const l=s(X);return o(l,()=>e.text),v(()=>$(l,a.join(" "))),l})()}}),Y=({en:t,de:e})=>{const a=O(P);return r(z,{get children(){return[r(L,{get when(){return a()===n.English},get children(){return r(S,{each:t,get fallback(){return s(B)},children:l=>[r(w,{get children(){return l.children}}),s(T)]})}}),r(L,{get when(){return a()===n.German},get children(){return r(S,{each:e,get fallback(){return s(B)},children:l=>[r(w,{get children(){return l.children}}),s(T)]})}})]}})},Z="_article_1k6k4_1",ee="_image_1k6k4_12",te="_textBox_1k6k4_16",ne="_title_1k6k4_20",re="_date_1k6k4_27",ie="_content_1k6k4_35",le="_articleReverse_1k6k4_50",ae="_textBoxReverse_1k6k4_59",c={article:Z,image:ee,textBox:te,title:ne,date:re,content:ie,articleReverse:le,textBoxReverse:ae},se=g("<time>"),ce=g("<p>"),oe=g("<div><!#><!/><div><h3></h3><!#><!/><!#><!/><!#><!/>"),ke=t=>(()=>{const e=s(oe),a=e.firstChild,[l,A]=m(a.nextSibling),d=l.nextSibling,k=d.firstChild,E=k.nextSibling,[p,D]=m(E.nextSibling),C=p.nextSibling,[U,G]=m(C.nextSibling),I=U.nextSibling,[M,N]=m(I.nextSibling);return o(e,r(j,{get className(){return c.image},get imageUrl(){return t.imageUrl}}),l,A),o(k,r(y,{get en(){return t.title.english},get de(){return t.title.german}})),o(d,r(f,{get when(){return t.date!==void 0},get children(){const i=s(se);return o(i,r(y,{en:"Fri, August 20, 2022, from 7:30 p.m",de:"Fr, 20.08.2022, ab 19:30 uhr"})),v(u=>{const _=c.date,h=t.date;return _!==u._v$&&$(i,u._v$=_),h!==u._v$2&&q(i,"datetime",u._v$2=h),u},{_v$:void 0,_v$2:void 0}),i}}),p,D),o(d,r(f,{get when(){return t.content!==void 0},get children(){const i=s(ce);return o(i,r(Y,{get en(){return t.content.english},get de(){return t.content.german}})),v(()=>$(i,c.content)),i}}),U,G),o(d,r(f,{get when(){return t.linkText!==void 0&&t.linkUrl!==void 0},get children(){return r(K,{get linkUrl(){return t.linkUrl},get children(){return r(H,{get size(){return J.Large},get children(){return r(y,{get en(){return t.linkText.english},get de(){return t.linkText.german}})}})}})}}),M,N),v(i=>{const u={[c.article]:!0,[c.articleReverse]:!!t.reverse},_={[c.textBox]:!0,[c.textBoxReverse]:!!t.reverse},h=c.title;return i._v$3=R(e,u,i._v$3),i._v$4=R(d,_,i._v$4),h!==i._v$5&&$(k,i._v$5=h),i},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),e})(),b=t=>Array.isArray(t)?t.map(e=>Array.isArray(e.children)?{children:e.children}:(console.warn("unexpected parser input:",e.children),{children:[]})):(console.warn("unexpected parser input:",t),[]),x=t=>{const e=t?.result;return Array.isArray(e)?e.length===0?{title:{[n.English]:"",[n.German]:""},subtitle:null,date:null,content:{[n.English]:[],[n.German]:[]},buttonText:null,buttonLink:null,imageUrl:""}:{title:{[n.English]:e[0].title?.en||"",[n.German]:e[0].title?.de||""},subtitle:e[0].subtitle?{[n.English]:e[0].subtitle.en||"",[n.German]:e[0].subtitle.de||""}:null,date:e[0].date||null,content:{[n.English]:b(e[0].description?.en),[n.German]:b(e[0].description?.de)},buttonText:e[0].buttonText?{[n.English]:e[0].buttonText.en||"",[n.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null,imageUrl:e[0].imageUrl}:(console.warn("unexpected parser input:",t),null)},ue=t=>{const e=t?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",e),null):{title:{[n.English]:e[0].title?.en||"",[n.German]:e[0].title?.de||""},menu:{[n.English]:b(e[0].menu?.en),[n.German]:b(e[0].menu?.de)}}},ge="hwz0ma01",de="production",he=`https://${ge}.api.sanity.io/v2021-10-21/data/query/${de}`;class _e{_get(e){return fetch(e).then(a=>a.json()).catch(console.error)}_createSanityUrl(e){return`${he}?query=${e}`}getHomeBannerData(){const e=this._createSanityUrl(encodeURIComponent(`
                *[_type == "homeBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(x)}getHomeLunchSectionData(){const e=this._createSanityUrl(encodeURIComponent(`
                *[_type == "homeLunchSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(x)}getHomeDinnerSectionData(){const e=this._createSanityUrl(encodeURIComponent(`
                *[_type == "homeDinnerSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(x)}getLunchMenuData(){const e=this._createSanityUrl(encodeURIComponent('*[_type == "lunchMenu"]'));return this._get(e).then(ue)}getLunchDescriptionData(){const e=this._createSanityUrl(encodeURIComponent(`
                *[_type == "lunchDescription"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(x)}}const fe=new _e;export{ke as A,Y as R,fe as r};
