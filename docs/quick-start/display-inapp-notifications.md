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
groupId="frontend-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js' },
{ label: 'React.js', value: 'react' }
]
}>
<TabItem value="js">

```js
npm install notificationapi-js-client-sdk
// or using yarn:
yarn add notificationapi-js-client-sdk
```

</TabItem>
<TabItem value="react">

```js
npm install notificationapi-js-client-sdk
// or using yarn:
yarn add notificationapi-js-client-sdk
```

</TabItem>
</Tabs>

## 2. Display

The example below creates the NotificationAPI widget in your front-end. The widget is placed in the container div specified by ID. The widget automatically connects to our servers and pull all the in-app notifications for the test user.

<Tabs
groupId="frontend-language"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js' },
{ label: 'React.js', value: 'react' }
]
}>
<TabItem value="js">

```js
import NotificationAPI from "notificationapi-js-client-sdk";

new NotificationAPI({
  clientId: "CLIENT_ID",
  userId: "TEST_USER_ID",
  root: "CONTAINER_DIV_ID",
});
```

</TabItem>
<TabItem value="react">

Create the following `NotificationAPIComponent`:

```js
import NotificationAPI from "notificationapi-js-client-sdk";
import { memo, useEffect } from "react";

const NotificationAPIComponent = memo((props) => {
  useEffect(() => {
    new NotificationAPI({
      clientId: "CLIENT_ID",
      userId: props.userId,
      root: "CONTAINER_DIV_ID",
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

```js
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
</Tabs>

## What's next?

Instead of the `Hello World` notification, it's time to learn how to create and customize your own notifications.
