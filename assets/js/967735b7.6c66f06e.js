"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(7462),i=n(7294),r=n(6010),o=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function d(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=m({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=s??p;return f({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var y=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},o,{className:(0,r.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},i.createElement(g,(0,a.Z)({},e,t)),i.createElement(h,(0,a.Z)({},e,t)))}function I(e){const t=(0,y.Z)();return i.createElement(k,(0,a.Z)({key:String(t)},e))}},9985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),r=n(453),o=n(4866),l=n(5162);const s={sidebar_position:1},u="Display In-App Notifications",c={unversionedId:"guides/display-inapp-notifications",id:"guides/display-inapp-notifications",title:"Display In-App Notifications",description:"While email or SMS notifications only require the back-end part, you need our front-end SDK to display in-app notifications:",source:"@site/docs/guides/display-inapp-notifications.md",sourceDirName:"guides",slug:"/guides/display-inapp-notifications",permalink:"/guides/display-inapp-notifications",draft:!1,editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/guides/display-inapp-notifications.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Send the Notification",permalink:"/quick-start/send-the-notification"},next:{title:"Notification Preferences",permalink:"/guides/user-preferences"}},p={},d=[{value:"1. Install a front-end SDK",id:"1-install-a-front-end-sdk",level:2},{value:"2. Display",id:"2-display",level:2}],f={toc:d},m="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"display-in-app-notifications"},"Display In-App Notifications"),(0,i.kt)("img",{src:r.Z}),(0,i.kt)("p",null,"While email or SMS notifications only require the ",(0,i.kt)("a",{parentName:"p",href:"../quick-start/send-the-notification"},"back-end part"),", you need our front-end SDK to display in-app notifications:"),(0,i.kt)("h2",{id:"1-install-a-front-end-sdk"},"1. Install a front-end SDK"),(0,i.kt)(o.Z,{groupId:"js-package-manager",defaultValue:"npm/yarn",values:[{label:"npm/yarn",value:"npm/yarn"},{label:"<script>",value:"script"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm/yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"# using npm:\nnpm install notificationapi-js-client-sdk\n# using yarn:\nyarn add notificationapi-js-client-sdk\n"))),(0,i.kt)(l.Z,{value:"script",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/notificationapi-js-client-sdk/dist/notificationapi-js-client-sdk.js"><\/script>\n')))),(0,i.kt)("h2",{id:"2-display"},"2. Display"),(0,i.kt)("p",null,"The example below creates the NotificationAPI widget in your front-end. The widget is placed in the container div specified by ID. The widget automatically connects to our servers and pull all the in-app notifications for the test user."),(0,i.kt)(o.Z,{groupId:"frontend-language",defaultValue:"react",values:[{label:"React.js",value:"react"},{label:"Vue.js",value:"vue"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("p",null,"Create the following ",(0,i.kt)("inlineCode",{parentName:"p"},"NotificationAPIComponent"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPI from 'notificationapi-js-client-sdk';\nimport 'notificationapi-js-client-sdk/dist/styles.css';\nimport { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';\nimport { memo, useEffect } from 'react';\n\nconst NotificationAPIComponent = memo((props) => {\n  useEffect(() => {\n    const notificationapi = new NotificationAPI({\n      clientId: 'CLIENT_ID',\n      userId: props.userId\n    });\n    notificationapi.showInApp({\n      root: 'CONTAINER_DIV_ID',\n      popupPosition: PopupPosition.BottomLeft\n    });\n  });\n\n  return <div id=\"CONTAINER_DIV_ID\"></div>;\n});\nexport default NotificationAPIComponent;\n")),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},'React\'s state management and re-rendering would usually cause our widget to be destroyed and re-initialized with every state change. So, we have "memo"-ized the component to prevent re-rendering.')),(0,i.kt)("p",null,"Now use the component anywhere you wish, for example, in ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPIComponent from './NotificationAPIComponent';\n\nfunction App() {\n  return (\n    <div>\n      <div>Hello World!</div>\n      <NotificationAPIComponent userId=\"USER_ID\" />\n    </div>\n  );\n}\n\nexport default App;\n"))),(0,i.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<script setup>\n  import NotificationAPI from 'notificationapi-js-client-sdk';\n  import 'notificationapi-js-client-sdk/dist/styles.css';\n  import { onMounted } from 'vue';\n  onMounted(() => {\n    const notificationapi = new NotificationAPI({\n      clientId: 'CLIENT_ID',\n      userId: 'USER_ID'\n    });\n\n    notificationapi.showInApp({\n      root: 'myNotifications'\n    });\n  });\n<\/script>\n\n<template>\n  <div>Hello World!</div>\n  <div id=\"myNotifications\"></div>\n</template>\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const notificationapi = new NotificationAPI({\n    clientId: 'CLIENT_ID',\n    userId: 'USER_ID'\n  });\n  notificationapi.showInApp({\n    root: 'CONTAINER_DIV_ID',\n    popupPosition: 'bottomLeft'\n  });\n<\/script>\n")))))}b.isMDXComponent=!0},453:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inapp-2351be43133824c90d83c71767223d44.gif"}}]);