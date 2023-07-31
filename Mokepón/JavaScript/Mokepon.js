let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function deshabilitarBotonesAtaque() {
    let botonFuego = document.getElementById("boton-fuego");
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");

    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
}

function habilitarBotonesAtaque() {
    let botonFuego = document.getElementById("boton-fuego");
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");

    botonFuego.disabled = false;
    botonAgua.disabled = false;
    botonTierra.disabled = false;
}

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "none";

    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "none";

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", function () {
        vidasJugador = 3;
        vidasEnemigo = 3;
        actualizarVidas();
        seleccionarMascotaJugador();
        seleccionarMascotaEnemigo();

        habilitarBotonesAtaque(); // Habilitar botones de ataque al inicio

        let botonFuego = document.getElementById("boton-fuego");
        botonFuego.addEventListener("click", ataqueFuego);
        let botonAgua = document.getElementById("boton-agua");
        botonAgua.addEventListener("click", ataqueAgua);
        let botonTierra = document.getElementById("boton-tierra");
        botonTierra.addEventListener("click", ataqueTierra);

        let botonReiniciar = document.getElementById("boton-reiniciar");
        botonReiniciar.addEventListener("click", reiniciarJuego);
    });
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
    sectionSeleccionarMascota.style.display = "none";

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "flex";

    let inputHipodoge = document.getElementById("Hipodoge");
    let inputCapipepo = document.getElementById("Capipepo");
    let inputRatigueya = document.getElementById("Ratigueya");
    let inputLangostelvis = document.getElementById("Langostelvis");
    let inputTucapalma = document.getElementById("Tucapalma");
    let inputPydos = document.getElementById("Pydos");

    let spanMascotaJugador = document.getElementById("mascota-jugador");

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya";
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis";
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma";
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos";
    } else {
        alert("Selecciona una mascota");
    }

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 6);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if (mascotaAleatoria === 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    } else if (mascotaAleatoria === 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
    } else if (mascotaAleatoria === 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya";
    } else if (mascotaAleatoria === 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis";
    } else if (mascotaAleatoria === 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma";
    } else {
        spanMascotaEnemigo.innerHTML = "Pydos";
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO";
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "AGUA";
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "TIERRA";
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio === 1) {
        ataqueEnemigo = "FUEGO";
    } else if (ataqueAleatorio === 2) {
        ataqueEnemigo = "AGUA";
    } else {
        ataqueEnemigo = "TIERRA";
    }

    combate();
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("¡EMPATE!🤼");
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("¡GANASTE!🥳");

        vidasEnemigo--;
        if (vidasEnemigo < 0) vidasEnemigo = 0;
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("¡GANASTE!🥳");

        vidasEnemigo--;
        if (vidasEnemigo < 0) vidasEnemigo = 0;
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("¡GANASTE!🥳");

        vidasEnemigo--;
        if (vidasEnemigo < 0) vidasEnemigo = 0;
    } else {
        crearMensaje("¡PERDISTE!😢");

        vidasJugador--;
        if (vidasJugador < 0) vidasJugador = 0;
    }

    revisarVidas();
    actualizarVidas();
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("¡MUY BIEN, GANASTE!🎉");
        deshabilitarBotonesAtaque(); // Desactivar botones de ataque al finalizar el juego
    } else if (vidasJugador == 0) {
        crearMensajeFinal("¡ESTÁS MUERTO!💀");
        deshabilitarBotonesAtaque(); // Desactivar botones de ataque al finalizar el juego
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("resultado");
    let sectionAtaqueDelJugador = document.getElementById("ataque-del-jugador");
    let sectionAtaquesDelEnemigo = document.getElementById("ataques-del-enemigo");

    let nuevoAtaqueDelJugador = document.createElement("p");
    let nuevoAtaqueDelEnemigo = document.createElement("p");

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    sectionAtaqueDelJugador.appendChild(nuevoAtaqueDelJugador);
    sectionAtaquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado");

    let parrafo = document.createElement("p");
    parrafo.innerHTML = resultadoFinal;

    sectionMensajes.innerHTML = '';
    sectionMensajes.appendChild(parrafo);

    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
    sectionSeleccionarMascota.style.display = "flex";

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "none";

    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "none";

    // Crear el mensaje "¡Mucha Suerte!" al reiniciar el juego y seleccionar una nueva mascota
    let mensajeSuerte = document.createElement("p");
    mensajeSuerte.innerHTML = "¡Mucha Suerte!";
    let sectionMensajes = document.getElementById("resultado");
    sectionMensajes.innerHTML = '';
    sectionMensajes.appendChild(mensajeSuerte);

    // Limpiar los resultados de la partida anterior
    let sectionAtaqueDelJugador = document.getElementById("ataque-del-jugador");
    sectionAtaqueDelJugador.innerHTML = '';

    let sectionAtaquesDelEnemigo = document.getElementById("ataques-del-enemigo");
    sectionAtaquesDelEnemigo.innerHTML = '';

    habilitarBotonesAtaque(); // Habilitar botones de ataque al reiniciar el juego
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function actualizarVidas() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");

    spanVidasJugador.innerHTML = vidasJugador;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
}

window.addEventListener("load", iniciarJuego);