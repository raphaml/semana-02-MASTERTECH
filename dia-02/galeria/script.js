// DIFERENTE DA querySelector A querySelectorAll RETORNA TODOS OS ITENS QUE ESTOU PROCURANDO
// NESSE CASO ESTOU PROCURANDO AS img CONTIDAS NO MNEU body SENDO ASSIM
// SE EU TIVESSE USADO APENAS O querySelector TERIA SELECIONADO APENAS A PRIMEIRA img
// USANDO O querySelectorAll ELE SELECIONA TODAS AS img E NESSE CASO IRA SUMIR COM TODAS AS img
function ocultarImagens(seletor){

let imagens = document.querySelectorAll(seletor);

for(let imagem of imagens){
	if (imagem.style.display == 'none'){
		imagem.style.display = 'block';
	}
	else{
		imagem.style.display = 'none';

	}
		// imagem.style.opacity = '0'
	}
}

