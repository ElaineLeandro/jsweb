//Função em JS é First-Class Objeto (Cintizens)
//Higher-order function

//criar de forma literal
function fun1(){}

// Armazenar em uma varariável
const fun2 = function (){}

//Armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function (){`return 'opa`}
console.log(obj.falar)

//Passar função como paramentro
function run(fun){
    fun()
}
run(function (){console.log('Executando....')})

//um função pode retornar/ conter um função

function soma(a, b) {
    return function (c) {
      console.log(a+b+c)
    }
  }
  
  soma(2, 3)(4) //pode ser chamando assim
  const CincoMais = soma (2, 3)
  CincoMais(4)