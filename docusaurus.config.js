/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "NotificationAPI Documentation",
  tagline: "Implement any notification in just a few minutes",
  url: "https://docs.notificationapi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "notificationapi-com",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "Documentation",
      style: "dark",
      logo: {
        alt: "NotificationAPI",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "http://status.notificationapi.com",
          label: "API Status",
        },
        {
          href: "https://www.notificationapi.com",
          label: "Website",
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
              to: "/quick-start/setup-the-notification",
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
      additionalLanguages: ['php'],
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/notificationapi-com/docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
