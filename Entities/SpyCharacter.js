class SpyCharacter {
    constructor(game) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/sprite_girl_purple.png");

        this.x = 0;
        this.y = 55;

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
        if (this.size === 0 || this.size === 3) {
            this.BB = new BoundingBox(this.x, this.y, 128, 210);
        }
        else {
            this.BB = new BoundingBox(this.x, this.y, 128, 210);
        }
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
            if (entity.BB && that.BB.collide(entity.BB)) {
                if ((entity instanceof BigTable)) {
                    if (that.BB.collide(entity.leftBB)) {
                        that.x -= 4;
                    } else if (that.BB.collide(entity.rightBB)) {
                        that.x += 4;
                    } else if (that.BB.collide(entity.upBB)) {
                        that.y -= 8;
                    } else {
                        that.y += 8;
                    }
                }

            }
            that.updateBB();
        });


        // stay within canvas bounds
        if(this.x > 700) this.x = 0;
        if(this.x < 0) this.x = 700;
        if(this.y > 700) this.y = 0;
        if(this.y < 0) this.y = 700;
    };
    draw(ctx) {
        this.animations[this.state][this.direction].drawFrame(this.game.clockTick, ctx, this.x, this.y);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
}