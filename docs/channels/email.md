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

- High delivery through SPF, DKIM and DMARC
- Merge tags (injecting dynamic values into the email content) - [see docs](docs)
- Pre-built Unsubscribe Link and Web Page - [see docs](docs)
- Attachments - [see docs](docs)
- CC, BCC fields - [see docs](docs)

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

## Your Own Email Team

Imagine having your own email team:

Our team monitors bounces and complaints and will reach out to you directly if we detect an alarming rate of such emails. You can also reach out to us any time to ask about best practices, to review your email content, or to help you troubleshoot a delivery issue.

For paying customers, we help transfer your existing email templates into our editor, and we can also help you build new ones.
