//Notação Ponto;
console.log(Math.ceil(6.6))

const obj1 ={}
obj1.nome='Bola';
//obj1['nome'] = 'Bola2'
console.log(obj1.nome);

function Obj(nome){
  this.nome = nome;
  this.exec = function(){
    console.log('Exec...');
  }
}

const obj2 = new Obj('Mesa');
const obj3 = new Obj('Cadeira');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();
