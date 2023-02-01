var startingVector;
var displacementVector;
var resultingVector;
var right1Vector;
var right2Vector;
var left1Vector;
var left2Vector;

var startingVectorV;
var displacementVectorV;
var resultingVectorV;
var move1V;
var move2V;
var move3V;
var move4V;
var move5V;
var move6V;
var move7V;
var move8V;
var move9V;
var move10V;
var move11V;
var move12V;


// var lines = [];

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  
  startingVector = createVector(0, 20);
  displacementVector = createVector(0, 90);
  right1Vector = createVector(20, 90);
  right2Vector = createVector(30, 70);
  left1Vector = createVector(-20, 90);
  left2Vector = createVector(-30, 70);
  
  startingVectorV = createVector(13, 13);
  displacementVectorV = createVector(60, 140);
  move1V = createVector(-40, -120);
  move2V = createVector(120, 40);
  move3V = createVector(-140, -60);
  move4V = createVector(-26, 0);
  move5V = createVector(-60, 140);
  move6V = createVector(40, -120);
  move7V = createVector(-120, 40);
  move8V = createVector(140, -60);
  move9V = createVector(0, -26);
  move10V = createVector(-140, -60);
  move11V = createVector(120, 40);
  move12V = createVector(-40, -120);
  move13V = createVector(60, 140);
  move14V = createVector(26, 0);
  move15V = createVector(60, -140);
  move16V = createVector(-40, 120);
  move17V = createVector(120, -40);
  move18V = createVector(-140, 60);

  
//   for (let i = 0; i < 9; i ++){
//     lines[i] = new LINE(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
//   }
  
}

function draw() {
  background(0);

  stroke('rgb(125, 188, 232)');
  
  ellipse(267, 205, 6);
  ellipse(333, 205, 6);
  
  ellipse(267, 395, 6);
  ellipse(333, 395, 6);
  
  ellipse(205, 267, 6);
  ellipse(205, 333, 6);
  
  ellipse(395, 267, 6);
  ellipse(395, 333, 6);

  noFill();
  
  //5_lines
  translate(width/2, height/2);

  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  //Middle
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //right
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //Left
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //far_right
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //far_left
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
  //Rotate
  startingVector.rotate(90);
  displacementVector.rotate(90);
  right1Vector.rotate(90);
  right2Vector.rotate(90);
  left1Vector.rotate(90);
  left2Vector.rotate(90);
  
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  //Middle
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //right
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //Left
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //far_right
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //far_left
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
  //Rotate
  startingVector.rotate(90);
  displacementVector.rotate(90);
  right1Vector.rotate(90);
  right2Vector.rotate(90);
  left1Vector.rotate(90);
  left2Vector.rotate(90);
  
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  //Middle
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //right
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //Left
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //far_right
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //far_left
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
  //Rotate
  startingVector.rotate(90);
  displacementVector.rotate(90);
  right1Vector.rotate(90);
  right2Vector.rotate(90);
  left1Vector.rotate(90);
  left2Vector.rotate(90);
  
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  //Middle
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //right
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //Left
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //far_right
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  //far_left
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
  
  //v_shape  
  line(startingVectorV.x, startingVectorV.y, startingVectorV.x, startingVectorV.y);
  
  resultingVectorV = p5.Vector.add(startingVectorV, displacementVectorV);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move1V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move2V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move3V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move4V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move5V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move6V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move7V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move8V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move9V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move10V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move11V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
    startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move12V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move13V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move14V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move15V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move16V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move17V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  startingVectorV = resultingVectorV;
  resultingVectorV = p5.Vector.add(startingVectorV, move18V);
  line(startingVectorV.x, startingVectorV.y, resultingVectorV.x, resultingVectorV.y);
  
  
  noLoop();
  
  
  translate(-300, -300);
  fill(255);
  noStroke();
  
  //edge
  triangle(300, 180, 295, 150, 305, 150);
  triangle(300, 120, 295, 150, 305, 150);
  triangle(300, 420, 295, 450, 305, 450);
  triangle(300, 480, 295, 450, 305, 450);
  triangle(420, 300, 450, 295, 450, 305);
  triangle(480, 300, 450, 295, 450, 305);
  triangle(180, 300, 150, 295, 150, 305);
  triangle(120, 300, 150, 295, 150, 305);
  
  //middle
  triangle(300, 260, 280, 300, 320, 300);
  triangle(300, 280, 300, 320, 340, 300);
  triangle(260, 300, 300, 280, 300, 320);
  triangle(300, 340, 280, 300, 320, 300);
  
  //top right
  triangle(335, 265, 370, 210, 390, 230);
  triangle(420, 180, 370, 210, 390, 230);
  //bottom right
  triangle(335, 335, 370, 390, 390, 370);
  triangle(420, 420, 370, 390, 390, 370);
  //top left
  triangle(265, 265, 230, 210, 210, 230);
  triangle(180, 180, 230, 210, 210, 230);
  //bottom left
  triangle(265, 335, 230, 390, 210, 370);
  triangle(180, 420, 230, 390, 210, 370);
  
  
}  

