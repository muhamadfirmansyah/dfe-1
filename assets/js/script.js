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



// Paralax Effect on Hero Banner

const parallaxElements = document.querySelectorAll('[data-parallax]')

window.addEventListener('mouseover', event => {
    for (let i = 0, len = parallaxElements.length; i < len; i++) {

        const speed = Number(parallaxElements[i].dataset.parallaxSpeed);

        const movementX = (event.clientX / window.innerWidth) * speed;
        
        const movementY = (event.clientY / window.innerHeight) * speed;


        parallaxElements[i].animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, { duration: 500, fill: 'forwards', delay: 0 })

    }
});