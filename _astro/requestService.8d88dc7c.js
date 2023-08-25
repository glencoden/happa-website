import{a as s,M as g,F as h,g as l,j as U,t as o,b,i as y,d as S,e as R}from"./web.370a70f4.js";import{p as x,l as D,L as e}from"./Text.effc4c03.js";const A="_bold_uz1c4_1",E={bold:A},I=o("<span>Loading..."),L=o("<span>"),p=o("<div>Loading..."),d=o("<br>"),m=({children:n})=>s(h,{each:n,get fallback(){return l(I)},children:t=>{const r=[];return t.marks.forEach(a=>{switch(a){case"strong":r.push(E.bold);break}}),r.length===0?b(()=>t.text):(()=>{const a=l(L);return y(a,()=>t.text),S(()=>R(a,r.join(" "))),a})()}}),$=({en:n,de:t})=>{const r=x(D);return s(U,{get children(){return[s(g,{get when(){return r()===e.English},get children(){return s(h,{each:n,get fallback(){return l(p)},children:a=>[s(m,{get children(){return a.children}}),l(d)]})}}),s(g,{get when(){return r()===e.German},get children(){return s(h,{each:t,get fallback(){return l(p)},children:a=>[s(m,{get children(){return a.children}}),l(d)]})}})]}})},u=n=>Array.isArray(n)?n.map(t=>Array.isArray(t.children)?{children:t.children}:(console.warn("unexpected parser input:",t.children),{children:[]})):(console.warn("unexpected parser input:",n),[]),T=n=>{const t=n?.result;return!Array.isArray(t)||t.length===0?(console.warn("unexpected parser input:",n),null):{description:{[e.English]:u(t[0].description?.en),[e.German]:u(t[0].description?.de)},imageUrls:Array.isArray(t[0].imageUrls)?t[0].imageUrls:[]}},i=n=>{const t=n?.result;return Array.isArray(t)?t.length===0?{title:{[e.English]:"",[e.German]:""},subtitle:null,date:null,content:{[e.English]:[],[e.German]:[]},buttonText:null,buttonLink:null,imageUrl:""}:{title:{[e.English]:t[0].title?.en||"",[e.German]:t[0].title?.de||""},subtitle:t[0].subtitle?{[e.English]:t[0].subtitle.en||"",[e.German]:t[0].subtitle.de||""}:null,date:t[0].date||null,content:{[e.English]:u(t[0].description?.en),[e.German]:u(t[0].description?.de)},buttonText:t[0].buttonText?{[e.English]:t[0].buttonText.en||"",[e.German]:t[0].buttonText.de||""}:null,buttonLink:t[0].buttonLink||null,imageUrl:t[0].imageUrl||""}:(console.warn("unexpected parser input:",n),null)},c=(n,t)=>{const r=n?.result;return Array.isArray(r)?r.map(a=>t({result:[a]})):(console.warn("unexpected parser input:",n),null)},_=n=>{const t=n?.result;return!Array.isArray(t)||t.length===0?(console.warn("unexpected parser input:",t),null):{title:{[e.English]:t[0].title?.en||"",[e.German]:t[0].title?.de||""},menu:{[e.English]:u(t[0].menu?.en),[e.German]:u(t[0].menu?.de)},buttonText:t[0].buttonText?{[e.English]:t[0].buttonText.en||"",[e.German]:t[0].buttonText.de||""}:null,buttonLink:t[0].buttonLink||null}},f="hwz0ma01",v="production",k=`https://${f}.api.sanity.io/v2021-10-21/data/query/${v}`;class w{_get(t){return fetch(t).then(r=>r.json()).catch(console.error)}_createSanityUrl(t){return`${k}?query=${t}`}getHomeBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "homeBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getHomeLunchSectionData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "homeLunchSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getHomeDinnerSectionData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "homeDinnerSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getAboutBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getAboutNinaData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutNina"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getAboutSophiaData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutSophia"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getAboutCarouselData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `));return this._get(t).then(T)}getAboutHappaForHomeData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutHappaForHome"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getLunchMenuData(){const t=this._createSanityUrl(encodeURI('*[_type == "lunchMenu"]'));return this._get(t).then(_)}getLunchDescriptionData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "lunchDescription"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getDinnerBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "dinnerBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getDinnerEventsData(){const t=this._createSanityUrl(encodeURI('*[_type == "dinnerEvents"]'));return this._get(t).then(r=>c(r,_))}getEventsBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "eventsBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getEventsPublicData(){const t=this._createSanityUrl(encodeURI('*[_type == "eventsPublic"]'));return this._get(t).then(r=>c(r,i))}getEventsPrivateData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "eventsPrivate"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getVoucherData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "voucher"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getPartnerBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "partnerBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getPartnersData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "partners"]{
                    title,
                    description,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(r=>c(r,i))}}const H=new w;export{$ as R,H as r};
