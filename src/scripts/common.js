const navLinkToggleButton = document.querySelector(".hamburger-wrapper");
const subLinkToggleButon = document.querySelector(".sub-links-toggle-button");
const navLinks = document.querySelector(".nav-links");
const subLink = document.querySelector(".sub-links");
navLinkToggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("opacity-100");
  navLinks.classList.toggle("max-h-[100vh]");
  navLinks.classList.toggle("py-4");
});
subLinkToggleButon.addEventListener("click", () => {
  subLink.classList.toggle("opacity-100");
  subLink.classList.toggle("max-h-[100vh]");
  subLink.classList.toggle("pt-2");
  subLink.classList.toggle("lg:pb-4");
});
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  const options = {
    threshold: 0.15,
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, options);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
