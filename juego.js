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
    1: { texto: "eliges el camino congelado, se te complica caminar y sientes que te observan, que haras?", opciones: [{texto:"seguire caminando", siguiente : 4}, {texto: "volvere por donde vine", siguiente : 5}, {texto: "intento descubrir que me observa", siguiente : 6}] },
    2: { texto: "puedes volver pero al llegar al inicio te das cuenta que un lobo te siguió, logras terminar con el pero pierdes salud y energía, ganas fuerza", opciones: [ {texto: "Escalar", siguiente : 4}, {texto: "rodear", siguiente : 5}, {texto: "Rodear", siguiente : 6},] },
    3: { texto: "al quedarte detenido puedes ver a una manada de lobos a lo lejos", opciones: ["Izquierda", "Derecha", "Atrás"] },
    4: { texto: "opcion 4", opciones: ["1", "2", "3"] },
    5: { texto: "opcion 5", opciones: ["1", "2", "3"] },
    6: { texto: "opcion 6", opciones: ["1", "2", "3"] }
    };

function elegirCamino(opcion) {
    const enunciado = document.getElementById("enunciado");
    const p = document.querySelectorAll("p");

    enunciado.textContent = caminos[opcion].texto;
    
    caminos[opcion].opciones.forEach((opcionData, index) => {
        p[index].textContent = opcionData.texto;
        p[index].setAttribute("onclick", `elegirCamino(${opcionData.siguiente})`);
    });
}