const paginas = [
    {
        imagen: "assets/imagenes/pagina1.jpg",
        texto: "",
        audio: "assets/audio/pagina1.wav",
        narracion: "assets/texto/pagina1.mp3"
    },
    {
        imagen: "assets/imagenes/pagina2.jpg",
        texto: "",
        audio: "assets/audio/pagina2.wav",
        narracion: "assets/texto/pagina2.mp3"
    },
    {
        imagen: "assets/imagenes/pagina3.jpg",
        texto: "",
        audio: "assets/audio/pagina3.mp3",
        narracion: "assets/texto/pagina3.mp3"
    },
    {
        imagen: "assets/imagenes/pagina4.jpg",
        texto: "",
        audio: "assets/audio/pagina4.wav",
        narracion: "assets/texto/pagina4.mp3"
    },
    {
        imagen: "assets/imagenes/pagina5.jpg",
        texto: "",
        audio: "assets/audio/pagina5.wav",
        narracion: "assets/texto/pagina5.mp3"
    },
    {
        imagen: "assets/imagenes/pagina6.jpg",
        texto: "",
        audio: "assets/audio/pagina6.wav",
        narracion: "assets/texto/pagina6.mp3"
    },
    {
        imagen: "assets/imagenes/pagina7.jpg",
        texto: "",
        audio: "assets/audio/pagina7.wav",
        narracion: ""
    },
    {
        imagen: "assets/imagenes/pagina8.jpg",
        texto: "",
        audio: "assets/audio/pagina8.mp3",
        narracion: "assets/texto/pagina8.mp3"
    },
    {
        imagen: "assets/imagenes/pagina9.png",
        texto: "",
        audio: "assets/audio/pagina9.mp3",
        narracion: "assets/texto/pagina9.mp3"
    },
    {
        imagen: "assets/imagenes/pagina10.jpg",
        texto: "",
        audio: "assets/audio/pagina10.mp3",
        narracion: "assets/texto/pagina10.mp3"
    },
    {
        imagen: "assets/imagenes/pagina11.jpg",
        texto: "",
        audio: "assets/audio/pagina11.mp3",
        narracion: "assets/texto/pagina11.mp3"
    },
    {
        imagen: "assets/imagenes/pagina12.jpg",
        texto: "",
        audio: "assets/audio/pagina12.wav",
        narracion: ""
    },
    {
        imagen: "assets/imagenes/pagina13.jpg",
        texto: "",
        audio: "assets/audio/pagina13.wav",
        narracion: "assets/texto/pagina13.mp3"
    },
    {
        imagen: "assets/imagenes/pagina14.jpg",
        texto: "",
        audio: "assets/audio/pagina14.wav",
        narracion: "assets/texto/pagina14.mp3"
    },
     {
        imagen: "assets/imagenes/pagina15.jpg",
        texto: "",
        audio: "assets/audio/pagina15.wav",
        narracion: "assets/texto/pagina15.mp3"
    },
     {
        imagen: "assets/imagenes/pagina16.png",
        texto: "",
        audio: "assets/audio/pagina15.wav",
        narracion: "assets/texto/pagina16.mp3"
    },
     {
        imagen: "assets/imagenes/pagina17.png",
        texto: "",
        audio: "assets/audio/pagina17.wav",
        narracion: "assets/texto/pagina17.mp3"
    }
];

let paginaActual = 0;

const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto");
const retroceder = document.getElementById("retroceder");
const avanzar = document.getElementById("avanzar");
const sonido = document.getElementById("sonido");
const narrar = document.getElementById("narrar");

let audioActual = null;
let narracionActual = null; // Variable para la narración en audio

// Función para actualizar la página
function actualizarPagina() {
    // Actualizar la imagen y el texto de la página actual
    imagen.src = paginas[paginaActual].imagen;
    texto.textContent = paginas[paginaActual].texto;

    // Detener cualquier audio en reproducción al cambiar de página
    if (audioActual) {
        audioActual.pause();
        audioActual.currentTime = 0;
    }

    // Detener cualquier narración en reproducción al cambiar de página
    if (narracionActual) {
        narracionActual.pause();
        narracionActual.currentTime = 0;
    }
}

avanzar.addEventListener("click", () => {
    console.log("Antes de avanzar:", paginaActual);
    if (paginaActual < paginas.length - 1) {
        paginaActual++;
        console.log("Después de avanzar:", paginaActual);
        actualizarPagina();
    }
});

retroceder.addEventListener("click", () => {
    console.log("Antes de retroceder:", paginaActual);
    if (paginaActual > 0) {
        paginaActual--;
        console.log("Después de retroceder:", paginaActual);
        actualizarPagina();
    }
});


// Botón de sonido: reproducir el audio correspondiente a la página actual
sonido.addEventListener("click", () => {
    // Detener cualquier audio en reproducción
    if (audioActual) {
        audioActual.pause();
        audioActual.currentTime = 0;
    }

    // Reproducir el audio correspondiente a la página actual
    const audioPagina = paginas[paginaActual].audio;
    if (audioPagina) {
        audioActual = new Audio(audioPagina); // Usar ruta dinámica
        audioActual.play();
    } else {
        alert("No hay audio disponible para esta página.");
    }
});

// Botón de narrar: reproducir el archivo de narración correspondiente
narrar.addEventListener("click", () => {
    // Detener cualquier narración en reproducción
    if (narracionActual) {
        narracionActual.pause();
        narracionActual.currentTime = 0;
    }

    // Reproducir el archivo de narración correspondiente a la página actual
    const narracionPagina = paginas[paginaActual].narracion;
    if (narracionPagina) {
        narracionActual = new Audio(narracionPagina); // Usar ruta dinámica
        narracionActual.play();
    } else {
        alert("No hay narración disponible para esta página.");
    }
});

// Inicializar la primera página al cargar
//actualizarPagina();

// Agrega este código al final del archivo JavaScript
const imagenes = document.querySelectorAll("#imagen");

imagenes.forEach((imagen) => {
    imagen.style.maxWidth = "100%";
    imagen.style.height = "80%";
    imagen.style.objectFit = "contain";
});
