# ⚙️ User Preferences Widget

import userpref2 from '@site/static/userpref2.png';

<img src={userpref2} style={{maxWidth: 380, borderRadius: 8}} /><br/><br/>

This document outlines all the features, common use-cases and best-practices for the user notification preferences widget.

This widget is part of our Front-end SDK, compatible with any JavaScript-based front-end framework like React, Angular and so on.

Relevant docs:

- [Add the widget to your front-end](../quick-start/manage-preferences)
- [Front-end SDK reference](../reference/js-client)

## How It Works

- The widget connects to our servers and reads the user preferences
- It will use this data to render the UI elements necessary to show the preferences
- Upon end-user interaction, it will update our servers of the new preferences

These preferences will be used in our servers for deciding how notifications are delivered to the end-user.

## What options are displayed?

Only channels that are enabled for the notification through the dashboard are visible/editable. For example, if the "SMS" channel is not enabled on a notification, the toggle will not appear. If the SMS channel is disabled for every notification, the SMS column will disappear altogether.

Only notifications will appear that:

- The user has received once, or
- The user has explicit preferences set for them, e.g. when your team explicitly enables the notification for the user from the SDK

## Display Modes

#### Popup (Default)

By default, the `showUserPreferences()` will display a popup similar to the image above. This is referred to as the popup mode.

#### Inline

Alternatively, by using `parent: "DIV_ID"` parameter, the widget will render the preferences directly onto the parent element (ideally an empty div). This is referred to as the inline mode. This mode is useful for creating a stand-alone notification settings page in your app.

## Styling and Branding

There is no "NotificationAPI" branding on this widget, even in our free tier.

And you can completely override the styles to make it match your own UI. You simply need to inspect the element you want to style, find the correct CSS class and customize it by writing your own CSS rules.

For example:

```css
/* Hide the title */
.notificationapi-preferences-popup h1 {
  display: none !important;
}

/* Change the toggle color to orange */
.notificationapi-preferences-popup .switch input:checked + i {
  background-color: orange !important;
}
```
