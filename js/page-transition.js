(function () {
  const body = document.body;

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    if (
      link.target === "_blank" ||
      link.hasAttribute("download") ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return;
    }

    const destination = new URL(link.href, window.location.href);
    const current = new URL(window.location.href);

    if (destination.origin !== current.origin || destination.href === current.href) {
      return;
    }

    event.preventDefault();
    body.classList.add("page-leaving");

    window.setTimeout(() => {
      window.location.href = destination.href;
    }, 130);
  });
})();
