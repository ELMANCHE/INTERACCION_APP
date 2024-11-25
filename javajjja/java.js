const header = document.querySelector('header');
const header_title = document.getElementById('header_title');
const d_btn1 = document.getElementById('d_btn1');
const d_btn2 = document.getElementById('d_btn2');
const slider_btn = document.querySelectorAll('.dot');

// Nuevas imágenes para el slider
const backimg = {
    fimg: 'img/fondoimg1.jpg',
    simg: 'img/fondoimg2.jpg',
    timg: 'img/fondoimg3.jpg'
};


// Función para cargar la imagen del slider
const slider_load = (index) => {
    const images = [backimg.fimg, backimg.simg, backimg.timg];
    const titles = ["CIENCIAS", "HUMANIDADES", "ARTE"];

    header.style.background = `url(${images[index]}) no-repeat center center/cover`;
    header_title.innerText = titles[index];

    slider_btn.forEach((btn, i) => {
        btn.style.background = i === index ? "#fff" : "rgb(184,184,184,0.1)";
    });

    d_btn1.href = "#";
    d_btn2.href = "#";
};

// Índice inicial del slider
let currentIndex = 0;

// Función para avanzar al siguiente slide
const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slider_btn.length;
    slider_load(currentIndex);
};

// Añadir evento de clic a los botones del slider
slider_btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        slider_load(currentIndex);
    });
});

// Cambiar la imagen cada 10 segundos
setInterval(nextSlide, 10000);

// Cargar la primera imagen del slider
slider_load(currentIndex);
