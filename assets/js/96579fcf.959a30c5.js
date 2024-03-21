"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[100],{2411:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>q,contentTitle:()=>C,default:()=>E,frontMatter:()=>S,metadata:()=>T,toc:()=>O});var t=i(4848),s=i(8453),o=i(6540),r=i(5293),d=i(5825),l=i(6729),a=i(1223),c=i(9754),h=i(9356),u=i(3471),f=i(6013),x=i(1962),j=i(8633),p=i(2537),y=i(2607),m=i(8366),g=i(6318),w=i(2496),v=i(2200);const A=e=>{const[n,i]=(0,o.useState)(),[s,r]=(0,o.useState)(),[d,a]=(0,o.useState)(),[c,u]=(0,o.useState)(),[f,x]=(0,o.useState)();return(0,o.useEffect)((()=>{i("instantly"===e.userDefaultPreferenceOption),r("hourly"===e.userDefaultPreferenceOption),a("daily"===e.userDefaultPreferenceOption),u("weekly"===e.userDefaultPreferenceOption),x("monthly"===e.userDefaultPreferenceOption)}),[e]),(0,t.jsxs)(l.A,{style:{marginBottom:"10%",marginLeft:"20%",marginRight:"20%",marginTop:"5%"},children:[(0,t.jsx)(y.A,{style:{marginBottom:"2%"},children:(0,t.jsxs)(w.A,{level:4,children:[(0,t.jsx)(j.A,{}),"Notification Preference"]})}),(0,t.jsxs)(y.A,{style:{marginBottom:"2%"},children:[(0,t.jsx)(m.A,{span:8}),(0,t.jsxs)(m.A,{span:4,children:[(0,t.jsx)(p.A,{style:{color:v.z1.primary,marginRight:"3%"}}),"Email"]})]}),(0,t.jsxs)(y.A,{children:[(0,t.jsx)(m.A,{span:8,children:(0,t.jsx)(w.A,{level:5,children:"New Comment "})}),(0,t.jsx)(m.A,{span:4,children:(0,t.jsx)(g.A,{defaultChecked:!0,disabled:!e.allowUnsubscribe,value:!e.allowUnsubscribe||e.emailSubscription,onChange:()=>{e.setEmailSubscription(!e.emailSubscription)}})})]}),e.emailSubscription&&(0,t.jsxs)(y.A,{style:{display:"flex",alignItems:"left"},children:[(0,t.jsx)(m.A,{style:{marginRight:"8%"},children:e.instantly&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.A,{children:"Instantly"}),(0,t.jsx)(y.A,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(h.A,{defaultChecked:!0,checked:n,onChange:()=>{i(!n)}})})]})}),(0,t.jsx)(m.A,{style:{marginRight:"8%"},children:e.hourly&&(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(y.A,{children:"Hourly"}),(0,t.jsx)(y.A,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(h.A,{checked:s,onChange:()=>{r(!s)}})})," "]})}),(0,t.jsx)(m.A,{style:{marginRight:"8%"},children:e.daily&&(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(y.A,{children:"Daily"}),(0,t.jsx)(y.A,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(h.A,{checked:d,onChange:()=>{a(!d)}})})]})}),(0,t.jsx)(m.A,{style:{marginRight:"8%"},children:e.weekly&&(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(y.A,{children:"Weekly"}),(0,t.jsx)(y.A,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(h.A,{checked:c,onChange:()=>{u(!c)}})})]})}),(0,t.jsx)(m.A,{style:{marginRight:"8%"},children:e.monthly&&(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(y.A,{children:"Monthly"}),(0,t.jsx)(y.A,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(h.A,{checked:f,onChange:()=>{x(!f)}})})]})})]})]})},{Text:k}=d.A,b=()=>{const e=[];for(let n=0;n<=23;n++){const i=n<13?n:n-12,t=n<12?"am":"pm";e.push({label:`${i}:00 ${t}`,value:`${i}:00 ${t}`}),e.push({label:`${i}:30 ${t}`,value:`${i}:30 ${t}`})}return e},D=()=>{const{colorMode:e}=(0,r.G)(),[n,i]=(0,o.useState)(!0),[s,d]=(0,o.useState)(!1),[j,p]=(0,o.useState)(!1),[y,m]=(0,o.useState)("9:00 am"),[g,w]=(0,o.useState)(!0),[v,D]=(0,o.useState)("9:00 am"),[S,C]=(0,o.useState)("Monday"),[T,q]=(0,o.useState)(!1),[O,I]=(0,o.useState)("9:00 am"),[E,B]=(0,o.useState)("Beginning of Month"),[M,F]=(0,o.useState)(!0),[W,H]=(0,o.useState)(!0),[P,R]=(0,o.useState)("weekly");return(0,o.useEffect)((()=>{"off"===P&&H(!1)}),[P]),(0,t.jsxs)("div",{children:[(0,t.jsx)(l.A,{title:"Email Preferences",style:{marginBottom:"5%",marginLeft:"20%",marginRight:"20%"},children:(0,t.jsxs)(a.A,{direction:"vertical",size:"middle",style:{width:"100%"},children:[(0,t.jsx)(c.A,{children:"Delivery Options"}),(0,t.jsx)(k,{type:"secondary",children:"Choose what delivery options to support for this notification:"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(h.A,{checked:n,onChange:()=>i(!n),children:"Instantly"}),(0,t.jsx)(u.A,{color:"green",children:"default"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(h.A,{checked:s,onChange:()=>d(!s),children:"Hourly"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)(h.A,{style:{width:90},checked:j,onChange:()=>p(!j),children:"Daily at"}),(0,t.jsx)(f.A,{defaultValue:"09:00 am",style:{width:120},onChange:e=>m(e),options:b()})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(h.A,{style:{width:90},checked:g,onChange:()=>w(!g),children:"Weekly"}),(0,t.jsxs)(f.A,{defaultValue:"monday",style:{width:120},onChange:e=>console.log(e),children:[(0,t.jsx)(f.A.Option,{value:"monday",children:"Monday"}),(0,t.jsx)(f.A.Option,{value:"tuesday",children:"Tuesday"}),(0,t.jsx)(f.A.Option,{value:"wednesday",children:"Wednesday"}),(0,t.jsx)(f.A.Option,{value:"thursday",children:"Thursday"}),(0,t.jsx)(f.A.Option,{value:"friday",children:"Friday"}),(0,t.jsx)(f.A.Option,{value:"saturday",children:"Saturday"}),(0,t.jsx)(f.A.Option,{value:"sunday",children:"Sunday"})]}),"\xa0\xa0 at \xa0\xa0",(0,t.jsx)(f.A,{defaultValue:"09:00 am",onChange:e=>D(e),options:b()})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(h.A,{style:{width:90},checked:T,onChange:()=>q(!T),children:"Monthly"}),(0,t.jsxs)(f.A,{defaultValue:"1st of Month",style:{width:150},onChange:e=>B(e),children:[(0,t.jsx)(f.A.Option,{value:"Beginning of Month",children:"1st of Month"}),(0,t.jsx)(f.A.Option,{value:"End of Month",children:"End of Month"})]}),"\xa0\xa0 at \xa0\xa0",(0,t.jsx)(f.A,{defaultValue:"09:00am",onChange:e=>I(e),options:b()})]}),(0,t.jsx)(x.A,{content:(0,t.jsx)("div",{children:"Allows the user to unsubscribe from receiving this notification through this channel"}),children:(0,t.jsx)("div",{children:(0,t.jsx)(h.A,{checked:M,onChange:()=>{F(!M)},children:"Allow Unsubscribing"})})}),(0,t.jsx)(c.A,{children:"The Default Preference"}),(0,t.jsxs)(a.A,{direction:"vertical",children:[(0,t.jsx)(k,{type:"secondary",children:"This is the default delivery preference for this notification. Can be later changed by admins/users per user:"}),(0,t.jsxs)(f.A,{disabled:!(n||s||j||g||T||M),defaultValue:"weekly",style:{minWidth:300},onChange:e=>{R(e),"off"!==e&&H(!0)},children:[n&&(0,t.jsx)(f.A.Option,{value:"instantly",children:"Instantly"}),s&&(0,t.jsx)(f.A.Option,{value:"hourly",children:"Hourly"}),j&&(0,t.jsxs)(f.A.Option,{value:"daily",children:["Daily at ",y]}),g&&(0,t.jsxs)(f.A.Option,{value:"weekly",children:["Weekly at ",S," ",v]}),T&&(0,t.jsxs)(f.A.Option,{value:"monthly",children:["Monthly at ",E," ",O]}),M&&(0,t.jsx)(f.A.Option,{value:"off",children:"Off / Unsubscribed"})]})]})]})}),(0,t.jsx)(k,{style:{color:"dark"===e?"#ffffff":"#1e1e1e",marginLeft:"5%",fontSize:16},children:["\n          If you adjust the settings in the above component, the default ",(0,t.jsx)("a",{href:"https://docs.notificationapi.com/components/user-preferences",children:"user preference prebuilt component"})," will be displayed as follows:"]}),(0,t.jsx)(A,{allowUnsubscribe:M,emailSubscription:W,instantly:n,hourly:s,daily:j,weekly:g,monthly:T,userDefaultPreferenceOption:P,setEmailSubscription:H})]})},S={},C="\ud83d\udce6 Batch and Digest",T={id:"features/digest",title:"\ud83d\udce6 Batch and Digest",description:"Status: The Batch and Digest feature is currently in active development. Stay tuned for more updates and improvements.",source:"@site/docs/features/digest.mdx",sourceDirName:"features",slug:"/features/digest",permalink:"/features/digest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc65 Deduplication",permalink:"/features/deduplication"},next:{title:"\u2699 Testing Environments",permalink:"/features/environments"}},q={},O=[{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Frequently Asked Questions (FAQs)",id:"frequently-asked-questions-faqs",level:2},{value:"How does <code>Batch and Digest</code> work when there is no request at the time configured in the <code>Delivery Options</code>?",id:"how-does-batch-and-digest-work-when-there-is-no-request-at-the-time-configured-in-the-delivery-options",level:3},{value:"How does <code>Batch and Digest</code> work with <code>Throttling</code>?",id:"how-does-batch-and-digest-work-with-throttling",level:3},{value:"How does <code>Batch and Digest</code> work with <code>Deduplication</code>?",id:"how-does-batch-and-digest-work-with-deduplication",level:3},{value:"How does <code>Batch and Digest</code> work with <code>Schedualing</code>?",id:"how-does-batch-and-digest-work-with-schedualing",level:3},{value:"Do I get an additional change for <code>Batch and Digest</code>?",id:"do-i-get-an-additional-change-for-batch-and-digest",level:3}];function I(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-batch-and-digest",children:"\ud83d\udce6 Batch and Digest"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Status: The Batch and Digest feature is currently in active development. Stay tuned for more updates and improvements."})}),"\n",(0,t.jsx)(n.p,{children:"The NotificationAPI's Batch and Digest feature allows for the creation of recurring user digests at configured intervals. By batching multiple notifications into one, it effectively reduces notification fatigue. This feature is particularly useful for weekly reports or user digests. The notification editor provides a versatile tool for customizing the appearance of combined notifications, and your users can set their preferred schedule if needed."}),"\n",(0,t.jsx)(n.h2,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Like and comments summary on a social media post: In social media platforms, each like and comment on a post generates an event. Instead of sending separate notifications for each event, the Batch and Digest feature consolidates these into a single notification. At your chosen time, the requests will be compiled and sent a summarized report of all interactions on the post."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Truck Driver Schedule: For administrators overseeing food supply chains, a daily overview of all pickups and deliveries is crucial. The Digest feature provides these summaries, promoting effective and timely operations management."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For each notification, you can configure the channels' ",(0,t.jsx)(n.code,{children:"Delivery Options"})," as following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Instantly"}),": When we receive an ",(0,t.jsx)(n.code,{children:"Email"})," request, we try to deliver it to your user instantly. This delivery option is the ",(0,t.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Hourly"}),": We deliver all the ",(0,t.jsx)(n.code,{children:"Email"})," requests that we receive in an hour."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Weekly"}),": This configuration delivers all the ",(0,t.jsx)(n.code,{children:"Email"})," requests once a week. You can choose the day and time for it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Monthly"}),": To deliver ",(0,t.jsx)(n.code,{children:"Email"})," notifications once a month. It can happen at the beginning or end of a month. Also, you can choose the time too."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Allow unsubscribing"}),": This allows your users to unsubscribe from this ",(0,t.jsx)(n.code,{children:"Email"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"The Default Preference"})," indicates your users' default preference for delivery options."]}),"\n",(0,t.jsxs)(n.p,{children:["The following shows a sample of an ",(0,t.jsx)(n.code,{children:"Email"})," channel's ",(0,t.jsx)(n.code,{children:"Delivery Options"}),"."]}),"\n"]}),"\n"]}),"\n","\n","\n",(0,t.jsx)(D,{}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Design: Each channel can have one or more templates, and each template can be configured for one or multiple delivery options."}),"\n",(0,t.jsxs)(n.p,{children:["For example, at the ",(0,t.jsx)(n.code,{children:"new_comment"})," configure notification tab, you enable the ",(0,t.jsx)(n.code,{children:"Weekly"})," delivery option for the ",(0,t.jsx)(n.code,{children:"Email"})," channel and configure it to ",(0,t.jsx)(n.code,{children:"Monday 9:00 am"}),"; therefore, you have three delivery options: ",(0,t.jsx)(n.code,{children:"Instantly"}),", ",(0,t.jsx)(n.code,{children:"Weekly"})," and ",(0,t.jsx)(n.code,{children:"Allow Unsubscribing"})," and select the ",(0,t.jsx)(n.code,{children:"Weekly"})," option as ",(0,t.jsx)(n.code,{children:"The Default Preference"}),".\nIn the design tab, you can create two ",(0,t.jsx)(n.code,{children:"Email"})," templates, one for the ",(0,t.jsx)(n.code,{children:"Instantly"})," deliver option and one for ",(0,t.jsx)(n.code,{children:"Weekly."})," We will record the request you send in a week, and on ",(0,t.jsx)(n.code,{children:"Monday at 9:00 am"})," we will send the ",(0,t.jsx)(n.code,{children:"Email"})," using the ",(0,t.jsx)(n.code,{children:"Weekly"})," template. Suppose your user changes their preference to receive the ",(0,t.jsx)(n.code,{children:"Email"})," notification ",(0,t.jsx)(n.code,{children:"Instantly"}),". In that case, we will send the notification when we receive a request using the ",(0,t.jsx)(n.code,{children:"Instantly"})," email template."]}),"\n",(0,t.jsxs)(n.p,{children:["When you design a template and want to have access to ",(0,t.jsx)(n.a,{href:"./mergetags",children:"Parameters (Merge Tags)"})," in the requests that we have received, you can use the ",(0,t.jsx)(n.code,{children:"{{_requests}}"})," parameter. ",(0,t.jsx)(n.code,{children:"_request"})," is an array of all requests we have received over the period you have defined in the ",(0,t.jsx)(n.code,{children:"Delivery Options"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, you can have the number of comments in the ",(0,t.jsx)(n.code,{children:"new_comment"})," notification by using a ",(0,t.jsx)(n.a,{href:"./mergetags#filters",children:(0,t.jsx)(n.code,{children:"filter"})})," like ",(0,t.jsx)(n.code,{children:"{{_requests | size}}"})," in your template. In this way, we will find the number of ",(0,t.jsx)(n.code,{children:"new_comment"})," notification requests we have received and replace them with the parameters (merge tags)."]}),"\n",(0,t.jsxs)(n.p,{children:["Generally, you can leverage all the functionality we have provided for the ",(0,t.jsx)(n.a,{href:"/features/mergetags",children:"Parameters (Merge Tags)"})," feature, such as ",(0,t.jsx)(n.a,{href:"./mergetags#loops-for",children:(0,t.jsx)(n.code,{children:"Loops"})}),", ",(0,t.jsx)(n.a,{href:"./mergetags#conditional-logic-if-else",children:(0,t.jsx)(n.code,{children:"Conditional Logic"})}),", and ",(0,t.jsx)(n.a,{href:"./mergetags#filters",children:(0,t.jsx)(n.code,{children:"filter"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"frequently-asked-questions-faqs",children:"Frequently Asked Questions (FAQs)"}),"\n",(0,t.jsxs)(n.h3,{id:"how-does-batch-and-digest-work-when-there-is-no-request-at-the-time-configured-in-the-delivery-options",children:["How does ",(0,t.jsx)(n.code,{children:"Batch and Digest"})," work when there is no request at the time configured in the ",(0,t.jsx)(n.code,{children:"Delivery Options"}),"?"]}),"\n",(0,t.jsxs)(n.p,{children:["If there are no notifications for a user in the specified period, the system will not send a notification. For example, assume you have selected the ",(0,t.jsx)(n.code,{children:"Weekly"})," delivery option on ",(0,t.jsx)(n.code,{children:"Monday at 9:00 am"})," for the ",(0,t.jsx)(n.code,{children:"Email"})," channels. If there is no request recorded for the user by ",(0,t.jsx)(n.code,{children:"Monday at 9:00 am"}),", we will not send an ",(0,t.jsx)(n.code,{children:"Email"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"how-does-batch-and-digest-work-with-throttling",children:["How does ",(0,t.jsx)(n.code,{children:"Batch and Digest"})," work with ",(0,t.jsx)(n.code,{children:"Throttling"}),"?"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/features/throttling",children:(0,t.jsx)(n.code,{children:"Throttling"})})," criteria are checked at the configured time in the ",(0,t.jsx)(n.code,{children:"Delivery Options"}),". For Example, if you have configured the ",(0,t.jsx)(n.code,{children:"Throttling"})," for 2 notifications per user per 24 hours and configured the delivery option as ",(0,t.jsx)(n.code,{children:"hourly"}),", multiple requests have been received for the user at each hour. In the first two hours, we will send the batched notification. Until the next 24 hours, any subsequent notifications after the second notification will be discarded."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, with ",(0,t.jsx)(n.a,{href:"/features/throttling",children:(0,t.jsx)(n.code,{children:"Throttling"})})," set to allow 5 ",(0,t.jsx)(n.code,{children:"new_comment"})," notifications per hour and a ",(0,t.jsx)(n.code,{children:"Weekly"})," delivery option selected, the 6th notification within the same hour will be ignored."]}),"\n",(0,t.jsxs)(n.h3,{id:"how-does-batch-and-digest-work-with-deduplication",children:["How does ",(0,t.jsx)(n.code,{children:"Batch and Digest"})," work with ",(0,t.jsx)(n.code,{children:"Deduplication"}),"?"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/features/deduplication",children:(0,t.jsx)(n.code,{children:"Deduplication"})})," criteria are checked at the configured time in the ",(0,t.jsx)(n.code,{children:"Delivery Options"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For instance, the ",(0,t.jsx)(n.a,{href:"/features/deduplication",children:(0,t.jsx)(n.code,{children:"Deduplication"})})," window is 24 hours and a ",(0,t.jsx)(n.code,{children:"hourly"})," delivery option is selected. If requests are the same, batches after the first notification will be discarded."]}),"\n",(0,t.jsxs)(n.h3,{id:"how-does-batch-and-digest-work-with-schedualing",children:["How does ",(0,t.jsx)(n.code,{children:"Batch and Digest"})," work with ",(0,t.jsx)(n.code,{children:"Schedualing"}),"?"]}),"\n",(0,t.jsxs)(n.p,{children:["At the time the request is scheduled, we send the notification based on the selected ",(0,t.jsx)(n.code,{children:"Delivery Options"}),". For example, The delivery option is ",(0,t.jsx)(n.code,{children:"Weekly"})," on ",(0,t.jsx)(n.code,{children:"Monday at 9:00 am"})," and a request is scheduled for ",(0,t.jsx)(n.code,{children:"Wednesday at 9:00 am"}),". The notification will be recorded and will be batched with all other requests for that notification that we have received during the week for the user and it will be delivered on ",(0,t.jsx)(n.code,{children:"Monday at 9:00 am"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"do-i-get-an-additional-change-for-batch-and-digest",children:["Do I get an additional change for ",(0,t.jsx)(n.code,{children:"Batch and Digest"}),"?"]}),"\n",(0,t.jsx)(n.p,{children:"No, we provide this feature at no additional charge."})]})}function E(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(I,{...e})}):I(e)}}}]);