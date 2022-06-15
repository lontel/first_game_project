class WinDoor {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.doorPos = { x: this.canvasSize.w -5, y: this.canvasSize.h * .8 }

        this.init()
    }

    init() {
        this.draw()
    }

    draw() {
        this.ctx.fillStyle = 'yellow'
        this.ctx.fillRect(this.doorPos.x, this.doorPos.y, 75, 100)
        this.move()
    }
    move() {
        this.doorPos.x -= 1
    }
}