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
    {
      n: 1, title: "What is CSS?", emoji: "🎨", color: "looks", tracks: "both",
      concept: "CSS is the language that styles HTML. It controls colours, spacing and layout, and it can be added inline, internally or in an external file.",
      objective: "Students can explain what CSS is and add it to a page three different ways.",
      teachingPoints: [
        "A CSS rule has a selector, a property and a value: selector { property: value; }.",
        "Inline CSS uses a style attribute on a tag; internal CSS uses a <style> block in the head; external CSS uses a <link> to a .css file.",
        "For a whole project, external CSS keeps your code tidy, but internal CSS is fine for a single page."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: first style", mins: 5 },
        { label: "The three ways to add CSS", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Style your first heading",
          filename: "first_style.html",
          caption: "The <style> block lives in the head. Every rule has a selector, a property and a value — try changing the hex colour.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { color: #4c97ff; }
    p { font-weight: bold; }
  </style>
</head>
<body>
  <h1>My styled page</h1>
  <p>Change the colour and font-weight here, then press Run.</p>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Forgetting the semicolon at the end of each declaration, which makes the next rule break.",
        "Putting the <style> block inside the <body>, where it still works but is messy.",
        "Forgetting that the property name and value are separated by a colon, not an equals sign."
      ],
      handout: {
        sections: [
          {
            h: "A rule has three parts",
            body: [
              "Every CSS rule has a selector (which element it styles), a property (what it changes) and a value (how it changes it)."
            ],
            codes: [
              { label: "rule.css", code: "h1 { color: #4c97ff; }" }
            ]
          },
          {
            h: "Three ways to add CSS",
            body: [
              "Inline goes in the tag, internal goes in a <style> block, external goes in a separate .css file linked from the head."
            ],
            list: [
              "Inline",
              "Internal",
              "External"
            ]
          },
          {
            h: "Which way should you choose?",
            body: [
              "For one small page, internal CSS is easiest. For a real site, external CSS means you change the whole look from one file."
            ]
          }
        ]
      },
      template: {
        filename: "my_style.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { color: #ff8c1a; }
    p { color: #1f2a44; }
  </style>
</head>
<body>
  <h1>Welcome to my page</h1>
  <p>This paragraph is styled by internal CSS.</p>
  <p>Add your own rules below.</p>
</body>
</html>`,
        tasks: [
          "Change the h1 colour to a colour you like.",
          "Add a rule that makes the second paragraph italic.",
          "Add a rule that gives the body a light background colour.",
          "Explain to a partner which part of a rule is the selector, which is the property, and which is the value."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The page still runs after editing",
            "The new rules change the page",
            "The student can point to the selector, property and value in a rule"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: What are the three parts of a CSS rule?", answer: "A selector, a property and a value." },
            { prompt: "Question 2: Where does an internal <style> block live?", answer: "Inside the <head> of the page." },
            { prompt: "Question 3: Write a rule that makes all <h1> elements blue.", answer: "h1 { color: blue; }" }
          ]
        }
      ]
    },
    {
      n: 2, title: "Selectors and the cascade", emoji: "🎯", color: "motion", tracks: "both",
      concept: "Selectors choose which elements to style. When rules compete, the cascade decides which one wins.",
      objective: "Students can target elements with type, class and id selectors, and predict which rule wins.",
      teachingPoints: [
        "A type selector targets every tag of that kind, e.g. p.",
        "A class selector (.name) targets any element that carries class=\"name\"; an id selector (#name) targets the one element with that id.",
        "When rules fight, id beats class and class beats type; if they are equal, the later rule wins."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Selectors", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Three kinds of selector",
          filename: "selectors.html",
          caption: "Type, class and id selectors. Notice the third paragraph: it has both class and id, and the id rule wins for its font weight.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    p { color: #4c97ff; }
    .highlight { background: #ffbf00; }
    #special { font-weight: 800; }
  </style>
</head>
<body>
  <p>Every paragraph is blue.</p>
  <p class="highlight">This one also has a highlight background.</p>
  <p id="special" class="highlight">This one is bold too — id beats class.</p>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Writing a class selector without the dot (.highlight) or an id selector without the hash (#special).",
        "Using an id for more than one element, which breaks the rule that ids are unique.",
        "Believing the last rule always wins — specificity decides first."
      ],
      handout: {
        sections: [
          {
            h: "Three ways to target elements",
            body: [
              "A type selector styles every tag of that kind. A class styles any element that carries that class. An id styles exactly one element."
            ],
            codes: [
              { label: "selectors.css", code: "p { }  .highlight { }  #special { }" }
            ]
          },
          {
            h: "Class vs id",
            body: [
              "Use a class when you want the same styling in several places. Use an id when you want to reach one specific element, like the one your JavaScript needs."
            ]
          },
          {
            h: "The cascade",
            body: [
              "When two rules target the same element, id beats class, class beats type, and a later equal rule wins. The browser 'cascades' down the stylesheet."
            ]
          }
        ]
      },
      template: {
        filename: "selectors.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; }
    h1 { color: #1f2a44; }
    .alert { color: #b91c1c; }
    #title { text-align: center; }
  </style>
</head>
<body>
  <h1 id="title">A page about selectors</h1>
  <p>This paragraph uses the type selector p.</p>
  <p class="alert">This one uses the class alert.</p>
  <p class="alert">Another alert paragraph — classes can be reused.</p>
</body>
</html>`,
        tasks: [
          "Give one paragraph its own id and style it.",
          "Add a third element that uses the alert class.",
          "Write a rule that beats the h1 rule by using an id selector.",
          "Explain to a partner when to use a class and when to use an id."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "Selectors target the right elements",
            "The page runs without errors",
            "The student can explain the cascade in their own words"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Write the selector that styles every <p> element.", answer: "p" },
            { prompt: "Question 2: Write the selector for an element with class=\"alert\".", answer: ".alert" },
            { prompt: "Question 3: If an id rule and a type rule both target an <h1>, which one wins?", answer: "The id rule, because id has higher specificity." }
          ]
        }
      ]
    },
    {
      n: 3, title: "Colours and backgrounds", emoji: "🌈", color: "looks", tracks: "both",
      concept: "CSS colours can be written as names, hex codes or rgb values, and can be applied to text, borders and backgrounds.",
      objective: "Students can set text, border and background colours using names, hex codes and rgb.",
      teachingPoints: [
        "Colours have three spellings: names (red), hex codes (#ff0000) and rgb (rgb(255, 0, 0)).",
        "color styles the text, background-color fills the area behind it, and border draws a line around an element.",
        "Dark text on a light background is easiest to read."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Colours", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A colourful card",
          filename: "colours.html",
          caption: "The card has a white background, a blue border and an orange heading. Try hex codes like #9966ff.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    body { background-color: #f6f4ee; }
    .card {
      background-color: #ffffff;
      border: 3px solid #4c97ff;
      padding: 16px;
    }
    .card h2 { color: #ff8c1a; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Colours everywhere</h2>
    <p>Name, hex and rgb all describe the same kinds of colour.</p>
  </div>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Forgetting the # in a hex code so the browser ignores it.",
        "Writing hex codes with the wrong number of digits (#ff0 vs #ffff00).",
        "Picking a text colour that is too similar to the background, so the page is hard to read."
      ],
      handout: {
        sections: [
          {
            h: "Three ways to say a colour",
            body: [
              "A name is easy to remember (tomato), a hex code is six digits after a hash (#ff6347), and rgb lists the amount of red, green and blue (rgb(255, 99, 71)). All three can make the exact same colour."
            ],
            codes: [
              { label: "colours.css", code: "color: tomato;  color: #ff6347;  color: rgb(255, 99, 71);" }
            ]
          },
          {
            h: "Text, background and border",
            body: [
              "color changes the text, background-color changes the area behind it, and border draws a line around the box."
            ]
          }
        ]
      },
      template: {
        filename: "my_colours.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    body { background-color: #eef2f7; }
    h1 { color: #1f2a44; }
    .card {
      background-color: #ffffff;
      border: 2px solid #59c059;
      padding: 12px;
    }
  </style>
</head>
<body>
  <h1>My colour page</h1>
  <div class="card">
    <p>Change the colours and borders of this card.</p>
  </div>
</body>
</html>`,
        tasks: [
          "Change the heading to a hex colour you like.",
          "Change the card border colour and make it thicker.",
          "Give the card a background colour that is easy to read.",
          "Add a second card with a different border colour."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The page runs",
            "The colours are readable",
            "The student can name the three colour spellings"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which property changes the text colour?", answer: "color" },
            { prompt: "Question 2: Write a rule that makes every <h1> red using a hex code.", answer: "h1 { color: #ff0000; }" },
            { prompt: "Question 3: Name two ways to describe a colour in CSS.", answer: "Any two of: a name (red), a hex code (#ff0000), an rgb value (rgb(255, 0, 0))." }
          ]
        }
      ]
    },
    {
      n: 4, title: "Text and fonts", emoji: "✍️", color: "sensing", tracks: "both",
      concept: "Font family, size, weight and alignment control how text looks and how easy it is to read.",
      objective: "Students can control the look and readability of text with font and alignment properties.",
      teachingPoints: [
        "font-family picks the font, font-size sets its size, and font-weight makes it bold or normal.",
        "text-align sets the alignment (left, center, right), and line-height controls spacing between lines.",
        "Use only a couple of fonts on a page, and keep body text large enough to read easily."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Text styling", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Typing with style",
          filename: "text.html",
          caption: "font-family, font-size, font-weight, text-align and line-height control how text looks and reads.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: "Segoe UI", Arial, sans-serif; font-size: 16px; line-height: 1.6; }
    h1 { font-family: Georgia, serif; text-align: center; }
    .note { font-weight: 700; color: #5cb1d6; }
  </style>
</head>
<body>
  <h1>Typography</h1>
  <p>This body text is 16px with a comfortable line height.</p>
  <p class="note">This note is bold and coloured.</p>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Using font-size to make something look like a heading instead of using a heading tag.",
        "Setting body text so small it is hard to read.",
        "Writing font-weight: bold and font-style: italic on the same element when only one is wanted."
      ],
      handout: {
        sections: [
          {
            h: "Properties for text",
            body: [
              "font-family picks the font, font-size sets the size, font-weight makes text bold, font-style makes it italic, text-align moves it left, right or centre."
            ],
            codes: [
              { label: "text.css", code: "p { font-family: Arial, sans-serif; font-size: 16px; }" }
            ]
          },
          {
            h: "Make it readable",
            body: [
              "A good page uses one or two fonts, keeps body text at least 14–16px, and leaves breathing room between lines with line-height."
            ]
          }
        ]
      },
      template: {
        filename: "my_text.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; font-size: 16px; }
    h1 { text-align: center; }
    .quote { font-style: italic; text-align: right; }
  </style>
</head>
<body>
  <h1>Text styling practice</h1>
  <p>Adjust the size, weight and alignment of this text.</p>
  <p class="quote">A small italic quote, aligned to the right.</p>
</body>
</html>`,
        tasks: [
          "Make the heading bold and change its font.",
          "Change the body font-size to 18px and see how it feels.",
          "Add a paragraph of centred text.",
          "Add a line-height of 1.8 to the body rule."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The page runs",
            "The fonts and sizes match the task",
            "The student can name two text properties"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which property changes the size of text?", answer: "font-size" },
            { prompt: "Question 2: Which property would centre a paragraph?", answer: "text-align: center" },
            { prompt: "Question 3: Why should you use a heading tag instead of a big font-size for a title?", answer: "Headings show importance and structure, not just size; they help readers and screen readers understand the page." }
          ]
        }
      ]
    },
    {
      n: 5, title: "The box model", emoji: "📦", color: "control", tracks: "both",
      concept: "Every element is a box made of content, padding, border and margin. Understanding the box model is the key to spacing.",
      objective: "Students can explain the four layers of the box model and use padding, border and margin to control spacing.",
      teachingPoints: [
        "Every element is a box with content, then padding, then a border, then margin outside it.",
        "padding is space inside the border; margin is space outside the border.",
        "A border draws the box's edge and takes up space."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "The box model", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "See the box model",
          filename: "box.html",
          caption: "Try changing padding and margin to feel the difference: padding grows the box from inside, margin moves it from outside.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      background: #ffffff;
      border: 4px solid #ffab19;
      padding: 20px;
      margin: 30px;
    }
  </style>
</head>
<body>
  <div class="box">
    Content sits here, padding is space inside the border,
    and margin pushes other boxes away.
  </div>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Confusing padding and margin — padding is inside the border, margin is outside.",
        "Forgetting that a border adds to the element's total size.",
        "Writing padding: 10 without a unit (CSS needs px, rem, etc.)."
      ],
      handout: {
        sections: [
          {
            h: "The four layers",
            body: [
              "From the inside out: content, padding, border, margin. Padding keeps content away from the border; margin keeps the box away from its neighbours."
            ],
            codes: [
              { label: "box.css", code: "padding: 20px;  border: 4px solid black;  margin: 30px;" }
            ]
          },
          {
            h: "Shorthand",
            body: [
              "You can write all four sides in one line: padding: 10px 20px sets 10px top/bottom and 20px left/right."
            ]
          }
        ]
      },
      template: {
        filename: "box_practice.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      background: #ffffff;
      border: 2px solid #4c97ff;
      padding: 10px;
      margin: 20px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Card one</h2>
    <p>Change the padding and margin to feel the box model.</p>
  </div>
  <div class="card">
    <h2>Card two</h2>
    <p>Notice how margin keeps these two cards apart.</p>
  </div>
</body>
</html>`,
        tasks: [
          "Increase the padding of both cards and run it.",
          "Increase the margin between the two cards.",
          "Change the border to dashed and make it thicker.",
          "Write a comment in the style block explaining the difference between padding and margin."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "Both cards render",
            "Padding and margin changes show clearly",
            "The student can explain the four layers"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: What are the four layers of the box model, inside to outside?", answer: "Content, padding, border, margin." },
            { prompt: "Question 2: Which property is space INSIDE the border?", answer: "padding" },
            { prompt: "Question 3: Which property is space OUTSIDE the border?", answer: "margin" }
          ]
        }
      ]
    },
    {
      n: 6, title: "Sizing and spacing", emoji: "📐", color: "operators", tracks: "both",
      concept: "Widths, heights and display control how big elements are and whether they sit in a line or stack.",
      objective: "Students can control the size of elements and how they sit next to each other with width, height and display.",
      teachingPoints: [
        "width and height set an element's size; max-width stops it growing too wide.",
        "display: block makes an element take a full line; display: inline keeps it in the flow of text.",
        "Use margin: 0 auto to centre a block element on the page."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Sizing & display", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Block and inline",
          filename: "sizing.html",
          caption: "A block takes a full line; inline-block elements flow next to each other. Change the width to see the block shrink.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    .wide { width: 80%; margin: 0 auto; background: #eef2f7; }
    .pill { display: inline-block; background: #59c059; padding: 4px 10px; }
  </style>
</head>
<body>
  <div class="wide">
    This block is 80% wide and centred.
  </div>
  <p>Here are some <span class="pill">inline pills</span> that sit <span class="pill">side by side</span>.</p>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Expecting an inline element to respect width and height (it does not — use inline-block or block).",
        "Forgetting the unit on width.",
        "Using a fixed pixel width when a percentage would survive different screens better."
      ],
      handout: {
        sections: [
          {
            h: "Width and height",
            body: [
              "width sets how wide an element is, height sets how tall. max-width lets it shrink on small screens but never grow past a limit."
            ]
          },
          {
            h: "Block vs inline",
            body: [
              "A block element starts on a new line and fills the width. An inline element stays inside the text. inline-block gives you the middle ground: inline flow but block sizing."
            ]
          }
        ]
      },
      template: {
        filename: "sizing_practice.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    .card { width: 60%; margin: 0 auto; border: 2px solid #5cb1d6; padding: 12px; }
    .tag { display: inline-block; background: #ffbf00; padding: 2px 8px; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Centred card</h2>
    <p>This card is 60% wide and centred with margin: 0 auto.</p>
  </div>
  <p>Tags: <span class="tag">one</span> <span class="tag">two</span> <span class="tag">three</span></p>
</body>
</html>`,
        tasks: [
          "Change the card width to 90% and run it.",
          "Centre a second card below the first.",
          "Make the tags bigger by changing their padding.",
          "Add a max-width to the card so it never exceeds 400px."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The page runs",
            "The card stays centred at both widths",
            "The student can tell block from inline"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Write the property that keeps an element from growing wider than 400px.", answer: "max-width: 400px" },
            { prompt: "Question 2: What does margin: 0 auto do on a block element?", answer: "It centres the element horizontally." },
            { prompt: "Question 3: True or false: an inline element respects width and height. Why?", answer: "False. Inline elements flow inside text and ignore width/height; use inline-block or block if you need sizing." }
          ]
        }
      ]
    },
    {
      n: 7, title: "Layout with Flexbox", emoji: "↔️", color: "motion", tracks: "both",
      concept: "Flexbox arranges items in a row or column and spaces them neatly, which is how most modern layouts are built.",
      objective: "Students can lay out items in a row or column with Flexbox and space them evenly.",
      teachingPoints: [
        "display: flex turns a container into a Flexbox; its children line up in a row by default.",
        "flex-direction chooses row or column; gap adds space between children.",
        "justify-content spaces the row (start, center, space-between); align-items lines children up crossways."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Flexbox", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A flex toolbar",
          filename: "flex.html",
          caption: "display: flex lays the two spans side by side; justify-content: space-between pushes them to the two ends.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    .toolbar {
      display: flex;
      justify-content: space-between;
      background: #1f2a44;
      color: #ffffff;
      padding: 10px 16px;
    }
    .toolbar a { color: #ffffff; margin-right: 12px; }
  </style>
</head>
<body>
  <div class="toolbar">
    <span>My Site</span>
    <span><a href="#">Home</a><a href="#">About</a><a href="#">Contact</a></span>
  </div>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Adding flex properties to the children instead of the container.",
        "Confusing justify-content (main axis) with align-items (cross axis).",
        "Forgetting display: flex, so the row never appears."
      ],
      handout: {
        sections: [
          {
            h: "Turn a container into flex",
            body: [
              "Put display: flex on the parent. Its children line up in a row. flex-direction: column stacks them instead."
            ],
            codes: [
              { label: "flex.css", code: ".parent { display: flex; gap: 12px; }" }
            ]
          },
          {
            h: "Spacing the row",
            body: [
              "justify-content: space-between pushes the first item to the start and the last to the end. center keeps them together in the middle. align-items: center lines them up vertically."
            ]
          }
        ]
      },
      template: {
        filename: "flex_practice.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; }
    .row {
      display: flex;
      gap: 12px;
      justify-content: center;
      background: #f6f4ee;
      padding: 16px;
    }
    .box { background: #4c97ff; color: #fff; padding: 12px 20px; }
  </style>
</head>
<body>
  <h1>Flexbox practice</h1>
  <div class="row">
    <div class="box">One</div>
    <div class="box">Two</div>
    <div class="box">Three</div>
  </div>
</body>
</html>`,
        tasks: [
          "Change justify-content to space-between and run it.",
          "Change flex-direction to column and see the boxes stack.",
          "Add a fourth box to the row.",
          "Set align-items to center and give the boxes different heights."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The row of boxes renders",
            "Changing flex-direction changes the layout",
            "The student can name justify-content and what it does"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which property turns a container into a Flexbox?", answer: "display: flex" },
            { prompt: "Question 2: Which property pushes the first item to the start and the last to the end of a row?", answer: "justify-content: space-between" },
            { prompt: "Question 3: Which property stacks flex children in a column?", answer: "flex-direction: column" }
          ]
        }
      ]
    },
    {
      n: 8, title: "Styling links, lists and buttons", emoji: "🔘", color: "variables", tracks: "both",
      concept: "Links, lists and buttons can all be styled to match a design, including their hover and active states.",
      objective: "Students can style interactive elements and their hover states.",
      teachingPoints: [
        "Links have states: a:link, a:hover, a:visited, a:active.",
        "Lists can lose their bullets with list-style: none and gain padding and spacing.",
        "Buttons can be styled like boxes, with a hover state that gives feedback."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Styling interactions", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Clickable styling",
          filename: "interactions.html",
          caption: "Hover the link and the button — the hover states change colour and add a line.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    a { color: #4c97ff; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .btn {
      background: #ff8c1a;
      color: #fff;
      padding: 8px 16px;
      border: 0;
      border-radius: 8px;
      cursor: pointer;
    }
    .btn:hover { background: #b45309; }
    ul { list-style: none; padding: 0; }
  </style>
</head>
<body>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
  <button class="btn">Hover me</button>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Styling a and wondering why hover does nothing (you must style a:hover, not a).",
        "Forgetting border: 0 on a button so the browser's default border shows.",
        "Leaving list bullets on a navigation menu by forgetting list-style: none."
      ],
      handout: {
        sections: [
          {
            h: "Link states",
            body: [
              "A link has states: normal, hovered, visited and active. Style each one separately so users get feedback."
            ],
            codes: [
              { label: "links.css", code: "a:hover { color: #b45309; }" }
            ]
          },
          {
            h: "Buttons",
            body: [
              "Style a button like a box: background, padding, border-radius and a hover colour. cursor: pointer tells users it is clickable."
            ]
          }
        ]
      },
      template: {
        filename: "interactions_practice.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; }
    nav ul { list-style: none; display: flex; gap: 16px; padding: 0; }
    nav a { color: #4c97ff; text-decoration: none; font-weight: 700; }
    nav a:hover { color: #1f2a44; }
    .btn {
      background: #59c059; color: #fff; border: 0;
      padding: 10px 18px; border-radius: 10px; cursor: pointer;
    }
    .btn:hover { background: #15803d; }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <button class="btn">Press me</button>
</body>
</html>`,
        tasks: [
          "Make the links change colour when hovered.",
          "Add a fourth link to the navigation.",
          "Change the button hover colour.",
          "Add padding to the nav list items so the menu breathes."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "Hovering the links changes their colour",
            "The button has a visible hover state",
            "The nav has no bullets"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which selector styles a link when the mouse is over it?", answer: "a:hover" },
            { prompt: "Question 2: Which property removes the default list bullets?", answer: "list-style: none" },
            { prompt: "Question 3: What does cursor: pointer do on a button?", answer: "It shows the pointer hand cursor so users know the button is clickable." }
          ]
        }
      ]
    },
    {
      n: 9, title: "Responsive basics", emoji: "📱", color: "events", tracks: "both",
      concept: "Responsive design makes a page look good on phones and computers, using the viewport and media queries.",
      objective: "Students can make a page adapt to small screens with the viewport tag and a media query.",
      teachingPoints: [
        "The viewport meta tag tells phones to use their real width.",
        "A media query applies rules only when the screen matches a condition, e.g. @media (max-width: 600px).",
        "Small screens usually want stacked, full-width content."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Responsive basics", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Shrink and stack",
          filename: "responsive.html",
          caption: "On a wide screen the boxes sit in a row; under 600px wide they stack. Drag the window narrow to see it.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    .row { display: flex; gap: 12px; }
    .box { flex: 1; background: #5cb1d6; padding: 20px; color: #fff; }
    @media (max-width: 600px) {
      .row { flex-direction: column; }
    }
  </style>
</head>
<body>
  <div class="row">
    <div class="box">Box one</div>
    <div class="box">Box two</div>
    <div class="box">Box three</div>
  </div>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Forgetting the viewport meta tag, so phones zoom the page out.",
        "Writing a media query with no effect because the breakpoint never matches the screen width.",
        "Putting the media query before the normal rules so the normal rules win anyway."
      ],
      handout: {
        sections: [
          {
            h: "Tell phones your real width",
            body: [
              "Add the viewport meta tag to the head. Without it, a phone shrinks the whole page to fit."
            ],
            codes: [
              { label: "index.html", code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />" }
            ]
          },
          {
            h: "Media queries",
            body: [
              "A media query wraps rules that only apply on certain screens. @media (max-width: 600px) applies its rules when the screen is 600px wide or less."
            ]
          }
        ]
      },
      template: {
        filename: "responsive_practice.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body { font-family: sans-serif; }
    .cards { display: flex; gap: 12px; }
    .card { flex: 1; border: 2px solid #4c97ff; padding: 12px; }
    @media (max-width: 600px) {
      .cards { flex-direction: column; }
    }
  </style>
</head>
<body>
  <h1>Responsive practice</h1>
  <div class="cards">
    <div class="card"><h2>Card one</h2><p>Text here.</p></div>
    <div class="card"><h2>Card two</h2><p>Text here.</p></div>
  </div>
</body>
</html>`,
        tasks: [
          "Resize the window and watch the cards stack under 600px.",
          "Add a third card.",
          "Change the breakpoint to 800px and test again.",
          "Make the heading smaller on small screens with a media query."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Peer pair-check", type: "checklist",
          items: [
            "The cards stack on a narrow window",
            "The viewport meta tag is present",
            "The student can explain what the media query does"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which tag stops a phone from zooming the page out?", answer: "The viewport meta tag: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />" },
            { prompt: "Question 2: What does @media (max-width: 600px) mean?", answer: "Its rules apply when the screen is 600px wide or less." },
            { prompt: "Question 3: Why stack cards on a small screen?", answer: "A narrow screen has little horizontal space; stacking keeps each item wide enough to read." }
          ]
        }
      ]
    },
    {
      n: 10, title: "Project: style your page", emoji: "🌟", color: "looks", tracks: "both",
      concept: "Apply everything from this term to turn the About Me page into a designed, themed site.",
      objective: "Students apply the term's CSS skills to design their About Me page from Term 1.",
      teachingPoints: [
        "Pick a colour theme (two or three colours) before styling.",
        "Use the box model, Flexbox and hover states to make the page feel designed.",
        "Test on a narrow window and add a media query so it works on phones."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Demo of a finished styled page", mins: 4 },
        { label: "Build time", mins: 20 },
        { label: "Present", mins: 5 },
        { label: "Wrap-up", mins: 3 }
      ],
      liveDemo: [
        {
          title: "A styled About Me",
          filename: "about_styled.html",
          caption: "A complete, themed page using this term's skills: colours, the box model, Flexbox and a media query.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body { font-family: sans-serif; background: #f6f4ee; margin: 0; }
    header { background: #1f2a44; color: #fff; text-align: center; padding: 24px; }
    main { max-width: 640px; margin: 0 auto; padding: 16px; }
    .skills { display: flex; gap: 12px; justify-content: center; list-style: none; padding: 0; }
    .skills li { background: #4c97ff; color: #fff; padding: 8px 14px; border-radius: 999px; }
    a { color: #4c97ff; }
    a:hover { color: #1f2a44; }
    @media (max-width: 600px) {
      .skills { flex-direction: column; align-items: center; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Hi, I'm Ada</h1>
    <p>Student · builder · explorer</p>
  </header>
  <main>
    <h2>About me</h2>
    <p>A short introduction in my own words.</p>
    <ul class="skills">
      <li>Football</li>
      <li>Drawing</li>
      <li>Maths club</li>
    </ul>
    <p>Say hello: <a href="mailto:me@example.com">me@example.com</a></p>
  </main>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Styling every element differently so the page has no coherent theme.",
        "Forgetting the viewport meta tag so it looks bad on phones.",
        "Leaving broken link or image references from Term 1."
      ],
      handout: {
        sections: [
          {
            h: "Your style checklist",
            list: [
              "A colour theme (2–3 colours used consistently)",
              "A styled header",
              "Cards or sections using the box model",
              "A Flexbox row somewhere",
              "A hover state",
              "A media query"
            ]
          },
          {
            h: "Presenting your page",
            body: [
              "Show your page, name your colour theme, and point to one thing you styled this term that you are proud of."
            ]
          }
        ]
      },
      template: {
        filename: "about_me_styled.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body { font-family: sans-serif; background: #f6f4ee; margin: 0; }
    header { background: #1f2a44; color: #fff; text-align: center; padding: 20px; }
    main { max-width: 640px; margin: 0 auto; padding: 16px; }
  </style>
</head>
<body>
  <header>
    <h1>My name</h1>
    <p>A short tagline about you.</p>
  </header>
  <main>
    <h2>About me</h2>
    <p>Write your introduction here.</p>
    <h2>Hobbies</h2>
    <p>List and style your hobbies here.</p>
  </main>
</body>
</html>`,
        tasks: [
          "Replace the header with your own name and tagline.",
          "Style your hobbies as a Flexbox row of pill badges.",
          "Add a hover state to a link.",
          "Add a media query so the hobbies stack on a phone, then present your page."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Project showcase rubric", type: "rubric",
          criteria: [
            "Page runs without errors",
            "A clear colour theme is used",
            "The page uses the box model and Flexbox",
            "A hover state and a media query are included",
            "The student can present their page in their own words"
          ]
        },
        {
          track: "B", audience: "Both", title: "Design document — Styled About Me", type: "form",
          intro: "Complete this before the showcase.",
          fields: [
            { label: "Your colour theme", hint: "Two or three colours and where you used them" },
            { label: "Which box-model skills did you use?", lines: 2 },
            { label: "Where did you use Flexbox?", lines: 2 },
            { label: "What does your media query change?", lines: 2 }
          ]
        }
      ]
    }
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
