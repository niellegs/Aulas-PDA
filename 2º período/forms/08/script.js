function contar() {
    var numero = Number(document.getElementById('num1').value);
    var res = window.document.getElementById("res")
    var i = 0
    res.innerHTML = ""
    while(i < 5) {
        numero += 1
        res.innerHTML += numero + " - "
        i++
    }
    res.innerHTML += "FIM"
}