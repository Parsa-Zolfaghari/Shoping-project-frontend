const boxEl = document.querySelector('.product');
const btnOfBoxEl = document.querySelector('.btn-product');

const clickOfBoxHandler = event => {
    
    event.preventDefault();
    const targetOfEvent = btnOfBoxEl.target;

    if(event.target.closest('.product')){
        console.log(event);
    }
}

btnOfBoxEl.addEventListener('click' , clickOfBoxHandler);
