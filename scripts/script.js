document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

// carousel img gallery

// Initialize all div with carousel class
var carousels = bulmaCarousel.attach("#img-gallery", {
  slidesToScroll: 1,
  slidesToShow: 5,
  autoplay: true,
  infinite: true,
  navigationKeys: true,
  navigationSwipe: true,
  pagination: false,
});

// Loop on each carousel initialized
for (var i = 0; i < carousels.length; i++) {
  // Add listener to  event
  carousels[i].on("before:show", (state) => {
    console.log(state);
  });
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector("#my-element");
if (element && element.bulmaCarousel) {
  // bulmaCarousel instance is available as element.bulmaCarousel
  element.bulmaCarousel.on("before-show", function (state) {
    console.log(state);
  });
}
