const menuToggle = document.querySelector('.menu-toggle');
const navItems = document.querySelector('.nav-items');

menuToggle.addEventListener('click', function(){
navItems.classList.toggle('active'); 
menuToggle.classList.toggle('open');
});