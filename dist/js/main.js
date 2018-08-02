// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const meneBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classlist.add('close');
        menu.classlist.add('show');
        menu.Nav.classlist.add('show');
        menuBranding.classlist.add('show');
        navItems.forEach(item => item.classlist.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classlist.remove('close');
        menu.classlist.remove('show');
        menu.Nav.classlist.remove('show');
        menuBranding.classlist.remove('show');
        navItems.forEach(item => item.classlist.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}