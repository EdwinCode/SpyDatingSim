class BigTable {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/Furniture/House_Tileset.png"),
            249, 249, 230, 262, 1, 0.5);

        this.x = 300;
        this.y = 300;
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}