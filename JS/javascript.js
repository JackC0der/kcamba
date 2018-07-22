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



//	var total = document.body.offsetHeight;
//	var totalPorCento = total/100
//	var atual = document.getElementById(atual);
//	var atualY = atual.getBoundingClientRect();
//	var atualY = atualY.top**1;
//	var atualYPorCento = atualY/totalPorCento
//	var alvo = document.getElementById(alvo);
//	var alvoY = alvo.getBoundingClientRect();
//	var alvoY = alvoY.top**1;
//	var alvoYPorCento = alvoY/totalPorCento
//	console.log(alvoYPorCento);
//	window.scrollTo(atualY, 
//alvoYPorCento*totalPorCento);

