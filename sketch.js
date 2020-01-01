function setup() {
    createCanvas(600, 600)

}

function draw() {

    background(51)
    let x = mouseX;
    let y = mouseY;

    if (mouseIsPressed) {
        noStroke()
        if (mouseButton == LEFT) {
            fill(255)
            circle(x, y, 20)
        }
        if (mouseButton == RIGHT) {
            fill(51)
            circle(x, y, 40)
        }
    }
}
