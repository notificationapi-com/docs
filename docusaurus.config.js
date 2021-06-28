/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "NotificationAPI Documentation",
  tagline: "Send notifications in a few minutes!",
  url: "https://docs.notificationapi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "notificationapi-com",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "NotificationAPI Documentation",
      style: "dark",
      logo: {
        alt: "NotificationAPI",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          href: "http://status.notificationapi.com",
          label: "API Status",
        },
        {
          href: "https://www.notificationapi.com",
          label: "Back to homepage",
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
              to: "/docs/intro",
            },
            {
              label: "Quick Start",
              to: "/docs/quick-start/send-a-notification",
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/notificationapi-com/docs/edit/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
