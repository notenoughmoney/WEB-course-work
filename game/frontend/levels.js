window.OverworldMaps = {

    lev1: {
        name: "1",
        lowerSrc: "/game/frontend/images/maps/lev1.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(2),
                y: utils.widthGrid(2),
                src: "/game/frontend/images/naruto_act.png",
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
        ], 
        water: []
    },

    lev2: {
        name: "2",
        lowerSrc: "/game/frontend/images/maps/lev2.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(0),
                y: utils.widthGrid(1),
                src: "/game/frontend/images/naruto_act.png",
                startDir: "right"
            })
        },
        walls: [
            [0, -1], [1, -1], [2, -1], [3, -1], [4, -1], [5, -1], [6, -1], [7, -1], [8, -1], [9, -1], // верх
            [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], // низ
            [-1, 0], [-1, 1], [-1, 2], [-1, 3], [-1, 4], [-1, 5], //левая
            [10, 0], [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], //правая
            [0, 3] //дерево
        ], 
        water: [
            [4, 0], [4, 1], [5, 1], [4, 2], [5, 2], [5, 4], [5, 5]
        ]
    },

    lev3: {
        name: "3",
        lowerSrc: "/game/frontend/images/maps/lev3.png",
        gameObjects: {
            sakura: new Sakura({
                x: utils.widthGrid(2),
                y: utils.widthGrid(2),
                src: "/game/frontend/images/sakura_act.png",
                startDir: "right"
            }),
            sasuke: new Sasuke({
                x: utils.widthGrid(2),
                y: utils.widthGrid(3),
                src: "/game/frontend/images/sasuke_act.png",
                startDir: "right"
            }),
            naruto: new Naruto({
                x: utils.widthGrid(1),
                y: utils.widthGrid(2),
                src: "/game/frontend/images/naruto_act.png",
                startDir: "right"
            })
        },
        walls: [
            [0, 1], [0, 2], [0, 3], [0, 4], // левая
            [1, 4], [2, 4], [3, 4], [4, 4], // нижняя
            [1, 1], [2, 1], [3, 1], [3, 2], [4, 2], // верхняя
            [5, 3] // справа
        ], 
        water: []
    },

    lev4: {
        name: "4",
        lowerSrc: "/game/frontend/images/maps/lev4.png",
        gameObjects: {
            enemy1: new Enemy({
                x: utils.widthGrid(5),
                y: utils.widthGrid(2),
                src: "/game/frontend/images/enemy_act.png",
                startDir: "left"
            }),
            naruto: new Naruto({
                x: utils.widthGrid(2),
                y: utils.widthGrid(2),
                src: "/game/frontend/images/naruto_act.png",
                startDir: "right"
            }),
            sakura: new Sakura({
                x: utils.widthGrid(0),
                y: utils.widthGrid(3),
                src: "/game/frontend/images/sakura_act.png",
                startDir: "right"
            }),
            sasuke: new Sasuke({
                x: utils.widthGrid(0),
                y: utils.widthGrid(1),
                src: "/game/frontend/images/sasuke_act.png",
                startDir: "right"
            })
        },
        walls: [
            [9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6]
        ], 
        water: [
            [0, 5], [1, 5], [2, 5], [1, 6], [2, 6]
        ]
    },

    lev5: {
        name: "5",
        lowerSrc: "/game/frontend/images/maps/lev5.png",
        gameObjects: {
            //поменям очередность, чтобы рендеринг происходил правильно
            enemy1: new Enemy({
                x: utils.widthGrid(5),
                y: utils.widthGrid(2),
                src: "/game/frontend/images/enemy_act.png",
                startDir: "left"
            }),
            enemy2: new Enemy({
                x: utils.widthGrid(5),
                y: utils.widthGrid(3),
                src: "/game/frontend/images/enemy_act.png",
                startDir: "left"
            }),
            enemy3: new Enemy({
                x: utils.widthGrid(5),
                y: utils.widthGrid(4),
                src: "/game/frontend/images/enemy_act.png",
                startDir: "left"
            }),
            sasuke: new Sasuke({
                x: utils.widthGrid(1),
                y: utils.widthGrid(2),
                src: "/game/frontend/images/sasuke_act.png",
                startDir: "right"
            }),
            naruto: new Naruto({
                x: utils.widthGrid(2),
                y: utils.widthGrid(3),
                src: "/game/frontend/images/naruto_act.png",
                startDir: "right"
            }),
            sakura: new Sakura({
                x: utils.widthGrid(1),
                y: utils.widthGrid(4),
                src: "/game/frontend/images/sakura_act.png",
                startDir: "right"
            })
        },
        walls: [
            [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], // верх
            [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], // низ
            [-1, 2], [-1, 3], [-1, 4], // левая
            [9, 2], [9, 3], [9, 4], // правая
        ], 
        water: []
    },

    lev6: {
        name: "6",
        lowerSrc: "/game/frontend/images/maps/lev6.png",
        gameObjects: {
            naruto: new Naruto({
                x: utils.widthGrid(2),
                y: utils.widthGrid(2),
                src: "/game/frontend/images/naruto_act.png",
                startDir: "right", 
                dontUseShadow: true
            }),
            itachi: new Enemy({
                x: utils.widthGrid(5),
                y: utils.widthGrid(2),
                src: "/game/frontend/images/itachi_act.png",
                startDir: "left", 
                dontUseShadow: true
            })
        },
        walls: [
            [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], // правая
            [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5] // нижняя
        ], 
        water: []
    },
}