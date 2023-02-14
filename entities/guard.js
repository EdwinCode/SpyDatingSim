class Guard{

    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/guard.png");

        this.guardW = 130;
        this.guardH = 200;

        this.x = -200;
        this.y = -30;

        this.velocity = 50;

        this.direction = 0;

        this.updateBB();

        this.wanderBB = new BoundingBox(this.x, this.y, 250,this.guardH / 2);

        this.animations = [];
        this.loadAnimations();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y + 40, this.guardW / 2 - 12, this.guardH / 2 - 40);
    }

    loadAnimations() {
        // walking animation
        // 0 = right, 1 = left
        this.animations[0] = new Animator(this.spritesheet, 8, 631, 108, 200, 4, 0.3);
        this.animations[1] = new Animator(this.spritesheet, 8, 424, 112, 200, 4, 0.3);

    };

    update() {

        this.updateBB();

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
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

            ctx.strokeStyle = 'blue';
            ctx.strokeRect(this.wanderBB.x - this.game.camera.x, this.wanderBB.y - this.game.camera.y, this.wanderBB.width, this.wanderBB.height);

        }
    };
}

/*
class Wally extends NPC {
    constructor(game, x, y, width, height) {
        super(game, x, y, width, height);
        this.battleDone = false;
        this.animations = [];
        this.sprite = ASSET_MANAGER.getAsset("./res/img/wally.png");
        if(this.game.camera.tutorial) {
            this.chatbox.text = ["In Battle either Attack, Defend, or Charge for x2.5 Damage!", "I also gave you starting items to start catching some Pokemon.",
                "If all your Pokemon faint then take them to the Medic in Town.", "Buy Items from the Merchant in Town as well.", "You can grab anything lying around the Lab.",
                "Anyways, Good luck!"];
        } else {
            this.chatbox.text = ["Hey, you're finally here!", "Today's the day you finally become a Trainer!", "Come pick your starter!"];
        }

        this.loadAnimations();

        this.wanderBB = new BoundingBox(this.game, 440, 500, 380, 400);
    };

    loadAnimations() {
        // Animator(this.sprite, x, y, width, height, framesCount, duration, padding, reverse, loop));

        for (let i = 0; i < 4; i++) { // four directions
            this.animations.push([]);
            for (let j = 0; j < 2; j++) { // two states
                this.animations[i].push([]);
            }
        }

        // forward
        this.animations[0][0] = new Animator(this.sprite, 1, 52, this.width, this.height, 1, 0.15, 0, false, true); // idle
        this.animations[0][1] = new Animator(this.sprite, 1, 52, this.width, this.height, 4, 0.15, 0, false, true); // walking

        // left
        this.animations[1][0] = new Animator(this.sprite, 1, 92, this.width, this.height, 1, 0.15, 0, false, true); // idle
        this.animations[1][1] = new Animator(this.sprite, 1, 92, this.width, this.height, 4, 0.15, 0, false, true); // walking

        // backwards
        this.animations[2][0] = new Animator(this.sprite, 1, 72, this.width, this.height, 1, 0.15, 0, false, true); // idle
        this.animations[2][1] = new Animator(this.sprite, 1, 72, this.width, this.height, 4, 0.15, 0, false, true); // walking

        // right
        this.animations[3][0] = new Animator(this.sprite, 1, 112, this.width, this.height, 1, 0.15, 0, false, true); // idle
        this.animations[3][1] = new Animator(this.sprite, 1, 112, this.width, this.height, 4, 0.15, 0, false, true); // walking

    };
}*/
