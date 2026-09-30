/* ============================================================
   data.js — Track A: HTML & CSS (JSS 1 + JSS 2).
   HTML and CSS are taught as pairs every week. Three terms,
   ten weeks each. Week `n` is the index within its term.
   Rendered by assets/lesson-render.js via js/config.js.

   Week shape (authored weeks):
     { n, title, emoji, color, tracks, goal, concept, objective,
       teachingPoints[], timing[], liveDemo[], commonMistakes[],
       handout:{sections[]}, template:{filename,code,core[],stretch[]},
       assessment[] }
   ============================================================ */
(function () {
  "use strict";

  function week(n, title, emoji, color, goal, concept) {
    return {
      n: n, title: title, emoji: emoji, color: color, tracks: "both",
      goal: goal,
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
    week(1, "How the web works", "🌐", "motion",
      "Create your first web page and see it in a browser.",
      "A web page is a text file written in HTML. The browser reads the HTML and draws the page. CSS is a second file that tells the browser how the page should look."),
    week(2, "Headings and paragraphs", "🔤", "looks",
      "Build an About Me page and style its text.",
      "Headings show the importance of text and paragraphs group sentences. CSS can change a page's colours, fonts, size and alignment."),
    week(3, "Links and images", "🔗", "sensing",
      "Add a styled photo and working links to your page.",
      "Links move people between pages and images bring pictures onto a page. CSS can set an image's width, add a border and round its corners."),
    week(4, "Lists", "📋", "control",
      "Make a tidy, styled list page.",
      "Lists group items together: unordered lists use bullets, ordered lists use numbers, and lists can be nested. CSS controls their spacing and markers."),
    week(5, "Containers and the box model", "📦", "operators",
      "Build and measure a profile card.",
      "Every element is a box. The box model is content, padding, border and margin. Containers such as div, span and section group your content."),
    week(6, "Semantic layout", "🧱", "events",
      "Structure and theme a whole page.",
      "Semantic tags such as header, nav, main and footer describe each part of a page. Backgrounds, classes and a colour theme tie the page together."),
    week(7, "Tables", "🧮", "variables",
      "Build a styled class timetable.",
      "Tables arrange information into rows and columns. CSS can add borders, spacing and striped rows to make a table easy to read."),
    week(8, "Forms", "📝", "motion",
      "Build a styled registration form.",
      "Forms let people type information into a page. Labels describe each field, inputs collect the answer, and buttons submit it."),
    week(9, "Project: My School page", "🌟", "looks",
      "Plan and build a multi-section page of your own.",
      "Put everything together: a structured, styled multi-section page about your school or yourself."),
    week(10, "Revision and showcase", "🏆", "sensing",
      "Review the term and show your project.",
      "Look back over Term 1, check your understanding, and present your project to the class.")
  ];

  var term2 = [
    week(1, "Flexbox navigation", "↔️", "motion",
      "Lay out a navigation bar with Flexbox.",
      "Flexbox arranges items in a row or column and spaces them neatly. It is the modern way to build a navigation bar."),
    week(2, "Cards with Flexbox", "🃏", "looks",
      "Build a row of cards that wrap on small screens.",
      "Flex containers can wrap their items, add gaps, and line cards up in a neat row."),
    week(3, "Positioning", "📍", "sensing",
      "Make a sticky header and a badge on a card.",
      "Positioning controls where an element sits: relative, absolute, fixed and sticky each behave differently."),
    week(4, "Photo gallery with Grid", "🖼️", "operators",
      "Build a photo gallery with CSS Grid.",
      "CSS Grid arranges items into rows and columns at the same time, perfect for galleries and page layouts."),
    week(5, "Media queries", "📱", "control",
      "Make a gallery adapt to phone, tablet and desktop.",
      "A media query applies CSS only when the screen matches a condition, so one page can look good everywhere."),
    week(6, "Responsive images", "🖥️", "events",
      "Convert a page to a mobile-first design.",
      "Mobile-first means styling for the smallest screen first, then adding rules for larger screens."),
    week(7, "Typography and web fonts", "✍️", "variables",
      "Give a page a clear type system.",
      "Font choice, size, weight, line height and hierarchy make text easy and pleasant to read."),
    week(8, "Styled, validated forms", "🔒", "looks",
      "Build a friendly, validated contact form.",
      "Input types and attributes such as required and pattern guide the user, and CSS states show focus, hover and errors."),
    week(9, "Project: responsive landing page", "🌟", "motion",
      "Build and present a responsive landing page.",
      "Design and build a landing page for a school club, local shop or event that works on every screen."),
    week(10, "Revision and showcase", "🏆", "sensing",
      "Review the term and show your project.",
      "Look back over Term 2, check your understanding, and present your project to the class.")
  ];

  var term3 = [
    week(1, "Transitions and details", "✨", "looks",
      "Build an expandable FAQ with smooth effects.",
      "The button, details and summary tags build interactive pieces, and CSS transitions make changes feel smooth."),
    week(2, "Media and animation", "🎞️", "events",
      "Add an animated hero and a video.",
      "Audio, video and embedded media bring a page to life. Keyframe animations can move elements on their own."),
    week(3, "CSS variables and themes", "🎨", "variables",
      "Make light and dark themes with variables.",
      "CSS variables store values you reuse. Switch a few variables and the whole page changes theme."),
    week(4, "Accessibility", "♿", "sensing",
      "Audit and fix a page for accessibility.",
      "Good HTML and CSS help everyone: alt text, labels, heading order, contrast, visible focus and reduced motion."),
    week(5, "Validation and DevTools", "🔧", "operators",
      "Debug a broken page with the browser tools.",
      "Clean, valid markup is easier to fix. Browser Developer Tools show the structure and styles of any page."),
    week(6, "Publishing your page", "🚀", "control",
      "Prepare your files to put a page online.",
      "A tidy project folder and correct linking make a site ready to publish. Publishing puts your work on the web."),
    week(7, "Capstone: plan", "🗺️", "motion",
      "Wireframe and plan your capstone site.",
      "Choose a topic, sketch the layout, list the pages, and pick colours, fonts and components."),
    week(8, "Capstone: build", "🏗️", "looks",
      "Build your capstone site.",
      "Build the multi-page structure and style it responsively."),
    week(9, "Capstone: test and publish", "✅", "sensing",
      "Test and publish your capstone.",
      "Validate, check accessibility, polish, then publish and test on a phone."),
    week(10, "Showcase", "🏆", "events",
      "Present your capstone to the class.",
      "Show your finished site and reflect on what you learned across the three terms.")
  ];

  window.INTRO_CURRICULUM = {
    slug: "intro-webdev",
    title: "HTML & CSS: Build and Style the Web",
    subject: "Web Development",
    length: "3 terms",
    audience: "JSS 1 & JSS 2",
    focus: "HTML and CSS taught together: build it, style it, see it, change it. No JavaScript needed.",
    philosophy: "Read it, build it, style it, change it. Every week ships a runnable page students can edit and see working.",
    tracks: [
      { key: "A", name: "Track A — JSS 1 & JSS 2", desc: "HTML and CSS taught as a pair, every week. Four tabs per lesson: instructor guide, handout, runnable code, assessment." }
    ],
    terms: [
      { n: 1, title: "Build and Style a Page", theme: "motion", weeks: term1 },
      { n: 2, title: "Layout and Responsive Design", theme: "sensing", weeks: term2 },
      { n: 3, title: "Polish, Accessibility, Publishing and Capstone", theme: "control", weeks: term3 }
    ]
  };
})();
