"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="SMS/Call Notifications",c={unversionedId:"guides/sms-call",id:"guides/sms-call",title:"SMS/Call Notifications",description:"Origin Phone Number",source:"@site/docs/guides/sms-call.md",sourceDirName:"guides",slug:"/guides/sms-call",permalink:"/guides/sms-call",draft:!1,editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/guides/sms-call.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Notification Preferences",permalink:"/guides/user-preferences"},next:{title:"Update Sender Address",permalink:"/guides/update-sender-address"}},s={},l=[{value:"Origin Phone Number",id:"origin-phone-number",level:2},{value:"Phone Number Format",id:"phone-number-format",level:2},{value:"Maximum Length",id:"maximum-length",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"smscall-notifications"},"SMS/Call Notifications"),(0,a.kt)("h2",{id:"origin-phone-number"},"Origin Phone Number"),(0,a.kt)("p",null,"SMS and phone call notifications from ",(0,a.kt)("strong",{parentName:"p"},"free accounts")," originate from a shared phone number: +16505501770. We do not guarantee that the free account phone number stays the same."),(0,a.kt)("p",null,"Each ",(0,a.kt)("strong",{parentName:"p"},"Paid account")," has a dedicated phone number from the +1 (650) area code."),(0,a.kt)("h2",{id:"phone-number-format"},"Phone Number Format"),(0,a.kt)("p",null,"You should format the phone numbers with a + and country code, for example, +16175551212 (E.164 standard). We accept unformatted US/Canada numbers, e.g., (415) 555-1212, 415-555-1212, or 4155551212."),(0,a.kt)("h2",{id:"maximum-length"},"Maximum Length"),(0,a.kt)("p",null,"SMS messages and phone call scripts have a maximum length of 800 characters, including the actual merge tag values."))}p.isMDXComponent=!0}}]);