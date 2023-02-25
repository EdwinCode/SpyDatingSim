class HowToPlay {
    constructor(game) {
        this.game = game;

        this.player1 = ASSET_MANAGER.getAsset("./sprites/entities/girluser.png");
        this.player2 = ASSET_MANAGER.getAsset("./sprites/entities/boyuser.png");

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.exitBB = new BoundingBox(600 - 50, 650 - 45, 100, 50);
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // exit how to play screen
            if (this.mouseBB.collide(this.exitBB)) {
                this.removeFromWorld = true;
            }
            // reset user click
            this.game.click = null;
        }

        // update mouse area
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {
        // fill screen to be white
        setWhiteStroke(ctx);
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        // draw title
        setBlackStroke(ctx);
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 60px Courier";
        ctx.fillText("HOW TO PLAY", 720 / 2, 100);

        // set text left aligned and smaller font
        ctx.textAlign = "left";
        ctx.font = "Bold 35px Courier";

        // add how-to instructions
        ctx.fillText("DEVELOPERS:", 40, 200);
        ctx.fillText("Maria Babko", 40, 240);
        ctx.fillText("Chloe Duncan", 40, 280);
        ctx.fillText("Edwin Solis-Bruno", 40, 320);

        // exit button
        setBlackStroke(ctx);
        if (this.mouseBB.collide(this.exitBB)) {
            setRedStroke(ctx);
        }
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 35px Courier";
        ctx.fillText("EXIT", 600, 640);
        ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);
    };
};