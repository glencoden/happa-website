import{a as r,M as f,F as S,g as s,j as N,t as h,b as F,i as u,e as $,f as U,d as b,s as j,S as v,h as A}from"./web.c9e0eb9c.js";import{I as q,B as z,a as J}from"./Button.1d589944.js";import{L as K}from"./Link.4c8e4730.js";import{p as O,l as P,L as n,T as y}from"./Text.23820897.js";const Q="_bold_uz1c4_1",V={bold:Q},W=h("<span>Loading..."),X=h("<span>"),B=h("<div>Loading..."),L=h("<br>"),T=({children:t})=>r(S,{each:t,get fallback(){return s(W)},children:e=>{const l=[];return e.marks.forEach(a=>{switch(a){case"strong":l.push(V.bold);break}}),l.length===0?F(()=>e.text):(()=>{const a=s(X);return u(a,()=>e.text),$(()=>U(a,l.join(" "))),a})()}}),Y=({en:t,de:e})=>{const l=O(P);return r(N,{get children(){return[r(f,{get when(){return l()===n.English},get children(){return r(S,{each:t,get fallback(){return s(B)},children:a=>[r(T,{get children(){return a.children}}),s(L)]})}}),r(f,{get when(){return l()===n.German},get children(){return r(S,{each:e,get fallback(){return s(B)},children:a=>[r(T,{get children(){return a.children}}),s(L)]})}})]}})},Z="_article_1k6k4_1",ee="_image_1k6k4_12",te="_textBox_1k6k4_16",ne="_title_1k6k4_20",re="_date_1k6k4_27",ie="_content_1k6k4_35",ae="_articleReverse_1k6k4_50",le="_textBoxReverse_1k6k4_59",c={article:Z,image:ee,textBox:te,title:ne,date:re,content:ie,articleReverse:ae,textBoxReverse:le},se=h("<time>"),ce=h("<p>"),oe=h("<div><!#><!/><div><h3></h3><!#><!/><!#><!/><!#><!/>"),pe=t=>(()=>{const e=s(oe),l=e.firstChild,[a,w]=b(l.nextSibling),_=a.nextSibling,p=_.firstChild,D=p.nextSibling,[k,E]=b(D.nextSibling),I=k.nextSibling,[R,G]=b(I.nextSibling),C=R.nextSibling,[H,M]=b(C.nextSibling);return u(e,r(q,{get className(){return c.image},get imageUrl(){return t.imageUrl}}),a,w),u(p,r(y,{get en(){return t.title.english},get de(){return t.title.german}})),u(_,r(v,{get when(){return t.date!==void 0},get children(){const i=s(se);return u(i,r(y,{en:"Fri, August 20, 2022, from 7:30 p.m",de:"Fr, 20.08.2022, ab 19:30 uhr"})),$(g=>{const x=c.date,m=t.date;return x!==g._v$&&U(i,g._v$=x),m!==g._v$2&&j(i,"datetime",g._v$2=m),g},{_v$:void 0,_v$2:void 0}),i}}),k,E),u(_,r(v,{get when(){return t.content!==void 0},get children(){const i=s(ce);return u(i,r(Y,{get en(){return t.content.english},get de(){return t.content.german}})),$(()=>U(i,c.content)),i}}),R,G),u(_,r(v,{get when(){return t.linkText!==void 0&&t.linkUrl!==void 0},get children(){return r(K,{get linkUrl(){return t.linkUrl},get children(){return r(z,{get size(){return J.Large},get children(){return r(y,{get en(){return t.linkText.english},get de(){return t.linkText.german}})}})}})}}),H,M),$(i=>{const g={[c.article]:!0,[c.articleReverse]:!!t.reverse},x={[c.textBox]:!0,[c.textBoxReverse]:!!t.reverse},m=c.title;return i._v$3=A(e,g,i._v$3),i._v$4=A(_,x,i._v$4),m!==i._v$5&&U(p,i._v$5=m),i},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),e})(),d=t=>Array.isArray(t)?t.map(e=>Array.isArray(e.children)?{children:e.children}:(console.warn("unexpected parser input:",e.children),{children:[]})):(console.warn("unexpected parser input:",t),[]),ue=t=>{const e=t?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",t),null):{description:{[n.English]:d(e[0].description?.en),[n.German]:d(e[0].description?.de)},imageUrls:Array.isArray(e[0].imageUrls)?e[0].imageUrls:[]}},o=t=>{const e=t?.result;return Array.isArray(e)?e.length===0?{title:{[n.English]:"",[n.German]:""},subtitle:null,date:null,content:{[n.English]:[],[n.German]:[]},buttonText:null,buttonLink:null,imageUrl:""}:{title:{[n.English]:e[0].title?.en||"",[n.German]:e[0].title?.de||""},subtitle:e[0].subtitle?{[n.English]:e[0].subtitle.en||"",[n.German]:e[0].subtitle.de||""}:null,date:e[0].date||null,content:{[n.English]:d(e[0].description?.en),[n.German]:d(e[0].description?.de)},buttonText:e[0].buttonText?{[n.English]:e[0].buttonText.en||"",[n.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null,imageUrl:e[0].imageUrl}:(console.warn("unexpected parser input:",t),null)},ge=t=>{const e=t?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",e),null):{title:{[n.English]:e[0].title?.en||"",[n.German]:e[0].title?.de||""},menu:{[n.English]:d(e[0].menu?.en),[n.German]:d(e[0].menu?.de)}}},he="hwz0ma01",de="production",_e=`https://${he}.api.sanity.io/v2021-10-21/data/query/${de}`;class me{_get(e){return fetch(e).then(l=>l.json()).catch(console.error)}_createSanityUrl(e){return`${_e}?query=${e}`}getHomeBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(o)}getHomeLunchSectionData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeLunchSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(o)}getHomeDinnerSectionData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeDinnerSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(o)}getAboutBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(o)}getAboutNinaData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutNina"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(o)}getAboutSophiaData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutSophia"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(o)}getAboutCarouselData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `));return this._get(e).then(ue)}getAboutHappaForHomeData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutHappaForHome"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(o)}getLunchMenuData(){const e=this._createSanityUrl(encodeURI('*[_type == "lunchMenu"]'));return this._get(e).then(ge)}getLunchDescriptionData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "lunchDescription"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(o)}}const ve=new me;export{pe as A,Y as R,ve as r};
