---
sidebar_position: 1
---

# Server SDKs (Back-end)

The server-side SDKs allow you to trigger sending notifications. Supported environments:

- Node.js
- Python
- PHP

## Setup

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'python', },
{ label: 'PHP', value: 'php', }
]
}>
<TabItem value="js">

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
<TabItem value="php">

```bash
composer require notificationapi/notificationapi-php-server-sdk
```

</TabItem>
</Tabs>

## send()

Used to send a notification to the specified user.

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'python', },
{ label: 'PHP', value: 'php', }
]
}>
<TabItem value="js">

```js title="Example"
import notificationapi from 'notificationapi-node-server-sdk';

notificationapi.init('CLIENT_ID', 'CLIENT_SECRET');
notificationapi.send({
  notificationId: 'hello_world',
  user: {
    id: '123',
    email: 'test@test.com',
    number: '+15005550006'
  },
  mergeTags: {
    firstName: 'test'
  }
});
```

</TabItem>
<TabItem value="python">

```python title="Example"
from notificationapi_python_server_sdk import (notificationapi)

notificationapi.init("CLIENT_ID", "CLIENT_SECRET")
notificationapi.send(
    {
        "notificationId": "hello_world",
        "user": {
            "id": "123",
            "email": "test@test.com",
            "number": "+15005550006",
        },
        "mergeTags": {
            "firstName": "test"
        }
    }
)
```

</TabItem>
<TabItem value="php">

```php title="Example"
use NotificationAPI\NotificationAPI;

$notificationapi = new NotificationAPI('CLIENT_ID', 'CLIENT_SECRET');
$notificationapi->send([
    "notificationId" => "hello_world",
    "user" => [
        "id" => "123",
        "email" => "test@test.com",
        "number" => "+15005550006"
    ],
    "mergeTags" => [
        "firstName" => "test"
    ]
]);
```

</TabItem>
</Tabs>

**Parameters**

##### `notificationId` (required)

Type: string

The ID of the notification you wish to send. You can find this value from the dashboard.

##### `user` (required)

Type: object

The user to send the notification to. Fields:

- `id`: The ID of the user in your system. Required.
- `email`: Required for sending email notifications, otherwise optional.
- `number`: Required for SMS/CALL notifications, otherwise optional. Valid format: `+15005550006`. Unformatted US/Canada numbers are also accepted, e.g., (415) 555-1212, 415-555-1212, or 4155551212.

##### `mergeTags` (optional)

Type: object

Used to pass in dynamic values into the notification design. Read more: [Passing dynamic values to notifications](#merge-tags-passing-dynamic-values-to-notifications)

##### `replace` (optional)

Type: object, string key/value pair

Similar to mergeTags, but more flexible. Like the programmatic string replace function, this parameter will replace any string in the notification templates with another string. This operation happens on the fly when sending the notification and does not actually modify the templates.

This operation is case-sensitive and happens after mergeTags are injected.

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'python', },
{ label: 'PHP', value: 'php', }
]
}>
<TabItem value="js">

```js title="Example"
notificationapi.send({
  ...,
  replace: {
    "Dollars": "Euros",
    "#ff0000": "#0000ff"
  }
});
```

</TabItem>
<TabItem value="python">

```python title="Example"
from notificationapi_python_server_sdk import (notificationapi)

notificationapi.init("CLIENT_ID", "CLIENT_SECRET")
notificationapi.send(
    {
        ...,
        "replace": {
            "Dollars": "Euros",
            "#ff0000": "#0000ff"
        }
    }
)
```

</TabItem>
<TabItem value="php">

```php title="Example"
use NotificationAPI\NotificationAPI;

$notificationapi = new NotificationAPI('CLIENT_ID', 'CLIENT_SECRET');
$notificationapi->send([
    ...,
    "replace" => [
        "Dollars" => "Euros",
        "#ff0000": "#0000ff"
    ]
]);
```

</TabItem>
</Tabs>

In the example above:

- The word "Dollars" will be replaced with "Euros" in all the templates used for this notification
- The HTML red color code `#ff0000` will be replaced with the blue color code `0000ff`, making it possible to dynamically brand the email content.

##### `forceChannels` (optional)

type: string[]

Used to override the channels which are used for the notification. Read more: [forceChannels: Dynamically setting channels](#forcechannels-dynamically-overriding-the-channels)

##### `options` (optional)

type: object

For additional features such as: attachments, custom replyTo address, BCC, CC. Read more: [Options](#options-additional-customization)

##### `subNotificationId` (optional)

type: string

To break down your notification into multiple categories or groups. Read more: [subNotificationId](#subnotificationid-categorizing-notifications-of-the-same-type)

##### `templateId` (optional)

type: string

By default, notifications are sent using the default template of each channel. You can permanently change the default template from the dashboard. However, you can also use this parameter to force using a specific template. This is useful in multiple situations:

- Design variation: using different wording and design, e.g. "You have new updates" vs. "You don't have any updates"
- White-labeling: using a specific template that you designed for a white-labeled customer
- Language: creating and using multiple templates for multiple languages

If the provided templateId does not exist for a channel, the default template will be used, and a warning message will be generated.

## Retract: unsending or deleting notifications

Sometimes you need older notifications to be deleted for a certain user. For example when a notification is not valid anymore. The retract function helps you do this.

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js' },
{ label: 'Python', value: 'python' },
{ label: 'PHP', value: 'php' }
]
}>
<TabItem value="js">

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
<TabItem value="php">

```php
$notificationapi->retract(["notificationId" => "hello_world", "userId" => "123"]);
```

</TabItem>
</Tabs>

This function deletes all notifications that were generated from the `hello_world` notification type for user `123`. Optionally, you can filter notifications down to [secondaryId](#secondaryid-categorizing-notifications-of-the-same-type).

Parameters:

- `notificationId` (string)
- `userId` (string)
- `secondaryId` (string/optional): when used, only notifications are deleted that were given this secondaryId at send

Please note that this only works with: push, inapp, browser notifications. There is no way to undo emails/sms/voice notifications.

## Features

### mergeTags: Passing dynamic values to notifications

Merge tags are scripts that you can insert into your designs and look like this: `{{firstName}}`. You can use them to pass in dynamic values programmatically. The example below replaces the `{{firstName}}` merge tag in your design with the value `Jane` when the notification is being sent.

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'python', },
{ label: 'PHP', value: 'php', }
]
}>
<TabItem value="js">

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
<TabItem value="php">

```php
notificationapi->send([
    "notificationId" => "hello_world",
    "user" => [
        "id" => "123",
        "email" => "test@test.com",
        "number" => "+15005550006",
    ],
    "mergeTags" => ["firstName" => "Jane"],
]);
```

</TabItem>
</Tabs>

You can actually pass in complex objects and arrays into mergeTags to make your notifications future-proof. The example below sends a whole user object to the mergeTag. You can now use merge tags such as `{{user.firstName}}`, `{{user.lastName}}` or even `{{user.orders[1].productName}}` in the designs without going back to change your server code.

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'python', },
{ label: 'PHP', value: 'php', }
]
}>
<TabItem value="js">

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
<TabItem value="php">

```php
$user = [
    "firstName" => "Jane",
    "lastName" => "Doe",
    "orders" => [
        ["id" => "123", "productName" => "socks"],
        ["id" => "124", "productName" => "socks"],
    ],
];
$notificationapi->send(
    [
        "notificationId" => "hello_world",
        "user" => [
            "id" => "123",
            "email" => "test@test.com",
            "number" => "+15005550006",
        ],
        "mergeTags" => ["user" => $user],
    ]
);
```

</TabItem>
</Tabs>

### forceChannels: Dynamically overriding the channels

By default, notifications are sent over the channels that you specify in the dashboard. This allows you to turn channels on/off without any code changes.

However, you may wish to override these settings dynamically at run-time. That is where you would use the `forceChannels` field:

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'python', },
{ label: 'PHP', value: 'php', }
]
}>
<TabItem value="js">

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
<TabItem value="php">

```php
$notificationapi->send(
    [
        "notificationId" => "hello_world",
        "user" => ["id" => "123", "email" => "test@test.com"],
        "forceChannels" => ["EMAIL", "INAPP_WEB"],
    ]
);
```

</TabItem>
</Tabs>

The code above sends the notification over email and in-app regardless of what channels are active/inactive in the dashboard.

:::info
forceChannels field does not override the notification itself being inactive. For it to work, the notification must be in active mode.
:::

### options: Additional customization

You can dynamically modify certain notification behavior by passing in options. Example:

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js' },
{ label: 'Python', value: 'python' },
{ label: 'PHP', value: 'php' }
]
}>
<TabItem value="js">

```js
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com', number: '+15005550006' },
  options: {
    email: {
      replyToAddresses: ['noreply@test.com'],
      attachments: [
        {
          filename: 'sample.pdf',
          url: 'https://docs.notificationapi.com/lorem-ipsum.pdf'
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
                        "filename": "sample.pdf",
                        "url": "https://docs.notificationapi.com/lorem-ipsum.pdf",
                    }
                ],
            }
        },
    }
)
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->send(
    [
        "notificationId" => "hello_world",
        "user" => [
            "id" => "123",
            "email" => "test@test.com",
            "number" => "+15005550006",
        ],
        "options" => [
            "email" => [
                "replyToAddresses" => ["noreply@test.com"],
                "attachments" => [
                    [
                        "filename" => "sample.pdf",
                        "url" => "https://docs.notificationapi.com/lorem-ipsum.pdf",
                    ]
                ],
            ]
        ],
    ]
);
```

</TabItem>
</Tabs>

Available options:

- `options.email.replyToAddresses` (string[]): An array of email addresses to be used in the reply-to field of emails notifications.
- `options.email.ccAddresses` (string[]): An array of emails to be CC'ed on the email notifications.
- `options.email.bccAddresses` (string[]): An array of emails to be BCC'ed on the email notifications.
- `options.email.attachments` ({ filename: string; url: string }[]): An array of publicly accessible URLs and filenames pointing to files that you wish to include as attachments. The URLs only need to be valid for a few minutes after calling the SDK method. After that, the public URLs can be disabled for privacy. The maximum email size (including the content and all attachments) is 10MB. File extensions in the filename property are necessary for the file to show up nicely in the recipient's device.

### subNotificationId: Categorizing notifications of the same type

The `subNotificationId` is used to specify further subcategories within a notification.

Example 1: Facebook generates "new post from group" notifications. These notifications look and work exactly the same, however they are generated from different groups which notify different users. `subNotificationId` allows you to specify which group the "new post from group" notification belongs to. This allows the users to subscribe/unsubscribe to groups individually.

Example 2: In a project management tool, there will be notifications such as "task completed" for every project. However, not every user is involved in every project. `subNotificationId` allows you to subscribe users to "task completed" notifications of some projects, but not others.

Benefits:

- To create sub preferences in [User Preferences](../guides/user-preferences)
- To retract some notifications but not others, using the [retract function](#retract-unsending-or-deleting-notifications)

Usage:

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js' },
{ label: 'Python', value: 'python' },
{ label: 'PHP', value: 'php' }
]
}>
<TabItem value="js">

```js
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com', number: '+15005550006' },
  subNotificationId: 'abc'
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
        "subNotificationId": "abc",
    }
)
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->send(
    [
        "notificationId" => "hello_world",
        "user" => [
            "id" => "123",
            "email" => "test@test.com",
            "number" => "+15005550006",
        ],
        "subNotificationId" => "abc",
    ]
);
```

</TabItem>
</Tabs>
