/* ============================================================
   data.js — the 10-Week Web Development (JavaScript) curriculum.
   Full classroom package: instructor guides, student handouts,
   runnable code templates and assessments.

   Week shape:
     { n, title, emoji, color, tracks,
       concept, objective, teachingPoints[], timing[],
       liveDemo[{ title, filename, code, caption }],
       commonMistakes[],
       handout: { sections:[ { h, body[], list[], codes[], badge } ] },
       template: { filename, code, tasks[] },
       assessment: [ { track, audience, title, type, ... } ] }

   Weeks 9 and 10 use `variants: { jhs, shs }` instead of the
   single-track fields, because their projects differ by year group.
   ============================================================ */
(function () {
  "use strict";

  var CHECKLIST_TRACK_A = "Peer pair-check";

  var weeks = [
    /* ================================================================ 1 */
    {
      n: 1, title: "Meet JavaScript", emoji: "⚡", color: "motion", tracks: "both",
      concept: "JavaScript is the \"muscles\" that make web pages interactive — HTML builds the page, CSS styles it, and JavaScript makes things happen.",
      objective: "Students understand what JavaScript is, where it lives, and how it connects to their HTML and CSS knowledge.",
      teachingPoints: [
        "JavaScript is the \"muscles\" that make web pages interactive.",
        "HTML = structure, CSS = styling, JavaScript = behaviour and interactivity.",
        "JavaScript runs in the browser and can change the page after it has loaded."
      ],
      timing: [
        { label: "Welcome & recap", mins: 2 },
        { label: "Live demo: plain HTML → HTML + JS", mins: 3 },
        { label: "The three ways to add JavaScript", mins: 5 },
        { label: "Activity time", mins: 12 },
        { label: "Assessment", mins: 3 }
      ],
      liveDemo: [
        {
          title: "From plain HTML to HTML + JavaScript",
          filename: "hello.html",
          caption: "Open Developer Tools (F12 or Ctrl+Shift+I), click the Console tab, and you'll see the message. Change the message and reload — JavaScript runs every time the page loads.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Hello World</h1>
  <script>
    console.log("JavaScript is running!");
  </script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Students confuse console.log() with the <script> tag. Show the tag again slowly, and point out that the script tag is the container while console.log is one instruction inside it.",
        "Some students won't know how to open the browser console. Walk the whole class through it: F12 or Ctrl+Shift+I on Windows and Linux, Cmd+Option+I on Mac, then the Console tab."
      ],
      handout: {
        sections: [
          {
            h: "What is JavaScript?",
            body: [
              "JavaScript (JS) is a programming language that runs in your browser. While HTML builds the page and CSS styles it, JavaScript makes things happen on the page.",
              "The analogy:"
            ],
            list: [
              "HTML = the skeleton of the website",
              "CSS = the clothing that styles it",
              "JavaScript = the muscles that move things around and make them react"
            ]
          },
          {
            h: "Three ways to add JavaScript to a page",
            codes: [
              {
                label: "1. Inline (inside an HTML tag attribute)",
                code:
`<button onclick="console.log('Clicked!')">Click me</button>`
              },
              {
                label: "2. Internal (inside a <script> tag in the HTML)",
                code:
`<html>
<body>
  <h1>My Page</h1>
  <script>
    console.log("Hello from inside the page!");
  </script>
</body>
</html>`
              },
              {
                label: "3. External (a separate .js file linked from the HTML)",
                code:
`<html>
<body>
  <script src="script.js"></script>
</body>
</html>`
              },
              {
                label: "script.js (the external file)",
                code:
`console.log("Hello from an external file!");`
              }
            ]
          },
          {
            h: "What is console.log()?",
            body: [
              "console.log() prints a message that you can see in the browser's developer console. This is super useful for checking whether your code is working!",
              "How to open the console:"
            ],
            list: [
              "Press F12 or Ctrl+Shift+I (Windows / Linux)",
              "Or Cmd+Option+I (Mac)",
              "Then look for the \"Console\" tab"
            ]
          }
        ]
      },
      template: {
        filename: "week1_starter.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 1: My First JavaScript</title>
</head>
<body>
  <h1>Welcome to JavaScript!</h1>
  <p>Check the console to see the message below.</p>

  <script>
    // Your JavaScript code goes here
    console.log("Hello! My name is [YOUR NAME HERE]");
    console.log("I am [YOUR AGE] years old");
  </script>
</body>
</html>`,
        tasks: [
          "Save this file as week1_firstname.html",
          "Replace [YOUR NAME HERE] with your actual name",
          "Replace [YOUR AGE] with your actual age",
          "Open the file in a browser",
          "Open the console (F12) and verify you see both messages",
          "Try adding one more console.log() line with your favourite subject"
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can the code author explain what their code does, in their own words?",
            "Can you point to the line that uses console.log()?"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            {
              prompt: "Question 1: What are the three ways to add JavaScript to a web page? (Name them.)",
              answer: "1. Inline — inside an HTML tag attribute such as onclick.\n2. Internal — inside a <script> tag in the HTML file.\n3. External — in a separate .js file, linked with <script src=\"script.js\"></script>."
            },
            {
              prompt: "Question 2: What does console.log() do? Why is it useful?",
              answer: "It prints a message to the browser's developer console. It is useful for checking that your code is running and for seeing the value of a variable while you build."
            },
            {
              prompt: "Question 3: In your own words, explain how HTML, CSS and JavaScript work together. Use the skeleton / clothing / muscles analogy if it helps.",
              answer: "HTML is the skeleton that gives the page its structure. CSS is the clothing that makes it look good. JavaScript is the muscles that make things move and react."
            },
            {
              prompt: "Question 4 (Code trace): What would you see in the console when this page loads?",
              code:
`<script>
  console.log("First message");
  console.log("Second message");
</script>`,
              answer: "First message\nSecond message"
            }
          ]
        }
      ]
    },

    /* ================================================================ 2 */
    {
      n: 2, title: "Variables & Data Types", emoji: "📦", color: "looks", tracks: "both",
      concept: "A variable is a named box you store information in. This week covers let, const and the three basic data types.",
      objective: "Students understand variables as containers for data, and learn the three basic data types: string, number and boolean.",
      teachingPoints: [
        "A variable is a named box you can store information in.",
        "let and const are how you create variables.",
        "The three main data types are strings (text), numbers, and booleans (true / false).",
        "You can change the value of a let variable, but not a const variable."
      ],
      timing: [
        { label: "Recap Week 1", mins: 2 },
        { label: "Explain variables & data types", mins: 5 },
        { label: "Live-code examples", mins: 3 },
        { label: "Activity time", mins: 12 },
        { label: "Assessment", mins: 3 }
      ],
      liveDemo: [
        {
          title: "Creating and changing variables",
          filename: "variables.js",
          caption: "Run it, then change \"Ada\" to your own name and run it again. The last lines intentionally throw an error — that's the point.",
          code:
`// Creating variables
let name = "Ada";
let age = 14;
let isStudent = true;

console.log(name);       // Ada
console.log(age);        // 14
console.log(isStudent);  // true

// Changing a let variable
name = "Charlie";
console.log(name);       // Charlie

// Trying to change a const variable (this will error!)
const school = "Lincoln High";
school = "Washington High";  // ERROR! Can't reassign a const`
        }
      ],
      commonMistakes: [
        "Students forget the semicolon. Let them know it's usually optional, but it's a good habit.",
        "Confusing what let and const mean. Emphasise: let = changeable, const = locked.",
        "Writing a number in quotes (\"14\") and then wondering why the maths comes out strange. Quotes make it a string."
      ],
      handout: {
        sections: [
          {
            h: "What is a variable?",
            body: [
              "A variable is a named container that holds a value. Think of it like a labelled box: you put something in, give it a name, and you can use that name to get the value back later."
            ],
            codes: [
              { code:
`let favoriteColor = "blue";
console.log(favoriteColor);  // Prints: blue` }
            ]
          },
          {
            h: "let — use it when the value might change",
            codes: [
              { code:
`let score = 0;
score = 10;   // OK! We can change it` }
            ]
          },
          {
            h: "const — use it when the value should stay the same",
            codes: [
              { code:
`const playerName = "Hero";
playerName = "Villain";   // ERROR! Can't change a const` }
            ]
          },
          {
            h: "Three data types",
            codes: [
              { label: "1. String (text, in quotes)", code:
`let city = "Lagos";
let greeting = "Hello, world!";` },
              { label: "2. Number (integers or decimals, no quotes)", code:
`let age = 14;
let price = 19.99;
let score = -5;   // Negative is OK too!` },
              { label: "3. Boolean (true or false only)", code:
`let isRaining = true;
let isSunny = false;` }
            ]
          },
          {
            h: "Putting it together",
            codes: [
              { code:
`let name = "Maya";             // String
let favoriteNumber = 7;         // Number
let likesIceCream = true;       // Boolean

console.log(name);              // Maya
console.log(favoriteNumber);    // 7
console.log(likesIceCream);     // true` }
            ]
          }
        ]
      },
      template: {
        filename: "week2_starter.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 2: Variables & Data Types</title>
</head>
<body>
  <h1>My Profile</h1>

  <script>
    // TODO: Create three variables about yourself
    // 1. A string variable for your name
    // 2. A number variable for your age
    // 3. A boolean variable for whether you like coding
    let myName = "[YOUR NAME]";
    let myAge = [YOUR AGE];
    let likeCoding = true;

    // Print them out
    console.log("Name: " + myName);
    console.log("Age: " + myAge);
    console.log("Likes Coding: " + likeCoding);

    // CHALLENGE: Create one more variable of each type
    // and print them to the console
  </script>
</body>
</html>`,
        tasks: [
          "Replace the placeholders with your own data",
          "Create 3 new variables (one string, one number, one boolean)",
          "Print all 6 variables to the console",
          "Save and verify the console output"
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can the code author explain what each variable stores?",
            "Can you identify which variables are strings, numbers and booleans?"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            {
              prompt: "Question 1: What is the difference between let and const? When would you use each?",
              answer: "let creates a variable whose value can be changed later. const creates a variable whose value cannot be reassigned. Use let when the value will change (like a score); use const when it should stay the same (like a fixed name)."
            },
            {
              prompt: "Question 2: Label each of these as a String, Number or Boolean.",
              code:
`let score = 100;
let city = "Tokyo";
let isWinner = false;`,
              answer: "let score = 100; → Number\nlet city = \"Tokyo\"; → String\nlet isWinner = false; → Boolean"
            },
            {
              prompt: "Question 3 (Code trace): What will print to the console?",
              code:
`let fruit = "apple";
let quantity = 5;
console.log(fruit);
console.log(quantity);`,
              answer: "apple\n5"
            }
          ]
        }
      ]
    },

    /* ================================================================ 3 */
    {
      n: 3, title: "Operators", emoji: "➗", color: "operators", tracks: "both",
      concept: "Arithmetic operators do maths; comparison operators compare two values and return true or false.",
      objective: "Students learn arithmetic operators (+, −, ×, ÷) and comparison operators (>, <, ===).",
      teachingPoints: [
        "Arithmetic operators do maths.",
        "Comparison operators compare two values and return true or false.",
        "=== checks if two things are equal — use three equals, not two."
      ],
      timing: [
        { label: "Recap Week 2", mins: 2 },
        { label: "Explain operators", mins: 5 },
        { label: "Live-code examples", mins: 3 },
        { label: "Activity time", mins: 12 },
        { label: "Assessment", mins: 3 }
      ],
      liveDemo: [
        {
          title: "Arithmetic and comparison",
          filename: "operators.js",
          caption: "Point out that division gives a decimal, and that every comparison prints true or false.",
          code:
`// Arithmetic
let a = 10;
let b = 3;
console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...

// Comparison
console.log(10 > 3);    // true
console.log(10 < 3);    // false
console.log(10 === 10); // true
console.log(10 === 5);  // false`
        }
      ],
      commonMistakes: [
        "Using a single equals sign (=) to compare instead of ===. One equals assigns a value; three equals compares two values.",
        "Being surprised that 10 / 3 gives a long decimal. JavaScript does not round for you.",
        "Adding a string and a number, such as \"5\" + 1, and getting \"51\" instead of 6. Quotes make it text."
      ],
      handout: {
        sections: [
          {
            h: "Arithmetic operators",
            body: ["Use these to do maths:"],
            list: [
              "+ Add — 5 + 3 = 8",
              "− Subtract — 5 - 3 = 2",
              "× Multiply — 5 * 3 = 15",
              "÷ Divide — 6 / 3 = 2"
            ],
            codes: [
              { code:
`let score = 100;
let bonus = 10;
let newScore = score + bonus;
console.log(newScore);   // 110` }
            ]
          },
          {
            h: "Comparison operators",
            body: ["Use these to compare values. They always return true or false:"],
            list: [
              "> Greater than — 10 > 5 = true",
              "< Less than — 10 < 5 = false",
              ">= Greater than or equal — 5 >= 5 = true",
              "<= Less than or equal — 5 <= 5 = true",
              "=== Exactly equal — 5 === 5 = true",
              "!== Not equal — 5 !== 3 = true"
            ],
            codes: [
              { code:
`let age = 15;
console.log(age > 13);    // true
console.log(age === 15);  // true
console.log(age <= 14);   // false` }
            ]
          }
        ]
      },
      template: {
        filename: "week3_starter.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 3: Operators</title>
</head>
<body>
  <h1>Grade Calculator</h1>

  <script>
    // Two test scores
    let test1 = 85;
    let test2 = 92;

    // Calculate average
    let average = (test1 + test2) / 2;
    console.log("Average: " + average);

    // Check if passing (>= 70)
    let isPassing = average >= 70;
    console.log("Passing: " + isPassing);

    // CHALLENGE: Add a third test score
    // and recalculate the average with all three
  </script>
</body>
</html>`,
        tasks: [
          "Run the template and read the console output",
          "Change the test scores and predict the new average before you run it",
          "Add a third test score and recalculate the average using all three",
          "Add a check for whether the average is a Grade A (90 or higher)"
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can the author explain what each operator does?",
            "Can you point to one arithmetic operator and one comparison operator in the code?"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            {
              prompt: "Question 1: What is the result of each?",
              body: "10 + 5 = ____ · 10 - 5 = ____ · 10 * 5 = ____ · 10 / 5 = ____",
              answer: "10 + 5 = 15 · 10 - 5 = 5 · 10 * 5 = 50 · 10 / 5 = 2"
            },
            {
              prompt: "Question 2: True or false?",
              body: "10 > 5 → ____ · 10 === 10 → ____ · 10 < 5 → ____",
              answer: "10 > 5 → true · 10 === 10 → true · 10 < 5 → false"
            },
            {
              prompt: "Question 3 (Code trace): What will print?",
              code:
`let x = 20;
let y = 8;
console.log(x + y);
console.log(x > y);`,
              answer: "28\ntrue"
            }
          ]
        }
      ]
    },

    /* ================================================================ 4 */
    {
      n: 4, title: "Conditionals (if / else)", emoji: "🔀", color: "events", tracks: "both",
      concept: "An if statement lets your code make decisions: run one block when a condition is true, another when it is false.",
      objective: "Students learn to write code that makes decisions using if and else.",
      teachingPoints: [
        "if runs code only if a condition is true.",
        "else runs code if the condition is false.",
        "The condition goes in parentheses."
      ],
      timing: [
        { label: "Recap Week 3", mins: 2 },
        { label: "Explain if / else", mins: 5 },
        { label: "Live-code examples", mins: 3 },
        { label: "Activity time", mins: 12 },
        { label: "Assessment", mins: 3 }
      ],
      liveDemo: [
        {
          title: "Voting age checker",
          filename: "conditionals.js",
          caption: "Run it with age = 16, then change age to 20 and run it again. Only the true branch runs each time.",
          code:
`let age = 16;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You're not old enough to vote yet.");
}
// Output: You're not old enough to vote yet.

// Change age to 20
age = 20;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You're not old enough to vote yet.");
}
// Output: You can vote!`
        }
      ],
      commonMistakes: [
        "Using a single equals sign in the condition, such as if (age = 18). That assigns instead of compares — it should be === or >=.",
        "Forgetting the parentheses around the condition, or the curly braces around the block.",
        "Writing else with its own condition, such as else (x > 5). else never takes a condition."
      ],
      handout: {
        sections: [
          {
            h: "What is if / else?",
            body: ["An if statement lets your code make decisions.", "Basic structure:"],
            codes: [
              { code:
`if (condition) {
  // This code runs ONLY if the condition is true
}` }
            ]
          },
          {
            h: "Adding else",
            codes: [
              { code:
`if (condition) {
  // Runs if the condition is true
} else {
  // Runs if the condition is false
}` }
            ]
          },
          {
            h: "Example: a passing grade",
            codes: [
              { code:
`let score = 75;

if (score >= 70) {
  console.log("You passed!");
} else {
  console.log("You failed. Try again!");
}
// Output: You passed!` }
            ]
          },
          {
            h: "Real-world examples",
            codes: [
              { label: "Example 1: Age check", code:
`let age = 14;

if (age >= 13) {
  console.log("You can have a social media account.");
} else {
  console.log("You're too young for social media.");
}` },
              { label: "Example 2: Weather check", code:
`let isRaining = true;

if (isRaining) {
  console.log("Bring an umbrella!");
} else {
  console.log("No umbrella needed.");
}` }
            ]
          }
        ]
      },
      template: {
        filename: "week4_starter.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 4: Conditionals</title>
</head>
<body>
  <h1>Age Checker</h1>

  <script>
    let userAge = 16;

    if (userAge >= 18) {
      console.log("You are an adult.");
    } else {
      console.log("You are a teen.");
    }

    // CHALLENGE: Create a new variable for a grade (0-100)
    // If the grade is 80 or higher, print "Great job!"
    // Otherwise, print "Keep trying!"
  </script>
</body>
</html>`,
        tasks: [
          "Run the template and check the console",
          "Change userAge to different values and see which branch runs",
          "Complete the grade challenge: 80 or higher prints \"Great job!\", otherwise \"Keep trying!\"",
          "Add a third branch using else if for a middle grade"
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can you explain what the if condition checks?",
            "Can you identify the else block and say when it runs?"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            {
              prompt: "Question 1: What does the else keyword do?",
              answer: "The else block runs when the if condition is false. It is the \"otherwise\" path."
            },
            {
              prompt: "Question 2 (Code trace): What will print?",
              code:
`let score = 50;

if (score >= 60) {
  console.log("Passing");
} else {
  console.log("Failing");
}`,
              answer: "Failing"
            },
            {
              prompt: "Question 3: Write a simple if / else statement (in pseudocode or code) that checks if someone is 13 or older and prints an appropriate message.",
              answer: `let age = 14;

if (age >= 13) {
  console.log("You are old enough.");
} else {
  console.log("You are too young.");
}`
            }
          ]
        }
      ]
    },

    /* ================================================================ 5 */
    {
      n: 5, title: "Loops", emoji: "🔁", color: "control", tracks: "both",
      concept: "A for loop repeats code a set number of times, so you don't have to write it out over and over.",
      objective: "Students learn loops to repeat code a set number of times.",
      teachingPoints: [
        "A for loop repeats code a set number of times.",
        "It has three parts: a start value, a condition, and a step.",
        "The loop counter (usually i) is created inside the loop.",
        "Always make sure the loop can actually finish, or it will run forever."
      ],
      timing: [
        { label: "Recap Week 4", mins: 2 },
        { label: "Explain loops", mins: 5 },
        { label: "Live-code examples", mins: 3 },
        { label: "Activity time", mins: 12 },
        { label: "Assessment", mins: 3 }
      ],
      liveDemo: [
        {
          title: "Counting with a for loop",
          filename: "loops.js",
          caption: "Teaching tip: have students count on their fingers while the loop runs. It helps them visualise the repetition.",
          code:
`// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5

// Count by 2s (2, 4, 6, 8, 10)
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}`
        }
      ],
      commonMistakes: [
        "Using < when they mean <= (or the other way round), so the loop runs one time too few or too many. Walk through i <= 5 by hand.",
        "Forgetting the step, i++, which makes the loop run forever. The browser tab will freeze — that's the lesson.",
        "Using the counter i after the loop has finished. It only exists inside the loop."
      ],
      handout: {
        sections: [
          {
            h: "What is a loop?",
            body: [
              "A loop makes code repeat a certain number of times, so you don't have to write it over and over.",
              "The for loop structure:"
            ],
            codes: [
              { code:
`for (let i = START; i CONDITION; i STEP) {
  // Code here runs repeatedly
}` }
            ],
            list: [
              "START: the first value of the counter",
              "CONDITION: how long to keep looping (when it becomes false, stop)",
              "STEP: how much to change the counter each time"
            ]
          },
          {
            h: "Examples",
            codes: [
              { label: "Example 1: Count 1 to 10", code:
`for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Prints: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10` },
              { label: "Example 2: Count by 2s", code:
`for (let i = 0; i <= 10; i = i + 2) {
  console.log(i);
}
// Prints: 0, 2, 4, 6, 8, 10` },
              { label: "Example 3: Print a message 3 times", code:
`for (let i = 1; i <= 3; i++) {
  console.log("Hello!");
}
// Prints: Hello! / Hello! / Hello!` }
            ]
          }
        ]
      },
      template: {
        filename: "week5_starter.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 5: Loops</title>
</head>
<body>
  <h1>Loop Practice</h1>

  <script>
    // Count from 1 to 10
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }

    // CHALLENGE: Write a new loop that counts down from 10 to 1
    // (hint: start at 10, go while i >= 1, and use i--)

    // CHALLENGE 2: Count by 5s from 0 to 50
  </script>
</body>
</html>`,
        tasks: [
          "Run the template and count along with the console",
          "Write a loop that counts down from 10 to 1",
          "Write a loop that counts by 5s from 0 to 50",
          "Predict how many lines each loop will print before you run it"
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can you explain what the START, CONDITION and STEP parts do?",
            "Can you say how many times the loop will run?"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            {
              prompt: "Question 1: How many times will this loop run?",
              code:
`for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
              answer: "5 times (i = 1, 2, 3, 4, 5)."
            },
            {
              prompt: "Question 2 (Code trace): What will print?",
              code:
`for (let i = 1; i <= 3; i++) {
  console.log("Hi!");
}`,
              answer: "Hi!\nHi!\nHi!"
            },
            {
              prompt: "Question 3: Write a for loop (in code or pseudocode) that counts from 2 to 8.",
              answer: `for (let i = 2; i <= 8; i++) {
  console.log(i);
}`
            }
          ]
        }
      ]
    },

    /* ================================================================ 6 */
    {
      n: 6, title: "Functions", emoji: "🧰", color: "sound", tracks: "both",
      concept: "A function is a reusable block of code: write it once, then call it as many times as you like.",
      objective: "Students learn to write reusable blocks of code with functions.",
      teachingPoints: [
        "Functions are reusable blocks of code.",
        "Declare once, use (call) them many times.",
        "Parameters let you pass data into a function.",
        "return sends a value back out of a function."
      ],
      timing: [
        { label: "Recap Week 5", mins: 2 },
        { label: "Explain functions", mins: 5 },
        { label: "Live-code examples", mins: 3 },
        { label: "Activity time", mins: 12 },
        { label: "Assessment", mins: 3 }
      ],
      liveDemo: [
        {
          title: "Declare a function, then call it",
          filename: "functions.js",
          caption: "One function definition, two calls, two different results. That's the whole point.",
          code:
`// Declare a function
function greet(name) {
  return "Hello, " + name + "!";
}

// Call it (use it)
console.log(greet("Ada"));      // Hello, Ada!
console.log(greet("Charlie"));  // Hello, Charlie!`
        }
      ],
      commonMistakes: [
        "Defining a function but never calling it — nothing happens until you call it.",
        "Forgetting return, so the function prints nothing and the value is undefined.",
        "Passing the wrong number of arguments, so a parameter ends up undefined."
      ],
      handout: {
        sections: [
          {
            h: "What is a function?",
            body: [
              "A function is a reusable block of code. Write it once, then use it as many times as you want.",
              "Structure:"
            ],
            codes: [
              { code:
`function functionName(parameter) {
  // Code goes here
  return value;
}` }
            ]
          },
          {
            h: "Example: a simple function",
            codes: [
              { code:
`function sayHi() {
  console.log("Hi!");
}

sayHi();  // Prints: Hi!
sayHi();  // Prints: Hi! (again)` }
            ]
          },
          {
            h: "Example: a function with a parameter",
            body: ["A parameter is like an input to the function:"],
            codes: [
              { code:
`function greet(name) {
  console.log("Hello, " + name);
}

greet("Maya");   // Hello, Maya
greet("Aisha");  // Hello, Aisha` }
            ]
          },
          {
            h: "Example: a function with return",
            body: ["The return keyword sends a value back out:"],
            codes: [
              { code:
`function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);  // 8` }
            ]
          }
        ]
      },
      template: {
        filename: "week6_starter.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 6: Functions</title>
</head>
<body>
  <h1>Function Practice</h1>

  <script>
    // Function 1: Greet someone
    function greet(name) {
      return "Hello, " + name + "!";
    }

    console.log(greet("Ada"));
    console.log(greet("Bob"));

    // CHALLENGE: Write a function called 'add' that
    // takes two numbers and returns their sum

    // CHALLENGE 2: Write a function called 'isOldEnough'
    // that takes an age and returns true if >= 13, false otherwise
  </script>
</body>
</html>`,
        tasks: [
          "Run the template and check both greetings appear",
          "Write add(a, b) that returns the sum, and print add(4, 6)",
          "Write isOldEnough(age) that returns true when age >= 13",
          "Call one of your functions three times with different values"
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can the author explain what each parameter does?",
            "Can you point to a line that calls the function?"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            {
              prompt: "Question 1: What is a parameter?",
              answer: "A parameter is a named input listed in the function definition. When you call the function you pass an argument that fills that parameter."
            },
            {
              prompt: "Question 2 (Code trace): What will print?",
              code:
`function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));`,
              answer: "12"
            },
            {
              prompt: "Question 3: Write a function (in code or pseudocode) that takes a name and returns \"Nice to meet you, [name]!\".",
              answer: `function meet(name) {
  return "Nice to meet you, " + name + "!";
}
console.log(meet("Ada"));`
            }
          ]
        }
      ]
    },

    /* ================================================================ 7 */
    {
      n: 7, title: "Arrays (& Objects for SHS)", emoji: "📚", color: "variables", tracks: "both",
      concept: "An array is an ordered list of values. Senior High also learns objects — labelled key–value pairs.",
      objective: "Junior High learn arrays. Senior High learn both arrays and objects.",
      teachingPoints: [
        "Arrays are ordered lists of values.",
        "The index starts at 0 — the first item is always [0].",
        "Use loops to go through an array.",
        "Objects (SHS) are key–value pairs."
      ],
      timing: [
        { label: "Recap Week 6", mins: 2 },
        { label: "Explain arrays", mins: 4 },
        { label: "Live-code examples", mins: 3 },
        { label: "Activity time", mins: 12 },
        { label: "Assessment", mins: 3 }
      ],
      liveDemo: [
        {
          title: "Arrays, and objects for Senior High",
          filename: "arrays.js",
          caption: "Change the list, add a fourth fruit, and watch the loop handle it automatically.",
          code:
`// Create an array
let fruits = ["apple", "banana", "mango"];

// Access by index (0 = first)
console.log(fruits[0]);  // apple
console.log(fruits[1]);  // banana

// Loop through
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// SHS ONLY: Objects
let student = {
  name: "Ada",
  age: 14,
  grade: "9th"
};

console.log(student.name);  // Ada
console.log(student.age);   // 14`
        }
      ],
      commonMistakes: [
        "Assuming the first item is [1]. Point at the array on the board and label the positions 0, 1, 2.",
        "Writing .length() with brackets. length is a property, not a function — no parentheses.",
        "Looping one item too far, so the last log prints undefined."
      ],
      handout: {
        sections: [
          {
            h: "Arrays",
            body: ["An array is an ordered list of values. Each item has a position called an index, starting at 0."],
            codes: [
              { label: "Create an array", code:
`let colors = ["red", "blue", "green"];` },
              { label: "Access items by index", code:
`let colors = ["red", "blue", "green"];
console.log(colors[0]);  // red
console.log(colors[1]);  // blue
console.log(colors[2]);  // green` },
              { label: "Array length", code:
`let colors = ["red", "blue", "green"];
console.log(colors.length);  // 3` },
              { label: "Loop through an array", code:
`let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Prints: apple / banana / mango` }
            ]
          },
          {
            h: "Objects (Senior High only)",
            badge: "SHS only",
            body: ["An object is a collection of key–value pairs — like a real object with properties."],
            codes: [
              { code:
`let student = {
  name: "Ada",
  age: 14,
  school: "Lincoln High",
  likesJS: true
};

// Access properties with dot notation
console.log(student.name);     // Ada
console.log(student.age);      // 14
console.log(student.likesJS);  // true` }
            ]
          }
        ]
      },
      template: {
        filename: "week7_starter.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 7: Arrays</title>
</head>
<body>
  <h1>Array Practice</h1>

  <script>
    // Create an array of your favourite foods
    let foods = ["pizza", "tacos", "ice cream"];

    // Print each one
    console.log(foods[0]);
    console.log(foods[1]);
    console.log(foods[2]);

    // Loop through and print all
    for (let i = 0; i < foods.length; i++) {
      console.log("Food " + (i + 1) + ": " + foods[i]);
    }

    // CHALLENGE: Create an array of 5 numbers
    // and loop through to print each one
  </script>
</body>
</html>`,
        tasks: [
          "Replace the foods with your own favourites",
          "Add a fourth food and check the loop still prints everything",
          "Create an array of 5 numbers and loop through to print each one",
          "SHS: add an object describing yourself and print three of its properties"
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can the author explain what the index number means?",
            "Can you point to the .length property or a loop that goes through the array?"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            {
              prompt: "Question 1: What is the index of the first item in an array?",
              answer: "0."
            },
            {
              prompt: "Question 2 (Code trace): What will print?",
              code:
`let animals = ["cat", "dog", "bird"];
console.log(animals[0]);
console.log(animals[2]);`,
              answer: "cat\nbird"
            },
            {
              prompt: "Question 3: What does array.length tell you?",
              answer: "How many items are in the array."
            },
            {
              prompt: "Question 4 (SHS only): What is the difference between an array and an object?",
              answer: "An array is an ordered list accessed by a number index starting at 0. An object stores labelled key–value pairs, accessed by name using dot notation."
            }
          ]
        }
      ]
    },

    /* ================================================================ 8 */
    {
      n: 8, title: "Meet the DOM", emoji: "🌐", color: "sensing", tracks: "both",
      concept: "The DOM is the browser's map of your HTML. JavaScript uses it to find elements and change their text and styles.",
      objective: "Students learn to use JavaScript to change HTML and CSS on a page.",
      teachingPoints: [
        "The DOM is the browser's map of the HTML page.",
        "getElementById() finds an element by its ID.",
        "You can change text and styles using JavaScript."
      ],
      timing: [
        { label: "Recap Week 7", mins: 2 },
        { label: "Explain the DOM", mins: 4 },
        { label: "Live-code examples", mins: 3 },
        { label: "Activity time", mins: 12 },
        { label: "Assessment", mins: 3 }
      ],
      liveDemo: [
        {
          title: "Change text and change a style",
          filename: "dom.js",
          caption: "This snippet uses the elements from the Week 8 template below, so run it in that page.",
          code:
`// Change text
document.getElementById("title").textContent = "New Title!";

// Change a style
document.getElementById("box").style.backgroundColor = "blue";`
        },
        {
          title: "The full page",
          filename: "week8_demo.html",
          caption: "A complete page you can run as-is. Change the colour name and run it again.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 8: Meet the DOM</title>
  <style>
    #box {
      width: 100px;
      height: 100px;
      background-color: red;
    }
  </style>
</head>
<body>
  <h1 id="title">Click the button to change me!</h1>
  <div id="box"></div>

  <script>
    // Change the heading text
    document.getElementById("title").textContent = "JavaScript Changed This!";

    // Change the box colour
    document.getElementById("box").style.backgroundColor = "green";
  </script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Putting the script in the <head> so it runs before the element exists. The page is null and nothing changes — move the script to the end of <body>.",
        "A typo in the ID. \"titel\" will never match \"title\", and getElementById returns null.",
        "Using .style.color to change a background, or writing the CSS property in kebab-case (background-color). In JavaScript it is camelCase: backgroundColor."
      ],
      handout: {
        sections: [
          {
            h: "What is the DOM?",
            body: [
              "The DOM (Document Object Model) is JavaScript's way of \"seeing\" and changing the HTML on a page. Think of it like this:"
            ],
            list: [
              "You have an HTML page with elements (headings, paragraphs, buttons)",
              "The DOM is a map of all those elements",
              "JavaScript can use the DOM to find elements and change them"
            ]
          },
          {
            h: "getElementById()",
            body: ["Find an element by its ID, then change it:"],
            codes: [
              { code:
`<h1 id="title">Old Title</h1>
<script>
  document.getElementById("title").textContent = "New Title!";
</script>` }
            ],
            after: ["When this page loads, the heading changes from \"Old Title\" to \"New Title!\"."]
          },
          {
            h: "Changing text with .textContent",
            codes: [
              { code:
`<p id="message">Hello</p>
<script>
  document.getElementById("message").textContent = "Goodbye!";
</script>` }
            ]
          },
          {
            h: "Changing styles with .style",
            codes: [
              { code:
`<div id="box" style="width: 100px; height: 100px; background-color: red;"></div>
<script>
  // Change the background colour
  document.getElementById("box").style.backgroundColor = "blue";

  // Change the width
  document.getElementById("box").style.width = "200px";
</script>` }
            ]
          }
        ]
      },
      template: {
        filename: "week8_starter.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 8: Meet the DOM</title>
  <style>
    #box {
      width: 100px;
      height: 100px;
      background-color: red;
    }
  </style>
</head>
<body>
  <h1 id="title">Click the button to change me!</h1>
  <div id="box"></div>

  <script>
    // Change the heading text
    document.getElementById("title").textContent = "JavaScript Changed This!";

    // Change the box colour
    document.getElementById("box").style.backgroundColor = "green";

    // CHALLENGE: Create a new div with an ID
    // and use JS to change its background colour and text
  </script>
</body>
</html>`,
        tasks: [
          "Run the template and watch the heading and box change",
          "Change the background colour to a colour of your choice",
          "Add a new div with an ID and change its colour and text with JavaScript",
          "Break the ID on purpose (a typo) and see what happens — then fix it"
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can you point to the HTML element and the JS that changes it?",
            "Can you see that the page actually changed when you opened it?"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: What does \"DOM\" stand for?", answer: "Document Object Model." },
            { prompt: "Question 2: What does getElementById() do?", answer: "It finds the element with that ID in the page, so JavaScript can read it or change it." },
            {
              prompt: "Question 3 (Code trace): What will happen when this page loads?",
              code:
`<h1 id="heading">Original</h1>
<script>
  document.getElementById("heading").textContent = "Changed!";
</script>`,
              answer: "The heading on the page will read \"Changed!\" instead of \"Original\"."
            },
            {
              prompt: "Question 4: How do you change the colour of a div using JavaScript?",
              answer: "document.getElementById(\"box\").style.backgroundColor = \"blue\";"
            }
          ]
        }
      ]
    },

    /* ================================================================ 9 */
    {
      n: 9, title: "Guided Exercise & Project Kickoff", emoji: "🚧", color: "motion", tracks: "jhs-shs",
      concept: "Junior High build one complete interactive element from start to finish. Senior High plan and start a mini-project.",
      teachingPoints: [
        "An event listener \"waits\" for something to happen, such as a click.",
        "Breaking a project into steps makes it much easier to build.",
        "Plan first: HTML structure, then styles, then JavaScript logic.",
        "Functions keep your JavaScript tidy and reusable."
      ],
      commonMistakes: [
        "Forgetting that the script must come after the HTML element it changes.",
        "Spelling the element ID differently in the HTML and the JavaScript.",
        "Adding a listener to the wrong element, or listening for \"onclick\" instead of \"click\" in addEventListener."
      ],
      variants: {
        jhs: {
          name: "Junior High",
          objective: "Students build one complete interactive element from start to finish.",
          project: "A button that changes a heading's text when clicked.",
          timing: [
            { label: "Recap Weeks 1–8", mins: 2 },
            { label: "Explain the project", mins: 2 },
            { label: "Live-code the solution together", mins: 5 },
            { label: "Let students customise", mins: 8 },
            { label: "Peer check and save", mins: 3 }
          ],
          liveDemo: [
            {
              title: "Live-code solution: button changes the heading",
              filename: "week9_button.html",
              caption: "Build this together, one line at a time. Then students customise it.",
              code:
`<!DOCTYPE html>
<html>
<head>
  <title>Click Me!</title>
  <style>
    button { padding: 10px 20px; font-size: 16px; }
    h1 { color: blue; }
  </style>
</head>
<body>
  <h1 id="heading">Click the button!</h1>
  <button id="myButton">Click Me</button>

  <script>
    document.getElementById("myButton").addEventListener("click", function() {
      document.getElementById("heading").textContent = "You clicked it!";
    });
  </script>
</body>
</html>`
            }
          ],
          handout: {
            sections: [
              {
                h: "Week 9: Build your first interactive page",
                body: ["What you'll build: a button that changes text when clicked."],
                codes: [
                  { label: "Step 1: The HTML", code:
`<h1 id="heading">Click the button!</h1>
<button id="myButton">Click Me</button>` },
                  { label: "Step 2: Add an event listener", body: "An event listener \"waits\" for something to happen (like a click):", code:
`document.getElementById("myButton").addEventListener("click", function() {
  // Code here runs when the button is clicked
});` },
                  { label: "Step 3: Change the text", body: "Inside that listener, change the heading:", code:
`document.getElementById("myButton").addEventListener("click", function() {
  document.getElementById("heading").textContent = "You clicked it!";
});` }
                ]
              },
              {
                h: "Your turn",
                list: [
                  "Save the provided template as week9_firstname.html",
                  "Change the button text to something fun",
                  "Change the heading message to whatever you want",
                  "Save and test by clicking the button",
                  "Try adding a second button that changes the colour instead of the text"
                ]
              }
            ]
          },
          template: {
            filename: "week9_jhs_button.html",
            code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 9: Click Me!</title>
  <style>
    button { padding: 10px 20px; font-size: 16px; }
    h1 { color: blue; }
  </style>
</head>
<body>
  <h1 id="heading">Click the button!</h1>
  <button id="myButton">Click Me</button>

  <script>
    document.getElementById("myButton").addEventListener("click", function() {
      document.getElementById("heading").textContent = "You clicked it!";
    });

    // CHALLENGE: Add a second button that changes the
    // background colour instead of the text.
  </script>
</body>
</html>`,
            tasks: [
              "Save this as week9_firstname.html",
              "Change the button text to something fun",
              "Change the heading message to whatever you want",
              "Test by clicking the button",
              "Add a second button that changes the page colour"
            ]
          },
          assessment: [
            {
              track: "A", audience: "Both", title: "Project requirements checklist", type: "checklist",
              items: [
                "HTML structure set up with IDs on elements",
                "CSS styling applied",
                "Project plan written (pseudocode of the JS logic)",
                "At least one function defined",
                "At least one event listener started"
              ]
            }
          ]
        },

        shs: {
          name: "Senior High",
          objective: "Students plan and start building one of three mini-projects.",
          project: "Choose one: To-Do List, Simple Calculator, or Form Validator.",
          timing: [
            { label: "Recap Weeks 1–8", mins: 2 },
            { label: "Present three options and requirements", mins: 3 },
            { label: "Students pick a project and plan", mins: 7 },
            { label: "Set up the HTML/CSS shell", mins: 5 },
            { label: "Peer-review the plan", mins: 3 }
          ],
          liveDemo: [
            {
              title: "Starter shell — copy this for whichever project you pick",
              filename: "week9_shs_shell.html",
              caption: "Set up the structure and styles first, then add the JavaScript logic next week.",
              code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 9: My Mini-Project</title>
  <style>
    body { font-family: sans-serif; max-width: 520px; margin: 40px auto; }
    input, button, select { font-size: 16px; padding: 8px; }
    #output { margin-top: 16px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>My Mini-Project</h1>

  <input id="inputBox" type="text" placeholder="Type here...">
  <button id="actionButton">Go</button>

  <p id="output">The result will appear here.</p>

  <script>
    // TODO next week: add your event listener and logic here
    console.log("Project shell loaded!");
  </script>
</body>
</html>`
            }
          ],
          handout: {
            sections: [
              {
                h: "Week 9: Plan your mini-project",
                body: ["Choose one of the three options below and plan it before you build it."]
              },
              {
                h: "Option 1: To-Do List",
                body: [
                  "What it does: the user types a task, clicks \"Add\", and it appears in a list.",
                  "JS logic (pseudocode):"
                ],
                list: [
                  "Get the input value when the \"Add\" button is clicked",
                  "Create a new list item",
                  "Add it to the list on the page",
                  "Clear the input field"
                ]
              },
              {
                h: "Option 2: Calculator",
                body: [
                  "What it does: the user enters two numbers, picks an operation (+, −, ×, ÷), and sees the result.",
                  "JS logic (pseudocode):"
                ],
                list: [
                  "Get both input numbers",
                  "Get the selected operation",
                  "Perform the maths",
                  "Display the result"
                ]
              },
              {
                h: "Option 3: Form Validator",
                body: [
                  "What it does: the user enters information and the page checks whether it is valid (for example, a password of 8 or more characters).",
                  "JS logic (pseudocode):"
                ],
                list: [
                  "Get the input value",
                  "Check its length or format",
                  "Show a message: \"Valid\" or \"Invalid\"",
                  "Maybe show a colour change (red / green)"
                ]
              }
            ]
          },
          template: {
            filename: "week9_shs_shell.html",
            code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 9: My Mini-Project</title>
  <style>
    body { font-family: sans-serif; max-width: 520px; margin: 40px auto; }
    input, button, select { font-size: 16px; padding: 8px; }
    #output { margin-top: 16px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>My Mini-Project</h1>

  <input id="inputBox" type="text" placeholder="Type here...">
  <button id="actionButton">Go</button>

  <p id="output">The result will appear here.</p>

  <script>
    // TODO next week: add your event listener and logic here
    console.log("Project shell loaded!");
  </script>
</body>
</html>`,
            tasks: [
              "Pick one project: To-Do List, Calculator, or Form Validator",
              "Write the pseudocode for your main JavaScript logic",
              "Set up the HTML structure with IDs on every element you will need",
              "Add CSS styling so it looks the way you want",
              "Define at least one function and start at least one event listener"
            ]
          },
          assessment: [
            {
              track: "A", audience: "Both", title: "Project requirements checklist", type: "checklist",
              items: [
                "HTML structure set up with IDs on elements",
                "CSS styling applied",
                "Project plan written (pseudocode of the JS logic)",
                "At least one function defined",
                "At least one event listener started"
              ]
            }
          ]
        }
      },
      assessment: []
    },

    /* ================================================================ 10 */
    {
      n: 10, title: "Showcase & Recap", emoji: "🎉", color: "control", tracks: "jhs-shs",
      concept: "Present your project, take the final recap quiz, and reflect on everything you learned.",
      teachingPoints: [
        "Explaining your code out loud shows how well you understand it.",
        "Reflecting on what was hard helps you learn faster next time.",
        "Every project is built one feature at a time."
      ],
      commonMistakes: [
        "Projects that only work if you click in exactly the right order — always test the happy path and one wrong path.",
        "Forgetting to save the final version, or saving it somewhere it can't be found for the showcase.",
        "Spending showcase day still building instead of preparing to explain the work."
      ],
      variants: {
        jhs: {
          name: "Junior High",
          objective: "Students demo their Week 9 project and take a final recap quiz.",
          timing: [
            { label: "Demos (5 min per student, or 1 min per pair)", mins: 5 },
            { label: "Final recap quiz", mins: 5 }
          ],
          liveDemo: [],
          handout: {
            sections: [
              {
                h: "Demo instructions",
                list: [
                  "Each student (or pair) shows their button project",
                  "Click the button to show it works",
                  "Tell the class one thing you customised"
                ]
              },
              {
                h: "Final quiz topics",
                list: [
                  "Variables", "Data types", "Operators", "Conditionals",
                  "Loops", "Functions", "DOM basics"
                ]
              }
            ]
          },
          template: {
            filename: "week10_jhs_demo.html",
            code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 10: My Interactive Page</title>
  <style>
    body { font-family: sans-serif; text-align: center; padding: 60px; }
    button { padding: 12px 24px; font-size: 18px; cursor: pointer; }
    h1 { color: #2563eb; }
  </style>
</head>
<body>
  <h1 id="heading">Click the button!</h1>
  <button id="myButton">Click Me</button>

  <script>
    document.getElementById("myButton").addEventListener("click", function() {
      document.getElementById("heading").textContent = "You clicked it!";
      document.body.style.backgroundColor = "#fef9c3";
    });
  </script>
</body>
</html>`,
            tasks: [
              "Make sure your project runs without errors",
              "Practise clicking through it once before you present",
              "Be ready to say one thing you customised and why"
            ]
          },
          assessment: [
            {
              track: "B", audience: "JHS", title: "Final recap quiz", type: "quiz",
              questions: [
                { prompt: "Question 1: Write a line of code that creates a variable called score and sets it to 95.", answer: "let score = 95;" },
                { prompt: "Question 2: What is the difference between let and const?", answer: "let can be changed later; const cannot be reassigned." },
                { prompt: "Question 3: Write an if / else statement that checks if a number is greater than 50.", answer: `let number = 75;
if (number > 50) {
  console.log("Greater than 50");
} else {
  console.log("50 or less");
}` },
                { prompt: "Question 4: Write a for loop that counts from 1 to 5.", answer: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}` },
                { prompt: "Question 5: Write a function that takes a name and returns a greeting message.", answer: `function greet(name) {
  return "Hello, " + name + "!";
}` },
                { prompt: "Question 6: What does document.getElementById() do?", answer: "It finds the element with the given ID in the page so JavaScript can change it." }
              ]
            }
          ]
        },

        shs: {
          name: "Senior High",
          objective: "Students complete their mini-project, present it, and reflect on their learning.",
          timing: [
            { label: "Project completion", mins: 8 },
            { label: "Presentations (2 min per student)", mins: 2 },
            { label: "Reflection & feedback", mins: 5 }
          ],
          liveDemo: [],
          handout: {
            sections: [
              {
                h: "Presentation template",
                list: [
                  "\"This is a [to-do list / calculator / form validator]\"",
                  "\"It lets you [describe what the user does]\"",
                  "\"One challenge I solved: [describe something tricky]\""
                ]
              }
            ]
          },
          template: {
            filename: "week10_shs_project.html",
            code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 10: My Mini-Project</title>
  <style>
    body { font-family: sans-serif; max-width: 520px; margin: 40px auto; }
    input, button { font-size: 16px; padding: 8px; }
    li { margin: 6px 0; cursor: pointer; }
    .done { text-decoration: line-through; color: #94a3b8; }
  </style>
</head>
<body>
  <h1>My To-Do List</h1>

  <input id="taskInput" type="text" placeholder="New task...">
  <button id="addButton">Add</button>

  <ul id="taskList"></ul>

  <script>
    document.getElementById("addButton").addEventListener("click", function() {
      let input = document.getElementById("taskInput");
      let text = input.value.trim();
      if (text === "") return;

      let item = document.createElement("li");
      item.textContent = text;
      item.addEventListener("click", function() {
        item.classList.toggle("done");
      });

      document.getElementById("taskList").appendChild(item);
      input.value = "";
    });
  </script>
</body>
</html>`,
            tasks: [
              "Finish your chosen project so it runs without errors",
              "Test the main path and one wrong-input path",
              "Be ready to name one challenge you solved",
              "Complete the project design document if you are submitting on paper"
            ]
          },
          assessment: [
            {
              track: "B", audience: "SHS", title: "Final project design document", type: "form",
              intro: "Complete this before the showcase and hand it in with your project.",
              fields: [
                { label: "Project choice", hint: "To-Do List / Calculator / Form Validator" },
                { label: "Describe what your project does", lines: 2 },
                { label: "List the HTML elements you need (what IDs?)", lines: 3 },
                { label: "Write the pseudocode for the main JS logic", lines: 4 },
                { label: "JavaScript concepts used", hint: "Variables · Functions · Event listeners · DOM · Loops · Arrays" }
              ]
            }
          ]
        }
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Project showcase rubric", type: "rubric",
          criteria: [
            "Project runs without errors",
            "Student can explain what the code does",
            "At least one feature has been customised",
            "Student can point to and explain one function, loop or event"
          ]
        }
      ]
    }
  ];

  // Reused weeks are repositioned; new weeks are stubs until authored.
  function stub(n, title, emoji, color, concept) {
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

  // Some reused weeks carry a `variants` object (jhs/shs) whose handout/template
  // live inside the variant. Unify to a single week: promote any base field that
  // is missing/empty from the first variant, then drop `variants`.
  var UNIFY_KEYS = ["objective", "teachingPoints", "timing", "liveDemo", "commonMistakes", "handout", "template", "assessment"];
  function unify(wk) {
    if (wk && wk.variants) {
      var keys = Object.keys(wk.variants);
      if (keys.length) {
        var v = wk.variants[keys[0]];
        UNIFY_KEYS.forEach(function (k) {
          var empty = (wk[k] == null) || (Array.isArray(wk[k]) && wk[k].length === 0);
          if (empty && v[k] != null) wk[k] = v[k];
        });
      }
      delete wk.variants;
    }
    return wk;
  }

  // --- Term 1: foundations ---
  weeks[0].n = 1; weeks[1].n = 2; weeks[2].n = 3; weeks[3].n = 4; weeks[4].n = 5; weeks[5].n = 6;
  var term1 = [
    weeks[0], weeks[1], weeks[2], weeks[3], weeks[4], weeks[5],

    /* ================================================================ 7 */
    {
      n: 7, title: "Arrays", emoji: "📚", color: "operators", tracks: "both",
      concept: "An array is an ordered list of values. You can add to it, read items by their position, and loop through them.",
      objective: "Students can create an array, read items by index, add items and loop through them.",
      teachingPoints: [
        "An array is an ordered list written with square brackets: let fruits = [\"mango\", \"orange\"];.",
        "Items are numbered from 0, so fruits[0] is the first item; .length gives the count.",
        "push() adds an item to the end, and a for loop visits every item."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a list of values", mins: 5 },
        { label: "Arrays", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A list of values",
          filename: "arrays.html",
          caption: "Indexing starts at 0. push adds to the end; the loop prints every item with its index.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <script>
    let fruits = ["mango", "orange", "banana"];
    console.log(fruits[0]);
    console.log("Count: " + fruits.length);
    fruits.push("apple");
    for (let i = 0; i < fruits.length; i++) {
      console.log(i + ": " + fruits[i]);
    }
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Getting the last item with fruits[fruits.length] (it is fruits[fruits.length - 1]).",
        "Starting a loop at 1 and skipping the first item.",
        "Mixing up fruits[0] (the item) with fruits.length (how many there are)."
      ],
      handout: {
        sections: [
          {
            h: "An array is an ordered list",
            body: ["Write an array with square brackets and commas. Each item has a position, starting at zero."],
            codes: [
              { code: `let names = ["Ada", "Sam", "Kofi"];` }
            ]
          },
          {
            h: "Reading, adding and counting",
            body: ["Read an item by its index, add with push(), and count with length."],
            codes: [
              { code: `names[0];  names.push("Zara");  names.length;` }
            ]
          },
          {
            h: "Looping through an array",
            body: ["A for loop uses the index to visit each item in turn."]
          }
        ]
      },
      template: {
        filename: "my_arrays.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <script>
    let subjects = ["Maths", "English", "Science"];
    console.log(subjects[1]);
    subjects.push("History");
    for (let i = 0; i < subjects.length; i++) {
      console.log(subjects[i]);
    }
  <\/script>
</body>
</html>`,
        tasks: [
          "Print the first and last subject.",
          "Add two more subjects with push().",
          "Loop through and print each subject with a number.",
          "Explain to a partner why the first index is 0, not 1."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "The array logs correct values",
            "push() adds an item",
            "the loop prints each item once"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Write an array of three colours.", answer: "let colours = [\"red\", \"green\", \"blue\"];" },
            { prompt: "Question 2: What does colours.length give you?", answer: "The number of items in the array." },
            { prompt: "Question 3: How do you read the first item of an array called names?", answer: "names[0]" }
          ]
        }
      ]
    },

    /* ================================================================ 8 */
    {
      n: 8, title: "Objects", emoji: "🧩", color: "looks", tracks: "both",
      concept: "An object stores labelled values — each item has a key and a value. Objects model real things, like a student with a name and a score.",
      objective: "Students can create an object with key/value pairs and read its values.",
      teachingPoints: [
        "An object stores labelled values in curly braces: { name: \"Ada\", age: 12 }.",
        "Each label is a key and each value is read with dot notation: student.name.",
        "Objects group related details about one thing into a single box."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a labelled box", mins: 5 },
        { label: "Objects", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A labelled box",
          filename: "objects.html",
          caption: "Each value has a key. Read with a dot; change a value by assigning a new one.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <script>
    let student = { name: "Ada", age: 12, likesCoding: true };
    console.log(student.name);
    console.log(student.age);
    student.age = 13;
    console.log("New age: " + student.age);
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Using square brackets with an unquoted key that does not exist (student[age] instead of student.age).",
        "Forgetting the colon between a key and its value.",
        "Adding a comma instead of a colon, or leaving out commas between pairs."
      ],
      handout: {
        sections: [
          {
            h: "Keys and values",
            body: ["An object is a set of labelled values. The label is the key; the value sits after a colon."],
            codes: [
              { code: `let book = { title: "Matilda", pages: 240 };` }
            ]
          },
          {
            h: "Reading and changing values",
            body: ["Use dot notation to read a value, and assign to it to change it."],
            codes: [
              { code: `book.title;  book.pages = 250;` }
            ]
          }
        ]
      },
      template: {
        filename: "my_object.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <script>
    let me = { name: "Your name", age: 0, school: "Your school" };
    console.log(me.name);
    console.log(me.school);
    me.age = me.age + 1;
    console.log(me.age);
  <\/script>
</body>
</html>`,
        tasks: [
          "Fill in your own details.",
          "Add a new key called favouriteFood.",
          "Print every value with its label.",
          "Explain to a partner the difference between an array and an object."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "The object logs correct values",
            "dot notation works",
            "a new key was added"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Write an object with keys name and score.", answer: "let player = { name: \"Ada\", score: 10 };" },
            { prompt: "Question 2: How do you read the name from an object called player?", answer: "player.name" },
            { prompt: "Question 3: What is the difference between an array and an object?", answer: "An array is an ordered list read by number; an object is a set of labelled values read by key." }
          ]
        }
      ]
    },

    /* ================================================================ 9 */
    {
      n: 9, title: "Arrays & Objects in practice", emoji: "🛠️", color: "variables", tracks: "both",
      concept: "Combine arrays and objects to store and work with real collections of data, such as a list of students.",
      objective: "Students can store a list of objects in an array and loop through it to read each object's values.",
      teachingPoints: [
        "An array can hold objects: [{ name: \"Ada\", score: 90 }, ...].",
        "A loop visits each object, and dot notation reads its values.",
        "This pattern models real collections — a class list, a scoreboard, a shopping basket."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a class list", mins: 5 },
        { label: "Lists of objects", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A class list",
          filename: "practical.html",
          caption: "An array of objects is the everyday shape of real data. The loop reads each object's keys.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <script>
    let students = [
      { name: "Ada", score: 90 },
      { name: "Sam", score: 75 },
      { name: "Kofi", score: 82 }
    ];
    for (let i = 0; i < students.length; i++) {
      console.log(students[i].name + " scored " + students[i].score);
    }
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Writing students.name instead of students[i].name inside the loop.",
        "Forgetting that the loop index is a number, so the object needs [i] first.",
        "Missing commas between the objects in the array."
      ],
      handout: {
        sections: [
          {
            h: "A list of objects",
            body: ["Put objects inside an array to store many records. Each record has the same keys."],
            codes: [
              { code: `let team = [{ name: "Ada", score: 90 }];` }
            ]
          },
          {
            h: "Reading each record",
            body: ["Loop with the index, then use dot notation on that item."],
            codes: [
              { code: `team[i].name` }
            ]
          }
        ]
      },
      template: {
        filename: "my_class_list.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <script>
    let players = [
      { name: "Ada", goals: 3 },
      { name: "Sam", goals: 1 },
      { name: "Kofi", goals: 2 }
    ];
    for (let i = 0; i < players.length; i++) {
      console.log(players[i].name + ": " + players[i].goals);
    }
  <\/script>
</body>
</html>`,
        tasks: [
          "Add a fourth player.",
          "Add a new key to each player, such as team.",
          "Print only players with more than one goal.",
          "Explain to a partner why we use [i] before .name."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "The loop reads each object's values",
            "new records were added correctly",
            "the student can explain the array-of-objects shape"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: What is an array of objects good for?", answer: "Storing many records that all have the same keys, such as a class list." },
            { prompt: "Question 2: If the loop index is i, how do you read the name of each object?", answer: "items[i].name" },
            { prompt: "Question 3: Write one object with keys title and year.", answer: "let film = { title: \"Matilda\", year: 1996 };" }
          ]
        }
      ]
    },

    /* ================================================================ 10 */
    {
      n: 10, title: "Term project: a data-driven page", emoji: "🌟", color: "motion", tracks: "both",
      concept: "Build a page that stores a small collection of data in arrays and objects and shows it on screen.",
      objective: "Students build a page that stores a small collection of data in an array of objects and shows it on screen.",
      teachingPoints: [
        "Plan the fields first: what does each record need? e.g. name and score.",
        "Store records in an array of objects.",
        "Loop through them and write each one into the page with document.getElementById(...) and textContent."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Demo of a finished page", mins: 4 },
        { label: "Build time", mins: 20 },
        { label: "Present", mins: 5 },
        { label: "Wrap-up", mins: 3 }
      ],
      liveDemo: [
        {
          title: "Data shown on the page",
          filename: "data_page.html",
          caption: "The data lives in an array of objects; the loop builds the list that appears on the page.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <h1>Class scores</h1>
  <ul id="list"></ul>
  <script>
    let students = [
      { name: "Ada", score: 90 },
      { name: "Sam", score: 75 },
      { name: "Kofi", score: 82 }
    ];
    let html = "";
    for (let i = 0; i < students.length; i++) {
      html = html + "<li>" + students[i].name + " — " + students[i].score + "</li>";
    }
    document.getElementById("list").innerHTML = html;
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Building the string but never writing it into the page.",
        "Forgetting to reset the string before the loop.",
        "Missing commas or a closing bracket in the data array."
      ],
      handout: {
        sections: [
          {
            h: "Plan your data",
            list: [
              "Choose two or three fields per record",
              "Write three or four records",
              "Decide how each record should look on the page"
            ]
          },
          {
            h: "Show it on the page",
            body: ["Loop through the records, build a string of HTML, then set it on an element with innerHTML."]
          }
        ]
      },
      template: {
        filename: "my_data_page.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <h1>My data page</h1>
  <ul id="list"></ul>
  <script>
    let items = [
      { name: "Item one", value: 1 },
      { name: "Item two", value: 2 }
    ];
    let html = "";
    for (let i = 0; i < items.length; i++) {
      html = html + "<li>" + items[i].name + "</li>";
    }
    document.getElementById("list").innerHTML = html;
  <\/script>
</body>
</html>`,
        tasks: [
          "Choose your own data (scores, songs, countries).",
          "Add at least four records.",
          "Show two fields for each record.",
          "Present your page and explain your data shape."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Term 1 project rubric", type: "rubric",
          criteria: [
            "Page runs without errors",
            "Data is stored in an array of objects",
            "A loop reads every record",
            "Two fields are shown per record",
            "The student can explain their data"
          ]
        },
        {
          track: "B", audience: "Both", title: "Design document — data-driven page", type: "form",
          intro: "Complete this before the showcase.",
          fields: [
            { label: "What is your data about?" },
            { label: "List the fields each record has", lines: 2 },
            { label: "Write the pseudocode for your loop", lines: 3 }
          ]
        }
      ]
    }
  ];

  // --- Term 2: the DOM & interactivity ---
  unify(weeks[7]); weeks[7].n = 1;
  var term2 = [
    weeks[7],
    /* ================================================================ 2 */
    {
      n: 2, title: "Selecting & changing elements", emoji: "🔍", color: "sensing", tracks: "both",
      concept: "The DOM lets JavaScript find elements and change their text, attributes and styles.",
      objective: "Students can select elements with querySelector and change their text and style.",
      teachingPoints: [
        "document.querySelector(\".box\") returns the first element matching a CSS selector; querySelectorAll(...) returns all of them.",
        "element.textContent = \"...\" changes the text; element.style.color = \"...\" changes one style.",
        "A selector can be a tag, .class or #id."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Selecting elements", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Find and change",
          filename: "select_change.html",
          caption: "querySelector takes a CSS selector — #id or .class — and returns the element so you can change it.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Old heading</h1>
  <p class="note">A note.</p>
  <script>
    let heading = document.querySelector("#title");
    heading.textContent = "New heading";
    heading.style.color = "#4c97ff";

    let note = document.querySelector(".note");
    note.style.fontWeight = "bold";
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Forgetting the # or . in the selector, so it matches nothing.",
        "Using querySelector when several elements match but only the first is wanted (use querySelectorAll).",
        "Writing element.textContent() with brackets (textContent is a property, not a function)."
      ],
      handout: {
        sections: [
          {
            h: "Select with CSS selectors",
            body: ["querySelector takes the same selectors you already use in CSS."],
            codes: [
              { code: `document.querySelector("#title");  document.querySelector(".note");` }
            ]
          },
          {
            h: "Change text and style",
            body: ["Set textContent to change text. Set element.style.<property> to change one style (camelCase in JS)."]
          }
        ]
      },
      template: {
        filename: "my_select.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Change me</h1>
  <p class="note">Style me.</p>
  <script>
    let heading = document.querySelector("#title");
    heading.textContent = "Changed by JavaScript";
    let note = document.querySelector(".note");
    note.style.color = "#15803d";
  <\/script>
</body>
</html>`,
        tasks: [
          "Change the heading text again.",
          "Give the note a background colour with style.",
          "Add a second .note paragraph and select it with querySelectorAll.",
          "Explain to a partner what a CSS selector is."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Elements are selected with the right selector",
            "textContent and style both change the page",
            "the student can explain selectors"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: What does document.querySelector(\".box\") return?", answer: "The first element whose class is 'box'." },
            { prompt: "Question 2: Which property changes an element's text?", answer: "textContent" },
            { prompt: "Question 3: How do you write the CSS property background-color in JavaScript?", answer: "backgroundColor" }
          ]
        }
      ]
    },

    /* ================================================================ 3 */
    {
      n: 3, title: "Events", emoji: "🖱️", color: "events", tracks: "both",
      concept: "Event listeners run code in response to clicks, typing and other user actions.",
      objective: "Students can attach click listeners and use the event to react to what was clicked.",
      teachingPoints: [
        "element.addEventListener(\"click\", handler) runs handler each time the element is clicked.",
        "The handler receives an event object; event.target is the element that was clicked.",
        "Pass the function without parentheses so it runs later, not immediately."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Events", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Click handler with the event",
          filename: "event_target.html",
          caption: "One handler is added to each button; event.target tells us which button was clicked.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <p id="out">Click a button</p>
  <button class="pick">One</button>
  <button class="pick">Two</button>
  <script>
    let buttons = document.querySelectorAll(".pick");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        document.getElementById("out").textContent = "You clicked: " + event.target.textContent;
      });
    }
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Writing handler() with brackets, which calls it immediately.",
        "Attaching the listener before the element exists (script above the HTML).",
        "Forgetting that querySelectorAll returns a list that must be looped."
      ],
      handout: {
        sections: [
          {
            h: "Listen for an event",
            body: ["addEventListener says: when this event happens, run this function."],
            codes: [
              { code: `button.addEventListener("click", function () { ... });` }
            ]
          },
          {
            h: "The event object",
            body: ["The handler's parameter is the event. event.target is the element that was clicked."]
          }
        ]
      },
      template: {
        filename: "my_events.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Pick a colour</h1>
  <button class="colour" data-color="#4c97ff">Blue</button>
  <button class="colour" data-color="#59c059">Green</button>
  <script>
    let buttons = document.querySelectorAll(".colour");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        document.getElementById("title").style.color = event.target.getAttribute("data-color");
      });
    }
  <\/script>
</body>
</html>`,
        tasks: [
          "Add a red colour button.",
          "Show the chosen colour name in the heading text too.",
          "Explain why the handler has no brackets.",
          "Explain to a partner what event.target is."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Clicking each button reacts",
            "the event object is used",
            "listeners are on the right elements"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which method runs a function when an element is clicked?", answer: "addEventListener(\"click\", function () { ... })" },
            { prompt: "Question 2: What is event.target?", answer: "The element that was clicked." },
            { prompt: "Question 3: Why should the handler have no brackets when passed to addEventListener?", answer: "Brackets would call it immediately; without them the browser calls it later when the event happens." }
          ]
        }
      ]
    },

    /* ================================================================ 4 */
    {
      n: 4, title: "Forms & user input", emoji: "📝", color: "variables", tracks: "both",
      concept: "Read values that users type into form fields and use them in your script.",
      objective: "Students can read a value a user typed and use it in their script.",
      teachingPoints: [
        "An input's current text is in its .value property.",
        "A button click or a form submit event can trigger reading the value.",
        "For a form, call event.preventDefault() to stop the page reloading."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Reading input", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Read the name",
          filename: "forms.html",
          caption: "The input's .value holds what was typed. Read it when the button is clicked.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <input id="nameInput" type="text" placeholder="Type your name" />
  <button id="go">Greet me</button>
  <p id="out"></p>
  <script>
    document.getElementById("go").addEventListener("click", function () {
      let name = document.getElementById("nameInput").value;
      document.getElementById("out").textContent = "Hello, " + name + "!";
    });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Reading .value before the user has typed, so it is empty.",
        "Reading the input once at load instead of inside the click handler.",
        "Forgetting event.preventDefault() in a form, so the page reloads and clears the input."
      ],
      handout: {
        sections: [
          {
            h: "Reading a value",
            body: ["Every input has a value property that holds what the user typed right now."],
            codes: [
              { code: `let name = input.value;` }
            ]
          },
          {
            h: "Stopping a form reload",
            body: ["When a form is submitted the browser reloads. Call event.preventDefault() first to handle it yourself."]
          }
        ]
      },
      template: {
        filename: "my_form.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <input id="food" type="text" placeholder="Favourite food" />
  <button id="show">Show</button>
  <p id="result"></p>
  <script>
    document.getElementById("show").addEventListener("click", function () {
      let food = document.getElementById("food").value;
      document.getElementById("result").textContent = "You like " + food;
    });
  <\/script>
</body>
</html>`,
        tasks: [
          "Read a second input (e.g. favourite colour) and show both values.",
          "Show a message if the input is empty.",
          "Wrap the inputs in a form and use submit with preventDefault.",
          "Explain to a partner what .value gives you."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "The typed value is read correctly",
            "an empty input is handled",
            "the student can explain .value"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which property holds what a user typed into an input?", answer: ".value" },
            { prompt: "Question 2: Why call event.preventDefault() in a form submit handler?", answer: "To stop the browser reloading the page (which would clear the input)." },
            { prompt: "Question 3: How would you read an input with id=\"email\"?", answer: "document.getElementById(\"email\").value" }
          ]
        }
      ]
    },

    /* ================================================================ 5 */
    {
      n: 5, title: "Classes & style toggling", emoji: "🎨", color: "looks", tracks: "both",
      concept: "Add and remove CSS classes from elements to change their appearance in response to events.",
      objective: "Students can add, remove and toggle CSS classes with classList.",
      teachingPoints: [
        "element.classList.add(\"name\"), .remove(\"name\") and .toggle(\"name\") change which classes an element has.",
        "Because CSS already styles a class, toggling a class is the tidiest way to change appearance.",
        "Keeping styles in CSS and only toggling classes in JS separates look from behaviour."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "classList", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Toggle a theme",
          filename: "classlist.html",
          caption: "The dark class is defined in CSS; JavaScript only toggles the class on and off.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; }
    .dark { background: #1f2a44; color: #ffffff; }
  </style>
</head>
<body>
  <h1>Theme toggler</h1>
  <button id="toggle">Toggle dark mode</button>
  <script>
    document.getElementById("toggle").addEventListener("click", function () {
      document.body.classList.toggle("dark");
    });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Writing classList.add(\".dark\") with a dot (classes in classList do not take the dot).",
        "Setting colours directly in JS when a class would be tidier.",
        "Defining the class in JS but not in the CSS."
      ],
      handout: {
        sections: [
          {
            h: "The classList methods",
            body: ["add, remove and toggle change an element's classes. The class itself must be styled in CSS."],
            codes: [
              { code: `el.classList.toggle("dark");` }
            ]
          },
          {
            h: "Why toggle?",
            body: ["Keep colours and spacing in CSS; use JavaScript only to switch classes. This keeps look and behaviour apart."]
          }
        ]
      },
      template: {
        filename: "my_classes.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight { background: #ffbf00; font-weight: 800; }
  </style>
</head>
<body>
  <p id="line">Click the button to highlight this line.</p>
  <button id="toggle">Highlight</button>
  <script>
    document.getElementById("toggle").addEventListener("click", function () {
      document.getElementById("line").classList.toggle("highlight");
    });
  <\/script>
</body>
</html>`,
        tasks: [
          "Add a second class and a second button.",
          "Use add() and remove() as well as toggle().",
          "Change the class's CSS and see the page update.",
          "Explain to a partner why toggling a class is tidier than setting style in JS."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Toggling changes the element",
            "the class is defined in CSS",
            "the student can name two classList methods"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which classList method switches a class on if off and off if on?", answer: "classList.toggle(\"name\")" },
            { prompt: "Question 2: Do you include the dot when adding a class with classList.add?", answer: "No — write the class name without the dot: classList.add(\"dark\")." },
            { prompt: "Question 3: Why is toggling a class often better than setting styles in JavaScript?", answer: "It keeps the styling in CSS and the behaviour in JS, so each is easier to change." }
          ]
        }
      ]
    },

    /* ================================================================ 6 */
    {
      n: 6, title: "Building lists with loops", emoji: "🔁", color: "control", tracks: "both",
      concept: "Use a loop to build and update a list of elements from an array of data.",
      objective: "Students can create new elements and add them to the page with createElement and appendChild.",
      teachingPoints: [
        "document.createElement(\"li\") makes a new element that is not on the page yet.",
        "parent.appendChild(child) adds it; element.textContent fills it.",
        "Loop over an array of data to build a list of elements."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Creating elements", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Build a list from data",
          filename: "build_list.html",
          caption: "Each loop creates one li, fills it, and appends it to the ul. Refresh to see it rebuild.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <ul id="list"></ul>
  <script>
    let fruits = ["mango", "orange", "banana"];
    let list = document.getElementById("list");
    for (let i = 0; i < fruits.length; i++) {
      let item = document.createElement("li");
      item.textContent = fruits[i];
      list.appendChild(item);
    }
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Creating an element but never appending it (so it never appears).",
        "Appending to the wrong parent.",
        "Setting text on the wrong variable (e.g. list instead of item)."
      ],
      handout: {
        sections: [
          {
            h: "Three steps per item",
            list: [
              "Create it with createElement",
              "Fill it with textContent",
              "Append it to the parent"
            ]
          },
          {
            h: "Loop the data",
            body: ["Use the same loop you would for any array. Each pass builds one element."],
            codes: [
              { code: `let li = document.createElement("li");  li.textContent = data[i];  list.appendChild(li);` }
            ]
          }
        ]
      },
      template: {
        filename: "my_build_list.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <h1>My subjects</h1>
  <ul id="list"></ul>
  <script>
    let subjects = ["Maths", "English", "Science"];
    let list = document.getElementById("list");
    for (let i = 0; i < subjects.length; i++) {
      let item = document.createElement("li");
      item.textContent = subjects[i];
      list.appendChild(item);
    }
  <\/script>
</body>
</html>`,
        tasks: [
          "Add two more subjects to the array.",
          "Add the index number in front of each subject.",
          "Clear the list first (list.innerHTML = \"\") then rebuild it.",
          "Explain to a partner the difference between creating and appending."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "Each item appears on the page",
            "createElement and appendChild are both used",
            "the loop matches the array length"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which method creates a new element?", answer: "document.createElement(\"li\")" },
            { prompt: "Question 2: Which method adds a new element to its parent?", answer: "parent.appendChild(child)" },
            { prompt: "Question 3: What happens if you create an element but never append it?", answer: "It exists in memory but never appears on the page." }
          ]
        }
      ]
    },

    /* ================================================================ 7 */
    {
      n: 7, title: "Timers", emoji: "⏱️", color: "operators", tracks: "both",
      concept: "setTimeout and setInterval run code after a delay or repeatedly.",
      objective: "Students can run code after a delay or repeatedly with setTimeout and setInterval.",
      teachingPoints: [
        "setTimeout(fn, ms) runs fn once after ms milliseconds.",
        "setInterval(fn, ms) runs fn again and again until clearInterval(id) is called.",
        "Store the id from setInterval so you can stop it later."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "Timers", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Count up every second",
          filename: "timers.html",
          caption: "setInterval runs the function every 1000ms (one second); clearInterval stops it.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <p id="count">0</p>
  <button id="stop">Stop</button>
  <script>
    let value = 0;
    let output = document.getElementById("count");
    let timer = setInterval(function () {
      value = value + 1;
      output.textContent = value;
    }, 1000);
    document.getElementById("stop").addEventListener("click", function () {
      clearInterval(timer);
    });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Forgetting the delay in milliseconds (1000 = 1 second, not 1).",
        "Losing the id from setInterval, so it cannot be stopped.",
        "Calling clearInterval(fn) with the function instead of the id."
      ],
      handout: {
        sections: [
          {
            h: "One-off vs repeating",
            body: ["setTimeout runs once after a delay. setInterval keeps running; keep its id to stop it later."],
            codes: [
              { code: `let id = setInterval(fn, 1000);  clearInterval(id);` }
            ]
          },
          {
            h: "Milliseconds",
            list: [
              "1000 ms = 1 second",
              "500 ms = half a second",
              "10000 ms = 10 seconds"
            ]
          }
        ]
      },
      template: {
        filename: "my_timer.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <p id="msg">Wait for it…</p>
  <script>
    setTimeout(function () {
      document.getElementById("msg").textContent = "Ready!";
    }, 2000);
  <\/script>
</body>
</html>`,
        tasks: [
          "Change the delay to 5 seconds.",
          "Use setInterval to count down from 10.",
          "Add a Stop button that calls clearInterval.",
          "Explain to a partner the difference between setTimeout and setInterval."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "The timer runs and updates the page",
            "clearInterval stops it",
            "the delay is in milliseconds"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which function runs code once after a delay?", answer: "setTimeout(function, milliseconds)" },
            { prompt: "Question 2: Which function repeats until stopped?", answer: "setInterval(function, milliseconds)" },
            { prompt: "Question 3: How do you stop a setInterval?", answer: "Store the id it returns and call clearInterval(id)." }
          ]
        }
      ]
    },

    /* ================================================================ 8 */
    {
      n: 8, title: "Saving data with localStorage", emoji: "💾", color: "variables", tracks: "both",
      concept: "localStorage keeps small amounts of data in the browser between visits.",
      objective: "Students can save a value in the browser and read it back on a later visit.",
      teachingPoints: [
        "localStorage.setItem(\"key\", \"value\") saves a string; localStorage.getItem(\"key\") reads it.",
        "Values are always strings, so for lists/objects use JSON.stringify to save and JSON.parse to read.",
        "Saved data stays in the browser until it is removed."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo", mins: 5 },
        { label: "localStorage", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Remember the name",
          filename: "storage.html",
          caption: "Save a value, then reload the page — the name is remembered because it lives in localStorage.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <input id="nameInput" type="text" placeholder="Your name" />
  <button id="save">Save</button>
  <p id="out"></p>
  <script>
    let out = document.getElementById("out");
    let saved = localStorage.getItem("name");
    if (saved) {
      out.textContent = "Welcome back, " + saved;
    }
    document.getElementById("save").addEventListener("click", function () {
      let name = document.getElementById("nameInput").value;
      localStorage.setItem("name", name);
      out.textContent = "Saved: " + name;
    });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Trying to save an array or object directly (save a JSON string instead).",
        "Assuming getItem always returns a value — it returns null if nothing was saved.",
        "Forgetting that localStorage only stores strings."
      ],
      handout: {
        sections: [
          {
            h: "Save and read a value",
            body: ["setItem saves under a key; getItem reads it back (or null)."],
            codes: [
              { code: `localStorage.setItem("name", "Ada");  let n = localStorage.getItem("name");` }
            ]
          },
          {
            h: "Saving lists",
            body: ["Store an array or object as JSON text and parse it back."],
            codes: [
              { code: `localStorage.setItem("items", JSON.stringify(list));  let list = JSON.parse(localStorage.getItem("items"));` }
            ]
          }
        ]
      },
      template: {
        filename: "my_storage.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <input id="colour" type="text" placeholder="Favourite colour" />
  <button id="save">Save colour</button>
  <p id="out"></p>
  <script>
    let out = document.getElementById("out");
    let saved = localStorage.getItem("colour");
    if (saved) out.textContent = "Your colour: " + saved;
    document.getElementById("save").addEventListener("click", function () {
      let value = document.getElementById("colour").value;
      localStorage.setItem("colour", value);
      out.textContent = "Saved: " + value;
    });
  <\/script>
</body>
</html>`,
        tasks: [
          "Save a second value and read both on load.",
          "Show a message when nothing has been saved yet.",
          "Save an array with JSON.stringify and parse it back.",
          "Explain to a partner why localStorage stores strings."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "A value saves and is read back after reload",
            "a missing value is handled",
            "the student can explain getItem returning null"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Which method saves a value in localStorage?", answer: "localStorage.setItem(\"key\", value)" },
            { prompt: "Question 2: What does localStorage.getItem return if nothing was saved?", answer: "null" },
            { prompt: "Question 3: How do you save an array in localStorage?", answer: "Convert it to a string with JSON.stringify, then setItem that string." }
          ]
        }
      ]
    },

    /* ================================================================ 9 */
    {
      n: 9, title: "Debugging in the browser", emoji: "🐞", color: "sensing", tracks: "both",
      concept: "Read errors, use the console and break the problem into smaller parts to fix bugs.",
      objective: "Students can read errors and use the console to find and fix bugs.",
      teachingPoints: [
        "The console shows errors in red with a line number and a message.",
        "console.log() shows the real value of a variable at that moment.",
        "Break the problem into smaller steps and check each one."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: read an error", mins: 5 },
        { label: "Debugging", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Read the error",
          filename: "debug_error.html",
          caption: "Run it: the id is misspelled, so heading is null and changing its text throws. Fix the id and run again.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Debug me</h1>
  <script>
    let heading = document.getElementById("titel");
    heading.textContent = "Fixed!";
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Guessing instead of reading the red error message and its line number.",
        "Not logging values to see what is actually there.",
        "Fixing a different line than the one the error points to."
      ],
      handout: {
        sections: [
          {
            h: "Read the error",
            body: ["The console shows the message and the line number. Go to that line and check names, quotes and brackets."]
          },
          {
            h: "Checklist of common bugs",
            list: [
              "Spelling of ids and variables",
              "Missing quotes or brackets",
              "Script before the elements it uses",
              "Calling a function with or without brackets in the wrong place"
            ]
          }
        ]
      },
      template: {
        filename: "bug_hunt.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <p id="score">Score: 0</p>
  <script>
    let points = 10;
    let label = document.getElementById("scoer");
    label.textContent = "Score: " + points;
  <\/script>
</body>
</html>`,
        tasks: [
          "Run the page and read the console error.",
          "Fix the bug and run again.",
          "Add a console.log to check the value of points.",
          "Explain to a partner how the line number helped."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: CHECKLIST_TRACK_A, type: "checklist",
          items: [
            "The page runs with no errors after fixing",
            "the student describes the bug",
            "a console.log was used"
          ]
        },
        {
          track: "B", audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Where do JavaScript errors appear?", answer: "In the browser console, in red with a line number." },
            { prompt: "Question 2: What is console.log useful for?", answer: "Showing the real value of something so you can check your assumptions." },
            { prompt: "Question 3: What is a common cause of a 'Cannot read properties of null' error?", answer: "An element was not found (e.g. a misspelled id), so the variable is null." }
          ]
        }
      ]
    },

    /* ================================================================ 10 */
    {
      n: 10, title: "Term project: an interactive widget", emoji: "🌟", color: "events", tracks: "both",
      concept: "Build a small interactive widget that reacts to the user and keeps its state.",
      objective: "Students build a small widget that reacts to the user and keeps its state.",
      teachingPoints: [
        "A widget has state (a variable), controls (buttons/inputs) and a display.",
        "Event handlers update the state, then redraw the display.",
        "Test each control and handle the empty case."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Demo of a finished widget", mins: 4 },
        { label: "Build time", mins: 20 },
        { label: "Present", mins: 5 },
        { label: "Wrap-up", mins: 3 }
      ],
      liveDemo: [
        {
          title: "A small interactive widget",
          filename: "widget.html",
          caption: "State in a variable, controls that change it, and one update() that redraws the display.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; text-align: center; padding: 24px; }
    #count { font-size: 48px; }
  </style>
</head>
<body>
  <h1 id="count">0</h1>
  <button id="up">+1</button>
  <button id="down">−1</button>
  <button id="reset">Reset</button>
  <script>
    let value = 0;
    let display = document.getElementById("count");
    function update() { display.textContent = value; }
    document.getElementById("up").addEventListener("click", function () { value = value + 1; update(); });
    document.getElementById("down").addEventListener("click", function () { value = value - 1; update(); });
    document.getElementById("reset").addEventListener("click", function () { value = 0; update(); });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Changing the state but forgetting to redraw.",
        "Duplicating the same code in every handler instead of one update function.",
        "Not testing the reset or the empty case."
      ],
      handout: {
        sections: [
          {
            h: "State, controls, display",
            list: [
              "A variable for the state",
              "Controls that change it",
              "A display element",
              "One function that redraws"
            ]
          },
          {
            h: "Test it",
            body: ["Click every control. Try the edges (start value, reset, zero). Fix anything that looks wrong."]
          }
        ]
      },
      template: {
        filename: "my_widget.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body { font-family: sans-serif; text-align: center; padding: 24px; }
    #count { font-size: 40px; }
  </style>
</head>
<body>
  <h1>My widget</h1>
  <p id="count">0</p>
  <button id="up">+1</button>
  <button id="reset">Reset</button>
  <script>
    let value = 0;
    function update() { document.getElementById("count").textContent = value; }
    document.getElementById("up").addEventListener("click", function () { value = value + 1; update(); });
    document.getElementById("reset").addEventListener("click", function () { value = 0; update(); });
  <\/script>
</body>
</html>`,
        tasks: [
          "Choose a widget idea (counter, scoreboard, colour changer).",
          "Add at least two controls.",
          "Keep the state in a variable and redraw with one function.",
          "Present your widget and explain how its state changes."
        ]
      },
      assessment: [
        {
          track: "A", audience: "Both", title: "Term 2 project rubric", type: "rubric",
          criteria: [
            "Widget runs without errors",
            "React to at least one user action",
            "State is kept in a variable",
            "The display redraws correctly",
            "The student can explain their widget"
          ]
        },
        {
          track: "B", audience: "Both", title: "Design document — interactive widget", type: "form",
          intro: "Complete this before the showcase.",
          fields: [
            { label: "What does your widget do?" },
            { label: "What controls does it have?", lines: 2 },
            { label: "What is its state (which variable)?", lines: 2 }
          ]
        }
      ]
    }
  ];

  // --- Term 3: projects & showcase ---
  unify(weeks[8]); weeks[8].n = 1;
  unify(weeks[9]); weeks[9].n = 10;
  var term3 = [
    weeks[8],
    stub(2, "Project setup", "📁", "motion", "Plan the files, the HTML structure and the JavaScript logic before writing the project."),
    stub(3, "Build: to-do list (part 1)", "✅", "control", "Start the to-do list: add a task and show it in the list."),
    stub(4, "Build: to-do list (part 2)", "✅", "control", "Finish the to-do list: mark tasks done, delete tasks and keep the list in order."),
    stub(5, "Build: calculator", "🧮", "operators", "Build a calculator that reads two numbers and shows the result of an operation."),
    stub(6, "Build: form validator", "🔒", "variables", "Check what the user typed and show helpful messages when a field is not valid."),
    stub(7, "Polish & accessibility", "✨", "looks", "Improve spacing, labels, focus styles and keyboard use so everyone can use the project."),
    stub(8, "Presenting your project", "🎤", "events", "Prepare a short presentation: what it does, how it works and one challenge you solved."),
    stub(9, "Showcase day", "🏆", "sensing", "Present projects to the class and give helpful feedback to classmates."),
    weeks[9]
  ];

  window.WEBDEV_CURRICULUM = {
    slug: "webdev",
    title: "Web Development",
    subject: "Programming",
    length: "3 terms",
    audience: "JSS 3, SS 1 & SS 2",
    prong: "Instructor Guides · Student Handouts · Code Templates · Assessments",
    target: "JSS 3, SS 1 and SS 2 students. No prior JavaScript needed.",
    startingPoint: "Students already know some HTML and CSS. This course adds JavaScript and builds up to a finished mini-project.",
    endGoal: "By the end of Term 3, every student has built and presented a working interactive web page.",
    focus: "Every concept is practised on a page students can run, edit and see working in the browser.",
    philosophy: "Read it, run it, change it. Each week ships a runnable code template so students see the result immediately.",
    tracks: [
      { key: "A", name: "Track A — with system", desc: "Students have laptops. They code along, run the templates, and complete peer pair-check assessments." },
      { key: "B", name: "Track B — no system", desc: "No laptops required. Students work through the handouts and complete written quizzes and design documents." }
    ],
    terms: [
      { n: 1, title: "JavaScript foundations", theme: "motion", weeks: term1 },
      { n: 2, title: "The DOM & interactivity", theme: "sensing", weeks: term2 },
      { n: 3, title: "Projects & showcase", theme: "control", weeks: term3 }
    ]
  };
})();
