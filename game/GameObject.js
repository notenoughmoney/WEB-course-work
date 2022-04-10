class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/images/Naruto.png",

        });
    }

    //возвращаем в клетках в клетках
    getNextPos(dir) {
        if(dir == "up") 
            return [this.x/32, this.y/32 - 1];
        else if (dir == "down") 
            return [this.x/32, this.y/32 + 1];
        else if (dir == "right") 
            return [this.x/32 + 1, this.y/32];
        else if (dir == "left") 
            return [this.x/32 - 1, this.y/32];
    }
}