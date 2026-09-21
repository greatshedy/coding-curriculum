/* ============================================================
   nav.js — shared behaviour for every page
   * mobile menu toggle
   * active-link highlighting
   * tiny "copy to clipboard" helper for [data-copy] buttons
   ============================================================ */
(function () {
  "use strict";

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    /* ---- mobile menu ---- */
    document.querySelectorAll("[data-nav-toggle]").forEach(function (btn) {
      var menu = document.querySelector("[data-nav-menu]");
      if (!menu) return;
      btn.addEventListener("click", function () {
        var open = menu.classList.toggle("hidden") === false;
        btn.setAttribute("aria-expanded", String(open));
      });
      menu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          menu.classList.add("hidden");
          btn.setAttribute("aria-expanded", "false");
        });
      });
    });

    /* ---- active link (compare resolved paths so nested pages match) ---- */
    var herePath = window.location.pathname.replace(/\\/g, "/");
    document.querySelectorAll("[data-nav-links] a[href]").forEach(function (a) {
      var target = a.href.split("#")[0].split("?")[0];
      var targetPath;
      try { targetPath = new URL(target, window.location.href).pathname.replace(/\\/g, "/"); }
      catch (err) { targetPath = target; }
      // ignore the query string when resolving the file path
      if (targetPath && targetPath === herePath) {
        a.classList.add("text-white", "bg-white/20");
        a.setAttribute("aria-current", "page");
      }
    });

    /* ---- copy buttons ---- */
    document.querySelectorAll("[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var sel = btn.getAttribute("data-copy");
        var src = sel ? document.querySelector(sel) : null;
        var text = src ? src.innerText : btn.getAttribute("data-copy-text") || "";
        var done = function () {
          var old = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(function () { btn.textContent = old; }, 1400);
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
      });
    });
  });

  /* Shared namespace so page scripts can reuse small helpers. */
  window.CL = window.CL || {};
  window.CL.escapeHtml = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };
  window.CL.qs = function (name) {
    var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
  };
})();
