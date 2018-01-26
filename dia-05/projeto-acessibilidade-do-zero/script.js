// alert ("TESTE DO JS - OK");


function apagarInput (seletor){
	let caixaTexto = document.querySelector(seletor)
	caixaTexto.value = '';
}
// -----------------------------------------------------------------------------------------------------------------

let frase = 'Nascemos de uma necessidade real, vimos que nos dias de hoje ainda é complicado para pessoas com deficiencia locomotiva saberem os lugares mais acessiveis para elas; Pensando nisso tivemos uma ideia: "Por que não criarmos uma forma de classificar os lugares conforme a acessibilidade para pessoas com deficiencia?" e foi assim que surgimos :), agora você pode classificar: Restaurantes, Lojas, Bancos, Comércios entre outras coisas; e ajudar pessoas que realmente precisam a achar os lugares que realmente prezão pela acessibilidade ';
let p = document.querySelector('#p-com-movimento')
let letra = 0;

function passarLetra (){
	p.innerHTML += frase[letra];
	letra++;

	if(letra >= frase.length){
		clearInterval(intervalo);
	}
}

let intervalo = setInterval(passarLetra, 200)

// ------------------------------------------------------------------------------------------------------------------

let imgs = document.querySelectorAll('.naoativa')
let slider = 0;

function avancarSlide(){
	imgs[slider].style.display = 'none';
	slider++;

	if(slider >= imgs.length){
		slider = 0;
	}
	imgs[slider].style.display = 'block'

}

setInterval(avancarSlide, 2000);


