---
sidebar_position: 2
---

# 🔔 In-App

In-app notifications are messages that appear inside your web application, for example under a bell icon. Not to be confused with browser push or mobile push notifications.

import InAppPNG from '@site/static/inapp.png';

<img src={InAppPNG} style={{maxWidth: 400}} />

## Supported Environments

Any JavaScript based front-end framework, including:

- React
- Angular
- Vue
- Vanilla JavaScript
- Next.js
- Remix

## Requirements

- Implementing our in-app notifications widget in your front-end. [See step-by-step guide here.](guides/displaying-in-app-notifications)

:::tip
You don't need any database or other APIs. We manage all the necessary storage and APIs under-the-hood. Our widget automatically connects to our servers and gets the job done.
:::

The widget is open-sourceand fully customizable. You can modify the look and feel to match your brand or fork it to change the behavior. Alternatively, you can write your own UI from scratch. You can use our [REST API](docs/api) to fetch the notifications, mark them as read, etc. However, our team is happy to take any feature requests and apply them to our open-source widget.

## Important Features

- Fully customizable look and feel through CSS
- Live updates (new notifications appear without refreshing the page)
- Popup vs. Page modes - [see docs](docs)
- Multiple Mark as read modes - [see docs](docs)
- Pagination or endless scrolling - [see docs](docs)

## Tracking Options

The following are the events that we track and report on under our logs and insights features:

- Delivery
- Opens and Clicks (coming soon)
