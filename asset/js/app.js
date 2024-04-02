const listpc = document.querySelector("#header__bottom");
const listmb = document.querySelector("#toggle-menu__bottom");
const header__textPC = document.querySelector(".header__text");
const header__textMB = document.querySelector("#toggle-menu__middle");
header__textMB.innerHTML = header__textPC.innerHTML;
listmb.innerHTML = listpc.innerHTML;
