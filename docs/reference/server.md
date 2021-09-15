---
sidebar_position: 1
---

# Server SDKs (Back-end)

The server-side SDKs allow you to trigger sending notifications. Supported environments:

- Node.js
- Python

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="back-end-language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', }
]
}>
<TabItem value="nodejs">

```bash
npm install notificationapi-node-server-sdk
# Or using Yarn:
yarn add notificationapi-node-server-sdk
```

</TabItem>
<TabItem value="python">

```bash
pip install notificationapi_python_server_sdk
```

</TabItem>
</Tabs>

## Basic Usage

### 1. import or require

<Tabs
groupId="back-end-language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', }
]
}>
<TabItem value="nodejs">

```js
import notificationapi from 'notificationapi-node-server-sdk';
// or with require:
const notificationapi = require('notificationapi-node-server-sdk').default;
```

</TabItem>
<TabItem value="python">

```python
from notificationapi_python_server_sdk import (notificationapi)
```

</TabItem>
</Tabs>

### 2. init

The init function is to configure the SDK and must run before the [send](#3-send) function. It requires your `clientId` and `clientSecret` which you can get from [here](https://app.notificationapi.com/environments).

<Tabs
groupId="back-end-language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', }
]
}>
<TabItem value="nodejs">

```js
notificationapi.init('CLIENT_ID', 'CLIENT_SECRET');
```

</TabItem>
<TabItem value="python">

```python
notificationapi.init("CLIENT_ID", "CLIENT_SECRET")
```

</TabItem>
</Tabs>

### 3. send

The code sample below will send the `hello_world` notification to the specified user.

<Tabs
groupId="back-end-language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', }
]
}>
<TabItem value="nodejs">

```js
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com', number: '+15005550006' }
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.send(
    {
        "notificationId": "hello_world",
        "user": {
            "id": "123",
            "email": "test@test.com",
            "number": "+15005550006",
        },
    }
)
```

</TabItem>
</Tabs>

Parameters:

- `notificationId` (string): The ID of the notification you wish to send. You can find this value from the dashboard.
- `user.id` (string): The ID of the user in your system.
- `user.email` (string): User's email address.
- `user.number` (string): User's phone number. Phone numbers should be formatted with a + and country code, for example: +15005550006. Also unformatted US numbers are accepted, e.g., (415) 555-1212 or 415-555-1212.

Below you can find additional parameters and use-cases.

## Merge Tags: Dynamic values in notifications

If you are using `{{mergeTags}}` in your notification designs, be sure to pass the actual values into the SDK. The example below replaces the `{{firstName}}` merge tag in your design with the value `Jane`.

<Tabs
groupId="back-end-language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', }
]
}>
<TabItem value="nodejs">

```js
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com', number: '+15005550006' },
  mergeTags: { firstName: 'Jane' }
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.send(
    {
        "notificationId": "hello_world",
        "user": {
            "id": "123",
            "email": "test@test.com",
            "number": "+15005550006",
        },
        "mergeTags": {"firstName": "Jane"},
    }
)
```

</TabItem>
</Tabs>

You can actually pass in complex objects and arrays into mergeTags to make your notifications future-proof. The example below sends a whole user object to the mergeTag. You can now use merge tags such as `{{user.firstName}}`, `{{user.lastName}}` or even `{{user.orders[1].productName}}` in the designs without going back to change your server code.

<Tabs
groupId="back-end-language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', }
]
}>
<TabItem value="nodejs">

```js
const user = {
  firstName: 'Jane',
  lastName: 'Doe',
  orders: [
    {
      id: '123',
      productName: 'socks'
    },
    {
      id: '124',
      productName: 'socks'
    }
  ]
};
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com', number: '+15005550006' },
  mergeTags: { user }
});
```

</TabItem>
<TabItem value="python">

```python
user = {
    "firstName": "Jane",
    "lastName": "Doe",
    "orders": [
        {"id": "123", "productName": "socks"},
        {"id": "124", "productName": "socks"},
    ],
}
notificationapi.send(
    {
        "notificationId": "hello_world",
        "user": {
            "id": "123",
            "email": "test@test.com",
            "number": "+15005550006",
        },
        "mergeTags": {"user": user},
    }
)
```

</TabItem>
</Tabs>

## forceChannels: dynamically setting channels

By default, notifications are sent over the channels that you specify in the dashboard. This allows you to turn channels on/off without any code changes.

However, you may wish to override these settings dynamically at run-time. That is where you would use the `forceChannels` field:

<Tabs
groupId="back-end-language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', }
]
}>
<TabItem value="nodejs">

```js
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com' },
  forceChannels: ['EMAIL', 'INAPP_WEB']
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.send(
    {
        "notificationId": "hello_world",
        "user": {"id": "123", "email": "test@test.com"},
        "forceChannels": ["EMAIL", "INAPP_WEB"],
    }
)
```

</TabItem>
</Tabs>

The code above sends the notification over email and in-app regardless of what channels are active/inactive in the dashboard.

:::info
forceChannels field does not override the notification itself being inactive. For it to work, the notification must be in active mode.
:::

## Options: Additional Email Features

You can dynamically modify certain notification behavior by passing in options. Example:

<Tabs
groupId="back-end-language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', }
]
}>
<TabItem value="nodejs">

```js
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com', number: '+15005550006' },
  options: {
    email: {
      replyToAddresses: ['noreply@test.com'],
      attachments: [
        {
          filename: 'sample.jpg',
          url: 'https://app.notificationapi.com'
        }
      ]
    }
  }
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.send(
    {
        "notificationId": "hello_world",
        "user": {
            "id": "123",
            "email": "test@test.com",
            "number": "+15005550006",
        },
        "options": {
            "email": {
                "replyToAddresses": ["noreply@test.com"],
                "attachments": [
                    {
                        "filename": "sample.jpg",
                        "url": "https://app.notificationapi.com",
                    }
                ],
            }
        },
    }
)
```

</TabItem>
</Tabs>

Available options:

- `options.email.replyToAddresses` (string[]): An array of email addresses to be used in the reply-to field of emails notifications.
- `options.email.ccAddresses` (string[]): An array of emails to be CC'ed on the email notifications.
- `options.email.bccAddresses` (string[]): An array of emails to be BCC'ed on the email notifications.
- `options.email.attachments` ({ filename: string; url: string }[]): An array of publicly accessible URLs and filenames pointing to files that you wish to include as attachments. The URLs only need to be valid for a few minutes after calling the SDK method. After that, the public URLs can be disabled for privacy. The maximum email size (including the content and all attachments) is 10MB. File extensions in the filename property are necessary for the file to show up nicely in the recipient's device.

## Retract: unsending or deleting notifications

Sometimes you need older notifications to be deleted for a certain user. For example when a notification is not valid anymore. The retract function helps you do this.

<Tabs
groupId="back-end-language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', }
]
}>
<TabItem value="nodejs">

```js
notificationapi.retract({
  notificationId: 'hello_world',
  userId: '123'
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.retract({"notificationId": "hello_world", "userId": "123"})
```

</TabItem>
</Tabs>

This function deletes all notifications that were generated from the `hello_world` notification type for user `123`. Optionally, you can filter notifications down to [secondaryId](#secondaryid-categorizing-notifications-of-the-same-type).

Parameters:

- `notificationId` (string)
- `userId` (string)
- `secondaryId` (string/optional): when used, only notifications are deleted that were given this secondaryId at send

Please note that this only works with: push, inapp, browser notifications. There is no way to undo emails/sms/voice notifications.

## SecondaryId: categorizing notifications of the same type

The `secondaryId` is used toto specify further subcategories within a notification.

Example 1: YouTube generates "new content alert" notifications. `secondaryId` allows categorizing that same notification based on the YouTube channel.

Example 2: In a project management tool, there will be notifications such as "task completed". `secondaryId` can be used to specify which project the notification belongs to.

Use-cases:

- You can use the secondaryId in the [retract function](#retract-unsending-or-deleting-notifications)
- Other use-cases are coming soon

Usage:

<Tabs
groupId="back-end-language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', }
]
}>
<TabItem value="nodejs">

```js
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com', number: '+15005550006' },
  secondaryId: 'abc'
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.send(
    {
        "notificationId": "hello_world",
        "user": {
            "id": "123",
            "email": "test@test.com",
            "number": "+15005550006",
        },
        "secondaryId": "abc",
    }
)
```

</TabItem>
</Tabs>
