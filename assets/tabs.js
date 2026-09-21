/* ============================================================
   tabs.js — generic accessible tab component.
   Markup:
     <div data-tabs>
       <div role="tablist">
         <button role="tab" aria-controls="p1" aria-selected="true">A</button>
         <button role="tab" aria-controls="p2">B</button>
       </div>
       <div id="p1" role="tabpanel">…</div>
       <div id="p2" role="tabpanel" hidden>…</div>
     </div>
   Call Tabs.init(root) after injecting markup dynamically.
   ============================================================ */
(function () {
  "use strict";

  function initTabs(root) {
    var scope = root || document;
    var wraps = scope.querySelectorAll("[data-tabs]");

    Array.prototype.forEach.call(wraps, function (wrap) {
      if (wrap.getAttribute("data-tabs-ready") === "1") return;
      wrap.setAttribute("data-tabs-ready", "1");

      var tabs = Array.prototype.slice.call(wrap.querySelectorAll('[role="tab"]'));
      if (!tabs.length) return;

      function select(idx) {
        tabs.forEach(function (tab, i) {
          var on = i === idx;
          tab.setAttribute("aria-selected", String(on));
          tab.setAttribute("tabindex", on ? "0" : "-1");
          var panel = document.getElementById(tab.getAttribute("aria-controls"));
          if (panel) panel.hidden = !on;
        });
      }

      tabs.forEach(function (tab, i) {
        tab.addEventListener("click", function () { select(i); });
        tab.addEventListener("keydown", function (ev) {
          if (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft") return;
          ev.preventDefault();
          var next = (i + (ev.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
          tabs[next].focus();
          select(next);
        });
      });

      // Respect an initially-selected tab, otherwise open the first.
      var start = tabs.findIndex(function (t) { return t.getAttribute("aria-selected") === "true"; });
      select(start < 0 ? 0 : start);
    });
  }

  window.Tabs = { init: initTabs };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { initTabs(document); });
  } else {
    initTabs(document);
  }
})();
