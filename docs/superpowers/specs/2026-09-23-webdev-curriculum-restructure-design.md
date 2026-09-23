# Design — Web Development Curriculum Restructure

**Date:** 2026-09-23
**Branch:** `new-update`
**Status:** Approved (design), pending spec review

## Problem

The site currently ships one web-development course, "JavaScript: 10-Week Web Development",
aimed at "Junior & Senior High" as a single track. It needs to serve distinct year groups:

- **JSS 3, SS 1, SS 2** follow the *same* advanced course.
- **JSS 1 and JSS 2** follow a shared *introduction* to web development spread across **3 terms**.

Both courses are organized as **terms containing weeks** (≈10 weeks per term).
The senior course is also to be reshaped — regrouped into terms, re-sequenced, and
expanded where the wider year span requires it — combining the existing 10 weeks with new material.

## Goals

- Add a new **Introduction to Web Development** course for JSS 1 & JSS 2 (3 terms × ~10 weeks).
- Reshape the existing web-dev course into a term-based **senior** course for JSS 3 / SS 1 / SS 2.
- Support **terms containing weeks** as a first-class structure in the data model and pages.
- Keep both courses visually and behaviourally consistent with the existing site (4-tab lesson
  pages, runnable code, console, print).

## Non-goals

- No changes to the Scratch course.
- No build system, bundler, or test framework (the site is static; Tailwind via CDN).
- No backend or persistence.

## Decisions (from brainstorming)

| Question | Decision |
|---|---|
| JSS1/JSS2 relationship | One shared intro course for both year groups |
| Intro organization | Terms contain weeks |
| Senior course | Reshape too (regroup + re-sequence + expand as needed) |
| Who drafts syllabus | The agent drafts; user reviews |
| Site presentation | Two separate web-dev course cards on the hub (Scratch stays a third card) |
| Build pacing | Intro first, senior second |
| Architecture | New sibling folder + shared, term-aware renderer (Approach A) |

## Architecture

### Folder layout

```
assets/
  lesson-render.js      <- NEW shared, term-aware renderer (extracted from webdev/js/lesson-render.js)
  code-runner.js        <- unchanged
  tabs.js, nav.js, style.css, code.css   <- unchanged
intro-webdev/           <- NEW course
  index.html            <- course home (3 term sections + week tables)
  week.html             <- lesson shell (loads shared renderer via COURSE_CONFIG)
  playground.html       <- (see Playground below)
  js/
    data.js             <- INTRO_CURRICULUM (terms -> weeks)
    config.js           <- window.COURSE_CONFIG (points at INTRO_CURRICULUM)
webdev/                 <- SENIOR course (phase 2; existing URLs preserved where possible)
  ...
index.html              <- hub: Scratch card + intro card + senior card
```

`intro-webdev/` mirrors the existing `webdev/` structure so it inherits established patterns.

### Data model

Week objects keep the current shape (`title`, `emoji`, `color`, `concept`, `objective`,
`teachingPoints`, `timing`, `liveDemo`, `commonMistakes`, `handout`, `template`, `assessment`,
`variants`). Terms wrap weeks:

```js
window.INTRO_CURRICULUM = {
  title: "Introduction to Web Development",
  audience: "JSS 1 & JSS 2",
  terms: [
    {
      n: 1,
      title: "Building pages with HTML",
      theme: "motion",
      weeks: [ { n: 1, title: "...", emoji: "...", color: "...", /* ...week fields... */ }, ... ]
    },
    { n: 2, title: "Styling with CSS", theme: "looks", weeks: [ ... ] },
    { n: 3, title: "Interactivity with JavaScript", theme: "control", weeks: [ ... ] }
  ],
  tracks: [ ... ]
};
```

`n` in each week is the week index **within its term**.

### Shared renderer contract

`assets/lesson-render.js` reads `window.COURSE_CONFIG`:

```js
window.COURSE_CONFIG = {
  data: window.INTRO_CURRICULUM,   // the curriculum object
  base: "",                        // relative prefix for intra-course links (e.g. "" or "../webdev/")
  playground: "playground.html",   // playground href
  indexHref: "index.html"          // course home href
};
```

The renderer:

- Resolves the week from `?t=<term>&w=<week>`.
- Flattens terms into an ordered list so **prev/next crosses term boundaries**.
- Renders term-grouped sidebar navigation.
- Reuses the existing four tabs (Instructor / Handout / Code / Assessment), code mounting,
  and print behaviour unchanged.
- Is backward-compatible: if `data.terms` exists the renderer uses terms; otherwise it treats the
  flat `data.weeks` array as one implicit term. This keeps `webdev/` working during the refactor
  (phase 2 flips senior to `terms`).

### Pages

- **Hub `index.html`** — replace the single JS card with two: "Introduction to Web Development
  (JSS 1–2)" and "Web Development (JSS 3, SS 1–2)". Fix the existing `bg-js` undefined-colour bug
  in the root Tailwind config at the same time.
- **`intro-webdev/index.html`** — hero, "how it works", then one section per term, each listing its
  10 weeks in the existing glance-table style, linking to `week.html?t=<term>&w=<week>`.
- **`intro-webdev/week.html`** — same shell as today; renderer produces term-aware sidebar and
  prev/next.
- **Playground** — in phase 1 the intro course reuses the existing webdev playground rather than
  building a new one: `intro-webdev/playground.html` is not created; the intro nav points at
  `../webdev/playground.html`, and intro-week examples are added to that page's example list. A
  dedicated intro playground, if ever needed, is out of scope.

## Draft syllabus

### Intro — Introduction to Web Development (JSS 1 & JSS 2), 3 terms × 10 weeks

**Term 1 — Building pages with HTML**
1. How the web works: browsers, files, `.html`
2. Your first page: tags, elements, `head`/`body`
3. Headings & paragraphs; comments
4. Lists: ordered, unordered, nesting
5. Links & images (attributes, relative paths)
6. Tables
7. Forms: inputs, labels, buttons
8. Semantic layout: `header`, `nav`, `main`, `footer`
9. Structuring a multi-section page
10. Project: an "About Me" page in HTML

**Term 2 — Styling with CSS**
1. What CSS is; inline / internal / external
2. Selectors & the cascade
3. Colours & backgrounds
4. Text: font, size, weight, alignment
5. The box model: margin, border, padding
6. Sizing, spacing & `display`
7. Layout with Flexbox
8. Styling links, lists & buttons
9. Responsive basics: viewport + one media query
10. Project: theme your "About Me" page

**Term 3 — Interactivity with JavaScript**
1. What JS is; `<script>`, `console.log`
2. Variables & data types
3. Decisions: `if` / `else`
4. Functions
5. The DOM: selecting elements
6. Changing text & styles with JS
7. Events: click & form submit
8. Mini-project: a counter / calculator
9. Debugging with the console; polish
10. Showcase + recap quiz

### Senior — Web Development (JSS 3 / SS 1 / SS 2) — phase 2

Full syllabus drafted in phase 2. Shape: the existing 10 weeks regrouped into 3 terms,
re-sequenced, with new/expanded weeks as needed for the wider year span. Uses the same shared
renderer and 4-tab format.

## Scope & sequencing

Phase 1 (this spec) covers the shared renderer + the full intro course. Work is decomposed into
plans that each produce working software; the first plan covers steps 1–3 below, and Terms 2–3 get
follow-up content plans using the same week shape.

1. Extract/refactor `assets/lesson-render.js` to be term-aware and config-driven; keep `webdev/`
   working.
2. Build `intro-webdev/` shell (config, data skeleton, index, week page) + hub changes.
3. Author **Term 1** (10 weeks of full content).
4. Author **Term 2** (10 weeks) — follow-up plan.
5. Author **Term 3** (10 weeks) — follow-up plan.

Phase 2 (separate spec/plan): reshape `webdev/` into the senior term-based course.

## Verification

No test framework exists. Verify by loading the site in a real browser (agent-browser):

- Hub shows three course cards; both new cards link correctly.
- `intro-webdev/index.html` lists 3 terms × 10 weeks; each link opens the right lesson.
- On a week page: all four tabs render; Run executes code and shows console output; prev/next
  crosses term boundaries correctly; "Print this handout" isolates the handout.
- Existing `webdev/` pages still work after the renderer refactor.
- No broken asset paths (all `assets/` references resolve from `intro-webdev/`).
