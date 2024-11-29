# 🌐 Setup Web Push

import webPushWorkflow from '@site/static/webPushWorkflow.png';
import macosNotifications from '@site/static/macosNotifications.png';
import windowsNotifications from '@site/static/windowsNotifications.png';
import notificationPopup from '@site/static/notificationPopup.png';
import notificationPreferences from '@site/static/notificationPreferences.png';
import webConsoleServiceWorker from '@site/static/webConsoleServiceWorker.png';
import notificationPreferencesReact from '@site/static/notificationPreferencesReact.png'
import notificationPreferencesPopupReact from '@site/static/notificationPreferencesPopupReact.png'

Web Push Notifications allow you to engage users directly through their web browsers, even when they're not on your website. This guide will walk you through setting up Web Push Notifications using NotificationAPI.

## Overview

To set up Web Push Notifications with NotificationAPI, you'll need to:

1. **Create a Notification Template** in the NotificationAPI Dashboard.
2. **Implement the Frontend SDK** on your website.
3. **Set Up the Service Worker** on your website.
4. **Give permission** on your browser.
5. **Send Notifications from the Backend** using NotificationAPI's Backend SDKs.

---

## Step-by-Step Implementation

**Step 1: Create a Notification Template**

1. Log in to the NotificationAPI Dashboard.
2. Create a new notification template.
3. Enable "Web Push" as a channel.
4. Customize the template to suit your needs.

**Step 2: Implement the Frontend SDK**

Integrate the NotificationAPI Frontend SDK into your web page to handle user subscriptions and display notifications.

**_Setup & Initialization_**:
Choose between installing via a package manager or including the SDK directly in your HTML.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="frameworks"
defaultValue="react"
values={[
{ label: 'React', value: 'react'},
{ label: 'Vanilla JS', value: 'vanilla' },
{ label: 'UMD', value: 'umd' }
]
}>

<TabItem value="react">
```shell title="1. Install"
npm install @notificationapi/react --legacy-peer-deps
# or
# yarn add @notificationapi/react
# or
# pnpm add @notificationapi/react
````

```jsx title="2. Import and use our provider in your top-level components/routers."
import { NotificationAPIProvider } from '@notificationapi/react';

<App>
  <NotificationAPIProvider
    clientId="abc123" // your clientId found on the dashboard
    userId="abcd-1234" // logged in userId
    // or use this instead
    // user={{
    //   id:  "abcd-1234", // logged in userId
    // }}
  >
    {/* your protected routes */}
  </NotificationAPIProvider>
</App>;
```

#### Parameters

| Parameter               | Type   | Description                                                                                                        |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| clientId\*              | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).   |
| userId\*                | string | The unique ID of the user in your system.                                                                          |
| hashedUserId            | string | Only used for [Secure Mode](/guides/secure-mode).                                                                  |
| customServiceWorkerPath | string | Path to your service worker file if it's not at the root (e.g., '/custom/path/notificationapi-service-worker.js'). |

<sup>\*</sup> Required parameters

For more information please checkout our [React SDK](/reference/react-sdk#setup) guide.

</TabItem>

<TabItem value="vanilla">

```shell title="1. Install"
npm install notificationapi-js-client-sdk
# yarn add notificationapi-js-client-sdk
# pnpm add notificationapi-js-client-sdk
```

```js title="2. Import"
import NotificationAPI from 'notificationapi-js-client-sdk';
import 'notificationapi-js-client-sdk/dist/styles.css';
```

```js title="3. Initialize"
const notificationapi = new NotificationAPI({
  clientId: 'YOUR_CLIENT_ID',
  userId: 'UNIQUE_USER_ID'
});
```

#### Parameters

| Parameter               | Type   | Description                                                                                                                                |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| clientId\*              | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                           |
| userId\*                | string | The unique ID of the user in your system.                                                                                                  |
| userIdHash              | string | Only used for [Secure Mode](/guides/secure-mode).                                                                                          |
| websocket               | string | Only if you want to specify your region, for example, if your account is in Canada region you must pass 'wss://ws.ca.notificationapi.com'. |
| language                | string | The language used for the pre-built UI widgets. Supported: `en-US`, `es-ES`, `fr-FR`, `it-IT`, `pt-BR`                                     |
| customServiceWorkerPath | string | Path to your service worker file if it's not at the root (e.g., '/custom/path/notificationapi-service-worker.js').                         |

<sup>\*</sup> Required parameters

For more information please checkout our [vanilla JS SDK](/reference/js-client#setup--initialization) guide.

</TabItem>

<TabItem value="umd">

```html title="1. Add to HTML, before </head>"
<script src="https://unpkg.com/notificationapi-js-client-sdk@4.4.0/dist/notificationapi-js-client-sdk.js"></script>
<link
  href="https://unpkg.com/notificationapi-js-client-sdk/dist/styles.css"
  rel="stylesheet"
/>
```

```js title="2. Initialize"
const notificationapi = new NotificationAPI({
  clientId: YOUR_CLIENT_ID,
  userId: UNIQUE_USER_ID
});
```

#### Parameters

| Parameter               | Type   | Description                                                                                                                                |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| clientId\*              | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                           |
| userId\*                | string | The unique ID of the user in your system.                                                                                                  |
| userIdHash              | string | Only used for [Secure Mode](/guides/secure-mode).                                                                                          |
| websocket               | string | Only if you want to specify your region, for example, if your account is in Canada region you must pass 'wss://ws.ca.notificationapi.com'. |
| language                | string | The language used for the pre-built UI widgets. Supported: `en-US`, `es-ES`, `fr-FR`, `it-IT`, `pt-BR`                                     |
| customServiceWorkerPath | string | Path to your service worker file if it's not at the root (e.g., '/custom/path/notificationapi-service-worker.js').                         |

<sup>\*</sup> Required parameters

For more information please checkout our [vanilla JS SDK](/reference/js-client#setup--initialization) guide.

</TabItem>
</Tabs>

**Step 3: Service Worker Setup**

The service worker manages background tasks and is essential for receiving push notifications.

1. **Download** <a href="/notificationapi-service-worker.js" download>notificationapi-service-worker.js</a>
2. **Place the file** in the `public` folder of your web application. It should be accessible at `https://yourdomain.com/notificationapi-service-worker.js`.
3. **Update the SDK Initialization**: If the service worker is not at the root, specify its path using the `customServiceWorkerPath` parameter during SDK initialization. For example, it is accessible at `https://yourdomain.com/service/notificationapi-service-worker.js`, please specify its path using the `customServiceWorkerPath` parameter during SDK initialization.

Code examples for **step 3**:
<Tabs
groupId="frameworks"
defaultValue="react"
values={[
{ label: 'React', value: 'react'},
{ label: 'Vanilla JS', value: 'vanilla' }
]}

> <TabItem value="react">

```jsx
<NotificationAPIProvider
  userId="YOUR_CLIENT_ID"
  clientId="UNIQUE_USER_ID"
  customServiceWorkerPath="service/notificationapi-service-worker.js"
>
  {/* Your components */}
</NotificationAPIProvider>
```

</TabItem>

<TabItem value="vanilla">
```js
const notificationapi = new NotificationAPI({
  clientId: 'YOUR_CLIENT_ID',
  userId: 'UNIQUE_USER_ID',
  customServiceWorkerPath: 'service/notificationapi-service-worker.js'
});
```
</TabItem>

</Tabs>

**Step 4: Give permission on your browser**

<Tabs
groupId="frameworks"
defaultValue="react"
values={[
{ label: 'React', value: 'react'},
{ label: 'Vanilla JS', value: 'vanilla' }
]}

>

<TabItem value="react">

**Option 1: Rely on NotificationAPI Pre-Built component (Recommended)** If you are using our react SDK to show in-app notifications. You can simply rely on our SDK to ask your users to opt in for web push notification.

1. Place the `<NotificationPopup />` component inside the `NotificationAPIProvider` component. For more information on the component please checkout our [React SDK](/reference/react-sdk#popup) guide.

<img src={notificationPreferencesReact} style={{borderRadius: 8, width: "100%", maxWidth: 600}}/>

2. Click on Notification Preferences. This would open a popup.

<img src={notificationPreferencesPopupReact} style={{borderRadius: 8, width: "100%", maxWidth: 600}} />

3. Click on Yes.

This would prompt the browser to ask for permission to show notifications. Alternatively, you can place the `<NotificationPreferencesPopup />` component inside the `NotificationAPIProvider` component. For more information on the component please checkout our [React SDK](/reference/react-sdk#preferences-popup) guide.

**Option 2: Using built-in method** You can place the code inside a component which is inside the `NotificationAPIProvider` provided by the React SDK and call the `askForWebPushPermission` function when the user interacts with your application.

```jsx
const notificiationapi = NotificationAPIProvider.useNotificationAPIContext();
const askForWebPushPermission = async () => {
  notificiationapi.setWebPushOptIn(true);
};
```

</TabItem>

<TabItem value="vanilla">

**Option 1: Rely on NotificationAPI Pre-Built component (Recommended)**
If you are using our front-end SDK to show in-app notifications. You can simply rely on our SDK to ask your users to opt in for web push notification.

1. Click on the bell notification icon, and it will ask the user whether they want to web push notifications.

<img src={notificationPopup} style={{borderRadius: 8, width: "100%", maxWidth: 600}} />

2. Click on <u>Yes</u>.

This would prompt the browser to ask for permission to show notifications.

3. If you do not see the message in the NotificationAPI, click on the bell notification icon and then click on the settings icon, which is there in the top right corner.

<img src={notificationPreferences} style={{borderRadius: 8, width: "100%", maxWidth: 600}} />

Click on <u>Click here</u>.

**Option 2: Using built-in method**
You can use the following method to ask your user to opt in for the web Push notifications:

```js
notificationapi.askForWebPushPermission();
```

</TabItem>

</ Tabs>

**Step 5: Send Notifications from the Backend**

With the frontend set up to receive notifications, you can now send them from your backend.

- **Integrate the Backend SDK**: Use NotificationAPI's Backend SDKs to send notifications programmatically.
- **[Send a Notification](/quick-start/send-a-notification)**: Follow the guide to start sending notifications.

---

## Schematic Diagram

Below is a detailed schematic that breaks down each step:

<img src={webPushWorkflow} style={{borderRadius: 8, width: "100%"}} />

**Steps Explained**:

1. **User Visits Website**: The user navigates to your website using their browser.
2. **Frontend SDK Initialization**: The website loads the Frontend SDK, which initializes and registers the service worker.
3. **Service Worker Registration**: The service worker is essential for handling background tasks and notifications.
4. **User Permission Prompt**: The SDK prompts the user to grant permission for notifications.
5. **User Subscribes**: Upon granting permission, the user is subscribed to receive notifications.
6. **Backend Sends Notification**: An event in your system triggers the backend to send a notification via NotificationAPI.
7. **Notification Dispatch**: NotificationAPI processes the request and dispatches the notification to the user's browser.
8. **Browser Receives Notification**: The service worker receives the notification in the background.
9. **Notification Displayed**: The browser displays the notification to the user, even if they're not on your website.

---

## Frequently Asked Questions (FAQs)

### Why I see this message: WEB_PUSH delivery is activated, but the user's webPushTokens is not provided. Discarding WEB_PUSH.?

It means that you have done **Step 1** and **Step 5** correctly, but you probably have not implemented our frontend SDK correctly (**Step 2**), or you have not set up the service worker (**Step 3**), or your user is not opted in for receiving web push notification (**Step 4**).

### Why can I not see the browser prompt in **Step 3**?

If you do not see the message in the NotificationAPI component, that browser has already opted in for that user.

**Reset Chrome on Desktop**

1. Click the "View Site Information" icon next to your URL in the Chrome browser.
2. Under "Notifications", click the Reset permission button.

**Reset Firefox on Desktop**

1. Click the "i" or "lock" icon beside your site URL.
2. Next to Receive Notifications under Permissions, select the "X" button next to Allowed

### How can I make sure if the Service Worker has been initialized properly?

##### Solution

1. Follow the **Step 3**

2. Open the built-in developer tools for the site (F12 on PC or fn + F12 on Mac), then go to Applications >> Service workers. If the service worker has been initialized, it would look something like this:

<img src={webConsoleServiceWorker} style={{borderRadius: 8, width: "100%", maxWidth: 600}} />

3. If <u>notificationapi-service-worker.js</u> (Service Worker) doesn't show up, that means the service worker is not there inside the public folder. Please make sure that it is placed inside the public folder. Or pass the address to the publicly available file using `customServiceWorkerPath`

### How to check Notification Settings on macOS and Windows

It's important to verify your notification settings at your operating system level as well to ensure proper functionality.

#### macOS

1. Go to System Preferences > Notifications.
2. Find your app (chrome, firefox, safari, etc...) in the list and ensure notifications are enabled.

<img src={macosNotifications} style={{borderRadius: 8, width: "100%", maxWidth: 600}} />

#### Windows

1. Open Settings > System > Notifications.
2. Ensure to enable Notifications for proper functionality.

<img src={windowsNotifications} style={{borderRadius: 8, width: "100%", maxWidth: 600}} />
