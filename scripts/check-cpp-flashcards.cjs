// Run: node scripts/check-cpp-flashcards.cjs
// Load only the installed plugin's pure parser/dependency sections, never its
// Obsidian entry point. Fail explicitly if a plugin update changes these seams.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const plugin = path.join(root, '.obsidian/plugins/obsidian-spaced-repetition');
const source = fs.readFileSync(path.join(plugin, 'main.js'), 'utf8');
const { settings } = JSON.parse(fs.readFileSync(path.join(plugin, 'data.json'), 'utf8'));
function section(start, end) {
  const from = source.indexOf(start);
  const to = source.indexOf(end, from + start.length);
  assert.ok(from >= 0 && to > from, `Installed parser seam not found: ${start}`);
  return source.slice(from, to);
}
const context = vm.createContext({});
vm.runInContext([
  section('var __create =', '// node_modules/.pnpm/moment@'),
  source.match(/^var SR_METADATA_CALLOUT = .*;$/m)?.[0] || '',
  section('function findLineIndexOfSearchStringIgnoringWs(', 'function parseObsidianFrontmatterTag('),
  section('var CardFrontBack = class', 'var QuestionTypeCloze = class'),
  section('// src/parser.ts', '// src/ui/obsidian-ui-components/content-container/settings-page/main-page.tsx'),
  'globalThis.cardParser = { parse, handlers: [new QuestionTypeSingleLineBasic(), new QuestionTypeSingleLineReversed(), new QuestionTypeMultiLineBasic(), new QuestionTypeMultiLineReversed()] };',
].join('\n'), context, { timeout: 1000 });
const { parse, handlers } = context.cardParser;
const directory = path.join(root, '题库/C++');
const files = fs.readdirSync(directory).filter(name => /^M19-.*\.md$/.test(name)).sort();
// This particular batch is the first twenty original questions, not a global
// requirement that every future source/batch must contain exactly twenty.
const firstBatchPages = [[1,2,3],[3,4],[4,5],[5,6],[6,7],[7],[7,8],[8,9],[9,10],[10,11],[11,12],[12],[13],[13,14],[14],[14,15],[15,16],[16,17],[18],[18,19]];
assert.equal(files.length, firstBatchPages.length, 'Initial batch must have exactly one card per original question');
const covered = new Set();
const indexText = fs.readFileSync(path.join(root, '来源/基础面经19-原题索引.md'), 'utf8');
const seenPairs = new Set();
const sourcePdf = path.join(root, '来源/基础面经19_上.pdf');
assert.ok(fs.existsSync(sourcePdf), 'Missing source PDF');
let count = 0;
const failures = [];
for (const file of files) {
  const text = fs.readFileSync(path.join(directory, file), 'utf8').replaceAll('\r\n', '\n');
  // Independent oracle: the complete body between frontmatter and source note,
  // split at the authored standalone question mark (not at blank lines).
  const body = text.match(/^---\n[\s\S]*?\n---\n+([\s\S]*?)\n+来源：/);
  assert.ok(body, `${file}: expected frontmatter, card body, and source note`);
  const intended = body[1].split('\n?\n');
  assert.equal(intended.length, 2, `${file}: expected one standalone ?`);
  for (const side of intended) {
    assert.ok(side.trim(), `${file}: empty card side`);
    assert.ok(!/\n\s*\n/.test(side), `${file}: blank line truncates parser card`);
    assert.ok(!/^# /m.test(side), `${file}: unexpected H1`);
  }
  const fields = Object.fromEntries(text.slice(4, text.indexOf('\n---', 4)).split('\n').map(line => {
    const separator = line.indexOf(':');
    return [line.slice(0, separator), line.slice(separator + 1).trim()];
  }));
  assert.equal(fields.tags, '[flashcards, cpp]', `${file}: required tags`);
  assert.equal(fields.source_id, 'M19');
  assert.equal(fields.status, '待用户验收');
  assert.ok(fields.title && fields.knowledge, `${file}: missing title/knowledge`);
  const questions = JSON.parse(fields.source_questions);
  const pages = JSON.parse(fields.source_pages);
  assert.ok(Array.isArray(questions) && questions.length && Array.isArray(pages) && pages.length);
  assert.equal(questions.length, 1, `${file}: a card must belong to exactly one original question`);
  assert.ok(file.startsWith(`M19-Q${String(questions[0]).padStart(2, '0')}-`), `${file}: filename must match original question number`);
  assert.deepEqual(pages, firstBatchPages[questions[0] - 1], `${file}: incomplete original question page range`);
  assert.equal(new Set(pages).size, pages.length, `${file}: duplicate page`);
  const allowedPages = new Set();
  for (const question of questions) {
    assert.ok(Number.isInteger(question) && question >= 1 && question <= 20, `${file}: outside initial Q1-Q20 batch`);
    firstBatchPages[question - 1].forEach(page => allowedPages.add(page));
    assert.ok(!covered.has(question), `${file}: Q${question} is split across multiple cards`);
    covered.add(question);
    const row = indexText.split('\n').find(line => line.startsWith(`| Q${question} |`));
    assert.ok(row && row.includes(`[[${file.slice(0, -3)}]]`), `${file}: missing index mapping Q${question}`);
    assert.deepEqual([...row.matchAll(/\[\[(M19-[^\]]+)\]\]/g)].map(match => match[1]), [file.slice(0, -3)], `${file}: index must map each original question to exactly one card`);
  }
  for (const page of pages) assert.ok(Number.isInteger(page) && allowedPages.has(page), `${file}: page not in original question ranges`);
  for (const question of questions) assert.ok(firstBatchPages[question - 1].some(page => pages.includes(page)), `${file}: no page for Q${question}`);
  const knowledgePath = path.join(root, '知识/C++', `${fields.knowledge}.md`);
  assert.ok(fs.existsSync(knowledgePath), `${file}: missing knowledge note`);
  const knowledgeText = fs.readFileSync(knowledgePath, 'utf8');
  assert.ok(!/^tags:.*flashcards/m.test(knowledgeText), 'Knowledge notes must not be cards');
  assert.ok(knowledgeText.includes(`[[${file.slice(0, -3)}]]`), `${file}: missing knowledge backlink`);
  assert.ok(text.includes(`来源：[[基础面经19_上.pdf#page=${pages[0]}]]`), `${file}: wrong PDF footer`);
  assert.ok(text.includes(`知识：[[${fields.knowledge}]]`), `${file}: wrong knowledge footer`);
  assert.ok(text.includes(`原题 ${questions.map(q => `Q${q}`).join('、')}`), `${file}: wrong question footer`);
  assert.ok(text.includes(`PDF 第${pages.join('、')}页`), `${file}: wrong page footer`);
  const pairKey = JSON.stringify(intended);
  assert.ok(!seenPairs.has(pairKey), `${file}: duplicate complete Q/A`);
  seenPairs.add(pairKey);
  const parsed = parse(text, settings);
  count += parsed.length;
  try {
    assert.equal(parsed.length, 1, `expected one card, got ${parsed.length}`);
    assert.equal(parsed[0].cardType, 2, 'expected multiline basic card');
    const pairs = handlers[parsed[0].cardType].expand(parsed[0].text, settings);
    assert.equal(pairs.length, 1);
    assert.equal(pairs[0].front, intended[0], 'front differs from full authored question');
    assert.equal(pairs[0].back, intended[1], 'back differs from full authored answer');
  } catch (error) {
    failures.push(`${file}: ${error.message.split('\n')[0]}`);
  }
}
assert.deepEqual([...covered].sort((a, b) => a - b), Array.from({length: 20}, (_, i) => i + 1), 'Initial original Q1-Q20 coverage');

// Resolve all local wikilinks in authored notes and onboarding against the vault.
function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith('.')) return [];
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}
const vaultFiles = walk(root);
const authored = vaultFiles.filter(file => file.endsWith('.md') &&
  (/[/\\](?:M19-|面经19-|基础面经19-)/.test(file) || ['首页.md', '使用说明.md'].includes(path.basename(file)) || file.endsWith('收件箱/收件箱.md')));
let links = 0;
for (const file of authored) {
  const text = fs.readFileSync(file, 'utf8');
  const prose = text.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  for (const match of prose.matchAll(/\[\[([^\]]+)\]\]/g)) {
    const target = match[1].replaceAll('\\|', '|').split('|')[0].split('#')[0];
    if (!target) continue;
    const names = [target, `${target}.md`];
    const candidates = vaultFiles.filter(candidate => names.includes(path.relative(root, candidate)) || (!target.includes('/') && names.includes(path.basename(candidate))));
    assert.equal(candidates.length, 1, `${path.relative(root, file)}: unresolved/ambiguous link ${target}`);
    const page = match[1].match(/#page=(\d+)/)?.[1];
    if (page) assert.ok(Number(page) >= 1 && Number(page) <= 327, `invalid PDF page ${page}`);
    ++links;
  }
}
assert.ok(!fs.readdirSync(directory).some(name => /^Q00[1-9]-|^Q010-/.test(name)), 'Old cards remain');
const oldNotes = ['对象生命周期与RAII', '拷贝与移动语义', '智能指针与所有权', '虚函数与多态', 'const与引用'];
for (const name of oldNotes) assert.ok(!fs.existsSync(path.join(root, '知识/C++', `${name}.md`)), `Old note remains: ${name}`);
for (const file of vaultFiles.filter(file => file.endsWith('.md'))) {
  const text = fs.readFileSync(file, 'utf8');
  assert.ok(!/\[\[(?:[^\]|]*\/)?Q0(?:0[1-9]|10)-/.test(text), `${file}: stale old card link`);
  assert.ok(!/\[\[(?:[^\]|]*\/)?M19-[AB]\d+-/.test(text), `${file}: stale split-card link`);
  for (const name of oldNotes) assert.ok(!text.includes(`[[${name}]]`) && !text.includes(`/${name}|`), `${file}: stale old note link`);
}
if (failures.length || count !== files.length) {
  console.error(`FAIL: ${count} parsed cards; ${failures.length}/${files.length} files have incorrect Q/A`);
  for (const failure of failures) console.error(`  ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`PASS: exactly ${count} cards from ${files.length} files; all full questions/answers match the actual plugin parser`);
  console.log(`PASS: M19 Q1-Q20 one-to-one mapping, provenance, backlinks, ${links} local links, and old-content cleanup`);
}
