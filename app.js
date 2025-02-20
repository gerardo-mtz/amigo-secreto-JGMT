// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let campoAmigo = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

// Revisa si el campo de amigo esta vacio y alerta al usuario de ser asi
//Si el campo de amigo no esta vacio, agrega el amigo a la lista 'listaAmigos' y limpia el campo
if (campoAmigo.value === "") {
    alert("Por favor, inserte un nombre");
} else {
    let nombreAmigo = campoAmigo.value;
    listaAmigos.push(nombreAmigo);
    campoAmigo.value = "";
}

//Esta funcion agrega un amigo a la lista 'listaAmigos' y lo muestra en la lista de amigos
function agregarAmigo() {
    listaAmigos.push(campoAmigo.value);
    ulListaAmigos.innerHTML += `<li>${campoAmigo.value}</li>`;
    // Limpia el campo de amigo debe estar dentro de la funcion que agrega el amigo
    campoAmigo.value = "";
}

// Esta funcion elige un amigo aleatorio de la lista 'listaAmigos' y muestra el resultado
function sortearAmigo() {
    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
