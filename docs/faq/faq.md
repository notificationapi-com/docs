# Frequently Asked Questions (FAQ)

## Why Can I Not Send Notifications from a Front-end SDK?

NotificationAPI front-end SDKs require your `clientId` and `clientSecret` keys that are unique to your account. If anyone else obtained your keys then they would be able to edit or delete your notifications, and be able to send requests to NotificationAPI from your account. This is a security risk to you and your clients. 

To better protect you, the NotificationAPI front-end SDKs do not allow _sending_ notifications: they only allow _receiving_ notifications. If you require sending notifications from your front-end, it is recommended to use a NotificationAPI back-end SDK on your back-end and expose an API for your front-end.