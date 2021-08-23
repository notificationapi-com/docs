---
sidebar_position: 1
---

# Send Your First Notification

## Prerequisite: Create an account

[Create a NotificationAPI account here](https://app.notificationapi.com). There is already a default "Hello World Notification" configured in your dashboard. Don't worry, this notification isn't sent to anyone without your knowledge.

## 1. Install a back-end SDK

Notifications are triggered from your back-end. So install one of our back-end SDKs:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="backend-language"
defaultValue="js"
values={[
{ label: 'Node.js', value: 'js', },
{ label: 'Python', value: 'py', }
]
}>
<TabItem value="js">

```bash
npm install notificationapi-node-server-sdk
// or using yarn:
yarn add notificationapi-node-server-sdk
```

</TabItem>
<TabItem value="py">

```py
pip install notificationapi_python_server_sdk
```

</TabItem>
</Tabs>

## 2. Send

The example below sends the "Hello World Notification" to the test user. Feel free to replace the user values with your user so you can receive and view the notifications.

<Tabs
groupId="backend-language"
defaultValue="js"
values={[
{ label: 'Node.js', value: 'js', },
{ label: 'Python', value: 'py', }
]
}>
<TabItem value="js">

```js
// import:
import notificationapi from 'notificationapi-node-server-sdk';
// Or using require: const notificationapi = require('notificationapi-node-server-sdk').default

// init
notificationapi.init('CLIENT_ID', 'CLIENT_SECRET');

// send
notificationapi.send({
  notificationId: 'hello_world_notification',
  user: {
    id: 'TEST_USER_ID',
    email: 'EMAIL@TEST.COM',
    number: '+15005550006'
  }
});
```

</TabItem>
<TabItem value="py">

```py
# import
from notificationapi_python_server_sdk import (notificationapi)

# init
notificationapi.init("CLIENT_ID", "CLIENT_SECRET")

# send
notificationapi.send({
        "notificationId": "hello_world_notification",
        "user": {
            "id": "test_user_id",
            "email": "test@test.com",
             "number": "+15005550006"
        }
    })
```

</TabItem>
</Tabs>

:::important

You must replace the CLIENT_ID and CLIENT_SECRET with real values. You can get yours from [here](https://app.notificationapi.com/environments).

:::

## What's next?

At this point, the test user has received a "Hello World Notification" email. Next, you can configure one of our front-end SDKs to show the in-app notifications.
