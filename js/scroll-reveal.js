document.addEventListener("DOMContentLoaded", () => {
	const selectors = [
		".hero",
		".about-intro",
		".about-section",
		".projects-grid .project-card",
		".contact-card",
		".contact-links a",
		".skills-grid > div",
		".skills-grid li",
		".softwares-list li"
	];

	const targets = [...document.querySelectorAll(selectors.join(", "))];

	if (!targets.length) return;

	targets.forEach((element, index) => {
		element.classList.add("reveal-on-scroll");

		const stagger = index % 4;
		if (stagger > 0) {
		element.classList.add(`reveal-delay-${stagger}`);
		}
	});

	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		targets.forEach((element) => element.classList.add("reveal-visible"));
		return;
	}

	const observer = new IntersectionObserver(
		(entries, currentObserver) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add("reveal-visible");
			currentObserver.unobserve(entry.target);
		});
		},
		{
		threshold: 0.15,
		rootMargin: "0px 0px -10% 0px"
		}
	);

	targets.forEach((element) => observer.observe(element));
});
