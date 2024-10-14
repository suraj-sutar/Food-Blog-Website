const mobileMenu = document.querySelector(".mobile-menu");
const scrollBtn = document.querySelector(".scroll-top");
mobileMenu.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("show");
});

//first Function
window.addEventListener("scroll", function () {
  if (
    this.document.body.scrollTop > 100 ||
    this.document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
