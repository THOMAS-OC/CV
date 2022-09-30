const btnMenu = document.querySelector(".btn-rond-menu")
const nav = document.querySelector(".nav-left")
const allItemNav = document.querySelectorAll(".nav-menu-item")
const ligne = document.querySelector(".cont-line")

btnMenu.addEventListener("click", () => {
 
    ligne.classList.toggle("active")

})