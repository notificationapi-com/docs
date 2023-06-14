---
sidebar_position: 7
---

# Unsubscribe Link

This feature allows you to add an "Unsubscribe Link" to your notifications without writing any code.

## Why is this important?

With Emails and SMS, frustrated users will mark your notifications as spam if you don't provide an easy unsubscribe option to your users. Spammed communication will signal email servers or telecom services to suspect your domain/number, leading to a reduced delivery rate or suspending your account.

## How does it work?

1. Add `{{notificationapi:unsubscribe_url}}` anywhere in your templates, e.g. as the URL of an "unsubscribe" button
2. Our system replaces this with a unique URL
3. Clicking the URK will unsubscribe the user from that particular channel for that particular notification
4. The user will see the following page:

import unsublink from '@site/static/Unsubscribe Link.png';

<img src={unsublink} />

## Can I customize this page?

You can replace the graphic with your own logo (PNG) from the Dashboard => Settings => Organization.

## Can the URL be misused?

A malicious attacker can tamper with the URL to unsubscribe other users if the attacker can guess their userId. Unsubscribing users from notifications is a low-risk threat. But you can avoid it by enabling secure mode from the Dashboard => Settings => Security.

:::info
Please note that by using the secure mode, you will need to make changes to how you implement the front-end library. [Read more here](../reference/js-client.md#secure-mode)
:::

## Is there a subscribe link?

By default, when you send a notification to a user, they are subscribed to that type of notification. So, there is no need to pre-emptively subscribe users to notifications.
