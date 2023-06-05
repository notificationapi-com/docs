---
sidebar_position: 4
---

# Push Notifications

NotificationAPI supports Apple Push Notifications Service (APNS) and Firebase Cloud Messaging (FCM) Push Providers. Each provider has different requirements that need to be met to deliver a message to a recipient.

## Apple Push Notifications Service (APNS)

### Setup

1. Go to your [Apple Developer Account](https://developer.apple.com/account)
2. Click "Certificates"
3. Click "Keys"
4. Click the "+" button
5. Name the Key
6. Click "Enable" on "Apple Push Notifications Service (APNs)"
7. Click "Continue"
8. Click "Register"
9. Click "Download"
<!-- ToDo: update URL to the push setting tab -->
10. Go to the [APNS Provider Configuration](https://app.notificationapi.com/settings/push)
11. Enter the required information
12. Click "Save"

### Getting APNS Tokens

#### With a NotificationAPI Mobile SDK

Using a NotificationAPI Mobile SDK is the best way to set this up. All NotificationAPI Mobile SDKs sync APNS tokens to NotificationAPI and will be automatically managed. This allows you to send pushes directly to a `userId` rather than APNS tokens.

| Mobile SDK                                                                   | APNS Token Management | Tracking Analytics |
| :--------------------------------------------------------------------------- | :-------------------: | :----------------: |
| [iOS](https://github.com/notificationapi-com/notificationapi-ios-sdk#readme) |       Automatic       |     Automatic      |

#### Without a NotificationAPI Mobile SDK

Follow [Apple's Documentation](https://developer.apple.com/documentation/usernotifications) to setup push notifications on your iOS device.

What APNS tokens look like:

```
469d754f85604fa6bcf98c4299ba9aa760a5a3b01c5ca7277342cf3fbcea5c91
```

:::danger Manual Implementation Requirements

You will need to sync, store, and manage your user's APNS tokens. This likely will require you to create entries in your database, deploy separate endpoints, and add extra development time that can be avoided with a [NotificationAPI Mobile SDK](#with-a-notificationapi-mobile-sdk).

<!-- ToDo: add tracking -->
<!-- If you'd like NotificationAPI delivery and click tracking, you will also need to manually make a request to the `trackingUrl`. -->

:::

### Sending Messages with more customizations

To add more customizations to your push notification please check out the `options.apn` attribute in the [`send`](../reference/server.md#options-additional-customization) request.
