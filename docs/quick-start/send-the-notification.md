---
sidebar_position: 2
---

# Send the Notification

### Prerequisite

[NotificationAPI account and Notification setup](./setup-the-notification)

## 1. Install back-end SDK

Notifications are triggered from your back-end. So install one of our back-end SDKs:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

```bash
npm install notificationapi-node-server-sdk
// or using yarn:
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

## 2. Send

The example below sends the "New Comment Notification" to the test user:

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
// import/require:
import notificationapi from 'notificationapi-node-server-sdk';
// const notificationapi = require('notificationapi-node-server-sdk').default

// init
notificationapi.init('CLIENT_ID', 'CLIENT_SECRET');

// send
notificationapi.send({
  notificationId: 'new_comment_notification',
  user: {
    id: 'TEST_USER_ID',
    email: 'TEST@TEST.COM', // required for email notifications
    number: '+15005550006' // required for SMS
  }
});
```

</TabItem>
<TabItem value="python">

```py
# import
from notificationapi_python_server_sdk import (notificationapi)

# init
notificationapi.init("CLIENT_ID", "CLIENT_SECRET")

# send
notificationapi.send({
        "notificationId": "new_comment_notification",
        "user": {
            "id": "TEST_USER_ID",
            "email": "TEST@TEST.COM",   # required for email notifications
            "number": "+15005550006"    # required for SMS
        }
    })
```

</TabItem>
<TabItem value="php">

```php
# import
use NotificationAPI\NotificationAPI;

# init
$notificationapi = new NotificationAPI('CLIENT_ID', 'CLIENT_SECRET');

# send
$notificationapi->send([
    "notificationId" => "new_comment_notification",
    "user" => [
        "id" => "TEST_USER_ID",
        "email" => "TEST@TEST.COM",   # required for email notifications
        "number" => "+15005550006"    # required for SMS
    ]
]);
```

</TabItem>
</Tabs>

:::info
You must replace the CLIENT_ID and CLIENT_SECRET with real values. You can get yours from [here](https://app.notificationapi.com/environments).
:::

## That's it?

You are now sending notifications through email, SMS, automated voice calls, etc.

Please take the time to review:

- In-App Notifications require our [Front-End SDK](../guides/display-inapp-notifications)
- [Free usage tier](https://www.notificationapi.com/pricing)
- [SMS/Voice Details](../guides/sms-call)
