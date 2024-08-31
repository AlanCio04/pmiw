////  https://www.youtube.com/watch?v=L-hBgf0xz24
let imagen;
let circulos = 35; //// cant de circulos
let Tamciruclos; //// tamaño de circulos
let colorCicurlos; //// Color de circulos
let colorRandom = 0; //// color aleatorio

function setup() {
createCanvas(800, 400);
  imagen = loadImage("op_art_image.jpg", () => {
    imagen.resize(width / 2, height);
  });
  Tamciruclos = width / circulos;
  colorCicurlos = color(255, 0, 0);
}


function draw() {
background(255);

  image(imagen, 0, 0);

  for (let x = width / 2; x < width; x += Tamciruclos) {
    for (let y = 0; y < height; y += Tamciruclos) {
      let distancia = dist(x + Tamciruclos / 2, y + Tamciruclos / 2, mouseX, mouseY);
      let diametroCiruclo = map(distancia, 0, width / 2, Tamciruclos * 0.2, Tamciruclos * 2);

      let circleColor;
      if (colorRandom == 1) {
        let r = random(255);
        let g = random(255);
        let b = random(255);
        circleColor = color(r, g, b);
      } else {
        let cursorBrillo = brillo(distancia);
        circleColor = color(255 - cursorBrillo);
      }

      fill(circleColor);
      ellipse(x + Tamciruclos / 2, y + Tamciruclos / 2, diametroCiruclo, diametroCiruclo);
    }
  }
}

//// brillo del puntero
function brillo(distancia) {
  return map(distancia, 0, width / 2, 0, 255);
}

function mousePressed() {
  if (colorRandom == 0) {
    colorRandom = 1; //// activado ////
  } else {
    colorRandom = 0; //// desactivado ////
  }
}
