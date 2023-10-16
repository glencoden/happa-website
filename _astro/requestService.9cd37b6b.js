import{a as s,M as p,F as g,g as u,j as y,t as o,b,i as x,d as R,e as S}from"./web.2e527041.js";import{p as D,l as I,L as e}from"./Text.a434719a.js";const A="_bold_uz1c4_1",E={bold:A},L=o("<span>Loading..."),T=o("<span>"),d=o("<div>Loading..."),m=o("<br>"),_=({children:n})=>s(g,{each:n,get fallback(){return u(L)},children:t=>{const r=[];return t.marks.forEach(a=>{switch(a){case"strong":r.push(E.bold);break}}),r.length===0?b(()=>t.text):(()=>{const a=u(T);return x(a,()=>t.text),R(()=>S(a,r.join(" "))),a})()}}),$=({en:n,de:t})=>{const r=D(I);return s(y,{get children(){return[s(p,{get when(){return r()===e.English},get children(){return s(g,{each:n,get fallback(){return u(d)},children:a=>[s(_,{get children(){return a.children}}),u(m)]})}}),s(p,{get when(){return r()===e.German},get children(){return s(g,{each:t,get fallback(){return u(d)},children:a=>[s(_,{get children(){return a.children}}),u(m)]})}})]}})},l=n=>Array.isArray(n)?n.map(t=>Array.isArray(t.children)?{children:t.children}:(console.warn("unexpected parser input:",t.children),{children:[]})):(console.warn("unexpected parser input:",n),[]),f=n=>{const t=n?.result;return!Array.isArray(t)||t.length===0?(console.warn("unexpected parser input:",n),null):{description:{[e.English]:l(t[0].description?.en),[e.German]:l(t[0].description?.de)},imageUrls:Array.isArray(t[0].imageUrls)?t[0].imageUrls:[]}},i=n=>{const t=n?.result;return Array.isArray(t)?t.length===0?{title:{[e.English]:"",[e.German]:""},subtitle:null,date:null,content:{[e.English]:[],[e.German]:[]},buttonText:null,buttonLink:null,imageUrl:""}:{title:{[e.English]:t[0].title?.en||"",[e.German]:t[0].title?.de||""},subtitle:t[0].subtitle?{[e.English]:t[0].subtitle.en||"",[e.German]:t[0].subtitle.de||""}:null,date:t[0].date||null,content:{[e.English]:l(t[0].description?.en),[e.German]:l(t[0].description?.de)},buttonText:t[0].buttonText?{[e.English]:t[0].buttonText.en||"",[e.German]:t[0].buttonText.de||""}:null,buttonLink:t[0].buttonLink||null,imageUrl:t[0].imageUrl||""}:(console.warn("unexpected parser input:",n),null)},c=(n,t)=>{const r=n?.result;return Array.isArray(r)?r.map(a=>t({result:[a]})):(console.warn("unexpected parser input:",n),null)},U=n=>{const t=n?.result;return!Array.isArray(t)||t.length===0?(console.warn("unexpected parser input:",t),null):{title:{[e.English]:t[0].title?.en||"",[e.German]:t[0].title?.de||""},menu:{[e.English]:l(t[0].menu?.en),[e.German]:l(t[0].menu?.de)},buttonText:t[0].buttonText?{[e.English]:t[0].buttonText.en||"",[e.German]:t[0].buttonText.de||""}:null,buttonLink:t[0].buttonLink||null}},h=n=>{const t=n?.result;return!Array.isArray(t)||t.length===0?(console.warn("unexpected parser input:",t),null):{title:{[e.English]:t[0].title?.en||"",[e.German]:t[0].title?.de||""},text:{[e.English]:l(t[0].text?.en),[e.German]:l(t[0].text?.de)}}},v="hwz0ma01",k="production",w=`https://${v}.api.sanity.io/v2021-10-21/data/query/${k}`;class G{_get(t){return fetch(t).then(r=>r.json()).catch(console.error)}_createSanityUrl(t){return`${w}?query=${t}`}getHomeBannerData(){const t=this._createSanityUrl(encodeURI(`
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
            `));return this._get(t).then(f)}getAboutHappaForHomeData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "aboutHappaForHome"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getLunchMenuData(){const t=this._createSanityUrl(encodeURI('*[_type == "lunchMenu"]'));return this._get(t).then(U)}getLunchDescriptionData(){const t=this._createSanityUrl(encodeURI(`
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
            `));return this._get(t).then(i)}getDinnerEventsData(){const t=this._createSanityUrl(encodeURI('*[_type == "dinnerEvents"]'));return this._get(t).then(r=>c(r,U))}getEventsBannerData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "eventsBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(i)}getEventsPublicData(){const t=this._createSanityUrl(encodeURI(`
                *[_type == "eventsPublic"]{
                    title,
                    date,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(t).then(r=>c(r,i))}getEventsPrivateData(){const t=this._createSanityUrl(encodeURI(`
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
            `));return this._get(t).then(r=>c(r,i))}getPressData(){const t=this._createSanityUrl(encodeURI('*[_type == "press"]'));return this._get(t).then(h)}getImprintData(){const t=this._createSanityUrl(encodeURI('*[_type == "imprint"]'));return this._get(t).then(h)}getDataProtectionData(){const t=this._createSanityUrl(encodeURI('*[_type == "dataProtection"]'));return this._get(t).then(h)}}const H=new G;export{$ as R,H as r};
