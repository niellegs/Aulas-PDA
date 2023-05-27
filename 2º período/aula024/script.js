var select = document.querySelector('select');
var paragrafo = document.querySelector('p');
select.addEventListener('change', idadeAtleta);
document.body.style.padding = '15px';

function idadeAtleta() {

    const classificacao = select.value;

switch(classificacao) {
        case 'infantilA':
            paragrafo.textContent = "classificação do atleta infantil A";
            break;
            html.style.backgroundColor = 'black';
            html.style.color = 'white';

        case 'infantilB':
            paragrafo.textContent = "classificação do atleta infantil B";
            html.style.backgroundColor = 'red';
            html.style.color = 'blue';
            break;   

        case 'juvenilA':
            paragrafo.textContent = "classificação do atleta juvenil A";
            html.style.backgroundColor = 'green';
            html.style.color = 'yellow';
            break;
        case 'juvenilB':
            paragrafo.textContent = "classificação do atleta juvenil B";
            html.style.backgroundColor = 'orange';
            html.style.color = 'brown';
            break;
        default:
            html.style.backgroundColor = 'white';
            html.style.color = 'black';
        
    }
}