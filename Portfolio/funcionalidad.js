console.log("¡El archivo JS se ha enlazado correctamente!");

const tarjetas = document.querySelectorAll('.tarjeta');
console.log("Tarjetas encontradas en el HTML:", tarjetas.length);

const titulo_platzi = document.querySelector('#tituloPlatzi')
const titulo_udemy = document.querySelector('#tituloUdemy')
const titulo_ibm = document.querySelector('#tituloIBM')


const seccion_platzi = document.querySelector('.contenedor-tarjetas-platzi')
const seccion_udemy = document.querySelector('.contenedor-tarjetas-udemy')
const seccion_ibm = document.querySelector('.contenedor-tarjetas-ibm')

tarjetas.forEach((tarjeta, indice) => {
  tarjeta.addEventListener('click', () => {
    console.log(`Hiciste clic en la tarjeta número: ${indice + 1}`);
    console.log("Clases actuales de esta tarjeta:", tarjeta.className);
  });
});

titulo_platzi.addEventListener('click', () => {
  seccion_platzi.classList.toggle('oculto');
});

titulo_udemy.addEventListener('click', () => {
  seccion_udemy.classList.toggle('oculto');
});

titulo_ibm.addEventListener('click', () => {
  seccion_ibm.classList.toggle('oculto');
});