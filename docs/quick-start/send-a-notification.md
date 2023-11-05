---
sidebar_position: 1
---

# 🚀 Send a notification

#### Prerequisite

- A NotificationAPI account - [sign up](https://app.notificationapi.com/signup)
- A notification configured in our dashboard (new accounts already have a demo notification)

## Overview

Your team, even non-technical members, can use our dashboard to configure and design your standard notifications without any coding knowledge. For example, they would configure an alert to go over email and completely design its content, subject, etc.

Then, through our SDKs or API, your back-end lets us know when to send this notification to a user. We then take care of the rest.

Let's learn...

## Step 1: Setup the SDK

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'Node', value: 'js' },
{ label: 'Python', value: 'python' },
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
]}>
<TabItem value="js">

```bash
npm install notificationapi-node-server-sdk
# yarn add notificationapi-node-server-sdk
# pnpm add notificationapi-node-server-sdk
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
<TabItem value="ruby">

```ruby
# Create the following class in your application

require 'net/http'
require 'json'
require 'base64'

class NotificationAPI
  def initialize(client_id, client_secret)
    @base_url = 'https://api.notificationapi.com'
    @client_id = client_id
    @auth_token = Base64.strict_encode64("#{client_id}:#{client_secret}")
    @http_client = Net::HTTP.new('api.notificationapi.com', 443)
    @http_client.use_ssl = true
  end

  def send(request)
    payload = request.to_json
    response = @http_client.post(
      "/#{@client_id}/sender",
      payload,
      {
        'Content-Type' => 'application/json',
        'Authorization' => "Basic #{@auth_token}"
      }
    )
    response.body
  end

  def retract(request)
    payload = request.to_json
    response = @http_client.post(
      "/#{@client_id}/sender/retract",
      payload,
      {
        'Content-Type' => 'application/json',
        'Authorization' => "Basic #{@auth_token}"
      }
    )
    response.body
  end
end
```

</TabItem>
</Tabs>

## Step 2: Send the Notification

Our `send` function or `POST /sender` API call takes a JSON payload that specifies which notification to send and to whom. It also has a `mergeTags` field that you can use to personalize the notification.

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'Node', value: 'js' },
{ label: 'Python', value: 'python' },
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
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
  },
  mergeTags: {
    firstName: 'Stranger'
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
<TabItem value="ruby">

```ruby
# require:
require './NotificationAPI'

# init
notificationapi = NotificationAPI.new("CLIENT_ID", "CLIENT_SECRET")

# send
notificationapi.send({
  notificationId: 'new_comment_notification',
  user: {
    id: 'TEST_USER_ID',
    email: 'TEST@TEST.COM', # required for email notifications
    number: '+15005550006' # required for SMS
  }
});
```

</TabItem>
</Tabs>

:::info
You can get your CLIENT_ID and CLIENT_SECRET from [here](https://app.notificationapi.com/environments).
:::

## Next Steps

You are now sending notifications through email, SMS, automated voice calls, etc.

Please take the time to review:

- In-App Notifications require our [Front-End SDK](../guides/display-inapp-notifications)
- [Free usage tier](https://www.notificationapi.com/pricing)
- [SMS/Voice Details](../guides/sms-call)