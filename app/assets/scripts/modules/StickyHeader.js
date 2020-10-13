import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".header");
        this.pageSections = document.querySelectorAll('.page-section');
        this.windowHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }

    checkHeight() {
        this.determineScrollDirection()

        if (window.scrollY > 200) {
            this.siteHeader.classList.add("header--darkened");
        } else {
            this. siteHeader.classList.remove("header--darkened");
        }

        this.pageSections.forEach(el => this.calcSection(el))
    }

    determineScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
            this.scrollDirection = 'down';
        } else {
            this.scrollDirection = 'up';
        }
        this.previousScrollY = window.scrollY;
    }
    
    calcSection(el) {
        if (window.scrollY + this.windowHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
            let scrollPercent = el.getBoundingClientRect().y / this.windowHeight * 100;
            if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent<33 && this.scrollDirection == 'up') {
                let matchingLink = el.getAttribute("data-matching-link");
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"));
                document.querySelector(matchingLink).classList.add("is-current-link")
            } else {

            }
        }
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.checkHeight(), 200));
        window.addEventListener("resize", debounce(() => {
            this.windowHeight = window.innerHeight;
        }, 333));
    }

}

export default StickyHeader;