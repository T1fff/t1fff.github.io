const showMenu = () => {
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('nav-menu');

    if (toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu()

gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut})
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut})
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut})

gsap.from(".home_img", {opacity: 0, duration: 2, delay: 1.8, x:60})
gsap.from(".home_information", {opacity: 0, duration: 3, delay: 2.1, y:25})
gsap.from(".anime-text", {opacity: 0, duration: 3, delay: 2.1, y:25, ease:'expo.out',stagger:.3})
gsap.from(".nav_item", {opacity: 0, duration: 3, delay: 2.5, y:25, ease:'expo.out', stagger:.2})

