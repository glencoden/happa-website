import{g as L,b as g,t as R,a as x,i,c as X}from"./web.c4278b29.js";import{a as E,c as e,b as Y,M as O}from"./solid.f82a30ea.js";import{a as s,B as l}from"./Button.c29e86bc.js";import{I as p}from"./Image.bd65ecf9.js";import{L as k}from"./Link.d9108e73.js";import{p as M,l as $,L as a,i as y,T as v}from"./Text.8436a095.js";const Z="_burger_a7tie_1",P="_isOpen_a7tie_44",N={burger:Z,isOpen:P},ee=R("<div><span></span><span></span><span></span><span></span><span></span><span>"),ne=n=>(()=>{const o=L(ee);return E(c=>g(o,{[N.burger]:!0,[N.isOpen]:n.isOpen},c)),o})(),te=()=>{const n=M($);return e(l,{get size(){return s.Small},onClick:()=>{switch(n()){case a.English:$.set(a.German);break;case a.German:$.set(a.English);break}},get children(){return e(Y,{get children(){return[e(O,{get when(){return n()===a.English},children:"DE"}),e(O,{get when(){return n()===a.German},children:"EN"})]}})}})},oe="_navigation_571op_1",re="_invertColor_571op_14",ie="_overlay_571op_18",se="_showOverlay_571op_37",le="_logoBox_571op_43",ae="_logo_571op_43",ge="_burgerBox_571op_53",ce="_navItemsBox_571op_59",_e="_showNavItemsBox_571op_72",ve="_socialIconsBox_571op_76",ue="_showSocialIconsBox_571op_89",t={navigation:oe,invertColor:re,overlay:ie,showOverlay:se,"fade-in":"_fade-in_571op_1",logoBox:le,logo:ae,burgerBox:ge,navItemsBox:ce,showNavItemsBox:_e,socialIconsBox:ve,showSocialIconsBox:ue},de=R('<div><div></div><div><a href="/"></a></div><div></div><div><a href="/about"></a><a href="/lunch"></a><a href="/dinner"></a><a href="/events"></a><a href="/voucher"></a><a href="/partner"></a></div><div><!#><!/><!#><!/><!#><!/>'),me=({currentPathname:n})=>{const o=M(y);return(()=>{const c=L(de),b=c.firstChild,u=b.nextSibling,U=u.firstChild,d=u.nextSibling,h=d.nextSibling,f=h.firstChild,m=f.nextSibling,B=m.nextSibling,w=B.nextSibling,S=w.nextSibling,G=S.nextSibling,_=h.nextSibling,D=_.firstChild,[I,T]=x(D.nextSibling),A=I.nextSibling,[C,V]=x(A.nextSibling),j=C.nextSibling,[q,F]=x(j.nextSibling);return i(U,e(l,{get size(){return s.Regular},get children(){return e(p,{get imageUrl(){return"happa-website//icons/logo.svg"},get className(){return t.logo}})}})),i(d,e(l,{get size(){return s.Regular},onClick:()=>y.set(!o()),get children(){return e(ne,{get isOpen(){return o()}})}})),i(f,e(l,{get size(){return s.Regular},active:n==="/about"||n==="/about/",get children(){return e(v,{en:"About",de:"Über uns"})}})),i(m,e(l,{get size(){return s.Regular},active:n==="/lunch"||n==="/lunch/",get children(){return e(v,{en:"Lunch",de:"Mittag"})}})),i(B,e(l,{get size(){return s.Regular},active:n==="/dinner"||n==="/dinner/",children:"Dinner"})),i(w,e(l,{get size(){return s.Regular},active:n==="/events"||n==="/events/",children:"Events"})),i(S,e(l,{get size(){return s.Regular},active:n==="/voucher"||n==="/voucher/",get children(){return e(v,{en:"Vouchers",de:"Gutscheine"})}})),i(G,e(l,{get size(){return s.Regular},active:n==="/partner"||n==="/partner/",get children(){return e(v,{en:"Partners",de:"Partner"})}})),i(_,e(k,{linkUrl:"https://www.instagram.com/happa_restaurant",get children(){return e(l,{get size(){return s.Small},get children(){return e(p,{imageUrl:"/icons/insta.svg",width:18})}})}}),I,T),i(_,e(k,{linkUrl:"https://www.facebook.com/happaberlin",get children(){return e(l,{get size(){return s.Small},get children(){return e(p,{imageUrl:"/icons/facebook.svg",width:18})}})}}),C,V),i(_,e(te,{}),q,F),E(r=>{const z=t.navigation,H={[t.overlay]:!0,[t.showOverlay]:o()},J={[t.logoBox]:!0,[t.invertColor]:o()},K={[t.burgerBox]:!0,[t.invertColor]:o()},Q={[t.navItemsBox]:!0,[t.showNavItemsBox]:o(),[t.invertColor]:o()},W={[t.socialIconsBox]:!0,[t.showSocialIconsBox]:o(),[t.invertColor]:o()};return z!==r._v$&&X(c,r._v$=z),r._v$2=g(b,H,r._v$2),r._v$3=g(u,J,r._v$3),r._v$4=g(d,K,r._v$4),r._v$5=g(h,Q,r._v$5),r._v$6=g(_,W,r._v$6),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),c})()};export{me as default};
