---
sidebar_position: 2
---

# 🔒 Secure Your Notifications

Without Secure Mode, an attacker can access another user's in-app and web push notifications, and can read/update their notification preferences.

Secure Mode makes our front-end SDK safe against such threats.

:::info Learn More
Front-end code is observable and mutable by end-users. Malicious actors can take advantage of this by impersonating another user on the front-end through 3rd-party libraries that lack security measures. For example, an attacker can initialize your website's chat tool as another end-user to trick your customer support team:

```
someLibrary.initialize({
  userId: 'another-user-id'
});
```

:::

## How does the Secure Mode work?

With Secure Mode:

1. Your back-end hashes the userId, using your "Client Secret" as the hash key, and passes this `hashedUserId` to your front-end
2. Your front-end passes the `hashedUserId` to our front-end SDK when initializing it. With every request, our front-end SDK sends both the userId and `hashedUserId` to our servers.
3. Our servers generate their own `hashedUserId` (using the Client Secret) for the userId of the request. If the result matches the given `hashedUserId`, it means that the userId has not been tampered in your front-end. Since only NotificationAPI servers and your back-end know the Client Secret, no other party can generate a valid userIdHash for the userId.

### An example with attacker:

1. Attacker updates the userId parameter in your front-end
2. Our front-end SDK sends the **invalid** userId and the `hashedUserId` to our servers
3. Our server hashes the invalid userId and notices the hash result differs from `hashedUserId`, thus rejects the requests.

Because the attacker does not have access to your Client Secret, they have no way of providing a valid `hashedUserId` for the invalid userId.

## Step by Step Guide

### 1. Back-end

Hash the userId using your client secret. Pass the hashed userId to your front-end. For example, in response to user login or from a dedicated API.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="back-end-language"
defaultValue="js"
values={[
{ label: 'Node', value: 'js' },
{ label: 'Python', value: 'python' },
{ label: 'PHP', value: 'php' },
{ label: 'Go', value: 'go' },
{ label: 'C#', value: 'csharp' },
{ label: 'Ruby', value: 'ruby' }
]
}>
<TabItem value="js">

```js
const hashedUserId = require('crypto')
  .createHmac('sha256', 'YOUR_CLIENT_SECRET')
  .update('ACTUAL_USER_ID')
  .digest('base64');
```

</TabItem>
<TabItem value="python">

```py
import hmac
import hashlib
import base64
hashedUserId = base64.b64encode(hmac.new( 'YOUR_CLIENT_SECRET'.encode('utf-8'),
            'ACTUAL_USER_ID'.encode('utf-8'),
             hashlib.sha256).digest())
```

</TabItem>
<TabItem value="php">

```php
$hashedUserId = base64_encode(hash_hmac('sha256', $userId, $clientSecret, true));
```

</TabItem>
<TabItem value="go">

```go
import (
  "crypto/hmac"
  "crypto/sha256"
  "encoding/base64"
)

func hashUserId(userId string, clientSecret string) string {
  h := hmac.New(sha256.New, []byte(clientSecret))
  h.Write([]byte(userId))
  return base64.StdEncoding.EncodeToString(h.Sum(nil))
}
```

</TabItem>
<TabItem value="csharp">

```csharp
using System;
using System.Security.Cryptography;
using System.Text;


public static string HashUserId(string userId, string clientSecret)
{
    using (var hmac = new HMACSHA256(Encoding.UTF8.GetBytes(clientSecret)))
    {
        var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(userId));
        return Convert.ToBase64String(hash);
    }
}
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'openssl'
require 'base64'

def hash_user_id(user_id, client_secret)
  Base64.encode64(OpenSSL::HMAC.digest('sha256', client_secret, user_id))
end
```

</TabItem>
</Tabs>

### 2. Front-end

Pass the hashed userId to the NotificationAPI front-end SDK during initialization:

```jsx
new NotificationAPI({
  clientId: '...',
  userId: 'ACTUAL_USER_ID',
  userIdHash: 'HASHED_USER_ID'
});
```

### 3. Enable Secure Mode

Go to `Dashboard > Settings > Security` to enabled secure mode. By enabling this feature, all front-end SDK requests without a valid hashedUserId will be rejected.
