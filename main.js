// Home Section Starts
let menuBtn = document.querySelector(".main-navbar .menu-btn");
let menuList = document.querySelector(".main-navbar .nav-list");
let menuListItems = document.querySelectorAll(".nav-list li a");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menuList.classList.toggle("active");
});

for (var i = 0; i < menuListItems.length; i++) {
  menuListItems[i].addEventListener("click", menuItemClicked);
}

function menuItemClicked() {
  menuBtn.classList.remove("active");
  menuList.classList.remove("active");
}

let homeSection = document.querySelector(".home");

window.addEventListener("scroll", pageScrollFunction);
window.addEventListener("load", pageScrollFunction);

function pageScrollFunction() {
  if (window.scrollY > 120) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.remove("active");
  }
}

// Partner section start

$(".partners-slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// Partner section ends

// Testimonials Section Start
$('.testimonials-slider').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    
  },
})
// Testimonials Section Ends