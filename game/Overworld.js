class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        
    }

    another() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.map.drawLowerImage(this.ctx);
        Object.values(this.map.gameObjects).forEach(object => {
            object.sprite.draw(this.ctx);
        });
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.lev1);
        this.Naruto = this.map.gameObjects.naruto;
        this.Sakura = this.map.gameObjects.sakura;
        this.Sasuke = this.map.gameObjects.sasuke;

        this.startGame();
    }

    async team7Spawn() {
        this.Naruto.spawnMovement(2);
        this.Sakura.spawnMovement(2);
        this.Sasuke.spawnMovement(2);
    }

    async startGame() {

        await this.Naruto.moveRight(4);
        await this.Sakura.moveDown(1);
        await this.Sasuke.moveUp(2);
        
    }
}

