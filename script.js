/* Beyond Rigid Bodies — site behavior (vanilla, no dependencies) */
(function () {
  "use strict";

  /* ---- mobile nav toggle ---- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close after tapping a link (mobile)
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- image fallback: swap broken <img> for an initials/logo placeholder ---- */
  function makeFallback(img) {
    var kind = img.getAttribute("data-kind") || "avatar";
    var label = img.getAttribute("data-initials") || "";
    var el = document.createElement("div");
    el.className = "ph-fallback " + kind;
    el.textContent = label;
    el.setAttribute("role", "img");
    el.setAttribute("aria-label", img.getAttribute("alt") || label);
    var accent = img.getAttribute("data-accent");
    if (accent) el.style.setProperty("--accent", accent);
    if (img.parentNode) img.parentNode.replaceChild(el, img);
  }
  var phs = document.querySelectorAll("img.ph");
  Array.prototype.forEach.call(phs, function (img) {
    function onFail() {
      // try an alternate filename (e.g. the original spaced name) once
      var alt = img.getAttribute("data-fallback-src");
      if (alt && img.getAttribute("data-tried") !== "1") {
        img.setAttribute("data-tried", "1");
        img.src = alt;
        return;
      }
      makeFallback(img);
    }
    // already failed before JS ran?
    if (img.complete && img.naturalWidth === 0) { onFail(); return; }
    img.addEventListener("error", onFail);
  });

  /* ---- scrollspy: highlight the active section in the nav ---- */
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav__links a[href^="#"]')
  );
  var map = {};
  var sections = [];
  links.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    var sec = document.getElementById(id);
    if (sec) { map[id] = a; sections.push(sec); }
  });

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (l) { l.classList.remove("active"); });
            var active = map[entry.target.id];
            if (active) active.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
