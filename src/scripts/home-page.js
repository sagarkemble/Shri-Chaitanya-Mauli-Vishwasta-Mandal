const swiper = new Swiper("#slider-1", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  effect: "fade",
  autoplay: {
    delay: 2500,
  },
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiper2 = new Swiper("#slider-2", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// stats counter animation
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
const statsContainer = document.querySelector(".stats-container");
if (statsContainer) observer.observe(statsContainer);

// feedBackForm
const feedBackForm = document.querySelector(".feedback-form");
const closeFeedBackFormBtn = document.querySelector(".close-form-btn");
setTimeout(() => {
  feedBackForm.classList.remove("invisible");
  feedBackForm.classList.add("opacity-100");
}, 25000);
closeFeedBackFormBtn.addEventListener("click", () => {
  feedBackForm.classList.remove("opacity-100");
  feedBackForm.classList.add("opacity-0");
  setTimeout(() => {
    feedBackForm.classList.add("invisible");
  }, 300);
});
