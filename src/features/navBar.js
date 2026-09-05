const headerNavBtnBars = document.querySelector(".header-nav_btn_bars");
const headerBtnBars = document.querySelector(".header-btn_bars");

function headerMenuResposive() {
    if (headerBtnBars.style.display == "none") {
        headerBtnBars.style.display = "block";
    } else {
        headerBtnBars.style.display = "none";
    }
}