"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[448],{3928:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=t(4848),n=t(8453);t.p;const r=t.p+"assets/images/mailfrom-f3c013dfdc9fd67ee95671a3a213d8b9.png",s={sidebar_position:1},a="\u2705 Verify Your Domain",d={id:"guides/domain-verification",title:"\u2705 Verify Your Domain",description:"By default, email notifications are sent from noreply@notificationapi.com; which is not good for production use. Changing the sender address to your domain requires domain verification.",source:"@site/docs/guides/domain-verification.md",sourceDirName:"guides",slug:"/guides/domain-verification",permalink:"/guides/domain-verification",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u270b Notification Throttling",permalink:"/features/throttling"},next:{title:"\ud83d\udd12 Secure Your Notifications",permalink:"/guides/secure-mode"}},c={},l=[{value:"How to",id:"how-to",level:2},{value:"What is the MAIL-FROM Field?",id:"what-is-the-mail-from-field",level:2}];function h(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"-verify-your-domain",children:"\u2705 Verify Your Domain"})}),"\n",(0,o.jsxs)(i.p,{children:["By default, email notifications are sent from ",(0,o.jsx)(i.a,{href:"mailto:noreply@notificationapi.com",children:"noreply@notificationapi.com"}),"; which is not good for production use. Changing the sender address to your domain requires domain verification."]}),"\n",(0,o.jsx)(i.p,{children:"The domain verification process is similar to the process used by other email providers, such as SendGrid and Mailgun. Our domain verification covers a few features:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"SPF, DKIM, DMARC; which contributes to high email deliverability. It helps your users to be more confident about an email\u2019s source."}),"\n",(0,o.jsx)(i.li,{children:"MAIL-FROM field; which is better for branding and deliverability."}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"how-to",children:"How to"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["Add your domain from the ",(0,o.jsx)(i.code,{children:"Dashboard -> Settings -> Domain Verification"})]}),"\n",(0,o.jsx)(i.li,{children:"Add the 6 DNS records displayed on the dashboard to your DNS settings"}),"\n",(0,o.jsx)(i.li,{children:"Wait until the status is updated in the dashboard. This usually takes a few minutes, but sometimes it could take up to 72 hours"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"what-is-the-mail-from-field",children:"What is the MAIL-FROM Field?"}),"\n",(0,o.jsx)(i.p,{children:'The MAIL-FROM field is different than the "From" address. This field indicates which server originated the email. Users can see this field if they dig into the email details (see the image below from Gmail).'}),"\n",(0,o.jsxs)(i.p,{children:["The Domain Verification method sets this field to ",(0,o.jsx)(i.em,{children:"notificationapi.yourdomain.com"}),", which is better for deliverability and branding."]}),"\n",(0,o.jsx)("img",{src:r,style:{maxWidth:600,borderRadius:8,width:"100%"}})]})}function u(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var o=t(6540);const n={},r=o.createContext(n);function s(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);