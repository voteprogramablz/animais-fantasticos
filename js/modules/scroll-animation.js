export default function initScrollAnimation() {
  // Selecting all the elements which have the class 'js-scroll'
  const sections = document.querySelectorAll('[data-scroll="js-scroll"]');
  const halfOfWindow = window.innerHeight * 0.6;
  // If "sections const" catch any element the function will continue
  function showElementsOnScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - halfOfWindow) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  if (sections.length) {
    showElementsOnScroll();
    window.addEventListener('scroll', showElementsOnScroll);
  }
}
