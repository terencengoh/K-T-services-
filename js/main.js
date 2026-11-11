(function () {
  "use strict";

  var nav = document.getElementById("site-nav");
  var toggle = document.getElementById("nav-toggle");

  function setNav(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNav(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNav(false);
    });

    document.addEventListener("click", function (event) {
      if (!toggle.contains(event.target) && !nav.contains(event.target)) {
        setNav(false);
      }
    });
  }

  var yearNodes = document.querySelectorAll("[data-year]");
  var year = String(new Date().getFullYear());
  yearNodes.forEach(function (node) {
    node.textContent = year;
  });

  var form = document.getElementById("contact-form");
  if (form) {
    var service = form.querySelector("#service");
    var params = new URLSearchParams(window.location.search);
    var hash = (window.location.hash || "").replace("#", "").toLowerCase();
    var requested = (params.get("service") || hash || "").toLowerCase();
    var serviceMap = {
      audit: "Free sales-presence audit",
      website: "Website building",
      websites: "Website building",
      "local-growth": "Local business growth",
      local: "Local business growth",
      operations: "Small business problem-solving",
      "problem-solving": "Small business problem-solving"
    };
    if (service && serviceMap[requested]) {
      service.value = serviceMap[requested];
    }

    form.addEventListener("submit", function () {
      var button = form.querySelector('button[type="submit"]');
      if (!form.checkValidity()) return;
      if (button) {
        button.disabled = true;
        button.textContent = "Sending…";
      }
      var status = document.getElementById("form-status");
      if (status) {
        status.hidden = false;
        status.textContent = "Sending your message. You will be redirected after it is submitted.";
      }
    });
  }
})();
