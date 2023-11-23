function binaryToDecimal(binary) {
    const parts = binary.split('.'); // Separar la parte entera de la fraccionaria
    let integerPart = parseInt(parts[0], 2); // Convertir la parte entera a decimal

    let fractionalPart = 0;
    if (parts.length === 2) {
        let fraction = parts[1];
        for (let i = 0; i < fraction.length; i++) {
            fractionalPart += parseInt(fraction[i], 2) / Math.pow(2, i + 1); // Convertir la parte fraccionaria a decimal
        }
    }

    return integerPart + fractionalPart; // Sumar parte entera y fraccionaria
}

function decimalToBinary(decimal) {
    const integerPart = Math.floor(decimal);
    let binaryInteger = (integerPart >>> 0).toString(2); // Convertir la parte entera a binario

    let fractionalPart = decimal - integerPart;
    let binaryFractional = '';
    if (fractionalPart !== 0) {
        binaryFractional = '.';
        while (fractionalPart !== 0) {
            fractionalPart *= 2;
            if (fractionalPart >= 1) {
                binaryFractional += '1';
                fractionalPart -= 1;
            } else {
                binaryFractional += '0';
            }
        }
    }

    return binaryFractional.length > 1 ? binaryInteger + binaryFractional : binaryInteger; // Retornar binario completo
}

function sumBinaryFractional(a, b) {
    const decimalResult = binaryToDecimal(a) + binaryToDecimal(b);
    return decimalToBinary(decimalResult);
}

function resBinaryFractional(a, b) {
    const decimalResult = binaryToDecimal(a) - binaryToDecimal(b);
    return decimalToBinary(decimalResult);
}

function mulBinaryFractional(a, b) {
    const decimalResult = binaryToDecimal(a) * binaryToDecimal(b);
    return decimalToBinary(decimalResult);
}