---
layout: doc
title: 初始化
---

# 初始化

我们默认提供了一个打包文件仅 40kb, Gzip 压缩后仅 10.4kb 的前端 ([detalkjs/client](https://github.com/detalkjs/client))。同时，主要功能得以保留。

这是您将 Detalk 加入您网站的最快方式。

## 载入

在浏览器中，通常，您需要引入我们提供的 JavaScript 文件。它会暴露 `window.detalk` 接口。

**最推荐的方法：**

```html
<script src="https://cdn.jsdelivr.net/npm/@detalk/static@latest/dist/detalk.js"></script>
<!-- 我们推荐您将 @latest 替换为所需的版本号 -->
```

或者使用简短的链接：

```html
<script src="https://cdn.jsdelivr.net/npm/@detalk/static@latest"></script>
<!-- 我们推荐您将 @latest 替换为所需的版本号 -->
```

当然，我们提供单独的 CSS 文件和 不含 CSS 的 JavaScript 构建：


```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@detalk/static@latest/dist/detalk.css">
<script src="https://cdn.jsdelivr.net/npm/@detalk/static@latest/dist/detalk-nocss.js"></script>
<!-- 我们推荐您将 @latest 替换为所需的版本号 -->
```

## 初始化

首先，在页面上需要有一个空白的挂载点。

```html
<div id="detalk"></div>
```

然后，您需要使用下方代码进行最简单的初始化：

```js
detalk.init({
    // 挂载点 (CSS 选择器)
    el: "#detalk", // <div id="detalk"></div>
    // 后端地址
    url: "https://detalk.deta.dev/",
    // 当前页面的路径
    path: window.location.pathname,
});
```

> 通常，一个页面只能挂载一个 Detalk。否则部分组件可能会出现错误。

---

<Comment/>
