"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[273],{7507:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>v,frontMatter:()=>j,metadata:()=>f,toc:()=>m});var t=i(4848),s=i(8453),r=(i(6540),i(1470)),o=i(9365),d=i(4269),c=i(109),a=i(1869),l=i(2021),h=i(6132);i.p,i.p,i.p;const u=i.p+"assets/images/notipreferences-8054c5a8c61f5a79f45262c4b0b1cea5.png",x=(i.p,i.p+"assets/images/elementcounter-f9c234a03681421a3d6c73a4da7b7ef1.png"),j={sidebar_position:5},p="React SDK (Front-End)",f={id:"reference/react-sdk",title:"React SDK (Front-End)",description:"The React SDK is mainly used for displaying In-App Notifications and allowing users to see and change their Notification Preferences.",source:"@site/docs/reference/react-sdk.md",sourceDirName:"reference",slug:"/reference/react-sdk",permalink:"/reference/react-sdk",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Android SDK (Front-End)",permalink:"/reference/android-sdk"}},g={},m=[{value:"Setup",id:"setup",level:2},{value:"In-App Notification Components",id:"in-app-notification-components",level:2},{value:"Popup",id:"popup",level:3},{value:"Popup Launcher",id:"popup-launcher",level:3},{value:"Counter (Standalone)",id:"counter-standalone",level:3},{value:"Counter (on existing elements)",id:"counter-on-existing-elements",level:3},{value:"Feed",id:"feed",level:3},{value:"Notification Preferences Center",id:"notification-preferences-center",level:2},{value:"Preferences Popup",id:"preferences-popup",level:3},{value:"Preferences Inline",id:"preferences-inline",level:3},{value:"UI Customizations",id:"ui-customizations",level:2},{value:"Customizing the Button",id:"customizing-the-button",level:3},{value:"Customizing the Header",id:"customizing-the-header",level:3},{value:"Customizing the Popup",id:"customizing-the-popup",level:3},{value:"Unread Badge",id:"unread-badge",level:3},{value:"Pagination",id:"pagination",level:3},{value:"Logical Customizations",id:"logical-customizations",level:2},{value:"Count",id:"count",level:3},{value:"Filters",id:"filters",level:2},{value:"Customizing each Notification",id:"customizing-each-notification",level:2},{value:"Headless (build your own UI)",id:"headless-build-your-own-ui",level:2},{value:"Setup",id:"setup-1",level:3},{value:"Acessing notification data",id:"acessing-notification-data",level:3},{value:"Accessing user preferences",id:"accessing-user-preferences",level:3},{value:"Updating user preferences",id:"updating-user-preferences",level:3},{value:"Marking loaded notifications as opened/seen",id:"marking-loaded-notifications-as-openedseen",level:3},{value:"Marking notifications as archived",id:"marking-notifications-as-archived",level:3},{value:"Marking a notification as clicked",id:"marking-a-notification-as-clicked",level:3}];function b(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"react-sdk-front-end",children:"React SDK (Front-End)"}),"\n",(0,t.jsxs)(n.p,{children:["The React SDK is mainly used for displaying ",(0,t.jsx)(n.strong,{children:"In-App"})," Notifications and allowing users to see and change their ",(0,t.jsx)(n.strong,{children:"Notification Preferences"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)("div",{style:{color:"black",padding:24},children:(0,t.jsxs)(d.Fv,{userId:"djkean7@gmail.com",clientId:"6ok6imq9ucn2budgiebjdaa6oi",children:[(0,t.jsx)(r.A,{groupId:"package-manager",defaultValue:"manager",values:[{label:"Package Manager",value:"manager"}],children:(0,t.jsxs)(o.A,{value:"manager",children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Install the react package:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npm install @notificationapi/react\n# yarn add @notificationapi/react\n# pnpm add @notificationapi/react\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Import and use our provider in your top-level components/routers:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="App.tsx"',children:'import { NotificationAPIProvider } from \'@notificationapi/react\';\n\n<App>\n  <NotificationAPIProvider\n    userId="abcd-1234" // logged in userId\n    clientId="abc123" // your clientId found on the dashboard\n  >\n\n    \x3c!-- your protected routes --\x3e\n\n  </NotificationAPIProvider>\n</App>;\n'})})]})}),(0,t.jsx)(n.h2,{id:"in-app-notification-components",children:"In-App Notification Components"}),(0,t.jsx)(n.h3,{id:"popup",children:"Popup"}),(0,t.jsx)("span",{children:"Click this \ud83d\udc49"}),(0,t.jsx)(c.N,{}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<NotificationPopup />\n"})}),(0,t.jsx)(n.p,{children:"Our popup component opens up to display your inbox for in-app notifications. This gives users a small interface for accessing their notifications without taking up screen space. Especially useful for mobile apps."}),(0,t.jsx)(n.p,{children:'All notifications are displayed here, and each notification comes with buttons to mark notifications as "seen" or "archived".\nAdditionally, the top right of the inbox contains features for setting user preferences and marking all notifications as read directlyfrom the inbox. If a notification has redirect, interacting with it will send users to that link or page from within the component.'}),(0,t.jsx)(n.h3,{id:"popup-launcher",children:"Popup Launcher"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<NotificationLauncher />\n"})}),(0,t.jsx)(n.p,{children:"The popup launcher adds a button to the corner of the page (similar to chat buttons), that remains in place on your application. This gives users access to their inbox from anywhere on a page, so they don't need to scroll up to an inbox, or visit a dedicated inbox page to read and interact with notifications."}),(0,t.jsx)(n.h3,{id:"counter-standalone",children:"Counter (Standalone)"}),(0,t.jsx)("span",{children:"This is the counter \ud83d\udc49 "}),(0,t.jsx)(a.Y,{count:"COUNT_UNARCHIVED_NOTIFICATIONS"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<NotificationCounter />\n"})}),(0,t.jsx)(n.p,{children:"The counter element displays the number of unread notifications. Features:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Can count "unopened/unseen" notifications or "unarchived" notifications'}),"\n",(0,t.jsxs)(n.li,{children:["Can be a dot like: ",(0,t.jsx)(a.Y,{count:"COUNT_UNARCHIVED_NOTIFICATIONS",dot:!0})]}),"\n",(0,t.jsx)(n.li,{children:"Many other formatting and positioning customizations available"}),"\n"]}),(0,t.jsx)(n.h3,{id:"counter-on-existing-elements",children:"Counter (on existing elements)"}),(0,t.jsx)(n.p,{children:"Apply the same counter badge on an existing element to notify users of unread messages."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<NotificationCounter>\n  <Button>Counter</Button>\n</NotificationCounter>\n"})}),(0,t.jsx)("img",{src:x,style:{maxWidth:300}}),(0,t.jsx)(n.h3,{id:"feed",children:"Feed"}),(0,t.jsx)(n.p,{children:"The feed component provides a larger feed for browsing notifications. Notifications within the feed can also be clicked on to direct to links or pages, if any were set within the Notification template."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<NotificationFeed infiniteScrollHeight={300} />\n"})}),(0,t.jsx)(n.p,{children:"Example:"}),(0,t.jsx)(l.Y,{infiniteScrollHeight:300}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.h2,{id:"notification-preferences-center",children:"Notification Preferences Center"}),(0,t.jsx)(n.h3,{id:"preferences-popup",children:"Preferences Popup"}),(0,t.jsx)(n.p,{children:"Our notification preferences popup allows users to set their preferences with your app. The component contains all your templates, and sliders for users to opt-in and out of notifications, and per channel where applicable."}),(0,t.jsx)("img",{src:u,style:{maxWidth:600}}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.h3,{id:"preferences-inline",children:"Preferences Inline"}),(0,t.jsx)(n.p,{children:"Alternatively, we also offer an inline component for user preferences. Ideal for options & settings pages."}),(0,t.jsx)(h.z,{}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.h2,{id:"ui-customizations",children:"UI Customizations"}),(0,t.jsx)(n.h3,{id:"customizing-the-button",children:"Customizing the Button"}),(0,t.jsx)(n.p,{children:"Make our button fit in - or stand out. You can customize our button using the following parameters:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Size"}),"\n",(0,t.jsx)(n.li,{children:"Icon"}),"\n",(0,t.jsx)(n.li,{children:"Location (for launcher)"}),"\n"]}),(0,t.jsx)(n.h3,{id:"customizing-the-header",children:"Customizing the Header"}),(0,t.jsx)(n.p,{children:"Coming soon!"}),(0,t.jsx)(n.h3,{id:"customizing-the-popup",children:"Customizing the Popup"}),(0,t.jsx)(n.p,{children:"Customize out popup to be the right fit for your app. Our Popup can be customized using these parameters:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"z-index"}),"\n",(0,t.jsx)(n.li,{children:"Height"}),"\n",(0,t.jsx)(n.li,{children:"Width"}),"\n"]}),(0,t.jsx)(n.h3,{id:"unread-badge",children:"Unread Badge"}),(0,t.jsx)(n.p,{children:"You can customize the unread badge using these parameters and features:"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"color"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Customize the color for your badge icon."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"count"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),(0,t.jsx)(n.td,{children:"Set a value to display in the badge."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"classNames"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Record<SemanticDOM, string/>"})}),(0,t.jsx)(n.td,{children:"Set class names for your badge component."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"dot"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"Display a plain dot instead of your counter."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"offset"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[number, number]"})}),(0,t.jsx)(n.td,{children:"Set an alternative location for the badge."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"overflowCount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"Badge displays a + beside your number when notifications exceed that amount."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"showZero"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"Show a 0 on the badge when there are no new notifications."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"size"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"default"}),", ",(0,t.jsx)(n.code,{children:"small"})]}),(0,t.jsx)(n.td,{children:"Modify the size of the unread badge."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"status"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"success"}),", ",(0,t.jsx)(n.code,{children:"processing"}),", ",(0,t.jsx)(n.code,{children:"default"}),", ",(0,t.jsx)(n.code,{children:"error"}),", ",(0,t.jsx)(n.code,{children:"warning"})]}),(0,t.jsx)(n.td,{children:"Give notifications a colored badge noting message status."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"styles"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Record<SemanticDOM, CSSProperties/>"})}),(0,t.jsx)(n.td,{children:"Use Semantic DOM style to modify your badge."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"text"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),(0,t.jsxs)(n.td,{children:["Sets the badge text to ",(0,t.jsx)(n.code,{children:"status"})," if ",(0,t.jsx)(n.code,{children:"status"})," has been set."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"title"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Set hover text for your badge."})]})]})]}),(0,t.jsx)(n.h3,{id:"pagination",children:"Pagination"}),(0,t.jsx)(n.p,{children:"You can use this to set up pages for your feed. Design scrollable, interactive inbox for your users through our component. Your feed can be modified further using these arguments:"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"bordered"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsxs)(n.td,{children:["Toggle a border for your feed. Set to ",(0,t.jsx)(n.code,{children:"false"})," by default."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"dataSource"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any[]"})}),(0,t.jsx)(n.td,{children:"Set a data source for your feed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"footer"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),(0,t.jsx)(n.td,{children:"Render a footer for your feed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"grid"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsx)(n.td,{children:"Give your feed grid properties via JSON."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"header"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),(0,t.jsx)(n.td,{children:"Render a header for your feed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"itemLayout"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"horizontal"}),", ",(0,t.jsx)(n.code,{children:"vertical"})]}),(0,t.jsx)(n.td,{children:"Determine the layout of your feed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"loading"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"}),"+"]}),(0,t.jsxs)(n.td,{children:["Show a loading symbol within the component when fetching your ",(0,t.jsx)(n.code,{children:"dataSource"}),". False by default."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"loadMore"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),(0,t.jsx)(n.td,{children:"Render a component to load more data for yuor feed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"locale"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsx)(n.td,{children:"i18n text or empty text."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"pagination"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"}),", ",(0,t.jsx)(n.code,{children:"object"})]}),(0,t.jsxs)(n.td,{children:["Set and modify pagination for your feed. Set to ",(0,t.jsx)(n.code,{children:"false"})," by default."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"renderItem"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"(item) => ReactNode"})}),(0,t.jsxs)(n.td,{children:["Define a custom list when using ",(0,t.jsx)(n.code,{children:"dataSource"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"rowKey"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"keyof"})," X, ",(0,t.jsx)(n.code,{children:"(item: X) => React.Key"})]}),(0,t.jsx)(n.td,{children:"Determine an item's key value. Can be either a unique value or a function that returns a value."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"size"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"small"}),", ",(0,t.jsx)(n.code,{children:"default"}),", ",(0,t.jsx)(n.code,{children:"large"})]}),(0,t.jsx)(n.td,{children:"Adjust the size and spacing of your feed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"split"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsxs)(n.td,{children:["Toggle a visual separator for individual notifications in your feed. Set to ",(0,t.jsx)(n.code,{children:"false"})," by default."]})]})]})]}),(0,t.jsx)(n.h2,{id:"logical-customizations",children:"Logical Customizations"}),(0,t.jsx)(n.h3,{id:"count",children:"Count"}),(0,t.jsx)(n.p,{children:"This refers to what notifications are counted in the counters or unread badges. You can use an existing mode or count the notifications by your own custom function:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COUNT_UNOPENED_NOTIFICATIONS"})," (default): only counts notifications that are never seen/opened. Once the user opens the notification popup, the count will be reset to zero."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COUNT_UNARCHIVED_NOTIFICATIONS"}),": only counts the notifications that are not archived. The count will change when the user marks notifications as archived."]}),"\n",(0,t.jsxs)(n.li,{children:["Custom: you can create your own function to count the notifications. The example code below counts notifications that belong to the ",(0,t.jsx)(n.code,{children:"welcome_notification"})," category and are not archived."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<NotificationPopup\n  count={(n) => {\n    return n.notificationId === 'welcome_notification' && !n.archived;\n  }}\n/>\n"})}),(0,t.jsx)(n.h2,{id:"filters",children:"Filters"}),(0,t.jsx)(n.p,{children:"This refers to which notifications are rendered in the pre-existing popup, feed, ... components. You can filter notifications via existing modes or create your own custom function:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ALL"})," (default): renders all notifications"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"UNARHIVED"}),": renders only notifications that are not archived"]}),"\n",(0,t.jsxs)(n.li,{children:["Custom: The example code below filters notifications that belong to the ",(0,t.jsx)(n.code,{children:"welcome_notification"})," category and are not archived."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<NotificationPopup\n  count={(n) => {\n    return n.notificationId === 'welcome_notification' && !n.archived;\n  }}\n/>\n"})}),(0,t.jsx)(n.h2,{id:"customizing-each-notification",children:"Customizing each Notification"}),(0,t.jsx)(n.h2,{id:"headless-build-your-own-ui",children:"Headless (build your own UI)"}),(0,t.jsx)(n.p,{children:"You can build your own UI by reading the data inside our React Context object. It includes all our notification objects, users preferences, and functions for updating notification states. You can use these to build any notification UI you need."}),(0,t.jsx)(n.h3,{id:"setup-1",children:"Setup"}),(0,t.jsxs)(n.p,{children:["Inside the components wrapped in our ",(0,t.jsx)(n.code,{children:"NotificationAPIProvider"}),", you can access the context object using the ",(0,t.jsx)(n.code,{children:"useNotificationAPIContext"})," hook:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"export const MyComponent: React.FC = () => {\n  // highlight-next-line\n  const notificationapi = NotificationAPIProvider.useNotificationAPIContext();\n\n  return (\n    <Button\n      onClick={() => {\n        console.log(notificationapi.notifications);\n      }}\n    >\n      Click to log notifications\n    </Button>\n  );\n};\n"})}),(0,t.jsx)(n.h3,{id:"acessing-notification-data",children:"Acessing notification data"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"notificationapi.notifications;\n"})}),(0,t.jsx)(n.h3,{id:"accessing-user-preferences",children:"Accessing user preferences"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"notificationapi.preferences;\n"})}),(0,t.jsx)(n.h3,{id:"updating-user-preferences",children:"Updating user preferences"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"notificationapi.updateDelivery(\n  notificationId,\n  channel,\n  delivery,\n  subNotificationId?\n)\n"})}),(0,t.jsx)(n.h3,{id:"marking-loaded-notifications-as-openedseen",children:"Marking loaded notifications as opened/seen"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"notificationapi.markAsOpened();\n"})}),(0,t.jsx)(n.h3,{id:"marking-notifications-as-archived",children:"Marking notifications as archived"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"// to mark all as archived:\nnotificationapi.markAsArchived('ALL');\n\n// to mark invididual notifications as archived:\nnotificationapi.markAsArchived(['trackingId1', 'trackingId2']);\n"})}),(0,t.jsx)(n.h3,{id:"marking-a-notification-as-clicked",children:"Marking a notification as clicked"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"notificationapi.markAsClicked('trackingId');\n"})})]})})]})}function v(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}}}]);