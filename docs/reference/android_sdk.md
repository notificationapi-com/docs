---
sidebar_position: 4
---

# Android SDK (Front-End)

The Android SDK is used to recieve **push notifications** and handle device token synchronization with NotificationAPI.

Supported environments:

- Android API 24 and above

## Setup

Add the JitPack repository in your `build.gradle`.

```gradle
allprojects {
    repositories {
        ...
        maven { url 'https://jitpack.io' }
    }
}
```

Then add the Android SDK dependency.

```gradle
dependencies {
    implementation 'com.github.notificationapi:notificationapi-android-sdk:1.0.0'
}
```

## Getting Started

Create a new service that extends from `NotificationApiService`

```kotlin title="MyService.kt"
class MyService: NotificationApiService() {

    // Handle FCM tokens whenever they are generated
    override fun onNewToken(token: String) {
        super.onNewToken(token)
    }

    // Build notifications before displaying them to the user
    override fun onPreDisplayNotification(message: RemoteMessage) {
        val onClickIntent = NotificationApiIntent(this, MainActivity::class.java, message)

        displayNotification(
            intent = onClickIntent,
            icon = android.R.drawable.ic_dialog_info
        )
    }
}
```

Add your service to `AndroidManifest.xml`

```xml title="AndroidManifext.xml"
<service
    android:name=".MyService"
    android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
```

Create a new activity that extends from `NotificationApiActivity`

```kotlin title="MainActivity.kt"
class MainActivity : NotificationApiActivity() {
    companion object {
        const val TAG = "Example App"
    }
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Configure NotificationAPI with credentials
        NotificationApi.shared.configure(
            NotificationApiCredentials(
            clientId = "CLIENT_ID",
            userId = "USER_ID"
            )
        )

        // Request the user's permission to use notifications
        NotificationApi.shared.askNotificationPermissions()
    }

    // Handle clicked notifications
    override fun onNotificationClicked(message: RemoteMessage) {
        super.onNotificationClicked(message)

        Log.d(TAG, "Notification was clicked on")
    }

    // Handle notification permission request results
    override fun onNotificationRequestPermissionResult(isGranted: Boolean) {
        super.onNotificationRequestPermissionResult(isGranted)
        Log.d(TAG, "Notifications are authorized?: $isGranted")
    }
}
```

You must configure the SDK with your `NotificationAPI` credentials. It is recommended to configure the SDK as early as possible. You must also request notification authorization from the user. 

You are now ready to recieve push notifications from NotificationAPI! :tada:

## NotificationApiService

The `NotificationApiService` class handles device token synchronization with NotificationAPI. It is required to extend from this class in order to recieve push notifications from NotificationAPI.

### fun onPreDisplayNotification(message: RemoteMessage) 

This function is called after `NotificationApiService` has recieved a notification but before displaying the notification. You can override `onPreDisplayNotification()` to customize how the notification will be displayed. To use the default notification display, you must call `displayNotification()` here.

#### Parameters

`message`  
Type: [RemoteMessage](https://firebase.google.com/docs/reference/kotlin/com/google/firebase/messaging/RemoteMessage)

The Firebase message that contains the notification.

:::info

NotificationAPI sends notification data through Firebase as data messages instead of notification messages. You may use `message.data["title"]` and `message.data["body"]` to get the notification's title and body respectively. You can read more about data and notification messages at [Firebase's documentation](https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages).

:::

### fun displayNotification(intent: NotificationApiIntent, icon: Int, channelId: String, channelName: String): Int 

This function displays a default notification to the given notification channel. This will create the notification channel if it does not exist. You should call this within `onPreDisplayNotification()` to actually display the notification to the user.

#### Parameters

`intent` (required)   
Type: NotificationApiIntent

An intent that contains the notification click handler as well as the remote message that will be displayed.

`icon`  (required)  
Type: Int

The icon to display for the notification.

`channelId`  
Type: String

The channel id to use for displaying the notification. Defaults to `"default"`.

`channelName`  
Type: String

The user friendly name of the channel to display the notification in. Defaults to `"Notifications"`

#### Returns

An UUID for the displayed notification.

### fun onNewToken(token: String) 

This function is called when FCM generates a new device token.

:::info

You should always call `super.onNewToken(token)` to allow `NotificationApiService` to sync the device token to NotificationApi.

:::

#### Parameters

`token`  
Type: String

The FCM device token.

## NotificationApiActivity

The `NotificationApiActivity` class initializes the `NotificationApi` instance and provides functionality to handle notification clicking and notification permission request results. It is recommended to extend from this class.

### fun onNotificationClicked(message: RemoteMessage)

This function is called when a notification has been clicked on by an user.

#### Parameters

`message`   
Type: [RemoteMessage](https://firebase.google.com/docs/reference/kotlin/com/google/firebase/messaging/RemoteMessage)

The notification that was clicked on.

:::info

NotificationAPI sends notification data through Firebase as data messages instead of notification messages. You may use `message.data["title"]` and `message.data["body"]` to get the notification's title and body respectively. You can read more about data and notification messages at [Firebase's documentation](https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages).

:::

### fun onNotificationRequestPermissionResult(isGranted: Boolean)

This function is called when the user has responded to `NotificationApi.askNotificationPermissions()`.

`isGranted`  
Type: Boolean

True if the user has granted permission to use notifications, else false.

## NotificationApi

The `NotificationApi` class is the interface to NotificationAPI.

### fun configure(credentials: NotificationApiCredentials, config: NotificationApiConfig)

Configures `NotificationApi` to use your credentials. This should be invoked as early as possible (such as within your activity's `onCreate()`) to ensure that the user does not miss and push notifications.

#### Parameters

`credentials` (required)  
Type: NotificationApiCredentials

Your NotificationAPI credentials.

`config`  
Type: NotificationApiConfig

Configuration object for `NotificationApi`. Defaults to a default config.

### fun askNotificationPermissions(requestCode: Int)

Asks the user permission to display push notifications.

#### Parameters

`requestCode`  
Type: Int

The request code to track permission requests. Defaults to 0.

## NotificationApiCredentials

A data class for NotificationApi credentials

### constructor NotificationApiCredentials(val clientId: String, val userId: String, val hashedUserId: String?)

#### Parameters

`clientId` (required)  
Type: String

Your NotificationAPI client id.

`userId`  (required)
Type: String

The user id.

`hashedUserId`  
Type: String

The hashed user id. Defaults to `null`.

## NotificationApiConfig

A data class for NotificationApi credentials

### constructor NotificationApiConfig(val baseUrl: String)

#### Parameters

`baseUrl` (required)  
Type: String

The NotificationAPI API base url.