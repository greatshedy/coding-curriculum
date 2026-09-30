/* ============================================================
   playground.js — a mini Scratch that runs on the page.
   Click blocks to build a script, press Run, watch the sprite.
   No drag-and-drop: blocks append to the current target.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------- block defs */
  var DEFS = [
    { id: "flag", cat: "events", hat: true, text: "when green flag clicked" },
    { id: "whenkey", cat: "events", hat: true, text: "when %1 key pressed",
      args: [{ k: "key", type: "select", value: "space", options: ["space", "left arrow", "right arrow", "up arrow", "down arrow"] }] },

    { id: "move", cat: "motion", text: "move %1 steps", args: [{ k: "steps", type: "num", value: 10 }] },
    { id: "turn", cat: "motion", text: "turn %1 degrees", args: [{ k: "deg", type: "num", value: 15 }] },
    { id: "goto", cat: "motion", text: "go to x %1 y %2", args: [{ k: "x", type: "num", value: 0 }, { k: "y", type: "num", value: 0 }] },
    { id: "point", cat: "motion", text: "point in direction %1", args: [{ k: "dir", type: "num", value: 90 }] },
    { id: "bounce", cat: "motion", text: "if on edge, bounce" },
    { id: "changex", cat: "motion", text: "change x by %1", args: [{ k: "dx", type: "num", value: 10 }] },
    { id: "changey", cat: "motion", text: "change y by %1", args: [{ k: "dy", type: "num", value: 10 }] },

    { id: "say", cat: "looks", text: "say %1 for %2 seconds", args: [{ k: "msg", type: "text", value: "Hello!" }, { k: "secs", type: "num", value: 2 }] },
    { id: "nextcostume", cat: "looks", text: "next costume" },

    { id: "wait", cat: "control", text: "wait %1 seconds", args: [{ k: "secs", type: "num", value: 1 }] },
    { id: "repeat", cat: "control", text: "repeat %1", args: [{ k: "times", type: "num", value: 10 }], c: 1 },
    { id: "forever", cat: "control", text: "forever", c: 1 },
    { id: "if", cat: "control", text: "if %1 then",
      args: [{ k: "cond", type: "select", value: "touching edge?", options: ["touching edge?", "touching mouse-pointer?", "key pressed?"] }], c: 1 },

    { id: "setvar", cat: "variables", text: "set %1 to %2", args: [{ k: "var", type: "select", value: "score", options: ["score"] }, { k: "val", type: "num", value: 0 }] },
    { id: "changevar", cat: "variables", text: "change %1 by %2", args: [{ k: "var", type: "select", value: "score", options: ["score"] }, { k: "val", type: "num", value: 1 }] }
  ];

  var CAT_ORDER = ["events", "motion", "looks", "control", "variables"];
  var CAT_LABEL = { events: "Events", motion: "Motion", looks: "Looks", control: "Control", variables: "Variables" };
  var COSTUMES = ["🐱", "😺", "😻"];

  function defById(id) {
    for (var i = 0; i < DEFS.length; i++) if (DEFS[i].id === id) return DEFS[i];
    return null;
  }

  /* ---------------------------------------------------------- tiny DOM helper */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null) return;
        if (k === "class") n.className = v;
        else if (k === "text") n.textContent = v;
        else if (k.indexOf("on") === 0 && typeof v === "function") n.addEventListener(k.slice(2), v);
        else n.setAttribute(k, v);
      });
    }
    (kids || []).forEach(function (c) {
      if (c == null) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }
  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
  function num(v) { var n = parseFloat(v); return isNaN(n) ? 0 : n; }
  function norm(d) { return ((d % 360) + 360) % 360; }

  /* ---------------------------------------------------------- state */
  var canvas = document.getElementById("stage");
  var stage = new window.ScratchStage(canvas);
  var sprite = { x: 0, y: 0, dir: 90, costume: 0, say: "", visible: true };
  var vars = { score: 0 };
  var mouse = { x: 0, y: 0 };
  var heldKeys = {};
  var focused = false;

  var script = [];
  var target = { stack: script, label: "the bottom of the script", block: null };
  var keyHats = [];
  var runningHats = {};
  var runtime = { token: 0 };
  var pending = [];
  var STEP = 30;

  var statusEl = document.getElementById("status");
  var runStateEl = document.getElementById("run-state");
  var targetLabelEl = document.getElementById("target-label");
  var editor = document.getElementById("script-editor");

  function setStatus(t) { statusEl.textContent = t || ""; }
  function setRunState(on) {
    runStateEl.textContent = on ? "running" : "stopped";
    runStateEl.className = "pill " + (on ? "bg-green-600 text-white" : "bg-ink/5 text-ink-soft");
  }

  /* ---------------------------------------------------------- timing (cancellable) */
  function delay(ms) {
    return new Promise(function (resolve) {
      var id = setTimeout(function () {
        pending = pending.filter(function (p) { return p.id !== id; });
        resolve();
      }, ms);
      pending.push({ id: id, resolve: resolve });
    });
  }
  function stopAll() {
    runtime.token++;
    var p = pending; pending = [];
    p.forEach(function (x) { clearTimeout(x.id); x.resolve(); });
    runningHats = {};
    sprite.say = "";
    setRunState(false);
  }

  /* ---------------------------------------------------------- conditions + execution */
  function evalCond(c) {
    if (c === "touching edge?") return Math.abs(sprite.x) >= 218 || Math.abs(sprite.y) >= 158;
    if (c === "touching mouse-pointer?") {
      var dx = sprite.x - mouse.x, dy = sprite.y - mouse.y;
      return Math.sqrt(dx * dx + dy * dy) < 40;
    }
    if (c === "key pressed?") return Object.keys(heldKeys).some(function (k) { return heldKeys[k]; });
    return false;
  }

  function describe(b) {
    var out = b.def.text;
    (b.def.args || []).forEach(function (a, i) { out = out.replace("%" + (i + 1), b.params[a.k]); });
    return out;
  }

  async function execBlock(b, ctx) {
    if (ctx.token !== runtime.token) return;
    await delay(STEP);
    if (ctx.token !== runtime.token) return;
    var p = b.params;
    switch (b.def.id) {
      case "move":
        sprite.x = clamp(sprite.x + Math.sin(sprite.dir * Math.PI / 180) * num(p.steps), -240, 240);
        sprite.y = clamp(sprite.y + Math.cos(sprite.dir * Math.PI / 180) * num(p.steps), -180, 180);
        break;
      case "turn": sprite.dir = norm(sprite.dir + num(p.deg)); break;
      case "goto":
        sprite.x = clamp(num(p.x), -240, 240);
        sprite.y = clamp(num(p.y), -180, 180);
        break;
      case "point": sprite.dir = norm(num(p.dir)); break;
      case "bounce":
        if (sprite.x >= 218 || sprite.x <= -218) { sprite.dir = norm(180 - sprite.dir); sprite.x = clamp(sprite.x, -217, 217); }
        if (sprite.y >= 158 || sprite.y <= -158) { sprite.dir = norm(-sprite.dir); sprite.y = clamp(sprite.y, -157, 157); }
        break;
      case "changex": sprite.x = clamp(sprite.x + num(p.dx), -240, 240); break;
      case "changey": sprite.y = clamp(sprite.y + num(p.dy), -180, 180); break;
      case "say": {
        var msg = String(p.msg == null ? "" : p.msg);
        sprite.say = msg;
        await delay(Math.max(0, num(p.secs)) * 1000);
        if (sprite.say === msg) sprite.say = "";
        break;
      }
      case "nextcostume": sprite.costume = (sprite.costume + 1) % COSTUMES.length; break;
      case "wait": await delay(Math.max(0, num(p.secs)) * 1000); break;
      case "repeat": {
        var times = Math.max(0, Math.round(num(p.times)));
        for (var i = 0; i < times; i++) {
          if (ctx.token !== runtime.token) return;
          await runStack(b.subs[0], ctx);
        }
        break;
      }
      case "forever": {
        while (ctx.token === runtime.token) {
          await runStack(b.subs[0], ctx);
          if (ctx.token !== runtime.token) return;
          await delay(b.subs[0].length ? 10 : 60);
        }
        break;
      }
      case "if":
        if (evalCond(p.cond)) await runStack(b.subs[0], ctx);
        break;
      case "setvar": vars[p.var] = num(p.val); break;
      case "changevar": vars[p.var] = num(vars[p.var]) + num(p.val); break;
      default: break;
    }
    if (ctx.token === runtime.token) setStatus("running: " + describe(b));
  }

  async function runStack(stack, ctx) {
    for (var i = 0; i < stack.length; i++) {
      if (ctx.token !== runtime.token) return;
      await execBlock(stack[i], ctx);
    }
  }

  function startThread(key, blocks) {
    if (runningHats[key]) return;
    runningHats[key] = true;
    var ctx = { token: runtime.token };
    runStack(blocks, ctx).then(function () { delete runningHats[key]; });
  }

  function groupScripts(root) {
    var groups = [], cur = null;
    root.forEach(function (b) {
      if (b.def.hat) { cur = { hat: b, blocks: [] }; groups.push(cur); }
      else if (cur) cur.blocks.push(b);
      else { cur = { hat: null, blocks: [b] }; groups.push(cur); }
    });
    return groups;
  }

  function runProgram() {
    stopAll();
    sprite.say = "";
    var groups = groupScripts(script);
    var started = 0, loose = 0;
    keyHats = [];
    groups.forEach(function (g, i) {
      if (!g.hat) { loose += g.blocks.length; return; }
      if (g.hat.def.id === "flag") { startThread("flag" + i, g.blocks); started++; }
      if (g.hat.def.id === "whenkey") keyHats.push({ group: g, index: i });
    });
    if (!script.length) { setStatus("Your script is empty — add a block, starting with a hat block."); return; }
    if (keyHats.length && !started && !loose) { setStatus("Waiting for a key press — click the stage, then press the key."); setRunState(true); return; }
    if (!started) { setStatus('Nothing ran. Scripts must start with a hat block like "when green flag clicked"' + (loose ? " (" + loose + " loose block" + (loose > 1 ? "s" : "") + " ignored)." : ".")); return; }
    setStatus("Running…");
    setRunState(true);
  }

  /* ---------------------------------------------------------- keyboard */
  function keyName(ev) {
    var k = ev.key;
    if (k === " " || k === "Spacebar") return "space";
    if (k === "ArrowLeft") return "left arrow";
    if (k === "ArrowRight") return "right arrow";
    if (k === "ArrowUp") return "up arrow";
    if (k === "ArrowDown") return "down arrow";
    return k.length === 1 ? k.toLowerCase() : null;
  }
  window.addEventListener("keydown", function (ev) {
    var name = keyName(ev);
    if (!name) return;
    heldKeys[name] = true;
    keyHats.forEach(function (kh) {
      if (kh.group.hat.params.key === name) startThread("key" + kh.index, kh.group.blocks);
    });
    if (focused && ev.key.indexOf("Arrow") === 0) ev.preventDefault();
    if (focused && ev.key === " ") ev.preventDefault();
  });
  window.addEventListener("keyup", function (ev) {
    var name = keyName(ev);
    if (name) heldKeys[name] = false;
  });

  /* ---------------------------------------------------------- stage input */
  canvas.addEventListener("pointermove", function (ev) {
    var r = canvas.getBoundingClientRect();
    mouse.x = (ev.clientX - r.left) * (canvas.width / r.width) - 240;
    mouse.y = 180 - (ev.clientY - r.top) * (canvas.height / r.height);
  });
  canvas.addEventListener("pointerdown", function () { focused = true; canvas.focus(); });
  canvas.addEventListener("blur", function () { focused = false; });

  /* ---------------------------------------------------------- drawing */
  function draw() {
    stage.clear("#ffffff");
    // faint coordinate grid
    stage.ctx.save();
    stage.ctx.strokeStyle = "rgba(31,42,68,0.07)";
    stage.ctx.lineWidth = 1;
    for (var gx = 60; gx < stage.w; gx += 60) { stage.ctx.beginPath(); stage.ctx.moveTo(gx, 0); stage.ctx.lineTo(gx, stage.h); stage.ctx.stroke(); }
    for (var gy = 60; gy < stage.h; gy += 60) { stage.ctx.beginPath(); stage.ctx.moveTo(0, gy); stage.ctx.lineTo(stage.w, gy); stage.ctx.stroke(); }
    stage.ctx.restore();

    var flip = sprite.dir > 180;
    var rot = sprite.dir <= 180 ? sprite.dir - 90 : 270 - sprite.dir;
    stage.emoji(sprite.x, sprite.y, COSTUMES[sprite.costume], 64, {
      rot: rot, flip: flip, alpha: sprite.visible ? 1 : 0.25,
      bob: runningHats && Object.keys(runningHats).length ? Math.sin(Date.now() / 220) * 2 : 0
    });
    if (sprite.say) stage.bubble(sprite.x, sprite.y, sprite.say, { offset: 44 });

    stage.hud([
      "x: " + Math.round(sprite.x) + "   y: " + Math.round(sprite.y),
      "direction: " + Math.round(sprite.dir),
      "score: " + num(vars.score)
    ]);

    if (!focused) {
      stage.ctx.save();
      stage.ctx.fillStyle = "rgba(31,42,68,0.45)";
      stage.ctx.font = "800 14px Nunito, sans-serif";
      stage.ctx.textAlign = "center";
      stage.ctx.fillText("click the stage for keyboard scripts", stage.w / 2, stage.h - 20);
      stage.ctx.restore();
    }
  }
  (function loop() { draw(); requestAnimationFrame(loop); })();

  /* ---------------------------------------------------------- block instances */
  function makeBlock(def) {
    var b = { def: def, params: {}, subs: [] };
    (def.args || []).forEach(function (a) { b.params[a.k] = a.value; });
    if (def.c) b.subs = [[]];
    return b;
  }
  function mk(id, overrides) {
    var b = makeBlock(defById(id));
    if (overrides) Object.keys(overrides).forEach(function (k) { b.params[k] = overrides[k]; });
    return b;
  }
  function nest(parent, children) { parent.subs[0] = children; return parent; }
  function plainText(def) {
    var out = def.text;
    (def.args || []).forEach(function (a, i) { out = out.replace("%" + (i + 1), a.value); });
    return out;
  }

  /* ---------------------------------------------------------- editor rendering */
  function argEl(b, slot) {
    var arg = b.def.args[slot - 1];
    if (!arg) return document.createTextNode("");
    var node;
    if (arg.type === "select") {
      node = document.createElement("select");
      node.className = "sb-input sb-input--sel";
      arg.options.forEach(function (o) {
        node.appendChild(el("option", { value: o, text: o, selected: o === b.params[arg.k] ? "selected" : null }));
      });
      node.addEventListener("change", function () { b.params[arg.k] = node.value; });
    } else {
      node = document.createElement("input");
      node.type = arg.type === "num" ? "number" : "text";
      node.className = "sb-input " + (arg.type === "num" ? "sb-input--num" : "sb-input--text");
      node.value = b.params[arg.k];
      node.addEventListener("input", function () { b.params[arg.k] = node.value; });
    }
    node.addEventListener("click", function (ev) { ev.stopPropagation(); });
    return node;
  }

  function blockEl(b, stack, index) {
    var e = document.createElement("div");
    e.className = "sb sb--" + b.def.cat + (b.def.hat ? " sb--hat" : "") + (b.def.c ? " sb--c" : "");
    if (b.def.c && target.stack === b.subs[0]) e.classList.add("sb--target");

    // label with input slots
    var label = document.createElement("span");
    var parts = b.def.text.split(/(%\d+)/);
    parts.forEach(function (part) {
      var m = /^%(\d+)$/.exec(part);
      if (m) label.appendChild(argEl(b, parseInt(m[1], 10)));
      else if (part) label.appendChild(document.createTextNode(part));
    });
    e.appendChild(label);

    // hover controls
    var ctrls = document.createElement("span");
    ctrls.className = "sb-ctrls";
    if (b.def.c) {
      var inside = el("button", { type: "button", class: "sb-btn", text: "＋ inside", title: "Add the next block inside this loop" });
      inside.addEventListener("click", function (ev) {
        ev.stopPropagation();
        target = { stack: b.subs[0], label: "inside " + plainText(b.def), block: b };
        renderEditor();
      });
      ctrls.appendChild(inside);
    }
    var del = el("button", { type: "button", class: "sb-btn", text: "✕", title: "Delete this block" });
    del.addEventListener("click", function (ev) {
      ev.stopPropagation();
      stack.splice(index, 1);
      if (target.block === b || target.stack === b.subs[0]) target = { stack: script, label: "the bottom of the script", block: null };
      renderEditor();
      setStatus("Deleted a block.");
    });
    ctrls.appendChild(del);
    e.appendChild(ctrls);

    // substack
    if (b.def.c) {
      var inner = document.createElement("div");
      inner.className = "sb-inner";
      if (!b.subs[0].length) inner.appendChild(el("div", { class: "sb-placeholder", text: "blocks added here run inside" }));
      b.subs[0].forEach(function (cb, ci) { inner.appendChild(blockEl(cb, b.subs[0], ci)); });
      e.appendChild(inner);
    }
    return e;
  }

  function renderEditor() {
    editor.innerHTML = "";
    if (!script.length) {
      editor.appendChild(el("div", { class: "sb-placeholder", text: 'No blocks yet — click blocks on the left. Start with "when green flag clicked".' }));
    }
    var cur = null;
    script.forEach(function (b, i) {
      if (b.def.hat || !cur) {
        cur = document.createElement("div");
        cur.className = "sb-stack";
        editor.appendChild(cur);
      }
      cur.appendChild(blockEl(b, script, i));
    });
    targetLabelEl.textContent = "new blocks go to: " + target.label;
  }

  function addBlock(def) {
    target.stack.push(makeBlock(def));
    renderEditor();
    setStatus('Added "' + plainText(def) + '"');
  }

  /* ---------------------------------------------------------- palette */
  function previewEl(def) {
    var e = document.createElement("div");
    e.className = "sb sb--" + def.cat + (def.hat ? " sb--hat" : "");
    var parts = def.text.split(/(%\d+)/);
    parts.forEach(function (part) {
      var m = /^%(\d+)$/.exec(part);
      if (m) {
        var arg = def.args[parseInt(m[1], 10) - 1];
        e.appendChild(el("span", { class: "sb-input", text: arg ? arg.value : "" }));
      } else if (part) e.appendChild(document.createTextNode(part));
    });
    return e;
  }

  function renderPalette() {
    var pal = document.getElementById("palette");
    pal.innerHTML = "";
    CAT_ORDER.forEach(function (cat) {
      var defs = DEFS.filter(function (d) { return d.cat === cat; });
      if (!defs.length) return;
      var group = document.createElement("div");
      group.appendChild(el("p", { class: "text-xs font-extrabold uppercase tracking-wide text-ink-muted m-0 mb-2", text: CAT_LABEL[cat] }));
      var row = el("div", { class: "flex flex-wrap gap-2 items-start" });
      defs.forEach(function (def) {
        var p = previewEl(def);
        p.setAttribute("role", "button");
        p.setAttribute("tabindex", "0");
        p.title = "Add: " + plainText(def);
        p.addEventListener("click", function () { addBlock(def); });
        p.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); addBlock(def); } });
        row.appendChild(p);
      });
      group.appendChild(row);
      pal.appendChild(group);
    });
  }

  /* ---------------------------------------------------------- sprite / stage controls */
  function resetSprite() {
    stopAll();
    sprite = { x: 0, y: 0, dir: 90, costume: 0, say: "", visible: true };
    vars = { score: 0 };
    setStatus("Sprite reset to the middle of the Stage.");
    setRunState(false);
  }

  document.getElementById("run-btn").addEventListener("click", runProgram);
  document.getElementById("stop-btn").addEventListener("click", function () { stopAll(); setStatus("Stopped."); });
  document.getElementById("reset-btn").addEventListener("click", resetSprite);
  document.getElementById("clear-btn").addEventListener("click", function () {
    stopAll();
    script = [];
    target = { stack: script, label: "the bottom of the script", block: null };
    renderEditor();
    setStatus("Script cleared.");
  });

  /* ---------------------------------------------------------- examples */
  var EXAMPLES = {
    ball: function () {
      return [mk("flag"), nest(mk("forever"), [mk("move", { steps: 10 }), mk("bounce"), mk("wait", { secs: 0.02 })])];
    },
    spin: function () {
      return [mk("flag"), nest(mk("forever"), [mk("turn", { deg: 15 }), mk("wait", { secs: 0.05 })])];
    },
    hello: function () {
      return [mk("flag"), mk("say", { msg: "Hello!", secs: 2 }), mk("move", { steps: 100 }), mk("say", { msg: "I can move!", secs: 2 })];
    },
    count: function () {
      return [mk("flag"), mk("setvar", { var: "score", val: 0 }), nest(mk("repeat", { times: 10 }), [mk("changevar", { var: "score", val: 1 }), mk("wait", { secs: 0.4 })])];
    }
  };

  document.getElementById("examples").addEventListener("change", function (ev) {
    var key = ev.target.value;
    if (!key || !EXAMPLES[key]) return;
    stopAll();
    script = EXAMPLES[key]();
    target = { stack: script, label: "the bottom of the script", block: null };
    resetSprite();
    renderEditor();
    setStatus("Example loaded — press Run.");
    ev.target.value = "";
  });

  /* ---------------------------------------------------------- go */
  renderPalette();
  renderEditor();
  setStatus("Pick a block and press Run.");
  setRunState(false);
})();
