"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[810],{7326:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=r(4848),t=r(8453);const s=r.p+"assets/images/userpref-5ebda40a7b681b452100fa75c31c9942.gif",o={sidebar_position:3},c="\u2699\ufe0f User notification preferences",a={id:"quick-start/manage-preferences",title:"\u2699\ufe0f User notification preferences",description:"Overview",source:"@site/docs/quick-start/manage-preferences.md",sourceDirName:"quick-start",slug:"/quick-start/manage-preferences",permalink:"/quick-start/manage-preferences",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd14 Display in-app notifications",permalink:"/quick-start/display-inapp-notifications"},next:{title:"\ud83d\udcc4 How does it work?",permalink:"/quick-start/how-does-it-work"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Notification Preferences Widget",id:"notification-preferences-widget",level:2},{value:"Programmatically Update Preferences",id:"programmatically-update-preferences",level:2},{value:"Next Steps",id:"next-steps",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\ufe0f-user-notification-preferences",children:"\u2699\ufe0f User notification preferences"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"NotificationAPI stores your end-users' notification preferences and automatically applies it to outgoing notifications. Notification preferences for a user can be set in different ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Our pre-built ",(0,i.jsx)(n.strong,{children:"Notification Preferences Widget"})," for your front-end (for users)"]}),"\n",(0,i.jsxs)(n.li,{children:["Our APIs and SDKs to ",(0,i.jsx)(n.strong,{children:"programmatically set the preferences"})," (for developers)"]}),"\n",(0,i.jsxs)(n.li,{children:["Coming soon: ",(0,i.jsx)(n.strong,{children:"visually set the preferences from our dashboard"})," (for non-technical team members)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's cover this all:"}),"\n",(0,i.jsx)(n.h2,{id:"notification-preferences-widget",children:"Notification Preferences Widget"}),"\n",(0,i.jsx)(n.p,{children:"Our notification preferences widget works out-of-the-box with most front-end frameworks and automatically displays and syncs the user's preferences with our servers."}),"\n","\n",(0,i.jsx)("img",{src:s,style:{maxWidth:300,marginBottom:30}}),"\n",(0,i.jsx)(n.p,{children:"There are 2 ways to access the widget:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Through the \u2699\ufe0f icon on our in-app notifications widget"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Programmatically through our front-end SDK:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// npm install notificationapi-js-client-sdk\nimport NotificationAPIClient from 'notificationapi-js-client-sdk';\n\nconst notificationapi = new NotificationAPIClient({\n  clientId: 'CLIENT_ID',\n  userId: 'USER_ID'\n});\nnotificationapi.showUserPreferences();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"programmatically-update-preferences",children:"Programmatically Update Preferences"}),"\n",(0,i.jsx)(n.p,{children:"You can set the user preferences programmatically from both your back-end and front-end code:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../reference/js-client#set-user-preferences",children:"Front-end reference"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../reference/server#set-user-preferences",children:"Back-end reference"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"So now you have taken care of the user preferences. \ud83c\udf89"}),"\n",(0,i.jsx)(n.p,{children:"Here's what may interest you:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../components/unsubscribe-page",children:"\ud83d\ude49 No-Code Unsubscribe Page"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../components/inapp#styling-and-branding",children:"\ud83c\udfa8 Styling the In-App Widget"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../components/user-preferences#styling-and-branding",children:"\ud83c\udf08 Styling the Preferences Widget"})}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var i=r(6540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);