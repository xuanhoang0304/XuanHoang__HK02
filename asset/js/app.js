const listpc = document.querySelector("#header__bottom");
const listmb = document.querySelector("#toggle-menu__bottom");
const header__textPC = document.querySelector(".header__text");
const header__textMB = document.querySelector("#toggle-menu__middle");
header__textMB.innerHTML = header__textPC.innerHTML;
listmb.innerHTML = listpc.innerHTML;

const Menu = document.querySelector(".mbHeader__menu")
const toggleMenu = document.querySelector(".toggle-menu");
const overlay = document.querySelector(".overlay");
Menu.addEventListener("click", function() {
    toggleMenu.classList.toggle("click");
    overlay.classList.toggle("click");
})

overlay.addEventListener("click", function() {
    overlay.classList.toggle("click")
    toggleMenu.classList.toggle("click")
})