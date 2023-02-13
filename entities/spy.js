class Spy {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/sprite_girl_purple.png");

        this.width = 140;
        this.height = 210;

        this.direction = 0;
        this.state = 0;

        this.x = x;
        this.y = y;
        this.velocity = 300;

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
                this.y -= this.velocity* 2 *this.game.clockTick;
            } else if (this.game.up && !this.game.down) {
                this.direction = 3; // up
                this.state = 1; // walking
                this.y -= this.velocity*this.game.clockTick;
            } else if (this.game.down && this.game.run && !this.game.up) {
                this.direction = 1; // down
                this.state = 2; // running
                this.y += this.velocity* 2 *this.game.clockTick;
            } else if (this.game.down && !this.game.up) {
                this.direction = 1; // down
                this.state = 1; // walking
                this.y += this.velocity*this.game.clockTick;
            } else if (this.game.up && this.game.down) {
                this.direction = 3; // up
                this.state = 0; // idle
            }

            if (this.game.right && this.game.left && this.game.up && this.game.down) {
                this.state = 0; // idle
            } else if (this.game.right && this.game.run && !this.game.left) {
                this.direction = 0; // right
                this.state = 2; // running
                this.x += this.velocity* 2 *this.game.clockTick;
            } else if (this.game.right && !this.game.left) {
                this.direction = 0; // right
                this.state = 1; // walking
                this.x += this.velocity*this.game.clockTick;
            } else if (this.game.left && this.game.run && !this.game.right) {
                this.direction = 2; // left
                this.state = 2; // running
                this.x -= this.velocity* 2 *this.game.clockTick;
            } else if (this.game.left && !this.game.right) {
                this.direction = 2; // left
                this.state = 1; // walking
                this.x -= this.velocity*this.game.clockTick;
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

        //collision
        var that = this;
        this.game.entities.forEach(function (entity) {
            //if the entity has a bounding box and we collided with it
            if (entity.BB && that.BB.collide(entity.BB)) {
                if ((entity instanceof BigTable || entity instanceof BigCouch || entity instanceof ChairRight || entity instanceof ChairLeft || entity instanceof PlainWall || entity instanceof SideWallLeft || entity instanceof SideWallRight || entity instanceof WallBottom)) {

                    if(entity.BB.right <= (that.lastBB.left+20)){ // from right
                        that.x += entity.BB.right - that.lastBB.left;
                    }
                    else if(entity.BB.left >= (that.lastBB.right-20)){ // from left
                        that.x -= that.lastBB.right - entity.BB.left;
                    }
                    else if(entity.BB.bottom <= (that.lastBB.top+20)){ //from below
                        that.y += entity.BB.bottom - that.lastBB.top;
                    }
                    else if(entity.BB.top >= (that.lastBB.bottom-20)){ // from above
                        that.y -= that.lastBB.bottom - entity.BB.top;
                    }
                    that.updateBB();
                }
            }

            that.updateBB();
        });

        // interaction with key 'i'
        if (this.game.up) {
            this.chatbox = new Chatbox(this.game, "Hello");
            this.game.addEntityToTop(this.chatbox);
            this.chatbox.setVisible = true;
        }
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x,this.y + 40,this.width/2 - 12,this.height/2 - 40);

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
