class Guard{

    constructor(game, x, y, isUpDown) {
        Object.assign(this, {game, x, y, isUpDown});
        // add variables to set x, y and walk left<->right or up<->down
        // or make setter methods
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/guard.png");

        this.guardW = 14 * PARAMS.BLOCKWIDTH;
        this.guardH = 25 * PARAMS.BLOCKWIDTH;

        this.x = x * PARAMS.BLOCKWIDTH;
        this.y = y * PARAMS.BLOCKWIDTH;

        this.velocity = 70;

        //direction
        if (isUpDown) {
            this.direction = 0;

        } else {
            this.direction = 2;
        }

        //wanderBB
        if (isUpDown) {
            this.wanderBB = new BoundingBox(this.x, this.y, this.guardW * 3,this.guardH * 5);

        } else {
            this.wanderBB = new BoundingBox(this.x, this.y, this.guardW * 10,this.guardH * 2);
        }

        this.updateBB();
        this.updateSightBB();

        this.animations = [];
        this.loadAnimations();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, this.guardW, this.guardH);
    }

    updateSightBB() {
        // this.lastSightBB = this.sightBB;
        //if going up and down
        if (this.isUpDown) {
            if (this.direction === 0) {
                this.sightBB = new BoundingBox(this.x, this.y + this.guardH, this.guardW, this.wanderBB.height - (this.y - this.wanderBB.y));

            } else {
                this.sightBB = new BoundingBox(this.x, this.wanderBB.y, this.guardW, this.y - (this.wanderBB.y));
            }
        }
        //if going left and right
        else {
            if (this.direction === 2) {
                this.sightBB = new BoundingBox(this.x + this.guardW, this.y, this.wanderBB.width - (this.x - this.wanderBB.x + this.guardW), this.guardH);

            } else {
                this.sightBB = new BoundingBox(this.wanderBB.x, this.y, this.x - (this.wanderBB.x), this.guardH);
            }
        }

    }

    spottedSpy() {
        this.velocity = 200;
    }

    loadAnimations() {
        // walking animation
        // 0 = down, 1 = up, 2 = left, 3 = right
        this.animations[0] = new Animator(this.spritesheet, 8, 8, 128, 200, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 8, 215, 128, 200, 4, 0.3);
        this.animations[2] = new Animator(this.spritesheet, 8, 631, 108, 200, 4, 0.3);
        this.animations[3] = new Animator(this.spritesheet, 8, 424, 112, 200, 4, 0.3);

    };

    update() {

        this.updateBB();
        this.updateSightBB();

        //if going up and down
        if (this.isUpDown) {
            if (this.lastBB.y + this.lastBB.height >= this.wanderBB.y + this.wanderBB.height) {
                this.direction = 1;
                this.y -= this.velocity*this.game.clockTick;
            }

            if (this.lastBB.y <= this.wanderBB.y) {
                this.direction = 0;
                this.y += this.velocity*this.game.clockTick;
            }

            else if (this.direction === 0) {
                this.y += this.velocity*this.game.clockTick;
            }

            else {
                this.y -= this.velocity*this.game.clockTick;
            }
        }
        //if going left and right
        else {
            if (this.lastBB.x + this.lastBB.width >= this.wanderBB.x + this.wanderBB.width) {
                this.direction = 3;
                this.x -= this.velocity*this.game.clockTick;
            }

            if (this.lastBB.x <= this.wanderBB.x) {
                this.direction = 2;
                this.x += this.velocity*this.game.clockTick;
            }

            else if (this.direction === 2) {
                this.x += this.velocity*this.game.clockTick;
            }

            else {
                this.x -= this.velocity*this.game.clockTick;
            }
        }

    };

    draw(ctx) {
        this.animations[this.direction].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);
        ctx.fillStyle = 'white';
        ctx.fillRect(this.sightBB.x - this.game.camera.x, this.sightBB.y - this.game.camera.y, this.sightBB.width, this.sightBB.height);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

            ctx.strokeStyle = 'green';
            ctx.strokeRect(this.sightBB.x - this.game.camera.x, this.sightBB.y - this.game.camera.y, this.sightBB.width, this.sightBB.height);


            ctx.strokeStyle = 'blue';
            ctx.strokeRect(this.wanderBB.x - this.game.camera.x, this.wanderBB.y - this.game.camera.y, this.wanderBB.width, this.wanderBB.height);

        }
    };
}
