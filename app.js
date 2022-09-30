const btnMenu = document.querySelector(".btn-rond-menu")
const nav = document.querySelector(".nav-left")
const allItemNav = document.querySelectorAll(".nav-menu-item")
const ligne = document.querySelector(".cont-line")

btnMenu.addEventListener("click", () => {
 
    ligne.classList.toggle("active")
    nav.classList.toggle("menu-visible")

})

if (window.matchMedia('()max-width : 1300px')) {
    
    allItemNav.forEach(item => {
        item.addEventListener("click", () => {
            ligne.classList.toggle("active")
            nav.classList.toggle("menu-visible")
        })

    })
}