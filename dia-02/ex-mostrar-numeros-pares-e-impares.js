let valores = [1, 3, 5, 7, 9, 10, 13, 22];
let valorPar = 0;
let valorImpar = 0;

// NESSE EXEMPLO EU ESTOU COM UM VETOR QUE TEM 2 NUMEROS PARES
// CRIEI O LOOPING COM A VARIAVEL "umNumero"
// E DISSE QUE SE CASO O NUMERO DO LOOP SE FOR DIVIDO POR 2 RESTAR 0 
// MINHA VARIAVEL "valorPar" TERIA +1 
// SENDO ASSIM QUANDO DER O console.log IRA MOSTRAR QUANTOS NUMEROS PARES HA NO MEU VETOR
for (let umNumero of valores) {
        if (umNumero % 2 ==0) {
            valorPar = valorPar + 1; }
// COM ESSE else ALEM DE MOSTRAR QUANTOS NUMEROS PARES, IRA MOSTRAR TAMBEM QUANTOS NUMEROS IMPARES
	    else{
        	(valorImpar = valorImpar + 1); } 	
}

    console.log(valorPar);
    console.log(valorImpar);