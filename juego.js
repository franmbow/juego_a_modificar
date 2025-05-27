//const $ = document.getElementById.bind(document);
//
//$("eleccion").addEventListener("click", function() {
//    $("titulo").innerHTML = "Seguiste el camino congelado";
//    $("enunciado").innerHTML = "Eliges el camino congelado, se te complica caminar y sientes que te observan, que haras?";
//    $("d1").innerHTML = "1. seguire caminando";
//    $("d2").innerHTML = "2. volvere por donde vine";
//    $("d3").innerHTML = "3. intento descubrir que me observa";
//});

//const caminos = {
//    1: { texto: "eliges el camino congelado, se te complica caminar y sientes que te observan, que haras?", 
//        opciones: [
//        {texto:"seguire caminando", siguiente : 4}, 
//        {texto: "volvere por donde vine", siguiente : 5}, 
//        {texto: "intento descubrir que me observa", siguiente : 6}
//    ] },
//    2: { texto: "puedes volver pero al llegar al inicio te das cuenta que un lobo te siguió, logras terminar con el pero pierdes salud y energía, ganas fuerza", opciones: [ 
//        {texto: "o1", siguiente : 4}, 
//        {texto: "o2", siguiente : 5}, 
//        {texto: "o3", siguiente : 6}
//    ] },
//    3: { texto: "al quedarte detenido puedes ver a una manada de lobos a lo lejos", opciones: [
//        {texto: "o1", siguiente : 4}, 
//        {texto: "o2", siguiente : 5}, 
//        {texto: "o3", siguiente : 6}
//    ] },
//    4: { texto: "opcion 4", opciones: [
//        {texto:"1", siguiente: 1}, {texto:"2", siguiente: 2}, {texto:"3", siguiente: 3}] },
//    5: { texto: "opcion 5", opciones: [{texto:"1", siguiente: 1}, {texto:"2", siguiente: 2}, {texto:"3", siguiente: 3}],},
//    6: { texto: "opcion 6", opciones: [{texto:"1", siguiente: 1}, {texto:"2", siguiente: 2}, {texto:"3", siguiente: 3}] }
//};
//
//
//    function elegirCamino(opcion) {
//    const enunciado = document.getElementById("enunciado");
//    const p = document.querySelectorAll("p");
//
//
//    enunciado.textContent = caminos[opcion].texto;
//    let sig = caminos[opcion].siguiente;
//    console.log(sig)
//    if (sig = undefined) {
//        caminos[opcion].opciones.forEach((opcionData, index) => {
//            p[index].textContent = opcionData.texto;
//            p[index].setAttribute("onclick", `elegirCamino(${opcionData.siguiente})`);
//        });
//    }
//
//    }

let cfuerza = 20;
let csalud = 100;
let cenergia = 100;
function actualizar() {
    document.getElementById("fuerza").style.width = cfuerza + "px";
    document.getElementById("vida").style.width = csalud + "px";
    document.getElementById("energia").style.width = cenergia + "px";
    document.getElementById("fuerza").innerText = cfuerza;
    document.getElementById("vida").innerText = csalud;
    document.getElementById("energia").innerText = cenergia;
}


const pagina = window.location.pathname;
console.log(pagina)
if (pagina == "/html/empezar.html" || pagina == "/html/primera.html" || pagina == "/html/op1.html" || pagina == "/html/oscuro.html") {
    actualizar();
} else if (pagina == "/html/Investigar.html" || pagina == "/html/contcam.html"){
    csalud-=30;
    cenergia-=40;
    cfuerza+=30;
    actualizar();
} else if (pagina == "/html/observa.html"){
    cfuerza+=30;
    cenergia-=30;
    actualizar();
} else if (pagina == "/html/camino2.html"){
    cenergia-=30;
    actualizar();
}