class BigTable {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 236/2;
        this.dHeight = 256/2;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/furniture/House_Tileset.png");

        this.BB = new BoundingBox(this.x,this.y + this.dWidth/5,this.dWidth * PARAMS.SCALE/3.5 - 4,this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 256, 256, 236, 256, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}

class SmallTable {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/furniture/House_Tileset.png"),
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

class BigCouch {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 255/1.5;
        this.dHeight = 107/1.5;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/furniture/House_Tileset.png")

        this.BB = new BoundingBox(this.x, this.y + this.dWidth/5, this.dWidth * PARAMS.SCALE/3.5 - 4, this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 770, 405, 252, 107, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

        }
    };
}

class ChairRight {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 114/1.5;
        this.dHeight = 126/1.5;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/furniture/House_Tileset.png")

        this.BB = new BoundingBox(this.x, this.y + this.dWidth/5, this.dWidth * PARAMS.SCALE/3.5 - 4, this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 518, 386, 115, 126, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}


class ChairLeft {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 115/1.5;
        this.dHeight = 126/1.5;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/furniture/House_Tileset.png")

        this.BB = new BoundingBox(this.x, this.y + this.dWidth/5, this.dWidth * PARAMS.SCALE/3.5 - 4, this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 518, 256, 115, 126, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

        }
    };
}

class BigRug {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 330/1.5;
        this.dHeight = 194/1.5;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/furniture/House_Tileset.png")

        this.BB = new BoundingBox(this.x, this.y + this.dWidth/5, this.dWidth * PARAMS.SCALE/3.5 - 4, this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 30, 542, 330, 194, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

        }
    };
}

class PlainWall {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 240/1.5;
        this.dHeight = 252/1.5;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/furniture/House_Tileset.png")

        this.BB = new BoundingBox(this.x, this.y, this.dWidth * PARAMS.SCALE/3.5 - 4, this.dHeight * PARAMS.SCALE/3.5);

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 520, 0, 240, 252, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

        }
    };
}

class SideWallLeft {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 120;
        this.dHeight = 136/1.5;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/furniture/House_Tileset.png")

        this.BB = new BoundingBox(this.x, this.y, this.dWidth * PARAMS.SCALE/3.5 - 4, this.dHeight * PARAMS.SCALE/3.5);
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 896, 0, 40, 136, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}


class SideWallRight {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 40/1.5;
        this.dHeight = 136/1.5;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/furniture/House_Tileset.png")

        this.BB = new BoundingBox(this.x, this.y, this.dWidth * PARAMS.SCALE/3.5 - 4, this.dHeight * PARAMS.SCALE/3.5);

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 984, 128, 40, 136, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

        }
    };
}

class WallBottom {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 256/1.5;
        this.dHeight = 32/1.5;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/furniture/House_Tileset.png")

        this.BB = new BoundingBox(this.x, this.y, this.dWidth * PARAMS.SCALE/3.5 - 4, this.dHeight * PARAMS.SCALE/3.5);

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 256, 0, 256, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}

