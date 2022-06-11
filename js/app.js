const Game = {
    title: 'Iron Monkey',
    author: 'Marcos & Leon',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    keys: {
        jump: 'ArrowUp',
        moveLeft: 'ArrowLeft',
        moveRight: 'ArrowRight',
        shot: 'Space'
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
    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },
    start() {
        setInterval(() =>{
            this.clearAll()
            this.drawAll()
        }, 50)
    },
    clearAll(){

    },
    drawAll(){
        
    }
    
}