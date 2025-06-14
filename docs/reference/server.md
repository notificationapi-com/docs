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
- Laravel <Highlight color="#25c2a0">official</Highlight>
- Go <Highlight color="#25c2a0">official</Highlight>
- C# <Highlight color="#25c2a0">official</Highlight>
- Java <Highlight color="#25c2a0">official</Highlight>
- Ruby <Highlight color="#ff9966">documented</Highlight>
- Rust <Highlight color="#ff9966">documented</Highlight>
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
{ label: 'Laravel', value: 'laravel' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Java', value: 'java' },
{ label: 'Ruby', value: 'ruby' },
{ label: 'Rust', value: 'rust' }
]
}>
<TabItem value="js">

1. Install using one of the following package managers:

```bash
npm install notificationapi-node-server-sdk
```

```shell
yarn add notificationapi-node-server-sdk
```

```shell
pnpm add notificationapi-node-server-sdk
```

2. Import:

```js
import notificationapi from 'notificationapi-node-server-sdk';
// or using require:
// const notificationapi = require('notificationapi-node-server-sdk').default;
```

3. Initialize:

```js
notificationapi.init('CLIENT_ID', 'CLIENT_SECRET');
```

| Name              | Type              | Description                                                                                                                                                                                      |
| ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CLIENT_ID`\*     | string            | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                                                                                 |
| `CLIENT_SECRET`\* | string            | Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments).                                                                            |
| `config`          | InitConfiguration | Optional configuration object for additional initialization options                                                                                                                              |
| `config.baseURL`  | string \| Region  | To choose a different region other than default (https://api.notificationapi.com), use 'https://api.eu.notificationapi.com' for EU region or 'https://api.ca.notificationapi.com' for CA region. |

\* required

Region specific example:

```js
import notificationapi from 'notificationapi-node-server-sdk';

notificationapi.init('CLIENT_ID', 'CLIENT_SECRET', {
  baseURL: 'https://api.eu.notificationapi.com'
});
```

</TabItem>
<TabItem value="python">

1. Install Package:

```bash
pip install notificationapi_python_server_sdk
```

2. Import:

```python
from notificationapi_python_server_sdk import notificationapi
```

3. Initialize:

```python
notificationapi.init("CLIENT_ID", "CLIENT_SECRET")
```

| Name              | Type   | Description                                                                                                                                                                                |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CLIENT_ID`\*     | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                                                                           |
| `CLIENT_SECRET`\* | string | Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments).                                                                      |
| `base_url`        | string | To choose a different region than default (https://api.notificationapi.com), use 'https://api.eu.notificationapi.com' for EU region and 'https://api.ca.notificationapi.com for CA region. |

\* required

Region specific example:

```python
notificationapi.init("CLIENT_ID", "CLIENT_SECRET", "https://api.eu.notificationapi.com")
```

</TabItem>
<TabItem value="php">

1. Install Package:

```bash
composer require notificationapi/notificationapi-php-server-sdk
```

2. Import:

```php
use NotificationAPI\NotificationAPI;
```

3. Initialize:

```php
$notificationapi = new NotificationAPI('CLIENT_ID', 'CLIENT_SECRET');
```

| Name              | Type   | Description                                                                                                                                                                                |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CLIENT_ID`\*     | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                                                                           |
| `CLIENT_SECRET`\* | string | Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments).                                                                      |
| `baseURL`         | string | To choose a different region than default (https://api.notificationapi.com), use 'https://api.eu.notificationapi.com' for EU region and 'https://api.ca.notificationapi.com for CA region. |

\* required

Region specific example:

```php
use NotificationAPI\NotificationAPI;

$notificationapi = new NotificationAPI("CLIENT_ID", "CLIENT_SECRET", "https://api.eu.notificationapi.com");
```

</TabItem>
<TabItem value="laravel">

:::info
Our Laravel Server SDK is compatible with Laravel 9, 10 or 11. If you're using a different version please use our PHP Server SDK.
:::

1. Install Package:

To install the Laravel Server SDK you may need to set your `composer.json`'s `"minimum-stability"` field to `"dev"`, then:

```bash
composer require notificationapi/notificationapi-laravel-server-sdk:@dev
```

Or, if you prefer to keep your `composer.json`'s `"minimum-stability"` field set to `"stable"`, then:

```bash
composer require notificationapi/notificationapi-php-server-sdk:@dev
```

```bash
composer require notificationapi/notificationapi-laravel-server-sdk:@dev -W
```

2. Register the NotificationApiServiceProvider:

For Laravel 9 or 10 add the service provider to `config/app.php`.

```php
'providers' => [
	// ...
	NotificationAPI\NotificationApiServiceProvider::class,
]
```

For Laravel 11 add the service provider to `bootstrap/providers.php`.

```php
return [
	// ...
	NotificationAPI\NotificationApiServiceProvider::class,
]
```

3. Add NotificationAPI keys to `.env`:

```php
NOTIFICATION_API_KEY=clientID
NOTIFICATION_API_SECRET=clientSecret
```

No region variable is required for US region, but if using the CA (Canada) region add:

```php
NOTIFICATION_API_REGION=CA
```

Or, if using the EU (Europe) region add:

```php
NOTIFICATION_API_REGION=EU
```

4. Add this class to `Models/NotificationUser.php` for creating a user:

```php
<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;

class NotificationUser
{
    use Notifiable;

    /**
     * The user's ID.
     *
     * @var string
     */
    public $id;

    /**
     * The user's email address.
     *
     * @var string
     */
    public $email;

    /**
     * The user's phone number.
     *
     * @var string
     */
    public $number;

    /**
     * Create a new notification user instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Empty constructor to allow property assignment
    }

    /**
     * Route notifications for the notification-api channel.
     *
     * @return string
     */
    public function routeNotificationForNotificationApi()
    {
        return $this->id;
    }
}
```

5. Generate Notification class:

```php
php artisan make:notification MyNotification
```

6. Update the Notification class:

```php
class MyNotification extends Notification
{
    // ...

    protected $mergeTags;

     /**
     * Create a new notification instance.
     */
    public function __construct($mergeTags = null)
    {
        $this->mergeTags = $mergeTags;
    }

    // Update existing via function
    public function via($notifiable)
    {
        // Add to or replace existing values (e.g. 'mail')
        return ['notification-api'];
    }

    public function toNotificationApi($notifiable)
    {
        return [
            "notificationId" => "my_notification_id",
            "user" => [
                "id" => $notifiable->getAttribute('id'),
                "email" => $notifiable->getAttribute('email'),
            ],
            "mergeTags" => $this->mergeTags
        ];
    }
}
```

| Name             | Type   | Description                                                                                                           |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------- |
| `clientId`\*     | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).      |
| `clientSecret`\* | string | Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments). |
| `region`         | string | To choose a different region than default (US). Use CA to access the Canada region, and EU for the Europe region.     |

\* required

</TabItem>
<TabItem value="go">

1. Install Package:

```bash
go get github.com/notificationapi-com/notificationapi-go-server-sdk
```

2. Import:

```go
import (
  notificationapi "github.com/notificationapi-com/notificationapi-go-server-sdk"
)
```

3. Initialize:

```go
notificationapi.Init("CLIENT_ID", "CLIENT_SECRET", "base_url")
```

| Name              | Type   | Description                                                                                                                                                                       |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLIENT_ID`\*     | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                                                                  |
| `CLIENT_SECRET`\* | string | Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments).                                                             |
| `base_url`\*      | string | To set the region. Use https://api.notificationapi.com for US region, https://api.ca.notificationapi.com for Canada region, and https://api.eu.notificationapi.com for EU region. |

\* required

Region specific example:

```Go
use NotificationAPI\NotificationAPI;

notificationapi.init("CLIENT_ID", "CLIENT_SECRET", notificationapi.EU_REGION)
```

</TabItem>
<TabItem value="csharp">

1. Install Package:

```bash
dotnet add package NotificationAPI --version 0.5.0
```

2. Import:

```csharp
using NotificationApi.Server;
using NotificationApi.Server.Models;
```

3. Initialize:

```csharp
var notificationApi = new NotificationApiServer("CLIENT_ID", "CLIENT_SECRET", false);
```

| Name              | Type    | Description                                                                                                                                                        |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CLIENT_ID`\*     | string  | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                                                   |
| `CLIENT_SECRET`\* | string  | Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments).                                              |
| `secureMode` \*   | boolean | Controlls sending notifications in secure mode. Set to `true` or `false`.                                                                                          |
| `baseURL`         | string  | To choose a different region than default (US). Use https://api.ca.notificationapi.com for Canada region, or https://api.eu.notificationapi.com for Europe region. |

\* required

Region specific example:

```csharp
using NotificationApi.Server;

var notificationApi = new NotificationApiServer("CLIENT_ID", "CLIENT_SECRET", false, "https://api.eu.notificationapi.com");
```

</TabItem>
<TabItem value="java">

1. Add the following dependency to your Maven project:

```xml
<dependency>
    <groupId>com.notificationapi</groupId>
    <artifactId>notificationapi-java-server-sdk</artifactId>
    <version>0.2.0</version>
</dependency>
```

2. Import:

```java
import com.notificationapi.NotificationApi;
```

3. Initialize:

```java
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com");
```

| Name              | Type   | Description                                                                                                                                                     |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLIENT_ID`\*     | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                                                |
| `CLIENT_SECRET`\* | string | Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments).                                           |
| `baseURL`         | string | To choose a different region than default (US). Use https://api.ca.notificationapi.com for Canada region, and https://api.eu.notificationapi.com for EU region. |

\* required

Region specific example:

```java
// For EU region
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.eu.notificationapi.com");

// For CA region
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.ca.notificationapi.com");
```

</TabItem>
<TabItem value="ruby">

1. If not using the default US region, update the HTTP client instance hostname, <code>Net::HTTP:new()</code>.
   Use <code>'api.ca.notificationapi.com'</code> for the CA region, and <code>'api.eu.notificationapi.com'</code> for the
   EU region. Then copy the following class to your application. You can place this in a new file, such as
   <code>lib/notification_api.rb</code>:

```ruby
require 'net/http'
require 'json'
require 'base64'
require 'openssl'

class NotificationAPI
  def initialize(client_id, client_secret, base_url: nil)
    @base_url = base_url
    @client_id = client_id
    @auth_token = Base64.strict_encode64("#{client_id}:#{client_secret}")
    # Change if not in default US region: CA = 'api.ca.notificationapi.com', EU = 'api.eu.notificationapi.com'
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

2. Import the NotificationAPI class:

```Ruby
  require_relative 'notification_api'
```

3. Initialize:

```js
notificationapi = NotificationAPI.new('CLIENT_ID', 'CLIENT_SECRET');
```

| Name              | Type   | Description                                                                                                                                                                   |
| ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLIENT_ID`\*     | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                                                              |
| `CLIENT_SECRET`\* | string | Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments).                                                         |
| `base_url `       | string | To choose a different region than default (US). Use https://api.ca.notificationapi.com to access the Canada region, and https://api.eu.notificationapi.com for the EU region. |

\* required

Region specific example:

```ruby
notificationApi = NotificationAPI.new("CLIENT_ID", "CLIENT_SECRET", "https://api.eu.notificationapi.com");
```

</TabItem>
<TabItem value="rust">

1. Add Dependencies:

```bash
cargo add dotenv   # Manage environment variables
cargo add reqwest   # HTTP client for making requests
cargo add tokio --features full  # Required for Async runtime
cargo add serde --features derive # JSON conversion
```

2. Configure Cargo.toml:

   Enable the JSON feature for reqwest in your Cargo.toml file:

```toml
reqwest = { version = "0.12.15", features = ["json"] }
```

3. Set Up Environment Variables:

Add your credentials to your `.env` file in your project root:

```env
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
```

4. Initialize and Send Notification:

```rust
use reqwest::Client;
use serde::Serialize;
use std::env;
use dotenv::dotenv;

#[derive(Serialize)]
struct NotificationPayload<'a> {
    #[serde(rename = "notificationId")]
    notification_id: &'a str,
    user: User,
    #[serde(rename = "mergeTags")]
    merge_tags: MergeTags<'a>,
}

#[derive(Serialize)]
struct User {
    id: String,
    email: String,
    number: String,
}

#[derive(Serialize)]
struct MergeTags<'a> {
    item: &'a str,
    address: &'a str,
    orderId: &'a str,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Initialize environment variables
    dotenv().ok();
    let client_id = env::var("CLIENT_ID").expect("CLIENT_ID not set in .env file");
    let client_secret = env::var("CLIENT_SECRET").expect("CLIENT_SECRET not set in .env file");

    // Create HTTP client
    let client = Client::new();

    // Prepare notification payload
    let payload = NotificationPayload {
        notification_id: "order_tracking",
        user: User {
            id: "spongebob.squarepants".to_string(),
            email: "spongebob@squarepants.com".to_string(),
            number: "+15005550006".to_string()
        },
        merge_tags: MergeTags {
            item: "Krabby Patty Burger",
            address: "124 Conch Street",
            orderId: "1234567890",
        },
    };

    // Send notification
    let response = client
        .post("https://api.notificationapi.com/{client_id}/sender")
        .basic_auth(client_id, Some(client_secret))
        .json(&payload)
        .send()
        .await?;

    // Check the response status
    if response.status().is_success() {
        println!("Notification sent successfully!");
    } else {
        println!("Failed to send notification: {:?}", response.text().await?);
    }

    Ok(())
}
```

| Name              | Type   | Description                                                                                                                                                                                         |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLIENT_ID`\*     | string | Your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).                                                                                    |
| `CLIENT_SECRET`\* | string | Your NotificationAPI account client secret. You can get it from [here](https://app.notificationapi.com/environments).                                                                               |
| `base_url`\*      | string | To choose a different region than default (https://api.notificationapi.com). Use https://api.ca.notificationapi.com for the Canada region and https://api.eu.notificationapi.com for the EU region. |

\* required

Region specific example:

```rust
let response = client
    .post("https://api.eu.notificationapi.com/{client_id}/sender")
    .basic_auth(client_id, Some(client_secret))
    .json(&payload)
    .send()
    .await?;
```

</TabItem>
</Tabs>

## send

Used to send a notification to the specified user.

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'Node', value: 'js', },
{ label: 'Python', value: 'python', },
{ label: 'PHP', value: 'php' },
{ label: 'Laravel', value: 'laravel' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Java', value: 'java' },
{ label: 'Ruby', value: 'ruby' },
{ label: 'Rust', value: 'rust' }
]
}>
<TabItem value="js">

```js
notificationapi.send({
  notificationId: 'order_tracking',
  user: {
    id: 'spongebob.squarepants',
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
import asyncio

async def send_notification():
  await notificationapi.send(
    {
      "notificationId": "order_tracking",
      "user": {
        "id": "spongebob.squarepants",
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

# Run the async function
asyncio.run(send_notification())
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->send([
    "notificationId" => "order_tracking",
    "user" => [
        "id" => "spongebob.squarepants",
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
<TabItem value="laravel">

The `notificationapi-laravel-server-sdk` package uses Laravel's [notifications](https://laravel.com/docs/master/notifications).
Add this code to your project to send a notification:

```php
<?php

use App\Models\NotificationUser;
use App\Notifications\MyNotification;

$user = new NotificationUser();
$user->id = "test_user_id";
$user->email = "spongebob@squarepants.com";
$user->number = "+15005550006";


// Optional mergeTags to customize the notification
$mergeTags = [
  "item" => "Krabby Patty Burger",
  "address" => "124 Conch Street"
  "commentId" => "1234567890"
];

// Send the notification to the user
$user->notify(new MyNotification($mergeTags));

// If you don't have merge tags, you can simply call:
// $user->notify(new MyNotification());
```

:::info
Alternatively you can send a notification without using Laravel's notifications:
:::

```php
$data = [
  "notificationId" => "my_notification_id",
  "user" => [
      "id" => "test_user_id",
      "email" => "spongebob@squarepants.com",
      "number" => "+15005550006"
  ],
  "mergeTags" => [
    "item" => "Krabby Patty Burger",
    "address" => "124 Conch Street",
    "commentId" => "1234567890"
  ]
];

$result = notification_api($data);
#or
$result = (new NotificationApiService)->send($data)
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
// Replace user_id with your user's ID
var user = new NotificationUser("user_id")
{
    Email = "spongebob@squarepants.com",
    TelephoneNumber = "+15005550006"
};

// Optional mergeTags to customize the notification
var mergeTags = new Dictionary<string, object>
{
    { "item", "Krabby Patty Burger" },
    { "address", "124 Conch Street" },
    { "orderId", "1234567890" }
};

// Replace my_notification_id with your notification's ID
await notificationApi.Send(new SendNotificationData("my_notification_id", user)
{
    MergeTags = mergeTags
});
```

</TabItem>
<TabItem value="java">

```java
import com.notificationapi.NotificationApi;
import com.notificationapi.model.NotificationRequest;
import com.notificationapi.model.User;
import java.util.HashMap;
import java.util.Map;

// Initialize NotificationAPI
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com");

// Create user
User user = new User("spongebob.squarepants")
    .setEmail("spongebob@squarepants.com")
    .setNumber("+15005550006");

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
notificationapi.send({
  notificationId: 'order_tracking',
  user: {
    id: 'spongebob.squarepants',
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
<TabItem value="rust">

```rust
use reqwest::Client;
use serde::Serialize;
use std::env;
use dotenv::dotenv;

#[derive(Serialize)]
struct NotificationPayload<'a> {
    #[serde(rename = "notificationId")]
    notification_id: &'a str,
    user: User,
    #[serde(rename = "mergeTags")]
    merge_tags: MergeTags<'a>,
}

#[derive(Serialize)]
struct User {
    id: String,
    email: String,
    number: String,
}

#[derive(Serialize)]
struct MergeTags<'a> {
    item: &'a str,
    address: &'a str,
    orderId: &'a str,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Initialize environment variables
    dotenv().ok();
    let client_id = env::var("CLIENT_ID").expect("CLIENT_ID not set in .env file");
    let client_secret = env::var("CLIENT_SECRET").expect("CLIENT_SECRET not set in .env file");

    // Create HTTP client
    let client = Client::new();

    // Prepare notification payload
    let payload = NotificationPayload {
        notification_id: "order_tracking",
        user: User {
            id: "spongebob.squarepants".to_string(),
            email: "spongebob@squarepants.com".to_string(),
            number: "+15005550006".to_string()
        },
        merge_tags: MergeTags {
            item: "Krabby Patty Burger",
            address: "124 Conch Street",
            orderId: "1234567890",
        },
    };

    // Send notification
    let response = client
        .post("https://api.notificationapi.com/{client_id}/sender")
        .basic_auth(client_id, Some(client_secret))
        .json(&payload)
        .send()
        .await?;

    // Check the response status
    if response.status().is_success() {
        println!("Notification sent successfully!");
    } else {
        println!("Failed to send notification: {:?}", response.text().await?);
    }

    Ok(())
}
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
| `user.timezone`              | string                        | The user's timezone. Timezone names correspond to the Zone and Link names of the IANA Time Zone Database, such as 'America/New_York', 'America/Denver', 'EST', and 'UTC'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `mergeTags`                  | object                        | Used to pass in dynamic values into the notification design. Read more: [Dynamic Parameters (Merge Tags)](/features/mergetags)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `schedule`                   | string                        | An ISO 8601 datetime string to schedule the notification for. For example, `2024-02-20T14:38:03.509Z`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `replace`                    | object, string key/value pair | Similar to mergeTags, but more flexible. Like the programmatic string replace function, this parameter will replace any string in the notification templates with another string. This operation happens on the fly when sending the notification and does not actually modify the templates. <br/> This operation is case-sensitive and happens after mergeTags are injected.                                                                                                                                                                                                                                                                                                                                               |
| `subNotificationId`          | string                        | To break down your notification into multiple categories or groups. Read more: [Sub Notifications](/features/subnotifications)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `templateId`                 | string                        | By default, notifications are sent using the default template of each channel. You can permanently change the default template from the dashboard. However, you can also use this parameter to force using a specific template. This is useful in multiple situations: <br/> - Design variation: using different wording and design, e.g. "You have new updates" vs. "You don't have any updates" <br/> - White-labeling: using a specific template that you designed for a white-labeled customer <br/> - Language: creating and using multiple templates for multiple languages <br/> If the provided templateId does not exist for a channel, the default template will be used, and a warning message will be generated. |
| `forceChannels` (deprecated) | string[]                      | Used to override the channels which are used for the notification. This field only overrides the notification's channels configuration. It does not override the user preferences.<br/>Values available for use are:<br/>EMAIL, INAPP_WEB, SMS, CALL, PUSH, WEB_PUSH<br/>E.g. forceChannels: `["EMAIL", "SMS"]`                                                                                                                                                                                                                                                                                                                                                                                                              |
| `options`                    | object                        | For configuring additional options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options Object

| Name                      | Type                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                   | object                                      | Email options features.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `email.replyToAddresses`  | string[]                                    | An array of email addresses that will receive responses when recipients reply to the notification email. This enables two-way email communication, allowing recipients to respond directly to notifications.`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `email.ccAddresses`       | string[]                                    | An array of emails to be CC'ed on the email notifications.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `email.bccAddresses`      | string[]                                    | An array of emails to be BCC'ed on the email notifications.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `email.fromName`          | string                                      | A string to display as the "From" field in an email                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `email.fromAddress`       | string                                      | An email address to send the email from                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `email.attachments`       | {'{'} filename: string; url: string {'}'}[] | An array of publicly accessible URLs and filenames pointing to files that you wish to include as attachments. The URLs only need to be valid for a few minutes after calling the SDK method. After that, the public URLs can be disabled for privacy. The maximum email size (including the content and all attachments) is 25MB. File extensions in the filename property are necessary for the file to show up nicely in the recipient's device.                                                                                                                                                                                                                                           |
| `apn`                     | object                                      | Additional Apple push notification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `apn.expiry`              | number                                      | The UNIX timestamp representing when the notification should expire. This does not contribute to the 2048 byte payload size limit. An expiry of 0 indicates that the notification expires immediately.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `apn.priority`            | number                                      | The priority of the notification. If you omit this header, APNs sets the notification priority to 10. Specify 10 to send the notification immediately. Specify 5 to send the notification based on power considerations on the user's device. Specify 1 to prioritize the device's power considerations over all other factors for delivery, and prevent awakening the device.                                                                                                                                                                                                                                                                                                               |
| `apn.collapseId`          | string                                      | An identifier you use to merge multiple notifications into a single notification for the user. Typically, each notification request displays a new notification on the user's device. When sending the same notification more than once, use the same value in this header to merge the requests. The value of this key must not exceed 64 bytes.                                                                                                                                                                                                                                                                                                                                            |
| `apn.threadId`            | string                                      | Provide this key with a string value that represents the app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together. For local notifications, this key corresponds to the threadIdentifier property of the UNNotificationContent object.                                                                                                                                                                                                                                                                                                                                           |
| `apn.badge`               | number                                      | Include this key when you want the system to modify the badge of your app icon. If this key is not included in the dictionary, the badge is not changed. To remove the badge, set the value of this key to 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `apn.sound`               | string                                      | Include this key when you want the system to play a sound. The value of this key is the name of a sound file in your app's main bundle or in the Library/Sounds folder of your app's data container. If the sound file cannot be found, or if you specify default for the value, the system plays the default alert sound. For details about providing sound files for notifications; see [here](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/SupportingNotificationsinYourApp.html#//apple_ref/doc/uid/TP40008194-CH4-SW10)                                                                                                |
| `apn.contentAvailable`    | boolean                                     | Include this key with a value of 1 to configure a background update notification. When this key is present, the system wakes up your app in the background and delivers the notification to its app delegate. For information about configuring and handling background update notifications, see [here](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW8)                                                                                                                                                                                          |
| `fcm`                     | object                                      | Additional Firebase Cloud Messaging push notification options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `fcm.android`             | object                                      | Additional Android push notification options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `fcm.android.collapseKey` | string                                      | This parameter identifies a group of messages (e.g., with collapse_key: "Updates Available") that can be collapsed, so that only the last message gets sent when delivery can be resumed. This is intended to avoid sending too many of the same messages when the device comes back online or becomes active. Note that there is no guarantee of the order in which messages get sent. Note: A maximum of 4 different collapse keys is allowed at any given time. This means a FCM connection server can simultaneously store 4 different send-to-sync messages per client app. If you exceed this number, there is no guarantee which 4 collapse keys the FCM connection server will keep. |
| `fcm.android.priority`    | string                                      | Sets the priority of the message. Valid values are "normal" and "high." On iOS, these correspond to APNs priorities 5 and 10. By default, notification messages are sent with high priority, and data messages are sent with normal priority. Normal priority optimizes the client app's battery consumption and should be used unless immediate delivery is required. For messages with normal priority, the app may receive the message with unspecified delay. When a message is sent with high priority, it is sent immediately, and the app can wake a sleeping device and open a network connection to your server.                                                                    |
| `fcm.android.ttl`         | string                                      | This parameter specifies how long (in seconds) the message should be kept in FCM storage if the device is offline. The maximum time to live supported is 4 weeks, and the default value is 4 weeks. For more information, see [Setting the lifespan of a message](https://firebase.google.com/docs/cloud-messaging/concept-options#ttl)                                                                                                                                                                                                                                                                                                                                                      |

#### Size Limitation

When using parameters (merge tags) in the body of your notifications, it is recommended that the size of the combined parameters not exceed 150 KB. Exceeding this limit may result in delivery failure, or an API error.

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
  id: 'spongebob.squarepants',
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
import asyncio

async def identify_user():
    await notificationapi.identify_user({
        "id": "spongebob.squarepants",
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

# Run the async function
asyncio.run(identify_user())
```

</TabItem>
<TabItem value="php">

```php
$user = [
    'id' => 'spongebob.squarepants',
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
		Id:     "spongebob.squarepants",
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
var userId = "spongebob.squarepants";

await notificationApi.Identify(userId, new IdentifyUserData()
{
    Email = "spongebob.squarepants",
    TelephoneNumber = "+15005550006"
});
```

</TabItem>
<TabItem value="java">

```java
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com");

User user = new User("spongebob.squarepants")
    .setEmail("spongebob@squarepants.com")
    .setNumber("+15005550006");

List<PushToken> pushTokens = new ArrayList<>();
pushTokens.add(new PushToken("FCM", "samplePushToken", new Device("com.example.app", "1234567890", "1234567890", "android", "Samsung", "SM-G930F")));

List<WebPushToken> webPushTokens = new ArrayList<>();
webPushTokens.add(new WebPushToken("https://fcm.googleapis.com/fcm/send/fCs_4iba0Ao:APA91bGFdaU7I3****JMH_KeZwk1Xi", new Keys("zP2xFu3hMc2vNH5E2nuKkyjpZydvCk9llRUY2kP4****9aSlKcoadSV2UbvMRQ", "CXEFun************tYe8g")));

api.identifyUser(user, pushTokens, webPushTokens);
```

</TabItem>
<TabItem value="ruby">

```ruby
user_id = "spongebob.squarepants"
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
| `timezone`      | string   | The user's timezone. Timezone names correspond to the Zone and Link names of the IANA Time Zone Database, such as 'America/New_York', 'America/Denver', 'EST', and 'UTC'.                |
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
    delivery: 'weekly'
  },
  {
    notificationId: 'order_tracking',
    channel: 'SMS',
    delivery: 'weekly'
  }
]);
```

</TabItem>
<TabItem value="python">

```python
import asyncio

async def set_user_preferences():
    await notificationapi.set_user_preferences("userId", [
        {
            "notificationId": "new_order",
            "channel": "INAPP_WEB",
            "delivery": "weekly"
        },
        {
            "notificationId": "order_tracking",
            "channel": "SMS",
            "delivery": "weekly"
        }
    ])

# Run the async function
asyncio.run(set_user_preferences())
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->setUserPreferences("userId", [
    [
        "notificationId" => "new_order",
        "channel" => "INAPP_WEB",
        "delivery" => "weekly"
    ],
    [
        "notificationId" => "order_tracking",
        "channel" => "SMS",
        "delivery" => "weekly"
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
    delivery: "weekly"
  },
  {
    notificationId: "order_tracking",
    channel: "SMS",
    delivery: "weekly"
  }
]`
var params notificationapi.SetUserPreferencesRequest
json.Unmarshal([]byte(jsonParams), &params)
notificationapi.SetUserPreferences("userId", params)
```

</TabItem>
<TabItem value="csharp">

```csharp
await notificationApi.SetUserPreferences(userId, new SetUserPreferencesData(){
    Preferences = [new NotificationPreference("order_tracking", NotificationChannel.EMAIL, true)]
});
```

</TabItem>
<TabItem value="java">

```java
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com");

UserPreferences preferences = new UserPreferences();
preferences.addPreference(new NotificationPreference("new_order", NotificationChannel.INAPP_WEB, true));
preferences.addPreference(new NotificationPreference("order_tracking", NotificationChannel.SMS, true));

api.setUserPreferences("userId", preferences);
```

</TabItem>
<TabItem value="ruby">

```ruby
user_preferences = [
  { 'notificationId' => 'new_order', 'channel' => 'INAPP_WEB', 'delivery' => 'weekly'},
  { 'notificationId' => 'order_tracking', 'channel' => 'SMS', 'delivery' => 'weekly'}
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

| Name               | Type   | Description                                                                                                                   |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `notificationId`\* | string | The ID of the notification you wish to send. You can find this value from the dashboard.                                      |
| `channel`          | string | The channel you wish to set the preference for. Accepted values: <br/>`EMAIL`, `INAPP_WEB`, `SMS`, `CALL`, `PUSH`, `WEB_PUSH` |
| `delivery`         | string | The method for delivering the notification. Accepted values: <br/>`off`, `instant`, `hourly`, `daily`, `weekly`, `monthly`    |

## deleteUserPreferences

Used to delete any stored preferences for a user and notificationId or subNotificationId.

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
notificationapi.deleteUserPreferences(
  'spongebob.squarepants',
  'order_tracking'
);
```

</TabItem>
<TabItem value="python">

```python
import asyncio

async def delete_user_preferences():
    await notificationapi.delete_user_preferences({"notificationId": "order_tracking", "userId": "spongebob.squarepants"})

# Run the async function
asyncio.run(delete_user_preferences())
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->deleteUserPreferences(["notificationId" => "order_tracking", "userId" => "spongebob.squarepants"]);
```

</TabItem>
<TabItem value="go">

```go
jsonParams := `{
  NotificationId: "order_tracking",
  UserId: "spongebob.squarepants"
}`
var params notificationapi.DeleteUserPreferencesRequest
json.Unmarshal([]byte(jsonParams), &params)
notificationapi.DeleteUserPreferences(params);
```

</TabItem>
<TabItem value="csharp">

```csharp
await notificationApi.DeleteUserPreferences(new DeleteUserPreferencesData(){
    NotificationId = "order_tracking",
    UserId = "spongebob.squarepants"
});
```

</TabItem>
<TabItem value="java">

```java
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com");

UserPreferences preferences = new UserPreferences();
preferences.addPreference(new NotificationPreference("new_order", NotificationChannel.INAPP_WEB, true));
preferences.addPreference(new NotificationPreference("order_tracking", NotificationChannel.SMS, true));

api.deleteUserPreferences("userId", preferences);
```

</TabItem>
<TabItem value="ruby">

```ruby
notificationapi.deleteUserPreferences({
  notificationId: 'order_tracking',
  userId: 'spongebob.squarepants'
});
```

</TabItem>

</Tabs>

#### Parameters

| Name                | Type   | Description                                                                           |
| ------------------- | ------ | ------------------------------------------------------------------------------------- |
| `userId`\*          | string | The ID of the user in your system. Required.                                          |
| `notificationId`\*  | string | The ID of the notification in NotificationAPI. Required.                              |
| `subNotificationId` | string | The subNotificationId is used to specify further subcategories within a notification. |

## updateInAppNotification

Used to update the opened, archived, ... of an inapp notification.

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
notificationapi.deleteUserPreferences('spongebob.squarepants', {
  trackingIds: ['sampleTrackingId'],
  opened: '1970-01-01T00:00:00.000Z',
  clicked: '1970-01-01T00:00:00.000Z',
  archived: '1970-01-01T00:00:00.000Z',
  actioned1: '1970-01-01T00:00:00.000Z',
  actioned2: '1970-01-01T00:00:00.000Z',
  reply: { date: '1970-01-01T00:00:00.000Z', message: 'nice!' }
});
```

</TabItem>
<TabItem value="python">

```python
import asyncio

async def update_in_app_notification():
    await notificationapi.update_in_app_notification("spongebob.squarepants", {
        "trackingIds": ["sampleTrackingId"],
        "opened": "1970-01-01T00:00:00.000Z",
        "clicked": "1970-01-01T00:00:00.000Z",
        "archived": "1970-01-01T00:00:00.000Z",
        "actioned1": "1970-01-01T00:00:00.000Z",
        "actioned2": "1970-01-01T00:00:00.000Z",
        "reply": {"date": "1970-01-01T00:00:00.000Z", "message": "nice!"}
    })

# Run the async function
asyncio.run(update_in_app_notification())
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->delete_user_preferences("spongebob.squarepants", [
    "trackingIds" => ["sampleTrackingId"],
    "opened" => "1970-01-01T00:00:00.000Z",
    "clicked" => "1970-01-01T00:00:00.000Z",
    "archived" => "1970-01-01T00:00:00.000Z",
    "actioned1" => "1970-01-01T00:00:00.000Z",
    "actioned2" => "1970-01-01T00:00:00.000Z",
    "reply" => ["date" => "1970-01-01T00:00:00.000Z", "message" => "nice!"]
]);
```

</TabItem>
<TabItem value="go">

```go
DeleteUserPreferences("spongebob.squarepants", map[string]interface{}{
	"trackingIds": []string{"sampleTrackingId"},
	"opened":      "1970-01-01T00:00:00.000Z",
	"clicked":     "1970-01-01T00:00:00.000Z",
	"archived":    "1970-01-01T00:00:00.000Z",
	"actioned1":   "1970-01-01T00:00:00.000Z",
	"actioned2":   "1970-01-01T00:00:00.000Z",
	"reply": map[string]interface{}{
		"date":    "1970-01-01T00:00:00.000Z",
		"message": "nice!",
	},
})
```

</TabItem>
<TabItem value="csharp">

```csharp
await notificationApi.DeleteUserPreferences("spongebob.squarepants", new Dictionary<string, object>
{
    {"trackingIds", new string[] {"sampleTrackingId"}},
    {"opened", "1970-01-01T00:00:00.000Z"},
    {"clicked", "1970-01-01T00:00:00.000Z"},
    {"archived", "1970-01-01T00:00:00.000Z"},
    {"actioned1", "1970-01-01T00:00:00.000Z"},
    {"actioned2", "1970-01-01T00:00:00.000Z"},
    {"reply", new Dictionary<string, object>
        {
            {"date", "1970-01-01T00:00:00.000Z"},
            {"message", "nice!"}
        }
    }
});
```

</TabItem>
<TabItem value="java">

```java
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com");

UserPreferences preferences = new UserPreferences();
preferences.addPreference(new NotificationPreference("new_order", NotificationChannel.INAPP_WEB, true));
preferences.addPreference(new NotificationPreference("order_tracking", NotificationChannel.SMS, true));

api.updateInAppNotification("userId", "my_notification_id", preferences);
```

</TabItem>
<TabItem value="ruby">

```ruby
notificationapi.delete_user_preferences('spongebob.squarepants', {
  'trackingIds' => ['sampleTrackingId'],
  'opened' => '1970-01-01T00:00:00.000Z',
  'clicked' => '1970-01-01T00:00:00.000Z',
  'archived' => '1970-01-01T00:00:00.000Z',
  'actioned1' => '1970-01-01T00:00:00.000Z',
  'actioned2' => '1970-01-01T00:00:00.000Z',
  'reply' => { 'date' => '1970-01-01T00:00:00.000Z', 'message' => 'nice!' }
})
```

</TabItem>

</Tabs>

#### Parameters

| Name       | Type   | Description                                               |
| ---------- | ------ | --------------------------------------------------------- |
| `userId`\* | string | The ID of the user in your system. Required.              |
| `params`\* | string | The inapp notification data you want to update. Required. |

#### params

| Name            | Type     | Description                                                                                                 |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `trackingIds`\* | string[] | The Tracking IDs of the notifications you want to update. Required.                                         |
| `opened`        | string   | A string representing the time when the notification was opened. Optional.                                  |
| `clicked`       | string   | A string representing the time when the notification was clicked. Optional.                                 |
| `archived`      | string   | A string representing the time when the notification was archived. Optional.                                |
| `actioned1`     | string   | A string representing the time when the first action associated with the notification was taken. Optional.  |
| `actioned2`     | string   | A string representing the time when the second action associated with the notification was taken. Optional. |
| `reply.date`    | string   | A string representing the time of the reply to the notification. Optional.                                  |
| `reply.message` | string   | A string representing the content of the reply message. Optional.                                           |

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
  userId: 'spongebob.squarepants'
});
```

</TabItem>
<TabItem value="python">

```python
import asyncio

async def retract_notification():
    await notificationapi.retract({"notificationId": "order_tracking", "userId": "spongebob.squarepants"})

# Run the async function
asyncio.run(retract_notification())
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->retract(["notificationId" => "order_tracking", "userId" => "spongebob.squarepants"]);
```

</TabItem>
<TabItem value="go">

```go
jsonParams := `{
  NotificationId: "order_tracking",
  UserId: "spongebob.squarepants"
}`
var params notificationapi.RetractRequest
json.Unmarshal([]byte(jsonParams), &params)
notificationapi.Retract(params);
```

</TabItem>
<TabItem value="csharp">

```csharp
await notificationApi.Retract(new RetractNotificationData(){
    NotificationId = "order_tracking",
    UserId = "spongebob.squarepants"
});
```

</TabItem>
<TabItem value="java">

```java
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com");

RetractRequest request = new RetractRequest();
request.setNotificationId("order_tracking");
request.setUserId("spongebob.squarepants");

api.retract(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
notificationapi.retract({
  notificationId: 'order_tracking',
  userId: 'spongebob.squarepants'
});
```

</TabItem>

</Tabs>

| Name               | Type   | Description                                                                                 |
| ------------------ | ------ | ------------------------------------------------------------------------------------------- |
| `notificationId`\* | string | The ID of the notification you wish to retract. You can find this value from the dashboard. |
| `userId`\*         | string | The ID of the user in your system. Required.                                                |
| `secondaryId`      | string | For when you want to delete a specific subNotificationId.                                   |

## updateSchedule

This function enables you to update a scheduled notification by providing a `trackingId`.

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
notificationapi.updateSchedule('172cf2f4-18cd-4f1f-b2ac-e50c7d71891c', {
  schedule: '2024-02-20T14:38:03.509Z'
});
```

</TabItem>
<TabItem value="python">

```python
import asyncio

async def update_schedule():
    await notificationapi.update_schedule({
        "tracking_id": "172cf2f4-18cd-4f1f-b2ac-e50c7d71891c",
        "send_request": {"schedule": "2024-02-20T14:38:03.509Z"}
    })

# Run the async function
asyncio.run(update_schedule())
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->updateSchedule([
    "trackingId" => "172cf2f4-18cd-4f1f-b2ac-e50c7d71891c",
    "sendRequest" => [
        "schedule" => "2024-02-20T14:38:03.509Z"
    ]
]);
```

</TabItem>
<TabItem value="go">

```go
updateReq := NotificationAPI.UpdateScheduleRequest{
		Schedule: "2024-02-20T14:38:03.509Z",
	}
trackingId := "172cf2f4-18cd-4f1f-b2ac-e50c7d71891c"
notificationapi.UpdateSchedule(trackingId, updateReq)
```

</TabItem>
<TabItem value="csharp">

```csharp
await notificationApi.UpdateSchedule("TRACKING_ID", new UpdateScheduleData(){
    Schedule = new DateTime()
});
```

</TabItem>
<TabItem value="java">

```java
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com");

UpdateScheduleRequest request = new UpdateScheduleRequest();
request.setSchedule("2024-02-20T14:38:03.509Z");

api.updateSchedule("TRACKING_ID", request);
```

</TabItem>
<TabItem value="ruby">

```ruby
notificationapi.update_schedule(
  tracking_id: '172cf2f4-18cd-4f1f-b2ac-e50c7d71891c',
  {
			schedule: "2024-02-20T14:38:03.509Z",
	}
);
```

</TabItem>

</Tabs>

| Name           | Type   | Description                                                                                                   |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| `trackingId`\* | string | The tracking ID of the scheduled notification you wish to update. You can find this value from the dashboard. |  |

## deleteSchedule

This function allows you to delete a scheduled notification by providing a `trackingId`.

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
notificationapi.deleteSchedule('172cf2f4-18cd-4f1f-b2ac-e50c7d71891c');
```

</TabItem>
<TabItem value="python">

```python
import asyncio

async def delete_schedule():
    await notificationapi.delete_schedule({
        "tracking_id": "172cf2f4-18cd-4f1f-b2ac-e50c7d71891c"
    })

# Run the async function
asyncio.run(delete_schedule())
```

</TabItem>
<TabItem value="php">

```php
$notificationapi->deleteSchedule([
    "trackingId" => "172cf2f4-18cd-4f1f-b2ac-e50c7d71891c"
]);
```

</TabItem>
<TabItem value="go">

```go
 trackingId := "172cf2f4-18cd-4f1f-b2ac-e50c7d71891c"
 notificationapi.DeleteSchedule(trackingId)
```

</TabItem>
<TabItem value="csharp">

```csharp
await notificationApi.DeleteSchedule("TRACKING_ID");
```

</TabItem>
<TabItem value="java">

```java
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com");

DeleteScheduleRequest request = new DeleteScheduleRequest();
request.setTrackingId("TRACKING_ID");

api.deleteSchedule(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
notificationapi.delete_schedule('172cf2f4-18cd-4f1f-b2ac-e50c7d71891c');
```

</TabItem>

</Tabs>

| Name           | Type   | Description                                                                                                   |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| `trackingId`\* | string | The tracking ID of the scheduled notification you wish to delete. You can find this value from the dashboard. |  |

## queryLogs

This function allows you to run queries on the logs of your send requests.

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
notificationapi.queryLogs({
  dateRangeFilter: {
    startTime: 1719600830559;
    endTime: 1719600840559;
  },
  notificationFilter: ['order_tracking'],
  channelFilter: ['EMAIL'];
  userFilter: ['abcd-1234'],
  statusFilter: ['SUCCESS'],
  trackingIds: ['172cf2f4-18cd-4f1f-b2ac-e50c7d71891c'],
  requestFilter: ['request.mergeTags.item="Krabby Patty Burger"'],
  envIdFilter: ["6ok6imq9unr2budgiebjdaa6oi"]
});
```

</TabItem>
<TabItem value="python">

```python
import asyncio

async def query_logs():
    await notificationapi.query_logs({
        "dateRangeFilter": {
            "startTime": 1719600830559,
            "endTime": 1719600840559
        },
        "notificationFilter": ["order_tracking"],
        "channelFilter": ["EMAIL"],
        "userFilter": ["abcd-1234"],
        "statusFilter": ["SUCCESS"],
        "trackingIds": ["172cf2f4-18cd-4f1f-b2ac-e50c7d71891c"],
        "requestFilter": ['request.mergeTags.item="Krabby Patty Burger"'],
        "envIdFilter": ["6ok6imq9unr2budgiebjdaa6oi"]
    })

# To run the async function
asyncio.run(query_logs())

```

</TabItem>
<TabItem value="php">

```php
$notificationapi->queryLogs([
    "dateRangeFilter" => [
        "startTime" => 1719600830559,
        "endTime" => 1719600840559,
    ],
    "notificationFilter" => ['order_tracking'],
    "channelFilter" => ['EMAIL'],
    "userFilter" => ['abcd-1234'],
    "statusFilter" => ['SUCCESS'],
    "trackingIds" => ['172cf2f4-18cd-4f1f-b2ac-e50c7d71891c'],
    "requestFilter" => ['request.mergeTags.item="Krabby Patty Burger"'],
    "envIdFilter" => ['6ok6imq9unr2budgiebjdaa6oi']
]);
```

</TabItem>
<TabItem value="go">

```go
params := map[string]interface{}{
  "dateRangeFilter": map[string]interface{}{
    "startTime": 1719600830559,
    "endTime":   1719600840559,
  },
  "notificationFilter": []string{"order_tracking"},
  "channelFilter":      []string{"EMAIL"},
  "userFilter":         []string{"abcd-1234"},
  "statusFilter":       []string{"SUCCESS"},
  "trackingIds":        []string{"172cf2f4-18cd-4f1f-b2ac-e50c7d71891c"},
  "requestFilter":      []string{`request.mergeTags.item="Krabby Patty Burger"`},
  "envIdFilter":        []string{"6ok6imq9unr2budgiebjdaa6oi"},
}

notificationAPI.QueryLogs(params)
```

</TabItem>
<TabItem value="csharp">

```csharp
var parameters = new Dictionary<string, object>
        {
            { "dateRangeFilter", new Dictionary<string, long> { { "startTime", 1719600830559 }, { "endTime", 1719600840559 } } },
            { "notificationFilter", new List<string> { "order_tracking" } },
            { "channelFilter", new List<string> { "EMAIL" } },
            { "userFilter", new List<string> { "abcd-1234" } },
            { "statusFilter", new List<string> { "SUCCESS" } },
            { "trackingIds", new List<string> { "172cf2f4-18cd-4f1f-b2ac-e50c7d71891c" } },
            { "requestFilter", new List<string> { @"request.mergeTags.item=""Krabby Patty Burger""" } },
            { "envIdFilter", new List<string> { "6ok6imq9unr2budgiebjdaa6oi" } }
        };

        await notificationApi.QueryLogs(parameters);
```

</TabItem>
<TabItem value="java">

```java
NotificationApi api = new NotificationApi("CLIENT_ID", "CLIENT_SECRET", "https://api.notificationapi.com");

QueryLogsRequest request = new QueryLogsRequest();
request.setDateRangeFilter(new DateRangeFilter(1719600830559, 1719600840559));
request.setNotificationFilter(Arrays.asList("order_tracking"));
request.setChannelFilter(Arrays.asList("EMAIL"));
request.setUserFilter(Arrays.asList("abcd-1234"));
request.setStatusFilter(Arrays.asList("SUCCESS"));
request.setTrackingIds(Arrays.asList("172cf2f4-18cd-4f1f-b2ac-e50c7d71891c"));
request.setRequestFilter("request.mergeTags.item=\"Krabby Patty Burger\"");
request.setEnvIdFilter("6ok6imq9unr2budgiebjdaa6oi");

api.queryLogs(request);
```

</TabItem>
<TabItem value="ruby">

```ruby
params = {
  dateRangeFilter: {
    startTime: 1719600830559,
    endTime: 1719600840559
  },
  notificationFilter: ['order_tracking'],
  channelFilter: ['EMAIL'],
  userFilter: ['abcd-1234'],
  statusFilter: ['SUCCESS'],
  trackingIds: ['172cf2f4-18cd-4f1f-b2ac-e50c7d71891c'],
  requestFilter: ['request.mergeTags.item="Krabby Patty Burger"'],
  envIdFilter: ['6ok6imq9unr2budgiebjdaa6oi']
}

notificationapi.query_logs(params)
```

</TabItem>

</Tabs>

| Name                        | Type       | Description                                                                                                                                               |
| --------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dateRangeFilter`           | object     | Filters logs by a specific date range. Optional.                                                                                                          |
| `dateRangeFilter.startTime` | number     | The start time of the date range filter as a Unix timestamp. Optional. Cannot be less than your log retention period.                                     |
| `dateRangeFilter.endTime`   | number     | The end time of the date range filter as a Unix timestamp. Optional.                                                                                      |
| `notificationFilter`        | string[]   | Filters logs by specific notification IDs. Optional. This allows you to retrieve logs for particular notifications.                                       |
| `channelFilter`             | Channels[] | Filters logs by specific channels. Optional. This allows you to retrieve logs for certain channels like EMAIL, SMS, etc.                                  |
| `userFilter`                | string[]   | Filters logs by specific user IDs. Optional. This allows you to retrieve logs for particular users.                                                       |
| `statusFilter`              | string[]   | Filters logs by specific statuses. Optional. This allows you to retrieve logs with particular statuses like sent, failed, etc.                            |
| `trackingIds`               | string[]   | Filters logs by specific tracking IDs. Optional. This allows you to retrieve logs for particular tracking events.                                         |
| `requestFilter`             | string[]   | Filters logs by specific body request of your send request. Optional. This allows you to retrieve logs for particular requests.                           |
| `envIdFilter`               | string[]   | Filters logs by specific environment IDs. Optional. This allows you to retrieve logs for particular environments.                                         |
| `customFilter`              | string     | A custom filter for querying logs. Optional. This allows for more advanced and flexible querying of logs. Note: custom filter overwrites all the filters. |

You can run more complex filters using customFilter. Note that customFilter overwrites all other filters in the request.

<Tabs
groupId="log-query-customFilter"
defaultValue="js"
values={[
{ label: 'customFilter', value: 'js' }
]
}>
<TabItem value="js">

```js
fields @message| filter request.user.email like /com/ and request.user.email not like /gmail.com/| sort @timestamp desc
```

</TabItem>

</Tabs>
