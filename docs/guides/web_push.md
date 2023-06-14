---
sidebar_position: 5
---

# Web Push Notifications

NotificationAPI supports sending web push notifications. While most notification channels like email or call only require the [back-end integration](../quick-start/send-the-notification), web push notifications require our front-end SDK to display them.

## Configuring Web Push Notifications

It works out-of-the-box with our front-end library. To display web push notifications, you need to initialize the NotificationAPI SDK in your front-end code. The SDK will automatically prompt your users for permission to deliver web push notifications. All you need to do is:

1-Setup our [front-end library ](../reference/js-client#setup)

2-Initialize our [front-end library](../reference/js-client#initialization)

3-Send notifications from the backend [backend](../reference/server#send)
