 /** This is our final project in which we created the game " MoBi the Fish " 
  * The objective of this game is to use your fish (MoBi) and swim across the sea and eat smaller fish
  * As you eat these fish you will gain points and your fish will become bigger.
  * If you get eaten by a bigger fish the game will end.
  * However as your score increases, the fishes speed will also increase making it harder to dodge the fish.
  * The game consists of 4 screens Starting Screen, Playing Screen, Game Over Screen , Winning screen
  * Game starts with starting screen, when a key is pressed then it goes to playing screen, 
  * Project was created using Functions, If Statements / Booleans, Animations, Variables 
  * Made by Moiz Ahmed, 
  * Date: June 6 2016
  * ICS2O1-03
 */
// User's Fish Variables
var mobiX = 60;
var mobiY = 173;
var mobiSize = 55;
var xFish1 = 200; // enemy fishes positioning + size variables ( lines 16-32)
var xFish2 = 200;
var xFish3 = 200;
var xFish4 = 200;
var leftFish1 = 200;
var leftFish2= 200;
var fish1Size = 70;
var fish2Size = 44;
var fish3Size = 53;
var fish4Size = 91;
var leftFish1Size = 81;
var yFish1 = 10;
var yFish2 = 70;
var yFish3 = 209;
var yFish4 = 240;
var yLeftFish1 = 301;
// fish speed variables
var xFish1Speed = 1.5;
var xFish2Speed = 2;
var xFish3Speed = 3;
var xFish4Speed = 1.5;
var leftFish1Speed = 1.5;

// starting screen variables
var popY = 100;
var bubbleY = 100;
var xPatrick= 377;
var yPatrick=350;
var bodySize= 21;
var tunaX = 100;
var centerX = 100;
var fishX = -42;
var fishY = 195;
var score = 0;
var X = 0;
// game over screen variables
var end = createFont("fantasy", 20);
var endMobiSize = 129;
var endMobi = -573;
var endMobiY = -254;
var popY = 100;
var bubbleY = 100;
var waterX = 100;
var swimX = 59;
var gillsX = 73;
// winning screen variables
var leftX = 45;
var rightX = 370;
var sunRadius = 100;
// user controlled fish speed
var mobiSpeed =2;
// arrow key instruction
var instructionX = 106;

/**This function draws one fish going right*/
var drawRightFish = function(centerX,centerY,bodyLength,bodyHeight,tailWidth,eyeSize,bodyColor, rotation){
    noStroke();
    fill(bodyColor);
    pushMatrix();
    rotate(rotation);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = tailWidth;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
    centerX-bodyLength/2-tailWidth, centerY-tailHeight,
    centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(41, 41, 41);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5+eyeSize,     bodyHeight/5+eyeSize);
    popMatrix();
};

/**This function draws one fish going left*/
var drawLeftFish = function(centerX,centerY,bodyLength,bodyHeight,tailWidth,eyeSize,bodyColor, rotation){
   noStroke();
    fill(bodyColor);
    pushMatrix();
    rotate(rotation);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = tailWidth;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
    centerX-bodyLength/2-tailWidth, centerY-tailHeight,
    centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(41, 41, 41);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5+eyeSize,     bodyHeight/5+eyeSize);
    popMatrix();
};

// Functions 
/**This function draws one bubble*/
var drawbubble = function(bubbleX,bubbleY,size){
    strokeWeight(2.5);
    stroke(100, 255, 255, 100);
    fill(150, 255, 255, 100);
    ellipse(bubbleX,bubbleY,size,size);
    noFill();
    stroke(230, 255, 255, 100);
    arc(bubbleX,bubbleY,size/1.25,size/1.25,180,300);
};

/** This function draws the sand*/
var drawSand = function(sandX,sandY){
    strokeWeight(0.75);
    stroke(0, 0, 0);
    point(sandX,sandY);

};

/** This fucnction draws Rocks*/
var drawRock = function (rockX,rockY,rockWidth,rockHeight){
    // draw a rock with the given parameters
    image(getImage("cute/Rock"), rockX, rockY,rockWidth,rockHeight); 
    
};

/** This function draws the enemy fish.*/
var drawFish = function(centerX,centerY,bodyLength,bodyHeight,tailWidth,eyeSize,bodyColor,stripe,goLeft){
    noStroke();
    fill(bodyColor);
    // body
   
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    
    // Make fish come from other direction    
    
    if(goLeft === true){
        // tail
        var tailWidth = tailWidth;
        var tailHeight = bodyHeight/2;
        triangle(centerX+bodyLength/2, centerY, // this is where the tail joins     the body
                 centerX+bodyLength/2+tailWidth, centerY-tailHeight, // top        part of the tail
                 centerX+bodyLength/2+tailWidth, centerY+tailHeight); // bottom     of the tail
        // eye
        fill(33, 33, 33);
        ellipse(centerX-bodyLength/4, centerY, bodyHeight/5+eyeSize, bodyHeight/5+eyeSize);
    } else {
    // tail
    var tailWidth = tailWidth;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY, // this is where the tail joins the     body
    centerX-bodyLength/2-tailWidth, centerY-tailHeight, // top part of the tail
    centerX-bodyLength/2-tailWidth, centerY+tailHeight); // bottom of the tail
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5+eyeSize, bodyHeight/5+eyeSize);
    }
    
    // Stripe on fish
    if(stripe === true){
    stroke(0, 0, 0);
    strokeWeight(2);
    var topX = centerX;
    var topY = centerY+bodyHeight/2;
        
        
    bezier(topX, topY,
    topX+bodyLength/4, topY-bodyHeight* 1/4,
    topX-bodyLength/4, topY-bodyHeight* 3/4,
    topX, topY-bodyHeight);
    }
    
    
    
  
    


};

// The Starting Screen
var drawStartingScreen = function (){
    fill(82, 203, 240);
    rect(X,0,408,411);
    
    // Yellow fish
    noStroke();
    fill(245, 165, 46);
    triangle(fishX+244,fishY,fishX+264,fishY+26,fishX+241,fishY+26);
    triangle(fishX+240,fishY+97,fishX+277,fishY+57,fishX+238,fishY+26);
    fill(0, 0, 0);
    ellipse(fishX+279,fishY+50,15,15);
    fill(255, 187, 0);
    ellipse(fishX+254,fishY+50,59,67);
    fill(255, 187, 0);
    triangle(fishX+234,fishY+53,fishX+208,fishY+14,fishX+208,fishY+83);
    fill(0, 0, 0);
    ellipse(fishX+273,fishY+50,15,15);
    fill(245, 165, 46);
    triangle(fishX+253,fishY+70,fishX+247,fishY+55,fishX+261,fishY+53);
    fill(255, 255, 255);
    ellipse(fishX+269,fishY+45,5,5);
    ellipse(fishX+284,fishY+47,4,4);
    
    //Glare
    pushMatrix();
    rotate(29);
    fill(225, 223, 245);
    rect(X+65,-46,2,112);
    rect(X+105,-67,2,141);
    rotate(-4);
    rect(X+154,-78,2,162);
    rotate(-9);
    rect(X+199,-54,2,156);
    rotate(-21);
    rect(X+241,12,2,160);
    rotate(-7);
    rect(X+274,26,2,154);
    rotate(-2);
    rect(X+309,10,2,153);
    popMatrix();
    
    //Text on starting scene
    fill(255, 255, 255);
    var title = createFont("ravie", 20);
    textFont(title, 60);
    text("MoBi ", X+89,54,220,186);
    textSize(34);
    text("THE ", X+150,112,220,186);
    textSize(50);
    text("FISH ", X+122,146,220,186);
    fill(255, 255, 255);
    var starting = createFont ( "IMPACT" , 25);
    textFont(starting);
    text(" PRESS ANY KEY TO START ", X+83,321);
    
    // Bubbles
    drawbubble(X+121,popY+112,42);
    drawbubble(X+153,popY+235,14);
    drawbubble(X+255,bubbleY+112,21);
    drawbubble(X+205,bubbleY+42,28);
    drawbubble(X+76,popY+224,32);
    drawbubble(X+332,bubbleY-7,26);
    drawbubble(X+249,popY+216,39);
    drawbubble(X+180,bubbleY-34,26);
    drawbubble(X+357,popY+250,22);
    drawbubble(X+83,bubbleY+4,39);
    drawbubble(X+357,bubbleY+124,33);
    drawbubble(X+62,bubbleY+49,22);
    drawbubble(X+270,bubbleY-30,39);
    drawbubble(X+301,popY+10,39);
    drawbubble(X+297,popY+114,39);
    drawbubble(X+214,popY-1,39);
    drawbubble(X+128,popY-9,39);
};
 
// This function draws the playing scene    
var drawScene = function (){
    background(90, 181, 209); 
    noStroke();
    fill(194, 178, 128);
    rect(0,328,400,111);
    strokeWeight(3);
    stroke(255, 255, 255);
    drawSand(10,340);
    drawSand(25,357);
    drawSand(40,340);
    drawSand(55,341);
    drawSand(70,334);
    drawSand(80,334);
    drawSand(100,343);
    drawSand(130,350);
    drawSand(154,354);
    drawSand(158,334);
    drawSand(186,339);
    drawSand(210,340);
    drawSand(223,339);
    drawSand(239,345);
    drawSand(249,351);
    drawSand(256,343);
    drawSand(275,334);
    drawSand(291,339);
    drawSand(301,345);
    drawSand(311,346);
    drawSand(314,349);
    drawSand(354,340);
    drawSand(10,340+20);
    drawSand(25,357+20);
    drawSand(40,340+20);
    drawSand(55,341+20);
    drawSand(70,334+20);
    drawSand(80,334+20);
    drawSand(100,343+20);
    drawSand(130,350+20);
    drawSand(154,354+20);
    drawSand(158,334+20);
    drawSand(186,339+20);
    drawSand(210,340+20);
    drawSand(223,339+20);
    drawSand(239,345+20);
    
    // Rocks    
    drawRock(40,366,25,32,0);
    drawRock(104,360,18,20,1);
    drawRock(302,328,77,50,0);
    drawRock(200,370,20,20,1);
    drawSand(249,351+20);
    drawSand(256,343+20);
    drawSand(275,334+20);
    drawSand(291,339+20);
    drawSand(301,345+20);
    drawSand(311,346+20);
    drawSand(314,349+20);
    drawSand(354,340+20);
    
    // Rocks    
    drawRock(40,366,25,32,0);
    drawRock(104,360,18,20,1);
    drawRock(302,328,77,50,0);
    drawRock(200,370,20,20,1);
    drawRock(250,322,39,29,9);
    drawRock(139,329,31,20,1);
    drawRock(23,329,31,35,1);
    
    // Fishes    
    drawFish(xFish1+fish1Size*0.21,yFish1+fish1Size*0.60,fish1Size*0.83    ,fish1Size*0.27,fish1Size*0.40,fish1Size*0.03,color(179, 11, 179),true,true);
    drawFish(xFish2-fish2Size*0.75,yFish2+fish2Size*1,fish2Size*0.40,fish2Size*0.30,fish2Size*0.18,fish2Size*0.03,color(242, 175, 242), false, false);
    drawFish(xFish3+fish3Size*0.82,yFish3+fish3Size*0.35,fish3Size*0.45,fish3Size*0.31,fish3Size*0.21,fish3Size*0.03,color(255, 0, 0), false, false);
    drawFish(xFish4-fish4Size*1.50,yFish4+fish4Size*0.60,fish4Size*0.41,fish4Size*0.40,fish4Size*0.13,fish4Size*0.03,color(255, 244, 25), true, false);
    drawFish(leftFish1+leftFish1Size*2.30,yLeftFish1+leftFish1Size*0.67,leftFish1Size*0.57,leftFish1Size*0.40,leftFish1Size*0.13,leftFish1Size*0.03,color(59, 117, 49), true, true);
   
    // Images
    pushMatrix();
    rotate(9);
    image(getImage("cute/ChestOpen"),330-200,298,53,56);
    popMatrix(); 
    image(getImage("cute/GemOrange"),279-200,367,25,26);
    image(getImage("cute/GemBlue"),297-200,367,25,26);
    image(getImage("cute/GemOrange"),268-200,360,25,26);
    image(getImage("cute/GemBlue"),271-200,376,25,26);
    image(getImage("cute/GemGreen"),295-200,375,25,26);
    image(getImage("cute/GemGreen"),307-200,372,21,22);
    
    //Patrick
    noStroke();
    fill(255, 127, 187);
    ellipse(xPatrick+bodySize*0.06,yPatrick-bodySize*0.29,bodySize*2.63,bodySize*0.51); // arms
    ellipse(xPatrick+bodySize*0.04,yPatrick+bodySize*0, bodySize*1.12,bodySize*1.16); // body
    ellipse(xPatrick+bodySize*0.02, yPatrick-bodySize*0.51, bodySize*0.65, bodySize*2.45); // face
    ellipse(xPatrick-bodySize*0.25,yPatrick+bodySize*0.76,bodySize*0.44,bodySize*1.07); // legs
    ellipse(xPatrick+bodySize*0.29,yPatrick+bodySize*0.76,bodySize*0.44,bodySize*1.07); // legs
    
    // Eyes
    strokeWeight(bodySize*0.01);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    ellipse(xPatrick-bodySize*0.1,yPatrick-bodySize*0.96,bodySize*0.25,bodySize*0.30); // left eye
    ellipse(xPatrick+bodySize*0.16,yPatrick-bodySize*0.96,bodySize*0.25,bodySize*0.30); // right eye
    strokeWeight(bodySize*0.08);
    point(xPatrick-bodySize*0.05,yPatrick-bodySize*0.96); // left eye ball
    point(xPatrick+bodySize*0.10,yPatrick-bodySize*0.96); // right eye ball
    
    // EyeBrows
    strokeWeight(bodySize*0.08); 
    line(xPatrick-bodySize*0.16,yPatrick-bodySize*1.17,xPatrick-bodySize*0.05,yPatrick-bodySize*1.2); //     left eye brow
    line(xPatrick+bodySize*0.11,yPatrick-bodySize*1.22,xPatrick+bodySize*0.21,yPatrick-bodySize*1.19);      // right eye brow
    
    //mouth
    strokeWeight(bodySize*0.01);
    line(xPatrick-bodySize*0.20,yPatrick-bodySize*0.57,xPatrick+bodySize*0.21,yPatrick-bodySize*0.57);
    
    //Spots
    stroke(255, 0, 123);
    strokeWeight(bodySize*0.02);
    point(xPatrick+bodySize*0,yPatrick-bodySize*1.57);
    point(xPatrick+bodySize*0.10,yPatrick-bodySize*1.53);
    point(xPatrick-bodySize*0.05,yPatrick-bodySize*0.52);
    point(xPatrick+bodySize*0.13,yPatrick-bodySize*1.36);
    point(xPatrick-bodySize*1.1,yPatrick-bodySize*0.22);
    strokeWeight(bodySize*0.05);
    point(xPatrick+bodySize*0.04,yPatrick-bodySize*0.03);
    strokeWeight(bodySize*0.02);
    point(xPatrick-bodySize*0.34,yPatrick-bodySize*0.25);
    point(xPatrick+bodySize*0.77,yPatrick-bodySize*0.25);
    
    //Boxers
    noStroke();
    fill(105, 201, 105);
    rect(xPatrick+bodySize*0.06,yPatrick+bodySize*0.35,bodySize*0.47,bodySize*0.41);
    rect(xPatrick-bodySize*0.5,yPatrick+bodySize*0.35,bodySize*0.47,bodySize*0.41);
    rect(xPatrick-bodySize*0.53, yPatrick+bodySize*0.1, bodySize*1.11, bodySize*0.47,20);
    
    // Boxer's design
    fill(136, 72, 232);
    ellipse(xPatrick-bodySize*0.04,yPatrick+bodySize*0.22,bodySize*0.13,bodySize*0.17);
    ellipse(xPatrick+bodySize*0.04,yPatrick+bodySize*0.27,bodySize*0.22,bodySize*0.17);
    ellipse(xPatrick+bodySize*0.13,yPatrick+bodySize*0.23,bodySize*0.13,bodySize*0.17);
    ellipse(xPatrick-bodySize*0.44,yPatrick+bodySize*0.67,bodySize*0.11,bodySize*0.17);
    ellipse(xPatrick+bodySize*0.48,yPatrick+bodySize*0.66,bodySize*0.11,bodySize*0.17);
    
    //Score
    fill(0, 0, 0);
    textSize(24);
    text("Score",20,20);
    text(score,40,40);
    
    // instruction
    fill(0, 0, 0);
    textSize(20);
    text(" USE ARROW KEYS TO MOVE ", instructionX, 23 );
    
    // MOBI PLAYING
    noStroke();
    fill(245, 165, 46);
    triangle(mobiX+mobiSize*2.44,mobiY+mobiSize*0,mobiX+mobiSize*2.64,mobiY+mobiSize*0.26,mobiX+mobiSize*2.41,mobiY+mobiSize*0.26);
    triangle(mobiX+mobiSize*2.40,mobiY+mobiSize*0.97,mobiX+mobiSize*2.77,mobiY+mobiSize*0.57,mobiX+mobiSize*2.38,mobiY+mobiSize*0.26);
    fill(0, 0, 0);
    ellipse(mobiX+mobiSize*2.79,mobiY+mobiSize*0.50,mobiSize*0.15,mobiSize*0.15);
    fill(255, 187, 0);
    ellipse(mobiX+mobiSize*2.54,mobiY+mobiSize*0.50,mobiSize*0.59,mobiSize*0.67);
    fill(255, 187, 0);
    triangle(mobiX+mobiSize*2.34,mobiY+mobiSize*0.53,mobiX+mobiSize*2.08,mobiY+mobiSize*0.14,mobiX+mobiSize*2.08,mobiY+mobiSize*0.83);
    fill(0, 0, 0);
    ellipse(mobiX+mobiSize*2.73,mobiY+mobiSize*0.50,mobiSize*0.15,mobiSize*0.15);
    fill(245, 165, 46);
    triangle(mobiX+mobiSize*2.53,mobiY+mobiSize*0.70,mobiX+mobiSize*2.47,mobiY+mobiSize*0.55,mobiX+mobiSize*2.61,mobiY+mobiSize*0.53);
    fill(255, 255, 255);
    ellipse(mobiX+mobiSize*2.69,mobiY+mobiSize*0.45,mobiSize*0.05,mobiSize*0.05);
    ellipse(mobiX+mobiSize*2.84,mobiY+mobiSize*0.47,mobiSize*0.04,mobiSize*0.04);
};    


// this function draws the game won screen
var drawGameWonScreen = function (){
background(194, 226, 242);

//Water
noStroke();
fill(82, 203, 240);
rect(-24,191,446,400);

// clouds 
fill(255, 255, 255);
// left cloud
ellipse(leftX, 88, 126, 97);
ellipse(leftX+62, 91, 70, 60);
ellipse(leftX-62, 95, 70, 60);

// right cloud
ellipse(rightX, 56, 126, 97);
ellipse(rightX+62, 78, 70, 60);
ellipse(rightX-62, 58, 70, 60);


//Sun
fill(255, 170, 0);
ellipse(205, 76, sunRadius, sunRadius);


//Game Won Text
var f43 = createFont("fantasy", 20);
textFont(end, 20);
fill(93, 86, 196);
textSize(30);
text ( " YOU ARE NOW THE BIGGEST FISH!! " , 1, 191 );

};


// this function draws the game over screen
var drawGameOverScreen = function (){

background(194, 226, 242);

//Water
noStroke();
fill(82, 203, 240);
rect(-24,191,446,400);

// clouds 
fill(255, 255, 255);
// left cloud
ellipse(leftX, 88, 126, 97);
ellipse(leftX+62, 91, 70, 60);
ellipse(leftX-62, 95, 70, 60);

// right cloud
ellipse(rightX, 56, 126, 97);
ellipse(rightX+62, 78, 70, 60);
ellipse(rightX-62, 58, 70, 60);


//Sun
fill(255, 170, 0);
ellipse(205, 76, sunRadius, sunRadius);


//Game Over Text
var f43 = createFont("fantasy", 20);
textFont(end, 20);
fill(93, 86, 196);
textSize(45);
text ( " GAME OVER " , 100, 48 );
textSize(22);
text("score:" , 177,110);
text(score,236,110);




// MOBI PLAYING
pushMatrix();
rotate(181);
noStroke();
fill(245, 165, 46);
triangle(endMobi+endMobiSize*2.44,endMobiY+endMobiSize*0,endMobi+endMobiSize*2.64,endMobiY+endMobiSize*0.26,endMobi+endMobiSize*2.41,endMobiY+endMobiSize*0.26);
triangle(endMobi+endMobiSize*2.40,endMobiY+endMobiSize*0.97,endMobi+endMobiSize*2.77,endMobiY+endMobiSize*0.57,endMobi+endMobiSize*2.38,endMobiY+endMobiSize*0.26);
fill(0, 0, 0);
ellipse(endMobi+endMobiSize*2.79,endMobiY+endMobiSize*0.50,endMobiSize*0.15,endMobiSize*0.15);
fill(255, 187, 0);
ellipse(endMobi+endMobiSize*2.54,endMobiY+endMobiSize*0.50,endMobiSize*0.59,endMobiSize*0.67);
fill(255, 187, 0);
triangle(endMobi+endMobiSize*2.34,endMobiY+endMobiSize*0.53,endMobi+endMobiSize*2.08,endMobiY+endMobiSize*0.14,endMobi+endMobiSize*2.08,endMobiY+endMobiSize*0.83);
fill(0, 0, 0);
ellipse(endMobi+endMobiSize*2.73,endMobiY+endMobiSize*0.50,endMobiSize*0.15,endMobiSize*0.15);
fill(245, 165, 46);
triangle(endMobi+endMobiSize*2.53,endMobiY+endMobiSize*0.70,endMobi+endMobiSize*2.47,endMobiY+endMobiSize*0.55,endMobi+endMobiSize*2.61,endMobiY+endMobiSize*0.53);
popMatrix();




//Dead
pushMatrix();
rotate(21);
fill(255, 255, 255);
rect(256,97,4,19);
rotate(-41);
rect(123,243,4,19);
rotate(-1);
rect(130,244,5,28);
rotate(35);
rect(254,121,5,28);
popMatrix();

textFont(end, 20);
fill(93, 86, 196);
textSize(30);
text( " CLICK RESTART TO PLAY AGAIN " , 17, 304);

// Fish going right
drawRightFish(swimX+56,376,55,19,13,2,color(32, 115, 101),2     );
drawRightFish(waterX+266,259,44,32,25,2,color(230, 60, 156),0);
drawRightFish(waterX+218,362,61,21,19,2,color(219, 136, 48      ),0);
// Fish going left
drawLeftFish(gillsX+74,226,-38,22,-13,3,color(149, 98, 217      ),12);
drawLeftFish(gillsX+100,378,-55,18,-17,3,color(107, 185, 227      ),-9);

};


// This function allows the fishes to move
var draw = function() {

/** This function makes it so that only when a key is pressed the playing screen will show */    
    keyPressed = function (){
        
    };
    
    drawScene();

 // MOVEMENT OF MOBI FISH ( LINES 568 - 587 )  
    if ( keyIsPressed && keyCode === LEFT ){
        mobiX = mobiX - mobiSpeed ; 
        instructionX = instructionX + 400;
        
    }
    
    else if ( keyIsPressed && keyCode === RIGHT ){
        mobiX = mobiX + mobiSpeed;
        instructionX = instructionX + 400;
        
    }
    
    else if ( keyIsPressed && keyCode === UP ) {
        mobiY = mobiY - mobiSpeed;
        instructionX = instructionX + 400;
        
    }
    
     else if ( keyIsPressed && keyCode === DOWN ) {
        mobiY = mobiY + mobiSpeed;
        instructionX = instructionX + 400;
        
    }
    
// Movement of Fishes ( lines 597-602)   
    xFish1=xFish1-xFish1Speed;  // animates fishes going right ( exception: xFish1 is going left)
    xFish2=xFish2+xFish2Speed;
    xFish3=xFish3+xFish3Speed;
    xFish4=xFish4+xFish4Speed;
    leftFish1 = leftFish1 - leftFish1Speed;  // Animates fishes that are going left

   
// Making the fishes come back on the screen    
    if ( xFish1 < 10) {
        xFish1 = 480;  }
        
   if ( xFish2 > 480) {
        xFish2 = 10;  }
        
   if ( xFish3 > 400) {
        xFish3 = 10;  }    
        
    if ( xFish4 > 565) {
        xFish4 = 70;  } 
    
        if(leftFish1 < -250){
        leftFish1 = 350;
    }
    
    if(leftFish2 < -100){
        leftFish2 = 330;
    }

 //Animation to transition from starting screen to playing screen
    if ( keyIsPressed ){
        fishX+=40540;
        X+=40840;
    }
    


// Case 1 , MoBi overlapping xFish1(purple fish)
    
   if ( abs(mobiX - xFish1) < 226  && abs(mobiY - yFish1) < 20 && mobiSize > fish1Size ) {
        score += 1;
        mobiSize+=1;
        xFish1 = -200;
        xFish1Speed += 0.1;
        xFish2Speed += 0.1;
        xFish3Speed += 0.1;
        xFish4Speed += 0.1;
        leftFish1Speed += 0.1;
        
        
      
        
    }
    
    else if ( abs(mobiX - xFish1) < 140  && abs(mobiY - yFish1) < 20 && mobiSize < fish1Size ) {
        drawGameOverScreen();
        xFish1Speed = 0;
        score += 0;
        mobiSpeed = 0;
        
    }
    
// Case 2 Mobi overlapping xFish 2   
     if ( abs(mobiX - xFish2) > 140  && abs(mobiY - yFish2) < 14 && mobiSize > fish2Size ) {
        score += 1;
        mobiSize+=1;
       xFish2= xFish2 + 400;
      xFish1Speed += 0.1;
        xFish2Speed += 0.1;
        xFish3Speed += 0.1;
        xFish4Speed += 0.1;
        leftFish1Speed += 0.1;
        yFish2 += 40;
    }
    
    else if ( abs(mobiX -xFish2) > 168  && abs(mobiY - yFish2) <35 && mobiSize < fish2Size ){
       drawGameOverScreen();
       xFish2Speed = 0;
        score += 0;
        mobiSpeed = 0;
    }
    
    
 //Case 3 MoBi overlapping xFish3   
       if ( abs(mobiX - xFish3) > 120  && abs(mobiY - yFish3) < 21 && mobiSize > fish3Size ) {
          score+=1;
          mobiSize += 1;
         xFish3=xFish3 + 400;
           xFish1Speed += 0.1;
        xFish2Speed += 0.1;
        xFish3Speed += 0.1;
        xFish4Speed += 0.1;
        leftFish1Speed += 0.1;
        yFish3 -= 80;
        
   }
    
    else if ( abs(mobiX - xFish3) > 80 && abs(mobiY - yFish3) < 30 && mobiSize < fish3Size ){
      drawGameOverScreen();
      xFish3Speed = 0;
        score += 0;
        mobiSpeed = 0; 
    }
  
 //Case 4 MoBi overlapping xFish4

     if ( abs(mobiX - xFish4) > 319  && abs(mobiY - yFish4) < 29 && mobiSize > fish4Size ) {
       score+=1;
      mobiSize +=1;
      xFish4 += 400;
       xFish1Speed += 0.1;
        xFish2Speed += 0.1;
        xFish3Speed += 0.1;
        xFish4Speed += 0.1;
        leftFish1Speed += 0.1;
    }
    
   else if ( abs(mobiX - xFish4) > 260  && abs(mobiY - yFish4) < 10 && mobiSize < fish4Size ) {
      drawGameOverScreen();
        xFish4Speed = 0;
        score += 0;
        mobiSpeed = 0;
    }
  
// Case 5 MoBi overlapping leftFish1
     if ( abs(mobiX - leftFish1) < 40 && abs(mobiY - yLeftFish1) < 20  && mobiSize > leftFish1Size ) {
        leftFish1 =  - 400;
        score += 1;
        mobiSize += 1;
         xFish1Speed += 0.1;
        xFish2Speed += 0.1;
        xFish3Speed += 0.1;
        xFish4Speed += 0.1;
        leftFish1Speed += 0.1;
 }
    
    else if ( abs(mobiX - leftFish1) < 20 && abs (mobiY - yLeftFish1) < 15  && mobiSize < leftFish1Size ){
       drawGameOverScreen();
       leftFish1Speed = 0;
       score += 0;
       mobiSpeed = 0;
       
       
    
   }
    
    
// Control Fishes from going off the screen vertically

    if ( yFish2 >= 340 ) {
        yFish2 = 70;
        
    }
    
    if ( yFish3 <= 0 ) {
        yFish3 = 209;
    }
    
        
// Draw screen that shows up at beginning of game        
    drawStartingScreen();

// Draws game winning screen if score reaches 50    
    if (score===50){
        drawGameWonScreen();
    }
    

    
    };    



     


