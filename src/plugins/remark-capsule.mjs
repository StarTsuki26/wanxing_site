// remark 扩展语法：***词语*** → <span class="capsule">词语</span>
// 灵感来自死猫站的扩展语法（SanYYao 指的路）：三颗星包住的词，渲染成晚星设计的胶囊。
// Markdown 里 ***x*** 会被解析成 emphasis>strong 或 strong>emphasis 的嵌套，这里把这种嵌套换成胶囊 span。
// 零依赖：手写递归遍历 mdast，用 html 节点拼开合标签，Astro 默认放行行内 HTML。

function capsuleInner(node) {
  if (!node || !Array.isArray(node.children) || node.children.length !== 1) return null;
  const inner = node.children[0];
  if (node.type === 'emphasis' && inner.type === 'strong') return inner;
  if (node.type === 'strong' && inner.type === 'emphasis') return inner;
  return null;
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;
  const out = [];
  for (const child of node.children) {
    const inner =
      child.type === 'emphasis' || child.type === 'strong' ? capsuleInner(child) : null;
    if (inner) {
      out.push({ type: 'html', value: '<span class="capsule">' });
      out.push(...inner.children);
      out.push({ type: 'html', value: '</span>' });
    } else {
      walk(child);
      out.push(child);
    }
  }
  node.children = out;
}

export default function remarkCapsule() {
  return (tree) => walk(tree);
}
