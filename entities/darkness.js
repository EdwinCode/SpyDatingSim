class Darkness {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = PARAMS.CANVAS_WIDTH;
        this.dHeight = PARAMS.CANVAS_HEIGHT;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/darkness.png");

    };

    brightenDarkness() {
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/darknessLighter.png");
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 1000, 1000, this.x-(25*PARAMS.BLOCKWIDTH), this.y-(62*PARAMS.BLOCKWIDTH), this.dWidth, this.dHeight);
    };
}