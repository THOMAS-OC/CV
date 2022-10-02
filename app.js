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

// Animation contact

const inputFields = document.querySelectorAll("input")

for (let i = 0; i < inputFields.length; i++) {
    let field = inputFields[i];
    field.addEventListener("input", (e) => {
        if (e.target.value !== "") {
            e.target.parentNode.classList.add("animation")
        }
        else if (e.target.value == "") {
            e.target.parentNode.classList.remove('animation')
        }
    })
}

// ANIM GSAP de l'accueil

const navbar = document.querySelector(".nav-left")
const titre = document.querySelector("h1")
const btn = document.querySelectorAll(".btn-acc")
const btnMedias = document.querySelectorAll(".media")
const btnRondAccueil = document.querySelector(".btn-rond")

const timeline = gsap.timeline({paused : true})
timeline
.to(navbar, {left: '0px', duration : 0.5, ease: Power3.easeOut})
.from(titre, {y: -50, opacity:0, duration:0.4, ease: Power3.easeOut})
.staggerFrom(btn, 1, {opacity:0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity:0}, 0.2, '-=0.75')
.from(btnRondAccueil, {y: -50, opacity:0, duration:0.4, ease: Power3.easeOut}, '-=1')


window.addEventListener("load", () => {
    timeline.play()
})

// Animation scrollMagic presentation

const presentationContainer = document.querySelector(".presentation")
const titrePresentation = document.querySelector(".titre-pres")
const softSkills = document.querySelector(".pres-droite")
const textPresentation = document.querySelector(".pres-gauche")
const timelinePresentation = new TimelineMax();

timelinePresentation
.from(titrePresentation, {y: -200, opacity:0, duration:0.6, ease: Power3.easeOut})
.from(textPresentation, {x: -200, opacity:0, duration:0.6, ease: Power3.easeOut})
.from(softSkills, {x: -200, opacity:0, duration:0.6, ease: Power3.easeOut})
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    reverse : false
})
.setTween(timelinePresentation)
.addIndicators()
.addTo(controller)

// Animation Portfolio

const portfolioContainer = document.querySelector(".portfolio")
const titrePortfolio = document.querySelector(".titre-port")
const itemPortfolio = document.querySelectorAll(".item")

const timelinePortfolio = new TimelineMax();
timelinePortfolio
.from(titrePortfolio, {y: -50, opacity:0, duration:0.5, ease: Power3.easeOut})
.staggerFrom(itemPortfolio, 1, {opacity:0}, 0.2, "-=0.5")

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    reverse : false
})
.setTween(timelinePortfolio)
.addTo(controller)

// Animation Skills

const skillsContainer = document.querySelector(".skills")
const titreSkills = document.querySelector(".titre-skills")
const namesSkills = document.querySelectorAll(".label-skill")
const pourcentSkills = document.querySelectorAll(".number-skill")
const itemSkills = document.querySelectorAll(".skill-cont")

const timelineSkills = new TimelineMax();
timelineSkills
.from(titreSkills, {y: -50, opacity:0, duration:0.5, ease: Power3.easeOut})
.staggerFrom(namesSkills, 0.5, {opacity:0}, 0.2, "-=0.5")
.staggerFrom(pourcentSkills, 0.5, {opacity:0}, 0.2, "-=0.5")
.staggerFrom(itemSkills, 0.5, {opacity:0}, 0.2, "-=0.5")

const scene3 = new ScrollMagic.Scene({
    triggerElement: skillsContainer,
    reverse : false
})
.setTween(timelineSkills)
.addTo(controller)