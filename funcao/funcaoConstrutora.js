function Carro(velociadadeMaxima = 200, data = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velociadadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velociadadeMaxima
        }
    }

    //metodo publoco
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const ka = new Carro
ka.acelerar()
console.log(ka.getVelocidadeAtual())