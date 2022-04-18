class OverworldMap {
    constructor(config) {
        this.name = config.name;
        this.gameObjects = config.gameObjects;
        this.walls = config.walls;
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
    }

    //рисуем карту
    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    async startCutscene(events) {
        for (let i=0; i<events.length; i++) {
          const eventHandler = new OverworldEvent({
            event: events[i],
            map: this,
          })
          await eventHandler.init();
        }
    }
}

