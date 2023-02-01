class BigTable {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});


        // this.dX = 280;
        // this.dY = 250;
        this.dWidth = 125;
        this.dHeight = 134;

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Furniture/House_Tileset.png")

        //Overall bounding box
        // -4 is to make the bounding box fit the bigTable better
        this.BB = new BoundingBox(this.x, this.y, this.dWidth * PARAMS.SCALE/3.5 - 4, this.dHeight * PARAMS.SCALE/3.5);

        //Very messy rn LOL
        //Smaller bounding boxes on each side
        //Boxes are drawn so that the corners are not touched (VERY IMPORTANT)
        /*
        BREAK DOWN OF EXAMPLE LINE:


        this.rightBB = new BoundingBox(this.x + this.dWidth * PARAMS.SCALE/3.5 - 4, this.y, 0, this.dHeight  * PARAMS.SCALE/3.5);

                    this.x + this.dWidth * PARAMS.SCALE/3.5 - 4    ==>   starting draw x spot + draw width (with scaling)
                                                                            , -4 is to make the bounding box fit the bigTable better)
                    this.y                                           ==>   starting draw y spot
                    0                                                 ==>   draw width of the bounding box
                    this.dHeight  * PARAMS.SCALE/3.5                ==>   draw height of the bounding box (with scaling)
        */

        this.leftBB = new BoundingBox(this.x, this.y, 0, this.dHeight  * PARAMS.SCALE/3.5);
        this.rightBB = new BoundingBox(this.x + this.dWidth * PARAMS.SCALE/3.5 - 4, this.y, 0, this.dHeight  * PARAMS.SCALE/3.5);
        this.topBB = new BoundingBox(this.x + 5, this.y, this.dWidth  * PARAMS.SCALE/3.5 - 15, 0);
        this.bottomBB = new BoundingBox(this.x + 5, this.y + this.dHeight  * PARAMS.SCALE/3.5, this.dWidth  * PARAMS.SCALE/3.5 - 15, 0);
    };



    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 256, 256, 236, 256, this.x - this.game.camera.x, this.y - this.game.camera.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);
        //        ctx.drawImage(this.spritesheet,this.x, this.y, this.width, this.height, this.dX, this.dY, this.dWidth * PARAMS.SCALE * 1.5, this.dHeight * PARAMS.SCALE * 1.5);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

            ctx.strokeStyle = 'Blue';
            ctx.strokeRect(this.leftBB.x  - this.game.camera.x, this.leftBB.y - this.game.camera.y, this.leftBB.width, this.leftBB.height);

            ctx.strokeStyle = 'Green';
            ctx.strokeRect(this.rightBB.x  - this.game.camera.x, this.rightBB.y - this.game.camera.y, this.rightBB.width, this.rightBB.height);

            ctx.strokeStyle = 'Purple';
            ctx.strokeRect(this.topBB.x  - this.game.camera.x, this.topBB.y - this.game.camera.y, this.topBB.width, this.topBB.height);

            ctx.strokeStyle = 'Black';
            ctx.strokeRect(this.bottomBB.x  - this.game.camera.x, this.bottomBB.y - this.game.camera.y, this.bottomBB.width, this.bottomBB.height);
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
