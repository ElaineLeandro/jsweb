function teste1(num){
    if(num > 7)
    console.log(num)
    console.log('final')
}
teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ // cuidado com o ; , não usar as estruturas de controle
        console.log(num)
    }
}
teste2(6)
teste2(8)

const imprimirResultado = function(nota){
  
    if(nota >= 7){
      console.log('Aprovado!')
    }else{
      console.log('Reprovado!')
    }
  } 
  
  imprimirResultado(10)
  imprimirResultado(4)
  imprimirResultado('Epa!!') //cuidado!!!