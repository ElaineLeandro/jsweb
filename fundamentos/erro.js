function tratarErroELancar(erro) {
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'mensagem'
  throw {
    name: erro.nome,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNameGritado(obj){
  try {
    console.log(obj.nome.toUpperCase() + obj)
  } catch (e){
    tratarErroELancar(e)
  }finally {
    console.log('final')
  }
}
const obj = { name: 'Leandro'}
imprimirNameGritado(obj)