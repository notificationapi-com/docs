---
sidebar_position: 1
---

import dkim from '@site/static/DKIM.jpg';
import mailfrom from '@site/static/mailfrom.png';

# ✅ Verify Your Domain

By default, email notifications are sent from noreply@notificationapi.com; which is not good for production use. Changing the sender address to your domain requires domain verification.

The domain verification process is similar to the process used by other email providers, such as SendGrid and Mailgun. Our domain verification covers a few features:

- SPF, DKIM, DMARC; which contributes to high email deliverability. It helps your users to be more confident about an email’s source.
- MAIL-FROM field; which is better for branding and deliverability.

## How to

1. Add your domain from the `Dashboard -> Settings -> Domain Verification`
2. Add the 6 DNS records displayed on the dashboard to your DNS settings
3. Wait until the status is updated in the dashboard. This usually takes a few minutes, but sometimes it could take up to 72 hours

## What is the MAIL-FROM Field?

The MAIL-FROM field is different than the "From" address. This field indicates which server originated the email. Users can see this field if they dig into the email details (see the image below from Gmail).

The Domain Verification method sets this field to _notificationapi.yourdomain.com_, which is better for deliverability and branding.

<img src={mailfrom} style={{maxWidth: 600, borderRadius: 8, width: "100%"}} />
