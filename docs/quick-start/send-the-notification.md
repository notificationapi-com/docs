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
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' }
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
<TabItem value="go">

```bash
go get github.com/notificationapi-com/notificationapi-go-server-sdk
```

</TabItem>
<TabItem value="csharp">

```csharp
// Create the followinng class in your application:

using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class NotificationAPI {
  private string baseURL = "https://api.notificationapi.com";
  private string clientId;
  private HttpClient httpClient;

  public NotificationAPI(string clientId, string clientSecret) {
    this.clientId = clientId;
    string authToken = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes($"{clientId}:{clientSecret}"));
    this.httpClient = new HttpClient();
    this.httpClient.DefaultRequestHeaders.Add("Authorization", $"Basic {authToken}");
  }

  public async Task<string> send(string request) {
    HttpContent payload = new StringContent(request, Encoding.UTF8, "application/json");
    var response = await this.httpClient.PostAsync($"{this.baseURL}/{this.clientId}/sender", payload);
    var responseContent = await response.Content.ReadAsStringAsync();
    return responseContent;
  }

  public async Task<string> retract(string request) {
    HttpContent payload = new StringContent(request, Encoding.UTF8, "application/json");
    var response = await this.httpClient.PostAsync($"{this.baseURL}/{this.clientId}/sender/retract", payload);
    var responseContent = await response.Content.ReadAsStringAsync();
    return responseContent;
  }

}
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
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' }
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
<TabItem value="go">

```go
package main

// import
import (
	notificationapi "github.com/notificationapi-com/notificationapi-go-server-sdk"
)

func main() {
	// init
	notificationapi.Init("CLIENT_ID", "CLIENT_SECRET")

	// send
	params := notificationapi.SendRequest{NotificationId: "new_comment_notification", User: notificationapi.User{
		Id:     "TEST_USER_ID",
		Email:  "TEST@TEST.COM", // required for email notifications
		Number: "+15005550006",  // required for SMS and call
	},
	}
	notificationapi.Send(params)
}

```

</TabItem>
<TabItem value="csharp">

```csharp
NotificationAPI notificationapi = new NotificationAPI("CLIENT_ID", "CLIENT_SECRET");
string request = @"{
    ""notificationId"": ""hello_world"",
    ""user"": {
        ""id"": ""123"",
        ""email"": ""test@test.com"",
        ""number"": ""+15005550006""
    },
    ""mergeTags"": {
        ""firstName"": ""FIRST_NAME""
    }
}";
notificationapi.send(request);
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
