// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creamos a la lista de amigos
let listaAmigos = [];
//Creamos la variable para tomar el valor de entrada
const inputAmigo = document.getElementById("amigo");

//Funcion para agregar texto a un elemento HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}//asignarTextoElemento

function validarNombre(){
    //Utilizamos una expresion regular para validar el nombre ingresado
    const nombreValido = /^[a-zA-Z\s]+$/;
    //Verificamos si el nombre ingresado es valido
    if( nombreValido.test(inputAmigo.value)){
        //retornamos verdadero si pasa la prueba
        return true;
    }
    //retornamos falso si no pasa la prueba
    return false;
}//validarNombre

function agregarAmigo(){
    //Hacemos uso de la funcion validar nombre
    if(validarNombre()){
        console.log(`${inputAmigo.value} agregado a la lista`);
        //Agregamos a la lista el amigo ingresado
        listaAmigos.push(inputAmigo.value);
        console.log(listaAmigos);
        //Limpiamos la caja de entrada
        condicionesIniciales();
    }else{
        console.log("Ingresado un nombre válido");
    }//else
}//agregarAmigo

function eliminarAmigo(listaAmigos, amigoSorteado){
    //Eliminamos el amigo de la lista
    listaAmigos = listaAmigos.filter(amigo => amigo !== amigoSorteado);
    console.log(`La nueva lista de amigos es ${listaAmigos}`);
    //retornamos la nueva lista
    return listaAmigos;
}//eliminarAmigos

function sortearAmigo(){
    //Verificamos que la lista sea mayor a dos personas
    if(listaAmigos.length >= 2){

        //Sorteamos la posicion de un amigo al azar
        let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);
        console.log(`El amigo sorteado en ${listaAmigos} es ${listaAmigos[amigoSorteado]}`);

        //Verificamos si el amigo se encuentra en la lista
        if(listaAmigos.includes(listaAmigos[amigoSorteado])){
            console.log(`${listaAmigos[amigoSorteado]} ya se sorteó`);
            //Si se encuentra en la lista, lo eliminamos y creamos una nueva lista
            let nuevaLista = eliminarAmigo(listaAmigos, listaAmigos[amigoSorteado]);
            //Asigamos la lista de amigos la lista actualizada con el amigo eliminado
            listaAmigos = nuevaLista;

            if(nuevaLista.length === 1){
                //Si nuestra nueva lista solo contiene un amigo significa que todos los amigos ya han sido sorteados
                console.log(`Todos los amigos ya han sido sorteados, el ultimo es ${nuevaLista[0]}`);
            }//if
        }//if
    }else{
        console.log("Para sortear se necesita una lista mayor a dos personas.");
    }//else
}//sortearAmigo

function condicionesIniciales(){
    //Limpiamos el valor de la caja de entrada
    inputAmigo.value= "";
}//condicionesIniciales