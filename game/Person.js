class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0;

        //this.direction = "up";

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y", 1],
            "left": ["x", -1],
            "right": ["x", 1],
        }
    }

    update(direction, l) {
        this.updatePosition(direction, l);
    }

    updatePosition(direction, l) {
        this.movingProgressRemaining = l;
        if(this.movingProgressRemaining > 0) {
            const[property, change] = this.directionUpdate[direction];
            this[property] += change;
            this.movingProgressRemaining -= 1;
        }
    }
}