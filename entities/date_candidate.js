class Stephanie {

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/stephanie.png"),
            0, 0, 146, 211, 4, 0.2);

        this.x = 10;
        this.y = 0;
        this.speed = 150;
    };

    update() {
        this.y += this.speed * this.game.clockTick;
        if(this.y > 500) this.y = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}

class Richie {

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/richie.png"),
            0, 0, 128, 211, 4, 0.2);

        this.x = 180;
        this.y = 0;
        this.speed = 150;
    };

    update() {
        this.y += this.speed * this.game.clockTick;
        if(this.y > 500) this.y = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}