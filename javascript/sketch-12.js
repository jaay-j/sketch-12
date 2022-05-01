function setup() {
    createCanvas(1000, 1000, WEBGL);
    background(194, 227, 132);
}

function draw() {
    push();
    rotateZ(millis() / 1000);
    ellipse(300, 300, 300, 300);
    pop();

    push();
    noStroke();
    fill(194, 227, 132);
    rect(-500, 30, 1000, 700);
    pop();
  }


function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-12", "png");
    }
}