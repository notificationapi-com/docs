# ⏰ Scheduling

:::note

Status: This feature is under active development.

:::

Scheduling a notification works just like sending a regular notification through NotificationAPI, with the addition of a `schedule` field that specifies when you want the notification sent. Our system takes care of the rest. Our dashboard will keep track of scheduled notifications in the logs section, marking them as scheduled and showing the time they are scheduled to be sent. You can also update or delete a scheduled notification by using the trackingId.

## Example Use Cases

### Payment Due Alerts

Financial institutions and billing departments use scheduled notifications to remind customers of upcoming due dates for loan payments, credit card bills, or utility bills.

### Appointment Reminders

Healthcare providers, beauty salons, automotive service centers, and other appointment-based businesses utilize scheduled notifications to remind clients of their upcoming appointments.

### Task Deadlines

Project management tools often feature the ability to send scheduled notifications about task deadlines to team members.

## How does it work?

Simply specify the `schedule` parameter when using the [`send` function](../reference/server#send):

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
  },
  schedule: '2024-02-20T14:38:03.509Z'
});
```

</TabItem>
<TabItem value="python">

```python
notificationapi.send(
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
        },
          "schedule": "2024-02-20T14:38:03.509Z"
    }
)
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
  ],
   "schedule" => "2024-02-20T14:38:03.509Z"
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
    Schedule: "2024-02-20T14:38:03.509Z"
  },
)
```

</TabItem>
<TabItem value="csharp">

```csharp
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
    },
     ""schedule"": ""2024-02-20T14:38:03.509Z""
}";
notificationapi.send(request);
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
  },
   schedule: '2024-02-20T14:38:03.509Z'
});
```

</TabItem>
</Tabs>
