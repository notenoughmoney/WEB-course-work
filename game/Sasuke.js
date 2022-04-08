class Sasuke extends GameObject {
    constructor(config) {
        super(config);
    }

    

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    counter = 0;
    speed = 20;

    async moveRight(c) {
        const step = async () => {
            this.x += 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        for (let i = 0; i < c * 32; i ++) {
            await step();
        }
    }
    async moveLeft(c) {
        const step = async () => {
            this.x -= 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        for (let i = 0; i < c * 32; i ++) {
            await step();
        }
    }
    async moveUp(c) {
        const step = async () => {
            this.y -= 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        for (let i = 0; i < c * 32; i ++) {
            await step();
        }
    }
    async moveDown(c) {
        const step = async () => {
            this.y += 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        for (let i = 0; i < c * 32; i ++) {
            await step();
        }
    }
}