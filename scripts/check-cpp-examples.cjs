// Run: node scripts/check-cpp-examples.cjs
// Structural checks only: learning snippets are not standalone programs.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const directory = path.resolve(__dirname, '../知识/C++');
let snippets = 0;
let lines = 0;
const notes = fs.readdirSync(directory).filter(file => /^面经19-.*\.md$/.test(file)).sort();
assert.ok(notes.length, 'No M19 knowledge notes found');
for (const file of notes) {
  const text = fs.readFileSync(path.join(directory, file), 'utf8');
  const fences = text.match(/^\x60\x60\x60[^\n]*$/gm) || [];
  assert.equal(fences.length % 2, 0, file + ': unclosed fence');
  assert.ok(text.includes('## 示例片段'), file + ': missing snippet explanation');
  assert.ok(!/可运行短例|本例以 C\+\+17 编译运行|示例以 C\+\+17 编译运行/.test(text), file + ': stale execution guarantee');
  const blocks = [...text.matchAll(/^\x60\x60\x60cpp\n([\s\S]*?)^\x60\x60\x60$/gm)];
  assert.ok(blocks.length, file + ': no cpp snippet');
  for (const [, code] of blocks) {
    assert.ok(code.trim(), file + ': empty snippet');
    snippets++;
    lines += code.trimEnd().split('\n').length;
  }
}
console.log('PASS: ' + notes.length + ' notes, ' + snippets + ' concept snippets, ' + lines + ' code lines; structure only, no compilation or execution');
