---
layout: doc
title: 从 Twikoo 迁移
---

# 从 Twikoo 迁移

> 目前仅测试由 MongoDB 导出的 Twikoo JSON 数据。


<div style="width: 100%;margin-top: 30px;">
    <textarea style="width: 100%; padding: 10px;" placeholder="在此处粘贴从 Twikoo 导出的 JSON 格式文件" rows="8" id="twikoo-cvt-text"></textarea>
    <button style="padding: 15px;
    width: 6rem;
    height: 3rem;
    background: rgba(0,0,0,0.12);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;" id="twikoo-cvt-btn" onclick="twikooCvt();">转换</button>
</div>
