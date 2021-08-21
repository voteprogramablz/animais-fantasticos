export default class Tooltip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  // Move  a tooltip de acordo com a posição do mouse
  onMouseMove({ pageX, pageY }) {
    this.tooltipBox.style.top = `${pageY + 25}px`;
    if (pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${pageX + 25}px`;
    }
  }

  // Remove os Listeners e a tooltipBox quando o mouse sai do target.
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Adiciona os eventos ao target.
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  // Cria a tooltipBox
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
    return this.tooltipBox;
  }

  // Atualiza a posição da tooltipBox toda vez que o mouse
  // se mover dentro do target.
  onMouseOver({ currentTarget, pageX, pageY }) {
    // Cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    this.tooltipBox.style.top = `${pageY}px`;
    this.tooltipBox.style.left = `${pageX}px`;

    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Inicia todo o processo.
  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
