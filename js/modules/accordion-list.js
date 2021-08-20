export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }
  // const accordionList = document.querySelectorAll('.js-accordion dt');

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona os eventos ao accordion.
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => {
        this.toggleAccordion(item);
      });
    });
  }

  // Inicia a função
  init() {
    if (this.accordionList.length) {
      // Ativa o primeiro item do accordion
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
