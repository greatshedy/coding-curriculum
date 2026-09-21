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

  window.WEBDEV_CURRICULUM = {
    slug: "webdev",
    title: "JavaScript: 10-Week Web Development",
    subject: "Programming",
    length: "10 weeks",
    audience: "Junior & Senior High",
    prong: "Instructor Guides · Student Handouts · Code Templates · Assessments",
    target: "Junior High and Senior High students. No prior JavaScript needed.",
    startingPoint: "Students already know some HTML and CSS. This course adds JavaScript and builds up to a finished mini-project.",
    endGoal: "By Week 10, every student has built and presented a working interactive web page.",
    focus: "Every concept is practised on a page students can run, edit and see working in the browser.",
    philosophy: "Read it, run it, change it. Each week ships a runnable code template so students see the result immediately.",
    tracks: [
      { key: "A", name: "Track A — with system", desc: "Students have laptops. They code along, run the templates, and complete peer pair-check assessments." },
      { key: "B", name: "Track B — no system", desc: "No laptops required. Students work through the handouts and complete written quizzes and design documents." }
    ],
    weeks: weeks
  };
})();
