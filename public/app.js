var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//creating a responsive testimonials
myJsMedia = (widthsize) => {
  if (widthsize.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 1500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};
const widthsize = window.matchMedia("(max-width:780px)");

myJsMedia(widthsize);
widthsize.addEventListener("change", myJsMedia);

// Scroll to Top Button
const heroSection = document.querySelector(".section-hero");
const footerElm = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElm.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};
scrollElement.addEventListener("click", scrollTop);

const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNum = parseInt(curElem.innerText);
    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber)
    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}`;
      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();
});
//===============================
// Creating a Responsive Navbar
//===============================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElm = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElm.classList.toggle("active");
});
