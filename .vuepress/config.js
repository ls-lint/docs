module.exports = {
  title: 'ls-lint',
  description: 'An extremely fast file and directory name linter - Bring some structure to your file and directory names',
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400i,700,700i',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
    [
      'script',
      {},
      `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W7WKJZ7');
      `,
    ],
    [
      'link',
      {
        href: 'https://cdn.wpcc.io/lib/1.0.2/cookieconsent.min.css',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.wpcc.io/lib/1.0.2/cookieconsent.min.js',
      },
    ],
    [
      'script',
      {},
      `
        window.addEventListener("load", function(){window.wpcc.init({"corners":"small","colors":{"popup":{"background":"#f4f4f4","text":"#000000","border":"#555555"},"button":{"background":"#4585ab","text":"#ffffff"}},"position":"bottom-right","padding":"small","margin":"large","transparency":"5","content":{"href":"https://ls-lint.org/1.x/legal/privacy.html"}})});
      `,
    ],
  ],

  themeConfig: {
    version: '1.9.0', // unused for now
    logo: 'https://raw.githubusercontent.com/loeffel-io/ls-lint/master/ls-lint.png',
    displayAllHeaders: false,
    sidebarDepth: 1,

    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/loeffel-io/ls-lint',
      },
      {
        text: 'Legal',
        link: 'https://ls-lint.org/1.x/legal/imprint.html',
      },
    ],

    sidebar: {
      '/': [
        {
          title: 'Prologue',
          collapsable: false,
          children: prefix('prologue', [
            'changelog',
          ]),
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: prefix('getting-started', [
            'introduction',
            'installation',
          ]),
        },
        {
          title: 'Configuration',
          collapsable: false,
          children: prefix('configuration', [
            'the-basics',
            'the-rules',
          ]),
        },
        {
          title: 'Legal',
          collapsable: false,
          children: prefix('legal', [
            'imprint',
            'privacy',
          ]),
        },
      ],
    },
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-171718804-1', // UA-00000000-0
      },
    ],
  ],
};

function prefix(prefix, children) {
  return children.map(child => `/1.x/${prefix}/${child}`);
}
