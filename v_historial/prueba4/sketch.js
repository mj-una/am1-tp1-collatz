// collatz
// prueba 4
// https://editor.p5js.org/codingtrain/sketches/XjLDE7gu6
// Daniel Shiffman
// Martin Julio
// 20-6-23

let angleA = 0.15;
let angleB = -0.15;

let zoom = 0;

function setup() {
  createCanvas(windowWidth - 1, windowHeight - 1);
  background(0);
  frameRate(180);
}

function draw() {  
  push();
  if (frameCount % 500 == 0) cc = millis();
  
  scale(1 + zoom / 10);
  
  ciclo(frameCount);
  
  if (frameCount % 500 == 0) {
    cc = millis() - cc;
    console.log(frameCount + "  " + cc);
  }
  pop();
}

function ciclo(x) {
    let sequence = [];
    let n = x;
    do {
      if (n % 2 == 0) sequence.push(true);
      else sequence.push(false);
      n = collatz(n);
    } while (n != 1);
    sequence.push(false);
    sequence.reverse(); 

    let len = 5;
    
    resetMatrix();
    translate(width/2, height);
    for (let j = 0; j < sequence.length; j++) {
      if (sequence[j]) {
        rotate(angleA);
      } else {
        rotate(angleB);
      }
      strokeWeight(2);
      stroke(255, 10);
      line(0, 0, 0, -len);
      translate(0, -len);
    }
}

function collatz(n) {
  // even
  if (n % 2 == 0) {
    return n / 2;
    // odd
  } else {
    return (n * 3 + 1)/2;
  }
}

function mousePressed() {
  
  angleA = random(0.10, 0.2).toFixed(3);
  angleB = random(-0.18, -0.12).toFixed(3);
  
  console.log(angleA);
  console.log(angleB);

  setup();
}

function keyPressed() {
  
  if (key == 'o' || key == 'O') zoom--;
  if (key == 'i' || key == 'I') zoom++;
  
  console.log("z: " + (1 + zoom / 10));
}