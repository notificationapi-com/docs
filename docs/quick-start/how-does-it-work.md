# How does it work?

import diagram from '@site/static/diagram.png';

<img src={diagram} width="600" />

<p></p>

1. You configure and design your notifications on our dashboard

- Pick the channels
- Visually design the emails, in-app, ...
- Set options like Deduplication, Digest, ...

2. Trigger sending the notification to a user from your back-end

- You can use our REST API or one of our SDKs
- NotificationAPI sends the notifications based on your configuration, brand, and designs
- In-app notifications are delivered via our pre-built widget which you can integarte into your front-end

3. We track the notifications end-to-end which you can monitor on our dashboard

4. We also provide a notification preferences widget which you can add to your front-end to allow users to manage their notifications settings.

:::info
Notice that these steps <strong>don't</strong> require any infrastructure, database, another email service, Twilio, ...

We manage all the necessary services, integrations, and infrastructure necessary.
:::
