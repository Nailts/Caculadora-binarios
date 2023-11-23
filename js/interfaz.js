const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

let numeroEnPantalla = '';
let primerNumero = '';
let segundoNumero = '';
let operacion = '';

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const valorBoton = boton.textContent.trim();

    if (valorBoton === 'C') {
      numeroEnPantalla = '';
      primerNumero = '';
      segundoNumero = '';
      operacion = '';
    } else if (valorBoton === '←') {
      numeroEnPantalla = numeroEnPantalla.slice(0, -1);
    } else if (valorBoton === '+') {
      primerNumero = numeroEnPantalla;
      operacion = '+';
      numeroEnPantalla = '';
    } else if (valorBoton === '-') {
      primerNumero = numeroEnPantalla;
      operacion = '-';
      numeroEnPantalla = '';
    } else if (valorBoton === '*') {
      primerNumero = numeroEnPantalla;
      operacion = '*';
      numeroEnPantalla = '';
    } else if (valorBoton === '=') {
      segundoNumero = numeroEnPantalla;
      if (operacion === '+' && primerNumero && segundoNumero) {
        const resultado = sumBinaryFractional(primerNumero, segundoNumero);
        numeroEnPantalla = resultado;
        primerNumero = resultado;
        segundoNumero = '';
        operacion = '';
      } else if (operacion === '-' && primerNumero && segundoNumero) {
        const resultado = resBinaryFractional(primerNumero, segundoNumero);
        numeroEnPantalla = resultado;
        primerNumero = resultado;
        segundoNumero = '';
        operacion = '';
      } else if (operacion === '*' && primerNumero && segundoNumero) {
        const resultado = mulBinaryFractional(primerNumero, segundoNumero);
        numeroEnPantalla = resultado;
        primerNumero = resultado;
        segundoNumero = '';
        operacion = '';
      }
    } else {
      numeroEnPantalla += valorBoton;
    }

    pantalla.textContent = numeroEnPantalla;
  });
});