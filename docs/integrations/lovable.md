# Lovable

## YouTube Walkthrough

import YouTubePlayer from '@site/src/components/YouTubePlayer';

<YouTubePlayer videoId="4VENlb0OuAw" title="Lovable Integration" />

<br />

In this tutorial, we'll learn how to send SMS and email notifications from your Lovable.dev application. We'll use NotificationAPI for sending notifications and Supabase edge functions to ensure secure implementation.

## Why Use Edge Functions for Notifications?

When implementing notifications in your application, it's crucial to handle sensitive operations like sending SMS or emails securely. Frontend code is visible to everyone and can be modified by malicious users. This is why we need to use backend services like Supabase edge functions (or a service of your choice) to handle these operations.

## Step 1: Set Up NotificationAPI

The setup is straightforward and only takes a minute.

## Step 2: Modify and give this prompt to Lovable

**Sample Prompt:**

```javascript
// [WHEN X HAPPENS], send an SMS and Email notification [to recipient] using the following code from a Supabase edge function:

import notificationapi from 'notificationapi-node-server-sdk';

notificationapi.init('YOUR_CLIENT_ID', 'YOUR_CLIENT_SECRET');
await notificationapi.send({
  type: 'alert', // type of notification
  to: {
    email: 'recipient@example.com', // recipient's email
    number: '+15005550006' // recipient's number
  },
  email: {
    subject: 'New contact form submission received',
    html: '<p>New contact form submission received.</p>'
  },
  sms: {
    message: 'New contact form submission received.'
  }
});
```

- Replace [WHEN X HAPPENS] with the event that triggers the notification
- Replace [to recipient] with who should receive the notification, possibly explaining how Lovable should retreive their email and phone number
- If you have a back-end different from Supabase, replace the "a Supabase edge function"
- Replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with your NotificationAPI credentials

## Security Best Practices

When implementing notifications, follow these security guidelines:

1. **Control Message Recipients**

   - Either limit who can receive messages (e.g., only to your team)
   - Or control what the message says (use static templates)

2. **Never Trust User Input**

   - If you include user-provided content in notification messages, bad actors can modify the message to send malicious content (spam, links to malicious sites, etc.)

3. **Implement Rate Limiting**
   - Add limits to how many notifications a user can trigger
   - Consider implementing user authentication for sensitive operations

Remember to always handle sensitive operations like sending notifications through backend services, never directly from the frontend.

## Feedback and support

If you have any questions or need help implementing notifications in your Lovable.dev application, feel free to reach out to us at support@notificationapi.com. We're here to help you create the best notification experience for your users.
