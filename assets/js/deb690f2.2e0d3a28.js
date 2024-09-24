"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[509],{2700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var i=t(4848),o=t(8453),a=t(6248),s=t(1470),r=t(9365);const l={sidebar_position:2},c="\ud83d\udd14 Display in-app notifications",u={id:"quick-start/display-inapp-notifications",title:"\ud83d\udd14 Display in-app notifications",description:"Overview",source:"@site/docs/quick-start/display-inapp-notifications.md",sourceDirName:"quick-start",slug:"/quick-start/display-inapp-notifications",permalink:"/quick-start/display-inapp-notifications",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 Send a notification",permalink:"/quick-start/send-a-notification"},next:{title:"\u2699\ufe0f User notification preferences",permalink:"/quick-start/manage-preferences"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Playground",id:"playground",level:2},{value:"Step 1: Install the Front-End SDK",id:"step-1-install-the-front-end-sdk",level:2},{value:"Step 2: Render the In-App Widget",id:"step-2-render-the-in-app-widget",level:2},{value:"Next Steps",id:"next-steps",level:2}];function f(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-display-in-app-notifications",children:"\ud83d\udd14 Display in-app notifications"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"In-app notifications refer to notifications inside your front-end, for example, inside a bell button \ud83d\udd14"}),"\n",(0,i.jsxs)(n.p,{children:["We provide an ",(0,i.jsx)("strong",{children:"in-app notification widget"})," compatible with most front-end frameworks that works out-of-the-box. It even maintains a live connection to our servers to display new incoming notifications. And, it's fully customizable:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Styles and icons"}),"\n",(0,i.jsx)(n.li,{children:"Popup mode and full page mode"}),"\n",(0,i.jsx)(n.li,{children:"Different mark-as-read behavior"}),"\n",(0,i.jsx)(n.li,{children:"and more ..."}),"\n"]}),"\n","\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"start"},children:(0,i.jsx)("img",{src:a.A,style:{maxWidth:500,borderRadius:8,width:"100%"}})}),"\n",(0,i.jsx)(n.h2,{id:"playground",children:"Playground"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"../features/mergetags#playground",children:"You can see and modify the code here on our in-app playground"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-install-the-front-end-sdk",children:"Step 1: Install the Front-End SDK"}),"\n",(0,i.jsx)(n.p,{children:"Different from our back-end npm package."}),"\n","\n",(0,i.jsxs)(s.A,{groupId:"js-package-manager",defaultValue:"NPM",values:[{label:"NPM",value:"NPM"},{label:"<script>",value:"script"}],children:[(0,i.jsx)(r.A,{value:"NPM",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install notificationapi-js-client-sdk\n# yarn add notificationapi-js-client-sdk\n# pnpm add notificationapi-js-client-sdk\n"})})}),(0,i.jsx)(r.A,{value:"script",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script src="https://unpkg.com/notificationapi-js-client-sdk@4.4.0/dist/notificationapi-js-client-sdk.js"><\/script>\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-render-the-in-app-widget",children:"Step 2: Render the In-App Widget"}),"\n",(0,i.jsx)(n.p,{children:"The example shows the NotificationAPI widget in your front-end. It will automatically pull the in-app notifications from our servers for the given userId and keeps a live connection to receive any new notifications. The widget is placed in the container div specified by ID."}),"\n",(0,i.jsxs)(s.A,{groupId:"frontend-language",defaultValue:"react",values:[{label:"React",value:"react"},{label:"Next.js",value:"next"},{label:"Remix",value:"remix"},{label:"Vue",value:"vue"},{label:"Angular",value:"angular"},{label:"JavaScript",value:"js"}],children:[(0,i.jsxs)(r.A,{value:"react",children:[(0,i.jsx)(n.p,{children:"Create the following component and use it anywhere in your app:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import NotificationAPI from 'notificationapi-js-client-sdk';\nimport 'notificationapi-js-client-sdk/dist/styles.css';\nimport { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';\nimport { memo, useEffect } from 'react';\n\nconst NotificationAPIComponent = memo((props) => {\n  useEffect(() => {\n    const notificationapi = new NotificationAPI({\n      clientId: 'CLIENT_ID',\n      userId: props.userId\n    });\n    notificationapi.showInApp({\n      root: 'CONTAINER_DIV_ID',\n      popupPosition: PopupPosition.BottomLeft\n    });\n  }, [props.userId]);\n\n  return <div id=\"CONTAINER_DIV_ID\"></div>;\n});\nexport default NotificationAPIComponent;\n"})})]}),(0,i.jsxs)(r.A,{value:"next",children:[(0,i.jsx)(n.p,{children:"Create the following component and use it anywhere in your app:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"'use client';\n\nimport 'notificationapi-js-client-sdk/dist/styles.css';\nimport { memo, useEffect } from 'react';\nconst NotificationAPIComponent = memo((props: { userId: string }) => {\n  useEffect(() => {\n    const loadNotificationAPI = async () => {\n      const NotificationAPI = (await import('notificationapi-js-client-sdk'))\n        .default;\n      const notificationapi = new NotificationAPI({\n        clientId: 'CLIENT_ID',\n        userId: props.userId\n      });\n      notificationapi.showInApp({\n        root: 'CONTAINER_DIV_ID'\n      });\n    };\n\n    // Call the async function\n    loadNotificationAPI();\n  }, [props.userId]);\n\n  return <div id=\"CONTAINER_DIV_ID\"></div>;\n});\n\nNotificationAPIComponent.displayName = 'NotificationAPIComponent';\n\nexport default NotificationAPIComponent;\n"})})]}),(0,i.jsxs)(r.A,{value:"remix",children:[(0,i.jsx)(n.p,{children:"a) Add the following to your remix.config.js:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// to import esm libraries: https://remix.run/docs/en/main/guides/gotchas#importing-esm-packages\nserverDependenciesToBundle: ['notificationapi-js-client-sdk'];\n"})}),(0,i.jsx)(n.p,{children:"b) Add our CSS styles to your root component:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import NotificationAPICSS from 'notificationapi-js-client-sdk/dist/styles.css';\n\nexport const links: LinksFunction = () => {\n  return [\n    { rel: 'stylesheet', href: NotificationAPICSS }\n    // and the other links ...\n  ];\n};\n"})}),(0,i.jsx)(n.p,{children:"c) Import and use our library:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import NotificationAPIClient from 'notificationapi-js-client-sdk';\nimport { useEffect } from 'react';\n\nexport default function Index() {\n  useEffect(() => {\n    const notificationapi = new NotificationAPIClient({\n      clientId: 'CLIENT_ID',\n      userId: 'USER_ID'\n    });\n\n    notificationapi.showInApp({\n      root: 'bell-container'\n    });\n  }, []);\n\n  return (\n    <main>\n      <div id=\"bell-container\"></div>\n    </main>\n  );\n}\n"})})]}),(0,i.jsx)(r.A,{value:"vue",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<script setup>\n  import NotificationAPI from 'notificationapi-js-client-sdk';\n  import 'notificationapi-js-client-sdk/dist/styles.css';\n  import { onMounted } from 'vue';\n  onMounted(() => {\n    const notificationapi = new NotificationAPI({\n      clientId: 'CLIENT_ID',\n      userId: 'USER_ID'\n    });\n\n    notificationapi.showInApp({\n      root: 'myNotifications'\n    });\n  });\n<\/script>\n\n<template>\n  <div>Hello World!</div>\n  <div id=\"myNotifications\"></div>\n</template>\n"})})}),(0,i.jsxs)(r.A,{value:"angular",children:[(0,i.jsx)(n.p,{children:"a) Add our CSS to your styles.scss file:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"@import 'node_modules/notificationapi-js-client-sdk/dist/styles.css'\n"})}),(0,i.jsx)(n.p,{children:"b) Import and use our library:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import NotificationAPI from 'notificationapi-js-client-sdk';\nimport {PopupPosition} from 'notificationapi-js-client-sdk/lib/interfaces';\n\nngOnInit() {\n  const notificationapi = new NotificationAPI({\n      userId: \"USERS_ID\",\n      clientId: \"CLIENT_ID\",\n    });\n  notificationapi.showInApp({\n    root: 'bell-container', // root element containing the button\n    popupPosition: PopupPosition.BottomLeft\n  });\n}\n\n// This goes inside the template\n<div id=\"bell-container\"></div>\n"})})]}),(0,i.jsx)(r.A,{value:"js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<script>\n  const notificationapi = new NotificationAPI({\n    clientId: 'CLIENT_ID',\n    userId: 'USER_ID'\n  });\n  notificationapi.showInApp({\n    root: 'CONTAINER_DIV_ID',\n    popupPosition: 'bottomLeft'\n  });\n<\/script>\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"You are now receiving in-app notifications on your front-end! \ud83c\udf89"}),"\n",(0,i.jsx)(n.p,{children:"Let's do a few more things:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../quick-start/manage-preferences",children:"\u2699\ufe0f Manage User Notification Preferences"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../guides/mobile-push",children:"\ud83d\udcf1 Setup Mobile Push"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../guides/web-push",children:"\ud83c\udf10 Setup Web Push"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var i=t(4164);const o={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(6540),o=t(4164),a=t(3104),s=t(6347),r=t(205),l=t(7485),c=t(1682),u=t(679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=p(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,d]=h({queryString:t,groupId:o}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,u.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),v=(()=>{const e=c??m;return f({value:e,tabValues:a})?e:null})();(0,r.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function I(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),o=r[t].value;o!==i&&(c(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function b(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,j.jsx)(I,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,j.jsx)(b,{...e,children:d(e.children)},String(n))}},6248:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/inapp-da5451c2bfd950abd9758c388e557667.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);