/* ============================================================
   data.js — the whole Scratch curriculum as data.
   Week pages are rendered from this file, and the overview
   table is generated from it too. Add a week by adding an
   object here; no HTML changes needed.

   Block recipe spec (consumed by blocks.js):
     { cat:  'motion' | 'looks' | 'sound' | 'events' | 'control'
            | 'sensing' | 'operators' | 'variables',
       text: 'move %1 steps',            // %1, %2 are input slots
       in:   { 1: '10' },                // slot values
       hat:  true,                       // rounded top (event blocks)
       c:    [ [blocks...], [blocks...] ]  // C-block substacks
     }
   ============================================================ */
(function () {
  "use strict";

  var weeks = [
    /* ------------------------------------------------------------------ 1 */
    {
      n: 1, title: "Meet Scratch", emoji: "👋", color: "motion", demo: "meet",
      concept: "Scratch is a place where you build code by snapping coloured blocks together. This week you'll learn the parts of the screen and make a sprite talk.",
      learn: [
        "The Scratch interface: the Stage, the Sprite list, and the Blocks palette",
        "Three kinds of blocks: stack blocks, reporter blocks, and hat blocks",
        "How to drag blocks together and run your code",
        "The \"say\" and \"think\" blocks to make a sprite communicate"
      ],
      teachingPoint: "Code is a list of instructions that a computer follows, one step at a time. Scratch lets you write those instructions by snapping blocks together instead of typing words.",
      vocab: ["Stage", "Sprite", "Block", "Script", "Hat block", "Reporter block"],
      activity: [
        "Open Scratch and create a new project.",
        "Pick a sprite (or keep the default cat).",
        "Drag out a \"when green flag clicked\" block — this is a hat block, it starts your script.",
        "Connect a \"say [Hello!] for 2 seconds\" block underneath it.",
        "Click the green flag to run your code. Watch the speech bubble.",
        "Change the message to something silly and run it again.",
        "Swap \"say\" for \"think\" and see what changes."
      ],
      miniProject: {
        title: "Introduce yourself",
        desc: "Make a sprite that introduces itself to the class.",
        example: "\"Hi! I'm Fluffy the cat!\""
      },
      stretch: "Make the sprite say three different things in a row by stacking three \"say\" blocks. Add \"wait 1 second\" between them so each message has its moment.",
      blocks: [
        { cat: "events", text: "when green flag clicked", hat: true },
        { cat: "looks", text: "say %1 for %2 seconds", in: { 1: "Hi! I'm Fluffy the cat!", 2: "2" } }
      ],
      teacher: {
        timing: "5 min demo · 20 min build · 10 min free play · 10 min share",
        errors: [
          "Blocks not connecting — the script must start with a hat block (rounded top).",
          "Nothing happens on click — they may be clicking the sprite instead of the green flag.",
          "Sprite hidden behind the palette — drag it back onto the Stage."
        ],
        support: "Let them copy the example exactly, then change only the message text.",
        extend: "Introduce \"think\" blocks and a second sprite that answers back.",
        tip: "Ask every child to read their script out loud in order — it reinforces that code runs top to bottom."
      },

      notes: {
        student: {
          idea: [
            "A computer does exactly what you tell it — nothing more, nothing less. It never guesses what you meant. So we give it instructions in a careful order, and that list of instructions is called code.",
            "In Scratch you don't type code. You snap coloured blocks together like puzzle pieces, and each block is one instruction. When you press the green flag, Scratch follows your blocks from top to bottom, one at a time.",
            "This week you meet the three parts of the screen you'll use every week: the Stage, where everything happens; the Sprite list, which shows who is in your project; and the Blocks palette, your box of instructions."
          ],
          words: [
            { term: "Stage", meaning: "the big white area where your project runs — the screen everyone watches." },
            { term: "Sprite", meaning: "a character or object in your project. The cat is a sprite." },
            { term: "Block", meaning: "one instruction, shaped like a jigsaw piece." },
            { term: "Script", meaning: "a stack of blocks clicked together, like a to-do list for the computer." },
            { term: "Hat block", meaning: "a block with a curved top, such as 'when green flag clicked'. Hat blocks start scripts." },
            { term: "Reporter block", meaning: "a block shaped like an oval that reports a value, such as your score or the mouse's x position." }
          ],
          remember: [
            "Code runs from the top of the script to the bottom.",
            "A script needs a hat block to start — the green flag is the most common one.",
            "'say' shows a speech bubble; 'think' shows a thought bubble.",
            "Nothing happens until an event starts the script."
          ],
          discuss: [
            "What is a computer good at that a person is not?",
            "Why do you think the order of the instructions matters so much?",
            "What would you like your sprite to say to the class?"
          ]
        },
        teacher: {
          goal: "Get every student to their first small win: a sprite that speaks when the green flag is pressed. Confidence matters more than content this week.",
          script: "Tell the class the computer is an extremely obedient robot with no imagination. If you say 'make me a sandwich' it will stare at you. You have to say: get the bread, get the butter, spread the butter. Order matters. Then show the same idea with blocks.",
          misconceptions: [
            { got: "Blocks just need to be near each other.", fix: "Blocks must click together — the bump of one locks into the notch of the next. Zoom in on the projector to show the join." },
            { got: "Clicking the sprite should run the script.", fix: "Revisit hat blocks: something has to start the script. Point at the green flag." },
            { got: "The sprite is broken because nothing happened.", fix: "Ask 'which hat block is at the top?' Nine times out of ten there isn't one." }
          ],
          check: [
            "They can point to the Stage, the sprite list and the palette on their own screen.",
            "Their script runs on the green flag and says something personal to them.",
            "They can read their script out loud in order."
          ],
          before: [
            "Open the finished Week 1 example on the projector before students arrive.",
            "Check that every laptop can reach Scratch, or install the offline editor.",
            "Write 'Stage · Sprite · Block · Script · Hat block' on the board."
          ]
        }
      }
    },

    /* ------------------------------------------------------------------ 2 */
    {
      n: 2, title: "Sprites & Movement", emoji: "🧭", color: "looks", demo: "move",
      concept: "Every position on the Stage has an address called a coordinate: x tells you left and right, y tells you up and down. Tell a sprite its address and it goes there.",
      learn: [
        "The Stage is a coordinate grid: x = left/right, y = up/down",
        "\"go to x y\" teleports a sprite instantly",
        "\"move 10 steps\" slides a sprite smoothly",
        "Direction and turning: \"turn 90 degrees\" and \"point in direction\""
      ],
      teachingPoint: "The middle of the Stage is (0, 0). x goes from -240 to 240, y goes from -180 to 180. Learn the grid and you can put a sprite anywhere.",
      vocab: ["Coordinate", "x position", "y position", "Direction", "Origin"],
      activity: [
        "Start with a sprite on the Stage.",
        "Use \"go to x -180 y 120\" to jump it to the top-left corner.",
        "Use \"move 60 steps\" to slide it across the Stage.",
        "Turn it with \"turn 90 degrees\", then move again.",
        "Combine blocks: move to the centre, then to the bottom-right.",
        "Watch the x and y numbers in the Sprite info panel change as it moves."
      ],
      miniProject: {
        title: "Draw a square path",
        desc: "Make a sprite walk a square: move, turn, move, turn — repeated four times.",
        example: "move → turn 90° → move → turn 90° ×4"
      },
      stretch: "Make the sprite move in a circle or a zigzag pattern using different turn amounts each time. Try 45° to make an octagon.",
      blocks: [
        { cat: "events", text: "when green flag clicked", hat: true },
        { cat: "motion", text: "go to x %1 y %2", in: { 1: "-180", 2: "120" } },
        {
          cat: "control", text: "repeat %1", in: { 1: "4" }, c: [[
            { cat: "motion", text: "move %1 steps", in: { 1: "60" } },
            { cat: "motion", text: "turn %1 degrees", in: { 1: "90" } }
          ]]
        }
      ],
      teacher: {
        timing: "5 min demo · 25 min build · 10 min play · 10 min share",
        errors: [
          "Square comes out wonky — check all four turns are the same and the moves are equal.",
          "Sprite walks off the Stage — that's fine, demonstrate \"if on edge, bounce\" as a teaser.",
          "Mixing up \"move 10 steps\" (distance) with \"change x by 10\" (position)."
        ],
        support: "Give them the four move/turn values written on the board to copy.",
        extend: "Challenge them to draw a triangle (hint: three turns of 120°).",
        tip: "Walk to the corner of the room and have the class shout the coordinates of their own classroom \"grid\"."
      },

      notes: {
        student: {
          idea: [
            "Imagine your classroom floor is a giant piece of graph paper. To tell a friend where to stand you could say 'four tiles right, three tiles up'. Scratch uses exactly the same idea.",
            "The Stage is a grid and the middle is (0, 0). x tells you left and right: negative numbers go left, positive numbers go right. y tells you up and down: positive numbers go up, negative numbers go down. x runs from -240 to 240 and y runs from -180 to 180.",
            "Two motion blocks do different jobs. 'go to x y' teleports a sprite instantly to a spot. 'move 10 steps' nudges it forward in whatever direction it is facing. Turn a sprite and then move it, and you can draw shapes."
          ],
          words: [
            { term: "Coordinate", meaning: "a pair of numbers (x, y) that names one exact spot on the Stage." },
            { term: "x position", meaning: "how far left or right the sprite is. Negative is left of the middle." },
            { term: "y position", meaning: "how far up or down the sprite is. Positive is above the middle." },
            { term: "Direction", meaning: "the way a sprite is facing, measured in degrees. 90 faces right, 0 faces up." },
            { term: "Origin", meaning: "the middle of the Stage — the point (0, 0)." }
          ],
          remember: [
            "The middle of the Stage is (0, 0).",
            "'go to' is instant; 'move' slides.",
            "A square needs four equal moves and four 90 degree turns.",
            "Watch the x and y numbers change as the sprite moves."
          ],
          discuss: [
            "Where on the Stage is x -240 y 180?",
            "Why does a square need 90 degree turns and not 100 degree turns?",
            "How could you make the sprite draw a bigger square?"
          ]
        },
        teacher: {
          goal: "Coordinates turn movement from lucky guessing into something students can aim. Get them comfortable reading the x and y numbers rather than memorising them.",
          script: "Do it physically. Stand at the classroom door and ask the class to give you coordinates to walk to your desk — x first, then y. Then label the corners of the room as (-240, 180) and (240, -180). The grid stops being abstract very quickly.",
          misconceptions: [
            { got: "'move 10 steps' moves 10 tiles to the right.", fix: "It moves forward in the direction the sprite faces. Turn first, then move — demonstrate both." },
            { got: "Negative numbers are 'wrong' numbers.", fix: "Draw a number line with 0 in the middle. Negative just means the other side of zero." },
            { got: "A bigger y means lower down.", fix: "On the Stage y grows upwards, like a lift going up. Label the axis on the board." }
          ],
          check: [
            "They can say where (0, -180) is without touching the mouse.",
            "Their sprite draws a square with equal sides and matching turns.",
            "They can explain the difference between 'go to' and 'move'."
          ],
          before: [
            "Turn on the x and y readout next to the sprite in Scratch's Sprite pane.",
            "Put a large coordinate grid on the board or the floor.",
            "Prepare a deliberately wonky square so the class can debug it together."
          ]
        }
      }
    },

    /* ------------------------------------------------------------------ 3 */
    {
      n: 3, title: "Events (Click & Keys)", emoji: "⌨️", color: "events", demo: "keys",
      concept: "Events listen for something to happen — a click, a key press, the green flag. They are what turn a slideshow into a game.",
      learn: [
        "\"when green flag clicked\" runs code at the start",
        "\"when this sprite clicked\" runs code when you click the sprite",
        "\"when [key] pressed\" runs code when a key is pressed",
        "Several events can be running at the same time"
      ],
      teachingPoint: "Without events, code runs once and stops. With events, the player is in charge — press a key and something answers.",
      vocab: ["Event", "Input", "Listener", "Interactive"],
      activity: [
        "Create a sprite you can control.",
        "Add a \"when [left arrow] key pressed\" block.",
        "Inside it, use \"change x by -10\" to move left.",
        "Repeat for right, up and down arrows.",
        "Test moving your sprite around the Stage.",
        "Add \"when this sprite clicked\" that makes it say \"Ouch!\"."
      ],
      miniProject: {
        title: "Controllable character",
        desc: "A character you steer with the four arrow keys.",
        example: "Arrow keys = movement, click = reaction"
      },
      stretch: "Hold a key down — does the sprite keep moving? It only moves once per press. To keep moving, put a \"forever\" loop inside the key event (preview of Week 4).",
      blocks: [
        { cat: "events", text: "when left arrow key pressed", hat: true },
        { cat: "motion", text: "change x by %1", in: { 1: "-10" } },
        { cat: "events", text: "when right arrow key pressed", hat: true },
        { cat: "motion", text: "change x by %1", in: { 1: "10" } },
        { cat: "events", text: "when up arrow key pressed", hat: true },
        { cat: "motion", text: "change y by %1", in: { 1: "10" } },
        { cat: "events", text: "when down arrow key pressed", hat: true },
        { cat: "motion", text: "change y by %1", in: { 1: "-10" } }
      ],
      teacher: {
        timing: "5 min demo · 20 min build · 5 min partner play · 15 min challenge",
        errors: [
          "Key events but the sprite doesn't move — they pressed the key while the sprite was not focused, or used the wrong key name.",
          "One script with four key blocks — each key needs its OWN hat block.",
          "Sprite moves too far — change x by 10 vs 100."
        ],
        support: "Do left and right only, then add up and down.",
        extend: "Add a speed toggle, or a \"when space pressed\" that makes the sprite jump.",
        tip: "Play the demo live and let a student drive it — hands on the keyboard is the fastest way to teach events."
      },

      notes: {
        student: {
          idea: [
            "A slideshow just plays. A game reacts. The difference is events: something happens, and your code answers it. Press an arrow key and a sprite moves. Click a sprite and it says 'Ouch!'.",
            "Event blocks are the ones with rounded tops — hat blocks. 'when green flag clicked', 'when this sprite clicked' and 'when [key] pressed' all wait quietly until their moment arrives, then they run the script underneath them.",
            "You can have many event scripts at once. One project can listen for the left arrow, the right arrow and a mouse click at the same time, and each script does its own job."
          ],
          words: [
            { term: "Event", meaning: "something that happens which your code can react to — a click, a key press, the green flag." },
            { term: "Input", meaning: "an action from the player, such as pressing a key or moving the mouse." },
            { term: "Listener", meaning: "an event block that waits for its event to happen." },
            { term: "Interactive", meaning: "a project the player can control, instead of just watching." }
          ],
          remember: [
            "Every event needs its own hat block. Four keys means four hat blocks.",
            "Event scripts only run when their event happens.",
            "The green flag is the usual way to start a game.",
            "Lots of scripts can be running at the same time."
          ],
          discuss: [
            "What other things could count as an event in a game?",
            "Why is it useful that several scripts can run at once?",
            "What happens if you press a key the sprite is not listening for?"
          ]
        },
        teacher: {
          goal: "Events are the moment projects stop being demonstrations and start being playable. Aim for every student steering a sprite with all four arrow keys.",
          script: "Ask a student to be a sprite. 'When I say jump, you jump.' Say it and they jump. Then say 'now you decide — raise your hand when you want to jump.' Point out that you just handed them control. That is what an event does.",
          misconceptions: [
            { got: "One 'when key pressed' block with four key changes inside.", fix: "Each key needs its own hat block. Show two separate stacks side by side on the projector." },
            { got: "'change x by 100' seems like a reasonable speed.", fix: "Let them watch the sprite shoot off the Stage, then shrink it to 10. Discovery works better than instruction here." },
            { got: "The key presses do nothing.", fix: "The Stage must be clicked first so the project has keyboard focus. Click the Stage, then press the key." }
          ],
          check: [
            "The sprite moves in all four directions, with one script per key.",
            "Clicking the sprite produces a reaction.",
            "They can explain why nothing happens until a key is pressed."
          ],
          before: [
            "Check how keyboard focus behaves in the browser version of Scratch you use.",
            "Seat students in pairs: one drives the keyboard, one watches for the four hat blocks.",
            "Prepare a broken example with one key block trying to do four movements."
          ]
        }
      }
    },

    /* ------------------------------------------------------------------ 4 */
    {
      n: 4, title: "Loops", emoji: "🔁", color: "control", demo: "loop",
      concept: "A loop repeats blocks for you. Instead of copying the same block ten times, one loop does the work.",
      learn: [
        "\"repeat 10\" — do something a set number of times",
        "\"repeat until\" — keep going until something becomes true",
        "\"forever\" — loop non-stop until the project stops",
        "Using loops for smooth animation and automatic movement"
      ],
      teachingPoint: "Loops save time and make code easier to change. Want the ball to move faster? Change one number, not ten blocks.",
      vocab: ["Loop", "Repeat", "Forever", "Iteration", "Animation"],
      activity: [
        "Create a sprite that spins.",
        "Put a \"forever\" loop around \"turn 15 degrees\".",
        "Click the green flag and watch it spin non-stop.",
        "Now make a \"repeat 10\" loop that moves a sprite 10 times.",
        "Build a ball that bounces up and down inside a loop.",
        "Add \"wait 0.02 seconds\" so the motion looks smooth, not jumpy."
      ],
      miniProject: {
        title: "Bouncing ball",
        desc: "The ball moves down, bounces off the bottom edge, and comes back up — forever.",
        example: "forever → move 10 steps → if on edge, bounce"
      },
      stretch: "Make a sprite walk in a circle 5 times, then stop. Use \"repeat 5\" wrapped around a smaller loop.",
      example: { label: "Game Example", text: "An automated enemy that patrols back and forth using a loop plus movement." },
      blocks: [
        { cat: "events", text: "when green flag clicked", hat: true },
        {
          cat: "control", text: "forever", c: [[
            { cat: "motion", text: "move %1 steps", in: { 1: "10" } },
            { cat: "motion", text: "if on edge, bounce" },
            { cat: "control", text: "wait %1 seconds", in: { 1: "0.02" } }
          ]]
        }
      ],
      teacher: {
        timing: "5 min demo · 20 min build · 10 min experiments · 10 min share",
        errors: [
          "Sprite spins too fast to see — add a wait inside the loop.",
          "Nothing repeats — the loop is empty or the blocks are outside it.",
          "Forever loop makes the project freeze — always include a small wait.",
          "Ball shoots off the Stage — make sure \"if on edge, bounce\" is INSIDE the loop."
        ],
        support: "Start with \"repeat 10\" so there is a clear beginning and end.",
        extend: "Add a second ball with a different speed and compare them.",
        tip: "Use a physical action: everyone stands, and a \"repeat 4\" loop means clap 4 times. Loops are muscle memory."
      },

      notes: {
        student: {
          idea: [
            "Copying the same block ten times is slow to build and horrible to fix. Loops solve that: you write the blocks once and tell Scratch how many times to repeat them.",
            "'repeat 10' runs its blocks a set number of times and then stops. 'forever' runs them non-stop until you press the red stop sign. 'repeat until' keeps going until a condition becomes true.",
            "Animation depends on loops. A ball that bounces forever is just one loop containing a move and a bounce. Add a tiny 'wait' inside the loop and the movement looks smooth instead of jumpy."
          ],
          words: [
            { term: "Loop", meaning: "blocks that repeat." },
            { term: "Repeat", meaning: "to do something again." },
            { term: "Forever", meaning: "a loop that never stops on its own." },
            { term: "Iteration", meaning: "one trip around a loop. Repeating 10 times is 10 iterations." },
            { term: "Animation", meaning: "still pictures changing quickly until they look like movement." }
          ],
          remember: [
            "'repeat' has a beginning and an end; 'forever' does not.",
            "Blocks must go INSIDE the loop — dragging them underneath does nothing.",
            "A small wait makes movement smooth and stops the project freezing.",
            "Changing one number in a loop changes every single repeat."
          ],
          discuss: [
            "What is the difference between 'repeat 4' and 'forever'?",
            "Why does a forever loop with no wait make a project slow?",
            "Which routine in your day is like a loop?"
          ]
        },
        teacher: {
          goal: "Students should feel the 'one change fixes everything' moment. Show a ten-block animation, replace it with a loop, then change one number and let them watch every repeat update.",
          script: "Get everyone standing. A 'repeat 4' loop means clap four times. A 'forever' loop means keep clapping until I press the imaginary stop sign. Their arms will tire, which is exactly why we put waits inside loops.",
          misconceptions: [
            { got: "Blocks placed after the loop are inside it.", fix: "Point at the indent. The C-shape covers what is inside; anything below the arm is outside. Zoom in." },
            { got: "A forever loop with no wait is fine.", fix: "Run it and let the project crawl, then add a 0.02 second wait and watch it glide." },
            { got: "The sprite disappeared, so the project crashed.", fix: "It usually flew off the Stage. Add 'if on edge, bounce' inside the loop." }
          ],
          check: [
            "Their ball bounces, keeps going and stays on the Stage.",
            "They can say how many times a 'repeat 6' loop will run.",
            "They can change the speed by editing one number."
          ],
          before: [
            "Prepare two versions of one animation: copied blocks and a loop.",
            "Point out the red stop sign — forever loops need a way to stop.",
            "Have the bouncing ball script ready as a starter for anyone stuck."
          ]
        }
      }
    },

    /* ------------------------------------------------------------------ 5 */
    {
      n: 5, title: "Conditionals (If / Else)", emoji: "🤔", color: "sensing", demo: "catch",
      concept: "Conditionals let your game make decisions: if something is true, do this — otherwise do that.",
      learn: [
        "\"if [condition] then\" — do something only when it is true",
        "\"if [condition] then ... else ...\" — choose between two paths",
        "Common conditions: touching, x position, equals",
        "Building game rules with conditionals"
      ],
      teachingPoint: "Games are full of decisions: \"If the player touches the coin, collect it. If the coin hits the ground, it's game over.\"",
      vocab: ["Condition", "If / Else", "Boolean", "Game over", "Respawn"],
      activity: [
        "Create two sprites: a player and a coin.",
        "Make the coin fall using a loop and \"change y by -5\".",
        "Add \"if touching player then broadcast collect\".",
        "Make the coin disappear and reappear at the top when collected.",
        "Keep the player on screen with \"if x position > 200 then ...\".",
        "Add a game-over: \"if y position < -170 then stop all\"."
      ],
      miniProject: {
        title: "Catch the falling object",
        desc: "A coin drops from the top; the player catches it at the bottom. Catch it and it respawns; let it hit the ground and the game ends.",
        example: "touching coin → respawn; touches ground → game over"
      },
      stretch: "Make the coin fall faster every time it is caught. Hint: use a variable to remember the speed (you'll learn variables next week).",
      example: { label: "Story Example", text: "A character that reacts differently depending on what you click: click the happy face and they smile, click the sad face and they frown." },
      blocks: [
        { cat: "events", text: "when green flag clicked", hat: true },
        {
          cat: "control", text: "forever", c: [[
            { cat: "control", text: "if %1 then", in: { 1: "touching player ?" }, c: [[
              { cat: "events", text: "broadcast %1", in: { 1: "collect" } }
            ]] },
            { cat: "motion", text: "change y by %1", in: { 1: "-5" } },
            { cat: "control", text: "if %1 then", in: { 1: "y position < -170" }, c: [[
              { cat: "control", text: "stop all" }
            ]] }
          ]]
        },
        { cat: "events", text: "when I receive %1", in: { 1: "collect" }, hat: true },
        { cat: "motion", text: "go to x %1 y %2", in: { 1: "0", 2: "170" } }
      ],
      teacher: {
        timing: "5 min demo · 25 min build · 10 min playtest · 10 min debug share",
        errors: [
          "Coin passes through the player — the \"touching\" condition uses the wrong sprite name.",
          "Game over triggers immediately — the ground check is too high; lower the y value.",
          "Coin never disappears — the respawn block is outside the if-block.",
          "Everything stops at the start — \"stop all\" placed at the top of the script."
        ],
        support: "Provide the falling-coin script as a saved starter and have them add only the player catch.",
        extend: "Add two coins, or an obstacle the player must avoid.",
        tip: "Act it out: \"If I am touching the ground, then I sit down.\" Physical if-statements make the logic click."
      },

      notes: {
        student: {
          idea: [
            "Games are full of decisions. If the player touches the coin, collect it. If the coin hits the ground, the game is over. Code makes those decisions with an 'if' block.",
            "'if [condition] then' runs its blocks only when the condition is true. The diamond-shaped slot holds the question — things like 'touching player?' or 'y position < -170'. If the answer is no, the blocks inside are skipped entirely.",
            "'if ... else' gives you two paths: one for yes and one for no. That is how you make a character smile when you click a happy face and frown when you click a sad one."
          ],
          words: [
            { term: "Condition", meaning: "a question that is either true or false, such as 'am I touching the edge?'" },
            { term: "If / Else", meaning: "a block that chooses between two paths." },
            { term: "Boolean", meaning: "a value that can only ever be true or false." },
            { term: "Game over", meaning: "the moment play stops because the player lost." },
            { term: "Respawn", meaning: "to appear again, usually back at the starting position." }
          ],
          remember: [
            "Conditions are questions with yes or no answers.",
            "Blocks inside 'if' only run when the condition is true.",
            "Put the if-block INSIDE the loop, or it is only checked once.",
            "Test your game over condition — do not just assume it works."
          ],
          discuss: [
            "Give three if-then rules your game needs.",
            "What would happen if the collision check ran only once?",
            "How could you make the game get harder as it goes on?"
          ]
        },
        teacher: {
          goal: "Students should connect a spoken sentence — 'if the basket touches the coin...' — to the block shape. Conditionals are where a project starts to feel like a real game.",
          script: "Act it out. 'If I am touching the ground, then I sit down.' Do it. Then 'if I am touching the ground, then I sit down, else I stand up.' Ask the class for new rules and act those out too. Physical if-statements make the diamond slot obvious.",
          misconceptions: [
            { got: "The coin falls straight through the player.", fix: "The condition names the wrong sprite, or the sprites are drawn very small. Check the dropdown name first, then the sprite size." },
            { got: "Game over fires the moment the game starts.", fix: "The ground test uses a y value that is already true. Lower it to about -170 and check where the sprite really is." },
            { got: "The condition never seems to be checked.", fix: "The if-block is sitting outside the forever loop." }
          ],
          check: [
            "Catching the coin makes it respawn at the top.",
            "Missing makes the game stop, reliably, every time.",
            "They can read their if-block out loud as a sentence."
          ],
          before: [
            "Prepare a deliberately broken game with no collision check for the class to diagnose.",
            "Save the falling coin script as a starter for students who need support.",
            "Write 'touching', 'y position' and 'greater than' on the board as condition examples."
          ]
        }
      }
    },

    /* ------------------------------------------------------------------ 6 */
    {
      n: 6, title: "Variables & Scoring", emoji: "🏆", color: "variables", demo: "score",
      concept: "A variable is a box with a name that remembers a number. Games use variables to keep score, count lives and track levels.",
      learn: [
        "Creating a variable (for example \"score\")",
        "\"set [variable] to [value]\" — store a value",
        "\"change [variable] by [amount]\" — add or subtract",
        "Showing variables on the Stage and using them in conditions"
      ],
      teachingPoint: "Variables remember. Score goes up. Lives go down. When lives reach zero, the game is over.",
      vocab: ["Variable", "Value", "Score", "Lives", "Initialise"],
      activity: [
        "Create a variable called \"score\".",
        "Set it to 0 when the green flag is clicked — always start fresh!",
        "Every time the player catches a coin, \"change score by 1\".",
        "Tick the variable's checkbox to show it on the Stage.",
        "Extend last week's catch game to track the score.",
        "Add a \"lives\" variable that starts at 3 and drops when a coin hits the ground."
      ],
      miniProject: {
        title: "Catch game with score",
        desc: "Take your Week 5 game and add a score that climbs with every catch, then show your final score when the game ends.",
        example: "catch → score + 1; miss → lives - 1; lives = 0 → game over"
      },
      stretch: "Add lives and a game-over screen that shows the final score. Then add a high-score variable that only updates if the new score is bigger.",
      example: { label: "Game Example", text: "A clicker game where every click on the sprite adds 1 point to the score." },
      blocks: [
        { cat: "events", text: "when green flag clicked", hat: true },
        { cat: "variables", text: "set %1 to %2", in: { 1: "score", 2: "0" } },
        { cat: "variables", text: "set %1 to %2", in: { 1: "lives", 2: "3" } },
        { cat: "events", text: "when I receive %1", in: { 1: "collect" }, hat: true },
        { cat: "variables", text: "change %1 by %2", in: { 1: "score", 2: "1" } },
        { cat: "sensing", text: "touching %1 ?", in: { 1: "ground" } }
      ],
      teacher: {
        timing: "5 min demo · 25 min build · 10 min playtest · 10 min high-score challenge",
        errors: [
          "Score keeps counting after restart — missing \"set score to 0\".",
          "Score not visible — the checkbox next to the variable in the palette isn't ticked.",
          "Lives go negative — add \"if lives < 1 then stop all\".",
          "Two variables with the same name — check the \"for all sprites\" vs \"for this sprite only\" choice."
        ],
        support: "Add score first; add lives only if they are ready.",
        extend: "Add a timer variable that counts up, or a level that increases every 5 points.",
        tip: "\"For all sprites\" vs \"for this sprite only\" is the question students ask most — demo it with two sprites having their own version of the same variable."
      },

      notes: {
        student: {
          idea: [
            "A variable is a labelled box that remembers something. You give it a name, like 'score', and it holds a number. Later you can look inside it, add to it, or empty it and start again.",
            "'set score to 0' puts a value into the box. 'change score by 1' adds to whatever is already in there. Tick the checkbox next to the variable's name and its value appears on the Stage so players can watch it climb.",
            "Games run on variables: score, lives, level, timer, high score. When lives reach zero the game ends — that is simply a condition checking a variable."
          ],
          words: [
            { term: "Variable", meaning: "a named box that stores a value, such as a number." },
            { term: "Value", meaning: "whatever is inside the box right now." },
            { term: "Score", meaning: "a variable that counts points." },
            { term: "Lives", meaning: "a variable that counts how many chances are left." },
            { term: "Initialise", meaning: "to set a variable to its starting value, usually when the green flag is clicked." }
          ],
          remember: [
            "Always 'set score to 0' on the green flag, or the score carries on from last time.",
            "'set' replaces the value; 'change' adds or subtracts.",
            "A variable only shows on the Stage if its checkbox is ticked.",
            "'For all sprites' means everyone shares one box."
          ],
          discuss: [
            "Which numbers does your game need to remember?",
            "Why does the score keep counting if you forget to reset it?",
            "How would a high-score variable be different from a score variable?"
          ]
        },
        teacher: {
          goal: "Every student leaves with a working score that resets properly. The reset-to-zero habit is the single most important thing to teach this week.",
          script: "Use a physical box or tin with a label. Put nothing inside and call it zero. Drop one counter in and say 'change by 1'. Tip it out and say 'set to 0'. Then label a second box 'lives' and repeat the whole thing.",
          misconceptions: [
            { got: "The score climbs forever, even across restarts.", fix: "There is no 'set score to 0' on the green flag. Make it the first block under the hat, in every project, every time." },
            { got: "The score is not visible.", fix: "The checkbox beside the variable in the Blocks palette is not ticked." },
            { got: "Lives go into negative numbers.", fix: "Add 'if lives < 1 then stop all' immediately after the lives change." },
            { got: "Two sprites behave strangely with the same variable.", fix: "Explain 'for all sprites' versus 'for this sprite only'. Each sprite can have its own private copy." }
          ],
          check: [
            "The score resets to 0 on every green flag press.",
            "Catching a coin visibly adds 1 to the displayed score.",
            "Losing all lives shows the final score and stops the game."
          ],
          before: [
            "Bring a physical box or tin for the variable demonstration.",
            "Have the Week 5 catch game saved so students extend it rather than rebuild it.",
            "Decide whether you will teach 'for all sprites' or 'for this sprite only' this week."
          ]
        }
      }
    },

    /* ------------------------------------------------------------------ 7 */
    {
      n: 7, title: "Broadcasting & Sprite Communication", emoji: "📣", color: "sound", demo: "broadcast",
      concept: "Sprites can send each other messages. One sprite broadcasts, another receives — that's how big projects stay organised.",
      learn: [
        "\"broadcast [message]\" — send a message that other sprites hear",
        "\"when I receive [message]\" — act when a message arrives",
        "Sprite coordination: one sprite triggers another",
        "Chains: A triggers B, B triggers C"
      ],
      teachingPoint: "Instead of putting all the code in one sprite, spread it out and let sprites talk. Broadcasting keeps each sprite's job simple.",
      vocab: ["Broadcast", "Message", "Receive", "Coordination", "Chain"],
      activity: [
        "Create two sprites: a button and a light bulb.",
        "When the button is clicked, broadcast \"turn_on\".",
        "When the bulb receives \"turn_on\", change its colour to yellow.",
        "Add a second message for \"turn_off\".",
        "Build a mini dialogue: Sprite A says something when clicked, then broadcasts.",
        "Sprite B receives the message and replies."
      ],
      miniProject: {
        title: "Simple dialogue system",
        desc: "Two characters have a back-and-forth conversation. Clicking one makes the other respond.",
        example: "A: \"Want to play?\" → broadcast → B: \"Yes! Let's go!\""
      },
      stretch: "Build a chain: clicking Sprite A triggers B, which triggers C, which triggers D. Four sprites, four messages.",
      example: { label: "Story Example", text: "A narrator speaks and each broadcast changes the scenery or makes a new character appear." },
      blocks: [
        { cat: "events", text: "when this sprite clicked", hat: true },
        { cat: "events", text: "broadcast %1", in: { 1: "turn_on" } },
        { cat: "events", text: "when I receive %1", in: { 1: "turn_on" }, hat: true },
        { cat: "looks", text: "switch costume to %1", in: { 1: "bulb-on" } }
      ],
      teacher: {
        timing: "5 min demo · 25 min build · 10 min chain challenge · 10 min share",
        errors: [
          "Nothing happens — the broadcast name doesn't match the receive name (even a capital letter counts).",
          "Two sprites both react when only one should — both have \"when I receive\" for the same message.",
          "Message sent but no receiver exists yet."
        ],
        support: "Use just one message pair (one broadcast, one receive) to start.",
        extend: "Turn the dialogue into a mini scene with three or more exchanges.",
        tip: "This is the week to introduce pair programming: one student writes the broadcaster, the other writes the receiver."
      },

      notes: {
        student: {
          idea: [
            "Big projects have lots of sprites doing different jobs. Instead of piling all the code into one sprite, each sprite looks after itself — and they talk to each other with messages.",
            "'broadcast [message]' sends a message out into the project. Any sprite with a 'when I receive [message]' block for that exact name hears it and runs its script. It is a bit like a teacher calling a name across the room.",
            "Broadcasts let one action trigger another: click a button, the button broadcasts, the light bulb switches on. Chain them together — A triggers B triggers C — and you can build whole scenes."
          ],
          words: [
            { term: "Broadcast", meaning: "to send a message out to every sprite in the project." },
            { term: "Message", meaning: "the name of the broadcast, such as 'turn_on'." },
            { term: "Receive", meaning: "to hear a message and react to it." },
            { term: "Coordination", meaning: "several sprites working together." },
            { term: "Chain", meaning: "one message triggering another, which triggers another." }
          ],
          remember: [
            "The broadcast name and the receive name must match exactly — spelling and capital letters.",
            "One message can be heard by several sprites at once.",
            "The sender does not need to know who is listening.",
            "Messages keep each sprite's code short and easy to read."
          ],
          discuss: [
            "Why is splitting code between sprites better than putting it all in one?",
            "What happens if two sprites listen for the same message?",
            "Design a chain of four messages for a scene of your own."
          ]
        },
        teacher: {
          goal: "Students see why splitting code across sprites is a good idea, and they experience the exact-match rule for message names.",
          script: "Play a whisper game. One student receives a message and passes it on. Before you start, agree the message names as a class and write them on the board — agreeing the names is the real lesson here.",
          misconceptions: [
            { got: "Nothing happens at all.", fix: "The broadcast and receive names do not match. Compare them letter by letter; capital letters count." },
            { got: "Two sprites react when only one should.", fix: "Both have a 'when I receive' for that message. Ask the class which sprite the message was really for." },
            { got: "The message is sent but nobody hears it.", fix: "No receiver exists yet. Add the 'when I receive' hat block before testing." }
          ],
          check: [
            "Clicking one sprite makes another sprite change.",
            "The class can agree and reuse the same message names.",
            "Their dialogue has at least two exchanges."
          ],
          before: [
            "Write the class's agreed message names on the board before building.",
            "Set up pair programming: one writes the broadcaster, the other the receiver.",
            "Prepare the button-and-bulb example to demonstrate on the projector."
          ]
        }
      }
    },

    /* ------------------------------------------------------------------ 8 */
    {
      n: 8, title: "Storytelling & Animation", emoji: "🎬", color: "looks", demo: "story",
      concept: "Animation is just pictures changing quickly. Costumes change how a sprite looks; backdrops change the scene.",
      learn: [
        "Costumes: different pictures a sprite can wear",
        "\"next costume\" and \"switch costume to [name]\"",
        "Backdrops: changing the whole scene",
        "Smooth animation by switching costumes fast, and combining sprites, sound and effects"
      ],
      teachingPoint: "Great stories are told one scene at a time. Plan your scenes, then let costumes and backdrops do the acting.",
      vocab: ["Costume", "Backdrop", "Frame", "Scene", "Animation"],
      activity: [
        "Pick a sprite with multiple costumes (or upload two or three simple ones).",
        "Make a loop: \"repeat 10\" → \"next costume\" → \"wait 0.1 seconds\".",
        "Watch your sprite walk, jump or spin.",
        "Change the backdrop and notice how the whole mood of the scene changes.",
        "Combine: the character walks across the Stage while the backdrop changes."
      ],
      miniProject: {
        title: "30-second animated story",
        desc: "Write a 3–5 line story and tell it with sprites, costumes and backdrops.",
        example: "\"A cat wakes up. It sees a butterfly. It chases it. The butterfly flies away. The cat is sad.\""
      },
      stretch: "Add sound effects or music using the sound blocks, and time them to the animation.",
      example: { label: "Game Example", text: "An animated menu or intro screen where characters move and change costume." },
      blocks: [
        { cat: "events", text: "when green flag clicked", hat: true },
        { cat: "looks", text: "switch backdrop to %1", in: { 1: "Forest" } },
        {
          cat: "control", text: "repeat %1", in: { 1: "10" }, c: [[
            { cat: "looks", text: "next costume" },
            { cat: "motion", text: "move %1 steps", in: { 1: "10" } },
            { cat: "control", text: "wait %1 seconds", in: { 1: "0.1" } }
          ]]
        },
        { cat: "looks", text: "say %1 for %2 seconds", in: { 1: "Where did it go?", 2: "2" } }
      ],
      teacher: {
        timing: "5 min storyboarding · 10 min demo · 25 min build · 10 min screening",
        errors: [
          "Animation is jumpy — add \"wait 0.1 seconds\" inside the loop.",
          "Backdrop changes instantly at the start — add \"wait\" blocks between switches.",
          "Only one costume on the sprite — they need to add costumes or pick a sprite that has them."
        ],
        support: "Give a finished 3-line story with sprites already placed; they animate it.",
        extend: "Add a title screen, a second scene and a caption sprite with narration.",
        tip: "Hold a mini film festival at the end: lights off, projects on the projector, three cheers per film."
      },

      notes: {
        student: {
          idea: [
            "Animation is a trick. Cartoons are just pictures shown one after another very quickly, and your eyes blend them into movement. In Scratch, each picture is a costume.",
            "'next costume' moves a sprite to its next picture. Put it in a loop with a short wait and your sprite walks, flaps or spins. A backdrop does the same job for the whole scene: change it to move to a new place, or a new time of day.",
            "A story is scenes in order. Decide what happens first, next and last, then let costumes, backdrops and 'say' blocks tell it. A simple cat-and-butterfly story is five lines long and about thirty seconds."
          ],
          words: [
            { term: "Costume", meaning: "a picture a sprite can wear. Changing it changes how the sprite looks." },
            { term: "Backdrop", meaning: "the background picture for the whole Stage." },
            { term: "Frame", meaning: "one picture in an animation." },
            { term: "Scene", meaning: "one part of a story, in one place." },
            { term: "Animation", meaning: "pictures changing quickly until they look like movement." }
          ],
          remember: [
            "Short waits between costumes make animation look smooth.",
            "A sprite needs more than one costume before you can animate it.",
            "Backdrops set the mood — night feels different from day.",
            "Plan your scenes in order before you code them."
          ],
          discuss: [
            "What makes animation look smooth instead of jerky?",
            "How could the backdrop tell part of your story?",
            "Which three scenes would your story need?"
          ]
        },
        teacher: {
          goal: "Students should plan before they animate. A four-box storyboard is the difference between a charming thirty-second story and a random walk across the Stage.",
          script: "Flip a pad of sticky notes to show animation: draw a cat on four notes and flick through them. Ask the class why it looks like movement, then tell them Scratch's costumes do exactly the same thing.",
          misconceptions: [
            { got: "The animation looks jerky.", fix: "Add 'wait 0.1 seconds' inside the repeat loop. With no wait the costumes blur together." },
            { got: "The sprite only has one costume.", fix: "Add costumes in the Costumes tab, or pick a sprite that already has several." },
            { got: "The backdrop changes instantly before the story starts.", fix: "Add 'wait' blocks between backdrop switches so each scene has time to be seen." }
          ],
          check: [
            "Their animation loops smoothly for at least a few seconds.",
            "The story has a clear beginning, middle and end.",
            "Backdrops change at the right moments."
          ],
          before: [
            "Print a four-box storyboard sheet for every student.",
            "Make sure students know how to add or upload a costume.",
            "Book a projector and plan the film festival slot with the lights dimmed."
          ]
        }
      }
    },

    /* ------------------------------------------------------------------ 9 */
    {
      n: 9, title: "Plan Your Game or Story", emoji: "📝", color: "events", demo: "plan",
      concept: "Design before you build. Professional makers sketch and plan first — it saves time and makes a better final project.",
      learn: [
        "Brainstorming and picking ONE idea you can finish",
        "Planning sprites, backdrops and interactions",
        "Sketching the game map or story flow",
        "Writing pseudocode — plain English that describes your code",
        "Testing ideas on paper before you build them"
      ],
      teachingPoint: "A plan is a map. If you know where you're going, you spend your building time making, not guessing.",
      vocab: ["Design", "Pseudocode", "Storyboard", "Flowchart", "Deliverable"],
      activity: [
        "Choose your path: Game Design or Story Design.",
        "Brainstorm three ideas, then circle the one you're most excited about — and can finish.",
        "Draw the Stage on paper and mark where everything starts.",
        "List every sprite you need.",
        "List every variable you need (score, lives, level, timer).",
        "Write pseudocode for the trickiest part.",
        "Plan at least three interactions or three scenes.",
        "Share your plan with a partner and take their feedback."
      ],
      miniProject: {
        title: "One-page design document",
        desc: "Build your plan on screen and print it out. It becomes your blueprint for Week 10.",
        example: "Sprites list + variables list + sketches + pseudocode"
      },
      stretch: "Plan a stretch feature you might not have time for (a second level, a boss, an alternate ending) and note where it would plug in.",
      blocks: [
        { cat: "events", text: "when green flag clicked", hat: true, pseudocode: true },
        { cat: "variables", text: "set score to 0", pseudocode: true },
        { cat: "control", text: "forever", pseudocode: true, c: [[
          { cat: "motion", text: "move the enemy toward the player", pseudocode: true },
          { cat: "sensing", text: "if touching player", pseudocode: true, c: [[
            { cat: "control", text: "game over", pseudocode: true }
          ]] }
        ]] }
      ],
      teacher: {
        timing: "10 min examples · 30 min planning · 10 min peer feedback · 5 min check-in",
        errors: [
          "Choosing an idea that's too big — help them cut it down to one strong feature.",
          "No plan for variables — ask \"What numbers does your game need to remember?\"",
          "Skipping the sketch — insist on drawing before coding."
        ],
        support: "Offer a half-filled template they complete rather than a blank page.",
        extend: "Ask for a paper prototype they can test with a partner before coding.",
        tip: "Collect the plans and skim them before Week 10 so you can pre-empt missing skills."
      },

      notes: {
        student: {
          idea: [
            "Nobody builds a house by grabbing bricks and hoping for the best. You draw a plan first. Games and stories work the same way: a plan tells you what to build next and stops you getting lost halfway through.",
            "Your plan needs four things: a list of sprites, a list of variables, at least three interactions or scenes, and pseudocode. Pseudocode is plain English that describes what the code will do, such as 'when the green flag is clicked, set score to 0'.",
            "Pseudocode is powerful because you can write it before you know which blocks to use. If you can describe it in words, you can build it in Scratch."
          ],
          words: [
            { term: "Design", meaning: "the plan for how something will work and look." },
            { term: "Pseudocode", meaning: "plain English that describes code, without worrying about blocks." },
            { term: "Storyboard", meaning: "a few sketches showing what happens in each scene." },
            { term: "Flowchart", meaning: "a diagram of steps and decisions." },
            { term: "Deliverable", meaning: "the thing you actually hand in or present." }
          ],
          remember: [
            "Choose ONE idea you can finish, not three you cannot.",
            "List the sprites and variables before you open Scratch.",
            "Write pseudocode for the trickiest part of the project.",
            "Ask a partner to read your plan back to you."
          ],
          discuss: [
            "Which part of your plan is the hardest, and why?",
            "What could you cut if you ran out of time?",
            "How will you know your project is finished?"
          ]
        },
        teacher: {
          goal: "Get a realistic, written plan from every student. Vet the plans for size — the most common Week 10 failure is an idea that was never finishable.",
          script: "Show two plans side by side: one that says 'a cool game about a dragon', and one that lists three sprites, two variables and four lines of pseudocode. Ask the class which one they would rather build from, and why.",
          misconceptions: [
            { got: "My idea is a whole adventure with five levels.", fix: "Help them circle one level. Offer the extras as stretch goals for Week 10." },
            { got: "I do not need any variables.", fix: "Ask what numbers the game has to remember. Points, lives and time all need variables." },
            { got: "I will plan as I go.", fix: "Insist on the sketch first. Five minutes of drawing saves an hour of undoing." }
          ],
          check: [
            "The plan fits on one page and lists sprites, variables and interactions.",
            "The pseudocode describes at least the trickiest section.",
            "The student can explain what they will build in under a minute."
          ],
          before: [
            "Print or share the one-page design document template from the Week 9 demo.",
            "Skim the plans and note who may need extra support in Week 10.",
            "Decide how students will save and back up their work."
          ]
        }
      }
    },

    /* ------------------------------------------------------------------ 10 */
    {
      n: 10, title: "Build & Showcase", emoji: "🎉", color: "control", demo: "showcase",
      concept: "Put everything together, test it, improve it, and present it. This is the week you become a maker.",
      learn: [
        "Combining concepts from all nine weeks",
        "Testing and debugging your own code",
        "Iterating: improving things that don't work yet",
        "Presenting your project to an audience"
      ],
      teachingPoint: "Finished beats perfect. Get it working, get it playtested, then make it sparkle.",
      vocab: ["Debug", "Test", "Iterate", "Prototype", "Present"],
      activity: [
        "Monday–Thursday: build. Friday: present.",
        "Set up your sprites and backdrops from your plan.",
        "Code the basic movement or animation first — test it.",
        "Add interactions: clicks, keys and broadcasts.",
        "Add scoring, lives or story dialogue.",
        "Polish: fix bugs, improve visuals, add sound.",
        "Playtest: ask a friend to play. Does it work? Is it fun? Is it clear?"
      ],
      miniProject: {
        title: "Final game or interactive story + 2-minute presentation",
        desc: "Build and present your Week 9 plan. Explain what it is, one cool thing you built, and what was hardest.",
        example: "\"This is a game about a cat chasing butterflies. I used broadcasting so the butterfly and the cat could talk to each other.\""
      },
      stretch: "Add a feature you've never tried before: a leaderboard, a second level, an AI enemy, or a choose-your-own-adventure branch.",
      blocks: [
        { cat: "events", text: "show your project running", hat: true, pseudocode: true },
        { cat: "looks", text: "explain: \"This is a game/story about ___\"", pseudocode: true },
        { cat: "sound", text: "highlight ONE cool thing you built", pseudocode: true },
        { cat: "sensing", text: "answer: \"What was hardest?\" / \"What next?\"", pseudocode: true }
      ],
      teacher: {
        timing: "4 build periods + 1 showcase day · 2–3 min per student presentation",
        errors: [
          "Student spends all week on visuals and doesn't finish the game logic — redirect to the plan's core feature first.",
          "Performance: too many forever loops with no waits makes projects lag.",
          "Last-minute bugs — build in a dedicated playtest day before presentations."
        ],
        support: "Let them present the working part of their plan, even if unfinished. Celebrate what runs.",
        extend: "Add a leaderboard, multiple levels, or an AI enemy — or help a classmate debug.",
        tip: "Use the rubric on this page for assessment and share it with students before they build so they know the targets."
      },

      notes: {
        student: {
          idea: [
            "This is the week you make something of your own. Take your Week 9 plan and build it one piece at a time: sprites first, then movement, then interactions, then score, then polish.",
            "Bugs are not failures. Every game you have ever loved shipped with bugs that somebody had to find and fix. Finding a bug is the first step towards fixing it, so a bug is actually progress.",
            "Your presentation matters too. In about two minutes, say what your project is, show it running, tell us one clever thing you built, and say what you would add next."
          ],
          words: [
            { term: "Debug", meaning: "to find and fix something that is not working." },
            { term: "Test", meaning: "to try your project and check it behaves the way you expect." },
            { term: "Iterate", meaning: "to improve your project step by step." },
            { term: "Prototype", meaning: "an early version you can try out." },
            { term: "Present", meaning: "to show and explain your work to an audience." }
          ],
          remember: [
            "Get it working first; make it beautiful second.",
            "Test after every change, not only at the end.",
            "Playtest with a friend — you cannot see your own bugs.",
            "Finished beats perfect."
          ],
          discuss: [
            "What was the hardest part of your project?",
            "What would you add if you had one more week?",
            "Whose project surprised you, and why?"
          ]
        },
        teacher: {
          goal: "Every student should finish with something that runs and present it with confidence. Protect the showcase day for presenting rather than extra building.",
          script: "Open the week with a famous bug story: the first real computer bug was a moth found trapped inside a machine. Then set the class rule for the week — every bug we find is a win. Celebrate them out loud.",
          misconceptions: [
            { got: "More time on visuals will fix a game that does not work.", fix: "Redirect to the core feature from the plan. Beautiful comes after working." },
            { got: "I will test it all on Friday.", fix: "Build in a midweek playtest checkpoint with a partner, before the polish phase." },
            { got: "My project is bad because it is unfinished.", fix: "Celebrate what runs. Present the working part and name the next step honestly." }
          ],
          check: [
            "The project runs without major bugs and uses at least two or three ideas from earlier weeks.",
            "The student can explain what their code does.",
            "The presentation is clear and finishes in about two minutes."
          ],
          before: [
            "Create the class Scratch studio so projects can be shared and commented on.",
            "Set up the presentation space, the running order and a visible timer.",
            "Share the showcase rubric with students before they start building."
          ]
        }
      }
    }
  ];

  window.SCRATCH_CURRICULUM = {
    slug: "scratch",
    title: "Scratch: Game Development & Storytelling",
    ages: "Ages 7–11",
    length: "10 weeks",
    subject: "Programming",
    prong: "Game Development & Storytelling",
    target: "Ages 7–11, all with laptops.",
    startingPoint: "Students already know basic Scratch ideas (what sprites are, the interface). This course walks through the fundamentals and goes deeper.",
    endGoal: "By Week 10, every student builds and presents one complete Scratch game or interactive story.",
    focus: "Equal emphasis on game development and storytelling/animation.",
    philosophy: "Learn by doing. Each week introduces a concept, then students immediately practice by building something playable or viewable.",
    weeks: weeks
  };
})();
