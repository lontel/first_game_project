const Game = {
    title: 'Iron Monkey',
    author: 'Marcos & Leon',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    FPS: 60,
    keys: {
        jump: 'ArrowUp',
        moveLeft: 'ArrowLeft',
        moveRight: 'ArrowRight',
        shot: 'Space',
        moveDown: 'ArrowDown',
    },
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init(id) {
        this.canvasDom = document.querySelector(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.start()
        this.createAll()
    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    createAll() {
        this.player = new Player(this.ctx, 500, 500, 100, 100)
        

    },
    drawAll() {
        this.player.createPlayer()
    },
    setEventListeners() {
        document.onkeydown = event => {
            switch (event.code) {
                case this.keys.jump: this.player.jump()
                    break;
                case this.keys.moveLeft: this.player.moveLeft()
                    break;
                case this.keys.moveRight: this.player.moveRight()
                    break;
                case this.keys.shot: this.player.shot()
                    break;
                case this.keys.moveDown: this.player.moveDown()
                    break;
            }
        }
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 1000 / this.FPS)
    }
}
