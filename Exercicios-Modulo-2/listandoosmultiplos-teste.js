const { somar } = require('./codigo-listandoosmultiplos');

describe('Função somar', () => {

    test('deve somar múltiplos de 5 e 7 até 10', () => {
        // múltiplos de 5: 0, 5, 10 → 15
        // múltiplos de 7: 0, 7 → 7
        // total = 22
        expect(somar(10)).toBe(22);
    });

    test('deve retornar 0 quando o limite for 0', () => {
        expect(somar(0)).toBe(0);
    });

    test('deve somar corretamente até 7', () => {
        // múltiplos de 5: 0, 5 → 5
        // múltiplos de 7: 0, 7 → 7
        // total = 12
        expect(somar(7)).toBe(12);
    });

});
