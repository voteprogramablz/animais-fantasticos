export default class initModal {
  constructor(btnOpen, btnClose, containerModal) {
    this.btnOpen = document.querySelector(btnOpen);
    this.btnClose = document.querySelector(btnClose);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para
    // fazer referência ao objeto da classe.
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal.
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Adiciona os eventos aos elementos do modal.
  addModalEvents() {
    this.btnOpen.addEventListener('click', this.eventToggleModal);
    this.btnClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutModal);
  }

  // fecha o modal ao clicar do lado de fora
  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  init() {
    if (this.btnOpen && this.btnClose && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
