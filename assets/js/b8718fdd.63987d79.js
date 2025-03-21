"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[311],{7240:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var t=i(4848),a=i(8453),o=i(1470),s=i(9365);const r={sidebar_position:1},c="\ud83d\ude80 Send a notification",l={id:"quick-start/send-a-notification",title:"\ud83d\ude80 Send a notification",description:"Prerequisite",source:"@site/docs/quick-start/send-a-notification.md",sourceDirName:"quick-start",slug:"/quick-start/send-a-notification",permalink:"/quick-start/send-a-notification",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/"},next:{title:"\ud83d\udd14 Display in-app notifications",permalink:"/quick-start/display-inapp-notifications"}},d={},u=[{value:"Prerequisite",id:"prerequisite",level:4},{value:"Overview",id:"overview",level:2},{value:"Step 1: Setup the SDK",id:"step-1-setup-the-sdk",level:2},{value:"Step 2: Send the Notification",id:"step-2-send-the-notification",level:2},{value:"Next Steps",id:"next-steps",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-send-a-notification",children:"\ud83d\ude80 Send a notification"})}),"\n",(0,t.jsx)(n.h4,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A NotificationAPI account - ",(0,t.jsx)(n.a,{href:"https://app.notificationapi.com/signup",children:"sign up for free"})]}),"\n",(0,t.jsx)(n.li,{children:"A configured notification in the dashboard (new accounts already have a demo notification)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Your team, even non-technical members, can use our dashboard to configure and design your standard notifications without any coding knowledge. For example, they would configure an alert to go over email and completely design its content, subject, etc."}),"\n",(0,t.jsx)(n.p,{children:"Then, through our SDKs or API, your back-end lets us know when to send this notification to a user. We then take care of the rest."}),"\n",(0,t.jsx)(n.p,{children:"Let's learn..."}),"\n",(0,t.jsx)(n.h2,{id:"step-1-setup-the-sdk",children:"Step 1: Setup the SDK"}),"\n","\n",(0,t.jsxs)(o.A,{groupId:"back-end-language",defaultValue:"js",values:[{label:"Node",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"},{label:"C#",value:"csharp"},{label:"Ruby",value:"ruby"}],children:[(0,t.jsxs)(s.A,{value:"js",children:[(0,t.jsx)(n.p,{children:"Install the node package using one of the following package managers:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install notificationapi-node-server-sdk\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add notificationapi-node-server-sdk\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add notificationapi-node-server-sdk\n"})})]}),(0,t.jsx)(s.A,{value:"python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install notificationapi_python_server_sdk\n"})})}),(0,t.jsx)(s.A,{value:"php",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"composer require notificationapi/notificationapi-php-server-sdk\n"})})}),(0,t.jsx)(s.A,{value:"go",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go get github.com/notificationapi-com/notificationapi-go-server-sdk\n"})})}),(0,t.jsxs)(s.A,{value:"csharp",children:[(0,t.jsx)(n.p,{children:"Install the package:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"dotnet add package NotificationAPI --version 0.5.0\n"})})]}),(0,t.jsx)(s.A,{value:"ruby",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# Create the following class in your application\n\nrequire 'net/http'\nrequire 'json'\nrequire 'base64'\nrequire 'openssl'\n\nclass NotificationAPI\n  def initialize(client_id, client_secret)\n    @base_url = 'https://api.notificationapi.com'\n    @client_id = client_id\n    @auth_token = Base64.strict_encode64(\"#{client_id}:#{client_secret}\")\n    @http_client = Net::HTTP.new('api.notificationapi.com', 443)\n    @http_client.use_ssl = true\n  end\n\n  def send(request)\n    payload = request.to_json\n    response = @http_client.post(\n      \"/#{@client_id}/sender\",\n      payload,\n      {\n        'Content-Type' => 'application/json',\n        'Authorization' => \"Basic #{@auth_token}\"\n      }\n    )\n    response.body\n  end\n\n  def retract(request)\n    payload = request.to_json\n    response = @http_client.post(\n      \"/#{@client_id}/sender/retract\",\n      payload,\n      {\n        'Content-Type' => 'application/json',\n        'Authorization' => \"Basic #{@auth_token}\"\n      }\n    )\n    response.body\n  end\n\n  def identify_user(user_id, user_data)\n    digest = OpenSSL::Digest::SHA256.new\n    hmac = OpenSSL::HMAC.digest(digest, @client_secret, user_id)\n    hashed_user_id = Base64.strict_encode64(hmac)\n    custom_auth = Base64.strict_encode64(\"#{@client_id}:#{user_id}:#{hashed_user_id}\")\n\n    send_request('POST', \"users/#{URI.escape(user_id)}\", user_data, custom_auth)\n  end\n\n  def create_sub_notification(notification_id, sub_notification_id, title)\n    payload = { title: title }\n    send_request('PUT', \"notifications/#{notification_id}/subNotifications/#{sub_notification_id}\", payload)\n  end\n\n  def delete_sub_notification(notification_id, sub_notification_id)\n    send_request('DELETE', \"notifications/#{notification_id}/subNotifications/#{sub_notification_id}\")\n  end\n\n  def update_schedule(tracking_id, scheduleUpdate)\n    send_request('PATCH', \"notifications/#{tracking_id}\", scheduleUpdate)\n  end\n\n  def delete_schedule(tracking_id)\n    send_request('DELETE', \"notifications/#{tracking_id}\")\n  end\n\n  def set_user_preferences(user_id, user_preferences)\n    send_request('POST', \"user_preferences/#{user_id}\", user_preferences)\n  end\n\n  private\n\n  def send_request(method, uri, data = {}, auth = \"Basic #{@auth_token}\")\n    payload = data.to_json\n    response = @http_client.send_request(\n      method,\n      \"/#{@client_id}/#{uri}\",\n      payload,\n      {\n        'Content-Type' => 'application/json',\n        'Authorization' => auth\n      }\n    )\n    response.body\n  end\n\nend\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"step-2-send-the-notification",children:"Step 2: Send the Notification"}),"\n",(0,t.jsxs)(n.p,{children:["Our ",(0,t.jsx)(n.code,{children:"send"})," function or ",(0,t.jsx)(n.code,{children:"POST /sender"})," API call takes a JSON payload that specifies which notification to send and to whom. It also has a ",(0,t.jsx)(n.code,{children:"mergeTags"})," field that you can use to personalize the notification."]}),"\n",(0,t.jsxs)(o.A,{groupId:"back-end-language",defaultValue:"js",values:[{label:"Node",value:"js"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Go",value:"go"},{label:"C#",value:"csharp"},{label:"Ruby",value:"ruby"}],children:[(0,t.jsx)(s.A,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// import/require:\nimport notificationapi from 'notificationapi-node-server-sdk';\n// const notificationapi = require('notificationapi-node-server-sdk').default\n\n// init\nnotificationapi.init('CLIENT_ID', 'CLIENT_SECRET');\n\n// send\nnotificationapi.send({\n  // The ID of the notification you wish to send.\n  // You can find this value from the dashboard.\n  notificationId: 'order_tracking',\n  // The user to send the notification to.\n  user: {\n    id: 'spongebob.squarepants',\n    email: 'spongebob@squarepants.com' //required for email notifications\n  },\n  // mergeTags is to pass dynamic values into the notification design.\n  mergeTags: {\n    item: 'Krabby Patty Burger',\n    address: '124 Conch Street',\n    orderId: '1234567890'\n  }\n});\n"})})}),(0,t.jsx)(s.A,{value:"python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# import\nfrom notificationapi_python_server_sdk import (notificationapi)\n\n# init\nnotificationapi.init("CLIENT_ID", "CLIENT_SECRET")\n\n# send\nnotificationapi.send({\n        #The ID of the notification you wish to send. You can find this\n        #value from the dashboard.\n        "notificationId": "order_tracking",\n\n        # The user to send the notification to.\n        "user": {\n            "id": "spongebob.squarepants",\n            "email": "spongebob@squarepants.com", # required for email notifications\n        },\n        # mergeTags is to pass dynamic values into the notification design.\n        "mergeTags": {\n            "item": "Krabby Patty Burger",\n            "address": "124 Conch Street",\n            "orderId": "1234567890"\n        }\n    })\n'})})}),(0,t.jsx)(s.A,{value:"php",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'# import\nuse NotificationAPI\\NotificationAPI;\n\n# init\n$notificationapi = new NotificationAPI(\'CLIENT_ID\', \'CLIENT_SECRET\');\n\n# send\n$notificationapi->send([\n    #The ID of the notification you wish to send. You can find this\n    #value from the dashboard.\n    "notificationId" => "order_tracking",\n    # The user to send the notification to.\n    "user" => [\n        "id" => "spongebob.squarepants",\n        "email" => "spongebob@squarepants.com",   # required for email notifications\n    ],\n    # mergeTags is to pass dynamic values into the notification design.\n    "mergeTags" => [\n        "item" => "Krabby Patty Burger",\n        "address" => "124 Conch Street",\n        "orderId" => "1234567890"\n    ]\n]);\n'})})}),(0,t.jsx)(s.A,{value:"go",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\n// import\nimport (\n  notificationapi "github.com/notificationapi-com/notificationapi-go-server-sdk"\n  "encoding/json"\n)\n\nfunc main() {\n  // init\n  notificationapi.Init("CLIENT_ID", "CLIENT_SECRET")\n\n  //mergeTags is to pass dynamic values into the notification design.\n  mergeTags := make(map[string]interface{}) // Change to map[string]interface{}\n  mergeTags["item"] = "Krabby Patty Burger"\n  mergeTags["address"] = "124 Conch Street"\n  mergeTags["orderId"] = "1234567890"\n\n  notificationapi.Send(\n    notificationapi.SendRequest{\n      //The ID of the notification you wish to send. You can find this\n      //value from the dashboard.\n      NotificationId: "order_tracking",\n      //The user to send the notification to.\n      User: notificationapi.User{\n        Id:     "spongebob.squarepants",\n        Email:  "spongebob@squarepants.com",\n      },\n      MergeTags: mergeTags,\n    },\n  )\n}\n\n'})})}),(0,t.jsx)(s.A,{value:"csharp",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'//import\nusing NotificationApi.Server;\nusing NotificationApi.Server.Models;\n\n//initialize\nvar notificationApi = new NotificationApiServer("CLIENT_ID", "CLIENT_SECRET", false);\n\n//send\nvar user = new NotificationUser("spongebob.squarepants")\n{\n    Email = "spongebob@squarepants.com",\n    TelephoneNumber = "+15005550006"\n};\n\nvar mergeTags = new Dictionary<string, object>\n{\n    { "item", "Krabby Patty Burger" },\n    { "address", "124 Conch Street" },\n    { "orderId", "1234567890" }\n};\n\nawait notificationApi.Send(new SendNotificationData("order_tracking", user)\n{\n    MergeTags = mergeTags\n});\n'})})}),(0,t.jsx)(s.A,{value:"ruby",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# require:\nrequire './NotificationAPI'\n\n# init\nnotificationapi = NotificationAPI.new(\"CLIENT_ID\", \"CLIENT_SECRET\")\n\n# send\nnotificationapi.send({\n  #The ID of the notification you wish to send. You can find this\n  #value from the dashboard.\n  notificationId: 'order_tracking',\n  # The user to send the notification to.\n  user: {\n    id: 'spongebob.squarepants',\n    email: 'spongebob@squarepants.com', # required for email notifications\n  },\n  # mergeTags is to pass dynamic values into the notification design.\n  mergeTags: {\n    item: 'Krabby Patty Burger',\n    address: '124 Conch Street',\n    orderId: '1234567890'\n  }\n});\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can get your CLIENT_ID and CLIENT_SECRET from ",(0,t.jsx)(n.a,{href:"https://app.notificationapi.com/environments",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(n.p,{children:"You are now successfully sending notifications to any channel you wish. \ud83c\udf89"}),"\n",(0,t.jsx)(n.p,{children:"Let's do a few more things:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/quick-start/display-inapp-notifications",children:"\ud83d\udd14 Display In-App Notifications"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/quick-start/manage-preferences",children:"\u2699\ufe0f Manage User Notification Preferences"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/guides/mobile-push",children:"\ud83d\udcf1 Setup Mobile Push"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/guides/web-push",children:"\ud83c\udf10 Setup Web Push"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,i)=>{i.d(n,{A:()=>s});i(6540);var t=i(4164);const a={tabItem:"tabItem_Ymn6"};var o=i(4848);function s(e){let{children:n,hidden:i,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:i,children:n})}},1470:(e,n,i)=>{i.d(n,{A:()=>y});var t=i(6540),a=i(4164),o=i(3104),s=i(6347),r=i(205),c=i(7485),l=i(1682),d=i(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:a}}=e;return{value:n,label:i,attributes:t,default:a}}))}(i);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function h(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:i}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,c.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:i=!1,groupId:a}=e,o=p(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[l,u]=f({queryString:i,groupId:a}),[g,m]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Dv)(i);return[a,(0,t.useCallback)((e=>{i&&o.set(e)}),[i,o])]}({groupId:a}),b=(()=>{const e=l??g;return h({value:e,tabValues:o})?e:null})();(0,r.A)((()=>{b&&c(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=i(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(4848);function _(e){let{className:n,block:i,selectedValue:t,selectValue:s,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),d=e=>{const n=e.currentTarget,i=c.indexOf(n),a=r[i].value;a!==t&&(l(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;n=c[i]??c[0];break}case"ArrowLeft":{const i=c.indexOf(e.currentTarget)-1;n=c[i]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":i},n),children:r.map((e=>{let{value:n,label:i,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function j(e){let{lazy:n,children:i,selectedValue:o}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function x(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(_,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,v.jsx)(x,{...e,children:u(e.children)},String(n))}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(6540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);