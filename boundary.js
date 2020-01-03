let Boundary = function (x1, y1, x2, y2) {
    return {
        a: createVector(x1, y1),
        b: createVector(x2, y2),
        colors: {
            r: floor(random(255)),
            g: floor(random(255)),
            b: floor(random(255)),
        },

        show() {
            push()
            stroke(this.colors.r, this.colors.g, this.colors.b)
            line(this.a.x, this.a.y, this.b.x, this.b.y)
            pop()
        },
    }
}