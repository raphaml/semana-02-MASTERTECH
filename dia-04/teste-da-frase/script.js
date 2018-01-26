alert ('TESTE DO JS - OK');

let frase = 'Sou o monstro sagrado do desenrolo';
let p = document.querySelector('p');
let letras = 0;


function passarLetra(){
	p.innerHTML += frase[letras];
	letras++;

	if (letras >= frase.length){
// AQUI ESTOU DIZENDO QUE SE letras FOR MAIOR QUE A MINHA FRASE AUTOMATICAMENTE IRA PARAR
	clearInterval(intervalo);
	}

}
// QUANDO VOCE DETERMINA UM setInterval VOCE PODE DAR UMA VARIAVEL PARA ELA QUE DEPOIS SERA USADO NUM clearInterval PARA QUE O EVENTO POSSA TER UM FIM 
let intervalo = setInterval(passarLetra, 100)

