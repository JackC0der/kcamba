function scrollBTN(atual, alvo) {
	var total = document.body.offsetHeight;
	var totalPorCento = total/100
	var atual = document.getElementById(atual);
	var atualY = atual.getBoundingClientRect();
	var atualY = atualY.top**1;
	var atualYPorCento = atualY/totalPorCento
	var alvo = document.getElementById(alvo);
	var alvoY = alvo.getBoundingClientRect();
	var alvoY = alvoY.top**1;
	var alvoYPorCento = alvoY/totalPorCento
	console.log(alvoYPorCento);
	window.scrollTo(atualY, 
alvoYPorCento*totalPorCento);
}

function enviarEmail() {
    var nome = document.getElementById("nome").textContent;
    var email = document.getElementById("email").textContent;
    var assunto = document.getElementById("assunto").textContent;
    var menssagem = document.getElementById("menssagem").textContent;
    var link = "mailto:bruna.trindade2014@outlook.com"+"?cc="+email+"&subject="+assunto+"&body="+menssagem;
    console.log(link);
    
    window.location.href = link;
}

