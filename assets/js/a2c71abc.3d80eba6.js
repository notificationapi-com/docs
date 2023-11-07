"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o=n.p+"assets/images/userpref2-c4be0a0b425b126d9d3e298b7e3298b8.png",a={},l="\u2699\ufe0f User Preferences Widget",s={unversionedId:"components/user-preferences",id:"components/user-preferences",title:"\u2699\ufe0f User Preferences Widget",description:"This document outlines all the features, common use-cases and best-practices for the user notification preferences widget.",source:"@site/docs/components/user-preferences.md",sourceDirName:"components",slug:"/components/user-preferences",permalink:"/components/user-preferences",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude49 Unsubscribe Link & Page",permalink:"/components/unsubscribe-page"},next:{title:"\ud83d\udd0e Logs",permalink:"/features/logs"}},p={},c=[{value:"How It Works",id:"how-it-works",level:2},{value:"What options are displayed?",id:"what-options-are-displayed",level:2},{value:"Display Modes",id:"display-modes",level:2},{value:"Popup (Default)",id:"popup-default",level:4},{value:"Inline",id:"inline",level:4},{value:"Styling / Branding",id:"styling--branding",level:2}],u={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-user-preferences-widget"},"\u2699\ufe0f User Preferences Widget"),(0,i.kt)("img",{src:o,style:{maxWidth:380}}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"This document outlines all the features, common use-cases and best-practices for the user notification preferences widget."),(0,i.kt)("p",null,"This widget is part of our Front-end SDK, compatible with any JavaScript-based front-end framework like React, Angular and so on."),(0,i.kt)("p",null,"Relevant docs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../quick-start/manage-preferences"},"Add the widget to your front-end")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../reference/js-client"},"Front-end SDK reference"))),(0,i.kt)("h2",{id:"how-it-works"},"How It Works"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The widget connects to our servers and reads the user preferences"),(0,i.kt)("li",{parentName:"ul"},"It will use this data to render the UI elements necessary to show the preferences"),(0,i.kt)("li",{parentName:"ul"},"Upon end-user interaction, it will update our servers of the new preferences")),(0,i.kt)("p",null,"These preferences will be used in our servers for deciding how notifications are delivered to the end-user."),(0,i.kt)("h2",{id:"what-options-are-displayed"},"What options are displayed?"),(0,i.kt)("p",null,'Only channels that are enabled for the notification through the dashboard are visible/editable. For example, if the "SMS" channel is not enabled on a notification, the toggle will not appear. If the SMS channel is disabled for every notification, the SMS column will disappear altogether.'),(0,i.kt)("p",null,"Only notifications will appear that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user has received once, or"),(0,i.kt)("li",{parentName:"ul"},"The user has explicit preferences set for them, e.g. when your team explicitly enables the notification for the user from the SDK")),(0,i.kt)("h2",{id:"display-modes"},"Display Modes"),(0,i.kt)("h4",{id:"popup-default"},"Popup (Default)"),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"showUserPreferences()")," will display a popup similar to the image above. This is referred to as the popup mode."),(0,i.kt)("h4",{id:"inline"},"Inline"),(0,i.kt)("p",null,"Alternatively, by using ",(0,i.kt)("inlineCode",{parentName:"p"},'parent: "DIV_ID"')," parameter, the widget will render the preferences directly onto the parent element (ideally an empty div). This is referred to as the inline mode. This mode is useful for creating a stand-alone notification settings page in your app."),(0,i.kt)("h2",{id:"styling--branding"},"Styling / Branding"),(0,i.kt)("p",null,'There is no "NotificationAPI" branding on this widget, even in our free tier.'),(0,i.kt)("p",null,"And you can completely override the styles to make it match your own UI. You simply need to inspect the element you want to style, find the correct CSS class and customize it by writing your own CSS rules."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"/* Hide the title */\n.notificationapi-preferences-popup h1 {\n  display: none !important;\n}\n\n/* Change the toggle color to orange */\n.notificationapi-preferences-popup .switch input:checked + i {\n  background-color: orange !important;\n}\n")))}f.isMDXComponent=!0}}]);