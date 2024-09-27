# 🌐 Setup Web Push

NotificationAPI supports sending web push notifications. While most notification channels like email or call only require using our [back-end SDK](../quick-start/send-a-notification), web push notification requires our front-end SDK and service worker to display them.

## Configuring Web Push Notifications

Web push notifications are integrated with the front-end JS SDK. Please follow the setup instructions [here](../reference/js-client#setup).

:::warning
The [Service Worker](../reference/js-client.md#service-worker-setup) is required to receive web push notifications.
:::

## Troubleshooting

If you encounter any issues while trying to send web push notifications, here are some common problems and solutions.

#### Problem

Web push notifications do not show up and the following JSON shows up in the backend.

```JavaScript

NotificationAPI warning. {
  trackingId: `${TRACKING_ID}`,
  messages: [
    "WEB_PUSH delivery is activated, but the user's webPushTokens is not provided. Discarding WEB_PUSH.",
    'All delivery channels are disabled/discarded. Aborted.'
  ]
}

```

#### Probable Causes

##### Problem 1

The browser's notification permissions have been previously denied or blocked.

##### Solution

1. Click on the bell notification icon, and it would ask the user whether they want to web push notifications.

![notification icon](image.png)

2. Click on <u>Yes</u>.

This would prompt the browser to ask for permission to show notifications.

If the issue still persists,

1. Reset the site's permissions to send notifications.

2. Click on the the bell notification icon, and then click on the settings icon which is there on the top right corner.

![notification preferences](image-1.png)

3. Click on <u>Click here</u>.

This would prompt the browser to ask for permission to show notification.

##### Problem 2

The Service Worker hasn't been initialized properly.

##### Solution

1. Follow the [Steps](../reference/js-client.md#service-worker-setup) over here.

2. Open the built-in developer tools for the site, then go to Applications >> Service workers. If the service worker has been initialized, it would look something like this:

![dev tools](image-2.png)

3. If <u>notificationapi-service-worker.js</u> (Service Worker) doesn't show up, that means the service worker is not there inside the public folder. Please make sure that it is placed inside the public folder.
