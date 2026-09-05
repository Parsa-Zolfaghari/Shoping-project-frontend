const headerSearchBar = document.querySelector(".header-nav_search");

const setDisplaySearch = headerSearchBar.style.display = "none";
const setDisplayBtnBars = headerBtnBars.style.display = "none";
function searchBtnClick() {
    if (headerSearchBar.style.display == "none") {
        headerSearchBar.style.display = "flex";
    } else {
        headerSearchBar.style.display = "none";
    }
}