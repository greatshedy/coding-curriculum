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
    {
      n: 2, title: "Your first page: tags and elements", emoji: "📄", color: "motion", tracks: "both",
      concept: "HTML marks up content with tags. A page has a head, for information about the page, and a body, for what people see.",
      objective: "Students can write a valid HTML skeleton and explain the jobs of the head and the body.",
      teachingPoints: [
        "Tags come in pairs: an opening tag like <p> and a closing tag like </p>.",
        "An element is a tag plus the content between its opening and closing tags.",
        "The head holds information about the page, such as the title, and the body holds what people see."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: label the skeleton", mins: 5 },
        { label: "Tags and elements", mins: 8 },
        { label: "Activity: build your own skeleton", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "The labelled skeleton",
          filename: "skeleton.html",
          caption: "Every part has a job: <!DOCTYPE html> tells the browser this is a modern HTML page, <html> wraps everything, <head> holds information such as the title, and <body> holds what people see. The <h1> and <p> both live inside the body.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <!-- The head holds information about the page -->
  <title>My labelled skeleton</title>
</head>
<body>
  <!-- The body holds what people see -->
  <h1>I am the heading</h1>
  <p>I am a paragraph in the body.</p>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Forgetting the closing tag, for example opening a <p> and never writing </p>. The browser then treats the rest of the page as part of that paragraph. Show students how an opening and closing tag work as a pair.",
        "Putting visible text inside <head>. Only information about the page goes in the head; anything you want to see on the screen must go inside the body."
      ],
      handout: {
        sections: [
          {
            h: "Tags and elements",
            body: [
              "HTML uses tags to mark up content. A tag is written between angle brackets, like <p>. Most tags come in pairs: an opening tag and a closing tag with a slash, like </p>.",
              "An element is the whole thing: the opening tag, the content, and the closing tag together."
            ],
            list: [
              "Opening tag: <p>",
              "Closing tag: </p>",
              "Element: <p>Hello</p>"
            ]
          },
          {
            h: "head and body",
            body: [
              "A page is split into two main parts. The head holds information about the page, such as its title, which appears in the browser tab. The body holds everything people see on the page.",
              "Text written in the head does not appear on the page, so visible content always belongs in the body."
            ]
          },
          {
            h: "The skeleton",
            codes: [
              {
                label: "skeleton.html",
                code:
`<!DOCTYPE html>
<html>
<head>
  <title>My page</title>
</head>
<body>
  <h1>Heading</h1>
  <p>Paragraph</p>
</body>
</html>`
              }
            ]
          }
        ]
      },
      template: {
        filename: "skeleton.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Fill in your title</title>
</head>
<body>
  <h1>My first proper page</h1>
  <p>This paragraph is inside the body, so it shows on the page.</p>
</body>
</html>`,
        tasks: [
          "Save the file as skeleton.html and open it in a browser.",
          "Fill in the <title> with your own words, then reload and look at the browser tab.",
          "Add a second <p> paragraph with another sentence.",
          "Check that every tag you opened has a matching closing tag, then add a comment inside the body."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The page opens in a browser and shows a heading",
            "Both a head and a body are present",
            "Every tag that is opened is also closed"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: What is an element?", answer: "A tag together with the content it wraps. For example, <p>Hello</p> is a paragraph element." },
            { prompt: "Question 2: Which part of the page holds the title?", answer: "The head, inside a <title> element." },
            { prompt: "Question 3: Which part holds the text people can see?", answer: "The body." }
          ]
        }
      ]
    },
    {
      n: 3, title: "Headings and paragraphs", emoji: "🔤", color: "looks", tracks: "both",
      concept: "Headings show the importance of text and paragraphs group sentences. Comments are notes for humans that the browser ignores.",
      objective: "Students can use heading levels and paragraphs to organise text, and add comments to their code.",
      teachingPoints: [
        "<h1> to <h6> show how important text is, with <h1> the most important and <h6> the least.",
        "<p> groups sentences together into a paragraph.",
        "Comments <!-- like this --> are notes for humans that the browser ignores."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: headings and paragraphs", mins: 5 },
        { label: "Headings & paragraphs", mins: 8 },
        { label: "Activity: organise your story", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Headings, paragraphs and a comment",
          filename: "headings.html",
          caption: "The <h1> names the page and the <h2> starts a sub-section. Each <p> groups its sentences into a paragraph. The comment between them is a note for the person reading the code — the browser does not show it on the page.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Headings and paragraphs</title>
</head>
<body>
  <h1>My favourite hobby</h1>
  <!-- This comment is a note for me, not for the page -->
  <p>I like to build things. This paragraph groups my sentences together.</p>
  <h2>Why I like it</h2>
  <p>It is fun to watch an idea turn into something real.</p>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Using a heading only to make text big instead of to show importance. Pick the heading level by meaning first; size can be changed later with CSS.",
        "Expecting comments to appear on the page. The browser ignores everything between <!-- and -->, so comments are only ever seen in the code."
      ],
      handout: {
        sections: [
          {
            h: "Headings show importance",
            body: [
              "Headings tell the reader how the page is organised. <h1> is the most important heading and usually appears once, as the page title. <h2> marks a sub-section, <h3> a sub-sub-section, and so on down to <h6>.",
              "Choose a heading level because of what the text means, not because of how big it looks."
            ],
            list: [
              "<h1> — the main title of the page",
              "<h2> — a sub-section",
              "<h3> to <h6> — smaller and smaller sub-sections"
            ]
          },
          {
            h: "Paragraphs group sentences",
            body: [
              "A <p> element wraps a group of sentences that belong together. The browser adds space above and below each paragraph so the text is easy to read.",
              "If you write sentences directly in the body with no <p> tag, they run together as one block."
            ]
          },
          {
            h: "Comments are notes for you",
            body: [
              "A comment is a note you leave in the code. The browser ignores it completely and it never appears on the page. Comments are useful for reminding yourself what a section is for."
            ],
            codes: [
              { label: "A comment", code: "<!-- This is a note for the coder -->" }
            ]
          }
        ]
      },
      template: {
        filename: "my_story.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>My story</title>
</head>
<body>
  <h1>Write your story title here</h1>
  <p>Start your story with a sentence or two.</p>
</body>
</html>`,
        tasks: [
          "Save the file as my_story.html and open it in a browser.",
          "Add an <h1> with the title of your story.",
          "Add two <h2> sub-sections, each followed by a <p>.",
          "Add a comment above each section to remind you what it is about."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The page shows at least one heading and one paragraph",
            "Headings are used to show importance, not just to make text big",
            "There is only one <h1> on the page",
            "At least one comment is written in the code"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which heading is the most important?", answer: "<h1>." },
            { prompt: "Question 2: What does the <p> tag do?", answer: "It groups sentences together into a paragraph." },
            { prompt: "Question 3: Do comments show on the page?", answer: "No. The browser ignores comments, so they only appear in the code." }
          ]
        }
      ]
    },
    {
      n: 4, title: "Lists", emoji: "📋", color: "control", tracks: "both",
      concept: "Lists group items together. Unordered lists use bullets, ordered lists use numbers, and lists can be nested inside each other.",
      objective: "Students can build bulleted and numbered lists, and nest one list inside another.",
      teachingPoints: [
        "<ul> makes an unordered list, which shows bullets.",
        "<ol> makes an ordered list, which shows numbers.",
        "Each item in a list is an <li>, and a whole list can sit inside a list item to nest lists."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: two kinds of lists", mins: 5 },
        { label: "Lists", mins: 8 },
        { label: "Activity: build your lists", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Bullets and numbers",
          filename: "lists.html",
          caption: "The <ul> holds my favourite foods as bullets. The <ol> holds my morning steps as numbers, because the order matters. In both lists every item is wrapped in an <li>.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>My lists</title>
</head>
<body>
  <h1>Favourite foods</h1>
  <ul>
    <li>Jollof rice</li>
    <li>Mango</li>
    <li>Puff-puff</li>
  </ul>
  <h2>My morning steps</h2>
  <ol>
    <li>Wake up</li>
    <li>Brush my teeth</li>
    <li>Eat breakfast</li>
  </ol>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Putting text straight inside <ul> or <ol> instead of wrapping each item in an <li>. The browser will not make a proper list item without the <li> tag.",
        "Nesting a list outside an <li>. A nested list must go inside the <li> it belongs to, otherwise the browser cannot tell which item it belongs to."
      ],
      handout: {
        sections: [
          {
            h: "Two kinds of lists",
            body: [
              "Use <ul> when the order of the items does not matter, like a shopping list. It shows bullets. Use <ol> when the order does matter, like steps in a recipe. It shows numbers.",
              "In both kinds, every single item is wrapped in an <li> element."
            ],
            codes: [
              {
                label: "Unordered and ordered lists",
                code:
`<ul>
  <li>Bread</li>
  <li>Milk</li>
</ul>
<ol>
  <li>Wake up</li>
  <li>Eat breakfast</li>
</ol>`
              }
            ]
          },
          {
            h: "Nesting lists",
            body: [
              "A list can live inside another list to show items that belong under a bigger item. Put the inner list inside the <li> it belongs to, right after that item's text."
            ],
            codes: [
              {
                label: "A list inside a list",
                code:
`<ul>
  <li>Fruits
    <ul>
      <li>Mango</li>
      <li>Orange</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>`
              }
            ]
          }
        ]
      },
      template: {
        filename: "lists.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>My lists</title>
</head>
<body>
  <h1>My lists</h1>
  <ul>
    <li>First item</li>
    <li>Second item</li>
  </ul>
</body>
</html>`,
        tasks: [
          "Save the file as lists.html and open it in a browser.",
          "Make a bullet list of three of your hobbies.",
          "Make a numbered list of three steps in your day.",
          "Nest one list inside a list item so it sits under a bigger item."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "There is one bulleted list and one numbered list",
            "Every item is wrapped in an <li> tag",
            "The nested list is placed inside an <li>"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which tag makes a numbered list?", answer: "<ol>, an ordered list." },
            { prompt: "Question 2: What tag wraps each item in a list?", answer: "<li>." },
            { prompt: "Question 3: Where does a nested list go?", answer: "Inside the <li> of the item it belongs to." }
          ]
        }
      ]
    },
    {
      n: 5, title: "Links and images", emoji: "🔗", color: "sensing", tracks: "both",
      concept: "Links let people move between pages and images bring pictures onto a page. Both use attributes to say where the content comes from.",
      objective: "Students can add working links and images using attributes, and understand relative file paths.",
      teachingPoints: [
        "<a href=\"...\"> makes a link, and the href attribute says where the link goes.",
        "<img src=\"...\" alt=\"...\"> shows an image, where src is the file and alt describes it.",
        "A relative path points to a file inside the same project folder, like images/photo.jpg."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a link and an image", mins: 5 },
        { label: "Links & images", mins: 8 },
        { label: "Activity: link and picture your page", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A link and an image",
          filename: "links.html",
          caption: "The <a> tag makes a link: href says which page to open. The <img> tag shows a picture: src points to the file and alt describes it for anyone who cannot see it. The src here is a relative path, so the picture must sit in the same folder as this file.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Links and images</title>
</head>
<body>
  <h1>My links page</h1>
  <p>Visit <a href="https://example.com">this example site</a> to learn more.</p>
  <p>Here is a picture:</p>
  <img src="photo.jpg" alt="A smiling student at a computer">
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Using the wrong file path, so the image shows a broken icon instead of the picture. Check that the src exactly matches the file name and folder.",
        "Writing <img>...</img>. The img tag is empty, so it has no closing tag — it ends with the > on the opening tag itself."
      ],
      handout: {
        sections: [
          {
            h: "Links",
            body: [
              "A link uses the <a> tag. The href attribute holds the address the link should open. The words between the opening and closing tags are what people click on.",
              "You can link to another website with a full address, or to another page in your own project with a relative path."
            ],
            codes: [
              { label: "A link", code: "<a href=\"page2.html\">Go to page 2</a>" }
            ]
          },
          {
            h: "Images and alt text",
            body: [
              "An image uses the <img> tag. The src attribute points to the picture file, and the alt attribute describes the picture in words. The alt text is read out by screen readers and shown if the picture cannot load, so it should always be written.",
              "The img tag is empty: it has no closing tag."
            ],
            codes: [
              { label: "An image", code: "<img src=\"photo.jpg\" alt=\"A smiling student at a computer\">" }
            ]
          },
          {
            h: "Paths: where files live",
            body: [
              "A relative path points to a file inside the same project folder. If the picture is in a folder called images, the path is images/photo.jpg. If it is beside your page, the path is just photo.jpg.",
              "Keep your page and its pictures together in one folder so the paths stay simple."
            ],
            codes: [
              { label: "Relative paths", code: "photo.jpg\nimages/photo.jpg" }
            ]
          }
        ]
      },
      template: {
        filename: "links.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>My links page</title>
</head>
<body>
  <h1>My links page</h1>
  <p>Visit <a href="page2.html">my second page</a>.</p>
  <img src="images/broken.jpg" alt="Describe your picture here">
</body>
</html>`,
        tasks: [
          "Save the file as links.html, open it, then add a link to a second page called page2.html.",
          "Add an image with a correct src and a helpful alt description.",
          "Fix the deliberately broken path in the starter so the image loads.",
          "Add a second link that opens in a new tab."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The link opens another page when clicked",
            "The image loads and is not a broken icon",
            "Every image has alt text",
            "The image path matches the real file name"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which attribute holds the address a link goes to?", answer: "href, inside the <a> tag." },
            { prompt: "Question 2: What is alt text for?", answer: "It describes the image for people who cannot see it and is shown if the picture cannot load." },
            { prompt: "Question 3: What does a relative path mean?", answer: "A path to a file inside the same project folder, written from the page's own location." }
          ]
        }
      ]
    },
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
