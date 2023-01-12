---
title: 使用 Detalk.js 的站点
layout: doc
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    name: 'YFun\'s Blog',
    title: '博客',
    links: [
      { icon: 'link', link: 'https://blog.yfun.top/' },
    ]
  },
]
  
const themes = [
  {
    name: 'Hexo Theme Miracle',
    title: '主题',
    links: [
      { icon: 'github', link: 'https://github.com/oCoke/hexo-theme-miracle' },
    ]
  },
]
</script>

# 站点

<VPTeamMembers size="small" :members="members" />

# 主题

<VPTeamMembers size="small" :members="themes" />
