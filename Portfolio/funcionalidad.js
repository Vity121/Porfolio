console.log("¡El archivo JS se ha enlazado correctamente!");

const parejasConocimientos = [
  { tarjeta: document.querySelector('#conocimientos-html'), texto: document.querySelector('.texto-html') },
  { tarjeta: document.querySelector('#conocimientos-css'), texto: document.querySelector('.texto-css') },
  { tarjeta: document.querySelector('#conocimientos-js'), texto: document.querySelector('.texto-js') },
  { tarjeta: document.querySelector('#conocimientos-java'), texto: document.querySelector('.texto-java') },
  { tarjeta: document.querySelector('#conocimientos-python'), texto: document.querySelector('.texto-python') },
  { tarjeta: document.querySelector('#conocimientos-mysql'), texto: document.querySelector('.texto-mysql') }
];

const cerrarTodasLasCajas = () => {
  parejasConocimientos.forEach(({ tarjeta, texto }) => {
    if (texto && !texto.classList.contains('oculto')) {
      texto.classList.add('oculto');
    }
    if (tarjeta && tarjeta.classList.contains('fondo-hover')) {
      tarjeta.classList.remove('fondo-hover');
    }
  });
};

parejasConocimientos.forEach(({ tarjeta, texto }) => {
  if (tarjeta && texto) {
    
    const toggleModal = (e) => {
      e.stopPropagation(); 
      const estaOculto = texto.classList.contains('oculto');
      if (estaOculto) {
        texto.classList.remove('oculto');
        tarjeta.classList.add('fondo-hover');
      } else {
        texto.classList.add('oculto');
        tarjeta.classList.remove('fondo-hover');
      }
    };

    tarjeta.addEventListener('click', toggleModal);
    texto.addEventListener('click', toggleModal);
  }
});

window.addEventListener('scroll', () => {
  cerrarTodasLasCajas();
});


const titulo_platzi = document.querySelector('#tituloPlatzi');
const titulo_udemy = document.querySelector('#tituloUdemy');
const titulo_ibm = document.querySelector('#tituloIBM');

const seccion_platzi = document.querySelector('.contenedor-tarjetas-platzi');
const seccion_udemy = document.querySelector('.contenedor-tarjetas-udemy');
const seccion_ibm = document.querySelector('.contenedor-tarjetas-ibm');

titulo_platzi.addEventListener('click', () => {
  seccion_platzi.classList.toggle('oculto');
});

titulo_udemy.addEventListener('click', () => {
  seccion_udemy.classList.toggle('oculto');
});

titulo_ibm.addEventListener('click', () => {
  seccion_ibm.classList.toggle('oculto');
});