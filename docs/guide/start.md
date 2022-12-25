---
layout: doc
title: 开始
---

# 开始

## 为什么是 Detalk?

从部署方式到加载速度，Detalk 都非常**快**。它不再需要你写繁琐的配置文件，也不需要你定义环境变量。

只需要一个账号，一个按键的操作，一眨眼的时间，Detalk 就已经部署好了。

前端我们提供了方便、简洁、轻量的 [detalkjs/client](https://github.com/detalkjs/client)，Gzip 压缩后仅 10.4 kb 的体积，包含绝大部分功能。

同时，我们有完善的后端 API 文档，你也可以自己自定义前端。

> Detalk 正在 `alpha` 测试阶段。

## 部署到 Deta

Detalk 可以 100% 兼容的运行在 Deta 平台上。使用下方的按键即可一键部署至 Deta，这需要您有一个 [Deta 账号](https://web.deta.sh/)。

> Deta 对个人开发者可以免费使用。

[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy?repo=https://github.com/detalkjs/server)

> 目前此方式一个账号只能部署一个 Detalk Server，在后续的版本中将会改进。

<div id="detalk" style="width: 100%;"></div>
<script src="https://cdn.jsdelivr.net/gh/detalkjs/client@master/dist/detalk.js"></script>
<script>
  detalk.init({
    // 挂载点 (CSS 选择器)
    el: "#detalk", // <div id="app"></div>
    // 后端地址
    url: "https://detalk.deta.dev/",
    // 当前页面的路径
    path: window.location.href,
    // 是否开启实时预览
    previewOnInput: false, // default is false
    // 评论加载完成后
    onCommentLoaded: function () {
        // 此处可为代码高亮等插件
    },
});
</script>
