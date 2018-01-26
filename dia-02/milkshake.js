// DECLARANDO UMA FUNÇÃO

function fazerMilkshake (sabor, tamanho = 'médio'){
	console.log(`Fazendo seu milkshake ${tamanho} de ${sabor}...`);
	let milkshake =  {
		tipo: `${sabor} ${tamanho}`,
		marca: 'Bobs',
		cheio: true
	};

	return milkshake;
}

// EXECUÇÃO
// fazerMilkshake('chocolate');
let produto = fazerMilkshake('chocolate', 'médio');

console.log(`Eu tenho um milkshake ${produto.tipo} do ${produto.marca} na mão`);