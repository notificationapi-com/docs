# 📦 Batching & Digest

The NotificationAPI's Batch & Digest allows for combining multiple notifications into one. The resulting batched notification can be designed with our editors, and can be configured to be sent at different intervals (hourly, daily, ...).

## Common Use Cases

**Preventing notification fatigue**: For example, instead of sending 10 "new comment" emails, you can batch them into one "new comments" email on an hourly basis.

**Daily/Weekly/Monthly Reports**: You can combine the "events" from your software into a daily/weekly/monthly email. For example, every time there is a new user you can trigger a notification, but our system will send a "new users this week" email on a weekly basis.

## Email Batching - How does it work?

### 1. Configure

From our dashboard, you can enable different `Delivery Options` for the email channel.

import deliveryOptions from '@site/static/delivery_options.png';

<img
src={deliveryOptions}
style={{
    maxWidth: 480,
    borderRadius: 8,
    border: '1px solid #d9d9d9',
    marginBottom: 20,
    width: "100%"
  }}
/>

In the example above, we are allowing users to receive emails intantly (no batching) or to unsubscribe from this email. The default delivery method for new users is based on the small green tag, which you can change.

The above options also allow users to see and pick the right preference for themselves using our [prebuilt user preference component](/components/user-preferences.md):

import userPreference from '@site/static/UserPreferencesEmailBatching.png';

<img
src={userPreference}
style={{
    maxWidth: 480,
    borderRadius: 8,
    width: "100%"
  }}
/>

### 2. Configure the Template

Don't forget to create and assign an email template for the batched delivery options. For example, if you have enabled the `Weekly` delivery option, you must create a template and from its options, pick it as the template used for the `Weekly` emails.

:::tip

You can create unlimited templates for each notification type. For example, you can have a "default" template for the `new_comment` email notification, a "Spanish" template for Spanish speaking users, or a "Weekly Digest (English)" template for batching these notifications into a single email.

:::

### 3. Designing the Template

You can design the batch template using our no-code email editor, just like you would with a regular instant email.

Tips:

- When using [Parameters (Merge Tags)](mergetags), you can access the batched items via `{{_items}}`.
- To count the number of batched items, you can use `{{_items.size}}` in your template.
- You can repeat a row based on the `_items` by selecting the row and clicking the "Select Condition" button on the right panel.

import EmailEditorBatching from '@site/static/EmailEditorBatching.png';

<img
src={EmailEditorBatching}
style={{
    maxWidth: 800,
    borderRadius: 8,
    width: "100%"
  }}
/>

## In-App Batching

In-App batching works different than email in the sense that it happens live. When a new in-app notification is generated, it is instantly sent to the client-side SDK, and then client-side SDK handles the batching.

### 1. Configure

From our dashboard, you can select that the in-app notifications should be batched. When selecting this option, you are allowed to pick how notifications are batched together by picking a `batchingKey`.

Notifications with similar `batchingKeys` are batched together. For example, when users make comments under a social media post, you can use that post's unique ID as the `batchingKey`. This way, the new comment notifications for the same post are batched together. For this purpose, you can set the batchingKey to `{{parameters.comment_id}}`.

### 2. Design the Template

In the in-app template editor, you now have the option to specify the title, image and URL of the batched in-app notifications. For example, instead of displaying "You have a new comment", you can display "You have \{\{\_items.size\}\} new comments".

import InAppEditorBatched from '@site/static/InAppEditorBatched.png';

<img
src={InAppEditorBatched}
style={{
    maxWidth: 600,
    borderRadius: 8,
    width: "100%"
  }}
/>

### 3. SDK

The React SDK automatically handles the batching logic and UI on the client-side.

:::tip[If you have built your own UI]
We pass everything you need for the batching logic and UI inside the in-app notification objects. You can even create your own custom batching logic that batches notifications based on whatever criteria you need.
:::

## Frequently Asked Questions (FAQs)

### How does `Email Batching` work when there are no requests at the set hour/day/week/month?

If there are no notifications for a user in the batch period, the system will not send an email.

### Will notifications with different sub notifications be batched together or separately?

Requests with different [subNotificationIds](subnotifications.md) will be batched together.

### How does `Batch & Digest` work with `Throttling`?

The [`Throttling`](throttling.md) criteria are checked at the configured time in the `Delivery Options`. For example, assume if you have configured `Throttling` for 2 notifications per user per 24 hours and configured the delivery option as `hourly`, and then sent a notification every hour. In the first two hours, a batched notification will be sent. Any notifications recieved afterwards will be discarded until 24 hours has passed.

Likewise if you have a notification with [`Throttling`](throttling.md) set to allow 5 `new_comment` notifications per hour and a `Weekly` delivery option selected, then the 6th notification within the same hour will be ignored.

### How does `Batch & Digest` work with `Deduplication`?

The [`Deduplication`](deduplication.md) criteria are checked at the configured time in the `Delivery Options`.

For example, assume the [`Deduplication`](deduplication.md) window is 24 hours and a `hourly` delivery option is selected. If any batches are detected as a duplicate, then they are discarded.

### How does `Batch & Digest` work with `Scheduling`?

Batched notifications are sent based on their selected `Delivery Options`. Any requests recieved (either from scheduled or instant notifications) are added to the batch.

For example, assume a notification is configured to send batches `Weekly` on `Monday at 9:00 am`, and recieves a scheduled request for `Sunday at 1:00 pm`. The request is not sent on `Sunday at 1:00 pm`: instead it is batched and will be included in the notification sent on `Monday at 9:00 am`.

### Does `Batch & Digest` user's timezone?

Yes, if the user's timezone is defined by [the front end SDKs](/reference/js-client#identify), and/or [backend SDKs](/reference/server#identifyuser) or simply added to the [send request](/reference/server#send) the request is scheduled for the user's timezone. The default timezone is `EST`.

### What happens to email attachments?

Batched notifications will retain and combine all of their attachments into the same email. You should be careful with the size of the attachments.

### Do I have to pay extra for `Batch & Digest`?

No, this feature is provided for no additional charge.
