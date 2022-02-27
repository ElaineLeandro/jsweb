// coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto ['marca do produto']
console.log(produto)

const carro ={
    modelo: 'HondaFit',
    valor: 90000,
    proprietario: {
        nome: ' Raul',
        idade: 56,
        endereço:{
            logradouro: ' Rua Azul',
            numero: 36
        }
    },
    condutores:[{
        nome:'Elaine',
        idade: 36,
    },{
        nome:'Ruth',
        idade: 67
    }
    ],
    calcularValorSeguro: function(){

    }
}
carro.proprietario.endereço.numero = 1000
carro['proprietario'['endereço']['logradouro']= 'Rua Azu']
console.log(carro)