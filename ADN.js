// Definimos los 4 elementos del ADN
const ADN = ["Adenina", "Citosina", "Guanina", "Timina"];

// Creamos una lista de 24 elementos aleatorios de los 4 posibles elementosd del ADN
const listaAleatoria = Array.from({ length: 24 }, () => {
    return ADN[Math.floor(Math.random() * ADN.length)];
});

// Para que se muestren en consola usamos
console.log(listaAleatoria);