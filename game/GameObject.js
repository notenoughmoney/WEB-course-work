class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.sx = config.x || 0;
        this.sy = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src,
            startDir: config.startDir,
            dontUseShadow: config.dontUseShadow
        });
    }
}