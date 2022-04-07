class Sprite {
    constructor(config) {

        //Set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Shadow
        this.shadow = new Image();
        this.useShadow = true;
        if (this.useShadow)
            this.shadow.src = "/images/Shadow.png";
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }
        

        //Configuring animations
        this.animations = config.animations || {
            walkright: [
                [0, 0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "walkright";
        this.currentAnimationFrame = 0;

        //Reference to game object
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

        this.isLoaded && ctx.drawImage(this.image,
            0, 0,
            32, 32,
            x, (y - 4) /*staying right on the shadow*/ - 0 /*jump*/,
            32, 32
        );

    }
}