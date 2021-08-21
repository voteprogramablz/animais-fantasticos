import AnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    function createAnimal(animal) {
      const div = document.createElement('div');
      div.classList.add('numero-animal');

      div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
      return div;
    }
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
    } catch (erro) {
      console.log(erro);
    }
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  fetchAnimais('./animaisapi.json');
}
