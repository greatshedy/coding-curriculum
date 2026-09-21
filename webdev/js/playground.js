/* ============================================================
   playground.js — the free-play code playground.
   Loads a blank starter, then lets students swap in any week's
   template from data.js.
   ============================================================ */
(function () {
  "use strict";

  var cur = window.WEBDEV_CURRICULUM;
  if (!cur || !window.CodeRunner) return;

  var BLANK =
`<!DOCTYPE html>
<html>
<head>
  <title>My Playground</title>
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      padding: 40px;
      background: #f8fafc;
    }
    button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
  </style>
</head>
<body>
  <h1 id="title">Hello from my playground!</h1>
  <button id="myButton">Click me</button>

  <script>
    console.log("The playground is running!");

    document.getElementById("myButton").addEventListener("click", function() {
      document.getElementById("title").textContent = "You clicked it!";
      console.log("Button was clicked");
    });
  <\/script>
</body>
</html>`;

  var editor = window.CodeRunner.editor(document.getElementById("editor"), {
    code: BLANK,
    filename: "playground.html"
  });

  var select = document.getElementById("examples");
  var options = [
    { value: "blank", label: "Blank starter page" }
  ];

  // One entry per week that ships a template.
  cur.weeks.forEach(function (w) {
    if (w.template) {
      options.push({ value: "w" + w.n, label: "Week " + w.n + ": " + w.title + " — " + w.template.filename, code: w.template.code });
    }
    if (w.variants) {
      Object.keys(w.variants).forEach(function (k) {
        var v = w.variants[k];
        if (v.template) {
          options.push({ value: "w" + w.n + "-" + k, label: "Week " + w.n + " (" + v.name + ") — " + v.template.filename, code: v.template.code });
        }
      });
    }
  });

  options.forEach(function (o) {
    var opt = document.createElement("option");
    opt.value = o.value;
    opt.textContent = o.label;
    if (o.value === "blank") opt.value = "blank";
    select.appendChild(opt);
  });

  function codeFor(value) {
    if (value === "blank") return BLANK;
    for (var i = 0; i < options.length; i++) {
      if (options[i].value === value && options[i].code) return options[i].code;
    }
    return BLANK;
  }

  select.addEventListener("change", function () {
    if (!select.value) return;
    editor.setCode(codeFor(select.value));
    select.value = "";
  });

  document.getElementById("blankBtn").addEventListener("click", function () {
    editor.setCode(BLANK);
  });
})();
