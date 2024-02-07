"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[787],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i=r.p+"assets/images/bee-d2393dfbce87e269baf82bb6be25e427.webp",o={sidebar_position:1},l="\u2709\ufe0f Email",s={unversionedId:"channels/email",id:"channels/email",title:"\u2709\ufe0f Email",description:"Requirements",source:"@site/docs/channels/email.md",sourceDirName:"channels",slug:"/channels/email",permalink:"/channels/email",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf10 Setup Web Push",permalink:"/guides/web-push"},next:{title:"\ud83d\udd14 In-App",permalink:"/channels/inapp"}},u={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Testing:",id:"testing",level:4},{value:"Production:",id:"production",level:4},{value:"Important Features",id:"important-features",level:2},{value:"Email Editor",id:"email-editor",level:2},{value:"Tracking Options",id:"tracking-options",level:2},{value:"Google and Yahoo Bulk Sender Requirements",id:"google-and-yahoo-bulk-sender-requirements",level:2},{value:"Your Own Email Team",id:"your-own-email-team",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-email"},"\u2709\ufe0f Email"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h4",{id:"testing"},"Testing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No setup required"),(0,a.kt)("li",{parentName:"ul"},"Emails go out using our domain ",(0,a.kt)("inlineCode",{parentName:"li"},"@notificationapi.com")," (no configuration required)")),(0,a.kt)("h4",{id:"production"},"Production:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Requires verifying your domain through DNS records")),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard -> Settings -> Domain Verification")," for the step-by-step instructions."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You DON'T need another 3rd-party email service like SendGrid or SES. Through our partnerships, We allocate and manage any required email infrastructure, even dedicated IPs, for you.")),(0,a.kt)("h2",{id:"important-features"},"Important Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"High delivery through SPF, DKIM and DMARC - ",(0,a.kt)("a",{parentName:"li",href:"/guides/domain-verification"},"see docs")),(0,a.kt)("li",{parentName:"ul"},"Compliant with Google's and Yahoo's email sender policies and best practices for high deliverability - ","[see docs]","(/channels/email#Google and Yahoo Bulk Sender Requirements)"),(0,a.kt)("li",{parentName:"ul"},"Merge tags (injecting dynamic values into the email content) - ",(0,a.kt)("a",{parentName:"li",href:"../features/mergetags"},"see docs")),(0,a.kt)("li",{parentName:"ul"},"Pre-built Unsubscribe Link and Web Page - ",(0,a.kt)("a",{parentName:"li",href:"../components/unsubscribe-page"},"see docs")),(0,a.kt)("li",{parentName:"ul"},"Attachments - ",(0,a.kt)("a",{parentName:"li",href:"../reference/server#send"},"see docs")),(0,a.kt)("li",{parentName:"ul"},"CC, BCC fields - ",(0,a.kt)("a",{parentName:"li",href:"../reference/server#send"},"see docs"))),(0,a.kt)("h2",{id:"email-editor"},"Email Editor"),(0,a.kt)("img",{src:i,style:{maxWidth:500}}),(0,a.kt)("p",null,"To remove the burden of manually building email templates, we have integrated a fully loaded email editor. Now everyone on your team can create and modify your email notfications without coding."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Drag and drop editor"),(0,a.kt)("li",{parentName:"ul"},"Image, GIF, and video support"),(0,a.kt)("li",{parentName:"ul"},"Mobile responsive & mobile preview"),(0,a.kt)("li",{parentName:"ul"},"Save and re-use email parts like headers and footers")),(0,a.kt)("h2",{id:"tracking-options"},"Tracking Options"),(0,a.kt)("p",null,"The following are the events that we track and report on under our logs and insights features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delivery to destination mail server"),(0,a.kt)("li",{parentName:"ul"},"Bounces"),(0,a.kt)("li",{parentName:"ul"},"Complaints"),(0,a.kt)("li",{parentName:"ul"},"Opens and Clicks (coming soon)")),(0,a.kt)("h2",{id:"google-and-yahoo-bulk-sender-requirements"},"Google and Yahoo Bulk Sender Requirements"),(0,a.kt)("p",null,"In light of recent announcements by ",(0,a.kt)("a",{parentName:"p",href:"https://blog.google/products/gmail/gmail-security-authentication-spam-protection/"},"Google")," and ",(0,a.kt)("a",{parentName:"p",href:"https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam"},"Yahoo"),", it has become mandatory for bulk email senders to implement various requirements in place to reduce spam (",(0,a.kt)("a",{parentName:"p",href:"https://www.notificationapi.com/blog/the-developers-guide-to-google-bulk-sender-requirements"},"read more on our blog"),"). Our account setup process ensures that you are compliant with these requirements by configuring SPF, DKIM, DMARC correctly."),(0,a.kt)("p",null,"Moreover, it's essential to ensure that your emails support an easy, one-click unsubscribe process for end-users. This includes incorporating a clearly visible unsubscribe link within the body of your messages and providing unsubscribe end-points in the email header. NotificationAPI fully supports these functionalities, adhering to the standards set forth by ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2369"},"RFC 2369")," and ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8058"},"RFC 8058"),". Our system automatically includes the necessary header and an unsubscribe footer in your outgoing messages, providing your recipients with a straightforward method to opt-out of future communications."),(0,a.kt)("h2",{id:"your-own-email-team"},"Your Own Email Team"),(0,a.kt)("p",null,"Imagine having your own email team:"),(0,a.kt)("p",null,"Our team monitors bounces and complaints and will reach out to you directly if we detect an alarming rate of such emails. You can also reach out to us any time to ask about best practices, to review your email content, or to help you troubleshoot a delivery issue."),(0,a.kt)("p",null,"For paying customers, we help transfer your existing email templates into our editor, and we can also help you build new ones."))}d.isMDXComponent=!0}}]);