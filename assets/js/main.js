const siteState = {
  navOpen: false
};

function trackCTA(label) {
  console.log("CTA:", label);
}

function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function lockScroll(locked) {
  document.body.classList.toggle("lock-scroll", locked);
}

function toggleMenu() {
  const header = document.querySelector("header");
  siteState.navOpen = !siteState.navOpen;
  header?.classList.toggle("nav-open", siteState.navOpen);
  lockScroll(siteState.navOpen);
}

function closeMenu() {
  const header = document.querySelector("header");
  siteState.navOpen = false;
  header?.classList.remove("nav-open");
  lockScroll(false);
}

function initNav() {
  const toggle = document.querySelector(".menu-toggle");
  const backdrop = document.querySelector(".menu-backdrop");
  toggle?.addEventListener("click", toggleMenu);
  backdrop?.addEventListener("click", closeMenu);
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
  window.addEventListener("resize", closeMenu);
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

function initScrollTop() {
  const button = document.querySelector(".scroll-top");
  if (!button) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initPageTransition() {
  const overlay = document.querySelector(".page-overlay");
  if (!overlay) return;
  document.querySelectorAll("a[href$='.html']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = link.getAttribute("href");
      if (!url || url.startsWith("#") || url.startsWith("mailto:") || url.startsWith("tel:") || url.startsWith("sms:")) {
        return;
      }
      event.preventDefault();
      overlay.classList.add("active");
      setTimeout(() => {
        window.location.href = url;
      }, 250);
    });
  });
}

function initLoader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    loader.classList.add("hidden");
  });
}

function initCustomSelects() {
  const selects = document.querySelectorAll("[data-select]");
  selects.forEach((wrapper) => {
    const nativeSelect = wrapper.querySelector("select");
    const button = wrapper.querySelector(".custom-select-button");
    const list = wrapper.querySelector(".custom-select-list");
    const label = wrapper.querySelector(".custom-select-label");
    const options = wrapper.querySelectorAll(".custom-select-option");

    if (!nativeSelect || !button || !list || !label) return;

    const close = () => {
      wrapper.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    };

    const open = () => {
      wrapper.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    };

    const selectOption = (option) => {
      const value = option.getAttribute("data-value");
      if (!value) return;
      nativeSelect.value = value;
      label.textContent = value;
      options.forEach((opt) => opt.setAttribute("aria-selected", "false"));
      option.setAttribute("aria-selected", "true");
      nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));
      close();
    };

    button.addEventListener("click", () => {
      if (wrapper.classList.contains("open")) {
        close();
      } else {
        open();
      }
    });

    options.forEach((option) => {
      option.addEventListener("click", () => selectOption(option));
    });

    document.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) {
        close();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (!wrapper.classList.contains("open")) return;
      const current = wrapper.querySelector(".custom-select-option[aria-selected='true']");
      const optionArray = Array.from(options);
      const currentIndex = optionArray.indexOf(current);

      if (event.key === "Escape") {
        close();
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        const next = optionArray[currentIndex + 1] || optionArray[0];
        selectOption(next);
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        const prev = optionArray[currentIndex - 1] || optionArray[optionArray.length - 1];
        selectOption(prev);
      }
      if (event.key === "Enter") {
        event.preventDefault();
        if (current) selectOption(current);
      }
    });

    nativeSelect.addEventListener("change", () => {
      label.textContent = nativeSelect.value;
      options.forEach((opt) => {
        opt.setAttribute("aria-selected", opt.getAttribute("data-value") === nativeSelect.value ? "true" : "false");
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("js-enabled");
  setViewportHeight();
  window.addEventListener("resize", setViewportHeight);
  initNav();
  initFAQ();
  initCTAButtons();
  initScrollTop();
  initPageTransition();
  initLoader();
  initCustomSelects();
});
