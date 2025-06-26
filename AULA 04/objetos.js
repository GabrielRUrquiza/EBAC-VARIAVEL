let frutas = ['Maçã','Banana','Uva']
console.log(frutas.length)

let primeiraFruta = frutas [0]
console.log(primeiraFruta)

let ultimaFruta = frutas [frutas.length - 1]
console.log(ultimaFruta)

//frutas.forEach(function(fruta){
//    console.log(fruta)
//})

frutas.push('Pera')
//frutas.pop()

frutas.forEach((fruta) => {
    console.log(fruta)
})


var jasonJS = [
    {
        "nome": function(){
                return 'João'
        },
        "idade": "42"
    },
     {
        "nome": "Maria",
        "idade": 25
    }
]

console.log(jasonJS[0].nome())

    const jsonRest = {
            "nome": "Daniel",
            "idade": 25
    }

    console.log(jsonRest)

    console.log(JSON.stringify(jasonJS))

    const texto = '[{"idade":"42"},{"nome":"Maria","idade":25}]'
    console.log(JSON.parse(texto))