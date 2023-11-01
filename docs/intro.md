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

<div style={{display: 'flex', flexWrap: 'wrap', columnGap: 64, rowGap: 32, marginBottom: 32}}>
    <SupportedEnvironment logo="devicon-nodejs-plain" name="Node.js" path="" />
    <SupportedEnvironment logo="devicon-typescript-plain" name="Typescript" path="" />
    <SupportedEnvironment logo="devicon-python-plain" name="Python" path="" />
    <SupportedEnvironment logo="devicon-php-plain" name="PHP" path="" />
    <SupportedEnvironment logo="devicon-go-original-wordmark" name="Go" path="" />
    <SupportedEnvironment logo="devicon-csharp-plain" name="C#" path="" />
    <SupportedEnvironment logo="devicon-ruby-plain" name="Ruby" path="" />
</div>

#### Client-Side

<div style={{display: 'flex', flexWrap: 'wrap', columnGap: 64, rowGap: 32, marginBottom: 32}}>
    <SupportedEnvironment  logo="devicon-react-plain" name="React" path="" />
    <SupportedEnvironment  logo="devicon-nextjs-plain" name="Next.js" path="" />
    <SupportedEnvironment  logo="devicon-javascript-plain" name="JavaScript" path="" />
    <SupportedEnvironment  logo="devicon-angularjs-plain" name="Angular" path="" />
    <SupportedEnvironment  logo="devicon-vuejs-plain" name="Vue" path="" />
</div>

#### Mobile

<div style={{display: 'flex', flexWrap: 'wrap', columnGap: 64, rowGap: 32, marginBottom: 32}}>
    <SupportedEnvironment  logo="devicon-apple-plain" name="iOS" path="" />
    <SupportedEnvironment logo="devicon-android-plain" name="Android" path="" />
</div>

import SupportedEnvironment from '../src/SupportedEnvironment'
