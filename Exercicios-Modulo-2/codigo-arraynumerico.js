function menorNumero(array) {
    return array
        .map(Number)
        .reduce((numero1, numero2) => Math.min(numero1, numero2));
}

module.exports = { menorNumero };
