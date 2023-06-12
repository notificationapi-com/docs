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

You must configure the SDK with your `NotificationAPI` credentials. It is recommended to configure the SDK as early as possible. You must also request notification authorization from the user. 

You are now ready to recieve push notifications from NotificationAPI! :tada: