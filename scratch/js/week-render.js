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

  var cur = window.SCRATCH_CURRICULUM;
  if (!cur) { return; }

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
      (extra ? '<span class="ml-1 text-sm font-bold text-ink/40">' + e(extra) + "</span>" : "") +
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
      '<p class="text-sm font-bold text-ink/45 mb-3"><a class="hover:text-motion" href="index.html">Course home</a> <span class="mx-1">/</span> Week ' + n + " of " + total + "</p>" +
      '<div class="flex flex-col sm:flex-row sm:items-center gap-4">' +
        '<div class="grid place-items-center w-20 h-20 rounded-3xl text-5xl shrink-0" style="background:' + soft + '">' + week.emoji + "</div>" +
        "<div>" +
          '<span class="pill" style="background:' + soft + ";color:" + accent + '">Week ' + n + "</span>" +
          '<h1 class="font-display text-3xl sm:text-4xl font-extrabold mt-1">' + e(week.title) + "</h1>" +
          '<p class="text-ink/65 max-w-2xl mt-2">' + e(week.concept) + "</p>" +
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
      return '<span class="pill bg-ink/5 text-ink/60">' + e(v) + "</span>";
    }).join("") + "</div>" : "")
  );

  /* ---------- demo ---------- */
  var demoCard =
    '<section id="demo" class="card p-6 scroll-mt-24" style="border-top:5px solid ' + accent + '">' +
      '<div class="flex flex-wrap items-center justify-between gap-2 mb-4">' +
        '<h2 class="font-display text-2xl font-extrabold flex items-center gap-2 m-0"><span aria-hidden="true">▶️</span> Try it — live demo</h2>' +
        '<span class="pill bg-ink/5 text-ink/60">press Run, then change things</span>' +
      "</div>" +
      '<div id="demo-mount"></div>' +
      '<p class="text-sm text-ink/55 mt-4">Want to build your own blocks from scratch? <a class="font-bold text-motion hover:underline" href="playground.html">Open the Block Playground →</a></p>' +
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
      '<p class="text-sm text-ink/60 mb-4">These are the real blocks to drag out in Scratch. Snap them together in this order and press the green flag.</p>' +
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

  /* ---------- sidebar ---------- */
  var tocItems = [
    ["learn", "What you'll learn"], ["demo", "Live demo"], ["blocks", "Block recipe"],
    ["activity", "Activity"], ["project", "Mini-project"], ["stretch", "Stretch challenge"]
  ];
  if (week.example) tocItems.push(["example", week.example.label]);
  tocItems.push(["teacher", "Teacher notes"]);

  var t = week.teacher || {};
  var teacherCard =
    '<div class="card p-6">' +
      '<details class="teacher" id="teacher" open>' +
        '<summary><span aria-hidden="true">🍎</span> Teacher notes</summary>' +
        '<div class="teacher-body grid gap-4">' +
          (t.timing ? '<div><p class="text-xs font-extrabold uppercase tracking-wide text-orange-700/70 m-0">Timing</p><p class="text-sm font-bold text-ink/75 m-0">' + e(t.timing) + "</p></div>" : "") +
          (t.prepare ? '<div><p class="text-xs font-extrabold uppercase tracking-wide text-orange-700/70 m-0">Before class</p><p class="text-sm text-ink/75 m-0">' + e(t.prepare) + "</p></div>" : "") +
          (t.errors && t.errors.length ? "<div><p class=\"text-xs font-extrabold uppercase tracking-wide text-orange-700/70 m-0\">Common bugs to expect</p><ul class=\"text-sm list-disc pl-5 mt-1 space-y-1 text-ink/75\">" + t.errors.map(function (x) { return "<li>" + e(x) + "</li>"; }).join("") + "</ul></div>" : "") +
          (t.support || t.extend ? '<div class="grid sm:grid-cols-2 gap-3">' +
            (t.support ? '<div class="rounded-xl bg-white/70 p-3"><p class="text-xs font-extrabold uppercase tracking-wide text-ink/50 m-0">Support</p><p class="text-sm text-ink/75 m-0">' + e(t.support) + "</p></div>" : "") +
            (t.extend ? '<div class="rounded-xl bg-white/70 p-3"><p class="text-xs font-extrabold uppercase tracking-wide text-ink/50 m-0">Extend</p><p class="text-sm text-ink/75 m-0">' + e(t.extend) + "</p></div>" : "") +
          "</div>" : "") +
          (t.tip ? '<p class="text-sm rounded-xl bg-white/70 p-3 m-0"><strong>Pro tip:</strong> ' + e(t.tip) + "</p>" : "") +
        "</div>" +
      "</details>" +
    "</div>";

  var tocCard =
    '<div class="card p-6">' +
      '<p class="text-xs font-extrabold uppercase tracking-wide text-ink/45 mb-3">In this lesson</p>' +
      '<nav class="grid gap-1">' + tocItems.map(function (it) {
        return '<a class="text-sm font-bold text-ink/65 hover:text-motion py-0.5" href="#' + it[0] + '">' + e(it[1]) + "</a>";
      }).join("") + "</nav>" +
    "</div>";

  /* ---------- bottom nav ---------- */
  var bottomNav =
    '<section class="grid sm:grid-cols-2 gap-4 mt-8">' +
      (prevUrl
        ? '<a href="' + prevUrl + '" class="card card-hover p-5"><p class="text-xs font-extrabold uppercase text-ink/40 m-0">← Previous</p><p class="font-display text-lg font-extrabold m-0">Week ' + (n - 1) + ": " + e(cur.weeks[n - 2].title) + "</p></a>"
        : '<a href="index.html" class="card card-hover p-5"><p class="text-xs font-extrabold uppercase text-ink/40 m-0">← Back</p><p class="font-display text-lg font-extrabold m-0">Course home</p></a>') +
      (nextUrl
        ? '<a href="' + nextUrl + '" class="card card-hover p-5 text-right"><p class="text-xs font-extrabold uppercase text-ink/40 m-0">Next →</p><p class="font-display text-lg font-extrabold m-0">Week ' + (n + 1) + ": " + e(cur.weeks[n].title) + "</p></a>"
        : '<a href="playground.html" class="card card-hover p-5 text-right"><p class="text-xs font-extrabold uppercase text-ink/40 m-0">Next →</p><p class="font-display text-lg font-extrabold m-0">Block Playground</p></a>') +
    "</section>";

  /* ---------- assemble ---------- */
  var root = document.getElementById("week-root");
  root.innerHTML =
    hero +
    '<div class="grid lg:grid-cols-3 gap-6 items-start">' +
      '<div class="lg:col-span-2 grid gap-6">' +
        learnCard + demoCard + blocksCard + activityCard + miniCard + stretchCard + exampleCard +
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
    blocksMount.innerHTML = '<p class="text-sm text-ink/50">No block recipe for this week — see the activity above.</p>';
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
    demoMount.innerHTML = '<p class="text-sm text-ink/50">Demo coming soon.</p>';
  }
})();
