# Introduction to Web Development Course — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a term-based "Introduction to Web Development" course (JSS 1 & JSS 2, 3 terms × 10 weeks) and refactor the lesson renderer so it is shared and term-aware, without breaking the existing web-dev course.

**Architecture:** Extract the existing per-course renderer into one shared `assets/lesson-render.js` driven by `window.COURSE_CONFIG`. Add a sibling `intro-webdev/` course folder that mirrors `webdev/`. Curriculum data gains a `terms` layer; the renderer treats a flat `weeks` array as one implicit term so the existing `webdev/` course keeps working unchanged.

**Tech Stack:** Static HTML, Tailwind via CDN, vanilla ES5-style JavaScript, no build step, no test framework. Verification is done in a real browser.

## Global Constraints

- Static site only: no build system, no bundler, no package manager, no test framework.
- Tailwind is loaded from the CDN in each HTML page; fonts from Google Fonts.
- All shared code lives in `assets/`; course-specific code lives in each course folder's `js/`.
- Lessons keep the four-tab format: Instructor guide · Student handout · Code template · Assessment.
- Term-aware data shape: `{ terms: [ { n, title, theme, weeks: [...] } ] }`; a week's `n` is its index **within its term**.
- Week URLs use `?t=<term>&w=<week>`; `t` defaults to `1`, so existing `?w=N` links keep working.
- The intro course audience string is exactly `JSS 1 & JSS 2`.
- Senior course (JSS 3 / SS 1 / SS 2) restructure is **out of scope** for this plan (phase 2).
- Content quality bar: every authored week must have all fields shown in the Task 4 exemplar; no empty tabs.
- Follow existing code style: IIFE-wrapped ES5, `"use strict"`, no added comments beyond the file header banners already used.

## File Structure

**Create**
- `assets/lesson-render.js` — shared, term-aware lesson renderer.
- `webdev/js/config.js` — `window.COURSE_CONFIG` for the senior course.
- `intro-webdev/js/data.js` — `window.INTRO_CURRICULUM`.
- `intro-webdev/js/config.js` — `window.COURSE_CONFIG` for the intro course.
- `intro-webdev/week.html` — lesson shell.
- `intro-webdev/index.html` — course home (3 term sections + week tables).

**Modify**
- `webdev/week.html` — load the shared renderer via `js/config.js`.
- `webdev/js/playground.js` — collect templates from both curricula.
- `webdev/playground.html` — load `../intro-webdev/js/data.js`.
- `index.html` (hub) — two web-dev cards; add `js` colour to Tailwind config.

**Delete**
- `webdev/js/lesson-render.js` — replaced by `assets/lesson-render.js`.

**Out of scope (follow-up plans):** Terms 2 and 3 content; senior course restructure.

---

### Task 1: Shared, term-aware renderer

**Files:**
- Create: `assets/lesson-render.js`

**Interfaces:**
- Consumes: `window.COURSE_CONFIG` = `{ data, indexHref, weekHref, playgroundHref }`; `window.CL.escapeHtml`, `window.CL.qs`; `window.CodeRunner`.
- Produces: reads `data.terms` (or `data.weeks`), resolves `?t=&w=`, and renders into `#week-root` (shell must also provide `#prevTop`, `#nextTop`).

- [ ] **Step 1: Create the renderer**

Create `assets/lesson-render.js` with exactly this content:

```js
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
```

- [ ] **Step 2: Syntax-check the file**

Run: `node --check assets/lesson-render.js`
Expected: no output (exit 0).

- [ ] **Step 3: Commit**

```bash
git add assets/lesson-render.js
git commit -m "feat: add shared term-aware lesson renderer"
```

---

### Task 2: Rewire the web-dev course onto the shared renderer

**Files:**
- Create: `webdev/js/config.js`
- Modify: `webdev/week.html` (script tags near the end)
- Delete: `webdev/js/lesson-render.js`

**Interfaces:**
- Consumes: `assets/lesson-render.js` from Task 1; `window.WEBDEV_CURRICULUM` from `webdev/js/data.js`.
- Produces: `window.COURSE_CONFIG` for the web-dev course. Confirms the renderer's flat-`weeks` fallback path.

- [ ] **Step 1: Create the web-dev config**

Create `webdev/js/config.js`:

```js
/* ============================================================
   config.js — wires the web-dev curriculum into the shared
   lesson renderer (assets/lesson-render.js).
   ============================================================ */
window.COURSE_CONFIG = {
  data: window.WEBDEV_CURRICULUM,
  indexHref: "index.html",
  weekHref: "week.html",
  playgroundHref: "playground.html"
};
```

- [ ] **Step 2: Point `webdev/week.html` at the shared renderer**

In `webdev/week.html`, replace these three lines:

```html
<script src="js/data.js"></script>
<script src="js/lesson-render.js"></script>
```

with:

```html
<script src="js/data.js"></script>
<script src="js/config.js"></script>
<script src="../assets/lesson-render.js"></script>
```

- [ ] **Step 3: Delete the old renderer**

```bash
git rm webdev/js/lesson-render.js
```

- [ ] **Step 4: Verify in the browser**

Serve the site from the repo root and open the web-dev course:

Run: `python -m http.server 8000`
Then open (via agent-browser) `http://localhost:8000/webdev/week.html?w=3`

Expected:
- The Week 3 lesson renders with the four tabs.
- The Code tab shows an editor; pressing **Run** shows a preview and console output.
- The top-right **Next** button moves to Week 4; **Prev** moves to Week 3's predecessor.
- The sidebar lists Weeks 1–10.
- A legacy URL `http://localhost:8000/webdev/week.html?w=7` opens Week 7.

- [ ] **Step 5: Commit**

```bash
git add webdev/week.html webdev/js/config.js
git commit -m "refactor: use shared lesson renderer in web-dev course"
```

---

### Task 3: Intro course scaffold (shell, config, data stubs, home, hub)

**Files:**
- Create: `intro-webdev/js/data.js`
- Create: `intro-webdev/js/config.js`
- Create: `intro-webdev/week.html`
- Create: `intro-webdev/index.html`
- Modify: `index.html` (hub)

**Interfaces:**
- Consumes: `assets/lesson-render.js`, `assets/nav.js`, `assets/tabs.js`, `assets/code-runner.js`, `assets/style.css`, `assets/code.css`.
- Produces: `window.INTRO_CURRICULUM` with `terms` (3) × 10 weeks (stubs), consumed by Task 4+ content work and by the home page.

- [ ] **Step 1: Create the intro data file with 3 term stubs**

Create `intro-webdev/js/data.js`. Each week carries at least `n`, `title`, `emoji`, `color`, `concept`; empty arrays are allowed until the content tasks fill them.

```js
/* ============================================================
   data.js — Introduction to Web Development (JSS 1 & JSS 2).
   Three terms, ten weeks each. Week `n` is the index within its
   term. Rendered by assets/lesson-render.js via js/config.js.
   ============================================================ */
(function () {
  "use strict";

  function week(n, title, emoji, color, concept) {
    return {
      n: n, title: title, emoji: emoji, color: color, tracks: "both",
      concept: concept,
      objective: "",
      teachingPoints: [],
      timing: [],
      liveDemo: [],
      commonMistakes: [],
      handout: { sections: [] },
      template: null,
      assessment: []
    };
  }

  var term1 = [
    week(1, "How the web works", "🌐", "motion", "When you type a web address, your browser asks a server for files and draws them on the screen. Web pages are built from HTML files you can write yourself."),
    week(2, "Your first page: tags and elements", "📄", "motion", "HTML marks up content with tags. A page has a head, for information about the page, and a body, for what people see."),
    week(3, "Headings and paragraphs", "🔤", "looks", "Headings show the importance of text and paragraphs group sentences. Comments are notes for humans that the browser ignores."),
    week(4, "Lists", "📋", "control", "Lists group items together. Unordered lists use bullets, ordered lists use numbers, and lists can be nested inside each other."),
    week(5, "Links and images", "🔗", "sensing", "Links let people move between pages and images bring pictures onto a page. Both use attributes to say where the content comes from."),
    week(6, "Tables", "🧮", "operators", "Tables arrange information into rows and columns, useful for timetables, schedules and comparisons."),
    week(7, "Forms", "📝", "variables", "Forms let people type information into a page. Labels describe each field, inputs collect the answer, and buttons submit it."),
    week(8, "Semantic layout", "🧱", "events", "Semantic tags such as header, nav, main and footer describe the job each part of a page does, which makes pages clearer for people and computers."),
    week(9, "Structuring a full page", "🏗️", "motion", "Put the pieces together: a page is a set of sections, each with its own content, linked into one clear structure."),
    week(10, "Project: About Me page", "🌟", "looks", "Build a complete About Me page in HTML that brings together everything from this term.")
  ];

  var term2 = [
    week(1, "What is CSS?", "🎨", "looks", "CSS is the language that styles HTML. It controls colours, spacing and layout, and it can be added inline, internally or in an external file."),
    week(2, "Selectors and the cascade", "🎯", "motion", "Selectors choose which elements to style. When rules compete, the cascade decides which one wins."),
    week(3, "Colours and backgrounds", "🌈", "looks", "CSS colours can be written as names, hex codes or rgb values, and can be applied to text, borders and backgrounds."),
    week(4, "Text and fonts", "✍️", "sensing", "Font family, size, weight and alignment control how text looks and how easy it is to read."),
    week(5, "The box model", "📦", "control", "Every element is a box made of content, padding, border and margin. Understanding the box model is the key to spacing."),
    week(6, "Sizing and spacing", "📐", "operators", "Widths, heights and display control how big elements are and whether they sit in a line or stack."),
    week(7, "Layout with Flexbox", "↔️", "motion", "Flexbox arranges items in a row or column and spaces them neatly, which is how most modern layouts are built."),
    week(8, "Styling links, lists and buttons", "🔘", "variables", "Links, lists and buttons can all be styled to match a design, including their hover and active states."),
    week(9, "Responsive basics", "📱", "events", "Responsive design makes a page look good on phones and computers, using the viewport and media queries."),
    week(10, "Project: style your page", "🌟", "looks", "Apply everything from this term to turn the About Me page into a designed, themed site.")
  ];

  var term3 = [
    week(1, "What is JavaScript?", "⚡", "motion", "JavaScript is the language that makes pages interactive. It runs in the browser and can change the page after it has loaded."),
    week(2, "Variables and data", "📦", "variables", "Variables are named boxes that store information. JavaScript has different types of data, such as text, numbers and true/false."),
    week(3, "Making decisions", "🔀", "control", "if and else let a program choose between different actions depending on whether something is true."),
    week(4, "Functions", "🧩", "operators", "A function is a reusable set of instructions with a name, so you can run the same steps whenever you need them."),
    week(5, "The DOM: finding elements", "🔍", "sensing", "The DOM is the browser's model of the page. JavaScript can find elements in it by their id."),
    week(6, "Changing the page with JS", "✏️", "looks", "Once JavaScript has found an element, it can change its text and its styles."),
    week(7, "Events", "🖱️", "events", "Events are things that happen on a page, like a click. Event listeners run code in response."),
    week(8, "Mini-project: a counter", "🔢", "variables", "Combine variables, functions, the DOM and events to build a working counter."),
    week(9, "Debugging and polish", "🐞", "sensing", "The browser console shows errors and messages. Reading it carefully is the fastest way to fix a page."),
    week(10, "Showcase and recap", "🏆", "looks", "Present your interactive page and review everything learned across the three terms.")
  ];

  window.INTRO_CURRICULUM = {
    slug: "intro-webdev",
    title: "Introduction to Web Development",
    subject: "Web Development",
    length: "3 terms",
    audience: "JSS 1 & JSS 2",
    focus: "Start from zero and build real web pages: HTML for structure, CSS for style, and a little JavaScript for interactivity.",
    philosophy: "Read it, run it, change it. Every week ships a runnable page so students see the result immediately.",
    tracks: [
      { key: "A", name: "Track A — with system", desc: "Students have laptops. They code along and run each page in the browser." },
      { key: "B", name: "Track B — no system", desc: "No laptops required. Students work through the printed handouts and written quizzes." }
    ],
    terms: [
      { n: 1, title: "Building pages with HTML", theme: "motion", weeks: term1 },
      { n: 2, title: "Styling with CSS", theme: "looks", weeks: term2 },
      { n: 3, title: "Interactivity with JavaScript", theme: "control", weeks: term3 }
    ]
  };
})();
```

- [ ] **Step 2: Create the intro config**

Create `intro-webdev/js/config.js`:

```js
/* ============================================================
   config.js — wires the intro curriculum into the shared
   lesson renderer (assets/lesson-render.js).
   ============================================================ */
window.COURSE_CONFIG = {
  data: window.INTRO_CURRICULUM,
  indexHref: "index.html",
  weekHref: "week.html",
  playgroundHref: "../webdev/playground.html"
};
```

- [ ] **Step 3: Create the intro lesson shell**

Create `intro-webdev/week.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Introduction to Web Development — Lesson</title>
<meta name="description" content="A term-based introduction to web development for JSS 1 and JSS 2, with instructor guides, handouts, runnable code and assessments." />

<script src="https://cdn.tailwindcss.com"></script>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="../assets/style.css" />
<link rel="stylesheet" href="../assets/code.css" />

<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          display: ['"Baloo 2"', 'Nunito', 'sans-serif'],
          sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif']
        },
        colors: {
          ink: '#1f2a44', paper: '#f6f4ee', js: '#f7df1e', motion: '#4c97ff', looks: '#9966ff',
          events: '#ffbf00', control: '#ffab19', sensing: '#5cb1d6', operators: '#59c059', variables: '#ff8c1a'
        }
      }
    }
  };
</script>
</head>
<body class="min-h-screen">

<a href="#week-root" class="skip-link">Skip to content</a>

<nav class="sticky top-0 z-50 bg-ink text-white shadow-lg no-print">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <a href="../index.html" class="flex items-center gap-2 font-display text-xl">
        <span class="grid place-items-center w-9 h-9 rounded-xl bg-motion text-lg">{"{}"}</span>
        <span class="font-extrabold">CodeLab</span>
      </a>
      <div class="hidden md:flex items-center gap-1" data-nav-links>
        <a href="../index.html" class="px-3 py-2 rounded-lg text-sm font-bold text-white/80 hover:text-white hover:bg-white/10">Curricula</a>
        <a href="index.html" class="px-3 py-2 rounded-lg text-sm font-bold text-white/80 hover:text-white hover:bg-white/10">Course home</a>
        <a href="../webdev/playground.html" class="px-3 py-2 rounded-lg text-sm font-bold text-white/80 hover:text-white hover:bg-white/10">Code Playground</a>
      </div>
      <div class="flex items-center gap-2">
        <button id="prevTop" class="hidden sm:inline-flex items-center gap-1 rounded-xl bg-white/10 px-3 py-2 text-sm font-extrabold hover:bg-white/20 transition">← Prev</button>
        <button id="nextTop" class="inline-flex items-center gap-1 rounded-xl bg-motion px-3 py-2 text-sm font-extrabold text-white hover:brightness-105 transition">Next →</button>
      </div>
    </div>
  </div>
</nav>

<main id="week-root" class="max-w-6xl mx-auto px-4 py-8">
  <p class="text-center text-ink/50 font-bold py-20">Loading lesson…</p>
</main>

<footer class="mt-10 border-t border-ink/10 py-10 no-print">
  <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink/55">
    <p class="font-bold">CodeLab Curriculum — Introduction to Web Development</p>
    <a class="text-motion font-bold hover:underline" href="index.html">All terms →</a>
  </div>
</footer>

<script src="../assets/nav.js"></script>
<script src="../assets/tabs.js"></script>
<script src="../assets/code-runner.js"></script>
<script src="js/data.js"></script>
<script src="js/config.js"></script>
<script src="../assets/lesson-render.js"></script>
</body>
</html>
```

- [ ] **Step 4: Create the intro course home**

Create `intro-webdev/index.html`. The term sections and week tables are generated from `INTRO_CURRICULUM` so they cannot drift from the data.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Introduction to Web Development (JSS 1 &amp; JSS 2) — CodeLab</title>
<meta name="description" content="A three-term introduction to web development for JSS 1 and JSS 2: HTML, CSS and a little JavaScript, with runnable pages." />

<script src="https://cdn.tailwindcss.com"></script>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="../assets/style.css" />

<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          display: ['"Baloo 2"', 'Nunito', 'sans-serif'],
          sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif']
        },
        colors: {
          ink: '#1f2a44', paper: '#f6f4ee', js: '#f7df1e', motion: '#4c97ff', looks: '#9966ff',
          events: '#ffbf00', control: '#ffab19', sensing: '#5cb1d6', operators: '#59c059', variables: '#ff8c1a'
        }
      }
    }
  };
</script>
</head>
<body class="min-h-screen">

<a href="#main" class="skip-link">Skip to content</a>

<nav class="sticky top-0 z-50 bg-ink text-white shadow-lg no-print">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <a href="../index.html" class="flex items-center gap-2 font-display text-xl">
        <span class="grid place-items-center w-9 h-9 rounded-xl bg-motion text-lg">{"{}"}</span>
        <span class="font-extrabold">CodeLab</span>
      </a>
      <div class="hidden md:flex items-center gap-1" data-nav-links>
        <a href="../index.html" class="px-3 py-2 rounded-lg text-sm font-bold text-white/80 hover:text-white hover:bg-white/10">Curricula</a>
        <a href="index.html" class="px-3 py-2 rounded-lg text-sm font-bold text-white/80 hover:text-white hover:bg-white/10">Course home</a>
        <a href="../webdev/playground.html" class="px-3 py-2 rounded-lg text-sm font-bold text-white/80 hover:text-white hover:bg-white/10">Code Playground</a>
      </div>
      <a href="week.html?t=1&w=1" class="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-motion px-4 py-2 text-sm font-extrabold text-white hover:brightness-105 transition">Start Term 1</a>
    </div>
  </div>
</nav>

<main id="main" class="max-w-6xl mx-auto px-4">

  <header class="py-12">
    <div class="flex flex-col md:flex-row md:items-center gap-6">
      <div class="grid place-items-center w-24 h-24 rounded-3xl bg-motion text-white shadow-md text-3xl font-black shrink-0">{"{}"}</div>
      <div>
        <div class="flex flex-wrap gap-2 mb-3">
          <span class="pill bg-events/25 text-yellow-900">Web Development</span>
          <span class="pill bg-motion/15 text-motion">JSS 1 &amp; JSS 2</span>
          <span class="pill bg-ink/5 text-ink/60">3 terms</span>
          <span class="pill bg-looks/15 text-looks">Start from zero</span>
        </div>
        <h1 class="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Introduction to Web Development</h1>
        <p class="mt-3 text-lg text-ink/70 max-w-3xl">
          A friendly first course for JSS 1 and JSS 2. Build real pages with HTML, style them with CSS,
          and add a little JavaScript — one week at a time, across three terms.
        </p>
      </div>
    </div>
  </header>

  <section id="terms" class="pb-16"></section>

</main>

<footer class="mt-8 border-t border-ink/10 py-10 no-print">
  <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink/55">
    <p class="font-bold">CodeLab Curriculum — Introduction to Web Development</p>
    <a class="text-motion font-bold hover:underline" href="week.html?t=1&w=1">Start Term 1 →</a>
  </div>
</footer>

<script src="../assets/nav.js"></script>
<script src="js/data.js"></script>
<script>
  (function () {
    "use strict";
    var cur = window.INTRO_CURRICULUM;
    if (!cur) return;
    var host = document.getElementById("terms");
    var tones = { motion: "#4c97ff", looks: "#9966ff", control: "#ffab19", events: "#ffbf00", sensing: "#5cb1d6", operators: "#59c059", variables: "#ff8c1a" };
    host.innerHTML = cur.terms.map(function (term) {
      var accent = tones[term.theme] || tones.motion;
      var rows = term.weeks.map(function (wk, wi) {
        return '<tr class="border-t border-ink/8 hover:bg-motion/5">' +
          '<td class="p-3 align-top"><a href="week.html?t=' + term.n + "&w=" + (wi + 1) + '" class="inline-flex items-center gap-2 font-extrabold text-motion hover:underline"><span class="text-lg">' + wk.emoji + "</span>Week " + (wi + 1) + "</a></td>" +
          '<td class="p-3 align-top font-extrabold text-ink/85"><a href="week.html?t=' + term.n + "&w=" + (wi + 1) + '" class="hover:text-motion">' + wk.title + "</a></td>" +
          '<td class="p-3 align-top text-ink/70">' + wk.concept + "</td>" +
          '<td class="p-3 align-top text-right"><a href="week.html?t=' + term.n + "&w=" + (wi + 1) + '" class="whitespace-nowrap rounded-lg bg-motion/10 text-motion font-extrabold px-3 py-1.5 hover:bg-motion/20">Open →</a></td>' +
        "</tr>";
      }).join("");
      return '<section class="mb-10">' +
        '<div class="flex items-center gap-3 mb-4">' +
          '<span class="grid place-items-center w-10 h-10 rounded-2xl text-xl font-black" style="background:' + accent + '22;color:' + accent + '">' + term.n + "</span>" +
          '<div><h2 class="font-display text-2xl font-extrabold m-0">Term ' + term.n + ": " + term.title + "</h2>" +
          '<p class="text-sm text-ink/55 m-0">' + term.weeks.length + " weeks</p></div>" +
        "</div>" +
        '<div class="card overflow-x-auto"><table class="w-full text-left text-sm border-collapse">' +
          '<thead><tr class="bg-ink/5 text-ink/55 text-xs uppercase tracking-wide">' +
            '<th class="p-3 font-extrabold">Week</th><th class="p-3 font-extrabold">Topic</th><th class="p-3 font-extrabold">Learning focus</th><th class="p-3 font-extrabold sr-only">Open</th>' +
          "</tr></thead><tbody>" + rows + "</tbody></table></div>" +
      "</section>";
    }).join("");
  })();
</script>
</body>
</html>
```

- [ ] **Step 5: Update the hub with two web-dev cards and the missing `js` colour**

In `index.html`, add `js: '#f7df1e'` to the root `tailwind.config` `colors` object (currently `colors: { ink: ..., paper: ..., motion: ..., looks: ..., events: ..., control: ..., sensing: ..., variables: ... }`), so the line becomes:

```js
colors: {
  ink: '#1f2a44',
  paper: '#f6f4ee',
  js: '#f7df1e',
  motion: '#4c97ff',
  looks: '#9966ff',
  events: '#ffbf00',
  control: '#ffab19',
  sensing: '#5cb1d6',
  variables: '#ff8c1a'
}
```

Then replace the single JavaScript `<article>` (the block beginning `<!-- JavaScript (live) -->` and ending at its closing `</article>`) with these two articles:

```html
      <!-- Introduction to Web Development (live) -->
      <article class="card card-hover p-6 flex flex-col relative overflow-hidden">
        <span class="pointer-events-none absolute right-6 bottom-4 grid place-items-center w-16 h-16 rounded-2xl bg-motion text-white text-xl font-black select-none" aria-hidden="true">{"{}"}</span>
        <div class="relative">
          <div class="flex items-center gap-2 mb-3">
            <span class="pill bg-events/20 text-yellow-800">Available now</span>
            <span class="pill bg-ink/5 text-ink/70">JSS 1 &amp; JSS 2</span>
          </div>
          <h3 class="font-display text-2xl font-extrabold">Introduction to Web Development</h3>
          <p class="mt-2 text-ink/70">
            A three-term first course: HTML to build pages, CSS to style them, and a little JavaScript
            to make them react. Every week ships a page students can run and change.
          </p>
          <ul class="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm font-semibold text-ink/75">
            <li class="flex items-center gap-2"><span class="text-green-600">✓</span> 3 terms, 10 weeks each</li>
            <li class="flex items-center gap-2"><span class="text-green-600">✓</span> Instructor guides &amp; handouts</li>
            <li class="flex items-center gap-2"><span class="text-green-600">✓</span> Runnable HTML, CSS &amp; JS</li>
            <li class="flex items-center gap-2"><span class="text-green-600">✓</span> Track A &amp; B assessments</li>
          </ul>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="intro-webdev/index.html" class="inline-flex items-center gap-2 rounded-xl bg-motion px-5 py-2.5 font-extrabold text-white hover:brightness-105 transition">Open course</a>
            <a href="intro-webdev/week.html?t=1&w=1" class="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-extrabold text-ink border border-ink/10 hover:border-motion/40 transition">Jump to Term 1</a>
          </div>
        </div>
      </article>

      <!-- Web Development (live) -->
      <article class="card card-hover p-6 flex flex-col relative overflow-hidden">
        <span class="pointer-events-none absolute right-6 bottom-4 grid place-items-center w-16 h-16 rounded-2xl bg-js text-ink text-xl font-black select-none" aria-hidden="true">JS</span>
        <div class="relative">
          <div class="flex items-center gap-2 mb-3">
            <span class="pill bg-events/20 text-yellow-800">Available now</span>
            <span class="pill bg-ink/5 text-ink/70">JSS 3, SS 1 &amp; SS 2</span>
          </div>
          <h3 class="font-display text-2xl font-extrabold">JavaScript: 10-Week Web Development</h3>
          <p class="mt-2 text-ink/70">
            The full classroom package for the senior years: instructor guides, student handouts, runnable
            code templates and assessments — from first console.log() to a presented mini-project.
          </p>
          <ul class="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm font-semibold text-ink/75">
            <li class="flex items-center gap-2"><span class="text-green-600">✓</span> Instructor guides &amp; timings</li>
            <li class="flex items-center gap-2"><span class="text-green-600">✓</span> Printable student handouts</li>
            <li class="flex items-center gap-2"><span class="text-green-600">✓</span> Code templates that really run</li>
            <li class="flex items-center gap-2"><span class="text-green-600">✓</span> Track A &amp; B assessments</li>
          </ul>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="webdev/index.html" class="inline-flex items-center gap-2 rounded-xl bg-js px-5 py-2.5 font-extrabold text-ink hover:brightness-105 transition">Open course</a>
            <a href="webdev/week.html?w=1" class="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-extrabold text-ink border border-ink/10 hover:border-motion/40 transition">Jump to Week 1</a>
          </div>
        </div>
      </article>
```

Also update the hub copy that is now stale. In the hero `<dl>` (the stats grid), change the "Courses" number from `2` to `3`, and change "Weeks of lessons" from `20` to `40+` (the two courses together now run 10 + 30 weeks; label it "Weeks of lessons" with value `40+`). In the `<footer>`, change `Two courses, twenty weeks.` to `Three courses, forty-plus weeks of lessons.`.

- [ ] **Step 6: Syntax-check the JS files**

Run: `node --check intro-webdev/js/data.js; node --check intro-webdev/js/config.js`
Expected: no output (exit 0).

- [ ] **Step 7: Verify the scaffold in the browser**

Open `http://localhost:8000/intro-webdev/index.html`

Expected:
- Hero reads "Introduction to Web Development" with a `JSS 1 & JSS 2` badge.
- Three term sections render, each with a 10-row table.
- Opening a week (e.g. `http://localhost:8000/intro-webdev/week.html?t=2&w=5`) shows the term badge, four tabs, and a sidebar grouped by term.
- **Next** from `?t=1&w=10` goes to `?t=2&w=1`; **Prev** from `?t=2&w=1` returns to `?t=1&w=10`.
- `http://localhost:8000/index.html` shows three web-dev/scratch cards and no missing-colour styling glitch.

- [ ] **Step 8: Commit**

```bash
git add intro-webdev/index.html intro-webdev/week.html intro-webdev/js/data.js intro-webdev/js/config.js index.html
git commit -m "feat: scaffold intro-webdev course (shell, data, home, hub cards)"
```

---

### Task 4: Author Term 1 — Week 1 (the quality exemplar)

**Files:**
- Modify: `intro-webdev/js/data.js` (replace the `week(1, ...)` entry in `term1`)

**Interfaces:**
- Consumes: the stub shape from Task 3.
- Produces: the canonical full week object every later week must match in shape and depth.

- [ ] **Step 1: Replace the Term 1 Week 1 stub**

In `intro-webdev/js/data.js`, replace the `week(1, "How the web works", ...)` line inside `term1` with this full object (leave the other nine stubs in place):

```js
    {
      n: 1, title: "How the web works", emoji: "🌐", color: "motion", tracks: "both",
      concept: "When you type a web address, your browser asks a server for files and draws them on the screen. Web pages are built from HTML files you can write yourself.",
      objective: "Students can explain what a web page is, where it lives, and how to open an HTML file in a browser.",
      teachingPoints: [
        "A web page is a text file written in HTML and saved with a .html ending.",
        "The browser reads the HTML and draws (renders) the page on the screen.",
        "You write HTML in a simple text editor, save the file, then open it in a browser."
      ],
      timing: [
        { label: "Welcome & what we will build", mins: 3 },
        { label: "Live demo: open a page", mins: 5 },
        { label: "How the web works", mins: 8 },
        { label: "Activity: save and open your first file", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Your first web page",
          filename: "hello.html",
          caption: "Save this text as hello.html and open it in a browser. Change the words, save, and reload the page to see them change.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>My first page</title>
</head>
<body>
  <h1>Hello, web!</h1>
  <p>This page is a text file that my browser drew on the screen.</p>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Saving the file as hello.txt instead of hello.html — the browser then shows the code as plain text. Show students how to turn on file extensions.",
        "Double-clicking the file so it opens in a text editor instead of the browser. Right-click, choose Open with, then pick the browser."
      ],
      handout: {
        sections: [
          {
            h: "What happens when you visit a website?",
            body: [
              "When you type an address and press Enter, your browser asks a computer called a server for some files. The server sends them back, and the browser draws them on your screen. The drawing is what you see.",
              "The main file it asks for is an HTML file. HTML is the language we use to describe what is on a page."
            ]
          },
          {
            h: "HTML is just text",
            body: [
              "An HTML file is a plain text file. You can write it in any text editor. The only special thing is its name: it ends in .html so the browser knows what it is."
            ],
            list: [
              "Write the page in a text editor",
              "Save it with a .html ending",
              "Open it in a browser to see the page"
            ]
          },
          {
            h: "Your first page",
            codes: [
              { label: "hello.html", code: "<h1>Hello, web!</h1>" }
            ]
          }
        ]
      },
      template: {
        filename: "first_page.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>My first page</title>
</head>
<body>
  <h1>Hello, web!</h1>
  <p>Write a sentence about yourself here.</p>
</body>
</html>`,
        tasks: [
          "Save the file as first_page.html and open it in a browser.",
          "Change the heading to your own name.",
          "Change the paragraph to a sentence about you.",
          "Add a second <p> line about your favourite hobby."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The file opens in a browser and shows a heading",
            "The file name ends in .html",
            "The student can point to where the text is written in the file"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: What does HTML stand for, and what is it used for?", answer: "HyperText Markup Language. It describes the content and structure of a web page." },
            { prompt: "Question 2: What file ending must a web page have?", answer: ".html" },
            { prompt: "Question 3: Name one program that draws a web page on the screen.", answer: "A web browser, such as Chrome, Firefox or Edge." }
          ]
        }
      ]
    },
```

- [ ] **Step 2: Syntax-check**

Run: `node --check intro-webdev/js/data.js`
Expected: no output (exit 0).

- [ ] **Step 3: Verify in the browser**

Open `http://localhost:8000/intro-webdev/week.html?t=1&w=1`

Expected: Instructor tab shows objective, three teaching points and a timing chart; Handout shows three sections; Code tab's editor runs and shows "Hello, web!"; Assessment shows a checklist and a three-question quiz with hidden answers.

- [ ] **Step 4: Commit**

```bash
git add intro-webdev/js/data.js
git commit -m "content(intro): author Term 1 Week 1"
```

---

### Task 5: Author Term 1 — Weeks 2–5

**Files:**
- Modify: `intro-webdev/js/data.js` (replace the `week(...)` stubs for Term 1 weeks 2–5)

**Interfaces:**
- Consumes: the Week 1 exemplar (Task 4) as the shape/quality bar.
- Produces: full week objects for Term 1 weeks 2, 3, 4, 5.

- [ ] **Step 1: Author Week 2 — "Your first page: tags and elements"**

Replace the `week(2, ...)` stub with a full object. Content brief:
- objective: "Students can write a valid HTML skeleton and explain the jobs of the head and the body."
- teachingPoints: tags come in pairs (an opening tag and a closing tag); an element is a tag plus its content; the head holds information about the page (like the title) and the body holds what people see.
- timing: Welcome 3 · Live demo: label the skeleton 5 · Tags and elements 8 · Activity 15 · Share 4.
- liveDemo: `skeleton.html` — a labelled full page with `<!DOCTYPE html>`, `<html>`, `<head><title>…</title></head>`, `<body>` containing an `<h1>` and a `<p>`; caption explains each part.
- commonMistakes: forgetting the closing tag; putting visible text inside `<head>`; nesting tags in the wrong order.
- handout sections: "Tags and elements" (body + a list of the opening/closing idea), "head and body" (body), "The skeleton" (a code snippet of the skeleton).
- template: `skeleton.html` with a title and one heading/paragraph; tasks: fill in the title, add a second paragraph, close every tag, add a comment marking the body.
- assessment: Track A checklist (page opens; head and body both present; every tag is closed); Track B quiz (what is an element; which part holds the title; which part holds visible text).

- [ ] **Step 2: Author Week 3 — "Headings and paragraphs"**

Replace the `week(3, ...)` stub. Content brief:
- objective: "Students can use heading levels and paragraphs to organise text, and add comments to their code."
- teachingPoints: `<h1>` to `<h6>` show importance, with `<h1>` the most important; `<p>` groups sentences into a paragraph; comments `<!-- -->` are notes for humans that the browser ignores.
- timing: Welcome 3 · Live demo 5 · Headings & paragraphs 8 · Activity 15 · Share 4.
- liveDemo: `headings.html` showing an `<h1>`, `<h2>` and two `<p>` elements plus one comment.
- commonMistakes: using headings only to make text big instead of to show importance; more than one `<h1>` on a page; expecting comments to appear on the page.
- handout sections: "Headings show importance", "Paragraphs group sentences", "Comments are notes for you" (with a code snippet).
- template: `my_story.html` with a title and some text; tasks: add an `<h1>`, add two `<h2>` sub-sections with a `<p>` each, add a comment above each section.
- assessment: Track A checklist; Track B quiz (which heading is most important; what does `<p>` do; do comments show on the page).

- [ ] **Step 3: Author Week 4 — "Lists"**

Replace the `week(4, ...)` stub. Content brief:
- objective: "Students can build bulleted and numbered lists, and nest one list inside another."
- teachingPoints: `<ul>` makes an unordered (bullet) list; `<ol>` makes an ordered (numbered) list; each item is an `<li>`, and a list can go inside a list item.
- timing: Welcome 3 · Live demo 5 · Lists 8 · Activity 15 · Share 4.
- liveDemo: `lists.html` with a `<ul>` of favourite foods and an `<ol>` of morning steps.
- commonMistakes: putting text directly in `<ul>` instead of inside `<li>`; nesting a list outside an `<li>`; using `<ol>` when order does not matter.
- handout sections: "Two kinds of lists", "Nesting lists", code snippets for each.
- template: `lists.html`; tasks: make a bullet list of three hobbies, a numbered list of three steps, and nest one list inside an item.
- assessment: Track A checklist; Track B quiz (which tag makes a numbered list; what tag wraps each item; where does a nested list go).

- [ ] **Step 4: Author Week 5 — "Links and images"**

Replace the `week(5, ...)` stub. Content brief:
- objective: "Students can add working links and images using attributes, and understand relative file paths."
- teachingPoints: `<a href="...">` makes a link; `<img src="..." alt="...">` shows an image; `alt` describes the image and relative paths point to files in the same project folder.
- timing: Welcome 3 · Live demo 5 · Links & images 8 · Activity 15 · Share 4.
- liveDemo: `links.html` with a link to another page and an `<img>` with `src` and `alt`.
- commonMistakes: wrong file path so the image shows a broken icon; missing `alt` text; writing `<img>...</img>` (the img tag is empty).
- handout sections: "Links", "Images and alt text", "Paths: where files live" (code snippets).
- template: `links.html`; tasks: add a link to a second page, add an image with `alt`, fix a deliberately broken path, add a link that opens in a new tab.
- assessment: Track A checklist; Track B quiz (which attribute holds a link address; what is `alt` for; what does a relative path mean).

- [ ] **Step 5: Syntax-check**

Run: `node --check intro-webdev/js/data.js`
Expected: no output (exit 0).

- [ ] **Step 6: Verify in the browser**

Open weeks 2–5 in turn: `http://localhost:8000/intro-webdev/week.html?t=1&w=2` … `?t=1&w=5`

Expected: each shows all four tabs with content (no empty tabs); Code tab templates run and render.

- [ ] **Step 7: Commit**

```bash
git add intro-webdev/js/data.js
git commit -m "content(intro): author Term 1 weeks 2-5"
```

---

### Task 6: Author Term 1 — Weeks 6–10

**Files:**
- Modify: `intro-webdev/js/data.js` (replace the `week(...)` stubs for Term 1 weeks 6–10)

**Interfaces:**
- Consumes: the Week 1 exemplar (Task 4) as the shape/quality bar.
- Produces: full week objects for Term 1 weeks 6, 7, 8, 9, 10.

- [ ] **Step 1: Author Week 6 — "Tables"**

Replace the `week(6, ...)` stub. Content brief:
- objective: "Students can build a table with rows, headers and cells."
- teachingPoints: `<table>` holds the whole table; `<tr>` is a row; `<th>` is a header cell and `<td>` is a data cell.
- timing: Welcome 3 · Live demo 5 · Tables 8 · Activity 15 · Share 4.
- liveDemo: `table.html` — a 3×3 class timetable with `<th>` headers.
- commonMistakes: putting `<td>` directly in `<table>` without a `<tr>`; forgetting a closing tag so rows merge; using tables for layout instead of for data.
- handout sections: "Rows, headers and cells", "A simple timetable" (code).
- template: `timetable.html`; tasks: fill a 3-column table, add a header row, add a fourth subject row.
- assessment: Track A checklist; Track B quiz (which tag is a row; difference between th and td; how many cells in two rows of three).

- [ ] **Step 2: Author Week 7 — "Forms"**

Replace the `week(7, ...)` stub. Content brief:
- objective: "Students can build a simple form with labels, inputs and a button."
- teachingPoints: `<form>` wraps a set of fields; `<label>` describes a field; `<input>` collects an answer and `<button>` submits.
- timing: Welcome 3 · Live demo 5 · Forms 8 · Activity 15 · Share 4.
- liveDemo: `form.html` — a name field, an email field and a submit button, each with a label.
- commonMistakes: an input with no label; forgetting the `type` attribute; nesting a button outside the form.
- handout sections: "Parts of a form", "Input types", code snippet.
- template: `signup.html`; tasks: add a labelled text input, an email input, a submit button, and a second label/input pair.
- assessment: Track A checklist; Track B quiz (what does a label do; which tag makes a button; name two input types).

- [ ] **Step 3: Author Week 8 — "Semantic layout"**

Replace the `week(8, ...)` stub. Content brief:
- objective: "Students can identify the main regions of a page and use semantic tags to mark them."
- teachingPoints: `<header>` is the top of a page or section; `<nav>` holds navigation links; `<main>` holds the main content; `<footer>` is the bottom.
- timing: Welcome 3 · Live demo 5 · Semantic tags 8 · Activity 15 · Share 4.
- liveDemo: `layout.html` — a page using header, nav, main and footer.
- commonMistakes: using `<div>` for everything; more than one `<main>`; putting the footer inside the main content.
- handout sections: "The regions of a page", "Why names matter" (code).
- template: `layout.html`; tasks: label each region, add a nav link, move the footer to the bottom, add a second heading inside main.
- assessment: Track A checklist; Track B quiz (which tag holds navigation; which holds the main content; where does the footer go).

- [ ] **Step 4: Author Week 9 — "Structuring a full page"**

Replace the `week(9, ...)` stub. Content brief:
- objective: "Students can plan and build a multi-section page with a clear structure."
- teachingPoints: a page is a set of sections; plan the sections before writing code; each section gets a heading and content, and sections are marked with semantic tags.
- timing: Welcome 3 · Live demo 5 · Planning a page 8 · Activity 15 · Share 4.
- liveDemo: `plan.html` — a sketched page plan turned into a structured HTML page.
- commonMistakes: writing content with no headings to organise it; jumping straight into code without a plan; inconsistent structure between sections.
- handout sections: "Plan first, then build", "A page is a set of sections" (code).
- template: `my_page.html`; tasks: plan four sections on paper, build each section with a heading, wrap each in a semantic tag, add a nav linking to each section.
- assessment: Track A checklist; Track B quiz (why plan before coding; how many main sections does the page have; which tags mark sections).

- [ ] **Step 5: Author Week 10 — "Project: About Me page"**

Replace the `week(10, ...)` stub. Content brief:
- objective: "Students build and present a complete About Me page in HTML that uses everything from Term 1."
- teachingPoints: combine headings, paragraphs, lists, links, images and semantic tags; test the page in a browser before presenting; present what each part does.
- timing: Welcome 3 · Demo of a finished page 4 · Build time 20 · Present 5 · Wrap-up 3.
- liveDemo: `about_me.html` — a finished multi-section About Me page.
- commonMistakes: broken image paths; missing closing tags; an untidy page with no headings.
- handout sections: "What your page must include" (checklist), "Presentation" (a short script template), a code snippet of the finished example.
- template: `about_me.html` starter with empty sections; tasks: add a heading and intro, an image, a list of hobbies, a link, a footer; test in a browser; present.
- assessment: Track A rubric (page runs; uses at least four tags from the term; student can explain a section); Track B design document form (sections planned, tags used, what each section contains).

- [ ] **Step 6: Syntax-check**

Run: `node --check intro-webdev/js/data.js`
Expected: no output (exit 0).

- [ ] **Step 7: Verify in the browser**

Open `http://localhost:8000/intro-webdev/week.html?t=1&w=6` … `?t=1&w=10`

Expected: all four tabs populated; code runs; Week 10 assessment shows a rubric and a form.

- [ ] **Step 8: Commit**

```bash
git add intro-webdev/js/data.js
git commit -m "content(intro): author Term 1 weeks 6-10"
```

---

### Task 7: Add intro examples to the shared playground

**Files:**
- Modify: `webdev/js/playground.js`
- Modify: `webdev/playground.html`

**Interfaces:**
- Consumes: `window.WEBDEV_CURRICULUM` and, when present, `window.INTRO_CURRICULUM` (both `terms`- or `weeks`-shaped).
- Produces: an example `<select>` that lists templates from both courses.

- [ ] **Step 1: Load the intro data on the playground page**

In `webdev/playground.html`, change the script block near the end from:

```html
<script src="js/data.js"></script>
<script src="js/playground.js"></script>
```

to:

```html
<script src="js/data.js"></script>
<script src="../intro-webdev/js/data.js"></script>
<script src="js/playground.js"></script>
```

- [ ] **Step 2: Collect examples from both curricula**

In `webdev/js/playground.js`, replace the block that starts with `// One entry per week that ships a template.` and ends with the `});` after the `cur.weeks.forEach(...)` call (lines ~52–65) with:

```js
  function addWeeks(prefix, list) {
    (list || []).forEach(function (w) {
      if (w.template) {
        options.push({ value: prefix + "w" + w.n, label: prefix + "Week " + w.n + ": " + w.title + " — " + w.template.filename, code: w.template.code });
      }
      if (w.variants) {
        Object.keys(w.variants).forEach(function (k) {
          var v = w.variants[k];
          if (v.template) {
            options.push({ value: prefix + "w" + w.n + "-" + k, label: prefix + "Week " + w.n + " (" + v.name + ") — " + v.template.filename, code: v.template.code });
          }
        });
      }
    });
  }

  function collect(curriculum, prefix) {
    if (!curriculum) return;
    if (curriculum.terms && curriculum.terms.length) {
      curriculum.terms.forEach(function (term, ti) {
        addWeeks(prefix + "T" + (ti + 1) + " ", term.weeks);
      });
    } else {
      addWeeks(prefix, curriculum.weeks);
    }
  }

  // One entry per week that ships a template, across both courses.
  collect(window.WEBDEV_CURRICULUM, "");
  collect(window.INTRO_CURRICULUM, "Intro · ");
```

- [ ] **Step 3: Syntax-check**

Run: `node --check webdev/js/playground.js`
Expected: no output (exit 0).

- [ ] **Step 4: Verify in the browser**

Open `http://localhost:8000/webdev/playground.html`

Expected: the "Load an example" dropdown lists both the web-dev weeks and the intro weeks (labelled `Intro · T1 Week …`); choosing one loads it into the editor and it runs.

- [ ] **Step 5: Commit**

```bash
git add webdev/playground.html webdev/js/playground.js
git commit -m "feat: load intro course examples in the shared playground"
```

---

### Task 8: Full verification pass

**Files:** none (verification only).

- [ ] **Step 1: Check every page loads without console errors**

Using agent-browser, open each of:
- `http://localhost:8000/index.html`
- `http://localhost:8000/intro-webdev/index.html`
- `http://localhost:8000/intro-webdev/week.html?t=1&w=1`
- `http://localhost:8000/intro-webdev/week.html?t=3&w=10`
- `http://localhost:8000/webdev/index.html`
- `http://localhost:8000/webdev/week.html?w=1`
- `http://localhost:8000/webdev/playground.html`

Expected: no uncaught JavaScript errors in the browser console on any page.

- [ ] **Step 2: Check the interactive behaviours**

On `intro-webdev/week.html?t=1&w=1`:
- Switch across all four tabs.
- In the Code tab press **Run** and confirm the preview and console update.
- Press **Print this handout** and confirm only the handout is targeted for printing.

- [ ] **Step 3: Check cross-term navigation**

- From `?t=1&w=10`, **Next** → `?t=2&w=1`.
- From `?t=2&w=1`, **Prev** → `?t=1&w=10`.
- From `?t=3&w=10`, **Next** → the Code Playground (`../webdev/playground.html`).

- [ ] **Step 4: Confirm the legacy course is untouched in behaviour**

- `webdev/week.html?w=1` and `?w=10` render; the sidebar lists Weeks 1–10 (single implicit term, no term heading).
- `webdev/index.html` week links still open the correct lessons.

- [ ] **Step 5: Commit any fixes**

```bash
git add -A
git commit -m "test: verify intro course and shared renderer end to end"
```

---

## Notes for the implementer

- Tasks 5 and 6 are content authoring: match the Week 1 object's shape exactly. Do not leave `objective`, `teachingPoints`, `timing`, `liveDemo`, `commonMistakes`, `handout.sections`, `template`, or `assessment` empty for a finished week.
- Term 1 uses `color` values from the existing palette keys (`motion`, `looks`, `control`, `sensing`, `operators`, `variables`, `events`).
- Terms 2 and 3 content are **not** in this plan; they will be separate follow-up plans using the same week shape and the Term 1 exemplar as the template.
- Do not modify `scratch/` or the senior `webdev` curriculum content.
