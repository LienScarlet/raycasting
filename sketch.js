let walls = []
let particle

const sceneW = 400
const sceneH = 400
let sliderFOV

function setup() {
    createCanvas(800, 400)
    for (let i = 0; i < 5; i++) {
        const x1 = random(sceneW)
        const y1 = random(sceneH)
        const x2 = random(sceneW)
        const y2 = random(sceneH)
        walls.push(Boundary(x1, y1, x2, y2))
    }
    walls.push(Boundary(0, 0, sceneW, 0))
    walls.push(Boundary(sceneH, 0, sceneW, sceneH))
    walls.push(Boundary(0, 0, 0, sceneH))
    walls.push(Boundary(sceneW, sceneH, 0, sceneH))
    particle = Particle()

    sliderFOV = createSlider(0, 360, 45)
    sliderFOV.input(changeFOV)
}

function changeFOV() {
    const FOV = sliderFOV.value()
    particle.updateFOV(FOV)
}

function draw() {

    if (keyIsDown(65)) {
        particle.rotate(-0.05)
    }
    if (keyIsDown(68)) {
        particle.rotate(0.05)
    }
    if (keyIsDown(87)) {
        particle.move(1)
    }
    if (keyIsDown(83)) {
        particle.move(-1)
    }

    background(51)
    for (const wall of walls) {
        wall.show()
    }

    particle.show()
    const scene = particle.look(walls)
    const w = sceneW / scene.length

    push()
    noStroke()
    rectMode(CENTER)
    translate(sceneW, 0)
    for (let i = 0; i < scene.length; i++) {
        const sq = scene[i] * scene[i]
        const wSq = sceneW * sceneW
        const b = map(sq, 0, wSq, 255, 0)
        const h = map(scene[i], 0, sceneW, sceneH, 0)
        fill(100, 200, 50, b)
        rect(i * w + w / 2, sceneH / 2, w + 1, h)
    }
    pop()
}

