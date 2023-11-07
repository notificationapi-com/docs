# 🌐 Web Push

import webpush from '@site/static/webpush.png';

<img src={webpush} style={{maxWidth: 300}} />
<br/>

import webpush2 from '@site/static/webpush2.png';

<img src={webpush2} style={{maxWidth: 400}} />

Web push notifications look almost identical to native notification on the device. However, they require the user to opt-in from their browser when they are on your website/front-end.

Not to be confused with [Mobile Push](./mobile-push) notifications that are truly native (delivered from installed apps), or [In-App Notifications](./inapp) that are displayed inside your UI, e.g. inside a bell icon or webpage.

## Supported Browsers

- Chrome v20 (2012)
- Safari 7 (2013)
- Edge v14 (2016)
- Firefox 22 (2013)
- Opera 23 (2014)
- Chrome Android v42 (2015)
- Firefox Android v22 (2013)
- Opera Android v29 (2015)
- Safari iOS v16.4 (2023)
- Samsung Internet v4 (2016)
- WebView Android: Not Supported.

## Requirements

- Our front-end SDK which takes care of the opt-in process, subscribing user's devices, ...

Check our [Send a Push Notification](/guides/web-push) guide.

## Important Features

- Visual editor
- Supports all devices
- Supports image and icon
- Supports redirecting the user to a URL when they click on the notification

## Tracked Events

- Delivery
- Opens and Clicks (Coming soon)
