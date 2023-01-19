'use strict';

// add events on multiple elements

const addEventOnElement = function (elements, eventType, callback) {
    for (let index = 0; index < elements.length; index++) {
        elements[index].addEventListener(eventType, callback);
    }
}



// Navbar Toggle for Mobile

const navbar = document.querySelector('[data-navbar]')
const navbarToggleBtn = document.querySelector('[data-nav-toggle-btn]')
const overlay = document.querySelector('[data-overlay]')

const toggleNavbar = () => {
    navbar.classList.toggle('active')
    navbarToggleBtn.classList.toggle('active')
    overlay.classList.toggle('active')
    document.body.classList.toggle('nav-active')
}


addEventOnElement([navbarToggleBtn, overlay], 'click', toggleNavbar)