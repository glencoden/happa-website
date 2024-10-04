import{a,M as y,F as m,g as o,j as S,t as h,b as x,i as f,d as I,e as k}from"./web.7422b675.js";import{p as A,l as T,L as t}from"./Text.e6e267e5.js";import{B as E,a as L}from"./Button.8c23db01.js";import{L as v}from"./Link.dd352ffb.js";const B="_bold_uz1c4_1",w={bold:B},P=h("<span>Loading..."),G=h("<span>"),U=h("<div>Loading..."),b=h("<br>"),D=({item:n})=>a(m,{get each(){return n.children},get fallback(){return o(P)},children:e=>{const r=[],s=[];e.marks.forEach(l=>{switch(l){case"strong":r.push(w.bold);break;default:s.push(l);break}});const d=r.length===0?x(()=>e.text):(()=>{const l=o(G);return f(l,()=>e.text),I(()=>k(l,r.join(" "))),l})(),_=n.markDefs.find(l=>l._key===s[0]);switch(_?._type){case"link":return a(v,{get linkUrl(){return _.href},get children(){return a(E,{get size(){return L.Regular},children:d})}});default:return d}}}),j=({en:n,de:e})=>{const r=A(T);return a(S,{get children(){return[a(y,{get when(){return r()===t.English},get children(){return a(m,{each:n,get fallback(){return o(U)},children:s=>[a(D,{item:s}),o(b)]})}}),a(y,{get when(){return r()===t.German},get children(){return a(m,{each:e,get fallback(){return o(U)},children:s=>[a(D,{item:s}),o(b)]})}})]}})},u=n=>Array.isArray(n)?n.map(e=>!Array.isArray(e.children)||!Array.isArray(e.markDefs)?(console.warn("unexpected parser input:",e),{children:[],markDefs:[]}):{children:e.children,markDefs:e.markDefs.map(r=>({href:r.href??"",_key:r._key??"",_type:r._type??""}))}):(console.warn("unexpected parser input:",n),[]),c=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",n),null):{description:{[t.English]:e[0].description?u(e[0].description.en):[],[t.German]:e[0].description?u(e[0].description?.de):[]},imageUrls:Array.isArray(e[0].imageUrls)?e[0].imageUrls:[]}},i=n=>{const e=n?.result;return Array.isArray(e)?e.length===0?{title:{[t.English]:"",[t.German]:""},subtitle:null,date:null,content:{[t.English]:[],[t.German]:[]},buttonText:null,buttonLink:null,imageUrl:""}:{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},subtitle:e[0].subtitle?{[t.English]:e[0].subtitle.en||"",[t.German]:e[0].subtitle.de||""}:null,date:e[0].date||null,content:{[t.English]:u(e[0].description?.en),[t.German]:u(e[0].description?.de)},buttonText:e[0].buttonText?{[t.English]:e[0].buttonText.en||"",[t.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null,imageUrl:e[0].imageUrl||""}:(console.warn("unexpected parser input:",n),null)},g=(n,e)=>{const r=n?.result;return Array.isArray(r)?r.map(s=>e({result:[s]})):(console.warn("unexpected parser input:",n),null)},R=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",e),null):{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},menu:{[t.English]:u(e[0].menu?.en),[t.German]:u(e[0].menu?.de)},buttonText:e[0].buttonText?{[t.English]:e[0].buttonText.en||"",[t.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null}},p=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",e),null):{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},text:{[t.English]:u(e[0].text?.en),[t.German]:u(e[0].text?.de)}}},C="hwz0ma01",$="production",H=`https://${C}.api.sanity.io/v2021-10-21/data/query/${$}`;class N{_get(e){return fetch(e).then(r=>r.json()).catch(console.error)}_createSanityUrl(e){return`${H}?query=${e}`}getHomeBannerData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(i)}getHomeCarouselData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `));return this._get(e).then(c)}getAboutBannerData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(c)}getAboutHappaForHomeData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutHappaForHome"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getLunchMenuData(){const e=this._createSanityUrl(encodeURI('*[_type == "lunchMenu"]'));return this._get(e).then(R)}getLunchDescriptionData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(i)}getDinnerCarouselData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "dinnerCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `));return this._get(e).then(c)}getDinnerEventsData(){const e=this._createSanityUrl(encodeURI('*[_type == "dinnerEvents"]'));return this._get(e).then(r=>g(r,R))}getEventsBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "eventsBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getEventsPublicData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "eventsPublic"]{
                    title,
                    date,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(r=>g(r,i))}getEventsPrivateData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "eventsPrivate"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getPrivateBookingBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "privateBookingBanner"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(i)}getPrivateBookingCarouselData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "privateBookingCarousel"]{
                    "imageUrls": images[].asset->url
                }
            `));return this._get(e).then(c)}getVoucherData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(r=>g(r,i))}getPressData(){const e=this._createSanityUrl(encodeURI('*[_type == "press"]'));return this._get(e).then(p)}getImprintData(){const e=this._createSanityUrl(encodeURI('*[_type == "imprint"]'));return this._get(e).then(p)}getDataProtectionData(){const e=this._createSanityUrl(encodeURI('*[_type == "dataProtection"]'));return this._get(e).then(p)}}const O=new N;export{j as R,O as r};
