/** 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

1- Quais dados de entrada?
 Valor de entrada 0.30000000000000004


2-O que devo fazer com esses dados?
Transforma de Ponto para virgula

3-Quais as restrições desse problema?
Não pode ser uma string

4- Qual o resultado esperado?
 Retorne 0.30

5- Qual é a sequência de passos a ser feita para chegar ao resultado esperado?
    1º Entrada de valor 
    2º Guarda valor
    3º soma entre dois valores

 */

const number = 0.3000000004.toFixed(2)

console.log(number.toString().replace(".", ","));
    
    
function formatarValorDecimal(valorDecimal) {
 valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
        console.log(valorEmReais)
}
     formatarValorDecimal(0.1 + 0.2)

