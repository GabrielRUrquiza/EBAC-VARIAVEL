var array = ["88", "999", "12", "123", "230"];  
var menor_numero = array.map(Number).reduce(function(numero1, numero2) {  
  return Math.min(numero1, numero2);  
});  
        
console.log(menor_numero ); 