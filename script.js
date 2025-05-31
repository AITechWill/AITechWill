document.getElementById("mobile-menu").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("showing");
});

window.onscroll = function () {
  document.getElementById("topBtn").style.display = window.scrollY > 100 ? "block" : "none";
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}