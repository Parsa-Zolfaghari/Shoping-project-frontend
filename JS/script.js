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


var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});