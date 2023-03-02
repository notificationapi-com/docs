---
sidebar_position: 2
---

# JS Client SDK (Front-End)

The client-side SDK is mainly used for displaying **In-App Notifications** and allowing users to see and change their **Notification Preferences**.

Supported environments:

- Vanilla JavaScript
- React
- Vue
- Angular
- Next
- Remix
- Most JS Frameworks, including those with server-side rendering, are supported. If you don't see your framework here, just ping us on support and we will add it to the docs!

## Setup

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="js-package-manager"
defaultValue="npm/yarn"
values={[
{ label: 'npm/yarn', value: 'npm/yarn' },
{ label: '<script>', value: '<script>' }
]
}>
<TabItem value="npm/yarn">

```shell title="1. Install"
npm install notificationapi-js-client-sdk
yarn add notificationapi-js-client-sdk
```

```js title="2. Import"
import NotificationAPI from 'notificationapi-js-client-sdk';
import 'notificationapi-js-client-sdk/dist/styles.css';
```

</TabItem>
<TabItem value="<script>">

```html
<script src="https://unpkg.com/notificationapi-js-client-sdk/dist/notificationapi-js-client-sdk.js"></script>
<link
  href="https://unpkg.com/notificationapi-js-client-sdk/dist/styles.css"
  rel="stylesheet"
/>
```

</TabItem>
</Tabs>

## Your First Example

## Initialization

The example below creates a NotificationAPI client that connects to our servers through a WebSocket connection from your front-end. It does not show anything yet.

```js title="Example"
const notificationapi = new NotificationAPI({
  clientId: YOUR_CLIENT_ID,
  userId: UNIQUE_USER_ID
});
```

:::info

Initializing the library more than once is safe, but will generate unnecessary resources and network calls.

React users should follow the [React section](#reactjs).

:::

**Parameters:**

`clientId` (required)  
Type: string

Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).

`userId` (required)  
Type: string

The unique ID of the user in your system.

`userIdHash`
Type: string

Only used for [Secure Mode](#secure-mode).

`websocket`
Type: string

Only if you want to specify your region, for example, if your account is in Canada region you must pass 'wss://ws.ca.notificationapi.com'.

## getUserPreferences()

Allows you to access the raw data of the user's notification preferences from the front-end.

Please note that unless you require extreme customization, you can rely on [showUserPreferences()](#showuserpreferences) function to display and edit notification preferences without any additional code.

```js title="Example"
notificationapi.getUserPreferences().then((prefs) => {
  console.log(prefs);
});

/* prints:
[
  {
      "notificationId": "new_order",
      "title": "New Order",
      "settings": [
          {
              "channel": "SMS",
              "state": false,
              "channelName": "SMS"
          },
          {
              "channel": "EMAIL",
              "state": true,
              "channelName": "Email"
          }
      ],
      "subNotificationPreferences": []
  },
  ... more items for all notifications
] */
```

**Returns**

```ts
getUserPreferences() : Promise<Preference[]>

interface Preference {
  notificationId: string;
  title: string; // the friendly title of the notification
  settings: {
    channel: string; // EMAIL, INAPP_WEB, SMS, CALL
    channelName: string; // channel friendly name: Email, In-App, SMS, Call
    state: boolean; // indicating the preference
  }[];
  subNotificationPreferences: Preference[]; // when using subNotificationIds, it will contain a similar item for each subNotificationId
}
```

## patchUserPreference()

Allows you to programmatically change the user's notification preferences from the front-end.

Please note that unless you require extreme customization, you can rely on [showUserPreferences()](#showuserpreferences) function to display and edit notification preferences without any additional code.

```js title="Example"
notificationapi.patchUserPreference('myNotificationId', 'EMAIL', false);
```

**Parameters**

`notificationId` (required)  
Type: string

The ID of the notification in NotificationAPI.

`channel` (required)  
Type: string

The channel for which you wish to change the setting.  
Accepted values: `EMAIL`, `INAPP_WEB`, `SMS`, `CALL`.

`state` (required)  
Type: boolean

The preference of the user. If set to false, the user will no longer receive the specified notification on the specified channel, until the state is set to true again through the API or the preferences popup.

`subNotificationId` (optional)  
Type: string

For setting the preference of a subNotificationId within a notification.

## showInApp()

import InAppGif from '@site/static/inapp.gif';

<img src={InAppGif} />

This function adds the in-app notifications (the bell icon along with all its functionality) to your app.

```js title="Example"
notificationapi.showInApp({
  root: 'parentDivID'
});
```

**Parameters**

##### `root` (required)

Type: string

The ID of the HTML element that will contain the NotificationAPI widget. Ideally an empty div.

##### `inline`

Type: boolean

Default: false

By default, the showInApp() function will display a 🔔 button. The in-app notifications are displayed in a popup when the button is clicked. With inline set to `true`, the in-app notifications are displayed in the `root` element without the popup.

import inline from '@site/static/inline.png';

Preview:
<img src={inline} width="400" />

##### `markAsReadMode`

Type: string (JS), MarkAsReadModes enum (TS)

Default: AUTOMATIC

By default, in-app notifications are set to read when they are displayed to the user and the unread notification count is reset to 0. Switching to the `MANUAL` mode will not set notifications to read on display. Instead, the user can set notifications to read using an overall "Mark All As Read" button and a "Mark as read" for each notification.

Valid string options: AUTOMATIC, MANUAL

import manualread from '@site/static/manualread.gif';

Preview:
<img src={manualread} width="400" />

##### `popupPosition`

Type: string (JS), PopupPosition enum (TS)

Default: rightBottom

The position of the notifications popup relative to the button.

Valid string options: topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom.

##### `paginated`

Type: boolean

Default: false

By default, the in-app notifications are displayed in endless scrolling mode. Setting this field to `true` will show in-app notifications in paginated mode with controls to change pages.

import paginated from '@site/static/paginated.gif';

Preview:
<img src={paginated} width="400" />

##### `pageSize`

Type: number

Default: 5

The number of in-app notifications per page. Only valid for `paginated` mode.

## showUserPreferences()

User preferences is accessible from the in-app popup (similar to the gif below). However, you may use this function to programmatically open the user preferences from your code.

import UserPref from '@site/static/userpref.gif';

<img src={UserPref} />

```js title="Example"
notificationapi.showUserPreferences();
```

**Parameters**

`parent`  
Type: string  
Default: undefined

When undefined (default behavior), the user preferences will show as a modal. Given this parameter, the user preferences will render in inline mode inside an existing HTML element on your page. You can pass the ID of the parent element to this parameter. Ideally, use an empty div for the parent.

## Secure Mode

Front-end code is observable and mutable by end-users. Malicious actors can take advantage of this. For example, someone can impersonate another user on your website's chat tool or NotificationAPI by passing different parameters to the library. Secure Mode makes our front-end SDK safe against this threat.

**Step by Step Guide**

1. Back-end: hash the userId using your client secret. Pass the hashed userId to your front-end. For example, from an API right after the page loads.

<Tabs
defaultValue="Node.js"
values={[
{ label: 'Node.js', value: 'Node.js', },
{ label: 'Python', value: 'Python' }
]
}>
<TabItem value="Node.js">

```jsx
const hashedUserId = require('crypto') // crypto is part of nodejs
  .createHmac('sha256', 'YOUR_CLIENT_SECRET')
  .update('ACTUAL_USER_ID')
  .digest('base64');
```

</TabItem>
<TabItem value="Python">

```py
import hmac
import hashlib
import base64
hashedUserId = base64.b64encode(hmac.new( 'YOUR_CLIENT_SECRET'.encode('utf-8'),
            'ACTUAL_USER_ID'.encode('utf-8'),
             hashlib.sha256).digest())
```

</TabItem>
</Tabs>
2. Front-end: pass the hashed userId to the NotificationAPI SDK:

```jsx
new NotificationAPI({
  root: '...',
  clientId: '...',
  userId: 'ACTUAL_USER_ID',
  userIdHash: 'HASHED_USER_ID'
});
```

3. Enable secure mode in your account settings. When our SDK starts, it sends both the userId and hashed userId to our servers and we compare the values to ensure the userId and its hash match, indicating userId has not been tampered.

## Framework Specific Configurations

### React.js

React's state management and re-rendering causes this widget to be destroyed and re-initialized with every state change. To avoid this issue, place the initialization and the root element in a "memo"-ized React component. Example:

<Tabs
defaultValue="NotificationAPIComponent.js"
values={[
{ label: 'NotificationAPIComponent.js', value: 'NotificationAPIComponent.js', },
{ label: 'App.js', value: 'App.js' }
]
}>
<TabItem value="NotificationAPIComponent.js">

```jsx
import NotificationAPI from 'notificationapi-js-client-sdk';
import 'notificationapi-js-client-sdk/dist/styles.css';
import { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';
import React, { memo, useEffect, useRef } from 'react';

const NotificationAPIComponent = memo((props) => {
  const containerRef = useRef();

  useEffect(() => {
    const notificationapi = new NotificationAPI({
      clientId: YOUR_CLIENT_ID,
      userId: props.userId
    });
    notificationapi.showInApp({
      root: 'container',
      popupPosition: PopupPosition.BottomLeft
    });

    // Store a reference to the container DOM element.
    const container = containerRef.current;
    // This effect can run multiple times due to the `userId` changing
    // or Hot Module Replacement (HMR). Ensure the container is cleared
    // as `showInApp` will append to the container instead of overwriting it.
    return () => {
      container.innerHTML = '';
    };
  }, [props.userId]);

  return <div id="container" ref={containerRef}></div>;
});

export default NotificationAPIComponent;
```

</TabItem>
<TabItem value="App.js">

```jsx
import NotificationAPIComponent from './NotificationAPIComponent';

function App() {
  return (
    <div>
      <NotificationAPIComponent userId="USER_ID" />
      <div> ... </div>
    </div>
  );
}

export default App;
```

</TabItem>
</Tabs>

### Vue.js

```html
<script setup>
  import NotificationAPI from 'notificationapi-js-client-sdk';
  import 'notificationapi-js-client-sdk/dist/styles.css';
  import { onMounted } from 'vue';
  onMounted(() => {
    const notificationapi = new NotificationAPI({
      clientId: 'CLIENT_ID',
      userId: 'USER_ID'
    });

    notificationapi.showInApp({
      root: 'myNotifications'
    });
  });
</script>

<template>
  <div>Hello World!</div>
  <div id="myNotifications"></div>
</template>
```

### Remix

1. Add the following to your remix.config.js: [what is this?](https://remix.run/docs/en/1.13.0/pages/gotchas#importing-esm-packages)

```js
serverDependenciesToBundle: ['notificationapi-js-client-sdk'];
```

2. Add our CSS styles to your root component:

```js
import NotificationAPICSS from "notificationapi-js-client-sdk/dist/styles.css";

export const links: LinksFunction = () => {
  return [
    ...,
    { rel: "stylesheet", href: NotificationAPICSS },
  ];
};
```

3. Import and use our library normally, similar to React. Example:

```jsx
import NotificationAPIClient from 'notificationapi-js-client-sdk';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    const notificationapi = new NotificationAPIClient({
      clientId: 'CLIENT_ID',
      userId: 'USER_ID'
    });

    notificationapi.showInApp({
      root: 'bell-container'
    });
  }, []);

  return (
    <main>
      <div id="bell-container"></div>
    </main>
  );
}
```
