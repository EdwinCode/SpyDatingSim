class Darkness {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = PARAMS.CANVAS_WIDTH;
        this.dHeight = PARAMS.CANVAS_HEIGHT;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/darkness.png")

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 1000, 1000, this.x, this.y, this.dWidth, this.dHeight);
    };
}