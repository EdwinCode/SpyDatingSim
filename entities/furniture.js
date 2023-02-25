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

//WALLS

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

// ----------------- FURNITURE -----------------------------

class LongWoodenPatternedTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 34, 18, 32, 15, x, y, 256, 120);
        this.BB = new BoundingBox(this.x, this.y,32 * PARAMS.BLOCKWIDTH,15 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 34, 18, 32, 15, this.x - this.game.camera.x, this.y - this.game.camera.y, 32 * PARAMS.BLOCKWIDTH, 15 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

// ROOMS: (LEFT -> RIGHT)
// GARAGE      | OFFICE   | KITCHEN
// PATIO       | LOUNGE   | BATHROOM
// GREEN HOUSE | ENTRANCE | BEDROOM

// --------------------- GARAGE FURNITURE -------------------------------


// --------------------- OFFICE FURNITURE -------------------------------


// --------------------- KITCHEN FURNITURE -------------------------------
class KitchenSet extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  442, 120, 61, 32, x, y, 488, 256);
        this.BB = new BoundingBox(this.x, this.y,61 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 442, 120, 61, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 61 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Fridge extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  306, 324, 15, 32, x, y, 120, 256);
        this.BB = new BoundingBox(this.x, this.y,15 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 306, 324, 15, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 15 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class KitchenCounterLeft extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  340, 204, 16, 16, x, y, 128, 128);
        this.BB = new BoundingBox(this.x, this.y,16 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 340, 204, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class KitchenCounterRight extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  357, 204, 16, 16, x, y, 128, 128);
        this.BB = new BoundingBox(this.x, this.y,16 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 357, 204, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class KitchenCounterMiddle extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  357, 238, 16, 16, x, y, 128, 128);
        this.BB = new BoundingBox(this.x, this.y,16 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 357, 238, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Microwave extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  35, 174, 14, 12, x, y, 112, 96);
        this.BB = new BoundingBox(this.x, this.y,14 * PARAMS.BLOCKWIDTH,12 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 35, 174, 14, 12, this.x - this.game.camera.x, this.y - this.game.camera.y, 14 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class KitchenCabinet extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  136, 221, 31, 16, x, y, 248, 128);
        this.BB = new BoundingBox(this.x, this.y,31 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };

    update() { //166 236

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 136, 221, 31, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 31 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

// --------------------- PATIO FURNITURE -------------------------------


// --------------------- LOUNGE FURNITURE -------------------------------


// --------------------- BATHROOM FURNITURE -------------------------------

class Shower extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 408, 290, 16, 32, x, y, 128, 256);
        this.BB = new BoundingBox(this.x, this.y,16 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };


    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 408, 290, 16, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Toilet extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  546, 302, 11, 19, x, y, 88, 152);
        this.BB = new BoundingBox(this.x, this.y,11 * PARAMS.BLOCKWIDTH,19 * PARAMS.BLOCKWIDTH);
    };


    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 546, 302, 11, 19, this.x - this.game.camera.x, this.y - this.game.camera.y, 11 * PARAMS.BLOCKWIDTH, 19 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Bathtub extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  511, 289, 31, 16, x, y, 248, 128);
        this.BB = new BoundingBox(this.x, this.y,31 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };


    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 511, 289, 31, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 31 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BathroomSink extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  18, 238, 31, 16, x, y, 248, 128);
        this.BB = new BoundingBox(this.x, this.y,31 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 18, 238, 31, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 31 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BathroomMirror extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  220, 272, 32, 16, x, y, 256, 128);
        this.BB = new BoundingBox(this.x, this.y,32 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 220, 272, 32, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Trashcan extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  461, 307, 11, 12, x, y, 88, 96);
        this.BB = new BoundingBox(this.x, this.y,11 * PARAMS.BLOCKWIDTH,12 * PARAMS.BLOCKWIDTH);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 461, 307, 11, 12, this.x - this.game.camera.x, this.y - this.game.camera.y, 11 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}


// --------------------- GREEN HOUSE FURNITURE -------------------------------


// --------------------- ENTRANCE FURNITURE -------------------------------


// --------------------- BEDROOM FURNITURE -------------------------------
class BigWhiteBed extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 340, 52, 32, 32, x, y, 256, 256);
        this.BB = new BoundingBox(this.x, this.y,32 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };


    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 340, 52, 32, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 32 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BedroomMirror extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 103, 86, 13, 30, x, y, 104, 240);
        this.BB = new BoundingBox(this.x, this.y,13 * PARAMS.BLOCKWIDTH,30 * PARAMS.BLOCKWIDTH);
    };


    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 103, 86, 13, 30, this.x - this.game.camera.x, this.y - this.game.camera.y, 13 * PARAMS.BLOCKWIDTH, 30 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Wardrobe extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 102, 35, 16, 32, x, y, 128, 256);
        this.BB = new BoundingBox(this.x, this.y,16 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };


    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 102, 35, 16, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Lamp extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 461, 188, 11, 15, x, y, 88, 120);
        this.BB = new BoundingBox(this.x, this.y,11 * PARAMS.BLOCKWIDTH,15 * PARAMS.BLOCKWIDTH);
    };


    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 461, 188, 11, 15, this.x - this.game.camera.x, this.y - this.game.camera.y, 11 * PARAMS.BLOCKWIDTH, 15 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Bookshelf extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 102, 307, 16, 32, x, y, 128, 256);
        this.BB = new BoundingBox(this.x, this.y,16 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };


    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 102, 307, 16, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class SmallBlueTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 289, 274, 16, 14, x, y, 128, 112);
        this.BB = new BoundingBox(this.x, this.y,16 * PARAMS.BLOCKWIDTH,14 * PARAMS.BLOCKWIDTH);
    };


    update() { //304 287

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 289, 274, 16, 14, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}



//OLD FURNITURE

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