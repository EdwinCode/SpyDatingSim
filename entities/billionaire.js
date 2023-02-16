class Billionaire {
    constructor(game) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/billionaire.png");

        // pulled out repeated number to a variable
        this.billionaireH = 232;

        // character placement
        this.x = -250;
        this.y = 320;

        this.velocity = 70;
        this.direction = 0;
        this.directionDuration = 500;

        // wander BB
        this.wanderX = -350;
        this.wanderY = 295;
        this.wanderBB = new BoundingBox(this.wanderX, this.wanderY, 300, 180);

        this.updateBB();
        this.updateInteractionBB();

        this.animations = [];
        this.loadAnimations();
    };

    setBillionairePlacement(x, y) {
        this.x = x;
        this.y = y;
    }

    setWanderBBPlacement(x, y) {
        this.wanderX = x;
        this.wanderY = y;
    }

    loadAnimations() {
        // walking animation
        // 0 = down, 1 = up, 2 = left, 3 = right
        this.animations[0] = new Animator(this.spritesheet, 0, 0, 120, this.billionaireH, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 0, 240, 128, this.billionaireH, 4, 0.3);
        this.animations[2] = new Animator(this.spritesheet, 0, 480, 120, this.billionaireH, 4, 0.3);
        this.animations[3] = new Animator(this.spritesheet, 0, 720, 120, this.billionaireH, 4, 0.3);

    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y + 40, 128 / 2 - 12, this.billionaireH / 2 - 40);
    };

    updateInteractionBB() {
        this.interactBB = new BoundingBox(this.x - 40, this.y - 30, 128, this.billionaireH - 40);
    };

    update() {
        this.updateBB();
        this.updateInteractionBB();

        // choose a random direction after a # of rounds
        if (this.directionDuration === 0) {
            console.log("zero");  // debug

            this.direction = this.chooseRandDirection();
            // random duration to keep animator the same for
            this.directionDuration = 500;

            // keep choosing new direction if there is collision detected
            while (this.collides(this.direction)) {
                this.direction = this.chooseRandDirection();
            }
        }

        // else still duration
        // no collision
        if (this.collides(this.direction) === false) {
            // down
            if (this.direction === 0) {
                this.y += this.velocity * this.game.clockTick;
            }

            // up
            else if (this.direction === 1) {
                this.y -= this.velocity * this.game.clockTick;
            }

            // left
            else if (this.direction === 2) {
                this.x -= this.velocity * this.game.clockTick;
            }

            // right
            else {
                this.x += this.velocity * this.game.clockTick;
            }

            this.directionDuration -= 1;
        }

        // collision
        else {
            // choose new direction but keep duration same
            while (this.collides(this.direction)) {
                this.direction = this.chooseRandDirection();
            }
        }
    };

    // returns 0, 1, 2, 3
    chooseRandDirection() {
        return Math.floor(Math.random() * 4);
    };

    collides(direction) {
        // down
        if (direction === 0) {
            // return true if going down and there is a down collision
            return this.lastBB.y + this.lastBB.height >= this.wanderBB.y + this.wanderBB.height;
        }

        // up
        else if (direction === 1) {
            // return true if going up and there is an up collision
            return this.lastBB.y <= this.wanderBB.y;
        }

        // left
        else if (direction === 2) {
            // return true if going left and there is a left collision
            return this.lastBB.x <= this.wanderBB.x;
        }

        // right
        else {
            // return true if going right and there is a right collision
            return this.lastBB.x + this.lastBB.width >= this.wanderBB.x + this.wanderBB.width;
        }
    };

    draw(ctx) {
        this.animations[this.direction].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE / 6);

        // debug
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

            ctx.strokeStyle = 'green';
            ctx.strokeRect(this.interactBB.x - this.game.camera.x, this.interactBB.y - this.game.camera.y, this.interactBB.width, this.interactBB.height);

            ctx.strokeStyle = 'blue';
            ctx.strokeRect(this.wanderBB.x - this.game.camera.x, this.wanderBB.y - this.game.camera.y, this.wanderBB.width, this.wanderBB.height);

        }
    };
};