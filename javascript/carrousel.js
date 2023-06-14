const slide = ["carou1.png", "carou2.png", "carou3.png"];
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = "image/carrousel/" + slide[numero];
}

setInterval("ChangeSlide (1)", 4000);
