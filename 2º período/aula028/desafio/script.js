function calcular() {
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var num3 = Number(document.getElementById("num3").value)
    var num4 = Number(document.getElementById("num4").value)
    var num5 = Number(document.getElementById("num5").value)
    var num6 = Number(document.getElementById("num6").value)
    var num7 = Number(document.getElementById("num7").value)
    var num8 = Number(document.getElementById("num8").value)
    var num9 = Number(document.getElementById("num9").value)
    var num10 = Number(document.getElementById("num10").value)
    var res = document.getElementById("res")
    res.innerHTML = ""

    var countUnder = 0
    var countOver = 0
    var somaUnder = 0
    var somaOver = 0
    let numUnder = []
    let numOver = []
    var numberMaster = 0

    var numeros = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10]

    for(let numero of numeros) {
        if(numero <= 0) {
            countUnder += 1
            somaUnder += numero
            numUnder += numero + ", "

            
        }
        else if(numero > 0) {
            countOver += 1
            somaOver += numero
            numOver += numero + ", "
            if(numberMaster < numero) {
                numberMaster = numero
            } else {
                continue;
            }
            
        }
    }
    res.innerHTML += `<p>O total de números  menores ou iguais a zero foram ${countUnder}.</p>`;
    res.innerHTML += `<p>A soma dos números menores que zero é ${somaUnder}.</p>`;
    res.innerHTML += `<p>Os números iguais ou menores que zero são: [ ${numUnder}].</p>`;
    res.innerHTML += `<p>O total de números maiores que zero foram ${countOver}.</p>`;
    res.innerHTML += `<p>A soma de números maiores que zero foram ${somaOver}.</p>`;
    res.innerHTML += `<p>O maior número fornecido foi ${numberMaster}.</p>`;
    res.innerHTML += `<p>Os números maiores que zero são: [${numOver}].</p>`;

}