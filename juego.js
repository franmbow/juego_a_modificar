//const $ = document.getElementById.bind(document);
//
//$("eleccion").addEventListener("click", function() {
//    $("titulo").innerHTML = "Seguiste el camino congelado";
//    $("enunciado").innerHTML = "Eliges el camino congelado, se te complica caminar y sientes que te observan, que haras?";
//    $("d1").innerHTML = "1. seguire caminando";
//    $("d2").innerHTML = "2. volvere por donde vine";
//    $("d3").innerHTML = "3. intento descubrir que me observa";
//});

const caminos = {
    1: { texto: "eliges el camino congelado, se te complica caminar y sientes que te observan, que haras?", opciones: ["seguire caminando", "volvere por donde vine", "intento descubrir que me observa"] },
    2: { texto: "puedes volver pero al llegar al inicio te das cuenta que un lobo te siguió, logras terminar con el pero pierdes salud y energía, ganas fuerza", opciones: ["Escalar", "Rodear", "Descansar"] },
    3: { texto: "al quedarte detenido puedes ver a una manada de lobos a lo lejos", opciones: ["Izquierda", "Derecha", "Atrás"] }
};

function elegirCamino(opcion) {
    const enunciado = document.getElementById("enunciado");
    const p = document.querySelectorAll("p");

    enunciado.textContent = caminos[opcion].texto;

    caminos[opcion].opciones.forEach((texto, index) => {
        p[index].textContent = texto;
        p[index].setAttribute("onclick", `elegirCamino(${index + 1})`);
    });
}