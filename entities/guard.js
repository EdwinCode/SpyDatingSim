class Guard{

    constructor(game, x, y, movement) {
        Object.assign(this, {game, x, y, movement});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/guard.png");

        this.guardW = 18 * PARAMS.BLOCKWIDTH;
        this.guardH = 28 * PARAMS.BLOCKWIDTH;

        this.x = x;
        this.y = y;

        this.movement = movement;

        this.hasExclamation = false;

        this.velocity = 170;

        ///
        // 0 = stationary, 1 = left-right, 2 = up-down
        ///

        //direction
        if (this.movement === 0) { //stationary
            // do nothing
        } else if (this.movement === 2) { //up-down
            this.direction = 0;

        } else { // left-right
            this.direction = 2;
        }

        //wanderBB
        if (this.movement === 0) { //stationary
            //JUST TO FILL IN A WANDER BOX (NOT ACTUALLY USED CURRENTLY)
            this.wanderBB = new BoundingBox(this.x, this.y, this.guardW, this.guardH);
        }
        else if (this.movement === 2) { //up-down
            this.wanderBB = new BoundingBox(this.x, this.y, this.guardW * 1.5,this.guardH * 3.5);

        } else { // left-right
            this.wanderBB = new BoundingBox(this.x, this.y, this.guardW * 7,this.guardH * 1.5);
        }

        this.updateBB();
        this.updateSightBB();
        this.updateInteractionBB();

        this.animations = [];
        this.loadAnimations();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, this.guardW, this.guardH);
    }

    updateInteractionBB() {
        this.interactBB = new BoundingBox(this.x - this.guardW / 4, this.y - this.guardH / 4, this.guardW * 1.5, this.guardH * 1.5);
    };

    updateSightBB() {
        // this.lastSightBB = this.sightBB;

        if (this.movement === 0) { //stationary
            //JUST TO FILL IN A SIGHT BOX (NOT ACTUALLY USED CURRENTLY)
            this.sightBB = new BoundingBox(this.x, this.y, this.guardW, this.guardH);

        }
        //if going up and down
        else if (this.movement === 2) {
            if (this.direction === 0) {
                this.sightBB = new BoundingBox(this.x, this.y + this.guardH, this.guardW, (this.guardH * 3.5) - this.guardH * 1.5);

            } else {
                this.sightBB = new BoundingBox(this.x, this.y - ((this.guardH * 3.5) - this.guardH * 1.5), this.guardW, (this.guardH * 3.5) - this.guardH * 1.5);
            }
        }
        //if going left and right
        else {
            if (this.direction === 2) {
                this.sightBB = new BoundingBox(this.x + this.guardW, this.y + (this.guardH/5), (this.guardW * 7) - this.guardW * 4, this.guardH - (this.guardH/2));

            } else {
                this.sightBB = new BoundingBox(this.x - ((this.guardW * 7) - this.guardW * 4), this.y + (this.guardH/5), (this.guardW * 7) - this.guardW * 4, this.guardH - (this.guardH/2));
            }
        }

    }

    spottedSpy() {
        this.velocity = 200;
        this.wanderBB = new BoundingBox(this.x, this.y, this.guardW * 10,this.guardH * 10);
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
        this.updateInteractionBB();

        if (this.movement === 0) { //stationary
            // do nothing
        }
        //if going up and down
        else if (this.movement === 2) {
            if (this.lastBB.y + this.lastBB.height >= this.wanderBB.y + this.wanderBB.height) {
                this.direction = 1;
                this.y -= this.velocity * this.game.clockTick * PARAMS.SCALE;
            }

            if (this.lastBB.y <= this.wanderBB.y) {
                this.direction = 0;
                this.y += this.velocity * this.game.clockTick * PARAMS.SCALE;
            }

            else if (this.direction === 0) {
                this.y += this.velocity * this.game.clockTick * PARAMS.SCALE;
            }

            else {
                this.y -= this.velocity * this.game.clockTick * PARAMS.SCALE;
            }
        }
        //if going left and right
        else {
            if (this.lastBB.x + this.lastBB.width >= this.wanderBB.x + this.wanderBB.width) {
                this.direction = 3;
                this.x -= this.velocity * this.game.clockTick * PARAMS.SCALE;
            }

            if (this.lastBB.x <= this.wanderBB.x) {
                this.direction = 2;
                this.x += this.velocity * this.game.clockTick * PARAMS.SCALE;
            }

            else if (this.direction === 2) {
                this.x += this.velocity * this.game.clockTick * PARAMS.SCALE;
            }

            else {
                this.x -= this.velocity * this.game.clockTick * PARAMS.SCALE;
            }
        }
    };

    draw(ctx) {
        if (this.movement === 0) { //stationary
            //this.animations[0].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);
            ctx.drawImage(this.spritesheet, 0, 0, 130, 209, this.x - this.game.camera.x, this.y - this.game.camera.y, 18 * PARAMS.BLOCKWIDTH, 28 * PARAMS.BLOCKWIDTH);

        } else {
            this.animations[this.direction].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);
        }

        //SIGHT BOX
        ctx.fillStyle = '#f2eb83';
        ctx.beginPath();

        if (this.movement === 0) { //stationary
            // do nothing
        } //if going up and down
        else if (this.movement === 2) {
            //0 = down
            if (this.direction === 0) {
                //Middle
                ctx.moveTo((this.sightBB.x + this.guardW/2) - this.game.camera.x, this.sightBB.y  - this.game.camera.y);
                //left
                ctx.lineTo(this.sightBB.x - this.game.camera.x, (this.sightBB.y+ this.guardH*1.5 )- this.game.camera.y);
                //right
                ctx.lineTo((this.sightBB.x + this.guardW) - this.game.camera.x, (this.sightBB.y + this.guardH*1.5 )- this.game.camera.y);

            } else {

                //Middle
                ctx.moveTo((this.sightBB.x + this.guardW/2) - this.game.camera.x, this.sightBB.y + this.sightBB.height - this.game.camera.y);
                //left
                ctx.lineTo(this.sightBB.x - this.game.camera.x, this.sightBB.y + this.guardH*0.5 - this.game.camera.y);
                //right
                ctx.lineTo((this.sightBB.x + this.guardW) - this.game.camera.x, this.sightBB.y + this.guardH*0.5 - this.game.camera.y);


            }
        }
        //if going left and right
        else {
            //2 = right
            if (this.direction === 2) {

                //Middle
                ctx.moveTo(this.sightBB.x - this.game.camera.x, this.sightBB.y + this.sightBB.height/2 - this.game.camera.y);
                //left
                ctx.lineTo(this.sightBB.x + this.guardW*2.5 - this.game.camera.x, this.sightBB.y - this.game.camera.y);
                //right
                ctx.lineTo(this.sightBB.x + this.guardW*2.5 - this.game.camera.x, this.sightBB.y + this.sightBB.height - this.game.camera.y);


            } else {
                //Middle
                ctx.moveTo(this.sightBB.x + this.sightBB.width - this.game.camera.x, this.sightBB.y + this.sightBB.height/2 - this.game.camera.y);
                //left
                ctx.lineTo(this.sightBB.x - this.game.camera.x, this.sightBB.y - this.game.camera.y);
                //right
                ctx.lineTo(this.sightBB.x - this.game.camera.x, this.sightBB.y + this.sightBB.height - this.game.camera.y);

            }
        }

        ctx.fill();

             //650, 640

            //ctx.fillRect(this.sightBB.x - this.game.camera.x, this.sightBB.y - this.game.camera.y, this.sightBB.width, this.sightBB.height);


        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

            ctx.strokeStyle = 'purple';
            ctx.strokeRect(this.sightBB.x - this.game.camera.x, this.sightBB.y - this.game.camera.y, this.sightBB.width, this.sightBB.height);

            ctx.strokeStyle = 'green';
            ctx.strokeRect(this.interactBB.x - this.game.camera.x, this.interactBB.y - this.game.camera.y, this.interactBB.width, this.interactBB.height);


            ctx.strokeStyle = 'blue';
            ctx.strokeRect(this.wanderBB.x - this.game.camera.x, this.wanderBB.y - this.game.camera.y, this.wanderBB.width, this.wanderBB.height);

        }
    };
}
