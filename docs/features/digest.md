# 📦 Batch & Digest

:::note

Status: Batch & Digest is currently in active development. Stay tuned for more updates and improvements.

:::

The NotificationAPI's Batch & Digest feature allows for the creation of recurring user digests at configured intervals. By batching multiple notifications into one, it effectively reduces notification fatigue. This feature is particularly useful for weekly reports or user digests. The notification editor provides a versatile tool for customizing the appearance of combined notifications, and your users can set their preferred schedule if needed.

## Example Use Cases

- Social media post likes and comments: In social media platforms, each like and comment on a post generates an event. Instead of sending separate notifications for each event, the Batch and Digest feature consolidates these into a single notification. At your chosen time, the requests will be compiled and sent a summarized report of all interactions on the post.

- Truck Driver Schedule: For administrators overseeing food supply chains, a daily overview of all pickups and deliveries is crucial. The Digest feature provides these summaries, promoting effective and timely operations management.

## How does it work?

For each notification, you can configure the channels' `Delivery Options` as following:

   - `Instantly`: When we receive an `Email` request, we try to deliver it to your user instantly. This delivery option is the `default`.
   - `Hourly`: We deliver all the `Email` requests that we receive in an hour.
   - `Weekly`: This configuration delivers all the `Email` requests once a week. You can choose the day and time for it.
   - `Monthly`: To deliver `Email` notifications once a month. It can happen at the beginning or end of a month. You can also select the time to deliver as well.
   - `Allow unsubscribing`: This allows your users to unsubscribe from this `Email`.

   `The Default Preference` indicates your users' default preference for delivery options.

   The following shows a sample of an `Email` channel's `Delivery Options`.

import deliveryOptions from '@site/static/delivery_options.png';
import userPreference from '@site/static/userPreference.png';

<img
src={deliveryOptions}
style={{
    maxWidth: 480,
    borderRadius: 20,
    border: '1px solid #d9d9d9',
    marginLeft: 100
  }}
/>

If you adjust the settings in the above component, the default [user preference prebuilt component](../components/user-preferences.md) will be displayed as follows:`

<img
src={userPreference}
style={{
    maxWidth: 480,
    borderRadius: 20,
    border: '1px solid #d9d9d9',
    marginLeft: 100
  }}
/> 


Each channel can have one or more templates, and each template can be configured for one or multiple delivery options.

Using the example `new_comment` notification above, you can configure the `Email` channel to deliver every Monday at 9:00 am via enabling the `Weekly` option and choosing `Monday 9:00 am` from the dropdown boxes. Doing so will give your notification three delivery options: `Instantly`, `Weekly` and `Allow Unsubscribing`. You can optionally choose to have the `Weekly` option as the default, via selecting it in `The Default Preference` options.

In the design tab, you can create two `Email` templates: one for the `Instantly` delivery option and one for `Weekly.` Requests sent for this notification will be batched and on `Monday at 9:00 am` the notification will send on its `Email` channel using the `Weekly` template. If your user changes their `Email` preference to `Instantly`, then the notification will be sent instantly with the corresponding `Instantly` template.

When using [Parameters (Merge Tags)](./mergetags) while you are desiging a template, you can access the batched items via `{{_items}}`. This parameter is an array of all requests that were batched since the notification was last sent and delivered based on your `Delivery Options`.

For example, you can retrieve the number of comments in the `new_comment` notification by using a [`filter`](./mergetags#filters) like `{{_items | size}}` in your template. This parameter will be replaced with the number of requests in the current batch.

With batching you can still use all the functionality that is provided by the [Parameters (Merge Tags)](./mergetags.md) feature, such as [`Loops`](./mergetags#loops-for), [`Conditional Logic`](./mergetags#conditional-logic-if-else), and [`filter`](./mergetags#filters).

## Frequently Asked Questions (FAQs)

### How does `Batch & Digest` work when there are no requests at the delivery time configured in the `Delivery Options`?

If there are no notifications for a user in the specified period, the system will not send a notification. For example, assume you have selected the `Weekly` delivery option on `Monday at 9:00 am` for the `Email` channel. If there is no request recorded for the user by `Monday at 9:00 am` then no email will be sent.

### How does `Batch & Digest` work with `Throttling`?

The [`Throttling`](./throttling.md) criteria are checked at the configured time in the `Delivery Options`. For example, assume if you have configured  `Throttling` for 2 notifications per user per 24 hours and configured the delivery option as `hourly`, and then sent a notification every hour. In the first two hours, a batched notification will be sent. Any notifications recieved afterwards will be discarded until 24 hours has passed.

Likewise if you have a notification with [`Throttling`](./throttling.md) set to allow 5 `new_comment` notifications per hour and a `Weekly` delivery option selected, then the 6th notification within the same hour will be ignored.

### How does `Batch & Digest` work with `Deduplication`?

The [`Deduplication`](./deduplication.md) criteria are checked at the configured time in the `Delivery Options`.

For example, assume the [`Deduplication`](./deduplication.md) window is 24 hours and a `hourly` delivery option is selected. If any batches are detected as a duplicate, then they are discarded.

### How does `Batch & Digest` work with `Scheduling`?

Batched notifications are sent based on their selected `Delivery Options`. Any requests recieved (either from scheduled or instant notifications) are added to the batch.

For example, assume a notification is configured to send batches `Weekly` on `Monday at 9:00 am`, and recieves a scheduled request for `Sunday at 1:00 pm`. The request is not sent on `Sunday at 1:00 pm`: instead it is batched and will be included in the notification sent on `Monday at 9:00 am`.

### Do I have to pay extra for `Batch & Digest`?

No, this feature is provided for no additional charge.
