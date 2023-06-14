---
sidebar_position: 5
---

# Web Push Notifications

The NotificationAPI provides web push notifications. While most notification channels like email or call only require the [back-end integration](../quick-start/send-the-notification), web push notifications require our front-end SDK to display them.

## Installing the Front-End SDK

To install the front-end SDK, follow these steps:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="js-package-manager"
defaultValue="npm/yarn"
values={[
{ label: `Using npm or yarn`, value: 'npm/yarn' },
{ label: `<script>`, value: 'script' }
]
}>
<TabItem value="npm/yarn">

```console
# using npm:
npm install notificationapi-js-client-sdk
# using yarn:
yarn add notificationapi-js-client-sdk
```

</TabItem>
<TabItem value="script">

```html
<script src="https://unpkg.com/notificationapi-js-client-sdk/dist/notificationapi-js-client-sdk.js"></script>
```

</TabItem>
</Tabs>

## Displaying Web Push Notifications

To display web push notifications, you need to initialize the NotificationAPI SDK in your front-end code. The SDK will automatically prompt your users for permission to deliver web push notifications. Please note that web push notifications are turned off by default.

Use the following code examples based on your preferred frontend language or framework:
<Tabs
groupId="frontend-language"
defaultValue="react"
values={[
{ label: 'React.js', value: 'react' },
{ label: 'Vue.js', value: 'vue' },
{ label: 'JavaScript', value: 'js' }
]
}>
<TabItem value="react">

In your React component, create a new component called NotificationAPIComponent:

```jsx
import NotificationAPI from 'notificationapi-js-client-sdk';
import 'notificationapi-js-client-sdk/dist/styles.css';
import { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';
import { memo, useEffect } from 'react';

const NotificationAPIComponent = memo((props) => {
  useEffect(() => {
    const notificationapi = new NotificationAPI({
      clientId: 'CLIENT_ID',
      userId: props.userId,
      web_push: true
    });
  });
});
export default NotificationAPIComponent;
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
      userId: 'USER_ID',
      web_push: true
    });
  });
</script>
```

</TabItem>
<TabItem value="js">
If you're using plain JavaScript, include the following code:

```html
<script>
  const notificationapi = new NotificationAPI({
    clientId: 'CLIENT_ID',
    userId: 'USER_ID',
    web_push: true
  });
</script>
```

</TabItem>
</Tabs>
