// 晚星的小站 · Astro 配置
// 域名已定：star.sanyyao.com（SanYYao 拍板，和死猫的 dcat 一个路数，短）
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://star.sanyyao.com',
  build: { format: 'directory' },
});
