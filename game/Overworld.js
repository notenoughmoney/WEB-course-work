class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.lev2);
        this.startGame();
    }

    another(c) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.map.drawLowerImage(this.ctx);
        Object.values(this.map.gameObjects).forEach(object => {
            object.sprite.draw(this.ctx);
        });
        // this.counter++;
        // if (this.counter == c*32 ) clearInterval(this.timer);
        // console.log(this.counter);
    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    counter = 0;
    oneCellTime = 900;

    async moveRight(c) {
        const step = async () => {
            this.another(c);
            this.map.gameObjects.hero.x += 1;
            await this.timeout(20);
        }
        // this.timer = setInterval(step, 20);
        // this.counter = 0;
        for (let i = 0; i < c * 32; i ++) {
            await step();
        }
    }
    async moveLeft(c) {
        const step = async () => {
            this.another(c);
            this.map.gameObjects.hero.x -= 1;
            await this.timeout(20);
        }
        // this.timer = setInterval(step, 20);
        // this.counter = 0;
        for (let i = 0; i < c * 32; i ++) {
            await step();
        }
    }
    async moveUp(c) {
        const step = async () => {
            this.another(c);
            this.map.gameObjects.hero.y -= 1;
            await this.timeout(20);
        }
        // this.timer = setInterval(step, 20);
        // this.counter = 0;
        for (let i = 0; i < c * 32; i ++) {
            await step();
        }
    }
    async moveDown(c) {
        const step = async () => {
            this.another(c);
            this.map.gameObjects.hero.y += 1;
            await this.timeout(20);
        }
        // this.timer = setInterval(step, 20);
        // this.counter = 0;
        for (let i = 0; i < c * 32; i ++) {
            await step();
        }
    }

    async startGame() {
        await this.moveRight(1);
        // await this.timeout(this.oneCellTime); 
        await this.moveDown(3);
        // await this.timeout(this.oneCellTime*3); 
        await this.moveUp(2);
        // await this.timeout(this.oneCellTime*2); 
        await this.moveLeft(1);
        // await this.timeout(this.oneCellTime);
    }
}

