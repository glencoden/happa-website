import{g as d,f as c,i,a as n,S as B,d as x,e as l,t as h}from"./web.370a70f4.js";import{I as L,B as R,a as z}from"./Image.9f296f84.js";import{L as A}from"./Link.49fa5252.js";import{R as E}from"./requestService.8d88dc7c.js";import{T as v}from"./Text.effc4c03.js";const I="_article_12rs8_1",y="_image_12rs8_13",M="_titleBox_12rs8_19",j="_title_12rs8_19",q="_subtitle_12rs8_29",D="_content_12rs8_35",F="_buttonBox_12rs8_44",r={article:I,image:y,titleBox:M,title:j,subtitle:q,content:D,buttonBox:F},G=h("<div>"),H=h("<p><!#><!/><!#><!/>"),J=h("<div><div><h1></h1><h2></h2></div><!#><!/><!#><!/>"),W=t=>(()=>{const _=d(J),u=_.firstChild,m=u.firstChild,b=m.nextSibling,S=u.nextSibling,[f,k]=c(S.nextSibling),T=f.nextSibling,[U,C]=c(T.nextSibling);return i(m,n(v,{get en(){return t.title.english},get de(){return t.title.german}})),i(b,n(v,{get en(){return t.subtitle.english},get de(){return t.subtitle.german}})),i(_,n(L,{get className(){return r.image},get imageUrl(){return t.imageUrl}}),f,k),i(_,n(B,{get when(){return t.content!==void 0},get children(){const e=d(H),s=e.firstChild,[g,o]=c(s.nextSibling),a=g.nextSibling,[N,w]=c(a.nextSibling);return i(e,n(E,{get en(){return t.content.english},get de(){return t.content.german}}),g,o),i(e,n(B,{get when(){return t.linkText!==void 0&&t.linkUrl!==void 0},get children(){const $=d(G);return i($,n(A,{get linkUrl(){return t.linkUrl},get children(){return n(R,{get size(){return z.Large},get children(){return n(v,{get en(){return t.linkText.english},get de(){return t.linkText.german}})}})}})),x(()=>l($,r.buttonBox)),$}}),N,w),x(()=>l(e,r.content)),e}}),U,C),x(e=>{const s=r.article,g=r.titleBox,o=r.title,a=r.subtitle;return s!==e._v$&&l(_,e._v$=s),g!==e._v$2&&l(u,e._v$2=g),o!==e._v$3&&l(m,e._v$3=o),a!==e._v$4&&l(b,e._v$4=a),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),_})();export{W as A};