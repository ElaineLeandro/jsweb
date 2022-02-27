const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // for In ele vai lhe trazer indice I

for (i in notas ){
    console.log(i, notas[i])
}

for (i in notas ){
    console.log(i, notas[i])
}

const  pessoa = {
  nome:'Asli',
  sobrenome: 'Leandro',
  idade:1,
  peso: 10
}

for (let atributo in pessoa){
  console.log(`${atributo} = ${pessoa[atributo]}`)
}
