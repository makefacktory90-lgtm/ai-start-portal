const navLinks = Array.from(document.querySelectorAll(".deck-nav nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.toggleAttribute("aria-current", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { threshold: 0.6 }
);

sections.forEach((section) => observer.observe(section));
