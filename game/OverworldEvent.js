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

    changeMap(resolve) {
        const sceneTransition = new SceneTransition();
        sceneTransition.init(document.querySelector(".game-container"), () => {
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