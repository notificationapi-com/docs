---
sidebar_position: 5
---

# iOS SDK

The iOS SDK is used to recieve **push notifications** and handle device token synchronization with NotificationAPI.

Supported environments:

- iOS 13 and above

## Setup

You can follow Apple's instructions for installing a package dependency [here](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app).

The URL is `https://github.com/notificationapi-com/notificationapi-ios-sdk.git`

## Getting Started

We highly recommend to extend from `NotificationApiAppDelegate.swift` and use that class as your app's delegate.

```swift title="Example AppDelegate"
class AppDelegate: NotificationApiAppDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        NotificationApi.shared.configure(withCredentials: NotificationApiCredentials(clientId: "YOUR_CLIENT_ID", userId: "YOUR_USER_ID"))

        NotificationApi.shared.requestAuthorization { granted, _ in
            print("Is authorized?: \(granted)")
        }

        return true
    }
}
```

You must configure the SDK with your `NotificationAPI` credentials. It is recommended to configure the SDK as early as possible. You must also request notification authorization from the user.

You are now ready to recieve push notifications from NotificationAPI! :tada:

## NotificationApiAppDelegate

The `NotificationApiAppDelegate` class handles device token synchronization with NotificationAPI and it is recommended to implement it as your own app delegate.

### func notificationApi(apnTokenDidChange token: String)

This function is called whenever the device generates a new APN token. You can use this to sync the device token to services other than NotificationAPI.

#### Parameters

`token`  
Type: String

The device token.

### func notificationApi(didClickOnBackgroundNotification info: [AnyHashable : Any])

This function is called when an user clicks on the push notification while it is in the background.

#### Parameters

`info`  
Type: [AnyHashable : Any]

A dictionary containing user info that was provided to the notification.

## NotificationApi

The `NotificationApi` class is the interface to NotificationAPI.

### var shared: NotificationApi

The app's instance of `NotificationApi`. Always use this to retrieve an instance of `NotificationApi`: do not instantiate `NotificationApi` directly.

### func configure(withCredentials credentials: NotificationApiCredentials, withConfig config: NotificationApiConfig? = nil)

Configures `NotificationApi` to use your credentials. This should be invoked as early as possible (such as within `application(didFinishLaunchingWithOptions:)`) to ensure that the user does not miss any push notifications.

#### Parameters

`credentials` (required)  
Type: NotificationApiCredentials

Your NotificationAPI credentials. You can retrieve them from [here](https://app.notificationapi.com/environments).

`config`  
Type: NotificationApiConfig

Config object for the NotificationApi SDK.

### func requestAuthorization(completionHandler handler: @escaping (Bool, Error?) -> Void)

Requests the user's permission to recieve push notifications.

import IosRequestAuth from '@site/static/ios_request_auth.png';

<img src={IosRequestAuth
} />

#### Parameters

`handler` (required)

`granted`  
Type: Boolean

If the app is authorized to recieve notifications.

`error`  
Type: Error

An error object that indicates that an error occurred while trying to request authorization.

:::info

There is also an async version that can be used like the following:

```swift
func NotificationApi.shared.requestAuthorization() async throws -> Bool
```

:::

### func syncApn(token: String, completionHandler handler: @escaping (Error?) -> Void)

Sync the device token with NotificationAPI.

#### Parameters

`token` (required)  
Type: String

The device token. Can be retrieved via `notificationApi(apnTokenDidChange:)`.

`handler`

`error`  
Type: Error

An error object that indicates that an error occurred while trying to request authorization.

:::info

There is also an async version that can be used like the following:

```swift
func syncApn(token: String) async throws
```

:::

## NotificationApiCredentials

An object containing credentials for NotificationAPI.

### func init(clientId: String, userId: String, hashedUserId: String? = nil)

#### Parameters

`clientId` (required)  
Type: String

Your NotificationAPI client id.

`userId` (required)  
Type: String

The user id.

`hashedUserId`  
Type: String

The hashed user id.

## NotificationApiConfig

A config object for NotificationAPI.

### func init(baseUrl: String)

#### Parameters

`baseUrl` (required)  
Type: String

The NotificationAPI API base url.
