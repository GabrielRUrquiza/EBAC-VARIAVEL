const { calcularMDC } = require('./codigo-CalcularMDC');

let numero1 = 8;
let numero2 = 12;
let resultado = calcularMDC(numero1, numero2);
console.log(`MDC de ${numero1} e ${numero2}: ${resultado}`);
