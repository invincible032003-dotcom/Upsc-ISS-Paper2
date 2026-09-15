// AUTO-EXTRACTED from ISS-Statistics-II-Mock/index.html (sections 2-4:
// escapeHtmlPlain + the mini LaTeX math renderer + the markdown-lite rich
// text renderer). Used ONLY by the PDF-generation build step (build/pdf/) -
// kept as a literal copy rather than a shared include so the shipped
// dashboard in ISS-Statistics-II-Mock/ stays a single self-contained
// index.html with no extra runtime file. If the renderer in index.html is
// ever changed, re-run build/pdf/extract_renderer.py to resync this copy.

function escapeHtmlPlain(s){
  return String(s).replace(/[&<>]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;"}[c]; });
}

/* =========================================================================
   3. MINI LaTeX -> HTML MATH RENDERER (offline-safe, no external libs)
   ========================================================================= */
var GREEK_MAP = {
  theta:"θ", Theta:"Θ", mu:"μ", beta:"β", sigma:"σ", Sigma:"Σ",
  alpha:"α", lambda:"λ", Lambda:"Λ", varepsilon:"ε", epsilon:"ε", gamma:"γ", Gamma:"Γ",
  pi:"π", Pi:"Π", chi:"χ", phi:"φ", varphi:"φ", Phi:"Φ", rho:"ρ", delta:"δ", Delta:"Δ",
  omega:"ω", Omega:"Ω", tau:"τ", eta:"η", psi:"ψ", Psi:"Ψ", zeta:"ζ",
  kappa:"κ", nu:"ν", xi:"ξ", Xi:"Ξ", upsilon:"υ", Upsilon:"Υ", iota:"ι"
};
var SYM_MAP = {
  le:"≤", leq:"≤", ge:"≥", geq:"≥", ne:"≠", neq:"≠", approx:"≈",
  equiv:"≡", to:"→", sim:"∼", in:"∈", notin:"∉", mid:"∣", pm:"±", mp:"∓",
  times:"×", cdot:"⋅", infty:"∞", partial:"∂", ldots:"…", dots:"…",
  cdots:"⋯", vdots:"⋮", ddots:"⋱", Rightarrow:"⇒", Leftarrow:"⇐",
  leftrightarrow:"↔", Leftrightarrow:"⇔", forall:"∀", exists:"∃", emptyset:"∅", cup:"∪", cap:"∩",
  subset:"⊂", subseteq:"⊆", supset:"⊃", propto:"∝", perp:"⊥", angle:"∠",
  therefore:"∴", because:"∵", star:"★", circ:"∘", oplus:"⊕", otimes:"⊗",
  mapsto:"↦", gg:"≫", ll:"≪", iff:"⟺", ell:"ℓ"
};
var NOT_MAP = {equiv:"≢", Rightarrow:"⇏", subset:"⊄", subseteq:"⊈", supset:"⊅", supseteq:"⊉", in:"∉", ge:"≱", geq:"≱", le:"≰", leq:"≰", approx:"≉", sim:"≁", exists:"∄", to:"↛"};
var OP_NAMES = {log:1, ln:1, exp:1, max:1, min:1, lim:1, sup:1, inf:1, det:1, gcd:1, arg:1, tan:1, sin:1, cos:1, argmax:1, argmin:1, Var:1, Cov:1, Bias:1, MSE:1, Corr:1, dim:1};
/* Per amsmath convention, these "movable limits" operators stack their
   sub/superscript directly above/below the operator name in display
   style, exactly like \sum/\int/\prod - but keep side scripts in text/
   inline style. det/arg/log/ln/exp/sin/cos/tan etc. always use side
   scripts regardless of style. */
var STACKING_OPS = {gcd:1, inf:1, lim:1, max:1, min:1, sup:1};
var BIGOPS = {sum:"∑", prod:"∏", int:"∫", oint:"∮"};
var RENDER_DISPLAY = false;
var MATHBB_MAP = {R:"ℝ", N:"ℕ", Z:"ℤ", Q:"ℚ", C:"ℂ", E:"ᵐᵉ".length? "𝔼":"E", P:"ℙ", V:"𝕍"};
var MATHCAL_MAP = {A:"𝒜",B:"ℬ",C:"𝒞",D:"𝒟",E:"ℰ",F:"ℱ",G:"𝒢",H:"ℋ",I:"ℐ",J:"𝒥",K:"𝒦",L:"ℒ",M:"ℳ",N:"𝒩",O:"𝒪",P:"𝒫",Q:"𝒬",R:"ℛ",S:"𝒮",T:"𝒯",U:"𝒰",V:"𝒱",W:"𝒲",X:"𝒳",Y:"𝒴",Z:"𝒵"};
var BRACKET_OPEN = {"":"{","":"(","":"[","":"|","":"‖"};
var BRACKET_CLOSE = {"":"}","":")","":"]","":"|","":"‖"};

function preprocessLatex(s){
  return s
    .replace(/\\\\\s*\[[^\]]*\]/g, "\\\\")
    .replace(/\\left\s*\\\{/g, "")
    .replace(/\\right\s*\\\}/g, "")
    .replace(/\\left\s*\(/g, "")
    .replace(/\\right\s*\)/g, "")
    .replace(/\\left\s*\[/g, "")
    .replace(/\\right\s*\]/g, "")
    .replace(/\\left\s*\|/g, "")
    .replace(/\\right\s*\|/g, "")
    .replace(/\\left\s*\\\|/g, "")
    .replace(/\\right\s*\\\|/g, "")
    .replace(/\\left\s*\./g, "")
    .replace(/\\right\s*\./g, "")
    .replace(/\\,/g, " ")
    .replace(/\\;/g, " ")
    .replace(/\\!/g, "")
    .replace(/\\%/g, "%")
    .replace(/\\(?:Bigg|bigg|Big|big)[lr]?(?![a-zA-Z])/g, "")
    .replace(/\\xrightarrow/g, "\\to");
}

function tokenizeLatex(s){
  var tokens = [];
  var i = 0, n = s.length;
  while(i < n){
    var c = s[i];
    if(c === "\\"){
      if(s[i+1] === "\\"){ tokens.push({t:"LINEBREAK"}); i+=2; continue; }
      var j = i+1, name = "";
      while(j<n && /[a-zA-Z]/.test(s[j])){ name += s[j]; j++; }
      if(name.length>0){ tokens.push({t:"CMD", name:name}); i=j; continue; }
      var esc = s[i+1] || "";
      tokens.push({t:"TEXT", v: esc}); i += 2; continue;
    }
    if(c === "{"){ tokens.push({t:"LBRACE"}); i++; continue; }
    if(c === "}"){ tokens.push({t:"RBRACE"}); i++; continue; }
    if(c === "_"){ tokens.push({t:"SUB"}); i++; continue; }
    if(c === "^"){ tokens.push({t:"SUP"}); i++; continue; }
    if(c === "&"){ tokens.push({t:"AMP"}); i++; continue; }
    if(c === "~"){ tokens.push({t:"TEXT", v:" "}); i++; continue; }
    var k = i, buf = "";
    while(k<n && "\\{}_^&~".indexOf(s[k]) === -1){ buf += s[k]; k++; }
    tokens.push({t:"TEXT", v: buf});
    i = k;
  }
  return tokens;
}

function MathParser(tokens){
  this.toks = tokens;
  this.pos = 0;
}
MathParser.prototype.peek = function(off){ return this.toks[this.pos + (off||0)]; };
MathParser.prototype.next = function(){ return this.toks[this.pos++]; };
MathParser.prototype.atEnd = function(){ return this.pos >= this.toks.length; };

MathParser.prototype.parseSequence = function(stop){
  var nodes = [];
  while(!this.atEnd() && !stop(this.peek())){
    nodes.push(this.parseAtomWithScripts());
  }
  return nodes;
};

MathParser.prototype.parseAtomWithScripts = function(){
  var atom = this.parseAtom();
  var sub=null, sup=null, guard=0;
  while(guard++<4){
    var t = this.peek();
    if(t && t.t==="SUB" && !sub){ this.next(); sub = this.readArg(); }
    else if(t && t.t==="SUP" && !sup){ this.next(); sup = this.readArg(); }
    else break;
  }
  if(sub || sup) return {type:"scripts", base:atom, sub:sub, sup:sup};
  return atom;
};

MathParser.prototype.readArg = function(){
  var t = this.peek();
  if(t && t.t==="LBRACE"){
    this.next();
    var body = this.parseSequence(function(tk){ return tk.t==="RBRACE"; });
    this.next();
    return {type:"group", body: body};
  }
  /* A bare (un-braced) argument is exactly ONE character in real LaTeX
     (e.g. x_12 means x-sub-1 followed by literal "2"), but our tokenizer
     merges runs of plain characters into a single TEXT token for
     simplicity elsewhere - so split off just the first character here
     and leave the remainder in place for continued parsing. Per LaTeX's
     own grammar, whitespace right after a control word (\bar y, \hat p)
     is an insignificant separator, not part of the argument - skip any
     leading spaces in that token first, otherwise \bar/\hat/etc. would
     decorate a blank space and leave the real letter undecorated. */
  if(t && t.t==="TEXT"){
    var lead = 0;
    while(lead < t.v.length && t.v.charAt(lead) === " ") lead++;
    if(lead > 0) t.v = t.v.slice(lead);
    if(t.v.length > 1){
      var first = t.v.charAt(0);
      t.v = t.v.slice(1);
      return {type:"text", v:first};
    }
  }
  return this.parseAtom();
};

MathParser.prototype.parseEnvBody = function(envName){
  var self = this;
  var nodes = [];
  while(!this.atEnd()){
    var t = this.peek();
    if(t.t==="CMD" && t.name==="end" && this.peek(1) && this.peek(1).t==="LBRACE" &&
       this.peek(2) && this.peek(2).t==="TEXT" && this.peek(2).v===envName &&
       this.peek(3) && this.peek(3).t==="RBRACE"){
      this.pos += 4;
      break;
    }
    nodes.push(this.parseAtomWithScripts());
  }
  return nodes;
};

function splitRows(nodes){
  var rows = [[]]; var cur = 0;
  nodes.forEach(function(nd){
    if(nd.type==="linebreak"){ rows.push([]); cur++; return; }
    rows[cur].push(nd);
  });
  return rows.map(function(row){
    var cells = [[]]; var c = 0;
    row.forEach(function(nd){
      if(nd.type==="amp"){ cells.push([]); c++; return; }
      cells[c].push(nd);
    });
    return cells;
  });
}

MathParser.prototype.parseAtom = function(){
  var tok = this.next();
  if(!tok) return {type:"text", v:""};
  if(tok.t==="TEXT") return {type:"text", v: tok.v};
  if(tok.t==="AMP") return {type:"amp"};
  if(tok.t==="LINEBREAK") return {type:"linebreak"};
  if(tok.t==="LBRACE"){
    var body = this.parseSequence(function(tk){ return tk.t==="RBRACE"; });
    this.next();
    return {type:"group", body: body};
  }
  if(tok.t==="RBRACE") return {type:"text", v:""};
  if(tok.t==="CMD") return this.parseCommand(tok.name);
  return {type:"text", v:""};
};

MathParser.prototype.parseCommand = function(name){
  if(GREEK_MAP.hasOwnProperty(name)) return {type:"sym", v: GREEK_MAP[name]};
  if(SYM_MAP.hasOwnProperty(name)) return {type:"sym", v: SYM_MAP[name]};
  if(BIGOPS.hasOwnProperty(name)){
    return {type:"bigop", v: BIGOPS[name]};
  }
  if(OP_NAMES.hasOwnProperty(name)) return {type:"op", name: name};
  if(name==="quad") return {type:"space", size:"quad"};
  if(name==="qquad") return {type:"space", size:"qquad"};
  if(name==="displaystyle" || name==="textstyle" || name==="scriptstyle" || name==="limits" || name==="nolimits") return {type:"noop"};
  if(name==="frac" || name==="dfrac" || name==="tfrac"){
    var num = this.readArg(); var den = this.readArg();
    return {type:"frac", num:num, den:den};
  }
  if(name==="sqrt"){
    var body = this.readArg();
    return {type:"sqrt", body: body};
  }
  if(name==="binom" || name==="dbinom" || name==="tbinom"){
    var top = this.readArg(); var bot = this.readArg();
    return {type:"binom", top:top, bottom:bot};
  }
  if(name==="text" || name==="mathrm" || name==="operatorname"){
    var arg = this.readArg();
    return {type:"decorate", deco:"upright", body: arg};
  }
  if(name==="mathbf" || name==="boldsymbol" || name==="bm"){
    var b = this.readArg();
    return {type:"decorate", deco:"bold", body: b};
  }
  if(name==="mathbb"){
    var bb = this.readArg();
    return {type:"decorate", deco:"bb", body: bb};
  }
  if(name==="mathcal" || name==="mathscr"){
    var cal = this.readArg();
    return {type:"decorate", deco:"cal", body: cal};
  }
  if(name==="bar" || name==="overline"){
    var barb = this.readArg();
    return {type:"decorate", deco:"bar", body: barb};
  }
  if(name==="hat" || name==="widehat"){
    var hatb = this.readArg();
    return {type:"decorate", deco:"hat", body: hatb};
  }
  if(name==="tilde" || name==="widetilde"){
    var tb = this.readArg();
    return {type:"decorate", deco:"tilde", body: tb};
  }
  if(name==="dot"){
    var db = this.readArg();
    return {type:"decorate", deco:"dot", body: db};
  }
  if(name==="vec"){
    var vb = this.readArg();
    return {type:"decorate", deco:"vec", body: vb};
  }
  if(name==="underline"){
    var ub = this.readArg();
    return {type:"decorate", deco:"under", body: ub};
  }
  if(name==="underbrace"){
    var ubb = this.readArg();
    return {type:"underbrace", body: ubb};
  }
  if(name==="stackrel"){
    var srTop = this.readArg(); var srBottom = this.readArg();
    return {type:"stackrel", top: srTop, bottom: srBottom};
  }
  if(name==="not"){
    var nt = this.peek();
    if(nt && nt.t==="CMD" && NOT_MAP.hasOwnProperty(nt.name)){
      this.next();
      return {type:"sym", v: NOT_MAP[nt.name]};
    }
    return {type:"sym", v:"̸"};
  }
  if(name==="begin"){
    this.next(); /* LBRACE */
    var envTok = this.next(); /* TEXT env name */
    this.next(); /* RBRACE */
    var envName = envTok ? envTok.v : "";
    var body = this.parseEnvBody(envName);
    var rows = splitRows(body);
    if(envName==="cases") return {type:"cases", rows: rows};
    return {type:"matrix", rows: rows, envName: envName};
  }
  /* Unknown command: safe fallback, render the command name as upright text */
  return {type:"op", name: name};
};

function renderNodes(nodes){
  return nodes.map(renderNode).join("");
}
function bracketSize(rowCount){
  return Math.min(1.5 + Math.max(0,rowCount-1)*0.62, 3.4).toFixed(2)+"em";
}
function braceSize(rowCount){
  return Math.min(1.3 + Math.max(0,rowCount-1)*0.6, 3.4).toFixed(2)+"em";
}
function htmlForTextValue(v){
  var out = ""; var i=0, n=v.length;
  while(i<n){
    var ch = v[i];
    if(BRACKET_OPEN[ch]){ out += '<span class="bracket">'+BRACKET_OPEN[ch]+'</span>'; i++; continue; }
    if(BRACKET_CLOSE[ch]){ out += '<span class="bracket">'+BRACKET_CLOSE[ch]+'</span>'; i++; continue; }
    if(/[0-9.]/.test(ch)){
      var j=i, buf="";
      while(j<n && /[0-9.]/.test(v[j])){ buf+=v[j]; j++; }
      out += '<span class="upright">'+escapeHtmlPlain(buf)+'</span>';
      i=j; continue;
    }
    var k=i, plain="";
    while(k<n && !/[0-9.]/.test(v[k]) && !BRACKET_OPEN[v[k]] && !BRACKET_CLOSE[v[k]]){ plain+=v[k]; k++; }
    out += escapeHtmlPlain(plain);
    i=k;
  }
  return out;
}
function singleLetterOf(node){
  /* \mathbb{R} / \mathcal{R} always arrive braced, so readArg() wraps the
     argument as {type:"group", body:[...]}, never the bare {type:"text"}
     shape - unwrap that one level so the single-letter font-variant maps
     below actually match instead of silently falling back to plain text. */
  if(!node) return null;
  if(node.type==="text" && node.v.length===1) return node.v;
  if(node.type==="group" && node.body && node.body.length===1){
    var inner = node.body[0];
    if(inner.type==="text" && inner.v.length===1) return inner.v;
  }
  return null;
}
function renderNode(node){
  switch(node.type){
    case "text": return htmlForTextValue(node.v);
    case "sym": return escapeHtmlPlain(node.v);
    case "op": return '<span class="op">'+escapeHtmlPlain(node.name)+'</span>';
    case "bigop": return '<span class="bigop">'+node.v+'</span>';
    case "space": return node.size==="qquad" ? '<span class="space-qquad"></span>' : '<span class="space-quad"></span>';
    case "noop": return "";
    case "amp": return "";
    case "linebreak": return "";
    case "group": return renderNodes(node.body);
    case "scripts": {
      var supH = node.sup ? renderNode(node.sup) : "";
      var subH = node.sub ? renderNode(node.sub) : "";
      var baseIsBigop = node.base.type === "bigop";
      var baseIsStackingOp = node.base.type === "op" && STACKING_OPS.hasOwnProperty(node.base.name);
      if((baseIsBigop || baseIsStackingOp) && RENDER_DISPLAY){
        var baseH = renderNode(node.base);
        var stack = '<span class="opstack">';
        if(node.sup) stack += '<span class="opstack-sup">'+supH+'</span>';
        stack += '<span class="opstack-mid">'+baseH+'</span>';
        if(node.sub) stack += '<span class="opstack-sub">'+subH+'</span>';
        stack += '</span>';
        return stack;
      }
      var base = renderNode(node.base);
      if(node.sup && node.sub) return base + '<sup>'+supH+'</sup><sub>'+subH+'</sub>';
      if(node.sup) return base + '<sup>'+supH+'</sup>';
      if(node.sub) return base + '<sub>'+subH+'</sub>';
      return base;
    }
    case "frac":
      return '<span class="frac"><span class="num">'+renderNode(node.num)+'</span><span class="den">'+renderNode(node.den)+'</span></span>';
    case "sqrt":
      return '<span class="sqrt"><span class="radical">√</span><span class="sqrt-body">'+renderNode(node.body)+'</span></span>';
    case "binom":
      return '<span class="bracket">(</span><span class="binom-stack"><span class="binom-top">'+renderNode(node.top)+'</span><span class="binom-bottom">'+renderNode(node.bottom)+'</span></span><span class="bracket">)</span>';
    case "underbrace":
      return '<span class="underbrace-wrap"><span class="underbrace-body">'+renderNode(node.body)+'</span><span class="underbrace-brace">⏟</span></span>';
    case "stackrel":
      return '<span class="stackrel-wrap"><span class="stackrel-top">'+renderNode(node.top)+'</span><span class="stackrel-bottom">'+renderNode(node.bottom)+'</span></span>';
    case "decorate": {
      var body = renderNode(node.body);
      switch(node.deco){
        case "bar": return '<span class="decorate-bar">'+body+'</span>';
        case "hat": return '<span class="decorate-hat">'+body+'</span>';
        case "tilde": return '<span class="decorate-tilde">'+body+'</span>';
        case "dot": return '<span class="decorate-dot">'+body+'</span>';
        case "vec": return '<span class="decorate-vec">'+body+'</span>';
        case "under": return '<span style="text-decoration:underline;">'+body+'</span>';
        case "upright": return '<span class="upright">'+body+'</span>';
        case "bold": return '<b>'+body+'</b>';
        case "bb": {
          var bbLetter = singleLetterOf(node.body);
          if(bbLetter && MATHBB_MAP[bbLetter]){
            return escapeHtmlPlain(MATHBB_MAP[bbLetter]);
          }
          return '<b>'+body+'</b>';
        }
        case "cal": {
          var calLetter = singleLetterOf(node.body);
          if(calLetter && MATHCAL_MAP[calLetter]){
            return escapeHtmlPlain(MATHCAL_MAP[calLetter]);
          }
          return '<span class="upright">'+body+'</span>';
        }
        default: return body;
      }
    }
    case "matrix": {
      /* Rendered with span + CSS display:table*, never a real <table>/<tr>/<td>:
         a literal <table> tag inside an open <p> forces the HTML parser to
         implicitly close that <p> (and everything nested above it, spans
         included) before the table, mangling the surrounding markup - see
         renderRich(), which wraps shared-stem text in <p>...</p>. Spans with
         CSS table display are pure phrasing content and never trigger that. */
      var open = node.envName==="bmatrix" ? "[" : node.envName==="vmatrix" ? "|" : node.envName==="Bmatrix" ? "{" : "(";
      var close = node.envName==="bmatrix" ? "]" : node.envName==="vmatrix" ? "|" : node.envName==="Bmatrix" ? "}" : ")";
      var rowsHtml = node.rows.map(function(row){
        return '<span class="mrow">' + row.map(function(cell){ return '<span class="mcell">'+renderNodes(cell)+'</span>'; }).join("") + '</span>';
      }).join("");
      var bsz = bracketSize(node.rows.length);
      return '<span class="matrix"><span class="bracket" style="font-size:'+bsz+'">'+open+'</span><span class="mtable">'+rowsHtml+'</span><span class="bracket" style="font-size:'+bsz+'">'+close+'</span></span>';
    }
    case "cases": {
      var rowsHtml2 = node.rows.map(function(row){
        return '<span class="crow">' + row.map(function(cell,ci){
          return '<span class="ccell'+(ci>0?" case-cond":"")+'">'+renderNodes(cell)+"</span>";
        }).join("") + '</span>';
      }).join("");
      return '<span class="cases"><span class="brace-big" style="font-size:'+braceSize(node.rows.length)+'">{</span><span class="ctable">'+rowsHtml2+'</span></span>';
    }
    default: return "";
  }
}

function renderMathToHtml(latexSrc, isDisplay){
  var prevDisplay = RENDER_DISPLAY;
  try{
    RENDER_DISPLAY = !!isDisplay;
    var pre = preprocessLatex(latexSrc);
    var toks = tokenizeLatex(pre);
    var parser = new MathParser(toks);
    var nodes = parser.parseSequence(function(){ return false; });
    var html = renderNodes(nodes);
    RENDER_DISPLAY = prevDisplay;
    if(isDisplay) return '<span class="mathblock"><span class="math">'+html+'</span></span>';
    return '<span class="math mathinline">'+html+'</span>';
  }catch(e){
    RENDER_DISPLAY = prevDisplay;
    var raw = isDisplay ? ("$$"+latexSrc+"$$") : ("$"+latexSrc+"$");
    return '<span style="font-family:var(--mono);">'+escapeHtmlPlain(raw)+'</span>';
  }
}

/* =========================================================================
   4. RICH TEXT (markdown-lite tables + bold + inline/display math)
   ========================================================================= */
function processInlineMath(raw){
  var tokens = [];
  var replaced = raw.replace(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g, function(m, disp, inl){
    var html = (disp!==undefined) ? renderMathToHtml(disp, true) : renderMathToHtml(inl, false);
    tokens.push(html);
    return "M"+(tokens.length-1)+"";
  });
  var escaped = escapeHtmlPlain(replaced);
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  escaped = escaped.replace(/\n/g, "<br>");
  escaped = escaped.replace(/M(\d+)/g, function(m, i){ return tokens[Number(i)]; });
  return escaped;
}
function isTableLine(line){ return /^\s*\|/.test(line); }
function renderMarkdownTable(lines){
  var rows = lines.filter(function(l){ return l.trim().length>0; }).map(function(l){
    var t = l.trim();
    if(t.charAt(0)==="|") t = t.slice(1);
    if(t.charAt(t.length-1)==="|") t = t.slice(0,-1);
    return t.split("|").map(function(c){ return c.trim(); });
  });
  if(rows.length && rows[1] && rows[1].every(function(c){ return /^:?-+:?$/.test(c); })){
    var head = rows[0], body = rows.slice(2);
    var thead = "<thead><tr>"+head.map(function(c){ return "<th>"+processInlineMath(c)+"</th>"; }).join("")+"</tr></thead>";
    var tbody = "<tbody>"+body.map(function(r){ return "<tr>"+r.map(function(c){ return "<td>"+processInlineMath(c)+"</td>"; }).join("")+"</tr>"; }).join("")+"</tbody>";
    return "<table>"+thead+tbody+"</table>";
  }
  var tbody2 = "<tbody>"+rows.map(function(r){ return "<tr>"+r.map(function(c){ return "<td>"+processInlineMath(c)+"</td>"; }).join("")+"</tr>"; }).join("")+"</tbody>";
  return "<table>"+tbody2+"</table>";
}
function renderRich(raw){
  if(!raw) return "";
  var lines = String(raw).split("\n");
  var out = []; var buf = []; var tbl = [];
  function flushText(){
    if(buf.length){
      out.push("<p>"+processInlineMath(buf.join("\n"))+"</p>");
      buf = [];
    }
  }
  function flushTable(){
    if(tbl.length){ out.push(renderMarkdownTable(tbl)); tbl = []; }
  }
  lines.forEach(function(line){
    if(isTableLine(line)){ flushText(); tbl.push(line); }
    else { flushTable(); buf.push(line); }
  });
  flushTable(); flushText();
  return '<div class="richtext">'+out.join("")+"</div>";
}
function renderQuestionText(raw){
  return processInlineMath(raw || "");
}
