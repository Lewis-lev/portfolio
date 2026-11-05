const navigation = document.querySelector<HTMLElement>("#sideNav");
const navigationToggle = navigation?.querySelector<HTMLButtonElement>(".navbar-toggler");
const navigationMenu = navigation?.querySelector<HTMLElement>(".navbar-collapse");

navigationToggle?.addEventListener("click", () => {
  const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true";
  navigationToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigationMenu?.classList.toggle("show", !isExpanded);
});

navigationMenu?.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) {
    navigationMenu.classList.remove("show");
    navigationToggle?.setAttribute("aria-expanded", "false");
  }
});

const imageDialog = document.querySelector<HTMLDialogElement>(".image-dialog");
const dialogImage = imageDialog?.querySelector<HTMLImageElement>(".image-dialog__image");
const closeDialog = imageDialog?.querySelector<HTMLButtonElement>(".image-dialog__close");

document.querySelectorAll<HTMLButtonElement>(".card-img-top-btn[data-full-src]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!imageDialog || !dialogImage) return;
    dialogImage.src = button.dataset.fullSrc ?? "";
    dialogImage.alt = button.dataset.fullAlt ?? "";
    imageDialog.showModal();
  });
});

closeDialog?.addEventListener("click", () => imageDialog?.close());
imageDialog?.addEventListener("click", (event) => {
  if (event.target === imageDialog) imageDialog.close();
});

const sections = document.querySelectorAll<HTMLElement>("main section[id]");
const sectionLinks = document.querySelectorAll<HTMLAnchorElement>(".navbar-nav .nav-link");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        sectionLinks.forEach((link) => {
          const isCurrent = link.hash === `#${entry.target.id}`;
          if (isCurrent) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
          link.classList.toggle("active", isCurrent);
        });
      }
    },
    { rootMargin: "-30% 0px -60% 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
