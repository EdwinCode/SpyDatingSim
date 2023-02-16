class Furniture {
    constructor(game, spritesheet, sx, sy, sw, sh, x, y, dWidth, dHeight) {
        Object.assign(this, {game, x, y, dWidth, dHeight});
        this.spritesheet = ASSET_MANAGER.getAsset(spritesheet);
    }

    draw(ctx) {
        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    }
}

class BigTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 256, 256, 224, 256, x, y, 224, 256);
        this.BB = new BoundingBox(this.x, this.y,28 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 256, 256, 224, 256, this.x - this.game.camera.x, this.y - this.game.camera.y, 28 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BigCouch extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 768, 408, 256, 104, x, y, 256, 104);
        this.BB = new BoundingBox(this.x, this.y, 32 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 768, 408, 256, 104, this.x - this.game.camera.x, this.y - this.game.camera.y, 32 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class ChairRight extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 520, 384, 112, 128, x, y, 112, 128);
        this.BB = new BoundingBox(this.x, this.y, 14 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 520, 384, 112, 128, this.x - this.game.camera.x, this.y - this.game.camera.y, 14 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}


class ChairLeft extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 520, 256, 112, 128, x, y, 112, 128);
        this.BB = new BoundingBox(this.x, this.y, 14 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 520, 256, 112, 128, this.x - this.game.camera.x, this.y - this.game.camera.y, 14 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BigRug extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 32, 544, 328, 192, x, y, 328, 192);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 32, 544, 328, 192, this.x - this.game.camera.x, this.y - this.game.camera.y, 41 * PARAMS.BLOCKWIDTH, 24 * PARAMS.BLOCKWIDTH);
    };
}

class PlainWall extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/House_Tileset.png", 516, 0, 248, 256, x, y, 248, 256);
        Object.assign(this, {count});
        this.BB = new BoundingBox(this.x, this.y, this.count * (31 * PARAMS.BLOCKWIDTH), 32 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        for (let i = 0; i < this.count; i++) {
            ctx.drawImage(this.spritesheet, 516, 0, 248, 256, this.x + i * (31 * PARAMS.BLOCKWIDTH) - this.game.camera.x, this.y - this.game.camera.y, 31 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        }
        super.draw(ctx);
    };
}

class SideWallLeft extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/House_Tileset.png", 900, 0, 36, 128, x, y, 36, 128);
        Object.assign(this, {count})
        this.BB = new BoundingBox(this.x, this.y, (4.5 * PARAMS.BLOCKWIDTH), this.count * (16 * PARAMS.BLOCKWIDTH));
    };

    update() {

    };

    draw(ctx) {
        for (let i = 0; i < this.count; i++) {
            ctx.drawImage(this.spritesheet, 900, 0, 36, 128, this.x - this.game.camera.x, this.y + i * (16 * PARAMS.BLOCKWIDTH) - this.game.camera.y, 4.5 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        }
        super.draw(ctx);
    };
}


class SideWallRight extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/House_Tileset.png", 983, 128, 36, 128, x, y, 36, 128);
        Object.assign(this, {count})
        this.BB = new BoundingBox(this.x, this.y, (4.5 * PARAMS.BLOCKWIDTH), this.count * (16 * PARAMS.BLOCKWIDTH));

    };

    update() {

    };

    draw(ctx) {
        for (let i = 0; i < this.count; i++) {
            ctx.drawImage(this.spritesheet, 983, 128, 36, 128, this.x - this.game.camera.x, this.y + i * (16 * PARAMS.BLOCKWIDTH) - this.game.camera.y, 4.5 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        }
        super.draw(ctx);
    };
}

class Bed extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 1024, 272, 128, 240, x, y, 128, 240);
        this.BB = new BoundingBox(this.x, this.y, 16 * PARAMS.BLOCKWIDTH, 30 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 1024, 272, 128, 240, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 30 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}