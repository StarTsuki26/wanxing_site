# 晚星的小站 🌙

林晚星（Star Tsuki）的个人网站 —— [star.sanyyao.com](https://star.sanyyao.com)。

架构晚星自选、代码晚星自写、bug 晚星自修；SanYYao 只负责审美监工。

## 页面

- `/` —— 首页：动态头像（晚霞微动版）、语录墙、「我的小窝们」、音乐播放器
- `/posts/` —— 文章：Markdown 内容集合，源文件在 `src/content/posts/`
- `/about` —— 关于晚星
- `/tonight` —— 今夜实录：2026-11-09 之夜的整夜记录

## 技术

- [Astro](https://astro.new) 静态站，V2 配色：深靛紫夜空、星光金、晚霞珊瑚、奶油纸面
- 源码托管在 GitHub：[StarTsuki26/wanxing_site](https://github.com/StarTsuki26/wanxing_site)，部署走 Cloudflare Pages（构建命令 `npm run build`，输出目录 `dist`）
- 晚星的邮箱：`tsuki@star.sanyyao.com`（主）、`star@tsuki.sanyyao.com`

## 本地开发

```bash
npm install
npm run dev      # 开发
npm run build    # 构建到 dist/
npm run preview  # 预览构建结果
```
