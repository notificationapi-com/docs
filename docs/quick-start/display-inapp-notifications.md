---
sidebar_position: 2
---

# Display In-App Notifications

import InappGif from '@site/static/inapp.gif';

<img src={InappGif} />

While email or SMS notifications only require the [back-end part](send-a-notification), you need our front-end SDK to display in-app notifications:

## 1. Install a front-end SDK

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="js-package-manager"
defaultValue="npm/yarn"
values={[
{ label: 'npm/yarn', value: 'npm/yarn' },
{ label: '<script>', value: 'script' }
]
}>
<TabItem value="npm/yarn">

```console
# using npm:
npm install notificationapi-js-client-sdk 
# using yarn:
yarn add notificationapi-js-client-sdk 
```

</TabItem>
<TabItem value="script">

```html
<script src="https://unpkg.com/notificationapi-js-client-sdk/dist/notificationapi-js-client-sdk.js"></script>
```

</TabItem>
</Tabs>

## 2. Display

The example below creates the NotificationAPI widget in your front-end. The widget is placed in the container div specified by ID. The widget automatically connects to our servers and pull all the in-app notifications for the test user.

<Tabs
groupId="frontend-language"
defaultValue="react"
values={[
{ label: 'React.js', value: 'react' },
{ label: 'JavaScript', value: 'js' }
]
}>
<TabItem value="react">

Create the following `NotificationAPIComponent`:

```jsx
import NotificationAPI from "notificationapi-js-client-sdk";
import { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';
import { memo, useEffect } from "react";

const NotificationAPIComponent = memo((props) => {
  useEffect(() => {
    new NotificationAPI({
      clientId: "CLIENT_ID",
      userId: props.userId,
      root: "CONTAINER_DIV_ID",
      popupPosition: PopupPosition.BottomLeft
    });
  });

  return <div id="CONTAINER_DIV_ID"></div>;
});
export default NotificationAPIComponent;
```

:::important
React's state management and re-rendering would normally cause our widget to be destroyed and re-initialized with every state change which is inefficient. That's why the NotificationAPIComponent is "memo"-ized to prevent re-rendering.
:::

Now use the component anywhere you wish, for example in `App.js`:

```jsx
import NotificationAPIComponent from "./NotificationAPIComponent";

function App() {
  return (
    <div>
      <NotificationAPIComponent userId="TEST_USER_ID" />
      <div> ... </div>
    </div>
  );
}

export default App;
```

</TabItem>
<TabItem value="js">

```html
<script>
  new NotificationAPI({
    clientId: "CLIENT_ID",
    userId: "TEST_USER_ID",
    root: "CONTAINER_DIV_ID",
    popupPosition: "bottomLeft"
  });
</script>
```

</TabItem>
</Tabs>

## What's next?

Instead of the `Hello World` notification, it's time to learn how to create and customize your own notifications.
