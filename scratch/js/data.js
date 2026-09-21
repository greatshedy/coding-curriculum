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
        prepare: "Have Scratch open on the projector before students arrive. Pre-load a finished example so they see the goal first.",
        errors: [
          "Blocks not connecting — the script must start with a hat block (rounded top).",
          "Nothing happens on click — they may be clicking the sprite instead of the green flag.",
          "Sprite hidden behind the palette — drag it back onto the Stage."
        ],
        support: "Let them copy the example exactly, then change only the message text.",
        extend: "Introduce \"think\" blocks and a second sprite that answers back.",
        tip: "Ask every child to read their script out loud in order — it reinforces that code runs top to bottom."
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
        prepare: "Turn on the x/y readout next to the sprite so coordinates are visible during the demo.",
        errors: [
          "Square comes out wonky — check all four turns are the same and the moves are equal.",
          "Sprite walks off the Stage — that's fine, demonstrate \"if on edge, bounce\" as a teaser.",
          "Mixing up \"move 10 steps\" (distance) with \"change x by 10\" (position)."
        ],
        support: "Give them the four move/turn values written on the board to copy.",
        extend: "Challenge them to draw a triangle (hint: three turns of 120°).",
        tip: "Walk to the corner of the room and have the class shout the coordinates of their own classroom \"grid\"."
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
        prepare: "Remind students how to find the arrow keys on the \"when key pressed\" dropdown menu.",
        errors: [
          "Key events but the sprite doesn't move — they pressed the key while the sprite was not focused, or used the wrong key name.",
          "One script with four key blocks — each key needs its OWN hat block.",
          "Sprite moves too far — change x by 10 vs 100."
        ],
        support: "Do left and right only, then add up and down.",
        extend: "Add a speed toggle, or a \"when space pressed\" that makes the sprite jump.",
        tip: "Play the demo live and let a student drive it — hands on the keyboard is the fastest way to teach events."
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
        prepare: "Show the same animation twice — once with copied blocks, once with a loop — and ask which is easier to fix.",
        errors: [
          "Sprite spins too fast to see — add a wait inside the loop.",
          "Nothing repeats — the loop is empty or the blocks are outside it.",
          "Forever loop makes the project freeze — always include a small wait.",
          "Ball shoots off the Stage — make sure \"if on edge, bounce\" is INSIDE the loop."
        ],
        support: "Start with \"repeat 10\" so there is a clear beginning and end.",
        extend: "Add a second ball with a different speed and compare them.",
        tip: "Use a physical action: everyone stands, and a \"repeat 4\" loop means clap 4 times. Loops are muscle memory."
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
        prepare: "Be ready to show a game that is broken on purpose so the class can spot the missing condition.",
        errors: [
          "Coin passes through the player — the \"touching\" condition uses the wrong sprite name.",
          "Game over triggers immediately — the ground check is too high; lower the y value.",
          "Coin never disappears — the respawn block is outside the if-block.",
          "Everything stops at the start — \"stop all\" placed at the top of the script."
        ],
        support: "Provide the falling-coin script as a saved starter and have them add only the player catch.",
        extend: "Add two coins, or an obstacle the player must avoid.",
        tip: "Act it out: \"If I am touching the ground, then I sit down.\" Physical if-statements make the logic click."
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
        prepare: "Warn students that a variable must be set back to 0 on green flag, or the score keeps climbing.",
        errors: [
          "Score keeps counting after restart — missing \"set score to 0\".",
          "Score not visible — the checkbox next to the variable in the palette isn't ticked.",
          "Lives go negative — add \"if lives < 1 then stop all\".",
          "Two variables with the same name — check the \"for all sprites\" vs \"for this sprite only\" choice."
        ],
        support: "Add score first; add lives only if they are ready.",
        extend: "Add a timer variable that counts up, or a level that increases every 5 points.",
        tip: "\"For all sprites\" vs \"for this sprite only\" is the question students ask most — demo it with two sprites having their own version of the same variable."
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
        prepare: "Create all the message names as a class first, so spelling is consistent — message names must match exactly.",
        errors: [
          "Nothing happens — the broadcast name doesn't match the receive name (even a capital letter counts).",
          "Two sprites both react when only one should — both have \"when I receive\" for the same message.",
          "Message sent but no receiver exists yet."
        ],
        support: "Use just one message pair (one broadcast, one receive) to start.",
        extend: "Turn the dialogue into a mini scene with three or more exchanges.",
        tip: "This is the week to introduce pair programming: one student writes the broadcaster, the other writes the receiver."
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
        prepare: "Print a simple 4-box storyboard template. Students sketch before they code and the projects are far stronger.",
        errors: [
          "Animation is jumpy — add \"wait 0.1 seconds\" inside the loop.",
          "Backdrop changes instantly at the start — add \"wait\" blocks between switches.",
          "Only one costume on the sprite — they need to add costumes or pick a sprite that has them."
        ],
        support: "Give a finished 3-line story with sprites already placed; they animate it.",
        extend: "Add a title screen, a second scene and a caption sprite with narration.",
        tip: "Hold a mini film festival at the end: lights off, projects on the projector, three cheers per film."
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
        prepare: "Show two example plans — one vague, one detailed — and discuss which would be easier to build from.",
        errors: [
          "Choosing an idea that's too big — help them cut it down to one strong feature.",
          "No plan for variables — ask \"What numbers does your game need to remember?\"",
          "Skipping the sketch — insist on drawing before coding."
        ],
        support: "Offer a half-filled template they complete rather than a blank page.",
        extend: "Ask for a paper prototype they can test with a partner before coding.",
        tip: "Collect the plans and skim them before Week 10 so you can pre-empt missing skills."
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
        prepare: "Create a class Scratch studio online so projects can be shared and commented on. Set up a 'Hall of Fame' wall.",
        errors: [
          "Student spends all week on visuals and doesn't finish the game logic — redirect to the plan's core feature first.",
          "Performance: too many forever loops with no waits makes projects lag.",
          "Last-minute bugs — build in a dedicated playtest day before presentations."
        ],
        support: "Let them present the working part of their plan, even if unfinished. Celebrate what runs.",
        extend: "Add a leaderboard, multiple levels, or an AI enemy — or help a classmate debug.",
        tip: "Use the rubric on this page for assessment and share it with students before they build so they know the targets."
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
