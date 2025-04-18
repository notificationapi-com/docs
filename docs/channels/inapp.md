---
sidebar_position: 2
---

# 🔔 In-App

In-app notifications are messages that appear inside your web application, for example under a bell icon, in real-time. Not to be confused with browser push or mobile push notifications.

import InAppPNG from '@site/static/inapp.png';

<img src={InAppPNG} style={{maxWidth: 400, borderRadius: 8, width: "100%"}} />

## Supported Environments

Any JavaScript based front-end framework, including:

- React
- Angular
- Vue
- Vanilla JavaScript
- Next.js
- Remix

## Requirements

- Implementing our in-app notifications center widget in your front-end. [See step-by-step guide here.](/quick-start/display-inapp-notifications)

:::tip
You don't need any database or other APIs. We manage all the necessary storage and APIs under-the-hood. Our widget automatically connects to our servers and gets the job done.
:::

The notification center widget is open-source and fully customizable. You can modify the look and feel to match your brand or fork it to change the behavior. Alternatively, you can write your own UI from scratch. You can use our REST API to fetch the notifications, mark them as read, etc. However, our team is happy to take any feature requests and apply them to our open-source widget.

## Important Features

- Fully customizable look and feel through CSS
- Live real-time updates (new notifications appear without refreshing the page)
- Popup vs. Page modes - [see docs](/reference/js-client#showinapp)
- Multiple Mark as read modes - [see docs](/reference/js-client#showinapp)
- Pagination or endless scrolling - [see docs](/reference/js-client#showinapp)

## Tracking Options

The following are the events that we track and report on under our logs and insights features:

- Delivery
- Opens and Clicks (coming soon)
