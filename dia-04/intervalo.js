let i = 0;

function incrementar(){
	i++;
	console.log(i);

	if(i > 10){

		clearInterval(intervalo);
	}
}

let intervalo = setInterval(incrementar, 100);


// setInterval();
// setTimeout();