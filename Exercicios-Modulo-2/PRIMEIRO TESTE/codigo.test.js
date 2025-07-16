const { soma, dobro } = require('./codigo')

describe('funções matemáticas', () => {
      beforeAll(() => {
        console.log('antes de tudo')
      })

      beforeEach(() => {
        console.log('antes de cada teste')
      });

      afterEach(() => {
        console.log('depois de cada teste')
      });

        afterAll(() => {
          console.log('depois de tudo')
        })

    it('soma de dois valores', () => {
        expect(soma(5,5)).toBe(10)
        expect(soma(4,4)).toBe(8) 
        expect(soma(44,44)).toBe(88)           
    });
    it('dobro de um valor', () => {
        expect(dobro(5)).toBe(10)
    });
    
});