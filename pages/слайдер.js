let images = [{
  url: "../images/слайд1.svg",
}, {
  url: "../images/слайд2.svg",
}, {
  url: "../images/слайд3.svg",
},];

function initSlider(options) {
if (!images || !images.length) return;

options = options || {
  titles: false,
  dots: true,
  autoplay: false
};

let sliderImages = document.querySelector(".slider__images");
let sliderArrows = document.querySelector(".slider__arrows");
let sliderDots = document.querySelector(".slider__dots");
let sliderNav = document.querySelector (".block3__navigation__nav")

initImages();
initArrows();

if (options.dots) {
  initDots();
  initNav();
}
if (options.autoplay) {
  initAutoplay();
}

function initImages() {
  images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
    sliderImages.innerHTML += imageDiv;
  });
}

function initArrows() {
  sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
}

function initDots() {
  images.forEach((image, index) => {
    let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
}

function initNav() {
  images.forEach((image, index) => {
    const imageNames = ['ROSTOV-ON-DON ADMIRAL', 'SOCHI THIEVES', 'ROSTOV-ON-DON PATRIOTIC']
    let dot = `<li class="block3__navigation__nav-item n${imageNames[index]} ${index === 0? "active" : ""}" data-index="${index}">${imageNames[index]}</li>`;
    sliderNav.innerHTML += dot;
  });
  sliderNav.querySelectorAll(".block3__navigation__nav-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
}
 
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderNav.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
      sliderNav.querySelector(".n" + num).classList.add("active");
    }
    if (options.titles) changeTitle(num);
  }

function initAutoplay() {
  setInterval(() => {
    let curNumber = +sliderImages.querySelector(".active").dataset.index;
    let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
    moveSlider(nextNumber);
  }, options.autoplayInterval);
}
}

let sliderOptions = {
dots: true,
titles: true,
autoplay: true,
autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function() {
initSlider(sliderOptions);
});
