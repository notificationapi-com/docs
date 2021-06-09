(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[782],{890:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=e(2122),a=e(9756),o=(e(7294),e(3905)),s=e.p+"assets/images/inapp-2351be43133824c90d83c71767223d44.gif",r=e(1395),p=e(8215),d=["components"],l={sidebar_position:2},c={unversionedId:"quick-start/display-inapp-notifications",id:"quick-start/display-inapp-notifications",isDocsHomePage:!1,title:"Display In-App Notifications",description:"While email or SMS notifications only require the back-end part, you need our front-end SDK to display in-app notifications:",source:"@site/docs/quick-start/display-inapp-notifications.md",sourceDirName:"quick-start",slug:"/quick-start/display-inapp-notifications",permalink:"/docs/quick-start/display-inapp-notifications",editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/quick-start/display-inapp-notifications.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Send Your First Notification",permalink:"/docs/quick-start/send-a-notification"},next:{title:"Node.js Server SDK",permalink:"/docs/reference/nodejs-server"}},u=[{value:"1. Install a front-end SDK",id:"1-install-a-front-end-sdk",children:[]},{value:"2. Display",id:"2-display",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],m={toc:u};function f(t){var n=t.components,e=(0,a.Z)(t,d);return(0,o.kt)("wrapper",(0,i.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:s}),(0,o.kt)("p",null,"While email or SMS notifications only require the ",(0,o.kt)("a",{parentName:"p",href:"send-a-notification"},"back-end part"),", you need our front-end SDK to display in-app notifications:"),(0,o.kt)("h2",{id:"1-install-a-front-end-sdk"},"1. Install a front-end SDK"),(0,o.kt)(r.Z,{groupId:"frontend-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React.js",value:"react"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install notificationapi-js-client-sdk\n// or using yarn:\nyarn add notificationapi-js-client-sdk\n"))),(0,o.kt)(p.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install notificationapi-js-client-sdk\n// or using yarn:\nyarn add notificationapi-js-client-sdk\n")))),(0,o.kt)("h2",{id:"2-display"},"2. Display"),(0,o.kt)("p",null,"The example below creates the NotificationAPI widget in your front-end. The widget is placed in the container div specified by ID. The widget automatically connects to our servers and pull all the in-app notifications for the test user."),(0,o.kt)(r.Z,{groupId:"frontend-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React.js",value:"react"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import NotificationAPI from "notificationapi-js-client-sdk";\n\nnew NotificationAPI({\n  clientId: "CLIENT_ID",\n  userId: "TEST_USER_ID",\n  root: "CONTAINER_DIV_ID",\n});\n'))),(0,o.kt)(p.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("p",null,"Create the following ",(0,o.kt)("inlineCode",{parentName:"p"},"NotificationAPIComponent"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import NotificationAPI from "notificationapi-js-client-sdk";\nimport { memo, useEffect } from "react";\n\nconst NotificationAPIComponent = memo((props) => {\n  useEffect(() => {\n    new NotificationAPI({\n      clientId: "CLIENT_ID",\n      userId: props.userId,\n      root: "CONTAINER_DIV_ID",\n    });\n  });\n\n  return <div id="CONTAINER_DIV_ID"></div>;\n});\nexport default NotificationAPIComponent;\n')),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"React's state management and re-rendering would normally cause our widget to be destroyed and re-initialized with every state change which is inefficient. That's why the NotificationAPIComponent is \"memo\"-ized to prevent re-rendering."))),(0,o.kt)("p",null,"Now use the component anywhere you wish, for example in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import NotificationAPIComponent from "./NotificationAPIComponent";\n\nfunction App() {\n  return (\n    <div>\n      <NotificationAPIComponent userId="TEST_USER_ID" />\n      <div> ... </div>\n    </div>\n  );\n}\n\nexport default App;\n')))),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World")," notification, it's time to learn how to create and customize your own notifications."))}f.isMDXComponent=!0}}]);