$(document).ready(function () {
  $(".slideshow").slick({
    accessibility: true,
    adaptiveHeight: true,
    autoplay: true
  });
});

//Animations
let buildBtn = document.getElementById("build-btn");

buildBtn.addEventListener("click", function () {
  buildBtn.classList.add("animate__tada");
});

buildBtn.addEventListener("animationend", () => {
  buildBtn.classList.remove("animate__tada");
  console.log(buildBtn.classList);
});

// $('#build-btn').click(function (e) {
//   let buildBtn = $(this)
//   buildBtn.addClass('animate__rollOut');

// });
