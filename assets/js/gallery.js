function initGalleryFilters() {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll(".gallery-item");
  if (!filterButtons.length || !items.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      items.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", initGalleryFilters);
