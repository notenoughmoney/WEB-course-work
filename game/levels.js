window.OverworldMaps = {
    lev1: {
        lowerSrc: "/images/Image.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(0),
                y: utils.widthGrid(4),
                src: "/images/naruto_act.png",
            }),
            sakura: new Sakura({
                x: utils.widthGrid(3),
                y: utils.widthGrid(3),
                src: "/images/sakura_act.png"
            }),
            sasuke: new Sasuke({
                x: utils.widthGrid(4),
                y: utils.widthGrid(2),
                src: "/images/sasuke_act.png"
            })
        },
        walls: [
            [1, 1], [2, 1], [3, 1], [1, 2], [3, 2], [1, 3], [2, 3], [3, 3]
        ]
    },
    lev2: {

    },
    lev3: {

    },
}