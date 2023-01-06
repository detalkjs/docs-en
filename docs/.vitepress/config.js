export default {
    title: 'Detalk.js',
    description: '🎉 Detalk is a simple comment plugin.',
    lang: 'zh-CN',
    lastUpdated: true,
    head: [
        // ["script", { src: "https://cdn.jsdelivr.net/gh/detalkjs/client@master/dist/detalk.js" }],
        ["script", { src: "/twikoo-cvt.js" }],
//         ["script", { src: "https://cdn.jsdelivr.net/npm/@detalk/static@1.1.6-alpha/dist/detalk.js" }],
        ["script", { src: "https://detalk.netlify.app/dist/detalk.js" }],
        [
          "script",
          {
            "data-ad-client": "ca-pub-5902069866611465",
            async: true,
            crossorigin: "anonymous",
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5902069866611465",
          },
        ],
    ],
    themeConfig: {
        siteTitle: 'Detalk.js',
        sidebar: [
            {
                text: '开始',
                items: [
                    { text: '开始', link: '/start.html' },
                ]
            },
            {
                text: '前端配置',
                items: [
                    { text: '初始化', link: '/client/start.html' },
                    { text: '高级设置', link: '/client/advanced.html' },
                ]
            },
            {
                text: '后端部署',
                items: [
                    { text: '一键部署', link: '/server/one-click.html' },
                    { text: '自定义评论事件', link: '/server/custom-event.html' },
                     { text: 'API', link: '/server/api.html' },
                ]
            },
            {
                text: '数据迁移',
                items: [
                    { text: '从 Twikoo 迁移', link: '/tools/twikoo.html' },
                ]
            },
//             {
//                 text: '常见问题',
//                 items: [
//                     { text: 'Introduction', link: '/introduction' },
//                     { text: 'Getting Started', link: '/getting-started' },
//                 ]
//             }
        ],
        editLink: {
            pattern: 'https://github.com/detalkjs/docs/edit/master/docs/:path'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022 <a href="https://github.com/detalkjs">Detalk.js</a>'
        },
        algolia: {
          appId: '740G7JYGE7',
          apiKey: 'e22e4d58c30a2aa8d9d8cada97a9eae8',
          indexName: 'detalk.js.org',
          placeholder: '请输入关键词',
          buttonText: '搜索',
        }

    }
}
