let Boundary = function (x1, y1, x2, y2) {
    return {
        a: createVector(x1, y1),
        b: createVector(x2, y2),
        color: {
            r: random(255),
            g: random(255),
            b: random(255),
        },

        show() {
            push()
            stroke(this.color.r, this.color.g, this.color.b)
            line(this.a.x, this.a.y, this.b.x, this.b.y)
            pop()
        },
    }
}