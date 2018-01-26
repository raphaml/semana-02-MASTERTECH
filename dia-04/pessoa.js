let pessoas = [
	{
	nome: 'Bandido',
	sobrenome: 'Mau'
	falar = dizerNome
	},

	{		
		nome: 'Monstro'
		sobrenome: 'Sagrado'
		falar = dizerNome
	},

	{
		nome: 'Jacinto'
		sobrenome: 'Paes'
		falar = dizerNome
	}
];

function dizerNome(){
  console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
}

pessoas[0].falar();
pessoas[1].falar();
pessoas[2].falar();