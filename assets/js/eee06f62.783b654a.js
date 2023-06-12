"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[851],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>h});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(i),f=a,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||r;return i?n.createElement(h,o(o({ref:t},s),{},{components:i})):n.createElement(h,o({ref:t},s))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},9781:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const r=i.p+"assets/images/ios_request_auth-d74ee9a9d8824285c52092b0c4a3cf55.png",o={sidebar_position:3},l="iOS SDK (Front-End)",p={unversionedId:"reference/ios-sdk",id:"reference/ios-sdk",title:"iOS SDK (Front-End)",description:"The iOS SDK is used to recieve push notifications and handle device token synchronization with NotificationAPI.",source:"@site/docs/reference/ios-sdk.md",sourceDirName:"reference",slug:"/reference/ios-sdk",permalink:"/reference/ios-sdk",draft:!1,editUrl:"https://github.com/notificationapi-com/docs/edit/main/docs/reference/ios-sdk.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JS Client SDK (Front-End)",permalink:"/reference/js-client"},next:{title:"Android SDK (Front-End)",permalink:"/reference/android_sdk"}},c={},s=[{value:"Setup",id:"setup",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"NotificationApiAppDelegate",id:"notificationapiappdelegate",level:2},{value:"func notificationApi(apnTokenDidChange token: String)",id:"func-notificationapiapntokendidchange-token-string",level:3},{value:"Parameters",id:"parameters",level:4},{value:"func notificationApi(didClickOnBackgroundNotification info: AnyHashable : Any)",id:"func-notificationapididclickonbackgroundnotification-info-anyhashable--any",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"NotificationApi",id:"notificationapi",level:2},{value:"var shared: NotificationApi",id:"var-shared-notificationapi",level:3},{value:"func configure(withCredentials credentials: NotificationApiCredentials, withConfig config: NotificationApiConfig? = nil)",id:"func-configurewithcredentials-credentials-notificationapicredentials-withconfig-config-notificationapiconfig--nil",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"func requestAuthorization(completionHandler handler: @escaping (Bool, Error?) -&gt; Void)",id:"func-requestauthorizationcompletionhandler-handler-escaping-bool-error---void",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"func syncApn(token: String, completionHandler handler: @escaping (Error?) -&gt; Void)",id:"func-syncapntoken-string-completionhandler-handler-escaping-error---void",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"NotificationApiCredentials",id:"notificationapicredentials",level:2},{value:"func init(clientId: String, userId: String, hashedUserId: String? = nil)",id:"func-initclientid-string-userid-string-hasheduserid-string--nil",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"NotificationApiConfig",id:"notificationapiconfig",level:2},{value:"func init(baseUrl: String)",id:"func-initbaseurl-string",level:3},{value:"Parameters",id:"parameters-6",level:4}],d={toc:s},u="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ios-sdk-front-end"},"iOS SDK (Front-End)"),(0,a.kt)("p",null,"The iOS SDK is used to recieve ",(0,a.kt)("strong",{parentName:"p"},"push notifications")," and handle device token synchronization with NotificationAPI."),(0,a.kt)("p",null,"Supported environments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"iOS 13 and above")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"You can follow Apple's instructions for installing a package dependency ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app"},"here"),". "),(0,a.kt)("p",null,"The URL is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/notificationapi-com/notificationapi-ios-sdk.git")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"We highly recommend to extend from ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationApiAppDelegate.swift")," and use that class as your app's delegate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="Example AppDelegate"',title:'"Example','AppDelegate"':!0},'class AppDelegate: NotificationApiAppDelegate {\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {\n        NotificationApi.shared.configure(withCredentials: NotificationApiCredentials(clientId: "YOUR_CLIENT_ID", userId: "YOUR_USER_ID"))\n        \n        NotificationApi.shared.requestAuthorization { granted, _ in\n            print("Is authorized?: \\(granted)")\n        }        \n\n        return true\n    }\n}\n')),(0,a.kt)("p",null,"You must configure the SDK with your ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationAPI")," credentials. It is recommended to configure the SDK as early as possible. You must also request notification authorization from the user. "),(0,a.kt)("p",null,"You are now ready to recieve push notifications from NotificationAPI! \ud83c\udf89"),(0,a.kt)("h2",{id:"notificationapiappdelegate"},"NotificationApiAppDelegate"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationApiAppDelegate")," class handles device token synchronization with NotificationAPI and it is recommended to implement it as your own app delegate."),(0,a.kt)("h3",{id:"func-notificationapiapntokendidchange-token-string"},"func notificationApi(apnTokenDidChange token: String)"),(0,a.kt)("p",null,"This function is called whenever the device generates a new APN token. You can use this to sync the device token to services other than NotificationAPI."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"token"),(0,a.kt)("br",{parentName:"p"}),"\n","Type: String"),(0,a.kt)("p",null,"The device token."),(0,a.kt)("h3",{id:"func-notificationapididclickonbackgroundnotification-info-anyhashable--any"},"func notificationApi(didClickOnBackgroundNotification info: ","[AnyHashable : Any]",")"),(0,a.kt)("p",null,"This function is called when an user clicks on the push notification while it is in the background."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"info"),(0,a.kt)("br",{parentName:"p"}),"\n","Type: ","[AnyHashable : Any]"),(0,a.kt)("p",null,"A dictionary containing user info that was provided to the notification."),(0,a.kt)("h2",{id:"notificationapi"},"NotificationApi"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationApi")," class is the interface to NotificationAPI."),(0,a.kt)("h3",{id:"var-shared-notificationapi"},"var shared: NotificationApi"),(0,a.kt)("p",null,"The app's instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationApi"),". Always use this to retrieve an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationApi"),": do not instantiate ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationApi")," directly."),(0,a.kt)("h3",{id:"func-configurewithcredentials-credentials-notificationapicredentials-withconfig-config-notificationapiconfig--nil"},"func configure(withCredentials credentials: NotificationApiCredentials, withConfig config: NotificationApiConfig? = nil)"),(0,a.kt)("p",null,"Configures ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationApi")," to use your credentials. This should be invoked as early as possible (such as within ",(0,a.kt)("inlineCode",{parentName:"p"},"application(didFinishLaunchingWithOptions:)"),") to ensure that the user does not miss any push notifications."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"credentials")," (required)",(0,a.kt)("br",{parentName:"p"}),"\n","Type: NotificationApiCredentials"),(0,a.kt)("p",null,"Your NotificationAPI credentials. You can retrieve them from ",(0,a.kt)("a",{parentName:"p",href:"https://app.notificationapi.com/environments"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"config"),(0,a.kt)("br",{parentName:"p"}),"\n","Type: NotificationApiConfig"),(0,a.kt)("p",null,"Config object for the NotificationApi SDK. "),(0,a.kt)("h3",{id:"func-requestauthorizationcompletionhandler-handler-escaping-bool-error---void"},"func requestAuthorization(completionHandler handler: @escaping (Bool, Error?) -> Void)"),(0,a.kt)("p",null,"Requests the user's permission to recieve push notifications."),(0,a.kt)("img",{src:r}),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"handler")," (required)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"granted"),(0,a.kt)("br",{parentName:"p"}),"\n","Type: Boolean"),(0,a.kt)("p",null,"If the app is authorized to recieve notifications."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"error"),(0,a.kt)("br",{parentName:"p"}),"\n","Type: Error"),(0,a.kt)("p",null,"An error object that indicates that an error occurred while trying to request authorization."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There is also an async version that can be used like the following:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func NotificationApi.shared.requestAuthorization() async throws -> Bool\n"))),(0,a.kt)("h3",{id:"func-syncapntoken-string-completionhandler-handler-escaping-error---void"},"func syncApn(token: String, completionHandler handler: @escaping (Error?) -> Void)"),(0,a.kt)("p",null,"Sync the device token with NotificationAPI."),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"token")," (required)",(0,a.kt)("br",{parentName:"p"}),"\n","Type: String"),(0,a.kt)("p",null,"The device token. Can be retrieved via ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationApi(apnTokenDidChange:)"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"handler")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"error"),(0,a.kt)("br",{parentName:"p"}),"\n","Type: Error"),(0,a.kt)("p",null,"An error object that indicates that an error occurred while trying to request authorization."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There is also an async version that can be used like the following:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func syncApn(token: String) async throws\n"))),(0,a.kt)("h2",{id:"notificationapicredentials"},"NotificationApiCredentials"),(0,a.kt)("p",null,"An object containing credentials for NotificationAPI."),(0,a.kt)("h3",{id:"func-initclientid-string-userid-string-hasheduserid-string--nil"},"func init(clientId: String, userId: String, hashedUserId: String? = nil)"),(0,a.kt)("h4",{id:"parameters-5"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," (required)",(0,a.kt)("br",{parentName:"p"}),"\n","Type: String"),(0,a.kt)("p",null,"Your NotificationAPI client id."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"userId")," (required)",(0,a.kt)("br",{parentName:"p"}),"\n","Type: String"),(0,a.kt)("p",null,"The user id."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hashedUserId"),(0,a.kt)("br",{parentName:"p"}),"\n","Type: String"),(0,a.kt)("p",null,"The hashed user id."),(0,a.kt)("h2",{id:"notificationapiconfig"},"NotificationApiConfig"),(0,a.kt)("p",null,"A config object for NotificationAPI."),(0,a.kt)("h3",{id:"func-initbaseurl-string"},"func init(baseUrl: String)"),(0,a.kt)("h4",{id:"parameters-6"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," (required)",(0,a.kt)("br",{parentName:"p"}),"\n","Type: String"),(0,a.kt)("p",null,"The NotificationAPI API base url."))}f.isMDXComponent=!0}}]);