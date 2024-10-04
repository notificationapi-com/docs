"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[107],{7361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(4848),r=t(8453);const s=t.p+"assets/images/userpref2-c4be0a0b425b126d9d3e298b7e3298b8.png",o={},a="\u2699\ufe0f User Preferences Widget",l={id:"components/user-preferences",title:"\u2699\ufe0f User Preferences Widget",description:"This document outlines all the features, common use-cases and best-practices for the user notification preferences widget.",source:"@site/docs/components/user-preferences.md",sourceDirName:"components",slug:"/components/user-preferences",permalink:"/components/user-preferences",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude49 Unsubscribe Link & Page",permalink:"/components/unsubscribe-page"},next:{title:"\ud83d\udc65 Deduplication",permalink:"/features/deduplication"}},d={},c=[{value:"How It Works",id:"how-it-works",level:2},{value:"What options are displayed?",id:"what-options-are-displayed",level:2},{value:"Display Modes",id:"display-modes",level:2},{value:"Popup (Default)",id:"popup-default",level:4},{value:"Inline",id:"inline",level:4},{value:"Styling and Branding",id:"styling-and-branding",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\ufe0f-user-preferences-widget",children:"\u2699\ufe0f User Preferences Widget"}),"\n","\n",(0,i.jsx)("img",{src:s,style:{maxWidth:380,borderRadius:8}}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"This document outlines all the features, common use-cases and best-practices for the user notification preferences widget."}),"\n",(0,i.jsx)(n.p,{children:"This widget is part of our Front-end SDK, compatible with any JavaScript-based front-end framework like React, Angular and so on."}),"\n",(0,i.jsx)(n.p,{children:"Relevant docs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/quick-start/manage-preferences",children:"Add the widget to your front-end"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/reference/js-client",children:"Front-end SDK reference"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The widget connects to our servers and reads the user preferences"}),"\n",(0,i.jsx)(n.li,{children:"It will use this data to render the UI elements necessary to show the preferences"}),"\n",(0,i.jsx)(n.li,{children:"Upon end-user interaction, it will update our servers of the new preferences"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These preferences will be used in our servers for deciding how notifications are delivered to the end-user."}),"\n",(0,i.jsx)(n.h2,{id:"what-options-are-displayed",children:"What options are displayed?"}),"\n",(0,i.jsx)(n.p,{children:'Only channels that are enabled for the notification through the dashboard are visible/editable. For example, if the "SMS" channel is not enabled on a notification, the toggle will not appear. If the SMS channel is disabled for every notification, the SMS column will disappear altogether.'}),"\n",(0,i.jsx)(n.p,{children:"Only notifications will appear that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The user has received once, or"}),"\n",(0,i.jsx)(n.li,{children:"The user has explicit preferences set for them, e.g. when your team explicitly enables the notification for the user from the SDK"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"display-modes",children:"Display Modes"}),"\n",(0,i.jsx)(n.h4,{id:"popup-default",children:"Popup (Default)"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the ",(0,i.jsx)(n.code,{children:"showUserPreferences()"})," will display a popup similar to the image above. This is referred to as the popup mode."]}),"\n",(0,i.jsx)(n.h4,{id:"inline",children:"Inline"}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, by using ",(0,i.jsx)(n.code,{children:'parent: "DIV_ID"'})," parameter, the widget will render the preferences directly onto the parent element (ideally an empty div). This is referred to as the inline mode. This mode is useful for creating a stand-alone notification settings page in your app."]}),"\n",(0,i.jsx)(n.h2,{id:"styling-and-branding",children:"Styling and Branding"}),"\n",(0,i.jsx)(n.p,{children:'There is no "NotificationAPI" branding on this widget, even in our free tier.'}),"\n",(0,i.jsx)(n.p,{children:"And you can completely override the styles to make it match your own UI. You simply need to inspect the element you want to style, find the correct CSS class and customize it by writing your own CSS rules."}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"/* Hide the title */\n.notificationapi-preferences-popup h1 {\n  display: none !important;\n}\n\n/* Change the toggle color to orange */\n.notificationapi-preferences-popup .switch input:checked + i {\n  background-color: orange !important;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);