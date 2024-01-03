# 👥 Deduplication

Deduplication is the process of detecting duplicates in a system and removing them.

In NotificationAPI, this refers to the process of detecting duplicate notifications (same user, same channel, same content) and preventing them from being sent.

## What constitutes a duplicate?

A notification is duplicate if it is:

- The same notification type, e.g. `order_tracking`
- Being sent to the same user ID
- Using the same channels as before, e.g. email & in-app
- With the same exact content (same subject, same message, same attachments, ...)

## Deduplication Duration

import img from '@site/static/NotificationAPI notification as a service deduplication feature.png';

<img src={img} style={{maxWidth: 480, borderRadius: 20, border: '1px solid #d9d9d9' }} />

When setting up deduplication, you are asked to select a deduplication duration. This is the window of time during which we will consider a notification a duplicate of another.

Example: duplication window of 1 hour

- A notification is sent to user at 10:00:00AM (successful)
- Same notification to user at 10:59:59AM (ignored)
- Same notification to user at 11:02:00AM (successful)

## How to use the deduplication feature?

Deduplication is a feature that can be enabled on a per-notification basis in the notification configuration page.

It is disabled by default.
