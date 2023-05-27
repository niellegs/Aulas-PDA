// CPF
// NOME
// CARGO
// DEPARTAMENTO
// SALARIO
// TELEFONE


// VETOR
// var funcionario = [1, 20, 4];

var funcionario = [
    [01, "João", "Estagiário", "Tecnologia", 1500, "51695616"],
    [03, "Lucas", "Gerente", "Marketing", 1500, "51695616"],
    [05, "Maria", "CEO", "Tecnologia", 1500, "51695616"],
    [08, "Karla", "CTO", "Tecnologia", 1500, "51695616"],
    [10, "Marcelo", "Zelador", "Limpeza", 1500, "51695616"],
],

saida1 = document.getElementById("saida1")

saida1.innerHTML = funcionario[0][0] + " / " + funcionario[0][1] + " / " + funcionario[0][2] + " / " + funcionario[0][3] + " / " + funcionario[0][4] + " / " + funcionario[0][5];

saida2.innerHTML = funcionario.join("<br>")

// função pop = elimina o último elemento da matriz

funcionario.pop
saida3.innerHTML = "Após o pop:" + "<br>" + funcionario.join("<br>")

// função push: inclui um elemento na matriz
funcionario.push([07, "Manoel", "Programador", "Tecnologia", 1165, "846466"])

saida4.innerHTML = "Após o push:" + "<br>" + funcionario.join("<br>")

// função sort: ordena a nossa matriz
funcionario.sort()
saida5.innerHTML = "Após o sort:" + "<br>" + funcionario.join("<br>")

// função reverse: inverte a ordem da matriz.
funcionario.reverse()
saida6.innerHTML = "Após o reverse:" + "<br>" + funcionario.join("<br>")

// funcão shift: Elimina o primeiro elemento da matriz.
funcionario.shift()
saida7.innerHTML = "Após o shift:" + "<br>" + funcionario.join("<br>")

// função unshift: acrescenta um elementa no inicio da matriz.
funcionario.unshift([04, 'Bianca', "Design", 5164, "6511165"])
saida8.innerHTML = "Após o unshift:" + "<br>" + funcionario.join("<br>")