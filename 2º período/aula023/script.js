const age = 18;
const license = true;

if (idade >= 18 && license == true) {
    document.getElementById('estruturaCondicional').innerHTML="aprovado";
} else if(idade < 18) {
    document.getElementById('estruturaCondicional').innerHTML="Idade inferior ao limite estabelecido";
} else if(license == false) {
    document.getElementById('estruturaCondicional').innerHTML="O condutor não possui habilitação.";
}