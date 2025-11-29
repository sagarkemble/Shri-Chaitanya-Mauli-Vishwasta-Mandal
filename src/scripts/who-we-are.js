const swiper1 = new Swiper("#slider-2", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
const swiper3 = new Swiper("#slider-1", {
  direction: "horizontal",
  loop: true,
  autoHeight: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
