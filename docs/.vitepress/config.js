export default {
    title: 'Detalk.js',
    description: '🎉 Detalk is a simple comment plugin.',
    lang: 'zh-CN',
    lastUpdated: true,
    head: [
        ["script", { src: "https://cdn.jsdelivr.net/gh/detalkjs/client@master/dist/detalk.js" }],
    ],
    themeConfig: {
        siteTitle: 'Detalk.js',
        sidebar: [
            {
                text: '前端配置',
                items: [
                    { text: '初始化', link: '/client/start.html' },
                ]
            },
//             {
//                 text: '后端部署',
//                 items: [
//                     { text: 'Introduction', link: '/introduction' },
//                     { text: 'Getting Started', link: '/getting-started' },
//                 ]
//             },
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
        }
    }
}
