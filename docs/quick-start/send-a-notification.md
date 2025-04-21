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
{ label: 'Java', value: 'java' },
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

Install the package:

```csharp
dotnet add package NotificationAPI --version 0.5.0
```

</TabItem>
<TabItem value="java">

Add the following dependency to your Maven project:

```xml
<dependency>
    <groupId>com.notificationapi</groupId>
    <artifactId>notificationapi-java-server-sdk</artifactId>
    <version>0.1.0</version>
</dependency>
```

For optimal functionality, you'll also need the following dependencies:

```xml
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.14</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.2</version>
</dependency>
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
    # if in the CA region, use 'https://api.ca.notificationapi.com'
    # if in the EU region, use 'https://api.eu.notificationapi.com'
    @base_url = 'https://api.notificationapi.com'
    @client_id = client_id
    @auth_token = Base64.strict_encode64("#{client_id}:#{client_secret}")
    # if in the CA region, use 'api.ca.notificationapi.com'
    # if in the EU region, use 'api.eu.notificationapi.com'
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
{ label: 'Java', value: 'java' },
{ label: 'Ruby', value: 'ruby' }
]
}>
<TabItem value="js">

```js
// import/require:
import notificationapi from 'notificationapi-node-server-sdk';
// const notificationapi = require('notificationapi-node-server-sdk').default

// initialize notificationapi (default US region)
// if in the CA region, add 'https://api.ca.notificationapi.com' after CLIENT_SECRET
// if in the EU region, add 'https://api.eu.notificationapi.com' after CLIENT_SECRET
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
import asyncio
from notificationapi_python_server_sdk import (notificationapi)

# initialize notificationapi (default US region)
# if in the CA region, add 'https://api.ca.notificationapi.com' after CLIENT_SECRET
# if in the EU region, add 'https://api.eu.notificationapi.com' after CLIENT_SECRET
notificationapi.init("CLIENT_ID", "CLIENT_SECRET")

# send
async def send_notification():
  await notificationapi.send(
    {
      "notificationId": "order_tracking",
      "user": {
          "id": "spongebob.squarepants",
          "email": "spongebob@squarepants.com"
      },
      "mergeTags": {
          "item": "Krabby Patty Burger",
          "address": "124 Conch Street",
          "orderId": "1234567890"
      }
    }
  )

# Run the async function
asyncio.run(send_notification())
```

</TabItem>
<TabItem value="php">

```php
# import
use NotificationAPI\NotificationAPI;

# init
# if in the CA Region, add 'https://api.ca.notificationapi.com' after Client Secret
# if in the EU Region, add 'https://api.eu.notificationapi.com' after Client Secret
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
        "number" => "+15005550006" # optional phone number required to send SMS notifications
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
  // init (US region)
  // if in CA Region, replace API URL with 'https://api.ca.notificationapi.com'
  // if in EU Region, replace API URL with 'https://api.eu.notificationapi.com'
  notificationapi.Init("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com")

  // mergeTags is to pass dynamic values into the notification design.
  mergeTags := make(map[string]interface{})
  mergeTags["item"] = "Krabby Patty Burger"
  mergeTags["address"] = "124 Conch Street"
  mergeTags["orderId"] = "1234567890"

  notificationapi.Send(
    notificationapi.SendRequest{
      // The ID of the notification you wish to send. You can find this
      // value from the dashboard.
      NotificationId: "order_tracking",
      // The user to send the notification to.
      User: notificationapi.User{
        Id:     "spongebob.squarepants",
        Email:  "spongebob@squarepants.com",
        Number: "+15005550006" // Optional phone number required to send SMS notifications
      },
      MergeTags: mergeTags,
    },
  )
}

```

</TabItem>
<TabItem value="csharp">

```csharp
//import
using NotificationApi.Server;
using NotificationApi.Server.Models;

// initialize notificationapi (default US region)
// if in the CA region, add 'https://api.ca.notificationapi.com' after boolean argument
// if in the EU region, add 'https://api.eu.notificationapi.com' after boolean argument
var notificationApi = new NotificationApiServer("CLIENT_ID", "CLIENT_SECRET", false);

//send
var user = new NotificationUser("spongebob.squarepants")
{
    Email = "spongebob@squarepants.com",
    TelephoneNumber = "+15005550006"
};

var mergeTags = new Dictionary<string, object>
{
    { "item", "Krabby Patty Burger" },
    { "address", "124 Conch Street" },
    { "orderId", "1234567890" }
};

await notificationApi.Send(new SendNotificationData("order_tracking", user)
{
    MergeTags = mergeTags
});
```

</TabItem>
<TabItem value="java">

```java
// import
import com.notificationapi.NotificationApi;
import com.notificationapi.model.NotificationRequest;
import com.notificationapi.model.User;
import java.util.HashMap;
import java.util.Map;

// Initialize NotificationAPI (default US region)
// If in the CA region, use the third parameter: "https://api.ca.notificationapi.com"
// If in the EU region, use the third parameter: "https://api.eu.notificationapi.com"
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET");

// Create user
User user = new User("spongebob.squarepants")
    .setEmail("spongebob@squarepants.com") // required for email notifications
    .setNumber("+15005550006"); // optional phone number required to send SMS notifications

// Create merge tags
Map<String, Object> mergeTags = new HashMap<>();
mergeTags.put("item", "Krabby Patty Burger");
mergeTags.put("address", "124 Conch Street");
mergeTags.put("orderId", "1234567890");

// Create and send notification request
NotificationRequest request = new NotificationRequest("order_tracking", user)
    .setMergeTags(mergeTags);

String response = api.send(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
# require:
require './NotificationAPI'

# initialize notificationapi (default US region)
# if in the CA region, add 'https://api.ca.notificationapi.com' after CLIENT_SECRET
# if in the EU region, add 'https://api.eu.notificationapi.com' after CLIENT_SECRET
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
