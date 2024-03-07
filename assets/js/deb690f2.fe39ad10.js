"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[509],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var i=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?i.createElement(m,r(r({ref:n},u),{},{components:t})):i.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9365:(e,n,t)=>{t.d(n,{A:()=>r});var i=t(6540),a=t(53);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:n,hidden:t,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,r),hidden:t},n)}},1470:(e,n,t)=>{t.d(n,{A:()=>N});var i=t(8168),a=t(6540),o=t(53),r=t(3104),l=t(6347),s=t(7485),c=t(1682),u=t(9466);function p(e){return function(e){var n;return(null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=d(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[s,c]=m({queryString:t,groupId:i}),[p,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,u.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),g=(()=>{const e=s??p;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),y(e)}),[c,y,o]),tabValues:o}}var g=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),i=c[t].value;i!==l&&(p(n),s(i))},f=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:r}=e;return a.createElement("li",(0,i.A)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>u.push(e),onKeyDown:f,onClick:d},r,{className:(0,o.A)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":l===n})}),t??n)})))}function h(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))))}function I(e){const n=y(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(v,(0,i.A)({},e,n)),a.createElement(h,(0,i.A)({},e,n)))}function N(e){const n=(0,g.A)();return a.createElement(I,(0,i.A)({key:String(n)},e))}},6663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var i=t(8168),a=(t(6540),t(5680)),o=t(6248),r=t(1470),l=t(9365);const s={sidebar_position:2},c="\ud83d\udd14 Display in-app notifications",u={unversionedId:"quick-start/display-inapp-notifications",id:"quick-start/display-inapp-notifications",title:"\ud83d\udd14 Display in-app notifications",description:"Overview",source:"@site/docs/quick-start/display-inapp-notifications.md",sourceDirName:"quick-start",slug:"/quick-start/display-inapp-notifications",permalink:"/quick-start/display-inapp-notifications",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 Send a notification",permalink:"/quick-start/send-a-notification"},next:{title:"\u2699\ufe0f User notification preferences",permalink:"/quick-start/manage-preferences"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Playground",id:"playground",level:2},{value:"Step 1: Install the Front-End SDK",id:"step-1-install-the-front-end-sdk",level:2},{value:"Step 2: Render the In-App Widget",id:"step-2-render-the-in-app-widget",level:2},{value:"Next Steps",id:"next-steps",level:2}],f={toc:d},m="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,i.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"-display-in-app-notifications"},"\ud83d\udd14 Display in-app notifications"),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"In-app notifications refer to notifications inside your front-end, for example, inside a bell button \ud83d\udd14"),(0,a.yg)("p",null,"We provide an ",(0,a.yg)("strong",null,"in-app notification widget")," compatible with most front-end frameworks that works out-of-the-box. It even maintains a live connection to our servers to display new incoming notifications. And, it's fully customizable:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Styles and icons"),(0,a.yg)("li",{parentName:"ul"},"Popup mode and full page mode"),(0,a.yg)("li",{parentName:"ul"},"Different mark-as-read behavior"),(0,a.yg)("li",{parentName:"ul"},"and more ...")),(0,a.yg)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.yg)("img",{src:o.A,style:{maxWidth:400}})),(0,a.yg)("h2",{id:"playground"},"Playground"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/notificationapi-in-app-notifications-demo-l91923?file=/index.js"},"See a demo and modify the code here on CodeSandbox"),"."),(0,a.yg)("h2",{id:"step-1-install-the-front-end-sdk"},"Step 1: Install the Front-End SDK"),(0,a.yg)("p",null,"Different from our back-end npm package."),(0,a.yg)(r.A,{groupId:"js-package-manager",defaultValue:"NPM",values:[{label:"NPM",value:"NPM"},{label:"<script>",value:"script"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"NPM",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm install notificationapi-js-client-sdk\n# yarn add notificationapi-js-client-sdk\n# pnpm add notificationapi-js-client-sdk\n"))),(0,a.yg)(l.A,{value:"script",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/notificationapi-js-client-sdk@4.4.0/dist/notificationapi-js-client-sdk.js"><\/script>\n')))),(0,a.yg)("h2",{id:"step-2-render-the-in-app-widget"},"Step 2: Render the In-App Widget"),(0,a.yg)("p",null,"The example shows the NotificationAPI widget in your front-end. It will automatically pull the in-app notifications from our servers for the given userId and keeps a live connection to receive any new notifications. The widget is placed in the container div specified by ID."),(0,a.yg)(r.A,{groupId:"frontend-language",defaultValue:"react",values:[{label:"React",value:"react"},{label:"Next.js",value:"next"},{label:"Remix",value:"remix"},{label:"Vue",value:"vue"},{label:"Angular",value:"angular"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"react",mdxType:"TabItem"},(0,a.yg)("p",null,"Create the following component and use it anywhere in your app:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPI from 'notificationapi-js-client-sdk';\nimport 'notificationapi-js-client-sdk/dist/styles.css';\nimport { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';\nimport { memo, useEffect } from 'react';\n\nconst NotificationAPIComponent = memo((props) => {\n  useEffect(() => {\n    const notificationapi = new NotificationAPI({\n      clientId: 'CLIENT_ID',\n      userId: props.userId\n    });\n    notificationapi.showInApp({\n      root: 'CONTAINER_DIV_ID',\n      popupPosition: PopupPosition.BottomLeft\n    });\n  }, [props.userId]);\n\n  return <div id=\"CONTAINER_DIV_ID\"></div>;\n});\nexport default NotificationAPIComponent;\n"))),(0,a.yg)(l.A,{value:"next",mdxType:"TabItem"},(0,a.yg)("p",null,"Create the following component and use it anywhere in your app:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"'use client';\n\nimport 'notificationapi-js-client-sdk/dist/styles.css';\nimport { memo, useEffect } from 'react';\nconst NotificationAPIComponent = memo((props: { userId: string }) => {\n  useEffect(() => {\n    const loadNotificationAPI = async () => {\n      const NotificationAPI = (await import('notificationapi-js-client-sdk'))\n        .default;\n      const notificationapi = new NotificationAPI({\n        clientId: 'CLIENT_ID',\n        userId: props.userId\n      });\n      notificationapi.showInApp({\n        root: 'CONTAINER_DIV_ID'\n      });\n    };\n\n    // Call the async function\n    loadNotificationAPI();\n  }, [props.userId]);\n\n  return <div id=\"CONTAINER_DIV_ID\"></div>;\n});\n\nNotificationAPIComponent.displayName = 'NotificationAPIComponent';\n\nexport default NotificationAPIComponent;\n"))),(0,a.yg)(l.A,{value:"remix",mdxType:"TabItem"},(0,a.yg)("p",null,"a) Add the following to your remix.config.js:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// to import esm libraries: https://remix.run/docs/en/main/guides/gotchas#importing-esm-packages\nserverDependenciesToBundle: ['notificationapi-js-client-sdk'];\n")),(0,a.yg)("p",null,"b) Add our CSS styles to your root component:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import NotificationAPICSS from 'notificationapi-js-client-sdk/dist/styles.css';\n\nexport const links: LinksFunction = () => {\n  return [\n    { rel: 'stylesheet', href: NotificationAPICSS }\n    // and the other links ...\n  ];\n};\n")),(0,a.yg)("p",null,"c) Import and use our library:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPIClient from 'notificationapi-js-client-sdk';\nimport { useEffect } from 'react';\n\nexport default function Index() {\n  useEffect(() => {\n    const notificationapi = new NotificationAPIClient({\n      clientId: 'CLIENT_ID',\n      userId: 'USER_ID'\n    });\n\n    notificationapi.showInApp({\n      root: 'bell-container'\n    });\n  }, []);\n\n  return (\n    <main>\n      <div id=\"bell-container\"></div>\n    </main>\n  );\n}\n"))),(0,a.yg)(l.A,{value:"vue",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<script setup>\n  import NotificationAPI from 'notificationapi-js-client-sdk';\n  import 'notificationapi-js-client-sdk/dist/styles.css';\n  import { onMounted } from 'vue';\n  onMounted(() => {\n    const notificationapi = new NotificationAPI({\n      clientId: 'CLIENT_ID',\n      userId: 'USER_ID'\n    });\n\n    notificationapi.showInApp({\n      root: 'myNotifications'\n    });\n  });\n<\/script>\n\n<template>\n  <div>Hello World!</div>\n  <div id=\"myNotifications\"></div>\n</template>\n"))),(0,a.yg)(l.A,{value:"angular",mdxType:"TabItem"},"a) Add our CSS to your styles.scss file:",(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"@import 'node_modules/notificationapi-js-client-sdk/dist/styles.css'\n")),(0,a.yg)("p",null,"b) Import and use our library:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPI from 'notificationapi-js-client-sdk';\nimport {PopupPosition} from 'notificationapi-js-client-sdk/lib/interfaces';\n\nngOnInit() {\n  const notificationapi = new NotificationAPI({\n      userId: \"USERS_ID\",\n      clientId: \"CLIENT_ID\",\n    });\n  notificationapi.showInApp({\n    root: 'bell-container', // root element containing the button\n    popupPosition: PopupPosition.BottomLeft\n  });\n}\n\n// This goes inside the template\n<div id=\"bell-container\"></div>\n"))),(0,a.yg)(l.A,{value:"js",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<script>\n  const notificationapi = new NotificationAPI({\n    clientId: 'CLIENT_ID',\n    userId: 'USER_ID'\n  });\n  notificationapi.showInApp({\n    root: 'CONTAINER_DIV_ID',\n    popupPosition: 'bottomLeft'\n  });\n<\/script>\n")))),(0,a.yg)("h2",{id:"next-steps"},"Next Steps"),(0,a.yg)("p",null,"You are now receiving in-app notifications on your front-end! \ud83c\udf89"),(0,a.yg)("p",null,"Let's do a few more things:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../quick-start/manage-preferences"},"\u2699\ufe0f Manage User Notification Preferences")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../guides/mobile-push"},"\ud83d\udcf1 Setup Mobile Push")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../guides/web-push"},"\ud83c\udf10 Setup Web Push"))))}y.isMDXComponent=!0},6248:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/inapp-da5451c2bfd950abd9758c388e557667.png"}}]);