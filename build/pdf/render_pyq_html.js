// Builds print-ready standalone HTML pages for the three authentic-PYQ
// study-guide PDFs (one per syllabus unit), topic by topic, using the app's
// own extracted LaTeX/rich-text renderer (renderer.js) so formulas render
// identically to the live dashboard. Every question shows all 4 options
// with the correct one highlighted, plus the full Learning Mode reveal
// stack: Exam Shortcut, Tips & Tricks and Step-by-Step Solution.
//
// Run from the repository root:  node build/pdf/render_pyq_html.js
// Writes: ISS-Statistics-II-Mock/PDFs/PYQs-<Unit>.html (one per unit)
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const MOCK_DIR = path.join(ROOT, 'ISS-Statistics-II-Mock');
const QUESTIONS_JS = path.join(MOCK_DIR, 'questions2.js');
const OUT_DIR = path.join(MOCK_DIR, 'PDFs');

const rendererCode = fs.readFileSync(path.join(__dirname, 'renderer.js'), 'utf8');
const { renderQuestionText, renderRich, escapeHtmlPlain } = new Function(
  rendererCode + '\nreturn {renderQuestionText, renderRich, escapeHtmlPlain};'
)();

function loadQuestions() {
  const text = fs.readFileSync(QUESTIONS_JS, 'utf8');
  const m = text.match(/window\.quizDataPaper2\s*=\s*(\[[\s\S]*\]);/);
  if (!m) throw new Error('Could not find window.quizDataPaper2 in questions2.js');
  return JSON.parse(m[1]);
}

const UNIT_SLUG = {
  'Linear Models': 'Linear-Models',
  'Statistical Inference and Hypothesis Testing': 'Statistical-Inference-and-Hypothesis-Testing',
  'Official Statistics': 'Official-Statistics',
};
const UNIT_SHORT = {
  'Linear Models': 'LM',
  'Statistical Inference and Hypothesis Testing': 'SI & HT',
  'Official Statistics': 'OS',
};
const UNIT_ACCENT = {
  'Linear Models': { bg: '#eaf1fd', color: '#1a4d8f', border: '#c8dcf7' },
  'Statistical Inference and Hypothesis Testing': { bg: '#fdeaf3', color: '#9c1a5f', border: '#f5c6dd' },
  'Official Statistics': { bg: '#eafaf1', color: '#0c7a3f', border: '#bfe9cf' },
};

const PRINT_CSS = `
@page { size: A4; margin: 18mm 16mm; }
* { box-sizing: border-box; }
body { font-family: "Georgia", "Times New Roman", serif; color: #1c2230; font-size: 11.3pt; line-height: 1.5; margin: 0; }
.cover { min-height: 240mm; display: flex; flex-direction: column; justify-content: center; page-break-after: always; text-align: center; }
.cover .kicker { font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; font-size: 12pt; margin-bottom: 10px; font-family: Arial, sans-serif; }
.cover h1 { font-size: 30pt; margin: 0 0 10px; }
.cover .subtitle { font-size: 14pt; color: #444; margin-bottom: 26px; }
.cover .stats { display: flex; justify-content: center; gap: 34px; margin-bottom: 30px; font-family: Arial, sans-serif; }
.cover .stat b { display: block; font-size: 22pt; color: #1c2230; }
.cover .stat span { font-size: 10pt; color: #666; }
.cover .notice { max-width: 520px; margin: 0 auto; background: #fff4e0; border: 1px solid #f2d9a6; border-radius: 8px; padding: 14px 18px; font-size: 10pt; color: #8a5a00; font-family: Arial, sans-serif; text-align: left; }
.cover .notice b { display: block; margin-bottom: 4px; font-size: 10.5pt; }
.toc { page-break-after: always; }
.toc h2 { font-family: Arial, sans-serif; font-size: 16pt; border-bottom: 2px solid #1c2230; padding-bottom: 6px; }
.toc-row { display: flex; justify-content: space-between; font-family: Arial, sans-serif; font-size: 10.5pt; padding: 5px 0; border-bottom: 1px dotted #ccc; }
.toc-sub { padding-left: 16px; color: #5b6472; }
.topic-heading { page-break-before: always; font-family: Arial, sans-serif; font-size: 15pt; color: #1c2230; border-bottom: 2px solid var(--accent, #1a4d8f); padding-bottom: 6px; margin: 0 0 4px; }
.topic-heading:first-of-type { page-break-before: auto; }
.topic-meta { font-family: Arial, sans-serif; font-size: 9.5pt; color: #777; margin-bottom: 10px; }
.subtopic-heading { font-family: Arial, sans-serif; font-size: 11.5pt; color: #444; margin: 18px 0 8px; font-weight: 700; }
.qblock { break-inside: avoid; page-break-inside: avoid; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid #e3e3e3; }
.qmeta { font-family: Arial, sans-serif; font-size: 8.6pt; margin-bottom: 5px; }
.qmeta .b { display: inline-block; background: #f1f2f4; color: #444; border-radius: 10px; padding: 1px 8px; margin-right: 5px; }
.qmeta .b.unit { background: var(--ubg, #eaf1fd); color: var(--ucolor, #1a4d8f); }
.qnum { font-weight: 700; color: var(--accent, #1a4d8f); margin-right: 4px; }
.shared-stem { background: #f8f9fb; border: 1px dashed #dde1e7; border-radius: 8px; padding: 8px 10px; margin-bottom: 8px; font-size: 10pt; }
.shared-stem .tag { font-size: 8.4pt; text-transform: uppercase; color: #5b6472; font-weight: 700; letter-spacing: 0.04em; display: block; margin-bottom: 3px; }
.qtext { margin: 0 0 8px; }
.qtext p { margin: 0 0 6px; }
.trailing-note { font-size: 9.8pt; color: #5b6472; margin: 0 0 8px; font-style: italic; }
.opts { margin: 0 0 8px; padding: 0; list-style: none; }
.opt { padding: 3px 0 3px 22px; position: relative; font-size: 10.6pt; }
.opt .lab { position: absolute; left: 0; font-weight: 700; }
.opt.correct { color: #0b6b3a; font-weight: 700; }
.opt.correct .lab::after { content: " \\2713"; }
.answer-line { font-family: Arial, sans-serif; font-size: 9.6pt; color: #0b6b3a; font-weight: 700; margin-bottom: 6px; }
.reveal { background: #f8f9fb; border: 1px solid #dde1e7; border-radius: 8px; padding: 7px 12px; margin-bottom: 6px; }
.reveal .reveal-title { font-family: Arial, sans-serif; font-size: 8.8pt; text-transform: uppercase; letter-spacing: 0.04em; color: #5b6472; display: flex; align-items: center; gap: 6px; margin-bottom: 3px; }
.reveal.shortcut { background: #f7f5ff; border-left: 3px solid #6b5bd6; }
.reveal.shortcut .reveal-title { color: #5b3fb0; }
.reveal ol, .reveal ul { margin: 4px 0 0; padding-left: 18px; }
.reveal li { margin-bottom: 4px; }
.ai-note { font-size: 7.6pt; color: #8a5a00; background: #fff4e0; border: 1px solid #f2d9a6; padding: 1px 6px; border-radius: 999px; font-weight: 400; text-transform: none; letter-spacing: 0; }
.source-note { font-size: 9.6pt; background: #fdecea; border: 1px solid #f2c6c2; color: #b3261e; padding: 6px 10px; border-radius: 8px; margin-top: 6px; }
.source-note b { font-family: Arial, sans-serif; }
.footer { font-family: Arial, sans-serif; font-size: 8pt; color: #999; text-align: center; margin-top: 30px; }
/* math + richtext rules copied verbatim from styles.css's ".math"/".richtext" block */
.mathblock{display:block; text-align:center; margin:10px 0; font-size:1.08em;}
.mathinline{font-style:normal;}
.math{font-family:Georgia,"Times New Roman",serif; font-style:italic; white-space:nowrap; display:inline-block; vertical-align:middle;}
.math .upright{font-style:normal; font-family:Arial,sans-serif;}
.math .op{font-style:normal; font-family:Arial,sans-serif; padding:0 .1em;}
.math .bigop{font-style:normal; font-size:1.35em; padding:0 .05em; display:inline-block; vertical-align:-.15em;}
.math .frac{display:inline-flex; flex-direction:column; vertical-align:middle; text-align:center; margin:0 .12em; font-style:normal;}
.math .frac .num, .math .frac .den{padding:0 .2em; white-space:nowrap;}
.math .frac .num{border-bottom:1.3px solid currentColor;}
.math .frac .den{padding-top:1px;}
.math .binom-stack{display:inline-flex; flex-direction:column; vertical-align:middle; text-align:center; margin:0 .05em; font-style:italic; line-height:1.15;}
.math .binom-stack .binom-top, .math .binom-stack .binom-bottom{padding:0 .15em; white-space:nowrap;}
.math .opstack{display:inline-flex; flex-direction:column; align-items:center; vertical-align:middle; line-height:1.05; margin:0 .08em;}
.math .opstack-sup, .math .opstack-sub{font-size:.62em; font-style:italic;}
.math .opstack-sup{margin-bottom:.12em;}
.math .opstack-sub{margin-top:.12em;}
.math .opstack-mid{font-style:normal;}
.math sub, .math sup{font-style:italic;}
.math .upright sub, .math .upright sup{font-style:normal;}
.math .sqrt{display:inline-flex; align-items:stretch; font-style:normal; margin:0 .05em;}
.math .sqrt .radical{padding-right:.05em; align-self:flex-end; transform:scaleY(1.1);}
.math .sqrt .sqrt-body{border-top:1.3px solid currentColor; padding:0 .15em; font-style:italic;}
.math .decorate-bar{border-top:1.1px solid currentColor; padding-top:1px; display:inline-block;}
.math .decorate-hat, .math .decorate-tilde{position:relative; display:inline-block;}
.math .decorate-hat::before{content:"^"; position:absolute; left:50%; top:-.72em; transform:translateX(-50%); font-size:.8em;}
.math .decorate-tilde::before{content:"~"; position:absolute; left:50%; top:-.66em; transform:translateX(-50%); font-size:.85em;}
.math .decorate-dot::before{content:"."; position:absolute; left:50%; top:-.62em; transform:translateX(-50%); font-size:1em; font-weight:700;}
.math .decorate-dot{position:relative; display:inline-block;}
.math .decorate-vec{position:relative; display:inline-block;}
.math .decorate-vec::before{content:"\\2192"; position:absolute; left:50%; top:-.78em; transform:translateX(-50%); font-size:.65em;}
.math .underbrace-wrap{display:inline-flex; flex-direction:column; align-items:center; vertical-align:middle; font-style:italic; margin:0 .05em; line-height:1.05;}
.math .underbrace-brace{font-style:normal; font-size:.85em; margin-top:.02em;}
.math .matrix, .math .cases{display:inline-flex; align-items:center; vertical-align:middle; font-style:italic;}
.math .mtable, .math .ctable{display:inline-table; vertical-align:middle; border-collapse:collapse;}
.math .mrow, .math .crow{display:table-row;}
.math .mcell, .math .ccell{display:table-cell; padding:1px 8px; text-align:center; white-space:nowrap; vertical-align:middle;}
.math .ccell.case-cond{text-align:left; padding-left:14px; font-style:normal; font-size:.92em; color:#666;}
.math .bracket{font-size:1.5em; font-style:normal; padding:0 .04em; transform:scaleY(1.15); display:inline-block;}
.math .brace-big{font-size:1.9em; font-style:normal; padding-right:.08em; display:inline-block;}
.math .space-quad{display:inline-block; width:.9em;}
.math .space-qquad{display:inline-block; width:1.7em;}
.richtext table{border-collapse:collapse; margin:10px 0; font-size:10pt;}
.richtext table td, .richtext table th{border:1px solid #ccc; padding:5px 9px;}
.richtext table th{background:#f1f2f4;}
.richtext p{margin:0 0 8px;}
.richtext strong{font-weight:700;}
`;

function esc(s) { return escapeHtmlPlain(String(s == null ? '' : s)); }

function questionBlock(q, indexInSubtopic, accent) {
  const letters = 'ABCD';
  const sharedStemHtml = q.sharedStem ? `<div class="shared-stem"><span class="tag">Shared context</span>${renderRich(q.sharedStem)}</div>` : '';
  const trailingHtml = q.trailingNote ? `<div class="trailing-note">${renderQuestionText(q.trailingNote)}</div>` : '';
  const optsHtml = q.options.map((opt, i) => (
    `<li class="opt${i === q.correctAnswer ? ' correct' : ''}"><span class="lab">${letters[i]}.</span> ${renderQuestionText(opt)}</li>`
  )).join('');
  const meta = (
    `<span class="b unit">${esc(UNIT_SHORT[q.unit] || q.unit)}</span>`
    + `<span class="b">${esc(q.year)} Q${esc(q.questionNumber)}</span>`
    + `<span class="b">${esc(q.questionType || '')}</span>`
    + `<span class="b">${esc(q.difficulty || '')}</span>`
  );
  const tips = (q.tipsTricks || []).map(t => `<li>${renderQuestionText(t)}</li>`).join('');
  const sol = (q.solution || []).map(s => `<li>${renderQuestionText(s.text)}</li>`).join('');
  const sourceNote = q.sourceAmbiguityNote
    ? `<div class="source-note"><b>Source note:</b> ${renderQuestionText(q.sourceAmbiguityNote)}</div>` : '';
  return (
    `<div class="qblock" style="--accent:${accent.color}">`
    + `<div class="qmeta" style="--ubg:${accent.bg};--ucolor:${accent.color}">${meta}</div>`
    + sharedStemHtml
    + `<div class="qtext"><span class="qnum">Q${indexInSubtopic}.</span>${renderRich(q.question)}</div>`
    + trailingHtml
    + `<ul class="opts">${optsHtml}</ul>`
    + `<div class="answer-line">Correct answer: ${letters[q.correctAnswer]}</div>`
    + `<div class="reveal shortcut"><b class="reveal-title">Exam Shortcut <span class="ai-note">AI-derived explanation</span></b>${renderQuestionText(q.examShortcut || '')}</div>`
    + (tips ? `<div class="reveal"><b class="reveal-title">Tips &amp; Tricks</b><ul>${tips}</ul></div>` : '')
    + (sol ? `<div class="reveal"><b class="reveal-title">Step-by-Step Solution</b><ol>${sol}</ol></div>` : '')
    + sourceNote
    + `</div>`
  );
}

function buildUnitHtml(unit, questions) {
  const accent = UNIT_ACCENT[unit];
  // group by topic (first-appearance order) -> subtopic (first-appearance order),
  // sorted within subtopic by year then question number
  const topics = [];
  const topicIndex = {};
  for (const q of questions) {
    const t = q.topic || 'General';
    if (!(t in topicIndex)) { topicIndex[t] = topics.length; topics.push({ name: t, subIndex: {}, subs: [] }); }
    const topic = topics[topicIndex[t]];
    const st = q.subtopic || 'General';
    if (!(st in topic.subIndex)) { topic.subIndex[st] = topic.subs.length; topic.subs.push({ name: st, items: [] }); }
    topic.subs[topic.subIndex[st]].items.push(q);
  }
  for (const t of topics) {
    for (const s of t.subs) {
      s.items.sort((a, b) => a.year - b.year || a.questionNumber - b.questionNumber);
    }
  }

  const total = questions.length;
  const tocRows = topics.map(t => {
    const count = t.subs.reduce((a, s) => a + s.items.length, 0);
    const subRows = t.subs.map(s => `<div class="toc-row toc-sub"><span>${esc(s.name)}</span><span>${s.items.length}</span></div>`).join('');
    return `<div class="toc-row"><span><b>${esc(t.name)}</b></span><span>${count} questions</span></div>${subRows}`;
  }).join('');

  const bodyParts = [];
  for (const t of topics) {
    const count = t.subs.reduce((a, s) => a + s.items.length, 0);
    bodyParts.push(`<div class="topic-heading" style="--accent:${accent.color}">${esc(t.name)}</div>`);
    bodyParts.push(`<div class="topic-meta">${count} authentic PYQs in this topic (2018-2026)</div>`);
    for (const s of t.subs) {
      bodyParts.push(`<div class="subtopic-heading">${esc(s.name)}</div>`);
      s.items.forEach((q, i) => bodyParts.push(questionBlock(q, i + 1, accent)));
    }
  }

  const cover = (
    `<div class="cover">`
    + `<div class="kicker" style="color:${accent.color}">Statistics Paper II &middot; Authentic PYQs 2018-2026</div>`
    + `<h1>${esc(unit)}</h1>`
    + `<div class="subtitle">${total} authentic UPSC ISS questions with exam shortcut, tips &amp; tricks and step-by-step solution</div>`
    + `<div class="stats">`
    + `<div class="stat"><b>${total}</b><span>Authentic PYQs</span></div>`
    + `<div class="stat"><b>${topics.length}</b><span>Topics Covered</span></div>`
    + `<div class="stat"><b>9</b><span>Years 2018-2026</span></div>`
    + `</div>`
    + `<div class="notice"><b>AI-DERIVED EXPLANATIONS</b>The source booklets carry no official answer key. Every Exam Shortcut, Tips &amp; Tricks and Step-by-Step Solution here is independently derived and verified by the builder of this platform, not copied from an official source.</div>`
    + `</div>`
  );
  const toc = `<div class="toc"><h2>Contents</h2>${tocRows}</div>`;
  const footer = `<div class="footer">Generated offline for personal exam preparation &middot; not an official UPSC publication</div>`;

  return (
    `<!doctype html><html><head><meta charset="utf-8"><title>${esc(unit)} — PYQs 2018-2026</title><style>${PRINT_CSS}</style></head><body>`
    + cover + toc + bodyParts.join('') + footer
    + `</body></html>`
  );
}

function main() {
  const data = loadQuestions();
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const unit of Object.keys(UNIT_SLUG)) {
    const qs = data.filter(q => q.unit === unit);
    const html = buildUnitHtml(unit, qs);
    const outPath = path.join(OUT_DIR, `PYQs-${UNIT_SLUG[unit]}.html`);
    fs.writeFileSync(outPath, html);
    console.log('Wrote', outPath, `(${qs.length} questions)`);
  }
}

main();
