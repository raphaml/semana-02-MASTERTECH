
// --EXEMPLO ENSINANDO SOBRE push E pop, SENDO QUE O push EMPURRA PARA O FIM DO VETOR E pop TIRA O ULTIMO NUMERO DO VETOR--

// let numeros = [1, 5, 6, 19, 50];
// numeros.push(89);
// console.log(numeros);
// let numeroPopado = numeros.pop();
// console.log(numeroPopado);
// numeros.pop();
// numeros.pop();
// console.log	(numeros);

// -----------------------------------------------------------------------------------------------------------------------------------------

// --EXEMPLO PARA SEPARAR PARES DE IMPARES--

// let numeros = [2, 3, 5, 6, 7, 9, 11, 20, 33, 44]
// let pares = []
// let impares = [] 

// for (let numero of numeros){
// 	if (numero % 2 ==0){
// 		pares.push(numero);
// 	}else{
// 		impares.push(numero);
// 	}
// }

// console.log(pares);
// console.log(impares);

// -----------------------------------------------------------------------------------------------------------------------------------------

// --EXEMPLO PARA FAZER UM NUMERO INTEIRO VIRAR DECIMAL E USANDO replace PARA MUDAR DE . PARA , QUE É O USAL NO BRASIL

// let valor = 147;
// let valorComDecimais = valor.toFixed(2);
// let reais = 'R$ ' + valorComDecimais.replace("." , ",");

// console.log(reais);

// -----------------------------------------------------------------------------------------------------------------------------------------

// --EXEMPLO ANTERIOR POREM USANDO UMA FUNÇÃO PARA PODER MUDAR VARIOS NUMEROS DE 1X

	function formatarReais(valor){
// --EXEMPLO PARA FAZER UM NUMERO INTEIRO VIRAR DECIMAL E USANDO replace PARA MUDAR DE . PARA , QUE É O USAL NO BRASIL
	let valorComDecimais = valor.toFixed(2).replace("." , ",");

	return valorComDecimais;

	}

	console.log(formatarReais(147));
	console.log(formatarReais(199));
	console.log(formatarReais(928));

// -----------------------------------------------------------------------------------------------------------------------------------------

// function recursao(numero){
// 	return	recursao(numero+1);
// }
// recursao(0);

