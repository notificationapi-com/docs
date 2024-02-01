---
sidebar_position: 1
---

# ✉️ Email

## Requirements

#### Testing:

- No setup required
- Emails go out using our domain `@notificationapi.com` (no configuration required)

#### Production:

- Requires verifying your domain through DNS records

Please refer to `Dashboard -> Settings -> Domain Verification` for the step-by-step instructions.

:::tip
You DON'T need another 3rd-party email service like SendGrid or SES. Through our partnerships, We allocate and manage any required email infrastructure, even dedicated IPs, for you.
:::

## Important Features

- High delivery through SPF, DKIM and DMARC - [see docs](../guides/domain-verification.md)
- Following email standards and best practices for a better experience and higher security - [see docs](email.md#following-email-standards)
- Merge tags (injecting dynamic values into the email content) - [see docs](../features/mergetags)
- Pre-built Unsubscribe Link and Web Page - [see docs](../components/unsubscribe-page)
- Attachments - [see docs](../reference/server#send)
- CC, BCC fields - [see docs](../reference/server#send)

## Email Editor

import BeePNG from '@site/static/bee.webp';

<img src={BeePNG} style={{maxWidth: 500}} />

To remove the burden of manually building email templates, we have integrated a fully loaded email editor. Now everyone on your team can create and modify your email notfications without coding.

- Drag and drop editor
- Image, GIF, and video support
- Mobile responsive & mobile preview
- Save and re-use email parts like headers and footers

## Tracking Options

The following are the events that we track and report on under our logs and insights features:

- Delivery to destination mail server
- Bounces
- Complaints
- Opens and Clicks (coming soon)

## Following Email Standards

In light of recent announcements by [Google](https://blog.google/products/gmail/gmail-security-authentication-spam-protection/) and [Yahoo](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam), it has become mandatory for bulk email senders to implement DMARC starting from February 2024. NotificationAPI simplifies this process for you. By adding specific records to your DNS settings, you can comply with these new requirements effortlessly. For detailed instructions on how to do this, please refer to our [Domain Verification Guide](../guides/domain-verification.md).

Moreover, it's essential to ensure that your emails support an easy, one-click unsubscribe process. This includes incorporating a clearly visible unsubscribe link within the body of your messages. NotificationAPI fully supports these functionalities, adhering to the standards set forth by [RFC 2369](https://datatracker.ietf.org/doc/html/rfc2369) and [RFC 8058](https://datatracker.ietf.org/doc/html/rfc8058). Our system automatically includes the necessary headers in your outgoing messages, providing your recipients with a straightforward method to opt-out of future communications.

## Your Own Email Team

Imagine having your own email team:

Our team monitors bounces and complaints and will reach out to you directly if we detect an alarming rate of such emails. You can also reach out to us any time to ask about best practices, to review your email content, or to help you troubleshoot a delivery issue.

For paying customers, we help transfer your existing email templates into our editor, and we can also help you build new ones.
