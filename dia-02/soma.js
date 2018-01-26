// USA-SE [] PARA DETERMINAR QUE É UM VETOR SENDO QUE O VETOR COMEÇA PELO NUMERO 0 
let numeros = [10, 2, 33, 22, 8, 70, 99, 77];
let contador =0;

// CRIAMOS UM LAÇO CHAMADO DE for E DENTRO DESSE LAÇO UMA VARIAVEL NOVA CHAMADA umNumero 
// QUE FARA O LAÇO COM A VARIAVEL numeros ONDE ESSE LAÇO NESSE EXEMPLO SE REPETE 8 VEZES
// JA QUE TEMOS 8 NUMEROS DENTRO DO VETOR
for(let umNumero of numeros){
	contador = contador + umNumero
}

console.log(contador);