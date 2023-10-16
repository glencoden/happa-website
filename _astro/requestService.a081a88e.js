import{a as i,M as _,F as p,g as u,j as D,t as c,b as R,i as S,d as f,e as A}from"./web.7422b675.js";import{p as I,l as E,L as e}from"./Text.e6e267e5.js";import{B as L,a as k}from"./Button.8c23db01.js";import{L as T}from"./Link.dd352ffb.js";const v="_bold_uz1c4_1",w={bold:v},B=c("<span>Loading..."),G=c("<span>"),y=c("<div>Loading..."),U=c("<br>"),b=({item:n})=>i(p,{get each(){return n.children},get fallback(){return u(B)},children:(t,r)=>{const s=[];t.marks.forEach(o=>{switch(o){case"strong":s.push(w.bold);break}});const m=s.length===0?R(()=>t.text):(()=>{const o=u(G);return S(o,()=>t.text),f(()=>A(o,s.join(" "))),o})(),d=n.markDefs[r()];switch(d?._type){case"link":return i(T,{get linkUrl(){return d.href},get children(){return i(L,{get size(){return k.Regular},children:m})}});default:return m}}}),F=({en:n,de:t})=>{const r=I(E);return i(D,{get children(){return[i(_,{get when(){return r()===e.English},get children(){return i(p,{each:n,get fallback(){return u(y)},children:s=>[i(b,{item:s}),u(U)]})}}),i(_,{get when(){return r()===e.German},get children(){return i(p,{each:t,get fallback(){return u(y)},children:s=>[i(b,{item:s}),u(U)]})}})]}})},l=n=>Array.isArray(n)?n.map(t=>!Array.isArray(t.children)||!Array.isArray(t.markDefs)?(console.warn("unexpected parser input:",t),{children:[],markDefs:[]}):{children:t.children,markDefs:t.markDefs.map(r=>({href:r.href??"",_type:r._type??""}))}):(console.warn("unexpected parser input:",n),[]),P=n=>{const t=n?.result;return!Array.isArray(t)||t.length===0?(console.warn("unexpected parser input:",n),null):{description:{[e.English]:l(t[0].description?.en),[e.German]:l(t[0].description?.de)},imageUrls:Array.isArray(t[0].imageUrls)?t[0].imageUrls:[]}},a=n=>{const t=n?.result;return Array.isArray(t)?t.length===0?{title:{[e.English]:"",[e.German]:""},subtitle:null,date:null,content:{[e.English]:[],[e.German]:[]},buttonText:null,buttonLink:null,imageUrl:""}:{title:{[e.English]:t[0].title?.en||"",[e.German]:t[0].title?.de||""},subtitle:t[0].subtitle?{[e.English]:t[0].subtitle.en||"",[e.German]:t[0].subtitle.de||""}:null,date:t[0].date||null,content:{[e.English]:l(t[0].description?.en),[e.German]:l(t[0].description?.de)},buttonText:t[0].buttonText?{[e.English]:t[0].buttonText.en||"",[e.German]:t[0].buttonText.de||""}:null,buttonLink:t[0].buttonLink||null,imageUrl:t[0].imageUrl||""}:(console.warn("unexpected parser input:",n),null)},h=(n,t)=>{const r=n?.result;return Array.isArray(r)?r.map(s=>t({result:[s]})):(console.warn("unexpected parser input:",n),null)},x=n=>{const t=n?.result;return!Array.isArray(t)||t.length===0?(console.warn("unexpected parser input:",t),null):{title:{[e.English]:t[0].title?.en||"",[e.German]:t[0].title?.de||""},menu:{[e.English]:l(t[0].menu?.en),[e.German]:l(t[0].menu?.de)},buttonText:t[0].buttonText?{[e.English]:t[0].buttonText.en||"",[e.German]:t[0].buttonText.de||""}:null,buttonLink:t[0].buttonLink||null}},g=n=>{const t=n?.result;return!Array.isArray(t)||t.length===0?(console.warn("unexpected parser input:",t),null):{title:{[e.English]:t[0].title?.en||"",[e.German]:t[0].title?.de||""},text:{[e.English]:l(t[0].text?.en),[e.German]:l(t[0].text?.de)}}},$="hwz0ma01",H="production",M=`https://${$}.api.sanity.io/v2021-10-21/data/query/${H}`;class C{_get(t){return fetch(t).then(r=>r.json()).catch(console.error)}_createSanityUrl(t){return`${M}?query=${t}`}getHomeBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "homeBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getHomeLunchSectionData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "homeLunchSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getHomeDinnerSectionData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "homeDinnerSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getAboutBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getAboutNinaData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutNina"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getAboutSophiaData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutSophia"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getAboutCarouselData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `));return this._get(t).then(P)}getAboutHappaForHomeData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutHappaForHome"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getLunchMenuData(){const t=this._createSanityUrl(encodeURI('*[_type == "lunchMenu"]'));return this._get(t).then(x)}getLunchDescriptionData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "lunchDescription"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getDinnerBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "dinnerBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getDinnerEventsData(){const t=this._createSanityUrl(encodeURI('*[_type == "dinnerEvents"]'));return this._get(t).then(r=>h(r,x))}getEventsBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "eventsBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getEventsPublicData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "eventsPublic"]{
                    title,
                    date,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(r=>h(r,a))}getEventsPrivateData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "eventsPrivate"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getVoucherData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "voucher"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getPartnerBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "partnerBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(a)}getPartnersData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "partners"]{
                    title,
                    description,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(r=>h(r,a))}getPressData(){const t=this._createSanityUrl(encodeURI('*[_type == "press"]'));return this._get(t).then(g)}getImprintData(){const t=this._createSanityUrl(encodeURI('*[_type == "imprint"]'));return this._get(t).then(g)}getDataProtectionData(){const t=this._createSanityUrl(encodeURI('*[_type == "dataProtection"]'));return this._get(t).then(g)}}const V=new C;export{F as R,V as r};
