class HowToPlay {
    constructor(game) {
        this.game = game;

        this.butlerIcon = ASSET_MANAGER.getAsset("./sprites/alfred.png");
        this.suitcase = ASSET_MANAGER.getAsset("./sprites/suitcase.png");

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
        ctx.font = "Bold 30px Courier";

        // add how-to instructions
        ctx.fillText("GAME CONTROLS:", 40, 140);

        ctx.font = "Bold 25px Courier";
        ctx.lineWidth = 2;
        ctx.strokeRect(42, 160, 40, 40);
        ctx.strokeRect(103, 160, 40, 40);
        ctx.fillText(" a , \u2190  Move Left", 40, 185);
        ctx.strokeRect(42, 205, 40, 40);
        ctx.strokeRect(103, 205, 40, 40);
        ctx.fillText(" d , \u2192  Move Right", 40, 233);
        ctx.strokeRect(42, 250, 40, 40);
        ctx.strokeRect(103, 250, 40, 40);
        ctx.fillText(" w , \u2191  Move Up", 40, 277);
        ctx.strokeRect(42, 295, 40, 40);
        ctx.strokeRect(103, 295, 40, 40);
        ctx.fillText(" s , \u2193  Move Down", 40, 320);
        ctx.strokeRect(42, 340, 100, 40);
        ctx.fillText(" shift  Run", 40, 365);

        // interaction
        ctx.textAlign = "left";
        ctx.font = "Bold 30px Courier";
        ctx.fillText("INTERACTION:", 408, 140);

        ctx.font = "Bold 25px Courier";
        ctx.lineWidth = 2;
        ctx.strokeRect(410, 160, 40, 40);
        ctx.fillText(" e    Interact", 408, 185);
        ctx.fillText("Clicking the ", 408, 233);
        ctx.fillText("above button will", 408, 263);
        ctx.fillText("open a chatbox.", 408, 293);
        ctx.fillText("To close a", 408, 323);
        ctx.fillText("chatbox, use your", 408, 353);
        ctx.fillText("mouse and click", 408, 383);
        ctx.fillText("the close button.", 408, 413);

        // hud
        ctx.font = "Bold 30px Courier";
        ctx.fillText("IN-GAME HUD:", 40, 470);

        ctx.font = "Bold 25px Courier";
        ctx.strokeRect(42, 490, 57, 57);
        ctx.fillText("Butler [Hints Chat Box]:", 115, 510);
        ctx.fillText("Provides clues for in-game help", 115, 540);
        ctx.drawImage(this.butlerIcon, 50, 492, 3 * 13, 3 * 18);

        ctx.strokeRect(42, 555, 57, 57);
        ctx.fillText("Suitcase [Items Box]:", 115, 575);
        ctx.fillText("Stores collected items", 115, 605);
        ctx.drawImage(this.suitcase, 41, 557, 3 * 20, 3 * 18);

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
}