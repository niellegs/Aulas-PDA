var cidade = ["Belo Horizonte", "São Paulo", "Santa Catarina", "Salvador"]

saida.innerHTML = cidade.join('<br>').toString();

cidade.pop()
// Exclui o último
saida2.innerHTML = "Vetor após o método pop: <br>" + cidade.join("<br>")

cidade.shift()
// Exclui o primeiro 
saida3.innerHTML = "Vetor após o método shift: <br>" + cidade.join("<br>")

// Adiciona um novo item no final
cidade.push('Rio de Janeiro')
// no começo
cidade.unshift('Petropolis')

saida4.innerHTML = "Vetor após o método push e shift: <br>" + cidade.join("<br>")

// Quantidade de itens no vetor
saida5.innerHTML = cidade.length;

delete cidade[1]

// Incluir e alterar
cidade[0] = "Aracaju";
saida6.innerHTML = "atualização" + cidade.join("<br>")