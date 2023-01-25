class Alfred {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/AlfredScaledx4.png"), 4, 4, 96, 148, 1, 0.5);

        this.x = 600;
        this.y = 500;
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}