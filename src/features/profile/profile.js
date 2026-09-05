const getAsideBtns = document.querySelectorAll('.profile-menu-item');
const getLogOutBtn = document.querySelector('#logoutBtn');
const getLogOutModalEl = document.querySelector('#logoutModal');
const getCancelLogOutBtn = document.querySelector('#cancelLogout');
const getConfrimLogOutBtn = document.querySelector('#confirmLogout');
getAsideBtns.forEach(element => {
    element.addEventListener('click', () => {
        getAsideBtns.forEach(btn => btn.classList.remove('active'));

        element.classList.add('active');

        const target = element.dataset.target;

        const allSections = document.querySelectorAll('.profile-section');
        allSections.forEach(section => section.classList.remove('active'));

        if (target === 'overview') {
            document.getElementById('overview-section').classList.add('active');
        } else if (target === 'orders') {
            document.getElementById('orders-section').classList.add('active');
        }
    });
});

getLogOutBtn.addEventListener('click', function () {
    getLogOutModalEl.style.display = 'flex';

});
getCancelLogOutBtn.addEventListener('click', function () {
    getLogOutModalEl.style.display = 'none';
});