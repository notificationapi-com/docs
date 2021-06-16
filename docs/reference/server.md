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

## Usage

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
import notificationapi from "notificationapi-node-server-sdk";
// or with require:
const notificationapi = require("notificationapi-node-server-sdk").default;
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
notificationapi.init("CLIENT_ID", "CLIENT_SECRET");
```

</TabItem>
<TabItem value="python">

```python
notificationapi.init("CLIENT_ID", "CLIENT_SECRET")
```

</TabItem>
</Tabs>

### 3. send

#### Basic:

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
  notificationId: "hello_world",
  user: { id: "123", email: "test@test.com" }
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.send({
    "notificationId": "hello_world",
    "user": { "id": "123", "email": "test@test.com" } 
})
```

</TabItem>
</Tabs>

Parameters:

- `notificationId` (string): The ID of the notification you wish to send. You can find this value from the dashboard.
- `user.id` (string): The ID of the user in your system.
- `user.email` (string): User's email address.

#### Merge Tags

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
    notificationId: 'hello_world'
    user: { id: "123", email: "test@test.com" },
    mergeTags: { firstName: 'Jane' }
})
```

</TabItem>
<TabItem value="python">

```python
notificationapi.send({
    "notificationId": "hello_world",
    "user": { "id": "123", "email": "test@test.com" },
    "mergeTags": { "firstName": "Jane" }
})
```

</TabItem>
</Tabs>

#### Merge Tags (Advanced)

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
}
notificationapi.send({
    notificationId: 'hello_world'
    user: { id: "123", email: "test@test.com" },
    mergeTags: { user }
})
```

</TabItem>
<TabItem value="python">

```python
user = {
    "firstName": "Jane",
    "lastName": "Doe",
    "orders": [
        {
            "id": "123",
            "productName": "socks"
        },
        {
            "id": "124",
            "productName": "socks"
        }
    ]
}
notificationapi.send({
    "notificationId": "hello_world",
    "user": { "id": "123", "email": "test@test.com" },
    "mergeTags": { "user": user }
})
```

</TabItem>
</Tabs>

#### Options

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
    notificationId: 'hello_world'
    user: { id: "123", email: "test@test.com" },
    options: {
        email: {
            replyToAddresses: ['noreply@test.com']
        }
    }
})
```

</TabItem>
<TabItem value="python">

```python
notificationapi.send({
    "notificationId": "hello_world",
    "user": { "id": "123", "email": "test@test.com" },
    "options": { 
            "email": {
                "replyToAddresses": ["noreply@test.com"]
            }
        }
})
```

</TabItem>
</Tabs>

Available options:

- `options.email.replyToAddresses` (string[]): An array of email addresses to be used in the reply-to field of emails notifications.
- `options.email.ccAddresses` (string[]): An array of emails to be CC'ed on the email notifications.
- `options.email.bccAddresses` (string[]): An array of emails to be BCC'ed on the email notifications.
