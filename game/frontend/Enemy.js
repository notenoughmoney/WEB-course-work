class Enemy extends Person {
    constructor(config) {
        super(config);
    }

    async moveLeft(c = 1) {

        const step = async () => {
            this.x -= 1;
            overworld.another();
            await this.timeout(20);
        }
        this.sprite.moveLeftAnimation(c); //асинхронная
        for (let i = 0; i < c * 32; i ++)
            await step();
        this.sprite.stayPosLeft();
        overworld.another();
    }

    async moveRight(c = 1) {
        this.sprite.stayPosRight();

        const step = async () => {
            this.x += 1;
            overworld.another();
            await this.timeout(20);
        }
        this.sprite.moveRightAnimation(c); //асинхронная
        for (let i = 0; i < c * 32; i ++)
            await step();
        this.sprite.stayPosRight();
        overworld.another();
    }
}