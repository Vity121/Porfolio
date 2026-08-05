console.log("¡El archivo JS se ha enlazado correctamente!");

const tarjetas = document.querySelectorAll('.tarjeta');
console.log("Tarjetas encontradas en el HTML:", tarjetas.length);

tarjetas.forEach((tarjeta, indice) => {
  tarjeta.addEventListener('click', () => {
    console.log(`Hiciste clic en la tarjeta número: ${indice + 1}`);
    tarjeta.classList.toggle('is-active');
    console.log("Clases actuales de esta tarjeta:", tarjeta.className);
  });
});