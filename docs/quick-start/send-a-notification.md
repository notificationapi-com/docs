---
sidebar_position: 1
---

# 🚀 Send a notification

#### Prerequisite

- A NotificationAPI account - [sign up for free](https://app.notificationapi.com/signup)
- A configured notification in the dashboard (new accounts already have a demo notification)

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

Install the node package using one of the following package managers:

```bash
npm install notificationapi-node-server-sdk
```

```bash
yarn add notificationapi-node-server-sdk
```

```bash
pnpm add notificationapi-node-server-sdk
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
using System.Security.Cryptography;
using System.Threading.Tasks;
using Newtonsoft.Json;

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

  public async Task<string> IdentifyUser(string userId, object userData) {
      using (var hmac = new HMACSHA256(Encoding.ASCII.GetBytes(clientSecret))) {
          string hashedUserId = Convert.ToBase64String(hmac.ComputeHash(Encoding.ASCII.GetBytes(userId)));
          string customAuth = Convert.ToBase64String(Encoding.ASCII.GetBytes($"{clientId}:{userId}:{hashedUserId}"));
          httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", customAuth);

          string jsonString = JsonConvert.SerializeObject(userData);
          HttpContent content = new StringContent(jsonString, Encoding.UTF8, "application/json");
          var response = await httpClient.PostAsync($"{baseURL}/{clientId}/users/{Uri.EscapeDataString(userId)}", content);
          return await response.Content.ReadAsStringAsync();
      }
  }

  public async Task<string> CreateSubNotification(string notificationId, string subNotificationId, string title) {
      var payload = new { title = title };
      string jsonString = JsonConvert.SerializeObject(payload);
      HttpContent content = new StringContent(jsonString, Encoding.UTF8, "application/json");
      var response = await httpClient.PutAsync($"{baseURL}/{clientId}/notifications/{notificationId}/subNotifications/{subNotificationId}", content);
      return await response.Content.ReadAsStringAsync();
  }

  public async Task<string> DeleteSubNotification(string notificationId, string subNotificationId) {
      var response = await httpClient.DeleteAsync($"{baseURL}/{clientId}/notifications/{notificationId}/subNotifications/{subNotificationId}");
      return await response.Content.ReadAsStringAsync();
  }

    public async Task<string> UpdateSchedule(string trackingId, object scheduleRequest) {
      string jsonString = JsonConvert.SerializeObject(scheduleRequest);
      HttpContent content = new StringContent(jsonString, Encoding.UTF8, "application/json");
      var response = await httpClient.PatchAsync($"{baseURL}/{clientId}/schedule/{trackingId}", content);
      return await response.Content.ReadAsStringAsync();
  }

  public async Task<string> DeleteSchedule(string trackingId) {
      var response = await httpClient.DeleteAsync($"{baseURL}/{clientId}/schedule/{trackingId}");
      return await response.Content.ReadAsStringAsync();
  }

  public async Task<string> SetUserPreferences(string userId, object userPreferences) {
      string jsonString = JsonConvert.SerializeObject(userPreferences);
      HttpContent content = new StringContent(jsonString, Encoding.UTF8, "application/json");
      var response = await httpClient.PostAsync($"{baseURL}/{clientId}/user_preferences/{userId}", content);
      return await response.Content.ReadAsStringAsync();
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
require 'openssl'

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

  def identify_user(user_id, user_data)
    digest = OpenSSL::Digest::SHA256.new
    hmac = OpenSSL::HMAC.digest(digest, @client_secret, user_id)
    hashed_user_id = Base64.strict_encode64(hmac)
    custom_auth = Base64.strict_encode64("#{@client_id}:#{user_id}:#{hashed_user_id}")

    send_request('POST', "users/#{URI.escape(user_id)}", user_data, custom_auth)
  end

  def create_sub_notification(notification_id, sub_notification_id, title)
    payload = { title: title }
    send_request('PUT', "notifications/#{notification_id}/subNotifications/#{sub_notification_id}", payload)
  end

  def delete_sub_notification(notification_id, sub_notification_id)
    send_request('DELETE', "notifications/#{notification_id}/subNotifications/#{sub_notification_id}")
  end

  def update_schedule(tracking_id, scheduleUpdate)
    send_request('PATCH', "notifications/#{tracking_id}", scheduleUpdate)
  end

  def delete_schedule(tracking_id)
    send_request('DELETE', "notifications/#{tracking_id}")
  end

  def set_user_preferences(user_id, user_preferences)
    send_request('POST', "user_preferences/#{user_id}", user_preferences)
  end

  private

  def send_request(method, uri, data = {}, auth = "Basic #{@auth_token}")
    payload = data.to_json
    response = @http_client.send_request(
      method,
      "/#{@client_id}/#{uri}",
      payload,
      {
        'Content-Type' => 'application/json',
        'Authorization' => auth
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
  // The ID of the notification you wish to send.
  // You can find this value from the dashboard.
  notificationId: 'order_tracking',
  // The user to send the notification to.
  user: {
    id: 'spongebob.squarepants',
    email: 'spongebob@squarepants.com' //required for email notifications
  },
  // mergeTags is to pass dynamic values into the notification design.
  mergeTags: {
    item: 'Krabby Patty Burger',
    address: '124 Conch Street',
    orderId: '1234567890'
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
        #The ID of the notification you wish to send. You can find this
        #value from the dashboard.
        "notificationId": "order_tracking",

        # The user to send the notification to.
        "user": {
            "id": "spongebob.squarepants",
            "email": "spongebob@squarepants.com", # required for email notifications
        },
        # mergeTags is to pass dynamic values into the notification design.
        "mergeTags": {
            "item": "Krabby Patty Burger",
            "address": "124 Conch Street",
            "orderId": "1234567890"
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
    #The ID of the notification you wish to send. You can find this
    #value from the dashboard.
    "notificationId" => "order_tracking",
    # The user to send the notification to.
    "user" => [
        "id" => "spongebob.squarepants",
        "email" => "spongebob@squarepants.com",   # required for email notifications
    ],
    # mergeTags is to pass dynamic values into the notification design.
    "mergeTags" => [
        "item" => "Krabby Patty Burger",
        "address" => "124 Conch Street",
        "orderId" => "1234567890"
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
  "encoding/json"
)

func main() {
	// init
	notificationapi.Init("CLIENT_ID", "CLIENT_SECRET")

  //mergeTags is to pass dynamic values into the notification design.
  mergeTags := make(map[string]interface{}) // Change to map[string]interface{}
  mergeTags["item"] = "Krabby Patty Burger"
  mergeTags["address"] = "124 Conch Street"
  mergeTags["orderId"] = "1234567890"

  notificationapi.Send(
    notificationapi.SendRequest{
      //The ID of the notification you wish to send. You can find this
      //value from the dashboard.
      NotificationId: "order_tracking",
      //The user to send the notification to.
      User: notificationapi.User{
        Id:     "spongebob.squarepants",
        Email:  "spongebob@squarepants.com",
      },
      MergeTags: mergeTags,
    },
  )
}

```

</TabItem>
<TabItem value="csharp">

```csharp
NotificationAPI notificationapi = new NotificationAPI("CLIENT_ID", "CLIENT_SECRET");
string request = @"{
    ""notificationId"": ""order_tracking"",
    ""user"": {
        ""id"": ""spongebob.squarepants"",
        ""email"": ""spongebob@squarepants.com""
    },
    ""mergeTags"": {
        ""item"": ""Krabby Patty Burger"",
        ""address"": ""124 Conch Street"",
        ""orderId"": ""1234567890""
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
  #The ID of the notification you wish to send. You can find this
  #value from the dashboard.
  notificationId: 'order_tracking',
  # The user to send the notification to.
  user: {
    id: 'spongebob.squarepants',
    email: 'spongebob@squarepants.com', # required for email notifications
  },
  # mergeTags is to pass dynamic values into the notification design.
  mergeTags: {
    item: 'Krabby Patty Burger',
    address: '124 Conch Street',
    orderId: '1234567890'
  }
});
```

</TabItem>
</Tabs>

:::info
You can get your CLIENT_ID and CLIENT_SECRET from [here](https://app.notificationapi.com/environments).
:::

## Next Steps

You are now successfully sending notifications to any channel you wish. 🎉

Let's do a few more things:

- [🔔 Display In-App Notifications](/quick-start/display-inapp-notifications)
- [⚙️ Manage User Notification Preferences](/quick-start/manage-preferences)
- [📱 Setup Mobile Push](/guides/mobile-push)
- [🌐 Setup Web Push](/guides/web-push)
