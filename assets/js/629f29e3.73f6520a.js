(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[620],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(944),i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,p=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,d=e.groupId,m=e.className,f=(0,a.Z)(),h=f.tabGroupChoices,k=f.setTabGroupChoices,g=(0,r.useState)(c),N=g[0],y=g[1],v=r.Children.toArray(e.children),b=[];if(null!=d){var I=h[d];null!=I&&I!==N&&u.some((function(e){return e.value===I}))&&y(I)}var w=function(e){var t=e.currentTarget,n=b.indexOf(t),r=u[n].value;y(r),null!=d&&(k(d,r),setTimeout((function(){var e,n,r,a,i,o,l,p;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,p=o.innerWidth,n>=0&&i<=p&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},P=function(e){var t,n;switch(e.keyCode){case p:var r=b.indexOf(e.target)+1;n=b[r]||b[0];break;case l:var a=b.indexOf(e.target)-1;n=b[a]||b[b.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:P,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5978:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(1395),s=n(8215),l=n(960),p=["components"],c={sidebar_position:2},u={unversionedId:"reference/js-client",id:"reference/js-client",isDocsHomePage:!1,title:"JS Client SDK (Front-End)",description:"This client-side SDK for JavaScript allows you to show in-app notifications in your front-end.",source:"@site/docs/reference/js-client.md",sourceDirName:"reference",slug:"/reference/js-client",permalink:"/reference/js-client",editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/reference/js-client.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Server SDKs (Back-end)",permalink:"/reference/server"}},d=[{value:"Setup",id:"setup",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"getUserPreferences()",id:"getuserpreferences",children:[]},{value:"patchUserPreference()",id:"patchuserpreference",children:[]},{value:"showInApp()",id:"showinapp",children:[]},{value:"showUserPreferences()",id:"showuserpreferences",children:[]},{value:"With React.js",id:"with-reactjs",children:[]},{value:"Secure Mode",id:"secure-mode",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This client-side SDK for JavaScript allows you to show in-app notifications in your front-end."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)(o.Z,{groupId:"js-package-manager",defaultValue:"npm/yarn",values:[{label:"npm/yarn",value:"npm/yarn"},{label:"script tag",value:"script"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm/yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/* 1. Install using npm or yarn:\n  npm install notificationapi-js-client-sdk\n  yarn add notificationapi-js-client-sdk\n*/\n\n// 2. import or require:\nimport NotificationAPI from 'notificationapi-js-client-sdk';\nconst NotificationAPI = require('notificationapi-js-client-sdk').default;\n"))),(0,i.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/notificationapi-js-client-sdk/dist/notificationapi-js-client-sdk.js"><\/script>\n')))),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"The example below creates a NotificationAPI client that connects to our servers through a WebSocket connection from your front-end. It does not show anything yet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example"',title:'"Example"'},"const notificationapi = new NotificationAPI({\n  clientId: YOUR_CLIENT_ID,\n  userId: UNIQUE_USER_ID\n});\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Initializing the library more than once is safe, but will generate unnecessary resources and network calls."),(0,i.kt)("p",{parentName:"div"},"React users should follow the ",(0,i.kt)("a",{parentName:"p",href:"#with-reactjs"},"React section"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," (required)",(0,i.kt)("br",{parentName:"p"}),"\n","Type: string"),(0,i.kt)("p",null,"Your NotificationAPI account clientId. You can get it from ",(0,i.kt)("a",{parentName:"p",href:"https://app.notificationapi.com/environments"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"userId")," (required)",(0,i.kt)("br",{parentName:"p"}),"\n","Type: string"),(0,i.kt)("p",null,"The unique ID of the user in your system."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"userIdHash"),"\nType: string"),(0,i.kt)("p",null,"Only used for ",(0,i.kt)("a",{parentName:"p",href:"#secure-mode"},"Secure Mode"),"."),(0,i.kt)("h2",{id:"getuserpreferences"},"getUserPreferences()"),(0,i.kt)("p",null,"Allows you to access the raw data of the user's notification preferences from the front-end."),(0,i.kt)("p",null,"Please note that unless you require extreme customization, you can rely on ",(0,i.kt)("a",{parentName:"p",href:"#showuserpreferences"},"showUserPreferences()")," function to display and edit notification preferences without any additional code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example"',title:'"Example"'},'notificationapi.getUserPreferences().then((prefs) => {\n  console.log(prefs);\n});\n\n/* prints:\n[\n  {\n      "notificationId": "new_order",\n      "title": "New Order",\n      "settings": [\n          {\n              "channel": "SMS",\n              "state": false,\n              "channelName": "SMS"\n          },\n          {\n              "channel": "EMAIL",\n              "state": true,\n              "channelName": "Email"\n          }\n      ],\n      "subNotificationPreferences": []\n  },\n  ... more items for all notifications\n] */\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getUserPreferences() : Promise<Preference[]>\n\ninterface Preference {\n  notificationId: string;\n  title: string; // the friendly title of the notification\n  settings: {\n    channel: string; // EMAIL, INAPP_WEB, SMS, CALL\n    channelName: string; // channel friendly name: Email, In-App, SMS, Call\n    state: boolean; // indicating the preference\n  }[];\n  subNotificationPreferences: Preference[]; // when using subNotificationIds, it will contain a similar item for each subNotificationId\n}\n")),(0,i.kt)("h2",{id:"patchuserpreference"},"patchUserPreference()"),(0,i.kt)("p",null,"Allows you to programmatically change the user's notification preferences from the front-end."),(0,i.kt)("p",null,"Please note that unless you require extreme customization, you can rely on ",(0,i.kt)("a",{parentName:"p",href:"#showuserpreferences"},"showUserPreferences()")," function to display and edit notification preferences without any additional code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example"',title:'"Example"'},"notificationapi.patchUserPreference('myNotificationId', 'EMAIL', false);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"notificationId")," (required)",(0,i.kt)("br",{parentName:"p"}),"\n","Type: string"),(0,i.kt)("p",null,"The ID of the notification in NotificationAPI."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"channel")," (required)",(0,i.kt)("br",{parentName:"p"}),"\n","Type: string"),(0,i.kt)("p",null,"The channel for which you wish to change the setting.",(0,i.kt)("br",{parentName:"p"}),"\n","Accepted values: ",(0,i.kt)("inlineCode",{parentName:"p"},"EMAIL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INAPP_WEB"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SMS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CALL"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"state")," (required)",(0,i.kt)("br",{parentName:"p"}),"\n","Type: boolean"),(0,i.kt)("p",null,"The preference of the user. If set to false, the user will no longer receive the specified notification on the specified channel, until the state is set to true again through the API or the preferences popup."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"subNotificationId")," (optional)",(0,i.kt)("br",{parentName:"p"}),"\n","Type: string"),(0,i.kt)("p",null,"For setting the preference of a subNotificationId within a notification."),(0,i.kt)("h2",{id:"showinapp"},"showInApp()"),(0,i.kt)("p",null,"This function adds the in-app notifications (the bell icon along with all its functionality) to your app."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/notificationapi-com/notificationapi-js-client-sdk/blob/master/sample/popup.gif?raw=true",alt:"Sample"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example"',title:'"Example"'},"notificationapi.showInApp({\n  root: 'parentDivID'\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"root")," (required)",(0,i.kt)("br",{parentName:"p"}),"\n","Type: string"),(0,i.kt)("p",null,"The ID of the HTML element that will contain the NotificationAPI widget. Ideally an empty div."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"popupPosition"),(0,i.kt)("br",{parentName:"p"}),"\n","Type: string (JS), PopupPosition enum (TS)"),(0,i.kt)("p",null,"The position of the notifications popup relative to the button. Defaults to rightBottom.",(0,i.kt)("br",{parentName:"p"}),"\n","Valid string options: topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom."),(0,i.kt)("h2",{id:"showuserpreferences"},"showUserPreferences()"),(0,i.kt)("p",null,"User preferences is accessible from the in-app popup (similar to the gif below). However, you may use this function to programmatically open the user preferences from your code."),(0,i.kt)("img",{src:l.Z}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example"',title:'"Example"'},"notificationapi.showUserPreferences();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"parent"),(0,i.kt)("br",{parentName:"p"}),"\n","Type: string",(0,i.kt)("br",{parentName:"p"}),"\n","Default: undefined"),(0,i.kt)("p",null,"When undefined (default behavior), the user preferences will show as a modal. Given this parameter, the user preferences will render in inline mode inside an existing HTML element on your page. You can pass the ID of the parent element to this parameter. Ideally, use an empty div for the parent."),(0,i.kt)("h2",{id:"with-reactjs"},"With React.js"),(0,i.kt)("p",null,'React\'s state management and re-rendering causes this widget to be destroyed and re-initialized with every state change. To avoid this issue, place the initialization and the root element in a "memo"-ized React component. Example:'),(0,i.kt)(o.Z,{defaultValue:"NotificationAPIComponent.js",values:[{label:"NotificationAPIComponent.js",value:"NotificationAPIComponent.js"},{label:"App.js",value:"App.js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"NotificationAPIComponent.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPI from 'notificationapi-js-client-sdk';\nimport { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';\nimport React, { memo, useEffect, useRef } from 'react';\n\nconst NotificationAPIComponent = memo((props) => {\n  const containerRef = useRef();\n\n  useEffect(() => {\n    const notificationapi = new NotificationAPI({\n      clientId: YOUR_CLIENT_ID,\n      userId: props.userId\n    });\n    notificationapi.showInApp({\n      root: 'container',\n      popupPosition: PopupPosition.BottomLeft\n    });\n\n    // Store a reference to the container DOM element.\n    const container = containerRef.current;\n    // This effect can run multiple times due to the `userId` changing\n    // or Hot Module Replacement (HMR). Ensure the container is cleared\n    // as `showInApp` will append to the container instead of overwriting it.\n    return () => {\n      container.innerHTML = '';\n    };\n  }, [props.userId]);\n\n  return <div id=\"container\" ref={containerRef}></div>;\n});\n\nexport default NotificationAPIComponent;\n"))),(0,i.kt)(s.Z,{value:"App.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import NotificationAPIComponent from './NotificationAPIComponent';\n\nfunction App() {\n  return (\n    <div>\n      <NotificationAPIComponent userId=\"USER_ID\" />\n      <div> ... </div>\n    </div>\n  );\n}\n\nexport default App;\n")))),(0,i.kt)("h2",{id:"secure-mode"},"Secure Mode"),(0,i.kt)("p",null,"Front-end code is observable and mutable by end-users. Malicious actors can take advantage of this. For example, someone can impersonate another user on your website's chat tool or NotificationAPI by passing different parameters to the library. Secure Mode makes our front-end SDK safe against this threat."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step by Step Guide")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Back-end: hash the userId using your client secret. Pass the hashed userId to your front-end. For example, from an API right after the page loads.")),(0,i.kt)(o.Z,{defaultValue:"Node.js",values:[{label:"Node.js",value:"Node.js"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const hashedUserId = require('crypto') // crypto is part of nodejs\n  .createHmac('sha256', 'YOUR_CLIENT_SECRET')\n  .update('ACTUAL_USER_ID')\n  .digest('base64');\n"))),(0,i.kt)(s.Z,{value:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import hmac\nimport hashlib\nimport base64\nhashedUserId = base64.b64encode(hmac.new( 'YOUR_CLIENT_SECRET'.encode('utf-8'),\n            'ACTUAL_USER_ID'.encode('utf-8'),\n             hashlib.sha256).digest())\n")))),"2. Front-end: pass the hashed userId to the NotificationAPI SDK:",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"new NotificationAPI({\n  root: '...',\n  clientId: '...',\n  userId: 'ACTUAL_USER_ID',\n  userIdHash: 'HASHED_USER_ID'\n});\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Enable secure mode in your account settings. When our SDK starts, it sends both the userId and hashed userId to our servers and we compare the values to ensure the userId and its hash match, indicating userId has not been tampered.")))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},960:function(e,t,n){"use strict";t.Z=n.p+"assets/images/userpref-5ebda40a7b681b452100fa75c31c9942.gif"}}]);