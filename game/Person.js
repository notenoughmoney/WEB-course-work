class Person extends GameObject {
    constructor(config) {
        super(config);
    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    counter = 0;
    speed = 20;


    //движения
    async moveRight(c = 1) {
        const step = async () => {
            this.x += 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        this.sprite.moveRightAnimation(c); //асинхронная
        for (let i = 0; i < c * 32; i ++) {
            //с каждой прошедшей клектой проверяем стенки
            if (i % 32 == 0) {
                if (JSON.stringify(window.OverworldMaps.lev1.walls).includes(JSON.stringify(this.getNextPos("right")))) {
                    console.log("Занято!");
                    break;
                } else {
                    await step();
                }
            } else 
                await step();
        }
        this.sprite.stayPosRight();
        overworld.another();
    }
    async moveLeft(c = 1) {
        const step = async () => {
            this.x -= 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        this.sprite.moveLeftAnimation(c); //асинхронная
        for (let i = 0; i < c * 32; i ++) {
            if (i % 32 == 0) {
                if (JSON.stringify(window.OverworldMaps.lev1.walls).includes(JSON.stringify(this.getNextPos("left")))) {
                    console.log("Занято!");
                    break;
                } else {
                    await step();
                }
            } else 
                await step();
        }
        this.sprite.stayPosLeft();
        overworld.another();
    }
    async moveUp(c = 1) {
        const step = async () => {
            this.y -= 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        if (this.sprite.currentDir == "right") this.sprite.moveRightAnimation(c);
        else this.sprite.moveLeftAnimation(c);
        for (let i = 0; i < c * 32; i ++) {
            if (i % 32 == 0) {
                if (JSON.stringify(window.OverworldMaps.lev1.walls).includes(JSON.stringify(this.getNextPos("up")))) {
                    console.log("Занято!");
                    break;
                } else {
                    await step();
                }
            } else 
                await step();
        }
        if (this.sprite.currentDir == "right") this.sprite.stayPosRight(c);
        else this.sprite.stayPosLeft(c);
        overworld.another();
    }
    async moveDown(c = 1) {
        const step = async () => {
            this.y += 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        if (this.sprite.currentDir == "right") this.sprite.moveRightAnimation(c);
        else this.sprite.moveLeftAnimation(c);
        for (let i = 0; i < c * 32; i ++) {
            if (i % 32 == 0) {
                if (JSON.stringify(window.OverworldMaps.lev1.walls).includes(JSON.stringify(this.getNextPos("down")))) {
                    console.log("Занято!");
                    break;
                } else {
                    await step();
                }
            } else 
                await step();
        }
        if (this.sprite.currentDir == "right") this.sprite.stayPosRight(c);
        else this.sprite.stayPosLeft(c);
        overworld.another();
    }
    //удары
    async hitRight(c = 1) {
        await this.sprite.hitRightAnimation(c);
        this.sprite.stayPosRight();
        overworld.another();
    }
    async hitLeft(c = 1) {
        await this.sprite.hitLeftAnimation(c);
        this.sprite.stayPosLeft();
        overworld.another();
    }
    //спавн
    async spawnMovement(c = 1) {
        await this.sprite.spawnMovement(c);
    }

}