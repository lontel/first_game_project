class Enemy {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.enemyPos = { x: canvasSize.w * 0.9, y: 0}
        this.physics = { gravity: 0.4 }
        this.enemyBullets = []
        this.enemySpeed = { x: 2, y: 1 }
        this.base = this.canvasSize.h * .8
 
 
        this.init()
    }

    init(){
        this.move()

    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.enemyPos.x, this.enemyPos.y, 75, 100)
        this.move()       
    }

    move() {

        if (this.enemyPos.y < this.base) {
            this.enemySpeed.y += this.physics.gravity / 3
            this.enemyPos.y += this.enemySpeed.y
            // this.playerPos.x += this.playerSpeed.x
        }
        else {
            this.enemyPos.y = this.base;
            this.enemySpeed.y = 1;
        }

    }

    /*
    shoot() {
        this.bullets.push(new Bullet(this.ctx, this.playerPos, this.canvasSize)) //la posición es del enemigo!!!
    }
    */
}