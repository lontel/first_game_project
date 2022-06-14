class Enemy {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.enemyPos = { x: canvasSize.w * 0.9, y: 0 }
        this.physics = { gravity: 0.4 }
        this.enemyBullets = []
        this.enemySpeed = { x: 2, y: 1 }
        this.base = this.canvasSize.h * .8

        this.init()
    }

    init() {
        this.draw()
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.enemyPos.x, this.enemyPos.y, 75, 100)
        this.move()
        this.drawBullets()        
    }

    drawBullets() {
        this.enemyBullets.forEach(bullet => bullet.drawBullet())
        this.clearBullets()
    }

    move() {
        if (this.enemyPos.y <= this.base) {
            this.enemySpeed.y += this.physics.gravity / 3
            this.enemyPos.y += this.enemySpeed.y
        }
        else {
            this.enemyPos.y = this.base;
            this.enemySpeed.y = 1;
            this.drawBullets()
        }
    }
    createBullet() {
        this.enemyBullets.push(new EnemyBullet(this.ctx, this.enemyPos, this.canvasSize))
    }
    clearBullets() {
        this.enemyBullets = this.enemyBullets.filter(bull => bull.enemyPos.x <= this.canvasSize.w)
    }
}
