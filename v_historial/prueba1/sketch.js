// collatz
// prueba 1
// 3-6-23

let cant = 100;
let velocidad = 1;
let cc = 0;
let escala = 2;

let num, sec, par;
let maxNum, saltar;

let colA = 60;
let colB = 245;

let o_x, o_y; // origen
let p_x, p_y; // puntero
let d_x, d_y; // desplazamiento

let distancia = 6;

let anguloPar = 21;
let anguloImpar = -35;

function setup() {
  createCanvas(512, 512);
  background("grey");
  
  num = 26342;
  
  maxNum = Number.MAX_VALUE - 1;
  saltar = false;
  
  o_x = width / 2;
  o_y = height;
  
  p_x = 0;
  p_y = 0;  
}

function draw() {
  
  translate(o_x, o_y);
  scale(0.26);
  
  noStroke();
  fill("yellow");
  circle(0, 0, 30);
  
  if (cc < cant) {
    
    stroke(0, 255, 255, colA);
    //noStroke();

    sec = num;

    for (let i = velocidad * 500; i >= 1; i--) {
      console.log("fr: " + frameCount + "    __num: " + num);

      if (sec > 1 && !saltar) {
        if (sec % 2 == 0) {
          sec = sec / 2;
          line(p_x, p_y, p_x + anguloPar, p_y - distancia);
          p_x += anguloPar;
          p_y -= distancia;
          //ang += anguloPares;
        }
        else {
          if (3 * sec  + 1 < Number.MAX_VALUE) {
            sec = 3 * sec + 1;
            line(p_x, p_y, p_x + anguloImpar, p_y - distancia);
            p_x += anguloImpar;
            p_y -= distancia;
            //ang += anguloImpares;
          }
          else {
            saltar = true;
          }
        }
      }
      else {
        //num--;
        sec = num;
        i = 0;
        saltar = false;
        //noLoop();
      }
    }


    stroke(255, 0, 0, colB);
    strokeWeight(1);

    for (let i = velocidad * 500; i >= 1; i--) {
      console.log("fr: " + frameCount + "    __num: " + num);

      if (sec > 1 && !saltar) {
        if (sec % 2 == 0) {
          sec = sec / 2;
          line(p_x, p_y, p_x - anguloPar, p_y + distancia);
          p_x -= anguloPar;
          p_y += distancia;
          //ang += anguloPares;
        }
        else {
          if (3 * sec  + 1 < Number.MAX_VALUE) {
            sec = 3 * sec + 1;
            line(p_x, p_y, p_x - anguloImpar, p_y + distancia);
            p_x -= anguloImpar;
            p_y += distancia;
            //ang += anguloImpares;
          }
          else {
            saltar = true;
          }
        }
      }
      else {
        //num--;
        //sec = num;
        i = 0;
        saltar = false;
        p_x = 0;
        p_y = 0;
      }
    }

    num += 13;
    //num = Math.floor(random(26, 263421));
    cc++;
  }
  
  else {
    //save("img.png")
    noLoop();
  }
}