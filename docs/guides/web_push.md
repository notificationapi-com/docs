---
sidebar_position: 5
---

# Web Push Notifications

NotificationAPI supports sending web push notifications. While most notification channels like email or call only require the [back-end integration](../quick-start/send-the-notification), web push notifications require our front-end SDK to display them.

## Configuring Web Push Notifications

It works out-of-the-box with our front-end library. To display web push notifications, you need to initialize the NotificationAPI SDK in your front-end code. The SDK will automatically prompt your users for permission to deliver web push notifications. All you need to do is:

1. Add the NotificationAPI Service Worker file to your site.

   1.1. Create a new file notificationapi-service-worker.js at the top-level root of your site (public).

   1.2. Copy the following import statement:

   ```
   importScripts('https://unpkg.com/notificationapi-js-client-sdk/dist/service-worker.js');
   ```

2. Setup our [front-end library ](../reference/js-client#setup)

3. Initialize our [front-end library](../reference/js-client#initialization)

4. Send notifications from the backend [backend](../reference/server#send)
