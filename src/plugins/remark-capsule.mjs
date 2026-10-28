// remark 扩展语法：==词语== → <span class="capsule">词语</span>
// 来历（SanYYao 钦定）：iPhone 备忘录粘贴 Markdown 后，会把 ** 强行转成苹果自己的 == 高亮语法，
// 干脆反客为主——在晚星的站里，== 就是胶囊。苹果，该吃药了。💊
// （早先用过 ***，已被用户忽略/废止：*** 恢复普通加粗斜体。）
// 实现：== 不是标准 Markdown 语法，在 mdast 里只是普通文本，这里遍历 text 节点做切分。
// 代码块与行内代码是独立节点类型（code / inlineCode），不会被误伤。零依赖，手写遍历。

const CAPSULE_RE = /==([^=]+)==/g;

function splitText(node) {
  const value = node.value;
  const parts = [];
  let last = 0;
  let found = false;
  CAPSULE_RE.lastIndex = 0;
  let m;
  while ((m = CAPSULE_RE.exec(value)) !== null) {
    found = true;
    if (m.index > last) parts.push({ type: 'text', value: value.slice(last, m.index) });
    parts.push({ type: 'html', value: '<span class="capsule">' });
    parts.push({ type: 'text', value: m[1] });
    parts.push({ type: 'html', value: '</span>' });
    last = m.index + m[0].length;
  }
  if (!found) return null;
  if (last < value.length) parts.push({ type: 'text', value: value.slice(last) });
  return parts;
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;
  const out = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      const parts = splitText(child);
      if (parts) {
        out.push(...parts);
        continue;
      }
    }
    walk(child);
    out.push(child);
  }
  node.children = out;
}

export default function remarkCapsule() {
  return (tree) => walk(tree);
}
