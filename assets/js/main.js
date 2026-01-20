const siteState = {
  navOpen: false
};

function trackCTA(label) {
  console.log("CTA:", label);
}

function toggleMenu() {
  siteState.navOpen = !siteState.navOpen;
  document.body.classList.toggle("nav-open", siteState.navOpen);
}

function closeMenu() {
  siteState.navOpen = false;
  document.body.classList.remove("nav-open");
}

function initNav() {
  const toggle = document.querySelector(".menu-toggle");
  toggle?.addEventListener("click", toggleMenu);
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  const overlay = document.querySelector(".nav-overlay");
  overlay?.addEventListener("click", closeMenu);
}

function initFAQ() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-question");
    button?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
      document.querySelectorAll(".faq-question span").forEach((span) => {
        span.textContent = "+";
      });
      const currentSymbol = item.querySelector(".faq-question span");
      if (currentSymbol && item.classList.contains("active")) {
        currentSymbol.textContent = "−";
      }
    });
  });
}

function initCTAButtons() {
  document.querySelectorAll("[data-cta]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const label = event.currentTarget.getAttribute("data-cta");
      if (label) trackCTA(label);
    });
  });
}

function initOverlay() {
  if (document.querySelector(".nav-overlay")) return;
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);
}

function initPageTransition() {
  if (document.querySelector(".page-overlay")) return;
  const overlay = document.createElement("div");
  overlay.className = "page-overlay";
  document.body.appendChild(overlay);

  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("sms:") || href.startsWith("mailto:")) {
      return;
    }
    link.addEventListener("click", (event) => {
      if (link.target === "_blank" || event.metaKey || event.ctrlKey) return;
      overlay.classList.add("active");
      setTimeout(() => {
        window.location.href = href;
      }, 180);
    });
  });
}

function initScrollTop() {
  if (document.querySelector(".scroll-top")) return;
  const button = document.createElement("button");
  button.className = "scroll-top";
  button.type = "button";
  button.textContent = "↑ Haut";
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.body.appendChild(button);
}

document.addEventListener("DOMContentLoaded", () => {
  initOverlay();
  initNav();
  initFAQ();
  initCTAButtons();
  initPageTransition();
  initScrollTop();
});
