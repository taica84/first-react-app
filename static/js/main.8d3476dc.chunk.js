(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{24:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(1),n=s(17),a=s.n(n),l=s(15),r=(s(24),s(2)),j=["btn--primary","btn--outline","btn--test"],b=["btn--medium","btn--large"],o=function(e){var t=e.children,s=e.type,i=e.onClick,n=e.buttonStyle,a=e.buttonSize,l=j.includes(n)?n:j[0],o=b.includes(a)?a:b[0];return Object(c.jsx)(r.b,{to:"/sign-up",className:"btn-mobile",children:Object(c.jsx)("button",{className:"btn ".concat(l," ").concat(o),onClick:i,type:s,children:t})})};s(30);var d=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),s=t[0],n=t[1],a=Object(i.useState)(!0),j=Object(l.a)(a,2),b=j[0],d=j[1],h=function(){return n(!1)},x=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(i.useEffect)((function(){x()}),[]),window.addEventListener("resize",x),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("div",{className:"navbar-container",children:[Object(c.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:h,children:["TRVL",Object(c.jsx)("i",{class:"fab fa-typo3"})]}),Object(c.jsx)("div",{className:"menu-icon",onClick:function(){return n(!s)},children:Object(c.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(c.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/",className:"nav-links",onClick:h,children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/services",className:"nav-links",onClick:h,children:"Services"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/products",className:"nav-links",onClick:h,children:"Products"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:"/sign-up",className:"nav-links-mobile",onClick:h,children:"Sign Up"})})]}),b&&Object(c.jsx)(o,{buttonStyle:"btn--outline",children:"SIGN UP"})]})})})};s(9),s(31);var h=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"cards__item",children:Object(c.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(c.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(c.jsx)("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})}),Object(c.jsx)("div",{className:"cards__item__info",children:Object(c.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var x=function(){return Object(c.jsxs)("div",{className:"cards",children:[Object(c.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(c.jsx)("div",{className:"cards__container",children:Object(c.jsxs)("div",{className:"cards__wrapper",children:[Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(h,{src:"images/img-9.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),Object(c.jsx)(h,{src:"images/img-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})]}),Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(h,{src:"images/img-3.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),Object(c.jsx)(h,{src:"images/img-4.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),Object(c.jsx)(h,{src:"images/img-8.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})]})]})})]})};s(32);var O=function(){return Object(c.jsxs)("div",{className:"hero-container",children:[Object(c.jsx)("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(c.jsx)("h1",{children:"ADVENTURE AWAITS"}),Object(c.jsx)("p",{children:"What are you waiting for?"}),Object(c.jsxs)("div",{className:"hero-btns",children:[Object(c.jsx)(o,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(c.jsxs)(o,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey"),children:["WATCH TRAILER ",Object(c.jsx)("i",{className:"far fa-play-circle"})]})]})]})};s(33);var u=function(){return Object(c.jsxs)("div",{className:"footer-container",children:[Object(c.jsxs)("section",{className:"footer-subscription",children:[Object(c.jsx)("p",{className:"footer-subscription-heading",children:"Join the Adventure newsletter to receive our best vacation deals"}),Object(c.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(c.jsx)("div",{className:"input-areas",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(c.jsx)(o,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(c.jsxs)("div",{class:"footer-links",children:[Object(c.jsxs)("div",{className:"footer-link-wrapper",children:[Object(c.jsxs)("div",{class:"footer-link-items",children:[Object(c.jsx)("h2",{children:"About Us"}),Object(c.jsx)(r.b,{to:"/sign-up",children:"How it works"}),Object(c.jsx)(r.b,{to:"/",children:"Testimonials"}),Object(c.jsx)(r.b,{to:"/",children:"Careers"}),Object(c.jsx)(r.b,{to:"/",children:"Investors"}),Object(c.jsx)(r.b,{to:"/",children:"Terms of Service"})]}),Object(c.jsxs)("div",{class:"footer-link-items",children:[Object(c.jsx)("h2",{children:"Contact Us"}),Object(c.jsx)(r.b,{to:"/",children:"Contact"}),Object(c.jsx)(r.b,{to:"/",children:"Support"}),Object(c.jsx)(r.b,{to:"/",children:"Destinations"}),Object(c.jsx)(r.b,{to:"/",children:"Sponsorships"})]})]}),Object(c.jsxs)("div",{className:"footer-link-wrapper",children:[Object(c.jsxs)("div",{class:"footer-link-items",children:[Object(c.jsx)("h2",{children:"Videos"}),Object(c.jsx)(r.b,{to:"/",children:"Submit Video"}),Object(c.jsx)(r.b,{to:"/",children:"Ambassadors"}),Object(c.jsx)(r.b,{to:"/",children:"Agency"}),Object(c.jsx)(r.b,{to:"/",children:"Influencer"})]}),Object(c.jsxs)("div",{class:"footer-link-items",children:[Object(c.jsx)("h2",{children:"Social Media"}),Object(c.jsx)(r.b,{to:"/",children:"Instagram"}),Object(c.jsx)(r.b,{to:"/",children:"Facebook"}),Object(c.jsx)(r.b,{to:"/",children:"Youtube"}),Object(c.jsx)(r.b,{to:"/",children:"Twitter"})]})]})]}),Object(c.jsx)("section",{class:"social-media",children:Object(c.jsxs)("div",{class:"social-media-wrap",children:[Object(c.jsx)("div",{class:"footer-logo",children:Object(c.jsxs)(r.b,{to:"/",className:"social-logo",children:["TRVL",Object(c.jsx)("i",{class:"fab fa-typo3"})]})}),Object(c.jsx)("small",{class:"website-rights",children:"TRVL \xa9 2020"}),Object(c.jsxs)("div",{class:"social-icons",children:[Object(c.jsx)(r.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(c.jsx)("i",{class:"fab fa-facebook-f"})}),Object(c.jsx)(r.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(c.jsx)("i",{class:"fab fa-instagram"})}),Object(c.jsx)(r.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(c.jsx)("i",{class:"fab fa-youtube"})}),Object(c.jsx)(r.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(c.jsx)("i",{class:"fab fa-twitter"})}),Object(c.jsx)(r.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(c.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})};var m=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{}),Object(c.jsx)(x,{}),Object(c.jsx)(u,{})]})},p=s(3);function v(){return Object(c.jsx)("h1",{className:"services",children:"SERVICES"})}function f(){return Object(c.jsx)("h1",{className:"products",children:"PRODUCTS"})}function g(){return Object(c.jsx)("h1",{className:"sign-up",children:"LIKE & SUBSCRIBE"})}var N=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(r.a,{children:[Object(c.jsx)(d,{}),Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{path:"/",exact:!0,component:m}),Object(c.jsx)(p.a,{path:"/services",component:v}),Object(c.jsx)(p.a,{path:"/products",component:f}),Object(c.jsx)(p.a,{path:"/sign-up",component:g})]})]})})};a.a.render(Object(c.jsx)(N,{}),document.getElementById("root"))},9:function(e,t,s){}},[[34,1,2]]]);
//# sourceMappingURL=main.8d3476dc.chunk.js.map