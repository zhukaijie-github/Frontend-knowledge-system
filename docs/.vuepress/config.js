module.exports = {
  title: 'Davis 前端知识体系',
  dest: './dist',  // 设置输出目录
  base: '/Frontend-knowledge-system/',// 设置站点根路径
  description: '整理自己的前端知识体系的小博客',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    nav: [
      { text: 'html', link: '/html/' },
      { text: 'css', link: '/css/' },
      { text: 'javascript', link: '/javascript/' },
      { text: 'Github', link: 'https://github.com/zhukaijie-github/Frontend-knowledge-system' },
    ],
    sidebar: {
      '/html/': [
        {
          title: 'HTML',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/css/': [
        {
          title: 'CSS',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/javascript/': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
    }
  }
}