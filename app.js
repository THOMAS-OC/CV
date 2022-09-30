// START Navbar Animation
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

// END Navbar animation

// START Animation accueil

const txtAnim = document.querySelector(".txt-animation")


let typeWriter = new Typewriter (txtAnim, {
    loop: false,
    deleteSpeed : 20
})

typeWriter
.pauseFor(1800)
.changeDelay(20)
.typeString('ESTIVAL Thomas, Développeur')
.pauseFor(300)
.typeString('<strong> Python</strong>')
.pauseFor(1000)
.deleteChars(7)
.typeString('<strong> JavaScript</strong>')
.start()

// END Animation accueil
