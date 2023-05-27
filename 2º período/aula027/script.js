function numerosImpares() {
    let valueStart = document.getElementById('numeroInicial').value;
    let valueFinal = document.getElementById('numeroFinal').value;
    const saida = document.querySelector("#saida")
    saida.innerHTML = " ";
    
    let cont = valueStart;
    while(cont <= valueFinal) {
        saida.innerHTML +=  "Numeros impares:" + cont + "<br>";
    }

//     for(let cont = valueStart; cont <= valueFinal; cont++) {
    
//         if (cont % 2 == 1) {
//             saida.innerHTML +=  "Numeros impares:" + cont + "<br>";
//         }
//     }
// }

// function numerosPares() {
//     let valueStart = document.getElementById('numeroParInicial').value;
//     let valueFinal = document.getElementById('numeroParFinal').value;
//     const saida = document.querySelector("#saidaPar")
//     saida.innerHTML = " ";

//     for(let cont = valueStart; cont <= valueFinal; cont++) {
    
//         if (cont % 2 == 0) {
//             saida.innerHTML +=  "Numeros impares:" + cont + "<br>";
//         }
//     }
 }
