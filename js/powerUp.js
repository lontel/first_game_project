class PowerUp {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.powerUpPos = { x: this.canvasSize.w + 5, y: this.canvasSize.h * .6 }

        this.init()
    }

    init() {
        this.draw()
    }

    draw() {
        this.ctx.fillStyle = 'pink'
        this.ctx.fillRect(this.powerUpPos.x, this.powerUpPos.y, 50, 50)
        this.move()
    }
    move() {
        this.powerUpPos.x -= 1
    }
}