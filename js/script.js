// Toggle class active 
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu'). onclick = () =>{
    navbarNav.classList.toggle('active');
};

// klik diluar side bar
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


// Mobil Box

const itemDetailMobil = document.querySelector('#item-detail.mobil');
const itemDetailButtons = document.querySelector('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailMobil.style.display = 'flex';
        e.preventDefault();
    };
})


// klik tombol close

document.querySelector('.mobil .close-icon').onclick = (e) => {
    itemDetailMobil.style.display = 'none';
    e.preventDefault ();
};


// klik diluar box
window.onclick = (e) => {
    if (e.target === itemDetailMobil) {
        itemDetailMobil.style.display = 'none';
    }
};