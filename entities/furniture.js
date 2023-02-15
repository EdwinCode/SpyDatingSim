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
        super(game, "./sprites/furniture/House_Tileset.png", 256, 256, 224, 256, x, y, 224/2, 256/2);
        this.BB = new BoundingBox(this.x,this.y + this.dWidth/5,this.dWidth * PARAMS.SCALE/3.5,this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 256, 256, 224, 256, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
        super.draw(ctx);
    };
}

class BigCouch extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 768, 408, 256, 104, x, y, 256/1.5, 104/1.5);
        this.BB = new BoundingBox(this.x, this.y + this.dWidth/5, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 768, 408, 256, 104, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
        super.draw(ctx);
    };
}

class ChairRight extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 520, 384, 112, 128, x, y, 112/1.5, 128/1.5);
        this.BB = new BoundingBox(this.x, this.y + this.dWidth/5, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 520, 384, 112, 128, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
        super.draw(ctx);
    };
}


class ChairLeft extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 520, 256, 112, 128, x, y, 112/1.5, 128/1.5);
        this.BB = new BoundingBox(this.x, this.y + this.dWidth/5, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 520, 256, 112, 128, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
        super.draw(ctx);
    };
}

class BigRug extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 32, 544, 328, 192, x, y, 328/1.5, 192/1.5);
        this.BB = new BoundingBox(this.x, this.y + this.dWidth/5, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 32, 544, 328, 192, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
        super.draw(ctx);
    };
}

class PlainWall extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 516, 0, 248, 256, x, y, 248/1.5, 256/1.5);
        this.BB = new BoundingBox(this.x, this.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 516, 0, 248, 256, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
        super.draw(ctx);
    };
}

class SideWallLeft extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 900, 0, 36, 128, x, y, 36/1.5, 128/1.5);
        this.BB = new BoundingBox(this.x, this.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 900, 0, 36, 128, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
        super.draw(ctx);
    };
}


class SideWallRight extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 983, 128, 36, 128, x, y, 36/1.5, 128/1.5);
        this.BB = new BoundingBox(this.x, this.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 983, 128, 36, 128, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
        super.draw(ctx);
    };
}

class WallBottom extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 256, 0, 248, 32, x, y, 248/1.5, 32/1.5);
        this.BB = new BoundingBox(this.x, this.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 256, 0, 248, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
        super.draw(ctx);
    };
}

