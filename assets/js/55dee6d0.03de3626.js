"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),i=n(7294),r=n(6010),o=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function d(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[o,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,u]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=l??p;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},i.createElement(v,(0,a.Z)({},e,t)),i.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return i.createElement(y,(0,a.Z)({key:String(t)},e))}},525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),r=n(4866),o=n(5162);const s={sidebar_position:2},l="Send the Notification",u={unversionedId:"quick-start/send-the-notification",id:"quick-start/send-the-notification",title:"Send the Notification",description:"Prerequisite",source:"@site/docs/quick-start/send-the-notification.md",sourceDirName:"quick-start",slug:"/quick-start/send-the-notification",permalink:"/quick-start/send-the-notification",draft:!1,editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/quick-start/send-the-notification.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup a Notification",permalink:"/quick-start/setup-the-notification"},next:{title:"Display In-App Notifications",permalink:"/guides/display-inapp-notifications"}},c={},p=[{value:"Prerequisite",id:"prerequisite",level:3},{value:"1. Install back-end SDK",id:"1-install-back-end-sdk",level:2},{value:"2. Send",id:"2-send",level:2},{value:"That&#39;s it?",id:"thats-it",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"send-the-notification"},"Send the Notification"),(0,i.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./setup-the-notification"},"NotificationAPI account and Notification setup")),(0,i.kt)("h2",{id:"1-install-back-end-sdk"},"1. Install back-end SDK"),(0,i.kt)("p",null,"Notifications are triggered from your back-end. So install one of our back-end SDKs:"),(0,i.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"},{label:"C#",value:"csharp"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install notificationapi-node-server-sdk\n// or using yarn:\nyarn add notificationapi-node-server-sdk\n"))),(0,i.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install notificationapi_python_server_sdk\n"))),(0,i.kt)(o.Z,{value:"php",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"composer require notificationapi/notificationapi-php-server-sdk\n"))),(0,i.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/notificationapi-com/notificationapi-go-server-sdk\n"))),(0,i.kt)(o.Z,{value:"csharp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create the followinng class in your application:\n\nusing System;\nusing System.Net.Http;\nusing System.Text;\nusing System.Threading.Tasks;\n\nclass NotificationAPI {\n  private string baseURL = "https://api.notificationapi.com";\n  private string clientId;\n  private HttpClient httpClient;\n\n  public NotificationAPI(string clientId, string clientSecret) {\n    this.clientId = clientId;\n    string authToken = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes($"{clientId}:{clientSecret}"));\n    this.httpClient = new HttpClient();\n    this.httpClient.DefaultRequestHeaders.Add("Authorization", $"Basic {authToken}");\n  }\n\n  public async Task<string> send(string request) {\n    HttpContent payload = new StringContent(request, Encoding.UTF8, "application/json");\n    var response = await this.httpClient.PostAsync($"{this.baseURL}/{this.clientId}/sender", payload);\n    var responseContent = await response.Content.ReadAsStringAsync();\n    return responseContent;\n  }\n\n  public async Task<string> retract(string request) {\n    HttpContent payload = new StringContent(request, Encoding.UTF8, "application/json");\n    var response = await this.httpClient.PostAsync($"{this.baseURL}/{this.clientId}/sender/retract", payload);\n    var responseContent = await response.Content.ReadAsStringAsync();\n    return responseContent;\n  }\n\n}\n')))),(0,i.kt)("h2",{id:"2-send"},"2. Send"),(0,i.kt)("p",null,'The example below sends the "New Comment Notification" to the test user:'),(0,i.kt)(r.Z,{groupId:"back-end-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"},{label:"C#",value:"csharp"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// import/require:\nimport notificationapi from 'notificationapi-node-server-sdk';\n// const notificationapi = require('notificationapi-node-server-sdk').default\n\n// init\nnotificationapi.init('CLIENT_ID', 'CLIENT_SECRET');\n\n// send\nnotificationapi.send({\n  notificationId: 'new_comment_notification',\n  user: {\n    id: 'TEST_USER_ID',\n    email: 'TEST@TEST.COM', // required for email notifications\n    number: '+15005550006' // required for SMS\n  }\n});\n"))),(0,i.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# import\nfrom notificationapi_python_server_sdk import (notificationapi)\n\n# init\nnotificationapi.init("CLIENT_ID", "CLIENT_SECRET")\n\n# send\nnotificationapi.send({\n        "notificationId": "new_comment_notification",\n        "user": {\n            "id": "TEST_USER_ID",\n            "email": "TEST@TEST.COM",   # required for email notifications\n            "number": "+15005550006"    # required for SMS\n        }\n    })\n'))),(0,i.kt)(o.Z,{value:"php",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'# import\nuse NotificationAPI\\NotificationAPI;\n\n# init\n$notificationapi = new NotificationAPI(\'CLIENT_ID\', \'CLIENT_SECRET\');\n\n# send\n$notificationapi->send([\n    "notificationId" => "new_comment_notification",\n    "user" => [\n        "id" => "TEST_USER_ID",\n        "email" => "TEST@TEST.COM",   # required for email notifications\n        "number" => "+15005550006"    # required for SMS\n    ]\n]);\n'))),(0,i.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\n// import\nimport (\n    notificationapi "github.com/notificationapi-com/notificationapi-go-server-sdk"\n)\n\nfunc main() {\n    // init\n    notificationapi.Init("CLIENT_ID", "CLIENT_SECRET")\n\n    // send\n    params := notificationapi.SendRequest{NotificationId: "new_comment_notification", User: notificationapi.User{\n        Id:     "TEST_USER_ID",\n        Email:  "TEST@TEST.COM", // required for email notifications\n        Number: "+15005550006",  // required for SMS and call\n    },\n    }\n    notificationapi.Send(params)\n}\n\n'))),(0,i.kt)(o.Z,{value:"csharp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'NotificationAPI notificationapi = new NotificationAPI("CLIENT_ID", "CLIENT_SECRET");\nstring request = @"{\n    ""notificationId"": ""hello_world"",\n    ""user"": {\n        ""id"": ""123"",\n        ""email"": ""test@test.com"",\n        ""number"": ""+15005550006""\n    },\n    ""mergeTags"": {\n        ""firstName"": ""FIRST_NAME""\n    }\n}";\nnotificationapi.send(request);\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You must replace the CLIENT_ID and CLIENT_SECRET with real values. You can get yours from ",(0,i.kt)("a",{parentName:"p",href:"https://app.notificationapi.com/environments"},"here"),".")),(0,i.kt)("h2",{id:"thats-it"},"That's it?"),(0,i.kt)("p",null,"You are now sending notifications through email, SMS, automated voice calls, etc."),(0,i.kt)("p",null,"Please take the time to review:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In-App Notifications require our ",(0,i.kt)("a",{parentName:"li",href:"../guides/display-inapp-notifications"},"Front-End SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.notificationapi.com/pricing"},"Free usage tier")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../guides/sms-call"},"SMS/Voice Details"))))}f.isMDXComponent=!0}}]);