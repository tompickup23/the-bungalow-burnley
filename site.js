(function () {
  document.documentElement.classList.add("is-enhanced");

  const menuButton = document.querySelector("[data-menu-toggle]");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      const isOpen = document.body.classList.toggle("menu-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.body.classList.remove("menu-open");
      if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  });

  const banner = document.querySelector("[data-cookie-banner]");
  const accept = document.querySelector("[data-cookie-accept]");
  const reject = document.querySelector("[data-cookie-reject]");
  const key = "bungalowCookieChoice";

  if (banner && !localStorage.getItem(key)) {
    banner.classList.add("show");
  }

  function setChoice(value) {
    localStorage.setItem(key, value);
    if (banner) {
      banner.classList.remove("show");
    }
  }

  if (accept) {
    accept.addEventListener("click", function () {
      setChoice("accepted-necessary-only");
    });
  }

  if (reject) {
    reject.addEventListener("click", function () {
      setChoice("necessary-only");
    });
  }

  const revealItems = document.querySelectorAll(
    ".section, .facts article, .review-strip, .visual-story, .place-tile, .card, .contact-item, .area-card, .itinerary-card, .route-card, .wide-photo"
  );

  revealItems.forEach(function (item) {
    item.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  const navLinks = Array.from(document.querySelectorAll(".nav-links a[href$='.html'], .brand"));
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(function (link) {
    const linkFile = link.getAttribute("href");
    if (linkFile === currentFile) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
