# 🙉 Unsubscribe Link & Page

import notificationapi_unsub from '@site/static/notificationapi_unsub.png';

<img src={notificationapi_unsub} style={{maxWidth: 700}} />

Email best-practice recommends including a "One-Click Unsubscribe Link" in your emails. This URL, upon being opened should automatically unsubscribes the user from that notification. It can also show some content with your branding and message.

NotificationAPI automatically generates this URL and the page out-of-the-box, without any coding! This URL only unsubscribes the user from one particular type of notification, e.g. "System Alerts" on Email, not every notification.

## Why is this important?

With Emails, it is important to provide an easy way for users to unsubscribe. Otherwise, frustrated users will mark your notifications as spam, resulting in them not receiving ANY further communications from you. Also spammed communication will signal email servers or telecom services to suspect your domain, leading to a reduced delivery rate or completely blocking your domain's messages.

import unsubscribe from '@site/static/unsubscribe.png';

:::warning
Starting February 2024, Google is enforcing a new policy that requires all emails to have an unsubscribe link in the email header. [Read more here](https://blog.google/products/gmail/gmail-security-authentication-spam-protection/). Using NotificationAPI, you are automatically compliant with this policy, as we include the unsubscribe link in all outgoing email headers (not the content).

Google will use this link to display a unsubscribe link in the Gmail UI, as shown below:

<img src={unsubscribe} style={{maxWidth: 400}} />

:::

## How does it work?

1. Add `{{notificationapi:unsubscribe_url}}` anywhere in your templates, e.g. as the URL of an "unsubscribe" button
2. Our system replaces this with a unique URL
3. Clicking the URL will unsubscribe the user from that particular channel for that particular notification
4. The user will see the Unsubscribe Page with the option to re-subscribe:

import notificationapi_unsub2 from '@site/static/notificationapi_unsub2.png';

<img src={notificationapi_unsub2} style={{maxWidth: 400}} />

## Can I customize this page?

You can replace the graphic with your own logo (PNG) from the [Organization Settings Tab](https://app.notificationapi.com/settings/organization). We are working on providing more branding options in the future.

For enterprise customers, we provide completely customized experiences.
