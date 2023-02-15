class Billionaire {
    constructor(game) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/boyuser.png");
        this.animator = new Animator(this.spritesheet, 8, 8, 120, 208, 1, 0.2);

        this.x = 0;
        this.y = 0;
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y,PARAMS.SCALE / 6);
    };
};