export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfOfWindow = window.innerHeight * 0.6;

    this.showElementsOnScroll = this.showElementsOnScroll.bind(this);
  }

  showElementsOnScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.halfOfWindow) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.showElementsOnScroll();
    window.addEventListener('scroll', this.showElementsOnScroll);
    return this;
  }
}
