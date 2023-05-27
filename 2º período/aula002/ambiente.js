function comparar() {
    var fruta = window.document.getElementById('fruta');
    // var mom = ['Pera', 'Uva', 'Maçã', 'Abacaxi', 'Tomate', 'Mamão']
    var carlos = ["Abacaxi","Maçã"];
    var answer = window.document.getElementById('answer');
    var frutas = String(fruta) ;
    if (carlos.indexOf(frutas) !== -1) {
            answer.innerHTML = 'O Carlos gosta dessa fruta.'
    }  else {
        answer.innerHTML = 'O Carlos não gosta dessa fruta.'
    }
}