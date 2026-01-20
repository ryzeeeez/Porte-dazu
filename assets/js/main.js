function trackCTA(label) {
  console.log("CTA:", label);
}

const mobileToggle = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    mobileMenu.style.display = isOpen ? "flex" : "none";
    mobileToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 980 && mobileMenu) {
    mobileMenu.style.display = "none";
    mobileMenu.classList.remove("open");
    mobileToggle?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector(".faq-question");
  const symbol = item.querySelector(".faq-question span");
  if (!button) return;
  button.addEventListener("click", () => {
    item.classList.toggle("active");
    if (symbol) {
      symbol.textContent = item.classList.contains("active") ? "−" : "+";
    }
  });
});
