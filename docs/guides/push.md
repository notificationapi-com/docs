---
sidebar_position: 4
---

# Push Notifications

NotificationAPI supports Apple Push Notifications Service (APNs) and Firebase Cloud Messaging (FCM) Push Providers. Each provider has different requirements that need to be met to deliver a message to a recipient.

## Apple Push Notifications Service (APNs)

### Setup

To send a push notification to your mobile app on an Apple device, we need some credentials from your Apple Developer account. Bellow are the required steps to generate and save APNs credentials.

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

### Managing APNs Tokens

:::info Sending push notifications to an Apple device requires generating a special token on the device that is referred to as APNs token or device token.
:::

NotificationAPI Mobile SDKs automatically managing and sync APNs tokens with NotificationAPI servers, so you don't have to. This allows you to send push notifications directly to a userId from your back-end, rather than worrying about generating, storing and retrieving the APNs token.

| Mobile SDK                                                | APNs Token Management | Tracking Analytics |
| :-------------------------------------------------------- | :-------------------: | :----------------: |
| [iOS](https://docs.notificationapi.com/reference/ios_sdk) |       Automatic       |     Automatic      |

## Firebase Cloud Messaging (FCM)

### Setup

To send a push notification to your mobile app on an Android device, we need some credentials from your Firebase Cloud Messaging account. Bellow are the required steps to generate and save FCM credentials.

1. Create a Firebase project [here](https://firebase.google.com/)
2. Go to Project Settings
3. Click "Service Accounts"
4. Click "Generate new private key"
5. Copy the private key JSON
6. Paste the private key JSON into the [FCM Provider Configuration](https://app.notificationapi.com/settings/push)

7. Click "Save"

:::info Sending push notifications to an Android device requires generating a special token on the device that is referred to as FCM token or device token.
:::

NotificationAPI Mobile SDKs automatically managing and sync FCM tokens with NotificationAPI servers, so you don't have to. This allows you to send push notifications directly to a userId from your back-end, rather than worrying about generating, storing and retrieving the FCM token.

| Mobile SDK                                                        | APNs Token Management | Tracking Analytics |
| :---------------------------------------------------------------- | :-------------------: | :----------------: |
| [Android](https://docs.notificationapi.com/reference/android_sdk) |       Automatic       |     Automatic      |

## Sending Messages with more customizations

To add more customizations to your push notification please check out the `options.apn` attribute in the [`send`](../reference/server.md#options-additional-customization) request.
