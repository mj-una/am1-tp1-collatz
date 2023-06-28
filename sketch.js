// collatz (3n + 1)
// martin julio
// 27-6-23

/*

  CONTROLES:
  
  - click al centro para reiniciar con valores aleatorios
  - tecla "p" para pausar / reanudar
  - tecla "k" para reiniciar con valores originales
  - tecla "s" para reiniciar con valores actuales
  - tecla "w" para volver a velocidad por defecto
  - tecla "a" para disminuir velocidad
  - tecla "d" para aumentar velocidad

*/


let vel = 12;

let anguloPar = 0.24;
let anguloImpar = -0.47;
let long = 1.9;

let num;
let sec_A, sec_B;
let angulo_A, angulo_B;

let p_x, p_y;

let inicio, saltar, ciclo_A, ciclo_B;

let ent_x, ent_y;
let aleatorio = false;;

function setup() {
  createCanvas(512, 512);
  
  num = 3;
  inicio = true;
  saltar = false;
  
  background(150);
}

function draw() {
  // VEL _________________________________________________
  for (let i = 0; i < 100 * vel; i++) {

    // evaluadores estado
    if (Number.MAX_VALUE < 2 + 3 * sec_A) saltar = true;
    else saltar = false;
    
    if (sec_A > 1) ciclo_A = true;
    else ciclo_A = false;

    if (sec_B > 1) ciclo_B = true;
    else ciclo_B = false;
    
    // nuevo numero
    if (inicio) {
      sec_A = num;
      sec_B = num;
      angulo_A = angulo_B = 0;
      pasos_A = pasos_B = 0;
      p_x = width / 2;
      p_y = p_x;//height * 0.9;
      inicio = false;
    }

    // COLLATZ A
    else if (ciclo_A && !saltar) {

      // caso par
      if (sec_A % 2 == 0) {
        sec_A = sec_A / 2;
        angulo_A += anguloPar;
      }
      // caso impar
      else {
        sec_A = 3 * sec_A + 1;
        angulo_A += anguloImpar;
      }
      
      resetMatrix();
      translate(p_x, p_y);
      stroke(255, 40);
      line(0, 0, cos(angulo_A) * long, -sin(angulo_A) * long);
      p_x += cos(angulo_A) * long;
      p_y -= sin(angulo_A) * long;
    }
    
    // COLLATZ B
    else if (ciclo_B && !saltar) {

      // caso par
      if (sec_B % 2 == 0) {
        sec_B = sec_B / 2;
        angulo_B -= anguloPar;
      }
      // caso impar
      else {
        sec_B = 3 * sec_B + 1;
        angulo_B -= anguloImpar;
      }
      
      resetMatrix();
      translate(p_x, p_y);
      stroke(0, 50);
      line(0, 0, -cos(angulo_B) * long, -sin(angulo_B) * long);
      p_x -= cos(angulo_B) * long;
      p_y -= sin(angulo_B) * long;
    }

    // fin numero
    else {
      num++;
      saltar = false;
      inicio = true;
    }
  }

  if (dist(mouseX, mouseY, 256, 256) < 30) cursor(HAND);
  else cursor(CROSS);
}

function mousePressed() {
  push();
  resetMatrix();
  if (dist(mouseX, mouseY, 256, 256) < 30) {
    anguloPar = random(0.2, 0.5);
    anguloImpar = random(-0.4, 0.3);
    long = random(1.5, 3);
    setup();
  }
  pop();
}

function keyPressed() {
  if (key == 'w' || key == 'W') vel = 15;
  if (key == 'd' || key == 'D') vel += vel / 2;
  if (key == 'a' || key == 'A') {
    if (vel <= 1) vel = 1; 
    else vel -= vel / 2;
  }
  if (key == 's' || key == 'S') setup();
  if (key == 'k' || key == 'K') {
    vel = 15;
    anguloPar = 0.24;
    anguloImpar = -0.47;
    long = 1.9;
    setup();
  }
  if (key == 'p' || key == 'P') {
    if (isLooping()) noLoop();
    else loop();
  }
}