class Person extends GameObject {
    constructor(config) {
        super(config);
    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    counter = 0;
    speed = 20;

    handler = e => {
        console.log("done");
    } 

    //ставим человечков на указанные места
    setPos(sx, sy) {
        this.x = sx;
        this.y = sy;
    }

    //возвращаем следующую позицию персонажа в клетках
    getNextPos(dir) {
        if(dir == "up") 
            return [this.x/32, this.y/32 - 1];
        else if (dir == "down") 
            return [this.x/32, this.y/32 + 1];
        else if (dir == "right") 
            return [this.x/32 + 1, this.y/32];
        else if (dir == "left") 
            return [this.x/32 - 1, this.y/32];
    }

    //возвращаем текущую позицию персонажа в клетках
    getCurPos() {
        return [this.x/32, this.y/32];
    }

    //персонаж проверяет, свободна ли клетка
    isCellFree(dir) {

        let map = overworld.getMap();

        //получаем стенки
        let walls = map.walls;
        //получаем занятые персонажами клетки
        let charsPos = overworld.getOccupiedCells();

        //считаем все занятые клетки
        let occCells = walls.concat(charsPos);

        return !JSON.stringify(occCells).includes(JSON.stringify(this.getNextPos(dir)));
    }

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
                if (this.isCellFree("right")) {
                    await step(); 
                } else {
                    console.log("Занято!");
                    break;
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
                if (this.isCellFree("left")) {
                    await step(); 
                } else {
                    console.log("Занято!");
                    break;
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
                if (this.isCellFree("up")) {
                    await step(); 
                } else {
                    console.log("Занято!");
                    break;
                }
            } else 
                await step();
        }
        if (this.sprite.currentDir == "right") this.sprite.stayPosRight(c);
        else this.sprite.stayPosLeft(c);
        overworld.another();

        //когда персонаж закончил движение, вызываем событие
        const event = new CustomEvent("PersonChangedPosition", {
            detail: {
                where: overworld.map,
                who: this,
                pos: this.getCurPos(),
                what: "moveUp"
            }
        });
        document.addEventListener("PersonChangedPosition", Handler.handler);
        document.dispatchEvent(event);

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
                if (this.isCellFree("down")) {
                    await step(); 
                } else {
                    console.log("Занято!");
                    break;
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

    //умираем
    async die() {
        await this.sprite.dieAnimation();
        //убираем чела c нашей игровой площадки
        this.x = -32;
        this.y = -32;
    }

}