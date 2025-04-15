# 🪝 Events Webhook

The Notification Events Webhook allows you to receive real-time updates about notification events such as delivery, opens, and clicks. By setting up a publicly accessible API endpoint, you can track and react to these events programmatically.

:::note
This feature is currently in beta.
:::

## Why Use Notification Events Webhook

Many organizations need to track notification engagement for various purposes:

- **Build custom analytics dashboards** to measure notification performance
- **Create automated workflows** triggered by specific notification events
- **Track user engagement** with notifications across channels
- **Develop complex integrations** with other systems based on notification events

## How It Works

When specific events occur in the notification lifecycle (such as email opens or clicks), our system sends HTTP requests to your designated endpoint with detailed information about the event.

```js
// Example webhook payload for an email open event
{
  "eventType": "OPEN",
  "trackingId": "abc123",
  "notificationId": "welcome-email",
  "channel": "EMAIL",
  "userId": "user-123"
}
```

## Dashboard Configuration

You can easily configure your webhook endpoints and select which events to track through the NotificationAPI dashboard:

1. Navigate to the "Events Webhook" tab in the "Settings" section of the your dashboard
2. Enter your webhook URL (e.g., `https://your-webhook-url.com`)
3. Select the events you want to receive notifications for
4. Click "Save Configuration"

<!-- Image will be added later -->

## Supported Events

The webhook currently supports the following notification events:

| Event         | Description                                                           | Payload                                                                                                  |
| ------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `EMAIL_OPEN`  | Triggered when a recipient opens an email notification                | `{ eventType: "OPEN", trackingId: string, notificationId: string, channel: "EMAIL", userId: string }`    |
| `EMAIL_CLICK` | Triggered when a recipient clicks a link in an email notification     | `{ eventType: "CLICK", trackingId: string, notificationId: string, channel: "EMAIL", userId: string }`   |
| `FAILED`      | Triggered when a notification fails to deliver (for any channel type) | `{ eventType: "FAILED", trackingId: string, notificationId: string, channel: Channels, userId: string }` |

## Setting Up Your Webhook

To receive notification events:

1. Create a publicly accessible API endpoint that can receive HTTP POST requests
2. Configure your webhook URL in the NotificationAPI dashboard
3. Select which events you want to receive (EMAIL_OPEN, EMAIL_CLICK, FAILED)
4. Implement proper validation of incoming webhook requests
5. Process and store the event data as needed for your use case

## FAQ

**Q: What is the format of the webhook requests?**  
A: Webhook requests are sent as HTTP POST requests with JSON payloads containing event details such as eventType, trackingId, notificationId, channel, and userId.

**Q: Can I filter which events I receive?**  
A: Yes, you can select which events to receive (EMAIL_OPEN, EMAIL_CLICK, FAILED) in the dashboard configuration.

**Q: What response should my endpoint return?**  
A: Your endpoint should return a 2xx HTTP status code to acknowledge successful receipt of the webhook.

**Q: When would I receive a FAILED event?**  
A: You'll receive a FAILED event whenever a notification on any channel (email, SMS, push, etc.) fails to deliver to the recipient. This could happen for various reasons like invalid recipient details, network issues, service provider failures, or user-specific delivery problems. This event helps you track delivery failures across all your notification channels.

**Q: Can I delete or update my webhook configuration?**  
A: Yes, you can update your webhook URL or selected events at any time from the dashboard. You can also delete your webhook configuration if you no longer need it.
