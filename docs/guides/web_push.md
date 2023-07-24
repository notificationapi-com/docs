---
sidebar_position: 5
---

# Web Push Notifications

NotificationAPI supports sending web push notifications. While most notification channels like email or call only require the [back-end integration](../quick-start/send-the-notification), web push notifications require our front-end SDK to display them.

## Configuring Web Push Notifications

Sending and displaying web push notifications work out-of-the-box with our libraries:

1. Setup our [front-end library ](../reference/js-client#setup)
   :::warning
   The [service worker](../reference/js-client#adding-the-notificationapi-service-worker-file-to-your-site) integration is required for web push to work.
   :::

2. Initialize our [front-end library](../reference/js-client#initialization)

3. Send notifications from the backend [backend](../reference/server#send)
