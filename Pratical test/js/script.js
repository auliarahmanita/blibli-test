// JavaScript for slider
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'false',
    hide: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },



  });

  
// JavaScript for scroll to top button
const scrollToTopButton = document.getElementById("scrollToTopButton");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "block";
    }
};

scrollToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});


// JavaScript for collapsing footer 
const toggleButton = document.getElementById("toggleButton");
const footerContent = document.getElementById("footerContent");

toggleButton.addEventListener("click", function () {
    if (footerContent.style.display === "block") {
        footerContent.style.display = "none";
        toggleButton.textContent = "Collapse All";
    } else {
        footerContent.style.display = "block";
        toggleButton.textContent = "Collapse All";
    }
});


