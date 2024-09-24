---
sidebar_position: 2
---

# 🔔 Display in-app notifications

## Overview

In-app notifications refer to notifications inside your front-end, for example, inside a bell button 🔔

We provide an <strong>in-app notification widget</strong> compatible with most front-end frameworks that works out-of-the-box. It even maintains a live connection to our servers to display new incoming notifications. And, it's fully customizable:

- Styles and icons
- Popup mode and full page mode
- Different mark-as-read behavior
- and more ...

import InAppPNG from '@site/static/inapp.png';

<div style={{display: "flex", justifyContent: "start"}}>
  <img src={InAppPNG} style={{maxWidth: 500, borderRadius: 8, width: "100%"}} />
</div>

## Playground

[You can see and modify the code here on our in-app playground](../features/mergetags#playground).

## Step 1: Install the Front-End SDK

Different from our back-end npm package.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="js-package-manager"
defaultValue="NPM"
values={[
{ label: 'NPM', value: 'NPM' },
{ label: '<script>', value: 'script' }
]
}>
<TabItem value="NPM">

```bash
npm install notificationapi-js-client-sdk
# yarn add notificationapi-js-client-sdk
# pnpm add notificationapi-js-client-sdk
```

</TabItem>
<TabItem value="script">

```html
<script src="https://unpkg.com/notificationapi-js-client-sdk@4.4.0/dist/notificationapi-js-client-sdk.js"></script>
```

</TabItem>
</Tabs>

## Step 2: Render the In-App Widget

The example shows the NotificationAPI widget in your front-end. It will automatically pull the in-app notifications from our servers for the given userId and keeps a live connection to receive any new notifications. The widget is placed in the container div specified by ID.

<Tabs
groupId="frontend-language"
defaultValue="react"
values={[
{ label: 'React', value: 'react' },
{ label: 'Next.js', value: 'next' },
{ label: 'Remix', value: 'remix' },
{ label: 'Vue', value: 'vue' },
{ label: 'Angular', value: 'angular' },
{ label: 'JavaScript', value: 'js' }
]
}>
<TabItem value="react">

Create the following component and use it anywhere in your app:

```jsx
import NotificationAPI from 'notificationapi-js-client-sdk';
import 'notificationapi-js-client-sdk/dist/styles.css';
import { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';
import { memo, useEffect } from 'react';

const NotificationAPIComponent = memo((props) => {
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
export default NotificationAPIComponent;
```

</TabItem>
<TabItem value="next">

Create the following component and use it anywhere in your app:

```jsx
'use client';

import 'notificationapi-js-client-sdk/dist/styles.css';
import { memo, useEffect } from 'react';
const NotificationAPIComponent = memo((props: { userId: string }) => {
  useEffect(() => {
    const loadNotificationAPI = async () => {
      const NotificationAPI = (await import('notificationapi-js-client-sdk'))
        .default;
      const notificationapi = new NotificationAPI({
        clientId: 'CLIENT_ID',
        userId: props.userId
      });
      notificationapi.showInApp({
        root: 'CONTAINER_DIV_ID'
      });
    };

    // Call the async function
    loadNotificationAPI();
  }, [props.userId]);

  return <div id="CONTAINER_DIV_ID"></div>;
});

NotificationAPIComponent.displayName = 'NotificationAPIComponent';

export default NotificationAPIComponent;
```

</TabItem>
<TabItem value="remix">

a) Add the following to your remix.config.js:

```js
// to import esm libraries: https://remix.run/docs/en/main/guides/gotchas#importing-esm-packages
serverDependenciesToBundle: ['notificationapi-js-client-sdk'];
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
<TabItem value="js">

```html
<script>
  const notificationapi = new NotificationAPI({
    clientId: 'CLIENT_ID',
    userId: 'USER_ID'
  });
  notificationapi.showInApp({
    root: 'CONTAINER_DIV_ID',
    popupPosition: 'bottomLeft'
  });
</script>
```

</TabItem>
</Tabs>

## Next Steps

You are now receiving in-app notifications on your front-end! 🎉

Let's do a few more things:

- [⚙️ Manage User Notification Preferences](../quick-start/manage-preferences)
- [📱 Setup Mobile Push](../guides/mobile-push)
- [🌐 Setup Web Push](../guides/web-push)
