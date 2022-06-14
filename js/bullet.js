class Bullet {

    constructor(ctx, playerPos, canvasSize) {
        this.ctx = ctx
        this.playerBulletPos = { x: playerPos.x, y: playerPos.y }
        this.canvasSize = canvasSize
        this.radius = 10
        this.bulletSpeed = { x: 10, y: 1 }
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = "black"
        this.ctx.arc(this.playerBulletPos.x + 75 + this.radius, this.playerBulletPos.y + 50, this.radius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath()
        this.move()
    }

    move() {
        this.playerBulletPos.x += this.bulletSpeed.x
    }
}