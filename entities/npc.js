class NPC {
    constructor(game, spritesheet, x, y, dWidth, dHeight) {
        Object.assign(this, {game, x, y, dWidth, dHeight});
        this.spritesheet = ASSET_MANAGER.getAsset(spritesheet);

        this.velocity = 70;
        this.direction = 0;
        this.directionDuration = 500;

        this.wanderBB = new BoundingBox(this.x, this.y, 125 * PARAMS.BLOCKWIDTH, 100 * PARAMS.BLOCKWIDTH);

        this.updateBB();
        this.updateInteractionBB();

        this.animations = [];
    }

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, this.dWidth, this.dHeight);
    };

    updateInteractionBB() {
        this.interactBB = new BoundingBox(this.x - this.dWidth / 2, this.y - this.dHeight / 2, this.dWidth * 2, this.dHeight * 2);
    };


    update() {
        this.updateBB();
        this.updateInteractionBB();

        if (!Chatbox.OPEN) {

            // choose a random direction after a # of rounds
            if (this.directionDuration === 0) {
                //console.log("zero");  // debug

                this.direction = this.chooseRandDirection();
                // random duration to keep animator the same for
                this.directionDuration = 500;

                // keep choosing new direction if there is collision detected
                while (this.collides(this.direction)) {
                    this.direction = this.chooseRandDirection();
                }
            }

            var that = this;
            this.game.entities.forEach(function (entity) {
                //if the entity has a bounding box and we collided with it
                if (entity.BB && that.BB.collide(entity.BB)) {
                    if (entity instanceof Furniture || entity instanceof NPC || entity instanceof Spy) {
                        if (entity.BB.right <= (that.lastBB.left + 20)) { // from right
                            that.x += entity.BB.right - that.lastBB.left;
                            that.direction = that.chooseRandDirection();

                        } else if (entity.BB.left >= (that.lastBB.right - 20)) { // from left
                            that.x -= that.lastBB.right - entity.BB.left;
                            that.direction = that.chooseRandDirection();

                        } else if (entity.BB.bottom <= (that.lastBB.top + 20)) { //from below
                            that.y += entity.BB.bottom - that.lastBB.top;
                            that.direction = that.chooseRandDirection();

                        } else if (entity.BB.top >= (that.lastBB.bottom - 20)) { // from above
                            that.y -= that.lastBB.bottom - entity.BB.top;
                            that.direction = that.chooseRandDirection();

                        }
                    }
                }
            });

            // else still duration
            // no collision
            if (that.collides(that.direction) === false) {
                // down
                if (that.direction === 0) {
                    that.y += that.velocity * that.game.clockTick;
                }

                // up
                else if (that.direction === 1) {
                    that.y -= that.velocity * that.game.clockTick;
                }

                // left
                else if (that.direction === 2) {
                    that.x -= that.velocity * that.game.clockTick;
                }

                // right
                else {
                    that.x += that.velocity * that.game.clockTick;
                }

                this.directionDuration -= 1;
            }

            // collision
            else {
                // choose new direction but keep duration same
                while (that.collides(that.direction)) {
                    that.direction = that.chooseRandDirection();
                }
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
        if (!Chatbox.OPEN) {
            this.animations[this.direction].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);
        } else {
            this.animations[this.direction].drawStillFrame(ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);

        }
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

}


class Billionaire extends NPC{
    constructor(game, x, y) {
        super(game, "./sprites/entities/billionaire.png", x, y, 16 * PARAMS.BLOCKWIDTH, 29 * PARAMS.BLOCKWIDTH);

        this.loadAnimations();
    };


    loadAnimations() {
        // walking animation
        // 0 = down, 1 = up, 2 = left, 3 = right
        this.animations[0] = new Animator(this.spritesheet, 0, 0, 120, 232, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 0, 240, 128, 232, 4, 0.3);
        this.animations[2] = new Animator(this.spritesheet, 0, 480, 120, 232, 4, 0.3);
        this.animations[3] = new Animator(this.spritesheet, 0, 720, 120, 232, 4, 0.3);

    };
};

class Stephanie extends NPC{
    constructor(game, x, y) {
        super(game, "./sprites/entities/stephanie.png", x, y, 16 * PARAMS.BLOCKWIDTH, 29 * PARAMS.BLOCKWIDTH);

        this.loadAnimations();
    };


    loadAnimations() {
        // walking animation
        // 0 = down, 1 = up, 2 = left, 3 = right
        this.animations[0] = new Animator(this.spritesheet, 8, 8, 144, 208, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 8, 215, 150, 208, 4, 0.3);
        this.animations[2] = new Animator(this.spritesheet, 8, 420, 144, 208, 4, 0.3);
        this.animations[3] = new Animator(this.spritesheet, 8, 628, 144, 208, 4, 0.3);

    };
};

class Richie extends NPC{
    constructor(game, x, y) {
        super(game, "./sprites/entities/richie.png", x, y, 16 * PARAMS.BLOCKWIDTH, 29 * PARAMS.BLOCKWIDTH);

        this.loadAnimations();
    };


    loadAnimations() {
        // walking animation
        // 0 = down, 1 = up, 2 = left, 3 = right
        this.animations[0] = new Animator(this.spritesheet, 8, 8, 128, 208, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 8, 212, 128, 208, 4, 0.3);
        this.animations[2] = new Animator(this.spritesheet, 8, 420, 110, 208, 4, 0.3);
        this.animations[3] = new Animator(this.spritesheet, 8, 628, 110, 208, 4, 0.3);

    };
};

//
// OTHER NPCS
//

class Maid extends NPC{
    constructor(game, x, y) {
        super(game, "./sprites/entities/richie.png", x, y, 16 * PARAMS.BLOCKWIDTH, 29 * PARAMS.BLOCKWIDTH);

        this.loadAnimations();
    };


    loadAnimations() {
        // walking animation
        // 0 = down, 1 = up, 2 = left, 3 = right
        this.animations[0] = new Animator(this.spritesheet, 8, 8, 128, 208, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 8, 212, 128, 208, 4, 0.3);
        this.animations[2] = new Animator(this.spritesheet, 8, 420, 110, 208, 4, 0.3);
        this.animations[3] = new Animator(this.spritesheet, 8, 628, 110, 208, 4, 0.3);

    };
};

class Gardener extends NPC{
    constructor(game, x, y) {
        super(game, "./sprites/entities/richie.png", x, y, 16 * PARAMS.BLOCKWIDTH, 29 * PARAMS.BLOCKWIDTH);

        this.loadAnimations();
    };


    loadAnimations() {
        // walking animation
        // 0 = down, 1 = up, 2 = left, 3 = right
        this.animations[0] = new Animator(this.spritesheet, 8, 8, 128, 208, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 8, 212, 128, 208, 4, 0.3);
        this.animations[2] = new Animator(this.spritesheet, 8, 420, 110, 208, 4, 0.3);
        this.animations[3] = new Animator(this.spritesheet, 8, 628, 110, 208, 4, 0.3);

    };
};

class NightGhost extends NPC{
    constructor(game, x, y) {
        super(game, "./sprites/entities/richie.png", x, y, 16 * PARAMS.BLOCKWIDTH, 29 * PARAMS.BLOCKWIDTH);

        this.loadAnimations();
    };


    loadAnimations() {
        // walking animation
        // 0 = down, 1 = up, 2 = left, 3 = right
        this.animations[0] = new Animator(this.spritesheet, 8, 8, 128, 208, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 8, 212, 128, 208, 4, 0.3);
        this.animations[2] = new Animator(this.spritesheet, 8, 420, 110, 208, 4, 0.3);
        this.animations[3] = new Animator(this.spritesheet, 8, 628, 110, 208, 4, 0.3);

    };
};

class Butler extends NPC{
    constructor(game, x, y) {
        super(game, "./sprites/entities/richie.png", x, y, 16 * PARAMS.BLOCKWIDTH, 29 * PARAMS.BLOCKWIDTH);

        this.loadAnimations();
    };


    loadAnimations() {
        // walking animation
        // 0 = down, 1 = up, 2 = left, 3 = right
        this.animations[0] = new Animator(this.spritesheet, 8, 8, 128, 208, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 8, 212, 128, 208, 4, 0.3);
        this.animations[2] = new Animator(this.spritesheet, 8, 420, 110, 208, 4, 0.3);
        this.animations[3] = new Animator(this.spritesheet, 8, 628, 110, 208, 4, 0.3);

    };
};