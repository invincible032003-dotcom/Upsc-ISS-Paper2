# -*- coding: utf-8 -*-
"""Builds a single print-ready, self-contained HTML page for one PDF
document (one PYQ unit or one forecast section), organized topic-wise.

The page embeds the exact same math/richtext renderer used by the live
dashboard (build/pdf/renderer.js) and a small body-building script that
walks the embedded question data client-side - so the PDF's math notation
is pixel-identical to what a user sees in the app itself. A headless
browser (see build/pdf/make_pdfs.js) then loads this file and prints it
to PDF; nothing here depends on the network.
"""
import html
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(HERE, "renderer.js"), encoding="utf-8") as f:
    RENDERER_JS = f.read()

PRINT_CSS = r"""
@page { size: A4; margin: 20mm 16mm 18mm 16mm; }
*{box-sizing:border-box;}
body{
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  color:#16181f; font-size:11.5px; line-height:1.5; margin:0;
}
.serif-math{font-family:"Cambria Math",Cambria,"Times New Roman",Georgia,serif;}
.cover{ min-height:240mm; display:flex; flex-direction:column; justify-content:center; page-break-after:always; }
.cover .kicker{font-size:12px; text-transform:uppercase; letter-spacing:.12em; color:#5b6472; font-weight:700; margin-bottom:10px;}
.cover h1{font-size:30px; margin:0 0 10px; color:#123763;}
.cover h2{font-size:16px; margin:0 0 26px; color:#5b6472; font-weight:500;}
.cover .stats{display:flex; gap:26px; margin-bottom:26px;}
.cover .stat b{display:block; font-size:22px; color:#123763;}
.cover .stat span{font-size:11px; text-transform:uppercase; letter-spacing:.05em; color:#5b6472;}
.cover .notice{border:1.5px solid #f2d9a6; background:#fff8e8; border-radius:8px; padding:14px 16px; font-size:12px; color:#5b4400; max-width:150mm;}
.cover .notice.forecast{border-color:#f2c6c2; background:#fdecea; color:#7a1f19;}
.cover .notice b{display:block; margin-bottom:4px; font-size:12.5px;}
.toc{page-break-after:always;}
.toc h2{font-size:18px; color:#123763; border-bottom:2px solid #123763; padding-bottom:6px; margin-bottom:14px;}
.toc-row{display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px dotted #dde1e7; font-size:12.5px;}
.toc-row .n{color:#5b6472;}
.topic-heading{page-break-before:always; font-size:19px; color:#fff; background:#123763; padding:10px 14px; border-radius:6px; margin:0 0 4px;}
.topic-heading:first-of-type{page-break-before:auto;}
.topic-meta{font-size:11.5px; color:#5b6472; margin:6px 0 14px;}
.subtopic-heading{font-size:14px; color:#123763; font-weight:700; margin:20px 0 10px; padding-bottom:4px; border-bottom:1.5px solid #c8dcf7;}
.qblock{border:1px solid #dde1e7; border-radius:8px; padding:12px 14px; margin-bottom:12px; break-inside:avoid; page-break-inside:avoid;}
.qmeta{margin-bottom:6px;}
.badge{display:inline-block; padding:2px 7px; border-radius:999px; font-size:9.5px; font-weight:700; background:#f4f5f7; border:1px solid #dde1e7; color:#5b6472; margin-right:4px;}
.badge-forecast{background:#fff4e0; color:#8a5a00; border-color:#f2d9a6;}
.qtext{font-size:12.5px; margin:4px 0 8px; line-height:1.6;}
.shared-stem{background:#f8f9fb; border:1px dashed #dde1e7; border-radius:6px; padding:8px 10px; margin-bottom:8px; font-size:11.5px;}
.shared-stem .tag{font-size:9px; text-transform:uppercase; color:#5b6472; font-weight:700; display:block; margin-bottom:3px;}
.trailing-note{font-size:10.5px; color:#5b6472; font-style:italic; margin:4px 0 8px;}
.opts{margin:0 0 8px;}
.opt{display:flex; gap:6px; padding:4px 8px; border-radius:5px; font-size:11.5px; margin-bottom:3px;}
.opt .lab{font-weight:700; flex:none; width:14px;}
.opt.correct{background:#e8f7ee; color:#0c4d29;}
.opt.correct .lab::after{content:" \2713";}
.answer-line{font-size:11px; font-weight:700; color:#0c7a3f; margin-bottom:8px;}
.block{background:#f8f9fb; border:1px solid #dde1e7; border-radius:6px; padding:8px 10px; margin-bottom:6px; font-size:11px;}
.block h4{margin:0 0 5px; font-size:9.5px; text-transform:uppercase; letter-spacing:.04em; color:#5b6472;}
.block ol, .block ul{margin:0; padding-left:16px;}
.block li{margin-bottom:3px;}
.source-note{font-size:10px; background:#fdecea; border:1px solid #f2c6c2; color:#7a1f19; padding:6px 8px; border-radius:6px; margin-top:6px;}
footer.pagefoot{position:fixed; bottom:-14mm; left:0; right:0; text-align:center; font-size:9px; color:#8791a0;}
/* math renderer styles, copied from styles.css's math section (print/light only) */
.mathblock{display:block; text-align:center; margin:6px 0; font-size:1.05em;}
.mathinline{font-style:normal;}
.math{font-family:"Cambria Math",Cambria,"Times New Roman",Georgia,serif; font-style:italic; white-space:nowrap; display:inline-block; vertical-align:middle;}
.math .upright{font-style:normal; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}
.math .op{font-style:normal; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; padding:0 .1em;}
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
.math .decorate-dot{position:relative; display:inline-block;}
.math .decorate-dot::before{content:"."; position:absolute; left:50%; top:-.62em; transform:translateX(-50%); font-size:1em; font-weight:700;}
.math .decorate-vec{position:relative; display:inline-block;}
.math .decorate-vec::before{content:"\2192"; position:absolute; left:50%; top:-.78em; transform:translateX(-50%); font-size:.65em;}
.math .matrix, .math .cases{display:inline-flex; align-items:center; vertical-align:middle; font-style:italic;}
.math .mtable, .math .ctable{display:inline-table; vertical-align:middle; border-collapse:collapse;}
.math .mrow, .math .crow{display:table-row;}
.math .mcell, .math .ccell{display:table-cell; padding:1px 8px; text-align:center; white-space:nowrap; vertical-align:middle;}
.math .ccell.case-cond{text-align:left; padding-left:14px; font-style:normal; font-size:.92em; color:#5b6472;}
.math .bracket{font-size:1.5em; font-style:normal; padding:0 .04em; transform:scaleY(1.15); display:inline-block;}
.math .brace-big{font-size:1.9em; font-style:normal; padding-right:.08em; display:inline-block;}
.math .space-quad{display:inline-block; width:.9em;}
.math .space-qquad{display:inline-block; width:1.7em;}
.richtext table{border-collapse:collapse; margin:8px 0; font-size:11px;}
.richtext table td, .richtext table th{border:1px solid #dde1e7; padding:4px 7px;}
.richtext table th{background:#f4f5f7;}
.richtext p{margin:0 0 6px;}
.richtext strong{font-weight:700;}
"""


def esc(s):
    return html.escape(str(s), quote=True)


def build_page(title, subtitle, notice_html, notice_class, stats, toc_rows, groups, footer_text, is_forecast):
    """groups: list of (topic_name, topic_count, [(subtopic_name, [question_dict,...]), ...])"""
    stats_html = "".join(
        '<div class="stat"><b>%s</b><span>%s</span></div>' % (esc(v), esc(k)) for k, v in stats
    )
    toc_html = "".join(
        '<div class="toc-row"><span>%s</span><span class="n">%s items</span></div>' % (esc(name), n)
        for name, n in toc_rows
    )
    data_payload = json.dumps(groups, ensure_ascii=False)

    body_script = r"""
function buildPage(groups, isForecast){
  var root = document.getElementById("content-root");
  var out = [];
  groups.forEach(function(topicGroup){
    var topicName = topicGroup[0], topicCount = topicGroup[1], subtopics = topicGroup[2];
    out.push('<div class="topic-heading">'+escapeHtmlPlain(topicName)+'</div>');
    out.push('<div class="topic-meta">'+topicCount+' item(s) in this topic</div>');
    subtopics.forEach(function(sub){
      var subName = sub[0], qs = sub[1];
      out.push('<div class="subtopic-heading">'+escapeHtmlPlain(subName)+'</div>');
      qs.forEach(function(q){
        out.push(renderQuestionBlock(q, isForecast));
      });
    });
  });
  root.innerHTML = out.join("");
}
function renderQuestionBlock(q, isForecast){
  var badges = isForecast
    ? badge(q.section) + badge(q.topic) + badge(q.subtopic) + badge(q.questionType)
    : badge(q.year+" Q"+q.questionNumber) + badge(q.unit) + badge(q.topic) + badge(q.questionType);
  var forecastTag = isForecast ? badge("FORECAST / AI-GENERATED", "badge-forecast") : "";
  var sharedStemHtml = q.sharedStem ? '<div class="shared-stem"><span class="tag">Shared context</span>'+renderRich(q.sharedStem)+'</div>' : "";
  var trailingHtml = q.trailingNote ? '<div class="trailing-note">'+renderQuestionText(q.trailingNote)+'</div>' : "";
  var optsHtml = q.options.map(function(opt, idx){
    var cls = "opt"+(idx===q.correctAnswer?" correct":"");
    return '<div class="'+cls+'"><span class="lab">'+"ABCD"[idx]+'.</span><span>'+renderQuestionText(opt)+'</span></div>';
  }).join("");
  var tipsHtml = (q.tipsTricks||[]).map(function(t){return "<li>"+renderQuestionText(t)+"</li>";}).join("");
  var solHtml = (q.solution||[]).map(function(s){return "<li>"+renderQuestionText(s.text)+"</li>";}).join("");
  var sourceNote = q.sourceAmbiguityNote ? '<div class="source-note"><b>Source note:</b> '+renderQuestionText(q.sourceAmbiguityNote)+'</div>' : "";
  return ''
    + '<div class="qblock">'
    +   '<div class="qmeta">'+badges+forecastTag+'</div>'
    +   sharedStemHtml
    +   '<div class="qtext">'+renderRich(q.question)+'</div>'
    +   trailingHtml
    +   '<div class="opts">'+optsHtml+'</div>'
    +   '<div class="answer-line">Correct answer: '+"ABCD"[q.correctAnswer]+'</div>'
    +   '<div class="block"><h4>Exam Shortcut (AI-derived)</h4>'+renderQuestionText(q.examShortcut||"Not available.")+'</div>'
    +   (tipsHtml ? '<div class="block"><h4>Tips &amp; Tricks</h4><ul>'+tipsHtml+'</ul></div>' : "")
    +   (solHtml ? '<div class="block"><h4>Step-by-Step Solution</h4><ol>'+solHtml+'</ol></div>' : "")
    +   sourceNote
    + '</div>';
}
function badge(text, cls){ return '<span class="badge '+(cls||"")+'">'+escapeHtmlPlain(text)+'</span>'; }
"""

    return """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>%(title)s</title>
<style>%(css)s</style>
</head>
<body>
<div class="cover">
  <div class="kicker">ISS Statistics Paper II - Offline Study Guide</div>
  <h1>%(title)s</h1>
  <h2>%(subtitle)s</h2>
  <div class="stats">%(stats)s</div>
  <div class="notice %(notice_class)s"><b>%(notice_head)s</b>%(notice_body)s</div>
</div>
<div class="toc">
  <h2>Contents (by topic)</h2>
  %(toc)s
</div>
<div id="content-root"></div>
<footer class="pagefoot">%(footer)s</footer>
<script>%(renderer_js)s</script>
<script>
%(body_script)s
buildPage(%(data)s, %(is_forecast)s);
</script>
</body>
</html>""" % {
        "title": esc(title),
        "css": PRINT_CSS,
        "subtitle": esc(subtitle),
        "stats": stats_html,
        "notice_class": notice_class,
        "notice_head": "AI-DERIVED EXPLANATIONS" if not is_forecast else "FORECAST - AI-GENERATED, NOT AN AUTHENTIC PYQ",
        "notice_body": esc(notice_html),
        "toc": toc_html,
        "footer": esc(footer_text),
        "renderer_js": RENDERER_JS,
        "body_script": body_script,
        "data": data_payload,
        "is_forecast": "true" if is_forecast else "false",
    }
