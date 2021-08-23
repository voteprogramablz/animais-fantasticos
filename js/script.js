import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';

import fetchAnimais from './modules/fetch-animais.js';
import DropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnimation from './modules/scroll-animation.js';

const scrollSuave = new ScrollSuave('[data-menu="js-menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

const tabNav = new TabNav('[data-tabMenu=js-tabmenu] li', '[data-tabContent="js-tabcontent"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const toolTip = new Tooltip('[data-tooltip]');
toolTip.init();

const scrollAnimation = new ScrollAnimation('[data-scroll="js-scroll"]');
scrollAnimation.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

initMenuMobile();
initFuncionamento();

fetchBitcoin('https://www.blockchain.com/ticker', '.btc-preco');
fetchAnimais('../../animaisapi.json', '.numeros-grid');
