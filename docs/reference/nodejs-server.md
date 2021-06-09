---
sidebar_position: 1
---

# Node.js Server SDK

This server-side SDK for node.js allows you to trigger sending notifications.

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="js-package-manager"
defaultValue="npm"
values={[
{ label: 'NPM', value: 'npm', },
{ label: 'Yarn', value: 'yarn', }
]
}>
<TabItem value="npm">

```bash
npm install notificationapi-node-server-sdk
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add notificationapi-node-server-sdk
```

</TabItem>
</Tabs>

## Usage

### 1. Import or require

<Tabs
groupId="js-import-require"
defaultValue="import"
values={[
{ label: 'Import', value: 'import', },
{ label: 'Require', value: 'require', }
]
}>
<TabItem value="import">

```js
import notificationapi from "notificationapi-node-server-sdk";
```

</TabItem>
<TabItem value="require">

```js
const notificationapi = require("notificationapi-node-server-sdk").default;
```

</TabItem>
</Tabs>

### 2. init

The init function is to configure the SDK and must run before the [send](#3-send) function. It requires your `clientId` and `clientSecret` which you can get from [here](https://app.notificationapi.com/environments).

```js
notificationapi.init("CLIENT_ID", "CLIENT_SECRET");
```

### 3. send

#### Basic:

The code sample below will send the `hello_world` notification to the specified user.

```js
notificationapi.send({
  notificationId: "hello_world",
  user: { id: "123", email: "test@test.com" },
});
```

Parameters:

- `notificationId` (string): The ID of the notification you wish to send. You can find this value from the dashboard.
- `user.id` (string): The ID of the user in your system.
- `user.email` (string): User's email address.

#### Merge Tags

If you are using `{{mergeTags}}` in your notification designs, be sure to pass the actual values into the SDK. The example below replaces the `{{firstName}}` merge tag in your design with the value `Jane`.

```js
notificationapi.send({
    notificationId: 'welcome-notification'
    user: {id: USER_ID, email: USER_EMAIL},
    mergeTags: { firstName: 'Jane' }
})
```

#### Merge Tags (Advanced)

You can actually pass in complex objects and arrays into mergeTags to make your notifications future-proof. The example below sends a whole user object to the mergeTag. You can now use merge tags such as `{{user.firstName}}`, `{{user.lastName}}` or `{{user.orders[0].productName}}` in the designs without going back to change your server code.

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
}
notificationapi.send({
    notificationId: 'welcome-notification'
    user: {id: USER_ID, email: USER_EMAIL},
    mergeTags: { user }
})
```

#### Options

You can dynamically modify certain notification behavior by passing in options. Example:

```js
notificationapi.send({
    notificationId: 'welcome-notification'
    user: {id: USER_ID, email: USER_EMAIL},
    options: {
        email: {
            replyToAddresses: ['replyto@test.com']
        }
    }
})
```

Available options:

- `options.email.replyToAddresses` (string[]): An array of email addresses to be used in the reply-to field of emails notifications.
- `options.email.ccAddresses` (string[]): An array of emails to be CC'ed on the email notifications.
- `options.email.bccAddresses` (string[]): An array of emails to be BCC'ed on the email notifications.
