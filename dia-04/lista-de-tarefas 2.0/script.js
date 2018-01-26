alert('TESTE DO JS')


let caixaTexto = document.querySelector('input')
let lista = document.querySelector('ul')

function inserirValor(){

	if(caixaTexto.value ==''){
		return;
	}

	let item = document.createElement('li');
	item.innerHTML = caixaTexto.value;
	item.addEventListener('click', marcarTexto);
	lista.appendChild(item);



	caixaTexto.value = "";

}

function marcarTexto(){
	if(this.style.textDecoration == 'line-through'){
		this.style.display = 'none'
	}
	else{
	this.style.textDecoration = 'line-through';
	}
}

