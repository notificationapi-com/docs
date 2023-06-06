---
sidebar_position: 4
---

# Push Notifications

NotificationAPI supports Apple Push Notifications Service (APNs) and Firebase Cloud Messaging (FCM) Push Providers. Each provider has different requirements that need to be met to deliver a message to a recipient.

## Apple Push Notifications Service (APNs)

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
10. Go to the [APNs Provider Configuration](https://app.notificationapi.com/settings/push)
11. Enter the required information
12. Click "Save"

### Getting APNs Tokens

#### With a NotificationAPI Mobile SDK

Using a NotificationAPI Mobile SDK is the best way to set this up. All NotificationAPI Mobile SDKs sync APNs tokens to NotificationAPI and will be automatically managed. This allows you to send pushes directly to a `userId` rather than APNs tokens.

| Mobile SDK                                                                   | APNs Token Management | Tracking Analytics |
| :--------------------------------------------------------------------------- | :-------------------: | :----------------: |
| [iOS](https://github.com/notificationapi-com/notificationapi-ios-sdk#readme) |       Automatic       |     Automatic      |

### Sending Messages with more customizations

To add more customizations to your push notification please check out the `options.apn` attribute in the [`send`](../reference/server.md#options-additional-customization) request.
