export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  // Como essa função sempre será ativada no bubble, então ela pode estar em 2 casos:
  // Ou você está clicando pela primeira vez, ou o elemento já foi clicado.

  // Se é a primeira vez que o usuário clica,
  // então ele não terá o atributo outside, nesse caso executará o if abaixo.
  // Se é a segunda vez que o usuário clica, então possuirá o atributo outside e o if será ignorado.

  // A função irá: adicionar os eventos passados pelo parâmetro dessa função ao HTML
  // e adicionará handleOutsideClick no callback desse evento.

  function handleOutsideClick(event) {
    const clickWasOnTheElement = element.contains(event.target);
    if (!clickWasOnTheElement) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }

  // Esse função checa se o click do mouse foi fora do elemento passado por parâmetro,
  // caso tenha sido ele removerá o atributo outside,
  // removerá o evento de click do HTML com os eventos que tinham
  // sido adicionados e acionará a função dada por parâmetro.
}
