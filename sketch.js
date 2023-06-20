// martin julio
// 19-6-23

let anguloPar = 0.15;
let anguloImpar = -0.15;
let longitud = 5;

let num;

let sec_A, angulo_A, pasos_A;
let sec_B, angulo_B, pasos_B;

let p_x, p_y;

let saltar, ciclo_A, ciclo_B;

function setup() {
  createCanvas(512, 512);
  
  num = 4;

  saltar = false;
  sec_A = num;
  sec_B = num;
  angulo_A = pasos_A = 0;
  angulo_B = pasos_B = 0;
  p_x = width / 2;
  p_y = height * 0.9;

  background(150);
  translate(p_x, p_y);
  noStroke();
  fill(220, 199, 60);
  circle(0, 0, 40);

  //frameRate(1);
}

function draw() {
  push();
  translate(470, 370);
  scale(0.1);
  strokeWeight(11);


  console.log("{num: " + num +
  " }  {sec_A: " + pasos_A + " " + sec_A +
  " }  {sec_B: " + pasos_B + " " + sec_B + " }");

  // evaluadores estado
  if (3 * sec_A + 1 < Number.MAX_VALUE) saltar = false;
  else saltar = true;

  if (sec_A > 1) ciclo_A = true;
  else ciclo_A = false;

  if (sec_B > 1) ciclo_B = true;
  else ciclo_B = false;
  
  // collatz A
  if (ciclo_A && !saltar) {

    if (sec_A % 2 == 0) {
      sec_A = sec_A / 2;
      angulo_A += anguloPar;
    }
    else {
      sec_A = 3 * sec_A + 1;
      angulo_A += anguloImpar;
    }

    pasos_A++;
    translate(p_x, p_y);
    rotate(angulo_A);
    stroke(255);
    line(0, 0, 0, - longitud);
    p_x -= longitud * pasos_A * cos(angulo_A);
    p_y -= longitud * pasos_A * sin(angulo_A);
  }

  // collatz B
  else if (ciclo_B && !saltar) {

    if (sec_B % 2 == 0) {
      sec_B = sec_B / 2;
      angulo_B += (anguloPar + Math.PI);
    }
    else {
      sec_B = 3 * sec_B + 1;
      angulo_B += (anguloImpar + Math.PI);
    }

    pasos_B++;
    translate(p_x, p_y);
    rotate(angulo_B);
    stroke(0);
    line(0, 0, 0, longitud);
    p_x += longitud * pasos_A * cos(angulo_B); 
    p_y += longitud * pasos_A * sin(angulo_B);
  }

  // nuevo numero
  else {
      num++;
      sec_A = num;
      sec_B = num;
      angulo_A = pasos_A = 0;
      angulo_B = pasos_B = 0;
      p_x = width / 2;
      p_y = height * 0.9;
    }

  pop();
}