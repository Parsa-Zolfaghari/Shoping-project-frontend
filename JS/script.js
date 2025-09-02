//global
const boxEl = document.querySelector('.product');
const btnOfBoxEl = document.querySelectorAll('.btn-product');
const itemsOfCartEl = document.querySelector('.items');
const priceOfCartEl = document.querySelectorAll('.price');
const priceIntOfCartEl = document.querySelectorAll('.price-Int');
//Add loop for Btn of Boxes
for (let index = 0; index < btnOfBoxEl.length; index++) {
    // Add Event for Btn 
    btnOfBoxEl[index].addEventListener('click', clickOfBoxHandler = event => {
        // Get Tag Of Parent of Btn
        const targetOfEvent = event.target.closest('.product');
        // Pour Tag of parent To new Value
        const targetOfEventEl = targetOfEvent;
        itemsOfCartEl.insertAdjacentElement('beforeend', targetOfEventEl);
    });
}
