function gerar() {
	var res = document.getElementById("res");
	i = 0
	res.innerHTML = ""
	while(i < 11) {
		res.innerHTML += `${i} <br>`
		i++
	}
}