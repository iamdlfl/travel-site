(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{43:function(e,s,n){"use strict";function o(e,s){for(var n=0;n<s.length;n++){var o=s[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(s);var i=function(){function e(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.events()}var s,n,i;return s=e,(n=[{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        <div class="modal">\n        <div class="modal__inner">\n          <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>\n          <div class="wrapper wrapper--narrow">\n            <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n          </div>\n    \n          <div class="social-icons">\n            <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n            <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n            <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n            <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n          </div>\n        </div>\n        <div class="modal__close">X</div>\n      </div>\n      '),this.modal=document.querySelector(".modal"),this.closeModalButton=document.querySelector(".modal__close")}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(e){e.preventDefault(),this.modal.classList.remove("modal--is-visible")}},{key:"closeModalWithKey",value:function(e){27==e.keyCode&&this.closeTheModal(e)}},{key:"events",value:function(){var e=this;this.closeModalButton.addEventListener("click",(function(s){return e.closeTheModal(s)})),document.addEventListener("keyup",(function(s){return e.closeModalWithKey(s)}))}}])&&o(s.prototype,n),i&&o(s,i),e}();s.default=i}}]);