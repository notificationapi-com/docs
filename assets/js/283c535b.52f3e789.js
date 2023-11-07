"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="\ud83d\udcac SMS",l={unversionedId:"channels/sms",id:"channels/sms",title:"\ud83d\udcac SMS",description:"Requirements",source:"@site/docs/channels/sms.md",sourceDirName:"channels",slug:"/channels/sms",permalink:"/channels/sms",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd14 In-App",permalink:"/channels/inapp"},next:{title:"\ud83d\udcde Automated Voice Calls",permalink:"/channels/call"}},u={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Sender Phone Numbers",id:"sender-phone-numbers",level:2},{value:"Free Accounts:",id:"free-accounts",level:4},{value:"Paid Accounts:",id:"paid-accounts",level:4},{value:"End-User Phone Number Format",id:"end-user-phone-number-format",level:2},{value:"Your Own Telecom Team",id:"your-own-telecom-team",level:2},{value:"Maximum Length",id:"maximum-length",level:2}],c={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-sms"},"\ud83d\udcac SMS"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No setup required")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You DON'T need another 3rd-party like Twilio. Through our partnerships, we allocate and manage any required telecom infrastructure for you.")),(0,a.kt)("h2",{id:"sender-phone-numbers"},"Sender Phone Numbers"),(0,a.kt)("h4",{id:"free-accounts"},"Free Accounts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"+16505501770")),(0,a.kt)("h4",{id:"paid-accounts"},"Paid Accounts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dedicated phone number"),(0,a.kt)("li",{parentName:"ul"},"By default, from the +1 (650) area code but can be changed to other area codes, short codes, or toll-free numbers")),(0,a.kt)("h2",{id:"end-user-phone-number-format"},"End-User Phone Number Format"),(0,a.kt)("p",null,"When sending notifications, format the phone numbers with a + and country code, for example, +16175551212 (E.164 standard). We accept unformatted US/Canada numbers, e.g., (415) 555-1212, 415-555-1212, or 4155551212."),(0,a.kt)("h2",{id:"your-own-telecom-team"},"Your Own Telecom Team"),(0,a.kt)("p",null,'Imagine having your own "Telecom" team:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Regulatory Compliance:")," More and more countries and telecom companies are joining forces to prevent SMS spam. We help our customers navigate these regulations and stay compliant, by registering your numbers, submitting necessary documentations, verifying your business in different juristictions, applying for elevated access, and more.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Delivery Monitoring:")," We also monitor your SMS delivery rates and will reach out to you directly if we detect an alarming rate of failure. You can also rely on our team for best practices, reviewing your SMS content, or to help you troubleshoot a delivery issue.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Transferring existing numbers:")," We can also navigate the transfer of any existing numbers to our care, so your team can focus on your software and core product."))),(0,a.kt)("h2",{id:"maximum-length"},"Maximum Length"),(0,a.kt)("p",null,"800 ASCII characters."))}p.isMDXComponent=!0}}]);