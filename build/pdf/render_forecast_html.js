// Builds the print-ready standalone HTML pages for the two forecast PDFs,
// using the app's OWN LaTeX/rich-text renderer (build/pdf/renderer.js, an
// extracted copy of index.html's math renderer) so Set 1's LaTeX-authored
// questions render identically to how they look in the live dashboard,
// while the plain-Unicode bulk questions pass through unchanged.
//
// Run from the repository root:  node build/pdf/render_forecast_html.js
// Writes: ISS-Statistics-II-Mock/PDFs/Forecast-Linear-Models.html
//         ISS-Statistics-II-Mock/PDFs/Forecast-Statistical-Inference.html
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const FORECAST_JS = path.join(ROOT, 'ISS-Statistics-II-Mock', 'forecast.js');
const OUT_DIR = path.join(ROOT, 'ISS-Statistics-II-Mock', 'PDFs');

const rendererCode = fs.readFileSync(path.join(__dirname, 'renderer.js'), 'utf8');
const { renderQuestionText, renderRich, escapeHtmlPlain } = new Function(
  rendererCode + '\nreturn {renderQuestionText, renderRich, escapeHtmlPlain};'
)();

function loadForecast() {
  const text = fs.readFileSync(FORECAST_JS, 'utf8');
  const m = text.match(/window\.forecastDataPaper2\s*=\s*(\[[\s\S]*\]);/);
  if (!m) throw new Error('Could not find window.forecastDataPaper2 in forecast.js');
  return JSON.parse(m[1]);
}

const PRINT_CSS = `
@page { size: A4; margin: 18mm 16mm; }
* { box-sizing: border-box; }
body { font-family: "Georgia", "Times New Roman", serif; color: #1a1f29; font-size: 11.3pt; line-height: 1.5; margin: 0; }
.cover { min-height: 240mm; display: flex; flex-direction: column; justify-content: center; page-break-after: always; text-align: center; }
.cover .kicker { color: #6b5bd6; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; font-size: 12pt; margin-bottom: 10px; font-family: Arial, sans-serif; }
.cover h1 { font-size: 30pt; margin: 0 0 10px; }
.cover .subtitle { font-size: 14pt; color: #444; margin-bottom: 26px; }
.cover .stats { display: flex; justify-content: center; gap: 34px; margin-bottom: 30px; font-family: Arial, sans-serif; }
.cover .stat b { display: block; font-size: 22pt; color: #1a1f29; }
.cover .stat span { font-size: 10pt; color: #666; }
.cover .notice { max-width: 500px; margin: 0 auto; background: #fff3cd; border: 1px solid #f0c674; border-radius: 8px; padding: 14px 18px; font-size: 10pt; color: #6b4e00; font-family: Arial, sans-serif; text-align: left; }
.cover .notice b { display: block; margin-bottom: 4px; font-size: 10.5pt; }
.toc { page-break-after: always; }
.toc h2 { font-family: Arial, sans-serif; font-size: 16pt; border-bottom: 2px solid #1a1f29; padding-bottom: 6px; }
.toc-row { display: flex; justify-content: space-between; font-family: Arial, sans-serif; font-size: 10.5pt; padding: 5px 0; border-bottom: 1px dotted #ccc; }
.topic-heading { page-break-before: always; font-family: Arial, sans-serif; font-size: 15pt; color: #1a1f29; border-bottom: 2px solid #6b5bd6; padding-bottom: 6px; margin: 0 0 4px; }
.topic-heading:first-of-type { page-break-before: auto; }
.topic-meta { font-family: Arial, sans-serif; font-size: 9.5pt; color: #777; margin-bottom: 14px; }
.qblock { break-inside: avoid; page-break-inside: avoid; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid #e3e3e3; }
.qmeta { font-family: Arial, sans-serif; font-size: 8.6pt; margin-bottom: 5px; }
.qmeta .b { display: inline-block; background: #f1eefc; color: #5b3fb0; border-radius: 10px; padding: 1px 8px; margin-right: 5px; }
.qnum { font-weight: 700; color: #6b5bd6; margin-right: 4px; }
.qtext { margin: 0 0 8px; }
.qtext p { margin: 0 0 6px; }
.opts { margin: 0 0 8px; padding: 0; list-style: none; }
.opt { padding: 3px 0 3px 22px; position: relative; font-size: 10.6pt; }
.opt .lab { position: absolute; left: 0; font-weight: 700; }
.opt.correct { color: #0b6b3a; font-weight: 700; }
.opt.correct .lab::after { content: " \\2713"; }
.answer-line { font-family: Arial, sans-serif; font-size: 9.6pt; color: #0b6b3a; font-weight: 700; margin-bottom: 6px; }
.shortcut { background: #f7f5ff; border-left: 3px solid #6b5bd6; padding: 7px 12px; font-size: 10.2pt; }
.shortcut p { margin: 0 0 6px; }
.shortcut .reveal-title { font-family: Arial, sans-serif; font-size: 8.8pt; text-transform: uppercase; letter-spacing: 0.04em; color: #5b3fb0; display: block; margin-bottom: 3px; }
.footer { font-family: Arial, sans-serif; font-size: 8pt; color: #999; text-align: center; margin-top: 30px; }
/* math + richtext rules copied verbatim from styles.css's ".math"/".richtext"
   block (light palette only - a printed PDF has no dark mode) so formulas
   render pixel-for-pixel like the live dashboard. */
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
.math .sqrt{display:inline-flex; align-items:stretch; font-style:normal; margin:0 .1em 0 .05em;}
.math .sqrt-radical{width:.62em; flex:none; overflow:visible; display:block;}
.math .sqrt .sqrt-body{border-top:1.4px solid currentColor; padding:.04em .14em 0 .1em; font-style:italic; margin-top:1px;}
.math .decorate-bar{border-top:1.1px solid currentColor; padding-top:1px; display:inline-block;}
.math .decorate-hat, .math .decorate-tilde{position:relative; display:inline-block;}
.math .decorate-hat::before{content:"^"; position:absolute; left:50%; top:-.72em; transform:translateX(-50%); font-size:.8em;}
.math .decorate-tilde::before{content:"~"; position:absolute; left:50%; top:-.66em; transform:translateX(-50%); font-size:.85em;}
.math .decorate-dot{position:relative; display:inline-block;}
.math .decorate-dot::before{content:"."; position:absolute; left:50%; top:-.62em; transform:translateX(-50%); font-size:1em; font-weight:700;}
.math .decorate-vec{position:relative; display:inline-block;}
.math .decorate-vec::before{content:"\\2192"; position:absolute; left:50%; top:-.78em; transform:translateX(-50%); font-size:.65em;}
.math .underbrace-wrap{display:inline-flex; flex-direction:column; align-items:center; vertical-align:middle; font-style:italic; margin:0 .05em; line-height:1.05;}
.math .underbrace-brace{font-style:normal; font-size:.85em; margin-top:.02em;}
.math .stackrel-wrap{display:inline-flex; flex-direction:column; align-items:center; vertical-align:middle; font-style:italic; margin:0 .05em; line-height:1.05;}
.math .stackrel-top{font-size:.62em; margin-bottom:.1em;}
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
.richtext table th{background:#f1eefc;}
.richtext p{margin:0 0 8px;}
.richtext strong{font-weight:700;}
`;

function esc(s) { return escapeHtmlPlain(String(s == null ? '' : s)); }

function questionBlock(q, indexInTopic) {
  const letters = 'ABCD';
  const optsHtml = q.options.map((opt, i) => (
    `<li class="opt${i === q.correctAnswer ? ' correct' : ''}"><span class="lab">${letters[i]}.</span> ${renderQuestionText(opt)}</li>`
  )).join('');
  const meta = `<span class="b">${esc(q.section)}</span><span class="b">${esc(q.subtopic || q.topic || '')}</span><span class="b">${esc(q.difficulty || '')}</span>`;
  return (
    `<div class="qblock">`
    + `<div class="qmeta">${meta}</div>`
    + `<div class="qtext"><span class="qnum">Q${indexInTopic}.</span>${renderRich(q.question)}</div>`
    + `<ul class="opts">${optsHtml}</ul>`
    + `<div class="answer-line">Correct answer: ${letters[q.correctAnswer]}</div>`
    + `<div class="shortcut"><b class="reveal-title">Exam Shortcut</b>${renderQuestionText(q.examShortcut || '')}</div>`
    + `</div>`
  );
}

function buildPdfHtml(title, subtitle, noticeText, questions) {
  const topics = [];
  const topicIndex = {};
  for (const q of questions) {
    const t = q.topic || 'General';
    if (!(t in topicIndex)) { topicIndex[t] = topics.length; topics.push({ name: t, items: [] }); }
    topics[topicIndex[t]].items.push(q);
  }
  const total = questions.length;
  const tocRows = topics.map(t => (
    `<div class="toc-row"><span>${esc(t.name)}</span><span>${t.items.length} questions</span></div>`
  )).join('');

  const bodyParts = [];
  for (const t of topics) {
    bodyParts.push(`<div class="topic-heading">${esc(t.name)}</div>`);
    bodyParts.push(`<div class="topic-meta">${t.items.length} forecast questions in this topic</div>`);
    t.items.forEach((q, i) => bodyParts.push(questionBlock(q, i + 1)));
  }

  const cover = (
    `<div class="cover">`
    + `<div class="kicker">Statistics Paper II &middot; 2027 Forecast</div>`
    + `<h1>${esc(title)}</h1>`
    + `<div class="subtitle">${esc(subtitle)}</div>`
    + `<div class="stats">`
    + `<div class="stat"><b>${total}</b><span>Forecast Questions</span></div>`
    + `<div class="stat"><b>${topics.length}</b><span>Topics Covered</span></div>`
    + `</div>`
    + `<div class="notice"><b>FORECAST &middot; AI-GENERATED</b>${esc(noticeText)}</div>`
    + `</div>`
  );
  const toc = `<div class="toc"><h2>Contents</h2>${tocRows}</div>`;
  const footer = `<div class="footer">Generated offline for personal exam preparation &middot; not an authentic UPSC paper</div>`;

  return (
    `<!doctype html><html><head><meta charset="utf-8"><title>${esc(title)}</title><style>${PRINT_CSS}</style></head><body>`
    + cover + toc + bodyParts.join('') + footer
    + `</body></html>`
  );
}

const NOTICE = (
  ' No problem is copied from a past paper. Every explanatory note is an '
  + 'AI-derived shortcut, independently generated and verified by the '
  + 'builder of this platform, not an official answer key.'
);

function main() {
  const data = loadForecast();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const lm = data.filter(q => q.section === 'Linear Models').sort((a, b) => a.set - b.set || a.id.localeCompare(b.id));
  const inf = data.filter(q => q.section === 'Estimation' || q.section === 'Hypothesis Testing')
    .sort((a, b) => (a.section === b.section ? 0 : a.section === 'Estimation' ? -1 : 1) || a.set - b.set || a.id.localeCompare(b.id));

  const lmHtml = buildPdfHtml(
    'Linear Models — 2027 Forecast',
    `${lm.length} examiner-style forecast questions with exam shortcut and answer key`,
    NOTICE, lm);
  const infHtml = buildPdfHtml(
    'Statistical Inference — 2027 Forecast',
    `${inf.length} forecast questions across Estimation and Hypothesis Testing, with exam shortcut and answer key`,
    NOTICE, inf);

  const lmPath = path.join(OUT_DIR, 'Forecast-Linear-Models.html');
  const infPath = path.join(OUT_DIR, 'Forecast-Statistical-Inference.html');
  fs.writeFileSync(lmPath, lmHtml);
  fs.writeFileSync(infPath, infHtml);
  console.log('Wrote', lmPath, `(${lm.length} questions)`);
  console.log('Wrote', infPath, `(${inf.length} questions)`);
}

main();
