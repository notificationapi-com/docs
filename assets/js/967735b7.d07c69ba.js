(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(7294),a=n(944),o=n(6010),r="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,l=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,d=e.groupId,f=e.className,m=(0,a.Z)(),v=m.tabGroupChoices,y=m.setTabGroupChoices,g=(0,i.useState)(p),h=g[0],b=g[1],k=i.Children.toArray(e.children),N=[];if(null!=d){var I=v[d];null!=I&&I!==h&&u.some((function(e){return e.value===I}))&&b(I)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),i=u[n].value;b(i),null!=d&&(y(d,i),setTimeout((function(){var e,n,i,a,o,r,c,l;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,o=e.right,r=window,c=r.innerHeight,l=r.innerWidth,n>=0&&o<=l&&a<=c&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case l:var i=N.indexOf(e.target)+1;n=N[i]||N[0];break;case c:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},u.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:w,onClick:w},n)}))),t?(0,i.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){"use strict";var i=(0,n(7294).createContext)(void 0);t.Z=i},944:function(e,t,n){"use strict";var i=n(7294),a=n(9443);t.Z=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4985:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r=n(453),s=n(1395),c=n(8215),l=["components"],p={sidebar_position:1},u={unversionedId:"guides/display-inapp-notifications",id:"guides/display-inapp-notifications",isDocsHomePage:!1,title:"Display In-App Notifications",description:"While email or SMS notifications only require the back-end part, you need our front-end SDK to display in-app notifications:",source:"@site/docs/guides/display-inapp-notifications.md",sourceDirName:"guides",slug:"/guides/display-inapp-notifications",permalink:"/guides/display-inapp-notifications",editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/guides/display-inapp-notifications.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Send the Notification",permalink:"/quick-start/send-the-notification"},next:{title:"Notification Preferences",permalink:"/guides/user-preferences"}},d=[{value:"1. Install a front-end SDK",id:"1-install-a-front-end-sdk",children:[]},{value:"2. Display",id:"2-display",children:[]}],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:r.Z}),(0,o.kt)("p",null,"While email or SMS notifications only require the ",(0,o.kt)("a",{parentName:"p",href:"../quick-start/send-the-notification"},"back-end part"),", you need our front-end SDK to display in-app notifications:"),(0,o.kt)("h2",{id:"1-install-a-front-end-sdk"},"1. Install a front-end SDK"),(0,o.kt)(s.Z,{groupId:"js-package-manager",defaultValue:"npm/yarn",values:[{label:"npm/yarn",value:"npm/yarn"},{label:"<script>",value:"script"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"npm/yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"# using npm:\nnpm install notificationapi-js-client-sdk\n# using yarn:\nyarn add notificationapi-js-client-sdk\n"))),(0,o.kt)(c.Z,{value:"script",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/notificationapi-js-client-sdk/dist/notificationapi-js-client-sdk.js"><\/script>\n')))),(0,o.kt)("h2",{id:"2-display"},"2. Display"),(0,o.kt)("p",null,"The example below creates the NotificationAPI widget in your front-end. The widget is placed in the container div specified by ID. The widget automatically connects to our servers and pull all the in-app notifications for the test user."),(0,o.kt)(s.Z,{groupId:"frontend-language",defaultValue:"react",values:[{label:"React.js",value:"react"},{label:"Vue.js",value:"vue"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("p",null,"Create the following ",(0,o.kt)("inlineCode",{parentName:"p"},"NotificationAPIComponent"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPI from 'notificationapi-js-client-sdk';\nimport 'notificationapi-js-client-sdk/dist/styles.css';\nimport { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';\nimport { memo, useEffect } from 'react';\n\nconst NotificationAPIComponent = memo((props) => {\n  useEffect(() => {\n    const notificationapi = new NotificationAPI({\n      clientId: 'CLIENT_ID',\n      userId: props.userId\n    });\n    notificationapi.showInApp({\n      root: 'CONTAINER_DIV_ID',\n      popupPosition: PopupPosition.BottomLeft\n    });\n  });\n\n  return <div id=\"CONTAINER_DIV_ID\"></div>;\n});\nexport default NotificationAPIComponent;\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'React\'s state management and re-rendering would usually cause our widget to be destroyed and re-initialized with every state change. So, we have "memo"-ized the component to prevent re-rendering.'))),(0,o.kt)("p",null,"Now use the component anywhere you wish, for example, in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPIComponent from './NotificationAPIComponent';\n\nfunction App() {\n  return (\n    <div>\n      <div>Hello World!</div>\n      <NotificationAPIComponent userId=\"USER_ID\" />\n    </div>\n  );\n}\n\nexport default App;\n"))),(0,o.kt)(c.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script setup>\n  import NotificationAPI from 'notificationapi-js-client-sdk';\n  import 'notificationapi-js-client-sdk/dist/styles.css';\n  import { onMounted } from 'vue';\n  onMounted(() => {\n    const notificationapi = new NotificationAPI({\n      clientId: 'CLIENT_ID',\n      userId: 'USER_ID'\n    });\n\n    notificationapi.showInApp({\n      root: 'myNotifications'\n    });\n  });\n<\/script>\n\n<template>\n  <div>Hello World!</div>\n  <div id=\"myNotifications\"></div>\n</template>\n"))),(0,o.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const notificationapi = new NotificationAPI({\n    clientId: 'CLIENT_ID',\n    userId: 'USER_ID'\n  });\n  notificationapi.showInApp({\n    root: 'CONTAINER_DIV_ID',\n    popupPosition: 'bottomLeft'\n  });\n<\/script>\n")))))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},453:function(e,t,n){"use strict";t.Z=n.p+"assets/images/inapp-2351be43133824c90d83c71767223d44.gif"}}]);