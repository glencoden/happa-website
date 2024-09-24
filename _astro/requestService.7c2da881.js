import{a as i,M as y,F as m,g as o,j as S,t as c,b as x,i as f,d as I,e as A}from"./web.7422b675.js";import{p as E,l as T,L as t}from"./Text.e6e267e5.js";import{B as k,a as L}from"./Button.8c23db01.js";import{L as v}from"./Link.dd352ffb.js";const w="_bold_uz1c4_1",B={bold:w},G=c("<span>Loading..."),P=c("<span>"),U=c("<div>Loading..."),b=c("<br>"),D=({item:n})=>i(m,{get each(){return n.children},get fallback(){return o(G)},children:e=>{const r=[],s=[];e.marks.forEach(l=>{switch(l){case"strong":r.push(B.bold);break;default:s.push(l);break}});const d=r.length===0?x(()=>e.text):(()=>{const l=o(P);return f(l,()=>e.text),I(()=>A(l,r.join(" "))),l})(),_=n.markDefs.find(l=>l._key===s[0]);switch(_?._type){case"link":return i(v,{get linkUrl(){return _.href},get children(){return i(k,{get size(){return L.Regular},children:d})}});default:return d}}}),j=({en:n,de:e})=>{const r=E(T);return i(S,{get children(){return[i(y,{get when(){return r()===t.English},get children(){return i(m,{each:n,get fallback(){return o(U)},children:s=>[i(D,{item:s}),o(b)]})}}),i(y,{get when(){return r()===t.German},get children(){return i(m,{each:e,get fallback(){return o(U)},children:s=>[i(D,{item:s}),o(b)]})}})]}})},u=n=>Array.isArray(n)?n.map(e=>!Array.isArray(e.children)||!Array.isArray(e.markDefs)?(console.warn("unexpected parser input:",e),{children:[],markDefs:[]}):{children:e.children,markDefs:e.markDefs.map(r=>({href:r.href??"",_key:r._key??"",_type:r._type??""}))}):(console.warn("unexpected parser input:",n),[]),h=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",n),null):{description:{[t.English]:u(e[0].description?.en),[t.German]:u(e[0].description?.de)},imageUrls:Array.isArray(e[0].imageUrls)?e[0].imageUrls:[]}},a=n=>{const e=n?.result;return Array.isArray(e)?e.length===0?{title:{[t.English]:"",[t.German]:""},subtitle:null,date:null,content:{[t.English]:[],[t.German]:[]},buttonText:null,buttonLink:null,imageUrl:""}:{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},subtitle:e[0].subtitle?{[t.English]:e[0].subtitle.en||"",[t.German]:e[0].subtitle.de||""}:null,date:e[0].date||null,content:{[t.English]:u(e[0].description?.en),[t.German]:u(e[0].description?.de)},buttonText:e[0].buttonText?{[t.English]:e[0].buttonText.en||"",[t.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null,imageUrl:e[0].imageUrl||""}:(console.warn("unexpected parser input:",n),null)},g=(n,e)=>{const r=n?.result;return Array.isArray(r)?r.map(s=>e({result:[s]})):(console.warn("unexpected parser input:",n),null)},R=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",e),null):{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},menu:{[t.English]:u(e[0].menu?.en),[t.German]:u(e[0].menu?.de)},buttonText:e[0].buttonText?{[t.English]:e[0].buttonText.en||"",[t.German]:e[0].buttonText.de||""}:null,buttonLink:e[0].buttonLink||null}},p=n=>{const e=n?.result;return!Array.isArray(e)||e.length===0?(console.warn("unexpected parser input:",e),null):{title:{[t.English]:e[0].title?.en||"",[t.German]:e[0].title?.de||""},text:{[t.English]:u(e[0].text?.en),[t.German]:u(e[0].text?.de)}}},C="hwz0ma01",$="production",H=`https://${C}.api.sanity.io/v2021-10-21/data/query/${$}`;class N{_get(e){return fetch(e).then(r=>r.json()).catch(console.error)}_createSanityUrl(e){return`${H}?query=${e}`}getHomeBannerData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(a)}getHomeCarouselData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "homeCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `));return this._get(e).then(h)}getAboutBannerData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(h)}getAboutHappaForHomeData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "aboutHappaForHome"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getLunchMenuData(){const e=this._createSanityUrl(encodeURI('*[_type == "lunchMenu"]'));return this._get(e).then(R)}getLunchDescriptionData(){const e=this._createSanityUrl(encodeURI(`
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
            `));return this._get(e).then(a)}getDinnerCarouselData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "dinnerCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `));return this._get(e).then(h)}getDinnerEventsData(){const e=this._createSanityUrl(encodeURI('*[_type == "dinnerEvents"]'));return this._get(e).then(r=>g(r,R))}getEventsBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "eventsBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getEventsPublicData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "eventsPublic"]{
                    title,
                    date,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(r=>g(r,a))}getEventsPrivateData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "eventsPrivate"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getVoucherData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "voucher"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getPartnerBannerData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "partnerBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(a)}getPartnersData(){const e=this._createSanityUrl(encodeURI(`
                *[_type == "partners"]{
                    title,
                    description,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `));return this._get(e).then(r=>g(r,a))}getPressData(){const e=this._createSanityUrl(encodeURI('*[_type == "press"]'));return this._get(e).then(p)}getImprintData(){const e=this._createSanityUrl(encodeURI('*[_type == "imprint"]'));return this._get(e).then(p)}getDataProtectionData(){const e=this._createSanityUrl(encodeURI('*[_type == "dataProtection"]'));return this._get(e).then(p)}}const O=new N;export{j as R,O as r};
