"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[927],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(i),u=n,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return i?a.createElement(f,o(o({ref:t},c),{},{components:i})):a.createElement(f,o({ref:t},c))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:n,o[1]=d;for(var s=2;s<r;s++)o[s]=i[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},6195:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=i(7462),n=(i(7294),i(3905));const r=i.p+"assets/images/DKIM-6c4dbb386f3b5f0f8b5b323ddc92a995.jpg",o=i.p+"assets/images/mailfrom-869c56e30fc0ed7bf1972ed1f2dda803.png",d={sidebar_position:5},l="Update Sender Address",s={unversionedId:"guides/update-sender-address",id:"guides/update-sender-address",title:"Update Sender Address",description:"By default, email notifications are sent from noreply@notificationapi.com. Changing the sender to an address of your choice requires verification.",source:"@site/docs/guides/update-sender-address.md",sourceDirName:"guides",slug:"/guides/update-sender-address",permalink:"/guides/update-sender-address",draft:!1,editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/guides/update-sender-address.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Push Notifications",permalink:"/guides/push"},next:{title:"Logs",permalink:"/guides/logs"}},c={},m=[{value:"Method 1: Domain Verification",id:"method-1-domain-verification",level:2},{value:"Technical details:",id:"technical-details",level:5},{value:"Step by Step:",id:"step-by-step",level:5},{value:"Method 2: Individual Email Address Verification",id:"method-2-individual-email-address-verification",level:2},{value:"Technical details:",id:"technical-details-1",level:5},{value:"Step by Step:",id:"step-by-step-1",level:5},{value:"MAIL-FROM Field",id:"mail-from-field",level:2}],p={toc:m},u="wrapper";function f(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"update-sender-address"},"Update Sender Address"),(0,n.kt)("p",null,"By default, email notifications are sent from ",(0,n.kt)("a",{parentName:"p",href:"mailto:noreply@notificationapi.com."},"noreply@notificationapi.com.")," Changing the sender to an address of your choice requires verification."),(0,n.kt)("p",null,"We support two verification methods:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Domain Verification: Recommended, but requires updating DNS records"),(0,n.kt)("li",{parentName:"ol"},"Individual Email Address Verification: Easier setup, but not as good as domain verification")),(0,n.kt)("h2",{id:"method-1-domain-verification"},"Method 1: Domain Verification"),(0,n.kt)("h5",{id:"technical-details"},"Technical details:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Excellent Deliverability: Uses both DKIM and SPF policies"),(0,n.kt)("li",{parentName:"ul"},"Sender/From Address: Any email under the domain"),(0,n.kt)("li",{parentName:"ul"},"MAIL-FROM Field: Set to notificationapi.yourdomain.com. ",(0,n.kt)("a",{parentName:"li",href:"#mail-from-field"},"What is this?"))),(0,n.kt)("h5",{id:"step-by-step"},"Step by Step:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the domain from the Dashboard -> Settings -> Domain Verification"),(0,n.kt)("li",{parentName:"ol"},"Add the 5 DNS records displayed on the dashboard to your DNS settings"),(0,n.kt)("li",{parentName:"ol"},"Wait, usually a few minutes, but sometimes it could take 72 hours")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Most Common Issue")),(0,n.kt)("img",{src:r}),(0,n.kt)("p",{parentName:"admonition"},"Some DNS providers, such as AWS Route53, will automatically add your domain to the ",(0,n.kt)("inlineCode",{parentName:"p"},"NAME")," field of the DNS records. In this case, you don't need to do anything."),(0,n.kt)("p",{parentName:"admonition"},"Some DNS providers expect you to add the domain yourself. In this case, add ",(0,n.kt)("inlineCode",{parentName:"p"},".YOUR_DOMAIN.com")," to the end of the ",(0,n.kt)("inlineCode",{parentName:"p"},"NAME")," field for each record.")),(0,n.kt)("h2",{id:"method-2-individual-email-address-verification"},"Method 2: Individual Email Address Verification"),(0,n.kt)("h5",{id:"technical-details-1"},"Technical details:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ok Deliverability: Only uses DKIM policy, not SPF"),(0,n.kt)("li",{parentName:"ul"},"Sender/From Address: Only the individually verified email"),(0,n.kt)("li",{parentName:"ul"},"MAIL-FROM Field: Set to amazonses.com. ",(0,n.kt)("a",{parentName:"li",href:"#mail-from-field"},"What is this?"))),(0,n.kt)("h5",{id:"step-by-step-1"},"Step by Step:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the email address from the Dashboard -> Settings -> Domain Verification"),(0,n.kt)("li",{parentName:"ol"},"Click the verification link you should have received in that email inbox")),(0,n.kt)("h2",{id:"mail-from-field"},"MAIL-FROM Field"),(0,n.kt)("p",null,"The MAIL-FROM field is different than the Sender/From address. This field indicates which server originated the email. Users can see this field if they dig into the email details (see the image below from Gmail)."),(0,n.kt)("p",null,"The Domain Verification method sets this field to ",(0,n.kt)("em",{parentName:"p"},"notificationapi.yourdomain.com"),", which is better for deliverability and branding. The Individual Email Address Verification sets this field to ",(0,n.kt)("em",{parentName:"p"},"amazonses.com"),"."),(0,n.kt)("img",{src:o,style:{maxWidth:"600px"}}))}f.isMDXComponent=!0}}]);