import{g as d,d as v,i as l,a as r,e as x,f as _,S as N,t as h}from"./web.c9e0eb9c.js";import{I as C}from"./Button.1d589944.js";import{R}from"./requestService.76cfdce5.js";import{T as f}from"./Text.23820897.js";const T="_article_myw4u_1",A="_image_myw4u_13",E="_titleBox_myw4u_19",I="_title_myw4u_19",U="_subtitle_myw4u_29",k="_content_myw4u_35",n={article:T,image:A,titleBox:E,title:I,subtitle:U,content:k},M=h("<p>"),j=h("<div><div><h1></h1><h2></h2></div><!#><!/><!#><!/>"),G=t=>(()=>{const i=d(j),a=i.firstChild,s=a.firstChild,c=s.nextSibling,b=a.nextSibling,[g,w]=v(b.nextSibling),y=g.nextSibling,[S,B]=v(y.nextSibling);return l(s,r(f,{get en(){return t.title.english},get de(){return t.title.german}})),l(c,r(f,{get en(){return t.subtitle.english},get de(){return t.subtitle.german}})),l(i,r(C,{get className(){return n.image},get imageUrl(){return t.imageUrl}}),g,w),l(i,r(N,{get when(){return t.content!==void 0},get children(){const e=d(M);return l(e,r(R,{get en(){return t.content.english},get de(){return t.content.german}})),x(()=>_(e,n.content)),e}}),S,B),x(e=>{const m=n.article,o=n.titleBox,u=n.title,$=n.subtitle;return m!==e._v$&&_(i,e._v$=m),o!==e._v$2&&_(a,e._v$2=o),u!==e._v$3&&_(s,e._v$3=u),$!==e._v$4&&_(c,e._v$4=$),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),i})();export{G as A};