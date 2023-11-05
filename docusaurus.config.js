/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "NotificationAPI Documentation",
  tagline: "Modern product-to-user notifications for B2B SaaS products",
  url: "https://docs.notificationapi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "notificationapi-com",
  projectName: "docs",
  themeConfig: {
    navbar: {
      style: "dark",
      logo: {
        alt: "NotificationAPI",
        src: "img/logo.png",
        style: {
          marginRight: '130px'
        }
      },
      items: [
        {
          href: "/",
          label: "Home",
        },
        {
          href: "http://status.notificationapi.com",
          label: "API Status",
        },
        {
          href: "https://www.notificationapi.com",
          label: "Back to the website",
          position: 'right'
        },
        {
          href: "https://app.notificationapi.com",
          label: "Login",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Start here",
              to: "/",
            },
            {
              label: "Quick Start",
              to: "/quick-start/send-a-notification",
            },
            {
              label: "Homepage",
              to: "https://www.notificationapi.com",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/notificationapi-com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NotificationAPI Software Inc.`,
    },
    prism: {
      additionalLanguages: ['php', 'csharp', 'java', 'ruby', 'swift', 'kotlin'],
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        gtag: {
          trackingID: 'G-LK2SW2E54M'
        }
      },
    ],
  ],
  customFields: {
    trailingSlash: false,
  },
  scripts: [
    "/custom.js"
  ],
  headTags: [
    // hubspot
    {
      tagName: 'script',
      attributes: {
        id: 'hs-script-loader',
        type: 'text/javascript',
        async: 'true',
        defer: 'true',
        src:"//js.hs-scripts.com/21854845.js"
      }
    },
    // fullstory
    {
      tagName: 'script',
      attributes: {
        async: 'true',
        defer: 'true',
        src:"//js.hs-scripts.com/21854845.js"
      }
    },
  ],
};
