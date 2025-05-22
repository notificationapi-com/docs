---
sidebar_position: 7
sidebar_label: 🗨️ Slack
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { FaSlack } from 'react-icons/fa';

# <div><FaSlack /> Slack</div>

## Overview

Integrate Slack with NotificationAPI to send notifications directly to your users' Slack channels. This guide will help you connect your Slack workspace and provide a ready-to-use frontend integration example for various frameworks.

## Requirements

- A Slack workspace
- Access to NotificationAPI

## Slack App Setup

To enable Slack notifications, simply install the NotificationAPI Slack app in your workspace. You can also allow your users to connect their Slack accounts using the integration component below.

## Frontend Integration Example

Use the following component to let your users connect their Slack accounts. The example supports React, Next.js, Remix, Nuxt3, Angular, Vue, and Vanilla JS. Make sure to set the `CLIENT_ID` prop to your NotificationAPI environment (e.g., `production`, `testing`).
<Tabs
groupId="frontend-language"
defaultValue="react"
values={[
{ label: 'React', value: 'react' },
{ label: 'Remix', value: 'remix' },
{ label: 'Vue', value: 'vue' },
{ label: 'Angular', value: 'angular' },
{ label: `Next.js`, value: 'next' }
]
}>
<TabItem value="react">

```jsx
import React, { useState } from 'react';

const SlackIntegration = ({ userId }) => {
  const [channel, setChannel] = useState('');
  const handleSlackAuth = () => {
    if (!channel) {
      alert('Enter a channel name');
      return;
    }
    const url =
      'https://slack.com/oauth/v2/authorize?' +
      'client_id=1146598856352.8825220259395' +
      '&scope=chat:write,channels:read' +
      `&redirect_uri=https://app.notificationapi.com/slack/oauth/callback/${CLIENT_ID}/userId/${userId}`;
    window.open(url, 'slack_auth', 'width=500,height=600');
  };
  return (
    <div>
      <input
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
        placeholder="Channel (e.g. #general)"
      />
      <button onClick={handleSlackAuth}>Add to Slack</button>
    </div>
  );
};
```

</TabItem>

<TabItem value="next">

```jsx
'use client';

import React, { useState } from 'react';

const SlackIntegration = ({ userId }) => {
  const [channel, setChannel] = useState('');
  const handleSlackAuth = () => {
    if (!channel) {
      alert('Enter a channel name');
      return;
    }
    const url =
      'https://slack.com/oauth/v2/authorize?' +
      'client_id=1146598856352.8825220259395' +
      '&scope=chat:write,channels:read' +
      `&redirect_uri=https://app.notificationapi.com/slack/oauth/callback/${CLIENT_ID}/userId/${userId}`;
    window.open(url, 'slack_auth', 'width=500,height=600');
  };
  return (
    <div>
      <input
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
        placeholder="Channel (e.g. #general)"
      />
      <button onClick={handleSlackAuth}>Add to Slack</button>
    </div>
  );
};

export default SlackIntegration;
```

</TabItem>

<TabItem value="remix">

```jsx
import { useState } from 'react';

const SlackIntegration = ({ userId }) => {
  const [channel, setChannel] = useState('');

  const handleSlackAuth = () => {
    if (!channel) {
      alert('Enter a channel name');
      return;
    }
    const url =
      'https://slack.com/oauth/v2/authorize?' +
      'client_id=1146598856352.8825220259395' +
      '&scope=chat:write,channels:read' +
      `&redirect_uri=https://app.notificationapi.com/slack/oauth/callback/${CLIENT_ID}/userId/${userId}`;
    window.open(url, 'slack_auth', 'width=500,height=600');
  };

  return (
    <div>
      <input
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
        placeholder="Channel (e.g. #general)"
      />
      <button onClick={handleSlackAuth}>Add to Slack</button>
    </div>
  );
};

export default SlackIntegration;
```

</TabItem>
<TabItem value="vue">

```jsx
<template>
  <div>
    <input
      v-model="channel"
      placeholder="Channel (e.g. #general)"
    />
    <button @click="handleSlackAuth">Add to Slack</button>
  </div>
</template>

<script>
export default {
  name: 'SlackIntegration',
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      channel: ''
    }
  },
  methods: {
    handleSlackAuth() {
      if (!this.channel) {
        alert('Enter a channel name');
        return;
      }
      const url =
        "https://slack.com/oauth/v2/authorize?"
        + "client_id=1146598856352.8825220259395"
        + "&scope=chat:write,channels:read"
        + `&redirect_uri=https://app.notificationapi.com/slack/oauth/callback/${CLIENT_ID}/userId/${this.userId}`;
      window.open(url, "slack_auth", "width=500,height=600");
    }
  }
}
</script>

```

</TabItem>
<TabItem value="angular">

```jsx
import { Component } from '@angular/core';

@Component({
  selector: 'app-slack-integration',
  template: `
    <div>
      <input
        [(ngModel)]="channel"
        placeholder="Channel (e.g. #general)"
      />
      <button (click)="handleSlackAuth()">Add to Slack</button>
    </div>
  `
})
export class SlackIntegrationComponent {
  channel: string = '';

  @Input() userId!: string;

  handleSlackAuth() {
    if (!this.channel) {
      alert('Enter a channel name');
      return;
    }
    const url =
      "https://slack.com/oauth/v2/authorize?"
      + "client_id=1146598856352.8825220259395"
      + "&scope=chat:write,channels:read"
      + `&redirect_uri=https://app.notificationapi.com/slack/oauth/callback/${CLIENT_ID}/userId/${this.userId}`;
    window.open(url, "slack_auth", "width=500,height=600");
  }
}

```

</TabItem>
</Tabs>

> **Note:**
>
> - Replace `userId` with your application's user identifier.
> - `CLIENT_ID`is your NotificationAPI account clientId. You can get it from [here](https://app.notificationapi.com/environments).
> - The `redirect_uri` should match your NotificationAPI environment and user ID.
> - For more details, see the [NotificationAPI documentation](https://docs.notificationapi.com/).
