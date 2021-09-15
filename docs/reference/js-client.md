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
{ label: '<script>', value: 'script' }
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

## Usage

The example below creates a NotificationAPI widget that automatically connects to our servers and pulls the notifications for the user.

```js
new NotificationAPI({
  root: 'parentDivID',
  clientId: YOU_CLIENT_ID,
  userId: USER_ID
});
```

![Sample](https://github.com/notificationapi-com/notificationapi-js-client-sdk/blob/master/sample/popup.gif?raw=true)

### Configuration Parameters:

- `root` (string): The ID of the HTML element that will contain the NotificationAPI widget. Ideally an empty div.

- `clientId` (string): Your NotificationAPI account clientId, which you can get from [here](https://app.notificationapi.com/environments).

- `userId` (string): The ID of the user in your system. Same as the user ID used to trigger notifications in the server-side SDK.

- `popupPosition` (string/optional): The position of the notifications popup relative to the button. Valid options: topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom. Default: RightBottom.

- `inline` (boolean/optional): whether to render a notification bell button that opens a popup, or to directly render the notifications as a list. Default: false.

Warning: Each instantiation will create a new instance of this widget, thus for performance reason it is recommended to only run it once, e.g. after page load. React users should read below.

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
    new NotificationAPI({
      root: 'container',
      clientId: YOUR_CLIENT_ID,
      userId: props.userId,
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

Front-end code is observable and mutable by end-users and malicious actors can take advantage this. For example, someone can impersonate another user on your website's chat tool or NotificationAPI by passing in different parameters to the library. Secure Mode makes our front-end SDK secure against this threat.

### Step by Step:

1. Back-end: hash the userId using your client secret. Send the hashed userId to your front-end, for example from an API right after the page loads:

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
<Tabs
defaultValue="Javascript"
values={[
{ label: 'Javascript', value: 'Javascript', },
{ label: 'Typescript', value: 'Typescript' }
]
}>
<TabItem value="Javascript">

```jsx
new NotificationAPI({
  root: '...',
  clientId: '...',
  userId: 'ACTUAL_USER_ID',
  userIdHash: 'HASHED_USER_ID',
  popupPosition: PopupPosition.BottomLeft
});
```

</TabItem>
<TabItem value="Typescript">

```jsx
new NotificationAPI({
  root: '...',
  clientId: '...',
  userId: 'ACTUAL_USER_ID',
  userIdHash: 'HASHED_USER_ID',
  popupPosition: PopupPosition.BottomLeft
});
```

</TabItem>
</Tabs>
3. Enable secure mode in your account settings. When our SDK starts, it sends both the userId and hashed userId to our servers and we compare the values to ensure the userId and its hash match, indicating userId has not been tampered.
