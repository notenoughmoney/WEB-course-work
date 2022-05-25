class Naruto extends Person {
    constructor(config) {
        super(config);
        this.name = "Naruto";
    }

    //сексуальное джутсу
    async sexyJutsu() {
        await this.sprite.sexyAnimation();

        //когда закончил, вызываем событие
        const eventPersonHitted = new CustomEvent("PersonHitted", {
            detail: {
                where: overworld.map,
                who: this,
                pos: this.getCurPos(),
                what: "sexyJutsu"
            }
        });
        document.addEventListener("PersonHitted", Handler.sexyJutsuHandler);
        document.dispatchEvent(eventPersonHitted);
    }
}