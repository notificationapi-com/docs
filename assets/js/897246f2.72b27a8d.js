"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[141],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i=r.p+"assets/images/webpush-b6817018a5ce3b17d77d591e9315f952.png",o=r.p+"assets/images/webpush2-dfc30cec13e0067f31b7f565728bc51a.png",l={},s="\ud83c\udf10 Web Push",u={unversionedId:"channels/web-push",id:"channels/web-push",title:"\ud83c\udf10 Web Push",description:"Web push notifications look almost identical to native notification on the device. However, they require the user to opt-in from their browser when they are on your website/front-end.",source:"@site/docs/channels/web-push.md",sourceDirName:"channels",slug:"/channels/web-push",permalink:"/channels/web-push",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf1 Mobile Push",permalink:"/channels/mobile-push"},next:{title:"Server SDKs (Back-end)",permalink:"/reference/server"}},p={},c=[{value:"Supported Browsers",id:"supported-browsers",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Important Features",id:"important-features",level:2},{value:"Tracked Events",id:"tracked-events",level:2}],d={toc:c},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-web-push"},"\ud83c\udf10 Web Push"),(0,a.kt)("img",{src:i,style:{maxWidth:300}}),(0,a.kt)("br",null),(0,a.kt)("img",{src:o,style:{maxWidth:400}}),(0,a.kt)("p",null,"Web push notifications look almost identical to native notification on the device. However, they require the user to opt-in from their browser when they are on your website/front-end."),(0,a.kt)("p",null,"Not to be confused with ",(0,a.kt)("a",{parentName:"p",href:"./mobile-push"},"Mobile Push")," notifications that are truly native (delivered from installed apps), or ",(0,a.kt)("a",{parentName:"p",href:"./inapp"},"In-App Notifications")," that are displayed inside your UI, e.g. inside a bell icon or webpage."),(0,a.kt)("h2",{id:"supported-browsers"},"Supported Browsers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chrome v20 (2012)"),(0,a.kt)("li",{parentName:"ul"},"Safari 7 (2013)"),(0,a.kt)("li",{parentName:"ul"},"Edge v14 (2016)"),(0,a.kt)("li",{parentName:"ul"},"Firefox 22 (2013)"),(0,a.kt)("li",{parentName:"ul"},"Opera 23 (2014)"),(0,a.kt)("li",{parentName:"ul"},"Chrome Android v42 (2015)"),(0,a.kt)("li",{parentName:"ul"},"Firefox Android v22 (2013)"),(0,a.kt)("li",{parentName:"ul"},"Opera Android v29 (2015)"),(0,a.kt)("li",{parentName:"ul"},"Safari iOS v16.4 (2023)"),(0,a.kt)("li",{parentName:"ul"},"Samsung Internet v4 (2016)"),(0,a.kt)("li",{parentName:"ul"},"WebView Android: Not Supported.")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Our front-end SDK which takes care of the opt-in process, subscribing user's devices, ...")),(0,a.kt)("p",null,"Check our ",(0,a.kt)("a",{parentName:"p",href:"/guides/web-push"},"Send a Push Notification")," guide."),(0,a.kt)("h2",{id:"important-features"},"Important Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visual editor"),(0,a.kt)("li",{parentName:"ul"},"Supports all devices"),(0,a.kt)("li",{parentName:"ul"},"Supports image and icon"),(0,a.kt)("li",{parentName:"ul"},"Supports redirecting the user to a URL when they click on the notification")),(0,a.kt)("h2",{id:"tracked-events"},"Tracked Events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delivery"),(0,a.kt)("li",{parentName:"ul"},"Opens and Clicks (Coming soon)")))}f.isMDXComponent=!0}}]);