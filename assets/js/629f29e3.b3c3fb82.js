(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[620],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),i=n(944),o=n(6010),r="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,l=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,d=e.groupId,m=e.className,f=(0,i.Z)(),h=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,a.useState)(p),b=k[0],g=k[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var I=h[d];null!=I&&I!==b&&u.some((function(e){return e.value===I}))&&g(I)}var j=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;g(a),null!=d&&(v(d,a),setTimeout((function(){var e,n,a,i,o,r,c,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,o=e.right,r=window,c=r.innerHeight,l=r.innerWidth,n>=0&&o<=l&&i<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case l:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var i=N.indexOf(e.target)-1;n=N[i]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:j,onClick:j},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),i=n(9443);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5978:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=n(1395),s=n(8215),c=["components"],l={sidebar_position:2},p={unversionedId:"reference/js-client",id:"reference/js-client",isDocsHomePage:!1,title:"JS Client SDK (Front-End)",description:"This client-side SDK for JavaScript allows you to show in-app notifications in your front-end.",source:"@site/docs/reference/js-client.md",sourceDirName:"reference",slug:"/reference/js-client",permalink:"/reference/js-client",editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/reference/js-client.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Server SDKs (Back-end)",permalink:"/reference/server"}},u=[{value:"Setup",id:"setup",children:[]},{value:"Initialization",id:"initialization",children:[{value:"Parameters:",id:"parameters",children:[]}]},{value:"Show In-App Notifications",id:"show-in-app-notifications",children:[{value:"Parameters:",id:"parameters-1",children:[]}]},{value:"With React.js",id:"with-reactjs",children:[]},{value:"Secure Mode",id:"secure-mode",children:[{value:"Step by Step:",id:"step-by-step",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This client-side SDK for JavaScript allows you to show in-app notifications in your front-end."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(r.Z,{groupId:"js-package-manager",defaultValue:"npm/yarn",values:[{label:"npm/yarn",value:"npm/yarn"},{label:"<script>",value:"script"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm/yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* 1. Install using npm or yarn:\n  npm install notificationapi-js-client-sdk\n  yarn add notificationapi-js-client-sdk\n*/\n\n// 2. import or require:\nimport NotificationAPI from 'notificationapi-js-client-sdk';\nconst NotificationAPI = require('notificationapi-js-client-sdk').default;\n"))),(0,o.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/notificationapi-js-client-sdk/dist/notificationapi-js-client-sdk.js"><\/script>\n')))),(0,o.kt)("h2",{id:"initialization"},"Initialization"),(0,o.kt)("p",null,"The example below creates a NotificationAPI client that connects to our servers through a WebSocket connection from your front-end. It does not show anything yet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const notificationapi = new NotificationAPI({\n  clientId: YOUR_CLIENT_ID,\n  userId: UNIQUE_USER_ID\n});\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For performance reasons, avoid initializing more than once. React users can follow the ",(0,o.kt)("a",{parentName:"p",href:"#with-reactjs"},"React section"),"."))),(0,o.kt)("h3",{id:"parameters"},"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," (string): Your NotificationAPI account clientId, get it from ",(0,o.kt)("a",{parentName:"p",href:"https://app.notificationapi.com/environments"},"here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"userId")," (string): The unique ID of the user in your system")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"userIdHash")," (string/optional): only used for ",(0,o.kt)("a",{parentName:"p",href:"#secure-mode"},"Secure Mode")))),(0,o.kt)("h2",{id:"show-in-app-notifications"},"Show In-App Notifications"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/notificationapi-com/notificationapi-js-client-sdk/blob/master/sample/popup.gif?raw=true",alt:"Sample"})),(0,o.kt)("p",null,"Having the client object, the command below displays the in-app notifications widget."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.showInApp({\n  root: 'parentDivID'\n});\n")),(0,o.kt)("h3",{id:"parameters-1"},"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"root")," (string): The ID of the HTML element that will contain the NotificationAPI widget. Ideally, an empty div.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"popupPosition")," (string/optional): The position of the notifications popup relative to the button. Valid options: topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom. Default: RightBottom."))),(0,o.kt)("h2",{id:"with-reactjs"},"With React.js"),(0,o.kt)("p",null,'React\'s state management and re-rendering causes this widget to be destroyed and re-initialized with every state change. To avoid this issue, place the initialization and the root element in a "memo"-ized React component. Example:'),(0,o.kt)(r.Z,{defaultValue:"NotificationAPIComponent.js",values:[{label:"NotificationAPIComponent.js",value:"NotificationAPIComponent.js"},{label:"App.js",value:"App.js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"NotificationAPIComponent.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPI from 'notificationapi-js-client-sdk';\nimport { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';\nimport React, { memo, useEffect } from 'react';\n\nconst NotificationAPIComponent = memo((props) => {\n  useEffect(() => {\n    const notificationapi = new NotificationAPI({\n      clientId: YOUR_CLIENT_ID,\n      userId: props.userId\n    });\n    notificationapi.showInApp({\n      root: 'container',\n      popupPosition: PopupPosition.BottomLeft\n    });\n  });\n\n  return <div id=\"container\"></div>;\n});\n\nexport default NotificationAPIComponent;\n"))),(0,o.kt)(s.Z,{value:"App.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPIComponent from './NotificationAPIComponent';\n\nfunction App() {\n  return (\n    <div>\n      <NotificationAPIComponent userId=\"USER_ID\" />\n      <div> ... </div>\n    </div>\n  );\n}\n\nexport default App;\n")))),(0,o.kt)("h2",{id:"secure-mode"},"Secure Mode"),(0,o.kt)("p",null,"Front-end code is observable and mutable by end-users. Malicious actors can take advantage of this. For example, someone can impersonate another user on your website's chat tool or NotificationAPI by passing different parameters to the library. Secure Mode makes our front-end SDK safe against this threat."),(0,o.kt)("h3",{id:"step-by-step"},"Step by Step:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Back-end: hash the userId using your client secret. Send the hashed userId to your front-end; for example, from an API right after the page loads:")),(0,o.kt)(r.Z,{defaultValue:"Node.js",values:[{label:"Node.js",value:"Node.js"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const hashedUserId = require('crypto') // crypto is part of nodejs\n  .createHmac('sha256', 'YOUR_CLIENT_SECRET')\n  .update('ACTUAL_USER_ID')\n  .digest('base64');\n"))),(0,o.kt)(s.Z,{value:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import hmac\nimport hashlib\nimport base64\nhashedUserId = base64.b64encode(hmac.new( 'YOUR_CLIENT_SECRET'.encode('utf-8'),\n            'ACTUAL_USER_ID'.encode('utf-8'),\n             hashlib.sha256).digest())\n")))),"2. Front-end: pass the hashed userId to the NotificationAPI SDK:",(0,o.kt)(r.Z,{defaultValue:"Javascript",values:[{label:"Javascript",value:"Javascript"},{label:"Typescript",value:"Typescript"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"new NotificationAPI({\n  root: '...',\n  clientId: '...',\n  userId: 'ACTUAL_USER_ID',\n  userIdHash: 'HASHED_USER_ID',\n  popupPosition: PopupPosition.BottomLeft\n});\n"))),(0,o.kt)(s.Z,{value:"Typescript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"new NotificationAPI({\n  root: '...',\n  clientId: '...',\n  userId: 'ACTUAL_USER_ID',\n  userIdHash: 'HASHED_USER_ID',\n  popupPosition: PopupPosition.BottomLeft\n});\n")))),"3. Enable secure mode in your account settings. When our SDK starts, it sends both the userId and hashed userId to our servers and we compare the values to ensure the userId and its hash match, indicating userId has not been tampered.")}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);