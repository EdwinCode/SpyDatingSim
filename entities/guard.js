class Guard{

    // add variables to set x, y and walk left<->right or up<->down
    // or make setter methods
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/guard.png");

        this.guardW = 130;
        this.guardH = 200;

        this.x = -200;
        this.y = -20;

        this.velocity = 70;
        this.direction = 0;

        this.wanderBB = new BoundingBox(this.x, this.y, 400,this.guardH / 2);

        this.updateBB();
        this.updateSightBB();

        this.animations = [];
        this.loadAnimations();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y + 40, this.guardW / 2 - 12, this.guardH / 2 - 40);
    }

    updateSightBB() {
        // this.lastSightBB = this.sightBB;
        if (this.direction === 0) {
            this.sightBB = new BoundingBox(this.x, this.y + 40, this.wanderBB.width - (this.x - this.wanderBB.x), this.guardH / 2 - 40);

        } else {
            this.sightBB = new BoundingBox(this.wanderBB.x, this.y + 40, this.x - (this.wanderBB.x - this.guardW/2.45), this.guardH / 2 - 40);
        }

    }

    spottedSpy() {
        this.velocity = 200;
    }

    loadAnimations() {
        // walking animation
        // 0 = right, 1 = left
        this.animations[0] = new Animator(this.spritesheet, 8, 631, 108, 200, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 8, 424, 112, 200, 4, 0.3);

    };

    update() {

        this.updateBB();
        this.updateSightBB();

        if (this.lastBB.x + this.lastBB.width >= this.wanderBB.x + this.wanderBB.width) {
            this.direction = 1;
            this.x -= this.velocity*this.game.clockTick;
        }

        if (this.lastBB.x <= this.wanderBB.x) {
            this.direction = 0;
            this.x += this.velocity*this.game.clockTick;
        }

         else if (this.direction === 0) {
            this.x += this.velocity*this.game.clockTick;
        }

         else {
             this.x -= this.velocity*this.game.clockTick;
        }
    };

    draw(ctx) {
        this.animations[this.direction].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE / 6);

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