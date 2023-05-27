var parteUm = document.getElementById('etapa-1');
var parteDois = document.getElementById('etapa-2');
var parteTres = document.getElementById('etapa-3');

function two() {
    parteUm.style.display = 'none';
    parteDois.style.display ='block';
}

function three() {
    parteUm.style.display = 'none';
    parteDois.style.display = 'none';
    parteTres.style.display = 'block';
}

function calcular() {
    var nota1 = Number(document.getElementById('grade-1').value);
var nota2 = Number(document.getElementById('grade-2').value);
var nota3 = Number(document.getElementById('grade-3').value);
var nota4 = Number(document.getElementById('grade-4').value);
var resultado = document.getElementById('results');
var mensagem = document.getElementById('message');
    media = (nota1 + nota2 + nota3 + nota4) / 4;
    results.innerHTML = `Sua média foi ${media}.`
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(nota4)
    if(media >= 7) {
        mensagem.innerHTML = 'Parabéns, você foi aprovado.';
    } else if(media < 7 && media > 3) {
        mensagem.innerHTML = 'Iremos te dar uma última chance para ser aprovado. Seja bem-vindo à recuperação.';
    } else if(media < 3) {
        mensagem.innerHTML = 'Que pena. Você não tem direito a segunda chance. Você foi reprovado e, portanto, desligado do nosso sistema.';
    }
}