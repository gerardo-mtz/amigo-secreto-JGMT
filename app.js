// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let campoAmigo = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");

// Check if the input field 'campoAmigo' is null. If so, alert the user to insert a name.
// Otherwise, retrieve the value from the input field, add it to 'listaAmigos', and clear the input field.
if (campoAmigo === null) {
    alert("Por favor, inserte un nombre");
} else {
    let nombreAmigo = campoAmigo.value;
    listaAmigos.push(nombreAmigo);
    campoAmigo.value = "";
}

//Adds the value from the input field 'campoAmigo' to the 'listaAmigos' array.
//It retrieves the current value from the input field and appends it to the list.

function agregarAmigo() {
    listaAmigos.push(campoAmigo.value);

}
    listaAmigos.innerHTML = "";
    



