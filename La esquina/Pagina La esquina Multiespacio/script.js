let currentImageIndex = 0;
const images = document.querySelectorAll('.AutoCarrusel img');
const totalImages = images.length;

function changeImage() {
    images[currentImageIndex].classList.remove('active'); // Quita la clase 'active' de la imagen actual
    currentImageIndex = (currentImageIndex + 1) % totalImages; // Avanza al siguiente índice
    images[currentImageIndex].classList.add('active'); // Añade la clase 'active' a la nueva imagen
}

// Cambia la imagen cada 3 segundos
setInterval(changeImage, 3000);

//carrusel de imagenes con URL 

const carruselImagenes = [
    ["Imagenes/Eventos/IMG_20231109_192143647.jpg", "Imagenes/Eventos/principal terreno 2.jpeg", "Imagenes/Eventos/WhatsApp Image 2023-10-07 at 15.50.51.jpeg"], // Carrusel 1
    ["Imagenes/CUMPLEAÑOS INFANTIL/posible principal o servicio 2.jpeg", "Imagenes/CUMPLEAÑOS INFANTIL/posible principal o servicio 3.jpeg", "Imagenes/CUMPLEAÑOS INFANTIL/posible principal o servicio.jpeg"], // Carrusel 2
    ["Imagenes/PADEL/principal3.jpeg", "Imagenes/PADEL/DISEÑO TOMOLASTA DE AGENDA.jpeg", "Imagenes/PADEL/WhatsApp Image 2023-10-13 at 19.55.07.jpeg"]  // Carrusel 3
];

// Índices actuales para cada carrusel
let currentIndex = [0, 0, 0];

// Función para mostrar la imagen actual de un carrusel dado
function showImage(carruselIndex) {
    const imgElement = document.getElementById(`carousel${carruselIndex}Image`);
    imgElement.src = carruselImagenes[carruselIndex][currentIndex[carruselIndex]];
}

// Función para avanzar a la siguiente imagen
function nextImage(carruselIndex) {
    currentIndex[carruselIndex] = (currentIndex[carruselIndex] + 1) % carruselImagenes[carruselIndex].length;
    showImage(carruselIndex);
}

// Función para retroceder a la imagen anterior
function previousImage(carruselIndex) {
    currentIndex[carruselIndex] = (currentIndex[carruselIndex] - 1 + carruselImagenes[carruselIndex].length) % carruselImagenes[carruselIndex].length;
    showImage(carruselIndex);
}

// Inicialización de los carruseles
showImage(0);
showImage(1);
showImage(2);


