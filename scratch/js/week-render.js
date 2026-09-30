/* ============================================================
   week-render.js — builds a full lesson page from data.js
   The lesson number comes from the URL: week.html?w=3
   ============================================================ */
(function () {
  "use strict";

  var CL = window.CL || { escapeHtml: function (s) { return String(s == null ? "" : s); }, qs: function () { return null; } };
  var e = CL.escapeHtml;

  var PALETTE = {
    motion: "#4c97ff", looks: "#9966ff", sound: "#cf63cf", events: "#ffbf00",
    control: "#ffab19", sensing: "#5cb1d6", operators: "#59c059", variables: "#ff8c1a", myblocks: "#ff6680"
  };
  var CAT_LABEL = {
    motion: "Motion", looks: "Looks", sound: "Sound", events: "Events",
    control: "Control", sensing: "Sensing", operators: "Operators", variables: "Variables", myblocks: "My Blocks"
  };

  function loadError(message) {
    var root = document.getElementById("week-root");
    if (!root) return;
    root.innerHTML =
      '<div class="card p-6 max-w-xl mx-auto text-center">' +
        '<p class="text-4xl mb-2" aria-hidden="true">🧭</p>' +
        '<h1 class="font-display text-2xl font-extrabold m-0">This lesson could not load</h1>' +
        '<p class="text-ink-soft font-bold mt-2">' + message + "</p>" +
        '<p class="mt-4"><a class="inline-flex items-center gap-2 rounded-xl bg-motion px-5 py-2.5 font-extrabold text-white hover:brightness-105 transition" href="index.html">Back to course home</a></p>' +
      "</div>";
  }

  var cur = window.SCRATCH_CURRICULUM;
  if (!cur || !cur.weeks || !cur.weeks.length) { loadError("The course data did not load. Check the file is present, then reload the page."); return; }

  var total = cur.weeks.length;
  var n = parseInt(CL.qs("w") || "1", 10);
  if (!(n >= 1 && n <= total)) n = 1;
  var week = cur.weeks[n - 1];
  var accent = PALETTE[week.color] || PALETTE.motion;
  var soft = accent + "22";

  document.title = "Week " + n + ": " + week.title + " — Scratch Course";

  /* ---------- top prev / next buttons ---------- */
  var prevUrl = n > 1 ? "week.html?w=" + (n - 1) : null;
  var nextUrl = n < total ? "week.html?w=" + (n + 1) : null;
  var prevTop = document.getElementById("prevTop");
  var nextTop = document.getElementById("nextTop");
  if (prevTop) {
    if (prevUrl) prevTop.addEventListener("click", function () { window.location.href = prevUrl; });
    else prevTop.classList.add("hidden");
  }
  if (nextTop) {
    if (nextUrl) { nextTop.addEventListener("click", function () { window.location.href = nextUrl; }); nextTop.textContent = "Next →"; }
    else { nextTop.textContent = "Back to course"; nextTop.addEventListener("click", function () { window.location.href = "index.html"; }); }
  }

  /* ---------- helpers ---------- */
  function card(id, inner) {
    return '<section id="' + id + '" class="card p-6 scroll-mt-24">' + inner + "</section>";
  }
  function sectionTitle(emoji, title, extra) {
    return '<h2 class="font-display text-2xl font-extrabold flex items-center gap-2 mb-3">' +
      '<span aria-hidden="true">' + emoji + "</span>" + e(title) +
      (extra ? '<span class="ml-1 text-sm font-bold text-ink-muted">' + e(extra) + "</span>" : "") +
      "</h2>";
  }
  function listItems(arr) {
    return '<ul class="space-y-2">' + (arr || []).map(function (t) {
      return '<li class="flex items-start gap-2 text-ink/80"><span style="color:' + accent + '" class="font-extrabold mt-0.5">▸</span><span>' + e(t) + "</span></li>";
    }).join("") + "</ul>";
  }

  /* ---------- hero ---------- */
  var hero =
    '<section class="mb-8">' +
      '<p class="text-sm font-bold text-ink-muted mb-3"><a class="hover:text-motion" href="index.html">Course home</a> <span class="mx-1">/</span> Week ' + n + " of " + total + "</p>" +
      '<div class="flex flex-col sm:flex-row sm:items-center gap-4">' +
        '<div class="grid place-items-center w-20 h-20 rounded-3xl text-5xl shrink-0" style="background:' + soft + '">' + week.emoji + "</div>" +
        "<div>" +
          '<span class="pill" style="background:' + soft + ";color:" + accent + '">Week ' + n + "</span>" +
          '<h1 class="font-display text-3xl sm:text-4xl font-extrabold mt-1">' + e(week.title) + "</h1>" +
          '<p class="text-ink-soft max-w-2xl mt-2">' + e(week.concept) + "</p>" +
        "</div>" +
      "</div>" +
    "</section>";

  /* ---------- learn + teaching point ---------- */
  var learnCard = card("learn",
    sectionTitle("🎯", "What you'll learn") +
    listItems(week.learn) +
    '<div class="mt-5 rounded-2xl p-4 border-l-4" style="background:' + soft + ";border-color:" + accent + '">' +
      '<p class="text-xs font-extrabold uppercase tracking-wide" style="color:' + accent + '">Key teaching point</p>' +
      '<p class="font-bold text-ink/85 mt-1">' + e(week.teachingPoint) + "</p>" +
    "</div>" +
    (week.vocab && week.vocab.length ? '<div class="mt-4 flex flex-wrap gap-2">' + week.vocab.map(function (v) {
      return '<span class="pill bg-ink/5 text-ink-soft">' + e(v) + "</span>";
    }).join("") + "</div>" : "")
  );

  /* ---------- demo ---------- */
  var demoCard =
    '<section id="demo" class="card p-6 scroll-mt-24" style="border-top:5px solid ' + accent + '">' +
      '<div class="flex flex-wrap items-center justify-between gap-2 mb-4">' +
        '<h2 class="font-display text-2xl font-extrabold flex items-center gap-2 m-0"><span aria-hidden="true">▶️</span> Try it — live demo</h2>' +
        '<span class="pill bg-ink/5 text-ink-soft">press Run, then change things</span>' +
      "</div>" +
      '<div id="demo-mount"></div>' +
      '<p class="text-sm text-ink-muted mt-4">Want to build your own blocks from scratch? <a class="font-bold text-motion hover:underline" href="playground.html">Open the Block Playground →</a></p>' +
    "</section>";

  /* ---------- blocks ---------- */
  var cats = {};
  (function walk(blocks) {
    (blocks || []).forEach(function (b) {
      if (b.cat) cats[b.cat] = true;
      if (b.c) b.c.forEach(walk);
    });
  })(week.blocks);
  var legend = Object.keys(cats).map(function (c) {
    return '<span><i style="background:' + (PALETTE[c] || "#888") + '"></i>' + e(CAT_LABEL[c] || c) + "</span>";
  }).join("");

  var blocksCard =
    '<section id="blocks" class="card p-6 scroll-mt-24">' +
      sectionTitle("🧱", "Build it in Scratch", "the block recipe") +
      '<p class="text-sm text-ink-soft mb-4">These are the real blocks to drag out in Scratch. Snap them together in this order and press the green flag.</p>' +
      '<div class="sb-panel" id="blocks-mount"></div>' +
      '<div class="sb-legend mt-4">' + legend + "</div>" +
    "</section>";

  /* ---------- activity ---------- */
  var activityCard = card("activity",
    sectionTitle("🛠️", "Activity — build it yourself") +
    '<ol class="steps mt-4">' + (week.activity || []).map(function (step) {
      return "<li><span class='text-ink/80'>" + e(step) + "</span></li>";
    }).join("") + "</ol>"
  );

  /* ---------- mini project + stretch ---------- */
  var miniCard = card("project",
    sectionTitle("🏁", "Mini-project") +
    '<h3 class="font-extrabold text-lg text-ink/90">' + e(week.miniProject.title) + "</h3>" +
    '<p class="text-ink/70 mt-1">' + e(week.miniProject.desc) + "</p>" +
    (week.miniProject.example ? '<p class="mt-3 rounded-xl bg-ink text-white/90 font-bold px-4 py-3 text-sm">' + e(week.miniProject.example) + "</p>" : "")
  );

  var stretchCard = card("stretch",
    sectionTitle("🚀", "Stretch challenge") +
    '<p class="text-ink/75">' + e(week.stretch) + "</p>"
  );

  var exampleCard = week.example ? card("example",
    sectionTitle(week.example.label.indexOf("Story") === 0 ? "📖" : "🎮", week.example.label) +
    '<p class="text-ink/75">' + e(week.example.text) + "</p>"
  ) : "";

  /* ---------- lesson notes (student + teacher reading) ---------- */
  var notes = week.notes || null;
  var notesCard = "";

  function noteParas(arr) {
    return (arr || []).map(function (p) { return "<p>" + e(p) + "</p>"; }).join("");
  }
  function noteBullets(arr, marker) {
    return '<ul class="notes-list">' + (arr || []).map(function (x) {
      return "<li>" + (marker ? '<span class="notes-mark" aria-hidden="true">' + marker + "</span>" : "") + "<span>" + e(x) + "</span></li>";
    }).join("") + "</ul>";
  }

  if (notes && (notes.student || notes.teacher)) {
    var st = notes.student || {};
    var te = notes.teacher || {};

    var studentPanel =
      '<div class="notes-reading">' +
        (st.idea && st.idea.length ? '<h3 class="notes-h">The big idea</h3>' + noteParas(st.idea) : "") +
        (st.words && st.words.length
          ? '<h3 class="notes-h">Words to know</h3><dl class="glossary">' +
            st.words.map(function (w) {
              return "<dt>" + e(w.term) + "</dt><dd>" + e(w.meaning) + "</dd>";
            }).join("") + "</dl>"
          : "") +
        (st.remember && st.remember.length ? '<h3 class="notes-h">Remember</h3>' + noteBullets(st.remember, "✓") : "") +
        (st.discuss && st.discuss.length
          ? '<h3 class="notes-h">Talk about it</h3><ol class="notes-quiz">' +
            st.discuss.map(function (q) { return "<li>" + e(q) + "</li>"; }).join("") + "</ol>"
          : "") +
      "</div>";

    var teacherPanel =
      '<div class="notes-reading">' +
        (te.goal ? '<h3 class="notes-h">The one goal</h3><p>' + e(te.goal) + "</p>" : "") +
        (te.script
          ? '<div class="notes-script"><p class="notes-mini">How to explain it</p><p>' + e(te.script) + "</p></div>"
          : "") +
        (te.misconceptions && te.misconceptions.length
          ? '<h3 class="notes-h">Misconceptions &amp; fixes</h3><div class="grid gap-2">' +
            te.misconceptions.map(function (m) {
              return '<div class="misc"><p class="misc-got">' + e(m.got) + '</p><p class="misc-fix">' + e(m.fix) + "</p></div>";
            }).join("") + "</div>"
          : "") +
        (te.check && te.check.length ? '<h3 class="notes-h">Assessment check</h3>' + noteBullets(te.check, "☑") : "") +
        (te.before && te.before.length ? '<h3 class="notes-h">Before class</h3>' + noteBullets(te.before, "▸") : "") +
      "</div>";

    notesCard =
      '<section id="notes" class="card p-6 scroll-mt-24">' +
        '<div class="flex flex-wrap items-center justify-between gap-3 mb-4">' +
          '<h2 class="font-display text-2xl font-extrabold flex items-center gap-2 m-0"><span aria-hidden="true">📖</span> Lesson notes</h2>' +
          '<button type="button" class="notes-print" data-print-notes>🖨 Print this note</button>' +
        "</div>" +
        '<div class="notes-tabs" role="tablist" aria-label="Lesson notes">' +
          '<button type="button" role="tab" id="tab-student" aria-controls="panel-student" aria-selected="true" class="notes-tab">👩‍🎓 For students</button>' +
          '<button type="button" role="tab" id="tab-teacher" aria-controls="panel-teacher" aria-selected="false" tabindex="-1" class="notes-tab">🍎 For the teacher</button>' +
        "</div>" +
        '<div id="panel-student" role="tabpanel" aria-labelledby="tab-student" class="notes-panel">' + studentPanel + "</div>" +
        '<div id="panel-teacher" role="tabpanel" aria-labelledby="tab-teacher" class="notes-panel" hidden>' + teacherPanel + "</div>" +
      "</section>";
  }

  /* ---------- sidebar ---------- */
  var tocItems = [
    ["learn", "What you'll learn"]
  ];
  if (week.notes) tocItems.push(["notes", "Lesson notes"]);
  tocItems = tocItems.concat([
    ["demo", "Live demo"], ["blocks", "Block recipe"],
    ["activity", "Activity"], ["project", "Mini-project"], ["stretch", "Stretch challenge"]
  ]);
  if (week.example) tocItems.push(["example", week.example.label]);
  tocItems.push(["teacher", "Teacher quick reference"]);

  var t = week.teacher || {};
  var teacherCard =
    '<div class="card p-6">' +
      '<details class="teacher" id="teacher" open>' +
        '<summary><span aria-hidden="true">🍎</span> Teacher quick reference</summary>' +
        '<div class="teacher-body grid gap-4">' +
          (t.timing ? '<div><p class="text-xs font-extrabold uppercase tracking-wide text-orange-700/70 m-0">Timing</p><p class="text-sm font-bold text-ink/75 m-0">' + e(t.timing) + "</p></div>" : "") +
          (t.errors && t.errors.length ? "<div><p class=\"text-xs font-extrabold uppercase tracking-wide text-orange-700/70 m-0\">Common bugs to expect</p><ul class=\"text-sm list-disc pl-5 mt-1 space-y-1 text-ink/75\">" + t.errors.map(function (x) { return "<li>" + e(x) + "</li>"; }).join("") + "</ul></div>" : "") +
          (t.support || t.extend ? '<div class="grid sm:grid-cols-2 gap-3">' +
            (t.support ? '<div class="rounded-xl bg-white/70 p-3"><p class="text-xs font-extrabold uppercase tracking-wide text-ink-muted m-0">Support</p><p class="text-sm text-ink/75 m-0">' + e(t.support) + "</p></div>" : "") +
            (t.extend ? '<div class="rounded-xl bg-white/70 p-3"><p class="text-xs font-extrabold uppercase tracking-wide text-ink-muted m-0">Extend</p><p class="text-sm text-ink/75 m-0">' + e(t.extend) + "</p></div>" : "") +
          "</div>" : "") +
          (t.tip ? '<p class="text-sm rounded-xl bg-white/70 p-3 m-0"><strong>Pro tip:</strong> ' + e(t.tip) + "</p>" : "") +
        "</div>" +
      "</details>" +
    "</div>";

  var tocCard =
    '<div class="card p-6">' +
      '<p class="text-xs font-extrabold uppercase tracking-wide text-ink-muted mb-3">In this lesson</p>' +
      '<nav class="grid gap-1">' + tocItems.map(function (it) {
        return '<a class="text-sm font-bold text-ink-soft hover:text-motion py-0.5" href="#' + it[0] + '">' + e(it[1]) + "</a>";
      }).join("") + "</nav>" +
    "</div>";

  /* ---------- bottom nav ---------- */
  var bottomNav =
    '<section class="grid sm:grid-cols-2 gap-4 mt-8">' +
      (prevUrl
        ? '<a href="' + prevUrl + '" class="card card-hover p-5"><p class="text-xs font-extrabold uppercase text-ink-muted m-0">← Previous</p><p class="font-display text-lg font-extrabold m-0">Week ' + (n - 1) + ": " + e(cur.weeks[n - 2].title) + "</p></a>"
        : '<a href="index.html" class="card card-hover p-5"><p class="text-xs font-extrabold uppercase text-ink-muted m-0">← Back</p><p class="font-display text-lg font-extrabold m-0">Course home</p></a>') +
      (nextUrl
        ? '<a href="' + nextUrl + '" class="card card-hover p-5 text-right"><p class="text-xs font-extrabold uppercase text-ink-muted m-0">Next →</p><p class="font-display text-lg font-extrabold m-0">Week ' + (n + 1) + ": " + e(cur.weeks[n].title) + "</p></a>"
        : '<a href="playground.html" class="card card-hover p-5 text-right"><p class="text-xs font-extrabold uppercase text-ink-muted m-0">Next →</p><p class="font-display text-lg font-extrabold m-0">Block Playground</p></a>') +
    "</section>";

  /* ---------- assemble ---------- */
  var root = document.getElementById("week-root");
  root.innerHTML =
    hero +
    '<div class="grid lg:grid-cols-3 gap-6 items-start">' +
      '<div class="lg:col-span-2 grid gap-6">' +
        learnCard + notesCard + demoCard + blocksCard + activityCard + miniCard + stretchCard + exampleCard +
      "</div>" +
      '<aside class="grid gap-6 lg:sticky lg:top-20">' +
        tocCard + teacherCard +
      "</aside>" +
    "</div>" +
    bottomNav;

  /* ---------- mount blocks ---------- */
  var blocksMount = document.getElementById("blocks-mount");
  if (window.ScratchBlocks && week.blocks && week.blocks.length) {
    blocksMount.appendChild(window.ScratchBlocks.render(week.blocks));
  } else {
    blocksMount.innerHTML = '<p class="text-sm text-ink-muted">No block recipe for this week — see the activity above.</p>';
  }

  /* ---------- mount demo ---------- */
  var demoMount = document.getElementById("demo-mount");
  var demo = window.SCRATCH_DEMOS && window.SCRATCH_DEMOS[week.demo];
  if (demo && demo.build) {
    try {
      demo.build(demoMount);
    } catch (err) {
      demoMount.innerHTML = '<p class="text-sm font-bold text-rose-600">Demo failed to load: ' + e(err.message) + "</p>";
      if (window.console) console.error(err);
    }
  } else {
    demoMount.innerHTML = '<p class="text-sm text-ink-muted">Demo coming soon.</p>';
  }

  /* ---------- lesson notes: tabs + print ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".notes-tab"));
  if (tabs.length) {
    function selectTab(idx) {
      tabs.forEach(function (tab, i) {
        var on = i === idx;
        tab.setAttribute("aria-selected", String(on));
        tab.setAttribute("tabindex", on ? "0" : "-1");
        var panel = document.getElementById(tab.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { selectTab(i); });
      tab.addEventListener("keydown", function (ev) {
        if (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft") return;
        ev.preventDefault();
        var next = (i + (ev.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
        tabs[next].focus();
        selectTab(next);
      });
    });
    selectTab(0);
  }

  var printBtn = document.querySelector("[data-print-notes]");
  if (printBtn) {
    printBtn.addEventListener("click", function () {
      var panel = document.querySelector(".notes-panel:not([hidden])");
      if (!panel) return;
      var wasTarget = document.querySelectorAll(".print-target");
      Array.prototype.forEach.call(wasTarget, function (n) { n.classList.remove("print-target"); });
      panel.classList.add("print-target");
      document.body.classList.add("printing");

      var finished = false;
      function cleanup() {
        if (finished) return;
        finished = true;
        document.body.classList.remove("printing");
        panel.classList.remove("print-target");
        window.removeEventListener("afterprint", cleanup);
      }
      window.addEventListener("afterprint", cleanup);
      window.print();
      // Safety net for browsers that never fire afterprint.
      setTimeout(cleanup, 4000);
    });
  }
})();
