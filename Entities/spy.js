class Spy {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/sprite_girl_purple.png");

        this.width = 140;
        this.height = 210;

        this.direction = 0;
        this.state = 0;

        this.updateBB();

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (let i = 0; i < 4; i++) { // three states
            this.animations.push([]);
            for (let j = 0; j < 5; j++) { // four directions
                this.animations[i].push([]);
            }
        }

        // state = 0 is the idle animation
        // 0, 1, 2, 3 are right, down, left, up
        this.animations[0][0] = new Animator(this.spritesheet, 8, 655, 128, 210, 1, 0.2);
        this.animations[0][1] = new Animator(this.spritesheet, 8, 8, 136, 210, 1, 0.2);
        this.animations[0][2] = new Animator(this.spritesheet, 8, 440, 128, 210, 1, 0.2);
        this.animations[0][3] = new Animator(this.spritesheet, 8, 223, 128, 210, 1, 0.2);

        // state = 1 is the walking animation
        // 0, 1, 2, 3 are right, down, left, up
        this.animations[1][0] = new Animator(this.spritesheet, 8, 655, 128, 210, 4, 0.2);
        this.animations[1][1] = new Animator(this.spritesheet, 8, 8, 136, 210, 4, 0.2);
        this.animations[1][2] = new Animator(this.spritesheet, 8, 440, 128, 210, 4, 0.2);
        this.animations[1][3] = new Animator(this.spritesheet, 8, 223, 128, 210, 4, 0.2);


        // state = 2 is the running animation
        // 0, 1, 2, 3 are right, down, left, up
        this.animations[2][0] = new Animator(this.spritesheet, 8, 655, 128, 210, 4, 0.2);
        this.animations[2][1] = new Animator(this.spritesheet, 8, 8, 136, 210, 4, 0.2);
        this.animations[2][2] = new Animator(this.spritesheet, 8, 440, 128, 210, 4, 0.2);
        this.animations[2][3] = new Animator(this.spritesheet, 8, 223, 128, 210, 4, 0.2);

    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y + 40, this.width/2 - 12, this.height/2 - 40);

    };

    update() {
        //movement
        if (!this.game.up && !this.game.down && !this.game.left && !this.game.right) {
            this.state = 0; // idle
        } else {
            if (this.game.right && this.game.left && this.game.up && this.game.down) {
                this.state = 0; // idle
            } else if (this.game.up && this.game.run && !this.game.down) {
                this.direction = 3; // up
                this.state = 2; // running
                this.y -= 8;
            } else if (this.game.up && !this.game.down) {
                this.direction = 3; // up
                this.state = 1; // walking
                this.y -= 4;
            } else if (this.game.down && this.game.run && !this.game.up) {
                this.direction = 1; // down
                this.state = 2; // running
                this.y += 8;
            } else if (this.game.down && !this.game.up) {
                this.direction = 1; // down
                this.state = 1; // walking
                this.y += 4;
            } else if (this.game.up && this.game.down) {
                this.direction = 3; // up
                this.state = 0; // idle
            }

            if (this.game.right && this.game.left && this.game.up && this.game.down) {
                this.state = 0; // idle
            } else if (this.game.right && this.game.run && !this.game.left) {
                this.direction = 0; // right
                this.state = 2; // running
                this.x += 8;
            } else if (this.game.right && !this.game.left) {
                this.direction = 0; // right
                this.state = 1; // walking
                this.x += 4;
            } else if (this.game.left && this.game.run && !this.game.right) {
                this.direction = 2; // left
                this.state = 2; // running
                this.x -= 8;
            } else if (this.game.left && !this.game.right) {
                this.direction = 2; // left
                this.state = 1; // walking
                this.x -= 4;
            } else if (this.game.right && this.game.left && this.game.up) {
                this.direction = 3; // up
                this.state = 1; // walking
            } else if (this.game.right && this.game.left && this.game.down) {
                this.direction = 1; // down
                this.state = 1; // walking
            } else if (this.game.right && this.game.left) {
                this.direction = 0; // right
                this.state = 0; // idle
            }
        }


        //Update position
        this.updateBB();

        var that = this;
        this.game.entities.forEach(function (entity) {
            //if the entity has a bounding box and we collided with it
            if (entity.BB && that.BB.collide(entity.BB)) {
                // if spy runs into a big table
                if ((entity instanceof BigTable || entity instanceof BigCouch || entity instanceof ChairRight || entity instanceof ChairLeft)) {
                    //left + up
                    if (that.lastBB.collide(entity.leftBB) && that.lastBB.collide(entity.topBB)) {
                        if (that.y < entity.y) { // hit corner from above
                            that.y -= 4;
                        } else {
                            that.x -= 4; // hit corner from the left
                        }
                        //left + down
                    } else if (that.lastBB.collide(entity.leftBB) && that.lastBB.collide(entity.bottomBB)) {
                        if (that.y > entity.y) { // hit corner from below
                            that.y += 4;
                        } else {
                            that.x -= 4; // hit corner from the left
                        }
                        //right and up
                    } else if (that.lastBB.collide(entity.rightBB) && that.lastBB.collide(entity.topBB)) {
                        if (that.y < entity.y) { // hit corner from above
                            that.y -= 4;
                        } else {
                            that.x += 4; // hit corner from the right
                        }
                        //right and down
                    } else if (that.lastBB.collide(entity.rightBB) && that.lastBB.collide(entity.bottomBB)) {
                        if (that.y > entity.y) {
                            that.y += 4;
                        } else {
                            that.x += 4;
                        }
                    } else if (that.lastBB.collide(entity.leftBB)) {
                        that.x -= 4;
                    } else if (that.lastBB.collide(entity.rightBB)) {
                        that.x += 4;
                    } else if (that.lastBB.collide(entity.topBB)) {
                        that.y -= 4;
                    } else {
                        that.y += 4;
                    }
                }


            }
            that.updateBB();
        });

    };

    draw(ctx) {

        this.animations[this.state][this.direction].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE/6);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}
