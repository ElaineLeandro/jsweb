/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.

1- Quais dados de entrada?
Recebimento "entrada" de dois valores

2-O que devo fazer com esses dados?
Pegar o valor númerico
Reservar e evetuar a /


3-Quais as restrições desse problema?
A importação terá vim como números e não string "Texto"

4- Qual o resultado esperado?
A divisão e o resto

5- Qual é a sequência de passos a ser feita para chegar ao resultado esperado?
    1º Entrada de dois valores
    2ºGuardar o valor
    3º Calculo dos dois valores / 
    4º Imprimir o resultado e o resto

*/

function divisao(n1,n2){

    const resultDivisao = (n1/n2);
    const resto = n1%n2
  
      console.log(resultDivisao)
      console.log(resto)
    
  }
  
  divisao(10,2)








