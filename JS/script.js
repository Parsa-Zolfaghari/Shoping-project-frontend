const boxEl = document.querySelector('.product');
const btnOfBoxEl = document.querySelectorAll('.btn-product'); 
const itemsOfCartEl = document.querySelector('.items');
const priceOfCartEl = document.querySelectorAll('.price');
const priceIntOfCartEl = document.querySelectorAll('.price-Int');

for (let index = 0; index < btnOfBoxEl.length; index++) {
    btnOfBoxEl[index].addEventListener('click', clickOfBoxHandler = event => {
        event.preventDefault();
        const targetOfEvent = event.target.closest('.product');
        
        const targetOfEventEl = targetOfEvent;
        itemsOfCartEl.insertAdjacentElement('beforeend',targetOfEventEl);
        
        for(let i = 0;i < btnOfBoxEl.length;i++){
            btnOfBoxEl[i].addEventListener('click' , totalPriceInt = event => {
                const priceIntOfCart = priceIntOfCartEl[i].target.innerHTML;
                console.log(priceIntOfCart);
            });
        };
    });
}
