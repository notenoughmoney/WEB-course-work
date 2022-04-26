class Person extends GameObject {
    constructor(config) {
        super(config);
        this.dead = false;
    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    counter = 0;
    speed = 20;

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

    isCellGood() {
        let map = overworld.getMap();

        //получаем реку и врагов
        let water = map.water;
        //получаем занятые персонажами клетки
        let enemyPos = overworld.getEnemyCells();

        //считаем все занятые клетки
        let badCells = water.concat(enemyPos);

        return !JSON.stringify(badCells).includes(JSON.stringify(this.getCurPos()));
    }

    //движения
    async moveRight(c = 1) {

        let eventPersonChangedPosition = new CustomEvent("PersonChangedPosition", {
            detail: {
                where: overworld.map,
                who: this,
                pos: null,
                what: "moveRight"
            }
        });

        const step = async () => {
            this.x += 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        this.sprite.moveRightAnimation(c); //асинхронная
        for (let i = 0; i < c * 32; i ++) {
            //с каждой прошедшей клектой проверяем стенки
            if (i % 32 == 0) {

                if (i != 0) {
                    eventPersonChangedPosition.detail.pos = this.getCurPos()
                    //каждый раз при прохождении клетки
                    document.addEventListener("PersonChangedPosition", Handler.moveHandler);
                    document.addEventListener("PersonChangedPosition", AchieveHandler.stepHandler);
                    document.dispatchEvent(eventPersonChangedPosition);
                }

                //проверка на наличие стен и друзей
                if (this.isCellFree("right")) {
                    //проверка на наличие реки и врагов
                    if (this.isCellGood("right")) {
                        await step();
                    } else {
                        await this.die();
                        break;
                        
                    }
                } else {
                    overworld.getMap().startCutscene([
                        {type: "delTextMessage"},
                        {type: "textMessage", text: "Твой персонаж ударился. Не делай больше так!"}
                    ]);
                    break;
                }
                
            } else 
                await step();
        }

        if (!this.isCellGood()) await this.die();

        this.sprite.stayPosRight();
        overworld.another();

        eventPersonChangedPosition.detail.pos = this.getCurPos()
        //и в конце
        document.addEventListener("PersonChangedPosition", Handler.moveHandler);
        document.addEventListener("PersonChangedPosition", AchieveHandler.stepHandler);
        document.dispatchEvent(eventPersonChangedPosition);
    }
    async moveLeft(c = 1) {

        let eventPersonChangedPosition = new CustomEvent("PersonChangedPosition", {
            detail: {
                where: overworld.map,
                who: this,
                pos: null,
                what: "moveLeft"
            }
        });

        const step = async () => {
            this.x -= 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        this.sprite.moveLeftAnimation(c); //асинхронная
        for (let i = 0; i < c * 32; i ++) {
            if (i % 32 == 0) {

                if (i != 0) {
                    eventPersonChangedPosition.detail.pos = this.getCurPos()
                    document.addEventListener("PersonChangedPosition", Handler.moveHandler);
                    document.addEventListener("PersonChangedPosition", AchieveHandler.stepHandler);
                    document.dispatchEvent(eventPersonChangedPosition);
                }

                //проверка на наличие стен и друзей
                if (this.isCellFree("left")) {
                    //проверка на наличие реки и врагов
                    if (this.isCellGood("left")) {
                        await step();
                    } else {
                        await this.die();
                        break;
                        
                    }
                } else {
                    overworld.getMap().startCutscene([
                        {type: "delTextMessage"},
                        {type: "textMessage", text: "Твой персонаж ударился. Не делай больше так!"}
                    ]);
                    break;
                }

            } else 
                await step();
        }

        if (!this.isCellGood()) await this.die();

        this.sprite.stayPosLeft();
        overworld.another();

        //когда персонаж закончил движение, вызываем событие
        eventPersonChangedPosition.detail.pos = this.getCurPos()
        document.addEventListener("PersonChangedPosition", Handler.moveHandler);
        document.addEventListener("PersonChangedPosition", AchieveHandler.stepHandler);
        document.dispatchEvent(eventPersonChangedPosition);
    }
    async moveUp(c = 1) {

        let eventPersonChangedPosition = new CustomEvent("PersonChangedPosition", {
            detail: {
                where: overworld.map,
                who: this,
                pos: null,
                what: "moveUp"
            }
        });

        const step = async () => {
            this.y -= 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        if (this.sprite.currentDir == "right") this.sprite.moveRightAnimation(c);
        else this.sprite.moveLeftAnimation(c);
        for (let i = 0; i < c * 32; i ++) {
            if (i % 32 == 0) {

                if (i != 0) {
                    eventPersonChangedPosition.detail.pos = this.getCurPos()
                    document.addEventListener("PersonChangedPosition", Handler.moveHandler);
                    document.addEventListener("PersonChangedPosition", AchieveHandler.stepHandler);
                    document.dispatchEvent(eventPersonChangedPosition);
                }

                //проверка на наличие стен и друзей
                if (this.isCellFree("up")) {
                    //проверка на наличие реки и врагов
                    if (this.isCellGood("up")) {
                        await step();
                    } else {
                        await this.die();
                        break;
                        
                    }
                } else {
                    overworld.getMap().startCutscene([
                        {type: "delTextMessage"},
                        {type: "textMessage", text: "Твой персонаж ударился. Не делай больше так!"}
                    ]);
                    break;
                }

            } else 
                await step();
        }

        if (!this.isCellGood()) await this.die();

        if (this.sprite.currentDir == "right") this.sprite.stayPosRight(c);
        else this.sprite.stayPosLeft(c);
        overworld.another();

        eventPersonChangedPosition.detail.pos = this.getCurPos()
        //когда персонаж закончил движение, вызываем событие
        document.addEventListener("PersonChangedPosition", Handler.moveHandler);
        document.addEventListener("PersonChangedPosition", AchieveHandler.stepHandler);
        document.dispatchEvent(eventPersonChangedPosition);
    }
    async moveDown(c = 1) {

        let eventPersonChangedPosition = new CustomEvent("PersonChangedPosition", {
            detail: {
                where: overworld.map,
                who: this,
                pos: null,
                what: "moveDown"
            }
        });

        const step = async () => {
            this.y += 1;
            overworld.another();
            await this.timeout(this.speed);
        }
        if (this.sprite.currentDir == "right") this.sprite.moveRightAnimation(c);
        else this.sprite.moveLeftAnimation(c);
        for (let i = 0; i < c * 32; i ++) {
            if (i % 32 == 0) {

                if (i != 0) {
                    eventPersonChangedPosition.detail.pos = this.getCurPos()
                    document.addEventListener("PersonChangedPosition", Handler.moveHandler);
                    document.addEventListener("PersonChangedPosition", AchieveHandler.stepHandler);
                    document.dispatchEvent(eventPersonChangedPosition);
                }

                //проверка на наличие стен и друзей
                if (this.isCellFree("down")) {
                    //проверка на наличие реки и врагов
                    if (this.isCellGood("down")) {
                        await step();
                    } else {
                        await this.die();
                        break;
                        
                    }
                } else {
                    overworld.getMap().startCutscene([
                        {type: "delTextMessage"},
                        {type: "textMessage", text: "Твой персонаж ударился. Не делай больше так!"}
                    ]);
                    break;
                }

            } else 
                await step();
        }

        if (!this.isCellGood()) await this.die();

        if (this.sprite.currentDir == "right") this.sprite.stayPosRight(c);
        else this.sprite.stayPosLeft(c);
        overworld.another();

        eventPersonChangedPosition.detail.pos = this.getCurPos()
        //когда персонаж закончил движение, вызываем событие
        document.addEventListener("PersonChangedPosition", Handler.moveHandler);
        document.addEventListener("PersonChangedPosition", AchieveHandler.stepHandler);
        document.dispatchEvent(eventPersonChangedPosition);
    }
    //удары
    async hitRight(c = 1) {
        await this.sprite.hitRightAnimation(c);
        this.sprite.stayPosRight();
        overworld.another();

        //когда персонаж закончил движение, вызываем событие
        const eventPersonHitted = new CustomEvent("PersonHitted", {
            detail: {
                where: overworld.map,
                who: this,
                pos: this.getCurPos(),
                what: "hitRight"
            }
        });
        document.addEventListener("PersonHitted", Handler.hitHandler);
        document.dispatchEvent(eventPersonHitted);
    }
    async hitLeft(c = 1) {
        await this.sprite.hitLeftAnimation(c);
        this.sprite.stayPosLeft();
        overworld.another();

        //когда персонаж закончил движение, вызываем событие
        const eventPersonHitted = new CustomEvent("PersonHitted", {
            detail: {
                where: overworld.map,
                who: this,
                pos: this.getCurPos(),
                what: "hitLeft"
            }
        });
        document.addEventListener("PersonHitted", Handler.hitHandler);
        document.dispatchEvent(eventPersonHitted);
    }
    //спавн
    async spawnMovement(c = 1) {
        await this.sprite.spawnMovement(c);
    }

    //умираем
    async die() {
        this.dead = true;
        await this.sprite.dieAnimation();
        //убираем чела c нашей игровой площадки
        this.x = -32;
        this.y = -32;

        if(this.name == "Naruto" || this.name == "Sakura" || this.name == "Sasuke") {
            const eventPersonDied = new CustomEvent("PersonDied");
            document.addEventListener("PersonDied", AchieveHandler.personDieHandler);
            document.dispatchEvent(eventPersonDied);
        } else {
            const eventEnemyDied = new CustomEvent("EnemyDied");
            document.addEventListener("EnemyDied", AchieveHandler.enemyDieHandler);
            document.dispatchEvent(eventEnemyDied);
        }
    }

}