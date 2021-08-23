export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map((i) => +i);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map((i) => +i);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  isOpen() {
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto = this.horarioAgora >= this.horarioSemana[0]
      && this.horarioAgora < this.horarioSemana[1];

    return this.semanaAberto && this.horarioAberto;
  }

  activeOpened() {
    if (this.isOpen()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosAgora();
      this.dadosFuncionamento();
      this.activeOpened();
    }
  }
}
