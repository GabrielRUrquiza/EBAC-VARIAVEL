const { menorNumero } = require('./codigo-arraynumerico');

describe('Função menorNumero', () => {

    test('deve retornar o menor número do array de strings', () => {
        const array = ["88", "999", "12", "123", "230"];
        expect(menorNumero(array)).toBe(12);
    });

    test('deve funcionar com números negativos', () => {
        const array = ["-10", "5", "20"];
        expect(menorNumero(array)).toBe(-10);
    });

    test('deve funcionar com apenas um elemento', () => {
        const array = ["42"];
        expect(menorNumero(array)).toBe(42);
    });

});
