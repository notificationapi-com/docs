---
slug: /
sidebar_position: 1
title: Home
---

# Welcome to NotificationAPI Docs

import css from 'devicon/devicon.min.css'

NotificationAPI is perhaps the fastest way to add product-to-user notifications to your software.

Let's skip the marketing fluff:

### Getting Started

[🚀 Send a notification ](quick-start/send-a-notification) <br/>
[🛎 In-app notifications in your front-end](quick-start/display-inapp-notifications) <br/>
[⚙️ Manage notification preferences](quick-start/manage-preferences) <br/>
[📄 How does it work?](quick-start/how-does-it-work)

### Need Help?

<a class="open-chat" href="#" onClick={() => {
if (window.HubSpotConversations) {
window.HubSpotConversations.widget.open();
} else {
alert(
'We think an adblocker is preventing our chat widget from loading. Please disable adblocker and refresh.'
);
}
}}>💬 Live Chat</a><br/>

[ 📧 Contact Form ](https://www.notificationapi.com/contact) <br/>
[ ❤️ Slack Community](https://join.slack.com/t/notificationapi-comm/shared_invite/zt-ygbwiyip-6eA~A8pxmhGZpk~B14BL7w)<br/>
[ 📞 Schedule a Video Call](https://calendly.com/notificationapi)

### Supported Environments

#### REST API

You can use our [REST APIs](reference/api).

#### Server-Side

<div style={{display: 'flex', gap: 64, marginBottom: 32}}>
    <SupportedEnvironment logo="devicon-nodejs-plain" name="nodejs" path="" />
    <SupportedEnvironment logo="devicon-typescript-plain" name="typescript" path="" />
    <SupportedEnvironment logo="devicon-python-plain" name="python" path="" />
    <SupportedEnvironment logo="devicon-php-plain" name="php" path="" />
    <SupportedEnvironment logo="devicon-go-original-wordmark" name="original" path="" />
    <SupportedEnvironment logo="devicon-csharp-plain" name="csharp" path="" />
    <SupportedEnvironment logo="devicon-ruby-plain" name="ruby" path="" />
</div>

#### Client-Side

<div style={{display: 'flex', gap: 64, marginBottom: 32}}>
    <SupportedEnvironment  logo="devicon-react-plain" name="react" path="" />
    <SupportedEnvironment  logo="devicon-javascript-plain" name="javascript" path="" />
    <SupportedEnvironment  logo="devicon-angularjs-plain" name="angularjs" path="" />
    <SupportedEnvironment  logo="devicon-vuejs-plain" name="vuejs" path="" />
    <SupportedEnvironment  logo="devicon-nextjs-plain" name="nextjs" path="" />
</div>

#### Mobile

<div style={{display: 'flex', gap: 64, marginBottom: 32}}>
    <SupportedEnvironment  logo="devicon-apple-plain" name="apple" path="" />
    <SupportedEnvironment logo="devicon-android-plain" name="android" path="" />
</div>

import SupportedEnvironment from '../src/SupportedEnvironment'
