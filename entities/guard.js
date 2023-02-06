class Guard{

    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/guard.png");
        this.animator = new Animator(this.spritesheet, 8, 8, 120, 200, 1, 0.2);

        this.x = 50;
        this.y = 100;
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE / 6);
    };
}