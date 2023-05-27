// para popular uma matriz de forma manual segue o exemplo:

var cadastroFunc = [
    {
        nome: 'Maycon',
        sobrenome: 'Silva',
        cidade: 'Recife'
    }
];

function exibirResultado() {
    var html = '';
    for(var i in  cadastroFunc ) {
        // esse For irá percorrer toda a matriz (todos os registros)
        html += "nome: " + cadastroFunc[i].nome + "<br>"
        " sobrenome: " + cadastroFunc[i].sobrenome + "<br>" +
        " cidade: " + cadastroFunc[i].cidade + "<br>";
    }

    document.getElementById("resultado").innerHTML = html;
    nome.value = "";
    sobrenome.value = "";
    cidade.value = "";
}

exibirResultado(cadastroFunc);

function cadastrarFuncionario() {
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var cidade = document.getElementById("cidade")
}
