class Suitcase {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/SuitcaseScaledx8.png"), 8, 8, 104, 88, 1, 0.5);

        this.x = 700;
        this.y = 550;
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}