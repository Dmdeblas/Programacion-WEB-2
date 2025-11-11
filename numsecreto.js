const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

console.log("Bienvenido al juego del Número Secreto!");
console.log("Adivina un número entre 1 y 100.");

function adivinarNumero() {
    rl.question("Ingresa tu número: ", (respuesta) => {
        const numeroUsuario = Number(respuesta);
        intentos++;

        if (numeroUsuario === numeroSecreto) {
            console.log(`🎉 ¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
            rl.close();
        } else if (numeroUsuario < numeroSecreto) {
            console.log("Intenta con un número más grande.");
            adivinarNumero();
        } else if (numeroUsuario > numeroSecreto) {
            console.log("Intenta con un número más pequeño.");
            adivinarNumero();
        } else {
            console.log("Ingresa un número válido.");
            adivinarNumero();
        }
    });
}

adivinarNumero();

// Moctezuma López Brayan Daniel