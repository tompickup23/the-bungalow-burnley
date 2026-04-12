(function () {
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
})();
