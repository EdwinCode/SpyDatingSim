class Furniture {
    constructor(game, spritesheet, sx, sy, sw, sh, x, y, dWidth, dHeight) {
        Object.assign(this, {game, x, y, dWidth, dHeight});
        this.spritesheet = ASSET_MANAGER.getAsset(spritesheet);
        this.updateInteractionBB();
    }

    updateInteractionBB() {
        this.interactBB = new BoundingBox(this.x - this.dWidth / 4, this.y - this.dHeight / 4, this.dWidth * 1.5, this.dHeight * 1.5);
    };

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

// --------------------------STRUCTURE FEATURES-------------------------------------------
// WALLS, WINDOWS, and DOORS
class Door extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/door.png", 26, 17, 194, 221, x, y, 1552, 1768);
        //this.BB = new BoundingBox(this.x, this.y,31 * PARAMS.BLOCKWIDTH,31 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 26, 17, 194, 221, this.x - this.game.camera.x, this.y - this.game.camera.y, 31 * PARAMS.BLOCKWIDTH, 31 * PARAMS.BLOCKWIDTH);
        //super.draw(ctx);
    };
}

class DoorWallLeft extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/House_Tileset.png", 516, 32, 36, 90, x, y, 36, 90);
        Object.assign(this, {count});
        this.BB = new BoundingBox(this.x, this.y, 4.5 * PARAMS.BLOCKWIDTH, 28 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        // top
        ctx.drawImage(this.spritesheet, 516, 248, 10, 10, this.x - this.game.camera.x, this.y + 128 - this.game.camera.y, 4.5 * PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        // wall
        ctx.drawImage(this.spritesheet, 516, 32, 36, 90, this.x - this.game.camera.x, this.y - this.game.camera.y, 4.5 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        // bottom
        ctx.drawImage(this.spritesheet, 516, 248, 10, 10, this.x - this.game.camera.x, this.y - this.game.camera.y, 4.5 * PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class DoorWallRight extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/House_Tileset.png", 727, 32, 36, 90, x, y, 36, 90);
        Object.assign(this, {count});
        this.BB = new BoundingBox(this.x, this.y, 4.5 * PARAMS.BLOCKWIDTH, 28 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        // top
        ctx.drawImage(this.spritesheet, 516, 248, 10, 10, this.x - this.game.camera.x, this.y + 128 - this.game.camera.y, 4.5 * PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        // wall
        ctx.drawImage(this.spritesheet, 727, 32, 36, 90, this.x - this.game.camera.x, this.y - this.game.camera.y, 4.5 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        // bottom
        ctx.drawImage(this.spritesheet, 516, 248, 10, 10, this.x - this.game.camera.x, this.y - this.game.camera.y, 4.5 * PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class MarbleFloor extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/marblefloor.png", 0, 0, 800, 800, x, y, 800, 800);
        Object.assign(this, {count});
    };

    update() {};

    draw(ctx) {
        for (let i = 0; i < this.count; i++) {
            ctx.drawImage(this.spritesheet, 0, 0, 800, 800, this.x + i * (40 * PARAMS.BLOCKWIDTH) - this.game.camera.x, this.y - this.game.camera.y, 40 * PARAMS.BLOCKWIDTH, 40 * PARAMS.BLOCKWIDTH);
        }
    };
}

class PlainWall extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/House_Tileset.png", 516, 0, 248, 256, x, y, 248, 256);
        Object.assign(this, {count});
        this.BB = new BoundingBox(this.x, this.y, this.count * (31 * PARAMS.BLOCKWIDTH), 32 * PARAMS.BLOCKWIDTH);
    };

    update() {};

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

    update() {};

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

    update() {};

    draw(ctx) {
        for (let i = 0; i < this.count; i++) {
            ctx.drawImage(this.spritesheet, 983, 128, 36, 128, this.x - this.game.camera.x, this.y + i * (16 * PARAMS.BLOCKWIDTH) - this.game.camera.y, 4.5 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        }
        super.draw(ctx);
    };
}

class MansionWindow extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/window.png",  0, 0, 225, 225, x, y, 225, 225);
        this.count = count;
        this.BB = new BoundingBox(this.x, this.y,this.count * (32 * PARAMS.BLOCKWIDTH),32 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        for (let i = 0; i < this.count; i++) {
            ctx.drawImage(this.spritesheet, 0, 0, 225, 225, this.x + i * (32 * PARAMS.BLOCKWIDTH) - this.game.camera.x, this.y - this.game.camera.y, 32 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        }
        super.draw(ctx);
    };
}

class WoodFloor extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/flooring.png", 224, 96, 30, 30, x, y, 30, 30);
        Object.assign(this, {count});
    };

    update() {};

    draw(ctx) {
        for (let i = 0; i < this.count; i++) {
            ctx.drawImage(this.spritesheet, 224, 96, 30, 30, this.x + i * (20 * PARAMS.BLOCKWIDTH) - this.game.camera.x, this.y - this.game.camera.y, 20 * PARAMS.BLOCKWIDTH, 20 * PARAMS.BLOCKWIDTH);
        }
    };
}




// ----------------- FURNITURE -----------------------------
class LongWoodenPatternedTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 34, 18, 32, 15, x, y, 256, 120);
        this.BB = new BoundingBox(this.x, this.y,40 * PARAMS.BLOCKWIDTH,23 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 34, 18, 32, 15, this.x - this.game.camera.x, this.y - this.game.camera.y, 40 * PARAMS.BLOCKWIDTH, 23 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

// ROOMS: (LEFT -> RIGHT)
// GARAGE      | OFFICE   | KITCHEN
// PATIO       | LOUNGE   | BATHROOM
// GREEN HOUSE | ENTRANCE | BEDROOM



// --------------------- GARAGE FURNITURE -------------------------------
class GarageDoor extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/garagedoor.png", 0, 0, 768, 151, x, y, 768, 151);
        this.BB = new BoundingBox(this.x, this.y,248 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 768, 151, this.x - this.game.camera.x, this.y - this.game.camera.y, 248 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BlackCar extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/cars.png",  6, 3, 61, 20, x, y, 488, 160);
        this.BB = new BoundingBox(this.x, this.y,72 * PARAMS.BLOCKWIDTH,20 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 6, 3, 61, 20, this.x - this.game.camera.x, this.y - this.game.camera.y, 72 * PARAMS.BLOCKWIDTH, 25 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class RedCar extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/cars.png",  2, 57, 67, 20, x, y, 536, 160);
        this.BB = new BoundingBox(this.x, this.y,72 * PARAMS.BLOCKWIDTH,20 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 2, 57, 67, 20, this.x - this.game.camera.x, this.y - this.game.camera.y, 72 * PARAMS.BLOCKWIDTH, 25 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class GreyCar extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/cars.png",  6, 30, 60, 20, x, y, 72 * PARAMS.BLOCKWIDTH, 26 * PARAMS.BLOCKWIDTH);
        this.BB = new BoundingBox(this.x, this.y,72 * PARAMS.BLOCKWIDTH,20 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 6, 30, 60, 20, this.x - this.game.camera.x, this.y - this.game.camera.y, 72 * PARAMS.BLOCKWIDTH, 26 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'green';
            ctx.strokeRect(this.interactBB.x - this.game.camera.x, this.interactBB.y - this.game.camera.y, this.interactBB.width, this.interactBB.height);

        }
    };
}

class Toolbox extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/toolbox.png",  28, 14, 370, 245, x, y, 18.5 * PARAMS.BLOCKWIDTH,18 * PARAMS.BLOCKWIDTH);
        this.BB = new BoundingBox(this.x, this.y,18.5 * PARAMS.BLOCKWIDTH,12.25 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 28, 14, 370, 245, this.x - this.game.camera.x, this.y - this.game.camera.y, 18.5 * PARAMS.BLOCKWIDTH, 12.25 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'green';
            ctx.strokeRect(this.interactBB.x - this.game.camera.x, this.interactBB.y - this.game.camera.y, this.interactBB.width, this.interactBB.height);

        }
    };
}

class Shelf extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  374, 85, 32, 16, x, y, 32, 16);
        this.BB = new BoundingBox(this.x, this.y,32 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 374, 85, 32, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}



// --------------------- OFFICE FURNITURE -------------------------------
class WideBlueMonitor extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  158, 138, 22, 14, x, y, 22 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH);
        this.BB = new BoundingBox(this.x, this.y,22 * PARAMS.BLOCKWIDTH,14 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    updateInteractionBB() {
        super.updateInteractionBB();
        this.interactBB = new BoundingBox(this.x, this.y, this.dWidth, 3 * this.dHeight);
    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 158, 138, 22, 14, this.x - this.game.camera.x, this.y - this.game.camera.y, 22 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'green';
            ctx.strokeRect(this.interactBB.x - this.game.camera.x, this.interactBB.y - this.game.camera.y, this.interactBB.width, this.interactBB.height);
        }
    };
}

class GamerPC extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  102, 119, 13, 16, x, y, 104, 128);
        this.BB = new BoundingBox(this.x, this.y,16 * PARAMS.BLOCKWIDTH,19 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 102, 119, 13, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 19 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BlackHandleChairUp extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  290, 224, 13, 13, x, y, 104, 104);
        this.BB = new BoundingBox(this.x, this.y,16 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 290, 224, 13, 13, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class OfficeDesk extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  119, 138, 16, 14, x, y, 128, 112);
        this.BB = new BoundingBox(this.x, this.y,28 * PARAMS.BLOCKWIDTH,20 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 119, 138, 16, 14, this.x - this.game.camera.x, this.y - this.game.camera.y, 28 * PARAMS.BLOCKWIDTH, 20 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class WhiteBoard extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  17, 275, 32, 30, x, y, 256, 240);
        this.BB = new BoundingBox(this.x, this.y,34 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 17, 275, 32, 30, this.x - this.game.camera.x, this.y - this.game.camera.y, 34 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}



// --------------------- KITCHEN FURNITURE -------------------------------
class KitchenSet extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  442, 120, 61, 32, x, y, 488, 256);
        this.BB = new BoundingBox(this.x, this.y,80 * PARAMS.BLOCKWIDTH,51 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 442, 120, 61, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 80 * PARAMS.BLOCKWIDTH, 51 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class WaterTank extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/water_tank.png",  18, 4, 198, 529, x, y, 12.8 * PARAMS.BLOCKWIDTH,33.5 * PARAMS.BLOCKWIDTH);
        this.BB = new BoundingBox(this.x, this.y,12.8 * PARAMS.BLOCKWIDTH,33.5 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 18, 4, 198, 529, this.x - this.game.camera.x, this.y - this.game.camera.y, 12.8 * PARAMS.BLOCKWIDTH,33.5 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'green';
            ctx.strokeRect(this.interactBB.x - this.game.camera.x, this.interactBB.y - this.game.camera.y, this.interactBB.width, this.interactBB.height);

        }
    };
}

class Fridge extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  289, 290, 16, 32, x, y, 20 * PARAMS.BLOCKWIDTH, 40 * PARAMS.BLOCKWIDTH);
        this.BB = new BoundingBox(this.x, this.y,20 * PARAMS.BLOCKWIDTH, 40 * PARAMS.BLOCKWIDTH);
        this.sx = 289;
        this.sy = 290;
        this.sw = 16;
        this.sh = 32;
        this.dWidth =  20 * PARAMS.BLOCKWIDTH;
        this.dHeight = 40 * PARAMS.BLOCKWIDTH;
    };

    update() {
        if (Chatbox.OPEN === true && this.game.camera.spyCharacter.fridgeInteract === true) {
            this.sx = 306;
            this.sw = 29;
            this.dWidth = 36 * PARAMS.BLOCKWIDTH;

        } else {
            this.sx = 289;
            this.sw = 16;
            this.dWidth =  20 * PARAMS.BLOCKWIDTH;

        }
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.sx, this.sy, this.sw, this.sh, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth, this.dHeight);
        super.draw(ctx);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'green';
            ctx.strokeRect(this.interactBB.x - this.game.camera.x, this.interactBB.y - this.game.camera.y, this.interactBB.width, this.interactBB.height);

        }
    };
}

class KitchenCounterLeft extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  340, 204, 16, 16, x, y, 128, 128);
        this.BB = new BoundingBox(this.x, this.y,25 * PARAMS.BLOCKWIDTH,25 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 340, 204, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 25 * PARAMS.BLOCKWIDTH, 25 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class KitchenCounterRight extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  357, 204, 16, 16, x, y, 128, 128);
        this.BB = new BoundingBox(this.x, this.y,25 * PARAMS.BLOCKWIDTH,25 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 357, 204, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 25 * PARAMS.BLOCKWIDTH, 25 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class KitchenCounterMiddle extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  357, 238, 16, 16, x, y, 128, 128);
        this.BB = new BoundingBox(this.x, this.y,25 * PARAMS.BLOCKWIDTH,25 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 357, 238, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 25 * PARAMS.BLOCKWIDTH, 25 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Microwave extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  35, 174, 14, 12, x, y, 112, 96);
        //this.BB = new BoundingBox(this.x, this.y,18 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 35, 174, 14, 12, this.x - this.game.camera.x, this.y - this.game.camera.y, 18 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        //super.draw(ctx);
    };
}

class KitchenCabinet extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  136, 221, 31, 16, x, y, 248, 128);
        //this.BB = new BoundingBox(this.x, this.y,33 * PARAMS.BLOCKWIDTH,18 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 136, 221, 31, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 33 * PARAMS.BLOCKWIDTH, 18 * PARAMS.BLOCKWIDTH);
        //super.draw(ctx);
    };
}

class TanChairRight extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  274, 206, 11, 14, x, y, 88, 112);
        this.BB = new BoundingBox(this.x, this.y,15 * PARAMS.BLOCKWIDTH,19 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 274, 206, 11, 14, this.x - this.game.camera.x, this.y - this.game.camera.y, 15 * PARAMS.BLOCKWIDTH, 19 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class TanChairUp extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  274, 223, 11, 14, x, y, 88, 112);
        this.BB = new BoundingBox(this.x, this.y,15 * PARAMS.BLOCKWIDTH,19 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 274, 223, 11, 14, this.x - this.game.camera.x, this.y - this.game.camera.y, 15 * PARAMS.BLOCKWIDTH, 19 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class TanChairDown extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  274, 240, 11, 14, x, y, 88, 112);
        this.BB = new BoundingBox(this.x, this.y,15 * PARAMS.BLOCKWIDTH,19 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 274, 240, 11, 14, this.x - this.game.camera.x, this.y - this.game.camera.y, 15 * PARAMS.BLOCKWIDTH, 19 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class KitchenTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  374, 85, 32, 16, x, y, 32, 16);
        this.BB = new BoundingBox(this.x, this.y,150 * PARAMS.BLOCKWIDTH,24 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 374, 85, 32, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 150 * PARAMS.BLOCKWIDTH, 28 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Plates extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  393, 187, 12, 11, x, y, 12, 11);
        //this.BB = new BoundingBox(this.x, this.y,12 * PARAMS.BLOCKWIDTH,24 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 393, 187, 12, 11, this.x - this.game.camera.x, this.y - this.game.camera.y, 8 * PARAMS.BLOCKWIDTH, 8 * PARAMS.BLOCKWIDTH);
        //super.draw(ctx);
    };
}


// --------------------- PATIO FURNITURE -------------------------------
class PatioFloor extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/House_Tileset.png", 0, 0, 128, 95, x, y, 128, 95);
        //Object.assign(this, {count});
        this.count = count;
    };

    update() {};

    draw(ctx) {
        for (let i = 0; i < this.count; i++) {
            ctx.drawImage(this.spritesheet, 0, 0, 128, 95, this.x + i * (10 * PARAMS.BLOCKWIDTH) - this.game.camera.x, this.y - this.game.camera.y, 10 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
        }
    };
}

class Trellis extends Furniture {
    constructor(game, x, y, count) {
        super(game, "./sprites/furniture/trellis.png", 0, 0, 496, 712, x, y, 496, 712);
        //Object.assign(this, {count});
        this.count = count;
        this.BB = new BoundingBox(this.x, this.y,this.count * (22 * PARAMS.BLOCKWIDTH),30 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        for (let i = 0; i < this.count; i++) {
            ctx.drawImage(this.spritesheet, 0, 0, 496, 712, this.x + i * (21 * PARAMS.BLOCKWIDTH) - this.game.camera.x, this.y - this.game.camera.y, 25 * PARAMS.BLOCKWIDTH, 36 * PARAMS.BLOCKWIDTH);
        }
        super.draw(ctx);
    };
}

class PatioTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 360, 90, 10, 11, x, y, 10, 11);
        this.BB = new BoundingBox(this.x, this.y,15 * PARAMS.BLOCKWIDTH,10 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 360, 90, 10, 11, this.x - this.game.camera.x, this.y - this.game.camera.y, 15 * PARAMS.BLOCKWIDTH, 15 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class PatioBench extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 358, 256, 14, 14, x, y, 14, 14);
        this.BB = new BoundingBox(this.x, this.y,14 * PARAMS.BLOCKWIDTH,8 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 358, 256, 14, 14, this.x - this.game.camera.x, this.y - this.game.camera.y, 14 * PARAMS.BLOCKWIDTH, 15 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class GreenPatioChairRight extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 615, 88, 10, 13, x, y, 10, 13);
        this.BB = new BoundingBox(this.x, this.y,15 * PARAMS.BLOCKWIDTH,11 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 615, 88, 10, 13, this.x - this.game.camera.x, this.y - this.game.camera.y, 15 * PARAMS.BLOCKWIDTH, 18 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}



// --------------------- LOUNGE FURNITURE -------------------------------
class Piano extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 255, 23, 32, 27, x, y, 256, 216);
        this.BB = new BoundingBox(this.x, this.y,40 * PARAMS.BLOCKWIDTH,35 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 255, 23, 32, 27, this.x - this.game.camera.x, this.y - this.game.camera.y, 40 * PARAMS.BLOCKWIDTH, 35 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class TanSofa extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 34, 85, 32, 16, x, y, 256, 128);
        this.BB = new BoundingBox(this.x, this.y,40 * PARAMS.BLOCKWIDTH,24 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 34, 85, 32, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 40 * PARAMS.BLOCKWIDTH, 24 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class OrangePatternedTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 170, 170, 32, 16, x, y, 256, 128);
        this.BB = new BoundingBox(this.x, this.y,40 * PARAMS.BLOCKWIDTH,24 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 170, 170, 32, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 40 * PARAMS.BLOCKWIDTH, 24 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class PacManGame extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 51, 188, 16, 32, x, y, 128, 256);
        this.BB = new BoundingBox(this.x, this.y,20 * PARAMS.BLOCKWIDTH,36 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 51, 188, 16, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 20 * PARAMS.BLOCKWIDTH, 36 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BigCouch extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 768, 408, 256, 104, x, y, 256, 104);
        this.BB = new BoundingBox(this.x, this.y, 36 * PARAMS.BLOCKWIDTH, 17 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 768, 408, 256, 104, this.x - this.game.camera.x, this.y - this.game.camera.y, 36 * PARAMS.BLOCKWIDTH, 17 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class ChairRight extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 520, 384, 112, 128, x, y, 112, 128);
        this.BB = new BoundingBox(this.x, this.y, 17 * PARAMS.BLOCKWIDTH, 19 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 520, 384, 112, 128, this.x - this.game.camera.x, this.y - this.game.camera.y, 17 * PARAMS.BLOCKWIDTH, 19 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class ChairLeft extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 520, 256, 112, 128, x, y, 112, 128);
        this.BB = new BoundingBox(this.x, this.y, 17 * PARAMS.BLOCKWIDTH, 19 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 520, 256, 112, 128, this.x - this.game.camera.x, this.y - this.game.camera.y, 17 * PARAMS.BLOCKWIDTH, 19 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}



// --------------------- BATHROOM FURNITURE -------------------------------
class Shower extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 408, 290, 16, 32, x, y, 128, 256);
        this.BB = new BoundingBox(this.x, this.y,25 * PARAMS.BLOCKWIDTH,41 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 408, 290, 16, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 25 * PARAMS.BLOCKWIDTH, 41 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Toilet extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  546, 302, 11, 19, x, y, 88, 152);
        this.BB = new BoundingBox(this.x, this.y,15 * PARAMS.BLOCKWIDTH,23 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 546, 302, 11, 19, this.x - this.game.camera.x, this.y - this.game.camera.y, 15 * PARAMS.BLOCKWIDTH, 23 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

// unused
/*class Bathtub extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  511, 289, 31, 16, x, y, 248, 128);
        this.BB = new BoundingBox(this.x, this.y,40 * PARAMS.BLOCKWIDTH,25 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 511, 289, 31, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 40 * PARAMS.BLOCKWIDTH, 25 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}*/

class BathroomSink extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  18, 238, 31, 16, x, y, 248, 128);
        this.BB = new BoundingBox(this.x, this.y,40 * PARAMS.BLOCKWIDTH,25 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 18, 238, 31, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 40 * PARAMS.BLOCKWIDTH, 25 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BathroomMirror extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  220, 272, 32, 16, x, y, 256, 128);
        //this.BB = new BoundingBox(this.x, this.y,32 * PARAMS.BLOCKWIDTH,16 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 220, 272, 32, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        //super.draw(ctx);
    };
}

class Trashcan extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  461, 307, 12, 12, x, y, 96, 96);
        this.BB = new BoundingBox(this.x, this.y,12 * PARAMS.BLOCKWIDTH,12 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 461, 307, 12, 12, this.x - this.game.camera.x, this.y - this.game.camera.y, 12 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}



// --------------------- GREEN HOUSE FURNITURE -------------------------------
class GreenHouseTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  596, 26, 16, 24, x, y, 16, 24);
        this.BB = new BoundingBox(this.x, this.y,20 * PARAMS.BLOCKWIDTH,25 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 596, 26, 16, 24, this.x - this.game.camera.x, this.y - this.game.camera.y, 20 * PARAMS.BLOCKWIDTH, 30 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class GreenHousePot extends Furniture {
    constructor(game, x, y, color) {
        super(game, "./sprites/furniture/PlantPots.png",  8, 8, 160, 160, x, y, 160, 160);
        Object.assign(this, {color});
        this.BB = new BoundingBox(this.x, this.y,10 * PARAMS.BLOCKWIDTH,10 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        this.xOffset = 0;
        this.yOffset = 0;
        if(this.color === "Brown") {
            this.xOffset += 0;
            this.yOffset += 0;
        } else if (this.color === "Black") {
            this.xOffset += 168;
            this.yOffset += 0;
        } else if (this.color === "Purple") {
            this.xOffset += 2 * 168;
            this.yOffset += 0;
        } else if (this.color === "Yellow") {
            this.xOffset += 3 * 168;
            this.yOffset += 0;
        } else if(this.color === "Blue") {
            this.xOffset += 0;
            this.yOffset += 168;
        } else if (this.color === "Pink") {
            this.xOffset += 168;
            this.yOffset += 168;
        } else if (this.color === "Red") {
            this.xOffset += 2 * 168;
            this.yOffset += 168;
        } else if (this.color === "Green") {
            this.xOffset += 3 * 168;
            this.yOffset += 168;
        }
        ctx.drawImage(this.spritesheet, 8 + this.xOffset, 8 + this.yOffset, 160, 160, this.x - this.game.camera.x, this.y - this.game.camera.y, 10 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Rose extends Furniture {
    constructor(game, x, y, color) {
        super(game, "./sprites/furniture/Roses.png",  8, 8, 240, 288, x, y, 240, 288);
        Object.assign(this, {color});
        //this.BB = new BoundingBox(this.x, this.y,15 * PARAMS.BLOCKWIDTH,18 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        this.xOffset = 0;
        this.yOffset = 0;
        if(this.color === "Red") {
            this.xOffset += 0;
            this.yOffset += 0;
        } else if (this.color === "Dark Blue") {
            this.xOffset += 248;
            this.yOffset += 0;
        } else if (this.color === "Pink") {
            this.xOffset += 2 * 248;
            this.yOffset += 0;
        } else if (this.color === "Green") {
            this.xOffset += 3 * 248;
            this.yOffset += 0;
        } else if(this.color === "Orange") {
            this.xOffset += 0;
            this.yOffset += 296;
        } else if (this.color === "Light Blue") {
            this.xOffset += 248;
            this.yOffset += 296;
        } else if (this.color === "Yellow") {
            this.xOffset += 2 * 248;
            this.yOffset += 296;
        } else if (this.color === "White") {
            this.xOffset += 3 * 248;
            this.yOffset += 296;
        }
        ctx.drawImage(this.spritesheet, 8 + this.xOffset, 8 + this.yOffset, 240, 288, this.x - this.game.camera.x, this.y - this.game.camera.y, 15 * PARAMS.BLOCKWIDTH, 18 * PARAMS.BLOCKWIDTH);
        //super.draw(ctx);
    };
}

class PottedRose extends Furniture {
    constructor(game, x, y, potColor, roseColor) {
        super(game, "./sprites/furniture/Roses.png",  8, 8, 240, 288, x, y, 240, 288);
        Object.assign(this, {potColor, roseColor});
        this.Pot = new GreenHousePot(game, x, y, potColor);
        this.Rose = new Rose(game, x - 2 * PARAMS.BLOCKWIDTH, y - 16 * PARAMS.BLOCKWIDTH, roseColor);
        this.BB = new BoundingBox(this.x, this.y - 4 * PARAMS.BLOCKWIDTH,10 * PARAMS.BLOCKWIDTH,14 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        this.Rose.draw(ctx);
        this.Pot.draw(ctx);
        super.draw(ctx);
    };
}

// --------------------- ENTRANCE FURNITURE -------------------------------
class BigCubePainting extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 374, 256, 32, 32, x, y, 256, 256);
        //this.BB = new BoundingBox(this.x, this.y,32 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 374, 256, 32, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 32 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        //super.draw(ctx);
    };
}

class StarryNight extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 476, 256, 32, 32, x, y, 256, 256);
        //this.BB = new BoundingBox(this.x, this.y,32 * PARAMS.BLOCKWIDTH,32 * PARAMS.BLOCKWIDTH);
    };


    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 476, 256, 32, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 32 * PARAMS.BLOCKWIDTH, 32 * PARAMS.BLOCKWIDTH);
        //super.draw(ctx);
    };
}

class BillionaireStatue extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/billionaire_statue.png", 0, 0, 136, 256, x, y, 36 * PARAMS.BLOCKWIDTH,66 * PARAMS.BLOCKWIDTH);
        this.BB = new BoundingBox(this.x, this.y,36 * PARAMS.BLOCKWIDTH,66 * PARAMS.BLOCKWIDTH);
    };


    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 136, 256, this.x - this.game.camera.x, this.y - this.game.camera.y, 36 * PARAMS.BLOCKWIDTH, 66 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'green';
            ctx.strokeRect(this.interactBB.x - this.game.camera.x, this.interactBB.y - this.game.camera.y, this.interactBB.width, this.interactBB.height);

        }
    };
}

// SHOES
class GoldenShoe extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/shoes.png", 36, 21, 176, 106, x, y, 1408, 1768);
        this.BB = new BoundingBox(this.x, this.y,16 * PARAMS.BLOCKWIDTH,9.8 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 36, 21, 176, 106, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 9.8 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class RainbowShoe extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/shoes.png", 38, 169, 176, 88, x, y, 1408, 704);
        this.BB = new BoundingBox(this.x, this.y,16.1 * PARAMS.BLOCKWIDTH,8.4 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 38, 169, 176, 88, this.x - this.game.camera.x, this.y - this.game.camera.y, 16.1 * PARAMS.BLOCKWIDTH, 8.4 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class TanShoe extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/shoes.png", 25, 323, 174, 88, x, y, 1392, 704);
        this.BB = new BoundingBox(this.x, this.y,16.1 * PARAMS.BLOCKWIDTH,8.4 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 25, 323, 174, 88, this.x - this.game.camera.x, this.y - this.game.camera.y, 16.1 * PARAMS.BLOCKWIDTH, 8.4 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BlackShoe extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/shoes.png", 32, 460, 173, 104, x, y, 1392, 832);
        this.BB = new BoundingBox(this.x, this.y,15.4 * PARAMS.BLOCKWIDTH,9.8 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 32, 460, 173, 104, this.x - this.game.camera.x, this.y - this.game.camera.y, 15.4 * PARAMS.BLOCKWIDTH, 9.8 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class GreyShoe extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/shoes.png", 308, 25, 171, 92, x, y, 1368, 736);
        this.BB = new BoundingBox(this.x, this.y,15.4 * PARAMS.BLOCKWIDTH,8.75 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 308, 25, 171, 92, this.x - this.game.camera.x, this.y - this.game.camera.y, 15.4 * PARAMS.BLOCKWIDTH, 8.75 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class WhiteShoe extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/shoes.png", 298, 161, 180, 95, x, y, 1440, 760);
        this.BB = new BoundingBox(this.x, this.y,16.45 * PARAMS.BLOCKWIDTH,9.1 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 298, 161, 180, 95, this.x - this.game.camera.x, this.y - this.game.camera.y, 16.45 * PARAMS.BLOCKWIDTH, 9.1 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

// TABLE
class LongTanTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 527, 20, 16, 30, x, y, 128, 240);
        this.BB = new BoundingBox(this.x, this.y,19.2 * PARAMS.BLOCKWIDTH,36 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 527, 20, 16, 30, this.x - this.game.camera.x, this.y - this.game.camera.y, 19.2 * PARAMS.BLOCKWIDTH, 36 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}



// --------------------- BEDROOM FURNITURE -------------------------------
class BigWhiteBed extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 340, 52, 32, 32, x, y, 256, 256);
        this.BB = new BoundingBox(this.x, this.y,52 * PARAMS.BLOCKWIDTH,48 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 340, 52, 32, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 52 * PARAMS.BLOCKWIDTH, 52 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class BedroomMirror extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 103, 86, 13, 30, x, y, 104, 240);
        this.BB = new BoundingBox(this.x, this.y,18 * PARAMS.BLOCKWIDTH,35 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 103, 86, 13, 30, this.x - this.game.camera.x, this.y - this.game.camera.y, 18 * PARAMS.BLOCKWIDTH, 35 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class Wardrobe extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 102, 35, 16, 32, x, y, 128, 256);
        this.BB = new BoundingBox(this.x, this.y,26 * PARAMS.BLOCKWIDTH,42 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 102, 35, 16, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 26 * PARAMS.BLOCKWIDTH, 42 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class SmallBlueTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 289, 274, 16, 14, x, y, 128, 112);
        this.BB = new BoundingBox(this.x, this.y,21 * PARAMS.BLOCKWIDTH,19 * PARAMS.BLOCKWIDTH);
    };


    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 289, 274, 16, 14, this.x - this.game.camera.x, this.y - this.game.camera.y, 21 * PARAMS.BLOCKWIDTH, 19 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}




// --------------------- MULTIPLE ROOMS FURNITURE -------------------------------
// Sections are in alphabetical order: shelf, chairs, lamp, paintings, plants, rug, tables


// SHELF
class Bookshelf extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 102, 307, 16, 32, x, y, 128, 256);
        this.BB = new BoundingBox(this.x, this.y,24 * PARAMS.BLOCKWIDTH,40 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 102, 307, 16, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 24 * PARAMS.BLOCKWIDTH, 40 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}


// CHAIRS
class StandardChair extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 460, 34, 13, 16, x, y, 32, 14);
        this.BB = new BoundingBox(this.x, this.y, 13 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 460, 34, 13, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 13 * PARAMS.BLOCKWIDTH, 16 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class RedStool extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png",  19, 38, 12, 10, x, y, 96, 80);
        this.BB = new BoundingBox(this.x, this.y,15 * PARAMS.BLOCKWIDTH,8 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 19, 38, 12, 10, this.x - this.game.camera.x, this.y - this.game.camera.y, 15 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}


// LAMP
class Lamp extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 461, 188, 11, 15, x, y, 88, 120);
        this.BB = new BoundingBox(this.x, this.y,13 * PARAMS.BLOCKWIDTH,17 * PARAMS.BLOCKWIDTH);
    };


    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 461, 188, 11, 15, this.x - this.game.camera.x, this.y - this.game.camera.y, 13 * PARAMS.BLOCKWIDTH, 17 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

// unused bed
/*class Bed extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 1024, 272, 128, 240, x, y, 128, 240);
        this.BB = new BoundingBox(this.x, this.y, 16 * PARAMS.BLOCKWIDTH, 30 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 1024, 272, 128, 240, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 30 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}*/


// PAINTINGS
class PaintingOne extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 595, 256, 32, 32, x, y, 595, 256);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 595, 256, 32, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 31 * PARAMS.BLOCKWIDTH, 31 * PARAMS.BLOCKWIDTH);
    };
}

class PaintingTwo extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 561, 256, 32, 32, x, y, 31 * PARAMS.BLOCKWIDTH, 31 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 561, 256, 32, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 31 * PARAMS.BLOCKWIDTH, 31 * PARAMS.BLOCKWIDTH);
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'green';
            ctx.strokeRect(this.interactBB.x - this.game.camera.x, this.interactBB.y - this.game.camera.y, this.interactBB.width, this.interactBB.height);

        }
    };
}

class PaintingThree extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 578, 221, 32, 16, x, y, 32, 16);
        this.BB = new BoundingBox(this.x, this.y,67 * PARAMS.BLOCKWIDTH,31 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 578, 221, 32, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 67 * PARAMS.BLOCKWIDTH, 31 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}


// PLANTS
class PlantOne extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 123, 21, 8, 15, x, y, 8, 15);
        this.BB = new BoundingBox(this.x, this.y,12 * PARAMS.BLOCKWIDTH,14 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 123, 21, 8, 15, this.x - this.game.camera.x, this.y - this.game.camera.y, 12 * PARAMS.BLOCKWIDTH, 25 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class PlantTwo extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 582, 141, 8, 11, x, y, 8, 10);
        this.BB = new BoundingBox(this.x, this.y,10 * PARAMS.BLOCKWIDTH,6 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 582, 141, 8, 11, this.x - this.game.camera.x, this.y - this.game.camera.y, 10 * PARAMS.BLOCKWIDTH, 12 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}


// RUG
class BigRug extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/House_Tileset.png", 32, 544, 328, 192, x, y, 328, 192);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 32, 544, 328, 192, this.x - this.game.camera.x, this.y - this.game.camera.y, 41 * PARAMS.BLOCKWIDTH, 24 * PARAMS.BLOCKWIDTH);
    };
}

class Rug extends Furniture {
    constructor(game, x, y, count, color, direction) {
        super(game, "./sprites/furniture/Floorings.png",  8, 8, 192, 192, x, y, 192, 192);
        Object.assign(this, {count, color, direction});
    };

    update() {};

    draw(ctx) {
        this.xOffset = 0;
        this.yOffset = 0;
        if(this.color === "Grey") {
            this.xOffset += 0;
            this.yOffset += 0;
        } else if (this.color === "Hodgepodge") {
            this.xOffset += 200;
            this.yOffset += 0;
        } else if (this.color === "Grass Dark") {
            this.xOffset += 2 * 200;
            this.yOffset += 0;
        } else if (this.color === "Grass Light") {
            this.xOffset += 3 * 200;
            this.yOffset += 0;
        } else if(this.color === "Red") {
            this.xOffset += 0;
            this.yOffset += 200;
        } else if (this.color === "Dark Blue") {
            this.xOffset += 200;
            this.yOffset += 200;
        } else if (this.color === "Pink") {
            this.xOffset += 2 * 200;
            this.yOffset += 200;
        } else if (this.color === "Tan") {
            this.xOffset += 3 * 200;
            this.yOffset += 200;
        } else if(this.color === "Orange") {
            this.xOffset += 0;
            this.yOffset += 2 * 200;
        } else if (this.color === "Light Blue") {
            this.xOffset += 200;
            this.yOffset += 2 * 200;
        } else if (this.color === "Brown") {
            this.xOffset += 2 * 200;
            this.yOffset += 2 * 200;
        } else if (this.color === "Green") {
            this.xOffset += 3 * 200;
            this.yOffset += 2 * 200;
        } else if(this.color === "Weird Checkered") {
            this.xOffset += 0;
            this.yOffset += 3 * 200;
        } else if (this.color === "Checkered") {
            this.xOffset += 200;
            this.yOffset += 3 * 200;
        } else if (this.color === "Wavy") {
            this.xOffset += 2 * 200;
            this.yOffset += 3 * 200;
        } else if (this.color === "Plus") {
            this.xOffset += 3 * 200;
            this.yOffset += 3 * 200;
        }

        if (this.direction === "horizontal") {
            for (let i = 0; i < this.count; i++) {
                ctx.drawImage(this.spritesheet, 8 + this.xOffset, 8 + this.yOffset, 192, 192, this.x + i * (10 * PARAMS.BLOCKWIDTH) - this.game.camera.x, this.y - this.game.camera.y, 10 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
            }
        } else if (this.direction === "vertical") {
            for (let i = 0; i < this.count; i++) {
                ctx.drawImage(this.spritesheet, 8 + this.xOffset, 8 + this.yOffset, 192, 192, this.x - this.game.camera.x, this.y + i * (10 * PARAMS.BLOCKWIDTH) - this.game.camera.y, 10 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
            }
        } else if (this.direction === "square") {
            for (let i = 0; i < this.count; i++) {
                for (let j = 0; j < this.count; j++) {
                    ctx.drawImage(this.spritesheet, 8 + this.xOffset, 8 + this.yOffset, 192, 192, this.x + i * (10 * PARAMS.BLOCKWIDTH) - this.game.camera.x, this.y + j * (10 * PARAMS.BLOCKWIDTH) - this.game.camera.y, 10 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
                }
            }
        }

        //ctx.drawImage(this.spritesheet, 8 + this.xOffset, 8 + this.yOffset, 192, 192, this.x - this.game.camera.x, this.y - this.game.camera.y, 24 * PARAMS.BLOCKWIDTH, 24 * PARAMS.BLOCKWIDTH);
    };
}


// TABLES
class DarkTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 85, 2, 32, 14, x, y, 32, 14);
        this.BB = new BoundingBox(this.x, this.y, 32 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 85, 2, 32, 14, this.x - this.game.camera.x, this.y - this.game.camera.y, 32 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}

class SmallDarkTable extends Furniture {
    constructor(game, x, y) {
        super(game, "./sprites/furniture/furniture.png", 85, 53, 16, 14, x, y, 16, 14);
        this.BB = new BoundingBox(this.x, this.y, 16 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH);
    };

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 85, 53, 16, 14, this.x - this.game.camera.x, this.y - this.game.camera.y, 16 * PARAMS.BLOCKWIDTH, 14 * PARAMS.BLOCKWIDTH);
        super.draw(ctx);
    };
}