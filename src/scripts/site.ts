let sectionObserver: IntersectionObserver | undefined;

function initializePage() {
  const navigationToggle = document.querySelector<HTMLButtonElement>(".navbar-toggler");
  const navigationMenu = document.querySelector<HTMLElement>("#navbarSupportedContent");

  if (navigationToggle && !navigationToggle.dataset.bound) {
    navigationToggle.dataset.bound = "true";
    navigationToggle.addEventListener("click", () => {
      const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true";
      navigationToggle.setAttribute("aria-expanded", String(!isExpanded));
      navigationMenu?.classList.toggle("show", !isExpanded);
    });

    navigationMenu?.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        navigationMenu.classList.remove("show");
        navigationToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const imageDialog = document.querySelector<HTMLDialogElement>(".image-dialog");
  const dialogImage = imageDialog?.querySelector<HTMLImageElement>(".image-dialog__image");
  const closeDialog = imageDialog?.querySelector<HTMLButtonElement>(".image-dialog__close");

  if (imageDialog && dialogImage && !imageDialog.dataset.bound) {
    imageDialog.dataset.bound = "true";
    document.querySelectorAll<HTMLButtonElement>(".certificate-card__image-button[data-full-src]").forEach((button) => {
      button.addEventListener("click", () => {
        dialogImage.src = button.dataset.fullSrc ?? "";
        dialogImage.alt = button.dataset.fullAlt ?? "";
        imageDialog.showModal();
      });
    });

    closeDialog?.addEventListener("click", () => imageDialog.close());
    imageDialog.addEventListener("click", (event) => {
      if (event.target === imageDialog) imageDialog.close();
    });
  }

  const search = document.querySelector<HTMLInputElement>("[data-project-search]");
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-project-card]"));
  const filterButtons = document.querySelectorAll<HTMLButtonElement>("[data-project-filter]");
  const count = document.querySelector<HTMLElement>("[data-project-count]");
  const emptyState = document.querySelector<HTMLElement>("[data-project-empty]");
  let activeCategory = "all";

  if (search && cards.length > 0) {
    const updateProjects = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visible = 0;

      for (const card of cards) {
        const matchesQuery = card.dataset.projectSearch?.includes(query) ?? false;
        const matchesCategory =
          activeCategory === "all" || card.dataset.projectCategory === activeCategory;
        const isVisible = matchesQuery && matchesCategory;
        card.hidden = !isVisible;
        if (isVisible) visible += 1;
      }

      if (count) count.textContent = `Showing ${visible} of ${cards.length} projects`;
      if (emptyState) emptyState.hidden = visible !== 0;
    };

    search.addEventListener("input", updateProjects);
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.projectFilter ?? "all";
        filterButtons.forEach((filter) => {
          const isActive = filter === button;
          filter.classList.toggle("is-active", isActive);
          filter.setAttribute("aria-pressed", String(isActive));
        });
        updateProjects();
      });
    });
  }

  sectionObserver?.disconnect();
  const sections = document.querySelectorAll<HTMLElement>("main section[id]");
  const sectionLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");

  if ("IntersectionObserver" in window && sectionLinks.length > 0) {
    sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          sectionLinks.forEach((link) => {
            const isCurrent = link.hash === `#${entry.target.id}`;
            if (isCurrent) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    sections.forEach((section) => sectionObserver?.observe(section));
  }

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });
    document.body.classList.toggle(
      "motion-ready",
      document.querySelector("[data-reveal]") !== null &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }
}

document.addEventListener("astro:page-load", initializePage);
document.addEventListener("astro:before-swap", () => sectionObserver?.disconnect());
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePage, { once: true });
} else {
  initializePage();
}

document.addEventListener("keydown", (event) => {
  if (
    event.key === "/" &&
    !(event.target instanceof HTMLInputElement) &&
    !(event.target instanceof HTMLTextAreaElement) &&
    !event.metaKey &&
    !event.ctrlKey
  ) {
    const search = document.querySelector<HTMLInputElement>("[data-project-search]");
    if (search) {
      event.preventDefault();
      search.focus();
    }
  }
});
