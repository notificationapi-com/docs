"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42],{5336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(4848),i=t(8453),r=t(1470),s=t(9365);const o={},l="\u23f0 Scheduling",c={id:"features/scheduling",title:"\u23f0 Scheduling",description:"Status: This feature is under active development.",source:"@site/docs/features/scheduling.md",sourceDirName:"features",slug:"/features/scheduling",permalink:"/features/scheduling",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd04 Parameters (Merge Tags)",permalink:"/features/mergetags"},next:{title:"\ud83e\udd48 Sub Notifications",permalink:"/features/subnotifications"}},d={},u=[{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Frequently Asked Questions (FAQ)",id:"frequently-asked-questions-faq",level:2},{value:"Can I update a notification request after scheduling it?",id:"can-i-update-a-notification-request-after-scheduling-it",level:3},{value:"Can I cancel a scheduled notification?",id:"can-i-cancel-a-scheduled-notification",level:3},{value:"How is error checking and logical operations handled with scheduled notifications?",id:"how-is-error-checking-and-logical-operations-handled-with-scheduled-notifications",level:3},{value:"How are logics managed for scheduled notifications?",id:"how-are-logics-managed-for-scheduled-notifications",level:3},{value:"How can I review scheduled notifications before they are sent?",id:"how-can-i-review-scheduled-notifications-before-they-are-sent",level:3},{value:"How far in advance can I schedule a notification?",id:"how-far-in-advance-can-i-schedule-a-notification",level:3},{value:"How early in the future can I schedule a notification?",id:"how-early-in-the-future-can-i-schedule-a-notification",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"-scheduling",children:"\u23f0 Scheduling"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Status: This feature is under active development."})}),"\n",(0,a.jsxs)(n.p,{children:["Scheduling a notification works just like sending a regular notification through NotificationAPI, with the addition of a ",(0,a.jsx)(n.code,{children:"schedule"})," field that specifies when you want the notification sent. Our system takes care of the rest. Our dashboard will keep track of scheduled notifications in the logs section, marking them as scheduled and showing the time they are scheduled to be sent. You can also update or delete a scheduled notification by using the trackingId."]}),"\n",(0,a.jsx)(n.h2,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Payment due alerts: Financial institutions and billing departments use scheduled notifications to remind customers of upcoming due dates for loan payments, credit card bills, or utility bills."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Appointment reminders: Healthcare providers, beauty salons, automotive service centers, and other appointment-based businesses utilize scheduled notifications to remind clients of their upcoming appointments."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Task deadlines: Project management tools often feature the ability to send scheduled notifications about task deadlines to team members."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,a.jsxs)(n.p,{children:["Simply specify the ",(0,a.jsx)(n.code,{children:"schedule"})," parameter when using the ",(0,a.jsxs)(n.a,{href:"../reference/server#send",children:[(0,a.jsx)(n.code,{children:"send"})," function"]}),":"]}),"\n","\n","\n",(0,a.jsxs)(r.A,{groupId:"back-end-language",defaultValue:"js",values:[{label:"Node",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"},{label:"C#",value:"csharp"},{label:"Ruby",value:"ruby"}],children:[(0,a.jsx)(s.A,{value:"js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"notificationapi.send({\n  notificationId: 'order_tracking',\n  user: {\n    id: 'spongebob.squarepants',\n    email: 'spongebob@squarepants.com',\n    number: '+15005550006'\n  },\n  mergeTags: {\n    item: 'Krabby Patty Burger',\n    address: '124 Conch Street',\n    orderId: '1234567890'\n  },\n  schedule: '2024-02-20T14:38:03.509Z'\n});\n"})})}),(0,a.jsx)(s.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'notificationapi.send(\n    {\n        "notificationId": "order_tracking",\n        "user": {\n            "id": "spongebob.squarepants",\n            "email": "spongebob@squarepants.com",\n            "number": "+15005550006",\n        },\n        "mergeTags": {\n            "item": "Krabby Patty Burger",\n            "address": "124 Conch Street",\n            "orderId": "1234567890"\n        },\n          "schedule": "2024-02-20T14:38:03.509Z"\n    }\n)\n'})})}),(0,a.jsx)(s.A,{value:"php",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:'$notificationapi->send([\n    "notificationId" => "order_tracking",\n    "user" => [\n        "id" => "spongebob.squarepants",\n        "email" => "spongebob@squarepants.com",\n        "number" => "+15005550006"\n    ],\n  "mergeTags" => [\n    "item" => "Krabby Patty Burger",\n    "address" => "124 Conch Street",\n    "orderId" => "1234567890"\n  ],\n   "schedule" => "2024-02-20T14:38:03.509Z"\n]);\n'})})}),(0,a.jsx)(s.A,{value:"go",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'mergeTags := make(map[string]interface{}) // Change to map[string]interface{}\nmergeTags["item"] = "Krabby Patty Burger"\nmergeTags["address"] = "124 Conch Street"\nmergeTags["orderId"] = "1234567890"\n\nnotificationapi.Send(\n  notificationapi.SendRequest{\n    NotificationId: "order_tracking",\n    User: notificationapi.User{\n      Id:     "test_user_id",\n      Email:  "spongebob@squarepants.com",\n    },\n    MergeTags: mergeTags,\n    Schedule: "2024-02-20T14:38:03.509Z"\n  },\n)\n'})})}),(0,a.jsx)(s.A,{value:"csharp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'string request = @"{\n    ""notificationId"": ""order_tracking"",\n    ""user"": {\n        ""id"": ""spongebob.squarepants"",\n        ""email"": ""spongebob@squarepants.com""\n    },\n    ""mergeTags"": {\n        ""item"": ""Krabby Patty Burger"",\n        ""address"": ""124 Conch Street"",\n        ""orderId"": ""1234567890""\n    },\n     ""schedule"": ""2024-02-20T14:38:03.509Z""\n}";\nnotificationapi.send(request);\n'})})}),(0,a.jsx)(s.A,{value:"ruby",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ruby",children:"notificationapi.send({\n  notificationId: 'order_tracking',\n  user: {\n    id: 'spongebob.squarepants',\n    email: 'spongebob@squarepants.com',\n    number: '+15005550006'\n  },\n  mergeTags: {\n    item: 'Krabby Patty Burger',\n    address: '124 Conch Street',\n    orderId: '1234567890'\n  },\n   schedule: '2024-02-20T14:38:03.509Z'\n});\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["You have the option to ",(0,a.jsx)(n.a,{href:"/reference/server#updateschedule",children:"update"})," or ",(0,a.jsx)(n.a,{href:"/reference/server#deleteschedule",children:"delete"})," the schedule before it is sent."]}),"\n",(0,a.jsx)(n.h2,{id:"frequently-asked-questions-faq",children:"Frequently Asked Questions (FAQ)"}),"\n",(0,a.jsx)(n.h3,{id:"can-i-update-a-notification-request-after-scheduling-it",children:"Can I update a notification request after scheduling it?"}),"\n",(0,a.jsxs)(n.p,{children:["Yes, you can update the request after sending it by using the ",(0,a.jsx)(n.code,{children:"trackingId"})," before it is sent. If you do not have the ",(0,a.jsx)(n.code,{children:"trackingId"}),", you can still find it in the ",(0,a.jsx)(n.a,{href:"/features/logs",children:"log dashboard"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"can-i-cancel-a-scheduled-notification",children:"Can I cancel a scheduled notification?"}),"\n",(0,a.jsxs)(n.p,{children:["Yes, with the ",(0,a.jsx)(n.code,{children:"trackingId"}),", you can cancel a scheduled notification before it is sent. If the notification has already been sent, you can retract in-app notifications using the ",(0,a.jsx)(n.a,{href:"/reference/server#retract",children:"retract function"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"how-is-error-checking-and-logical-operations-handled-with-scheduled-notifications",children:"How is error checking and logical operations handled with scheduled notifications?"}),"\n",(0,a.jsx)(n.p,{children:"Every notification request is evaluated for correct notificationId, being below the usage quota, valid user preferences, and more. For scheduled notifications, these checks are done twice:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Once at the time of receiving the initial request, similar to regular notifications. The results of this step can be found in the response body of your request and in our ",(0,a.jsx)(n.a,{href:"/features/logs",children:"log dashboard"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Once again at the scheduled time. The results of this step can also be found in our ",(0,a.jsx)(n.a,{href:"/features/logs",children:"log dashboard"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The only exceptions are throttling and deduplication checks that only happen at the scheduled time."}),"\n",(0,a.jsxs)(n.p,{children:["So for example, an invalid ",(0,a.jsx)(n.code,{children:"notificationId"})," error might be generated initially if the notificationId is incorrect, or later if the notification is deleted."]}),"\n",(0,a.jsx)(n.h3,{id:"how-are-logics-managed-for-scheduled-notifications",children:"How are logics managed for scheduled notifications?"}),"\n",(0,a.jsxs)(n.p,{children:["We evaluate logical, such as ",(0,a.jsx)(n.a,{href:"/features/deduplication",children:"Deduplication"}),", and ",(0,a.jsx)(n.a,{href:"/features/throttling",children:"throttling"})," at the scheduled time, not when the request is initially made."]}),"\n",(0,a.jsx)(n.h3,{id:"how-can-i-review-scheduled-notifications-before-they-are-sent",children:"How can I review scheduled notifications before they are sent?"}),"\n",(0,a.jsxs)(n.p,{children:["Visit the ",(0,a.jsx)(n.a,{href:"/features/logs",children:"log dashboard"})," to preview upcoming notifications and any recent updates."]}),"\n",(0,a.jsx)(n.h3,{id:"how-far-in-advance-can-i-schedule-a-notification",children:"How far in advance can I schedule a notification?"}),"\n",(0,a.jsx)(n.p,{children:"You can schedule a notification up to 1 year in advance."}),"\n",(0,a.jsx)(n.h3,{id:"how-early-in-the-future-can-i-schedule-a-notification",children:"How early in the future can I schedule a notification?"}),"\n",(0,a.jsx)(n.p,{children:"There are no limitations. If the schedule is set for a time in the past, the notification is sent immediately."})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(4164);const i={tabItem:"tabItem_Ymn6"};var r=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),i=t(4164),r=t(3104),s=t(6347),o=t(205),l=t(7485),c=t(1682),d=t(9466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=p({queryString:t,groupId:i}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),b=(()=>{const e=c??g;return f({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(c(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);