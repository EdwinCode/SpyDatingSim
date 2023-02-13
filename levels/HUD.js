class HUD {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.butlerBB = new BoundingBox(545,5,60,54);
        this.suitcaseBB = new BoundingBox(615,5,60,54);
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.butlerBB)) {
                // do something
            } else {
                if (this.mouseBB.collide(this.suitcaseBB)) {
                    // do something
                }
            }

            this.game.click = null;
        }

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {
        this.setBlackStroke(ctx);
        ctx.lineWidth = 3;
        ctx.textAlign = "center";
        ctx.font = "Bold 20px Courier";
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'gray';

        // butler
        if (this.mouseBB.collide(this.butlerBB)) {
            this.setRedStroke(ctx);
        }
        ctx.strokeRect(this.butlerBB.left, this.butlerBB.top, this.butlerBB.width, this.butlerBB.height);
        ctx.fillRect(this.butlerBB.left, this.butlerBB.top, this.butlerBB.width, this.butlerBB.height);
        this.butlerIcon = ASSET_MANAGER.getAsset("./sprites/alfred.png")
        ctx.drawImage(this.butlerIcon, 556, 6, PARAMS.SCALE * 13, PARAMS.SCALE * 18);

        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'gray';

        // suitcase
        if (this.mouseBB.collide(this.suitcaseBB)) {
            this.setRedStroke(ctx);
        }
        ctx.strokeRect(this.suitcaseBB.left, this.suitcaseBB.top, this.suitcaseBB.width, this.suitcaseBB.height);
        ctx.fillRect(this.suitcaseBB.left, this.suitcaseBB.top, this.suitcaseBB.width, this.suitcaseBB.height);
        this.butlerIcon = ASSET_MANAGER.getAsset("./sprites/suitcase.png")
        ctx.drawImage(this.butlerIcon, 615, 5, PARAMS.SCALE * 20, PARAMS.SCALE * 18);

        this.setBlackStroke(ctx);
    };

    setBlackStroke(ctx) {
        ctx.strokeStyle = "Black";
        ctx.fillStyle = "Black";
    };

    setRedStroke(ctx) {
        ctx.strokeStyle = "rgb(139,0,0)";
        ctx.fillStyle = "rgb(139,0,0)";
    };
}