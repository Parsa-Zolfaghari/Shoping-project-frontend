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


const setDisplaySearch = headerSearchBar.style.display = "none";
const setDisplayBtnBars = headerBtnBars.style.display = "none";
function searchBtnClick () {
    if (headerSearchBar.style.display == "none") {
        headerSearchBar.style.display = "flex";
    } else{
        headerSearchBar.style.display = "none";
    }
}


function headerMenuResposive () {
    if (headerBtnBars.style.display == "none") {
        headerBtnBars.style.display = "block";
    } else {
        headerBtnBars.style.display = "none";
    }
}