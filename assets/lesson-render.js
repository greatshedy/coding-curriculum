/* ============================================================
   lesson-render.js — shared, term-aware lesson renderer.
   Builds one lesson page from window.COURSE_CONFIG.data.
   The lesson comes from the URL: week.html?t=3&w=4

   Students and teachers share the same page. The lesson is a
   single spine — Read · Run · Build · Check — and a page-level
   "Teacher mode" switch reveals the teacher layer in place:
   the briefing (objective, teaching points, timing, common
   mistakes) and the assessment answer keys. Nothing is split
   into a separate student or teacher tab.

   If the data has no `terms`, a flat `weeks` array is treated
   as one implicit term, so single-course pages keep working.
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
  if (!weeksInTerm.length) {
    for (var fi2 = 0; fi2 < terms.length; fi2++) {
      if (terms[fi2].weeks && terms[fi2].weeks.length) {
        term = terms[fi2];
        weeksInTerm = term.weeks;
        t = fi2 + 1;
        break;
      }
    }
  }
  if (!weeksInTerm.length) return;
  var w = clamp(toInt(CL.qs("w"), 1), 1, weeksInTerm.length || 1);

  var current = 0;
  for (var fi = 0; fi < flat.length; fi++) {
    if (flat[fi].termIndex === t - 1 && flat[fi].weekIndex === w - 1) { current = fi; break; }
  }
  var week = flat[current].week;
  var accent = PALETTE[week.color] || PALETTE.motion;
  var soft = accent + "22";
  document.documentElement.style.setProperty("--tab-accent", accent);
  document.documentElement.classList.add("has-lesson-bar");

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

  /* ---------- teacher lens ---------- */
  var LENS_KEY = "codelab:teacher-mode";
  var teacherOn = false;
  try { teacherOn = window.localStorage.getItem(LENS_KEY) === "1"; } catch (err) { teacherOn = false; }

  function syncLens() {
    document.documentElement.classList.toggle("teacher-mode", teacherOn);
    Array.prototype.forEach.call(document.querySelectorAll("[data-teacher-toggle]"), function (btn) {
      btn.setAttribute("aria-checked", String(teacherOn));
      var label = btn.querySelector(".lens-switch-label");
      if (label) label.textContent = teacherOn ? "Teacher mode: on" : "Teacher mode";
    });
  }

  document.addEventListener("click", function (ev) {
    var btn = ev.target && ev.target.closest ? ev.target.closest("[data-teacher-toggle]") : null;
    if (!btn) return;
    teacherOn = !teacherOn;
    try { window.localStorage.setItem(LENS_KEY, teacherOn ? "1" : "0"); } catch (err) { /* ignore */ }
    syncLens();
  });

  function teacherToggleHtml() {
    return '<button type="button" class="lens-switch" role="switch" aria-checked="' + teacherOn + '" data-teacher-toggle>' +
      '<span class="lens-switch-track" aria-hidden="true"><span class="lens-switch-thumb"></span></span>' +
      '<span class="lens-switch-label">' + (teacherOn ? "Teacher mode: on" : "Teacher mode") + "</span>" +
    "</button>";
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
  function sec(id, emoji, title, sub, bodyHtml, actions, cls) {
    return '<section class="lesson-sec' + (cls ? " " + cls : "") + '" id="sec-' + id + '">' +
      '<div class="lesson-sec-head">' +
        '<span class="lesson-sec-emoji" aria-hidden="true">' + emoji + "</span>" +
        "<div>" +
          '<h2 class="lesson-sec-title">' + e(title) + "</h2>" +
          (sub ? '<p class="lesson-sec-sub">' + e(sub) + "</p>" : "") +
        "</div>" +
        (actions ? '<div class="lesson-sec-head-actions no-print">' + actions + "</div>" : "") +
      "</div>" +
      bodyHtml +
    "</section>";
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
    var trackBadge = "";
    if (week.tracks) {
      trackBadge = '<span class="pill bg-ink/5 text-ink/60">' + (week.tracks === "both" ? "Track A &amp; B" : "JHS &amp; SHS") + "</span>";
    }
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
          (week.goal ? '<p class="mt-3 flex items-start gap-2 rounded-xl bg-ink/5 px-3 py-2 text-sm font-bold text-ink/80 max-w-2xl"><span aria-hidden="true">🎯</span><span><span class="text-ink/45 uppercase tracking-wide text-xs font-extrabold mr-1">Goal:</span>' + e(week.goal) + "</span></p>" : "") +
          '<p class="text-ink/65 max-w-2xl mt-2">' + e(week.concept || "") + "</p>" +
          '<p class="mt-4"><span class="lens-hint"><span aria-hidden="true">🔎</span><span>Everyone sees this lesson. Flip on <strong>Teacher mode</strong> for the briefing, timing and answer keys.</span></span></p>' +
        "</div>" +
      "</div>" +
    "</section>";
  }

  /* ---------- teacher layer: briefing ---------- */
  function teacherBriefing(t, objective) {
    var obj = objective || t.objective || "";
    var tp = t.teachingPoints || [];
    var timing = t.timing || [];
    var mistakes = t.commonMistakes || [];
    if (!obj && !tp.length && !timing.length && !mistakes.length) return "";

    var maxMin = timing.reduce(function (m, x) { return Math.max(m, x.mins || 0); }, 1);
    var timingHtml = timing.map(function (x) {
      return '<div class="timing-row"><span class="t-label">' + e(x.label) + '</span><span class="t-mins">' + x.mins + " min</span>" +
        '<span class="t-bar"><i style="width:' + Math.round(((x.mins || 0) / maxMin) * 100) + '%"></i></span></div>';
    }).join("");

    function card(title, inner) {
      return '<div class="tbp-card"><h3>' + e(title) + "</h3>" + inner + "</div>";
    }
    var inner =
      (obj ? card("Objective", '<p>' + e(obj) + "</p>") : "") +
      (tp.length ? card("Key teaching points", list(tp, "▸")) : "") +
      (timing.length ? card("Timing", '<div class="timing">' + timingHtml + "</div>") : "") +
      (mistakes.length ? card("Common mistakes", list(mistakes, "!")) : "");

    return '<div class="teacher-only">' +
      '<div class="teacher-briefing">' +
        '<div class="teacher-briefing-head"><span aria-hidden="true">🧑‍🏫</span><span>Teacher briefing</span><span class="teacher-chip">Visible in Teacher mode</span></div>' +
        '<p class="tbp-intro">Plan before class: the objective, what to emphasise, a suggested timing and the mistakes to watch for.</p>' +
        '<div class="tbp-grid">' + inner + "</div>" +
      "</div>" +
    "</div>";
  }

  /* ---------- Read ---------- */
  function readPanel(t) {
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
    return sections;
  }

  /* ---------- Run it ---------- */
  function runPanel(t) {
    var demos = t.liveDemo || [];
    if (!demos.length) return "";
    return '<p class="teacher-only tbp-note">Run each example live first, then let students change it and run it themselves.</p>' +
      '<div class="grid gap-4">' + demos.map(function (d) {
        return '<div><h3 class="notes-h" style="margin-top:0">' + e(d.title) + "</h3>" +
          snippetSlot({ code: d.code, filename: d.filename, caption: d.caption }) + "</div>";
      }).join("") + "</div>";
  }

  /* ---------- Build it ---------- */
  function buildPanel(t) {
    if (!t.template) return "";
    function steps(arr) {
      return '<ol class="steps">' + (arr || []).map(function (x) { return "<li><span class='text-ink/80'>" + e(x) + "</span></li>"; }).join("") + "</ol>";
    }
    var tasksHtml;
    if (t.template.core) {
      tasksHtml = '<p class="notes-mini">Core tasks — everyone</p>' + steps(t.template.core) +
        (t.template.stretch && t.template.stretch.length
          ? '<p class="notes-mini" style="margin-top:1.1rem">Stretch challenge — go further</p>' + list(t.template.stretch, "★")
          : "");
    } else {
      tasksHtml = steps(t.template.tasks);
    }
    return '<div class="grid gap-5">' +
      '<p class="notes-reading m-0">This is the starter file for the week. Edit it, press <strong>Run</strong>, and watch the preview and console update. Then follow the tasks below.</p>' +
      editorSlot({ code: t.template.code, filename: t.template.filename }) +
      '<div><h3 class="notes-h" style="margin-top:0">What to do</h3>' + tasksHtml + "</div>" +
    "</div>";
  }

  /* ---------- Check ---------- */
  function checkPanel(blocks) {
    if (!blocks.length) return "";
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
            (q.answer
              ? '<div class="teacher-only"><p class="quiz-answer-label">Answer key</p><div class="answer-body">' + e(q.answer).replace(/\n/g, "<br>") + "</div></div>"
              : "") +
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
          "<th>Criteria</th><th>Yes</th><th>Somewhat</th><th>No</th></tr></thead><tbody>" +
          (b.criteria || []).map(function (c) {
            return "<tr><td>" + e(c) + "</td><td></td><td></td><td></td></tr>";
          }).join("") + "</tbody></table></div>";
      }

      return out + "</section>";
    }).join("") + "</div>";
  }

  /* ---------- render one variant of the lesson ---------- */
  function renderLesson(variantKey) {
    snippetSpecs = [];
    editorSpecs = [];

    var variant = variantKey && week.variants ? week.variants[variantKey] : null;
    var t = variant ? Object.assign({}, week, variant) : week;
    var objective = variant ? variant.objective : week.objective;
    var assessment = variant ? [].concat(variant.assessment || [], week.assessment || []) : [].concat(week.assessment || []);

    var anchors = [];
    var parts = [];

    var brief = teacherBriefing(t, objective);
    if (brief) { anchors.push({ id: "sec-briefing", label: "Briefing", emoji: "🧑‍🏫" }); parts.push(sec("briefing", "🧑‍🏫", "Before class", "", brief, "", "teacher-only")); }

    var read = readPanel(t);
    var printBtn = '<button type="button" class="notes-print" data-print-handout>🖨 Print handout</button>';
    if (read) { anchors.push({ id: "sec-read", label: "Read", emoji: "📖" }); parts.push(sec("read", "📖", "Read", "The idea, explained.", read, printBtn)); }

    var run = runPanel(t);
    if (run) { anchors.push({ id: "sec-run", label: "Run it", emoji: "▶️" }); parts.push(sec("run", "▶️", "Run it", "Press Run and watch the idea happen.", run)); }

    var build = buildPanel(t);
    if (build) { anchors.push({ id: "sec-build", label: "Build it", emoji: "🧱" }); parts.push(sec("build", "🧱", "Build it", "Follow the tasks and make it yours.", build)); }

    var check = checkPanel(assessment);
    if (check) { anchors.push({ id: "sec-check", label: "Check", emoji: "✅" }); parts.push(sec("check", "✅", "Check your work", "", check)); }

    var bar = document.getElementById("lesson-bar");
    if (bar) {
      bar.innerHTML =
        '<div class="lesson-bar no-print">' +
          '<div class="lesson-bar-inner">' +
            (anchors.length
              ? '<nav class="lesson-jump" aria-label="On this page">' + anchors.map(function (a) {
                  return '<a href="#' + a.id + '"><span aria-hidden="true">' + a.emoji + "</span>" + e(a.label) + "</a>";
                }).join("") + "</nav>"
              : "") +
            teacherToggleHtml() +
          "</div>" +
        "</div>";
    }

    var bodyEl = document.getElementById("lesson-body");
    if (!bodyEl) return;
    bodyEl.innerHTML = parts.join("");
    mountCode(bodyEl);

    var pb = bodyEl.querySelector("[data-print-handout]");
    if (pb) {
      pb.addEventListener("click", function () {
        var panel = document.getElementById("sec-read");
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

    syncLens();
  }

  /* ---------- sidebar ---------- */
  function weekList() {
    if (terms.length <= 1) {
      return (terms[0].weeks || []).map(function (wk, wi) {
        var on = wk === week;
        return '<a href="' + weekUrl(0, wi) + '" class="flex items-center gap-2 text-sm font-bold py-1 ' +
          (on ? "text-motion" : "text-ink/60 hover:text-motion") + '">' +
          '<span class="w-6 text-center">' + wk.emoji + "</span>" + "Week " + (wi + 1) + ": " + e(wk.title) + "</a>";
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
    '<div id="lesson-bar"></div>' +
    '<div class="grid lg:grid-cols-3 gap-6 items-start">' +
      '<div class="lg:col-span-2"><div class="card p-6" id="lesson-body"></div></div>' +
      '<aside class="grid gap-6 lg:sticky lg:top-24">' +
        '<div class="card p-6"><p class="text-xs font-extrabold uppercase tracking-wide text-ink/45 mb-3">All weeks</p><nav class="grid gap-0.5">' + weekList() + "</nav></div>" +
        tracksCard +
      "</aside>" +
    "</div>" +
    bottomNav;

  var currentVariant = week.variants ? Object.keys(week.variants)[0] : null;
  var projectEl = document.getElementById("variant-project");

  function renderVariant(key) {
    currentVariant = key;
    renderLesson(key);
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
    renderLesson(null);
  }
})();
