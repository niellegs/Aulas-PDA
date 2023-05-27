var conteudoVetor = "";

function vetor() {
    var input = document.getElementsByName('numero[]');
    for(var i = 0; i < input.length; i++) {
        var a = input[i];
        conteudoVetor += i + ": " + a.value + '<br>';
    }
    document.getElementById("resp1").innerHTML = conteudoVetor;
}