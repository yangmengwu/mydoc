/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  nav: [
    {
      title: 'Home',
      link: '/'
    }
  ],
  sidebar: [
    {
      title: '有用的文档',
      links: [
        {
            title: 'js',
            link: '/2019_08_27'
        },
        {
          title: 'mysql 语句',
          link: '/2019_08_31'
        },
        {
          title: 'linux 语句',
          link: '/2019_10_08'
        },
        {
            title: '日志',
            link: '/2019_12_02'
        }
      ]
    }
  ]
})
