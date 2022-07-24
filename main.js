function preload(){

}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(30, 200);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 20, 55, 600, 400);
    circle(30, 30, 55);
    stroke("blue");
    circle(550, 30, 55);
    stroke("blue");
    circle(30, 375, 55);
    stroke("blue");
    circle(550, 375, 55);
    stroke("blue");
    line(30, 30, 550, 30);
    stroke("red");
    strokeWeight(10);
    line(30, 30, 30, 375);
    stroke("red");
    strokeWeight(10);
    line(30, 375, 550, 375);
    stroke("red");
    strokeWeight(10);
    line(550, 375, 550, 30);
    stroke("red");
    strokeWeight(10);
}

function take_image(){
    save("image_project.png");
}
