const accordians = document.querySelectorAll(".accordian");
accordians.forEach((accordian) => {
  const upper = accordian.querySelector(".upper");
  const lower = accordian.querySelector(".lower");
  const caret = accordian.querySelector(".caret");

  upper.addEventListener("click", () => {
    lower.classList.toggle("opacity-100");
    lower.classList.toggle("max-h-[100vh]");
    lower.classList.toggle("pt-3");
    caret.classList.toggle("rotate-180");
  });
});

function animateCount(el, target) {
  let count = 0;
  const speed = target / 120;

  const update = () => {
    count += Math.ceil(speed);
    if (count >= target) {
      el.textContent = target;
    } else {
      el.textContent = count;
      requestAnimationFrame(update);
    }
  };

  update();
}

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".value");
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          animateCount(counter, target);
        });
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 },
);

const popup = document.querySelector(".donation-popup");
const openPopupButtons = document.querySelectorAll(".open-donation-popup");
const closePopupButton = document.querySelector(".close-donation-popup");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });
});

closePopupButton.addEventListener("click", () => {
  popup.classList.add("hidden");
});

const statsContainer = document.querySelector(".stats-container");
if (statsContainer) observer.observe(statsContainer);
