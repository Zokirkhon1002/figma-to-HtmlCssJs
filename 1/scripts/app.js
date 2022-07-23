// @ts-nocheck
console.log("connected");

menuIcon;
closeIcon;
mobileMenuContainer;
window.addEventListener("scroll", () => {
  if (scrollY > 60) {
    navbar.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
  }
});
menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
  document.body.style.overflow = "auto";
});
