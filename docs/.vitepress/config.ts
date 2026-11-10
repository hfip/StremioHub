import { defineConfig } from 'vitepress'

// 👉 غيّر هذا الرابط الوحيد بعد إنشاء المستودع / Change this once you create the repo
const REPO = 'https://github.com/hfip/StremioHub'
const TELEGRAM = 'https://t.me/Abdulluh_X'

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
            'من إعداد @Abdulluh_X · هذا الموقع لا يستضيف أي ملفات. الشكر لفريق Stremio ولمجتمع المستخدمين.',
          copyright: '© 2026 StremioHub'
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'StremioHub',

    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path fill="currentColor" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
        },
        link: TELEGRAM,
        ariaLabel: 'Telegram — @Abdulluh_X'
      },
      { icon: 'github', link: REPO }
    ],

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
      message:
        'Made by @Abdulluh_X · This site does not host any files. Credit to the Stremio team and the community.',
      copyright: '© 2026 StremioHub'
    }
  }
})
