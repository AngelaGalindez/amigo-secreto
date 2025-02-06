// Lista de participantes
const participantes = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

// Función para asignar amigos secretos
function asignarAmigosSecretos(participantes) {
    // Copia de la lista de participantes para no modificar la original
    let lista = [...participantes];
    
    // Objeto para almacenar las asignaciones
    let asignaciones = {};

    // Recorremos la lista de participantes
    for (let i = 0; i < participantes.length; i++) {
        // Filtramos la lista para excluir al propio participante
        let opciones = lista.filter(nombre => nombre !== participantes[i]);
        
        // Seleccionamos un amigo secreto al azar
        let amigoSecreto = opciones[Math.floor(Math.random() * opciones.length)];
        
        // Asignamos el amigo secreto
        asignaciones[participantes[i]] = amigoSecreto;
        
        // Eliminamos al amigo secreto de la lista para que no sea asignado de nuevo
        lista = lista.filter(nombre => nombre !== amigoSecreto);
    }

    return asignaciones;
}

// Asignamos los amigos secretos
let amigosSecretos = asignarAmigosSecretos(participantes);

// Mostramos las asignaciones
console.log("Asignaciones de Amigos Secretos:");
for (let participante in amigosSecretos) {
    console.log(`${participante} -> ${amigosSecretos[participante]}`);
}