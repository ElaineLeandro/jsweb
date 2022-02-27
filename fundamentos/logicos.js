function compras(trabalho1, trabalho2){
  const compraSorvete = trabalho1 || trabalho2
  const compraTv50 = trabalho1 && trabalho2
  // const comprarTv32 = !! (trabalho1 ^ trabalho2) bitwise xor
  const comprarTV32 = trabalho1 != trabalho2
  const manterSaudavel =! compraSorvete // operador unário
  return {compraSorvete, compraTv50, comprarTV32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))