/* ============================================================
   lesson-render.js — shared, term-aware lesson renderer.
   Builds a lesson page from window.COURSE_CONFIG.data.
   The lesson comes from the URL: week.html?t=3&w=4
   If the data has no `terms`, a flat `weeks` array is treated as
   one implicit term, so single-course pages keep working.
   Four tabs: Instructor guide · Student handout · Code template ·
   Assessment. Code templates and examples are runnable.
   ============================================================ */
(function () {
  "use strict";

  var cfg = window.COURSE_CONFIG;
  if (!cfg || !cfg.data) return;
  var cur = cfg.data;

  var CL = window.CL || { escapeHtml: function (s) { return String(s == null ? "" : s); }, qs: function () { return null; } };
  var e = CL.escapeHtml;
  var CR = window.CodeRunner;

  var indexHref = cfg.indexHref || "index.html";
  var weekHref = cfg.weekHref || "week.html";
  var playgroundHref = cfg.playgroundHref || "playground.html";

  var PALETTE = {
    motion: "#4c97ff", looks: "#9966ff", sound: "#cf63cf", events: "#ffbf00",
    control: "#ffab19", sensing: "#5cb1d6", operators: "#59c059", variables: "#ff8c1a"
  };

  function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi); }
  function toInt(s, d) { var n = parseInt(s, 10); return isNaN(n) ? d : n; }

  /* ---------- normalise terms ---------- */
  var terms = (cur.terms && cur.terms.length)
    ? cur.terms
    : [{ n: 1, title: "", theme: null, weeks: cur.weeks || [] }];

  var flat = [];
  terms.forEach(function (tm, ti) {
    (tm.weeks || []).forEach(function (wk, wi) {
      flat.push({ week: wk, term: tm, termIndex: ti, weekIndex: wi });
    });
  });
  if (!flat.length) return;

  var t = clamp(toInt(CL.qs("t"), 1), 1, terms.length);
  var term = terms[t - 1];
  var weeksInTerm = term.weeks || [];
  var w = clamp(toInt(CL.qs("w"), 1), 1, weeksInTerm.length || 1);

  var current = 0;
  for (var fi = 0; fi < flat.length; fi++) {
    if (flat[fi].termIndex === t - 1 && flat[fi].weekIndex === w - 1) { current = fi; break; }
  }
  var week = flat[current].week;
  var accent = PALETTE[week.color] || PALETTE.motion;
  var soft = accent + "22";
  document.documentElement.style.setProperty("--tab-accent", accent);

  document.title = "Week " + w + ": " + week.title + " — " + (cur.title || "Course");

  function weekUrl(termIndex, weekIndex) {
    return weekHref + "?t=" + (termIndex + 1) + "&w=" + (weekIndex + 1);
  }
  var prev = current > 0 ? flat[current - 1] : null;
  var next = current < flat.length - 1 ? flat[current + 1] : null;
  var prevUrl = prev ? weekUrl(prev.termIndex, prev.weekIndex) : null;
  var nextUrl = next ? weekUrl(next.termIndex, next.weekIndex) : null;

  /* ---------- top prev / next ---------- */
  var prevTop = document.getElementById("prevTop");
  var nextTop = document.getElementById("nextTop");
  if (prevTop) {
    if (prevUrl) prevTop.addEventListener("click", function () { window.location.href = prevUrl; });
    else prevTop.classList.add("hidden");
  }
  if (nextTop) {
    if (nextUrl) nextTop.addEventListener("click", function () { window.location.href = nextUrl; });
    else { nextTop.textContent = "Back to course"; nextTop.addEventListener("click", function () { window.location.href = indexHref; }); }
  }

  /* ---------- helpers ---------- */
  function list(arr, marker, cls) {
    return '<ul class="notes-list ' + (cls || "") + '">' + (arr || []).map(function (x) {
      return "<li>" + (marker ? '<span class="notes-mark" aria-hidden="true">' + marker + "</span>" : "") + "<span>" + e(x) + "</span></li>";
    }).join("") + "</ul>";
  }
  function paras(arr) {
    return (arr || []).map(function (p) { return "<p>" + e(p) + "</p>"; }).join("");
  }
  function sectionTitle(emoji, title, extra) {
    return '<h2 class="font-display text-2xl font-extrabold flex items-center gap-2 mb-3">' +
      '<span aria-hidden="true">' + emoji + "</span>" + e(title) +
      (extra ? '<span class="ml-1 text-sm font-bold text-ink/40">' + e(extra) + "</span>" : "") + "</h2>";
  }

  /* ---------- code placeholders ---------- */
  var snippetSpecs = [];
  var editorSpecs = [];
  function snippetSlot(spec) {
    snippetSpecs.push(spec);
    return '<div data-snippet="' + (snippetSpecs.length - 1) + '"></div>';
  }
  function editorSlot(spec) {
    editorSpecs.push(spec);
    return '<div data-editor="' + (editorSpecs.length - 1) + '"></div>';
  }
  function mountCode(root) {
    Array.prototype.forEach.call(root.querySelectorAll("[data-snippet]"), function (el) {
      CR.snippet(el, snippetSpecs[parseInt(el.getAttribute("data-snippet"), 10)]);
    });
    Array.prototype.forEach.call(root.querySelectorAll("[data-editor]"), function (el) {
      CR.editor(el, editorSpecs[parseInt(el.getAttribute("data-editor"), 10)]);
    });
  }

  /* ---------- hero ---------- */
  function heroHtml() {
    var termBadge = term.title
      ? '<span class="pill" style="background:' + soft + ";color:" + accent + '">' + e(term.title) + "</span>"
      : "";
    var trackBadge = week.tracks === "both" ? '<span class="pill bg-ink/5 text-ink/60">Track A &amp; B</span>' : "";
    return '<section class="mb-8">' +
      '<p class="text-sm font-bold text-ink/45 mb-3"><a class="hover:text-motion" href="' + indexHref + '">Course home</a> <span class="mx-1">/</span> Week ' + w + " of " + weeksInTerm.length + "</p>" +
      '<div class="flex flex-col sm:flex-row sm:items-center gap-4">' +
        '<div class="grid place-items-center w-20 h-20 rounded-3xl text-5xl shrink-0" style="background:' + soft + '">' + week.emoji + "</div>" +
        "<div>" +
          '<div class="flex flex-wrap items-center gap-2 mb-1">' +
            termBadge +
            '<span class="pill" style="background:' + soft + ";color:" + accent + '">Week ' + w + "</span>" +
            '<span class="pill bg-ink/5 text-ink/60">' + e(cur.audience || "") + "</span>" +
            trackBadge +
          "</div>" +
          '<h1 class="font-display text-3xl sm:text-4xl font-extrabold">' + e(week.title) + "</h1>" +
          '<p class="text-ink/65 max-w-2xl mt-2">' + e(week.concept || "") + "</p>" +
        "</div>" +
      "</div>" +
    "</section>";
  }

  /* ---------- tab 1: instructor guide ---------- */
  function instructorPanel(t, objective) {
    var timing = t.timing || [];
    var maxMin = timing.reduce(function (m, x) { return Math.max(m, x.mins); }, 1);
    var timingHtml = timing.map(function (x) {
      return '<div class="timing-row"><span class="t-label">' + e(x.label) + '</span><span class="t-mins">' + x.mins + " min</span>" +
        '<span class="t-bar"><i style="width:' + Math.round((x.mins / maxMin) * 100) + '%"></i></span></div>';
    }).join("");

    var demos = (t.liveDemo || []).map(function (d) {
      return '<div class="grid gap-2"><h3 class="notes-h" style="margin-top:0">' + e(d.title) + "</h3>" +
        snippetSlot({ code: d.code, filename: d.filename, caption: d.caption }) + "</div>";
    }).join("");

    return '<div class="grid gap-6">' +
      '<div>' +
        sectionTitle("🎯", "Objective") +
        '<p class="notes-reading">' + e(objective || "") + "</p>" +
      "</div>" +
      '<div class="grid md:grid-cols-2 gap-6">' +
        "<div>" + sectionTitle("💡", "Key teaching points") + list(t.teachingPoints, "▸") + "</div>" +
        "<div>" + sectionTitle("⏱️", "Timing") + '<div class="timing">' + timingHtml + "</div></div>" +
      "</div>" +
      (demos ? "<div>" + sectionTitle("▶️", "Live-code demo", "run it in front of the class") + '<div class="grid gap-4">' + demos + "</div></div>" : "") +
      "<div>" + sectionTitle("⚠️", "Common mistakes") + list(t.commonMistakes, "!") + "</div>" +
    "</div>";
  }

  /* ---------- tab 2: student handout ---------- */
  function handoutPanel(t) {
    var sections = ((t.handout || {}).sections || []).map(function (s) {
      var out = '<section class="mb-7">';
      out += '<h3 class="notes-h" style="margin-top:0">' + e(s.h) +
        (s.badge ? ' <span class="track-badge" style="background:' + soft + ";color:" + accent + '">' + e(s.badge) + "</span>" : "") + "</h3>";
      if (s.body) out += paras(s.body);
      if (s.list) out += list(s.list, "▸");
      out += (s.codes || []).map(function (c) {
        var inner = "";
        if (c.body) inner += '<p class="notes-reading m-0 mb-2">' + e(c.body) + "</p>";
        inner += snippetSlot({ code: c.code, filename: c.label || "example.html", caption: c.caption });
        return '<div class="mb-4">' + inner + "</div>";
      }).join("");
      if (s.after) out += paras(s.after);
      return out + "</section>";
    }).join("");
    return '<div>' + sections + "</div>";
  }

  /* ---------- tab 3: code template ---------- */
  function templatePanel(t) {
    if (!t.template) return '<p class="text-ink/50">No template for this week.</p>';
    return "<div class=\"grid gap-5\">" +
      "<div>" + sectionTitle("🧑‍💻", "Code template", "edit and run it") +
        '<p class="notes-reading m-0">This is the starter file for the week. Edit it, press <strong>Run</strong>, and watch the result and the console update. Then follow the tasks below.</p>' +
      "</div>" +
      editorSlot({ code: t.template.code, filename: t.template.filename }) +
      '<div>' + sectionTitle("🛠️", "What to do") + '<ol class="steps">' +
        (t.template.tasks || []).map(function (x) { return "<li><span class='text-ink/80'>" + e(x) + "</span></li>"; }).join("") +
      "</ol></div>" +
    "</div>";
  }

  /* ---------- tab 4: assessment ---------- */
  function assessmentPanel(blocks) {
    if (!blocks.length) return '<p class="text-ink/50">No assessment for this week.</p>';
    return '<div class="grid gap-6">' + blocks.map(function (b) {
      var badge = '<span class="track-badge" style="background:' + soft + ";color:" + accent + '">Track ' + e(b.track || "") + "</span>" +
        (b.audience ? ' <span class="track-badge bg-ink/5 text-ink/60">' + e(b.audience) + "</span>" : "");
      var out = '<section class="card p-5">' +
        '<h3 class="font-display text-xl font-extrabold flex flex-wrap items-center gap-2">' + e(b.title) + badge + "</h3>";

      if (b.type === "checklist") {
        out += '<div class="checklist mt-3">' + (b.items || []).map(function (it) {
          return '<label class="check-item"><input type="checkbox"><span>' + e(it) + "</span></label>";
        }).join("") + "</div>";
      }

      if (b.type === "quiz") {
        out += '<div class="mt-3">' + (b.questions || []).map(function (q) {
          return '<div class="quiz-q">' +
            '<p class="q-prompt">' + e(q.prompt) + "</p>" +
            (q.body ? '<p class="q-body">' + e(q.body) + "</p>" : "") +
            (q.code ? '<pre class="codeblock">' + e(q.code) + "</pre>" : "") +
            (q.answer ? '<details class="quiz-answer"><summary>Show answer (teacher)</summary><div class="answer-body">' + e(q.answer).replace(/\n/g, "<br>") + "</div></details>" : "") +
          "</div>";
        }).join("") + "</div>";
      }

      if (b.type === "form") {
        if (b.intro) out += '<p class="notes-reading mt-2">' + e(b.intro) + "</p>";
        out += '<div class="mt-3 grid gap-4">' + (b.fields || []).map(function (f) {
          var lines = f.lines || 1;
          var blanks = "";
          for (var i = 0; i < lines; i++) blanks += '<div class="form-line"></div>';
          return '<div><p class="font-extrabold text-sm text-ink/80 m-0">' + e(f.label) + "</p>" +
            (f.hint ? '<p class="text-xs text-ink/45 m-0 mb-1">' + e(f.hint) + "</p>" : "") + blanks + "</div>";
        }).join("") + "</div>";
      }

      if (b.type === "rubric") {
        out += '<div class="mt-3 overflow-x-auto"><table class="rubric-table"><thead><tr>' +
          '<th>Criteria</th><th>Yes</th><th>Somewhat</th><th>No</th></tr></thead><tbody>' +
          (b.criteria || []).map(function (c) {
            return "<tr><td>" + e(c) + "</td><td></td><td></td><td></td></tr>";
          }).join("") + "</tbody></table></div>";
      }

      return out + "</section>";
    }).join("") + "</div>";
  }

  /* ---------- build the whole tabbed body ---------- */
  function buildBody(container, variantKey) {
    snippetSpecs = [];
    editorSpecs = [];

    var variant = variantKey && week.variants ? week.variants[variantKey] : null;
    var t = variant ? Object.assign({}, week, variant) : week;
    var objective = variant ? variant.objective : week.objective;
    var assessment = [].concat(t.assessment || [], variant ? (week.assessment || []) : []);

    var tabs = [
      { id: "instructor", label: "🧑‍🏫 Instructor", html: instructorPanel(t, objective) },
      { id: "handout", label: "📄 Handout", html: handoutPanel(t) },
      { id: "template", label: "🧑‍💻 Code", html: templatePanel(t) },
      { id: "assessment", label: "✅ Assessment", html: assessmentPanel(assessment) }
    ];

    var nav = '<div class="tablist grow basis-80" role="tablist" aria-label="Lesson sections">' + tabs.map(function (x, i) {
      return '<button type="button" role="tab" id="tab-' + x.id + '" aria-controls="panel-' + x.id + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? "0" : "-1") + '">' + x.label + "</button>";
    }).join("") + "</div>";

    var panels = tabs.map(function (x, i) {
      return '<div id="panel-' + x.id + '" role="tabpanel" aria-labelledby="tab-' + x.id + '" class="tabpanel' + (x.id === "handout" ? " notes-reading" : "") + '"' + (i === 0 ? "" : " hidden") + ">" + x.html + "</div>";
    }).join("");

    var printBtn = '<button type="button" class="notes-print" data-print-handout>🖨 Print this handout</button>';

    container.innerHTML =
      '<div class="flex flex-wrap items-end gap-3">' + nav + printBtn + "</div>" +
      '<div class="tabpanels">' + panels + "</div>";

    var tabButtons = Array.prototype.slice.call(container.querySelectorAll('[role="tab"]'));
    function select(i) {
      tabButtons.forEach(function (btn, j) {
        var on = i === j;
        btn.setAttribute("aria-selected", String(on));
        btn.setAttribute("tabindex", on ? "0" : "-1");
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
    }
    tabButtons.forEach(function (btn, i) {
      btn.addEventListener("click", function () { select(i); });
      btn.addEventListener("keydown", function (ev) {
        if (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft") return;
        ev.preventDefault();
        var next = (i + (ev.key === "ArrowRight" ? 1 : tabButtons.length - 1)) % tabButtons.length;
        tabButtons[next].focus();
        select(next);
      });
    });
    select(0);

    mountCode(container);

    var pb = container.querySelector("[data-print-handout]");
    if (pb) {
      pb.addEventListener("click", function () {
        var panel = document.getElementById("panel-handout");
        if (!panel) return;
        Array.prototype.forEach.call(document.querySelectorAll(".print-target"), function (x) { x.classList.remove("print-target"); });
        panel.classList.add("print-target");
        document.body.classList.add("printing");
        var done = false;
        function cleanup() {
          if (done) return;
          done = true;
          document.body.classList.remove("printing");
          panel.classList.remove("print-target");
          window.removeEventListener("afterprint", cleanup);
        }
        window.addEventListener("afterprint", cleanup);
        window.print();
        setTimeout(cleanup, 4000);
      });
    }
  }

  /* ---------- sidebar ---------- */
  function weekList() {
    if (terms.length <= 1) {
      return (terms[0].weeks || []).map(function (wk, wi) {
        var on = wk === week;
        return '<a href="' + weekUrl(0, wi) + '" class="flex items-center gap-2 text-sm font-bold py-1 ' +
          (on ? "text-motion" : "text-ink/60 hover:text-motion") + '">' +
          '<span class="w-6 text-center">' + wk.emoji + "</span>" + e(wk.title) + "</a>";
      }).join("");
    }
    return terms.map(function (tm, ti) {
      return '<p class="text-xs font-extrabold uppercase tracking-wide text-ink/40 mt-3 mb-1">' + e(tm.title || ("Term " + (ti + 1))) + "</p>" +
        (tm.weeks || []).map(function (wk, wi) {
          var on = wk === week;
          return '<a href="' + weekUrl(ti, wi) + '" class="flex items-center gap-2 text-sm font-bold py-1 ' +
            (on ? "text-motion" : "text-ink/60 hover:text-motion") + '">' +
            '<span class="w-6 text-center">' + wk.emoji + "</span>" + (wi + 1) + ". " + e(wk.title) + "</a>";
        }).join("");
    }).join("");
  }

  /* ---------- bottom nav ---------- */
  var bottomNav =
    '<section class="grid sm:grid-cols-2 gap-4 mt-8">' +
      (prev
        ? '<a href="' + prevUrl + '" class="card card-hover p-5"><p class="text-xs font-extrabold uppercase text-ink/40 m-0">← Previous</p><p class="font-display text-lg font-extrabold m-0">' + e(prev.week.title) + "</p></a>"
        : '<a href="' + indexHref + '" class="card card-hover p-5"><p class="text-xs font-extrabold uppercase text-ink/40 m-0">← Back</p><p class="font-display text-lg font-extrabold m-0">Course home</p></a>') +
      (next
        ? '<a href="' + nextUrl + '" class="card card-hover p-5 text-right"><p class="text-xs font-extrabold uppercase text-ink/40 m-0">Next →</p><p class="font-display text-lg font-extrabold m-0">' + e(next.week.title) + "</p></a>"
        : '<a href="' + playgroundHref + '" class="card card-hover p-5 text-right"><p class="text-xs font-extrabold uppercase text-ink/40 m-0">Next →</p><p class="font-display text-lg font-extrabold m-0">Code Playground</p></a>') +
    "</section>";

  /* ---------- assemble ---------- */
  var variantBar = "";
  if (week.variants) {
    variantBar =
      '<div class="card p-4 mb-6 flex flex-wrap items-center gap-3">' +
        '<span class="text-sm font-extrabold uppercase tracking-wide text-ink/45">Choose your class:</span>' +
        '<div class="flex flex-wrap gap-2" role="group" aria-label="Year group">' +
          Object.keys(week.variants).map(function (k, i) {
            return '<button type="button" class="variant-btn' + (i === 0 ? " is-active" : "") + '" data-variant="' + k + '">' +
              e(week.variants[k].name) + "</button>";
          }).join("") +
        "</div>" +
        '<span class="text-sm font-bold text-ink/50" id="variant-project"></span>' +
      "</div>";
  }

  var tracksCard = (cur.tracks && cur.tracks.length)
    ? '<div class="card p-6"><p class="text-xs font-extrabold uppercase tracking-wide text-ink/45 mb-2">Tracks</p>' +
        cur.tracks.map(function (tr) {
          return '<p class="text-sm text-ink/70 mb-2"><strong>' + e(tr.name) + "</strong><br>" + e(tr.desc) + "</p>";
        }).join("") +
      "</div>"
    : "";

  var root = document.getElementById("week-root");
  if (!root) return;
  root.innerHTML =
    heroHtml() +
    variantBar +
    '<div class="grid lg:grid-cols-3 gap-6 items-start">' +
      '<div class="lg:col-span-2 grid gap-6"><div class="card p-6" id="lesson-body"></div></div>' +
      '<aside class="grid gap-6 lg:sticky lg:top-20">' +
        '<div class="card p-6"><p class="text-xs font-extrabold uppercase tracking-wide text-ink/45 mb-3">All weeks</p><nav class="grid gap-0.5">' + weekList() + "</nav></div>" +
        tracksCard +
      "</aside>" +
    "</div>" +
    bottomNav;

  var bodyEl = document.getElementById("lesson-body");
  var currentVariant = week.variants ? Object.keys(week.variants)[0] : null;
  var projectEl = document.getElementById("variant-project");

  function renderVariant(key) {
    currentVariant = key;
    buildBody(bodyEl, key);
    if (projectEl && key) projectEl.textContent = week.variants[key].project || "";
    Array.prototype.forEach.call(root.querySelectorAll(".variant-btn"), function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-variant") === key);
    });
  }

  if (week.variants) {
    Array.prototype.forEach.call(root.querySelectorAll(".variant-btn"), function (btn) {
      btn.addEventListener("click", function () { renderVariant(btn.getAttribute("data-variant")); });
    });
    renderVariant(currentVariant);
  } else {
    buildBody(bodyEl, null);
  }
})();
