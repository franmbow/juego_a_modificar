// Bienvenida al juego.

alert("¡Bienvenido a la Montaña Mágica! \n" +
    "Tú eres un aventurero en busca de un tesoro legendario. Debes elegir sabiamente...");

// Variables del juego globales

let energia = 100;

let tieneTesoro = false;

// Primer desafío

const eleccion = parseInt(prompt(

  "Estás frente a tres caminos:\n" +

  "1. Subir por el sendero rocoso (riesgo de caída).\n" +

  "2. Atravesar el bosque oscuro (puedes perder energía).\n" +

  "3. Esperar ayuda (seguro, pero lento).\n" +

  "Elige 1, 2 o 3:"

));

// Usamos switch para manejar las elecciones

switch (eleccion) {

  case 1:

    alert("¡El sendero era resbaladizo! Caíste y perdiste 30 de energía.");

    energia -= 30;

    break;

  case 2:

    alert("Un lobo te atacó en el bosque. Perdiste 20 de energía.");

    energia -= 20;

    break;

  

case 3:

    alert("Un mercader amable te dio provisiones. +10 de energía.");

    energia += 10;

    break;

  default:

    alert("No elegiste correctamente. Pierdes un turno.");

}



// Segundo desafío (solo si el jugador tiene energía)

if (energia > 0) {

  const segundaEleccion = parseInt(prompt(

    `Energía actual: ${energia}.\n\n` +

    "Llegas a una cueva:\n" +

    "1. Entrar a la cueva (puede haber tesoro o peligro).\n" +

    "2. Rodear la montaña (más seguro, pero largo).\n" +

    "Elige 1 o 2:"

  ));

  switch (segundaEleccion) {

    case 1:

      alert("¡Encontraste el tesoro mágico! 🏆");

      tieneTesoro = true;

      break;

    case 2:

      alert("Llegaste sano y salvo, pero sin tesoro.");

      break;

    default:

      alert("Te quedaste paralizado. No pasó nada.");

  }

}








// Final del juego

if (energia <= 0) {

  alert("❌ Game Over. Te quedaste sin energía.");

} else if (tieneTesoro) {


 alert("🎉 ¡Ganaste! Lograste el tesoro con " + energia + " de energía restante.");

} else {

  alert("Fin. Sobreviviste, pero sin tesoro.");

}