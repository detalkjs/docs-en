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

## [Beta] 从 URL 载入配置

> 此项功能可能不完善。

当 `detalk.init` 传入一个字符串时，Detalk 将默认其为可用的 URL 并发起 `fetch` 请求。

Detalk 将以请求响应的 JSON 进行初始化。

## 多语言

Detalk 支持多语言功能，当没有特别设置时，会默认使用「简体中文」初始化。

如果需要更改多语言设置，你需要更改 `window.DETALK_I18N` 参数。

`window.DETALK_I18N` 默认参数如下：

```js
window.DETALK_I18N = {
    loadMore: '加载更多',
    notAllowedInput: '输入内容不符合要求！',
    send: '发送',
    preview: '预览',
    reply: '回复',
    replyTo: '回复',
    cancel: '取消',
    loadingLoginFrame: '登录窗口加载中...',
    gotoLoginFrame: '请在登录窗口中继续',
    waitingInfo: '登录成功，正在获取用户信息...',
    loginSuccess: '登录成功',
    failedLoadingInfo: '获取用户信息失败',
    deleteConfirm: '即将删除 ID:[#ID] 评论，是否继续？',
    total: '共 [#TOTAL] 条评论',
    noComment: '暂无评论',
    up: '正序',
    down: '倒序',
    delete: '删除',
    top: '置顶',
    login: '登录',
    required: '必填',
    optional: '选填',
    nickname: '昵称',
    email: '邮箱',
    link: '网址',
    day: {
        justNow: '刚刚',
        minute: '[#TIME] 分钟前',
        hour: '[#TIME] 小时前',
        day: '[#TIME] 天前'
    }
}
```

以更改为繁体中文为例，请在 `detalk.init` 之前定义：

```js
window.DETALK_I18N = {
    loadMore: '加載更多',
    notAllowedInput: '輸入內容不符合要求！',
    send: '發送',
    preview: '預覽',
    reply: '回复',
    replyTo: '回复',
    cancel: '取消',
    loadingLoginFrame: '登錄窗口加載中...',
    gotoLoginFrame: '請在登錄窗口中繼續',
    waitingInfo: '登錄成功，正在獲取用戶信息...',
    loginSuccess: '登錄成功',
    failedLoadingInfo: '獲取用戶信息失敗',
    deleteConfirm: '即將刪除 ID:[#ID] 評論，是否繼續？',
    total: '共 [#TOTAL] 條評論',
    noComment: '暫無評論',
    up: '正序',
    down: '倒序',
    delete: '刪除',
    top: '置頂',
    login: '登錄',
    required: '必填',
    optional: '選填',
    nickname: '暱稱',
    email: '郵箱',
    link: '網址',
    day: {
        justNow: '剛剛',
        minute: '[#TIME] 分鐘前',
        hour: '[#TIME] 小時前',
        day: '[#TIME] 天前'
    }
}
```

## 自定义管理面板地址

如果需要自定义管理面板地址，请在 `detalk.init` 时指定。

```js
detalk.init({
	...
    // 自定义管理面板地址
    DASHBOARD_URL: 'https://detalk-dash.netlify.app',
    ...
});
```

## 粘贴上传图片

```js
detalk.init({
    ...
    pasteImage: async (blob) => {
	// 传入的是图片 Blob
	// ...
    }
    ...
});
```

---

<Comment/>
