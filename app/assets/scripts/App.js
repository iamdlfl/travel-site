import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu.js'
import Modal from './modules/Modal';
import RevealOnScroll from'./modules/RevealOnScroll.js'
import StickyHeader from './modules/StickyHeader.js'


new StickyHeader();
// Reveal - section to reveal, percent 'showing' at which to reveal it
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial',), 60);
new MobileMenu();

let modal 

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log("There was a problem."));
        } else {
            modal.openTheModal();
        }
    })
})

if (module.hot) {
    module.hot.accept();
}