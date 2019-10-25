module.exports = {
  title: 'vant-uni-app',
  themeConfig: {
    nav: [
      { text: 'NPM', link: 'https://www.npmjs.com/package/vant-uni-app', target: '_blank' },
      { text: 'GitHub', link: 'https://github.com/xnng/vant-uni-app', target: '_blank' }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/': [
        {
          title: '开发指南',
          collapsable: false,
          sidebarDepth: 2,
          children: ['', 'quickstart']
        },
        {
          title: '基础组件',
          collapsable: false,
          sidebarDepth: 2,
          children: ['button', 'cell', 'icon']
        },
        {
          title: '表单组件',
          collapsable: false,
          sidebarDepth: 2,
          children: ['checkbox', 'datetimePicker']
        }
      ]
    }
  }
}
