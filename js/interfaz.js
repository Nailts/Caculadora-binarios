const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');
const pantallaDecimal = document.querySelector('.pantallaDecimal');
let segundoNumeroEnCurso = false;

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
      segundoNumeroEnCurso = false;
      pantalla.textContent = '0';
      pantallaDecimal.textContent = '0';
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
    }else if (valorBoton === '/') {
      primerNumero = numeroEnPantalla;
      operacion = '/';
      numeroEnPantalla = '';
    }else if (valorBoton == '^'){
      primerNumero = numeroEnPantalla;
      operacion = '^';
      numeroEnPantalla = '';
    }else if (valorBoton == '√'){
      primerNumero = numeroEnPantalla;
      operacion = '√';
      numeroEnPantalla = '';
    }else if (valorBoton === '=') {
      segundoNumero = numeroEnPantalla;
      if (operacion === '+' && primerNumero && segundoNumero) {
        const resultado = sumBinaryFractional(primerNumero, segundoNumero);
        const resultadoDecimal = binaryToDecimal(resultado);
        pantalla.textContent = resultado;
        pantallaDecimal.textContent = resultadoDecimal;
        numeroEnPantalla = resultado;
        primerNumero = resultado;
        segundoNumero = '';
        operacion = '';
      } else if (operacion === '-' && primerNumero && segundoNumero) {
        const resultado = resBinaryFractional(primerNumero, segundoNumero);
        const resultadoDecimal = binaryToDecimal(resultado);

        pantalla.textContent = resultado;
        pantallaDecimal.textContent = resultadoDecimal;
        numeroEnPantalla = resultado;
        primerNumero = resultado;
        segundoNumero = '';
        operacion = '';
      } else if (operacion === '*' && primerNumero && segundoNumero) {
        const resultado = mulBinaryFractional(primerNumero, segundoNumero);
        const resultadoDecimal = binaryToDecimal(resultado);

        pantalla.textContent = resultado;
        pantallaDecimal.textContent = resultadoDecimal;
        numeroEnPantalla = resultado;
        primerNumero = resultado;
        segundoNumero = '';
        operacion = '';
      }else if (operacion === '/' && primerNumero && segundoNumero) {
        const resultado = divBinaryFractional(primerNumero, segundoNumero);
        const resultadoDecimal = binaryToDecimal(resultado);

        pantalla.textContent = resultado;
        pantallaDecimal.textContent = resultadoDecimal;
        numeroEnPantalla = resultado;
        primerNumero = resultado;
        segundoNumero = '';
        operacion = '';
      }else if (operacion === '^' && primerNumero && segundoNumero) {
        const resultado = powBinaryFractional(primerNumero, segundoNumero);
        const resultadoDecimal = binaryToDecimal(resultado);

        pantalla.textContent = resultado;
        pantallaDecimal.textContent = resultadoDecimal;
        numeroEnPantalla = resultado;
        primerNumero = resultado;
        segundoNumero = '';
        operacion = '';
      }else if (operacion === '√' && primerNumero && segundoNumero) {
        const resultado = sqrtBinary(primerNumero, segundoNumero);
        const resultadoDecimal = binaryToDecimal(resultado);

        pantalla.textContent = resultado;
        pantallaDecimal.textContent = resultadoDecimal;
        numeroEnPantalla = resultado;
        primerNumero = resultado;
        segundoNumero = '';
        operacion = '';
    }
    } else {
      numeroEnPantalla += valorBoton;
    }

    if (segundoNumeroEnCurso) {
      const numeroDecimalSegundo = binaryToDecimal(numeroEnPantalla);
      pantallaDecimal.textContent = numeroDecimalSegundo;
    } else {
      const numeroDecimalPrimer = binaryToDecimal(numeroEnPantalla);
      pantallaDecimal.textContent = numeroDecimalPrimer;
    }

    const MAX_DIGITOS_PANTALLA = 15; 
    if (numeroEnPantalla.length > MAX_DIGITOS_PANTALLA) {
      numeroEnPantalla = numeroEnPantalla.slice(0, MAX_DIGITOS_PANTALLA);
    }

    pantalla.textContent = numeroEnPantalla;
  });
});