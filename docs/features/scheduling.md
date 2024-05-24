# ⏰ Scheduling

:::note

Status: This feature is under active development.

:::

Scheduling a notification works just like sending a regular notification through NotificationAPI, with the addition of a `schedule` field that specifies when you want the notification sent. Our system takes care of the rest. Our dashboard will keep track of scheduled notifications in the logs section, marking them as scheduled and showing the time they are scheduled to be sent. You can also update or delete a scheduled notification by using the trackingId.

## Example Use Cases

- Payment due alerts: Financial institutions and billing departments use scheduled notifications to remind customers of upcoming due dates for loan payments, credit card bills, or utility bills.

- Appointment reminders: Healthcare providers, beauty salons, automotive service centers, and other appointment-based businesses utilize scheduled notifications to remind clients of their upcoming appointments.

- Task deadlines: Project management tools often feature the ability to send scheduled notifications about task deadlines to team members.

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
            },
            "schedule": "2024-02-20T14:38:03.509Z"
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

You have the option to [update](../reference/server.md#updateschedule) or [delete](../reference/server.md#deleteschedule) the schedule before it is sent.

## Frequently Asked Questions (FAQ)

### Can I update a notification request after scheduling it?

Yes, you can update the request after sending it by using the `trackingId` before it is sent. If you do not have the `trackingId`, you can still find it in the [log dashboard](logs.md).

### Can I cancel a scheduled notification?

Yes, with the `trackingId`, you can cancel a scheduled notification before it is sent. If the notification has already been sent, you can retract in-app notifications using the [retract function](../reference/server.md#retract).

### How is error checking and logical operations handled with scheduled notifications?

Every notification request is evaluated for correct notificationId, being below the usage quota, valid user preferences, and more. For scheduled notifications, these checks are done twice:

1. Once at the time of receiving the initial request, similar to regular notifications. The results of this step can be found in the response body of your request and in our [log dashboard](logs.md).
2. Once again at the scheduled time. The results of this step can also be found in our [log dashboard](logs.md).

The only exceptions are throttling and deduplication checks that only happen at the scheduled time.

So for example, an invalid `notificationId` error might be generated initially if the notificationId is incorrect, or later if the notification is deleted.

### How are logics managed for scheduled notifications?

We evaluate logical, such as [Deduplication](deduplication.md), and [throttling](throttling.md) at the scheduled time, not when the request is initially made.

### How can I review scheduled notifications before they are sent?

Visit the [log dashboard](logs.md) to preview upcoming notifications and any recent updates.

### How far in advance can I schedule a notification?

You can schedule a notification up to 1 year in advance.

### How early in the future can I schedule a notification?

There are no limitations. If the schedule is set for a time in the past, the notification is sent immediately.
