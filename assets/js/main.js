// MENU Y HIDDEN
const navMenu = document.getElementById('nav_menu'),
     toggleMenu = document.getElementById('nav_toggle'),
     closeMenu = document.getElementById('nav-close')

// MOSTRANDO MENU
toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})

// OCULTANDO MENU
closeMenu.addEventListener('click', ()=> {  
    navMenu.classList.remove('show')
})

// REMOVENDO MENU QUANDO OPÇÂO FOR SELECIONADA
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL MENU
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=]' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav_menu a[href*=]' + sectionId + ']').classList.remove('active')
        }
    })
}

var foto = document.getElementById("minhafoto");
var home = document.getElementById("fundo");

foto.onmouseover = function() {
    foto.classList.remove("foto_sem_mouse");
    foto.classList.add("foto_com_mouse");
}

foto.onmouseout = function() {
    foto.classList.remove("foto_com_mouse");
    foto.classList.add("foto_sem_mouse");    
}

home.onmouseover = function() {
    home.classList.remove("foto_sem_mouse");
    home.classList.add("foto_com_mouse");
}

home.onmouseout = function() {
    home.classList.remove("foto_com_mouse");
    home.classList.add("foto_sem_mouse");    
}

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--first-color-lighten"),
    text: getStyle(html, "--text"),
}

const darkMode = {
    bg: "#0d1117",
    text: "#E5E5E5",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})