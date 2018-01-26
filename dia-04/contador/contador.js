let divs = document.querySelectorAll('div');

for(let div of divs){
	div.addEventListener('click', incrementar);
}

function incrementar(){
	this.innerHTML++;
}