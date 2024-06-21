---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import PopUpBell from '@site/static/reactsdk/popup.png';
import PopUpInbox1 from '@site/static/reactsdk/popupinbox1.png';
import PopUpLauncher from '@site/static/reactsdk/popuplauncher.png';
import InAppFeed from '@site/static/reactsdk/inappfeed.png';
import InAppPreferences from '@site/static/reactsdk/notipreferences.png';
import InlinePreferences from '@site/static/reactsdk/inlinepref.png';
import ElementCounter from '@site/static/reactsdk/elementcounter.png';

# React SDK (Front-End)

The React SDK is mainly used for displaying **In-App** Notifications and allowing users to see and change their **Notification Preferences**.

<Tabs
groupId="package-manager"
defaultValue="manager"
values={[
{ label: 'Package Manager', value: 'manager' },
{ label: 'UMD', value: 'umd' }
]
}>
<TabItem value='manager'>

```shell title='1. Install'
npm install @notificationapi/react
# yarn add @notificationapi/react
# pnpm add @notificationapi/react
```

```js title='2. Import'
import { ComponentName } from '@notificationapi/react';
```

```js title='3. Initialize'
<NotificationAPIProvider
  userId="user" //use your userId
  clientId="abc123" //use your clientId
>
  <YourComponentsHere />
</NotificationAPIProvider>
```

</TabItem>
<TabItem value="umd">
```shell title='1. Placeholder'
filler
```
</TabItem>
</Tabs>

# UI Customization

## Popup Mode

Our popup component opens up to display your inbox for in-app notifications. This gives users a small interface for accessing their notifications without taking up screen space. Especially useful for mobile apps.

<img src={PopUpBell} style={{maxWidth: 400}} />

All notifications are displayed here, and each notification comes with buttons to mark notifications as "seen" or "archived".
Additionally, the top right of the inbox contains features for setting user preferences and marking all notifications as read directlyfrom the inbox. If a notification has redirect, interacting with it will send users to that link or page from within the component.

<img src={PopUpInbox1} style={{maxWidth: 400}} />

## Popup Launcher

The popup launcher component adds a button that remains in place on your application. This gives users access to their inbox from anywhere on a page, so they don't need to scroll up to an inbox, or visit a dedicated inbox page to read and interact with notifications.

<img src={PopUpLauncher} style={{maxWidth: 400}} />

<!-- Crop black bar from top of image -->

## Counter (on Element)

Apply a notification badge on elements to notify users of unread messages in their inbox. The counter will list the amount of unread notification a user has received.

<img src={ElementCounter} style={{maxWidth: 400}} />

## Feed Mode

The feed component provides a larger feed for browsing notifications. Notifications within the feed can also be clicked on to direct to links or pages, if any were set within the Notification template.

<img src={InAppFeed} style={{maxWidth: 400}} />

<!-- This needs replacing or reformatting - too blurry -->

## Notification Preferences Popup

Our notification preferences popup allows users to set their preferences with your app. The component contains all your templates, and sliders for users to opt-in and out of notifications, and per channel where applicable.

<img src={InAppPreferences} style={{MaxWidth: 400}} />

## Notification Preferences Inline

Alternatively, we also offer an inline component for user preferences. Ideal for options & settings pages.

<img src={InlinePreferences} style={{MaxWidth: 400}} />

## Customizing the Button

Make our button fit in - or stand out. You can customize our button using the following parameters:

- Size
- Icon (coming soon!)
- Location (for launcher)

## Customizing the Header

Coming soon!

## Different UIs

# Logic Customization

## Custom UI

You can build your own UI by reading the data inside our React Context object. It includes all our notification objects, users preferences, and functions for updating notification states. You can use these to render whatever you need.

## Customizing the Popup

Customize out popup to be the right fit for your app. Our Popup can be customized using these parameters:

- z-index (coming soon!)
- Height
- Width

## Customizing the Unread Badge

You can customize the unread badge using these parameters and features:

| Parameter         | Type                                                   | Description                                                                  |
| ----------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **color**         | `string`                                               | Customize the color for your badge icon.                                     |
| **count**         | `ReactNode`                                            | Set a value to display in the badge.                                         |
| **classNames**    | `Record<SemanticDOM, string/>`                         | Set class names for your badge component.                                    |
| **dot**           | `boolean`                                              | Display a plain dot instead of your counter.                                 |
| **offset**        | `[number, number]`                                     | Set an alternative location for the badge.                                   |
| **overflowCount** | `number`                                               | Badge displays a + beside your number when notifications exceed that amount. |
| **showZero**      | `boolean`                                              | Show a 0 on the badge when there are no new notifications.                   |
| **size**          | `default`, `small`                                     | Modify the size of the unread badge.                                         |
| **status**        | `success`, `processing`, `default`, `error`, `warning` | Give notifications a colored badge noting message status.                    |
| **styles**        | `Record<SemanticDOM, CSSProperties/>`                  | Use Semantic DOM style to modify your badge.                                 |
| **text**          | `ReactNode`                                            | Sets the badge text to `status` if `status` has been set.                    |
| **title**         | `string`                                               | Set hover text for your badge.                                               |

## Pagination

You can use this to set up pages for your feed. Design scrollable, interactive inbox for your users through our component. Your feed can be modified further using these arguments:

| Parameter      | Type                                | Description                                                                                     |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| **bordered**   | `boolean`                           | Toggle a border for your feed. Set to `false` by default.                                       |
| **dataSource** | `any[]`                             | Set a data source for your feed.                                                                |
| **footer**     | `ReactNode`                         | Render a footer for your feed.                                                                  |
| **grid**       | `object`                            | Give your feed grid properties via JSON.                                                        |
| **header**     | `ReactNode`                         | Render a header for your feed.                                                                  |
| **itemLayout** | `horizontal`, `vertical`            | Determine the layout of your feed.                                                              |
| **loading**    | `boolean`+                          | Show a loading symbol within the component when fetching your `dataSource`. False by default.   |
| **loadMore**   | `ReactNode`                         | Render a component to load more data for yuor feed.                                             |
| **locale**     | `object`                            | i18n text or empty text.                                                                        |
| **pagination** | `boolean`, `object`                 | Set and modify pagination for your feed. Set to `false` by default.                             |
| **renderItem** | `(item) => ReactNode`               | Define a custom list when using `dataSource`.                                                   |
| **rowKey**     | `keyof` X, `(item: X) => React.Key` | Determine an item's key value. Can be either a unique value or a function that returns a value. |
| **size**       | `small`, `default`, `large`         | Adjust the size and spacing of your feed.                                                       |
| **split**      | `boolean`                           | Toggle a visual separator for individual notifications in your feed. Set to `false` by default. |

## Seen & Archived States

You can set notifications to two different states upon reading them, Seen state removes the alert for that notification from badge counters and other UI. Archived state will save a notificatin, making it more accessible for finding later (?)...

## Filters

You can filter notifications via existing states (All, unarchived). You can create your own custom functions, and filter notifications through your own criteria.

## Count

Just like Filters, you can count notifications via existing states (all, unarchived), or by your own custom functions.

## Customizing each Notification
