const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.querySelector(".progress-bar").style.animation = "none";
    if (i === index) {
      slide.classList.add("active");
      // restart the progress animation
      void slide.offsetWidth; // trick to restart CSS animation
      slide.querySelector(".progress-bar").style.animation = "progress 5s linear forwards";
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initial show
showSlide(currentSlide);
setInterval(nextSlide, slideInterval);
