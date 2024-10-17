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

## identify

Stores the end-user information for a given user.

By using this function, you can omit the contact information when using send(). NotificationAPI will automatically lookup the user's stored email or phone number and use it for sending the notification.

```javascript
const res = await client.identify({
  id: 'spongebob.squarepants',
  email: 'spongebob@squarepants.com',
  number: '+15005550006',
  pushTokens: [
    {
      type: PushProviders.FCM,
      token: 'samplePushToken',
      device: {
        app_id: 'com.example.app',
        ad_id: '1234567890',
        device_id: '1234567890',
        platform: 'android',
        manufacturer: 'Samsung',
        model: 'SM-G930F'
      }
    }
  ],
  webPushTokens: [
    {
      sub: {
        endpoint:
          'https://fcm.googleapis.com/fcm/send/fCs_4iba0Ao:APA91bGFdaU7I3****JMH_KeZwk1Xi',
        keys: {
          p256dh:
            'zP2xFu3hMc2vNH5E2nuKkyjpZydvCk9llRUY2kP4****9aSlKcoadSV2UbvMRQ',
          auth: 'CXEFun************tYe8g'
        }
      }
    }
  ]
});

console.log(res);
```

### Parameters

| Name            | Type     | Description                                                                                                                                                                              |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`\*          | string   | The ID of the user in your system. Required.                                                                                                                                             |
| `email`         | string   | Required for sending email notifications, otherwise optional.                                                                                                                            |
| `number`        | string   | Required for SMS/CALL notifications, otherwise optional. Valid format: +15005550006. Unformatted US/Canada numbers are also accepted, e.g., (415) 555-1212, 415-555-1212, or 4155551212. |
| `timezone`      | string   | The user's timezone. Timezone names correspond to the Zone and Link names of the IANA Time Zone Database, such as 'America/New_York', 'America/Denver', 'EST', and 'UTC'.                |
| `pushTokens`    | object[] | Tokens which are required to send mobile push notifications, a user can have multiple devices and a push token is required for each device.                                              |
| `webPushTokens` | object[] | Tokens which are required to send web push notification, a user can have multiple devices and a web push token is required for each device.                                              |

#### pushTokens object

| Name       | Type   | Description                                                          |
| ---------- | ------ | -------------------------------------------------------------------- |
| `type`\*   | string | [apn,fcm] The provider token is to be associated with. Required.     |
| `token`\*  | string | The full token string. Required.                                     |
| `device`\* | object | Information about the device the token is associated with. Required. |

#### device object

| Name           | Type   | Description                                              |
| -------------- | ------ | -------------------------------------------------------- |
| `app_id`       | string | Id of the application the token is used for.             |
| `ad_id`        | string | Id of the advertising identifier.                        |
| `device`\*     | string | Id of the device the token is associated with. Required. |
| `platform`     | string | The device platform i.e. android, ios.                   |
| `manufacturer` | string | The device manufacturer.                                 |
| `model`        | string | The device model .                                       |

#### webPushTokens object

| Name    | Type   | Description                      |
| ------- | ------ | -------------------------------- |
| `sub`\* | object | Web push subscription. Required. |

#### Web push subscription (sub) object

| Name         | Type   | Description                                                                               |
| ------------ | ------ | ----------------------------------------------------------------------------------------- |
| `endpoint`\* | string | The string value containing the endpoint associated with the push subscription. Required. |
| `keys`\*     | object | The keys associated with the push subscription. Required.                                 |

#### Web push subscription keys object

| Name       | Type   | Description                                                                                                                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `p256dh`\* | string | An Elliptic curve Diffie–Hellman public key on the P-256 curve (that is, the NIST secp256r1 elliptic curve). The resulting key is an uncompressed point in ANSI X9.62 format. Required. |
| `auth`\*   | string | An authentication secret, as described in Message Encryption for Web Push. Required.                                                                                                    |
