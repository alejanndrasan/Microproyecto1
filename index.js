const slides = document.querySelectorAll(".foto");

//Avanza las fotos
slides.forEach((foto, indx) => {
  foto.style.transform = `translateX(${indx * 100}%)`;
});


// contador de foto actual
let fotoActual = 0;
// maxima cantidad de fotos
let maxFoto = slides.length - 1;

// selecciona el boton de siguiente
const nextFoto = document.querySelector(".next");

// le agrega el event listener de next
nextFoto.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (fotoActual === maxFoto) {
    fotoActual = 0;
  } else {
    fotoActual++;
  }

//   mueve -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - fotoActual)}%)`;
  });
});

// Selecciona el boton de previa
const prevFoto = document.querySelector(".prev");

// le agrega el event listener al boton de prev
prevFoto.addEventListener("click", function () {
  if (fotoActual === 0) {
    fotoActual = maxSlide; //Resetea a la ultima foto si esta en la primera
  } else {
    fotoActual--; 
  }
  //Devuelve las fotos
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - fotoActual)}%)`;
  });
});


