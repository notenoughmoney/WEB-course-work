window.OverworldMaps = {
    lev1: {
        lowerSrc: "/images/Image.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(0),
                y: utils.widthGrid(1),
                src: "/images/Naruto.png",
            }),
            sakura: new Sakura({
                x: utils.widthGrid(3),
                y: utils.widthGrid(3),
                src: "/images/Sakura.png"
            }),
            sasuke: new Sasuke({
                x: utils.widthGrid(4),
                y: utils.widthGrid(0),
                src: "/images/Sasuke.png"
            })
        }
    },
    lev2: {

    },
    lev3: {

    },
}