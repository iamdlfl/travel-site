import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor(docSelector, threshPerc) {
        this.thresholdPercent = threshPerc
        this.itemsToReveal = docSelector;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
        this.windowHeight = window.innerHeight;
    }
    
    calculateIfScrolledTo(el) {
        if (window.scrollY + this.windowHeight > el.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().y / this.windowHeight) * 100;
            if (scrollPercent < this.thresholdPercent) {
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;
                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
    
            }
        }
    }

    calcCaller() {
        this.itemsToReveal.forEach(el => {
            if (!el.isRevealed) {
                this.calculateIfScrolledTo(el);
            }
        })
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            this.windowHeight = window.innerHeight;
        }, 333));
    }


    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length -1].isLastItem = true;
    }
}

export default RevealOnScroll;