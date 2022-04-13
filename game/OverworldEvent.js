class OverworldEvent {
    constructor({map, event}) {
        this.map = map;
        this.event = event;
    }

    textMessage(resolve) {
        const message = new TextMessage({
            text: this.event.text,
            onComplete: () => resolve()
        })
        message.init(document.querySelector(".game-container"))
    }

    init() {
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}