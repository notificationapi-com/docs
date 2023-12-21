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

The server-side SDKs allow you to trigger sending notifications, setting user preferences and more. Supported environments:

- Node.js <Highlight color="#25c2a0">official</Highlight>
- Python <Highlight color="#25c2a0">official</Highlight>
- PHP <Highlight color="#25c2a0">official</Highlight>
- Go <Highlight color="#25c2a0">official</Highlight>
- C# <Highlight color="#ff9966">documented</Highlight>
- Ruby <Highlight color="#ff9966">documented</Highlight>
- Any environment that supports HTTP calls

If you don't see your language/framework documented here, just ping us on support and we will provide samples and docs.

## Setup & Initialization

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'Node', value: 'js', },
{ label: 'Python', value: 'python', },
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
]
}>
<TabItem value="js">

```bash title="1. Install Package"
npm install notificationapi-node-server-sdk
# yarn add notificationapi-node-server-sdk
# pnpm add notificationapi-node-server-sdk
```

```js title="2. Import"
import notificationapi from 'notificationapi-node-server-sdk';
// or using require:
// const notificationapi = require('notificationapi-node-server-sdk').default;
```

```js title="3. Initialize"
notificationapi.init('CLIENT_ID', 'CLIENT_SECRET');
```

</TabItem>
<TabItem value="python">

```bash title="1. Install Package"
pip install notificationapi_python_server_sdk
```

```python title="2. Import"
from notificationapi_python_server_sdk import (notificationapi)
```

```python title="3. Initialize"
notificationapi.init("CLIENT_ID", "CLIENT_SECRET")
```

</TabItem>
<TabItem value="php">

```bash title="1. Install Package"
composer require notificationapi/notificationapi-php-server-sdk
```

```php title="2. Import"
use NotificationAPI\NotificationAPI;
```

```php title="3. Initialize"
$notificationapi = new NotificationAPI('CLIENT_ID', 'CLIENT_SECRET');
```

</TabItem>
<TabItem value="go">

```bash title="1. Install Package"
go get github.com/notificationapi-com/notificationapi-go-server-sdk
```

```go title="2. Import"
import (
  notificationapi "github.com/notificationapi-com/notificationapi-go-server-sdk"
)
```

```go title="3. Initialize"
notificationapi.Init("CLIENT_ID", "CLIENT_SECRET")
```

</TabItem>
<TabItem value="csharp">

```csharp title="1. Copy the following class to your application"
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

  public async Task<string> SetUserPreferences(string userId, object userPreferences) {
      string jsonString = JsonConvert.SerializeObject(userPreferences);
      HttpContent content = new StringContent(jsonString, Encoding.UTF8, "application/json");
      var response = await httpClient.PostAsync($"{baseURL}/{clientId}/user_preferences/{userId}", content);
      return await response.Content.ReadAsStringAsync();
  }

}
```

```csharp title="2. Initialize"
NotificationAPI notificationapi = new NotificationAPI("CLIENT_ID", "CLIENT_SECRET");
```

</TabItem>
<TabItem value="ruby">

```ruby title="1. Copy the following class to your application"
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

```ruby title="2. Initialize"
notificationapi = NotificationAPI.new("CLIENT_ID", "CLIENT_SECRET")
```

</TabItem>
</Tabs>

| Name              | Type   | Description                                                                                                           |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------- |
| `CLIENT_ID`\*     | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).      |
| `CLIENT_SECRET`\* | string | Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments). |
| `options`         | object | Additional initialization                                                                                             |
| `options.baseUrl` | string | To choose a different region than default (US). Use https://api.ca.notificationapi.com to access the Canada region.   |

\* required

## send

Used to send a notification to the specified user.

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'Node', value: 'js', },
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
  notificationId: 'order_tracking',
  user: {
    id: 'userId_123abc',
    email: 'spongebob@squarepants.com',
    number: '+15005550006'
  },
  mergeTags: {
    item: 'Krabby Patty Burger',
    address: '124 Conch Street',
    orderId: '1234567890'
  }
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.send(
    {
        "notificationId": "order_tracking",
        "user": {
            "id": "userId_123abc",
            "email": "spongebob@squarepants.com",
            "number": "+15005550006",
        },
        "mergeTags": {
            "item": "Krabby Patty Burger",
            "address": "124 Conch Street",
            "orderId": "1234567890"
        }
    }
)
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->send([
    "notificationId" => "order_tracking",
    "user" => [
        "id" => "userId_123abc",
        "email" => "spongebob@squarepants.com",
        "number" => "+15005550006"
    ],
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
mergeTags := make(map[string]interface{}) // Change to map[string]interface{}
mergeTags["item"] = "Krabby Patty Burger"
mergeTags["address"] = "124 Conch Street"
mergeTags["orderId"] = "1234567890"

notificationapi.Send(
  notificationapi.SendRequest{
    NotificationId: "order_tracking",
    User: notificationapi.User{
      Id:     "test_user_id",
      Email:  "spongebob@squarepants.com",
    },
    MergeTags: mergeTags,
  },
)
```

</TabItem>
<TabItem value="csharp">

```csharp
string request = @"{
    ""notificationId"": ""order_tracking"",
    ""user"": {
        ""id"": ""userId_123abc"",
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
notificationapi.send({
  notificationId: 'order_tracking',
  user: {
    id: 'userId_123abc',
    email: 'spongebob@squarepants.com',
    number: '+15005550006'
  },
  mergeTags: {
    item: 'Krabby Patty Burger',
    address: '124 Conch Street',
    orderId: '1234567890'
  }
});
```

</TabItem>
</Tabs>

**Parameters**

The send() method accepts an object with the following fields:

| Name                         | Type                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `notificationId`\*           | string                        | The ID of the notification you wish to send. You can find this value from the dashboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `user`\*                     | object                        | The user to send the notification to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `user.id`\*                  | string                        | The ID of the user in your system. Required. This is the only user field required for sending in-app, web push, and mobile push notifications.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `user.email`                 | string                        | Required for sending email notifications, otherwise optional.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `user.number`                | string                        | Required for SMS/CALL notifications, otherwise optional. Valid format: `+15005550006`. Unformatted US/Canada numbers are also accepted, e.g., (415) 555-1212, 415-555-1212, or 4155551212.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `mergeTags`                  | object                        | Used to pass in dynamic values into the notification design. Read more: [Dynamic Parameters (Merge Tags)](../features/mergetags)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `replace`                    | object, string key/value pair | Similar to mergeTags, but more flexible. Like the programmatic string replace function, this parameter will replace any string in the notification templates with another string. This operation happens on the fly when sending the notification and does not actually modify the templates. <br/> This operation is case-sensitive and happens after mergeTags are injected.                                                                                                                                                                                                                                                                                                                                               |
| `subNotificationId`          | string                        | To break down your notification into multiple categories or groups. Read more: [Sub Notifications](../features/subnotifications)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `templateId`                 | string                        | By default, notifications are sent using the default template of each channel. You can permanently change the default template from the dashboard. However, you can also use this parameter to force using a specific template. This is useful in multiple situations: <br/> - Design variation: using different wording and design, e.g. "You have new updates" vs. "You don't have any updates" <br/> - White-labeling: using a specific template that you designed for a white-labeled customer <br/> - Language: creating and using multiple templates for multiple languages <br/> If the provided templateId does not exist for a channel, the default template will be used, and a warning message will be generated. |
| `forceChannels` (deprecated) | string[]                      | Used to override the channels which are used for the notification. This field only overrides the notification's channels configuration. It does not override the user preferences.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `options`                    | object                        | For configuring additional options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options Object

| Name                      | Type                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                   | object                              | Email options features.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `email.replyToAddresses`  | string[]                            | An array of email addresses to be used in the reply-to field of emails notifications.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `email.ccAddresses`       | string[]                            | An array of emails to be CC'ed on the email notifications.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `email.bccAddresses`      | string[]                            | An array of emails to be BCC'ed on the email notifications.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `email.attachments`       | { filename: string; url: string }[] | An array of publicly accessible URLs and filenames pointing to files that you wish to include as attachments. The URLs only need to be valid for a few minutes after calling the SDK method. After that, the public URLs can be disabled for privacy. The maximum email size (including the content and all attachments) is 10MB. File extensions in the filename property are necessary for the file to show up nicely in the recipient's device.                                                                                                                                                                                                                                           |
| `apn`                     | object                              | Additional Apple push notification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `apn.expiry`              | number                              | The UNIX timestamp representing when the notification should expire. This does not contribute to the 2048 byte payload size limit. An expiry of 0 indicates that the notification expires immediately.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `apn.priority`            | number                              | The priority of the notification. If you omit this header, APNs sets the notification priority to 10. Specify 10 to send the notification immediately. Specify 5 to send the notification based on power considerations on the user’s device. Specify 1 to prioritize the device’s power considerations over all other factors for delivery, and prevent awakening the device.                                                                                                                                                                                                                                                                                                               |
| `apn.collapseId`          | string                              | An identifier you use to merge multiple notifications into a single notification for the user. Typically, each notification request displays a new notification on the user’s device. When sending the same notification more than once, use the same value in this header to merge the requests. The value of this key must not exceed 64 bytes.                                                                                                                                                                                                                                                                                                                                            |
| `apn.threadId`            | string                              | Provide this key with a string value that represents the app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together. For local notifications, this key corresponds to the threadIdentifier property of the UNNotificationContent object.                                                                                                                                                                                                                                                                                                                                           |
| `apn.badge`               | number                              | Include this key when you want the system to modify the badge of your app icon. If this key is not included in the dictionary, the badge is not changed. To remove the badge, set the value of this key to 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `apn.sound`               | string                              | Include this key when you want the system to play a sound. The value of this key is the name of a sound file in your app’s main bundle or in the Library/Sounds folder of your app’s data container. If the sound file cannot be found, or if you specify default for the value, the system plays the default alert sound. For details about providing sound files for notifications; see [here](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/SupportingNotificationsinYourApp.html#//apple_ref/doc/uid/TP40008194-CH4-SW10)                                                                                                |
| `apn.contentAvailable`    | boolean                             | Include this key with a value of 1 to configure a background update notification. When this key is present, the system wakes up your app in the background and delivers the notification to its app delegate. For information about configuring and handling background update notifications, see [here](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW8)                                                                                                                                                                                          |
| `fcm`                     | object                              | Additional Firebase Cloud Messaging push notification options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `fcm.android`             | object                              | Additional Android push notification options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `fcm.android.collapseKey` | string                              | This parameter identifies a group of messages (e.g., with collapse_key: "Updates Available") that can be collapsed, so that only the last message gets sent when delivery can be resumed. This is intended to avoid sending too many of the same messages when the device comes back online or becomes active. Note that there is no guarantee of the order in which messages get sent. Note: A maximum of 4 different collapse keys is allowed at any given time. This means a FCM connection server can simultaneously store 4 different send-to-sync messages per client app. If you exceed this number, there is no guarantee which 4 collapse keys the FCM connection server will keep. |
| `fcm.android.priority`    | string                              | Sets the priority of the message. Valid values are "normal" and "high." On iOS, these correspond to APNs priorities 5 and 10. By default, notification messages are sent with high priority, and data messages are sent with normal priority. Normal priority optimizes the client app's battery consumption and should be used unless immediate delivery is required. For messages with normal priority, the app may receive the message with unspecified delay. When a message is sent with high priority, it is sent immediately, and the app can wake a sleeping device and open a network connection to your server.                                                                    |
| `fcm.android.ttl`         | string                              | This parameter specifies how long (in seconds) the message should be kept in FCM storage if the device is offline. The maximum time to live supported is 4 weeks, and the default value is 4 weeks. For more information, see [Setting the lifespan of a message](https://firebase.google.com/docs/cloud-messaging/concept-options#ttl)                                                                                                                                                                                                                                                                                                                                                      |

## identifyUser

Stores the end-user information for a given user.

By using this function, you can omit the contact information when using send(). NotificationAPI will automatically lookup the user's stored email or phone number and use it for sending the notification.

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
notificationapi.identifyUser({
  id: 'userId_123abc',
  email: 'spongebob@squarepants.com',
  number: '+15005550006',
  pushTokens: [
    {
      type: PushProviders.FCM,
      token: 'samplePushToken',
      device: {
        app_id: 'com.example.app',
        ad_id: '1234567890',
        device_id: '1234567890',
        platform: 'android',
        manufacturer: 'Samsung',
        model: 'SM-G930F'
      }
    }
  ],
  webPushTokens: [
    {
      sub: {
        endpoint:
          'https://fcm.googleapis.com/fcm/send/fCs_4iba0Ao:APA91bGFdaU7I3****JMH_KeZwk1Xi',
        keys: {
          p256dh:
            'zP2xFu3hMc2vNH5E2nuKkyjpZydvCk9llRUY2kP4****9aSlKcoadSV2UbvMRQ',
          auth: 'CXEFun************tYe8g'
        }
      }
    }
  ]
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.identify_user({
    "id": "userId_123abc",
    "email": "spongebob@squarepants.com",
    "number": "+15005550006",
    "pushTokens": [
        {
            "type": "FCM",
            "token": "samplePushToken",
            "device": {
                "app_id": "com.example.app",
                "ad_id": "1234567890",
                "device_id": "1234567890",
                "platform": "android",
                "manufacturer": "Samsung",
                "model": "SM-G930F"
            }
        }
      ],
    "webPushTokens": [
        {
            "sub": {
                "endpoint": "https://fcm.googleapis.com/fcm/send/fCs_4iba0Ao:APA91bGFdaU7I3****JMH_KeZwk1Xi",
                "keys": {
                    "p256dh": "zP2xFu3hMc2vNH5E2nuKkyjpZydvCk9llRUY2kP4****9aSlKcoadSV2UbvMRQ",
                    "auth": "CXEFun************tYe8g"
                }
            }
        }
    ]
})
```

</TabItem>
<TabItem value="php">

```php
$user = [
    'id' => 'userId_123abc',
    'email' => 'spongebob@squarepants.com',
    'number' => '+15005550006',
    'pushTokens' => [
        [
            'type' => 'FCM',
            'token' => 'samplePushToken',
            'device' => [
                'app_id' => 'com.example.app',
                'ad_id' => '1234567890',
                'device_id' => '1234567890',
                'platform' => 'android',
                'manufacturer' => 'Samsung',
                'model' => 'SM-G930F'
            ]
        ]
    ],
    'webPushTokens' => [
        [
            'sub' => [
                'endpoint' => 'https://fcm.googleapis.com/fcm/send/fCs_4iba0Ao:APA91bGFdaU7I3****JMH_KeZwk1Xi',
                'keys' => [
                    'p256dh' => 'zP2xFu3hMc2vNH5E2nuKkyjpZydvCk9llRUY2kP4****9aSlKcoadSV2UbvMRQ',
                    'auth' => 'CXEFun************tYe8g'
                ]
            ]
        ]
    ]
];

$notificationAPI->identifyUser($user);
```

</TabItem>
<TabItem value="go">

```go
number := "+15005550006"
user := NotificationAPI.User{
		Id:     "userId_123abc",
		Email:  "spongebob@squarepants.com",
		Number: &number,
		PushTokens: &[]NotificationAPI.UserPushToken{
			{
				Type:  String("FCM"),
				Token: String("samplePushToken"),
				Device: &NotificationAPI.UserPushTokenDevice{
					App_id:        String("com.example.app"),
					Ad_id:         String("1234567890"),
					Device_id:     String("1234567890"),
					Platform:      String("android"),
					Manufacturer:  String("Samsung"),
					Model:         String("SM-G930F"),
				},
			},
		},
		WebPushTokens: &[]NotificationAPI.UserWebPushToken{
			{
				Sub: struct {
					Endpoint string `json:"endpoint,omitempty"`
					Keys     struct {
						P256DH string `json:"p256dh,omitempty"`
						Auth   string `json:"auth,omitempty"`
					} `json:"keys,omitempty"`
				}{
					Endpoint: "https://fcm.googleapis.com/fcm/send/fCs_4iba0Ao:APA91bGFdaU7I3****JMH_KeZwk1Xi",
					Keys: struct {
						P256DH string `json:"p256dh,omitempty"`
						Auth   string `json:"auth,omitempty"`
					}{
						P256DH: "zP2xFu3hMc2vNH5E2nuKkyjpZydvCk9llRUY2kP4****9aSlKcoadSV2UbvMRQ",
						Auth:   "CXEFun************tYe8g",
					},
				},
			},
		},
	}
var params notificationapi.SetUserPreferencesRequest
NotificationAPI.IdentifyUser(user)
```

</TabItem>
<TabItem value="csharp">

```csharp
var userId = "userId_123abc";
var userData = new Dictionary<string, object>
{
    { "email", "spongebob@squarepants.com" },
    { "number", "+15005550006" },
    {
        "pushTokens", new List<Dictionary<string, object>>
        {
            new Dictionary<string, object>
            {
                { "type", PushProviders.FCM },
                { "token", "samplePushToken" },
                {
                    "device", new Dictionary<string, object>
                    {
                        { "app_id", "com.example.app" },
                        { "ad_id", "1234567890" },
                        { "device_id", "1234567890" },
                        { "platform", "android" },
                        { "manufacturer", "Samsung" },
                        { "model", "SM-G930F" }
                    }
                }
            }
        }
    },
    {
        "webPushTokens", new List<Dictionary<string, object>>
        {
            new Dictionary<string, object>
            {
                "sub", new Dictionary<string, object>
                {
                    { "endpoint", "https://fcm.googleapis.com/fcm/send/fCs_4iba0Ao:APA91bGFdaU7I3****JMH_KeZwk1Xi" },
                    "keys", new Dictionary<string, string>
                    {
                        { "p256dh", "zP2xFu3hMc2vNH5E2nuKkyjpZydvCk9llRUY2kP4****9aSlKcoadSV2UbvMRQ" },
                        { "auth", "CXEFun************tYe8g" }
                    }
                }
            }
        }
    }
};

await notificationApi.IdentifyUser(userId, userData);
```

</TabItem>
<TabItem value="ruby">

```ruby
user_id = "userId_123abc"
user_data = {
  email: "spongebob@squarepants.com",
  number: "+15005550006",
  pushTokens: [
    {
      type: PushProviders::FCM, # Assuming PushProviders::FCM is defined
      token: "samplePushToken",
      device: {
        app_id: "com.example.app",
        ad_id: "1234567890",
        device_id: "1234567890",
        platform: "android",
        manufacturer: "Samsung",
        model: "SM-G930F"
      }
    }
  ],
  webPushTokens: [
    {
      sub: {
        endpoint: "https://fcm.googleapis.com/fcm/send/fCs_4iba0Ao:APA91bGFdaU7I3****JMH_KeZwk1Xi",
        keys: {
          p256dh: "zP2xFu3hMc2vNH5E2nuKkyjpZydvCk9llRUY2kP4****9aSlKcoadSV2UbvMRQ",
          auth: "CXEFun************tYe8g"
        }
      }
    }
  ]
}

notification_api.identify_user(user_id, user_data)
```

</TabItem>

</Tabs>

### Parameters

| Name            | Type     | Description                                                                                                                                                                              |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`\*          | string   | The ID of the user in your system. Required.                                                                                                                                             |
| `email`         | string   | Required for sending email notifications, otherwise optional.                                                                                                                            |
| `number`        | string   | Required for SMS/CALL notifications, otherwise optional. Valid format: +15005550006. Unformatted US/Canada numbers are also accepted, e.g., (415) 555-1212, 415-555-1212, or 4155551212. |
| `pushTokens`    | object[] | Tokens which are required to send mobile push notifications, a user can have multiple devices and a push token is required for each device.                                              |
| `webPushTokens` | object[] | Tokens which are required to send web push notification, a user can have multiple devices and a web push token is required for each device.                                              |

#### pushTokens object

| Name       | Type   | Description                                                          |
| ---------- | ------ | -------------------------------------------------------------------- |
| `type`\*   | string | [apn,fcm] The provider token is to be associated with. Required.     |
| `token`\*  | string | The full token string. Required.                                     |
| `device`\* | object | Information about the device the token is associated with. Required. |

##### device object

| Name           | Type   | Description                                              |
| -------------- | ------ | -------------------------------------------------------- |
| `app_id`       | string | Id of the application the token is used for.             |
| `ad_id`        | string | Id of the advertising identifier.                        |
| `device`\*     | string | Id of the device the token is associated with. Required. |
| `platform`     | string | The device platform i.e. android, ios.                   |
| `manufacturer` | string | The device manufacturer.                                 |
| `model`        | string | The device model .                                       |

#### webPushTokens object

| Name    | Type   | Description                      |
| ------- | ------ | -------------------------------- |
| `sub`\* | object | Web push subscription. Required. |

##### Web push subscription (sub) object

| Name         | Type   | Description                                                                               |
| ------------ | ------ | ----------------------------------------------------------------------------------------- |
| `endpoint`\* | string | The string value containing the endpoint associated with the push subscription. Required. |
| `keys`\*     | object | The keys associated with the push subscription. Required.                                 |

##### Web push subscription keys object

| Name       | Type   | Description                                                                                                                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `p256dh`\* | string | An Elliptic curve Diffie–Hellman public key on the P-256 curve (that is, the NIST secp256r1 elliptic curve). The resulting key is an uncompressed point in ANSI X9.62 format. Required. |
| `auth`\*   | string | An authentication secret, as described in Message Encryption for Web Push. Required.                                                                                                    |

## setUserPreferences

Used to set a user's notification preferences. This function will override the user's existing preferences.

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
notificationapi.setUserPreferences('userId', [
  {
    notificationId: 'new_order',
    channel: 'INAPP_WEB',
    state: false
  },
  {
    notificationId: 'order_tracking',
    channel: 'SMS',
    state: true
  }
]);
```

</TabItem>
<TabItem value="python">

```python
notificationapi.setUserPreferences("userId", [
    {
        "notificationId": "new_order",
        "channel": "INAPP_WEB",
        "state": False
    },
    {
        "notificationId": "order_tracking",
        "channel": "SMS",
        "state": True
    }
])
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->setUserPreferences("userId", [
    [
        "notificationId" => "new_order",
        "channel" => "INAPP_WEB",
        "state" => false
    ],
    [
        "notificationId" => "order_tracking",
        "channel" => "SMS",
        "state" => true
    ]
]);
```

</TabItem>
<TabItem value="go">

```go
jsonParams := `[
  {
    notificationId: "new_order",
    channel: "INAPP_WEB",
    state: false
  },
  {
    notificationId: "order_tracking",
    channel: "SMS",
    state: true
  }
]`
var params notificationapi.SetUserPreferencesRequest
json.Unmarshal([]byte(jsonParams), &params)
notificationapi.SetUserPreferences("userId", params)
```

</TabItem>
<TabItem value="csharp">

```csharp
string userPreferencesRequest = @"
{
    ""userId"": ""userId"",
    ""preferences"": [
        {
            ""notificationId"": ""new_order"",
            ""channel"": ""INAPP_WEB"",
            ""state"": false
        },
        {
            ""notificationId"": ""order_tracking"",
            ""channel"": ""SMS"",
            ""state"": true
        }
    ]
}";

await notificationApi.SetUserPreferences("userId",userPreferencesRequest);
```

</TabItem>
<TabItem value="ruby">

```ruby
user_preferences = [
  { 'notificationId' => 'new_order', 'channel' => 'INAPP_WEB', 'state' => false },
  { 'notificationId' => 'order_tracking', 'channel' => 'SMS', 'state' => true }
]

notification_api.set_user_preferences('userId', user_preferences)
```

</TabItem>

</Tabs>

#### Parameters

| Name            | Type     | Description                                  |
| --------------- | -------- | -------------------------------------------- |
| `userId`\*      | string   | The ID of the user in your system. Required. |
| `preferences`\* | object[] | An array of preference objects.              |

#### Preference Object

| Name               | Type    | Description                                                                                                                   |
| ------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `notificationId`\* | string  | The ID of the notification you wish to send. You can find this value from the dashboard.                                      |
| `channel`\*        | string  | The channel you wish to set the preference for. Accepted values: <br/>`EMAIL`, `INAPP_WEB`, `SMS`, `CALL`, `PUSH`, `WEB_PUSH` |
| `state`\*          | boolean | Whether the preference should be on/off.                                                                                      |

## retract

Only applicable to in-app notifications. This function helps you delete all notifications of a certain type for a user.

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
notificationapi.retract({
  notificationId: 'order_tracking',
  userId: 'userId_123abc'
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.retract({"notificationId": "order_tracking", "userId": "userId_123abc"})
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->retract(["notificationId" => "order_tracking", "userId" => "userId_123abc"]);
```

</TabItem>
<TabItem value="go">

```go
jsonParams := `{
  NotificationId: "order_tracking",
  UserId: "userId_123abc"
}`
var params notificationapi.RetractRequest
json.Unmarshal([]byte(jsonParams), &params)
notificationapi.Retract(params);
```

</TabItem>
<TabItem value="csharp">

```csharp
NotificationAPI notificationapi = new NotificationAPI("CLIENT_ID", "CLIENT_SECRET");
string request = @"{
    ""notificationId"": ""order_tracking"",
    ""userId"": ""userId_123abc""
}";
notificationapi.retract(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
notificationapi.retract({
  notificationId: 'order_tracking',
  userId: 'userId_123abc'
});
```

</TabItem>

</Tabs>

| Name               | Type   | Description                                                                                 |
| ------------------ | ------ | ------------------------------------------------------------------------------------------- |
| `notificationId`\* | string | The ID of the notification you wish to retract. You can find this value from the dashboard. |
| `userId`\*         | string | The ID of the user in your system. Required.                                                |
| `secondaryId`      | string | For when you want to delete a specific subNotificationId.                                   |
