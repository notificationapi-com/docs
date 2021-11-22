---
sidebar_position: 3
---

import dkim from '@site/static/DKIM.jpg';

# Domain Verification

By default, email notifications are sent from `noreply@notificationapi.com`. Verifying your domain allows you to change the sender/FROM address on email notifications.

:::info

The technical term for this process is DKIM. DKIM verification identifies the authentic sender (you) from malicious users who want to forge your email address.

:::

## Prerequisites

- Access to your domain's DNS settings

## 1. Request verification

First, request verifying a new domain from either:

- NotificationAPI -> Settings -> Domain Verification
- NotificationAPI -> Edit Email Template -> change the FROM address to something with your domain

## 2. Verification Process

1. After the request, you will see 3 DNS records that you must add to your domain
2. Go to your domain's DNS setting page
3. Add 3 CNAME records with the specified names and values

:::tip **Common Issue**

<img src={dkim} />

You notice that the _name_ field of the records includes _.yourdomain.com_ at the end.

Some DNS providers expect this to be in the name field while others **don't**. This is the primary cause of verification failure.

If your DNS provider does not expect the _.yourdomain.com_, omit it.

:::

Below you can find the guide for editing DNS records in common domain providers:

| Provider    | Documentation                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AWS         | [Editing Records](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-editing.html)                                                                       |
| GoDaddy     | [Add a CNAME record](https://ca.godaddy.com/help/add-a-cname-record-19236)                                                                                                           |
| Dreamhost   | [How do I add custom DNS records?](https://help.dreamhost.com/hc/en-us/articles/360035516812)                                                                                        |
| Cloudflare  | [How do I add a CNAME record?](https://support.cloudflare.com/hc/en-us/articles/360019093151-How-do-I-add-a-CNAME-record-)                                                           |
| HostGator   | [Manage DNS Records with HostGator/eNom](https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom)                                                               |
| Namecheap   | [How do I add TXT/SPF/DKIM/DMARC records for my domain? ](https://www.namecheap.com/support/knowledgebase/article.aspx/317/2237/how-do-i-add-txtspfdkimdmarc-records-for-my-domain/) |
| Names.co.uk | [Changing your domain's DNS settings](https://www.names.co.uk/support/articles/changing-your-domains-dns-settings/)                                                                  |
| Wix         | [Adding or Updating CNAME Records in Your Wix Account](https://support.wix.com/en/article/adding-or-updating-cname-records-in-your-wix-account)                                      |

## 3. Wait Period

- usually one hour
- can take up to 72 hours

You can see the status of the verification on the settings page.
