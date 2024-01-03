"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},i="\ud83c\udf81 Dynamic Parameters (Merge Tags)",o={unversionedId:"features/mergetags",id:"features/mergetags",title:"\ud83c\udf81 Dynamic Parameters (Merge Tags)",description:"Merge tags are values that cannot be hard-coded into notification designs and must be passed in programmatically from your code. For examples:",source:"@site/docs/features/mergetags.md",sourceDirName:"features",slug:"/features/mergetags",permalink:"/features/mergetags",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Logs",permalink:"/features/logs"},next:{title:"Sub Notifications",permalink:"/features/subnotifications"}},s={},p=[{value:"Support",id:"support",level:2},{value:"Passing the values",id:"passing-the-values",level:2},{value:"Placing the merge tags in templates",id:"placing-the-merge-tags-in-templates",level:2},{value:"Filters",id:"filters",level:2},{value:"Conditional Logic (if, else)",id:"conditional-logic-if-else",level:2},{value:"Supported Operators",id:"supported-operators",level:3},{value:"Loops (for)",id:"loops-for",level:2},{value:"Complete Documentation",id:"complete-documentation",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-dynamic-parameters-merge-tags"},"\ud83c\udf81 Dynamic Parameters (Merge Tags)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merge tags")," are values that cannot be hard-coded into notification designs and must be passed in programmatically from your code. For examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Hello {{firstName}}")),(0,n.kt)("li",{parentName:"ul"},"A button's URL: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://dashboard.com/{{org.id}}")),(0,n.kt)("li",{parentName:"ul"},"A user photo: ",(0,n.kt)("inlineCode",{parentName:"li"},"/imgs/{{user.imagePath}}.png")),(0,n.kt)("li",{parentName:"ul"},"Or even logic: ",(0,n.kt)("inlineCode",{parentName:"li"},"Hello{%if user.firstName %} {{user.firstName}}{%endif%}!"))),(0,n.kt)("h2",{id:"support"},"Support"),(0,n.kt)("p",null,"You can use merge tags almost everywhere:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Email Subject Line"),(0,n.kt)("li",{parentName:"ul"},"Email Content: Text, Button Link, Image Link, ..."),(0,n.kt)("li",{parentName:"ul"},"All fields of In-App, SMS, Call, Mobile Push and Web Push")),(0,n.kt)("h2",{id:"passing-the-values"},"Passing the values"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"mergeTags")," fields in the SDKs or APIs to pass in dynamic data. You can even pass in very complex objects and arrays."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"notificationapi.send({\n  ...,\n  mergeTags: {\n    item: 'Krabby Patty Burger',\n    address: '124 Conch Street',\n    orderId: '1234567890'\n  }\n);\n")),(0,n.kt)("h2",{id:"placing-the-merge-tags-in-templates"},"Placing the merge tags in templates"),(0,n.kt)("p",null,"In any of the template editors, use ",(0,n.kt)("inlineCode",{parentName:"p"},"{{")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"}}")," to place the merge tag. For example, when editing an email, you can type:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Hello {{ firstName }}! You have a new alert: {{ alerts","[0]",".title }}")),(0,n.kt)("h2",{id:"filters"},"Filters"),(0,n.kt)("p",null,"You can use filters to format the data passed. For example, you can use the following snippet to capitalize the firstName: ",(0,n.kt)("inlineCode",{parentName:"p"},"{{ firstName | capitalize }}")),(0,n.kt)("p",null,"You can also chain filters together: ",(0,n.kt)("inlineCode",{parentName:"p"},"{{ firstName | capitalize | strip }}"),"."),(0,n.kt)("p",null,"Some of the most valuable filters are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date"),": Useful for formatting dates and times. ",(0,n.kt)("a",{parentName:"li",href:"https://liquidjs.com/filters/date.html"},"reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"capitalize"),": Capitalizes the first letter of a string. ",(0,n.kt)("a",{parentName:"li",href:"https://liquidjs.com/filters/capitalize.html"},"reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"downcase"),": Converts a string to lowercase. ",(0,n.kt)("a",{parentName:"li",href:"https://liquidjs.com/filters/downcase.html"},"reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"upcase"),": Converts a string to uppercase. ",(0,n.kt)("a",{parentName:"li",href:"https://liquidjs.com/filters/upcase.html"},"reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"replace"),": Replaces all occurrences of a substring with another substring. ",(0,n.kt)("a",{parentName:"li",href:"https://liquidjs.com/filters/replace.html"},"reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"truncate"),": Truncates a string to a specified length. ",(0,n.kt)("a",{parentName:"li",href:"https://liquidjs.com/filters/truncate.html"},"reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"size"),": Returns the number of items in an array or characters in a string. ",(0,n.kt)("a",{parentName:"li",href:"https://liquidjs.com/filters/size.html"},"reference"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://liquidjs.com/filters/overview.html"},"List of all filters and their references")),(0,n.kt)("h2",{id:"conditional-logic-if-else"},"Conditional Logic (if, else)"),(0,n.kt)("p",null,"You can use conditional logic to show or hide content based on the data passed in."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Template Editor"',title:'"Template','Editor"':!0},"{% if firstName %}\nHello {{firstName}}!\n{% else %}\nHello there!\n{% endif %}\n")),(0,n.kt)("h3",{id:"supported-operators"},"Supported Operators"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Comparison: ==, !=, , <, >=, <="),(0,n.kt)("li",{parentName:"ul"},"Logic: ",(0,n.kt)("inlineCode",{parentName:"li"},"and"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"or"))),(0,n.kt)("p",null,"A more complex example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Template Editor"',title:'"Template','Editor"':!0},"{% if alerts and alerts.size > 1 %}\nYou have {{alerts.size}} new alerts!\n{% elseif alerts and alerts.size == 1 %}\nYou have a new alert!\n{% else %}\nYou have no new alerts.\n{% endif %}\n")),(0,n.kt)("p",null,"You can also use switch/case style conditions. ",(0,n.kt)("a",{parentName:"p",href:"https://liquidjs.com/tags/case.html"},"reference")),(0,n.kt)("h2",{id:"loops-for"},"Loops (for)"),(0,n.kt)("p",null,"You can use loops to repeat words or even sections of the templates:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Template Editor"',title:'"Template','Editor"':!0},"{% for alert in alerts %}\nAlert: {{alert.title}}\nURL: https://myapp.com/alerts/{{alert.id}}\n{% endfor %}\n")),(0,n.kt)("p",null,"Here are ",(0,n.kt)("a",{parentName:"p",href:"https://liquidjs.com/tags/for.html"},"more complex examples")," with else, break and continue."),(0,n.kt)("h2",{id:"complete-documentation"},"Complete Documentation"),(0,n.kt)("p",null,"We have built our templating engine based on Shopify's ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.github.io/liquid/"},"Liquid templating engine"),", so you can use the same syntax and features."))}c.isMDXComponent=!0}}]);