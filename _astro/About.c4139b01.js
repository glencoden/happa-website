import{a as n,g as m,d as C,i as u,e as _,f as b,S as x,h as D,t as f,c,o as H,b as S}from"./web.c9e0eb9c.js";import{A as T}from"./ArticleBanner.52f2499c.js";import{I as y}from"./Button.1d589944.js";import{L as F}from"./Link.c7f54915.js";import{R as M,r as g,A as R}from"./requestService.2384d939.js";import{T as E}from"./Text.23820897.js";const I="_article_7ee8e_1",q="_isLink_7ee8e_12",j="_image_7ee8e_16",z="_textBox_7ee8e_20",G="_title_7ee8e_24",J="_content_7ee8e_31",o={article:I,isLink:q,image:j,textBox:z,title:G,content:J},K=f("<p>"),O=f("<div><h4></h4><!#><!/>"),p=f("<div>"),L=e=>{const d=[n(y,{get className(){return o.image},get imageUrl(){return e.imageUrl}}),(()=>{const t=m(O),i=t.firstChild,s=i.nextSibling,[v,w]=C(s.nextSibling);return u(i,n(E,{get en(){return e.title.english},get de(){return e.title.german}})),u(t,n(x,{get when(){return e.content!==void 0},get children(){const r=m(K);return u(r,n(M,{get en(){return e.content.english},get de(){return e.content.german}})),_(()=>b(r,o.content)),r}}),v,w),_(r=>{const a=o.textBox,h=o.title;return a!==r._v$&&b(t,r._v$=a),h!==r._v$2&&b(i,r._v$2=h),r},{_v$:void 0,_v$2:void 0}),t})()];return e.linkUrl!==void 0?n(F,{get linkUrl(){return e.linkUrl},get children(){const t=m(p);return u(t,d),_(i=>D(t,{[o.article]:!0,[o.isLink]:!0},i)),t}}):(()=>{const t=m(p);return u(t,d),_(()=>b(t,o.article)),t})()},P="_aboutCards_1p5l3_1",Q={aboutCards:P},V=f("<div><!#><!/><!#><!/>"),nt=()=>{const[e,d]=c(null),[t,i]=c(null),[s,v]=c(null),[w,r]=c(null),[a,h]=c(null);return H(async()=>{try{const l=await g.getAboutBannerData();d(l);const U=await g.getAboutNinaData();i(U);const $=await g.getAboutSophiaData();v($);const k=await g.getAboutCarouselData();r(k);const A=await g.getAboutHappaForHomeData();h(A)}catch(l){console.error(l)}}),[n(x,{get when(){return S(()=>e()!==null)()&&e().subtitle!==null},get children(){return n(T,{get title(){return e().title},get subtitle(){return e().subtitle},get content(){return e().content},get imageUrl(){return e().imageUrl}})}}),n(x,{get when(){return S(()=>t()!==null)()&&s()!==null},get children(){const l=m(V),U=l.firstChild,[$,k]=C(U.nextSibling),A=$.nextSibling,[N,B]=C(A.nextSibling);return u(l,n(L,{get imageUrl(){return t().imageUrl},get title(){return t().title},get content(){return t().content}}),$,k),u(l,n(L,{get imageUrl(){return s().imageUrl},get title(){return s().title},get content(){return s().content}}),N,B),_(()=>b(l,Q.aboutCards)),l}}),n(x,{get when(){return S(()=>a()!==null&&a().buttonText!==null)()&&a().buttonLink!==null},get children(){return n(R,{get imageUrl(){return a().imageUrl},get title(){return a().title},get content(){return a().content},get linkText(){return a().buttonText},get linkUrl(){return a().buttonLink}})}})]};export{nt as default};
