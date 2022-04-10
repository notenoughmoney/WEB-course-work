class Person extends GameObject {
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
            //с каждой прошедшей клектой проверяем стенки
            if (i % 32 == 0) {
                console.log(this.getNextPos("right"));
                console.log(window.OverworldMaps.lev1.walls);
                if (JSON.stringify(window.OverworldMaps.lev1.walls).includes(JSON.stringify(this.getNextPos("right")))) {
                    console.log("Занято!");
                    break;
                } else {
                    await step();
                }
            } else 
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
            if (i % 32 == 0) {
                console.log(this.getNextPos("left"));
                console.log(window.OverworldMaps.lev1.walls);
                if (JSON.stringify(window.OverworldMaps.lev1.walls).includes(JSON.stringify(this.getNextPos("left")))) {
                    console.log("Занято!");
                    break;
                } else {
                    await step();
                }
            } else 
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
            if (i % 32 == 0) {
                console.log(this.getNextPos("up"));
                console.log(window.OverworldMaps.lev1.walls);
                if (JSON.stringify(window.OverworldMaps.lev1.walls).includes(JSON.stringify(this.getNextPos("up")))) {
                    console.log("Занято!");
                    break;
                } else {
                    await step();
                }
            } else 
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
            if (i % 32 == 0) {
                console.log(this.getNextPos("down"));
                console.log(window.OverworldMaps.lev1.walls);
                if (JSON.stringify(window.OverworldMaps.lev1.walls).includes(JSON.stringify(this.getNextPos("down")))) {
                    console.log("Занято!");
                    break;
                } else {
                    await step();
                }
            } else 
                await step();
        }
    }
}