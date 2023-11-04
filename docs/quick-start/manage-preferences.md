---
sidebar_position: 3
---

# ⚙️ User notification preferences

## Overview

NotificationAPI stores your end-users' notification preferences and automatically applies it to outgoing notifications. Notification preferences for a user can be set in different ways:

- Our pre-built **Notification Preferences Widget** for your front-end (for users)
- Our APIs and SDKs to **programmatically set the preferences** (for developers)
- Coming soon: **visually set the preferences from our dashboard** (for non-technical team members)

Let's cover this all:

## Notification Preferences Widget

Our notification preferences widget works out-of-the-box with most front-end frameworks and automatically displays and syncs the user's preferences with our servers.

import UserPref from '@site/static/userpref.gif';

<img src={UserPref} style={{maxWidth: 300, marginBottom: 30}} />

There are 2 ways to access the widget:

1. Through the ⚙️ icon on our in-app notifications widget

2. Programmatically through our front-end SDK:

```js
// npm install notificationapi-js-client-sdk
import NotificationAPIClient from 'notificationapi-js-client-sdk';

const notificationapi = new NotificationAPIClient({
  clientId: 'CLIENT_ID',
  userId: 'USER_ID'
});
notificationapi.showUserPreferences();
```

## Programmatically Update Preferences

You can set the user preferences programmatically from both your back-end and front-end code:

- [Front-end reference](reference/js-client#set-user-preferences)
- [Back-end reference](reference/server#set-user-preferences)
