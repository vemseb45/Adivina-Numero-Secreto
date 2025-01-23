let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10; 

function generarNumeroSecreto() {
	let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
	
    // evaluamos si la lista ya tiene el numero maximo de combinaciones o se sorteo todos los numeros 
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento ( 'p' , 'Ya se sortearon todos los numeros posibles');

    } else{
            
        // si el numero generado esta incluido en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto(); 
        } else{
                //agregamos el numeroGenerado a nuestra listaNumeroSorteado
                listaNumeroSorteado.push(numeroGenerado);
                //Si no se cumple esta condicion seguira el juego con numero generado
                return numeroGenerado;
                
        }
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function limpiarCaja(){
	document.querySelector('#valorUsuario').value= ''; 
    return;
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto ');
    asignarTextoElemento('p', `Ingrese un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    // se limpia el input
    limpiarCaja();
    //se ejecutan todas las condiciones y se reinician 
    condicionesIniciales();
    //Deshabilitamos el boton cada vez que se reinicia el juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++
        limpiarCaja();

    }
    return;
}
condicionesIniciales();







