---
layout: doc
title: API
---

# API

Detalk Server 有完全的 API 支持。

标注 `*` 则为必须参数。


## 评论

### 获取评论

```
GET /_api/comment
```

URL 参数：

| 参数名 | 参数值 | 默认值 |
| :-:   | :-:    | :-:   |
| `id`*  | 页面路径 ID | `/` |
| `pageid`  | 评论分页页面 | `0` |
| `pagesize`  | 评论分页返回条数 | `10` |
| `all`  | 是否返回所有评论 | `false` |
| `timefst`  | 是否评论正序排序 | `false` |

返回示例：

```js
{
  "value": [
    {
      // 评论返回时，auth 参数会被删除
      "auth": "",
      // 返回评论内容，已 Markdown 解析
      "content": "<p>管理面板评论</p>\n",
      // 邮箱 MD5 值
      "email": "45ead422ade450468bc1d3c8fb543a4a",
      // label, 如果为管理员，则为 `admin`
      "label": "admin",
      // 昵称
      "nickname": "CKY",
      // 此条评论下的回复
      "replies": [
        {
          "auth": "",
          "content": "<p>回复 @CKY: ?!!!</p>\n",
          "email": "45ead422ade450468bc1d3c8fb543a4a",
          "label": "admin",
          "nickname": "CKY",
          "rpid": "85f3890a871b11cacfb02796047d282f",
          "timestamp": 1672116333366,
          "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
          "url": "#ReplyTo:25fb72b280a1c0865dc50997ba7d080e"
        }
      ],
      // 此条评论的唯一 ID
      "rpid": "25fb72b280a1c0865dc50997ba7d080e",
      // 发布时间戳
      "timestamp": 1672115477858,
      // 是否为置顶评论
      "top": true,
      // 用户 User-Agent
      "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
      // 用户链接
      "url": "https://blog.yfun.top/"
    },
    // ...
  ],
  // 成功
  "success": true,
  // 是否有下一页
  "hasNextPage": true,
  // 评论总条数
  "length": 42
}
```


### 发送评论

```
PUT /_api/comment
```

Body 参数：

| 参数名 | 参数值 | 默认值 |
| :-:   | :-:    | :-:   |
| `nickname`*  | 用户昵称 | / |
| `email`*  | 用户邮箱 | / |
| `content`*  | 评论内容 | / |
| `id`*  | 页面路径 ID | / |
| `auth`*  | 用户认证 Token，可前端生成，用于鉴定用户 | / |
| `url`  | 用户链接 | / |
| `replyTo`  | 回复评论的唯一 ID | / |

返回示例：

```js
{
  // 是否成功
  "success":true,
  // 信息
  "message":"Comment sended.",
  // 评论的唯一 ID
  "rpid":"978bc0994f16b12d17aef8643922708a"
}
```

### 删除评论

```
DELETE /_api/comment
```

URL 参数：

| 参数名 | 参数值 | 默认值 |
| :-:   | :-:    | :-:   |
| `rpid`*  | 评论唯一 ID | / |
| `auth`*  | 用户认证 Token | / |
| `hide`  | 是否隐藏评论 | `false` |
| `unhide`  | 是否取消隐藏评论 | `false` |

返回示例：

```js
{
  "success":true,
  "message":"Comment deleted."
}
```

## 用户

### 登录

```
GET /_api/login
```


URL 参数：

| 参数名 | 参数值 | 默认值 |
| :-:   | :-:    | :-:   |
| `username`*  | 用户名 | / |
| `password`*  | 用户密码 | / |

返回示例：

```js
{
  "success": true,
  // 登录 Token
  "token": "*************************",
}
```

### 检查 Token 有效性

```
GET /_api/token
```


URL 参数：

| 参数名 | 参数值 | 默认值 |
| :-:   | :-:    | :-:   |
| `token`*  | 管理员 Token | / |

返回示例：

```js
{
  "success": true
}
```


### 注册

目前只允许一个管理员账号。

```
GET /_api/reg
```


URL 参数：

| 参数名 | 参数值 | 默认值 |
| :-:   | :-:    | :-:   |
| `username`*  | 用户名 | / |
| `password`*  | 用户密码 | / |

返回示例：

```js
{
  "success": true,
  // 登录 Token
  "token": "*************************",
}
```

### 用户信息

```
GET /_api/profile
```

URL 参数：

| 参数名 | 参数值 | 默认值 |
| :-:   | :-:    | :-:   |
| `token`*  | 管理员 Token 或 GitHub Oauth App 回传的 Code | / |

> 如果以 `gh_` 开头，则默认为 GitHub Oauth App 回传的 Code，请求 GitHub 服务器。

返回示例：

```js
{
  "success": true,
  // 昵称
  "nickname": "CKY",
  // 邮箱
  "email": "awa@outlook.ie",
  // 网址
  "link": "https://blog.yfun.top/"
}
```

