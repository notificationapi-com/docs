---
sidebar_position: 3
---

# Vanilla JS (Front-End)

The client-side SDK is mainly used for displaying **In-App Notifications** and allowing users to see and change their **Notification Preferences**.

Supported environments:

- Vanilla JavaScript
- React
- Vue
- Angular
- Next
- Remix
- Most JS Frameworks, including those with server-side rendering, are supported. If you don't see your framework here, just ping us on support and we will add it to the docs!

## Setup & Initialization

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="package-manager"
defaultValue="manager"
values={[
{ label: 'Package Manager', value: 'manager' },
{ label: 'UMD', value: 'umd' }
]
}>
<TabItem value="manager">

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

</TabItem>
</Tabs>

#### Parameters

| Parameter               | Type   | Description                                                                                                                                |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| clientId\*              | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                           |
| userId\*                | string | The unique ID of the user in your system.                                                                                                  |
| userIdHash              | string | Only used for [Secure Mode](/guides/secure-mode).                                                                                          |
| websocket               | string | Only if you want to specify your region, for example, if your account is in Canada region you must pass 'wss://ws.ca.notificationapi.com'. |
| language                | string | The language used for the pre-built UI widgets. Supported: `en-US`, `es-ES`, `fr-FR`, `it-IT`, `pt-BR`                                     |
| customServiceWorkerPath | string | Path to your service worker file if it's not at the root (e.g., '/custom/path/notificationapi-service-worker.js').                         |

## Framework Specific Gotcha's

<Tabs
groupId="frontend-language"
defaultValue="react"
values={[
{ label: 'React', value: 'react' },
{ label: 'Remix', value: 'remix' },
{ label: 'Vue', value: 'vue' },
{ label: 'Nuxt3', value: 'nuxt3' },
{ label: 'Angular', value: 'angular' },
{ label: `Next.js`, value: 'next' }
]
}>
<TabItem value="react">

To prevent unncessary rerenders and reinitialization of the SDK, use the `memo` function:

```jsx
import NotificationAPI from 'notificationapi-js-client-sdk';
import 'notificationapi-js-client-sdk/dist/styles.css';
import { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';
import { memo, useEffect } from 'react';

const NotificationAPIContainer = memo((props) => {
  useEffect(() => {
    const notificationapi = new NotificationAPI({
      clientId: 'CLIENT_ID',
      userId: props.userId
    });
    notificationapi.showInApp({
      root: 'CONTAINER_DIV_ID',
      popupPosition: PopupPosition.BottomLeft
    });
  }, [props.userId]);

  return <div id="CONTAINER_DIV_ID"></div>;
});
export default NotificationAPIContainer;
```

</TabItem>

<TabItem value="next">

The `'user client'` is necessary to ensure that the code is executed on the client side. Also, to prevent unncessary rerenders and reinitialization of the SDK, use the `memo` function.

```jsx
'use client';

import 'notificationapi-js-client-sdk/dist/styles.css';
import { memo, useEffect } from 'react';
const NotificationAPIComponent = memo(() => {
  useEffect(() => {
    const loadNotificationAPI = async () => {
      const NotificationAPI = (await import('notificationapi-js-client-sdk'))
        .default;
      const notificationapi = new NotificationAPI({
        clientId: 'CLIENT_ID',
        userId: 'USERS_ID'
      });
      notificationapi.showInApp({
        root: 'CONTAINER_DIV_ID'
      });
    };

    loadNotificationAPI();
  }, []);

  return <div id="CONTAINER_DIV_ID"></div>;
});

NotificationAPIComponent.displayName = 'NotificationAPIComponent';

export default NotificationAPIComponent;
```

</TabItem>

<TabItem value="remix">

a) Add the following to your remix.config.js:

```js
serverDependenciesToBundle: ['notificationapi-js-client-sdk'];

// for more info, read: https://remix.run/docs/en/main/guides/gotchas#importing-esm-packages
```

b) Add our CSS styles to your root component:

```js
import NotificationAPICSS from 'notificationapi-js-client-sdk/dist/styles.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: NotificationAPICSS }
    // and the other links ...
  ];
};
```

c) Import and use our library:

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

</TabItem>
<TabItem value="vue">

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

</TabItem>
<TabItem value="nuxt3">

```html
<template>
  <div ref="containerRef" id="container"></div>
</template>

<script>
  import NotificationAPI from 'notificationapi-js-client-sdk';
  import { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';
  import 'notificationapi-js-client-sdk/dist/styles.css';
  export default {
    name: 'NotificationAPIComponent',
    mounted() {
      this.notificationapi = new NotificationAPI({
        clientId: 'CLIENT_ID',
        userId: 'USER_ID'
      });

      this.notificationapi.showInApp({
        root: 'container', // Use the ref as the root element
        popupPosition: PopupPosition.BottomRight
      });
    }
  };
</script>
<style scoped>
  #container {
    text-align: center;
  }
</style>
```

</TabItem>
<TabItem value="angular">
a) Add our CSS to your styles.scss file:

```js
@import 'node_modules/notificationapi-js-client-sdk/dist/styles.css'
```

b) Import and use our library:

```jsx
import NotificationAPI from 'notificationapi-js-client-sdk';
import {PopupPosition} from 'notificationapi-js-client-sdk/lib/interfaces';

ngOnInit() {
  const notificationapi = new NotificationAPI({
      userId: "USERS_ID",
      clientId: "CLIENT_ID",
    });
  notificationapi.showInApp({
    root: 'bell-container', // root element containing the button
    popupPosition: PopupPosition.BottomLeft
  });
}

// This goes inside the template
<div id="bell-container"></div>
```

</TabItem>
</Tabs>

## Service Worker Setup

_Only required for Web Push notifications:_

Download [notificationapi-service-worker.js](../../assets/files/notificationapi-service-worker.js) and place it in the "public" folder of your web application.

## getUserPreferences

Returns the user's notification preferences.

```js
notificationapi.getUserPreferences().then((prefs) => {
  console.log(prefs);
});
```

#### Response Example

```json
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
    ]
  }
]
```

## identify

Stores the end-user information for a given user.

By using this function, you can omit the contact information when using `send()`. NotificationAPI will automatically lookup the user's stored email or phone number and use it for sending the notification. Recommended to call `identify()` every time the user signs, or upon signup and changing of the user contact info.

```js
notificationapi.identify({
  id: 'testId',
  email: 'spongebob@squarepants.com'
});
```

## patchUserPreference

Allows you update the user's notification preferences.

```js
notificationapi.patchUserPreference('order_tracking', 'EMAIL', false);
```

**Parameters**

| Parameter         | Type    | Description                                                                                                                                                                                                      |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| notificationId\*  | string  | The ID of the notification in NotificationAPI.                                                                                                                                                                   |
| channel\*         | string  | The channel for which you wish to change the setting. Accepted values: <br/>`EMAIL`, `INAPP_WEB`, `SMS`, `CALL`, `PUSH`, `WEB_PUSH`                                                                              |
| state\*           | boolean | The preference of the user. If set to false, the user will no longer receive the specified notification on the specified channel, until the state is set to true again through the API or the preferences popup. |
| subNotificationId | string  | Only when using [subNotificationIds](/features/subnotifications)                                                                                                                                                 |

## showInApp

This function renders the in-app notifications widget on your front-end.

Complete guide: [In-App Notifications Widget](/components/inapp)

```js
notificationapi.showInApp({
  root: 'CONTAINER_DIV_ID'
});
```

#### Parameters

| Parameter      | Type                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| root\*         | string                                 | The ID of the HTML element that will contain the in-app widget. Ideally an empty div.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| inline         | boolean                                | Default: false. By default, the showInApp() function will display a 🔔 button. The in-app notifications are displayed in a popup when the button is clicked. With inline set to `true`, the in-app notifications are displayed in the `root` element without the popup.                                                                                                                                                                                                                                                                                                                                 |
| markAsReadMode | string (JS), MarkAsReadModes enum (TS) | Default: AUTOMATIC. In AUTOMATIC mode, in-app notifications are set to read when they are displayed to the user and the unread notification count is reset to 0. Switching to the `MANUAL` mode will not set notifications to read on display. Instead, the user can set notifications to read using an overall "Mark All As Read" button, or by using the individual "Mark as read" on each notification. The `MANUAL_AND_CLICK` mode works similar to `MANUAL` mode, but also sets notifications to read when user clicks the notification. Valid string options: AUTOMATIC, MANUAL, MANUAL_AND_CLICK |
| popupPosition  | string (JS), PopupPosition enum (TS)   | Default: rightBottom. The position of the notifications popup relative to the button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| paginated      | boolean                                | Default: false. By default, the in-app notifications are displayed in endless scrolling mode. Setting this field to `true` will show in-app notifications in paginated mode with controls to change pages.                                                                                                                                                                                                                                                                                                                                                                                              |
| pageSize       | number                                 | Default: 5. The number of in-app notifications per page. Only valid for `paginated` mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## showUserPreferences

This function renders the user preferences widget on your front-end.

Complete guide: [User Preferences Widget](/components/user-preferences)

```js
notificationapi.showUserPreferences();
```

#### Parameters

| Parameter | Type   | Description                                                                                                                                                                                                                                                                                              |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parent    | string | When undefined (default behavior), the user preferences will show as a modal. Given this parameter, the user preferences will render in inline mode inside an existing HTML element on your page. You can pass the ID of the parent element to this parameter. Ideally, use an empty div for the parent. |

#### Parameters

| Parameter | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| id\*      | string | The unique ID of the user in your system.                    |
| email     | string | The email of the user.                                       |
| phone     | string | The phone number of the user. Expected format: +15554443333. |

## Frequently Asked Questions (FAQs)

### Why Can I Not Send Notifications from a Front-end SDK?

NotificationAPI back-end SDKs require your `clientId` and `clientSecret` keys that are unique to your account. If anyone else obtained your keys then they would be able to edit or delete your notifications, and be able to send requests to NotificationAPI from your account. This is a security risk to you and your clients.

To better protect you, the NotificationAPI front-end SDKs do not allow _sending_ notifications: they only allow _receiving_ notifications. If you require sending notifications from your front-end, it is recommended to use a NotificationAPI back-end SDK on your back-end and expose an API for your front-end.
