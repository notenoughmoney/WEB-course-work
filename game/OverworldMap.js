class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }
}

const heroNames = ['Naruto', 'Sasuke']

window.OverworldMaps = {
    lev1: {
        lowerSrc: "/images/Image.png",
        gameObjects: {
            hero: new Person({
                x: utils.widthGrid(3),
                y: utils.widthGrid(3),
            }),
            npc1: new GameObject({
                x: utils.widthGrid(1),
                y: utils.widthGrid(0),
                src: "/images/Sakura.png",
            })
        }
    },
    lev2: {
        lowerSrc: "/images/Image.png",
        gameObjects: {
            hero: new Person({
                x: utils.widthGrid(0),
                y: utils.widthGrid(1),
            }),
            npc1: new GameObject({
                x: utils.widthGrid(3),
                y: utils.widthGrid(3),
                src: "/images/Sakura.png",
            }),
            npc2: new GameObject({
                x: utils.widthGrid(4),
                y: utils.widthGrid(0),
                src: "/images/Sasuke.png",
            })
        }
    },
    lev3: {

    },
    lev4: {

    },
}