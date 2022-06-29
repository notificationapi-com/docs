---
sidebar_position: 2
---

# JS Client SDK (Front-End)

This client-side SDK for JavaScript allows you to show in-app notifications in your front-end.

## Setup

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="js-package-manager"
defaultValue="npm/yarn"
values={[
{ label: 'npm/yarn', value: 'npm/yarn' },
{ label: 'script tag', value: 'script' }
]
}>
<TabItem value="npm/yarn">

```js
/* 1. Install using npm or yarn:
  npm install notificationapi-js-client-sdk
  yarn add notificationapi-js-client-sdk
*/

// 2. import or require:
import NotificationAPI from 'notificationapi-js-client-sdk';
const NotificationAPI = require('notificationapi-js-client-sdk').default;
```

</TabItem>
<TabItem value="script">

```html
<script src="https://unpkg.com/notificationapi-js-client-sdk/dist/notificationapi-js-client-sdk.js"></script>
```

</TabItem>
</Tabs>

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

React users should follow the [React section](#with-reactjs).

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

## showInApp()

This function adds the in-app notifications (the bell icon along with all its functionality) to your app.

![Sample](https://github.com/notificationapi-com/notificationapi-js-client-sdk/blob/master/sample/popup.gif?raw=true)

```js title="Example"
notificationapi.showInApp({
  root: 'parentDivID'
});
```

**Parameters**

`root` (required)  
Type: string

The ID of the HTML element that will contain the NotificationAPI widget. Ideally an empty div.

`popupPosition`  
Type: string (JS), PopupPosition enum (TS)

The position of the notifications popup relative to the button. Defaults to rightBottom.  
Valid string options: topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom.

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

## With React.js

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
import { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';
import React, { memo, useEffect } from 'react';

const NotificationAPIComponent = memo((props) => {
  useEffect(() => {
    const notificationapi = new NotificationAPI({
      clientId: YOUR_CLIENT_ID,
      userId: props.userId
    });
    notificationapi.showInApp({
      root: 'container',
      popupPosition: PopupPosition.BottomLeft
    });
  });

  return <div id="container"></div>;
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
