(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(7294),i=t(944),o=t(6010),l="tabItem_1uMI",r="tabItemActive_2DSg";var s=37,p=39;var c=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,u=e.values,d=e.groupId,m=e.className,f=(0,i.Z)(),h=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,a.useState)(c),y=k[0],b=k[1],v=a.Children.toArray(e.children),N=[];if(null!=d){var T=h[d];null!=T&&T!==y&&u.some((function(e){return e.value===T}))&&b(T)}var I=function(e){var n=e.currentTarget,t=N.indexOf(n),a=u[t].value;b(a),null!=d&&(g(d,a),setTimeout((function(){var e,t,a,i,o,l,s,p;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,o=e.right,l=window,s=l.innerHeight,p=l.innerWidth,t>=0&&o<=p&&i<=s&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(r),setTimeout((function(){return n.classList.remove(r)}),2e3))}),150))},w=function(e){var n,t;switch(e.keyCode){case p:var a=N.indexOf(e.target)+1;t=N[a]||N[0];break;case s:var i=N.indexOf(e.target)-1;t=N[i]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},u.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":y===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:I,onClick:I},t)}))),n?(0,a.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},9443:function(e,n,t){"use strict";var a=(0,t(7294).createContext)(void 0);n.Z=a},944:function(e,n,t){"use strict";var a=t(7294),i=t(9443);n.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4856:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),l=t(1395),r=t(8215),s=["components"],p={sidebar_position:1},c={unversionedId:"reference/server",id:"reference/server",isDocsHomePage:!1,title:"Server SDKs (Back-end)",description:"The server-side SDKs allow you to trigger sending notifications. Supported environments:",source:"@site/docs/reference/server.md",sourceDirName:"reference",slug:"/reference/server",permalink:"/reference/server",editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/reference/server.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Unsubscribe Link",permalink:"/guides/unsubscribe-link"},next:{title:"JS Client SDK (Front-End)",permalink:"/reference/js-client"}},u=[{value:"Setup",id:"setup",children:[]},{value:"send()",id:"send",children:[]},{value:"Retract: unsending or deleting notifications",id:"retract-unsending-or-deleting-notifications",children:[]},{value:"Features",id:"features",children:[{value:"mergeTags: Passing dynamic values to notifications",id:"mergetags-passing-dynamic-values-to-notifications",children:[]},{value:"forceChannels: Dynamically overriding the channels",id:"forcechannels-dynamically-overriding-the-channels",children:[]},{value:"options: Additional customization",id:"options-additional-customization",children:[]},{value:"subNotificationId: Categorizing notifications of the same type",id:"subnotificationid-categorizing-notifications-of-the-same-type",children:[]}]}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The server-side SDKs allow you to trigger sending notifications. Supported environments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js"),(0,o.kt)("li",{parentName:"ul"},"Python"),(0,o.kt)("li",{parentName:"ul"},"PHP"),(0,o.kt)("li",{parentName:"ul"},"Go")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(l.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install notificationapi-node-server-sdk\n# Or using Yarn:\nyarn add notificationapi-node-server-sdk\n"))),(0,o.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install notificationapi_python_server_sdk\n"))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"composer require notificationapi/notificationapi-php-server-sdk\n"))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/notificationapi-com/notificationapi-go-server-sdk\n")))),(0,o.kt)("h2",{id:"send"},"send()"),(0,o.kt)("p",null,"Used to send a notification to the specified user."),(0,o.kt)(l.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example"',title:'"Example"'},"import notificationapi from 'notificationapi-node-server-sdk';\n\nnotificationapi.init('CLIENT_ID', 'CLIENT_SECRET', 'Based_URL');\nnotificationapi.send({\n  notificationId: 'hello_world',\n  user: {\n    id: '123',\n    email: 'test@test.com',\n    number: '+15005550006'\n  },\n  mergeTags: {\n    firstName: 'test'\n  }\n});\n"))),(0,o.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example"',title:'"Example"'},'from notificationapi_python_server_sdk import (notificationapi)\n\nnotificationapi.init("CLIENT_ID", "CLIENT_SECRET")\nnotificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {\n            "id": "123",\n            "email": "test@test.com",\n            "number": "+15005550006",\n        },\n        "mergeTags": {\n            "firstName": "test"\n        }\n    }\n)\n'))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Example"',title:'"Example"'},'use NotificationAPI\\NotificationAPI;\n\n$notificationapi = new NotificationAPI(\'CLIENT_ID\', \'CLIENT_SECRET\');\n$notificationapi->send([\n    "notificationId" => "hello_world",\n    "user" => [\n        "id" => "123",\n        "email" => "test@test.com",\n        "number" => "+15005550006"\n    ],\n    "mergeTags" => [\n        "firstName" => "test"\n    ]\n]);\n'))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'package main\n\nimport (\n    notificationapi "github.com/notificationapi-com/notificationapi-go-server-sdk"\n)\n\nfunc main() {\n    notificationapi.Init("CLIENT_ID", "CLIENT_SECRET")\n    mergeTags := make(map[string]string)\n    mergeTags["firstName"] = "test"\n    params := notificationapi.SendRequest{NotificationId: "hello_world", User: notificationapi.User{\n        Id:     "123",\n        Email:  "test@test.com",\n        Number: "+15005550006",\n    },\n        MergeTags: mergeTags,\n    }\n    notificationapi.Send(params)\n}\n\n\n')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("h5",{id:"client_id-required"},(0,o.kt)("inlineCode",{parentName:"h5"},"CLIENT_ID")," (required)"),(0,o.kt)("p",null,"Type: string"),(0,o.kt)("p",null,"Your NotificationAPI account clientId. You can get it from ",(0,o.kt)("a",{parentName:"p",href:"https://app.notificationapi.com/environments"},"here"),"."),(0,o.kt)("h5",{id:"client_secret-required"},(0,o.kt)("inlineCode",{parentName:"h5"},"CLIENT_SECRET")," (required)"),(0,o.kt)("p",null,"Type: string"),(0,o.kt)("p",null,"Your NotificationAPI account client secret. You can get it from ",(0,o.kt)("a",{parentName:"p",href:"https://app.notificationapi.com/environments"},"here"),"."),(0,o.kt)("h5",{id:"based_url-optional"},(0,o.kt)("inlineCode",{parentName:"h5"},"Based_URL")," (optional)"),(0,o.kt)("p",null,"Type: string"),(0,o.kt)("p",null,"Only if you want to specify your region, for example, if your account is in Canada region you must pass '",(0,o.kt)("a",{parentName:"p",href:"https://api.ca.notificationapi.com'"},"https://api.ca.notificationapi.com'"),"."),(0,o.kt)("h5",{id:"notificationid-required"},(0,o.kt)("inlineCode",{parentName:"h5"},"notificationId")," (required)"),(0,o.kt)("p",null,"Type: string"),(0,o.kt)("p",null,"The ID of the notification you wish to send. You can find this value from the dashboard."),(0,o.kt)("h5",{id:"user-required"},(0,o.kt)("inlineCode",{parentName:"h5"},"user")," (required)"),(0,o.kt)("p",null,"Type: object"),(0,o.kt)("p",null,"The user to send the notification to. Fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),": The ID of the user in your system. Required."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"email"),": Required for sending email notifications, otherwise optional."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"number"),": Required for SMS/CALL notifications, otherwise optional. Valid format: ",(0,o.kt)("inlineCode",{parentName:"li"},"+15005550006"),". Unformatted US/Canada numbers are also accepted, e.g., (415) 555-1212, 415-555-1212, or 4155551212.")),(0,o.kt)("h5",{id:"mergetags-optional"},(0,o.kt)("inlineCode",{parentName:"h5"},"mergeTags")," (optional)"),(0,o.kt)("p",null,"Type: object"),(0,o.kt)("p",null,"Used to pass in dynamic values into the notification design. Read more: ",(0,o.kt)("a",{parentName:"p",href:"#mergetags-passing-dynamic-values-to-notifications"},"Passing dynamic values to notifications")),(0,o.kt)("h5",{id:"replace-optional"},(0,o.kt)("inlineCode",{parentName:"h5"},"replace")," (optional)"),(0,o.kt)("p",null,"Type: object, string key/value pair"),(0,o.kt)("p",null,"Similar to mergeTags, but more flexible. Like the programmatic string replace function, this parameter will replace any string in the notification templates with another string. This operation happens on the fly when sending the notification and does not actually modify the templates."),(0,o.kt)("p",null,"This operation is case-sensitive and happens after mergeTags are injected."),(0,o.kt)(l.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example"',title:'"Example"'},'notificationapi.send({\n  ...,\n  replace: {\n    "Dollars": "Euros",\n    "#ff0000": "#0000ff"\n  }\n});\n'))),(0,o.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example"',title:'"Example"'},'from notificationapi_python_server_sdk import (notificationapi)\n\nnotificationapi.init("CLIENT_ID", "CLIENT_SECRET")\nnotificationapi.send(\n    {\n        ...,\n        "replace": {\n            "Dollars": "Euros",\n            "#ff0000": "#0000ff"\n        }\n    }\n)\n'))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Example"',title:'"Example"'},'use NotificationAPI\\NotificationAPI;\n\n$notificationapi = new NotificationAPI(\'CLIENT_ID\', \'CLIENT_SECRET\');\n$notificationapi->send([\n    ...,\n    "replace" => [\n        "Dollars" => "Euros",\n        "#ff0000": "#0000ff"\n    ]\n]);\n'))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'package main\n\nimport (\n  notificationapi"github.com/notificationapi-com/notificationapi-go-server-sdk"\n)\n\nfunc main() {\nnotificationapi.Init("CLIENT_ID","CLIENT_SECRET")\n\n    replace:=make(map[string]string)\n    replace["Dollars"]="Euros"\n    replace["#ff0000"]="#0000ff"\nparams:=notificationapi.SendRequest{...,\n    Replace: replace\n  }\n  notificationapi.Send(params)\n}\n')))),(0,o.kt)("p",null,"In the example above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The word "Dollars" will be replaced with "Euros" in ',(0,o.kt)("strong",{parentName:"li"},"all")," the templates used for this notification."),(0,o.kt)("li",{parentName:"ul"},"The HTML red color code ",(0,o.kt)("inlineCode",{parentName:"li"},"#ff0000")," will be replaced with the blue color code ",(0,o.kt)("inlineCode",{parentName:"li"},"0000ff"),", making it possible to dynamically brand the email content.")),(0,o.kt)("h5",{id:"forcechannels-optional"},(0,o.kt)("inlineCode",{parentName:"h5"},"forceChannels")," (optional)"),(0,o.kt)("p",null,"type: string[]"),(0,o.kt)("p",null,"Used to override the channels which are used for the notification. Read more: ",(0,o.kt)("a",{parentName:"p",href:"#forcechannels-dynamically-overriding-the-channels"},"forceChannels: Dynamically setting channels")),(0,o.kt)("h5",{id:"options-optional"},(0,o.kt)("inlineCode",{parentName:"h5"},"options")," (optional)"),(0,o.kt)("p",null,"type: object"),(0,o.kt)("p",null,"For additional features such as: attachments, custom replyTo address, BCC, CC. Read more: ",(0,o.kt)("a",{parentName:"p",href:"#options-additional-customization"},"Options")),(0,o.kt)("h5",{id:"subnotificationid-optional"},(0,o.kt)("inlineCode",{parentName:"h5"},"subNotificationId")," (optional)"),(0,o.kt)("p",null,"type: string"),(0,o.kt)("p",null,"To break down your notification into multiple categories or groups. Read more: ",(0,o.kt)("a",{parentName:"p",href:"#subnotificationid-categorizing-notifications-of-the-same-type"},"subNotificationId")),(0,o.kt)("h5",{id:"templateid-optional"},(0,o.kt)("inlineCode",{parentName:"h5"},"templateId")," (optional)"),(0,o.kt)("p",null,"type: string"),(0,o.kt)("p",null,"By default, notifications are sent using the default template of each channel. You can permanently change the default template from the dashboard. However, you can also use this parameter to force using a specific template. This is useful in multiple situations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Design variation: using different wording and design, e.g. "You have new updates" vs. "You don\'t have any updates"'),(0,o.kt)("li",{parentName:"ul"},"White-labeling: using a specific template that you designed for a white-labeled customer"),(0,o.kt)("li",{parentName:"ul"},"Language: creating and using multiple templates for multiple languages")),(0,o.kt)("p",null,"If the provided templateId does not exist for a channel, the default template will be used, and a warning message will be generated."),(0,o.kt)("h2",{id:"retract-unsending-or-deleting-notifications"},"Retract: unsending or deleting notifications"),(0,o.kt)("p",null,"Sometimes you need older notifications to be deleted for a certain user. For example when a notification is not valid anymore. The retract function helps you do this."),(0,o.kt)(l.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.retract({\n  notificationId: 'hello_world',\n  userId: '123'\n});\n"))),(0,o.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.retract({"notificationId": "hello_world", "userId": "123"})\n'))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$notificationapi->retract(["notificationId" => "hello_world", "userId" => "123"]);\n'))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'notificationapi.Retract(RetractRequest{\n  NotificationId: "hello_world",\n  UserId: "123"\n});\n')))),(0,o.kt)("p",null,"This function deletes all notifications that were generated from the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello_world")," notification type for user ",(0,o.kt)("inlineCode",{parentName:"p"},"123"),". Optionally, you can filter notifications down to ",(0,o.kt)("a",{parentName:"p",href:"#secondaryid-categorizing-notifications-of-the-same-type"},"secondaryId"),"."),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"notificationId")," (string)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userId")," (string)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secondaryId")," (string/optional): when used, only notifications are deleted that were given this secondaryId at send")),(0,o.kt)("p",null,"Please note that this only works with: push, inapp, browser notifications. There is no way to undo emails/sms/voice notifications."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("h3",{id:"mergetags-passing-dynamic-values-to-notifications"},"mergeTags: Passing dynamic values to notifications"),(0,o.kt)("p",null,"Merge tags are scripts that you can insert into your designs and look like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"{{firstName}}"),". You can use them to pass in dynamic values programmatically. The example below replaces the ",(0,o.kt)("inlineCode",{parentName:"p"},"{{firstName}}")," merge tag in your design with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"Jane")," when the notification is being sent."),(0,o.kt)(l.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n  notificationId: 'hello_world',\n  user: { id: '123', email: 'test@test.com', number: '+15005550006' },\n  mergeTags: { firstName: 'Jane' }\n});\n"))),(0,o.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {\n            "id": "123",\n            "email": "test@test.com",\n            "number": "+15005550006",\n        },\n        "mergeTags": {"firstName": "Jane"},\n    }\n)\n'))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'notificationapi->send([\n    "notificationId" => "hello_world",\n    "user" => [\n        "id" => "123",\n        "email" => "test@test.com",\n        "number" => "+15005550006",\n    ],\n    "mergeTags" => ["firstName" => "Jane"],\n]);\n'))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'mergeTags:=make(map[string]string)\nmergeTags["firstName"]="Jane"\nnotificationapi.Send(\n    SendRequest{\n        NotificationId:"hello_world",\n        User: notificationapi.User{\n            Id:"123",\n            Email:"test@test.com",\n             Number:"+15005550006"\n        },\n        MergeTags: mergeTags,\n    }\n);\n')))),(0,o.kt)("p",null,"You can actually pass in complex objects and arrays into mergeTags to make your notifications future-proof. The example below sends a whole user object to the mergeTag. You can now use merge tags such as ",(0,o.kt)("inlineCode",{parentName:"p"},"{{user.firstName}}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"{{user.lastName}}")," or even ",(0,o.kt)("inlineCode",{parentName:"p"},"{{user.orders[1].productName}}")," in the designs without going back to change your server code."),(0,o.kt)(l.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const user = {\n  firstName: 'Jane',\n  lastName: 'Doe',\n  orders: [\n    {\n      id: '123',\n      productName: 'socks'\n    },\n    {\n      id: '124',\n      productName: 'socks'\n    }\n  ]\n};\nnotificationapi.send({\n  notificationId: 'hello_world',\n  user: { id: '123', email: 'test@test.com', number: '+15005550006' },\n  mergeTags: { user }\n});\n"))),(0,o.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'user = {\n    "firstName": "Jane",\n    "lastName": "Doe",\n    "orders": [\n        {"id": "123", "productName": "socks"},\n        {"id": "124", "productName": "socks"},\n    ],\n}\nnotificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {\n            "id": "123",\n            "email": "test@test.com",\n            "number": "+15005550006",\n        },\n        "mergeTags": {"user": user},\n    }\n)\n'))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$user = [\n    "firstName" => "Jane",\n    "lastName" => "Doe",\n    "orders" => [\n        ["id" => "123", "productName" => "socks"],\n        ["id" => "124", "productName" => "socks"],\n    ],\n];\n$notificationapi->send(\n    [\n        "notificationId" => "hello_world",\n        "user" => [\n            "id" => "123",\n            "email" => "test@test.com",\n            "number" => "+15005550006",\n        ],\n        "mergeTags" => ["user" => $user],\n    ]\n);\n'))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'user := map[string]interface{}{\n    "firstName": "Jane",\n    "lastName": "Doe",\n    "orders": []interface{}{\n        map[string]string{"id": "123", "productName": "hasan"},\n        map[string]string{"id": "124", "productName": "socks"},\n    },\n}\nnotificationapi.Send(\n    SendRequest{\n        NotificationId:"hello_world",\n        User: notificationapi.User{\n            Id:"123",\n            Email:"test@test.com",\n             Number:"+15005550006"\n        },\n        MergeTags: user,\n    }\n);\n')))),(0,o.kt)("h3",{id:"forcechannels-dynamically-overriding-the-channels"},"forceChannels: Dynamically overriding the channels"),(0,o.kt)("p",null,"By default, notifications are sent over the channels that you specify in the dashboard. This allows you to turn channels on/off without any code changes."),(0,o.kt)("p",null,"However, you may wish to override these settings dynamically at run-time. That is where you would use the ",(0,o.kt)("inlineCode",{parentName:"p"},"forceChannels")," field:"),(0,o.kt)(l.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n  notificationId: 'hello_world',\n  user: { id: '123', email: 'test@test.com' },\n  forceChannels: ['EMAIL', 'INAPP_WEB']\n});\n"))),(0,o.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {"id": "123", "email": "test@test.com"},\n        "forceChannels": ["EMAIL", "INAPP_WEB"],\n    }\n)\n'))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$notificationapi->send(\n    [\n        "notificationId" => "hello_world",\n        "user" => ["id" => "123", "email" => "test@test.com"],\n        "forceChannels" => ["EMAIL", "INAPP_WEB"],\n    ]\n);\n'))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'\n notificationapi.Send(\n    notificationapi.SendRequest{\n        NotificationId:"hello_world",\n        User: notificationapi.User{\n            Id:"123",\n            Email:"test@test.com",\n        },\n        ForceChannels: []string{"EMAIL","INAPP_WEB"},\n    },\n)\n\n')))),(0,o.kt)("p",null,"The code above sends the notification over email and in-app regardless of what channels are active/inactive in the dashboard."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"forceChannels field does not override the notification itself being inactive. For it to work, the notification must be in active mode."))),(0,o.kt)("h3",{id:"options-additional-customization"},"options: Additional customization"),(0,o.kt)("p",null,"You can dynamically modify certain notification behavior by passing in options. Example:"),(0,o.kt)(l.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n  notificationId: 'hello_world',\n  user: { id: '123', email: 'test@test.com', number: '+15005550006' },\n  options: {\n    email: {\n      replyToAddresses: ['noreply@test.com'],\n      attachments: [\n        {\n          filename: 'sample.pdf',\n          url: 'https://docs.notificationapi.com/lorem-ipsum.pdf'\n        }\n      ]\n    }\n  }\n});\n"))),(0,o.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {\n            "id": "123",\n            "email": "test@test.com",\n            "number": "+15005550006",\n        },\n        "options": {\n            "email": {\n                "replyToAddresses": ["noreply@test.com"],\n                "attachments": [\n                    {\n                        "filename": "sample.pdf",\n                        "url": "https://docs.notificationapi.com/lorem-ipsum.pdf",\n                    }\n                ],\n            }\n        },\n    }\n)\n'))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$notificationapi->send(\n    [\n        "notificationId" => "hello_world",\n        "user" => [\n            "id" => "123",\n            "email" => "test@test.com",\n            "number" => "+15005550006",\n        ],\n        "options" => [\n            "email" => [\n                "replyToAddresses" => ["noreply@test.com"],\n                "attachments" => [\n                    [\n                        "filename" => "sample.pdf",\n                        "url" => "https://docs.notificationapi.com/lorem-ipsum.pdf",\n                    ]\n                ],\n            ]\n        ],\n    ]\n);\n'))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'    notificationapi.Send(\n        notificationapi.SendRequest{\n            NotificationId: "hello_world",\n            User: notificationapi.User{\n                Id:     "123",\n                Email:  "test@test.com",\n                Number: "+15005550006",\n            },\n            Options: &notificationapi.SendRequestOptions{\n                Email: notificationapi.SendRequestEmailOptions{\n                    ReplyToAddresses: []string{"noreply@test.com"},\n                    Attachments: []notificationapi.EmailAttachments{\n                        {\n                            Filename: "sample.pdf",\n                            Url:      "https://docs.notificationapi.com/lorem-ipsum.pdf",\n                        },\n                    },\n                },\n            },\n        },\n    )\n')))),(0,o.kt)("p",null,"Available options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.replyToAddresses")," (string[]): An array of email addresses to be used in the reply-to field of emails notifications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.ccAddresses")," (string[]): An array of emails to be CC'ed on the email notifications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.bccAddresses")," (string[]): An array of emails to be BCC'ed on the email notifications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options.email.attachments")," ({ filename: string; url: string }[]): An array of publicly accessible URLs and filenames pointing to files that you wish to include as attachments. The URLs only need to be valid for a few minutes after calling the SDK method. After that, the public URLs can be disabled for privacy. The maximum email size (including the content and all attachments) is 10MB. File extensions in the filename property are necessary for the file to show up nicely in the recipient's device.")),(0,o.kt)("h3",{id:"subnotificationid-categorizing-notifications-of-the-same-type"},"subNotificationId: Categorizing notifications of the same type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"subNotificationId")," is used to specify further subcategories within a notification."),(0,o.kt)("p",null,'Example 1: Facebook generates "new post from group" notifications. These notifications look and work exactly the same, however they are generated from different groups which notify different users. ',(0,o.kt)("inlineCode",{parentName:"p"},"subNotificationId"),' allows you to specify which group the "new post from group" notification belongs to. This allows the users to subscribe/unsubscribe to groups individually.'),(0,o.kt)("p",null,'Example 2: In a project management tool, there will be notifications such as "task completed" for every project. However, not every user is involved in every project. ',(0,o.kt)("inlineCode",{parentName:"p"},"subNotificationId"),' allows you to subscribe users to "task completed" notifications of some projects, but not others.'),(0,o.kt)("p",null,"Benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To create sub preferences in ",(0,o.kt)("a",{parentName:"li",href:"../guides/user-preferences"},"User Preferences")),(0,o.kt)("li",{parentName:"ul"},"To retract some notifications but not others, using the ",(0,o.kt)("a",{parentName:"li",href:"#retract-unsending-or-deleting-notifications"},"retract function"))),(0,o.kt)("p",null,"Usage:"),(0,o.kt)(l.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n  notificationId: 'hello_world',\n  user: { id: '123', email: 'test@test.com', number: '+15005550006' },\n  subNotificationId: 'abc'\n});\n"))),(0,o.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'notificationapi.send(\n    {\n        "notificationId": "hello_world",\n        "user": {\n            "id": "123",\n            "email": "test@test.com",\n            "number": "+15005550006",\n        },\n        "subNotificationId": "abc",\n    }\n)\n'))),(0,o.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$notificationapi->send(\n    [\n        "notificationId" => "hello_world",\n        "user" => [\n            "id" => "123",\n            "email" => "test@test.com",\n            "number" => "+15005550006",\n        ],\n        "subNotificationId" => "abc",\n    ]\n);\n'))),(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'    notificationapi.Send(\n        notificationapi.SendRequest{\n            NotificationId: "hello_world",\n            User: notificationapi.User{\n                Id:     "123",\n                Email:  "test@test.com",\n                Number: "+15005550006",\n            },\n            SubNotificationId: "abc",\n        },\n    )\n')))))}m.isMDXComponent=!0},6010:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);