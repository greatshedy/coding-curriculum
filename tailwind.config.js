/* ============================================================
   CodeLab design tokens — the single source of truth.
   Replaces the nine per-page `tailwind.config` copies that used
   to drift (Scratch's copy had quietly lost the js/sound colors).

   The committed asset is assets/tailwind.build.css, generated once
   and served statically so the site keeps its "no build step at
   runtime" promise and works with no connection. Regenerate after
   changing classes or tokens:

     npx tailwindcss@3.4.17 -c tailwind.config.js \
       -i assets/tailwind.src.css -o assets/tailwind.build.css --minify
   ============================================================ */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Baloo 2"', "Nunito", "sans-serif"],
        sans: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#1f2a44",
        "ink-soft": "#4a5570",
        "ink-muted": "#565f72",
        paper: "#f6f4ee",
        js: "#f7df1e",
        /* AA-safe UI accents: used for text and solid fills that carry text.
           The Scratch recipe blocks keep the bright originals in
           assets/scratch-blocks.css and the lesson-render PALETTE. */
        motion: "#1d4ed8",
        looks: "#6d28d9",
        control: "#b45309",
        variables: "#9a3412",
        /* bright Scratch block palette, for decorative tiles and tints */
        "motion-block": "#4c97ff",
        "looks-block": "#9966ff",
        "control-block": "#ffab19",
        "variables-block": "#ff8c1a",
        sound: "#cf63cf",
        events: "#ffbf00",
        sensing: "#5cb1d6",
        operators: "#59c059",
        myblocks: "#ff6680"
      }
    }
  }
};
