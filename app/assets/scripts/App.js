import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu.js'
import RevealOnScroll from'./modules/RevealOnScroll.js'
import StickyHeader from './modules/StickyHeader.js'
import ClientArea from './modules/ClientArea'


//React Goes Here
// import React from 'react'
// import ReactDom from 'react-dom'
// import MyAmazingComponent from './modules/MyAmazingComponent'

// ReactDom.render(<MyAmazingComponent />, document.querySelector("#my-react-example"));



new ClientArea();
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