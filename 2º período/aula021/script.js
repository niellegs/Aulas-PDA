var numeroA = 5;
var numeroB = 10;
var soma = numeroA + numeroB;
document.getElementById("soma").innerHTML= `Resultado da soma:  ${soma}`;


// CONST

const numeroA_sub = 50;
const numeroB_sub = 20;
var subtracao = numeroA_sub - numeroB_sub
document.getElementById("subtracao").innerHTML = `Resultado da subtração: ${subtracao}`
// alert(`Resultado: ${subtracao}`)

// LET: pode ser usada em diversos locais do código, podendo ser alterada em tempo de execução

let numeroA_mult = 5;
let numeroB_mult = 2;
let multiplicacao = numeroA_mult * numeroB_mult;
document.getElementById("multiplicacao").innerHTML = `Resultado da multiplicação: ${multiplicacao}`
// alert(`Resultado: ${multiplicacao}`)

// Nenhum prefixo.
numeroA_div = 20;
numeroB_div = 2;
divisao = numeroA_div /  numeroB_div;
document.getElementById("divisao").innerHTML = `Resultado da divisão: ${divisao}`
// alert(`Resultado: ${divisao}`)