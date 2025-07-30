import "./style.css";

/** CODE FOR SIDE BAR */
toggleBtn.addEventListener("click", function () {
  sideBar.classList.toggle("active");
});
toggleBttn.addEventListener("click", function () {
  sideBar.classList.remove("active");
});
overLay.addEventListener("click", function () {
  sideBar.classList.remove("active");
});
/** ENDS HERE */

/** CODE FOR SCROLLING TO THE TOP */
window.onscroll = () => {
  if (document.documentElement.scrollTop > 768) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
/** ENDS HERE*/

/** CODE FOR LOADING ANIMATION */
window.addEventListener("load", () => {
  document.documentElement.style.display = "block";
  document.querySelector(".loading").style.display = "none";
});
/** ENDS HERE */
