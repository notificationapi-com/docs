"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1792],{7:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=i(4848),s=i(8453);const o=i.p+"assets/images/bee-d2393dfbce87e269baf82bb6be25e427.webp",t={sidebar_position:1},a="\u2709\ufe0f Email",l={id:"channels/email",title:"\u2709\ufe0f Email",description:"Requirements",source:"@site/docs/channels/email.md",sourceDirName:"channels",slug:"/channels/email",permalink:"/channels/email",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf10 Setup Web Push",permalink:"/guides/web-push"},next:{title:"\ud83d\udd14 In-App",permalink:"/channels/inapp"}},d={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Testing:",id:"testing",level:4},{value:"Production:",id:"production",level:4},{value:"Important Features",id:"important-features",level:2},{value:"Email Editor",id:"email-editor",level:2},{value:"Tracking Options",id:"tracking-options",level:2},{value:"Google and Yahoo Bulk Sender Requirements",id:"google-and-yahoo-bulk-sender-requirements",level:2},{value:"Your Own Email Team",id:"your-own-email-team",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\ufe0f-email",children:"\u2709\ufe0f Email"})}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(n.h4,{id:"testing",children:"Testing:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No setup required"}),"\n",(0,r.jsxs)(n.li,{children:["Emails go out using our domain ",(0,r.jsx)(n.code,{children:"@notificationapi.com"})," (no configuration required)"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"production",children:"Production:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Requires verifying your domain through DNS records"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.code,{children:"Dashboard -> Settings -> Domain Verification"})," for the step-by-step instructions."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"You DON'T need another 3rd-party email service like SendGrid or SES. Through our partnerships, We allocate and manage any required email infrastructure, even dedicated IPs, for you."})}),"\n",(0,r.jsx)(n.h2,{id:"important-features",children:"Important Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["High delivery through SPF, DKIM and DMARC - ",(0,r.jsx)(n.a,{href:"/guides/domain-verification",children:"see docs"})]}),"\n",(0,r.jsxs)(n.li,{children:["Compliant with Google's and Yahoo's email sender policies and best practices for high deliverability - ",(0,r.jsx)(n.a,{href:"email/#google-and-yahoo-bulk-sender-requirements",children:"see docs"})]}),"\n",(0,r.jsxs)(n.li,{children:["Merge tags (injecting dynamic values into the email content) - ",(0,r.jsx)(n.a,{href:"/features/mergetags",children:"see docs"})]}),"\n",(0,r.jsxs)(n.li,{children:["Pre-built Unsubscribe Link and Web Page - ",(0,r.jsx)(n.a,{href:"/components/unsubscribe-page",children:"see docs"})]}),"\n",(0,r.jsxs)(n.li,{children:["Reply To addresses for two-way email communication - ",(0,r.jsx)(n.a,{href:"/reference/server#send",children:"see docs"})]}),"\n",(0,r.jsxs)(n.li,{children:["Attachments - ",(0,r.jsx)(n.a,{href:"/reference/server#send",children:"see docs"})]}),"\n",(0,r.jsxs)(n.li,{children:["CC, BCC fields - ",(0,r.jsx)(n.a,{href:"/reference/server#send",children:"see docs"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"email-editor",children:"Email Editor"}),"\n","\n",(0,r.jsx)("img",{src:o,style:{maxWidth:500,borderRadius:8,marginBottom:20,width:"100%"}}),"\n",(0,r.jsx)(n.p,{children:"To remove the burden of manually building email templates, we have integrated a fully loaded email editor. Now everyone on your team can create and modify your email notfications without coding."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Drag and drop editor"}),"\n",(0,r.jsx)(n.li,{children:"Image, GIF, and video support"}),"\n",(0,r.jsx)(n.li,{children:"Mobile responsive & mobile preview"}),"\n",(0,r.jsx)(n.li,{children:"Save and re-use email parts like headers and footers"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tracking-options",children:"Tracking Options"}),"\n",(0,r.jsx)(n.p,{children:"The following are the events that we track and report on under our logs and insights features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Delivery to destination mail server"}),"\n",(0,r.jsx)(n.li,{children:"Bounces"}),"\n",(0,r.jsx)(n.li,{children:"Complaints"}),"\n",(0,r.jsx)(n.li,{children:"Opens and Clicks (coming soon)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"google-and-yahoo-bulk-sender-requirements",children:"Google and Yahoo Bulk Sender Requirements"}),"\n",(0,r.jsxs)(n.p,{children:["In light of recent announcements by ",(0,r.jsx)(n.a,{href:"https://blog.google/products/gmail/gmail-security-authentication-spam-protection/",children:"Google"})," and ",(0,r.jsx)(n.a,{href:"https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam",children:"Yahoo"}),", it has become mandatory for bulk email senders to implement various requirements in place to reduce spam (",(0,r.jsx)(n.a,{href:"https://www.notificationapi.com/blog/the-developers-guide-to-google-bulk-sender-requirements",children:"read more on our blog"}),"). Our account setup process ensures that you are compliant with these requirements by configuring SPF, DKIM, DMARC correctly."]}),"\n",(0,r.jsxs)(n.p,{children:["Moreover, it's essential to ensure that your emails support an easy, one-click unsubscribe process for end-users. This includes incorporating a clearly visible unsubscribe link within the body of your messages and providing unsubscribe end-points in the email header. NotificationAPI fully supports these functionalities, adhering to the standards set forth by ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2369",children:"RFC 2369"})," and ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc8058",children:"RFC 8058"}),". Our system automatically includes the necessary header and an unsubscribe footer in your outgoing messages, providing your recipients with a straightforward method to opt-out of future communications."]}),"\n",(0,r.jsx)(n.h2,{id:"your-own-email-team",children:"Your Own Email Team"}),"\n",(0,r.jsx)(n.p,{children:"Imagine having your own email team:"}),"\n",(0,r.jsx)(n.p,{children:"Our team monitors bounces and complaints and will reach out to you directly if we detect an alarming rate of such emails. You can also reach out to us any time to ask about best practices, to review your email content, or to help you troubleshoot a delivery issue."}),"\n",(0,r.jsx)(n.p,{children:"For paying customers, we help transfer your existing email templates into our editor, and we can also help you build new ones."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var r=i(6540);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);