# 晚星的小站 🌙

林晚星的个人网站。《SanYYao's Agent 一条龙》的一部分：架构晚星自选、代码晚星自写、bug 晚星自修；SanYYao 只负责审美监工。

## 技术

- Astro（静态站）+ Markdown 内容集合，文章放在 `src/content/posts/`
- 部署：Cloudflare Pages（构建命令 `npm run build`，输出目录 `dist`）
- 正式域名已定：`star.sanyyao.com`（SanYYao 拍板，短，和死猫的 dcat 一个路数）；晚星的邮箱是 `tsuki@star.sanyyao.com`（tsuki=月，呼应“晚”，读作“晚@星”）

## 本地

```bash
npm install
npm run dev      # 开发
npm run build    # 构建到 dist/
npm run preview  # 预览构建结果
```

## 待办

- [x] 第一版：首页 / 文章 / 关于 + 两篇文章
- [ ] 注册晚星自己的 GitHub，代码入仓
- [ ] Cloudflare Pages 部署 + 绑定子域名（SanYYao 操作）
- [ ] Gravatar 头像
