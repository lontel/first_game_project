class Player {
    constructor(ctx, playerPosX, playerPosY, playerSizeW, playerSizeH) {
        this.ctx = ctx
        this.playerPos = {
            x: playerPosX,
            y: playerPosY
        }
        this.playerSize = {
            w: playerSizeW,
            h: playerSizeH
        }
        this.playerSpeed = { x: 50, y: 0 }
        this.physics = { gravity: 0.4 }
        // this.canvasSize = {
        //     w: canvasSizeW,
        //     h: canvasSizeH 
        // }

        this.init()
    }
    init() {
        this.jump()
        this.moveLeft()
        this.moveRight()
        this.shot()
        this.createPlayer()
        this.moveDown()
    }
    createPlayer() {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
    }
    jump() {
        this.playerPos.y -= 40;
        this.playerSpeed.y += 8
        // if (this.playerPos.y === window.innerHeight / 1.3) {    //no funciona, revisar
            
        // }
    }
    moveLeft() {
        this.playerPos.x -= 20
    }
    moveRight() {
        this.playerPos.x += 20
    }
    moveDown() {
        if (this.playerPos.y < window.innerHeight - this.playerSize.h - 50) {
            this.playerPos.y += 40
        }
    }
    shot() {

    }
}