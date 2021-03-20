/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={341:function(t,o,e){var n,i;void 0===(i="function"==typeof(n=function(){var t=!1;function o(t){this.opts=function(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}({},{onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]},t),this.init()}function e(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function n(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach((function(t){"string"==typeof t&&this.modal.classList.add(t)}),this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.type="button",this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML='<svg height="32px" class="modal-close-button" version="1.0" viewBox="0 0 512 512" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="445.2,109.2 402.8,66.8 256,213.6 109.2,66.8 66.8,109.2 213.6,256 66.8,402.8 109.2,445.2 256,298.4 402.8,445.2   445.2,402.8 298.4,256 "/></svg>',this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function i(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}function s(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:a.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:l.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}function l(t){-1!==this.opts.closeMethods.indexOf("escape")&&27===t.which&&this.isOpen()&&this.close()}function a(t){var o=this.modal.offsetWidth-this.modal.clientWidth,e=t.clientX>=this.modal.offsetWidth-15,n=this.modal.scrollHeight!==this.modal.offsetHeight;"MacIntel"===navigator.platform&&0===o&&e&&n||-1!==this.opts.closeMethods.indexOf("overlay")&&!function(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}function r(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}return o.prototype.init=function(){if(!this.modal)return n.call(this),s.call(this),document.body.appendChild(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter(),this},o.prototype._busy=function(o){t=o},o.prototype._isBusy=function(){return t},o.prototype.destroy=function(){null!==this.modal&&(this.isOpen()&&this.close(!0),r.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},o.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},o.prototype.open=function(){if(!this._isBusy()){this._busy(!0);var t=this;return"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t._busy(!1),this.checkOverflow(),this}},o.prototype.close=function(t){if(!this._isBusy()){if(this._busy(!0),t=t||!1,"function"==typeof this.opts.beforeClose&&!this.opts.beforeClose.call(this))return void this._busy(!1);document.body.classList.remove("tingle-enabled"),document.body.style.top=null,window.scrollTo({top:this._scrollPosition,behavior:"instant"}),this.modal.classList.remove("tingle-modal--visible");var o=this;o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1)}},o.prototype.setContent=function(t){return"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t)),this.isOpen()&&this.checkOverflow(),this},o.prototype.getContent=function(){return this.modalBoxContent},o.prototype.addFooter=function(){return i.call(this),this},o.prototype.setFooterContent=function(t){return this.modalBoxFooter.innerHTML=t,this},o.prototype.getFooterContent=function(){return this.modalBoxFooter},o.prototype.setStickyFooter=function(t){return this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),e.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),this},o.prototype.addFooterBtn=function(t,o,e){var n=document.createElement("button");return n.innerHTML=t,n.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach((function(t){n.classList.add(t)})),this.modalBoxFooter.appendChild(n),n},o.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},o.prototype.isOverflow=function(){var t=window.innerHeight;return this.modalBox.clientHeight>=t},o.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(e.call(this),this.setStickyFooter(!0)))},{modal:o}})?n.call(o,e,o,t):n)||(t.exports=i)},251:t=>{"use strict";var o=function(){var t={tolerance:0,duration:800,easing:"easeOutQuart",container:window,callback:function(){}};function o(t,o,e,n){return t/=n,-e*(--t*t*t*t-1)+o}function e(t,o){var e={};return Object.keys(t).forEach((function(o){e[o]=t[o]})),Object.keys(o).forEach((function(t){e[t]=o[t]})),e}function n(t){return t instanceof HTMLElement?t.scrollTop:t.pageYOffset}function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=e(t,n),this.easeFunctions=e({easeOutQuart:o},i)}return i.prototype.registerTrigger=function(t,o){var n=this;if(t){var i=t.getAttribute("href")||t.getAttribute("data-target"),s=i&&"#"!==i?document.getElementById(i.substring(1)):document.body,l=e(this.options,function(t,o){var e={};return Object.keys(o).forEach((function(o){var n=t.getAttribute("data-mt-".concat(o.replace(/([A-Z])/g,(function(t){return"-"+t.toLowerCase()}))));n&&(e[o]=isNaN(n)?n:parseInt(n,10))})),e}(t,this.options));"function"==typeof o&&(l.callback=o);var a=function(t){t.preventDefault(),n.move(s,l)};return t.addEventListener("click",a,!1),function(){return t.removeEventListener("click",a,!1)}}},i.prototype.move=function(t){var o=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===t||t){i=e(this.options,i);var s,l="number"==typeof t?t:t.getBoundingClientRect().top,a=n(i.container),r=null;l-=i.tolerance;var d=function e(d){var c=n(o.options.container);r||(r=d-1);var h=d-r;if(s&&(l>0&&s>c||l<0&&s<c))return i.callback(t);s=c;var u=o.easeFunctions[i.easing](h,a,l,i.duration);i.container.scroll(0,u),h<i.duration?window.requestAnimationFrame(e):(i.container.scroll(0,l+a),i.callback(t))};window.requestAnimationFrame(d)}},i.prototype.addEaseFunction=function(t,o){this.easeFunctions[t]=o},i}();t.exports=o}},o={};function e(n){var i=o[n];if(void 0!==i)return i.exports;var s=o[n]={exports:{}};return t[n].call(s.exports,s,s.exports,e),s.exports}e.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},e.d=(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},e.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),(()=>{"use strict";var t=e(251),o=e.n(t);function n(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const i=function(){function t(e){!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,t),this.link=e,this.targetSection=document.querySelector("#".concat(e.dataset.scrollLocation)),this.moveTo=new(o())({duration:1e3}),this.events()}var e,i;return e=t,(i=[{key:"events",value:function(){var t=this;this.link.addEventListener("click",(function(){t.scrollToSection()}))}},{key:"scrollToSection",value:function(){this.moveTo.move(this.targetSection)}}])&&n(e.prototype,i),t}();var s=e(341),l=e.n(s);function a(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const r=function(){function t(o){!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,t),this.link=o,this.title=o.dataset.modalTitle,this.videoPath=o.dataset.modalPath,this.id=o.dataset.modalId,this.modal=this.createModal(),this.setModalContent(),this.events()}var o,e;return o=t,(e=[{key:"events",value:function(){var t=this;this.link.addEventListener("click",(function(){t.modal.open()}))}},{key:"createModal",value:function(){var t=this;return new(l().modal)({footer:!1,stickyFooter:!1,closeMethods:["overlay","button","escape"],closeLabel:"Close",onOpen:function(){},onClose:function(){var o=document.querySelector("#".concat(t.id));o.pause(o)},beforeClose:function(){return!0}})}},{key:"setModalContent",value:function(){this.modal.setContent("\n    <h4>".concat(this.title,'</h4>\n    <video class="modal__video" id="').concat(this.id,'" controls>\n      <source src="').concat(this.videoPath,'" type="video/mp4">\n      Your browser does not support this video.\n    </video>\n    '))}},{key:"openModal",value:function(){this.modal.open()}}])&&a(o.prototype,e),t}();document.querySelectorAll(".scroll-link").forEach((function(t){return new i(t)})),document.querySelectorAll(".modal-link").forEach((function(t){return new r(t)}))})()})();