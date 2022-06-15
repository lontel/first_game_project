const Game = {
    title: 'Iron Monkey',
    author: 'Marcos & Leon',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    FPS: 60,
    framesIndex: 0,
    winningScore: 3,
    enemyArr: [],
    powerUpArr: [],
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
    createEnemy() {
        this.enemyArr.push(new Enemy(this.ctx, this.canvasSize))
    },
    createPoweUp(){
        this.powerUpArr.push(new PowerUp(this.ctx, this.canvasSize)) 
    },

    createAll() {
        this.player = new Player(this.ctx, this.canvasSize)
        
    },

    drawAll() {
        this.player.draw()
        this.enemyArr.forEach(enemy => enemy.draw())
        if (this.player.score === this.winningScore) { this.winDoor.draw() }
        this.powerUpArr.forEach(powerUp => powerUp.draw())
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
            this.framesIndex++
            this.clearAll()
            this.drawAll()
            this.checkPlayerCollision()
            this.checkEnemyCollision()
            this.checkPlayerEnemyCollision()
            this.checkPowerUpCollision()
            if(this.framesIndex % 200 === 0){
                if (this.player.score < this.winningScore){
                    this.createPoweUp()
                }
            }
            if (this.framesIndex % 150 === 0) {
                this.enemyArr.forEach(enemy => {
                    enemy.createBullet()
                })
            }
            if (this.framesIndex % 300 === 0) {
                if (this.player.score < this.winningScore) {
                    this.createEnemy()
                }
            }
            if (this.player.score === this.winningScore) {
                this.checkDoorCollision()
            }
        }, 1000 / this.FPS)
    },

    checkPlayerCollision() {
        this.enemyArr.forEach(enemy => {
            enemy.enemyBullets.forEach((bullet, index, arr) => {
                if (bullet.bulletPos.x < this.player.playerPos.x + 69 &&
                    bullet.bulletPos.x + 25 > this.player.playerPos.x &&
                    bullet.bulletPos.y < this.player.playerPos.y + 100 &&
                    10 + bullet.bulletPos.y > this.player.playerPos.y) {
                    arr.splice(index, 1)

                    if (this.player.lives > 0) {
                        console.log(this.player.lives)
                        this.player.lives--
                    } else {
                        alert('Game Over!')
                    }

                }
            })
        })
    },

    checkEnemyCollision() {
        this.player.bullets.forEach((bulletEl, index, arrb) => {
            this.enemyArr.forEach((enemy, index, arr) => {
                if (bulletEl.playerBulletPos.x > enemy.enemyPos.x - 75 &&
                    bulletEl.playerBulletPos.x - 25 < enemy.enemyPos.x &&
                    bulletEl.playerBulletPos.y > enemy.enemyPos.y - 100 &&
                    10 - bulletEl.playerBulletPos.y < enemy.enemyPos.y) {
                    arr.splice(index, 1)
                    arrb.splice(index, 1)
                    this.player.score++
                    if (this.player.score === this.winningScore) {
                        this.enemyArr = []
                        this.powerUpArr = []
                        this.winDoor = new WinDoor(this.ctx, this.canvasSize)
                    }
                }
            })
        })
    },

    checkDoorCollision() {
        if (this.winDoor.doorPos.x > this.player.playerPos.x - 75 &&
            this.winDoor.doorPos.x - 25 < this.player.playerPos.x &&
            this.winDoor.doorPos.y > this.player.playerPos.y - 100 &&
            10 - this.winDoor.doorPos.y < this.player.playerPos.y) {
            alert('you win!')
        }
    },

    checkPlayerEnemyCollision() {
        this.enemyArr.forEach((enemy, index, arr) => {
            if (enemy.enemyPos.x > this.player.playerPos.x - 75 &&
                enemy.enemyPos.x - 25 < this.player.playerPos.x &&
                enemy.enemyPos.y > this.player.playerPos.y - 100 &&
                10 - enemy.enemyPos.y < this.player.playerPos.y) {
                if (this.player.lives > 0) {
                    console.log(this.player.lives)
                    this.player.lives--
                    arr.splice(index, 1)
                } else {
                    alert('Game Over!')
                }
            }
        })
    },

    checkPowerUpCollision(){
        this.powerUpArr.forEach((powerUp, index, arr) => {
            if (powerUp.powerUpPos.x > this.player.playerPos.x - 75 &&
                powerUp.powerUpPos.x - 25 < this.player.playerPos.x &&
                powerUp.powerUpPos.y > this.player.playerPos.y - 100 &&
                10 - powerUp.powerUpPos.y < this.player.playerPos.y){
                    arr.splice(index, 1)
                    this.player.lives++    
                }
        })
    }

}