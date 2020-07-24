//page 0:cover
//page 1:game 1 map
//page 2:game 1
//page 3:game 1 win
//page 4:game 1 fail
//page 5:game 2 map
//page
//page 7:game 2 
//page 8:game 2 win
//page 9:game 2 fail
//page 10:game 3 map
//page 11:game 3
//page 12:game 3 win
//page 13:game 3 fail
//page 14:get license
//page 6:introduce

/*var page;
var correct;
var looper1;*/



function preload() {
  // load any assets (images, sounds etc.) here
  img0=loadImage('assets/jiantou.jpg');
  img1=loadImage('assets/arrow.png');
  img1a=loadImage('assets/pegasus.jpg');
  img1b=loadImage('assets/peashooter.jpg');
  img1c=loadImage('assets/toast.jpg');
  imgd=loadImage('assets/license.png');
  imgm=loadImage('assets/mixer.PNG');
  imga1=loadImage('assets/horse.jpg');//x1
  imga2=loadImage('assets/bird.jpg');//x2
  img4=loadImage('assets/sad.png');
  imgb1=loadImage('assets/pea.jpg');//x3
  imgb2=loadImage('assets/gun.jpg');//x4
  imgc1=loadImage('assets/book.jpg');//x5
  imgc2=loadImage('assets/toast.jpg');//x6
  img=loadImage('assets/memory.jpg');
  imgb3=loadImage('assets/apple.jpg');//x7
  imgb4=loadImage('assets/banana.jpg');//x8
  imgc3=loadImage('assets/cup.jpg');//x9
  imgc4=loadImage('assets/rose.jpg');//x10
  imgc5=loadImage('assets/violin.jpg');//x11
  docter=loadImage('assets/docter.jpg');
  dialogue=loadImage('assets/dialogue.jpg');
  arrow1=loadImage('assets/arrow1.jpg');
  plate=loadImage('assets/plate.PNG');
  win=loadImage('assets/win.png');
  game=loadSound('assets/gamebgm.mp3');
  hint=loadImage('assets/hint.jpg');
  hink=loadImage('assets/hink.png');
  arrowa=loadImage('assets/a.jpg');
  hand=loadImage('assets/hand.jpg');
}

function setup() {
    
    game.setVolume(1);
    game.play();
    looper1 = new p5.SoundLoop(function(timeFromNow){
    game.play(timeFromNow);
    }, 102);

    //stop after 10 iteratios;
    looper1.maxIterations = 10;
    //start the loop
    looper1.start();
    
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
    background(255);
    page=0;

    x1=windowWidth*0.93;
    y1=windowHeight*0.07;
    x2=windowWidth*0.86;
    y2=windowHeight*0.41;

    x3=windowWidth*0.93;
    y3=windowHeight*0.07;
    x4=windowWidth*0.86;
    y4=windowHeight*0.41;
    x7=windowWidth*0.927;
    y7=windowHeight*0.7637;
    x8=windowWidth*0.1;
    y8=windowHeight*0.857;

    x5=windowWidth*0.93;
    y5=windowHeight*0.07;
    x6=windowWidth*0.86;
    y6=windowHeight*0.41;
    x9=windowWidth*0.927;
    y9=windowHeight*0.7637;
    x10=windowWidth*0.1;
    y10=windowHeight*0.857;
    x11=windowWidth*0.08;
    y11=windowHeight*0.23;
    

    
    
}


function doubler(v){
    console.log(v*2);
    }
    
function draw() {
    doubler(5);
    createCanvas(windowWidth,windowHeight);
    background(0);
    fill(255,100);
    ellipse(100, 50, 100, 80);
    ellipse(150, 50, 100, 80);
    ellipse(200, 50, 100, 80);
    ellipse(250, 50, 100, 80);

    fill(255,255);
    ellipse(100, 150, 100, 80);
    ellipse(150, 150, 100, 80);
    ellipse(200, 150, 100, 80);
    ellipse(250, 150, 100, 80);

    fill(100,255);
    ellipse(100, 200, 100, 80);
    ellipse(150, 200, 100, 80);
    ellipse(200, 200, 100, 80);
    ellipse(250, 200, 100, 80);

    fill(100);
    ellipse(100, 300, 100, 80);
    ellipse(150, 300, 100, 80);
    ellipse(200, 300, 100, 80);
    ellipse(250, 300, 100, 80);

    // your "draw loop" code goes here
    if(page==0){drawPage0();
    }else if(page==6){drawPage6();
    }else if(page==1){drawPage1();
    }else if(page==2){drawPage2();
    }else if(page==3){drawPage3();
    }else if(page==4){drawPage4();  
    }else if(page==5){drawPage5();
    }else if(page==7){drawPage7();
    }else if(page==8){drawPage8();
    }else if(page==9){drawPage9();
    }else if(page==10){drawPage10();
    }else if(page==11){drawPage11();
    }else if(page==12){drawPage12();
    }else if(page==13){drawPage13();
    }else if(page==14){drawPage14();   
    }else if(page==15){drawPage15();
    }
}

//cover
function drawPage0(){
    frameRate(999999);
    background(255,150,150);
    image(img0,width*0.77,0,width*0.23,height*0.25);
    textStyle(ITALIC);
    fill(0);
    textSize(width*0.025);
    text("In 2518\nWe have this magical machine to create something incredible",width*0.01,height*0.35);
    textStyle(BOLD);
    fill(20,150,150);
    textSize(width*0.15);
    text("Super Mixer",width*0.02, height*0.75);

    if(mouseX>width*0.77 && mouseX<width &&
        mouseY>0 && mouseY<height*0.25 && mouseIsPressed){
            page=6;
            bg=0;
    }    
}

/*function keyTyped() {
    if (key === " ") {
    saveCanvas("thumbnail.png");
   }
}*/


//introduce
function drawPage6(){
    frameRate(99999);
    background(255);
    var i=0;
    image(imgm,windowWidth*0.45,height*0.05,width*0.55,height*0.7);
    image(docter,width*0.01,height*0.5,width*0.1,height*0.5);
    image(dialogue,width*0.1,height*0.07,width*0.34,height*0.47);
    textSize(width*0.015); 
    textStyle(ITALIC); 
    fill(0);
    text("Click anywhere to continue",width*0.15,height*0.9);
    
    
    draw=function(){
        if(i==1){
            fill(50,200,200);
            textStyle(BOLD);
            textSize(width*0.018);
            text("Look!\nThis is the magical machine.",width*0.15,height*0.16);
            textSize(width*0.03);
            fill(200,50,50);
            text("The super mixer!",width*0.15,height*0.27);
        }
        if(i==2){
            fill(255);
            textStyle(BOLD);
            noStroke();
            rect(width*0.146,height*0.13,width*0.2583,height*0.235);
            fill(50,200,200);
            textSize(width*0.018);
            text("You can create          \nyou what by putting two \nthings on the two 'hands' \nto mix them . ",width*0.15,height*0.16);
            fill(200,0,0);
            textSize(width*0.016);
            text("WHATEVER",width*0.285,height*0.16);
        }
        if(i==3){
            fill(255);
            noStroke();
            rect(width*0.146,height*0.13,width*0.2583,height*0.235);
            fill(50,200,200);
            textSize(width*0.018);
            textStyle(BOLD);
            text("Be creative so you can \ncreate something \nincredible.\nExciting! Isn't it?",width*0.15,height*0.16);
        }
        if(i==4){
            fill(255);
            noStroke();
            rect(width*0.146,height*0.13,width*0.2583,height*0.235);
            fill(50,200,200);
            textSize(width*0.018);
            textStyle(BOLD);
            text("But you are NOT allowed \nto operate this machine \nfreely UNTIL you get the ",width*0.15,height*0.16);
            fill(200,0,0);
            text("Operating License.",width*0.15,height*0.3);
        }
        if(i==5){
            fill(255);
            noStroke();
            rect(width*0.146,height*0.13,width*0.2583,height*0.235);
            fill(50,200,200);
            textSize(width*0.018);
            textStyle(BOLD);
            text("Just like you should \nget a driving license for \ndriving cars at your time.",width*0.15,height*0.16);
        }
        if(i==6){
            fill(255);
            noStroke();
            rect(width*0.146,height*0.13,width*0.2583,height*0.235);
            fill(50,200,200);
            textSize(width*0.018);
            textStyle(BOLD);
            text("Do you want to get \nyour operating licence?",width*0.15,height*0.16);
            fill(255, 204, 0);
            rect(width*0.25,height*0.3,width*0.08,height*0.08);
            fill(255);
            textSize(width*0.027);
            text("Sure!",width*0.258,height*0.36);
            noStroke()
            fill(255);
            rect(width*0.15,height*0.8,width*0.5,height*0.4);
            if(mouseIsPressed&&mouseX>width*0.25&&mouseX<width*0.33&&mouseY>height*0.3&&mouseY<height*0.38){
                    page=1;
                    bg=0;
            }
        }    
        if(i==7){
                    if(page==0){drawPage0();
                    }else if(page==6){drawPage6();
                    }else if(page==1){drawPage1();
                    }else if(page==2){drawPage2();
                    }else if(page==3){drawPage3();
                    }else if(page==4){drawPage4();  
                    }else if(page==5){drawPage5();
                    }else if(page==7){drawPage7();
                    }else if(page==8){drawPage8();
                    }else if(page==9){drawPage9();
                    }else if(page==10){drawPage10();
                    }else if(page==11){drawPage11();
                    }else if(page==12){drawPage12();
                    }else if(page==13){drawPage13();
                    }else if(page==14){drawPage14();   
                    }else if(page==15){drawPage15();   
                    } 
                }
        }
    
    mouseClicked = function() {
        if(i>=0&&i<6){
        i++;
        }        
        if(i==6&&mouseX>width*0.25&&mouseX<width*0.33&&mouseY>height*0.3&&mouseY<height*0.38){
            i=7;
        }
    }
}


//level map 1
function drawPage1(){
  frameRate(7);
  a=random(0,255);
  b=random(0,255);
  c=random(0,255);
  background(255); 
  image(plate,0,0,width,height*0.16);
  textSize(width*0.054);
  fill(a,b,c);
  text("Welcome to the operating test!",width*0.08,height*0.11);
  textSize(width*0.02);
  fill(255, 204, 0);
  text("Firstly you should try the easiest one.",width*0.054,width*0.11);
  image(img1a,width*0.01,height*0.45,width*0.17,height*0.22);
  image(img1,width*0.2,height*0.52,width*0.05,height*0.07);
  image(arrow1,width*0.13,height*0.24,width*0.12,height*0.17);
  image(img1b,width*0.26,height*0.45,width*0.16,height*0.25);
  image(img1c,width*0.5,height*0.45,width*0.2,height*0.25);
  image(img1,width*0.45,height*0.52,width*0.05,height*0.07);
  image(img1,width*0.69,height*0.52,width*0.05,height*0.07);
  image(imgd,width*0.76,height*0.42,width*0.23,height*0.25);
  fill(100,170,150);
  textSize(width*0.024);
  text("Test 1 \nPegasus",width*0.03,height*0.75);  
  text("Test 2 \nPeashooter",width*0.28,height*0.75);
  text("Test 3 \nMemory Bread",width*0.53,height*0.75);
  //fill(200,70,70);
  //text("Congratulations!!! \nget the license~",1080,220);

  if(mouseX>width*0.01 && mouseX<width*0.18&&
     mouseY>height*0.45 && mouseY<height*0.76 && mouseIsPressed){
         page=2;
         bg=0;
  }
}

//game 1
function drawPage2(){

 frameRate(99999);
 background(255);
 image(imgm,width*0.15,height*0.3,width*0.65,height*0.65);
 strokeWeight(width*0.003);
 stroke(70);
 fill(225);
 rect(width*0.15,height*0.43,width*0.14,height*0.14);
 rect(width*0.655,height*0.53,width*0.14,height*0.14);
 //rect(width*0.39,height*0.79,width*0.1,height*0.11);
 image(plate,0,0,width*0.32,height*0.12);
 textSize(width*0.04);
 fill(0);
 text("Test 1 Pegasus",width*0.005,height*0.09);
 
 if(mouseIsPressed&&mouseX>(x1-width*0.07)&&mouseX<(x1+width*0.07)
 &&mouseY>(y1-height*0.07)&&mouseY<(y1+height*0.07)){ 
    x1=mouseX;
    x1n=x1; 
    y1=mouseY;
 }
 if(mouseIsPressed&&mouseX>(x2-width*0.07)&&mouseX<(x2+width*0.07)
 &&mouseY>(y2-height*0.07)&&mouseY<(y2+height*0.07)){ 
	x2=mouseX; 
    y2=mouseY;
 }
 image(imga1,x1-(width*0.07),y1-(height*0.07),width*0.14,height*0.14);
 image(imga2,x2-width*0.07,y2-height*0.07,width*0.14,height*0.14);

 if((((x1-width*0.07)>(width*0.13)&&(x1-width*0.07)<width*0.17&&(y1-height*0.07)>height*0.41&&(y1-height*0.07)<height*0.45)||
 ((x1-width*0.07)>(width*0.63)&&(x1-width*0.07)<width*0.675&&(y1-height*0.07)>height*0.51&&(y1-height*0.07)<height*0.55))&&
 (((x2-width*0.07)>(width*0.13)&&(x2-width*0.07)<width*0.17&&(y2-height*0.07)>height*0.41&&(y2-height*0.07)<height*0.45)||
 ((x2-width*0.07)>(width*0.63)&&(x2-width*0.07)<width*0.675&&(y2-height*0.07)>height*0.51&&(y2-height*0.07)<height*0.55))){
     correct=true;
 }else{
     correct=false;
 }
 
 if(correct==true){
     image(arrowa,width*0.23,windowHeight*0.83,width*0.14,height*0.14);
 }
 
 if(correct==true&&
    mouseX>width*0.39&&mouseX<width*0.49&&mouseY>height*0.79&&mouseY<height*0.9&&mouseIsPressed){
        page=3;
        bg=0;
 }
 if(correct==false&&
    mouseX>width*0.39&&mouseX<width*0.49&&mouseY>height*0.79&&mouseY<height*0.9&&mouseIsPressed){
        page=4;
        bg=0;
 }
}

//game 1 win
function drawPage3(){
 frameRate(99999);
 background(255);
 textSize(width*0.05);
 stroke(width*0.05);
 fill('rgba(100%,0%,100%,0.5)');
 text("COOL!\nYou get your pegasus!",width*0.05,height*0.3);
 image(img1a,width*0.65,height*0.15,width*0.35,height*0.4);
 noStroke();
 fill(255, 204, 0);
 ellipse(width*0.75,height*0.7,width*0.25,height*0.2);
 //fill(255, 204, 100);
 //ellipse(900, 450, 350, 150);
 fill(0);
 textSize(width*0.03);
 text("TO DO \n   Test 2",width*0.683,height*0.67);
 //text("Play with your \nPegasus",770,440);
 
 if(mouseX>width*0.5&&mouseX<width&&
    mouseY>height*0.5&&mouseY<height*0.9&&mouseIsPressed){
        page=5;
        pg=0;
    }
}

//game 1 fail
function drawPage4(){
 frameRate(99999);
 background(255);
 textSize(width*0.15);
 fill(10);
 text("fail",width*0.15,height*0.757);
 image(img4,width*0.4,height*0.53,width*0.15,height*0.3);
 fill(255, 204, 100);
 noStroke();
 rect(windowWidth*0.7,0,width*0.3,height*0.24);
 textSize(width*0.048);
 fill(10);
 text("TRY AGAIN",windowWidth*0.715,height*0.151);

 if(mouseX>windowWidth*0.715&&mouseX<windowWidth&&
    mouseY>0&&mouseY<height*0.24&&mouseIsPressed){
        page=2;
        pg=0;
    }
}

//game 2 map
function drawPage5(){
    frameRate(7);
    a=random(0,255);
    b=random(0,255);
    c=random(0,255);
    background(255); 
    image(plate,0,0,width,height*0.16);
    textSize(width*0.054);
    fill(a,b,c);
    text("Welcome to the operating test!",width*0.08,height*0.11);
    textSize(width*0.02);
    fill(255, 204, 0);
    text("Now you can try test 2.\nThis one is \nmore complicated.",width*0.15,width*0.11);
    image(img1a,width*0.01,height*0.45,width*0.17,height*0.22);
    image(img1,width*0.2,height*0.52,width*0.05,height*0.07);
    image(arrow1,width*0.36,height*0.24,width*0.12,height*0.17);
    image(img1b,width*0.26,height*0.45,width*0.16,height*0.25);
    image(img1c,width*0.5,height*0.45,width*0.2,height*0.25);
    image(img1,width*0.45,height*0.52,width*0.05,height*0.07);
    image(img1,width*0.69,height*0.52,width*0.05,height*0.07);
    image(imgd,width*0.76,height*0.42,width*0.23,height*0.25);
    fill(100,170,150);
    textSize(width*0.024);
    text("Test 1 \nPegasus",width*0.03,height*0.75);  
    text("Test 2 \nPeashooter",width*0.28,height*0.75);
    text("Test 3 \nMemory Bread",width*0.53,height*0.75);
    
  
    if(mouseX>width*0.26 && mouseX<width*0.42&&
       mouseY>height*0.45 && mouseY<height*0.75 && mouseIsPressed){
           page=7;
           bg=0;
    }

}



//game 2
function drawPage7(){
    frameRate(99999);
    background(255);
    image(imgm,width*0.15,height*0.3,width*0.65,height*0.65);
    strokeWeight(4);
    stroke(width*0.003);
    fill(225);
    rect(width*0.15,height*0.43,width*0.14,height*0.14);
    rect(width*0.655,height*0.53,width*0.14,height*0.14);
    //rect(width*0.39,height*0.79,width*0.1,height*0.11);
    image(plate,0,0,width*0.37,height*0.12);
    textSize(width*0.04);
    fill(0);
    text("Test 2 Peashooter",width*0.005,height*0.09);
 
    textStyle(ITALIC);
    textSize(width*0.0197);
    text("(You only need to choose 2 materials to mix.)",width*0.4,height*0.07576);

    if(mouseIsPressed&&mouseX>(x3-width*0.07)&&mouseX<(x3+width*0.07)
 &&mouseY>(y3-height*0.07)&&mouseY<(y3+height*0.07)){ 
    x3=mouseX;
    y3=mouseY;
 }
 if(mouseIsPressed&&mouseX>(x4-width*0.07)&&mouseX<(x4+width*0.07)
 &&mouseY>(y4-height*0.07)&&mouseY<(y4+height*0.07)){ 
	x4=mouseX; 
    y4=mouseY;
 }
 if(mouseIsPressed&&mouseX>(x7-width*0.07)&&mouseX<(x7+width*0.07)
 &&mouseY>(y7-height*0.07)&&mouseY<(y7+height*0.07)){ 
    x7=mouseX;
    y7=mouseY;
 }
 if(mouseIsPressed&&mouseX>(x8-width*0.07)&&mouseX<(x8+width*0.07)
 &&mouseY>(y8-height*0.07)&&mouseY<(y8+height*0.07)){ 
	x8=mouseX; 
    y8=mouseY;
 }
 image(imgb1,x3-(width*0.07),y3-(height*0.07),width*0.14,height*0.14);
 image(imgb2,x4-width*0.07,y4-height*0.07,width*0.14,height*0.14);
 image(imgb3,x7-(width*0.07),y7-(height*0.07),width*0.14,height*0.14);
 image(imgb4,x8-width*0.07,y8-height*0.07,width*0.14,height*0.14);

 if((((x3-width*0.07)>(width*0.13)&&(x3-width*0.07)<width*0.17&&(y3-height*0.07)>height*0.41&&(y3-height*0.07)<height*0.45)||
 ((x3-width*0.07)>(width*0.63)&&(x3-width*0.07)<width*0.675&&(y3-height*0.07)>height*0.51&&(y3-height*0.07)<height*0.55))&&
 (((x4-width*0.07)>(width*0.13)&&(x4-width*0.07)<width*0.17&&(y4-height*0.07)>height*0.41&&(y4-height*0.07)<height*0.45)||
 ((x4-width*0.07)>(width*0.63)&&(x4-width*0.07)<width*0.675&&(y4-height*0.07)>height*0.51&&(y4-height*0.07)<height*0.55))){
     correct=true;
 }else{
     correct=false;
 }
 

 if(correct==true&&
    mouseX>width*0.39&&mouseX<width*0.49&&mouseY>height*0.79&&mouseY<height*0.9&&mouseIsPressed){
        page=8;
        bg=0;
 }
 if(correct==false&&
    mouseX>width*0.39&&mouseX<width*0.49&&mouseY>height*0.79&&mouseY<height*0.9&&mouseIsPressed){
        page=9;
        bg=0;
 }
}

//game 2 win
function drawPage8(){
    frameRate(99999);
    background(255);
    textSize(width*0.05);
    stroke(width*0.05);
    fill('rgba(100%,0%,100%,0.5)');
    text("WOW!\nYou get your peashooter!",width*0.05,height*0.3);
    image(img1b,width*0.15,height*0.55,width*0.3,height*0.33);
    noStroke();
    fill(255, 204, 0);
    ellipse(width*0.875,height*0.7,width*0.25,height*0.2);
    //fill(255, 204, 100);
    //ellipse(900, 450, 350, 150);
    fill(0);
    textSize(width*0.03);
    text("TO DO \n   Test 3",width*0.8,height*0.69);
    //text("Play with your \nPegasus",770,440);
    
    if(mouseX>width*0.5&&mouseX<width&&
       mouseY>height*0.5&&mouseY<height*0.9&&mouseIsPressed){
           page=10;
           pg=0;
       }
    }  


//game 2 fail
function drawPage9(){
    frameRate(99999);
    background(255);
    textSize(width*0.15);
    fill(10);
    textStyle(BOLD);
    text("fail",width*0.15,height*0.757);
    image(img4,width*0.4,height*0.53,width*0.15,height*0.3);
    fill(255, 204, 100);
    noStroke();
    rect(windowWidth*0.7,0,width*0.3,height*0.24);
    textSize(width*0.048);
    fill(10);
    text("TRY AGAIN",windowWidth*0.715,height*0.151);
   
    if(mouseX>windowWidth*0.715&&mouseX<windowWidth&&
       mouseY>0&&mouseY<height*0.24&&mouseIsPressed){
           page=7;
           pg=0;
       }
}

//game 3 map
function drawPage10(){
    frameRate(7);
    a=random(0,255);
    b=random(0,255);
    c=random(0,255);
    background(255); 
    image(plate,0,0,width,height*0.16);
    textSize(width*0.054);
    fill(a,b,c);
    text("Welcome to the operating test!",width*0.08,height*0.11);
    textSize(width*0.02);
    fill(255, 204, 0);
    text("Now you can try test 3.\nMaybe this one is \na challenge.",width*0.35,width*0.11);
    image(img1a,width*0.01,height*0.45,width*0.17,height*0.22);
    image(img1,width*0.2,height*0.52,width*0.05,height*0.07);
    image(arrow1,width*0.57,height*0.24,width*0.12,height*0.17);
    image(img1b,width*0.26,height*0.45,width*0.16,height*0.25);
    image(img1c,width*0.5,height*0.45,width*0.2,height*0.25);
    image(img1,width*0.45,height*0.52,width*0.05,height*0.07);
    image(img1,width*0.69,height*0.52,width*0.05,height*0.07);
    image(imgd,width*0.76,height*0.42,width*0.23,height*0.25);
    fill(100,170,150);
    textSize(width*0.024);
    text("Test 1 \nPegasus",width*0.03,height*0.75);  
    text("Test 2 \nPeashooter",width*0.28,height*0.75);
    text("Test 3 \nMemory Bread",width*0.53,height*0.75);
    //fill(200,70,70);
    //text("Congratulations!!! \nget the license~",1080,220);
  
    if(mouseX>width*0.5 && mouseX<width*0.7&&
       mouseY>height*0.45 && mouseY<height*0.75 && mouseIsPressed){
           page=11;
           bg=0;
    }
}

//game 3
function drawPage11(){
    frameRate(99999);
    background(255);
    image(imgm,width*0.15,height*0.3,width*0.65,height*0.65);
    strokeWeight(4);
    stroke(width*0.003);
    fill(225);
    rect(width*0.15,height*0.43,width*0.14,height*0.14);
    rect(width*0.655,height*0.53,width*0.14,height*0.14);
    //rect(width*0.39,height*0.79,width*0.1,height*0.11);
    image(plate,0,0,width*0.43,height*0.12);
    textSize(width*0.04);
    fill(0);
    text("Test 3 Memory Bread",width*0.005,height*0.09);
 
    textStyle(ITALIC);
    textSize(width*0.0197);
    text("(You only need to choose 2 materials.)",width*0.45,height*0.07576);
 
    if(mouseIsPressed&&mouseX>(x5-width*0.07)&&mouseX<(x5+width*0.07)
    &&mouseY>(y5-height*0.07)&&mouseY<(y5+height*0.07)){ 
       x5=mouseX;
       y5=mouseY;
    }
    if(mouseIsPressed&&mouseX>(x6-width*0.07)&&mouseX<(x6+width*0.07)
    &&mouseY>(y6-height*0.07)&&mouseY<(y6+height*0.07)){ 
       x6=mouseX; 
       y6=mouseY;
    }
    if(mouseIsPressed&&mouseX>(x9-width*0.07)&&mouseX<(x9+width*0.07)
    &&mouseY>(y9-height*0.07)&&mouseY<(y9+height*0.07)){ 
       x9=mouseX;
       y9=mouseY;
    }
    if(mouseIsPressed&&mouseX>(x10-width*0.07)&&mouseX<(x10+width*0.07)
    &&mouseY>(y10-height*0.07)&&mouseY<(y10+height*0.07)){ 
       x10=mouseX; 
       y10=mouseY;
    }
    if(mouseIsPressed&&mouseX>(x11-width*0.07)&&mouseX<(x11+width*0.07)
    &&mouseY>(y11-height*0.07)&&mouseY<(y11+height*0.07)){ 
       x11=mouseX; 
       y11=mouseY;
    }
    image(imgc1,x5-(width*0.07),y5-(height*0.07),width*0.14,height*0.14);
    image(imgc2,x6-width*0.07,y6-height*0.07,width*0.14,height*0.14);
    image(imgc3,x9-(width*0.07),y9-(height*0.07),width*0.14,height*0.14);
    image(imgc4,x10-width*0.07,y10-height*0.07,width*0.14,height*0.14);
    image(imgc5,x11-width*0.07,y11-height*0.07,width*0.14,height*0.14);
   

    if((((x5-width*0.07)>(width*0.13)&&(x5-width*0.07)<width*0.17&&(y5-height*0.07)>height*0.41&&(y5-height*0.07)<height*0.45)||
    ((x5-width*0.07)>(width*0.63)&&(x5-width*0.07)<width*0.675&&(y5-height*0.07)>height*0.51&&(y5-height*0.07)<height*0.55))&&
    (((x6-width*0.07)>(width*0.13)&&(x6-width*0.07)<width*0.17&&(y6-height*0.07)>height*0.41&&(y6-height*0.07)<height*0.45)||
    ((x6-width*0.07)>(width*0.63)&&(x6-width*0.07)<width*0.675&&(y6-height*0.07)>height*0.51&&(y6-height*0.07)<height*0.55))){
        correct=true;
    }else{
        correct=false;
    }
    
   
    if(correct==true&&
       mouseX>width*0.39&&mouseX<width*0.49&&mouseY>height*0.79&&mouseY<height*0.9&&mouseIsPressed){
           page=12;
           bg=0;
    }
    if(correct==false&&
       mouseX>width*0.39&&mouseX<width*0.49&&mouseY>height*0.79&&mouseY<height*0.9&&mouseIsPressed){
           page=13;
           bg=0;
    }
}

//game 3 win
function drawPage12(){
 frameRate(99999);
 background(255);
 image(img,0,0,windowWidth,windowHeight);

 noStroke();
 fill(255, 204, 0);
 ellipse(windowWidth*0.86,height*0.136, width*0.255, height*0.227);
 
 fill(0);
 textSize(width*0.027);
 text("TO GET YOUR\nLICENSE",windowWidth*0.766,height*0.129);
 
 
 if(mouseX>windowWidth*0.733&&mouseX<windowWidth&&
    mouseY>0&&mouseY<height*0.25&&mouseIsPressed){
        page=14;
        bg=0;
    }
}

//game 3 fail
function drawPage13(){
    frameRate(99999);
    background(255);
    textSize(width*0.146);
    fill(10);
    text("fail",width*0.146,height*0.7576);
    image(img4,width*0.4,height*0.53,width*0.146,height*0.3);
    fill(255, 204, 100);
    noStroke();
    rect(windowWidth*0.7,0,width*0.2919,height*0.2424);
    textSize(width*0.0489);
    fill(10);
    text("TRY AGAIN",windowWidth*0.7153,height*0.1515);
    image(hint,0,0,width*0.07299,height*0.1515);
    image(hand,width*0.09489,0,width*0.07299,height*0.1515);
    textSize(width*0.0197);
    text("Get hint",width*0.175,height*0.106);
    if(mouseX>0&&mouseX<width*0.07299&&mouseY>0&&mouseY<height*0.1515){
    image(hink,width*0.07299,0,width*0.36496,height*0.37878);
    textStyle(BOLD);
    textSize(width*0.0197);
    text("The Memory Bread would be \na boon for students who \nhave problems memorizing \nnotes.Just eat the Memory \nBread including the notes you \nwant to learn by heart.",width*0.13138,height*0.06);
    }
   
    if(mouseX>windowWidth*0.708&&mouseX<windowWidth&&
       mouseY>0&&mouseY<height*0.2424&&mouseIsPressed){
           page=11;
           pg=0;
       }
}

//get license
function drawPage14(){
    frameRate(99999);
    background(255);
    image(win,0,0,width,height*0.36);
    image(imgd,windowWidth/15,windowHeight/3,width*0.365,height*0.57575);
    textSize(width*0.027);
    fill(0);
    text("Please enter your name here:",windowWidth/2,windowHeight*2/3);
    strokeWeight(width*0.002);
    stroke(0);
    fill(255);
    rect(windowWidth/2,windowHeight*3/4, width*0.4014, height*0.11363);

    keyPressed=function(){
        if(keyCode === ENTER){
            name = trim(name); 
            
            //name = "";
            //page=15;
            //bg=0;
        }
        if(keyCode === BACKSPACE){name = name.slice(0, -1);}
        else{trim(name += key);}
        return false;
    }
    textSize(width*0.02919);
    fill(0);
    textStyle(ITALIC);
    text(name,windowWidth*0.514,windowHeight*5/6);
    fill(200,50,50);
    noStroke();
    rect(windowWidth/2,windowHeight*0.87878,width*0.1459,height*0.106);
    fill(0);
    textStyle(BOLD);
    textSize(width*0.0343);
    text("ENTER",windowWidth*0.507,windowHeight*0.9545);
    if(mouseX>windowWidth/2&&mouseX<windowWidth*0.6459&&
        mouseY>windowHeight*0.87878&&mouseY<windowHeight*9848&&mouseIsPressed){
            page=15;
            bg=0;
        }
}

//end
function drawPage15(){
    frameRate(1);
    background(255);
    image(win,windowWidth/15,0,width*0.8759,height*0.3787);
    image(imgd,windowWidth/15,windowHeight/3,width*0.3649,height*0.5757);
    textSize(width*0.0255);
    textStyle(BOLD);
    fill(0);
    text("Name:"+trim(name),windowWidth/5,windowHeight*5/9);
    textSize(width*0.0343);
    textStyle(ITALIC);
    a=random(150,250);
    b=random(50,255);
    c=random(50,255);
    fill(a,b,c);
    text("Congratulations "+trim(name)+"! \nNow you are allowed to use the \nsuper mixer to create whatever \nyou what!\nBe creative and make something \nvaluable for the world!",windowWidth*4/9,windowHeight*5/11);
}
