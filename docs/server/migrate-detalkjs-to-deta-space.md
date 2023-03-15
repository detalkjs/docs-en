---
title: 将 Detalk.js 迁移至 Deta Space
layout: doc
---

# 将 Detalk.js 迁移至 Deta Space

> 本文将介绍如何将 Detalk.js 从 Deta Cloud 迁移至 Deta Space。


## 🚀 来自 Deta 的升级

根据上一篇公告：[「我们正计划将 Detalk.js 迁移至 Deta Space。」](https://github.com/orgs/detalkjs/discussions/4)，我们发布了第一个对于 Deta Space 支持的测试版：`v2.0.0-alpha.1`。

## 📝 迁移数据

1. [登录你的 Deta Space 账号](https://deta.space/)。
2. 点击 Canvas 中的 [Collections](https://deta.space/collections)，进入数据管理。

![image](https://user-images.githubusercontent.com/71591824/225255483-e033d4ca-30d2-4300-b4d6-fe3d822390ed.png)

3. 点击 `Import Cloud Project`，导入 Cloud 项目中的 Bases 和 Drive。

![image](https://user-images.githubusercontent.com/71591824/225255559-ca375833-7675-4f70-9bc3-2df834b69e1b.png)

4. 选择需要导入的项目，默认是 `default`。

![image](https://user-images.githubusercontent.com/71591824/225256068-161141fd-65e1-4382-9230-7ede13a9b01c.png)


5. 导入成功后进入对应的 Collection 页面。

![image](https://user-images.githubusercontent.com/71591824/225255918-707a4143-78e0-48cf-9794-2491d0de89d0.png)


6. 点击 `Collection Settings`，进入设置。

![image](https://user-images.githubusercontent.com/71591824/225252877-9f82fdbc-5238-4acd-821b-949ba440c92a.png)

7. 点击 `Create New Data Key` 新建一个 Data Key，备注名称随意。

![image](https://user-images.githubusercontent.com/71591824/225253219-9a1b689e-1535-4159-9f2a-ea6054ded6f2.png)

8. 随后页面将生成 Data Key，此 Key 只会出现一次，请妥善保存。

![image](https://user-images.githubusercontent.com/71591824/225253512-95c2a194-8eed-4ae9-8260-bdf714a83e11.png)

## 🚀 部署程序

9. [打开 Detalk.js App 页面](https://deta.space/discovery/r/5hkxbl9q35xfszuk)。
10. 点击 `Install` 安装应用（由于版本更新的原因，版本号可能不同）。

![image](https://user-images.githubusercontent.com/71591824/222868949-eae1a8a0-4827-4eeb-bba9-abc86f0fe164.png)

11. 安装完成后，点击 `View on Canvas`。
12. 点击应用程序旁的扩展键打开功能菜单，点击 `Settings`。

![image](https://user-images.githubusercontent.com/71591824/225250009-17c376da-b42b-430e-8ffe-bc3fe53d23eb.png)
![image](https://user-images.githubusercontent.com/71591824/225250167-abb55b20-c439-4d20-bc63-ad274b6ccf0c.png)

13. 等待页面加载完成，点击 `Configuration`，按照需要更改 `BASE_NAME` 和 `DETA_DATA_KEY` 配置。详见文档。


![image](https://user-images.githubusercontent.com/71591824/225256151-589cbd5a-27ee-4e84-b06e-2ad77d1e8ad8.png)


14. 点击 `Domains`，配置项目域名。

![image](https://user-images.githubusercontent.com/71591824/225256233-2db049ed-531b-4cab-8525-60cc91f4c770.png)

## 🔨 前端修改

15. 对前端几乎无需更改，您只需要将原 Deta Cloud 域名替换为 Deta Space 域名即可。如果您使用自定义域名，只需要在删除原有的解析记录后添加 Deta Space 新记录即可。

