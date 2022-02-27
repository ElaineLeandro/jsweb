/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos 

1- Quais dados de entrada?
Valores Capital inicial, taca de juros, tempo ap.

2-O que devo fazer com esses dados?
Calculo de retorna juros simples e compostos

3-Quais as restrições desse problema?

4- Qual o resultado esperado?
 Recer um valor com uma taxa simples e composto

5- Qual é a sequência de passos a ser feita para chegar ao resultado esperado?


*/

function simples(capital, taxa, tempo){
  return (capital * taxa * tempo )
}
function composto (capital1, taxa, tempo) {
return (capital1*((1-taxa)**tempo))
}
console.log(simples(100, 0.1, 6))
console.log(composto(100, 0.1, 6))

//Professor
function jurosSimples (capitalInicial, taxa, tempo) {
  return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
  return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));