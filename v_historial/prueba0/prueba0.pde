// collatz
// prueba 0
// 3-6-23
  
int num = 4;
int sec;
int pasos = 0;
int maxSec, maxPasos;
int velocidad = 10;
int maxNum = Integer.MAX_VALUE - 1;
boolean saltar = false;

float dist = 10;

float anguloPares = 0.015;
float anguloImpares = -0.02;

float orx, ory;
float ang = 0;

FloatList fps;

boolean imp;
int contImp;

void setup() {
  size(51, 51);
  sec = num;
  
  fps = new FloatList();
  
  orx = width / 2.0;
  ory = height * 1.0;
  
  imp = false;
  contImp = 0;
  
  println(Integer.MAX_VALUE);
  println(maxNum);
  
  frameRate(140);
}

void draw() {
  background((frameCount % 25) * 10);
  stroke(0);
  strokeWeight(2);
  
  //if (sec < loteMax) lote = sec;
  //else lote = loteMax;
  
  for (int i = velocidad * 500; i > 1; i--) {
    if (imp) {
      if (contImp == 0) println(" ");
      println("m.pas: " + maxPasos +
      "    __fr: " + frameCount + "    __num: " + num +
      "    __SEC: " + sec+ "    __m.sec: " + maxSec +
      "    __d.end: " + (maxNum - maxSec));
      
      if (contImp < 10) contImp++; 
      else imp = false;
    }
    
    //translate(orx, ory);
    //line (0, 0, 0, -dist);
    
    if (sec > 1 && !saltar) {
      if (sec % 2 == 0) {
        sec = sec / 2;
        //ang += anguloPares;
      }
    
      else {
        if (sec * 3 < maxNum) {
          sec = 3 * sec + 1;
          if (sec > maxSec) maxSec = sec;
          //ang += anguloImpares;
        }
        else {
          saltar = true;
          
          println(" ");
          println("FINAL ###");
          println(" ");
          println("m.pas: " + maxPasos + "    __%%: " +
          "    __fr: " + frameCount + "    __num: " + num +
          "    __SEC: " + sec+ "    __m.sec: " + maxSec +
          "    __d.end: " + (maxNum - maxSec));
          println(" ");
          println("### FINAL");
          
          noLoop();
        }
      }
      
      pasos++;
      //orx += cos(ang) * dist;
      //ory += sin(ang) * dist;
    }
    
    else {
      if (pasos > maxPasos) maxPasos = pasos;
      pasos = 0;
      num++;
      sec = num;
      saltar = false;
    }
  }
  ////num++;
  //if (num <= 1) {
  //  noLoop();
  //  //setup();
  //}
}

void keyPressed() {
  
  //if (key == 'r' || key == 'R') {
  //  anguloA = random(7, 10);
  //  anguloB = random(-9, -6);
  //  setup();
  //}
  
  if (key == 'o' || key == 'O') {
    fps.append(frameRate);
  }
  
  else if (key == 'p' || key == 'P') {
    println(" ");
    println(fps);
    noLoop();
  }
  
  else if (key == 'l' || key == 'L') {
    fps.clear();
    loop();
  }
  
  else {
    imp = true;
    contImp = 0;
  } 
}
