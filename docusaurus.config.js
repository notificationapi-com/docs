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
          label: "Status Page",
        },
        {
          href: "https://www.notificationapi.com",
          label: "Back to the website",
          position: 'right'
        }
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Home",
              to: "/",
            },
            {
              label: "Quick Start",
              to: "/quick-start/send-a-notification",
            },
            {
              label: "Back to the website",
              to: "https://www.notificationapi.com",
            },
          ],
        },
        {
          title: "Other Resources",
          items: [
            {
              label: "Status Page",
              href: "https://status.notificationapi.com",
            }
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
  ]
};
