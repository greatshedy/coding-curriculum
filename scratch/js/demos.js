/* ============================================================
   demos.js — one runnable demo per week.
   Every demo draws on a 480x360 canvas that mimics the Scratch
   Stage (x: -240..240, y: -180..180, y up). No images needed;
   sprites are emoji drawn with canvas text.
   ============================================================ */
(function () {
  "use strict";

  var EMOJI_FONT = '"Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif';
  var BTN_PRIMARY = "inline-flex items-center gap-2 rounded-xl bg-motion px-4 py-2 text-sm font-extrabold text-white shadow-md shadow-motion/30 hover:brightness-105 active:scale-[0.98] transition";
  var BTN_SECONDARY = "inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-ink border border-ink/15 hover:border-motion/50 active:scale-[0.98] transition";
  var INPUT_CLS = "rounded-lg border border-ink/15 px-3 py-1.5 text-sm font-semibold text-ink bg-white focus:border-motion outline-none";

  /* ---------------------------------------------------------- helpers */
  function h(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null) return;
        if (k === "class") e.className = v;
        else if (k === "text") e.textContent = v;
        else if (k === "html") e.innerHTML = v;
        else if (k.indexOf("on") === 0 && typeof v === "function") e.addEventListener(k.slice(2), v);
        else e.setAttribute(k, v);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return e;
  }
  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function canvasPos(canvas, ev) {
    var r = canvas.getBoundingClientRect();
    return { x: (ev.clientX - r.left) * (canvas.width / r.width), y: (ev.clientY - r.top) * (canvas.height / r.height) };
  }

  /* ---------------------------------------------------------- Stage */
  function Stage(canvas) {
    this.c = canvas;
    this.ctx = canvas.getContext("2d");
    this.w = canvas.width;
    this.h = canvas.height;
  }
  Stage.prototype.X = function (x) { return this.w / 2 + x; };
  Stage.prototype.Y = function (y) { return this.h / 2 - y; };

  Stage.prototype.clear = function (color) {
    var c = this.ctx;
    c.save();
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.fillStyle = color || "#ffffff";
    c.fillRect(0, 0, this.w, this.h);
    c.restore();
  };

  Stage.prototype.grid = function () {
    var c = this.ctx, step = 60;
    c.save();
    c.strokeStyle = "rgba(31,42,68,0.08)";
    c.lineWidth = 1;
    for (var x = this.X(0) % step; x < this.w; x += step) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, this.h); c.stroke(); }
    for (var y = this.Y(0) % step; y < this.h; y += step) { c.beginPath(); c.moveTo(0, y); c.lineTo(this.w, y); c.stroke(); }
    c.strokeStyle = "rgba(31,42,68,0.22)";
    c.beginPath(); c.moveTo(this.X(0), 0); c.lineTo(this.X(0), this.h); c.stroke();
    c.beginPath(); c.moveTo(0, this.Y(0)); c.lineTo(this.w, this.Y(0)); c.stroke();
    c.fillStyle = "rgba(31,42,68,0.45)";
    c.font = "600 11px Nunito, sans-serif";
    c.textAlign = "left"; c.textBaseline = "top";
    c.fillText("(0, 0)", this.X(0) + 5, this.Y(0) + 5);
    c.restore();
  };

  Stage.prototype.emoji = function (x, y, ch, size, opts) {
    var c = this.ctx;
    opts = opts || {};
    c.save();
    c.translate(this.X(x), this.Y(y) + (opts.bob || 0));
    if (opts.rot) c.rotate(opts.rot * Math.PI / 180);
    if (opts.flip) c.scale(-1, 1);
    if (opts.alpha != null) c.globalAlpha = opts.alpha;
    c.font = size + "px " + EMOJI_FONT;
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(ch, 0, 0);
    c.restore();
  };

  Stage.prototype.roundRect = function (x, y, w, hh, r) {
    var c = this.ctx;
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + hh, r);
    c.arcTo(x + w, y + hh, x, y + hh, r);
    c.arcTo(x, y + hh, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  };

  function wrapLines(ctx, text, maxW) {
    var words = String(text).split(" "), lines = [], line = "";
    words.forEach(function (w) {
      var test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; }
      else line = test;
    });
    if (line) lines.push(line);
    return lines;
  }

  Stage.prototype.bubble = function (x, y, text, opts) {
    var c = this.ctx;
    opts = opts || {};
    var font = opts.font || "700 14px Nunito, sans-serif";
    var maxW = opts.maxW || 190;
    c.save();
    c.font = font;
    var lines = wrapLines(c, text, maxW);
    var lh = 19, padX = 12, padY = 9;
    var w = 0;
    lines.forEach(function (l) { w = Math.max(w, c.measureText(l).width); });
    w += padX * 2;
    var hh = lines.length * lh + padY * 2;
    var bx = this.X(x) - w / 2;
    var by = this.Y(y) - (opts.offset || 30) - hh;
    bx = clamp(bx, 6, this.w - w - 6);
    if (by < 6) { by = this.Y(y) + (opts.offset || 30) + 6; } // speak below if no room above
    c.fillStyle = "#ffffff";
    c.strokeStyle = "rgba(31,42,68,0.25)";
    c.lineWidth = 2;
    this.roundRect(bx, by, w, hh, 12);
    c.fill();
    c.stroke();
    c.beginPath();
    c.moveTo(this.X(x) - 7, by + hh - 1);
    c.lineTo(this.X(x), by + hh + 11);
    c.lineTo(this.X(x) + 7, by + hh - 1);
    c.closePath();
    c.fill();
    c.strokeStyle = "#ffffff";
    c.beginPath(); c.moveTo(this.X(x) - 6, by + hh); c.lineTo(this.X(x), by + hh + 9); c.lineTo(this.X(x) + 6, by + hh); c.stroke();
    c.fillStyle = "#1f2a44";
    c.textAlign = "center";
    c.textBaseline = "middle";
    lines.forEach(function (l, i) { c.fillText(l, bx + w / 2, by + padY + lh * i + lh / 2); });
    c.restore();
  };

  Stage.prototype.hud = function (rows) {
    var c = this.ctx;
    c.save();
    c.font = "800 13px Nunito, sans-serif";
    c.textAlign = "left";
    c.textBaseline = "middle";
    var w = 0;
    rows.forEach(function (r) { w = Math.max(w, c.measureText(r).width); });
    w += 22;
    var hh = rows.length * 20 + 12;
    c.fillStyle = "rgba(31,42,68,0.82)";
    this.roundRect(10, 10, w, hh, 10);
    c.fill();
    c.fillStyle = "#fff";
    rows.forEach(function (r, i) { c.fillText(r, 21, 10 + 6 + 10 + i * 20); });
    c.restore();
  };

  Stage.prototype.banner = function (title, sub) {
    var c = this.ctx;
    c.save();
    c.fillStyle = "rgba(31,42,68,0.72)";
    c.fillRect(0, this.h / 2 - 46, this.w, 92);
    c.fillStyle = "#fff";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.font = "800 26px 'Baloo 2', Nunito, sans-serif";
    c.fillText(title, this.w / 2, this.h / 2 - (sub ? 12 : 0));
    if (sub) { c.font = "700 15px Nunito, sans-serif"; c.fillText(sub, this.w / 2, this.h / 2 + 20); }
    c.restore();
  };

  /* ---------------------------------------------------------- demo shell */
  function createDemo(root, opts) {
    opts = opts || {};
    root.innerHTML = "";

    var canvas = h("canvas", {
      width: opts.w || 480, height: opts.h || 360,
      class: "block w-full h-auto bg-white",
      tabindex: "0",
      "aria-label": opts.label || "Interactive demo stage"
    });
    var overlay = h("div", { class: "absolute inset-0 hidden place-items-center bg-white/85 backdrop-blur-sm text-center px-6 py-4 overflow-auto" });
    var stageBox = h("div", { class: "relative rounded-2xl border-2 border-ink/10 overflow-hidden bg-white shadow-inner" }, [canvas, overlay]);
    var controls = h("div", { class: "flex flex-wrap items-center gap-2" });
    var statusEl = h("p", { class: "text-sm font-bold text-ink/60 min-h-[1.25rem] m-0" });

    var wrap = h("div", { class: "grid gap-4" });
    if (opts.hint) wrap.appendChild(h("p", { class: "text-sm text-ink/65 m-0", text: opts.hint }));
    wrap.appendChild(stageBox);
    wrap.appendChild(controls);
    wrap.appendChild(statusEl);
    root.appendChild(wrap);

    var api = {
      canvas: canvas, ctx: canvas.getContext("2d"), stage: new Stage(canvas),
      controls: controls, overlayEl: overlay
    };

    var running = false, rafId = null, runFn = null, resetFn = null;

    function stop() {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      if (api.runBtn) { api.runBtn.textContent = "Run"; api.runBtn.classList.remove("bg-rose-500", "shadow-rose-500/30"); api.runBtn.classList.add("bg-motion", "shadow-motion/30"); }
    }
    function startLoop(stepFn) {
      var last = performance.now();
      function frame(now) {
        if (!running) return;
        var dt = Math.min(60, now - last);
        last = now;
        stepFn(dt, now);
        if (running) rafId = requestAnimationFrame(frame);
      }
      rafId = requestAnimationFrame(frame);
    }
    api.startLoop = startLoop;
    api.stop = stop;
    api.isRunning = function () { return running; };
    api.setRunFn = function (fn) { runFn = fn; };
    api.setResetFn = function (fn) { resetFn = fn; };

    api.setStatus = function (t) { statusEl.textContent = t || ""; };
    api.overlay = function (html) { overlay.innerHTML = html; overlay.classList.remove("hidden"); overlay.classList.add("grid"); };
    api.hideOverlay = function () { overlay.classList.add("hidden"); overlay.classList.remove("grid"); };

    api.button = function (label, onClick, kind) {
      var b = h("button", { type: "button", class: kind === "secondary" ? BTN_SECONDARY : BTN_PRIMARY, text: label });
      b.addEventListener("click", onClick);
      controls.appendChild(b);
      return b;
    };
    api.field = function (label, value, onInput, placeholder) {
      var input = h("input", { type: "text", class: INPUT_CLS + " w-56", value: value || "", placeholder: placeholder || "" });
      input.addEventListener("input", function () { onInput(input.value); });
      controls.appendChild(h("label", { class: "inline-flex items-center gap-2 text-sm font-bold text-ink/70" }, [h("span", { text: label }), input]));
      return input;
    };
    api.slider = function (label, min, max, value, step, onInput) {
      var input = h("input", { type: "range", min: min, max: max, step: step || 1, value: value, class: "accent-motion w-32" });
      var out = h("span", { class: "font-extrabold text-motion w-8 text-center", text: value });
      input.addEventListener("input", function () { out.textContent = input.value; onInput(parseFloat(input.value)); });
      controls.appendChild(h("label", { class: "inline-flex items-center gap-2 text-sm font-bold text-ink/70" }, [h("span", { text: label }), input, out]));
      return input;
    };
    api.select = function (label, options, value, onChange) {
      var sel = h("select", { class: INPUT_CLS });
      options.forEach(function (o) {
        sel.appendChild(h("option", { value: o.value, text: o.label, selected: o.value === value ? "selected" : null }));
      });
      sel.addEventListener("change", function () { onChange(sel.value); });
      controls.appendChild(h("label", { class: "inline-flex items-center gap-2 text-sm font-bold text-ink/70" }, [h("span", { text: label }), sel]));
      return sel;
    };

    if (opts.run !== false) {
      api.runBtn = api.button("Run", function () {
        if (running) { stop(); return; }
        stop();
        if (resetFn) resetFn();
        running = true;
        api.runBtn.textContent = "Stop";
        api.runBtn.classList.remove("bg-motion", "shadow-motion/30");
        api.runBtn.classList.add("bg-rose-500", "shadow-rose-500/30");
        if (runFn) runFn();
      });
      api.button("Reset", function () { stop(); if (resetFn) resetFn(); }, "secondary");
    }

    return api;
  }

  /* ============================================================
     DEMO 1 — Meet Scratch (say / think)
     ============================================================ */
  function demoMeet(root) {
    var d = createDemo(root, {
      hint: "Type a message, pick how long the cat says it, then press Run. This is the \"say … for … seconds\" block in action.",
      label: "A cat sprite that speaks"
    });
    var s = d.stage, msg = "Hi! I'm Fluffy the cat!", dur = 2, elapsed = 0, speaking = false, t = 0;

    d.field("Message:", msg, function (v) { msg = v || "(silence)"; });
    d.slider("Seconds:", 1, 5, 2, 1, function (v) { dur = v; });

    function draw() {
      s.clear("#eaf3ff");
      s.emoji(0, -20, "🐱", 96, { bob: Math.sin(t / 500) * 3 });
      if (speaking) s.bubble(0, -20, msg, { offset: 62 });
      if (elapsed > 0 && !speaking) s.banner("Nice!", "Change the message and run again");
    }
    function reset() { elapsed = 0; speaking = false; t = 0; draw(); d.setStatus(""); }
    function run() {
      elapsed = 0; speaking = true; d.setStatus("The cat is saying: \"" + msg + "\"");
      d.startLoop(function (dt) {
        t += dt; elapsed += dt / 1000;
        if (elapsed >= dur) { speaking = false; d.setStatus("Finished saying it. Try a sillier message!"); draw(); d.stop(); return; }
        draw();
      });
    }
    d.setResetFn(reset); d.setRunFn(run); reset();
  }

  /* ============================================================
     DEMO 2 — Sprites & Movement (square path)
     ============================================================ */
  function demoMove(root) {
    var d = createDemo(root, {
      hint: "The sprite follows go-to + move + turn blocks. Press Run to walk the square path and watch the x / y numbers.",
      label: "A sprite walking a square path on a coordinate grid"
    });
    var s = d.stage;
    var state = { x: -180, y: 120, dir: 90, trail: [{ x: -180, y: 120 }] };
    var actions = [], current = null, remaining = 0, steps = 60, speed = 90;

    d.slider("move steps:", 20, 120, 60, 10, function (v) { steps = v; });

    function buildActions() {
      var a = [{ t: "goto", x: -180, y: 120 }, { t: "point", dir: 90 }];
      for (var i = 0; i < 4; i++) {
        a.push({ t: "move", n: steps });
        a.push({ t: "turn", dir: 90 });
      }
      return a;
    }
    function reset() {
      d.stop();
      state = { x: -180, y: 120, dir: 90, trail: [{ x: -180, y: 120 }] };
      actions = []; current = null; remaining = 0;
      draw(); d.setStatus("");
    }
    function step(dt) {
      if (!current) {
        if (!actions.length) { d.setStatus("Square complete! x and y are back where they started."); d.stop(); return; }
        current = actions.shift();
        if (current.t === "goto") { state.x = current.x; state.y = current.y; state.trail.push({ x: state.x, y: state.y }); current = null; return; }
        if (current.t === "point") { state.dir = current.dir; current = null; return; }
        if (current.t === "move") remaining = current.n;
        if (current.t === "turn") { state.dir = (state.dir + current.dir) % 360; current = null; return; }
      }
      if (current.t === "move") {
        var dist = speed * dt / 1000;
        if (dist > remaining) dist = remaining;
        state.x += Math.sin(state.dir * Math.PI / 180) * dist;
        state.y += Math.cos(state.dir * Math.PI / 180) * dist;
        state.trail.push({ x: state.x, y: state.y });
        remaining -= dist;
        if (remaining <= 0.01) current = null;
      }
      draw();
    }
    function draw() {
      s.clear("#ffffff");
      s.grid();
      // trail
      s.ctx.save();
      s.ctx.strokeStyle = "rgba(76,151,255,0.85)";
      s.ctx.lineWidth = 4;
      s.ctx.lineJoin = "round";
      s.ctx.beginPath();
      state.trail.forEach(function (p, i) {
        var X = s.X(p.x), Y = s.Y(p.y);
        if (i === 0) s.ctx.moveTo(X, Y); else s.ctx.lineTo(X, Y);
      });
      s.ctx.stroke();
      s.ctx.restore();
      s.emoji(state.x, state.y, "🐱", 54, { rot: state.dir - 90 });
      s.hud(["x: " + Math.round(state.x), "y: " + Math.round(state.y), "direction: " + Math.round(state.dir)]);
    }
    d.setResetFn(reset);
    d.setRunFn(function () {
      actions = buildActions(); current = null;
      d.setStatus("Drawing the square…");
      d.startLoop(step);
    });
    reset();
  }

  /* ============================================================
     DEMO 3 — Events (arrow keys)
     ============================================================ */
  function demoKeys(root) {
    var d = createDemo(root, {
      run: false,
      hint: "Click the stage, then steer with the arrow keys (or WASD). Each key is its own event block.",
      label: "A sprite controlled with the arrow keys"
    });
    var s = d.stage;
    var pos = { x: 0, y: 0 }, speed = 210, held = {}, focused = false;
    var keys = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", a: "left", d: "right", w: "up", s: "down" };
    var pad = { left: "⬅", right: "➡", up: "⬆", down: "⬇" };
    var faces = { left: "🐱", right: "🐱", up: "😺", down: "😺" };

    function reset() { pos = { x: 0, y: 0 }; held = {}; d.setStatus("Click the stage, then press an arrow key."); draw(); }

    d.canvas.addEventListener("pointerdown", function () { focused = true; d.canvas.focus(); d.setStatus("Now use the arrow keys!"); });
    d.canvas.addEventListener("blur", function () { focused = false; });
    window.addEventListener("keydown", function (e) {
      if (!focused) return;
      var k = keys[e.key];
      if (k) { held[k] = true; e.preventDefault(); d.setStatus('event: "when ' + k + ' arrow key pressed"'); }
    });
    window.addEventListener("keyup", function (e) {
      var k = keys[e.key];
      if (k) held[k] = false;
    });

    // on-screen controls (also work for mouse / touch)
    ["left", "right", "up", "down"].forEach(function (dir) {
      var b = d.button(pad[dir] + " " + dir, function () {}, "secondary");
      b.addEventListener("pointerdown", function () { held[dir] = true; d.setStatus('event: "when ' + dir + ' arrow key pressed"'); });
      b.addEventListener("pointerup", function () { held[dir] = false; });
      b.addEventListener("pointerleave", function () { held[dir] = false; });
    });
    d.button("Reset", reset, "secondary");

    function loop(dt) {
      var sp = speed * dt / 1000;
      if (held.left) pos.x -= sp;
      if (held.right) pos.x += sp;
      if (held.up) pos.y += sp;
      if (held.down) pos.y -= sp;
      pos.x = clamp(pos.x, -220, 220);
      pos.y = clamp(pos.y, -160, 160);
      draw();
    }
    function draw() {
      s.clear("#fdf6e3");
      s.ctx.save();
      s.ctx.strokeStyle = focused ? "rgba(76,151,255,0.9)" : "rgba(31,42,68,0.15)";
      s.ctx.lineWidth = focused ? 4 : 2;
      s.ctx.strokeRect(2, 2, s.w - 4, s.h - 4);
      s.ctx.restore();
      s.grid();
      var face = held.left ? "left" : held.right ? "right" : held.up ? "up" : held.down ? "down" : null;
      s.emoji(pos.x, pos.y, face ? faces[face] : "🐱", 58, { bob: Math.sin(Date.now() / 200) * 2 });
      s.hud(["x: " + Math.round(pos.x), "y: " + Math.round(pos.y)]);
      if (!focused) {
        s.ctx.save();
        s.ctx.fillStyle = "rgba(31,42,68,0.55)";
        s.ctx.font = "800 15px Nunito, sans-serif";
        s.ctx.textAlign = "center";
        s.ctx.fillText("Click the stage to control the sprite", s.w / 2, s.h - 22);
        s.ctx.restore();
      }
    }
    // keep animating so the outline/bob updates even without keys
    runningAlways(d, loop);
    reset();
  }

  // helper: run a loop immediately, independent of the Run button
  function runningAlways(d, loop) {
    var last = performance.now();
    function frame(now) {
      var dt = Math.min(60, now - last); last = now; loop(dt);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ============================================================
     DEMO 4 — Loops (bouncing ball)
     ============================================================ */
  function demoLoop(root) {
    var d = createDemo(root, {
      hint: "A forever loop keeps the ball moving and bouncing. Switch to \"repeat 10\" and it stops by itself.",
      label: "A ball bouncing inside a forever loop"
    });
    var s = d.stage;
    var ball = { x: 0, y: 0, dir: 135 }, speed = 150, mode = "forever", bounces = 0, trail = [];

    d.slider("move steps:", 10, 60, 20, 5, function (v) { speed = v * 7.5; });
    d.select("loop:", [{ value: "forever", label: "forever" }, { value: "repeat", label: "repeat 10" }], "forever", function (v) { mode = v; });

    function reset() {
      d.stop();
      ball = { x: 0, y: 0, dir: 135 }; bounces = 0; trail = [{ x: 0, y: 0 }];
      draw(); d.setStatus(mode === "forever" ? "Press Run to start the forever loop." : "Press Run — the loop repeats 10 times then stops.");
    }
    function step(dt) {
      var dist = speed * dt / 1000;
      var nx = ball.x + Math.cos(ball.dir * Math.PI / 180) * dist;
      var ny = ball.y + Math.sin(ball.dir * Math.PI / 180) * dist;
      var hit = false;
      if (nx > 220 || nx < -220) { ball.dir = 180 - ball.dir; hit = true; nx = clamp(nx, -220, 220); }
      if (ny > 160 || ny < -160) { ball.dir = -ball.dir; hit = true; ny = clamp(ny, -160, 160); }
      ball.x = nx; ball.y = ny;
      trail.push({ x: ball.x, y: ball.y });
      if (trail.length > 90) trail.shift();
      if (hit) {
        bounces++;
        if (mode === "repeat" && bounces >= 10) { d.setStatus("The repeat 10 loop finished after 10 bounces."); d.stop(); }
      }
      draw();
    }
    function draw() {
      s.clear("#f0f7ff");
      s.grid();
      s.ctx.save();
      s.ctx.strokeStyle = "rgba(255,171,25,0.6)";
      s.ctx.lineWidth = 3;
      s.ctx.beginPath();
      trail.forEach(function (p, i) { var X = s.X(p.x), Y = s.Y(p.y); if (i === 0) s.ctx.moveTo(X, Y); else s.ctx.lineTo(X, Y); });
      s.ctx.stroke();
      s.ctx.restore();
      s.emoji(ball.x, ball.y, "⚽", 44, { rot: bounces * 25 });
      s.hud(["bounces: " + bounces, "loop: " + (mode === "forever" ? "forever" : "repeat 10")]);
    }
    d.setResetFn(reset);
    d.setRunFn(function () { d.setStatus("Looping…"); d.startLoop(step); });
    reset();
  }

  /* ============================================================
     DEMO 5 & 6 — Conditionals + Variables (catch game)
     ============================================================ */
  function makeCatch(root, withScore) {
    var d = createDemo(root, {
      hint: withScore
        ? "Now with variables: catching adds to the score, missing costs a life. Lives at 0 = game over."
        : "Move the basket with the mouse or arrow keys. If the basket touches the coin it respawns; if the coin hits the ground, it's game over.",
      label: "A catch game with a falling coin"
    });
    var s = d.stage;
    var player = { x: 0 }, coin = { x: 0, y: 170 }, caught = 0, score = 0, lives = 3, gameOver = false;
    var fallSpeed = 140, spawnX = 0;
    var held = {}, focused = false;

    d.slider("fall speed:", 80, 320, 140, 10, function (v) { fallSpeed = v; });

    function reset() {
      d.stop();
      player.x = 0;
      coin = { x: (Math.random() * 360) - 180, y: 170 };
      caught = 0; score = 0; lives = 3; gameOver = false;
      spawnX = coin.x;
      d.hideOverlay();
      d.setStatus(withScore ? "Score 0 · Lives 3. Good luck!" : "Press Run, then move the basket!");
      draw();
    }

    d.canvas.addEventListener("pointermove", function (e) {
      var p = canvasPos(d.canvas, e);
      player.x = clamp(p.x - s.w / 2, -210, 210);
    });
    d.canvas.addEventListener("pointerdown", function () { focused = true; d.canvas.focus(); });
    window.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft" || e.key === "a") { held.left = true; focused = true; }
      if (e.key === "ArrowRight" || e.key === "d") held.right = true;
      if (focused && (e.key.indexOf("Arrow") === 0 || e.key === " ")) e.preventDefault();
    });
    window.addEventListener("keyup", function (e) {
      if (e.key === "ArrowLeft" || e.key === "a") held.left = false;
      if (e.key === "ArrowRight" || e.key === "d") held.right = false;
    });

    function step(dt) {
      if (gameOver) return;
      var sp = 260 * dt / 1000;
      if (held.left) player.x = clamp(player.x - sp, -210, 210);
      if (held.right) player.x = clamp(player.x + sp, -210, 210);
      coin.y -= fallSpeed * dt / 1000;

      if (coin.y < -100 && coin.y > -165 && Math.abs(coin.x - player.x) < 42) {
        // caught!
        caught++;
        if (withScore) {
          score++;
          fallSpeed = Math.min(320, fallSpeed + 8);
        }
        coin = { x: (Math.random() * 360) - 180, y: 170 };
      } else if (coin.y < -175) {
        if (withScore) {
          lives--;
          if (lives <= 0) { endGame(); return; }
        } else {
          endGame(); return;
        }
        coin = { x: (Math.random() * 360) - 180, y: 170 };
      }
      draw();
    }

    function endGame() {
      gameOver = true;
      d.stop();
      draw();
      s.banner("Game Over", withScore ? "Final score: " + score : "Caught " + caught + " coins");
      d.setStatus(withScore ? "Game over! Final score " + score + ". Press Run to play again." : "Game over — caught " + caught + ". Press Run to play again.");
    }

    function draw() {
      s.clear("#f7fbff");
      s.ctx.save();
      s.ctx.fillStyle = "rgba(89,192,89,0.18)";
      s.ctx.fillRect(0, s.Y(-170), s.w, s.h - s.Y(-170));
      s.ctx.restore();
      s.grid();
      s.emoji(coin.x, coin.y, "🪙", 40, { rot: Math.sin(Date.now() / 300) * 12 });
      s.emoji(player.x, -145, "🧺", 60);
      var rows = withScore ? ["score: " + score, "lives: " + "❤️".repeat(Math.max(0, lives))] : ["caught: " + caught];
      s.hud(rows);
    }

    d.setResetFn(reset);
    d.setRunFn(function () { d.setStatus("Catching…"); d.startLoop(step); });
    reset();
  }

  /* ============================================================
     DEMO 7 — Broadcasting (dialogue)
     ============================================================ */
  function demoBroadcast(root) {
    var d = createDemo(root, {
      run: false,
      hint: "Press Start (or click the red cat). Each sprite broadcasts a message and the other one hears it and replies.",
      label: "Two sprites talking using broadcast messages"
    });
    var s = d.stage;
    var lines = [
      { who: 0, text: "Want to play?", msg: "ask" },
      { who: 1, text: "Yes! Let's go!", msg: "reply" },
      { who: 0, text: "I'll race you to the tree!", msg: "race" },
      { who: 1, text: "You're on. Ready… set… GO!", msg: "go" }
    ];
    var idx = -1, timer = 0, showTicker = "", playing = false;
    var ticker = h("div", { class: "rounded-xl bg-ink text-white/90 font-bold text-xs px-3 py-2 min-h-[2.25rem] grid place-items-center" });

    function reset() {
      d.stop(); idx = -1; timer = 0; showTicker = ""; playing = false;
      ticker.textContent = "message log: (nothing yet)";
      d.setStatus("Press Start to hear the two sprites talk.");
      draw();
    }
    function next() {
      idx++;
      if (idx >= lines.length) { playing = false; d.setStatus("Conversation finished! Change the lines or add more sprites."); draw(); return; }
      var l = lines[idx];
      showTicker = (l.who === 0 ? "🔴 red cat" : "🔵 blue cat") + " broadcasts \"" + l.msg + "\" → the other hears it";
      ticker.textContent = showTicker;
      timer = 0;
    }
    function draw() {
      s.clear("#eef2ff");
      s.ctx.save();
      s.ctx.fillStyle = "rgba(89,192,89,0.12)";
      s.ctx.fillRect(0, s.Y(-150), s.w, s.h - s.Y(-150));
      s.ctx.restore();
      var talkingA = playing && idx >= 0 && lines[idx].who === 0;
      var talkingB = playing && idx >= 0 && lines[idx].who === 1;
      s.emoji(-160, -60, "🐱", 70, { bob: Math.sin(Date.now() / 260) * (talkingA ? 8 : 3) });
      s.emoji(160, -60, "😺", 70, { bob: Math.sin(Date.now() / 260 + 1) * (talkingB ? 8 : 3) });
      s.ctx.save();
      s.ctx.font = "800 12px Nunito, sans-serif";
      s.ctx.textAlign = "center";
      s.ctx.fillStyle = "#dc2626"; s.ctx.fillText("sprite A", s.X(-160), s.Y(-115));
      s.ctx.fillStyle = "#2563eb"; s.ctx.fillText("sprite B", s.X(160), s.Y(-115));
      s.ctx.restore();
      if (playing && idx >= 0) s.bubble(lines[idx].who === 0 ? -160 : 160, -60, lines[idx].text, { offset: 46 });
      if (!playing && idx < 0) {
        s.ctx.save();
        s.ctx.fillStyle = "rgba(31,42,68,0.5)";
        s.ctx.font = "800 15px Nunito, sans-serif";
        s.ctx.textAlign = "center";
        s.ctx.fillText("Two sprites, one conversation →", s.w / 2, s.h - 24);
        s.ctx.restore();
      }
    }
    function loop(dt) {
      if (!playing) return;
      timer += dt / 1000;
      if (timer > 2.2) next();
      draw();
    }
    d.canvas.addEventListener("pointerdown", function () {
      if (!playing) { playing = true; idx = -1; next(); }
    });

    d.button("Start conversation", function () { reset(); playing = true; next(); });
    d.button("Reset", reset, "secondary");
    var wrap = h("div", { class: "grid gap-2" }, [ticker]);
    d.controls.parentNode.appendChild(wrap);

    runningAlways(d, loop);
    reset();
  }

  /* ============================================================
     DEMO 8 — Storytelling & Animation
     ============================================================ */
  function demoStory(root) {
    var d = createDemo(root, {
      hint: "A short animated story: costumes change the character and the backdrop changes the scene. Press Play.",
      label: "An animated 16-second story"
    });
    var s = d.stage;
    var keys = [
      { t: 0, bg: "#0f172a", cap: "Night. The cat is fast asleep.", cat: { x: -150, y: -60, e: "😴" }, fly: null },
      { t: 4, bg: "#1e293b", cap: "Morning! The cat wakes up.", cat: { x: -150, y: 10, e: "🐱" }, fly: null },
      { t: 7, bg: "#0e7490", cap: "A butterfly appears!", cat: { x: -150, y: -10, e: "🐱" }, fly: { x: 140, y: 70, e: "🦋" } },
      { t: 10, bg: "#166534", cap: "The cat chases the butterfly!", cat: { x: 60, y: 30, e: "😺" }, fly: { x: 70, y: 100, e: "🦋" } },
      { t: 13, bg: "#166534", cap: "The butterfly flies away…", cat: { x: 90, y: -40, e: "😿" }, fly: { x: 230, y: 190, e: "🦋" } },
      { t: 16, bg: "#1e293b", cap: "The cat is sad. The End.", cat: { x: 90, y: -60, e: "😿" }, fly: null }
    ];
    var clock = 0, rate = 1;

    d.select("speed:", [{ value: "0.5", label: "0.5×" }, { value: "1", label: "1×" }, { value: "2", label: "2×" }], "1", function (v) { rate = parseFloat(v); });

    function frameAt(time) {
      var i = 0;
      while (i < keys.length - 1 && time >= keys[i + 1].t) i++;
      var a = keys[i], b = keys[i + 1];
      var span = b ? b.t - a.t : 1;
      var f = b ? clamp((time - a.t) / span, 0, 1) : 1;
      function sprite(key, name) {
        var sp = a[name], ep = b ? b[name] : null;
        if (!sp && !ep) return null;
        if (sp && !ep) return f < 0.92 ? { x: sp.x, y: sp.y, e: sp.e, alpha: 1 - (f - 0.92) / 0.08 } : null;
        if (!sp && ep) return { x: ep.x, y: ep.y, e: ep.e, alpha: clamp(f / 0.08, 0, 1) };
        return { x: lerp(sp.x, ep.x, f), y: lerp(sp.y, ep.y, f), e: f > 0.5 ? ep.e : sp.e, alpha: 1 };
      }
      return { bg: a.bg, cap: a.cap, cat: sprite(null, "cat"), fly: sprite(null, "fly") };
    }
    function reset() { d.stop(); clock = 0; draw(); d.setStatus("Press Run to play the story."); }
    function draw() {
      var f = frameAt(clamp(clock, 0, 16));
      s.clear(f.bg);
      // simple scenery
      s.ctx.save();
      s.ctx.fillStyle = "rgba(255,255,255,0.06)";
      for (var i = 0; i < 6; i++) s.ctx.fillRect(40 + i * 80, s.h - 60, 30, 60);
      s.ctx.restore();
      if (f.fly) s.emoji(f.fly.x, f.fly.y, f.fly.e, 40, { alpha: f.fly.alpha, bob: Math.sin(Date.now() / 180) * 6 });
      if (f.cat) s.emoji(f.cat.x, f.cat.y, f.cat.e, 64, { alpha: f.cat.alpha, bob: Math.sin(Date.now() / 240) * 3 });
      // caption
      s.ctx.save();
      s.ctx.fillStyle = "rgba(0,0,0,0.55)";
      s.roundRect(20, s.h - 54, s.w - 40, 38, 12);
      s.ctx.fill();
      s.ctx.fillStyle = "#fff";
      s.ctx.font = "700 15px Nunito, sans-serif";
      s.ctx.textAlign = "center";
      s.ctx.textBaseline = "middle";
      s.ctx.fillText(f.cap, s.w / 2, s.h - 35);
      s.ctx.restore();
    }
    function step(dt) {
      clock += dt / 1000 * rate;
      if (clock >= 16) { draw(); d.setStatus("The End! What story will you tell?"); d.stop(); return; }
      draw();
    }
    d.setResetFn(reset);
    d.setRunFn(function () { d.setStatus("Playing…"); d.startLoop(step); });
    reset();
  }

  /* ============================================================
     DEMO 9 — Plan (design document builder + sketch pad)
     ============================================================ */
  function demoPlan(root) {
    var d = createDemo(root, {
      run: false,
      hint: "Fill in your plan and sketch on the pad. Then press “Make my design document” and print it for Week 10.",
      label: "A design document builder with a sketch pad"
    });
    var data = { name: "", type: "game", sprites: "", vars: "", interactions: "", pseudo: "", sketch: "" };

    d.canvas.style.background = "#ffffff";
    d.canvas.style.touchAction = "none";
    var s = d.stage;
    s.clear("#ffffff");
    s.ctx.save();
    s.ctx.fillStyle = "rgba(31,42,68,0.35)";
    s.ctx.font = "800 16px Nunito, sans-serif";
    s.ctx.textAlign = "center";
    s.ctx.fillText("✏️ Sketch your stage / storyboard here", s.w / 2, 28);
    s.ctx.restore();

    var drawing = false, last = null;
    function lineWidth() { return 4; }
    d.canvas.addEventListener("pointerdown", function (e) {
      drawing = true; last = canvasPos(d.canvas, e); d.canvas.setPointerCapture && d.canvas.setPointerCapture(e.pointerId);
    });
    d.canvas.addEventListener("pointermove", function (e) {
      if (!drawing) return;
      var p = canvasPos(d.canvas, e);
      var c = s.ctx;
      c.save(); c.strokeStyle = "#1f2a44"; c.lineWidth = lineWidth(); c.lineCap = "round";
      c.beginPath(); c.moveTo(last.x, last.y); c.lineTo(p.x, p.y); c.stroke(); c.restore();
      last = p;
    });
    window.addEventListener("pointerup", function () { drawing = false; });

    d.button("Clear sketch", function () { s.clear("#ffffff"); d.setStatus("Sketch cleared."); }, "secondary");

    var form = h("div", { class: "grid sm:grid-cols-2 gap-3" });
    function labelled(label, control, full) {
      return h("label", { class: "grid gap-1 text-sm font-bold text-ink/70" + (full ? " sm:col-span-2" : "") }, [h("span", { text: label }), control]);
    }
    function txt(key, label, placeholder, full) {
      var i = h("input", { type: "text", class: INPUT_CLS + " w-full", placeholder: placeholder });
      i.addEventListener("input", function () { data[key] = i.value; });
      return labelled(label, i, full);
    }
    function area(key, label, placeholder) {
      var t = h("textarea", { class: INPUT_CLS + " w-full min-h-[90px]", placeholder: placeholder });
      t.addEventListener("input", function () { data[key] = t.value; });
      return labelled(label, t, true);
    }
    var typeSel = h("select", { class: INPUT_CLS + " w-full" }, [
      h("option", { value: "game", text: "A game" }),
      h("option", { value: "story", text: "An interactive story" })
    ]);
    typeSel.addEventListener("change", function () { data.type = typeSel.value; });
    form.appendChild(labelled("Project name", h("input", { type: "text", class: INPUT_CLS + " w-full", placeholder: "e.g. Cat vs Butterfly", oninput: function (e) { data.name = e.target.value; } }), true));
    form.appendChild(labelled("Type", typeSel));
    form.appendChild(txt("sprites", "Sprites needed", "comma separated — e.g. cat, butterfly, tree"));
    form.appendChild(txt("vars", "Variables needed", "score, lives, level…"));
    form.appendChild(txt("interactions", "3 interactions or scenes", "e.g. click to jump · catch the coin · scene 2"));
    form.appendChild(area("pseudo", "Pseudocode / plan", "When green flag clicked, set score to 0…"));

    var doc = h("div", { id: "print-area", class: "hidden rounded-2xl border-2 border-dashed border-motion/40 p-5 bg-white" });

    d.button("Make my design document", function () {
      if (!data.name) data.name = "(untitled project)";
      var list = function (v) { return (v || "").split(",").map(function (x) { return x.trim(); }).filter(Boolean); };
      function ul(arr) { return arr.length ? "<ul>" + arr.map(function (x) { return "<li>" + window.CL.escapeHtml(x) + "</li>"; }).join("") + "</ul>" : "<p><em>none yet</em></p>"; }
      doc.innerHTML =
        '<h3 style="font-size:1.5rem;font-weight:800;margin:0 0 .25rem">' + window.CL.escapeHtml(data.name) + "</h3>" +
        '<p style="margin:0 0 1rem;color:#4a5570;font-weight:700">' + (data.type === "game" ? "A game" : "An interactive story") + " · planned by a Week 9 designer</p>" +
        "<p><strong>Sprites:</strong></p>" + ul(list(data.sprites)) +
        "<p><strong>Variables:</strong></p>" + ul(list(data.vars)) +
        "<p><strong>Interactions / scenes:</strong></p>" + ul(list(data.interactions)) +
        "<p><strong>Pseudocode:</strong></p><pre style=\"white-space:pre-wrap;background:#f6f4ee;padding:.75rem;border-radius:.5rem\">" + window.CL.escapeHtml(data.pseudo || "…") + "</pre>" +
        '<p style="color:#4a5570"><em>Sketch your stage on the pad above, or draw it on paper and staple it to this page.</em></p>';
      doc.classList.remove("hidden");
      d.setStatus("Document created — scroll down and press Print / Save as PDF (or print it).");
    });
    d.button("Print", function () { window.print(); }, "secondary");

    var below = h("div", { class: "grid gap-4" }, [form, doc]);
    d.controls.parentNode.appendChild(below);
    d.setStatus("Plan first, build faster. Everything you type appears in the printable document.");
  }

  /* ============================================================
     DEMO 10 — Showcase (timer + rubric)
     ============================================================ */
  function demoShowcase(root) {
    var d = createDemo(root, {
      run: false,
      hint: "Use the timer to practise your 2–3 minute presentation, then check yourself against the rubric.",
      label: "A presentation timer and showcase rubric"
    });
    var s = d.stage;
    var total = 150, left = 150, ticking = false, done = { };

    var rubric = [
      "My project runs without major bugs",
      "I can explain what my code does",
      "I used at least 2–3 ideas from weeks 1–9",
      "My project is creative or fun (not just a copy)",
      "I presented clearly"
    ];
    var list = h("div", { class: "grid gap-2" });
    var badge = h("span", { class: "pill bg-ink/5 text-ink/70", text: "0 / " + rubric.length + " checked" });
    rubric.forEach(function (item, i) {
      var cb = h("input", { type: "checkbox", class: "mt-0.5 w-4 h-4 accent-motion" });
      cb.addEventListener("change", function () {
        done[i] = cb.checked;
        var n = Object.keys(done).filter(function (k) { return done[k]; }).length;
        badge.textContent = n + " / " + rubric.length + " checked";
        draw();
      });
      list.appendChild(h("label", { class: "flex items-start gap-3 rounded-xl border border-ink/10 px-3 py-2 bg-white hover:border-motion/40 cursor-pointer" }, [cb, h("span", { class: "text-sm font-semibold text-ink/80", text: item })]));
    });

    d.button("Start / pause timer", function () { ticking = !ticking; });
    d.button("Reset timer", function () { ticking = false; left = total; d.setStatus("Timer reset."); draw(); }, "secondary");
    d.select("length:", [{ value: "120", label: "2 min" }, { value: "150", label: "2½ min" }, { value: "180", label: "3 min" }], "150", function (v) { total = parseFloat(v); left = total; draw(); });

    function loop(dt) {
      if (ticking && left > 0) { left -= dt / 1000; if (left <= 0) { left = 0; ticking = false; } }
      draw();
    }
    function draw() {
      var mins = Math.floor(Math.max(0, left) / 60);
      var secs = Math.floor(Math.max(0, left) % 60);
      var time = mins + ":" + String(secs).padStart(2, "0");
      s.clear(left === 0 ? "#fee2e2" : "#f0fdf4");
      s.ctx.save();
      s.ctx.textAlign = "center";
      s.ctx.fillStyle = left <= 15 ? "#dc2626" : "#16a34a";
      s.ctx.font = "800 84px 'Baloo 2', Nunito, sans-serif";
      s.ctx.textBaseline = "middle";
      s.ctx.fillText(time, s.w / 2, s.h / 2 - 24);
      s.ctx.fillStyle = "#1f2a44";
      s.ctx.font = "800 17px Nunito, sans-serif";
      s.ctx.fillText(ticking ? "presenting…" : left === 0 ? "time's up!" : "ready when you are", s.w / 2, s.h / 2 + 44);
      s.ctx.font = "800 14px Nunito, sans-serif";
      s.ctx.fillStyle = "rgba(31,42,68,0.55)";
      s.ctx.fillText("“This is a game about…”  ·  one cool thing I built  ·  what I'd add next", s.w / 2, s.h - 32);
      s.ctx.restore();
      var n = Object.keys(done).filter(function (k) { return done[k]; }).length;
      s.hud(["rubric: " + n + " / " + rubric.length]);
    }
    var below = h("div", { class: "grid gap-3" }, [
      h("div", { class: "flex items-center gap-3" }, [h("h3", { class: "font-display text-lg font-extrabold m-0", text: "Showcase rubric" }), badge]),
      list
    ]);
    d.controls.parentNode.appendChild(below);
    runningAlways(d, loop);
    resetTimer();
    function resetTimer() { left = total; draw(); d.setStatus("Practise your presentation. Aim for 2–3 minutes."); }
  }

  /* ============================================================ export */
  window.ScratchStage = Stage; // reused by the Block Playground
  window.SCRATCH_DEMOS = {
    meet: { build: demoMeet },
    move: { build: demoMove },
    keys: { build: demoKeys },
    loop: { build: demoLoop },
    catch: { build: function (r) { makeCatch(r, false); } },
    score: { build: function (r) { makeCatch(r, true); } },
    broadcast: { build: demoBroadcast },
    story: { build: demoStory },
    plan: { build: demoPlan },
    showcase: { build: demoShowcase }
  };
})();
