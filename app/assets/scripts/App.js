import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu.js'
import RevealOnScroll from'./modules/RevealOnScroll.js'

let menu = new MobileMenu();
let scrollReveal = new RevealOnScroll();



if (module.hot) {
    module.hot.accept();
}