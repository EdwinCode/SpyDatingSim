class Darkness {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 1000/1.25;
        this.dHeight = 1000/1.25;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/darkness.png")

        this.BB = new BoundingBox(this.x,this.y + this.dWidth/5,this.dWidth * PARAMS.SCALE/3.5,this.dHeight * PARAMS.SCALE/3.5 - this.dWidth/5);

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 1000, 1000, this.x, this.y, this.dWidth * PARAMS.SCALE/3.5, this.dHeight * PARAMS.SCALE/3.5);

        //bounding box
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}