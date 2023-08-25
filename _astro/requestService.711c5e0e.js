import{a as s,M as g,F as h,g as u,j as y,t as o,b as U,i as b,d as x,e as R}from"./web.370a70f4.js";import{p as S,l as D,L as t}from"./Text.effc4c03.js";const A="_bold_uz1c4_1",E={bold:A},I=o("<span>Loading..."),L=o("<span>"),p=o("<div>Loading..."),d=o("<br>"),m=({children:n})=>s(h,{each:n,get fallback(){return u(I)},children:e=>{const r=[];return e.marks.forEach(a=>{switch(a){case"strong":r.push(E.bold);break}}),r.length===0?U(()=>e.text):(()=>{const a=u(L);return b(a,()=>e.text),x(()=>R(a,r.join(" "))),a})()}}),P=({en:n,de:e})=>{const r=S(D);return s(y,{get children(){return[s(g,{get when(){return r()===t.English},get children(){return s(h,{each:n,get fallback(){return u(p)},children:a=>[s(m,{get children(){return a.children}}),u(d)]})}}),s(g,{get when(){return r()===t.German},get children(){return s(h,{each:e,get fallback(){return u(p)},children:a=>[s(m,{get children(){return a.children}}),u(d)]})}})]}})},l=n=>Array.isArray(n)?n.map(e=>Array.isArray(e.children)?{children:e.children}:(console.warn("unexpected parser input:",e.children),{children:[]})):(console.warn("unexpected parser input:",n),[]),T=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",n),null):{description:{[t.English]:l(e[0].description?.en),[t.German]:l(e[0].description?.de)},imageUrls:Array.isArray(e[0].imageUrls)?e[0].imageUrls:[]}},i=n=>{const e=n?.result;return Array.isArray(e)?e.length===0?{title:{[t.English]:"",[t.German]:""},subtitle:null,date:null,content:{[t.English]:[],[t.German]:[]},buttonText:null,buttonLink:null,imageUrl:""}:{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},subtitle:e[0].subtitle?{[t.English]:e[0].subtitle.en||"",[t.German]:e[0].subtitle.de||""}:null,date:e[0].date||null,content:{[t.English]:l(e[0].description?.en),[t.German]:l(e[0].description?.de)},buttonText:e[0].buttonText?{[t.English]:e[0].buttonText.en||"",[t.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null,imageUrl:e[0].imageUrl||""}:(console.warn("unexpected parser input:",n),null)},c=(n,e)=>{const r=n?.result;return Array.isArray(r)?r.map(a=>e({result:[a]})):(console.warn("unexpected parser input:",n),null)},_=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",e),null):{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},menu:{[t.English]:l(e[0].menu?.en),[t.German]:l(e[0].menu?.de)},buttonText:e[0].buttonText?{[t.English]:e[0].buttonText.en||"",[t.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null}},f=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",e),null):{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},text:{[t.English]:l(e[0].text?.en),[t.German]:l(e[0].text?.de)}}},v="hwz0ma01",w="production",G=`https://${v}.api.sanity.io/v2021-10-21/data/query/${w}`;class k{_get(e){return fetch(e).then(r=>r.json()).catch(console.error)}_createSanityUrl(e){return`${G}?query=${e}`}getHomeBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getHomeLunchSectionData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeLunchSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getHomeDinnerSectionData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeDinnerSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getAboutBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getAboutNinaData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutNina"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getAboutSophiaData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutSophia"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getAboutCarouselData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `));return this._get(e).then(T)}getAboutHappaForHomeData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutHappaForHome"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getLunchMenuData(){const e=this._createSanityUrl(encodeURI('*[_type == "lunchMenu"]'));return this._get(e).then(_)}getLunchDescriptionData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "lunchDescription"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getDinnerBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "dinnerBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getDinnerEventsData(){const e=this._createSanityUrl(encodeURI('*[_type == "dinnerEvents"]'));return this._get(e).then(r=>c(r,_))}getEventsBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "eventsBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getEventsPublicData(){const e=this._createSanityUrl(encodeURI('*[_type == "eventsPublic"]'));return this._get(e).then(r=>c(r,i))}getEventsPrivateData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "eventsPrivate"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getVoucherData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "voucher"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getPartnerBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "partnerBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getPartnersData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "partners"]{
                    title,
                    description,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(r=>c(r,i))}getPressData(){const e=this._createSanityUrl(encodeURI('*[_type == "press"]'));return this._get(e).then(f)}}const H=new k;export{P as R,H as r};
