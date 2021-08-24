(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}var i=function(){function e(n,i){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===i?{behavior:"smooth",block:"start"}:i,this.scrollToSection=this.scrollToSection.bind(this)}return n(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),o=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return n(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),s=function(){function e(n,i){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(i),this.activeClass="ativo"}return n(e,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)})),this.tabContent[t].classList.add(this.activeClass)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),r=function(){function e(n,i,o){t(this,e),this.btnOpen=document.querySelector(n),this.btnClose=document.querySelector(i),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOutModal=this.clickOutModal.bind(this)}return n(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"addModalEvents",value:function(){this.btnOpen.addEventListener("click",this.eventToggleModal),this.btnClose.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickOutModal)}},{key:"clickOutModal",value:function(t){t.target===this.containerModal&&this.toggleModal()}},{key:"init",value:function(){return this.btnOpen&&this.btnClose&&this.containerModal&&this.addModalEvents(),this}}]),e}(),a=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}return n(e,[{key:"onMouseMove",value:function(t){var e=t.pageX,n=t.pageY;this.tooltipBox.style.top="".concat(n+25,"px"),e+240>window.innerWidth?this.tooltipBox.style.left="".concat(e-190,"px"):this.tooltipBox.style.left="".concat(e+25,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e,this.tooltipBox}},{key:"onMouseOver",value:function(t){var e=t.currentTarget,n=t.pageX,i=t.pageY;this.criarTooltipBox(e),this.tooltipBox.style.top="".concat(i,"px"),this.tooltipBox.style.left="".concat(n,"px"),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function c(t,e,n){var i=document.documentElement,o="data-outside";function s(r){t.contains(r.target)||(t.removeAttribute(o),e.forEach((function(t){i.removeEventListener(t,s)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return i.addEventListener(t,s)}))})),t.setAttribute(o,""))}var u=function(){function e(n,i){t(this,e),this.dropdownMenus=document.querySelectorAll(n),this.events=void 0===i?["touchstart","click"]:i,this.activeClass="active",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}return n(e,[{key:"activeDropdownMenu",value:function(t){t.preventDefault();var e=t.currentTarget;e.classList.add(this.activeClass),c(e,this.events,(function(){e.classList.remove("active")}))}},{key:"addDropdownMenusEvent",value:function(){var t=this;this.dropdownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropdownMenu)}))}))}},{key:"init",value:function(){return this.addDropdownMenusEvent(this.dropdownMenus.length),this}}]),e}(),l=function(){function e(n,i,o){t(this,e),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(i),this.activeClass="active",this.events=void 0===o?["touchstart","click"]:o,this.openMenu=this.openMenu.bind(this)}return n(e,[{key:"openMenu",value:function(t){var e=this;t.preventDefault(),this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),c(this.menuList,this.events,(function(){e.menuList.classList.remove(e.activeClass),e.menuButton.classList.remove(e.activeClass)}))}},{key:"addMenuEvent",value:function(){var t=this;this.events.forEach((function(e){return t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuButton&&this.menuList&&this.addMenuEvent(),this}}]),e}(),h=function(){function e(n,i){t(this,e),this.funcionamento=document.querySelector(n),this.activeClass=i}return n(e,[{key:"dadosFuncionamento",value:function(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map((function(t){return+t})),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map((function(t){return+t}))}},{key:"dadosAgora",value:function(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}},{key:"isOpen",value:function(){return this.semanaAberto=-1!==this.diasSemana.indexOf(this.diaAgora),this.horarioAberto=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1],this.semanaAberto&&this.horarioAberto}},{key:"activeOpened",value:function(){this.isOpen()&&this.funcionamento.classList.add(this.activeClass)}},{key:"init",value:function(){this.funcionamento&&(this.dadosAgora(),this.dadosFuncionamento(),this.activeOpened())}}]),e}();function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function v(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){var n;return function(){for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,o),n=null}),e)}}var m=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.halfOfWindow=.6*window.innerHeight,this.checkDistance=f(this.checkDistance.bind(this),200)}return n(e,[{key:"getDistance",value:function(){var t=this;this.distance=v(this.sections).map((function(e){var n=e.offsetTop;return{element:e,offset:Math.floor(n-t.halfOfWindow)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){return window.removeEventListener("scroll",this.checkDistance),this}}]),e}(),y=function(){function e(n,i,o){t(this,e),this.numeros=document.querySelectorAll(n),this.observerClass=o,this.observerTarget=document.querySelector(i),this.handleMutation=this.handleMutation.bind(this)}return n(e,[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=Math.floor(e/100),i=0,o=setInterval((function(){i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),30*Math.random())}}]),e}();function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var E=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(r,e);var i,o,s=(i=r,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(i);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function r(e,n){var i;return t(this,r),(i=s.call(this,e,n)).bindControlEvents(),i}return n(r,[{key:"addArrow",value:function(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}},{key:"createControl",value:function(){var t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach((function(e,n){t.innerHTML+='<li><a href="#slide'.concat(n,'">').concat(n+1,"</a></li>")})),this.wrapper.appendChild(t),t}},{key:"eventControl",value:function(t,e){var n=this;t.addEventListener("click",(function(t){t.preventDefault(),n.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}},{key:"activeControlItem",value:function(){var t=this;this.controlArray.forEach((function(e){return e.classList.remove(t.activeClass)})),this.controlArray[this.index.active].classList.add(this.activeClass)}},{key:"addControl",value:function(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=v(this.control.children),this.activeControlItem(),this.controlArray.forEach(this.eventControl)}},{key:"bindControlEvents",value:function(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}]),r}(function(){function e(n,i){t(this,e),this.slide=document.querySelector(n),this.wrapper=document.querySelector(i),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}return n(e,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .3s":""}},{key:"moveSlide",value:function(t){this.dist.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0)")}},{key:"uptadePosition",value:function(t){return this.dist.movement=1.3*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"onMove",value:function(t){var e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,n=this.uptadePosition(e);this.moveSlide(n)}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=v(this.slide.children).map((function(e){return{position:t.slidePosition(e),element:e}}))}},{key:"slideIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}},{key:"changeSlide",value:function(t){var e=this.slideArray[t];this.moveSlide(e.position),this.slideIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"changeActiveClass",value:function(){var t=this;this.slideArray.forEach((function(e){return e.element.classList.remove(t.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){var t=this;setTimeout((function(){t.slidesConfig(),t.changeSlide(t.index.active)}),600)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onEnd=this.onEnd.bind(this),this.onMove=this.onMove.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize=f(this.onResize.bind(this),200)}},{key:"init",value:function(){return this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.changeSlide(0),this.addResizeEvent(),this}}]),e}());new y("[data-numero]",".numeros","ativo").init(),new i('[data-menu="js-menu"] a[href^="#"]').init(),new o(".js-accordion dt").init(),new s("[data-tabMenu=js-tabmenu] li",'[data-tabContent="js-tabcontent"] section').init(),new r('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new a("[data-tooltip]").init(),new m('[data-scroll="js-scroll"]').init(),new u("[data-dropdown]").init(),new l('[data-menu="button"]','[data-menu="list"]').init(),new h("[data-semana]","aberto").init(),fetch("https://www.blockchain.com/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((function(t){console.log(Error(t))}));var M=new E(".slide",".slide-wrapper");M.init(),M.addControl(".custom-controls")})();