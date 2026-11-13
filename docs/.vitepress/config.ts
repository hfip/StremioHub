import { defineConfig } from 'vitepress'

// 👉 روابط الهوية / identity links
const REPO = 'https://github.com/hfip/StremioHub'
const TELEGRAM = 'https://t.me/Abdulluh_X'

/* ------------------------------------------------------------------ */
/*  English sidebars                                                   */
/* ------------------------------------------------------------------ */

const resourcesSidebar = [
  {
    text: 'Resources',
    items: [
      { text: 'Apps & Forks', link: '/core-apps' },
      { text: 'Add-ons & Plugins', link: '/addons' },
      { text: 'Tools & Utilities', link: '/tools-utilities' },
      { text: 'Debrid & Usenet', link: '/debrid-services' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Glossary', link: '/glossary' }
    ]
  }
]

const guideSidebar = [
  {
    text: 'Guides',
    items: [
      { text: 'All guides', link: '/guides/' },
      { text: 'Credits & sources', link: '/guides/credits' }
    ]
  },
  {
    text: 'Stremio',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/guides/stremio/' },
      { text: 'Getting started', link: '/guides/stremio/setup' },
      { text: 'How add-ons work', link: '/guides/stremio/addons' },
      { text: 'AIOStreams', link: '/guides/stremio/aiostreams' },
      { text: 'Comet', link: '/guides/stremio/comet' },
      { text: 'MediaFusion', link: '/guides/stremio/mediafusion' },
      { text: 'Debrid providers', link: '/guides/stremio/debrid' },
      { text: 'Usenet', link: '/guides/stremio/usenet' },
      { text: 'Metadata & catalogs', link: '/guides/stremio/metadata' },
      { text: 'Subtitles', link: '/guides/stremio/subtitles' },
      { text: 'Extras & tools', link: '/guides/stremio/extras' },
      { text: 'Troubleshooting', link: '/guides/stremio/troubleshooting' },
      { text: 'FAQ', link: '/guides/stremio/faq' }
    ]
  },
  {
    text: 'Self-hosting',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/guides/self-hosting/' },
      { text: 'Docker basics', link: '/guides/self-hosting/docker' },
      { text: 'Oracle free VPS', link: '/guides/self-hosting/oracle' }
    ]
  },
  {
    text: 'Resources',
    collapsed: true,
    items: [
      { text: 'Apps & Forks', link: '/core-apps' },
      { text: 'Add-ons & Plugins', link: '/addons' },
      { text: 'Tools & Utilities', link: '/tools-utilities' },
      { text: 'Debrid & Usenet', link: '/debrid-services' },
      { text: 'Glossary', link: '/glossary' }
    ]
  }
]

/* ------------------------------------------------------------------ */
/*  Arabic sidebars                                                    */
/* ------------------------------------------------------------------ */

const resourcesSidebarAr = [
  {
    text: 'الموارد',
    items: [
      { text: 'التطبيقات والنسخ', link: '/ar/core-apps' },
      { text: 'الإضافات والبلجنات', link: '/ar/addons' },
      { text: 'الأدوات والمساعدات', link: '/ar/tools-utilities' },
      { text: 'Debrid و Usenet', link: '/ar/debrid-services' },
      { text: 'الأدلة', link: '/ar/guides/' },
      { text: 'المصطلحات', link: '/ar/glossary' }
    ]
  }
]

const guideSidebarAr = [
  {
    text: 'الأدلة',
    items: [
      { text: 'كل الأدلة', link: '/ar/guides/' },
      { text: 'الحقوق والمصادر', link: '/ar/guides/credits' }
    ]
  },
  {
    text: 'ستريمو',
    collapsed: false,
    items: [
      { text: 'نظرة عامة', link: '/ar/guides/stremio/' },
      { text: 'البداية', link: '/ar/guides/stremio/setup' },
      { text: 'كيف تعمل الإضافات', link: '/ar/guides/stremio/addons' },
      { text: 'AIOStreams', link: '/ar/guides/stremio/aiostreams' },
      { text: 'Comet', link: '/ar/guides/stremio/comet' },
      { text: 'MediaFusion', link: '/ar/guides/stremio/mediafusion' },
      { text: 'خدمات Debrid', link: '/ar/guides/stremio/debrid' },
      { text: 'Usenet', link: '/ar/guides/stremio/usenet' },
      { text: 'الميتاداتا والكتالوجات', link: '/ar/guides/stremio/metadata' },
      { text: 'الترجمة', link: '/ar/guides/stremio/subtitles' },
      { text: 'الأدوات والإضافات المساعدة', link: '/ar/guides/stremio/extras' },
      { text: 'حل المشاكل', link: '/ar/guides/stremio/troubleshooting' },
      { text: 'الأسئلة الشائعة', link: '/ar/guides/stremio/faq' }
    ]
  },
  {
    text: 'الاستضافة الذاتية',
    collapsed: true,
    items: [
      { text: 'نظرة عامة', link: '/ar/guides/self-hosting/' },
      { text: 'أساسيات Docker', link: '/ar/guides/self-hosting/docker' },
      { text: 'Oracle VPS مجاني', link: '/ar/guides/self-hosting/oracle' }
    ]
  },
  {
    text: 'الموارد',
    collapsed: true,
    items: [
      { text: 'التطبيقات والنسخ', link: '/ar/core-apps' },
      { text: 'الإضافات والبلجنات', link: '/ar/addons' },
      { text: 'الأدوات والمساعدات', link: '/ar/tools-utilities' },
      { text: 'Debrid و Usenet', link: '/ar/debrid-services' },
      { text: 'المصطلحات', link: '/ar/glossary' }
    ]
  }
]

export default defineConfig({
  lang: 'en',
  title: 'StremioHub',
  titleTemplate: ':title — StremioHub',
  description:
    'Guides, apps, forks, add-ons and tools for Stremio — plus self-hosting guides. Bilingual English/Arabic.',
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
        content:
          'Guides and resources for Stremio: setup, add-ons, debrid and self-hosting.'
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
        'أدلة وموارد ستريمو: التثبيت، الإضافات، Debrid، والاستضافة الذاتية.',
      themeConfig: {
        nav: [
          { text: 'الرئيسية', link: '/ar/' },
          { text: 'التطبيقات والنسخ', link: '/ar/core-apps' },
          { text: 'الإضافات', link: '/ar/addons' },
          { text: 'الأدوات', link: '/ar/tools-utilities' },
          { text: 'Debrid و Usenet', link: '/ar/debrid-services' },
          { text: 'الأدلة', link: '/ar/guides/' },
          { text: 'المصطلحات', link: '/ar/glossary' }
        ],
        sidebar: {
          '/ar/guides/': guideSidebarAr,
          '/ar/': resourcesSidebarAr
        },
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
      { text: 'Guides', link: '/guides/' },
      { text: 'Glossary', link: '/glossary' }
    ],

    sidebar: {
      '/guides/': guideSidebar,
      '/': resourcesSidebar
    },

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
