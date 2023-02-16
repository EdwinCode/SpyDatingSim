class HUD {
    constructor(game) {
        this.game = game;
        this.levelText = "";
        this.textColor = "";

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.butlerBB = new BoundingBox(545,5,60,54);
        this.suitcaseBB = new BoundingBox(615,5,60,54);
    };

    setText(text) {
        this.levelText = text;
    };

    setTextColor(color) {
        this.textColor = color;
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
        setBlackStroke(ctx);
        ctx.lineWidth = 3;
        ctx.textAlign = "left";
        ctx.font = "Bold 20px Courier";

        ctx.strokeStyle = this.textColor;
        ctx.fillStyle = this.textColor;

        // level
        ctx.fillText(this.levelText, 2, 15);

        ctx.fillStyle = 'gray';

        // butler
        if (this.mouseBB.collide(this.butlerBB)) {
            ctx.fillStyle = "rgb(93,93,93)";
        }
        ctx.strokeRect(this.butlerBB.left, this.butlerBB.top, this.butlerBB.width, this.butlerBB.height);
        ctx.fillRect(this.butlerBB.left, this.butlerBB.top, this.butlerBB.width, this.butlerBB.height);
        this.butlerIcon = ASSET_MANAGER.getAsset("./sprites/alfred.png")
        ctx.drawImage(this.butlerIcon, 556, 6, 3 * 13, 3 * 18);

        ctx.fillStyle = 'gray';

        // suitcase
        if (this.mouseBB.collide(this.suitcaseBB)) {
            ctx.fillStyle = "rgb(93,93,93)";
        }
        ctx.strokeRect(this.suitcaseBB.left, this.suitcaseBB.top, this.suitcaseBB.width, this.suitcaseBB.height);
        ctx.fillRect(this.suitcaseBB.left, this.suitcaseBB.top, this.suitcaseBB.width, this.suitcaseBB.height);
        this.butlerIcon = ASSET_MANAGER.getAsset("./sprites/suitcase.png")
        ctx.drawImage(this.butlerIcon, 615, 5, 3 * 20, 3 * 18);

        setBlackStroke(ctx);
    };
}