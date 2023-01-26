class BigTable {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/Furniture/House_Tileset.png"),
        //     255, 255, 236, 268, 1, 0.5);
        //
        this.x = 256;
        this.y = 256;
        this.width = 236;
        this.height = 256;
        this.dX = 280;
        this.dY = 250;
        this.dWidth = 125;
        this.dHeight = 134;

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Furniture/House_Tileset.png")

        this.BB = new BoundingBox(this.dX, this.dY, this.dWidth, this.dHeight);
        this.leftBB = new BoundingBox(this.dX, this.dY, 0, this.dHeight);
        this.rightBB = new BoundingBox(this.dX + this.dWidth, this.dY, 0, this.dHeight);;
        this.upBB = new BoundingBox(this.dX, this.dY, this.width, 0);;
        this.downBB = new BoundingBox(this.dX, this.dY + this.dHeight, this.dWidth, 0);;
    };

    update() {

    };

    draw(ctx) {
        //this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        ctx.drawImage(this.spritesheet,this.x, this.y, this.width, this.height, 280, 250, 125, 134);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
}

class SmallTable {
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
