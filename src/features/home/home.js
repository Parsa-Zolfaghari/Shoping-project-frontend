const discountSwiper = new Swiper('.swiper', {

    slidesPerView: 1,

    spaceBetween: 20,

    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        prevEl: '.discount-slider__btn--prev',
        nextEl: '.discount-slider__btn--next',
    },

});
//Navbar
const headerSearchBar = document.querySelector(".header-nav_search");
const headerNavBtnBars = document.querySelector(".header-nav_btn_bars");
const headerBtnBars = document.querySelector(".header-btn_bars");

