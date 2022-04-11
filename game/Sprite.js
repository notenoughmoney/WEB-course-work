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
                [0, 50, 50, 50],
                [50, 50, 50, 50],
                [100, 50, 50, 50],
                [150, 50, 50, 50],
                [200, 50, 50, 50],
                [250, 50, 50, 50]
            ],
            walkleft: [
                [0, 200, 50, 50],
                [50, 200, 50, 50],
                [100, 200, 50, 50],
                [150, 200, 50, 50],
                [200, 200, 50, 50],
                [250, 200, 50, 50]
            ], 
            stayright: [0, 0, 50, 50],
            stayleft: [0, 150, 50, 50]
        }
        this.frame = this.animations.stayright;

        this.currentDir = "right";

        //Reference to game object
        this.gameObject = config.gameObject;
    }


    ////////// RIGHT //////////
    nextFrameRight(frameN) {
        this.frame = this.animations.walkright[frameN];
        console.log(this.frame);
    }
    moveRightAnimation(c) {
        let frameN = 0;
        let counter = 0;
        var self = this;
        let timerId = setInterval(function() {
            counter++;
            if (counter == c*32) {
                clearInterval(timerId);
            } else {
                if (counter % 5 == 0) {
                    self.nextFrameRight(frameN);
                    frameN++;
                    if (frameN > 5) frameN = 0;
                }
            }
        }, 20);
        this.currentDir = "right";
    }

    ////////// LEFT //////////
    nextFrameLeft(frameN) {
        this.frame = this.animations.walkleft[frameN];
        console.log(this.frame);
    }
    moveLeftAnimation(c) {
        let frameN = 0;
        let counter = 0;
        var self = this;
        let timerId = setInterval(function() {
            counter++;
            if (counter == c*32) {
                clearInterval(timerId);
            } else {
                if (counter % 5 == 0) {
                    self.nextFrameLeft(frameN);
                    frameN++;
                    if (frameN > 5) frameN = 0;
                }
            }
        }, 20);
        this.currentDir = "left";
    }

    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

        this.isLoaded && ctx.drawImage(this.image,
            this.frame[0], this.frame[1],
            this.frame[2], this.frame[3],
            (x - 8), (y - 17),
            50, 50
        );
    }


}