// Función principal para generar un número aleatorio del 1 al 20
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
}

// Función del juego
function adivinarNumero() {
    const numeroSecreto = generarNumeroAleatorio();
    let intentos = 0;

    while (true) {
        const intento = parseInt(prompt("Adivina el número secreto entre 1 y 20:"));
        intentos++;

        if (isNaN(intento) || intento < 1 || intento > 20) {
            alert("Ingresa un número válido dentro del rango especificado.");
        } else if (intento === numeroSecreto) {
            alert(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en ${intentos} intentos.`);
            break;
        } else {
            const mensaje = intento < numeroSecreto ? "demasiado bajo" : "demasiado alto";
            alert(`El número secreto es ${mensaje}. Intenta de nuevo.`);
        }
    }
}

// Llamo a la función
adivinarNumero();