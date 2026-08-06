console.log("¡El archivo JS se ha enlazado correctamente!");

const tarjetas = document.querySelectorAll('.tarjeta-conocimientos');
console.log("Tarjetas encontradas en el HTML:", tarjetas.length);

const texto_html = document.querySelector('.texto-html');
const texto_css = document.querySelector('.texto-css');
const texto_js = document.querySelector('.texto-js');
const texto_java = document.querySelector('.texto-java');
const texto_python = document.querySelector('.texto-python');
const texto_mysql = document.querySelector('.texto-mysql');

const titulo_platzi = document.querySelector('#tituloPlatzi')
const titulo_udemy = document.querySelector('#tituloUdemy')
const titulo_ibm = document.querySelector('#tituloIBM')

const seccion_platzi = document.querySelector('.contenedor-tarjetas-platzi')
const seccion_udemy = document.querySelector('.contenedor-tarjetas-udemy')
const seccion_ibm = document.querySelector('.contenedor-tarjetas-ibm')

tarjetas.forEach((tarjeta, indice) => {
  tarjeta.addEventListener('click', () => {
    console.log(`Hiciste clic en la tarjeta con indice: ${indice}`);
    console.log("Clases actuales de esta tarjeta:", tarjeta.className);
    if (indice == 0){
      texto_html.classList.toggle('oculto');
    }
    else if (indice == 1) {
      texto_css.classList.toggle('oculto');
    }
    else if (indice == 2) {
      texto_js.classList.toggle('oculto');
    }
    else if (indice == 3) {
      texto_java.classList.toggle('oculto');
    }
    else if (indice == 4) {
      texto_python.classList.toggle('oculto');
    }
    else if(indice == 5) {
      texto_mysql.classList.toggle('oculto');
    }
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