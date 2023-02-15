class Billionaire {
    constructor(game) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/billionaire.png");

        this.billionaireW = 127 - 8;
        this.billionaireH = 239 - 8;

        this.x = 600;
        this.y = -20;

        this.velocity = 70;
        this.direction = 0;
        this.directionDuration = 50;

        this.wanderBB = new BoundingBox(this.x, this.y, 400,this.billionaireH / 2);

        this.updateBB();
        this.updateInteractionBB();

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        // walking animation
        // 0 = up, 1 = down, 2 = left, 3 = right
        this.animations[0] = new Animator(this.spritesheet, 8, 8, this.billionaireW, this.billionaireH, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 8, 248, this.billionaireW, this.billionaireH, 4, 0.3);
        this.animations[2] = new Animator(this.spritesheet, 8, 448, this.billionaireW, this.billionaireH, 4, 0.3);
        this.animations[3] = new Animator(this.spritesheet, 8, 728, this.billionaireW, this.billionaireH, 4, 0.3);

    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y + 40, this.billionaireW / 2 - 12, this.billionaireH / 2 - 40);
    };

    updateInteractionBB() {
        this.interactBB = new BoundingBox(this.x, this.y + 40, this.billionaireW / 2 - 12, this.billionaireH / 2 - 40);
    };

    update() {
        this.updateBB();
        this.updateInteractionBB();

        // choose a random direction after a # of rounds
        if (this.directionDuration === 0) {
            this.direction = this.chooseRandDirection();
            this.directionDuration = 50;
            while (this.collides(this.direction)) {
                this.direction = this.chooseRandDirection();
            }
        }

        // else still duration
        else {

            // up
            if (this.direction === 0) {
                this.y += this.velocity * this.game.clockTick;
            }

            // down
            else if (this.direction === 1) {
                this.y -= this.velocity * this.game.clockTick;
            }

            // left
            else if (this.direction === 3) {
                this.x += this.velocity * this.game.clockTick;
            }

            // right
            else {
                this.x -= this.velocity * this.game.clockTick;
            }

            this.directionDuration -= 1;
        }
    };

    // returns 0, 1, 2, 3
    chooseRandDirection() {
        return Math.floor(Math.random() * 4);
    };

    collides(direction) {
        // up
        if (direction === 0) {
            // return true if going up and there is an up collision
            return this.lastBB.y <= this.wanderBB.y;
        }

        // down
        else if (direction === 1) {
            // return true if going down and there is a down collision
            return this.lastBB.y + this.wanderBB.height >= this.wanderBB.y + this.wanderBB.height;
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