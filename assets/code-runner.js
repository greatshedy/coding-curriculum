/* ============================================================
   code-runner.js — actually runs student HTML/JS in the browser.
   * CodeRunner.editor(root, opts)  — editable + live preview + console
   * CodeRunner.snippet(root, opts) — read-only code with a Run button
   Student code runs inside a sandboxed iframe (allow-scripts only).
   console.log / warn / error and uncaught errors are piped back to
   the parent with postMessage, then shown in a console panel.
   ============================================================ */
(function () {
  "use strict";

  var MAX_LINES = 300;

  /* ---------------------------------------------------------- dom helper */
  function h(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null) return;
        if (k === "class") n.className = v;
        else if (k === "text") n.textContent = v;
        else if (k === "html") n.innerHTML = v;
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

  /* ---------------------------------------------------------- console capture */
  function preamble() {
    return (
      "<scr" + "ipt>(function(){" +
      "function send(type,args){try{parent.postMessage({__codelab:true,type:type,args:Array.prototype.slice.call(args).map(function(a){" +
      "if(typeof a==='string')return a;if(a===undefined)return 'undefined';if(a===null)return 'null';" +
      "if(typeof a==='object'){try{return JSON.stringify(a);}catch(e){return String(a);}}return String(a);})},'*');}catch(e){}}" +
      "['log','info','warn','error'].forEach(function(k){var orig=console[k]?console[k].bind(console):function(){};" +
      "console[k]=function(){send(k,arguments);try{orig.apply(null,arguments);}catch(e){}};});" +
      "window.addEventListener('error',function(e){send('error',[(e.message||'Error')+(e.lineno?' (line '+e.lineno+')':'')]);});" +
      "window.addEventListener('unhandledrejection',function(e){send('error',['Unhandled promise rejection: '+(e.reason&&e.reason.message?e.reason.message:e.reason)]);});" +
      "})();<\/scr" + "ipt>"
    );
  }

  /** Put the console-capturing script at the very top of the document. */
  function instrument(html) {
    var p = preamble();
    if (/<head\b[^>]*>/i.test(html)) return html.replace(/<head\b[^>]*>/i, function (m) { return m + p; });
    if (/<html\b[^>]*>/i.test(html)) return html.replace(/<html\b[^>]*>/i, function (m) { return m + p; });
    if (/<body\b[^>]*>/i.test(html)) return html.replace(/<body\b[^>]*>/i, function (m) { return m + p; });
    // bare fragment — wrap it in a full document
    return "<!DOCTYPE html><html><head>" + p + "</head><body>" + html + "</body></html>";
  }

  function consolePanel() {
    var body = h("div", { class: "code-console", role: "log", "aria-live": "polite" });
    var empty = h("p", { class: "code-console-empty", text: "Console output appears here. Add console.log(…) to your code." });
    body.appendChild(empty);
    var count = 0;

    return {
      el: body,
      clear: function () {
        body.innerHTML = "";
        body.appendChild(empty);
        count = 0;
      },
      append: function (type, args) {
        if (count === 0) body.innerHTML = "";
        count++;
        var line = h("div", { class: "code-line code-line--" + (type || "log") }, [
          h("span", { class: "code-line-badge", text: type === "error" ? "error" : type === "warn" ? "warn" : "log" }),
          h("span", { class: "code-line-text", text: (args || []).join(" ") })
        ]);
        body.appendChild(line);
        while (body.children.length > MAX_LINES) body.removeChild(body.firstChild);
        body.scrollTop = body.scrollHeight;
      }
    };
  }

  /** Wire one iframe to one console panel. */
  function wireFrame(iframe, panel) {
    window.addEventListener("message", function (ev) {
      var d = ev.data;
      if (!d || d.__codelab !== true) return;
      try { if (ev.source !== iframe.contentWindow) return; } catch (e) { return; }
      panel.append(d.type, d.args);
    });
  }

  /* ---------------------------------------------------------- shared bits */
  function copyText(text, btn) {
    var done = function () {
      var old = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(function () { btn.textContent = old; }, 1300);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, done);
    } else {
      var ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) { /* ignore */ }
      document.body.removeChild(ta);
      done();
    }
  }

  function downloadFile(name, text) {
    var blob = new Blob([text], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = name || "my-page.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }

  /* ============================================================
     Full editor — editable code + live preview + console
     ============================================================ */
  function editor(root, opts) {
    opts = opts || {};
    var initial = opts.code || "";
    var filename = opts.filename || "index.html";
    root.innerHTML = "";

    var panel = consolePanel();
    var iframe = h("iframe", {
      class: "code-frame",
      sandbox: "allow-scripts",
      title: "Code result",
      srcdoc: "<!DOCTYPE html><html><body style='font-family:sans-serif;color:#94a3b8;padding:14px'>Press Run to see your page.</body></html>"
    });
    wireFrame(iframe, panel);

    var area = h("textarea", {
      class: "code-area",
      spellcheck: "false",
      autocapitalize: "off",
      autocomplete: "off",
      "aria-label": "Code editor for " + filename
    });
    area.value = initial;

    var runBtn = h("button", { type: "button", class: "code-btn code-btn--run", text: "▶ Run" });
    var resetBtn = h("button", { type: "button", class: "code-btn", text: "↺ Reset" });
    var copyBtn = h("button", { type: "button", class: "code-btn", text: "⧉ Copy" });
    var dlBtn = opts.download === false ? null : h("button", { type: "button", class: "code-btn", text: "⬇ Download" });
    var clearBtn = h("button", { type: "button", class: "code-btn code-btn--ghost", text: "Clear" });

    var bar = h("div", { class: "code-toolbar" }, [
      h("span", { class: "code-file", text: filename }),
      h("span", { class: "code-toolbar-spacer" }),
      runBtn, resetBtn, copyBtn, dlBtn
    ].filter(Boolean));

    function run() {
      panel.clear();
      iframe.srcdoc = instrument(area.value);
    }

    runBtn.addEventListener("click", run);
    resetBtn.addEventListener("click", function () { area.value = initial; run(); });
    copyBtn.addEventListener("click", function () { copyText(area.value, copyBtn); });
    if (dlBtn) dlBtn.addEventListener("click", function () { downloadFile(filename, area.value); });
    clearBtn.addEventListener("click", function () { panel.clear(); });
    area.addEventListener("keydown", function (ev) {
      if (ev.key === "Tab") {
        ev.preventDefault();
        var s = area.selectionStart, e = area.selectionEnd;
        area.value = area.value.slice(0, s) + "  " + area.value.slice(e);
        area.selectionStart = area.selectionEnd = s + 2;
      }
      if (ev.key === "Enter" && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); run(); }
    });

    var wrap = h("div", { class: "code-editor" }, [
      bar,
      h("div", { class: "code-split" }, [
        h("div", { class: "code-pane" }, [
          h("div", { class: "code-pane-head", text: "Your code" }),
          area
        ]),
        h("div", { class: "code-pane" }, [
          h("div", { class: "code-pane-head", text: "Result" }),
          h("div", { class: "code-preview" }, [iframe])
        ])
      ]),
      h("div", { class: "code-console-wrap" }, [
        h("div", { class: "code-console-head" }, [
          h("span", { text: "Console" }), h("span", { class: "code-toolbar-spacer" }), clearBtn
        ]),
        panel.el
      ])
    ]);

    root.appendChild(wrap);
    run();

    return {
      run: run,
      reset: function () { area.value = initial; run(); },
      setCode: function (code, runNow) { area.value = code; if (runNow !== false) run(); },
      getCode: function () { return area.value; }
    };
  }

  /* ============================================================
     Snippet — read-only code with an optional Run button.
     The iframe is created lazily so pages with many snippets stay light.
     ============================================================ */
  function snippet(root, opts) {
    opts = opts || {};
    var code = opts.code || "";
    root.innerHTML = "";

    var codeEl = h("pre", { class: "codeblock" }, [h("code", { text: code })]);
    var copyBtn = h("button", { type: "button", class: "code-btn code-btn--ghost", text: "⧉ Copy" });
    copyBtn.addEventListener("click", function () { copyText(code, copyBtn); });

    var runBtn = null;
    if (opts.run !== false) {
      runBtn = h("button", { type: "button", class: "code-btn code-btn--run", text: "▶ Run" });
    }

    var head = h("div", { class: "code-snippet-head" }, [
      h("span", { class: "code-file", text: opts.filename || (opts.title || "JavaScript") }),
      h("span", { class: "code-toolbar-spacer" }),
      runBtn, copyBtn
    ].filter(Boolean));

    var body = h("div", { class: "code-snippet-body" }, [codeEl]);
    var out = h("div", { class: "code-snippet-output" });
    var wrap = h("div", { class: "code-snippet" }, [head, body, out]);
    root.appendChild(wrap);

    if (opts.caption) {
      wrap.insertBefore(h("p", { class: "code-caption", text: opts.caption }), body);
    }

    if (runBtn) {
      var built = false;
      var panel = null, iframe = null;
      runBtn.addEventListener("click", function () {
        if (!built) {
          panel = consolePanel();
          iframe = h("iframe", { class: "code-frame code-frame--snippet", sandbox: "allow-scripts", title: "Snippet result" });
          wireFrame(iframe, panel);
          out.appendChild(h("div", { class: "code-preview code-preview--snippet" }, [iframe]));
          out.appendChild(h("div", { class: "code-console-wrap" }, [
            h("div", { class: "code-console-head" }, [h("span", { text: "Console" })]),
            panel.el
          ]));
          built = true;
          runBtn.textContent = "▶ Run again";
        } else {
          panel.clear();
        }
        iframe.srcdoc = instrument(code);
      });
    }

    return { el: wrap };
  }

  window.CodeRunner = {
    editor: editor,
    snippet: snippet,
    instrument: instrument,
    consolePanel: consolePanel
  };
})();
