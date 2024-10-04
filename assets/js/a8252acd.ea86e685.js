"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97],{432:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>h,metadata:()=>l,toc:()=>p});var n=i(4848),s=i(8453);const o=i.p+"assets/images/delivery_options-28906fc30a05e5ae857197e45c6cb36a.png",a=i.p+"assets/images/UserPreferencesEmailBatching-66a3acc931187232c439fd40a34ca674.png",r=i.p+"assets/images/EmailEditorBatching-509e9aa8a8f6eced06ab8a413561e484.png",d=i.p+"assets/images/InAppEditorBatched-ae6c9859015590736acbfa7633869166.png",h={},c="\ud83d\udce6 Batching & Digest",l={id:"features/digest",title:"\ud83d\udce6 Batching & Digest",description:"The NotificationAPI's Batch & Digest allows for combining multiple notifications into one. The resulting batched notification can be designed with our editors, and can be configured to be sent at different intervals (hourly, daily, ...).",source:"@site/docs/features/digest.md",sourceDirName:"features",slug:"/features/digest",permalink:"/features/digest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc65 Deduplication",permalink:"/features/deduplication"},next:{title:"\u2699 Testing Environments",permalink:"/features/environments"}},u={},p=[{value:"Common Use Cases",id:"common-use-cases",level:2},{value:"Email Batching - How does it work?",id:"email-batching---how-does-it-work",level:2},{value:"1. Configure",id:"1-configure",level:3},{value:"2. Configure the Template",id:"2-configure-the-template",level:3},{value:"3. Designing the Template",id:"3-designing-the-template",level:3},{value:"In-App Batching",id:"in-app-batching",level:2},{value:"1. Configure",id:"1-configure-1",level:3},{value:"2. Design the Template",id:"2-design-the-template",level:3},{value:"3. SDK",id:"3-sdk",level:3},{value:"Frequently Asked Questions (FAQs)",id:"frequently-asked-questions-faqs",level:2},{value:"How does <code>Email Batching</code> work when there are no requests at the set hour/day/week/month?",id:"how-does-email-batching-work-when-there-are-no-requests-at-the-set-hourdayweekmonth",level:3},{value:"Will notifications with different sub notifications be batched together or separately?",id:"will-notifications-with-different-sub-notifications-be-batched-together-or-separately",level:3},{value:"How does <code>Batch &amp; Digest</code> work with <code>Throttling</code>?",id:"how-does-batch--digest-work-with-throttling",level:3},{value:"How does <code>Batch &amp; Digest</code> work with <code>Deduplication</code>?",id:"how-does-batch--digest-work-with-deduplication",level:3},{value:"How does <code>Batch &amp; Digest</code> work with <code>Scheduling</code>?",id:"how-does-batch--digest-work-with-scheduling",level:3},{value:"Does <code>Batch &amp; Digest</code> user&#39;s timezone?",id:"does-batch--digest-users-timezone",level:3},{value:"What happens to email attachments?",id:"what-happens-to-email-attachments",level:3},{value:"Do I have to pay extra for <code>Batch &amp; Digest</code>?",id:"do-i-have-to-pay-extra-for-batch--digest",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"-batching--digest",children:"\ud83d\udce6 Batching & Digest"})}),"\n",(0,n.jsx)(t.p,{children:"The NotificationAPI's Batch & Digest allows for combining multiple notifications into one. The resulting batched notification can be designed with our editors, and can be configured to be sent at different intervals (hourly, daily, ...)."}),"\n",(0,n.jsx)(t.h2,{id:"common-use-cases",children:"Common Use Cases"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Preventing notification fatigue"}),': For example, instead of sending 10 "new comment" emails, you can batch them into one "new comments" email on an hourly basis.']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Daily/Weekly/Monthly Reports"}),': You can combine the "events" from your software into a daily/weekly/monthly email. For example, every time there is a new user you can trigger a notification, but our system will send a "new users this week" email on a weekly basis.']}),"\n",(0,n.jsx)(t.h2,{id:"email-batching---how-does-it-work",children:"Email Batching - How does it work?"}),"\n",(0,n.jsx)(t.h3,{id:"1-configure",children:"1. Configure"}),"\n",(0,n.jsxs)(t.p,{children:["From our dashboard, you can enable different ",(0,n.jsx)(t.code,{children:"Delivery Options"})," for the email channel."]}),"\n","\n",(0,n.jsx)("img",{src:o,style:{maxWidth:480,borderRadius:8,border:"1px solid #d9d9d9",marginBottom:20,width:"100%"}}),"\n",(0,n.jsx)(t.p,{children:"In the example above, we are allowing users to receive emails intantly (no batching) or to unsubscribe from this email. The default delivery method for new users is based on the small green tag, which you can change."}),"\n",(0,n.jsxs)(t.p,{children:["The above options also allow users to see and pick the right preference for themselves using our ",(0,n.jsx)(t.a,{href:"/components/user-preferences",children:"prebuilt user preference component"}),":"]}),"\n","\n",(0,n.jsx)("img",{src:a,style:{maxWidth:480,borderRadius:8,width:"100%"}}),"\n",(0,n.jsx)(t.h3,{id:"2-configure-the-template",children:"2. Configure the Template"}),"\n",(0,n.jsxs)(t.p,{children:["Don't forget to create and assign an email template for the batched delivery options. For example, if you have enabled the ",(0,n.jsx)(t.code,{children:"Weekly"})," delivery option, you must create a template and from its options, pick it as the template used for the ",(0,n.jsx)(t.code,{children:"Weekly"})," emails."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:['You can create unlimited templates for each notification type. For example, you can have a "default" template for the ',(0,n.jsx)(t.code,{children:"new_comment"}),' email notification, a "Spanish" template for Spanish speaking users, or a "Weekly Digest (English)" template for batching these notifications into a single email.']})}),"\n",(0,n.jsx)(t.h3,{id:"3-designing-the-template",children:"3. Designing the Template"}),"\n",(0,n.jsx)(t.p,{children:"You can design the batch template using our no-code email editor, just like you would with a regular instant email."}),"\n",(0,n.jsx)(t.p,{children:"Tips:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When using ",(0,n.jsx)(t.a,{href:"mergetags",children:"Parameters (Merge Tags)"}),", you can access the batched items via ",(0,n.jsx)(t.code,{children:"{{_items}}"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["To count the number of batched items, you can use ",(0,n.jsx)(t.code,{children:"{{_items.size}}"})," in your template."]}),"\n",(0,n.jsxs)(t.li,{children:["You can repeat a row based on the ",(0,n.jsx)(t.code,{children:"_items"}),' by selecting the row and clicking the "Select Condition" button on the right panel.']}),"\n"]}),"\n","\n",(0,n.jsx)("img",{src:r,style:{maxWidth:800,borderRadius:8,width:"100%"}}),"\n",(0,n.jsx)(t.h2,{id:"in-app-batching",children:"In-App Batching"}),"\n",(0,n.jsx)(t.p,{children:"In-App batching works different than email in the sense that it happens live. When a new in-app notification is generated, it is instantly sent to the client-side SDK, and then client-side SDK handles the batching."}),"\n",(0,n.jsx)(t.h3,{id:"1-configure-1",children:"1. Configure"}),"\n",(0,n.jsxs)(t.p,{children:["From our dashboard, you can select that the in-app notifications should be batched. When selecting this option, you are allowed to pick how notifications are batched together by picking a ",(0,n.jsx)(t.code,{children:"batchingKey"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Notifications with similar ",(0,n.jsx)(t.code,{children:"batchingKeys"})," are batched together. For example, when users make comments under a social media post, you can use that post's unique ID as the ",(0,n.jsx)(t.code,{children:"batchingKey"}),". This way, the new comment notifications for the same post are batched together. For this purpose, you can set the batchingKey to ",(0,n.jsx)(t.code,{children:"{{parameters.comment_id}}"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"2-design-the-template",children:"2. Design the Template"}),"\n",(0,n.jsx)(t.p,{children:'In the in-app template editor, you now have the option to specify the title, image and URL of the batched in-app notifications. For example, instead of displaying "You have a new comment", you can display "You have {{_items.size}} new comments".'}),"\n","\n",(0,n.jsx)("img",{src:d,style:{maxWidth:600,borderRadius:8,width:"100%"}}),"\n",(0,n.jsx)(t.h3,{id:"3-sdk",children:"3. SDK"}),"\n",(0,n.jsx)(t.p,{children:"The React SDK automatically handles the batching logic and UI on the client-side."}),"\n",(0,n.jsx)(t.admonition,{title:"If you have built your own UI",type:"tip",children:(0,n.jsx)(t.p,{children:"We pass everything you need for the batching logic and UI inside the in-app notification objects. You can even create your own custom batching logic that batches notifications based on whatever criteria you need."})}),"\n",(0,n.jsx)(t.h2,{id:"frequently-asked-questions-faqs",children:"Frequently Asked Questions (FAQs)"}),"\n",(0,n.jsxs)(t.h3,{id:"how-does-email-batching-work-when-there-are-no-requests-at-the-set-hourdayweekmonth",children:["How does ",(0,n.jsx)(t.code,{children:"Email Batching"})," work when there are no requests at the set hour/day/week/month?"]}),"\n",(0,n.jsx)(t.p,{children:"If there are no notifications for a user in the batch period, the system will not send an email."}),"\n",(0,n.jsx)(t.h3,{id:"will-notifications-with-different-sub-notifications-be-batched-together-or-separately",children:"Will notifications with different sub notifications be batched together or separately?"}),"\n",(0,n.jsxs)(t.p,{children:["Requests with different ",(0,n.jsx)(t.a,{href:"/features/subnotifications",children:"subNotificationIds"})," will be batched together."]}),"\n",(0,n.jsxs)(t.h3,{id:"how-does-batch--digest-work-with-throttling",children:["How does ",(0,n.jsx)(t.code,{children:"Batch & Digest"})," work with ",(0,n.jsx)(t.code,{children:"Throttling"}),"?"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/features/throttling",children:(0,n.jsx)(t.code,{children:"Throttling"})})," criteria are checked at the configured time in the ",(0,n.jsx)(t.code,{children:"Delivery Options"}),". For example, assume if you have configured ",(0,n.jsx)(t.code,{children:"Throttling"})," for 2 notifications per user per 24 hours and configured the delivery option as ",(0,n.jsx)(t.code,{children:"hourly"}),", and then sent a notification every hour. In the first two hours, a batched notification will be sent. Any notifications recieved afterwards will be discarded until 24 hours has passed."]}),"\n",(0,n.jsxs)(t.p,{children:["Likewise if you have a notification with ",(0,n.jsx)(t.a,{href:"/features/throttling",children:(0,n.jsx)(t.code,{children:"Throttling"})})," set to allow 5 ",(0,n.jsx)(t.code,{children:"new_comment"})," notifications per hour and a ",(0,n.jsx)(t.code,{children:"Weekly"})," delivery option selected, then the 6th notification within the same hour will be ignored."]}),"\n",(0,n.jsxs)(t.h3,{id:"how-does-batch--digest-work-with-deduplication",children:["How does ",(0,n.jsx)(t.code,{children:"Batch & Digest"})," work with ",(0,n.jsx)(t.code,{children:"Deduplication"}),"?"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/features/deduplication",children:(0,n.jsx)(t.code,{children:"Deduplication"})})," criteria are checked at the configured time in the ",(0,n.jsx)(t.code,{children:"Delivery Options"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, assume the ",(0,n.jsx)(t.a,{href:"/features/deduplication",children:(0,n.jsx)(t.code,{children:"Deduplication"})})," window is 24 hours and a ",(0,n.jsx)(t.code,{children:"hourly"})," delivery option is selected. If any batches are detected as a duplicate, then they are discarded."]}),"\n",(0,n.jsxs)(t.h3,{id:"how-does-batch--digest-work-with-scheduling",children:["How does ",(0,n.jsx)(t.code,{children:"Batch & Digest"})," work with ",(0,n.jsx)(t.code,{children:"Scheduling"}),"?"]}),"\n",(0,n.jsxs)(t.p,{children:["Batched notifications are sent based on their selected ",(0,n.jsx)(t.code,{children:"Delivery Options"}),". Any requests recieved (either from scheduled or instant notifications) are added to the batch."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, assume a notification is configured to send batches ",(0,n.jsx)(t.code,{children:"Weekly"})," on ",(0,n.jsx)(t.code,{children:"Monday at 9:00 am"}),", and recieves a scheduled request for ",(0,n.jsx)(t.code,{children:"Sunday at 1:00 pm"}),". The request is not sent on ",(0,n.jsx)(t.code,{children:"Sunday at 1:00 pm"}),": instead it is batched and will be included in the notification sent on ",(0,n.jsx)(t.code,{children:"Monday at 9:00 am"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"does-batch--digest-users-timezone",children:["Does ",(0,n.jsx)(t.code,{children:"Batch & Digest"})," user's timezone?"]}),"\n",(0,n.jsxs)(t.p,{children:["Yes, if the user's timezone is defined by ",(0,n.jsx)(t.a,{href:"/reference/js-client#identify",children:"the front end SDKs"}),", and/or ",(0,n.jsx)(t.a,{href:"/reference/server#identifyuser",children:"backend SDKs"})," or simply added to the ",(0,n.jsx)(t.a,{href:"/reference/server#send",children:"send request"})," the request is scheduled for the user's timezone. The default timezone is ",(0,n.jsx)(t.code,{children:"EST"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"what-happens-to-email-attachments",children:"What happens to email attachments?"}),"\n",(0,n.jsx)(t.p,{children:"Batched notifications will retain and combine all of their attachments into the same email. You should be careful with the size of the attachments."}),"\n",(0,n.jsxs)(t.h3,{id:"do-i-have-to-pay-extra-for-batch--digest",children:["Do I have to pay extra for ",(0,n.jsx)(t.code,{children:"Batch & Digest"}),"?"]}),"\n",(0,n.jsx)(t.p,{children:"No, this feature is provided for no additional charge."})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);