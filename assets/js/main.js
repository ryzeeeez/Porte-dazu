const siteState = {
  navOpen: false
};

function trackCTA(label) {
  console.log("CTA:", label);
}

function toggleMenu() {
  const header = document.querySelector("header");
  siteState.navOpen = !siteState.navOpen;
  header?.classList.toggle("nav-open", siteState.navOpen);
}

function closeMenu() {
  const header = document.querySelector("header");
  siteState.navOpen = false;
  header?.classList.remove("nav-open");
}

function initNav() {
  const toggle = document.querySelector(".menu-toggle");
  toggle?.addEventListener("click", toggleMenu);
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
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

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFAQ();
  initCTAButtons();
});
