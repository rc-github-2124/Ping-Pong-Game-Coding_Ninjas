let p_left;
let p_right; 

function setup(){
    createCanvas(400,400);
    rectMode(CENTER)
    p_left=new Peddle(10);
    p_right =new Peddle(380)
}

function draw(){
    background(220)
    p_left.show();
    p_right.show();
}