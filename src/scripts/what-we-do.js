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
