(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var a=t(7294),i=t(944),o=t(6010),r="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var n=e.lazy,t=e.block,p=e.defaultValue,u=e.values,d=e.groupId,m=e.className,f=(0,i.Z)(),h=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,a.useState)(p),y=k[0],v=k[1],b=a.Children.toArray(e.children),N=[];if(null!=d){var T=h[d];null!=T&&T!==y&&u.some((function(e){return e.value===T}))&&v(T)}var I=function(e){var n=e.currentTarget,t=N.indexOf(n),a=u[t].value;v(a),null!=d&&(g(d,a),setTimeout((function(){var e,t,a,i,o,r,s,c;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,o=e.right,r=window,s=r.innerHeight,c=r.innerWidth,t>=0&&o<=c&&i<=s&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},w=function(e){var n,t;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;t=N[a]||N[0];break;case s:var i=N.indexOf(e.target)-1;t=N[i]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},u.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":y===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:I,onClick:I},t)}))),n?(0,a.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},9443:function(e,n,t){"use strict";var a=(0,t(7294).createContext)(void 0);n.Z=a},944:function(e,n,t){"use strict";var a=t(7294),i=t(9443);n.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4856:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),r=t(1395),l=t(8215),s=["components"],c={sidebar_position:1},p={unversionedId:"reference/server",id:"reference/server",isDocsHomePage:!1,title:"Server SDKs (Back-end)",description:"The server-side SDKs allow you to trigger sending notifications. Supported environments:",source:"@site/docs/reference/server.md",sourceDirName:"reference",slug:"/reference/server",permalink:"/reference/server",editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/reference/server.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Logs",permalink:"/guides/logs"},next:{title:"JS Client SDK (Front-End)",permalink:"/reference/js-client"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Basic Usage",id:"basic-usage",children:[{value:"1. import or require",id:"1-import-or-require",children:[]},{value:"2. init",id:"2-init",children:[]},{value:"3. send",id:"3-send",children:[]}]},{value:"Merge Tags: Dynamic values in notifications",id:"merge-tags-dynamic-values-in-notifications",children:[]},{value:"forceChannels: dynamically setting channels",id:"forcechannels-dynamically-setting-channels",children:[]},{value:"Options: Additional Email Features",id:"options-additional-email-features",children:[]},{value:"Retract: unsending or deleting notifications",id:"retract-unsending-or-deleting-notifications",children:[]},{value:"SecondaryId: categorizing notifications of the same type",id:"secondaryid-categorizing-notifications-of-the-same-type",children:[]}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The server-side SDKs allow you to trigger sending notifications. Supported environments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js"),(0,o.kt)("li",{parentName:"ul"},"Python"),(0,o.kt)("li",{parentName:"ul"},"PHP")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install notificationapi-node-server-sdk\n# Or using Yarn:\nyarn add notificationapi-node-server-sdk\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install notificationapi_python_server_sdk\n"))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"composer require notificationapi/notificationapi-php-server-sdk\n")))),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("h3",{id:"1-import-or-require"},"1. import or require"),(0,o.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import notificationapi from 'notificationapi-node-server-sdk';\n// or with require:\nconst notificationapi = require('notificationapi-node-server-sdk').default;\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from notificationapi_python_server_sdk import (notificationapi)\n"))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use NotificationAPI\\NotificationAPI;\n")))),(0,o.kt)("h3",{id:"2-init"},"2. init"),(0,o.kt)("p",null,"You must initialize the SDK before the ",(0,o.kt)("a",{parentName:"p",href:"#3-send"},"send")," function. It requires your ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret")," which you can get from ",(0,o.kt)("a",{parentName:"p",href:"https://app.notificationapi.com/environments"},"here"),"."),(0,o.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.init('CLIENT_ID', 'CLIENT_SECRET');\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.init("CLIENT_ID", "CLIENT_SECRET")\n'))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$notificationapi = new NotificationAPI('CLIENT_ID', 'CLIENT_SECRET');\n")))),(0,o.kt)("h3",{id:"3-send"},"3. send"),(0,o.kt)("p",null,"After doing the above, the sample code below will send the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello_world")," notification to the specified user:"),(0,o.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n  notificationId: 'hello_world',\n  user: {\n    id: '123',\n    email: 'test@test.com',\n    number: '+15005550006'\n  }\n});\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {\n            "id": "123",\n            "email": "test@test.com",\n            "number": "+15005550006",\n        },\n    }\n)\n'))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$notificationapi->send([\n    "notificationId" => "hello_world",\n    "user" => [\n        "id" => "123",\n        "email" => "test@test.com",\n        "number" => "+15005550006"\n    ]\n]);\n')))),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"notificationId")," (string): The ID of the notification you wish to send. You can find this value from the dashboard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.id")," (string): The ID of the user in your system."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.email")," (string): User's email address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.number")," (string): User's phone number. You should format it with a + and country code, for example, +15005550006. Unformatted US/Canada numbers are also accepted, e.g., (415) 555-1212, 415-555-1212, or 4155551212.")),(0,o.kt)("p",null,"Below you can find additional parameters and use-cases."),(0,o.kt)("h2",{id:"merge-tags-dynamic-values-in-notifications"},"Merge Tags: Dynamic values in notifications"),(0,o.kt)("p",null,"Merge tags are scripts that you can insert into your designs and look like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"{{firstName}}"),". You can use them to pass in dynamic values programmatically. The example below replaces the ",(0,o.kt)("inlineCode",{parentName:"p"},"{{firstName}}")," merge tag in your design with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"Jane")," when the notification is being sent."),(0,o.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n  notificationId: 'hello_world',\n  user: { id: '123', email: 'test@test.com', number: '+15005550006' },\n  mergeTags: { firstName: 'Jane' }\n});\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {\n            "id": "123",\n            "email": "test@test.com",\n            "number": "+15005550006",\n        },\n        "mergeTags": {"firstName": "Jane"},\n    }\n)\n'))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'notificationapi.send([\n    "notificationId" => "hello_world",\n    "user" => [\n        "id" => "123",\n        "email" => "test@test.com",\n        "number" => "+15005550006",\n    ],\n    "mergeTags" => ["firstName" => "Jane"],\n]);\n')))),(0,o.kt)("p",null,"You can actually pass in complex objects and arrays into mergeTags to make your notifications future-proof. The example below sends a whole user object to the mergeTag. You can now use merge tags such as ",(0,o.kt)("inlineCode",{parentName:"p"},"{{user.firstName}}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"{{user.lastName}}")," or even ",(0,o.kt)("inlineCode",{parentName:"p"},"{{user.orders[1].productName}}")," in the designs without going back to change your server code."),(0,o.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const user = {\n  firstName: 'Jane',\n  lastName: 'Doe',\n  orders: [\n    {\n      id: '123',\n      productName: 'socks'\n    },\n    {\n      id: '124',\n      productName: 'socks'\n    }\n  ]\n};\nnotificationapi.send({\n  notificationId: 'hello_world',\n  user: { id: '123', email: 'test@test.com', number: '+15005550006' },\n  mergeTags: { user }\n});\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'user = {\n    "firstName": "Jane",\n    "lastName": "Doe",\n    "orders": [\n        {"id": "123", "productName": "socks"},\n        {"id": "124", "productName": "socks"},\n    ],\n}\nnotificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {\n            "id": "123",\n            "email": "test@test.com",\n            "number": "+15005550006",\n        },\n        "mergeTags": {"user": user},\n    }\n)\n'))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$user = [\n    "firstName" => "Jane",\n    "lastName" => "Doe",\n    "orders" => [\n        ["id" => "123", "productName" => "socks"],\n        ["id" => "124", "productName" => "socks"],\n    ],\n];\n$notificationapi.send(\n    [\n        "notificationId" => "hello_world",\n        "user" => [\n            "id" => "123",\n            "email" => "test@test.com",\n            "number" => "+15005550006",\n        ],\n        "mergeTags" => ["user" => $user],\n    ]\n);\n')))),(0,o.kt)("h2",{id:"forcechannels-dynamically-setting-channels"},"forceChannels: dynamically setting channels"),(0,o.kt)("p",null,"By default, notifications are sent over the channels that you specify in the dashboard. This allows you to turn channels on/off without any code changes."),(0,o.kt)("p",null,"However, you may wish to override these settings dynamically at run-time. That is where you would use the ",(0,o.kt)("inlineCode",{parentName:"p"},"forceChannels")," field:"),(0,o.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n  notificationId: 'hello_world',\n  user: { id: '123', email: 'test@test.com' },\n  forceChannels: ['EMAIL', 'INAPP_WEB']\n});\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {"id": "123", "email": "test@test.com"},\n        "forceChannels": ["EMAIL", "INAPP_WEB"],\n    }\n)\n'))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$notificationapi.send(\n    [\n        "notificationId" => "hello_world",\n        "user" => ["id" => "123", "email" => "test@test.com"],\n        "forceChannels" => ["EMAIL", "INAPP_WEB"],\n    ]\n);\n')))),(0,o.kt)("p",null,"The code above sends the notification over email and in-app regardless of what channels are active/inactive in the dashboard."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"forceChannels field does not override the notification itself being inactive. For it to work, the notification must be in active mode."))),(0,o.kt)("h2",{id:"options-additional-email-features"},"Options: Additional Email Features"),(0,o.kt)("p",null,"You can dynamically modify certain notification behavior by passing in options. Example:"),(0,o.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n  notificationId: 'hello_world',\n  user: { id: '123', email: 'test@test.com', number: '+15005550006' },\n  options: {\n    email: {\n      replyToAddresses: ['noreply@test.com'],\n      attachments: [\n        {\n          filename: 'sample.pdf',\n          url: 'https://docs.notificationapi.com/lorem-ipsum.pdf'\n        }\n      ]\n    }\n  }\n});\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {\n            "id": "123",\n            "email": "test@test.com",\n            "number": "+15005550006",\n        },\n        "options": {\n            "email": {\n                "replyToAddresses": ["noreply@test.com"],\n                "attachments": [\n                    {\n                        "filename": "sample.pdf",\n                        "url": "https://docs.notificationapi.com/lorem-ipsum.pdf",\n                    }\n                ],\n            }\n        },\n    }\n)\n'))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$notificationapi.send(\n    [\n        "notificationId" => "hello_world",\n        "user" => [\n            "id" => "123",\n            "email" => "test@test.com",\n            "number" => "+15005550006",\n        ],\n        "options" => [\n            "email" => [\n                "replyToAddresses" => ["noreply@test.com"],\n                "attachments" => [\n                    [\n                        "filename" => "sample.pdf",\n                        "url" => "https://docs.notificationapi.com/lorem-ipsum.pdf",\n                    ]\n                ],\n            ]\n        ],\n    ]\n);\n')))),(0,o.kt)("p",null,"Available options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.replyToAddresses")," (string[]): An array of email addresses to be used in the reply-to field of emails notifications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.ccAddresses")," (string[]): An array of emails to be CC'ed on the email notifications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.bccAddresses")," (string[]): An array of emails to be BCC'ed on the email notifications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.attachments")," ({ filename: string; url: string }[]): An array of publicly accessible URLs and filenames pointing to files that you wish to include as attachments. The URLs only need to be valid for a few minutes after calling the SDK method. After that, the public URLs can be disabled for privacy. The maximum email size (including the content and all attachments) is 10MB. File extensions in the filename property are necessary for the file to show up nicely in the recipient's device.")),(0,o.kt)("h2",{id:"retract-unsending-or-deleting-notifications"},"Retract: unsending or deleting notifications"),(0,o.kt)("p",null,"Sometimes you need older notifications to be deleted for a certain user. For example when a notification is not valid anymore. The retract function helps you do this."),(0,o.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.retract({\n  notificationId: 'hello_world',\n  userId: '123'\n});\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.retract({"notificationId": "hello_world", "userId": "123"})\n'))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$notificationapi.retract(["notificationId" => "hello_world", "userId" => "123"]);\n')))),(0,o.kt)("p",null,"This function deletes all notifications that were generated from the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello_world")," notification type for user ",(0,o.kt)("inlineCode",{parentName:"p"},"123"),". Optionally, you can filter notifications down to ",(0,o.kt)("a",{parentName:"p",href:"#secondaryid-categorizing-notifications-of-the-same-type"},"secondaryId"),"."),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"notificationId")," (string)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userId")," (string)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secondaryId")," (string/optional): when used, only notifications are deleted that were given this secondaryId at send")),(0,o.kt)("p",null,"Please note that this only works with: push, inapp, browser notifications. There is no way to undo emails/sms/voice notifications."),(0,o.kt)("h2",{id:"secondaryid-categorizing-notifications-of-the-same-type"},"SecondaryId: categorizing notifications of the same type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"secondaryId")," is used toto specify further subcategories within a notification."),(0,o.kt)("p",null,'Example 1: YouTube generates "new content alert" notifications. ',(0,o.kt)("inlineCode",{parentName:"p"},"secondaryId")," allows categorizing that same notification based on the YouTube channel."),(0,o.kt)("p",null,'Example 2: In a project management tool, there will be notifications such as "task completed". ',(0,o.kt)("inlineCode",{parentName:"p"},"secondaryId")," can be used to specify which project the notification belongs to."),(0,o.kt)("p",null,"Use-cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can use the secondaryId in the ",(0,o.kt)("a",{parentName:"li",href:"#retract-unsending-or-deleting-notifications"},"retract function")),(0,o.kt)("li",{parentName:"ul"},"The secondaryId can be used to create sub preferences in ",(0,o.kt)("a",{parentName:"li",href:"../guides/user-preferences"},"User Preferences"))),(0,o.kt)("p",null,"Usage:"),(0,o.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n  notificationId: 'hello_world',\n  user: { id: '123', email: 'test@test.com', number: '+15005550006' },\n  secondaryId: 'abc'\n});\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {\n            "id": "123",\n            "email": "test@test.com",\n            "number": "+15005550006",\n        },\n        "secondaryId": "abc",\n    }\n)\n'))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$notificationapi.send(\n    [\n        "notificationId" => "hello_world",\n        "user" => [\n            "id" => "123",\n            "email" => "test@test.com",\n            "number" => "+15005550006",\n        ],\n        "secondaryId" => "abc",\n    ]\n);\n')))))}m.isMDXComponent=!0},6010:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);