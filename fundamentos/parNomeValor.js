// par nome/valor => A ideia do Par nome e valor chave o valor indentificador e o seu valor

const saudacao = 'Opa' // contexto léxico

function exe(){
  const saudacao = 'Falaa' // contexto léxico
  return saudacao
}

//Objetos são grupos aninhados de pares noe/valor
const cliente ={
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  edereco:{
    logradouro:'Rua Do Riso',
    numero:1234
  }
}

console.log(saudacao);
console.log(exe());
console.log(cliente);