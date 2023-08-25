import{a as s,M as h,F as c,g as l,j as _,t as o,b,i as y,e as U,f as x}from"./web.c9e0eb9c.js";import{p as S,l as R,L as t}from"./Text.23820897.js";const A="_bold_uz1c4_1",D={bold:A},f=o("<span>Loading..."),E=o("<span>"),g=o("<div>Loading..."),p=o("<br>"),d=({children:n})=>s(c,{each:n,get fallback(){return l(f)},children:e=>{const r=[];return e.marks.forEach(i=>{switch(i){case"strong":r.push(D.bold);break}}),r.length===0?b(()=>e.text):(()=>{const i=l(E);return y(i,()=>e.text),U(()=>x(i,r.join(" "))),i})()}}),v=({en:n,de:e})=>{const r=S(R);return s(_,{get children(){return[s(h,{get when(){return r()===t.English},get children(){return s(c,{each:n,get fallback(){return l(g)},children:i=>[s(d,{get children(){return i.children}}),l(p)]})}}),s(h,{get when(){return r()===t.German},get children(){return s(c,{each:e,get fallback(){return l(g)},children:i=>[s(d,{get children(){return i.children}}),l(p)]})}})]}})},u=n=>Array.isArray(n)?n.map(e=>Array.isArray(e.children)?{children:e.children}:(console.warn("unexpected parser input:",e.children),{children:[]})):(console.warn("unexpected parser input:",n),[]),L=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",n),null):{description:{[t.English]:u(e[0].description?.en),[t.German]:u(e[0].description?.de)},imageUrls:Array.isArray(e[0].imageUrls)?e[0].imageUrls:[]}},a=n=>{const e=n?.result;return Array.isArray(e)?e.length===0?{title:{[t.English]:"",[t.German]:""},subtitle:null,date:null,content:{[t.English]:[],[t.German]:[]},buttonText:null,buttonLink:null,imageUrl:""}:{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},subtitle:e[0].subtitle?{[t.English]:e[0].subtitle.en||"",[t.German]:e[0].subtitle.de||""}:null,date:e[0].date||null,content:{[t.English]:u(e[0].description?.en),[t.German]:u(e[0].description?.de)},buttonText:e[0].buttonText?{[t.English]:e[0].buttonText.en||"",[t.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null,imageUrl:e[0].imageUrl||""}:(console.warn("unexpected parser input:",n),null)},T=(n,e)=>{const r=n?.result;return Array.isArray(r)?r.map(i=>e({result:[i]})):(console.warn("unexpected parser input:",n),null)},m=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",e),null):{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},menu:{[t.English]:u(e[0].menu?.en),[t.German]:u(e[0].menu?.de)},buttonText:e[0].buttonText?{[t.English]:e[0].buttonText.en||"",[t.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null}},I="hwz0ma01",w="production",G=`https://${I}.api.sanity.io/v2021-10-21/data/query/${w}`;class ${_get(e){return fetch(e).then(r=>r.json()).catch(console.error)}_createSanityUrl(e){return`${G}?query=${e}`}getHomeBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getHomeLunchSectionData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeLunchSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getHomeDinnerSectionData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeDinnerSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getAboutBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getAboutNinaData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutNina"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getAboutSophiaData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutSophia"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getAboutCarouselData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(a)}getLunchMenuData(){const e=this._createSanityUrl(encodeURI('*[_type == "lunchMenu"]'));return this._get(e).then(m)}getLunchDescriptionData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "lunchDescription"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getDinnerBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "dinnerBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getDinnerEventsData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "dinnerEvents"]
            `));return this._get(e).then(r=>T(r,m))}}const B=new $;export{v as R,B as r};
