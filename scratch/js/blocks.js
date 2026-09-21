/* ============================================================
   blocks.js — renders Scratch-style block recipes from data.
   Usage:  ScratchBlocks.render(week.blocks) -> DocumentFragment
   The recipe is read-only (students copy it into real Scratch).
   ============================================================ */
(function () {
  "use strict";

  function esc(s) {
    return (window.CL && window.CL.escapeHtml) ? window.CL.escapeHtml(s) : String(s);
  }

  function inputEl(value) {
    var span = document.createElement("span");
    var isNumber = /^-?\d+(\.\d+)?$/.test(String(value).trim());
    span.className = "sb-input" + (isNumber ? "" : " sb-input--text");
    span.textContent = value;
    return span;
  }

  /** Build the label line, swapping %1/%2 for input pills. */
  function labelEl(block) {
    var wrap = document.createElement("span");
    var text = block.text || "";
    var parts = text.split(/(%\d+)/);
    parts.forEach(function (part) {
      var m = /^%(\d+)$/.exec(part);
      if (m) {
        var key = m[1];
        var val = block.in && block.in[key] != null ? block.in[key] : "";
        wrap.appendChild(inputEl(val));
      } else if (part) {
        wrap.appendChild(document.createTextNode(part));
      }
    });
    return wrap;
  }

  function createBlock(block) {
    var el = document.createElement("div");
    el.className = "sb sb--" + (block.cat || "motion");
    if (block.hat) el.classList.add("sb--hat");
    if (block.c && block.c.length) el.classList.add("sb--c");
    if (block.pseudocode) el.classList.add("sb--pseudo");
    el.appendChild(labelEl(block));

    if (block.c && block.c.length) {
      block.c.forEach(function (substack, i) {
        if (i === 1) {
          var lbl = document.createElement("div");
          lbl.className = "sb-else";
          lbl.textContent = "else";
          el.appendChild(lbl);
        }
        var inner = document.createElement("div");
        inner.className = "sb-inner" + (i === 1 ? " sb-inner--else" : "");
        (substack || []).forEach(function (child) {
          inner.appendChild(createBlock(child));
        });
        el.appendChild(inner);
      });
    }
    return el;
  }

  function render(blocks) {
    var frag = document.createDocumentFragment();
    var current = null;

    (blocks || []).forEach(function (block) {
      if (block.hat || !current) {
        current = document.createElement("div");
        current.className = "sb-stack";
        frag.appendChild(current);
      }
      current.appendChild(createBlock(block));
    });

    return frag;
  }

  window.ScratchBlocks = { render: render, createBlock: createBlock };
})();
