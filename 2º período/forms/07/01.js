function tabuada() {
    var numero = Number(document.getElementById('numb').value);
    var res = document.getElementById("tabuada");
    res.innerHTML = ""
    
    for(i = 0; i <= 10; i++) {
    res.innerHTML += numero + ' x ' + i + ' = ' + numero * i + '<br>'
    console.log(numero * i)
    }
}

