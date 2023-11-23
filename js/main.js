function agregarNumero(numero) {
    const pantalla = document.getElementById('pantalla');
    if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
        pantalla.textContent = numero;
    } else {
        pantalla.textContent += numero;
    }
}

function limpiarPantalla() {
    document.getElementById('pantalla').textContent = "0";
}

function realizarSuma() {
    const num1 = '10.1101'; // Ingresa el primer número binario
    const num2 = '110.01'; // Ingresa el segundo número binario
    const resultado = sumarBinariosConFraccion(num1, num2);
    document.getElementById('pantalla').textContent = resultado;
}