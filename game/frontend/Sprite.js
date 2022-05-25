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
        this.useShadow = true && !config.dontUseShadow;
        if (this.useShadow)
            this.shadow.src = "/game/frontend/images/Shadow.png";
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }

        //направление взгляда при спавне
        this.startDir = config.startDir;
        

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
            hitright: [
                [0, 100, 50, 50],
                [50, 100, 50, 50],
                [100, 100, 50, 50]
            ], 
            hitleft: [
                [0, 250, 50, 50],
                [50, 250, 50, 50],
                [100, 250, 50, 50]
            ],
            spawn: [
                [0, 0, 50, 50],
                [50, 0, 50, 50],
                [100, 0, 50, 50],
                [150, 0, 50, 50],
                [100, 0, 50, 50],
                [50, 0, 50, 50],
                [0, 0, 50, 50]
            ],
            dying: [
                [0, 350, 50, 50],
                [50, 350, 50, 50],
                [100, 350, 50, 50],
                [150, 350, 50, 50],
                [200, 350, 50, 50],
                [250, 350, 50, 50],
                [300, 0, 0, 0] 
            ],
            sexy: [
                [0, 400, 50, 50],
                [50, 400, 50, 50],
                [100, 400, 50, 50],
                [150, 400, 50, 50],
                [200, 400, 50, 50],
                [250, 400, 50, 50],
                [0, 450, 50, 50],
                [50, 450, 50, 50],
                [100, 450, 50, 50],
                [150, 450, 50, 50],
                [200, 450, 50, 50],
                [250, 450, 50, 50],
                [0, 500, 50, 50],
                [50, 500, 50, 50],
                [100, 500, 50, 50],
                [150, 500, 50, 50],
                [200, 500, 50, 50],
                [250, 500, 50, 50],
                [0, 550, 50, 50],
                [50, 550, 50, 50],
                [100, 550, 50, 50],
                [150, 550, 50, 50],
                [200, 550, 50, 50],
                [250, 550, 50, 50],
                [0, 600, 50, 50],
                [50, 600, 50, 50],
                [100, 600, 50, 50],
                [150, 600, 50, 50],
                [200, 600, 50, 50],
                [250, 600, 50, 50],
            ],
            stayright: [0, 0, 50, 50],
            stayleft: [0, 150, 50, 50]
        }
        this.frame = this.animations.stayright;

        this.currentDir = "right";

        this.gameObject = config.gameObject;

        this.setStartDir();

    }

    setStartDir() {
        if (this.startDir == "left") 
            this.frame = this.animations.stayleft;
        else
            this.frame = this.animations.stayright;
    }

    ////////// RIGHT //////////
    nextFrameRight(frameN) {
        this.frame = this.animations.walkright[frameN];
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

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    nextHitRight(frameN) {
        this.frame = this.animations.hitright[frameN];
    }
    async hitRightAnimation(c) {
        for (let i = 0; i < c; i++) {
            let frameN = 0;
            for (let j = 0; j < 3; j++) {
                this.nextHitRight(frameN);
                overworld.another();
                frameN++;
                await this.timeout(150);
            }
        }
    }

    nextHitLeft(frameN) {
        this.frame = this.animations.hitleft[frameN];
    }
    async hitLeftAnimation(c) {
        for (let i = 0; i < c; i++) {
            let frameN = 0;
            for (let j = 0; j < 3; j++) {
                this.nextHitLeft(frameN);
                overworld.another();
                frameN++;
                await this.timeout(150);
            }
        }
    }

    //только в правую сторону
    nextDie(frameN) {
        this.frame = this.animations.dying[frameN];
    }
    async dieAnimation() {
        //убираем тень
        this.useShadow = false;
        let frameN = 0;
        for (let i = 0; i < 7; i++) {
            this.nextDie(frameN);
            overworld.another();
            frameN++;
            await this.timeout(150);
        }
    }

    nextSpawn(frameN) {
        this.frame = this.animations.spawn[frameN];
    }
    async spawnMovement(c) {
        for (let i = 0; i < c; i++) {
            let frameN = 0;
            for (let j = 0; j < 7; j++) {
                this.nextSpawn(frameN);
                overworld.another();
                frameN++;
                await this.timeout(80);
            }
        }
    }

    nextSexy(frameN) {
        this.frame = this.animations.sexy[frameN];
    }
    async sexyAnimation() {
        let frameN = 0;
        for (let i = 0; i < 30; i++) {
            this.nextSexy(frameN);
            overworld.another();
            frameN++;
            await this.timeout(90);
        }
    }

    //после каждого мувмента приводми челиков в начальную стойку
    stayPosRight() {
        this.frame = this.animations.stayright;
    }
    stayPosLeft() {
        this.frame = this.animations.stayleft;
    }

    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;

        this.useShadow && ctx.drawImage(this.shadow, x, y);

        this.isLoaded && ctx.drawImage(this.image,
            this.frame[0], this.frame[1],
            this.frame[2], this.frame[3],
            (x - 8), (y - 17),
            50, 50
        );
    }


}