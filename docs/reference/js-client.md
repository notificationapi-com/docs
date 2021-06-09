---
sidebar_position: 2
---

# JavaScript Client SDK

This client-side SDK for JavaScript allows you to show in-app notifications in your front-end.

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="js-package-manager"
defaultValue="npm"
values={[
{ label: 'NPM', value: 'npm', },
{ label: 'Yarn', value: 'yarn', }
]
}>
<TabItem value="npm">

```bash
npm install notificationapi-js-client-sdk
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add notificationapi-js-client-sdk
```

</TabItem>
</Tabs>

## Usage

The example below creates a NotificationAPI widget that automatically connects to our servers and pulls the notifications for the user.

<Tabs
groupId="js-import-require"
defaultValue="import"
values={[
{ label: 'Import', value: 'import', },
{ label: 'Require', value: 'require', }
]
}>
<TabItem value="import">

```js
import NotificationAPI from "notificationapi-js-client-sdk";

new NotificationAPI({
  root: "parentDivID",
  clientId: YOU_CLIENT_ID,
  userId: USER_ID,
});
```

</TabItem>
<TabItem value="require">

```js
const NotificationAPI = require("notificationapi-js-client-sdk").default;

new NotificationAPI({
  root: "parentDivID",
  clientId: YOU_CLIENT_ID,
  userId: USER_ID,
});
```

</TabItem>
</Tabs>

![Sample](https://github.com/notificationapi-com/notificationapi-js-client-sdk/blob/master/sample/popup.gif?raw=true)

### Configuration Parameters:

- `root` (string): The ID of the HTML element that will contain the NotificationAPI widget. Ideally an empty div.

- `clientId` (string): Your NotificationAPI account clientId, which you can get from [here](https://app.notificationapi.com/environments).

- `userId` (string): The ID of the user in your system. Same as the user ID used to trigger notifications in the server-side SDK.

- `popupPosition` (string/optional): The position of the notifications popup relative to the button. Valid options: topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom. Default: RightBottom.

- `inline` (boolean/optional): whether to render a notification bell button that opens a popup, or to directly render the notifications as a list. Default: false.

Warning: Each instantiation will create a new instance of this widget, thus for performance reason it is recommended to only run it once, e.g. after page load. React users should read below.

## With React.js

React's state management and re-rendering causes this widget to be destroyed and re-initialized with every state change. To avoid this issue, place the initialization and the root element in a "memo"-ized React component. Example:

<Tabs
defaultValue="NotificationAPIComponent.js"
values={[
{ label: 'NotificationAPIComponent.js', value: 'NotificationAPIComponent.js', },
{ label: 'App.js', value: 'App.js' }
]
}>
<TabItem value="NotificationAPIComponent.js">

```jsx
import NotificationAPI from "notificationapi-js-client-sdk";
import { memo, useEffect } from "react";

const NotificationAPIComponent = memo((props) => {
  useEffect(() => {
    new NotificationAPI({
      root: "container",
      clientId: YOUR_CLIENT_ID,
      userId: props.userId,
    });
  });

  return <div id="container"></div>;
});

export default NotificationAPIComponent;
```

</TabItem>
<TabItem value="App.js">

```jsx
import NotificationAPIComponent from "./NotificationAPIComponent";

function App() {
  return (
    <div>
      <NotificationAPIComponent userId="USER_ID" />
      <div> ... </div>
    </div>
  );
}

export default App;
```

</TabItem>
</Tabs>
