---
title: 更新代码
layout: doc
---

# 更新代码

[detalkjs/server](https://github.com/detalkjs/server) 仍处于开发中，为了保证最好的兼容性，建议你紧跟最新版本的更新。

## Web 更新

此方法最简单，只需要访问 Deta 控制台网页端就可以实现。

此方法不会导致数据丢失，但也需要备份好数据，以防万一。

打开 [Deta 控制台](https://web.deta.sh/)，找到需要更新的 Micros，点击「Settings」，勾选「Confirm Delete」，点击「Delete」。

![](https://p.awa.fyi/s/2023/1673335302090.png)

随后，参考[「一键部署」](/server/one-click.html)文档，重新完成部署。此时 `BASE_NAME` 环境变量填写更新前的，

最后，在「Domains」栏绑定回原来的域名。

![](https://p.awa.fyi/s/2023/1673335482583.png)


## CLI 更新

打开 [Deta 控制台](https://web.deta.sh/)，找到需要更新的 Micros，点击「Settings」，找到「Clone Micro」的命令：

![](https://p.awa.fyi/s/2023/1673335547250.png)

[安装好 Deta CLI](https://docs.deta.sh/docs/cli/install)，然后运行这行命令。

使用 `git` 拉取 GitHub 上的最新源代码。

```bash
git clone https://github.com/detalkjs/server.git
```

保存好原 Micro 目录的 `.deta` 文件夹，随后用原 `.deta` 文件夹替换最新代码中的文件夹。

运行：

```bash
deta deploy
```

即可完成部署更新。

---

<Comment />

