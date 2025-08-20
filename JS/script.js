const boxEl = document.querySelector('.product');
const btnOfBoxEl = document.querySelectorAll('.btn-product'); 
for (let index = 0; index < btnOfBoxEl.length; index++) {
    btnOfBoxEl[index].addEventListener('click', clickOfBoxHandler = event => {
        event.preventDefault();
        const targetOfEvent = event.target.closest('.product');
        console.log(targetOfEvent);
    });
}