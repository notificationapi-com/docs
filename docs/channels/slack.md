---
sidebar_position: 7
sidebar_label: 🗨️ Slack
---

import { FaSlack } from 'react-icons/fa';

# <div><FaSlack /> Slack</div>

## Requirements

- A Slack workspace where you have permissions to install apps
- Create a Slack app in your workspace
- Install the app to your workspace

Please refer to `Dashboard -> Settings -> Slack Integration` for the step-by-step instructions.

:::tip
You can use different Slack apps for different environments (development, staging, production) to keep your notifications organized.
:::

## Important Features

- Direct messages to users
- Channel messages
- Rich message formatting with blocks and attachments
- Interactive components (buttons, dropdowns)
- Thread replies
- Message updates and deletions
- User mention support
- Custom message formatting using Slack's Block Kit

## Slack App Setup

To send notifications through Slack, you'll need to:

1. Create a Slack app in your workspace
2. Add the following OAuth scopes to your app:
   - `chat:write`
   - `im:write`
   - `users:read`
   - `users:read.email`
3. Install the app to your workspace
4. Copy the Bot User OAuth Token from your Slack app settings
5. Configure the token in NotificationAPI dashboard

## Detailed Setup Instructions

### 1. Create a Slack App

1. Go to [Slack API](https://api.slack.com/apps) and sign in with your Slack account
2. Click "Create New App"
3. You'll be prompted to select a workspace.
4. After selecting a workspace, you'll see the app manifest editor. Use this basic manifest:
   ```json
   {
     "display_information": {
       "name": "NotificationAPI"
     },
     "settings": {
       "org_deploy_enabled": false,
       "socket_mode_enabled": false,
       "is_hosted": false,
       "token_rotation_enabled": false
     }
   }
   ```
5. Review the app summary and click "Create" to finalize your app creation

### 2. Configure OAuth Scopes

1. In your app settings, navigate to "OAuth & Permissions" in the sidebar
2. Scroll to "Scopes" section
3. Under "Bot Token Scopes", add the following scopes:
   - `chat:write` - Send messages as your app
   - `im:write` - Send direct messages to users
   - `users:read` - View basic user information
   - `users:read.email` - Look up users by email

### 3. Install the App

1. After adding scopes, scroll to the top of "OAuth & Permissions" page
2. Click "Install to Workspace"
3. Review the permissions and click "Allow"
4. After installation, you'll see a "Bot User OAuth Token" - save this token securely

### 4. Configure in NotificationAPI Dashboard

1. Log in to your NotificationAPI dashboard
2. Go to "Settings" → "Slack Integration"
3. Enter the Bot User OAuth Token you saved earlier
4. Click "Save"

### 5. Testing the Integration

1. Create a test notification template in NotificationAPI dashboard
2. Configure it to use the Slack channel
3. Send a test notification to verify the setup

### Common Issues and Solutions

- **App Not in Channel**: If sending to channels, use `/invite @YourAppName` in the channel
- **Invalid Token**: Double-check the Bot User OAuth Token in dashboard settings
- **Missing Permissions**: Verify all required scopes are added in Slack app settings
- **User Not Found**: Ensure user email in NotificationAPI matches their Slack email

### Security Best Practices

1. **Token Security**:

   - Never share your Bot User OAuth Token
   - Rotate tokens if compromised
   - Use different apps/tokens for different environments

2. **Access Control**:
   - Regularly audit app installations
   - Remove unused installations
   - Review channel memberships periodically

## Message Formatting

NotificationAPI supports Slack's Block Kit for rich message formatting. You can use:

- Text blocks with markdown
- Sections with fields
- Buttons and interactive elements
- Images and other media
- Dividers and context blocks

Example template:

```json
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Hello {{userName}}! You have a new notification"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": "*Type:*\n{{notificationType}}"
        },
        {
          "type": "mrkdwn",
          "text": "*When:*\n{{timestamp}}"
        }
      ]
    }
  ]
}
```

## User Identification

To send direct messages to users, you need to identify them using one of these methods:

1. Slack User ID
2. Email address (must match the user's Slack email)

When using email addresses, NotificationAPI automatically resolves them to Slack User IDs.

## Channel Messages

To send messages to channels:

1. Invite your Slack app to the target channel using `/invite @YourAppName`
2. Use the channel ID or channel name in your notification settings

:::caution
Make sure your Slack app is invited to channels before attempting to send messages.
:::

## Tracking Options

The following events are tracked and reported in our logs and insights features:

- Message delivery
- Message failures
- User resolution status
- Channel availability

## Best Practices

1. **Rate Limiting**: Slack has rate limits for sending messages. NotificationAPI handles these automatically with smart retries.

2. **User Experience**:

   - Use clear and concise messages
   - Leverage formatting for better readability
   - Include relevant links and context
   - Use interactive elements when appropriate

3. **Error Handling**:
   - NotificationAPI automatically handles common errors
   - Failed deliveries are retried with exponential backoff
   - Invalid user/channel errors are reported in logs
