window.OverworldMaps = {
    lev1: {
        lowerSrc: "/images/lev1.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(0),
                y: utils.widthGrid(4),
                src: "/images/naruto_act.png",
            }),
            sakura: new Sakura({
                x: utils.widthGrid(3),
                y: utils.widthGrid(4),
                src: "/images/sakura_act.png"
            }),
            sasuke: new Sasuke({
                x: utils.widthGrid(4),
                y: utils.widthGrid(2),
                src: "/images/sasuke_act.png"
            })
        },
        walls: [
            [1, 1], 
            [2, 1], 
            [3, 1], 
            [1, 2], 
            [3, 2], 
            [1, 3], 
            [2, 3], 
            [3, 3]
        ]
    },
    lev2: {
        lowerSrc: "/images/lev2.png",
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
                x: utils.widthGrid(2),
                y: utils.widthGrid(4),
                src: "/images/sasuke_act.png"
            })
        },
        walls: [
            [1, 1], 
            [2, 1], 
            [3, 1], 
            [3, 2], 
            [3, 4], 
            [4, 4], 
            [4, 5], 
            [5, 1], 
            [5, 2], 
            [5, 3], 
            [5, 4], 
            [6, 1], 
            [7, 1], 
            [8, 1], 
            [8, 2], 
            [6, 4], 
            [7, 4], 
            [8, 4]  
        ]
    },
    lev3: {

    },
}