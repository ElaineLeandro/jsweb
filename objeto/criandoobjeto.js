//Estratégias de Criação de Objetos 

//usando a notaçao literal - 1 Forma
const obj1 = {}
console.log(obj1)

// object em JS - 2 Forma
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Fuções construtoras - 3 Forma
function Produto (nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = ()=>{
      return preco * (1 - desc)  
    }
   
}
const p1 = new Produto('Lapis', 7.99, 0.15)
const p2 = new Produto('Cadeira', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//Fuções Factory - 4 Forma " é padrão de projeto que fabrica alguma coisa objeto"

function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criaFuncionario('Asli', 7980, 4)
const f1 = criaFuncionario('Benicío', 7980, 4)
console.log(f1.getSalario(),f2.getSalario())

//Object.create
const filho = Object.create(null)
filho.nome='Benicio'
console.log(filho)

//Um função que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)