# ⚙ Testing Environments

You can create a new independent testing environment to test your notifications with.

## Creating a Testing Environment

To create a testing environment, navigate to the "Environments" page. Then click on the "Add Testing Environment" button. This will create a new set of API keys that target a testing environment.

import environments_add_testing from '@site/static/environments_add_testing.png';

<img src={environments_add_testing} />

## Environment Channels

On the "Environments" page, you can enable or disable specific channels per environment. Channels are enabled by default. Notifications are still processed and can be inspected via the "Logs" page. Disabling channels allows you to test and inspect notifications without actually delivering them to end-users.

import environments_enable_channels from '@site/static/environments_enable_channels.png';

<img src={environments_enable_channels} />