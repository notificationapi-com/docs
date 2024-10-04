---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vanilla JS (Core / Headless)

This JavaScript library is intended for developers who wish to directly interact with our APIs and models in the front-end, without our prebuilt UI components.

It provides:

- Easy to use wrappers for our REST and WebSocket APIs
- Easy authentication mechanism
- Common methods for reading/updating in-app notifications and user preferences
- TypeScript definitions

## Setup

<Tabs>
  <TabItem value="npm" label="npm">
      ```bash
      npm install @notificationapi/core
      ```
    </TabItem>
    <TabItem value="yarn" label="yarn">
      ```bash
      yarn add @notificationapi/core
      ```
    </TabItem>
</Tabs>

```javascript
import { NotificationAPIClientSDK } from '@notificationapi/core';

const client = NotificationAPIClientSDK.init({
  clientId: 'CLIENT_ID',
  userId: 'USER_ID',

  // for websocket:
  onNewInAppNotifications: (notifications) => {
    console.log('New notifications arrived:', notifications);
  }
});
```

#### Secure Mode

If you are using the [secure mode](/guides/secure-mode), you must provide the `hashedUserId` to the init function.

## API Wrapper

The `client.rest` object provides methods to easily make REST API calls to our back-end with as little detail as possible. Example:

```javascript
// The client implicitly accesses resources under /users/USER_ID
// in this example: /users/USER_ID/notifications/INAPP_WEB
client.rest.generic('GET', 'notifications/INAPP_WEB');
```

## WebSocket Wrapper

This method opens the websocket connection, keeps it alive and reconnects it when needed. The `onNewInAppNotifications` callback from the setup step will be called whenever new in-app notifications arrive.

```javascript
client.openWebSocket();
```

You can access the websocket object and its methods directly by using the `client.websocket` object.

## In-App Notification Methods

This method repeatedly calls our APIs to retreive as many notifications as needed based on the inputs. No need to worry about pagination.

```javascript
const res = await client.getInAppNotifications({
  before: new Date().toISOString(),
  maxCountNeeded: 1000
});
console.log(res.items);
```

The following method updates the status of one or more in-app notifications.

```javascript
// Set the first notification from the above example to opened and archived
client.updateInAppNotifications({
  ids: [res.items[0].id],
  opened: true,
  archived: true
});
```

## User Preferences Methods

The following method retrieves a complex object which will contain the user's notification preferences, as well as available options for each notification type, allowing the user to switch between them.

```javascript
const prefs = await client.rest.getPreferences();
```

This method updates the user's notification preference for a specific notification type and channel.

```javascript
await client.updateDeliveryOption({
  notificationId: 'new_comment'
  channel: 'INAPP_WEB',
  delivery: 'off',
});
```
