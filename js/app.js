const Game = {
    title: 'Iron Monkey',
    author: 'Marcos & Leon',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    FPS: 60,
    framesIndex: 0,
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
        this.createAll()
        this.start()
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
        this.player = new Player(this.ctx, this.canvasSize)
        this.enemy = new Enemy(this.ctx, this.canvasSize)
    },

    drawAll() {
        this.player.draw()
        this.enemy.draw()
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
                case this.keys.shot: this.player.shoot()
                    break;
            }
        }
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()  
            this.checkPlayerCollision()
            this.checkEnemyCollision()
            this.framesIndex++
            if (this.framesIndex % 150 === 0) {
                this.enemy.createBullet()
            }
        }, 1000 / this.FPS)
    },
    
    checkPlayerCollision(){
        this.enemy.enemyBullets.forEach(bullet => {
            if (bullet.bulletPos.x < this.player.playerPos.x + 75 &&
                bullet.bulletPos.x + 25 > this.player.playerPos.x &&
                bullet.bulletPos.y < this.player.playerPos.y + 100 &&
                10 + bullet.bulletPos.y > this.player.playerPos.y) {
                    //split para que desaparezcan las balas
                    alert('Game Over!')
                }
            
        });
        
        console.log(this.enemy)

    },

    checkEnemyCollision() {
        this.player.bullets.forEach(bulletEl => {
            if (bulletEl.playerBulletPos.x > this.enemy.enemyPos.x - 75 &&
                bulletEl.playerBulletPos.x - 25 < this.enemy.enemyPos.x &&
                bulletEl.playerBulletPos.y > this.enemy.enemyPos.y - 100 &&
                10 - bulletEl.playerBulletPos.y < this.enemy.enemyPos.y) {
                    alert('Congratulations, you win!')
                }
        })
    }
}
