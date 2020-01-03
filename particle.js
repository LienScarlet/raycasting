let Particle = function () {
    let pos = createVector(100, 100)
    let rays = []
    let heading = 0
    let fov = 45

    for (let a = -fov / 2; a < fov / 2; a += 1) {
        rays.push(Ray(pos, radians(a)))
    }

    function updateFOV(FOV) {
        fov = FOV
        rays = []
        for (let a = -fov / 2; a < fov / 2; a += 1) {
            rays.push(Ray(pos, radians(a) + heading))
        }

    }

    function move(amt) {
        const vel = p5.Vector.fromAngle(heading)
        vel.setMag(amt)
        pos.add(vel)
    }
    function rotate(angle) {
        heading += angle
        let index = 0
        for (let a = -fov / 2; a < fov / 2; a += 1) {
            rays[index].setAngle(radians(a) + heading)
            index++
        }
    }

    function show() {
        fill(255)
        for (const ray of rays) {
            ray.show()
        }
    }

    function look(walls) {
        const scene = []
        for (const ray of rays) {
            let closest = null
            let record = Infinity
            
            for (const wall of walls) {
                const pt = ray.cast(wall)
                if (pt) {
                    let d = p5.Vector.dist(pos, pt)
                    const a = ray.dir.heading() - heading
                    d *= cos(a)
                    if (d < record) {
                        record = d
                        closest = pt
                    }
                }
            }
            if (closest) {
                line(pos.x, pos.y, closest.x, closest.y)
            }
            scene.push(record)
        }
        return scene
    }
    return { pos, rays, show, look, rotate, move, updateFOV }

}