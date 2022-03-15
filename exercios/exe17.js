

function aumentoSalario (salarioAtual,plano){
    switch(salarioAtual,plano){

        case 'a':
            console.log(`Seu aumento será de 10% logo seu novo salário será `, (salarioAtual*(1+0.10)))
            break;

            case 'b':
            console.log(`Seu aumento será de 15% logo seu novo salário será `, (salarioAtual*(1+0.15)))
            break;

            case 'c':
            console.log(`Seu aumento será de 20% logo seu novo salário será `, (salarioAtual*(1+0.2)))
            break;

            default:
                console.log("Plano inválido!")
    }
}

aumentoSalario(1200,'a')



// Professor
function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000))