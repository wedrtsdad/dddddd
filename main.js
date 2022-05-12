s_1="";
ob= [];
w="";
h="";
x=0;
y=0;
e1="";

function preload() {
    img1= loadImage("img123.jpg");
    img2= loadImage("2931423.jpg");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.position(480,250);
    o_b= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("s1").innerHTML=" : detecting.....";
}

function modelLoaded() {
    console.log("😎😎😎😎😎😎😎😎😎loaded😎😎😎😎😎😎😎😎😎");
    s_1= true;
    o_b.detect(img1,g_r);
}

function draw() {
    image(img2,0,0,600,500);
    image(img1,25,25,550,450);
    if(s_1 != ""){
    for (i = 0; i < ob.length; i++) {

        w= ob[i].width;
        h= ob[i].height;
        x= ob[i].x;
        y= ob[i].y;
        e1= ob[i].label;
    
        fill("red");
        text(e1,x+5,y+100);
        noFill();
        stroke("red");
        rect(x,y,w,h);
    }
}
}

function g_r(error,result) {
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        ob= result;
    }
}