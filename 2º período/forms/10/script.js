
// CRIE A MATRIZ
var cadastroDEV = [
    {
    nome: "Danielle Gomes", 
    idade: 18, 
    cidade: "Belo Horizonte, MG",
    nivel: "Júnior",
    formacao: "Médio Completo",
    desenvolve: "Vue.js"
    }
];

exibirResultado(cadastroDEV)

function exibirResultado(cadastroDEV) {
    // valor inicial da matriz. aqui será mostrado o exemplo que foi construido no cadastroDEV.
    var html = "";

    // percorre todos os elementos da matriz
    for(var i in cadastroDEV) {
        html += "<div>" + "<strong>" +"Nome: " + "</strong>" + cadastroDEV[i].nome + "<br>" + 
        "<strong>" +"Idade: " + "</strong>" + cadastroDEV[i].idade + "<br>" +
        "<strong>" +"Cidade: " + "</strong>" + cadastroDEV[i].cidade + "<br>" +
        "<strong>" + "Nível: " + "</strong>" + cadastroDEV[i].nivel + "<br>" +
        "<strong>" + "Formação: " + "</strong>" + cadastroDEV[i].formacao + "<br>" +
        "<strong>" +"Desenvolve em: " + "</strong>" + cadastroDEV[i].desenvolve + "</div>" +
        "<br>";
    }
    // (ref.: linha 23): "me mostre a idade da pessoa na linha i".
    // for define como a resposta será apresentada ao cliente.
    
    document.querySelector("#res").innerHTML = html;
    // define onde nossa resposta será mostrada e mostra o valor construido na nossa var html.

    nome.value = "";
    idade.value = "";
    cidade.value = "";
    nivel.value = "";
    formacao.value = "";
    desenvolve.value = "";
    // Zera os valores das variáveis para receber novos valores.
}

function cadastrar() {
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var cidade = document.getElementById("cidade");
    var nivel = document.getElementById("nivel");
    var formacao = document.getElementById("formacao");
    // finalmente, linkamos nossos inputs no js.

    if(nome.value == "" || idade.value == "" || cidade.value == "" || nivel.value == "" || formacao.value == "") {
        alert("Dados Incompletos!");
        // se os dados não estejam completos, aparecerá essa imagem
    } else {
        var item = {
            "nome": nome.value,
            idade: idade.value, 
            cidade: cidade.value,
            nivel: nivel.value,
            formacao: formacao.value,
            desenvolve: desenvolve.value
            // caso os dados estejam completos, atribua os valores fornecidos a eles.
        };

        cadastroDEV.unshift(item);
        // adiciona um novo array na matiz do cadastroDEV.

        exibirResultado(cadastroDEV)
        // mostra o resultado no html
    }
}