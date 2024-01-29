 
 let numerosecreto = 0
 let intentos=0;

 
function asignaTextoElemento(elemento,Texto){
    let elemntoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= Texto;
    return;

}


function verificarintento(){}

    let numerodeusuario= parseInt(document.getElementById(`valordeusuario`).Value);
    console.log(numerodeusuario === numerosecreto);
    if(numerodeusuario=== numerosecreto){
        asignaTextoElemento(`p`,`acertaste el numero ${veces} ${(intentos===1)?'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttributeNode('disable');
    }
    else{
        //el ususario no acertp
        if (numerodeusuario > numerosecreto){
            asignaTextoElemento(`p`,`el  secreto numero es menor`);
         }
         else{
            asignaTextoElemento(`p`,`el  secreto numero es mayor`);
         };
         intentos++;
         limpiarcaja();
    return;
}
function limpiarcaja() {
    document.querySelector('#valorusuario').Value ='';
  
}


function generarnumerosecreto() {
   return Math.floor(Math.random()*10)+1;
    
}
function condisionesiniciales(){
asignaTextoElemento(`h1`,`juego del numero secreto`);
asignaTextoElemento(`p`,`indica un numero del 1 al 100`);
numerosecreto = generarnumerosecreto();
intentos = 1;
}

function reiniciarjuego(){
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de numeros 
    //inicializar el numero de intentos
    condisionesiniciales();
    //des habilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disable','true');
}

condisionesiniciales();