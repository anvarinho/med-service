const nav = document.getElementById('nav')
const navLogo = document.getElementsByClassName('nav-logo')
const navTitle = document.getElementsByClassName('nav-title')
const navLink = document.getElementsByClassName('nav-link')
const navIcon = document.getElementsByClassName('nav-icon')

window.onscroll = () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add('nav-scroll')
        navLogo[0].classList.add('nav-logo-scroll')
        navTitle[0].classList.add('nav-title-scroll')
        navIcon.classList.add('nav-icon-scroll')

        navLink.forEach(navlinks => {
            navlinks.classList.add('nav-link-scroll')
        })
    }else {
        nav.classList.remove('nav-scroll')
        navLogo[0].classList.remove('nav-logo-scroll')
        navTitle[0].classList.remove('nav-title-scroll')
        navIcon.classList.remove('nav-icon-scroll')

        navLink.forEach(navlinks => {
            navlinks.classList.remove('nav-link-scroll')
        })
    }
}
AOS.init({
    delay: 0,
    duration: 900,
    once: true
})