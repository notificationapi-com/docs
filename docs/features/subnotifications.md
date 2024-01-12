# 🥈 Sub Notifications

Sub notifications are used to provide more granularity to end-users in their notification preferences. With subNotificationId, a user can sub/unsub to subgroup of a notification.

#### Example 1: Project Management Tool

Imagine notifications such as "task completed" for a project management software. The software supports having multiple projects and you want users to select which projects they receive "task completed" notifications from. `subNotificationId` allows you to subscribe users to "task completed" notifications of some projects, but not others.

#### Example 2: Facebook

Facebook generates "new post from group" notifications. These notifications look and work exactly the same, however they are generated from different groups which notify different users.

In this example, `subNotificationId` can be used to specify which group the "new post from group" notification belongs to. This allows the users to subscribe/unsubscribe to groups individually.

## How to Implement

### 1. Sending Notifications

Simply specify the `subNotificationId` parameter when using the `send` function in our back-end. (reference)

```js
notificationapi.send({
  subNotificationId: 'categoryA',
  ...
})
```

### 2. User Preferences

If you are using our API/SDK to explicitly set user preferences, you can specify the `subNotificationId` parameter in the `setUserPreferences` function. See [reference](../reference/js-client#patchuserpreference).

If you are using our user preferences widget, sub-toggles will automatically appear for the subNotifications so users can opt in or out of them.
