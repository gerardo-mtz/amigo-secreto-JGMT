// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

let campoAmigos = document.getElementById('amigo');

if (campoAmigos === null) {
    alert("Por favor, inserte un nombre");
} else {
    let nombreAmigo = campoAmigos.value;
    listaAmigos.push(nombreAmigo);
    campoAmigos.value = "";
}
