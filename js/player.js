class Player {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.playerSize = { w: 100, h: 100 }
        this.playerPos = {
            x: this.playerSize.w + 30,
            y: canvasSize.h - this.playerSize.h - 30
        }
        this.playerSpeed = { x: 10, y: 0 }
        this.canvasSize = canvasSize
        this.physics = { gravity: 0.4 }
        this.playerImage = './img/player.jpeg'
        this.imageInstance = undefined

        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.playerImage
    }
    setEventListeners() {
        document.onkeydown = event => {
            switch (event.code) {
                case this.keys.jump:
                    if (this.playerPos.x) {
                        this.jump()
                    }
                    break;
                case this.keys.moveLeft: this.moveLeft()
                    break;
                case this.keys.moveRight: this.moveRight()
                    break;
                case this.keys.shot: this.shot()
                    break;
            }

        }
    }
    jump() {
        this.playerPos.y -= 40;
        this.playerSpeed.y -= 8
    }
    moveLeft() {
        this.playerPos.x -= 20
    }
    moveRight() {
        this.playerPos.x += 20
    }
}