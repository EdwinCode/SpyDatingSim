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
        ctx.fillStyle = "gray";
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        // draw title
        setBlackStroke(ctx);
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 60px Courier";
        ctx.fillText("HOW TO PLAY", 720 / 2, 80);

        // set text left aligned and smaller font
        ctx.textAlign = "left";
        ctx.font = "Bold 35px Courier";

        // add how-to instructions
        ctx.fillText("GAME CONTROLS:", 40, 150);

        ctx.font = "Bold 25px Courier";
        ctx.lineWidth = 2;
        ctx.strokeRect(42, 215, 40, 40);
        ctx.strokeRect(103, 215, 40, 40);
        ctx.fillText(" a , \u2190  Move Left", 40, 240);
        ctx.strokeRect(42, 260, 40, 40);
        ctx.strokeRect(103, 260, 40, 40);
        ctx.fillText(" d , \u2192  Move Right", 40, 287);
        ctx.strokeRect(42, 305, 40, 40);
        ctx.strokeRect(103, 305, 40, 40);
        ctx.fillText(" w , \u2191  Move Up", 40, 334);
        ctx.strokeRect(42, 350, 40, 40);
        ctx.strokeRect(103, 350, 40, 40);
        ctx.fillText(" s , \u2193  Move Down", 40, 378);
        ctx.strokeRect(72, 395, 40, 40);
        ctx.fillText(" e      Interact", 70, 422);
        ctx.strokeRect(42, 440, 100, 40);
        ctx.fillText(" shift  Run", 40, 465);

        ctx.fillText("", 40, 480);
        ctx.fillText("IN-GAME HUD:", 40, 520);
        ctx.fillText("words", 40, 560);
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