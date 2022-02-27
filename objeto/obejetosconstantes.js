//pessoa ->  123 -> {aponta por um endereço de memoria ...}
const pessoa = {nome: 'Benicio'}
pessoa.nome =' Benjamin'
console.log(pessoa)

//pessoa <- 456 -> {novo objt}
//pessoa ={nome: 'Asli'}

Object.freeze(pessoa)

pessoa.nome = 'Eduardo'
pessoa.end ='Rua verde'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome:'Benjamin'})
console.log(pessoaConstante)
