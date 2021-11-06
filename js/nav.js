"use strict";

let btnMenu = document.getElementById ("btn-scroll-menu");
btnMenu.addEventListener ("click", function(){
    document.querySelector(".nav-hidden").classList.toggle('nav-scrolled');
} );
    