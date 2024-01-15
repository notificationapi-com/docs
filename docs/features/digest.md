# 📦 Digest

:::note

Status: This feature is under active development.

:::

The NotificationAPI's Digest feature allows for the creation of recurring user digests at configured intervals. By summarizing multiple notifications into one, it effectively reduces notification fatigue. This feature is particularly useful for weekly reports or user digests. The notification editor provides a versatile tool for customizing the appearance of combined notifications, and users can set their preferred schedule if needed.

## Example Use Cases

### Design Performance Summarization

In collaborative platforms, each view and like of a design generates an event. Instead of sending separate notifications for each event, the Digest feature consolidates these into a single notification. At the scheduled time, the digest compiles and sends a summarized report of all interactions, streamlining communication for the author.

### Truck Driver Schedule

For administrators overseeing food supply chains, a daily overview of all pickups and deliveries is crucial. The Digest feature provides these summaries, promoting effective and timely operations management.

## How does it work?

1. Configuration: Access the Digest settings in the NotificationAPI's configuration tab to set up the digest schedule. While one schedule is mandatory, you can configure multiple to meet diverse user needs. Select one as the default for the system.

import img from '@site/static/NotificationAPI - Notifications as a service - digest.png';

<img src={img} style={{maxWidth: 480, borderRadius: 20, border: '1px solid #d9d9d9' , marginLeft: 50}} />

2. Design: During setup, choose a default digest schedule, notification channel, and template. The template should be specifically designed for digest-style notifications.

3. System Behavior: Consider this scenario - you enable a digest for order_tracking notifications, choose email as the channel, select delivery_tracking_weekly_digest as the email template, and set Weekly as the default schedule. The system will collate all order_tracking notifications received during the week and send a single email using the chosen template.

- Note: If there are no notifications for a user in the specified period, the system will not send a digest.

4. User Preferences: Multiple schedules appear as options on [the hosted preferences page](../components//user-preferences.md), allowing users to select their preferred schedule.

## Frequently Asked Questions (FAQs)

### How does digest work with throttling?

`Throttling` has a higher priority. If both settings are active for a notification and the `Throttling` criteria are met first, subsequent notifications will be discarded and not included in the digest. For example, with `Throttling` set to allow 5 `order_tracking` notifications per hour and a `Daily` digest, the 6th notification within the same hour will be ignored.

### How does digest work with deduplication?

`Deduplication` has a higher priority. If both are active and a notification meets the `Deduplication` criteria, it will be discarded and excluded from the digest. For instance, with a 1-hour `Deduplication` window and a `Daily` digest, any duplicated notification within that hour will be ignored.
