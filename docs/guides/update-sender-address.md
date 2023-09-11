import dkim from '@site/static/DKIM.jpg';
import mailfrom from '@site/static/mailfrom.png';

# Update Sender Address

By default, email notifications are sent from noreply@notificationapi.com. Changing the sender to an address of your choice requires verification.

We support two verification methods:

1. Domain Verification: Recommended, but requires updating DNS records
2. Individual Email Address Verification: Easier setup, but not as good as domain verification

## Method 1: Domain Verification

##### Technical details:

- Excellent Deliverability: Uses both DKIM and SPF policies
- Sender/From Address: Any email under the domain
- MAIL-FROM Field: Set to notificationapi.yourdomain.com. [What is this?](#mail-from-field)

##### Step by Step:

1. Add the domain from the Dashboard -> Settings -> Domain Verification
2. Add the 5 DNS records displayed on the dashboard to your DNS settings
3. Wait, usually a few minutes, but sometimes it could take 72 hours

:::tip **Most Common Issue**

<img src={dkim} />

Some DNS providers, such as AWS Route53, will automatically add your domain to the `NAME` field of the DNS records. In this case, you don't need to do anything.

Some DNS providers expect you to add the domain yourself. In this case, add `.YOUR_DOMAIN.com` to the end of the `NAME` field for each record.

:::

## Method 2: Individual Email Address Verification

##### Technical details:

- Ok Deliverability: Only uses DKIM policy, not SPF
- Sender/From Address: Only the individually verified email
- MAIL-FROM Field: Set to amazonses.com. [What is this?](#mail-from-field)

##### Step by Step:

1. Add the email address from the Dashboard -> Settings -> Domain Verification
2. Click the verification link you should have received in that email inbox

## MAIL-FROM Field

The MAIL-FROM field is different than the Sender/From address. This field indicates which server originated the email. Users can see this field if they dig into the email details (see the image below from Gmail).

The Domain Verification method sets this field to _notificationapi.yourdomain.com_, which is better for deliverability and branding. The Individual Email Address Verification sets this field to _amazonses.com_.

<img src={mailfrom} style={{maxWidth: "600px"}} />
