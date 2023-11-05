# 🌐 Setup Web Push

NotificationAPI supports sending web push notifications. While most notification channels like email or call only require using our [back-end SDK](../quick-start/send-a-notification), web push notification requires our front-end SDK and service worker to display them.

## Configuring Web Push Notifications

Sending and displaying web push notifications work out-of-the-box with our libraries:

1. Setup our [front-end library ](../reference/js-client#setup)
   :::warning
   The <a href="https://docs.notificationapi.com/reference/js-client#service-worker-setup-required-for-web-push" target="_self">Service Worker</a> integration is required for web push to work.
   :::

2. Initialize our [front-end library](../reference/js-client#initialization)

3. Send notifications from the backend [backend](../reference/server#send)
