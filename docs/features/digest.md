# 📦 Digest

:::note

Status: This feature is under active development.

:::

The NotificationAPI's Digest feature allows for the creation of recurring user digests at configured intervals. By summarizing multiple notifications into one, it effectively reduces notification fatigue. This feature is particularly useful for weekly reports or user digests. The notification editor provides a versatile tool for customizing the appearance of combined notifications, and users can set their preferred schedule if needed.

## Example Use Cases

### Design Performance Summarization

In collaborative platforms, each view, comment, like, and approval of a design generates an event. Instead of sending separate notifications for each event, the Digest feature consolidates these into a single notification. At the scheduled time, the digest compiles and sends a summarized report of all interactions, streamlining communication for the author.

### Status Monitoring by IoT

For a scooter-sharing company, it's essential to monitor the health of each scooter. The Digest feature can compile events related to battery and brake health after each ride, providing maintainers with a comprehensive weekly report.

### Truck Driver Schedule

In the food supply chain, truck drivers need a daily schedule for pickups and deliveries. The Digest feature can be used to send these schedules, ensuring efficient and timely operations.

## How It Works

- Configuration: Access the Digest settings in the NotificationAPI's configure tab. Here, you set the digest schedule. While one schedule is mandatory, multiple schedules can be configured to accommodate user preferences.

- User Preferences: Multiple schedules appear as options on [the hosted preferences page](../components//user-preferences.md), allowing users to select their preferred schedule.

- Template Selection: During setup, select a default digest schedule, channel, and template. Ensure the template is designed to suit digest notifications.

import img from '@site/static/NotificationAPI - Notifications as a service - digest.png';

<img src={img} style={{maxWidth: 480, borderRadius: 20, border: '1px solid #d9d9d9' }} />
