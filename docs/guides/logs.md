---
sidebar_position: 5
---

# Logs

After receiving your request to send a notification, we start tracking the progress of the notification and show that in our Logs dashboard.

This is specifically useful for ensuring new notifications are working correctly and for customer support staff to handle tickets related to notifications.

## Tracked Events

1. Received: Our servers received your request and have begun processing it.
2. Failed: Something went wrong with your notification. E.g. Bad parameters, bounce.
3. Blocked: The notification was blocked due to an expected condition. E.g. Notification preferences, user preferences. plan limits.
4. Processed: We successfully processed your notification and await delivery.
5. Delivered: The notification was successfully delivered to the user. The user has access to the notification.

Email Specific Sub-Events:

- Failed - Bounce: The recipient's mail server permanently rejected the email
- Failed - Delivery Delay: The email couldn't be delivered to the recipient’s mail server because a temporary issue occurred. Delivery delays can occur, for example, when the recipient's inbox is full, or when the receiving email server experiences a transient issue.

SMS Specific Sub-Events:

- Failed - Undelivered: We have received a delivery receipt indicating that the message was not delivered. This can happen for a number of reasons including carrier content filtering, availability of the destination handset, etc.
- Failed - Infrastructure: The message could not be sent due to problems with the underlying telecom service.

Call Specific Sub-Events:

- Delivered - Completed: The call was made, answered and disconnected.
- Delivered - Busy: NotificationAPI dialed the number, but received a busy response.
- Delivered - No Answer: NotificationAPI dialed the number but no one answered after 30 seconds.
- Failed - Cannot Reach: We could not connect the call. Possible causes include the destination is unreachable, or the number may have been input incorrectly.

<!-- Subscriptions – The email was successfully delivered, but the recipient updated the subscription preferences by clicking List-Unsubscribe in the email header or the Unsubscribe link in the footer. -->

<!-- - Soft Bounce -->

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

No.

<b>6. What kind of integration capability does it have? Can we connect it to other data analytic services like dataDog?</b>

No.

<b>7. Can we see the response rate for each notification, channel, and template? Can we see the response rate of a specific user?</b>

Such requests fall under another feature requests titled "Insights".

<b>8. What is the data retention of the logs?</b>

7 days.
