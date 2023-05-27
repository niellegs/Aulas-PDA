var validacao = true; 
var contador = 1;

while (validacao){// validação / verificação	
	if (contador <=10){
		saida.innerHTML += "Número: " + contador + "<br>";
		contador++;	//incremento
	} else {
		validacao = false;
	}
}