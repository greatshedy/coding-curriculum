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
      n: n,
      title: title,
      emoji: emoji,
      color: color,
      goal: goal,
      concept: concept,
      objective: "",
      teachingPoints: [],
      timing: [],
      liveDemo: [],
      commonMistakes: [],
      handout: { sections: [] },
      template: null,
      assessment: [],
    };
  }

  var term1 = [
    {
      n: 1,
      title: "How the web works",
      emoji: "🌐",
      color: "motion",
      goal: "Create your first web page and see it in a browser.",
      concept:
        "A web page is a text file written in HTML. The browser reads the HTML and draws the page. CSS is a second file that tells the browser how the page should look.",
      objective:
        "Create your first HTML page, link a stylesheet, and colour a heading.",
      teachingPoints: [
        "A web page is an HTML text file that the browser reads and draws on the screen.",
        "CSS is a second file that styles the page: colours, fonts and layout.",
        "We link the CSS file with a <link> tag and colour a heading with the color property.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "HTML and CSS files", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "Your first page with a coloured heading",
          filename: "first_page.html",
          caption:
            "The HTML builds the page; the CSS block styles the heading.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My First Page</title>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
<body>
  <h1>Welcome to my first page</h1>
  <p>This is a paragraph the browser draws on the screen.</p>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Saving the file as a .txt file instead of .html. The browser then shows the code as plain text. Check the file ending when you save.",
        "Putting the <style> block inside the body. Keep it in the head so the styles load before the page is drawn.",
        "Forgetting the # in a hex colour, for example writing color: f2f2f2 instead of #f2f2f2. Without the #, the colour will not work.",
      ],
      handout: {
        sections: [
          {
            h: "A page and its style",
            body: [
              "HTML gives the page its structure. A heading is written with the <h1> tag.",
              "CSS gives the page its look. This rule colours every h1 on the page.",
            ],
            codes: [
              { label: "page.html", code: "<h1>Welcome to my page</h1>" },
              { label: "style.css", code: "h1 {\n  color: blue;\n}" },
            ],
          },
          {
            h: "Linking your stylesheet",
            body: [
              "The CSS lives in its own file. We connect the two files with the <link> tag inside the head.",
              "Write the file name in href. Keep both files in the same folder so the browser can find them.",
            ],
            codes: [
              {
                label: "link in the head",
                code: '<link rel="stylesheet" href="style.css">',
              },
            ],
          },
          {
            h: "Your tools",
            list: [
              "A text editor, such as Notepad or VS Code",
              "A web browser, such as Chrome or Firefox",
              "A project folder to keep your files together",
            ],
          },
        ],
      },
      template: {
        filename: "index.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Page</title>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
<body>
  <h1>My school</h1>
  <p>I am learning to build web pages.</p>
</body>
</html>`,
        core: [
          "Change the heading text to your own name.",
          "Change the heading colour to green.",
          "Add a second paragraph about your class.",
        ],
        stretch: [
          "Give the body a background colour.",
          "Add a second CSS rule to colour the paragraph.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "What does HTML do?",
              answer:
                "HTML builds the structure of the page: the headings, paragraphs, lists and other content.",
            },
            {
              prompt: "What does CSS do?",
              answer:
                "CSS styles the page. It changes colours, fonts, spacing and layout.",
            },
            {
              prompt: "Which tag links a stylesheet to a page?",
              answer:
                'The <link> tag. For example: <link rel="stylesheet" href="style.css">.',
            },
          ],
        },
      ],
    },
    {
      n: 2,
      title: "Headings and paragraphs",
      emoji: "🔤",
      color: "looks",
      goal: "Build an About Me page and style its text.",
      concept:
        "Headings show the importance of text and paragraphs group sentences. CSS can change a page's colours, fonts, size and alignment.",
      objective: "Build an About Me page and style its text with selectors.",
      teachingPoints: [
        "The tags h1 to h6 show the importance of text, with h1 the most important.",
        "The <p> tag groups sentences into a paragraph.",
        "An element selector targets every tag of one kind and can set color, font-family, font-size and text-align.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Headings, paragraphs, properties", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "An About Me page with styled text",
          filename: "about.html",
          caption:
            "One h1, one h2 and two paragraphs. The CSS sets the font, size and alignment.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>About Me</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    h1 {
      font-size: 32px;
      text-align: center;
    }
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
      text-align: left;
    }
  </style>
</head>
<body>
  <h1>About Me</h1>
  <h2>My name is Ada</h2>
  <p>I am in JSS 2 at Green Field Secondary School.</p>
  <p>I like jollof rice and playing football with my friends.</p>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Using more than one h1 on a page. Keep one h1 as the main title and use h2 for sections.",
        "Making text bold to look like a heading instead of using a real heading tag. Use the tag so the meaning is clear.",
        "Choosing a text colour too close to the background, which makes it hard to read. Aim for strong contrast.",
      ],
      handout: {
        sections: [
          {
            h: "Headings show order",
            body: [
              "Headings tell the reader how the page is organised. h1 is the main title, h2 is a section, and so on down to h6.",
              "Use them in order. Do not skip from h1 straight to h4.",
            ],
            codes: [
              {
                label: "headings.html",
                code: "<h1>My school</h1>\n<h2>About</h2>\n<h3>Our history</h3>",
              },
            ],
          },
          {
            h: "Paragraphs group ideas",
            body: [
              "The <p> tag wraps a group of sentences that belong together. Use a new <p> for a new idea.",
            ],
            codes: [
              {
                label: "paragraphs.html",
                code: "<p>I am in JSS 2.</p>\n<p>My favourite subject is Basic Science.</p>",
              },
            ],
          },
          {
            h: "Text properties",
            body: [
              "CSS can change how text looks. These are the properties you will use most this week.",
            ],
            codes: [
              {
                label: "styles.css",
                code: "p {\n  font-size: 16px;\n  text-align: left;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "about_me.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>About Me</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    h1 {
      color: #1f2a44;
    }
    p {
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>About Me</h1>
  <h2>Who I am</h2>
  <p>Write one sentence about yourself here.</p>
  <p>Write a second sentence about your school here.</p>
</body>
</html>`,
        core: [
          "Change the h1 to your full name.",
          "Add a third paragraph about your favourite subject.",
          "Change the paragraph text colour.",
        ],
        stretch: [
          "Centre the h1 using text-align: center.",
          "Try a second font, such as Georgia, on the paragraphs.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Which heading tag is the most important?",
              answer:
                "h1 is the most important. The importance goes down as the number goes up, to h6.",
            },
            {
              prompt: "Which tag wraps a sentence or a group of sentences?",
              answer: "The <p> tag, which stands for paragraph.",
            },
            {
              prompt: "Which CSS property centre-aligns text?",
              answer: "text-align: center.",
            },
          ],
        },
      ],
    },
    {
      n: 3,
      title: "Links and images",
      emoji: "🔗",
      color: "sensing",
      goal: "Add a styled photo and working links to your page.",
      concept:
        "Links move people between pages and images bring pictures onto a page. CSS can set an image's width, add a border and round its corners.",
      objective: "Add a working link and a styled image to a page.",
      teachingPoints: [
        'The <a href="..."> tag makes a link that takes the reader to another page.',
        'The <img src="..." alt="..."> tag shows an image, and alt describes it in words.',
        "CSS sets an image's width, border and rounded corners, and can style link hover states.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Links, images, alt text", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A link and a styled photo",
          filename: "links.html",
          caption:
            "The link underlines when you hover over it, and the image has a border and rounded corners.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Links and Images</title>
  <style>
    a {
      color: #4c97ff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .photo {
      width: 200px;
      border: 3px solid #1f2a44;
      border-radius: 12px;
    }
  </style>
</head>
<body>
  <h1>My links and pictures</h1>
  <p><a href="about.html">Read my About Me page</a></p>
  <img class="photo" src="school.jpg" alt="The front gate of my school">
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Using the wrong file path, so the image shows as a broken icon. Keep the image in the same folder and copy the name exactly.",
        "Leaving out the alt text. alt describes the image for people who cannot see it and shows when the image cannot load.",
        "Writing <img></img>. An image has no closing tag; use just <img ...> with a slash if you like.",
      ],
      handout: {
        sections: [
          {
            h: "Links",
            body: [
              "A link uses the <a> tag. The href attribute holds the address of the page you are linking to.",
              "The words between the tags are what the reader clicks.",
            ],
            codes: [
              {
                label: "link.html",
                code: '<a href="about.html">Read about my school</a>',
              },
            ],
          },
          {
            h: "Images and alt text",
            body: [
              "An image uses the <img> tag. The src attribute holds the file name, and alt describes the picture.",
              "Always write a short, useful alt.",
            ],
            codes: [
              {
                label: "image.html",
                code: '<img src="school.jpg" alt="The front gate of my school">',
              },
            ],
          },
          {
            h: "Styling images and links",
            body: [
              "We give the image a class and style that class. border-radius rounds the corners.",
            ],
            codes: [
              {
                label: "styles.css",
                code: ".photo {\n  width: 200px;\n  border-radius: 12px;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "links.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Links</title>
  <style>
    .photo {
      width: 200px;
    }
  </style>
</head>
<body>
  <h1>My page</h1>
  <p><a href="about.html">Link to another page</a></p>
  <img class="photo" src="school.jpg" alt="Write a description here">
</body>
</html>`,
        core: [
          "Add a link to about.html with words to click.",
          "Add an image with a src and a useful alt.",
          "Round the image corners with border-radius.",
        ],
        stretch: [
          "Add an a:hover rule so the link underlines on hover.",
          "Give the image a border.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Which attribute holds the address of a link?",
              answer: 'href. For example: <a href="about.html">.',
            },
            {
              prompt: "What is the alt attribute for?",
              answer:
                "It describes the image in words. It is read out to people who cannot see the image and shows if the image fails to load.",
            },
            {
              prompt: "Which CSS property rounds the corners of an image?",
              answer: "border-radius.",
            },
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Lists",
      emoji: "📋",
      color: "control",
      goal: "Make a tidy, styled list page.",
      concept:
        "Lists group items together: unordered lists use bullets, ordered lists use numbers, and lists can be nested. CSS controls their spacing and markers.",
      objective: "Build styled ordered, unordered and nested lists.",
      teachingPoints: [
        "The <ul> tag makes a bullet list and the <ol> tag makes a numbered list.",
        "Each item goes inside an <li> tag.",
        "A list can nest inside an <li>, and CSS controls spacing and markers.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Two lists and nesting", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A jollof ingredients list with a nested list",
          filename: "lists.html",
          caption:
            "The nested list sits inside an <li>, and the markers are coloured orange with CSS.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Lists</title>
  <style>
    li {
      margin-bottom: 6px;
    }
    ul li::marker {
      color: #ff8c1a;
    }
  </style>
</head>
<body>
  <h1>Jollof rice ingredients</h1>
  <ul>
    <li>Rice
      <ul>
        <li>Long grain</li>
        <li>Washed and drained</li>
      </ul>
    </li>
    <li>Tomatoes</li>
    <li>Pepper and onion</li>
  </ul>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Putting text straight inside <ul> instead of inside an <li>. Every item must be wrapped in <li>.",
        "Nesting a list outside an <li>. A nested list must sit inside the item it belongs to.",
        "Using <ol> when the order does not matter. Use <ul> for a shopping list and <ol> for steps.",
      ],
      handout: {
        sections: [
          {
            h: "Two kinds of lists",
            body: [
              "A bullet list uses <ul>. A numbered list uses <ol>. Every item uses <li>.",
            ],
            codes: [
              {
                label: "bullets.html",
                code: "<ul>\n  <li>Rice</li>\n  <li>Beans</li>\n</ul>",
              },
              {
                label: "numbers.html",
                code: "<ol>\n  <li>Wash the rice</li>\n  <li>Blend the pepper</li>\n</ol>",
              },
            ],
          },
          {
            h: "Nesting",
            body: [
              "A nested list sits inside an <li>. This is how you show items that belong to an item.",
            ],
            codes: [
              {
                label: "nested.html",
                code: "<ul>\n  <li>Rice\n    <ul>\n      <li>Long grain</li>\n    </ul>\n  </li>\n</ul>",
              },
            ],
          },
          {
            h: "Styling lists",
            body: [
              "CSS controls the space between items and the colour of the markers.",
            ],
            codes: [
              { label: "styles.css", code: "li {\n  margin-bottom: 6px;\n}" },
            ],
          },
        ],
      },
      template: {
        filename: "lists.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Lists</title>
  <style>
    li {
      margin-bottom: 6px;
    }
  </style>
</head>
<body>
  <h1>My Lists</h1>
  <h2>My favourite foods</h2>
  <ul>
    <li>Write a food here</li>
    <li>Write another food here</li>
  </ul>
  <h2>How to cook jollof rice</h2>
  <ol>
    <li>Step one</li>
    <li>Step two</li>
  </ol>
</body>
</html>`,
        core: [
          "Make a bullet list of three of your favourite foods.",
          "Make a numbered list of three steps.",
          "Nest a small list inside one of the items.",
        ],
        stretch: [
          "Change the marker colour with ::marker.",
          "Remove the bullets with list-style: none.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Which tag makes a numbered list?",
              answer: "<ol>, the ordered list tag.",
            },
            {
              prompt: "What tag wraps each item in a list?",
              answer: "<li>, the list item tag.",
            },
            {
              prompt: "Where does a nested list go?",
              answer: "Inside the <li> of the item it belongs to.",
            },
          ],
        },
      ],
    },
    {
      n: 5,
      title: "Containers and the box model",
      emoji: "📦",
      color: "operators",
      goal: "Build and measure a profile card.",
      concept:
        "Every element is a box. The box model is content, padding, border and margin. Containers such as div, span and section group your content.",
      objective:
        "Explain the box model and use padding, border and margin on a profile card.",
      teachingPoints: [
        "Every element is a box made of four layers: content, padding, border and margin.",
        "Padding is the space inside the border; margin is the space outside the border.",
        "The div, span and section tags group content so you can style it together.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "The box model and containers", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A profile card with visible box layers",
          filename: "card.html",
          caption:
            "Change the padding, border or margin numbers and run again to see the box grow and move.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Profile Card</title>
  <style>
    .card {
      width: 260px;
      padding: 20px;
      border: 3px solid #59c059;
      margin: 24px;
      background: #f2fff2;
    }
    h2 {
      margin-top: 0;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Ada Obi</h2>
    <p>JSS 2, Green Field Secondary School</p>
    <p>Best subject: Basic Science</p>
  </div>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Confusing padding and margin. Padding pushes the space inside the border; margin pushes other things away outside the border.",
        "Forgetting the unit, such as writing padding: 20 instead of padding: 20px. Lengths need a unit.",
        "Forgetting that the border adds to the size of the box. A 260px card with a border is a little wider than 260px.",
      ],
      handout: {
        sections: [
          {
            h: "The four layers",
            body: [
              "From the inside out the box is content, padding, border and margin.",
              "This rule shows all three of the spacing layers at once.",
            ],
            codes: [
              {
                label: "box.css",
                code: "padding: 12px;\nborder: 2px solid #59c059;\nmargin: 16px;",
              },
            ],
          },
          {
            h: "Containers",
            body: [
              "Containers group content so you can move and style it together.",
            ],
            list: [
              "div is a block box, good for a whole section or card",
              "span wraps a few words inline, inside a sentence",
              "section groups a themed part of a page",
            ],
          },
          {
            h: "Shorthand",
            body: [
              "You can write two values for padding or margin. The first is top and bottom; the second is left and right.",
            ],
            codes: [{ label: "shorthand.css", code: "padding: 8px 14px;" }],
          },
        ],
      },
      template: {
        filename: "profile_card.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Profile Card</title>
  <style>
    .card {
      width: 260px;
      padding: 10px;
      border: 2px solid #1f2a44;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Your name</h2>
    <p>Your class</p>
    <p>Your favourite subject</p>
  </div>
</body>
</html>`,
        core: [
          "Increase the padding to 20px.",
          "Increase the margin to 24px.",
          "Make the border dashed.",
        ],
        stretch: [
          "Add a second card under the first.",
          "Centre a card with margin: 0 auto.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Name the four box layers from inside to outside.",
              answer: "Content, padding, border, margin.",
            },
            {
              prompt: "Which layer is the space inside the border?",
              answer: "Padding.",
            },
            {
              prompt: "Which layer is the space outside the border?",
              answer: "Margin.",
            },
          ],
        },
      ],
    },
    {
      n: 6,
      title: "Semantic layout",
      emoji: "🧱",
      color: "events",
      goal: "Structure and theme a whole page.",
      concept:
        "Semantic tags such as header, nav, main and footer describe each part of a page. Backgrounds, classes and a colour theme tie the page together.",
      objective:
        "Structure a page with semantic tags and give it a colour theme.",
      teachingPoints: [
        "The header, nav, main and footer tags describe the parts of a page.",
        "A class can be reused on many elements; an id names one unique element and can be a link target.",
        "Backgrounds and a small colour theme tie the page together, and a nav list can be styled as a menu.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Regions, ids and classes", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A themed page with semantic regions",
          filename: "layout.html",
          caption:
            "Each region has its own tag and background, and the nav list sits in a row.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>School Page Layout</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
    }
    header {
      background: #1f2a44;
      color: #ffffff;
      padding: 14px 20px;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 16px;
      padding: 0;
      margin: 12px 20px;
    }
    nav a {
      color: #4c97ff;
      text-decoration: none;
    }
    main {
      padding: 20px;
    }
    footer {
      background: #f2f2f2;
      padding: 12px 20px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Green Field Secondary School</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#timetable">Timetable</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  <main>
    <h2 id="about">About our school</h2>
    <p>Green Field Secondary School is in Lagos and has over 600 students.</p>
  </main>
  <footer>
    <p>Copyright 2026 Green Field Secondary School</p>
  </footer>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Using div for every region. Use header, nav, main and footer so the page describes itself.",
        "Having more than one <main> on a page. There should be only one main region.",
        "Putting the footer inside main. The footer is a separate region at the bottom of the page.",
      ],
      handout: {
        sections: [
          {
            h: "The regions of a page",
            list: [
              "header: the top of the page, often the logo and title",
              "nav: the menu of links",
              "main: the main content, used once",
              "footer: the bottom, often the school name and year",
            ],
          },
          {
            h: "ids vs classes",
            body: [
              "A class can be used on many elements that share a look. An id names one unique element and can be the target of a link.",
              "Use a class for styling and an id for one-of-a-kind elements, such as a section you link to with #about.",
            ],
          },
          {
            h: "Theming with backgrounds",
            body: [
              "A background colour on the header makes the theme clear. Keep the text light against a dark background.",
            ],
            codes: [
              {
                label: "theme.css",
                code: "header {\n  background: #1f2a44;\n  color: #ffffff;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "my_school_page.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My School Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    header {
      background: #1f2a44;
      color: #ffffff;
      padding: 14px 20px;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 16px;
      padding: 0;
    }
    main {
      padding: 20px;
    }
    footer {
      background: #f2f2f2;
      padding: 12px 20px;
    }
  </style>
</head>
<body>
  <header>
    <h1>School name</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
  <main>
    <p>Write the main content here.</p>
    <footer>
      <p>Copyright 2026</p>
    </footer>
  </main>
</body>
</html>`,
        core: [
          "Give each region its correct tag: header, nav, main and footer.",
          "Add a nav link to a Contact section.",
          "Move the footer out of main to the bottom of the page.",
        ],
        stretch: [
          "Theme two colours across the page.",
          "Make the nav horizontal with display: flex.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            { prompt: "Which tag holds the navigation?", answer: "<nav>." },
            {
              prompt: "Which tag holds the main content?",
              answer: "<main>, and there should be only one per page.",
            },
            {
              prompt: "When do you use a class and when an id?",
              answer:
                "Use a class for many elements that share a style, and an id for one unique element, such as a section you link to.",
            },
          ],
        },
      ],
    },
    {
      n: 7,
      title: "Tables",
      emoji: "🧮",
      color: "variables",
      goal: "Build a styled class timetable.",
      concept:
        "Tables arrange information into rows and columns. CSS can add borders, spacing and striped rows to make a table easy to read.",
      objective: "Build a styled class timetable with a table.",
      teachingPoints: [
        "A table has rows (<tr>), header cells (<th>) and data cells (<td>).",
        "Header cells describe the column; data cells hold the information.",
        "CSS adds borders, spacing and striped rows so the table is easy to read.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Rows, headers and cells", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A class timetable with striped rows",
          filename: "timetable.html",
          caption:
            "The header row is dark, and every even row is lightly shaded to guide the eye.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Class Timetable</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      font-family: Arial, sans-serif;
    }
    th, td {
      border: 1px solid #999999;
      padding: 10px;
      text-align: left;
    }
    th {
      background: #1f2a44;
      color: #ffffff;
    }
    tr:nth-child(even) {
      background: #f2f2f2;
    }
  </style>
</head>
<body>
  <h1>JSS 2 Timetable</h1>
  <table>
    <tr>
      <th>Day</th>
      <th>Morning</th>
      <th>Afternoon</th>
    </tr>
    <tr>
      <td>Monday</td>
      <td>Mathematics</td>
      <td>English</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>Basic Science</td>
      <td>Computer Studies</td>
    </tr>
  </table>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Putting <td> straight inside <table>. Cells must be inside a <tr> row.",
        "Forgetting to close a row, which makes columns merge. Check that every <tr> has a </tr>.",
        "Using tables to lay out a whole page. Use tables for information that belongs in rows and columns.",
      ],
      handout: {
        sections: [
          {
            h: "Rows, headers, cells",
            body: [
              "A row uses <tr>. Inside it, a header cell uses <th> and a data cell uses <td>.",
              "The first row is usually the header row.",
            ],
            codes: [
              {
                label: "table.html",
                code: "<table>\n  <tr>\n    <th>Day</th>\n    <th>Subject</th>\n  </tr>\n  <tr>\n    <td>Monday</td>\n    <td>Mathematics</td>\n  </tr>\n</table>",
              },
            ],
          },
          {
            h: "A timetable",
            body: [
              "A timetable is a natural fit for a table. Each day is a row; each time of day is a column.",
            ],
            codes: [
              {
                label: "timetable.html",
                code: "<tr>\n  <td>Monday</td>\n  <td>Mathematics</td>\n  <td>English</td>\n</tr>",
              },
            ],
          },
          {
            h: "Striped rows",
            body: [
              "Shading every even row makes a long table easier to follow. nth-child(even) selects every second row.",
            ],
            codes: [
              {
                label: "stripes.css",
                code: "tr:nth-child(even) {\n  background: #f2f2f2;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "timetable.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Timetable</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #999999;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>My Timetable</h1>
  <table>
    <tr>
      <th>Day</th>
      <th>Morning</th>
      <th>Afternoon</th>
    </tr>
    <tr>
      <td>Monday</td>
      <td>Subject</td>
      <td>Subject</td>
    </tr>
  </table>
</body>
</html>`,
        core: [
          "Fill the three columns with real subjects.",
          "Add a header row using <th> cells.",
          "Add a fourth subject row.",
        ],
        stretch: [
          "Stripe the rows with tr:nth-child(even).",
          "Centre all the text in the table.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            { prompt: "Which tag makes a table row?", answer: "<tr>." },
            {
              prompt: "What is the difference between <th> and <td>?",
              answer:
                "<th> is a header cell, shown bold and centred by default; <td> is a normal data cell.",
            },
            {
              prompt: "How many cells are in two rows of three?",
              answer: "Six cells.",
            },
          ],
        },
      ],
    },
    {
      n: 8,
      title: "Forms",
      emoji: "📝",
      color: "motion",
      goal: "Build a styled registration form.",
      concept:
        "Forms let people type information into a page. Labels describe each field, inputs collect the answer, and buttons submit it.",
      objective:
        "Build a styled registration form with labels, inputs and a button.",
      teachingPoints: [
        "The <form> tag wraps the whole set of fields.",
        "A <label> describes a field, an <input> collects the answer and a <button> submits it.",
        "CSS styles inputs and buttons, and a :focus outline shows which field is active.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Labels, inputs and buttons", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A sign-up form with focus styling",
          filename: "form.html",
          caption:
            "Click into a field to see the blue focus outline. Change the type of an input and run again.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Sign Up</title>
  <style>
    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }
    input {
      padding: 8px;
      border: 1px solid #999999;
      border-radius: 6px;
    }
    input:focus {
      outline: 2px solid #4c97ff;
    }
    button {
      margin-top: 16px;
      padding: 10px 18px;
      background: #4c97ff;
      color: #ffffff;
      border: none;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <h1>School club sign-up</h1>
  <form>
    <label for="name">Full name</label>
    <input id="name" type="text" placeholder="Ada Obi">

    <label for="email">Email address</label>
    <input id="email" type="email" placeholder="ada@example.com">

    <button type="submit">Join the club</button>
  </form>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "An input with no label. Every field needs a label so the user knows what to type.",
        "Forgetting the type attribute on an input, so the browser does not know what kind of answer to expect.",
        "Putting the button outside the form. Keep the button inside <form> so it submits the fields.",
      ],
      handout: {
        sections: [
          {
            h: "Parts of a form",
            body: [
              "The <form> tag wraps the fields. A label describes a field, and an input collects the answer.",
              "The label's for attribute matches the input's id so they are linked.",
            ],
            codes: [
              {
                label: "form.html",
                code: '<form>\n  <label for="name">Full name</label>\n  <input id="name" type="text">\n  <button type="submit">Send</button>\n</form>',
              },
            ],
          },
          {
            h: "Input types",
            list: [
              'type="text" for a short answer, such as a name',
              'type="email" for an email address',
              'type="password" for a hidden answer',
              'type="number" for a number, such as an age',
            ],
          },
          {
            h: "Styling inputs and focus",
            body: [
              "Padding makes a field comfortable to type in. The :focus rule shows which field is active.",
            ],
            codes: [
              {
                label: "styles.css",
                code: "input:focus {\n  outline: 2px solid #4c97ff;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "signup.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Sign Up</title>
  <style>
    label {
      display: block;
      margin-top: 12px;
    }
    input {
      padding: 8px;
      border: 1px solid #999999;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <h1>Sign up</h1>
  <form>
    <button type="submit">Send</button>
  </form>
</body>
</html>`,
        core: [
          "Add a labelled text input for the full name.",
          'Add an email input using type="email".',
          "Add a submit button inside the form.",
        ],
        stretch: [
          "Style the inputs with padding and a border.",
          "Add a :focus outline so the active field stands out.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "What does a label do?",
              answer:
                "It describes a field. It is linked to the input by matching the label's for with the input's id.",
            },
            {
              prompt: "Which tag makes a button?",
              answer: '<button>, usually with type="submit".',
            },
            {
              prompt: "Name two input types.",
              answer:
                "For example text and email (also password, number and others).",
            },
          ],
        },
      ],
    },
    {
      n: 9,
      title: "Project: My School page",
      emoji: "🌟",
      color: "looks",
      goal: "Plan and build a multi-section page of your own.",
      concept:
        "Put everything together: a structured, styled multi-section page about your school or yourself.",
      objective:
        "Plan and build a multi-section, styled page about your school.",
      teachingPoints: [
        "Plan the sections first: header, about, timetable and contact.",
        "Reuse the tags you learned this term: headings, paragraphs, lists, tables, forms and images.",
        "Style the page with a small theme, then test it before you present.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Demo of a finished page", mins: 4 },
        { label: "Build", mins: 20 },
        { label: "Present", mins: 5 },
        { label: "Wrap", mins: 3 },
      ],
      liveDemo: [
        {
          title: "A finished multi-section school page",
          filename: "my_school.html",
          caption:
            "One page using a header, nav, about section, timetable table, contact form and footer.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My School</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      color: #222222;
    }
    header {
      background: #1f2a44;
      color: #ffffff;
      padding: 18px 22px;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 18px;
      padding: 0;
      margin: 14px 22px;
    }
    nav a {
      color: #4c97ff;
      text-decoration: none;
    }
    main {
      padding: 0 22px 22px;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #999999;
      padding: 8px;
      text-align: left;
    }
    th {
      background: #eef4ff;
    }
    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }
    input {
      padding: 8px;
      border: 1px solid #999999;
      border-radius: 6px;
    }
    button {
      margin-top: 14px;
      padding: 10px 18px;
      background: #4c97ff;
      color: #ffffff;
      border: none;
      border-radius: 6px;
    }
    footer {
      background: #f2f2f2;
      padding: 14px 22px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Green Field Secondary School</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#timetable">Timetable</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  <main>
    <h2 id="about">About our school</h2>
    <p>Green Field Secondary School is in Lagos and has over 600 students.</p>

    <h2 id="timetable">JSS 2 timetable</h2>
    <table>
      <tr>
        <th>Day</th>
        <th>Morning</th>
        <th>Afternoon</th>
      </tr>
      <tr>
        <td>Monday</td>
        <td>Mathematics</td>
        <td>English</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>Basic Science</td>
        <td>Computer Studies</td>
      </tr>
    </table>

    <h2 id="contact">Contact us</h2>
    <form>
      <label for="name">Your name</label>
      <input id="name" type="text">
      <label for="message">Message</label>
      <input id="message" type="text">
      <button type="submit">Send</button>
    </form>
  </main>
  <footer>
    <p>Copyright 2026 Green Field Secondary School</p>
  </footer>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "No headings to organise the content, so the page is one long block. Use a heading for each section.",
        "Broken image or link paths. Check that each file name and folder is exact.",
        "An unstyled, messy layout. A small colour theme and a little spacing make a big difference.",
      ],
      handout: {
        sections: [
          {
            h: "What your page must include",
            list: [
              "A header with your school name",
              "An About section with a heading and a paragraph",
              "A timetable table with a header row",
              "A contact form with a label, an input and a button",
              "A footer with your school name and the year",
            ],
          },
          {
            h: "Presenting your page",
            body: [
              "When you present, show the page in the browser and scroll through it slowly.",
              "Say what each section does and point to one tag you used. Then name one thing you would like to add next.",
              "Keep it short and clear, and be ready to answer one question from the class.",
            ],
          },
          {
            h: "The finished page",
            codes: [
              {
                label: "my_school.html",
                caption: "A finished page uses every tag from the term.",
                body: "This is the target. Your page will have your own school name, subjects and colours.",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My School</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
    }
    header {
      background: #1f2a44;
      color: #ffffff;
      padding: 18px 22px;
    }
    main {
      padding: 0 22px 22px;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #999999;
      padding: 8px;
    }
    footer {
      background: #f2f2f2;
      padding: 14px 22px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Green Field Secondary School</h1>
  </header>
  <main>
    <h2 id="about">About our school</h2>
    <p>Green Field Secondary School is in Lagos and has over 600 students.</p>
    <h2 id="timetable">JSS 2 timetable</h2>
    <table>
      <tr>
        <th>Day</th>
        <th>Morning</th>
      </tr>
      <tr>
        <td>Monday</td>
        <td>Mathematics</td>
      </tr>
    </table>
    <h2 id="contact">Contact us</h2>
    <form>
      <label for="name">Your name</label>
      <input id="name" type="text">
      <button type="submit">Send</button>
    </form>
  </main>
  <footer>
    <p>Copyright 2026 Green Field Secondary School</p>
  </footer>
</body>
</html>`,
              },
            ],
          },
        ],
      },
      template: {
        filename: "my_school.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My School Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    header {
      background: #1f2a44;
      color: #ffffff;
      padding: 16px;
    }
    main {
      padding: 16px;
    }
    footer {
      background: #f2f2f2;
      padding: 12px 16px;
    }
  </style>
</head>
<body>
  <header>
    <h1>School name</h1>
  </header>
  <main>
    <h2 id="about">About</h2>
    <p>Write about your school here.</p>

    <h2 id="timetable">Timetable</h2>
    <p>Add your table here.</p>

    <h2 id="contact">Contact</h2>
    <p>Add your form here.</p>
  </main>
  <footer>
    <p>Copyright 2026</p>
  </footer>
</body>
</html>`,
        core: [
          "Add a heading and a short intro under About.",
          "Add a timetable table with a header row.",
          "Add a contact form with a labelled input and a button.",
          "Add a footer with your school name.",
        ],
        stretch: [
          "Add a colour theme used in the header, the table and the button.",
          "Add a nav that links to each section with #ids.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt:
                "Which tags did we use to move around the page with links?",
              answer:
                "The <a> tag with an href that points to a section id, such as #about.",
            },
            {
              prompt: "Why do we plan the sections before we build the page?",
              answer:
                "So the page has a clear order and each section has a purpose, which makes it easier to build and style.",
            },
            {
              prompt:
                "Which tag groups the main content, and how many should there be?",
              answer: "<main>, and there should be only one.",
            },
            {
              prompt: "Name two things you should check before presenting.",
              answer:
                "That the page runs with no broken images or links, and that the layout is styled and tidy.",
            },
          ],
        },
        {
          audience: "JSS 1 & JSS 2",
          title: "Project checklist",
          type: "checklist",
          items: [
            "The page runs in the browser with no broken images or links.",
            "At least four tags from the term are used.",
            "The page is styled with a small colour theme.",
            "The student can explain one section and name the tags it uses.",
          ],
        },
      ],
    },
    {
      n: 10,
      title: "Revision and showcase",
      emoji: "🏆",
      color: "sensing",
      goal: "Review the term and show your project.",
      concept:
        "Look back over Term 1, check your understanding, and present your project to the class.",
      objective: "Review Term 1 and present a project.",
      teachingPoints: [
        "Recall HTML structure, CSS styling and the box model.",
        "Explain what each part of your page does.",
        "Reflect on one thing you learned and one thing you would improve.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Recap", mins: 8 },
        { label: "Present", mins: 18 },
        { label: "Feedback", mins: 4 },
        { label: "Wrap", mins: 2 },
      ],
      liveDemo: [
        {
          title: "A small page that combines the whole term",
          filename: "recap.html",
          caption:
            "A heading, a list, a table and a form all on one page, styled with a small theme.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Term 1 Recap</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    h1 {
      color: #4c97ff;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #999999;
      padding: 8px;
    }
    th {
      background: #eef4ff;
    }
    label {
      display: block;
      margin-top: 10px;
      font-weight: bold;
    }
    input {
      padding: 8px;
      border: 1px solid #999999;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <h1>Term 1 Recap</h1>
  <ul>
    <li>HTML builds the page.</li>
    <li>CSS styles the page.</li>
  </ul>
  <table>
    <tr>
      <th>Tag</th>
      <th>What it does</th>
    </tr>
    <tr>
      <td>&lt;h1&gt;</td>
      <td>Main heading</td>
    </tr>
    <tr>
      <td>&lt;p&gt;</td>
      <td>Paragraph</td>
    </tr>
  </table>
  <form>
    <label for="name">Name</label>
    <input id="name" type="text">
  </form>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Not checking that the page runs before presenting. Open it in the browser and look for errors first.",
        "Being unable to explain a tag you used. Pick tags you understand and can talk about.",
        "Presenting without a live demo. Show the page working instead of just describing it.",
      ],
      handout: {
        sections: [
          {
            h: "Term 1 recap",
            list: [
              "HTML gives a page its structure; CSS gives it its style.",
              "Headings (h1 to h6) show order, and paragraphs group sentences.",
              "Links, images and lists come in pairs with their CSS styling.",
              "The box model is content, padding, border and margin.",
              "Semantic tags describe the regions of a page.",
              "Tables organise rows and columns; forms collect answers.",
              "Selectors (element, class, id) choose what to style.",
            ],
          },
          {
            h: "Presentation script",
            body: [
              "Start by saying your name and the name of your page.",
              "Show your page in the browser and scroll through it slowly.",
              "For each section, say what it does and name one tag you used. Then name one thing you learned this term.",
              "Finish with one thing you would add or improve next time, and thank the class.",
            ],
          },
        ],
      },
      template: {
        filename: "recap.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Term 1 Recap</title>
  <style>
    h1 {
      color: #1f2a44;
    }
    table {
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #999999;
      padding: 8px;
    }
    label {
      display: block;
      margin-top: 10px;
    }
    input {
      padding: 8px;
    }
  </style>
</head>
<body>
  <h1>Term 1 Recap
  <p>These are the skills I learned this term.</p>
  <ul>
    <li>HTML structure</li>
    <li>CSS styling</li>
    <li>The box model</li>
  </ul>
  <table>
    <tr>
      <th>Week</th>
      <th>Skill</th>
    </tr>
    <tr>
      <td>1</td>
      <td>My first page</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Box model</td>
    </tr>
  </table>
  <form>
    <label for="name">Name</label>
    <input id="name" type="text">
    <button type="submit">Send</button>
  </form>
</body>
</html>`,
        core: [
          "Fix the page so it runs correctly.",
          "Add the missing closing tag for the heading.",
          "Change the heading colour to green.",
        ],
        stretch: ["Add a new section that uses two tags from the term."],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "What is the difference between HTML and CSS?",
              answer:
                "HTML builds the structure and content of the page; CSS styles it with colours, fonts, spacing and layout.",
            },
            {
              prompt: "Where must a nested list go?",
              answer: "Inside the <li> of the item it belongs to.",
            },
            {
              prompt: "Name the box model layers from inside out.",
              answer: "Content, padding, border, margin.",
            },
            {
              prompt:
                "Which attribute holds a link address, and what happens if a file path is wrong?",
              answer:
                "href holds the link address. A wrong image path shows a broken image instead of the picture.",
            },
            {
              prompt:
                "What does a <label> do, and how is it linked to an input?",
              answer:
                "It describes a field. Its for attribute matches the input's id, which links the two together.",
            },
          ],
        },
      ],
    },
  ];

  var term2 = [
    {
      n: 1,
      title: "Flexbox navigation",
      emoji: "↔️",
      color: "motion",
      goal: "Lay out a navigation bar with Flexbox.",
      concept:
        "Flexbox arranges items in a row or column and spaces them neatly. It is the modern way to build a navigation bar.",
      objective: "Lay out a navigation bar with Flexbox.",
      teachingPoints: [
        "display: flex on a container turns its children into a row.",
        "justify-content spaces the row: space-between pushes items to the two ends and center groups them in the middle.",
        "gap adds space between flex items without extra margins on each child.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Flexbox basics", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A navigation bar with Flexbox",
          filename: "navbar.html",
          caption:
            "The header is a flex container. space-between pushes the logo and the links to the two ends.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Navigation</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: #1f2a44;
      color: #ffffff;
    }
    .logo {
      font-weight: bold;
    }
    .nav {
      display: flex;
      gap: 12px;
    }
    .nav a {
      color: #ffffff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <header>
    <span class="logo">Green Field</span>
    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Adding display: flex to the links instead of the container. Flex works on the parent that holds the items.",
        "Confusing justify-content with align-items. justify-content spaces the row left to right; align-items lines items up top to bottom.",
        "Forgetting display: flex, so the links stack as plain text down the page.",
      ],
      handout: {
        sections: [
          {
            h: "Turn a container into flex",
            body: [
              "Put display: flex on the parent. Its children then sit in a row.",
              "Use gap to add even space between the items.",
            ],
            codes: [
              {
                label: "style.css",
                code: ".nav {\n  display: flex;\n  gap: 12px;\n}",
              },
            ],
          },
          {
            h: "Spacing the row",
            body: [
              "justify-content controls the space along the row.",
              "space-between pushes the first item left and the last item right. center groups everything in the middle.",
            ],
            codes: [
              {
                label: "style.css",
                code: "header {\n  display: flex;\n  justify-content: space-between;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "navbar.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Navigation</title>
  <style>
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: #1f2a44;
      color: #ffffff;
    }
    .nav {
      display: flex;
      gap: 12px;
    }
    .nav a {
      color: #ffffff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <header>
    <span class="logo">My School</span>
    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  </header>
</body>
</html>`,
        core: [
          "Add a third nav link, such as Contact.",
          "Change justify-content to center.",
          "Add a gap so the links have space between them.",
        ],
        stretch: [
          "Add hover styling so a link changes colour under the mouse.",
          "Make the nav sticky at the top of the page.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Which property makes an element a flex container?",
              answer: "display: flex.",
            },
            {
              prompt:
                "Which justify-content value pushes flex items to the two ends?",
              answer: "space-between.",
            },
            {
              prompt:
                "Does display: flex lay items out in a row or a column by default?",
              answer: "A row, left to right.",
            },
          ],
        },
      ],
    },
    {
      n: 2,
      title: "Cards with Flexbox",
      emoji: "🃏",
      color: "looks",
      goal: "Build a row of cards that wrap on small screens.",
      concept:
        "Flex containers can wrap their items, add gaps, and line cards up in a neat row.",
      objective: "Build a wrapping row of cards.",
      teachingPoints: [
        "flex-wrap: wrap lets items move onto the next line when there is no room.",
        "flex: 1 makes every card share the width of the row equally.",
        "gap spaces the cards apart without margins.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Wrapping and equal cards", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A wrapping row of market cards",
          filename: "cards.html",
          caption:
            "Three cards share the row. When the screen gets narrow, wrap moves them onto the next line.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Cards</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 16px;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .card {
      flex: 1;
      min-width: 140px;
      padding: 12px;
      border: 1px solid #d0d7e2;
      border-radius: 10px;
      background: #f7f9fc;
    }
  </style>
</head>
<body>
  <h1>Market stalls</h1>
  <div class="row">
    <div class="card">
      <h2>Tomatoes</h2>
      <p>Fresh tomatoes from the farm.</p>
    </div>
    <div class="card">
      <h2>Yam</h2>
      <p>Big tubers for the whole family.</p>
    </div>
    <div class="card">
      <h2>Plantain</h2>
      <p>Sweet and ready to fry.</p>
    </div>
  </div>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Cards overflow off the screen because flex-wrap: wrap is missing.",
        "Forgetting wrap, so the cards squeeze together instead of moving to the next line.",
        "Using a fixed width that is too wide, so the cards cannot shrink on a phone.",
      ],
      handout: {
        sections: [
          {
            h: "Wrapping",
            body: [
              "By default a flex row stays on one line and squeezes its items.",
              "flex-wrap: wrap lets items drop onto the next line when space runs out.",
            ],
            codes: [
              {
                label: "style.css",
                code: ".row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}",
              },
            ],
          },
          {
            h: "Equal cards",
            body: [
              "flex: 1 tells every card to grow and share the width of the row equally.",
              "A small min-width stops a card from getting too thin before it wraps.",
            ],
            codes: [
              {
                label: "style.css",
                code: ".card {\n  flex: 1;\n  min-width: 140px;\n}",
              },
            ],
          },
          {
            h: "Cards",
            body: [
              "A card looks like a box. Add padding inside, a border, and a radius to round the corners.",
            ],
            codes: [
              {
                label: "style.css",
                code: ".card {\n  padding: 12px;\n  border: 1px solid #d0d7e2;\n  border-radius: 10px;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "cards.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Cards</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 16px;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .card {
      flex: 1;
      min-width: 140px;
      padding: 12px;
      border: 1px solid #d0d7e2;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>My cards</h1>
  <div class="row">
    <div class="card">
      <h2>Card one</h2>
      <p>Write about your first item.</p>
    </div>
    <div class="card">
      <h2>Card two</h2>
      <p>Write about your second item.</p>
    </div>
    <div class="card">
      <h2>Card three</h2>
      <p>Write about your third item.</p>
    </div>
  </div>
</body>
</html>`,
        core: [
          "Add a fourth card.",
          "Make sure flex-wrap: wrap is on the row.",
          "Add a gap between the cards.",
        ],
        stretch: [
          "Give one card a stronger border colour so it stands out.",
          "Centre the whole row on the page.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Which property allows flex items to wrap onto the next line?",
              answer: "flex-wrap: wrap.",
            },
            {
              prompt: "What does flex: 1 do to a card?",
              answer:
                "It lets the card grow and share the width of the row equally with the others.",
            },
            {
              prompt: "Which property adds space between flex items?",
              answer: "gap.",
            },
          ],
        },
      ],
    },
    {
      n: 3,
      title: "Positioning",
      emoji: "📍",
      color: "sensing",
      goal: "Make a sticky header and a badge on a card.",
      concept:
        "Positioning controls where an element sits: relative, absolute, fixed and sticky each behave differently.",
      objective: "Use positioning to make a sticky header and a badge.",
      teachingPoints: [
        "position: relative makes an element the anchor for any absolute child.",
        "position: absolute places a child inside its nearest positioned parent.",
        "position: sticky sticks while you scroll, and position: fixed stays on the screen.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "The position values", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A sticky header and a badge",
          filename: "position.html",
          caption:
            "The header sticks to the top as you scroll. The badge sits in the corner of the card.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Positioning</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
    }
    header {
      position: sticky;
      top: 0;
      padding: 12px 16px;
      background: #1f2a44;
      color: #ffffff;
    }
    main {
      padding: 16px;
    }
    .card {
      position: relative;
      max-width: 320px;
      padding: 16px;
      border: 1px solid #d0d7e2;
      border-radius: 10px;
    }
    .badge {
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 2px 8px;
      border-radius: 999px;
      background: #b91c1c;
      color: #ffffff;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <header>Green Field School News</header>
  <main>
    <div class="card">
      <span class="badge">New</span>
      <h2>Inter-house sports</h2>
      <p>Our sports day is on Friday. Come and cheer for your house.</p>
    </div>
    <p>Scroll down to see the header stay at the top of the page.</p>
    <p>The library has new books this week. Visit during break.</p>
    <p>The farm club meets on Monday after class. Bring a small hoe.</p>
    <p>Examinations begin next month. Start your revision early.</p>
  </main>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Using position: absolute with no positioned parent, so the badge anchors to the whole page instead of the card.",
        "Ignoring z-index, so a positioned element hides behind another one.",
        "Using position: sticky when the page is too short to scroll, so nothing appears to stick.",
      ],
      handout: {
        sections: [
          {
            h: "The position values",
            body: [
              "relative keeps an element in place and makes it the anchor for its children.",
              "absolute lifts a child out of the flow and places it against the nearest positioned parent.",
              "sticky sticks while scrolling. fixed stays on the screen and does not scroll at all.",
            ],
            codes: [
              {
                label: "style.css",
                code: "header {\n  position: sticky;\n  top: 0;\n}",
              },
            ],
          },
          {
            h: "A badge on a card",
            body: [
              "Make the card relative, then position the badge inside it.",
              "top and right measure from the edges of the positioned parent.",
            ],
            codes: [
              {
                label: "style.css",
                code: ".card {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "position.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Positioning</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
    }
    header {
      padding: 12px 16px;
      background: #1f2a44;
      color: #ffffff;
    }
    main {
      padding: 16px;
    }
    .card {
      max-width: 320px;
      padding: 16px;
      border: 1px solid #d0d7e2;
      border-radius: 10px;
    }
    .badge {
      padding: 2px 8px;
      border-radius: 999px;
      background: #b91c1c;
      color: #ffffff;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <header>My Page</header>
  <main>
    <div class="card">
      <span class="badge">New</span>
      <h2>Card title</h2>
      <p>Write a sentence about this card.</p>
    </div>
    <p>Add more text here so the page can scroll.</p>
    <p>Add another paragraph for scroll room.</p>
  </main>
</body>
</html>`,
        core: [
          "Make the header sticky at the top.",
          "Place the badge in the top right of the card.",
          "Move the badge to the bottom left instead.",
        ],
        stretch: [
          "Add a fixed note in a corner that stays on screen.",
          "Use z-index to bring the badge in front of the card.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Which position value anchors an absolutely positioned child?",
              answer: "position: relative on the parent.",
            },
            {
              prompt: "Which position value sticks while you scroll?",
              answer: "position: sticky.",
            },
            {
              prompt: "Which position value stays on the screen no matter where you scroll?",
              answer: "position: fixed.",
            },
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Photo gallery with Grid",
      emoji: "🖼️",
      color: "operators",
      goal: "Build a photo gallery with CSS Grid.",
      concept:
        "CSS Grid arranges items into rows and columns at the same time, perfect for galleries and page layouts.",
      objective: "Build a photo gallery with CSS Grid.",
      teachingPoints: [
        "display: grid with grid-template-columns makes a grid of cells.",
        "gap spaces the cells apart on both rows and columns.",
        "figure groups an image with its figcaption label.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Grid basics", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A three-column photo gallery",
          filename: "gallery.html",
          caption:
            "repeat(3, 1fr) makes three equal columns. Each figure holds a photo and a caption.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Gallery</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    figure {
      margin: 0;
    }
    .photo {
      aspect-ratio: 1;
      display: grid;
      place-items: center;
      font-size: 44px;
      background: #cfe3ff;
      border-radius: 10px;
    }
    figcaption {
      text-align: center;
      font-size: 14px;
      margin-top: 6px;
    }
  </style>
</head>
<body>
  <h1>School gallery</h1>
  <div class="grid">
    <figure>
      <div class="photo">⚽</div>
      <figcaption>Sports day</figcaption>
    </figure>
    <figure>
      <div class="photo">📚</div>
      <figcaption>The library</figcaption>
    </figure>
    <figure>
      <div class="photo">🎨</div>
      <figcaption>Art class</figcaption>
    </figure>
  </div>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Using Flexbox where Grid fits better. Grid controls rows and columns at the same time.",
        "Forgetting gap, so the cells are stuck together with no space.",
        "Writing every column size by hand instead of using repeat().",
      ],
      handout: {
        sections: [
          {
            h: "Grid basics",
            body: [
              "display: grid turns a container into a grid.",
              "grid-template-columns sets the columns. repeat(3, 1fr) means three equal columns.",
              "gap spaces the cells apart.",
            ],
            codes: [
              {
                label: "style.css",
                code: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}",
              },
            ],
          },
          {
            h: "figure and figcaption",
            body: [
              "A figure groups a photo with its caption.",
              "figcaption gives the photo a short label that the reader can see.",
            ],
            codes: [
              {
                label: "gallery.html",
                code: "<figure>\n  <img src=\"school.jpg\" alt=\"The school gate\">\n  <figcaption>The school gate</figcaption>\n</figure>",
              },
            ],
          },
        ],
      },
      template: {
        filename: "gallery.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Gallery</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 16px;
    }
    .gallery {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .photo {
      aspect-ratio: 1;
      display: grid;
      place-items: center;
      font-size: 40px;
      background: #cfe3ff;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>My gallery</h1>
  <div class="gallery">
    <figure>
      <div class="photo">1</div>
      <figcaption>Photo one</figcaption>
    </figure>
    <figure>
      <div class="photo">2</div>
      <figcaption>Photo two</figcaption>
    </figure>
  </div>
</body>
</html>`,
        core: [
          "Change the gallery to three columns.",
          "Add a caption to each figure.",
          "Add a fourth photo.",
        ],
        stretch: [
          "Make one photo span two columns.",
          "Centre the captions under the photos.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Which display value makes an element a grid?",
              answer: "display: grid.",
            },
            {
              prompt: "Which property sets the columns of a grid?",
              answer: "grid-template-columns.",
            },
            {
              prompt: "Which tag gives a figure its caption?",
              answer: "figcaption.",
            },
          ],
        },
      ],
    },
    {
      n: 5,
      title: "Media queries",
      emoji: "📱",
      color: "control",
      goal: "Make a gallery adapt to phone, tablet and desktop.",
      concept:
        "A media query applies CSS only when the screen matches a condition, so one page can look good everywhere.",
      objective: "Make a layout adapt to phone, tablet and desktop.",
      teachingPoints: [
        "The viewport meta tag tells the phone to use the real screen width.",
        "@media (max-width: 600px) applies its rules only on screens 600px or narrower.",
        "Writing the base rules first and the media query after them keeps the order clear.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Viewport and queries", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A grid that stacks on a phone",
          filename: "responsive.html",
          caption:
            "Three columns on a wide screen. Under 600px the grid becomes one column.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Responsive</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .box {
      padding: 20px;
      background: #e8f0fe;
      border-radius: 10px;
    }
    @media (max-width: 600px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <h1>Our classes</h1>
  <div class="grid">
    <div class="box">
      <h2>JSS 1</h2>
      <p>Ten subjects every week.</p>
    </div>
    <div class="box">
      <h2>JSS 2</h2>
      <p>Science and art projects.</p>
    </div>
    <div class="box">
      <h2>JSS 3</h2>
      <p>Preparing for examinations.</p>
    </div>
  </div>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Leaving out the viewport meta tag, so the phone zooms out and shows a tiny page.",
        "Writing a media query that never matches, such as max-width: 0.",
        "Putting the media query before the base rules, so the base rules override it.",
      ],
      handout: {
        sections: [
          {
            h: "Tell phones your width",
            body: [
              "Phones need the viewport tag to use the real width of the screen.",
              "Put it in the head, next to the charset line.",
            ],
            codes: [
              {
                label: "in the head",
                code: '<meta name="viewport" content="width=device-width, initial-scale=1">',
              },
            ],
          },
          {
            h: "Media queries",
            body: [
              "A media query applies rules only when the screen matches a condition.",
              "max-width means the rule applies when the screen is that wide or narrower.",
            ],
            codes: [
              {
                label: "style.css",
                code: "@media (max-width: 600px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "responsive.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Responsive Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .box {
      padding: 20px;
      background: #e8f0fe;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>My page</h1>
  <div class="grid">
    <div class="box">One</div>
    <div class="box">Two</div>
    <div class="box">Three</div>
  </div>
</body>
</html>`,
        core: [
          "Add the viewport meta tag.",
          "Stack the grid into one column under 600px.",
          "Test by resizing the browser window.",
        ],
        stretch: [
          "Add a tablet breakpoint at 900px.",
          "Change the gap on small screens.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Which tag stops a phone from zooming out?",
              answer:
                'The viewport meta tag: <meta name="viewport" content="width=device-width, initial-scale=1">.',
            },
            {
              prompt: "What does @media (max-width: 600px) mean?",
              answer:
                "The rules inside apply only when the screen is 600px wide or narrower.",
            },
            {
              prompt: "Why write the base rules before the media query?",
              answer:
                "So the media query comes later and can override the base rules on small screens.",
            },
          ],
        },
      ],
    },
    {
      n: 6,
      title: "Responsive images",
      emoji: "🖥️",
      color: "events",
      goal: "Convert a page to a mobile-first design.",
      concept:
        "Mobile-first means styling for the smallest screen first, then adding rules for larger screens.",
      objective: "Convert a page to a mobile-first design.",
      teachingPoints: [
        "Mobile-first styles the small screen first, then adds larger-screen rules with min-width.",
        "min-width: 700px applies its rules when the screen is 700px or wider.",
        "max-width: 100% keeps an image inside its box so it never overflows.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Mobile-first and images", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A mobile-first page",
          filename: "mobile_first.html",
          caption:
            "The base styles suit a phone. At 700px and wider, the cards become two columns.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mobile first</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 16px;
    }
    .card {
      margin-bottom: 16px;
      padding: 16px;
      background: #f7f9fc;
      border: 1px solid #d0d7e2;
      border-radius: 10px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    @media (min-width: 700px) {
      .cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
      .card {
        margin-bottom: 0;
      }
    }
  </style>
</head>
<body>
  <h1>Read our news</h1>
  <div class="cards">
    <article class="card">
      <img src="class.jpg" alt="Students in a classroom">
      <h2>Debate club</h2>
      <p>The debate club meets every Wednesday after class.</p>
    </article>
    <article class="card">
      <h2>Farm club</h2>
      <p>We planted beans behind the science block this term.</p>
    </article>
  </div>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Styling for the desktop first and then patching the phone, which makes the CSS harder to follow.",
        "Forgetting max-width: 100% on images, so a large photo overflows its box.",
        "Writing min-width rules that overlap and fight each other.",
      ],
      handout: {
        sections: [
          {
            h: "Mobile-first order",
            body: [
              "Style the small screen first. Those are your base rules.",
              "Then add larger-screen rules with min-width, from small to large.",
            ],
            codes: [
              {
                label: "style.css",
                code: "@media (min-width: 700px) {\n  .cards {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}",
              },
            ],
          },
          {
            h: "Keeping images in their box",
            body: [
              "An image can be wider than its container and overflow.",
              "max-width: 100% shrinks the image to fit. height: auto keeps its shape.",
            ],
            codes: [
              {
                label: "style.css",
                code: "img {\n  max-width: 100%;\n  height: auto;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "mobile_first.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My Mobile First Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 16px;
    }
    .card {
      margin-bottom: 16px;
      padding: 16px;
      border: 1px solid #d0d7e2;
      border-radius: 10px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <h1>My news page</h1>
  <div class="cards">
    <article class="card">
      <img src="news.jpg" alt="A picture for the first story">
      <h2>First story</h2>
      <p>Write a short sentence here.</p>
    </article>
    <article class="card">
      <img src="news2.jpg" alt="A picture for the second story">
      <h2>Second story</h2>
      <p>Write a short sentence here.</p>
    </article>
  </div>
</body>
</html>`,
        core: [
          "Set base styles that suit a phone.",
          "Add a min-width: 700px rule for larger screens.",
          "Cap the image width with max-width: 100%.",
        ],
        stretch: [
          "Add a two-column layout on large screens.",
          "Add a third story card.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "What does mobile-first mean?",
              answer:
                "Write the styles for the smallest screen first, then add rules for larger screens.",
            },
            {
              prompt: "Which media feature targets larger screens?",
              answer: "min-width, for example @media (min-width: 700px).",
            },
            {
              prompt: "Which rule keeps an image inside its box?",
              answer: "max-width: 100%.",
            },
          ],
        },
      ],
    },
    {
      n: 7,
      title: "Typography and web fonts",
      emoji: "✍️",
      color: "variables",
      goal: "Give a page a clear type system.",
      concept:
        "Font choice, size, weight, line height and hierarchy make text easy and pleasant to read.",
      objective: "Give a page a clear type system.",
      teachingPoints: [
        "font-family takes a stack: the first font that is available is used.",
        "font-size, font-weight and line-height control how text reads.",
        "A type hierarchy uses bigger headings and smaller body text.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Stacks, size and hierarchy", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A page with a clear type system",
          filename: "typography.html",
          caption:
            "A serif stack, comfortable line-height, and headings that are clearly bigger than the body.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Typography</title>
  <style>
    body {
      font-family: Georgia, "Times New Roman", serif;
      font-size: 16px;
      line-height: 1.6;
      color: #1f2a44;
      margin: 24px;
    }
    h1 {
      font-size: 36px;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    h2 {
      font-size: 22px;
      margin-top: 24px;
    }
    p {
      max-width: 60ch;
    }
  </style>
</head>
<body>
  <h1>Green Field Times</h1>
  <h2>Sports day is coming</h2>
  <p>Our sports day will hold on Friday. Every house will send its best runners to the field.</p>
  <h2>Library news</h2>
  <p>The library has new books for JSS 2. Bring your card to borrow one.</p>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Using too many different fonts, which makes the page look untidy.",
        "Setting the body text too small for the reader to enjoy.",
        "Making text big with font-size instead of using a real heading tag.",
      ],
      handout: {
        sections: [
          {
            h: "Font stacks",
            body: [
              "List a font you like first, then fallbacks in case it is missing.",
              "End with a general family, such as serif or sans-serif.",
            ],
            codes: [
              {
                label: "style.css",
                code: "body {\n  font-family: Georgia, serif;\n}",
              },
            ],
          },
          {
            h: "Readable text",
            body: [
              "line-height sets the space between lines of text. Around 1.5 to 1.6 reads well.",
              "Keep body text around 16px and make headings clearly larger.",
            ],
            codes: [
              {
                label: "style.css",
                code: "body {\n  font-size: 16px;\n  line-height: 1.6;\n}",
              },
            ],
          },
          {
            h: "Note: web fonts need the internet",
            body: [
              "A web font is loaded with an @import at the top of the CSS, but it needs the internet to download.",
              "A system font stack like Georgia, serif works offline, so our pages always look right.",
            ],
            codes: [
              {
                label: "style.css",
                code: "/* Needs the internet to load the font file. */\n@import url(\"fonts.css\");",
              },
            ],
          },
        ],
      },
      template: {
        filename: "typography.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Typography</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 14px;
      margin: 24px;
    }
    h1 {
      font-size: 16px;
    }
    h2 {
      font-size: 15px;
    }
  </style>
</head>
<body>
  <h1>My page title</h1>
  <h2>A section heading</h2>
  <p>This body text should be easy to read. It needs a sensible size and line height.</p>
</body>
</html>`,
        core: [
          "Set a font stack on the body.",
          "Add a comfortable line-height.",
          "Fix the hierarchy so the heading is clearly biggest.",
        ],
        stretch: [
          "Centre the h1 on the page.",
          "Add a pull-quote style for one large sentence.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Why include fallback fonts in a font stack?",
              answer:
                "In case the first font is not installed, the browser can use the next one.",
            },
            {
              prompt: "Which property sets the space between lines of text?",
              answer: "line-height.",
            },
            {
              prompt: "Why use heading tags instead of just a big font-size?",
              answer:
                "Heading tags show the meaning and order of the page, not only the size.",
            },
          ],
        },
      ],
    },
    {
      n: 8,
      title: "Styled, validated forms",
      emoji: "🔒",
      color: "looks",
      goal: "Build a friendly, validated contact form.",
      concept:
        "Input types and attributes such as required and pattern guide the user, and CSS states show focus, hover and errors.",
      objective: "Build a friendly, validated contact form and style its states.",
      teachingPoints: [
        "Input types such as email and tel tell the browser what to expect.",
        "required, placeholder and pattern guide the user before they submit.",
        ":focus, :hover and :invalid show the state of a field as the user types.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Guiding and styling", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A contact form with states",
          filename: "contact.html",
          caption:
            "Required fields, a phone pattern, and a blue focus ring. An invalid field turns red.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Contact</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 16px;
    }
    form {
      max-width: 360px;
    }
    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }
    input,
    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #c4ccd8;
      border-radius: 8px;
      box-sizing: border-box;
    }
    input:focus,
    textarea:focus {
      outline: 2px solid #4c97ff;
    }
    input:invalid {
      border-color: #b91c1c;
    }
    button {
      margin-top: 12px;
      padding: 8px 16px;
      background: #4c97ff;
      color: #ffffff;
      border: none;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>Contact the school</h1>
  <form>
    <label for="name">Your name</label>
    <input id="name" type="text" required placeholder="Ada">

    <label for="email">Email</label>
    <input id="email" type="email" required placeholder="ada@example.com">

    <label for="phone">Phone number</label>
    <input id="phone" type="tel" pattern="[0-9]{11}" placeholder="08012345678">

    <label for="message">Message</label>
    <textarea id="message" rows="4" required></textarea>

    <button type="submit">Send</button>
  </form>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Using a placeholder instead of a label, so the field has no lasting name.",
        "Leaving out a focus style, so the user cannot see which field is active.",
        "Confusing :invalid with a missing field. :invalid matches a value that does not fit the rules.",
      ],
      handout: {
        sections: [
          {
            h: "Guiding the user",
            body: [
              "A label names a field. Its for attribute matches the input id.",
              "required makes a field compulsory. placeholder shows a hint. pattern checks the shape of the value.",
            ],
            codes: [
              {
                label: "contact.html",
                code: '<input id="phone" type="tel" pattern="[0-9]{11}" required>',
              },
            ],
          },
          {
            h: "Styling states",
            body: [
              "A pseudo-class styles a state the user cannot see in the HTML.",
              ":focus is when a field is selected. :invalid is when the value breaks the rules.",
            ],
            codes: [
              {
                label: "style.css",
                code: "input:focus {\n  outline: 2px solid #4c97ff;\n}\ninput:invalid {\n  border-color: #b91c1c;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "contact.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Contact Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 16px;
    }
    form {
      max-width: 360px;
    }
    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }
    input,
    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #c4ccd8;
      border-radius: 8px;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <h1>Contact us</h1>
  <form>
    <label for="name">Your name</label>
    <input id="name" type="text">

    <label for="email">Email</label>
    <input id="email" type="email">

    <label for="message">Message</label>
    <textarea id="message" rows="4"></textarea>

    <button type="submit">Send</button>
  </form>
</body>
</html>`,
        core: [
          "Make the name and email fields required.",
          "Add a pattern to check a phone number.",
          "Add a focus style to the inputs.",
        ],
        stretch: [
          "Style the :invalid state with a red border.",
          "Style the submit button.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "What does the required attribute do?",
              answer: "It makes a field compulsory before the form can be submitted.",
            },
            {
              prompt: "Which pseudo-class styles an input the user has clicked into?",
              answer: "input:focus.",
            },
            {
              prompt: "What does the pattern attribute check?",
              answer:
                "It checks that the value matches a given shape, such as eleven digits for a phone number.",
            },
          ],
        },
      ],
    },
    {
      n: 9,
      title: "Project: responsive landing page",
      emoji: "🌟",
      color: "motion",
      goal: "Build and present a responsive landing page.",
      concept:
        "Design and build a landing page for a school club, local shop or event that works on every screen.",
      objective:
        "Design and build a responsive landing page for a school club, local shop or event.",
      teachingPoints: [
        "Plan the sections first: a hero, a features row, and a contact section.",
        "Build the layout with Grid and Flexbox.",
        "Make it responsive with a media query and test at a narrow width.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 4 },
        { label: "Build", mins: 20 },
        { label: "Present", mins: 5 },
        { label: "Wrap", mins: 3 },
      ],
      liveDemo: [
        {
          title: "A finished responsive landing page",
          filename: "landing.html",
          caption:
            "A hero, a features row and a contact section. On a phone the grid becomes one column.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Green Field Coding Club</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      color: #1f2a44;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: #1f2a44;
      color: #ffffff;
    }
    header a {
      color: #ffffff;
      text-decoration: none;
    }
    .hero {
      padding: 40px 16px;
      text-align: center;
      background: #e8f0fe;
    }
    .hero h1 {
      margin-top: 0;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: 24px 16px;
    }
    .feature {
      padding: 16px;
      border: 1px solid #d0d7e2;
      border-radius: 10px;
    }
    .contact {
      padding: 24px 16px;
      background: #f7f9fc;
    }
    @media (max-width: 600px) {
      .features {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <strong>Green Field Coding Club</strong>
    <a href="#join">Join</a>
  </header>
  <section class="hero">
    <h1>Learn to build the web</h1>
    <p>We meet every Thursday after school in the computer room.</p>
  </section>
  <section class="features">
    <div class="feature">
      <h2>Build pages</h2>
      <p>Write your first HTML and CSS this term.</p>
    </div>
    <div class="feature">
      <h2>Make layout</h2>
      <p>Use Flexbox and Grid to arrange a page.</p>
    </div>
    <div class="feature">
      <h2>Go responsive</h2>
      <p>One page that works on every screen.</p>
    </div>
  </section>
  <section class="contact" id="join">
    <h2>Join us</h2>
    <p>Bring a notebook. We will find a computer for you.</p>
  </section>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Not testing on a narrow screen, so the page breaks on a phone.",
        "Leaving a fixed width that pushes content off the side on mobile.",
        "Using headings out of order, so the page has no clear structure.",
      ],
      handout: {
        sections: [
          {
            h: "What to include",
            list: [
              "A hero with the club, shop or event name and one clear sentence.",
              "A row of three features built with Grid or Flexbox.",
              "A contact section with a way to join or send a message.",
              "A media query that stacks the layout on a phone.",
            ],
          },
          {
            h: "Presenting",
            list: [
              "Say who the page is for in one sentence.",
              "Show the page wide, then resize it to a phone width.",
              "Name one property you used, such as grid-template-columns or justify-content.",
              "Say one thing you would improve next.",
            ],
          },
        ],
      },
      template: {
        filename: "landing.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My Landing Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      color: #1f2a44;
    }
    .hero {
      padding: 40px 16px;
      text-align: center;
      background: #e8f0fe;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: 24px 16px;
    }
    .contact {
      padding: 24px 16px;
      background: #f7f9fc;
    }
  </style>
</head>
<body>
  <section class="hero">
    <h1>My project name</h1>
    <p>One sentence about the club, shop or event.</p>
  </section>
  <section class="features">
    <div class="feature">
      <h2>Feature one</h2>
      <p>Describe it here.</p>
    </div>
    <div class="feature">
      <h2>Feature two</h2>
      <p>Describe it here.</p>
    </div>
    <div class="feature">
      <h2>Feature three</h2>
      <p>Describe it here.</p>
    </div>
  </section>
  <section class="contact">
    <h2>Contact</h2>
    <p>Tell people how to join in.</p>
  </section>
</body>
</html>`,
        core: [
          "Add a hero with a clear title and one sentence.",
          "Add a features row.",
          "Add a contact section.",
          "Add a mobile media query that stacks the features.",
        ],
        stretch: [
          "Add a sticky header.",
          "Choose a themed colour scheme and use it throughout.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt:
                "Which display value is good for a navigation bar or a single row?",
              answer: "flex.",
            },
            {
              prompt:
                "Which display value is best for a two-dimensional grid of features?",
              answer: "grid.",
            },
            {
              prompt: "How do you make a grid become one column on a phone?",
              answer:
                "Add @media (max-width: 600px) { ... grid-template-columns: 1fr; }.",
            },
            {
              prompt: "Name two things to check before presenting your page.",
              answer:
                "That it runs with no broken images, and that the layout is responsive at a narrow width.",
            },
          ],
        },
        {
          audience: "JSS 1 & JSS 2",
          title: "Project checklist",
          type: "checklist",
          items: [
            "The page runs in the browser with no broken images.",
            "The layout is responsive: it looks good at 600px and on wider screens.",
            "The page uses Grid or Flexbox for its layout.",
            "The student can explain one section and name the property it uses.",
          ],
        },
      ],
    },
    {
      n: 10,
      title: "Revision and showcase",
      emoji: "🏆",
      color: "sensing",
      goal: "Review the term and show your project.",
      concept:
        "Look back over Term 2, check your understanding, and present your project to the class.",
      objective: "Review Term 2 and present a responsive project.",
      teachingPoints: [
        "Recall Flexbox, Grid, positioning and media queries.",
        "Present your project and show how it responds on a phone.",
        "Reflect on one thing you learned and one thing you would improve.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Recap", mins: 8 },
        { label: "Present", mins: 18 },
        { label: "Feedback", mins: 4 },
        { label: "Wrap", mins: 2 },
      ],
      liveDemo: [
        {
          title: "A page that uses the whole term",
          filename: "recap2.html",
          caption:
            "A flex navigation bar, a grid of boxes, and a media query that stacks them on a phone.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Term 2 recap</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
    }
    header {
      display: flex;
      justify-content: space-between;
      padding: 12px 16px;
      background: #1f2a44;
      color: #ffffff;
    }
    .nav {
      display: flex;
      gap: 12px;
    }
    .nav a {
      color: #ffffff;
      text-decoration: none;
    }
    main {
      padding: 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .box {
      padding: 16px;
      background: #e8f0fe;
      border-radius: 10px;
    }
    @media (max-width: 600px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <span>Recap</span>
    <nav class="nav">
      <a href="#one">One</a>
      <a href="#two">Two</a>
    </nav>
  </header>
  <main>
    <h1>What we learned</h1>
    <div class="grid">
      <div class="box">
        <h2>Flexbox</h2>
        <p>Rows and navigation.</p>
      </div>
      <div class="box">
        <h2>Grid</h2>
        <p>Rows and columns together.</p>
      </div>
      <div class="box">
        <h2>Media queries</h2>
        <p>One page, every screen.</p>
      </div>
    </div>
  </main>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Not resizing the page to test, so a broken mobile layout goes unnoticed.",
        "Being unable to explain a property used in the project.",
        "Presenting without showing the page running in the browser.",
      ],
      handout: {
        sections: [
          {
            h: "Term 2 recap",
            list: [
              "Flexbox: display: flex arranges a row. justify-content and gap space it.",
              "Grid: display: grid with grid-template-columns makes rows and columns.",
              "Positioning: relative, absolute, sticky and fixed place elements.",
              "Media queries: @media with max-width or min-width adapts the layout.",
              "Images: max-width: 100% keeps them inside their box.",
            ],
          },
          {
            h: "Presentation script",
            list: [
              "Introduce your page and who it is for.",
              "Show it wide, then resize to a phone width.",
              "Name one property you used and what it does.",
              "Say one thing you would improve next.",
            ],
          },
        ],
      },
      template: {
        filename: "recap2.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Recap</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
    }
    main {
      padding: 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .box {
      padding: 16px;
      background: #e8f0fe;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <main>
    <h1>My recap</h1>
    <div class="grid">
      <div class="box">One</div>
      <div class="box">Two</div>
      <div class="box">Three</div>
    </div>
  </main>
</body>
</html>`,
        core: [
          "Fix the layout so it is responsive.",
          "Add a media query.",
          "Change the grid to one column on small screens.",
        ],
        stretch: [
          "Add a positioned badge to one box.",
          "Add a flex navigation bar above the grid.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "What is the difference between Flexbox and Grid?",
              answer:
                "Flexbox arranges items mainly in one direction, a row or a column. Grid controls rows and columns together.",
            },
            {
              prompt: "What does justify-content do?",
              answer: "It spaces flex items along the row.",
            },
            {
              prompt: "What does position: sticky do?",
              answer: "It sticks an element in place while you scroll, such as a header.",
            },
            {
              prompt: "What does a media query do?",
              answer:
                "It applies CSS only when the screen matches a condition, such as a narrow width.",
            },
            {
              prompt: "Which rule keeps an image inside its box?",
              answer: "max-width: 100%.",
            },
          ],
        },
      ],
    },
  ];

  var term3 = [
    {
      n: 1,
      title: "Transitions and details",
      emoji: "✨",
      color: "looks",
      goal: "Build an expandable FAQ with smooth effects.",
      concept:
        "The button, details and summary tags build interactive pieces, and CSS transitions make changes feel smooth.",
      objective: "Build an expandable FAQ with smooth hover effects.",
      teachingPoints: [
        "The <button> tag makes a real clickable control that a keyboard and a screen reader can use.",
        "The <details> and <summary> tags build a native expander that opens and closes with no JavaScript.",
        "The transition property animates a change smoothly, for example a background colour on hover.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Buttons and details", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A school FAQ with an expander and a smooth button",
          filename: "faq.html",
          caption:
            "Each question opens with details and summary. The button changes colour smoothly on hover.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>School FAQ</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    h1 {
      font-size: 24px;
    }
    details {
      border: 1px solid #d0d7e2;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 10px;
    }
    summary {
      font-weight: bold;
      cursor: pointer;
    }
    .btn {
      padding: 10px 16px;
      border: 0;
      border-radius: 8px;
      background: #1f6feb;
      color: #ffffff;
      font-size: 16px;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #1250a8;
    }
  </style>
</head>
<body>
  <h1>School FAQ</h1>

  <details>
    <summary>When does school start?</summary>
    <p>School starts at 8 in the morning.</p>
  </details>

  <details>
    <summary>What should I bring?</summary>
    <p>Bring your books, a pencil and a water bottle.</p>
  </details>

  <button class="btn">Ask a question</button>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Removing the focus outline from a button. Something that can be clicked should also show where the keyboard is. Keep or replace the outline, do not delete it.",
        "Animating too many properties at once. One calm change, such as a background colour, looks better than a page that jumps around.",
        "Using a <div> for something you click. A <div> is not a real button, so use <button> for a control.",
      ],
      handout: {
        sections: [
          {
            h: "Native expanders",
            body: [
              "The <details> tag makes a box that opens and closes. The <summary> is the line you click.",
              "This works with no JavaScript. It also works with the keyboard.",
            ],
            codes: [
              {
                label: "faq.html",
                code: "<details>\n  <summary>When is the test?</summary>\n  <p>The test is on Friday morning.</p>\n</details>",
              },
            ],
          },
          {
            h: "Smooth changes",
            body: [
              "The transition property makes a change happen slowly instead of all at once.",
              "The rule below fades the button background on hover. Keep the change small so it feels calm.",
            ],
            codes: [
              {
                label: "styles.css",
                code: ".btn {\n  background: #1f6feb;\n  transition: background 0.2s;\n}\n\n.btn:hover {\n  background: #1250a8;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "faq.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Class FAQ</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    h1 {
      font-size: 24px;
    }
    details {
      border: 1px solid #d0d7e2;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 10px;
    }
    summary {
      font-weight: bold;
      cursor: pointer;
    }
    .btn {
      padding: 10px 16px;
      border: 0;
      border-radius: 8px;
      background: #1f6feb;
      color: #ffffff;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #1250a8;
    }
  </style>
</head>
<body>
  <h1>Class FAQ</h1>

  <details>
    <summary>When is the test?</summary>
    <p>The test is on Friday morning.</p>
  </details>

  <details>
    <summary>Where is the library?</summary>
    <p>The library is beside the science lab.</p>
  </details>

  <button class="btn">Ask a question</button>
</body>
</html>`,
        core: [
          "Add a third FAQ item with its own details and summary.",
          "Add a hover transition to the button.",
          "Change the transition speed and watch how the change feels.",
        ],
        stretch: [
          "Animate a card's box-shadow on hover.",
          "Style the summary so it looks like a heading.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Which tags build an expander?",
              answer: "The <details> tag with a <summary> inside it.",
            },
            {
              prompt: "What does the transition property do?",
              answer:
                "It animates a change smoothly, such as a colour fading on hover.",
            },
            {
              prompt: "Which is better for a click, a <button> or a <div>?",
              answer:
                "A <button>. It works with the keyboard and is announced by screen readers.",
            },
          ],
        },
      ],
    },
    {
      n: 2,
      title: "Media and animation",
      emoji: "🎞️",
      color: "events",
      goal: "Add an animated hero and a video.",
      concept:
        "Audio, video and embedded media bring a page to life. Keyframe animations can move elements on their own.",
      objective: "Add an animated hero and a video to a page.",
      teachingPoints: [
        "The <video> tag with the controls attribute embeds a video the reader can play and pause.",
        "The @keyframes rule and the animation property move an element on their own without JavaScript.",
        "Size media to fit its box with width and max-width so it never overflows.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Media and animation", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "An animated hero above a school video",
          filename: "media.html",
          caption:
            "The hero floats gently with a keyframe animation. The video has controls and fits its box.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Our School Band</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    .hero {
      text-align: center;
      padding: 24px;
      border-radius: 12px;
      background: #eaf1ff;
      animation: float 2s infinite;
    }
    @keyframes float {
      50% {
        transform: translateY(-10px);
      }
    }
    video {
      width: 100%;
      max-width: 360px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Our School Band</h1>
    <p>Watch our performance from the last assembly.</p>
  </div>

  <video src="clip.mp4" controls></video>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Video with no controls. Without the controls attribute the reader cannot play, pause or change the volume. Always add controls.",
        "An animation that never stops. A movement that repeats forever distracts people. Keep it small, or stop it on hover.",
        "Media overflowing its box. A large video or image can push the page sideways. Set width: 100% and max-width to keep it inside.",
      ],
      handout: {
        sections: [
          {
            h: "Embedding media",
            body: [
              "The <video> tag puts a video on the page. The src points to the video file.",
              "Always add controls so the reader can play, pause and change the volume.",
            ],
            codes: [
              { label: "media.html", code: '<video src="clip.mp4" controls></video>' },
            ],
          },
          {
            h: "Keyframe animations",
            body: [
              "A @keyframes rule describes the steps of an animation. The animation property runs it.",
              "This hero floats up and down. Use infinite only for a small, calm movement.",
            ],
            codes: [
              {
                label: "styles.css",
                code: "@keyframes float {\n  50% {\n    transform: translateY(-10px);\n  }\n}\n\n.hero {\n  animation: float 2s infinite;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "media.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Media Page</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    .hero {
      text-align: center;
      padding: 24px;
      border-radius: 12px;
      background: #eaf1ff;
      animation: float 2s infinite;
    }
    @keyframes float {
      50% {
        transform: translateY(-10px);
      }
    }
    video {
      width: 100%;
      max-width: 360px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>My Media Page</h1>
    <p>Add a short line about your video here.</p>
  </div>

  <video src="clip.mp4" controls></video>
</body>
</html>`,
        core: [
          "Add a video with the controls attribute.",
          "Add a keyframe animation to the hero.",
          "Size the media so it fits its box on a small screen.",
        ],
        stretch: [
          "Add a second animation, such as a fading caption.",
          "Pause the animation when the reader hovers over the hero.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Which attribute shows the video controls?",
              answer:
                'The controls attribute, as in <video src="clip.mp4" controls></video>.',
            },
            {
              prompt: "What builds a keyframe animation?",
              answer:
                "The @keyframes rule together with the animation property.",
            },
            {
              prompt: "Why size media to fit?",
              answer:
                "So a large video or image does not overflow its box on a small screen.",
            },
          ],
        },
      ],
    },
    {
      n: 3,
      title: "CSS variables and themes",
      emoji: "🎨",
      color: "variables",
      goal: "Make light and dark themes with variables.",
      concept:
        "CSS variables store values you reuse. Switch a few variables and the whole page changes theme.",
      objective: "Make light and dark themes with CSS variables.",
      teachingPoints: [
        "A CSS variable is a name that starts with two dashes, such as --ink, and holds a value.",
        "We use a variable by wrapping its name in var(), for example color: var(--ink).",
        "Variables set on :root are available on the whole page, so changing them changes the theme.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Variables and themes", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "One page with a light and a dark theme",
          filename: "theme.html",
          caption:
            "The :root variables set the light theme. The .dark class changes them to a dark theme.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Light and Dark Theme</title>
  <style>
    :root {
      --ink: #1f2a44;
      --paper: #ffffff;
      --accent: #1f6feb;
    }
    .dark {
      --ink: #f2f5fa;
      --paper: #121826;
      --accent: #6ea8ff;
    }
    body {
      font-family: system-ui, Arial, sans-serif;
      color: var(--ink);
      background: var(--paper);
      line-height: 1.5;
      padding: 16px;
    }
    h1 {
      color: var(--accent);
    }
  </style>
</head>
<body class="dark">
  <h1>My Study Page</h1>
  <p>This page uses variables for its colours.</p>
  <p>Change the class on the body to switch theme.</p>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "A typo in a variable name. --ink and var(--innk) do not match, so the style stops working. Check the spelling on both sides.",
        "Defining a variable but not using var(). Writing color: --ink does nothing. You must write color: var(--ink).",
        "Hard-coding colours instead of variables. If the colour is written in five places, you must change all five. Use a variable and change one place.",
      ],
      handout: {
        sections: [
          {
            h: "Variables",
            body: [
              "A CSS variable starts with two dashes. You define it once and reuse it.",
              "Use var() to put the value somewhere. Put shared variables on :root.",
            ],
            codes: [
              {
                label: "styles.css",
                code: ":root {\n  --ink: #1f2a44;\n}\n\np {\n  color: var(--ink);\n}",
              },
            ],
          },
          {
            h: "Themes",
            body: [
              "A theme is a different set of variable values. Add a class with new values and use it on the body.",
              "The rule below makes a dark theme. Switch the class to switch the look.",
            ],
            codes: [
              {
                label: "dark theme",
                code: ".dark {\n  --ink: #f2f5fa;\n  --paper: #121826;\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "theme.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Theme</title>
  <style>
    :root {
      --ink: #1f2a44;
      --paper: #ffffff;
    }
    body {
      font-family: system-ui, Arial, sans-serif;
      color: var(--ink);
      background: var(--paper);
      line-height: 1.5;
      padding: 16px;
    }
  </style>
</head>
<body>
  <h1>My Theme Page</h1>
  <p>This page is ready for a light and a dark theme.</p>
</body>
</html>`,
        core: [
          "Define two variables and use them in the page.",
          "Add a dark theme with a class on the body.",
          "Switch the class and check that the whole page changes.",
        ],
        stretch: [
          "Add a third variable for spacing.",
          "Theme a card with the same variables.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "How do you define a CSS variable?",
              answer:
                "Write a name that starts with two dashes, such as --ink, and give it a value.",
            },
            {
              prompt: "How do you use a CSS variable?",
              answer: "Wrap the name in var(), for example color: var(--ink).",
            },
            {
              prompt: "Where is :root useful?",
              answer:
                "It is the whole page, so variables set there are available everywhere.",
            },
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Accessibility",
      emoji: "♿",
      color: "sensing",
      goal: "Audit and fix a page for accessibility.",
      concept:
        "Good HTML and CSS help everyone: alt text, labels, heading order, contrast, visible focus and reduced motion.",
      objective: "Audit and fix a page for accessibility.",
      teachingPoints: [
        "An image needs alt text and an input needs a label, so everyone knows what they are.",
        "Headings go in order and landmarks such as header, nav and main group the page.",
        "Good contrast and a visible focus outline make a page easy to read and use with the keyboard.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Accessible HTML and CSS", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A form with alt text, labels and a focus outline",
          filename: "a11y_fix.html",
          caption:
            "The image has alt text, each input has a label, and the focus outline is easy to see.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Accessible Form</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }
    input {
      font-size: 16px;
      padding: 8px;
      border: 1px solid #6b7280;
      border-radius: 6px;
    }
    a:focus,
    input:focus,
    button:focus {
      outline: 3px solid #1f6feb;
      outline-offset: 2px;
    }
    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none;
        transition: none;
      }
    }
  </style>
</head>
<body>
  <h1>Join the Reading Club</h1>
  <p>Fill this short form to join.</p>

  <img src="books.jpg" alt="A stack of books on a wooden desk">

  <label for="name">Your name</label>
  <input id="name" type="text">

  <label for="myclass">Your class</label>
  <input id="myclass" type="text">

  <button>Send</button>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "A placeholder instead of a label. A placeholder disappears as soon as you type, so it is not a label. Add a real <label> for every input.",
        "Low contrast between text and background. Light grey text on white is hard to read. Use dark text on a light background, or the reverse.",
        "Removing the focus outline. Some people use only the keyboard, and the outline shows where they are. Never set outline: none without a replacement.",
      ],
      handout: {
        sections: [
          {
            h: "Accessible HTML",
            body: [
              "Accessible HTML gives every piece of content a clear name. Images need alt text and inputs need labels.",
              "Use headings in order and group the page with landmarks such as header, nav and main.",
            ],
            codes: [
              {
                label: "image alt",
                code: '<img src="books.jpg" alt="A stack of books on a desk">',
              },
              {
                label: "input label",
                code: '<label for="name">Your name</label>\n<input id="name" type="text">',
              },
            ],
          },
          {
            h: "Accessible CSS",
            body: [
              "Good contrast makes text easy to read. Dark text on a light background is a safe choice.",
              "Keep the focus outline visible. Some people leave out the mouse and use the keyboard.",
            ],
            codes: [
              {
                label: "styles.css",
                code: "body {\n  color: #1f2a44;\n  background: #ffffff;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation: none;\n  }\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "a11y_fix.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Make It Accessible</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }
    input {
      font-size: 16px;
      padding: 8px;
      border: 1px solid #6b7280;
      border-radius: 6px;
    }
    input:focus,
    button:focus {
      outline: 3px solid #1f6feb;
    }
  </style>
</head>
<body>
  <h1>School Shop</h1>
  <h3>Place your order</h3>

  <img src="shop.jpg">

  <input type="text" placeholder="Your name">

  <button>Order</button>
</body>
</html>`,
        core: [
          "Add alt text to the image.",
          "Add a label to the input.",
          "Fix the heading order so it does not skip a level.",
          "Keep the focus outline visible.",
        ],
        stretch: [
          "Raise the contrast between the text and the background.",
          "Add a reduced-motion media query.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Why should you label an input?",
              answer:
                "A label tells everyone, including screen reader users, what the input is for.",
            },
            {
              prompt: "Why keep focus outlines?",
              answer:
                "They show which element has the keyboard focus, so people who do not use a mouse can navigate.",
            },
            {
              prompt: "What should alt text describe?",
              answer: "What the image shows, in a short sentence.",
            },
          ],
        },
      ],
    },
    {
      n: 5,
      title: "Validation and DevTools",
      emoji: "🔧",
      color: "operators",
      goal: "Debug a broken page with the browser tools.",
      concept:
        "Clean, valid markup is easier to fix. Browser Developer Tools show the structure and styles of any page.",
      objective: "Debug a broken page using the browser's tools.",
      teachingPoints: [
        "Valid, indented markup is easier to read and easier to fix.",
        "DevTools shows the real HTML and the CSS that the browser applied.",
        "The Elements panel reveals tags the browser added or repaired when a tag was missing.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Validate and inspect", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A page with a missing closing tag",
          filename: "broken.html",
          caption:
            "The paragraph has no closing tag. In DevTools you can see where the browser had to guess.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Broken Page</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    .card {
      border: 1px solid #d0d7e2;
      border-radius: 8px;
      padding: 12px;
    }
  </style>
</head>
<body>
  <h1>My Project</h1>
  <div class="card">
    <p>This card has a missing closing tag.
  </div>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Guessing instead of inspecting. Do not change random things. Right-click the problem, click Inspect, and read what the browser built.",
        "Ignoring an unbalanced tag. Every opened tag needs a closing tag. One missing </p> or </div> can move everything else.",
        "Blaming CSS for an HTML problem. If a whole block looks wrong, check the HTML first. The browser may be repairing a broken tag.",
      ],
      handout: {
        sections: [
          {
            h: "Clean markup",
            body: [
              "Tag pairs must match. Every <p> needs its </p>, and every <div> needs its </div>.",
              "Indent each level so you can see the structure at a glance.",
            ],
            codes: [
              {
                label: "tidy.html",
                code: '<div class="card">\n  <h2>Title</h2>\n  <p>Some text.</p>\n</div>',
              },
            ],
          },
          {
            h: "Using DevTools",
            body: [
              "The browser can show you the real page it built. This is the best way to find a problem.",
            ],
            list: [
              "Right-click the part of the page you want to check, then click Inspect.",
              "The Elements panel shows the real HTML the browser built.",
              "The Styles panel shows which CSS rules are applied, and which are crossed out.",
              "If a tag is missing in your file but shows in the panel, the browser repaired it.",
            ],
          },
        ],
      },
      template: {
        filename: "broken.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Fix This Page</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    .title {
      color: #1f6feb;
    }
    .tittle {
      color: #b00020;
    }
    .card {
      border: 1px solid #d0d7e2;
      border-radius: 8px;
      padding: 12px;
    }
  </style>
</head>
<body>
  <h1 class="title">My Page</h1>
  <div class="card">
    <p>This paragraph has a missing closing tag.
  </div>
</body>
</html>`,
        core: [
          "Use DevTools to find the unclosed tag.",
          "Close the tag and check the card looks right again.",
          "Tidy the indentation so the structure is easy to read.",
        ],
        stretch: [
          "Find a style that does not apply and fix it so it works.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "What does the Elements panel show?",
              answer:
                "The real HTML the browser built, including any tags it added or fixed.",
            },
            {
              prompt: "Why tidy your indentation?",
              answer:
                "Neatly indented markup is easier to read, so a missing tag is easier to spot.",
            },
            {
              prompt:
                "A tag is not closing, so the layout looks wrong. What is the likely problem?",
              answer:
                "A missing closing tag, which the browser then has to guess and repair.",
            },
          ],
        },
      ],
    },
    {
      n: 6,
      title: "Publishing your page",
      emoji: "🚀",
      color: "control",
      goal: "Prepare your files to put a page online.",
      concept:
        "A tidy project folder and correct linking make a site ready to publish. Publishing puts your work on the web.",
      objective: "Prepare your files to put a page online.",
      teachingPoints: [
        "Keep every file in one tidy project folder, with images in their own folder.",
        "Use relative links, such as href=\"about.html\", so links keep working after you move the folder.",
        "Publishing copies your files to a web host, such as GitHub Pages, so other people can open them.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Project files", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A page with correct relative links",
          filename: "ready.html",
          caption:
            "The stylesheet, the image and the page link all use relative paths, so the page will work once published.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Ready to Publish</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    img {
      width: 100%;
      max-width: 320px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>Welcome</h1>
  <img src="images/school.jpg" alt="The front of our school">
  <p>Visit the <a href="about.html">About page</a>.</p>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "An absolute local path, such as C:\\Users\\Ada\\site\\styles.css. A path from your computer will not work on the web. Use a relative path instead.",
        "A missing file. The page points to an image that is not in the folder, so it shows a broken icon. Check that every file is really there.",
        "Capitalised filenames. Some servers treat School.JPG and school.jpg as different files. Use lowercase names to be safe.",
      ],
      handout: {
        sections: [
          {
            h: "Get your files ready",
            body: [
              "Keep every file in one project folder. Put images in an images folder.",
              "Use lowercase names with no spaces, so links do not break on the web.",
            ],
            list: [
              'Use relative links, such as href="about.html" and src="images/school.jpg".',
              "Check that every file a page points to is really there.",
              "Open the page and test every link before you publish.",
            ],
          },
          {
            h: "Publishing (teacher demo)",
            body: [
              "Publishing copies your files to a web host so other people can open them. It needs the internet.",
              "The teacher will show these steps. You can build your page offline and publish later.",
            ],
            list: [
              "Sign in to the hosting site (GitHub Pages).",
              "Create a project and upload your files.",
              "Turn on the publishing option in the settings.",
              "Open the link it gives you and test the page.",
            ],
          },
        ],
      },
      template: {
        filename: "ready.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Site</title>
  <link rel="stylesheet" href="C:\\Users\\Ada\\site\\styles.css">
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
  </style>
</head>
<body>
  <h1>My Site</h1>
  <img src="C:\\Users\\Ada\\site\\images\\School.JPG" alt="My school gate">
  <p>Visit the <a href="C:\\Users\\Ada\\site\\About.html">About page</a>.</p>
</body>
</html>`,
        core: [
          "Fix the broken relative links.",
          "Change the capitalised filenames to lowercase.",
          "Check that every file sits inside the project folder.",
        ],
        stretch: [
          "Write out the steps you would use to publish this page.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Why use relative links?",
              answer:
                "They point to files inside your project folder, so the links keep working when you move the folder or publish it.",
            },
            {
              prompt: "Why use lowercase filenames?",
              answer:
                "Some servers treat School.JPG and school.jpg as different files, so a capital letter can break a link.",
            },
            {
              prompt: "Does publishing your page need the internet?",
              answer:
                "Yes. Publishing uploads your files to a web host, which needs the internet. You can build the page offline and publish later.",
            },
          ],
        },
      ],
    },
    {
      n: 7,
      title: "Capstone: plan",
      emoji: "🗺️",
      color: "motion",
      goal: "Wireframe and plan your capstone site.",
      concept:
        "Choose a topic, sketch the layout, list the pages, and pick colours, fonts and components.",
      objective: "Wireframe and plan your capstone site.",
      teachingPoints: [
        "Choose a topic and an audience, so you know what the site is for and who will read it.",
        "Sketch the layout and list the pages before you write any code.",
        "Pick two colours, one font and the components you will reuse, such as a nav, cards and a footer.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Plan and sketch", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A wireframe drawn with labelled blocks",
          filename: "plan.html",
          caption:
            "Each dashed box is a part of the future page. The labels say what goes in each part.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Capstone Plan</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    .block {
      border: 2px dashed #94a3b8;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 10px;
      text-align: center;
      color: #64748b;
    }
  </style>
</head>
<body>
  <h1>My Capstone Plan</h1>
  <div class="block">Header: site name and navigation</div>
  <div class="block">Hero: one big picture and a welcome line</div>
  <div class="block">About: who I am and what the site is for</div>
  <div class="block">Gallery: three photos with captions</div>
  <div class="block">Footer: contact note</div>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Starting to code with no plan. You end up changing things again and again. Decide the topic and pages first.",
        "Too many pages. Two or three pages is enough to show your skills. Keep it small and finish it well.",
        "No colour or font decisions. If you do not choose your colours and font now, the pages will not match.",
      ],
      handout: {
        sections: [
          {
            h: "Plan your capstone",
            list: [
              "Topic and audience: what is the site about, and who is it for?",
              "Pages: write the name of each page you will make. Two or three is enough.",
              "Layout sketch: draw boxes on paper for the header, main part and footer.",
              "Colours: choose two colours, one dark and one light.",
              "Font: choose one font for the whole site.",
            ],
          },
          {
            h: "Wireframe with blocks",
            body: [
              "A wireframe is a rough layout drawn with boxes. You can build it with plain HTML blocks first.",
              "Label each block so you know what goes there before you style it.",
            ],
            codes: [
              {
                label: "plan.html",
                code: '<div class="block">Header: name and nav</div>\n<div class="block">Hero: big picture</div>\n<div class="block">Gallery: three photos</div>\n<div class="block">Footer: contact note</div>',
              },
            ],
          },
        ],
      },
      template: {
        filename: "plan.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Capstone Plan</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    .block {
      border: 2px dashed #94a3b8;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 10px;
      text-align: center;
      color: #64748b;
    }
  </style>
</head>
<body>
  <h1>My Capstone Plan</h1>
  <div class="block">Header: write your site name and nav</div>
  <div class="block">Hero: write your welcome line</div>
  <div class="block">Section 1</div>
  <div class="block">Section 2</div>
  <div class="block">Footer</div>
</body>
</html>`,
        core: [
          "Choose your topic and write it at the top.",
          "Sketch the layout using the blocks.",
          "List two or three pages you will make.",
          "Pick two colours and one font.",
        ],
        stretch: [
          "Add a component list, such as nav, cards and footer.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "Why plan before you code?",
              answer:
                "A plan decides the topic, pages and look first, so you do not waste time changing your mind while coding.",
            },
            {
              prompt: "How many pages is sensible for this capstone?",
              answer: "Two or three pages is enough to show your skills.",
            },
            {
              prompt: "Name two design decisions to make in your plan.",
              answer:
                "For example, two colours and one font. You could also list your pages and components.",
            },
          ],
        },
      ],
    },
    {
      n: 8,
      title: "Capstone: build",
      emoji: "🏗️",
      color: "looks",
      goal: "Build your capstone site.",
      concept:
        "Build the multi-page structure and style it responsively.",
      objective: "Build your capstone site's structure and responsive styling.",
      teachingPoints: [
        "Build each page and link them together with a nav.",
        "Reuse your theme variables so every page looks the same.",
        "Add a media query so the layout works on a small screen.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 4 },
        { label: "Build", mins: 20 },
        { label: "Present", mins: 5 },
        { label: "Wrap", mins: 3 },
      ],
      liveDemo: [
        {
          title: "A capstone page with a nav, sections and a responsive layout",
          filename: "capstone.html",
          caption:
            "The nav links the pages, the cards use flexbox, and the media query stacks them on a phone.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Capstone</title>
  <style>
    :root {
      --ink: #1f2a44;
      --paper: #ffffff;
      --accent: #1f6feb;
    }
    body {
      font-family: system-ui, Arial, sans-serif;
      color: var(--ink);
      background: var(--paper);
      line-height: 1.5;
      margin: 0;
    }
    header {
      padding: 16px;
      background: var(--accent);
    }
    nav a {
      color: #ffffff;
      margin-right: 12px;
    }
    main {
      padding: 16px;
    }
    .cards {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .card {
      flex: 1 1 200px;
      border: 1px solid #d0d7e2;
      border-radius: 8px;
      padding: 12px;
    }
    footer {
      padding: 16px;
      color: #64748b;
    }
    @media (max-width: 600px) {
      .cards {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
    </nav>
  </header>
  <main>
    <h1>Welcome to my capstone</h1>
    <p>This site is about the food of Nigeria.</p>
    <div class="cards">
      <div class="card">Jollof rice</div>
      <div class="card">Pounded yam</div>
      <div class="card">Suya</div>
    </div>
  </main>
  <footer>Made by Ada at Green Field Secondary School.</footer>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Broken internal links. A nav link points to a page name that does not match the file. Check each href against the real filename.",
        "Unstyled sections. A new section with no styles looks wrong beside the rest. Give it the same colours and spacing.",
        "Ignoring small screens. A wide row of cards overflows on a phone. Add a media query to stack them.",
      ],
      handout: {
        sections: [
          {
            h: "Build checklist",
            list: [
              "A nav with a working link to every page.",
              "A header with your site name.",
              "Two or three sections with headings and text.",
              "A footer with a short note.",
              "The same stylesheet and variables on every page.",
            ],
          },
          {
            h: "Make it responsive",
            body: [
              "A media query applies CSS only when the screen matches a condition.",
              "Stack wide rows into a column on a small screen so nothing overflows.",
            ],
            codes: [
              {
                label: "styles.css",
                code: "@media (max-width: 600px) {\n  .cards {\n    flex-direction: column;\n  }\n}",
              },
            ],
          },
        ],
      },
      template: {
        filename: "capstone.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Capstone</title>
  <style>
    :root {
      --ink: #1f2a44;
      --paper: #ffffff;
      --accent: #1f6feb;
    }
    body {
      font-family: system-ui, Arial, sans-serif;
      color: var(--ink);
      background: var(--paper);
      line-height: 1.5;
      margin: 0;
    }
    header {
      padding: 16px;
      background: var(--accent);
    }
    nav a {
      color: #ffffff;
      margin-right: 12px;
    }
    main {
      padding: 16px;
    }
    footer {
      padding: 16px;
      color: #64748b;
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
    </nav>
  </header>
  <main>
    <h1>My Capstone</h1>
    <p>Write your first section here.</p>
  </main>
  <footer>Made by me.</footer>
</body>
</html>`,
        core: [
          "Build the main page structure with a header, main part and footer.",
          "Link the nav to your pages.",
          "Add a responsive media query.",
        ],
        stretch: [
          "Add a second page and link it from the nav.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "How do you link one page to another?",
              answer:
                'Use an <a> tag with a relative href, such as <a href="about.html">.',
            },
            {
              prompt: "How do you keep the theme consistent across pages?",
              answer: "Reuse the same CSS variables and stylesheet on every page.",
            },
            {
              prompt: "How do you make the layout responsive?",
              answer:
                "Add a media query, for example @media (max-width: 600px), and change the layout inside it.",
            },
          ],
        },
      ],
    },
    {
      n: 9,
      title: "Capstone: test and publish",
      emoji: "✅",
      color: "sensing",
      goal: "Test and publish your capstone.",
      concept:
        "Validate, check accessibility, polish, then publish and test on a phone.",
      objective: "Test, polish and publish your capstone.",
      teachingPoints: [
        "Validate the HTML so every tag is correct and properly closed.",
        "Check accessibility: alt text, labels and a visible focus outline.",
        "Polish spacing and contrast, then publish and test the page on a phone.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Test and polish", mins: 8 },
        { label: "Activity", mins: 15 },
        { label: "Share", mins: 4 },
      ],
      liveDemo: [
        {
          title: "A page that passes the checks",
          filename: "checklist_run.html",
          caption:
            "The HTML is valid, every image has alt text, and the focus outline is easy to see.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Test and Publish</title>
  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      color: #1f2a44;
      background: #ffffff;
      line-height: 1.5;
      padding: 16px;
    }
    nav a {
      color: #1250a8;
      margin-right: 12px;
    }
    a:focus,
    button:focus {
      outline: 3px solid #1f6feb;
      outline-offset: 2px;
    }
    .card {
      border: 1px solid #d0d7e2;
      border-radius: 8px;
      padding: 12px;
    }
    img {
      width: 100%;
      max-width: 320px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
  </nav>
  <h1>My Capstone is Ready</h1>
  <img src="images/school.jpg" alt="The front of our school">
  <div class="card">
    <p>Every image has alt text. Every link works.</p>
  </div>
  <button>Contact me</button>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "Not testing on a narrow screen. A page that looks fine on a laptop can overflow on a phone. Test at 600px wide.",
        "Low contrast. Light text on a light background is hard to read. Check the colours one more time.",
        "Broken links after moving files. Moving a page or image without updating its link breaks it. Test every link again.",
      ],
      handout: {
        sections: [
          {
            h: "Test checklist",
            list: [
              "Validate the HTML and fix any errors.",
              "Every image has alt text.",
              "Every input has a label.",
              "The focus outline is visible on links and buttons.",
              "The page works at 600px wide, like a phone.",
            ],
          },
          {
            h: "Publish",
            body: [
              "When the page passes your checks, it is ready to publish. You can build and test offline, then publish when you have the internet.",
            ],
            list: [
              "Check every file is in the project folder with lowercase names.",
              "Upload the files to the host (GitHub Pages).",
              "Open the published link and test it again on a phone.",
            ],
          },
        ],
      },
      template: {
        filename: "capstone.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Capstone</title>
  <style>
    :root {
      --ink: #1f2a44;
      --paper: #ffffff;
      --accent: #1f6feb;
    }
    body {
      font-family: system-ui, Arial, sans-serif;
      color: var(--ink);
      background: var(--paper);
      line-height: 1.5;
      margin: 0;
    }
    header {
      padding: 16px;
      background: var(--accent);
    }
    nav a {
      color: #ffffff;
      margin-right: 12px;
    }
    main {
      padding: 16px;
    }
    footer {
      padding: 16px;
      color: #64748b;
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
    </nav>
  </header>
  <main>
    <h1>My Capstone</h1>
    <p>Finish the last details of your site here.</p>
  </main>
  <footer>Made by me.</footer>
</body>
</html>`,
        core: [
          "Fix any validation issues you find.",
          "Check the alt text and the labels.",
          "Test the page at 600px wide.",
        ],
        stretch: [
          "Improve one accessibility item.",
          "Add a favicon note in the head.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "What tool checks your HTML for mistakes?",
              answer: "An HTML validator.",
            },
            {
              prompt: "Name two accessibility checks for your capstone.",
              answer:
                "For example, alt text on every image and a label on every input.",
            },
            {
              prompt: "Why test at 600px wide?",
              answer: "It shows how the page looks on a phone.",
            },
            {
              prompt: "What can break links after you move your files?",
              answer:
                "Moving files out of the project folder, or changing a filename so it no longer matches the link.",
            },
          ],
        },
        {
          audience: "JSS 1 & JSS 2",
          title: "Capstone checklist",
          type: "checklist",
          items: [
            "The site runs in the browser with no broken links or images.",
            "The layout is responsive and works at 600px wide.",
            "Every image has alt text and every input has a label.",
            "The site is published, or the files are ready to publish.",
          ],
        },
      ],
    },
    {
      n: 10,
      title: "Showcase",
      emoji: "🏆",
      color: "events",
      goal: "Present your capstone to the class.",
      concept:
        "Show your finished site and reflect on what you learned across the three terms.",
      objective: "Present your capstone and reflect on the three terms.",
      teachingPoints: [
        "Present what your site does and how you built it.",
        "Reflect on your progress, from your first HTML page to this capstone.",
        "Celebrate the work: share one thing you are proud of.",
      ],
      timing: [
        { label: "Welcome", mins: 3 },
        { label: "Recap", mins: 8 },
        { label: "Present", mins: 18 },
        { label: "Feedback", mins: 4 },
        { label: "Wrap", mins: 2 },
      ],
      liveDemo: [
        {
          title: "A finished capstone page",
          filename: "showcase.html",
          caption:
            "A complete page that brings together HTML structure, CSS variables, a keyframe animation and accessibility.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Food of Nigeria</title>
  <style>
    :root {
      --ink: #1f2a44;
      --paper: #ffffff;
      --accent: #1f6feb;
    }
    body {
      font-family: system-ui, Arial, sans-serif;
      color: var(--ink);
      background: var(--paper);
      line-height: 1.5;
      margin: 0;
    }
    header {
      padding: 24px;
      text-align: center;
      background: var(--accent);
      color: #ffffff;
      animation: glow 3s infinite;
    }
    @keyframes glow {
      50% {
        background: #1250a8;
      }
    }
    main {
      padding: 16px;
    }
    img {
      width: 100%;
      max-width: 320px;
      border-radius: 8px;
    }
    footer {
      padding: 16px;
      text-align: center;
      color: #64748b;
    }
  </style>
</head>
<body>
  <header>
    <h1>Food of Nigeria</h1>
    <p>A capstone site by Ada</p>
  </header>
  <main>
    <h2>Jollof rice</h2>
    <img src="images/jollof.jpg" alt="A plate of jollof rice">
    <p>A dish I love to share with my family.</p>
  </main>
  <footer>Made with HTML and CSS.</footer>
</body>
</html>`,
        },
      ],
      commonMistakes: [
        "No demo. If the site is not open, the class cannot see your work. Have the page running before you talk.",
        "Unable to explain a choice. Be ready to say why you picked a colour, a font or a layout.",
        "Running over time. Practise so you keep to your turn and leave time for questions.",
      ],
      handout: {
        sections: [
          {
            h: "Presentation script",
            list: [
              "Say what your site is about and who it is for.",
              "Show one page and point out the header, sections and footer.",
              "Explain one choice, such as why you picked a colour or a font.",
              "Name one tag or CSS rule and say what it does.",
            ],
          },
          {
            h: "Reflection prompts",
            list: [
              "What did you find easy this term?",
              "What was hard, and how did you solve it?",
              "Compare your first page in Term 1 with this capstone.",
              "What will you build next?",
            ],
          },
        ],
      },
      template: {
        filename: "showcase.html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Showcase</title>
  <style>
    :root {
      --ink: #1f2a44;
      --paper: #ffffff;
      --accent: #1f6feb;
    }
    body {
      font-family: system-ui, Arial, sans-serif;
      color: var(--ink);
      background: var(--paper);
      line-height: 1.5;
      margin: 0;
    }
    header {
      padding: 24px;
      text-align: center;
      background: var(--accent);
      color: #ffffff;
    }
    main {
      padding: 16px;
    }
    footer {
      padding: 16px;
      text-align: center;
      color: #64748b;
    }
  </style>
</head>
<body>
  <header>
    <h1>My Capstone</h1>
    <p>Write your site name here</p>
  </header>
  <main>
    <h2>One highlight</h2>
    <img src="images/photo.jpg" alt="Describe your photo here">
    <p>Write one sentence about this part of your site.</p>
  </main>
  <footer>Made with HTML and CSS.</footer>
</body>
</html>`,
        core: [
          "Fix the final issue in your site.",
          "Be ready to explain one section and the tags it uses.",
        ],
        stretch: [
          "Add one polish you are proud of, such as a transition or an animation.",
        ],
      },
      assessment: [
        {
          audience: "JSS 1 & JSS 2",
          title: "Mini-check",
          type: "quiz",
          questions: [
            {
              prompt: "What is the difference between a transition and an animation?",
              answer:
                "A transition animates a change after an event, such as hover. An animation runs on its own and can repeat.",
            },
            {
              prompt: "Why use CSS variables?",
              answer:
                "They store a value you reuse, so one change updates the whole page.",
            },
            {
              prompt: "Name two accessibility basics.",
              answer:
                "For example, alt text on images and visible focus outlines. Labels on inputs also count.",
            },
            {
              prompt: "What does an HTML validator check?",
              answer: "That your tags are correct and properly closed.",
            },
            {
              prompt: "Why prepare your files before publishing?",
              answer:
                "A tidy folder with relative links means the page works once it is online.",
            },
          ],
        },
      ],
    },
  ];

  window.INTRO_CURRICULUM = {
    slug: "intro-webdev",
    title: "HTML & CSS: Build and Style the Web",
    subject: "Web Development",
    length: "3 terms",
    audience: "JSS 1 & JSS 2",
    focus:
      "HTML and CSS taught together: build it, style it, see it, change it. No JavaScript needed.",
    philosophy:
      "Read it, build it, style it, change it. Every week ships a runnable page students can edit and see working.",
    terms: [
      { n: 1, title: "Build and Style a Page", theme: "motion", weeks: term1 },
      {
        n: 2,
        title: "Layout and Responsive Design",
        theme: "sensing",
        weeks: term2,
      },
      {
        n: 3,
        title: "Polish, Accessibility, Publishing and Capstone",
        theme: "control",
        weeks: term3,
      },
    ],
  };
})();
