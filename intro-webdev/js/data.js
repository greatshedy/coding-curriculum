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
        "Putting visible text inside <head>. Only information about the page goes in the head; anything you want to see on the screen must go inside the body.",
        "Nesting tags in the wrong order — for example, closing a tag before the one it is inside."
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
        "Expecting comments to appear on the page. The browser ignores everything between <!-- and -->, so comments are only ever seen in the code.",
        "Using more than one <h1> on a page, which muddles the importance of the headings."
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
        "Nesting a list outside an <li>. A nested list must go inside the <li> it belongs to, otherwise the browser cannot tell which item it belongs to.",
        "Using an <ol> (numbered list) when the order of the items does not matter."
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
        "Writing <img>...</img>. The img tag is empty, so it has no closing tag — it ends with the > on the opening tag itself.",
        "Forgetting the alt text on an image, which makes the image unusable for screen-reader users."
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
    {
      n: 6, title: "Tables", emoji: "🧮", color: "operators", tracks: "both",
      concept: "Tables arrange information into rows and columns, useful for timetables, schedules and comparisons.",
      objective: "Students can build a table with rows, headers and cells.",
      teachingPoints: [
        "<table> holds the whole table, with every row and cell inside it.",
        "<tr> is a table row, and each row holds the cells for that line.",
        "<th> is a header cell and <td> is a data cell."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a class timetable", mins: 5 },
        { label: "Tables", mins: 8 },
        { label: "Activity: build your timetable", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A 3x3 class timetable",
          filename: "table.html",
          caption: "The <table> wraps everything. Each <tr> is one row. The first row uses <th> for the column names, and the rows below use <td> for the data. Three rows of three cells make a 3x3 table.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Class timetable</title>
</head>
<body>
  <h1>My class timetable</h1>
  <table>
    <tr>
      <th>Day</th>
      <th>Subject</th>
      <th>Room</th>
    </tr>
    <tr>
      <td>Monday</td>
      <td>English</td>
      <td>Room 4</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>Maths</td>
      <td>Room 7</td>
    </tr>
  </table>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Putting a <td> directly inside <table> without a <tr>. Cells must always sit inside a row, or the browser cannot line them up.",
        "Forgetting a closing tag such as </tr> or </td>, so the next row merges into the last one. Check that every row and cell is closed.",
        "Using a table to lay out a whole page instead of to show data. Tables are for information in rows and columns; page layout belongs to CSS."
      ],
      handout: {
        sections: [
          {
            h: "Rows, headers and cells",
            body: [
              "A table arranges information into rows and columns, which is perfect for timetables, schedules and comparisons. The whole table sits inside a <table> element.",
              "Each row is a <tr> (table row). Inside a row, a <th> is a header cell and a <td> is a data cell. Header cells are usually bold and name the column."
            ],
            list: [
              "<table> — the whole table",
              "<tr> — one row",
              "<th> — a header cell",
              "<td> — a data cell"
            ]
          },
          {
            h: "A simple timetable",
            body: [
              "Here is a small class timetable. The first row uses <th> for the column names, and the rows below use <td> for the data."
            ],
            codes: [
              {
                label: "table.html",
                code:
`<table>
  <tr>
    <th>Day</th>
    <th>Subject</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>English</td>
  </tr>
</table>`
              }
            ]
          }
        ]
      },
      template: {
        filename: "timetable.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>My timetable</title>
</head>
<body>
  <h1>My timetable</h1>
  <table>
    <tr>
      <th>Day</th>
      <th>Subject</th>
      <th>Teacher</th>
    </tr>
    <tr>
      <td>Fill in a day</td>
      <td>Fill in a subject</td>
      <td>Fill in a teacher</td>
    </tr>
  </table>
</body>
</html>`,
        tasks: [
          "Save the file as timetable.html and open it in a browser.",
          "Fill in the data cells under each header.",
          "Replace the placeholder subjects in the header row with your own.",
          "Add a fourth subject as a new <tr> row."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The table shows rows and columns of data",
            "The header row uses <th> cells",
            "Every cell sits inside a <tr>",
            "Every tag that is opened is also closed"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which tag makes a row in a table?", answer: "<tr>, a table row." },
            { prompt: "Question 2: What is the difference between <th> and <td>?", answer: "<th> is a header cell that names a column; <td> is a data cell that holds information." },
            { prompt: "Question 3: How many cells are in two rows of three?", answer: "Six cells (two rows multiplied by three cells)." }
          ]
        }
      ]
    },
    {
      n: 7, title: "Forms", emoji: "📝", color: "variables", tracks: "both",
      concept: "Forms let people type information into a page. Labels describe each field, inputs collect the answer, and buttons submit it.",
      objective: "Students can build a simple form with labels, inputs and a button.",
      teachingPoints: [
        "<form> wraps a set of fields so they are sent together.",
        "<label> describes a field so the person knows what to type.",
        "<input> collects an answer and <button> submits the form."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a sign-up form", mins: 5 },
        { label: "Forms", mins: 8 },
        { label: "Activity: build your form", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A name, an email and a button",
          filename: "form.html",
          caption: "The <form> wraps all the fields. Each <label> describes the input beside it, and the for attribute matches the input's id. The type attribute tells the browser what kind of answer to expect, and the <button> submits the form.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>My form</title>
</head>
<body>
  <h1>Sign up</h1>
  <form>
    <label for="name">Your name</label>
    <input type="text" id="name" name="name">

    <label for="email">Your email</label>
    <input type="email" id="email" name="email">

    <button type="submit">Send</button>
  </form>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "An input with no label, so nobody knows what to type. Every field needs a <label> that describes it.",
        "Forgetting the type attribute on an input. Without it the browser cannot tell whether the field is text, email or a password.",
        "Putting the submit button outside the <form>. A button only submits the form it sits inside."
      ],
      handout: {
        sections: [
          {
            h: "Parts of a form",
            body: [
              "A form wraps a set of fields so they can be filled in and sent together. Each field has a label that describes it, an input that collects the answer, and the form finishes with a button.",
              "The label's for attribute matches the input's id, so clicking the label puts the cursor in the right field."
            ],
            list: [
              "<form> — wraps the whole set of fields",
              "<label> — describes a field",
              "<input> — collects an answer",
              "<button> — submits the form"
            ]
          },
          {
            h: "Input types",
            body: [
              "The type attribute tells the browser what kind of answer to expect. Use type=\"text\" for words, type=\"email\" for an email address, and type=\"password\" to hide what is typed.",
              "The browser can then check the answer and even show the right keyboard on a phone."
            ],
            codes: [
              {
                label: "Input types",
                code:
`<input type="text" id="name" name="name">
<input type="email" id="email" name="email">
<input type="password" id="pass" name="pass">`
              }
            ]
          },
          {
            h: "Putting it together",
            body: [
              "Here is a complete, labelled form. Notice how each label points at its input with the for and id attributes."
            ],
            codes: [
              {
                label: "form.html",
                code:
`<form>
  <label for="name">Your name</label>
  <input type="text" id="name" name="name">
  <button type="submit">Send</button>
</form>`
              }
            ]
          }
        ]
      },
      template: {
        filename: "signup.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Sign up</title>
</head>
<body>
  <h1>Join the club</h1>
  <form>
    <label for="name">Name</label>
    <input type="text" id="name" name="name">

    <button type="submit">Sign up</button>
  </form>
</body>
</html>`,
        tasks: [
          "Save the file as signup.html and open it in a browser.",
          "Add a labelled text input for your name.",
          "Add an email input with its own label.",
          "Add a submit button, then a second label and input pair such as a password."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The form has at least two inputs and a button",
            "Every input has a label",
            "Each input has a type attribute",
            "The button sits inside the <form>"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: What does a label do?", answer: "It describes a field so the person knows what to type, and it is linked to the input by its for attribute." },
            { prompt: "Question 2: Which tag makes a button?", answer: "<button>." },
            { prompt: "Question 3: Name two input types.", answer: "Any two of: text, email, password, number, date, checkbox, radio." }
          ]
        }
      ]
    },
    {
      n: 8, title: "Semantic layout", emoji: "🧱", color: "events", tracks: "both",
      concept: "Semantic tags such as header, nav, main and footer describe the job each part of a page does, which makes pages clearer for people and computers.",
      objective: "Students can identify the main regions of a page and use semantic tags to mark them.",
      teachingPoints: [
        "<header> is the top of a page or section and usually holds the title.",
        "<nav> holds the navigation links and <main> holds the main content.",
        "<footer> is the bottom of the page, after the main content."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a labelled layout", mins: 5 },
        { label: "Semantic tags", mins: 8 },
        { label: "Activity: label your page regions", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A page with named regions",
          filename: "layout.html",
          caption: "Every region has a name that describes its job: <header> at the top, <nav> for the links, <main> for the main content, and <footer> at the bottom. A screen reader can jump straight to these regions.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>My site</title>
</head>
<body>
  <header>
    <h1>My website</h1>
  </header>
  <nav>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
  <main>
    <h2>Welcome</h2>
    <p>This is the main content of the page.</p>
  </main>
  <footer>
    <p>Made by me in web development class.</p>
  </footer>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Using <div> for everything. A div says nothing about its job, while a semantic tag names each region for people and computers.",
        "Using more than one <main> on a page. There should be exactly one main content area.",
        "Putting the <footer> inside <main>. The footer belongs after the main content, at the bottom of the page."
      ],
      handout: {
        sections: [
          {
            h: "The regions of a page",
            body: [
              "Every page has the same main regions. The <header> is the top of the page or section, the <nav> holds the navigation links, the <main> holds the main content, and the <footer> is the bottom.",
              "Naming the regions this way tells the browser, screen readers and search engines what each part is for."
            ],
            list: [
              "<header> — the top of a page or section",
              "<nav> — the navigation links",
              "<main> — the main content",
              "<footer> — the bottom of the page"
            ]
          },
          {
            h: "Why names matter",
            body: [
              "A <div> is a plain box with no meaning. Semantic tags describe the job of each region, which makes your code easier to read and your page easier to navigate.",
              "Here is the same page marked up with semantic tags instead of divs."
            ],
            codes: [
              {
                label: "layout.html",
                code:
`<header>
  <h1>My website</h1>
</header>
<nav>
  <a href="#about">About</a>
</nav>
<main>
  <p>Main content</p>
</main>
<footer>
  <p>Footer</p>
</footer>`
              }
            ]
          }
        ]
      },
      template: {
        filename: "layout.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>My page layout</title>
</head>
<body>
  <div id="top">
    <h1>Fill in your site name</h1>
  </div>
  <div id="links">
    <a href="#">Home</a>
  </div>
  <div id="content">
    <h2>Main heading</h2>
    <p>Put your main content here.</p>
  </div>
  <div id="bottom">
    <p>Footer text</p>
  </div>
</body>
</html>`,
        tasks: [
          "Save the file as layout.html and open it in a browser.",
          "Replace each <div> with the semantic tag that matches its job.",
          "Add a second link inside the navigation.",
          "Move the footer to the bottom, after the main content, and add a second heading inside <main>."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The page uses header, nav, main and footer",
            "There is exactly one <main>",
            "The <footer> comes after the main content",
            "Each region holds content that matches its name"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which tag holds the navigation links?", answer: "<nav>." },
            { prompt: "Question 2: Which tag holds the main content?", answer: "<main>." },
            { prompt: "Question 3: Where does the footer go?", answer: "At the bottom of the page, after the main content." }
          ]
        }
      ]
    },
    {
      n: 9, title: "Structuring a full page", emoji: "🏗️", color: "motion", tracks: "both",
      concept: "Put the pieces together: a page is a set of sections, each with its own content, linked into one clear structure.",
      objective: "Students can plan and build a multi-section page with a clear structure.",
      teachingPoints: [
        "A page is a set of sections, each with one job.",
        "Plan the sections before writing any code so you always know what comes next.",
        "Each section gets a heading and content, and is marked with a semantic tag."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: from plan to page", mins: 5 },
        { label: "Planning a page", mins: 8 },
        { label: "Activity: build your multi-section page", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "From a plan to a page",
          filename: "plan.html",
          caption: "The comment at the top is the plan: a header, then three sections inside main, then a footer. Each section has a heading and its own content, and every section is wrapped in a semantic tag.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>My planned page</title>
</head>
<body>
  <!-- Plan: 1 Header  2 About  3 Hobbies  4 Contact -->
  <header>
    <h1>Ada's Page</h1>
  </header>
  <main>
    <section>
      <h2>About me</h2>
      <p>I am a student who loves computers.</p>
    </section>
    <section>
      <h2>My hobbies</h2>
      <ul>
        <li>Drawing</li>
        <li>Football</li>
      </ul>
    </section>
    <section>
      <h2>Contact</h2>
      <p>Email me at <a href="mailto:ada@example.com">ada@example.com</a>.</p>
    </section>
  </main>
  <footer>
    <p>Thanks for visiting.</p>
  </footer>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Writing content with no headings to organise it, so the page becomes a wall of text. Every section needs a heading.",
        "Jumping straight into code without a plan. Sketch the sections first so you know what you are building.",
        "Giving sections inconsistent structure, for example one section has a heading and another does not. Keep every section shaped the same way."
      ],
      handout: {
        sections: [
          {
            h: "Plan first, then build",
            body: [
              "A page is a set of sections. Before you write any code, plan the sections on paper: give each one a name and decide what goes in it.",
              "Planning first means you always know what to build next, and the finished page has a clear structure."
            ],
            list: [
              "Decide the sections",
              "Give each section a heading",
              "Mark each section with a semantic tag",
              "Link the sections together with a nav"
            ]
          },
          {
            h: "A page is a set of sections",
            body: [
              "Here is a page built from a plan of four sections: a header, three sections inside main, and a footer. Each section has a heading and its own content."
            ],
            codes: [
              {
                label: "plan.html",
                code:
`<main>
  <section>
    <h2>About me</h2>
    <p>Some content.</p>
  </section>
  <section>
    <h2>My hobbies</h2>
    <ul>
      <li>Drawing</li>
    </ul>
  </section>
</main>`
              }
            ]
          }
        ]
      },
      template: {
        filename: "my_page.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>My multi-section page</title>
</head>
<body>
  <!-- 1. Plan your four sections here first -->
  <header>
    <h1>Fill in your page title</h1>
  </header>
  <main>
    <section>
      <h2>Section one</h2>
      <p>Write the content for your first section.</p>
    </section>
  </main>
</body>
</html>`,
        tasks: [
          "Plan four sections on paper, then save this file as my_page.html.",
          "Build each section with its own heading and content.",
          "Wrap each section in a semantic tag such as <section> or <article>.",
          "Give each section an id attribute, then add a nav link that jumps to each section id."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The page has four planned sections",
            "Every section has a heading",
            "Each section is wrapped in a semantic tag",
            "The nav links to each section"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Why plan before you code?", answer: "So you know which sections the page needs and always know what to build next." },
            { prompt: "Question 2: How many main sections does the example page have?", answer: "Four: a header, then About, Hobbies and Contact inside main, plus a footer." },
            { prompt: "Question 3: Which tags mark sections?", answer: "Semantic tags such as <section>, <article>, <header>, <nav>, <main> and <footer>." }
          ]
        }
      ]
    },
    {
      n: 10, title: "Project: About Me page", emoji: "🌟", color: "looks", tracks: "both",
      concept: "Build a complete About Me page in HTML that brings together everything from this term.",
      objective: "Students build and present a complete About Me page in HTML that uses everything from Term 1.",
      teachingPoints: [
        "Combine headings, paragraphs, lists, links, images and semantic tags in one page.",
        "Test the page in a browser before presenting it, and fix anything that is broken.",
        "Present what each part of the page does and which tag you used."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Demo of a finished page", mins: 4 },
        { label: "Build time", mins: 20 },
        { label: "Present your page", mins: 5 },
        { label: "Wrap-up", mins: 3 }
      ],
      liveDemo: [
        {
          title: "A finished About Me page",
          filename: "about_me.html",
          caption: "This finished page uses semantic tags to mark each region, an image with alt text, a list of hobbies, a link and a footer. Everything from Term 1 appears in one page.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>About Me</title>
</head>
<body>
  <header>
    <h1>About Me</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#hobbies">Hobbies</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <main>
    <section id="about">
      <h2>About</h2>
      <img src="photo.jpg" alt="A photo of me">
      <p>Hello! My name is Ada and I am learning web development.</p>
    </section>
    <section id="hobbies">
      <h2>My hobbies</h2>
      <ul>
        <li>Drawing</li>
        <li>Football</li>
        <li>Reading</li>
      </ul>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>Visit my <a href="https://example.com">favourite website</a>.</p>
    </section>
  </main>
  <footer>
    <p>Made by Ada in web development class.</p>
  </footer>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Broken image paths, so a broken icon appears instead of the picture. Check that the src matches the real file name and folder.",
        "Missing closing tags, so parts of the page merge together. Check that every opened tag is closed before you present.",
        "An untidy page with no headings, so the reader cannot find anything. Give every section a clear heading."
      ],
      handout: {
        sections: [
          {
            h: "What your page must include",
            body: [
              "Use this checklist to make sure your About Me page is complete before you present it."
            ],
            list: [
              "A heading with your name",
              "An intro paragraph about you",
              "An image with alt text",
              "A list of your hobbies",
              "A link to a website you like",
              "At least one semantic tag: header, nav, main or footer"
            ]
          },
          {
            h: "Presentation",
            body: [
              "When you present, walk through your page from top to bottom. For each part, say what it does and which tag you used. Here is a short script you can follow."
            ],
            list: [
              "Say your name and the title of your page",
              "Point to the header and say what it does",
              "Explain one section and the tags inside it",
              "Finish with one thing you would add next"
            ]
          },
          {
            h: "The finished example",
            body: [
              "Here is the finished page. Compare it with your own and check that you have every part."
            ],
            codes: [
              {
                label: "about_me.html",
                code:
`<header>
  <h1>About Me</h1>
</header>
<main>
  <section id="about">
    <h2>About</h2>
    <img src="photo.jpg" alt="A photo of me">
    <p>Hello! My name is Ada.</p>
  </section>
</main>
<footer>
  <p>Made by Ada.</p>
</footer>`
              }
            ]
          }
        ]
      },
      template: {
        filename: "about_me.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>About Me</title>
</head>
<body>
  <header>
    <h1>Fill in your name</h1>
  </header>
  <main>
    <section id="about">
      <h2>About me</h2>
      <!-- Add an intro paragraph and your image here -->
    </section>
    <section id="hobbies">
      <h2>My hobbies</h2>
      <!-- Add a list of your hobbies here -->
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <!-- Add a link here -->
    </section>
  </main>
  <footer>
    <!-- Add your footer text here -->
  </footer>
</body>
</html>`,
        tasks: [
          "Save the file as about_me.html and open it in a browser.",
          "Add a heading and an intro paragraph about yourself.",
          "Add an image with a correct src and helpful alt text.",
          "Add a bullet list of at least three hobbies.",
          "Add a link to a website you like and a footer with your name.",
          "Test the page in a browser, fix any broken image or missing tags, then present it."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "About Me project rubric", type: "rubric",
          criteria: [
            "The page opens in a browser without broken images or missing text",
            "The page uses at least four tags from this term (headings, paragraphs, lists, links, images, tables, forms or semantic tags)",
            "Every section has a heading that describes its content",
            "The student can explain what each section of the page does"
          ]
        },
        {
          track: "B", audience: "Both", title: "About Me design document", type: "form",
          intro: "Plan your page on paper, then hand this document in with your finished page.",
          fields: [
            { label: "Page title", hint: "What will your page be called?" },
            { label: "List the sections you will build", hint: "For example: About me, Hobbies, Contact", lines: 4 },
            { label: "Tags you will use in each section", hint: "Headings · Paragraphs · Lists · Links · Images · Semantic tags", lines: 4 },
            { label: "Describe what each section contains", lines: 4 },
            { label: "One thing you are proud of in your page", lines: 2 }
          ]
        }
      ]
    }
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
