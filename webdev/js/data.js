/* ============================================================
   data.js — the 3-Term (30-Week) Web Development (JavaScript) curriculum.
   Full classroom package: instructor guides, student handouts,
   runnable code templates and assessments.

   Week shape:
     { n, title, emoji, color, tracks, goal, concept, objective,
       teachingPoints[], timing[],
       liveDemo[{ title, filename, code, caption }],
       commonMistakes[],
       handout: { sections:[ { h, body[], list[], codes[], badge } ] },
       template: { filename, code, core[], stretch[] },
       assessment: [ { track, audience, title, type, ... } ] }

   Weeks not yet authored are created by stub(...) with an empty
   content shape and are filled in follow-up tasks. The reused
   "Meet the DOM" week still carries `variants: { jhs, shs }` at
   source and is flattened by unify().
   ============================================================ */
(function () {
  "use strict";

  var PEER_CHECKLIST = "Peer pair-check";

  var weeks = [
    /* ================================================================ 1 */
    {
      n: 1, title: "Meet JavaScript", emoji: "⚡", color: "motion", concept: "JavaScript is the \"muscles\" that make web pages interactive — HTML builds the page, CSS styles it, and JavaScript makes things happen.",
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
        core: [
          "Save this file as week1_firstname.html",
          "Replace [YOUR NAME HERE] with your actual name",
          "Replace [YOUR AGE] with your actual age",
          "Open the file in a browser",
          "Open the console (F12) and verify you see both messages",
          "Try adding one more console.log() line with your favourite subject",
          "Log a message that says which class you are in, for example \"I am in JSS 3B\"",
          "Note the exact order the messages appear in the console"
        ],
        stretch: [
          "Log your name and age together on one line using +",
          "Add a second script tag and check that both sets of messages still run"
        ]
      },
      assessment: [
        {
          audience: "Both", title: PEER_CHECKLIST, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can the code author explain what their code does, in their own words?",
            "Can you point to the line that uses console.log()?"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
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
      n: 2, title: "Variables & Data Types", emoji: "📦", color: "looks", concept: "A variable is a named box you store information in. This week covers let, const and the three basic data types.",
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
        core: [
          "Replace the placeholders with your own data",
          "Create 3 new variables (one string, one number, one boolean)",
          "Print all 6 variables to the console",
          "Save and verify the console output",
          "Store the price of a snack in Naira as a number (for example 250.50) and print it",
          "Change one let variable after printing it, then print it again to show the new value"
        ],
        stretch: [
          "Try to reassign a const variable, read the error in the console, and explain what it means",
          "Create a variable for your favourite football team and print a sentence that uses it"
        ]
      },
      assessment: [
        {
          audience: "Both", title: PEER_CHECKLIST, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can the code author explain what each variable stores?",
            "Can you identify which variables are strings, numbers and booleans?"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            {
              prompt: "Question 1: What is the difference between let and const? When would you use each?",
              answer: "let creates a variable whose value can be changed later. const creates a variable whose value cannot be reassigned. Use let when the value will change (like a score); use const when it should stay the same (like a fixed name)."
            },
            {
              prompt: "Question 2: Label each of these as a String, Number or Boolean.",
              code:
`let score = 100;
let city = "Abuja";
let isWinner = false;`,
              answer: "let score = 100; → Number\nlet city = \"Abuja\"; → String\nlet isWinner = false; → Boolean"
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
      n: 3, title: "Operators", emoji: "➗", color: "operators", concept: "Arithmetic operators do maths; comparison operators compare two values and return true or false.",
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
        core: [
          "Run the template and read the console output",
          "Change the test scores and predict the new average before you run it",
          "Add a third test score and recalculate the average using all three",
          "Add a check for whether the average is a Grade A (90 or higher)",
          "Work out your average across three subjects and print it",
          "Print whether your average is a pass (50 or more) using a comparison"
        ],
        stretch: [
          "Start with a shopping budget of 5000 Naira, subtract two prices, and print what is left",
          "Add a number stored as text (\"5\" + 1) and explain why the result is different from 5 + 1"
        ]
      },
      assessment: [
        {
          audience: "Both", title: PEER_CHECKLIST, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can the author explain what each operator does?",
            "Can you point to one arithmetic operator and one comparison operator in the code?"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
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
      n: 4, title: "Conditionals (if / else)", emoji: "🔀", color: "events", concept: "An if statement lets your code make decisions: run one block when a condition is true, another when it is false.",
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
        core: [
          "Run the template and check the console",
          "Change userAge to different values and see which branch runs",
          "Complete the grade challenge: 80 or higher prints \"Great job!\", otherwise \"Keep trying!\"",
          "Add a third branch using else if for a middle grade",
          "Decide whether a football score is a win: print \"Win!\" if the goals are more than the opponent's, otherwise \"No win\"",
          "Test at least three different values and note which branch ran each time"
        ],
        stretch: [
          "Write an if / else if / else that prints a letter grade (A, B, C or F) for a score",
          "Check a price in Naira: print \"expensive\" if it is over 10000, otherwise \"affordable\""
        ]
      },
      assessment: [
        {
          audience: "Both", title: PEER_CHECKLIST, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can you explain what the if condition checks?",
            "Can you identify the else block and say when it runs?"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
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
      n: 5, title: "Loops", emoji: "🔁", color: "control", concept: "A for loop repeats code a set number of times, so you don't have to write it out over and over.",
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
        core: [
          "Run the template and count along with the console",
          "Write a loop that counts down from 10 to 1",
          "Write a loop that counts by 5s from 0 to 50",
          "Predict how many lines each loop will print before you run it",
          "Print the multiples of 3 from 3 to 30",
          "Write a loop that prints the numbers 1 to 7, one for each day of the week"
        ],
        stretch: [
          "Use a loop inside a loop to print a small times table for 1 to 3",
          "Add up the numbers 1 to 10 inside a loop and print the total"
        ]
      },
      assessment: [
        {
          audience: "Both", title: PEER_CHECKLIST, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can you explain what the START, CONDITION and STEP parts do?",
            "Can you say how many times the loop will run?"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
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
      n: 6, title: "Functions", emoji: "🧰", color: "sound", concept: "A function is a reusable block of code: write it once, then call it as many times as you like.",
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
        core: [
          "Run the template and check both greetings appear",
          "Write add(a, b) that returns the sum, and print add(4, 6)",
          "Write isOldEnough(age) that returns true when age >= 13",
          "Call one of your functions three times with different values",
          "Write average(a, b, c) that returns the mean of three test scores",
          "Call your average function with your own scores and print the result"
        ],
        stretch: [
          "Write a function that takes a team's goals scored and conceded and returns \"win\", \"draw\" or \"loss\"",
          "Write toNaira(amount) that returns the amount with the Naira sign in front"
        ]
      },
      assessment: [
        {
          audience: "Both", title: PEER_CHECKLIST, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can the author explain what each parameter does?",
            "Can you point to a line that calls the function?"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
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
      n: 7, title: "Arrays (& Objects for SHS)", emoji: "📚", color: "variables", concept: "An array is an ordered list of values. Senior High also learns objects — labelled key–value pairs.",
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
          audience: "Both", title: PEER_CHECKLIST, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can the author explain what the index number means?",
            "Can you point to the .length property or a loop that goes through the array?"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
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
      n: 8, title: "Meet the DOM", emoji: "🌐", color: "sensing", concept: "The DOM is the browser's map of your HTML. JavaScript uses it to find elements and change their text and styles.",
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
  <\/script>
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
<\/script>` }
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
<\/script>` }
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
<\/script>` }
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
  <\/script>
</body>
</html>`,
        core: [
          "Run the template and watch the heading and box change.",
          "Change the background colour to a colour of your choice.",
          "Add a new div with an ID and change its colour and text with JavaScript."
        ],
        stretch: [
          "Break the ID on purpose with a typo, see what happens, then fix it."
        ]
      },
      assessment: [
        {
          audience: "Both", title: PEER_CHECKLIST, type: "checklist",
          items: [
            "Does the code run without errors?",
            "Can you point to the HTML element and the JS that changes it?",
            "Can you see that the page actually changed when you opened it?"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: What does \"DOM\" stand for?", answer: "Document Object Model." },
            { prompt: "Question 2: What does getElementById() do?", answer: "It finds the element with that ID in the page, so JavaScript can read it or change it." },
            {
              prompt: "Question 3 (Code trace): What will happen when this page loads?",
              code:
`<h1 id="heading">Original</h1>
<script>
  document.getElementById("heading").textContent = "Changed!";
<\/script>`,
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
      n: 9, title: "Planning a project", emoji: "🚧", color: "motion", concept: "Junior High build one complete interactive element from start to finish. Senior High plan and start a mini-project.",
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
              audience: "Both", title: "Project requirements checklist", type: "checklist",
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
              audience: "Both", title: "Project requirements checklist", type: "checklist",
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
      n: 10, title: "Recap & next steps", emoji: "🎉", color: "control", concept: "Present your project, take the final recap quiz, and reflect on everything you learned.",
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
              audience: "JHS", title: "Final recap quiz", type: "quiz",
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
              audience: "SHS", title: "Final project design document", type: "form",
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
          audience: "Both", title: "Project showcase rubric", type: "rubric",
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
  function stub(n, title, emoji, color, goal, concept) {
    return {
      n: n, title: title, emoji: emoji, color: color, goal: goal, concept: concept,
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

  // --- Term 1: JavaScript Fundamentals ---
  weeks[0].n = 1; weeks[1].n = 2; weeks[2].n = 3; weeks[3].n = 4; weeks[4].n = 5; weeks[5].n = 6;
  weeks[0].goal = "Write and run your first JavaScript and see it in the browser console.";
  weeks[1].goal = "Store information in variables and print it.";
  weeks[2].goal = "Use operators to do maths and compare values.";
  weeks[3].goal = "Make your program choose between actions with if / else.";
  weeks[4].goal = "Repeat instructions with loops.";
  weeks[5].goal = "Write reusable functions with parameters and return values.";
  weeks[7].goal = "Find elements on the page and change them with JavaScript.";

  var weekArrays = {
      n: 7, title: "Arrays", emoji: "📚", color: "operators", concept: "An array is an ordered list of values. You can add to it, read items by their position, and loop through them.",
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
              { code: `let names = ["Ada", "Chidi", "Amaka"];` }
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
        core: [
          "Print the first and last subject.",
          "Add two more subjects with push().",
          "Loop through and print each subject with a number.",
          "Explain to a partner why the first index is 0, not 1.",
          "Print how many subjects are in the list using .length.",
          "Add your three best subjects and print the one in the middle."
        ],
        stretch: [
          "Build an array of your class's top five scores and print only the scores above 70.",
          "Try unshift() to add a subject at the start and see where it appears."
        ]
      },
      assessment: [
        {
          audience: "Both", title: PEER_CHECKLIST, type: "checklist",
          items: [
            "The array logs correct values",
            "push() adds an item",
            "the loop prints each item once"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Write an array of three colours.", answer: "let colours = [\"red\", \"green\", \"blue\"];" },
            { prompt: "Question 2: What does colours.length give you?", answer: "The number of items in the array." },
            { prompt: "Question 3: How do you read the first item of an array called names?", answer: "names[0]" }
          ]
        }
      ]
  };
  weekArrays.goal = "Store a list of values in an array and loop through them.";

  var weekObjects = {
      n: 8, title: "Objects", emoji: "🧩", color: "looks", concept: "An object stores labelled values — each item has a key and a value. Objects model real things, like a student with a name and a score.",
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
        core: [
          "Fill in your own details.",
          "Add a new key called favouriteFood.",
          "Print every value with its label.",
          "Explain to a partner the difference between an array and an object.",
          "Add a key called team and set it to your favourite football club.",
          "Change the age in your object and print it again."
        ],
        stretch: [
          "Create an object for a classmate with name, subject and score, then print a sentence using all three.",
          "Try reading a key that does not exist and see what prints."
        ]
      },
      assessment: [
        {
          audience: "Both", title: PEER_CHECKLIST, type: "checklist",
          items: [
            "The object logs correct values",
            "dot notation works",
            "a new key was added"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            { prompt: "Question 1: Write an object with keys name and score.", answer: "let player = { name: \"Ada\", score: 10 };" },
            { prompt: "Question 2: How do you read the name from an object called player?", answer: "player.name" },
            { prompt: "Question 3: What is the difference between an array and an object?", answer: "An array is an ordered list read by number; an object is a set of labelled values read by key." }
          ]
        }
      ]
  };
  weekObjects.goal = "Store labelled values in an object and read them by key.";

  var term1 = [
    weeks[0], weeks[1], weeks[2], weeks[3], weeks[4], weeks[5],
    weekArrays, weekObjects,
    {
      n: 9, title: "Project: build a game", emoji: "🎮", color: "events", goal: "Build a small game that takes a choice and decides a winner.",
      concept: "Combine variables, conditionals and functions to build a playable game.",
      objective: "Students build a small console game using variables, conditionals and functions.",
      teachingPoints: [
        "A game needs a secret value, a player's move and a result.",
        "Conditionals decide the outcome — win, lose or draw.",
        "Functions keep the game logic tidy and easy to reuse."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a guessing game", mins: 4 },
        { label: "Build time", mins: 20 },
        { label: "Present", mins: 5 },
        { label: "Share & wrap-up", mins: 3 }
      ],
      liveDemo: [
        {
          title: "A number-guessing game",
          filename: "guessing_game.html",
          caption: "Change the guess and press Run to see the console change. The secret stays 7.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <h1>Guess the number (1–10)</h1>
  <script>
    let secret = 7;
    let guess = 4;
    if (guess === secret) {
      console.log("Correct!");
    } else if (guess < secret) {
      console.log("Too low.");
    } else {
      console.log("Too high.");
    }
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Using one = instead of === in the comparison, which assigns a value instead of checking it.",
        "Forgetting that input read with prompt() is text, so \"7\" never equals the number 7 — convert it with Number().",
        "Checking the wrong branch, such as logging \"Too high\" when the guess is lower than the secret."
      ],
      handout: {
        sections: [
          {
            h: "Plan your game",
            body: ["Before you build, decide the four parts of your game and write them down."],
            list: [
              "The secret — what the player is trying to find or beat",
              "The player's move — the value the player gives each turn",
              "The rule — how the secret and the move are compared",
              "The result — what the game prints for a win, a loss or a draw"
            ]
          },
          {
            h: "Rock Paper Scissors idea",
            body: [
              "Store the computer's choice and the player's choice as strings, then compare them.",
              "If both choices are the same it is a draw. Otherwise rock beats scissors, scissors beats paper and paper beats rock."
            ],
            codes: [
              { label: "Compare two choices", code:
`let computer = "rock";
let player = "scissors";

if (computer === player) {
  console.log("Draw!");
} else if (computer === "rock" && player === "scissors") {
  console.log("Computer wins!");
} else {
  console.log("Player wins!");
}` }
            ]
          },
          {
            h: "Number guessing idea",
            body: ["Pick a secret number, then log whether the guess is too low, too high or correct."],
            codes: [
              { label: "Decide the result", code:
`let secret = 7;
let guess = 4;

if (guess === secret) {
  console.log("Correct!");
} else if (guess < secret) {
  console.log("Too low.");
} else {
  console.log("Too high.");
}` }
            ]
          }
        ]
      },
      template: {
        filename: "my_game.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <h1>My Guessing Game</h1>
  <script>
    // 1. Set the secret number
    let secret = 6;

    // 2. The player's guess
    let guess = 3;

    // 3. Decide the result
    if (guess === secret) {
      console.log("Correct! You win.");
    } else if (guess < secret) {
      console.log("Too low. Try again.");
    } else {
      console.log("Too high. Try again.");
    }
  <\/script>
</body>
</html>`,
        core: [
          "Set a secret number between 1 and 10.",
          "Set a guess and log whether it is too low, too high or correct.",
          "Change the guess and run it again to test all three branches.",
          "Wrap the decision in a function called checkGuess(guess) and call it."
        ],
        stretch: [
          "Loop through several guesses in an array and check each one.",
          "Make the secret random with let secret = Math.floor(Math.random() * 10) + 1; and play again."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Game checklist", type: "checklist",
          items: [
            "The game runs without errors",
            "The game uses at least one conditional",
            "The game uses at least one function",
            "The student can explain what happens in each branch"
          ]
        },
        {
          audience: "Both", title: "Written quiz", type: "quiz",
          questions: [
            {
              prompt: "Question 1: In your game, what does the secret value represent?",
              answer: "The secret is the value the player is trying to find or beat. In the guessing game it is the hidden number the guesses are compared against."
            },
            {
              prompt: "Question 2: Why do we use === instead of = when comparing the guess and the secret?",
              answer: "=== compares two values and returns true or false. A single = assigns a value, so it would overwrite the secret instead of checking it."
            },
            {
              prompt: "Question 3 (Code trace): What will print?",
              code:
`let secret = 7;
let guess = 9;

if (guess === secret) {
  console.log("Correct!");
} else if (guess < secret) {
  console.log("Too low.");
} else {
  console.log("Too high.");
}`,
              answer: "Too high."
            },
            {
              prompt: "Question 4: Why is it useful to put the win/lose decision inside a function?",
              answer: "The function keeps the logic in one place, gives it a clear name, and can be called again for each new guess without repeating the code."
            }
          ]
        }
      ]
    },
    {
      n: 10, title: "Revision, assessment, showcase", emoji: "🎉", color: "control", goal: "Review Term 1 and show what you can build.",
      concept: "Recap the core ideas and present a project.",
      objective: "Review Term 1 and present a project.",
      teachingPoints: [
        "Revise variables, operators, conditionals, loops, functions, arrays and objects.",
        "Present your work to the class and explain your code.",
        "Reflect on what you learned and what you want to try next."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Recap of Term 1 skills", mins: 8 },
        { label: "Presentations", mins: 18 },
        { label: "Feedback", mins: 4 },
        { label: "Share & wrap-up", mins: 2 }
      ],
      liveDemo: [
        {
          title: "A recap script",
          filename: "recap_js.html",
          caption: "One variable, an array, a loop and a function working together to find a class average. Change a score and run it again.",
          code:
`<!DOCTYPE html>
<html>
<body>
  <h1>Term 1 Recap</h1>
  <script>
    let classScores = [72, 58, 90, 65];

    function average(scores) {
      let total = 0;
      for (let i = 0; i < scores.length; i++) {
        total = total + scores[i];
      }
      return total / scores.length;
    }

    console.log("Class average: " + average(classScores));
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Not testing before presenting, so an error shows up in front of the class. Run it once more before you present.",
        "Being unable to explain a line of your own code. Read each line aloud and say what it does.",
        "Skipping the live demo. The working example is the strongest part of the presentation."
      ],
      handout: {
        sections: [
          {
            h: "Term 1 recap",
            body: ["Check that you can do each of these before the showcase:"],
            list: [
              "Create variables with let and const, and name the three data types",
              "Use arithmetic and comparison operators, including ===",
              "Write if / else if / else to choose between actions",
              "Repeat code with a for loop",
              "Write functions with parameters and a return value",
              "Store values in arrays and objects and read them back"
            ]
          },
          {
            h: "Presentation script",
            body: ["Use these prompts to plan what you will say as you present:"],
            list: [
              "Introduce your project in one sentence — what does it do?",
              "Show it running and point out one thing that works well",
              "Explain one line of your code in your own words",
              "Name one challenge you met and how you solved it",
              "Say what you would add next if you had more time"
            ]
          }
        ]
      },
      template: {
        filename: "recap_js.html",
        code:
`<!DOCTYPE html>
<html>
<body>
  <h1>Fix me</h1>
  <script>
    let subjects = ["Maths", "English", "Science"];

    // BUG: this loop runs one time too many and prints undefined at the end
    for (let i = 0; i <= subjects.length; i++) {
      console.log(subjects[i]);
    }

    // TODO: turn the repeated logging into a function called printSubjects(list)
  <\/script>
</body>
</html>`,
        core: [
          "Find and fix the bug so the loop prints each subject once.",
          "Use an array and a loop to log each item.",
          "Add a second array of scores and print each subject with its score."
        ],
        stretch: [
          "Turn the repeated logging into a function called printSubjects(list).",
          "Write a function that returns the highest score from a list of scores."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Final recap quiz", type: "quiz",
          questions: [
            {
              prompt: "Question 1: What is the difference between let and const?",
              answer: "let creates a variable whose value can be reassigned. const creates a variable whose value cannot be reassigned."
            },
            {
              prompt: "Question 2: What does === check, and why is it better than = for comparisons?",
              answer: "=== compares two values and returns true or false. A single = assigns a value, so it does not compare at all."
            },
            {
              prompt: "Question 3: How many times does this loop run, and what values does i take?",
              code:
`for (let i = 0; i < 4; i++) {
  console.log(i);
}`,
              answer: "It runs 4 times, with i taking the values 0, 1, 2 and 3."
            },
            {
              prompt: "Question 4: What is the index of the first item in an array, and how do you read it?",
              answer: "The first index is 0. If the array is called scores, you read it with scores[0]."
            },
            {
              prompt: "Question 5: What does the return keyword do inside a function?",
              answer: "It sends a value back out of the function to the place where the function was called."
            }
          ]
        }
      ]
    }
  ];

  // --- Term 2: The DOM, Events and Interactive Pages ---
  unify(weeks[7]); weeks[7].n = 1;
  var term2 = [
    weeks[7],
    {
      n: 2, title: "Changing text, styles and classes", emoji: "✏️", color: "sensing", goal: "Change an element's text, style and classes from JavaScript.",
      concept: "Change what an element says and how it looks using textContent, style and classes.",
      objective: "Students can change an element's text, one style at a time and its CSS classes from JavaScript.",
      teachingPoints: [
        "textContent changes the text inside an element.",
        "element.style.<prop> changes one style, written in camelCase (backgroundColor, not background-color).",
        "classList.add, classList.remove and classList.toggle switch whole CSS classes — keep styles in CSS where you can."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: change text, style and class", mins: 5 },
        { label: "textContent, style and classList", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Change the page with a button",
          filename: "change.html",
          caption: "Open the page and click the button: the heading text changes and a dark class is toggled on the body. Click again to switch the class off.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 2: Change text, styles and classes</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .dark { background-color: #1f2a44; color: #ffffff; }
    #box { width: 120px; height: 120px; background-color: gold; margin-top: 12px; }
  </style>
</head>
<body>
  <h1 id="title">Hello, welcome!</h1>
  <button id="changeBtn">Change the page</button>
  <div id="box"></div>

  <script>
    var title = document.getElementById("title");

    document.getElementById("changeBtn").addEventListener("click", function () {
      // Change the text
      title.textContent = "You changed the text!";

      // Toggle a whole class instead of one style at a time
      document.body.classList.toggle("dark");
    });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Writing a CSS style in kebab-case. In JavaScript it is camelCase: use style.backgroundColor, not style.background-color.",
        "Setting many individual styles in JavaScript when one CSS class would be tidier. Prefer classList.toggle and keep the styles in CSS.",
        "A typo in the id. \"titel\" will never match \"title\", and getElementById returns null."
      ],
      handout: {
        sections: [
          {
            h: "Change text",
            body: ["textContent replaces everything inside an element with the text you give it."],
            codes: [
              { label: "change.html", code: `document.getElementById("title").textContent = "New title";` }
            ]
          },
          {
            h: "Change style (camelCase)",
            body: ["Set one style directly on the element. CSS kebab-case becomes camelCase in JavaScript."],
            codes: [
              { code: `el.style.backgroundColor = "seagreen";\nel.style.fontSize = "28px";` }
            ]
          },
          {
            h: "Toggle a class",
            body: ["Keep your styles in CSS, then switch a class on or off from JavaScript."],
            codes: [
              { code: `el.classList.toggle("dark");` }
            ]
          }
        ]
      },
      template: {
        filename: "change.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 2: Change text, styles and classes</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .dark { background-color: #1f2a44; color: #ffffff; }
    #box { width: 120px; height: 120px; background-color: gold; }
  </style>
</head>
<body>
  <h1 id="title">Change me</h1>
  <button id="changeBtn">Go</button>
  <div id="box"></div>

  <script>
    document.getElementById("changeBtn").addEventListener("click", function () {
      // 1. Change the heading text with textContent
      document.getElementById("title").textContent = "Changed!";

      // 2. Change one style in camelCase
      document.getElementById("box").style.backgroundColor = "seagreen";

      // 3. Toggle a class on the page
      document.body.classList.toggle("dark");
    });
  <\/script>
</body>
</html>`,
        core: [
          "Change the heading text to your own message with textContent.",
          "Toggle the dark class on and off with classList.toggle().",
          "Change the box colour using style.backgroundColor."
        ],
        stretch: [
          "Toggle the dark class on the whole body so the whole page changes theme.",
          "Add a second class called big to the heading and switch it on."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: Which property changes the text inside an element?", answer: "textContent." },
            { prompt: "Question 2: How do you write the CSS property background-color as a JavaScript style property?", answer: "backgroundColor — it is camelCase, with no hyphen." },
            { prompt: "Question 3: Which classList method adds a class if it is missing and removes it if it is already there?", answer: "classList.toggle()." }
          ]
        }
      ]
    },
    {
      n: 3, title: "Creating and removing elements", emoji: "➕", color: "looks", goal: "Add new elements and remove ones you no longer need.",
      concept: "Build new elements in code and add or remove them from the page.",
      objective: "Students can create an element, fill it, add it to the page and remove it again.",
      teachingPoints: [
        "document.createElement() makes a new element that is not on the page yet.",
        "appendChild() puts an element inside a parent that is already on the page.",
        "element.remove() takes an element off the page; fill text with textContent."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: add and delete list items", mins: 5 },
        { label: "createElement, appendChild and remove", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A class list you can add to and delete from",
          filename: "add_remove.html",
          caption: "Every student becomes a new li built in JavaScript. The delete button uses the click events you will meet properly next week.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 3: Creating and removing elements</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    li { margin: 6px 0; }
    button { margin-left: 8px; }
  </style>
</head>
<body>
  <h1>My class list</h1>
  <button id="addBtn">Add a student</button>
  <ul id="list"></ul>

  <script>
    var students = ["Ada", "Chidi", "Amaka"];
    var list = document.getElementById("list");

    function addStudent(name) {
      var item = document.createElement("li");
      item.textContent = name;

      var del = document.createElement("button");
      del.textContent = "Delete";
      del.addEventListener("click", function () {
        item.remove();
      });

      item.appendChild(del);
      list.appendChild(item);
    }

    students.forEach(function (name) {
      addStudent(name);
    });

    document.getElementById("addBtn").addEventListener("click", function () {
      addStudent("New student");
    });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Creating an element but never appending it. If you do not call appendChild, the element exists only in memory and never appears on the page.",
        "Removing the wrong element, for example removing a parent when you meant to remove one item.",
        "Appending to the wrong parent, such as adding an li straight to the body instead of the ul."
      ],
      handout: {
        sections: [
          {
            h: "Create, fill and append",
            body: ["Create the element, set its text, then append it to a parent that is already on the page."],
            list: [
              "document.createElement(\"li\") makes the element but does not show it yet.",
              "item.textContent = \"Ada\" fills it with text.",
              "list.appendChild(item) adds it to the page."
            ],
            codes: [
              { code: `var item = document.createElement("li");\nitem.textContent = "Ada";\nlist.appendChild(item);` }
            ]
          },
          {
            h: "Remove",
            body: ["Call remove() on the element you want to take off the page."],
            codes: [
              { code: `item.remove();` }
            ]
          }
        ]
      },
      template: {
        filename: "add_remove.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 3: Add and remove list items</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    li { margin: 6px 0; }
    button { margin-left: 8px; }
  </style>
</head>
<body>
  <h1>My to-do list</h1>
  <button id="addBtn">Add an item</button>
  <ul id="list"></ul>

  <script>
    var count = 0;
    var list = document.getElementById("list");

    function addItem() {
      count = count + 1;

      // 1. Create a new li
      var item = document.createElement("li");
      item.textContent = "Item " + count;

      // 2. Create a Delete button for it
      var del = document.createElement("button");
      del.textContent = "Delete";
      del.addEventListener("click", function () {
        item.remove();
      });
      item.appendChild(del);

      // 3. Append the li to the list
      list.appendChild(item);
    }

    document.getElementById("addBtn").addEventListener("click", addItem);

    // STRETCH: add a Clear all button that removes every item
  <\/script>
</body>
</html>`,
        core: [
          "Click Add an item and watch each new li appear.",
          "Give each item a Delete button that calls item.remove().",
          "Remove one item and check the others stay."
        ],
        stretch: [
          "Add a Clear all button that removes every item from the list.",
          "Add an input so you can type the text for each new item."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: Which method creates a new element in memory?", answer: "document.createElement()." },
            { prompt: "Question 2: Which method adds a created element to a parent on the page?", answer: "parent.appendChild(element)." },
            { prompt: "Question 3: How do you remove an element from the page?", answer: "element.remove()." }
          ]
        }
      ]
    },
    {
      n: 4, title: "Events: click, input, mouse, keyboard", emoji: "🖱️", color: "events", goal: "Make the page respond to clicks, typing and key presses.",
      concept: "Use event listeners to react to what the user does.",
      objective: "Students can attach event listeners for clicks, typing, the mouse and the keyboard.",
      teachingPoints: [
        "addEventListener(type, handler) runs the handler when that event happens on the element.",
        "Pass the handler without brackets — btn.addEventListener(\"click\", sayHi), not sayHi().",
        "The event object carries the details: event.target is the element and event.key is the key pressed."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: click and input", mins: 5 },
        { label: "addEventListener and the event object", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A click counter and a live echo",
          filename: "events.html",
          caption: "Click the button to count, then type in the box: the input event fires on every keystroke and the page updates as you type.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 4: Events</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    #count { font-size: 40px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Click and type</h1>
  <button id="clickBtn">Click me</button>
  <p>You clicked <span id="count">0</span> times.</p>

  <input id="nameInput" placeholder="Type your name" />
  <p>Hello, <span id="echo">…</span></p>

  <script>
    var total = 0;

    document.getElementById("clickBtn").addEventListener("click", function () {
      total = total + 1;
      document.getElementById("count").textContent = total;
    });

    document.getElementById("nameInput").addEventListener("input", function (event) {
      document.getElementById("echo").textContent = event.target.value || "…";
    });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Calling the handler with brackets. addEventListener(\"click\", sayHi) passes the function; sayHi() would run it once immediately and pass its result.",
        "Listening on the wrong element, so the event never fires. Check that the id you attached to is the id in the HTML.",
        "Using the change event when you want a live update. Use input so it fires on every keystroke."
      ],
      handout: {
        sections: [
          {
            h: "Listening for events",
            body: ["addEventListener takes the event name and the function to run when that event happens."],
            codes: [
              { code: `button.addEventListener("click", function () {\n  console.log("Clicked!");\n});` }
            ]
          },
          {
            h: "The event object",
            body: ["The handler receives an event object with details about what happened."],
            codes: [
              { code: `input.addEventListener("keydown", function (event) {\n  console.log(event.key);     // the key that was pressed\n  console.log(event.target);  // the element it happened on\n});` }
            ]
          },
          {
            h: "input events",
            body: ["Use the input event, not change, when you want to react while the user is still typing."],
            codes: [
              { code: `input.addEventListener("input", function (event) {\n  preview.textContent = event.target.value;\n});` }
            ]
          }
        ]
      },
      template: {
        filename: "events.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 4: Events practice</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    #count { font-size: 40px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Events practice</h1>
  <button id="clickBtn">Click me</button>
  <p>Count: <span id="count">0</span></p>

  <input id="nameInput" placeholder="Type here" />
  <p id="echo">…</p>

  <script>
    var total = 0;

    // 1. A click counter
    document.getElementById("clickBtn").addEventListener("click", function () {
      total = total + 1;
      document.getElementById("count").textContent = total;
    });

    // 2. Echo what the user types
    document.getElementById("nameInput").addEventListener("input", function (event) {
      document.getElementById("echo").textContent = event.target.value;
    });

    // 3. TODO: add a keydown listener that shows which key was pressed
  <\/script>
</body>
</html>`,
        core: [
          "Make the click counter count up every time the button is clicked.",
          "Echo the input value into the page as the user types.",
          "Add a keydown listener that shows the last key pressed."
        ],
        stretch: [
          "Add three colour buttons and change the page background from one handler.",
          "Log the event type of every event you listen for."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: Which method attaches a handler to an event?", answer: "addEventListener()." },
            { prompt: "Question 2: Why do you write the handler without brackets?", answer: "Without brackets you pass the function itself, so it runs later when the event happens. With brackets it would run straight away." },
            { prompt: "Question 3: Which event fires on every keystroke as the user types?", answer: "the input event." }
          ]
        }
      ]
    },
    {
      n: 5, title: "Forms and validation", emoji: "📝", color: "variables", goal: "Read form values and check what the user typed.",
      concept: "Read values from a form and validate them before you use them.",
      objective: "Students can read form values, stop the default submit and validate the input before accepting it.",
      teachingPoints: [
        "Read the text a user typed with input.value.",
        "Handle the form's submit event and call event.preventDefault() to stop the page reloading.",
        "Validate one rule at a time (not empty, then a valid @) and show a clear message."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a sign-up form", mins: 5 },
        { label: "value, preventDefault and validation", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A sign-up form with validation",
          filename: "validate.html",
          caption: "Press Sign up with an empty name, then with an email that has no @, then with both filled in. The page never reloads because of preventDefault.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 5: Forms and validation</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .error { color: #b00020; }
    .ok { color: #1b7f3b; }
  </style>
</head>
<body>
  <h1>Sign up</h1>
  <form id="signup">
    <p><label>Name<br /><input id="name" /></label></p>
    <p><label>Email<br /><input id="email" /></label></p>
    <button type="submit">Sign up</button>
  </form>
  <p id="message"></p>

  <script>
    var form = document.getElementById("signup");
    var message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;

      if (name === "") {
        message.className = "error";
        message.textContent = "Please type your name.";
        return;
      }

      if (email.indexOf("@") === -1) {
        message.className = "error";
        message.textContent = "Please type a valid email with an @.";
        return;
      }

      message.className = "ok";
      message.textContent = "Thank you, " + name + "!";
    });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Reading input.value on page load, before the user has typed anything. Read the value inside the submit handler, when the user has finished typing.",
        "Forgetting event.preventDefault(), so the browser reloads the page and your message disappears.",
        "Showing every error at once. Check one rule, show one message, and return before checking the next."
      ],
      handout: {
        sections: [
          {
            h: "Read the value",
            body: ["Every input has a value property holding the text the user typed."],
            codes: [
              { code: `var name = document.getElementById("name").value;` }
            ]
          },
          {
            h: "Validate one rule at a time",
            body: ["Check the first rule and return early; only when one rule passes do you check the next."],
            codes: [
              { code: `if (name === "") {\n  showError("Please type your name.");\n  return;\n}` }
            ]
          },
          {
            h: "preventDefault",
            body: ["A form tries to reload the page when it is submitted. Stop it with preventDefault."],
            codes: [
              { code: `form.addEventListener("submit", function (event) {\n  event.preventDefault();\n  // now validate safely\n});` }
            ]
          }
        ]
      },
      template: {
        filename: "validate.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 5: Validate a form</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .error { color: #b00020; }
    .ok { color: #1b7f3b; }
  </style>
</head>
<body>
  <h1>Sign up</h1>
  <form id="signup">
    <p><label>Name<br /><input id="name" /></label></p>
    <p><label>Email<br /><input id="email" /></label></p>
    <button type="submit">Sign up</button>
  </form>
  <p id="message"></p>

  <script>
    document.getElementById("signup").addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message");

      // 1. TODO: if the name is empty, show an error and return

      // 2. TODO: if the email has no "@", show an error and return

      // 3. TODO: otherwise show a success message with the name
    });
  <\/script>
</body>
</html>`,
        core: [
          "Stop the page reloading with event.preventDefault().",
          "Show an error when the name is empty.",
          "Show an error when the email has no @, and a success message when both are valid."
        ],
        stretch: [
          "Also check that the name is at least three characters long.",
          "Disable the sign-up button until both fields have something in them."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: Which property holds the text a user typed into an input?", answer: "input.value." },
            { prompt: "Question 2: Why call event.preventDefault() in a submit handler?", answer: "To stop the browser reloading the page (its default behaviour) so your JavaScript can handle the form." },
            { prompt: "Question 3: Why show one error at a time?", answer: "It is clearer for the user: they fix the first problem, then see the next, instead of facing a wall of errors." }
          ]
        }
      ]
    },
    {
      n: 6, title: "Event handling patterns, including delegation", emoji: "🧭", color: "sensing", goal: "Handle events on many elements with one listener.",
      concept: "Use event delegation so one listener can handle a whole group of elements.",
      objective: "Students can handle events on many elements with one listener using event delegation and closest().",
      teachingPoints: [
        "One listener on a parent can handle events from all its children — that is event delegation.",
        "event.target is the element that was actually clicked; closest() walks up to a matching ancestor.",
        "Delegation keeps code short and still works for items added later."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: one handler, many items", mins: 5 },
        { label: "Delegation and closest()", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "One click handler for the whole list",
          filename: "delegation.html",
          caption: "Click any team to mark it done. Add a team and click it too: the same single listener on the ul handles items that did not exist when the page loaded.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 6: Event delegation</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    li { padding: 6px; cursor: pointer; }
    li.done { text-decoration: line-through; color: #888; }
  </style>
</head>
<body>
  <h1>Teams</h1>
  <ul id="list">
    <li>Super Eagles</li>
    <li>Enyimba</li>
    <li>Kano Pillars</li>
  </ul>
  <button id="addBtn">Add a team</button>

  <script>
    var list = document.getElementById("list");

    // ONE listener on the parent handles every item, now and in the future
    list.addEventListener("click", function (event) {
      var item = event.target.closest("li");
      if (!item) return;
      item.classList.toggle("done");
    });

    document.getElementById("addBtn").addEventListener("click", function () {
      var item = document.createElement("li");
      item.textContent = "New team";
      list.appendChild(item);
    });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Adding a listener to every item instead of the parent. The parent listener is shorter and automatically covers new items.",
        "Forgetting that event.target can be a child of the item. Use event.target.closest(\"li\") to find the item itself.",
        "Attaching the listener to the parent before the parent exists. Put the script after the HTML, as always."
      ],
      handout: {
        sections: [
          {
            h: "One handler, many items",
            body: ["Put a single listener on the parent. Events from the children bubble up to it."],
            codes: [
              { code: `list.addEventListener("click", function (event) {\n  var item = event.target.closest("li");\n  if (item) item.classList.toggle("done");\n});` }
            ]
          },
          {
            h: "closest()",
            body: ["event.target is the exact element that was clicked. closest() walks up the page to the nearest ancestor that matches a selector."],
            codes: [
              { code: `event.target.closest("li");\nevent.target.closest("button.delete");` }
            ]
          }
        ]
      },
      template: {
        filename: "delegation.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 6: Event delegation</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    li { padding: 6px; cursor: pointer; }
    li.done { text-decoration: line-through; color: #888; }
    li button { margin-left: 8px; }
  </style>
</head>
<body>
  <h1>Teams</h1>
  <ul id="list">
    <li>Super Eagles <button class="delete">Delete</button></li>
    <li>Enyimba <button class="delete">Delete</button></li>
    <li>Kano Pillars <button class="delete">Delete</button></li>
  </ul>
  <button id="addBtn">Add a team</button>

  <script>
    var list = document.getElementById("list");

    // CORE: one listener on the parent handles every item
    list.addEventListener("click", function (event) {
      var item = event.target.closest("li");
      if (!item) return;
      item.classList.toggle("done");

      // STRETCH: also handle the Delete button inside each item
      // if (event.target.classList.contains("delete")) {
      //   item.remove();
      // }
    });

    // STRETCH: add a new item and check the same handler works on it
    document.getElementById("addBtn").addEventListener("click", function () {
      var item = document.createElement("li");
      item.textContent = "New team ";
      var del = document.createElement("button");
      del.className = "delete";
      del.textContent = "Delete";
      item.appendChild(del);
      list.appendChild(item);
    });
  <\/script>
</body>
</html>`,
        core: [
          "Add one click listener on the ul, not on each li.",
          "Use event.target.closest(\"li\") to find the clicked item and toggle the done class on it."
        ],
        stretch: [
          "Uncomment the code that removes an item when its Delete button is clicked.",
          "Add new items and confirm the same parent handler still works on them."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: What is event delegation?", answer: "Attaching one listener to a parent element and letting it handle events that bubble up from its children." },
            { prompt: "Question 2: Why is delegation good for lists?", answer: "One listener covers every item, including items added later, so you write less code and do not rebind on each new item." },
            { prompt: "Question 3: Which method finds the ancestor element that matches a selector?", answer: "closest()." }
          ]
        }
      ]
    },
    {
      n: 7, title: "Timers and localStorage", emoji: "⏱️", color: "operators", goal: "Run code on a schedule and save data in the browser.",
      concept: "Use timers to run code later and localStorage to remember data.",
      objective: "Students can run code on a timer and save and load data with localStorage.",
      teachingPoints: [
        "setTimeout runs once; setInterval repeats every N milliseconds — keep the id so you can clearInterval it.",
        "localStorage.setItem(key, value) saves and getItem(key) reads back; values are always strings.",
        "Save arrays and objects by turning them into text with JSON.stringify and back with JSON.parse."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a countdown and saved data", mins: 5 },
        { label: "setInterval, clearInterval and localStorage", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A countdown and a remembered name",
          filename: "timer_store.html",
          caption: "Start the countdown and stop it part-way. Type a name and Save, then reload the page: the name is read back from localStorage.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 7: Timers and localStorage</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    #count { font-size: 40px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Countdown</h1>
  <p id="count">10</p>
  <button id="startBtn">Start</button>
  <button id="stopBtn">Stop</button>

  <h2>Your name is remembered</h2>
  <input id="nameInput" placeholder="Type your name" />
  <button id="saveBtn">Save</button>
  <p id="saved"></p>

  <script>
    var seconds = 10;
    var timerId = null;

    document.getElementById("startBtn").addEventListener("click", function () {
      if (timerId !== null) return; // already running
      timerId = setInterval(function () {
        seconds = seconds - 1;
        document.getElementById("count").textContent = seconds;
        if (seconds <= 0) {
          clearInterval(timerId);
          timerId = null;
          document.getElementById("count").textContent = "Time up!";
        }
      }, 1000); // 1000 milliseconds = 1 second
    });

    document.getElementById("stopBtn").addEventListener("click", function () {
      clearInterval(timerId);
      timerId = null;
    });

    document.getElementById("saveBtn").addEventListener("click", function () {
      var name = document.getElementById("nameInput").value;
      localStorage.setItem("savedName", name);
      showSaved();
    });

    function showSaved() {
      var name = localStorage.getItem("savedName");
      document.getElementById("saved").textContent = name ? "Hello again, " + name + "!" : "";
    }

    showSaved(); // read the value back when the page loads
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Mixing up milliseconds and seconds. setInterval wants milliseconds, so one second is 1000, not 1.",
        "Losing the interval id. Keep the value setInterval returns in a variable so you can pass it to clearInterval.",
        "Forgetting that localStorage stores strings. Numbers and objects come back as text unless you convert them."
      ],
      handout: {
        sections: [
          {
            h: "Timers",
            body: ["setTimeout runs once after a delay; setInterval repeats until you stop it. Times are in milliseconds, so 1000 is one second."],
            codes: [
              { code: `setTimeout(function () {\n  console.log("One second later");\n}, 1000);\n\nvar id = setInterval(tick, 1000);\nclearInterval(id);` }
            ]
          },
          {
            h: "Saving data",
            body: ["localStorage keeps data in the browser. Everything is stored as a string."],
            codes: [
              { code: `localStorage.setItem("name", "Ada");\nvar name = localStorage.getItem("name");` }
            ]
          },
          {
            h: "Saving an array",
            body: ["Turn an array into JSON text to save it, and parse the text to get the array back."],
            codes: [
              { code: `var teams = ["Super Eagles", "Enyimba"];\nlocalStorage.setItem("teams", JSON.stringify(teams));\n\nvar saved = JSON.parse(localStorage.getItem("teams"));` }
            ]
          }
        ]
      },
      template: {
        filename: "timer_store.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 7: Timers and localStorage</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    #count { font-size: 40px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Countdown</h1>
  <p id="count">10</p>
  <button id="startBtn">Start</button>
  <button id="stopBtn">Stop</button>

  <h2>Save your name</h2>
  <input id="nameInput" placeholder="Type your name" />
  <button id="saveBtn">Save</button>
  <p id="saved"></p>
  <p id="note"></p>

  <script>
    var seconds = 10;
    var timerId = null;

    // 1. TODO: start the countdown with setInterval (1000 ms = 1 second)
    //    when it reaches 0, stop it with clearInterval

    // 2. TODO: stop the countdown with clearInterval when Stop is clicked

    // 3. TODO: save the input value with localStorage.setItem,
    //    then read it back with getItem and show it in #saved
  <\/script>
</body>
</html>`,
        core: [
          "Build the countdown so it starts at 10 and goes down once per second.",
          "Stop the countdown with the Stop button using clearInterval.",
          "Save a name with localStorage.setItem and read it back with getItem."
        ],
        stretch: [
          "Save a list of names as an array, using JSON.stringify to store it and JSON.parse to read it back.",
          "Show a small \"Saved!\" note for a moment after saving."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: Which timer repeats, and which one runs once?", answer: "setInterval repeats; setTimeout runs once." },
            { prompt: "Question 2: How do you stop a repeating timer?", answer: "Save the id that setInterval returns, then call clearInterval(id)." },
            { prompt: "Question 3: How do you save an array in localStorage?", answer: "Turn it into a string with JSON.stringify, store the string, and use JSON.parse when you read it back." }
          ]
        }
      ]
    },
    {
      n: 8, title: "Modern syntax (arrow functions, template literals, destructuring, map/filter)", emoji: "✨", color: "motion", goal: "Use modern JavaScript syntax to write cleaner code.",
      concept: "Write shorter code with arrow functions, template literals, destructuring and array methods.",
      objective: "Students can use arrow functions, template literals, destructuring and map/filter to write cleaner code.",
      teachingPoints: [
        "An arrow function is a shorter way to write a function: (x) => x + 1.",
        "Template literals use backticks and ${...} to drop values into a string.",
        "Destructuring pulls values out of objects and arrays; map and filter always return a new array."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: refactor older code", mins: 5 },
        { label: "Arrows, template literals, destructuring, map/filter", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Refactoring old code with modern syntax",
          filename: "modern.html",
          caption: "The same job as last week, written shorter: an arrow function, destructuring in the parameter, filter and a template literal.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 8: Modern syntax</title>
</head>
<body>
  <h1>Students who passed</h1>
  <ul id="list"></ul>

  <script>
    var students = [
      { name: "Ada", score: 82 },
      { name: "Chidi", score: 58 },
      { name: "Amaka", score: 91 },
      { name: "Tunde", score: 47 }
    ];

    // Old way: students.filter(function (student) { return student.score >= 60; })
    var passed = students.filter((student) => student.score >= 60);

    var list = document.getElementById("list");

    // Destructuring in the parameter, and a template literal
    passed.forEach(({ name, score }) => {
      var item = document.createElement("li");
      item.textContent = \`\${name} scored \${score}\`;
      list.appendChild(item);
    });
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Using an arrow function where this matters. Arrow functions do not have their own this, which will trip you up later with classes.",
        "Forgetting backticks. Template literals use `Hi ${name}` with backticks, not quotes.",
        "Thinking filter changes the original array. filter and map return a new array; the original is left alone."
      ],
      handout: {
        sections: [
          {
            h: "Arrow functions",
            body: ["An arrow function is a shorter way to write a function. When the body is a single expression, the return is implicit."],
            codes: [
              { code: `var double = (n) => n * 2;\nvar add = (a, b) => a + b;` }
            ]
          },
          {
            h: "Template literals",
            body: ["Use backticks and ${...} to drop values into a string without a pile of + signs and quotes."],
            codes: [
              { code: "var name = \"Ada\";\nvar greeting = `Hello, ${name}!`;" }
            ]
          },
          {
            h: "map and filter",
            body: ["map changes every item and returns a new array; filter keeps the items that pass a test."],
            codes: [
              { code: `var nums = [5, 12, 18, 3];\nvar big = nums.filter(n => n > 10);\nvar doubled = nums.map(n => n * 2);` }
            ]
          }
        ]
      },
      template: {
        filename: "modern.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 8: Modern syntax</title>
</head>
<body>
  <h1>Modern syntax</h1>
  <ul id="list"></ul>

  <script>
    var student = { name: "Ada", score: 82 };
    var scores = [45, 82, 58, 91, 47];

    // 1. TODO: rewrite this function as an arrow function
    var double = function (n) {
      return n * 2;
    };

    // 2. TODO: build this message with a template literal
    var message = "Student: " + student.name;

    // 3. TODO: filter the scores to keep only those 60 and above
    var passed = scores.filter(function (n) {
      return n >= 60;
    });

    console.log(double(5));
    console.log(message);
    console.log(passed);
  <\/script>
</body>
</html>`,
        core: [
          "Rewrite the double function as an arrow function.",
          "Build the message with a template literal using backticks and ${...}.",
          "Filter the scores so only those 60 and above remain."
        ],
        stretch: [
          "Use map to turn the scores into strings like \"Score: 82\".",
          "Destructure name and score from the student object."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: Write the arrow-function form of function (x) { return x + 1; }.", answer: "(x) => x + 1" },
            { prompt: "Question 2: What characters wrap a template literal?", answer: "Backticks: `Hi ${name}`." },
            { prompt: "Question 3: Does filter change the original array?", answer: "No. filter returns a new array; the original is unchanged." }
          ]
        }
      ]
    },
    {
      n: 9, title: "Project: to-do app or calculator", emoji: "📋", color: "control", goal: "Build and test a small interactive app.",
      concept: "Combine the DOM, events and forms to build a small app.",
      objective: "Students build a small interactive app using the DOM, events and a state variable.",
      teachingPoints: [
        "Keep the app's data in a state variable — one source of truth.",
        "Render the page from the state every time the state changes.",
        "Handle add and remove, and test edge cases such as an empty input."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: the to-do app", mins: 4 },
        { label: "Build time", mins: 20 },
        { label: "Present", mins: 5 },
        { label: "Wrap-up", mins: 3 }
      ],
      liveDemo: [
        {
          title: "A to-do app with add, done and delete",
          filename: "app.html",
          caption: "Add a task, click a task to mark it done, and click Delete to remove it. Every change updates the array and re-renders the list from the state.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 9: To-do app</title>
  <style>
    body { font-family: sans-serif; padding: 20px; max-width: 420px; }
    li { padding: 6px; cursor: pointer; }
    li.done { text-decoration: line-through; color: #888; }
    li button { margin-left: 8px; }
  </style>
</head>
<body>
  <h1>My To-Do List</h1>
  <input id="taskInput" placeholder="Add a task" />
  <button id="addBtn">Add</button>
  <p id="count"></p>
  <ul id="list"></ul>

  <script>
    var tasks = [
      { text: "Buy garri", done: false },
      { text: "Pay 500 Naira for data", done: false },
      { text: "Finish maths homework", done: true }
    ];
    var list = document.getElementById("list");

    function render() {
      list.innerHTML = "";
      tasks.forEach(function (task, index) {
        var item = document.createElement("li");
        item.textContent = task.text;
        if (task.done) item.classList.add("done");

        var del = document.createElement("button");
        del.textContent = "Delete";
        del.addEventListener("click", function (event) {
          event.stopPropagation();
          tasks.splice(index, 1);
          render();
        });

        item.appendChild(del);
        item.addEventListener("click", function () {
          task.done = !task.done;
          render();
        });

        list.appendChild(item);
      });
      document.getElementById("count").textContent = tasks.length + " task(s)";
    }

    document.getElementById("addBtn").addEventListener("click", function () {
      var input = document.getElementById("taskInput");
      var text = input.value.trim();
      if (text === "") return;
      tasks.push({ text: text, done: false });
      input.value = "";
      render();
    });

    render();
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Changing the state but not redrawing. If you do not call render() after a change, the page still shows the old data.",
        "Duplicated handlers. Re-rendering replaces the items, so attach handlers inside render and not again somewhere else.",
        "Ignoring empty input. Trim the text and return early, or you add blank rows."
      ],
      handout: {
        sections: [
          {
            h: "Plan the app",
            body: ["Decide the data, the page and the actions before you write any code."],
            list: [
              "State: what does one task look like? { text, done }",
              "Page: an input, an Add button and a ul.",
              "Actions: add, mark done, delete.",
              "Redraw the list every time the state changes."
            ]
          },
          {
            h: "Render from state",
            body: ["One function redraws the whole list from the tasks array, so the page always matches the data."],
            codes: [
              { code: `function render() {\n  list.innerHTML = "";\n  tasks.forEach(function (task) {\n    // build an li from task and append it\n  });\n}` }
            ]
          }
        ]
      },
      template: {
        filename: "app.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 9: My to-do app</title>
  <style>
    body { font-family: sans-serif; padding: 20px; max-width: 420px; }
    li { padding: 6px; }
    li.done { text-decoration: line-through; color: #888; }
  </style>
</head>
<body>
  <h1>My To-Do List</h1>
  <input id="taskInput" placeholder="Add a task" />
  <button id="addBtn">Add</button>
  <p id="count"></p>
  <ul id="list"></ul>

  <script>
    // STATE: the single source of truth
    var tasks = [];

    var list = document.getElementById("list");
    var input = document.getElementById("taskInput");

    function render() {
      list.innerHTML = "";
      tasks.forEach(function (task, index) {
        var item = document.createElement("li");
        item.textContent = task.text;
        if (task.done) item.classList.add("done");

        item.addEventListener("click", function () {
          // TODO: flip task.done and render again
        });

        var del = document.createElement("button");
        del.textContent = "Delete";
        del.addEventListener("click", function (event) {
          event.stopPropagation();
          // TODO: remove this task and render again
        });

        item.appendChild(del);
        list.appendChild(item);
      });
      // TODO: show the task count
    }

    document.getElementById("addBtn").addEventListener("click", function () {
      var text = input.value.trim();
      if (text === "") return;
      // TODO: push a new task { text: text, done: false }, clear the input and render
    });

    render();
  <\/script>
</body>
</html>`,
        core: [
          "Add a task: push it to the tasks array, clear the input and render again.",
          "Click a task to mark it done: flip task.done and render.",
          "Click Delete to remove a task from the array and render."
        ],
        stretch: [
          "Save the tasks in localStorage with JSON.stringify, and load them back when the page starts.",
          "Show a task count, for example \"3 tasks\"."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: Why keep the app's data in a tasks array instead of only drawing it on the page?", answer: "The array is the source of truth; the page is drawn from it. Changing the array and rendering keeps the page and the data in step." },
            { prompt: "Question 2: After you change the state, what must you do so the page shows it?", answer: "Call render() again to redraw the page from the state." },
            { prompt: "Question 3: Why check for an empty input before adding a task?", answer: "To avoid adding blank rows. Trim the text and return early if it is empty." },
            { prompt: "Question 4: How do you save an array of tasks in localStorage?", answer: "localStorage.setItem(\"tasks\", JSON.stringify(tasks)), then JSON.parse when reading it back." }
          ]
        },
        {
          audience: "Both", title: "App checklist", type: "checklist",
          items: [
            "The app runs without errors.",
            "It reacts to the user's input (add, click, delete).",
            "It keeps its data in a state variable and renders from it.",
            "The student can explain one of their event handlers."
          ]
        }
      ]
    },
    {
      n: 10, title: "Revision, assessment, showcase", emoji: "🎉", color: "sensing", goal: "Review Term 2 and showcase your work.",
      concept: "Recap the term's ideas and present a project.",
      objective: "Students revise Term 2 and present a small piece of work they can explain.",
      teachingPoints: [
        "Revise the DOM, events, forms, timers, localStorage and modern syntax.",
        "Present your work and explain one line of your own code.",
        "Reflect on what you would build next."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Term 2 revision", mins: 8 },
        { label: "Presentations", mins: 18 },
        { label: "Feedback", mins: 4 },
        { label: "Wrap-up", mins: 2 }
      ],
      liveDemo: [
        {
          title: "A page that uses delegation, a class toggle and localStorage",
          filename: "recap_dom.html",
          caption: "One page bringing the term together: a parent listener marks clicked items, a button toggles a class on the body, and a value is saved and read back with localStorage.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 10: DOM recap</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .dark { background-color: #1f2a44; color: #ffffff; }
    li.clicked { font-weight: bold; }
  </style>
</head>
<body>
  <h1>Term 2 recap</h1>
  <button id="themeBtn">Toggle theme</button>
  <ul id="list">
    <li>DOM</li>
    <li>Events</li>
    <li>Forms</li>
    <li>Timers</li>
    <li>localStorage</li>
  </ul>

  <h2>Saved value</h2>
  <input id="noteInput" placeholder="Type a note" />
  <button id="saveBtn">Save</button>
  <p id="saved"></p>

  <script>
    // Delegation: one handler marks any clicked item
    document.getElementById("list").addEventListener("click", function (event) {
      var item = event.target.closest("li");
      if (item) item.classList.toggle("clicked");
    });

    // Class toggle on the body
    document.getElementById("themeBtn").addEventListener("click", function () {
      document.body.classList.toggle("dark");
    });

    // Save and read a value with localStorage
    document.getElementById("saveBtn").addEventListener("click", function () {
      localStorage.setItem("term2note", document.getElementById("noteInput").value);
      showNote();
    });

    function showNote() {
      var note = localStorage.getItem("term2note");
      document.getElementById("saved").textContent = note ? "Saved: " + note : "Nothing saved yet.";
    }

    showNote();
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Not testing before presenting, so an error shows up in front of the class. Run it once more before you present.",
        "Being unable to explain a line of your own code. Read each handler aloud and say what it does.",
        "Skipping the live demo. A running example is the strongest part of the presentation."
      ],
      handout: {
        sections: [
          {
            h: "Term 2 recap",
            body: ["Check that you can do each of these before the showcase:"],
            list: [
              "Find an element and change its text, style or classes",
              "Create, add and remove elements",
              "Listen for clicks, input and key events",
              "Read form values and validate with preventDefault",
              "Use event delegation with one handler on a parent",
              "Run timers and save data in localStorage",
              "Use arrow functions, template literals, map and filter"
            ]
          },
          {
            h: "Presentation script",
            body: ["Use these prompts to plan what you will say as you present:"],
            list: [
              "Introduce your project in one sentence.",
              "Show it running and point out one thing that works well.",
              "Explain one event handler in your own words.",
              "Name one challenge you met and how you solved it.",
              "Say what you would add next if you had more time."
            ]
          }
        ]
      },
      template: {
        filename: "recap_dom.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 10: Term 2 recap</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .dark { background-color: #1f2a44; color: #ffffff; }
    li.clicked { font-weight: bold; }
  </style>
</head>
<body>
  <h1>Fix me</h1>
  <button id="themeBtn">Toggle theme</button>
  <ul id="list">
    <li>DOM</li>
    <li>Events</li>
    <li>Forms</li>
  </ul>
  <input id="noteInput" placeholder="Type a note" />
  <button id="saveBtn">Save</button>
  <p id="saved"></p>

  <script>
    // BUG: this runs immediately instead of when the button is clicked
    document.getElementById("themeBtn").addEventListener("click", document.body.classList.toggle("dark"));

    // This listener is fine — use it to check your delegation
    document.getElementById("list").addEventListener("click", function (event) {
      var item = event.target.closest("li");
      if (item) item.classList.toggle("clicked");
    });

    document.getElementById("saveBtn").addEventListener("click", function () {
      // TODO: save the input value with localStorage.setItem,
      // then read it back with getItem and show it in #saved
    });
  <\/script>
</body>
</html>`,
        core: [
          "Fix the broken handler: pass a function to addEventListener instead of calling the toggle now.",
          "Toggle the dark class on the body when the button is clicked.",
          "Save the input value with localStorage and show it in #saved."
        ],
        stretch: [
          "Refactor the filter/loop in your project to use map or filter.",
          "Load your saved value when the page starts and show it right away."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: What does addEventListener do?", answer: "It attaches a function that runs when the given event happens on that element." },
            { prompt: "Question 2: What is event delegation and why is it useful?", answer: "One listener on a parent handles events from its children; it works for items added later and keeps the code short." },
            { prompt: "Question 3: Why call event.preventDefault() in a form submit handler?", answer: "To stop the page reloading so your JavaScript can validate and handle the form." },
            { prompt: "Question 4: What does setInterval do, and how do you stop it?", answer: "It repeats a function every N milliseconds; save the id it returns and call clearInterval(id)." },
            { prompt: "Question 5: What is the difference between filter and map?", answer: "filter keeps the items that pass a test; map changes every item. Both return a new array." }
          ]
        }
      ]
    }
  ];

  // --- Term 3: Modern JavaScript and Real-World Apps ---
  var term3 = [
    {
      n: 1, title: "JSON and scope", emoji: "🧾", color: "control", goal: "Work with JSON and understand where variables live.",
      concept: "Read and write JSON, and understand local and global scope.",
      objective: "Convert data to and from JSON, and understand where variables live (scope).",
      teachingPoints: [
        "JSON is text that looks like a JavaScript object: keys and strings use double quotes, and there are no trailing commas.",
        "JSON.stringify turns a value into JSON text; JSON.parse turns JSON text back into a value.",
        "let and const inside { } are block-scoped: they only exist between the braces they were created in."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: object to JSON and back", mins: 5 },
        { label: "JSON and scope", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "An object turned into JSON text and back",
          filename: "json.html",
          caption: "The object is turned into JSON text with stringify, parsed back with parse, and the results are logged. A block-scoped variable is shown inside its block.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 1: JSON and scope</title>
</head>
<body>
  <h1>JSON and scope</h1>
  <p>Open the console to see the results.</p>

  <script>
    var student = { name: "Ada", score: 82, subjects: ["Maths", "Science"] };

    // 1. Object -> JSON text
    var text = JSON.stringify(student);
    console.log("As JSON text:", text);

    // 2. JSON text -> object
    var back = JSON.parse(text);
    console.log("Back as an object:", back.name, back.score);

    // 3. Block scope: this variable only exists inside the braces
    if (true) {
      let inside = "I only exist in this block";
      console.log(inside);
    }
    // console.log(inside); // ERROR: inside is not defined out here

    // Passing an object to JSON.parse throws, because parse needs text
    // console.log(JSON.parse(back)); // ERROR
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Writing JSON with single quotes or unquoted keys - JSON needs double quotes around every key and string.",
        "Calling JSON.parse on data that is already an object; parse expects text.",
        "Using a let or const variable outside the { } block it was created in, which raises a ReferenceError."
      ],
      handout: {
        sections: [
          {
            h: "JSON text vs JavaScript",
            body: ["JSON is a text format for data. It looks like a JavaScript object but is stricter: keys and strings use double quotes, and there are no comments or trailing commas."],
            codes: [
              { code: `{ "name": "Ada", "score": 82, "subjects": ["Maths", "Science"] }` }
            ]
          },
          {
            h: "stringify and parse",
            body: ["stringify turns a value into JSON text so it can be stored or sent. parse turns that text back into a value you can use."],
            codes: [
              { code: `var text = JSON.stringify({ name: "Ada" });\nvar obj = JSON.parse(text);\nconsole.log(obj.name); // Ada` }
            ]
          },
          {
            h: "Scope",
            body: ["Scope is where a variable can be seen. A let or const created inside { } is block-scoped: it disappears at the closing brace."],
            list: [
              "let and const are block-scoped.",
              "var ignores blocks and leaks outside them - avoid it.",
              "Use the smallest scope that works."
            ],
            codes: [
              { code: `if (true) {\n  let secret = "in here";\n}\nconsole.log(secret); // ReferenceError` }
            ]
          }
        ]
      },
      template: {
        filename: "json.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 1: JSON starter</title>
</head>
<body>
  <h1>JSON and scope starter</h1>
  <p>Open the console to see your results.</p>

  <script>
    var student = { name: "Chidi", score: 71 };
    var jsonText = '{"name":"Amaka","score":90}';

    // 1. TODO: turn student into JSON text with JSON.stringify
    var text = "";

    // 2. TODO: parse jsonText back into an object
    var parsed = null;

    // 3. TODO: log a value from the parsed object
    console.log(text);
    console.log(parsed);

    // BONUS: uncomment to see the block-scope error, then fix it
    if (true) {
      let secret = "block only";
    }
    // console.log(secret);
  <\/script>
</body>
</html>`,
        core: [
          "Turn the student object into JSON text with JSON.stringify and log it.",
          "Parse jsonText with JSON.parse and log parsed.name.",
          "Log one value from the student object."
        ],
        stretch: [
          "Parse a JSON array of students and loop through it with forEach.",
          "Uncomment console.log(secret), read the block-scope error, then move the log inside the block to fix it."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: What does JSON.stringify do?", answer: "It turns a value such as an object or array into JSON text (a string)." },
            { prompt: "Question 2: What does JSON.parse do?", answer: "It takes JSON text and turns it back into a value you can use in your code." },
            { prompt: "Question 3: What is block scope?", answer: "A let or const created inside { } only exists inside those braces; it cannot be used outside them." }
          ]
        }
      ]
    },
    {
      n: 2, title: "Promises", emoji: "⏳", color: "motion", goal: "Understand and use Promises.",
      concept: "Handle work that finishes later with Promises.",
      objective: "Understand what a promise represents and chain a simple one.",
      teachingPoints: [
        "A promise is a value that arrives later - a placeholder for something that is not ready yet.",
        "A promise can resolve (succeed) or reject (fail).",
        ".then() runs when it resolves and .catch() runs when it rejects."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a delayed value", mins: 5 },
        { label: "Promises, then and catch", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A promise that resolves after one second",
          filename: "promises.html",
          caption: "waitASecond() returns a promise. .then runs when the value arrives and .catch would run if it failed. Notice the last log runs first.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 2: Promises</title>
</head>
<body>
  <h1>Promises</h1>
  <p>Open the console to see the order of the logs.</p>

  <script>
    function waitASecond() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve("Data arrived after 1 second");
        }, 1000);
      });
    }

    waitASecond()
      .then(function (value) {
        console.log("Success:", value);
      })
      .catch(function (error) {
        console.log("Failed:", error);
      });

    console.log("This line runs first, before the data arrives.");
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Forgetting .then, so nothing happens with the value when the promise resolves.",
        "Treating a promise as a plain value and logging it directly instead of using .then.",
        "Leaving out .catch, which hides failures and makes bugs hard to find."
      ],
      handout: {
        sections: [
          {
            h: "A value that arrives later",
            body: ["Some work takes time: a timer, reading a file, or asking a server for data. A promise is a placeholder for the value that will arrive later."],
            list: [
              "pending - still waiting",
              "fulfilled - resolved with a value",
              "rejected - failed with a reason"
            ]
          },
          {
            h: "then and catch",
            body: [".then receives the resolved value; .catch receives the failure. Chaining them keeps the success and failure paths side by side."],
            codes: [
              { code: `getData()\n  .then(function (value) {\n    console.log("Got:", value);\n  })\n  .catch(function (error) {\n    console.log("Failed:", error);\n  });` }
            ]
          },
          {
            h: "A simple promise",
            body: ["new Promise gives you resolve and reject. Call resolve(value) when the work succeeds."],
            codes: [
              { code: `new Promise(function (resolve) {\n  setTimeout(function () { resolve("done"); }, 1000);\n});` }
            ]
          }
        ]
      },
      template: {
        filename: "promises.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 2: Promises starter</title>
</head>
<body>
  <h1>Promises starter</h1>
  <p>Open the console to follow the order.</p>

  <script>
    // 1. TODO: return a promise that resolves with "Saved!" after 1 second
    function save() {
      return new Promise(function (resolve) {
        // add a setTimeout that calls resolve("Saved!")
      });
    }

    // 2. TODO: use .then to log the value
    // 3. TODO: add a .catch to handle failure
    save();

    console.log("start");
  <\/script>
</body>
</html>`,
        core: [
          "Make save() resolve with \"Saved!\" after a one-second timer.",
          "Log the value with .then.",
          "Add a .catch that logs a failure message."
        ],
        stretch: [
          "Make the promise reject instead, and confirm .catch runs.",
          "Chain two .then calls so the value passes through both."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: What is a promise?", answer: "A placeholder for a value that is not ready yet; it will resolve or reject later." },
            { prompt: "Question 2: Which method runs when a promise resolves?", answer: ".then()" },
            { prompt: "Question 3: Which method handles a failure?", answer: ".catch()" }
          ]
        }
      ]
    },
    {
      n: 3, title: "async/await", emoji: "⚡", color: "sensing", goal: "Use async and await to handle asynchronous tasks.",
      concept: "Write asynchronous code that reads like ordinary code.",
      objective: "Rewrite promise code with async/await.",
      teachingPoints: [
        "An async function always returns a promise.",
        "await pauses inside an async function until the value arrives, then continues with it.",
        "Wrap awaited work in try/catch so failures are handled."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: await the delayed value", mins: 5 },
        { label: "async, await and try/catch", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "The same delayed value, read with await",
          filename: "async.html",
          caption: "loadData() is async. await pauses it until waitASecond() resolves, while the rest of the page keeps running. try/catch handles any failure.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 3: async/await</title>
</head>
<body>
  <h1>async / await</h1>
  <p>Open the console to see the order of the logs.</p>

  <script>
    function waitASecond() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve("Data arrived after 1 second");
        }, 1000);
      });
    }

    async function loadData() {
      try {
        var value = await waitASecond();
        console.log("Got:", value);
      } catch (error) {
        console.log("Failed:", error);
      }
    }

    loadData();
    console.log("This runs while we wait.");
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Using await outside an async function, which is a syntax error.",
        "Forgetting try/catch, so a rejected promise becomes an unhandled error.",
        "Thinking await freezes the whole page; it only pauses the async function it is in."
      ],
      handout: {
        sections: [
          {
            h: "async makes a function return a promise",
            body: ["Putting async before a function means it always returns a promise, even if you return a plain value."],
            codes: [
              { code: `async function greet() {\n  return "Hello";\n}\n// greet() returns a promise that resolves to "Hello"` }
            ]
          },
          {
            h: "await pauses here",
            body: ["await waits for a promise and hands you its value. Code after it runs only once the value has arrived."],
            codes: [
              { code: `async function load() {\n  var value = await getData();\n  console.log(value);\n}` }
            ]
          },
          {
            h: "try/catch",
            body: ["If the awaited promise rejects, await throws. Catch it with try/catch so your program keeps running."],
            codes: [
              { code: `try {\n  var value = await getData();\n} catch (error) {\n  console.log(error.message);\n}` }
            ]
          }
        ]
      },
      template: {
        filename: "async.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 3: async starter</title>
</head>
<body>
  <h1>async / await starter</h1>
  <p>Open the console to see your results.</p>

  <script>
    function getData() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve("Sample data");
        }, 1000);
      });
    }

    // 1. TODO: mark this function async
    function load() {
      // 2. TODO: await getData() and log the value
      // 3. TODO: wrap it in try/catch
    }

    load();
  <\/script>
</body>
</html>`,
        core: [
          "Mark load() as async.",
          "await getData() and log the value it resolves with.",
          "Wrap the await in try/catch and log any error."
        ],
        stretch: [
          "await two delayed values one after the other and log the total time.",
          "Add a second async function and call it after the first finishes."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: What does the async keyword do to a function?", answer: "It makes the function return a promise, and lets you use await inside it." },
            { prompt: "Question 2: What does await do?", answer: "It pauses the async function until the promise settles, then gives you the resolved value." },
            { prompt: "Question 3: Why use try/catch with await?", answer: "A rejected promise makes await throw; try/catch handles that error so the program keeps running." }
          ]
        }
      ]
    },
    {
      n: 4, title: "fetch and APIs (offline sample)", emoji: "🌐", color: "operators", goal: "Fetch data from an API and show it on the page.",
      concept: "Get data from a server with fetch and display it, using an offline sample.",
      objective: "Understand how fetch gets data from an API, using an offline sample.",
      teachingPoints: [
        "An API is a way to ask another program for data; fetch(url) sends that request and returns a promise.",
        "response.json() reads the body and returns another promise with the parsed data.",
        "Online fetch loads live data; offline we use a fakeFetch that returns the same shape."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: load sample results", mins: 5 },
        { label: "APIs and the fetch pattern", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Load results with an offline stand-in",
          filename: "fetch.html",
          caption: "fakeFetch() returns a promise that resolves to sample data, so this page works with no internet. The real fetch code is in the handout.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 4: fetch (offline sample)</title>
</head>
<body>
  <h1>Class results</h1>
  <p>Open the console to see the loaded data.</p>

  <script>
    // Offline stand-in for fetch: resolves with sample data.
    function fakeFetch(url) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve({
            ok: true,
            json: function () {
              return Promise.resolve({
                className: "JSS 3B",
                results: [
                  { name: "Ada", score: 82 },
                  { name: "Chidi", score: 58 },
                  { name: "Amaka", score: 91 }
                ]
              });
            }
          });
        }, 700);
      });
    }

    async function loadResults() {
      try {
        var res = await fakeFetch("/api/results");
        var data = await res.json();
        console.log("Class:", data.className);
        data.results.forEach(function (s) {
          console.log(s.name + " scored " + s.score);
        });
      } catch (error) {
        console.log("Could not load results:", error.message);
      }
    }

    loadResults();
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Forgetting the second await on response.json(), so you try to use a promise as data.",
        "Not adding a .catch or try/catch, leaving failures invisible.",
        "Expecting real network data in this offline page - it uses the sample."
      ],
      handout: {
        sections: [
          {
            h: "What an API is",
            body: ["An API is a service you can ask for data. You send a request to a URL, and it answers with data, usually in JSON."],
            list: [
              "The URL names the resource you want.",
              "The response has a status (200 means OK) and a body.",
              "Most API bodies are JSON."
            ]
          },
          {
            h: "The fetch pattern",
            body: ["fetch returns a promise. Await it to get the response, then await response.json() to read the body."],
            codes: [
              { code: `const res = await fetch(url);\nconst data = await res.json();` }
            ]
          },
          {
            h: "Offline stand-in",
            body: ["This week we cannot reach the network, so fakeFetch returns the same shape of data. Swap in real fetch when you are online."],
            codes: [
              { code: `function fakeFetch(url) {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      resolve({ ok: true, json: function () {\n        return Promise.resolve(sampleData);\n      } });\n    }, 700);\n  });\n}` }
            ]
          }
        ]
      },
      template: {
        filename: "fetch.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 4: fetch starter</title>
</head>
<body>
  <h1>Class results</h1>
  <p id="status">Loading...</p>
  <ul id="list"></ul>

  <script>
    function fakeFetch(url) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve({
            json: function () {
              return Promise.resolve({
                className: "JSS 3B",
                results: [
                  { name: "Ada", score: 82 },
                  { name: "Chidi", score: 58 },
                  { name: "Amaka", score: 91 }
                ]
              });
            }
          });
        }, 700);
      });
    }

    // 1. TODO: with await, call fakeFetch and read the body
    async function loadResults() {
      // var res = await fakeFetch("/api/results");
      // var data = await res.json();
      // 2. TODO: show the class name in #status
    }

    loadResults();
  <\/script>
</body>
</html>`,
        core: [
          "Use await to call fakeFetch and read the body with res.json().",
          "Show the class name in the #status paragraph.",
          "Loop the results into the list with a value from each."
        ],
        stretch: [
          "Build a list item for each student showing name and score.",
          "Add a try/catch that writes a friendly message to #status if loading fails."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: What does fetch return?", answer: "A promise that resolves to a response object." },
            { prompt: "Question 2: How do you read JSON from the response?", answer: "Await response.json(), which returns a promise for the parsed data." },
            { prompt: "Question 3: Why does this page use a sample offline?", answer: "There is no network in class, so fakeFetch returns sample data with the same shape as a real API response." }
          ]
        }
      ]
    },
    {
      n: 5, title: "Error handling and debugging with DevTools", emoji: "🐞", color: "events", goal: "Handle errors and debug with the browser DevTools.",
      concept: "Catch errors with try/catch and inspect your code with DevTools.",
      objective: "Catch errors in code and use the browser tools to find bugs.",
      teachingPoints: [
        "try/catch runs risky code and handles any error instead of stopping the page.",
        "throw raises your own error with a message, useful for invalid input.",
        "The console shows errors with a file and line number; DevTools lets you inspect values."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: catching a parse error", mins: 5 },
        { label: "try/catch/throw and the console", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "Handling a parse error and throwing your own",
          filename: "errors.html",
          caption: "The bad JSON does not crash the page - try/catch reports it. setAge throws a custom error that the second try/catch catches.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 5: Errors and debugging</title>
</head>
<body>
  <h1>Error handling</h1>
  <p>Open the console to see the handled errors.</p>

  <script>
    try {
      var data = JSON.parse("{ bad json }");
      console.log("Parsed:", data);
    } catch (error) {
      console.log("Could not read the data:", error.message);
    }

    function setAge(age) {
      if (age < 0) {
        throw new Error("Age cannot be negative");
      }
      return age;
    }

    try {
      setAge(-5);
    } catch (error) {
      console.log("Validation failed:", error.message);
    }

    console.log("The page kept running.");
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "An empty catch block with no logging, which hides the problem instead of revealing it.",
        "Catching too much so real bugs are swallowed silently.",
        "Ignoring the console message, which already shows the file and line where it failed."
      ],
      handout: {
        sections: [
          {
            h: "try / catch / throw",
            body: ["Wrap risky code in try. If it throws, catch receives the error. Use throw to raise your own error with a clear message."],
            codes: [
              { code: `try {\n  doSomethingRisky();\n} catch (error) {\n  console.log(error.message);\n}\n\nthrow new Error("Something went wrong");` }
            ]
          },
          {
            h: "Reading an error",
            body: ["An error has a name (like SyntaxError or TypeError) and a message. The console also shows the file and line so you can jump straight to it."],
            list: [
              "Read the message first.",
              "Click the file:line link in the console.",
              "Check the line just before the reported one too."
            ]
          },
          {
            h: "Using the console",
            body: ["The Console tab prints your logs and errors. Use it to check values: type a variable name and press Enter to inspect it live."]
          }
        ]
      },
      template: {
        filename: "errors.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 5: Errors starter</title>
</head>
<body>
  <h1>Error handling starter</h1>
  <p id="message">Open the console.</p>

  <script>
    var raw = "{ name: Ada }"; // invalid JSON (keys need quotes)

    // 1. TODO: wrap JSON.parse(raw) in try/catch
    // 2. TODO: log a helpful message in catch
    var data = JSON.parse(raw);

    // 3. TODO: write a function that throws if a score is above 100
    function checkScore(score) {
      // ...
    }

    console.log(data);
  <\/script>
</body>
</html>`,
        core: [
          "Wrap JSON.parse(raw) in try/catch and log a helpful message.",
          "Fix raw so it becomes valid JSON and parse it cleanly.",
          "Write checkScore() that throws when the score is above 100."
        ],
        stretch: [
          "Validate the input in checkScore() and show the error text on the page.",
          "Log error.name as well as error.message to see the difference."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: What does try/catch do?", answer: "It runs risky code and, if it throws, handles the error in catch instead of stopping the program." },
            { prompt: "Question 2: What does throw do?", answer: "It raises your own error with a message, which you can catch." },
            { prompt: "Question 3: Where do errors appear in the browser?", answer: "In the console, with the file and line number." }
          ]
        }
      ]
    },
    {
      n: 6, title: "Classes and OOP basics", emoji: "🏛️", color: "variables", goal: "Create classes and objects in JavaScript.",
      concept: "Model things with classes, constructors and methods.",
      objective: "Model things with a class and create objects from it.",
      teachingPoints: [
        "A class is a template for making objects with the same shape.",
        "The constructor sets up each new object; this refers to the object being built.",
        "Methods are functions on the class, and new creates an instance."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a Student class", mins: 5 },
        { label: "Classes, constructors and methods", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A Student class with a method",
          filename: "classes.html",
          caption: "One class, two instances. new runs the constructor for each object, and the methods use this to read their own values.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 6: Classes</title>
</head>
<body>
  <h1>Classes</h1>
  <p>Open the console to meet Ada and Chidi.</p>

  <script>
    class Student {
      constructor(name, score) {
        this.name = name;
        this.score = score;
      }

      greet() {
        return "Hi, I am " + this.name;
      }

      result() {
        return this.score >= 60 ? "Pass" : "Fail";
      }
    }

    var ada = new Student("Ada", 82);
    var chidi = new Student("Chidi", 55);

    console.log(ada.greet(), "-", ada.result());
    console.log(chidi.greet(), "-", chidi.result());
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Forgetting new, so the class is called like a function and this is not set up.",
        "Forgetting this, so name and score look like unknown variables.",
        "Putting commas between class methods - class bodies use no commas."
      ],
      handout: {
        sections: [
          {
            h: "Class and constructor",
            body: ["A class is a blueprint. The constructor runs once for each new object and fills in its properties with this."],
            codes: [
              { code: `class Student {\n  constructor(name, score) {\n    this.name = name;\n    this.score = score;\n  }\n}` }
            ]
          },
          {
            h: "Methods and this",
            body: ["Methods are functions written inside the class. Inside them, this points to the object the method was called on."],
            codes: [
              { code: `class Student {\n  constructor(name) { this.name = name; }\n  greet() { return "Hi, " + this.name; }\n}` }
            ]
          },
          {
            h: "Creating instances",
            body: ["new creates an object from the class and returns it. Each instance has its own copies of the properties."],
            codes: [
              { code: `var ada = new Student("Ada", 82);\nconsole.log(ada.greet());` }
            ]
          }
        ]
      },
      template: {
        filename: "classes.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 6: Classes starter</title>
</head>
<body>
  <h1>Classes starter</h1>
  <p>Open the console.</p>

  <script>
    // 1. TODO: define a class Student with a constructor for name and score
    // 2. TODO: add a method greet() that uses this.name
    // 3. TODO: create two students with new and log their greetings

    // BONUS: add a Shop class that holds a list of items
    var shop = null;
    console.log(shop);
  <\/script>
</body>
</html>`,
        core: [
          "Write a Student class with a constructor taking name and score.",
          "Add a greet() method that uses this.name.",
          "Create two Student objects with new and log their greetings."
        ],
        stretch: [
          "Add an addScore() method that updates this.score, plus a getter for the result.",
          "Model a Shop class with an items array and a total() method."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: What creates an object from a class?", answer: "The new keyword, for example new Student(\"Ada\", 82)." },
            { prompt: "Question 2: What does the constructor do?", answer: "It runs once per object and sets up that object's properties." },
            { prompt: "Question 3: What does this refer to inside a method?", answer: "The object the method was called on." }
          ]
        }
      ]
    },
    {
      n: 7, title: "Modules and organising code", emoji: "📦", color: "looks", goal: "Organise code into reusable modules.",
      concept: "Split code into modules and import what you need.",
      objective: "Understand splitting code into modules and organising a project.",
      teachingPoints: [
        "Modules split a program into small files, each focused on one job.",
        "export shares a value from a file; import brings it into another file.",
        "Small modules are easier to read, test and reuse - but the browser needs separate files for real imports."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: a helpers module stand-in", mins: 5 },
        { label: "export, import and project layout", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "A helpers 'module' in one page",
          filename: "modules.html",
          caption: "This offline preview uses a helpers object where a real module would live in its own file. The real export/import syntax is in the handout.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 7: Modules</title>
</head>
<body>
  <h1>Organising code</h1>
  <p>Open the console to see the helper results.</p>

  <script>
    // Offline stand-in for helpers.js
    var helpers = {
      toUpper: function (text) {
        return text.toUpperCase();
      },
      average: function (numbers) {
        var total = numbers.reduce(function (sum, n) { return sum + n; }, 0);
        return total / numbers.length;
      }
    };

    // In a real project this line would be:
    // import { toUpper, average } from "./helpers.js";

    document.querySelector("h1").textContent = helpers.toUpper("organising code");
    console.log("Average:", helpers.average([82, 58, 91]));
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Forgetting to export something you later try to import.",
        "Using import in a script without type=\"module\", which the browser rejects.",
        "Creating circular imports where two files import from each other."
      ],
      handout: {
        sections: [
          {
            h: "Why modules",
            body: ["One big file becomes hard to follow. Modules let you keep related code together and share only what is needed."],
            list: [
              "One file, one job.",
              "Export what others need; keep the rest private.",
              "Small files are easier to test and reuse."
            ]
          },
          {
            h: "export and import",
            body: ["Mark something with export to share it, and use import in another file to bring it in. Files must be loaded with type=\"module\"."],
            codes: [
              { code: `// helpers.js\nexport function average(numbers) {\n  return numbers.reduce((a, b) => a + b, 0) / numbers.length;\n}\n\n// app.js\nimport { average } from "./helpers.js";` }
            ]
          },
          {
            h: "In this preview",
            body: ["We cannot load separate files here, so a plain helpers object stands in for the module. The calls look the same as the imported ones would."],
            codes: [
              { code: `var helpers = { average: function (numbers) { /* ... */ } };\nhelpers.average([82, 58, 91]);` }
            ]
          }
        ]
      },
      template: {
        filename: "modules.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 7: Modules starter</title>
</head>
<body>
  <h1>Modules starter</h1>
  <p id="out"></p>

  <script>
    // 1. TODO: create a helpers object with toUpper and average
    var helpers = {};

    // 2. TODO: call helpers.toUpper on a name and helpers.average on scores
    // 3. TODO: show the results on the page

    console.log(helpers);
  <\/script>
</body>
</html>`,
        core: [
          "Create a helpers object with a toUpper and an average function.",
          "Call both helpers and log their results.",
          "Show one result on the page."
        ],
        stretch: [
          "Add a third helper, for example maxScore().",
          "Write the real export/import version of helpers in the handout and explain which call changes."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: What does export do?", answer: "It makes a value available to other files." },
            { prompt: "Question 2: What does import do?", answer: "It brings an exported value from another module into the current file." },
            { prompt: "Question 3: Why keep modules small?", answer: "Small, focused files are easier to read, test and reuse." }
          ]
        }
      ]
    },
    {
      n: 8, title: "Capstone: plan and build", emoji: "🧱", color: "motion", goal: "Plan and start building your capstone project.",
      concept: "Plan your final project and start building its first features.",
      objective: "Choose a capstone app, plan it, and start building.",
      teachingPoints: [
        "Pick a scope you can finish: a quiz, a weather display from sample data, an expense tracker or a mini shop.",
        "Plan the state and the interactions before you code.",
        "Build the HTML and the first features, testing as you go."
      ],
      timing: [
        { label: "Welcome & choose your app", mins: 3 },
        { label: "Live demo: expense tracker", mins: 4 },
        { label: "Build time", mins: 20 },
        { label: "Present a first look", mins: 5 },
        { label: "Wrap-up & next steps", mins: 3 }
      ],
      liveDemo: [
        {
          title: "A small expense tracker with state and storage",
          filename: "capstone_js.html",
          caption: "State lives in the expenses array. The page is drawn from it with render(), and it is saved with localStorage so it survives a refresh.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 8: Expense tracker demo</title>
  <style>
    body { font-family: sans-serif; padding: 20px; max-width: 420px; }
    li { padding: 6px; }
    .total { font-weight: bold; }
  </style>
</head>
<body>
  <h1>Expense Tracker</h1>
  <input id="desc" placeholder="What did you buy?" />
  <input id="amount" type="number" placeholder="Amount (Naira)" />
  <button id="addBtn">Add</button>
  <p class="total" id="total"></p>
  <ul id="list"></ul>

  <script>
    var expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    var list = document.getElementById("list");
    var desc = document.getElementById("desc");
    var amount = document.getElementById("amount");

    function save() {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function render() {
      list.innerHTML = "";
      var total = 0;
      expenses.forEach(function (item, index) {
        total += item.amount;
        var li = document.createElement("li");
        li.textContent = item.desc + " - " + item.amount;
        var del = document.createElement("button");
        del.textContent = "Delete";
        del.addEventListener("click", function () {
          expenses.splice(index, 1);
          save();
          render();
        });
        li.appendChild(del);
        list.appendChild(li);
      });
      document.getElementById("total").textContent = "Total: " + total;
    }

    document.getElementById("addBtn").addEventListener("click", function () {
      var text = desc.value.trim();
      var value = Number(amount.value);
      if (text === "" || !value) return;
      expenses.push({ desc: text, amount: value });
      desc.value = "";
      amount.value = "";
      save();
      render();
    });

    render();
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Choosing a scope that is too big to finish - start with the smallest version that works.",
        "Starting to code with no plan, so the features and data are unclear.",
        "Mixing up state and display: changing the page directly instead of the state, then rendering."
      ],
      handout: {
        sections: [
          {
            h: "Plan the app",
            body: ["Before you type a line of code, decide four things. Keep them short enough to finish this term."],
            list: [
              "Topic: what is the app for?",
              "State: what data does it hold?",
              "Features: what can the user do?",
              "Data: does it need saving?"
            ]
          },
          {
            h: "Build order",
            body: ["Build the smallest version that works, then add one feature at a time. Test after each step."],
            list: [
              "The static HTML first.",
              "The state variable and a render().",
              "One interaction, for example add.",
              "Then the list, delete, and finally saving."
            ]
          },
          {
            h: "Example plan",
            body: ["Here is the expense tracker, planned before it was built."],
            codes: [
              { code: `// Topic:  track my spending\n// State:  expenses = [{ desc, amount }]\n// Features: add, delete, show total\n// Data:   save in localStorage` }
            ]
          }
        ]
      },
      template: {
        filename: "capstone_js.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 8: My capstone starter</title>
  <style>
    body { font-family: sans-serif; padding: 20px; max-width: 420px; }
    li { padding: 6px; }
  </style>
</head>
<body>
  <h1>My Expense Tracker</h1>
  <input id="desc" placeholder="What did you buy?" />
  <input id="amount" type="number" placeholder="Amount (Naira)" />
  <button id="addBtn">Add</button>
  <p id="total"></p>
  <ul id="list"></ul>

  <script>
    // STATE: the single source of truth
    var expenses = [];

    var list = document.getElementById("list");
    var desc = document.getElementById("desc");
    var amount = document.getElementById("amount");

    function render() {
      list.innerHTML = "";
      expenses.forEach(function (item, index) {
        var li = document.createElement("li");
        li.textContent = item.desc + " - " + item.amount;
        var del = document.createElement("button");
        del.textContent = "Delete";
        del.addEventListener("click", function () {
          // TODO: remove this item and render again
        });
        li.appendChild(del);
        list.appendChild(li);
      });
      // TODO: show the total
    }

    document.getElementById("addBtn").addEventListener("click", function () {
      var text = desc.value.trim();
      var value = Number(amount.value);
      if (text === "" || !value) return;
      // TODO: push { desc: text, amount: value }, clear inputs and render
    });

    render();
  <\/script>
</body>
</html>`,
        core: [
          "Write your own plan: topic, state, features and whether it needs saving.",
          "Build the input fields and the list.",
          "Wire one interaction, for example add an expense."
        ],
        stretch: [
          "Save the data in localStorage and load it when the page starts.",
          "Add a summary value, for example a total or a count."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: Why keep the scope small?", answer: "A small, finishable scope means you actually get a working app instead of an unfinished big one." },
            { prompt: "Question 2: What is the app's state?", answer: "The data the app works with, for example the expenses array. The page is drawn from it." },
            { prompt: "Question 3: What is the first thing to build?", answer: "The static HTML and a simple version that runs, then add one feature at a time." }
          ]
        }
      ]
    },
    {
      n: 9, title: "Capstone: build and publish", emoji: "🚀", color: "control", goal: "Finish and publish your capstone project.",
      concept: "Complete your project and publish it online.",
      objective: "Finish, test and publish your capstone app.",
      teachingPoints: [
        "Finish the features you planned and remove anything half-done.",
        "Test edge cases: empty input, a single item, deleting everything.",
        "Publishing needs the internet, so in class we get the files and tests ready."
      ],
      timing: [
        { label: "Welcome & recap", mins: 3 },
        { label: "Live demo: the finished app", mins: 5 },
        { label: "Finishing, testing and error handling", mins: 8 },
        { label: "Activity time", mins: 15 },
        { label: "Share & wrap-up", mins: 4 }
      ],
      liveDemo: [
        {
          title: "The finished expense tracker",
          filename: "capstone_finish.html",
          caption: "This version handles errors when loading and saving, shows an empty state, and keeps the page in step with the state.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 9: Finished expense tracker</title>
  <style>
    body { font-family: sans-serif; padding: 20px; max-width: 420px; }
    li { padding: 6px; }
    .total { font-weight: bold; }
    .empty { color: #888; }
  </style>
</head>
<body>
  <h1>Expense Tracker</h1>
  <input id="desc" placeholder="What did you buy?" />
  <input id="amount" type="number" placeholder="Amount (Naira)" />
  <button id="addBtn">Add</button>
  <p class="total" id="total"></p>
  <ul id="list"></ul>

  <script>
    function load() {
      try {
        return JSON.parse(localStorage.getItem("expenses")) || [];
      } catch (error) {
        console.log("Could not load expenses:", error.message);
        return [];
      }
    }

    function save(expenses) {
      try {
        localStorage.setItem("expenses", JSON.stringify(expenses));
      } catch (error) {
        console.log("Could not save expenses:", error.message);
      }
    }

    var expenses = load();
    var list = document.getElementById("list");
    var desc = document.getElementById("desc");
    var amount = document.getElementById("amount");

    function render() {
      list.innerHTML = "";
      if (expenses.length === 0) {
        var empty = document.createElement("li");
        empty.className = "empty";
        empty.textContent = "No expenses yet. Add one above.";
        list.appendChild(empty);
      }
      var total = 0;
      expenses.forEach(function (item, index) {
        total += item.amount;
        var li = document.createElement("li");
        li.textContent = item.desc + " - " + item.amount;
        var del = document.createElement("button");
        del.textContent = "Delete";
        del.addEventListener("click", function () {
          expenses.splice(index, 1);
          save(expenses);
          render();
        });
        li.appendChild(del);
        list.appendChild(li);
      });
      document.getElementById("total").textContent = "Total: " + total;
    }

    document.getElementById("addBtn").addEventListener("click", function () {
      var text = desc.value.trim();
      var value = Number(amount.value);
      if (text === "" || !value) {
        alert("Enter a description and a positive amount.");
        return;
      }
      expenses.push({ desc: text, amount: value });
      desc.value = "";
      amount.value = "";
      save(expenses);
      render();
    });

    render();
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Not testing edge cases, so an empty list or a deleted-everything state breaks the app.",
        "Breaking links after moving files - check every file path when you reorganise.",
        "Leaving out error handling, so a bad saved value crashes the page on load."
      ],
      handout: {
        sections: [
          {
            h: "Finish and test",
            body: ["Work through this list before you call the app done."],
            list: [
              "Every planned feature works.",
              "The empty case shows a friendly message, not a blank or a crash.",
              "Bad input (blank or zero) is rejected.",
              "You tested in a fresh browser tab.",
              "The console shows no red errors."
            ]
          },
          {
            h: "Publish (teacher demo; needs internet)",
            body: ["Publishing puts your app online. Your teacher will demo this; do the offline steps (finish the files, test) during class."],
            list: [
              "Put your files in one folder with index.html as the start page.",
              "Use a host such as GitHub Pages (needs an account and internet).",
              "Open the live link and check it works on another device."
            ]
          }
        ]
      },
      template: {
        filename: "capstone_js.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 9: Finish your capstone</title>
</head>
<body>
  <h1>My Expense Tracker</h1>
  <input id="desc" placeholder="What did you buy?" />
  <input id="amount" type="number" placeholder="Amount (Naira)" />
  <button id="addBtn">Add</button>
  <p id="total"></p>
  <ul id="list"></ul>

  <script>
    // BUG 1: this reads the array without error handling
    var expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    function save() {
      // BUG 2: stores the object itself, not text
      localStorage.setItem("expenses", expenses);
    }

    function render() {
      var list = document.getElementById("list");
      list.innerHTML = "";
      var total = 0;
      expenses.forEach(function (item, index) {
        total += item.amount;
        var li = document.createElement("li");
        li.textContent = item.desc + " - " + item.amount;
        var del = document.createElement("button");
        del.textContent = "Delete";
        del.addEventListener("click", function () {
          expenses.splice(index, 1);
          save();
          render();
        });
        li.appendChild(del);
        list.appendChild(li);
      });
      document.getElementById("total").textContent = "Total: " + total;
    }

    document.getElementById("addBtn").addEventListener("click", function () {
      var text = document.getElementById("desc").value.trim();
      var value = Number(document.getElementById("amount").value);
      if (text === "") return;
      expenses.push({ desc: text, amount: value });
      save();
      render();
    });

    render();
  <\/script>
</body>
</html>`,
        core: [
          "Fix the saving bug: turn the array into text with JSON.stringify.",
          "Test the empty case and show a friendly message instead of a blank list.",
          "Add try/catch around loading the saved data."
        ],
        stretch: [
          "Add one more feature, for example a category on each expense.",
          "Write the publish steps you would follow at home, in order."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: Why test the empty case?", answer: "An empty list is the easiest state to break; checking it catches blank screens and errors early." },
            { prompt: "Question 2: How do you save an array in localStorage?", answer: "localStorage.setItem(\"key\", JSON.stringify(array)), and JSON.parse it when loading." },
            { prompt: "Question 3: Why add try/catch around loading?", answer: "The saved value could be missing or corrupt; try/catch keeps the app running with a safe default." },
            { prompt: "Question 4: What must the start page of a published site be called?", answer: "index.html" }
          ]
        },
        {
          audience: "Both", title: "Capstone checklist", type: "checklist",
          items: [
            "The app runs without errors in the console.",
            "It keeps its data in a state variable and renders from it.",
            "It handles errors and the empty case.",
            "The files are ready to publish (index.html plus any others)."
          ]
        }
      ]
    },
    {
      n: 10, title: "Showcase, assessment, next steps", emoji: "🏆", color: "events", goal: "Showcase your project and plan your next steps.",
      concept: "Present your project, take the final assessment and look ahead.",
      objective: "Present your capstone and look ahead to what's next.",
      teachingPoints: [
        "Present what your app does and one challenge you solved.",
        "Review the three terms: fundamentals, the DOM and events, and modern JavaScript.",
        "Preview what comes next, such as Node and React, without going deep yet."
      ],
      timing: [
        { label: "Welcome & set up", mins: 3 },
        { label: "Showcase demos", mins: 8 },
        { label: "Present and assess", mins: 18 },
        { label: "Share", mins: 4 },
        { label: "Wrap-up & next steps", mins: 2 }
      ],
      liveDemo: [
        {
          title: "A polished capstone to show",
          filename: "showcase_js.html",
          caption: "The showcase version adds a friendly empty state and an item count. Small polish makes a project feel finished.",
          code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 10: Capstone showcase</title>
  <style>
    body { font-family: sans-serif; padding: 20px; max-width: 460px; }
    li { padding: 6px; }
    .total { font-weight: bold; }
    .empty { color: #888; }
  </style>
</head>
<body>
  <h1>My Expense Tracker</h1>
  <input id="desc" placeholder="What did you buy?" />
  <input id="amount" type="number" placeholder="Amount (Naira)" />
  <button id="addBtn">Add</button>
  <p class="total" id="total"></p>
  <ul id="list"></ul>

  <script>
    function load() {
      try {
        return JSON.parse(localStorage.getItem("expenses")) || [];
      } catch (error) {
        console.log("Could not load expenses:", error.message);
        return [];
      }
    }

    function save(expenses) {
      try {
        localStorage.setItem("expenses", JSON.stringify(expenses));
      } catch (error) {
        console.log("Could not save expenses:", error.message);
      }
    }

    var expenses = load();
    var list = document.getElementById("list");
    var totalEl = document.getElementById("total");

    function render() {
      list.innerHTML = "";
      if (expenses.length === 0) {
        var empty = document.createElement("li");
        empty.className = "empty";
        empty.textContent = "No expenses yet. Add one above.";
        list.appendChild(empty);
      }
      var total = 0;
      expenses.forEach(function (item, index) {
        total += item.amount;
        var li = document.createElement("li");
        li.textContent = item.desc + " - " + item.amount;
        var del = document.createElement("button");
        del.textContent = "Delete";
        del.addEventListener("click", function () {
          expenses.splice(index, 1);
          save(expenses);
          render();
        });
        li.appendChild(del);
        list.appendChild(li);
      });
      totalEl.textContent = "Total: " + total + " (" + expenses.length + " items)";
    }

    document.getElementById("addBtn").addEventListener("click", function () {
      var text = document.getElementById("desc").value.trim();
      var value = Number(document.getElementById("amount").value);
      if (text === "" || !value) {
        alert("Enter a description and a positive amount.");
        return;
      }
      expenses.push({ desc: text, amount: value });
      document.getElementById("desc").value = "";
      document.getElementById("amount").value = "";
      save(expenses);
      render();
    });

    render();
  <\/script>
</body>
</html>`
        }
      ],
      commonMistakes: [
        "Turning up with no demo ready - have your app open and working before you present.",
        "Being unable to explain a feature, so the audience cannot follow what you built.",
        "Running over time - rehearse a short, clear talk."
      ],
      handout: {
        sections: [
          {
            h: "Presentation script",
            body: ["Keep it short. Use this order and aim for about two minutes."],
            list: [
              "What my app does, in one sentence.",
              "Who it is for.",
              "One feature to show live.",
              "One problem I solved and how.",
              "What I would add next."
            ]
          },
          {
            h: "Term 3 recap",
            body: ["Everything we covered after the DOM and events."],
            list: [
              "JSON and scope.",
              "Promises, then async/await.",
              "fetch and APIs (with an offline sample).",
              "Error handling and debugging.",
              "Classes and modules, then the capstone."
            ]
          },
          {
            h: "What's next (a taster)",
            body: ["These are ideas, not this term's work. You have the foundations to explore them next."],
            list: [
              "Node.js: run JavaScript outside the browser.",
              "Build tools and real API keys for live data.",
              "React: build interfaces from reusable components.",
              "A framework for bigger projects and teams."
            ]
          }
        ]
      },
      template: {
        filename: "showcase_js.html",
        code:
`<!DOCTYPE html>
<html>
<head>
  <title>Week 10: My showcase</title>
</head>
<body>
  <h1>My Expense Tracker</h1>
  <input id="desc" placeholder="What did you buy?" />
  <input id="amount" type="number" placeholder="Amount (Naira)" />
  <button id="addBtn">Add</button>
  <p id="total"></p>
  <ul id="list"></ul>

  <script>
    // 1. TODO: fix the last issue you found in testing
    // 2. TODO: be ready to explain one function out loud
    // 3. STRETCH: add one piece of polish you are proud of

    function render() {
      // your render code here
    }
  <\/script>
</body>
</html>`,
        core: [
          "Fix the last issue you found in testing.",
          "Be ready to explain one function from your app.",
          "Have the app open and working before you present."
        ],
        stretch: [
          "Add one piece of polish you are proud of, such as an empty state or a count.",
          "Write two sentences about what you would build next with what you have learned."
        ]
      },
      assessment: [
        {
          audience: "Both", title: "Mini-check", type: "quiz",
          questions: [
            { prompt: "Question 1: What does JSON.parse do?", answer: "It turns JSON text back into a value your code can use." },
            { prompt: "Question 2: What is the difference between a promise and async/await?", answer: "They do the same job: async/await is a cleaner way to write promise code so it reads like ordinary code." },
            { prompt: "Question 3: What does fetch get you, and what is the next step?", answer: "fetch returns a promise for the response; the next step is await response.json() to read the body." },
            { prompt: "Question 4: What creates an object from a class?", answer: "The new keyword, for example new Student(\"Ada\", 82)." },
            { prompt: "Question 5: Why split code into modules?", answer: "Small, focused files are easier to read, test and reuse; export shares code and import brings it in." }
          ]
        },
        {
          audience: "Both", title: "Course checklist", type: "checklist",
          items: [
            "I can convert data to and from JSON.",
            "I can handle a value that arrives later with a promise or async/await.",
            "I can load data with fetch (or an offline stand-in) and show it on the page.",
            "I can model something with a class.",
            "I finished and presented a capstone app."
          ]
        }
      ]
    }
  ];

  window.WEBDEV_CURRICULUM = {
    slug: "webdev",
    title: "JavaScript: Web Development",
    subject: "Programming",
    length: "3 terms",
    audience: "JSS 3, SS 1 & SS 2",
    prong: "Instructor Guides · Student Handouts · Code Templates · Assessments",
    target: "JSS 3, SS 1 and SS 2 students. No prior JavaScript needed.",
    startingPoint: "Students already know some HTML and CSS. This course adds JavaScript and builds up to a finished project.",
    endGoal: "By the end of Term 3, every student has built and published a working interactive web app.",
    focus: "Every concept is practised on a page students can run, edit and see working in the browser.",
    philosophy: "Read it, run it, change it. Each week ships a runnable code template.",
    terms: [
      { n: 1, title: "JavaScript Fundamentals", theme: "motion", weeks: term1 },
      { n: 2, title: "The DOM, Events and Interactive Pages", theme: "sensing", weeks: term2 },
      { n: 3, title: "Modern JavaScript and Real-World Apps", theme: "control", weeks: term3 }
    ]
  };
})();
