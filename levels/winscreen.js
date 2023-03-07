class WinScreen {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.newgameBB = new BoundingBox((720 / 2) - 115, (720 / 2) - 65, 190, 70);
    };

    update() {
        // update if user clicked
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // restart game
            if (this.mouseBB.collide(this.newgameBB)) {
                this.game.camera.loadLevel(titleScreen);
                this.game.male = false;
                resetDisplays();
            }
            // reset user click
            this.game.click = null;
        }

        // update mouse movement
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {

        setBlackStroke(ctx);
        ctx.lineWidth = 6;
        ctx.textAlign = "center";

        //title
        ctx.font = "Bold 60px Courier";
        ctx.fillText("You Win!", PARAMS.CANVAS_WIDTH / 2, 160);
        ctx.fillText("You Win!", PARAMS.CANVAS_WIDTH / 2, 160);

        ctx.font = "Bold 35px Courier";

        setBlackStroke(ctx);

        //restart
        if (this.mouseBB.collide(this.newgameBB)) {
            setRedStroke(ctx);
        }
        ctx.fillText("NEW GAME", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        ctx.strokeRect(this.newgameBB.left, this.newgameBB.top, this.newgameBB.width, this.newgameBB.height);
    };
}