//Fundamentos de JavaScript - Básicos de Funcões =>  Uma Funçãp é uma ação ela executa um processo baseado na sentença de código esqueleto bloco no qual  tem todas as sentenças de código que serão execultadas quando você invocar aquela função ou função nada mais é do que um trecho de código que você deu um nome!

//Função sem retorno
function imprirSoma(a, b){
  console.log(a + b)
}

imprirSoma(2, 3);
imprirSoma(2,);
imprirSoma(2, 8, 4, 5, 6, 7,8);
imprirSoma();

//Função com retorno
function soma(a, b = 1){
  return a + b
}

console.log(soma(2, 3))
console.log((2))
