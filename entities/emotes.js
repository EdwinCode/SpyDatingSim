class HeartEmote {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 15.4 * PARAMS.BLOCKWIDTH;
        this.dHeight = 18.9 * PARAMS.BLOCKWIDTH;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/emotes.png")

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 2, 2, 22, 27, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth, this.dHeight);
    };
}

class ExclamationEmote {
    constructor(game, guard, x, y) {
        Object.assign(this, {game, guard, x, y});

        this.dWidth = 13.2 * PARAMS.BLOCKWIDTH;
        this.dHeight = 16.2 * PARAMS.BLOCKWIDTH;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/emotes.png")

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 26, 2, 22, 27, (this.guard.x + (6*PARAMS.BLOCKWIDTH)) - this.game.camera.x, (this.guard.y - (12*PARAMS.BLOCKWIDTH))- this.game.camera.y, this.dWidth, this.dHeight);
    };
}