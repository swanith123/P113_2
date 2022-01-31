function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(635,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 100, 100, 440, 280);
    fill("red");
    stroke("red");
    circle(50, 50, 50);
    fill("red");
    stroke("red");
    circle(592, 50, 50); 
    fill("green");
    stroke("green");
    rect(72, 35, 500, 30);
    fill("red");
    stroke("red");
    circle(50, 430, 50);
    fill("red");
    stroke("red");
    circle(592, 430, 50); 
    fill("green");
    stroke("green");
    rect(72, 415, 500, 30);
    fill("green");
    stroke("green");
    rect(35, 70, 30, 340);
    fill("green");
    stroke("green");
    rect(578, 70, 30, 340);
    
}

function takeSnapshot(){
    save('intro-to-p5-js.png');
}
