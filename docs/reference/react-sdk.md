---
sidebar_position: 5
---

import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { NotificationFeed,
NotificationPopup,
NotificationLauncher,
NotificationCounter,
NotificationAPIProvider,
NotificationPreferencesPopup,
NotificationPreferencesInline,
} from '@notificationapi/react';

import PopUpBell from '@site/static/reactsdk/popup.png';
import PopUpInbox1 from '@site/static/reactsdk/popupinbox1.png';
import PopUpLauncher from '@site/static/reactsdk/popuplauncher.png';
import InAppFeed from '@site/static/reactsdk/inappfeed.png';
import InAppPreferences from '@site/static/reactsdk/notipreferences.png';
import InlinePreferences from '@site/static/reactsdk/inlinepref.png';
import ElementCounter from '@site/static/reactsdk/elementcounter.png';

# React SDK (Front-End)

The React SDK is mainly used for displaying **In-App** Notifications and allowing users to see and change their **Notification Preferences**.

## Setup

<div 
  style={{
    color: "black",
    padding: 24,
  }}
>
  <NotificationAPIProvider
    userId="djkean7@gmail.com"
    clientId="6ok6imq9ucn2budgiebjdaa6oi"
  >

<Tabs
groupId='package-manager'
defaultValue='manager'
values={[
{ label: 'Package Manager', value: 'manager' }
]
}>
<TabItem value='manager'>

1. Install the react package:

```shell
npm install @notificationapi/react
# yarn add @notificationapi/react
# pnpm add @notificationapi/react
```

2. Import and use our provider in your top-level components/routers:

```jsx title="App.tsx"
import { NotificationAPIProvider } from '@notificationapi/react';

<App>
  <NotificationAPIProvider
    userId="abcd-1234" // logged in userId
    clientId="abc123" // your clientId found on the dashboard
  >

    <!-- your protected routes -->

  </NotificationAPIProvider>
</App>;
```

</TabItem>
</Tabs>

## In-App Notification Components

### Popup

<span>Click this 👉</span>
<NotificationPopup />

```jsx
<NotificationPopup />
```

Our popup component opens up to display your inbox for in-app notifications. This gives users a small interface for accessing their notifications without taking up screen space. Especially useful for mobile apps.

All notifications are displayed here, and each notification comes with buttons to mark notifications as "seen" or "archived".
Additionally, the top right of the inbox contains features for setting user preferences and marking all notifications as read directlyfrom the inbox. If a notification has redirect, interacting with it will send users to that link or page from within the component.

### Popup Launcher

```jsx
<NotificationLauncher />
```

The popup launcher adds a button to the corner of the page (similar to chat buttons), that remains in place on your application. This gives users access to their inbox from anywhere on a page, so they don't need to scroll up to an inbox, or visit a dedicated inbox page to read and interact with notifications.

### Counter (Standalone)

<span>This is the counter 👉 </span>
<NotificationCounter count="COUNT_UNARCHIVED_NOTIFICATIONS" />

<br/>
<br/>

```jsx
<NotificationCounter />
```

The counter element displays the number of unread notifications. Features:

- Can count "unopened/unseen" notifications or "unarchived" notifications
- Can be a dot like: <NotificationCounter count="COUNT_UNARCHIVED_NOTIFICATIONS" dot />
- Many other formatting and positioning customizations available

### Counter (on existing elements)

Apply the same counter badge on an existing element to notify users of unread messages.

```jsx
<NotificationCounter>
  <Button>Counter</Button>
</NotificationCounter>
```

<img src={ElementCounter} style={{maxWidth: 300}} />

### Feed

The feed component provides a larger feed for browsing notifications. Notifications within the feed can also be clicked on to direct to links or pages, if any were set within the Notification template.

```jsx
<NotificationFeed infiniteScrollHeight={300} />
```

Example:

<NotificationFeed infiniteScrollHeight={300} />

<br/><br/>

## Notification Preferences Center

### Preferences Popup

Our notification preferences popup allows users to set their preferences with your app. The component contains all your templates, and sliders for users to opt-in and out of notifications, and per channel where applicable.

<img src={InAppPreferences} style={{maxWidth: 600}} />

<br/><br/>

### Preferences Inline

Alternatively, we also offer an inline component for user preferences. Ideal for options & settings pages.

<NotificationPreferencesInline />

<br/><br/>

## UI Customizations

### Customizing the Button

Make our button fit in - or stand out. You can customize our button using the following parameters:

- Size
- Icon
- Location (for launcher)

### Customizing the Header

Coming soon!

### Customizing the Popup

Customize out popup to be the right fit for your app. Our Popup can be customized using these parameters:

- z-index
- Height
- Width

### Unread Badge

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

### Pagination

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

## Logical Customizations

### Count

This refers to what notifications are counted in the counters or unread badges. You can use an existing mode or count the notifications by your own custom function:

- `COUNT_UNOPENED_NOTIFICATIONS` (default): only counts notifications that are never seen/opened. Once the user opens the notification popup, the count will be reset to zero.
- `COUNT_UNARCHIVED_NOTIFICATIONS`: only counts the notifications that are not archived. The count will change when the user marks notifications as archived.
- Custom: you can create your own function to count the notifications. The example code below counts notifications that belong to the `welcome_notification` category and are not archived.

```jsx
<NotificationPopup
  count={(n) => {
    return n.notificationId === 'welcome_notification' && !n.archived;
  }}
/>
```

## Filters

This refers to which notifications are rendered in the pre-existing popup, feed, ... components. You can filter notifications via existing modes or create your own custom function:

- `ALL` (default): renders all notifications
- `UNARHIVED`: renders only notifications that are not archived
- Custom: The example code below filters notifications that belong to the `welcome_notification` category and are not archived.

```jsx
<NotificationPopup
  count={(n) => {
    return n.notificationId === 'welcome_notification' && !n.archived;
  }}
/>
```

## Customizing each Notification

## Headless (build your own UI)

You can build your own UI by reading the data inside our React Context object. It includes all our notification objects, users preferences, and functions for updating notification states. You can use these to build any notification UI you need.

### Setup

Inside the components wrapped in our `NotificationAPIProvider`, you can access the context object using the `useNotificationAPIContext` hook:

```jsx
export const MyComponent: React.FC = () => {
  // highlight-next-line
  const notificationapi = NotificationAPIProvider.useNotificationAPIContext();

  return (
    <Button
      onClick={() => {
        console.log(notificationapi.notifications);
      }}
    >
      Click to log notifications
    </Button>
  );
};
```

### Acessing notification data

```jsx
notificationapi.notifications;
```

### Accessing user preferences

```jsx
notificationapi.preferences;
```

### Updating user preferences

```jsx
notificationapi.updateDelivery(
  notificationId,
  channel,
  delivery,
  subNotificationId?
)
```

### Marking loaded notifications as opened/seen

```jsx
notificationapi.markAsOpened();
```

### Marking notifications as archived

```jsx
// to mark all as archived:
notificationapi.markAsArchived('ALL');

// to mark invididual notifications as archived:
notificationapi.markAsArchived(['trackingId1', 'trackingId2']);
```

### Marking a notification as clicked

```jsx
notificationapi.markAsClicked('trackingId');
```

<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
 </NotificationAPIProvider>
</div>
