/** @format */

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 7000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}

$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
  $("#language").toggleClass("open");
});

document.querySelector(".clicked-image").addEventListener("click", () => {
  document.querySelector(".menu__list").classList.toggle("menu__list--animate");
});
