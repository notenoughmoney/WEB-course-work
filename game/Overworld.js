class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        
    }

    //возвращаем челиков на свои места
    returnPos() {
        Object.values(this.map.gameObjects).forEach(object => {
            object.setPos(object.sx, object.sy);
            object.sprite.useShadow = true;
            object.sprite.setStartDir();
            this.another();
        });
    }

    //получаем занятые персонажами клетки
    getOccupiedCells() {
        return [
            [this.Naruto.x/32, this.Naruto.y/32],
            (this.Sakura == undefined) ? null : [this.Sakura.x/32, this.Sakura.y/32],
            (this.Sasuke == undefined) ? null : [this.Sasuke.x/32, this.Sasuke.y/32], 
            //и другие
        ];
    }

    getEnemyCells() {
        return [
            (this.Enemy1 == undefined || this.Enemy1.dead) ? null : [this.Enemy1.x/32, this.Enemy1.y/32],
            (this.Enemy2 == undefined || this.Enemy2.dead) ? null : [this.Enemy2.x/32, this.Enemy2.y/32],
            (this.Enemy3 == undefined || this.Enemy3.dead) ? null : [this.Enemy3.x/32, this.Enemy3.y/32],
            (this.Itachi == undefined) ? null : [this.Itachi.x/32, this.Itachi.y/32],
        ]
    }

    //на какой карте происходит действие
    getMap() {
        return this.map;
    }

    //отрисовка
    another() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.map.drawLowerImage(this.ctx);
        Object.values(this.map.gameObjects).forEach(object => {
            object.sprite.draw(this.ctx);
        });
    }

    async team7Spawn() {
        this.Naruto.spawnMovement();
        if (this.Sakura != undefined) this.Sakura.spawnMovement();
        if (this.Sasuke != undefined) this.Sasuke.spawnMovement();
        if (this.Itachi != undefined) {
            this.Itachi.setPos(utils.widthGrid(7), utils.widthGrid(2));
            this.Itachi.moveLeft(1);
            console.log("oops");
        }
    }

    //вот эта функция предполагает инициализацию уровня
    init(mapConfig) {
        //указываем какую карту (уровень) хотим открыть
        this.map = new OverworldMap(mapConfig);
        //не понимаю, что это
        this.map.overworld = this;

        //подготавливаем персонажей, чтобы потом с ними спокойно работать 
        this.Naruto = this.map.gameObjects.naruto;
        this.Sakura = this.map.gameObjects.sakura;
        this.Sasuke = this.map.gameObjects.sasuke;
        this.Enemy1 = this.map.gameObjects.enemy1;
        this.Enemy2 = this.map.gameObjects.enemy2;
        this.Enemy3 = this.map.gameObjects.enemy3;
        this.Itachi = this.map.gameObjects.itachi; 

        //чтобы человечки показались
        this.team7Spawn(1);

        //чтобы запустить соответствующий обработчик
        const eventSceneInit = new CustomEvent("SceneInit", {
            detail: {
                where: this.map
            }
        });
        document.addEventListener("SceneInit", Handler.sceneInitHandler);
        document.dispatchEvent(eventSceneInit);
    }

    async startScript(code) {

        //все оживают и возвращаются на свои места
        this.returnPos();


        try {
            await eval("(async () => {" + code + "})()");
        } catch (error) {
            await this.map.startCutscene([
                {type: "textMessage", text: "Упс... Похоже ты что-то ввёл неправильно."}
            ]);
            console.log(error);
        }
        

    }

    

    
}

