window.OverworldMaps = {

    lev1: {
        name: "1",
        lowerSrc: "/images/maps/lev1.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(2),
                y: utils.widthGrid(2),
                src: "/images/naruto_act.png",
                startDir: "right"
            })
        },
        walls: [
            [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], // верх
            [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], // низ
            [0, 1], [0, 2], [0, 3], [0, 4], // лево
            [8, 1], [8, 2], [8, 3], [8, 4], // право
            [1, 1], [1, 2], // кровать
            [3, 1], [4, 1], // шкаф
            [7, 1] // тумба
        ]
    },

    lev2: {
        name: "2",
        lowerSrc: "/images/maps/lev2.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(0),
                y: utils.widthGrid(4),
                src: "/images/naruto_act.png",
                startDir: "right"
            })
        },
        walls: []
    },

    lev3: {
        name: "3",
        lowerSrc: "/images/maps/lev3.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(1),
                y: utils.widthGrid(2),
                src: "/images/naruto_act.png",
                startDir: "right"
            }),
            sakura: new Sakura({
                x: utils.widthGrid(2),
                y: utils.widthGrid(2),
                src: "/images/sakura_act.png",
                startDir: "right"
            }),
            sasuke: new Sasuke({
                x: utils.widthGrid(2),
                y: utils.widthGrid(3),
                src: "/images/sasuke_act.png",
                startDir: "right"
            }),
        },
        walls: [
            [0, 1], [0, 2], [0, 3], [0, 4], // левая
            [1, 4], [2, 4], [3, 4], [4, 4], // нижняя
            [1, 1], [2, 1], [3, 1], [3, 2], [4, 2] // верхняя
        ]
    },

    lev4: {
        name: "4",
        lowerSrc: "/images/maps/lev4.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(2),
                y: utils.widthGrid(2),
                src: "/images/naruto_act.png",
                startDir: "right"
            }),
            sakura: new Sakura({
                x: utils.widthGrid(0),
                y: utils.widthGrid(3),
                src: "/images/sakura_act.png",
                startDir: "right"
            }),
            sasuke: new Sasuke({
                x: utils.widthGrid(0),
                y: utils.widthGrid(1),
                src: "/images/sasuke_act.png",
                startDir: "right"
            }),
            enemy: new Enemy({
                x: utils.widthGrid(5),
                y: utils.widthGrid(2),
                src: "/images/enemy_act.png",
                startDir: "left"
            }),
        },
        walls: []
    },

    lev5: {
        name: "5",
        lowerSrc: "/images/maps/lev5.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(2),
                y: utils.widthGrid(3),
                src: "/images/naruto_act.png",
                startDir: "right"
            }),
            sakura: new Sakura({
                x: utils.widthGrid(1),
                y: utils.widthGrid(4),
                src: "/images/sakura_act.png",
                startDir: "right"
            }),
            sasuke: new Sasuke({
                x: utils.widthGrid(1),
                y: utils.widthGrid(2),
                src: "/images/sasuke_act.png",
                startDir: "right"
            }),
            enemy1: new Enemy({
                x: utils.widthGrid(5),
                y: utils.widthGrid(2),
                src: "/images/enemy_act.png",
                startDir: "left"
            }),
            enemy2: new Enemy({
                x: utils.widthGrid(5),
                y: utils.widthGrid(3),
                src: "/images/enemy_act.png",
                startDir: "left"
            }),
            enemy3: new Enemy({
                x: utils.widthGrid(5),
                y: utils.widthGrid(4),
                src: "/images/enemy_act.png",
                startDir: "left"
            }),
        },
        walls: [
            [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1],
            [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5] 
        ]
    },
}