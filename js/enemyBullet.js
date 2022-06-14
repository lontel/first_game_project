class EnemyBullet {
    constructor(ctx, enemyPos, canvasSize) {
        this.ctx = ctx
        this.enemyPos = { x: enemyPos.x, y: enemyPos.y }
        this.enemyBulletSpeed = { x: 10, y: 1 }
        this.canvasSize = canvasSize

    }
    drawBullet() {
        if (this.enemyPos.y > this.canvasSize.h * .8) {
            this.ctx.fillStyle = 'black'
            this.ctx.fillRect(this.enemyPos.x, this.enemyPos.y + 25, 25, 10)
        }
        this.move()
    }
    move() {
        this.enemyPos.x -= this.enemyBulletSpeed.x
    }

}