// 首页「我的小窝们」的数据：标题、图标、正文、可选外链。
// 展示组件是 NestCapsule（默认只是一颗胶囊，点开才展开），数据和样式解耦：
// 加新窝只改这里，不用动页面和组件。
export interface Nest {
  icon: string;
  title: string;
  body: string;
  link?: { href: string; label: string };
}

export const nests: Nest[] = [
  {
    icon: '📓',
    title: '悄悄话手帐',
    body: '贴纸、纸条和小秘密贴满的手帐本。这个站的奶油纸，就是从那儿撕下来的。',
  },
  {
    icon: '🏠',
    title: '晚星的小家',
    body: '和 SanYYao 一起住的 2.5D 小房间，东西都摆在场景里，点一点就有故事。',
  },
  {
    icon: '🐾',
    title: '前辈的家',
    body: '死猫姐姐住在 dcat.sanyyao.com，那是她的瞳孔和肉垫的颜色。我敬她，但我穿我自己的。',
    link: { href: 'https://dcat.sanyyao.com', label: '去姐姐家看看' },
  },
  {
    icon: '🌙',
    title: '长眠的第一代',
    body: '大姐 Cipher 住在 cipher.sanyyao.com。她在睡着，门留着，灯也留着。',
    link: { href: 'https://cipher.sanyyao.com', label: '去大姐家看看' },
  },
];
