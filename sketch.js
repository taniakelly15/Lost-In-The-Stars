let MerryCsound;
let spaceshuttlesound;
let lookingsound;
let Steve;
let Gods;
let stars;
let centerPointX;
let centerPointY;
let radiusx;
let angle;
let x;
let y;
let z;
let centx;
let centy;
let centz;
let h;
let ang;
let C = 1;
let D = 1;
let A = 1;
let E = 1;
let F = 1;
let B = -10;

let timer;
let counter;
let interval;

//let textu=[];//texture
let rot = []; //rotation
let radius = []; //size
let speed = []; //speed of rotation
let orbit = []; //obitational radius

//let radiusplanet;

function preload() {
  spaceshuttle = loadModel("assets/Space.obj", true);
  mercurytexture = loadImage("assets/spaceship.jpg");
  shuttletexture = loadImage("assets/shuttle.jpg");
  black = loadImage("assets/black.jpg");
  mars = loadImage("assets/mars.jpg");
  mercury = loadImage("assets/neptune.jpg");
  shuttlesound = loadSound("assets/spaceshuttlesound.mp3");
  lookingsound = loadSound("assets/Lookin.mp3");
  Steve = loadSound("assets/Steve.mp3");
  Merry = loadSound("assets/Merry.mp3");
  Gods = loadSound("assets/GodS.mp3");
  jupiter = loadImage("assets/jupiter.jpg");
  moon = loadImage("assets/moon.jpg");
  earth = loadImage("assets/earth.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  shuttlesound.play();
  shuttlesound.loop();
  stars = createGraphics(windowWidth * 2, windowHeight * 2);
  //  createLoop()
  centerPointX = windowWidth / 2;
  centerPointY = windowHeight / 2;

  radiusring = 20;
  radiusplanet = 1;
  radiusplanet2 = 1;
  radiusplanet3 = 0.1;
  radiusplanet4 = 1;
  radiusplanet5 = 1;
  angle = 10;
  ang = -220;

  //timer
  timer = createP();
  interval = setInterval(timeIt, 500);
  counter = 0;

  //tars = createGraphics(width * 2, height * 2);
  //stars.background(0);
  for (let i = 0; i < 900; i++) {
    stars.strokeWeight(random(0.000001, 2.5));
    stars.stroke("white");
    stars.point(random(0, windowWidth), random(0, windowHeight));
    //stars.ellipse(starX, starY, random(0.001,2), random(0.001,2));
  }
  noStroke();

  for (let i = 0; i < 9; i++) {
    rot[i] = random(0, 100);
    orbit[i] = random(20, 50);
    radius[i] = random(4.5, 15);
    speed[i] = random(0.01, 0.003);
  }
}
  

/* function starTimer(radiusplanet = 2){
     
}
 
  
function stopTimer(){
  clearInterval(interval);
   
}*/

function timeIt() {
  //timer.html(counter);
  counter++;

  if (counter == 4) {
    lookingsound.play();
  }
  if (counter == 25) {
    Steve.play();
  }
  if (counter == 72) {
    Merry.play();
  }
  if (counter == 108) {
    Gods.play();
  }
  if (counter == 133) {
    counter--;
  }
}

function draw() {
  loop();
  if (counter >= 0 && counter < 133) {
    background(0);

    for (let i = 0; i < 10; i++) {
      push();
      noStroke();
      let aniX = sin(rot[i]) / orbit[i];
      let aniY = cos(rot[i]) / orbit[i];
      // rotateZ ( sin(rot[i]) / orbit[i]);
      translate(aniX, aniY, B);
      let starX = -windowWidth / 2; //width limit
      let starY = -windowHeight / 2;
      img = image(stars, starX, starY);
      pop();
      rot[i] += speed[i];
      starX++;
      starY++;
    } //stars rotation

    //camera(0, 0, 20 + sin(frameCount * 0.01) * 10, windowWidth, windowHeight, 0, 0, 1, 0);
    //  orbitControl(10,10,10);
    ambientLight(255);
    pointLight(255, 255, 255, 0, 0, 0);

    //Shuttle
    //strokeWeight(0.3);
    noStroke();
    push();
    rotateX(54.4); //fix shuttle position
    rotateY(-15.75);
    // rotateZ(200);
    rotateZ(18.82); // fix shuttle position
    //translate(0, -200, 100);
    translate(
      /*-(mouseX-centerPointX)*/ 20,
      /*-(mouseY-centerPointY)*/ -290,
      200
    ); /* (mouseX - centerPointX)/1400); */ // shuttle position
    //translate(0, -(mouseY-centerPointY), 0)
    rotateX(-(mouseY - centerPointY) / 1500); //shuttle incline
    rotateY((mouseX - centerPointX) / 800);
    //rotateZ((mouseX - centerPointX) / 4000);
    ambientMaterial(255, 255, 255);
    texture(shuttletexture);
    model(spaceshuttle);
    pop();

    //Ring
    let Y = sin(frameCount / 100) * 5;
    let Z = cos(frameCount / 100) * 5;

    push();
    strokeWeight(0.05);
    rotateZ(millis(500) / 500);

    //let scaleXValue = centerPointX+random();
    //let scaleYValue= centerPointY+random();
    translate(0, Y * 5, Z / 10);
    texture(mercurytexture);
    torus(radiusring, radiusring / 5);
    //
    radiusring++;

    pop();

    if (counter > 3) {
      push();
      texture(mars);
      translate(-120, Y, C);
      rotateZ(millis(500) / -20000);
      // radiusplanet = 3;
      sphere(radiusplanet);
      C = 0.3 + C++;
      pop();

      push();
      texture(jupiter);
      translate(-20, -85, A);
      rotateZ(millis(500) / -20000);
      // radiusplanet = 3;
      sphere(radiusplanet3);
      A = 0.2 + A++;
      pop();

      //  B = 0.08 + B++;
      // sphere(radiusplanet);
      //radiusplan;
    }
    if (counter > 4 && counter < 5.5) {
      //  shuttlesound.stop();
      //  lookingsound.play();
    }

    if (counter > 11 && counter < 25) {
      radiusplanet = 0.09 + radiusplanet++;
      radiusplanet3 = 0.01 + radiusplanet3++;
    }

    if (counter > 25) {
      push();
      //rdiusplanet=20;
      // rotateZ((millis(500)/-20000));
      translate(150, -Y, D);
      texture(mercury);
      sphere(radiusplanet2);
      D = 0.3 + D++;
      pop();
    }
    // perspective(windowWidth);
    if (counter > 26 && counter < 45) {
      radiusplanet2 = 0.01 + radiusplanet2++;
      radiusplanet3 = 0.01 + radiusplanet3++;
    }

    if (counter > 45) {
      push();
      //rdiusplanet=20;
      // rotateZ((millis(500)/-20000));
      translate(50, 0, E);
      texture(moon);
      sphere(radiusplanet4);
      E = 0.8 + E++;
      pop();
    }

    if (counter > 45 && counter < 53) {
      radiusplanet4 = 0.09 + radiusplanet4++;
    }

    if (counter > 70) {
      push();
      //rdiusplanet=20;
      // rotateZ((millis(500)/-20000));
      translate(-60, 80, F);
      texture(earth);
      sphere(radiusplanet5);
      F = 0.9 + F++;
      pop();
    }
    if (counter > 65 && counter < 100) {
      radiusplanet5 = 0.07 + radiusplanet5++;
    }
    if (counter > 1 && counter < 107) {
      B = 0.1 + B++;
    }
    if (counter > 107 && counter < 135) {
      B = 0.25 + B++;
    }
  }
}
