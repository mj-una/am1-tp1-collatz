// collatz
// prueba 2
// 4-6-23

let cant = 100;
let velocidad = 1;
let cc = 0;
let escala = 2;

let previo = true;

let num, sec, par;
let maxNum, saltar;
;
let col = 25;

let o_x, o_y; // origen
let p_x, p_y; // puntero
let d_x, d_y; // desplazamiento

let distancia = 30;

let anguloPar = 0.16;
let anguloImpar = -0.21;

let ang = 0;

function setup() {
  createCanvas(512, 512);
  
  num = 26342;
  np = 6;
  
  maxNum = Number.MAX_VALUE - 1;
  saltar = false;
  
  o_x = width / 2;
  o_y = height;
  
  p_x = o_x;
  p_y = o_y;
  
  d_x = 0;
  d_y = 0;
  
  background("grey");
  
  translate(o_x, o_y);
  noStroke();
  fill("yellow");
  circle(0, 0, 50);
}

function draw() {
  push();
  translate(o_x, o_y);
  scale(0.5);
  
  if (cc < cant) {
    //noStroke();

    sec = np;
    //sec = num;
      
    stroke(255, 0, 0, col);
    strokeWeight(2);
      
    for (let i = velocidad * 500; i >= 1; i--) {
      console.log("fr: " + frameCount + "    __num: " + np + "    __sec: " + sec);

      if (sec > 1 && !saltar) {
        
        translate(d_x, d_y);
        rotate(ang);
        
        line(0, 0, 0, -distancia);
        
        if (sec % 2 == 0) {
          sec = sec / 2;
          ang += anguloPar; 
        }
        else {
          if (3 * sec  + 1 < Number.MAX_VALUE) {    
            sec = 3 * sec + 1;
            ang += anguloImpar; 
          }
          else {
            saltar = true;
          }
        }
        
        d_x = 0;
        d_y = -distancia;

        p_x += d_x + o_x;
        p_y += d_y + o_y;   
        
      }
      else {
        //num--;
        //sec = num;
        i = 0;
        np++;
        saltar = false;
        if (frameCount >= 300) noLoop();
        //noLoop();
        
        o_x = width / 2;
        o_y = height;

        p_x = o_x;
        p_y = o_y;

        d_x = 0;
        d_y = 0;
        
        ang = 0;
      }
    }

/*
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
*/
    num += 13;
    //num = Math.floor(random(26, 263421));
    cc++;
  }
  
  else {
    //save("img.png")
    noLoop();
  }
  pop();
}