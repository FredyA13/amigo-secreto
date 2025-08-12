// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creamos a la lista de amigos
let listaAmigos = [];
//Creamos la variable para tomar el valor de entrada
const inputAmigo = document.getElementById("amigo");
//Lista que muestra a las persona en la lista
const listaMostrada = document.getElementById("listaAmigos");
const amigoMostrado = document.getElementById("resultado");
const error = document.getElementById("error");

//Bool para verificar si es el ultimo amigo
let isLast = false;

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

function mostrarLista(listaAmigos){
    //Limpiamos la lista
    listaMostrada.innerHTML="";
    //Mostramos la lista en pantalla
    for(let i = 0; i<listaAmigos.length; i++){
        //Creamos el elemento
        const elemento = listaAmigos[i];
        //Insertamos el el elemento
        listaMostrada.insertAdjacentHTML("beforeend",
            `
            <li>${elemento}</li>
            `
        );
    }//for
}//mostrarLista

function mostrarAmigo(texto){
    //Limpiamos la lista mostrada en pantalla
    listaMostrada.innerHTML="";
    //Limpiamos el amigo secreto mostrado en pantalla
    amigoMostrado.innerHTML="";
    amigoMostrado.insertAdjacentHTML("beforeend",
        `
        <li>${texto}</li>
        `
    );
}//mostrarAmigo

function mostrarError(texto){
    error.innerHTML="";
    error.insertAdjacentHTML("beforeend",
        `
        <li>${texto}</li>
        `
    );
}//mostrarError

function agregarAmigo(){
    amigoMostrado.innerHTML="";
    error.innerHTML="";
    //Hacemos uso de la funcion validar nombre
    if(validarNombre()){
        //console.log(`${inputAmigo.value} agregado a la lista`);
        //Agregamos a la lista el amigo ingresado
        listaAmigos.push(inputAmigo.value);
        //Mostramos la lista en la pagina
        mostrarLista(listaAmigos);
        //Limpiamos la caja de entrada
        condicionesIniciales();
    }else{
        //console.log("Ingresa un nombre válido");
        mostrarError("Ingresa un nombre válido");
    }//else
}//agregarAmigo

function eliminarAmigo(listaAmigos, amigoSorteado){
    //Eliminamos el amigo de la lista
    listaAmigos = listaAmigos.filter(amigo => amigo !== amigoSorteado);
    //console.log(`La nueva lista de amigos es ${listaAmigos}`);
    //retornamos la nueva lista
    return listaAmigos;
}//eliminarAmigos

function sortearAmigo(){
    //Verificamos que la lista sea mayor a una persona
    if(listaAmigos.length > 1){

        //Sorteamos la posicion de un amigo al azar
        let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);
        let amigo = listaAmigos[amigoSorteado];
        //console.log(`El amigo sorteado en ${listaAmigos} es ${amigo}`);

        //Mostramos al amigo sorteado en pantalla
        mostrarAmigo(`El amigo secreto sorteado es: ${amigo}`);

        //Eliminamos el amigo sorteado de la lista
        listaAmigos = eliminarAmigo(listaAmigos, amigo);

        if(listaAmigos.length === 1){
            //Si la lista solo tiene un amigo, es el ultimo
            isLast = true;
        }//if

    }else if(listaAmigos.length === 1 && isLast){
        let ultimoAmigo = listaAmigos[0];
        //Si nuestra nueva lista solo contiene un amigo significa que todos los amigos ya han sido sorteados
        //console.log(`Todos los amigos ya han sido sorteados, el ultimo es ${ultimoAmigo}`);
        mostrarAmigo(`El ultimo amigo secreto sorteado es: ${ultimoAmigo}`);
    }else{
        //console.log("Para sortear se necesita una lista mayor a dos personas.");
        mostrarError("Se necesitan al menos 2 amigos para sortear.");
    }//else

}//sortearAmigo

function condicionesIniciales(){
    //Limpiamos los valores
    inputAmigo.value= "";
    amigoMostrado.value="";
    error.innerHTML="";
}//condicionesIniciales