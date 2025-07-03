function ola(param){
    return `Olá ${param}`
}
console.log(ola('mundo'))

(function (param){
    console.log(param)

})('ola auto')

var ola = function ola(param){
        return `ola ${param}`
}

console.log(ola('ola mundo 2'))

const dobro = (valor) => {
    return valor * 2
}

console .log (dobro(4))

const dobro2 = valor => valor * 2
console.log(dobro2(4))

let hello = () => console.log('hello')
hello()

let hello2 = _ => console.log('hello')
hello2()

const adiciona = (a, b, c) => a + b + c
console.log(adiciona(1,2,3))

const multiplica = (a = 2, b = 3, c = 1) => a * b * c
console.log(multiplica(2,2,2))
console.log(multiplica(2,3))