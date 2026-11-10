import { defineConfig } from 'vitepress'

// 👉 غيّر هذا الرابط الوحيد بعد إنشاء المستودع / Change this once you create the repo
const REPO = 'https://github.com/your-username/StremioHub'

export default defineConfig({
  lang: 'en',
  title: 'StremioHub',
  titleTemplate: ':title — StremioHub',
  description:
    'The megathread for all things Stremio: apps, forks, addons, tools, debrid services and guides.',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://stremiohub.pages.dev',
    transformItems: (items) => items.filter((item) => !item.url.endsWith('/404'))
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#7c3aed' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'StremioHub' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'The megathread for all things Stremio: apps, forks, addons, tools and guides.'
      }
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      link: '/ar/',
      title: 'StremioHub — دليل ستريمو',
      description:
        'دليل شامل لكل ما يتعلق بتطبيق ستريمو: التطبيقات، النسخ المعدّلة، الإضافات، الأدوات والخدمات.',
      themeConfig: {
        nav: [
          { text: 'الرئيسية', link: '/ar/' },
          { text: 'التطبيقات والنسخ', link: '/ar/core-apps' },
          { text: 'الإضافات', link: '/ar/addons' },
          { text: 'الأدوات', link: '/ar/tools-utilities' },
          { text: 'Debrid و Usenet', link: '/ar/debrid-services' },
          { text: 'الأدلة', link: '/ar/guides' },
          { text: 'المصطلحات', link: '/ar/glossary' }
        ],
        sidebar: [
          {
            text: 'التنقل',
            items: [
              { text: 'التطبيقات والنسخ', link: '/ar/core-apps' },
              { text: 'الإضافات والبلجنات', link: '/ar/addons' },
              { text: 'الأدوات والمساعدات', link: '/ar/tools-utilities' },
              { text: 'Debrid و Usenet', link: '/ar/debrid-services' },
              { text: 'أدلة المجتمع', link: '/ar/guides' },
              { text: 'المصطلحات', link: '/ar/glossary' }
            ]
          }
        ],
        outline: { level: [2, 3], label: 'في هذه الصفحة' },
        docFooter: { prev: 'الصفحة السابقة', next: 'الصفحة التالية' },
        sidebarMenuLabel: 'القائمة',
        returnToTopLabel: 'العودة للأعلى',
        darkModeSwitchLabel: 'المظهر',
        lightModeSwitchTitle: 'التبديل إلى الوضع الفاتح',
        darkModeSwitchTitle: 'التبديل إلى الوضع الداكن',
        langMenuLabel: 'تغيير اللغة',
        editLink: {
          pattern: `${REPO}/edit/main/docs/:path`,
          text: 'عدّل هذه الصفحة على GitHub'
        },
        footer: {
          message:
            'هذا الموقع لا يستضيف أي ملفات. الشكر لفريق Stremio ولمجتمع المستخدمين.',
          copyright: '© 2026 StremioHub'
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'StremioHub',

    socialLinks: [{ icon: 'github', link: REPO }],

    editLink: {
      pattern: `${REPO}/edit/main/docs/:path`,
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Apps & Forks', link: '/core-apps' },
      { text: 'Add-ons', link: '/addons' },
      { text: 'Tools & Utilities', link: '/tools-utilities' },
      { text: 'Debrid & Usenet', link: '/debrid-services' },
      { text: 'Guides', link: '/guides' },
      { text: 'Glossary', link: '/glossary' }
    ],

    sidebar: [
      {
        text: 'Navigation',
        items: [
          { text: 'Apps & Forks', link: '/core-apps' },
          { text: 'Add-ons & Plugins', link: '/addons' },
          { text: 'Tools & Utilities', link: '/tools-utilities' },
          { text: 'Debrid & Usenet', link: '/debrid-services' },
          { text: 'Community Guides', link: '/guides' },
          { text: 'Glossary', link: '/glossary' }
        ]
      }
    ],

    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    langMenuLabel: 'Change language',

    footer: {
      message: 'This site does not host any files. Credit to the Stremio team and the community.',
      copyright: '© 2026 StremioHub'
    }
  }
})
