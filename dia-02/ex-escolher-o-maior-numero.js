let valores = [10, 20, 30, 40, 50, 60, 70, 80];
let maiorValor = 0;

// NESSE EXEMPLO EU DIGO QUE NESSE VETOR CHAMADO "valores" EU QUERO APENAS O MAIOR VALOR
// SENDO ASSIM EU CRIO UMA OUTRA VARIAVEL CHAMADA "umNumero" PARA ME GERAR O LOOPING DA VARIAVEL "valores"
// E DIGO QUE "SE ESSE NUMERO QUE VIER DO LOOPING FOR MAIOR QUE O MEU "maiorValor" 
// ENTAO O MEU maiorValor SERA IGUAL A ESSE NUMERO DO LOOPING"
// NESSE EXEMPLO MEU maiorValor TERA QUE SER 80 NO FINAL
for(let umNumero of valores){
	if(umNumero > maiorValor){
		maiorValor = umNumero;
	}
}

console.log(maiorValor);