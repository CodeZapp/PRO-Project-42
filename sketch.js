var hr, mn, sc; 
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);

  translate(windowWidth / 2, windowHeight / 2);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr % 12, 0, 12, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  //drawing seconds hand
   push();
   rotate(scAngle);
  //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7); 
  line(0,0,100,0); 
  pop();

  //drawing minutes hand
  push();
  rotate(mnAngle);
  //rotate the hand based on angle calculated
  stroke(0,255,0);
  strokeWeight(7); 
  line(0,0,75,0); 
  pop();

    //drawing hours hand
    push();
    rotate(hrAngle);
    //rotate the hand based on angle calculated
    stroke(0,0,255);
    strokeWeight(7); 
    line(0,0,50,0); 
    pop();

    //drawing the arcs
     strokeWeight(10); 
     noFill();
      //Seconds 
     stroke(255,0,0); 
     arc(0,0,300,300,0,scAngle); 
     //Minutes 
     stroke(0,255,0); 
     arc(0,0,280,280,0,mnAngle); 
     //Hour 
     stroke(0,0,255); 
     arc(0,0,260,260,0,hrAngle);

  drawSprites();
}