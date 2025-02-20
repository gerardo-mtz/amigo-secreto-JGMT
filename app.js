// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let campoAmigo = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

//Revisa si el campo de amigo esta vacio y alerta al usuario de ser asi
//Si el campo de amigo no esta vacio, agrega el amigo a la lista 'listaAmigos' y limpia el campo
//Muestra el valor agregado a la lista de amigos
function agregarAmigo() {
    if (campoAmigo.value === "") {
        alert("Por favor, inserte un nombre");
    } else {
        let nombreAmigo = campoAmigo.value;
        listaAmigos.push(nombreAmigo);
        ulListaAmigos.innerHTML += `<li>${nombreAmigo}</li>`;
        campoAmigo.value = "";
    }
}

// Esta funcion elige un amigo aleatorio de la lista 'listaAmigos'
// Muestra el resultado del sorteo de la lista
function sortearAmigo() {
    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}