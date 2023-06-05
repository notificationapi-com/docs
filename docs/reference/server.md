---
sidebar_position: 1
---

# Server SDKs (Back-end)

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
      fontSize: '0.75rem'
    }}>
{children}
</span>
);

The server-side SDKs allow you to trigger sending notifications. Supported environments:

- Node.js <Highlight color="#25c2a0">official</Highlight>
- Python <Highlight color="#25c2a0">official</Highlight>
- PHP <Highlight color="#25c2a0">official</Highlight>
- Go <Highlight color="#25c2a0">official</Highlight>
- C# <Highlight color="#ff9966">documented</Highlight>
- Ruby <Highlight color="#ff9966">documented</Highlight>
- Any environment that supports HTTP calls

If you don't see your language/framework documented here, just ping us on support and we will provide samples and docs.

## Setup

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'python', },
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
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

## send()

Used to send a notification to the specified user.

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'python', },
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
]
}>
<TabItem value="js">

```js title="Example"
import notificationapi from 'notificationapi-node-server-sdk';

notificationapi.init('CLIENT_ID', 'CLIENT_SECRET', 'BASE_URL');
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
<TabItem value="go">

```go title="Example"
package main

import (
	notificationapi "github.com/notificationapi-com/notificationapi-go-server-sdk"
)

func main() {
	notificationapi.Init("CLIENT_ID", "CLIENT_SECRET")
	mergeTags := make(map[string]string)
	mergeTags["firstName"] = "test"
	params := notificationapi.SendRequest{NotificationId: "hello_world", User: notificationapi.User{
		Id:     "123",
		Email:  "test@test.com",
		Number: "+15005550006",
	},
		MergeTags: mergeTags,
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

```ruby title="Example"
require './NotificationAPI'

notificationapi = NotificationAPI.new("CLIENT_ID", "CLIENT_SECRET")
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
</Tabs>

**Parameters**

##### `CLIENT_ID` (required)

Type: string

Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).

##### `CLIENT_SECRET` (required)

Type: string

Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments).

##### `BASE_URL` (optional)

Type: string

To choose a different region than default. Pass 'https://api.ca.notificationapi.com' for the Canada region.

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

Used to pass in dynamic values into the notification design. Read more: [Passing dynamic values to notifications](#mergetags-passing-dynamic-values-to-notifications)

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
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
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
<TabItem value="go">

```go title="Example"
package main

import (
  notificationapi"github.com/notificationapi-com/notificationapi-go-server-sdk"
)

func main() {
notificationapi.Init("CLIENT_ID","CLIENT_SECRET")

	replace:=make(map[string]string)
	replace["Dollars"]="Euros"
    replace["#ff0000"]="#0000ff"
params:=notificationapi.SendRequest{...,
    Replace: replace
  }
  notificationapi.Send(params)
}
```

</TabItem>
<TabItem value="csharp">

```csharp
NotificationAPI notificationapi = new NotificationAPI("CLIENT_ID", "CLIENT_SECRET");
string request = @"{
    ...,
    ""replace"": {
        ""Dollars"": ""Euros"",
        ""#ff0000"": ""#0000ff""
    }
}";
notificationapi.send(request);
```

</TabItem>
<TabItem value="ruby">

```ruby title="Example"
notificationapi.send({
  ...,
  replace: {
    "Dollars": "Euros",
    "#ff0000": "#0000ff"
  }
});
```

</TabItem>
</Tabs>

In the example above:

- The word "Dollars" will be replaced with "Euros" in **all** the templates used for this notification.
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
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
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
<TabItem value="go">

```go
notificationapi.Retract(RetractRequest{
  NotificationId: "hello_world",
  UserId: "123"
});
```

</TabItem>
<TabItem value="csharp">

```csharp
NotificationAPI notificationapi = new NotificationAPI("CLIENT_ID", "CLIENT_SECRET");
string request = @"{
    ""notificationId"": ""hello_world"",
    ""userId"": ""123""
}";
notificationapi.retract(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
notificationapi.retract({
  notificationId: 'hello_world',
  userId: '123'
});
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
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
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
<TabItem value="go">

```go
mergeTags:=make(map[string]string)
mergeTags["firstName"]="Jane"
notificationapi.Send(
	SendRequest{
		NotificationId:"hello_world",
		User: notificationapi.User{
			Id:"123",
			Email:"test@test.com",
			 Number:"+15005550006"
		},
		MergeTags: mergeTags,
	}
);
```

</TabItem>
<TabItem value="csharp">

```csharp
string request = @"{
    ""notificationId"": ""hello_world"",
    ""user"": {
        ""id"": ""123"",
        ""email"": ""test@test.com"",
        ""number"": ""+15005550006""
    },
    ""mergeTags"": {
        ""firstName"": ""Jane""
    }
}";
notificationapi.send(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com', number: '+15005550006' },
  mergeTags: { firstName: 'Jane' }
});
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
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
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
<TabItem value="go">

```go
user := map[string]interface{}{
	"firstName": "Jane",
	"lastName": "Doe",
	"orders": []interface{}{
		map[string]string{"id": "123", "productName": "hasan"},
		map[string]string{"id": "124", "productName": "socks"},
	},
}
notificationapi.Send(
	SendRequest{
		NotificationId:"hello_world",
		User: notificationapi.User{
			Id:"123",
			Email:"test@test.com",
			 Number:"+15005550006"
		},
		MergeTags: user,
	}
);
```

</TabItem>
<TabItem value="csharp">

```csharp
string request = @"{
    ""notificationId"": ""hello_world"",
    ""user"": {
        ""id"": ""123"",
        ""email"": ""test@test.com"",
        ""number"": ""+15005550006""
    },
    ""mergeTags"": {
        ""user"": {
            ""firstName"": ""Jane"",
            ""lastName"": ""Doe"",
            ""orders"": [
                {
                    ""id"": ""123"",
                    ""productName"": ""socks""
                },
                {
                    ""id"": ""124"",
                    ""productName"": ""socks""
                }
            ]
        }
    }
}";
notificationapi.send(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
user = {
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
  mergeTags: { user: user }
});
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
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
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
<TabItem value="go">

```go

 notificationapi.Send(
	notificationapi.SendRequest{
		NotificationId:"hello_world",
		User: notificationapi.User{
			Id:"123",
			Email:"test@test.com",
		},
		ForceChannels: []string{"EMAIL","INAPP_WEB"},
	},
)

```

</TabItem>
<TabItem value="csharp">

```csharp
string request = @"{
    ""notificationId"": ""hello_world"",
    ""user"": {
        ""id"": ""123"",
        ""email"": ""test@test.com""
    },
    ""forceChannels"": [""EMAIL"", ""INAPP_WEB""]
}";
notificationapi.send(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com' },
  forceChannels: ['EMAIL', 'INAPP_WEB']
});
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
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
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
    },
    apn: {
      expiry: 1685983222,
      priority: 10
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
            },
            "apn": {
                "expiry": 1685983222,
                "priority": 10
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
            ],
            "apn" => [
              "expiry" => 1685983222,
              "priority" => 10
            ],
        ],
    ]
);
```

</TabItem>
<TabItem value="go">

```go
	notificationapi.Send(
		notificationapi.SendRequest{
			NotificationId: "hello_world",
			User: notificationapi.User{
				Id:     "123",
				Email:  "test@test.com",
				Number: "+15005550006",
			},
			Options: &notificationapi.SendRequestOptions{
				Email: notificationapi.SendRequestEmailOptions{
					ReplyToAddresses: []string{"noreply@test.com"},
					Attachments: []notificationapi.EmailAttachments{
						{
							Filename: "sample.pdf",
							Url:      "https://docs.notificationapi.com/lorem-ipsum.pdf",
						},
					},
				},
              apn: notificationapi.SendRequestEmailOptions{
                expiry: 1685983222,
                priority: 10
              },
			},
		},
	)
```

</TabItem>
<TabItem value="csharp">

```csharp
string request = @"{
    ""notificationId"": ""hello_world"",
    ""user"": {
        ""id"": ""123"",
        ""email"": ""test@test.com"",
        ""number"": ""+15005550006"",
    },
    ""options"": {
        ""email"": {
            ""replyToAddresses"": [""noreply@test.com""],
            ""attachments"": [
                {
                    ""filename"": ""sample.pdf"",
                    ""url"": ""https://docs.notificationapi.com/lorem-ipsum.pdf"",
                }
            ],
        },
        ""apn"": {
            ""expiry"": 1685983222,
            ""priority"": 10
        }
    }
}";
notificationapi.send(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
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
    },
    apn: {
      expiry: 1685983222,
      priority: 10
    }
  }
});
```

</TabItem>
</Tabs>

Available options:

- `options.email.replyToAddresses` (string[]): An array of email addresses to be used in the reply-to field of emails notifications.
- `options.email.ccAddresses` (string[]): An array of emails to be CC'ed on the email notifications.
- `options.email.bccAddresses` (string[]): An array of emails to be BCC'ed on the email notifications.
- `options.email.attachments` ({ filename: string; url: string }[]): An array of publicly accessible URLs and filenames pointing to files that you wish to include as attachments. The URLs only need to be valid for a few minutes after calling the SDK method. After that, the public URLs can be disabled for privacy. The maximum email size (including the content and all attachments) is 10MB. File extensions in the filename property are necessary for the file to show up nicely in the recipient's device.
- `options.apn.expiry` (number): The UNIX timestamp representing when the notification should expire. This does not contribute to the 2048 byte payload size limit. An expiry of 0 indicates that the notification expires immediately.
- `options.apn.priority` (number): The priority of the notification. If you omit this header, APNs sets the notification priority to 10. Specify 10 to send the notification immediately. Specify 5 to send the notification based on power considerations on the user’s device. Specify 1 to prioritize the device’s power considerations over all other factors for delivery, and prevent awakening the device.
- `options.apn.collapseId` (string): An identifier you use to merge multiple notifications into a single notification for the user. Typically, each notification request displays a new notification on the user’s device. When sending the same notification more than once, use the same value in this header to merge the requests. The value of this key must not exceed 64 bytes.
- `options.apn.threadId` (string): Provide this key with a string value that represents the app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together. For local notifications, this key corresponds to the threadIdentifier property of the UNNotificationContent object.
- `options.apn.badge` (number): Include this key when you want the system to modify the badge of your app icon. If this key is not included in the dictionary, the badge is not changed. To remove the badge, set the value of this key to 0.
- `options.apn.sound` (string): Include this key when you want the system to play a sound. The value of this key is the name of a sound file in your app’s main bundle or in the Library/Sounds folder of your app’s data container. If the sound file cannot be found, or if you specify default for the value, the system plays the default alert sound. For details about providing sound files for notifications; see [here](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/SupportingNotificationsinYourApp.html#//apple_ref/doc/uid/TP40008194-CH4-SW10)
- `options.apn.contentAvailable` (boolean): Include this key with a value of 1 to configure a background update notification. When this key is present, the system wakes up your app in the background and delivers the notification to its app delegate. For information about configuring and handling background update notifications, see [here](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW8)

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
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
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
<TabItem value="go">

```go
	notificationapi.Send(
		notificationapi.SendRequest{
			NotificationId: "hello_world",
			User: notificationapi.User{
				Id:     "123",
				Email:  "test@test.com",
				Number: "+15005550006",
			},
			SubNotificationId: "abc",
		},
	)
```

</TabItem>
<TabItem value="csharp">

```csharp
string request = @"{
    ""notificationId"": ""hello_world"",
    ""user"": {
        ""id"": ""123"",
        ""email"": ""test@test.com"",
        ""number"": ""+15005550006"",
    },
    ""subNotificationId"": ""abc""
}";
notificationapi.send(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
notificationapi.send({
  notificationId: 'hello_world',
  user: { id: '123', email: 'test@test.com', number: '+15005550006' },
  subNotificationId: 'abc'
});
```

</TabItem>
</Tabs>
