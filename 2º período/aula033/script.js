const elemento1 = document.getElementById ("paragrafo1");
console.log (elemento1);

const h1elemento = document.querySelector ("h1");
console.log (h1elemento);

const lista = document.querySelector ('.alimentos');
console.log (lista);

const listaDeItens = document.querySelectorAll ("ul>li");
console.log (listaDeItens);

listaDeItens.forEach (
    (item) => {console.log(item);}
);

let ulList = document.createElement ("ul");
let listItem1 = document.createElement ("li");
let listItem2 = document.createElement ("li");
let tituloLista = document.createElement ("h1");

listItem1.textContent = "teste0";
listItem2.textContent = "teste1";
tituloLista.textContent = "testando criacao de lista";

document.body.appendChild(tituloLista);
document.body.appendChild(ulList);

ulList.appendChild(listItem1);
ulList.appendChild(listItem2);

const h2elemento = document.querySelector("h2");
h2elemento.style.color = "blue";
document.getElementsByTagName("p")[1].innerHTML = "Mudando o texto";

const estiloClass = document.getElementsByClassName("editar");
estiloClass[0].style.color = "purple";
estiloClass[0].style.backgroundColor = "blue";