---
title: GitHub 登录
layout: doc
---

# GitHub 登录

## 注册 GitHub Oauth App

打开 [Register a new OAuth application
](https://github.com/settings/applications/new).

其中，Application name, Homepage URL 填写自己站点的名称和主页地址就可以了。

Authorization callback URL 则需要注意，使用官方控制台需填写：`https://detalk-dash.netlify.app/callback.html?type=github&framelogin=true`.

其中的参数很重要，不能缺少。

填完后点击 Register application 注册。
![](https://p.awa.fyi/s/2023/1673344733515.png)

接下来，保存好 Application 的 Client ID 和 Client Secret。

![](https://p.awa.fyi/s/2023/1673344977124.png)

## 前端设置

前端需要在 `detalk.init` 时配置 Client ID

配置代码如下：

```js
detalk.init({
  ...options,
  login: {
      // Client ID
      github: '',
  },
});
```

## 后端设置

打开 控制面板，在「后端设置」中找到「第三方」一栏，填写「GitHub Oauth Secret」。

![](https://p.awa.fyi/s/2023/1673072688363.png)
