import{a as s,M as h,F as c,g as l,j as b,t as o,b as y,i as U,e as x,f as S}from"./web.06188ab3.js";import{p as R,l as D,L as t}from"./Text.50a8cd12.js";const A="_bold_uz1c4_1",E={bold:A},I=o("<span>Loading..."),f=o("<span>"),g=o("<div>Loading..."),p=o("<br>"),d=({children:n})=>s(c,{each:n,get fallback(){return l(I)},children:e=>{const r=[];return e.marks.forEach(a=>{switch(a){case"strong":r.push(E.bold);break}}),r.length===0?y(()=>e.text):(()=>{const a=l(f);return U(a,()=>e.text),x(()=>S(a,r.join(" "))),a})()}}),B=({en:n,de:e})=>{const r=R(D);return s(b,{get children(){return[s(h,{get when(){return r()===t.English},get children(){return s(c,{each:n,get fallback(){return l(g)},children:a=>[s(d,{get children(){return a.children}}),l(p)]})}}),s(h,{get when(){return r()===t.German},get children(){return s(c,{each:e,get fallback(){return l(g)},children:a=>[s(d,{get children(){return a.children}}),l(p)]})}})]}})},u=n=>Array.isArray(n)?n.map(e=>Array.isArray(e.children)?{children:e.children}:(console.warn("unexpected parser input:",e.children),{children:[]})):(console.warn("unexpected parser input:",n),[]),L=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",n),null):{description:{[t.English]:u(e[0].description?.en),[t.German]:u(e[0].description?.de)},imageUrls:Array.isArray(e[0].imageUrls)?e[0].imageUrls:[]}},i=n=>{const e=n?.result;return Array.isArray(e)?e.length===0?{title:{[t.English]:"",[t.German]:""},subtitle:null,date:null,content:{[t.English]:[],[t.German]:[]},buttonText:null,buttonLink:null,imageUrl:""}:{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},subtitle:e[0].subtitle?{[t.English]:e[0].subtitle.en||"",[t.German]:e[0].subtitle.de||""}:null,date:e[0].date||null,content:{[t.English]:u(e[0].description?.en),[t.German]:u(e[0].description?.de)},buttonText:e[0].buttonText?{[t.English]:e[0].buttonText.en||"",[t.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null,imageUrl:e[0].imageUrl||""}:(console.warn("unexpected parser input:",n),null)},m=(n,e)=>{const r=n?.result;return Array.isArray(r)?r.map(a=>e({result:[a]})):(console.warn("unexpected parser input:",n),null)},_=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",e),null):{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},menu:{[t.English]:u(e[0].menu?.en),[t.German]:u(e[0].menu?.de)},buttonText:e[0].buttonText?{[t.English]:e[0].buttonText.en||"",[t.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null}},T="hwz0ma01",v="production",w=`https://${T}.api.sanity.io/v2021-10-21/data/query/${v}`;class k{_get(e){return fetch(e).then(r=>r.json()).catch(console.error)}_createSanityUrl(e){return`${w}?query=${e}`}getHomeBannerData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(L)}getAboutHappaForHomeData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(i)}getDinnerEventsData(){const e=this._createSanityUrl(encodeURI('*[_type == "dinnerEvents"]'));return this._get(e).then(r=>m(r,_))}getEventsBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "eventsBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getEventsPublicData(){const e=this._createSanityUrl(encodeURI('*[_type == "eventsPublic"]'));return this._get(e).then(r=>m(r,i))}getEventsPrivateData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(i)}}const H=new k;export{B as R,H as r};
