//12) Faça um algoritmo que calcule o fatorial de um número.


//Exemplo 1
var numeroFatorial = 5;
var resultado = numeroFatorial;
for (var numeroCalculoFatorial = 1; numeroCalculoFatorial < numeroFatorial; numeroCalculoFatorial++){
    
    resultado *= numeroCalculoFatorial;
}
    console.log(resultado);




//Exemplo 2
    var numeroFatorial = 5;
    var resultado = numeroFatorial;
    function fatorial (){
        for (var numeroCalculoFatorial = 1; numeroCalculoFatorial < numeroFatorial; numeroCalculoFatorial++){
    
            resultado *= numeroCalculoFatorial;
    }

}
    fatorial()
    console.log(resultado)


//Exemplo Professor

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

    console.log(fatorial(3))
    console.log(fatorial(5))
    console.log(fatorial(10))

