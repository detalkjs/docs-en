---
layout: doc
title: 高级设置
---

# 高级设置

## 自定义 Markdown 预览

> Detalk 支持 Markdown 语法，在 [detalkjs/server](https://github.com/detalkjs/server) 中，使用 Marked.js 进行解析。

### 默认操作

Detalk 的默认解析操作是 `detalk.parse(content)`。

![](https://p.awa.fyi/s/2022/1672023088236.png)

前端默认会请求 `/_api/markdown` 完成解析操作。

此时，实时预览是关闭的，必须手动点击「预览」加载。

### 更改解析

首先，载入你需要的 Markdown 解析器：

```html
<script src="https://cdn.jsdelivr.net/npm/marked@4/marked.min.js"></script>
```

然后，更改 `detalk.parse`：

```js
// detalk.parse() 与 marked.parse() 的参数相同
detalk.parse = marked.parse

// 也可以这么写：

detalk.parse = (content) => {
    return marked.parse(content);
}
```

### 实时预览

如果你需要实时预览，那么请在 `init` 的 `options` 中指定：

> 此设置默认为 `false`。
> 
> 设置后，当输入框中的文本出现改变时，都将刷新预览。

```js
detalk.init({
	...
    // 是否开启实时预览
    previewOnInput: true,
    ...
});
```


## 代码高亮

Detalk 没有默认提供代码高亮功能，如果需要，请手动指定。

首先，载入代码高亮插件（以 `Highlight.js` 为例）：

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/default.min.css">
<script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js"></script>
```

然后，编辑 `init` 的 `options` 中 `onCommentLoaded` 参数：

```js
detalk.init({
	...
    // 评论加载完成事件
    onCommentLoaded: function () {
        // 此处以 Highlight.js 为例
        // #detalk 是 Detalk 挂载点
        document.querySelectorAll('#detalk pre code').forEach((el) => {
        	hljs.highlightElement(el);
        });
    },
    ...
});
```

