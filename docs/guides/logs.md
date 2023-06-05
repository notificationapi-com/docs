---
sidebar_position: 6
---

# Logs

After receiving your request to send a notification, we start tracking the progress of the notification and show that in our Logs dashboard.

This is specifically useful for ensuring new notifications are working correctly and for customer support staff to handle tickets related to notifications.

import logs from '@site/static/Logs.png';

<img src={logs} />

## Notification States

Each `send()` request creates a record in the logs table with either of the following statuses:

- `success`: we have successfully delivered everything to the expected channels
- `failure`: something has gone wrong or not delivered (see events below)
- `received`: notification is in this state until it enters `success` or `failure`

## Tracked Events

When you click on a notification in the log table, you will see the following events:

- Received: Our servers received your request and have begun processing it.
- Ignored: The request was ignored due to an expected condition such as dashboard preferences, user preferences or plan limits.
- Sending: We have validated your request and are going to send it.
- Sent: We have successfully sent the notification to responsible 3rd-parties such email servers or mobile networks.
- Delivered: The notification was successfully delivered to the user.
- Failed: Something went wrong unexpectedly during processing or delivery. E.g. Bad parameters, email bounces.

Email Specific Sub-Events:

- Failed - Bounce: The recipient's mail server permanently rejected the email
- Failed - Delivery Delay: The email couldn't be delivered to the recipient’s mail server because a temporary issue occurred. Delivery delays can occur, for example, when the recipient's inbox is full, or when the receiving email server experiences a transient issue.

SMS Specific Sub-Events:

- Failed - Undelivered: We have received a delivery receipt indicating that the message was not delivered. This can happen for a number of reasons, including carrier content filtering, availability of the destination handset, etc.
- Failed - Infrastructure: The message could not be sent due to problems with the underlying telecom service.

Call Specific Sub-Events:

- Delivered - Completed: The call was made, answered and disconnected.
- Delivered - Busy: NotificationAPI dialled the number, but received a busy response.
- Delivered - No Answer: NotificationAPI dialled the number, but no one answered after 30 seconds.
- Failed - Cannot Reach: We could not connect the call. Possible causes include the destination being unreachable or the number may have been input incorrectly.

<!-- Subscriptions – The email was successfully delivered, but the recipient updated the subscription preferences by clicking List-Unsubscribe in the email header or the Unsubscribe link in the footer. -->

<!-- - Soft Bounce -->

## Custom Queries

Besides the predefined filters on the logs table, you can use any custom queries to dig deep. For example: `$.request.mergeTags.firstName="Jane"`

You can search for anything in the `$.request`, which contains the [original parameters you passed to send()](../reference/server.md#send). Here's an example of a `$.request` object:

```js title="$.request"
{
    notificationId: '...',
    user: {
        id: '123',
        email: 'jane@doe.com',
        number: '+19999999999'
    },
    mergeTags: {
        firstName: 'jane'
    }
}
```

### Query Structure

##### Query Format

`Property Operator MatchedPattern`

##### Property Examples:

- `$.trackingId`
- `$.request.notificationId`
- `$.request.user.number`
- `$.request.mergeTags.firstName`
- `$.request.mergeTags.products[0].sku.title`

##### Operators:

- String Operators: `=`, `!=`
- Numeric Operators: `=` `!=` `>` `>=` `<` `<=`
- Logical Operators:
  - `IS`, can only be used with `NULL`, `FALSE` or `TRUE`
  - `NOT EXISTS`, e.g. `$.request.user.number NOT EXISTS`

##### MatchedPattern:

A string or number. You can use `*` as a wildcard for string matching. Example: `$.request.user.email="*@gmail.com"`

### AND/OR Queries

You can use `&&`, `||` and `()` to combine multiple queries. Examples:

```
($.request.notificationId='new-user' && $.request.user.number='+19999999999') ||
    $.request.mergeTags.firstName="Jane"
```

## FAQ

<b>1. Do the logs display the final delivered notifications?</b>

Yes. The logs display exactly what the user receives, except for the minor differences due to browsers and environments.

<b>2. Does using logs require technical knowledge?</b>

No. Anyone on your team can use it to debug issues. This is especially useful for customer support teams.

<b>3. Does Logs provide a rest API? Can we read the logs through the SDK?</b>

There are undocumented APIs to access logs. Please contact support to learn more.

<b>4. Are the logs real-time?</b>

There could be up to 15 minutes of delay between events happening and seeing them in the Logs dashboard.

<b>5. Does the Logs come with alarm and monitoring?</b>

No. If you are interested in this feature, please contact us to discuss the product roadmap.

<b>6. What kind of integration capability does it have? Can we connect it to other data analytic services like dataDog?</b>

No.

<b>7. Can we see the response rate for each notification, channel, and template? Can we see the response rate of a specific user?</b>

Such requests fall under another feature requests titled "Insights".

<b>8. What is the data retention of the logs?</b>

7 days.
