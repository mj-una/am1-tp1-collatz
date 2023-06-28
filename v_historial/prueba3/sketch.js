// collatz
// prueba 3
// 4-6-23

const velocidad = 1;
let escala = 0.7;

let largo = 2;
let anguloPar = 0.15;
let anguloImpar = -0.15;

let num, sec, pasos, ang;

let o_x, o_y; // origen
let p_x, p_y; // puntero
let d_x, d_y; // desplazamiento

let saltar = false;

function setup() {
  createCanvas(512, 512);

  num = 4;
  sec = num;
  pasos = 0;
  
  o_x = width / 2;
  o_y = height * 9/ 10;
    
  p_x = o_x;
  p_y = p_y;
    
  d_x = 0;
  d_y = 0;
  
  
  
  background(230);
  translate(o_x, o_y);
  
  fill(250, 250, 5);
  noStroke();
  circle(0, 0, 50);
  
}

function draw() {
  translate(o_x, o_y);
  scale(escala);
  
  fill(0, 250, 5);
  noStroke();
  circle(0, 0, 20);
  
  // numeros por cada frame
  for (let i = velocidad * 10; i >= 1; i--) {
    
    // primer collatz
    for (let j = 0; j < 1000; j++) {
      
      if (j == 1000) console.log("j=mil sec: " + sec);
      if (sec == 1) console.log("sec.=1 j: " + j);
      
      console.log("fr: " + frameCount + "  __num: " +
      num + "  __pasos: " + pasos + "  __sec: " + sec +
      "  __fps: " + frameRate());
      
      if (sec > 1) {
        
        // saltar pq numero grande
        if (sec * 3 + 1 > Number.MAX_VALUE) saltar = true;
        else {

          // calculo
          if (sec % 2 == 0) sec /= 2;
          else sec = sec * 3 + 1;

          // pasos
          if (sec <= 1) j = 1000;
          else pasos++;
          
        } // cierra if saltar  
      } // cierra if sec mayor que 1
      
      else {
        //j = 1000;
        sec = num;
        pasos++;
      } // cierra if sec igual a 1
      
    } // cierra primer collatz
    
    // saltar pq muchos pasos
    if (sec != 1) saltar = true;
    
    if (!saltar) {
    
      stroke(0, 255, 255, 100);
      strokeWeight(0.1);
      
      console.log("num en segundo collatz: " + num + "  __p: " + pasos);
      
      // segundo collatz
      for (let k = 0; k < pasos; k++) {  
        
        // desplazamiento
        translate(d_x, d_y);
        rotate(ang);
        
        // render cyan
        line(0, 0, 0, -largo);
        
        // calculo
        if (sec % 2 == 0) {
          sec /= 2;
          ang += anguloPar;  
        }
        else {
          sec = sec * 3 + 1;
          ang += anguloImpar;
        }
        
        //actualizar
        d_x = 0;
        d_y = -largo;

        p_x += d_x + o_x;
        p_y += d_y + o_y;  
      
      } // cierra segundo collatz
    
      sec = num;
    
      for (let l = 0; l < pasos; l++) {
      // desplazamiento final
      
      } // cierra tercer collatz 
      
    } // cierra if saltar
    
    num++;
    pasos = 0;
    
  } // cierra for velocidad
}

function keyPressed() {
  
  if (key == "p" || key == "P") {
    console.log("--- P ---");
    noLoop();
  }
  
  if (key == "l" || key == "L") {
    console.log("--- L ---");
    loop();
  }
}