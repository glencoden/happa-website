import{g as $,f as s,i,a as n,S as B,b as N,d,e as r,t as b}from"./web.7422b675.js";import{T as v,B as w,a as L}from"./Text.cf04a2b8.js";import{I as R}from"./Image.58c0fb1d.js";import{L as z}from"./Link.dd352ffb.js";import{R as A}from"./requestService.0794e922.js";const E="_article_xjcgq_1",I="_image_xjcgq_13",M="_titleBox_xjcgq_19",y="_title_xjcgq_19",D="_subtitle_xjcgq_29",F="_content_xjcgq_35",G="_buttonBox_xjcgq_43",l={article:E,image:I,titleBox:M,title:y,subtitle:D,content:F,buttonBox:G},H=b("<div>"),J=b("<p><!#><!/><!#><!/>"),K=b("<div><div><h1></h1><h2></h2></div><!#><!/><!#><!/>"),X=t=>(()=>{const g=$(K),u=g.firstChild,x=u.firstChild,h=x.nextSibling,S=u.nextSibling,[f,k]=s(S.nextSibling),j=f.nextSibling,[q,T]=s(j.nextSibling);return i(x,n(v,{get en(){return t.title.english},get de(){return t.title.german}})),i(h,n(v,{get en(){return t.subtitle.english},get de(){return t.subtitle.german}})),i(g,n(R,{get className(){return l.image},get imageUrl(){return t.imageUrl}}),f,k),i(g,n(B,{get when(){return t.content!==void 0},get children(){const e=$(J),c=e.firstChild,[_,o]=s(c.nextSibling),a=_.nextSibling,[U,C]=s(a.nextSibling);return i(e,n(A,{get en(){return t.content.english},get de(){return t.content.german}}),_,o),i(e,n(B,{get when(){return N(()=>!!t.linkText)()&&!!t.linkUrl},get children(){const m=$(H);return i(m,n(z,{get linkUrl(){return t.linkUrl},get children(){return n(w,{get size(){return L.Large},get children(){return n(v,{get en(){return t.linkText.english},get de(){return t.linkText.german}})}})}})),d(()=>r(m,l.buttonBox)),m}}),U,C),d(()=>r(e,l.content)),e}}),q,T),d(e=>{const c=l.article,_=l.titleBox,o=l.title,a=l.subtitle;return c!==e._v$&&r(g,e._v$=c),_!==e._v$2&&r(u,e._v$2=_),o!==e._v$3&&r(x,e._v$3=o),a!==e._v$4&&r(h,e._v$4=a),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})();export{X as A};
