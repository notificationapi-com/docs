"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1157],{4685:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=i(4848),n=i(8453);const r=i.p+"assets/images/NotificationAPI - Notifications as a service - throttling detection 6-0ea42cfba93a7654c483616d26e915c2.png",s={},a="\u270b Notification Throttling",l={id:"features/throttling",title:"\u270b Notification Throttling",description:"Throttiling allows you to prevent software bugs or UX flaws from flooding your end-users with too many notifications.",source:"@site/docs/features/throttling.md",sourceDirName:"features",slug:"/features/throttling",permalink:"/features/throttling",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd48 Sub Notifications",permalink:"/features/subnotifications"},next:{title:"\u2705 Verify Your Domain",permalink:"/guides/domain-verification"}},c={},d=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"How to use the throttling feature?",id:"how-to-use-the-throttling-feature",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"-notification-throttling",children:"\u270b Notification Throttling"})}),"\n",(0,o.jsx)(e.p,{children:"Throttiling allows you to prevent software bugs or UX flaws from flooding your end-users with too many notifications."}),"\n",(0,o.jsx)(e.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,o.jsx)(e.p,{children:"You can pick how many of the same notification you want to allow to be sent to a user within a given time window."}),"\n","\n",(0,o.jsx)("img",{src:r,style:{maxWidth:480,borderRadius:8,border:"1px solid #d9d9d9",marginBottom:20,width:"100%"}}),"\n",(0,o.jsxs)(e.p,{children:["For example, if you configure throttling to allow 5 ",(0,o.jsx)(e.code,{children:"delivery_tracking"})," notifications within one hour, it means that:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["You can still send 10 ",(0,o.jsx)(e.code,{children:"delivery_tracking"})," notifications to 10 different users within one hour"]}),"\n",(0,o.jsx)(e.li,{children:"The same user can only receive 5 within one hour"}),"\n",(0,o.jsxs)(e.li,{children:["The 6th ",(0,o.jsx)(e.code,{children:"delivery_tracking"})," notification to the same user within one hour will be ignored"]}),"\n",(0,o.jsx)(e.li,{children:"Ignored requests are properly logged in our logs and insights features"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"how-to-use-the-throttling-feature",children:"How to use the throttling feature?"}),"\n",(0,o.jsx)(e.p,{children:"Throttling can be configured on a per-notification basis in the notification configuration page."}),"\n",(0,o.jsx)(e.p,{children:"It is disabled by default."})]})}function u(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(h,{...t})}):h(t)}},8453:(t,e,i)=>{i.d(e,{R:()=>s,x:()=>a});var o=i(6540);const n={},r=o.createContext(n);function s(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:s(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);