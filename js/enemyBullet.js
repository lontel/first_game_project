class EnemyBullet {
    constructor(ctx, enemyPos, canvasSize) {
        this.ctx = ctx
        this.bulletPos = { x: enemyPos.x, y: enemyPos.y }
        this.enemyBulletSpeed = { x: 5, y: 1 }
        this.canvasSize = canvasSize
    }
    drawBullet() {
        if (this.bulletPos.y > this.canvasSize.h * .8) {
            this.ctx.fillStyle = 'black'
            this.ctx.fillRect(this.bulletPos.x, this.bulletPos.y + 25, 25, 10)
        }
        this.move()
    }
    move() {
        this.bulletPos.x -= this.enemyBulletSpeed.x
    }
}