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
