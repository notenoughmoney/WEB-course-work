//здесь мы выполняем события

class OverworldEvent {
    constructor({map, event}) {
        this.map = map;
        this.event = event;
    }

    //кат-сцены с текстом
    textMessage(resolve) {
        const message = new TextMessage({
            text: this.event.text,
            onComplete: () => resolve()
        })
        message.init(document.querySelector(".game-container"))
    }

    delTextMessage(resolve) {
        let child = document.querySelector(".TextMessage");
        if (child == undefined) resolve();
        child.parentNode.removeChild(child);
        resolve();
    }

    changeMap(resolve) {
        const sceneTransition = new SceneTransition();
        sceneTransition.init(document.querySelector(".game-container"), () => {

            // для первого уровня ставим текст
            if (this.event.map == "lev1") {
                //вносим тестовый пример в <textarea>
                var startCode = "Naruto.moveDown()\nNaruto.moveRight(5);"
                document.querySelector(".code-area").value = startCode;
            } else {
                document.querySelector(".code-area").value = "";
            }

            let game_container = document.getElementById("game-container");

            // гибкий контейнер для карт
            if (this.event.map == "lev1") {
                game_container.style.width = "calc(32px * 9)";
                game_container.style.height = "calc(32px * 6)";
            }
            if (this.event.map == "lev2") {
                game_container.style.width = "calc(32px * 10)";
                game_container.style.height = "calc(32px * 6)";
            }
            if (this.event.map == "lev3") {
                game_container.style.width = "calc(32px * 5)";
                game_container.style.height = "calc(32px * 6)";
            }
            if (this.event.map == "lev4") {
                game_container.style.width = "calc(32px * 9)";
                game_container.style.height = "calc(32px * 7)";
            }
            if (this.event.map == "lev5") {
                game_container.style.width = "calc(32px * 9)";
                game_container.style.height = "calc(32px * 7)";
            }
            if (this.event.map == "lev6") {
                game_container.style.width = "calc(32px * 8)";
                game_container.style.height = "calc(32px * 5)";
            } 

            this.map.overworld.init(window.OverworldMaps[this.event.map]);
            resolve();
            sceneTransition.fadeOut();
        });
    }

    

    init() {
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}