import{g as F,d as H,h as g,t as J,a as t,j as se,M as A,f as m,i as a,e as oe,s as l}from"./web.7422b675.js";import{a as s,B as o}from"./Button.8c23db01.js";import{I as z}from"./Image.58c0fb1d.js";import{L as j}from"./Link.dd352ffb.js";import{p as K,l as S,L as v,i as V,T as c}from"./Text.e6e267e5.js";const le="_burger_a7tie_1",ve="_isOpen_a7tie_44",q={burger:le,isOpen:ve},ge=J("<div><span></span><span></span><span></span><span></span><span></span><span>"),_e=n=>(()=>{const i=F(ge);return H(_=>g(i,{[q.burger]:!0,[q.isOpen]:n.isOpen},_)),i})(),ue=()=>{const n=K(S);return t(o,{get size(){return s.Small},onClick:()=>{switch(n()){case v.English:S.set(v.German);break;case v.German:S.set(v.English);break}},get children(){return t(se,{get children(){return[t(A,{get when(){return n()===v.English},children:"DE"}),t(A,{get when(){return n()===v.German},children:"EN"})]}})}})},ce="_navigation_13oz1_1",$e="_invertColor_13oz1_14",he="_overlay_13oz1_18",de="_showOverlay_13oz1_37",pe="_logoBox_13oz1_43",be="_logo_13oz1_43",we="_burgerBox_13oz1_53",xe="_navItemsBox_13oz1_59",fe="_showNavItemsBox_13oz1_72",Be="_socialIconsBox_13oz1_76",me="_showSocialIconsBox_13oz1_89",r={navigation:ce,invertColor:$e,overlay:he,showOverlay:de,"fade-in":"_fade-in_13oz1_1",logoBox:pe,logo:be,burgerBox:we,navItemsBox:xe,showNavItemsBox:fe,socialIconsBox:Be,showSocialIconsBox:me},ze=J("<div><div></div><div><a></a></div><div></div><div><a></a><a></a><a></a><a></a><a></a><a></a><a></a></div><div><!#><!/><!#><!/><!#><!/>"),ye=({currentPathname:n})=>{const i=K(V);return(()=>{const _=F(ze),I=_.firstChild,$=I.nextSibling,C=$.firstChild,h=$.nextSibling,d=h.nextSibling,p=d.firstChild,b=p.nextSibling,w=b.nextSibling,x=w.nextSibling,f=x.nextSibling,B=f.nextSibling,k=B.nextSibling,u=d.nextSibling,Q=u.firstChild,[O,W]=m(Q.nextSibling),X=O.nextSibling,[y,Y]=m(X.nextSibling),Z=y.nextSibling,[P,ee]=m(Z.nextSibling);return a(C,t(o,{get size(){return s.Regular},get children(){return t(z,{get imageUrl(){return"/happa-website/logo.svg"},get className(){return r.logo}})}})),a(h,t(o,{get size(){return s.Regular},onClick:()=>V.set(!i()),get children(){return t(_e,{get isOpen(){return i()}})}})),a(p,t(o,{get size(){return s.Regular},get active(){return n==="/happa-website/about"||n==="/happa-website/about/"},get children(){return t(c,{en:"About",de:"Über uns"})}})),a(b,t(o,{get size(){return s.Regular},get active(){return n==="/happa-website/lunch"||n==="/happa-website/lunch/"},get children(){return t(c,{en:"Daily",de:"Tageskarte"})}})),a(w,t(o,{get size(){return s.Regular},get active(){return n==="/happa-website/dinner"||n==="/happa-website/dinner/"},children:"Dinner"})),a(x,t(o,{get size(){return s.Regular},get active(){return n==="/happa-website/events"||n==="/happa-website/events/"},children:"Events"})),a(f,t(o,{get size(){return s.Regular},get active(){return n==="/happa-website/private"||n==="/happa-website/private/"},children:"Private Booking"})),a(B,t(o,{get size(){return s.Regular},get active(){return n==="/happa-website/voucher"||n==="/happa-website/voucher/"},get children(){return t(c,{en:"Vouchers",de:"Gutscheine"})}})),a(k,t(o,{get size(){return s.Regular},get active(){return n==="/happa-website/partner"||n==="/happa-website/partner/"},get children(){return t(c,{en:"Partners",de:"Partner"})}})),a(u,t(j,{linkUrl:"https://www.instagram.com/happa_restaurant",get children(){return t(o,{get size(){return s.Small},get children(){return t(z,{get imageUrl(){return"/happa-website/insta.svg"},width:18})}})}}),O,W),a(u,t(j,{linkUrl:"https://www.facebook.com/happaberlin",get children(){return t(o,{get size(){return s.Small},get children(){return t(z,{get imageUrl(){return"/happa-website/facebook.svg"},width:18})}})}}),y,Y),a(u,t(ue,{}),P,ee),H(e=>{const N=r.navigation,te={[r.overlay]:!0,[r.showOverlay]:i()},ne={[r.logoBox]:!0,[r.invertColor]:i()},R="/happa-website/",re={[r.burgerBox]:!0,[r.invertColor]:i()},ie={[r.navItemsBox]:!0,[r.showNavItemsBox]:i(),[r.invertColor]:i()},E="/happa-website/about",L="/happa-website/lunch",M="/happa-website/dinner",U="/happa-website/events",D="/happa-website/private",G="/happa-website/voucher",T="/happa-website/partner",ae={[r.socialIconsBox]:!0,[r.showSocialIconsBox]:i(),[r.invertColor]:i()};return N!==e._v$&&oe(_,e._v$=N),e._v$2=g(I,te,e._v$2),e._v$3=g($,ne,e._v$3),R!==e._v$4&&l(C,"href",e._v$4=R),e._v$5=g(h,re,e._v$5),e._v$6=g(d,ie,e._v$6),E!==e._v$7&&l(p,"href",e._v$7=E),L!==e._v$8&&l(b,"href",e._v$8=L),M!==e._v$9&&l(w,"href",e._v$9=M),U!==e._v$10&&l(x,"href",e._v$10=U),D!==e._v$11&&l(f,"href",e._v$11=D),G!==e._v$12&&l(B,"href",e._v$12=G),T!==e._v$13&&l(k,"href",e._v$13=T),e._v$14=g(u,ae,e._v$14),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0}),_})()};export{ye as default};
