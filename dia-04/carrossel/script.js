let imgs = document.querySelectorAll('img');
let slider = 0;

function avancarSlide(){
	imgs[slider].style.display = 'none';
	slider++;
	// USA-SE ESSE length PARA REFERENCIAR O MEU VETOR QUE NO MEU CASO O VETOR SÃO TODAS AS MINHAS FOTOS QUE ESTÃO SELECIONADAS PELO querySelectorAll
	// ESTOU DIZENDO QUE SE MINHA VARIAVEL slider FOR MAIOR QUE O NUMERO DE IMGS DENTRO DO MEU VETOR, ENTÃO slider sera novamente 0
		if(slider >= imgs.length){
			slider = 0;
		}
		imgs[slider].style.display = 'block';
}
 	// USA-SE ESSE setInterval PARA PODER FAZER COM QUE OS EVENTOS DO LAÇO DEMOREM MAIS PARA SEREM VISTOS PARA CRIAR REALMENTE O EFEITO DE SLIDE
setInterval(avancarSlide, 2000);
