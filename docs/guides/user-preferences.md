---
sidebar_position: 2
---

# Notification Preferences

import UserPref from '@site/static/userpref.gif';

<img src={UserPref} />

Without writing a line of code, your users can select their notification preferences inside your application.

## How does it work?

This feature is enabled by default. The user can access it by clicking the cog icon in the in-app notifications (gif above).

We store the user preferences on our servers and use it to determine if the user should receive the notifications you trigger for them.

There is nothing that you need to do on your end.

## What can the user see and edit?

The user only sees and edits the preferences for notifications they have already received.

For example, if you have an `internal-alert` notification but have never sent it to the user, they will not see it in their preferences.

## Do supressed notifications count towards the plan limits?

No.
