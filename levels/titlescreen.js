class TitleScreen {
    constructor(game) {
        this.game = game;

        this.animationPlayer1 = ASSET_MANAGER.getAsset("./sprites/entities/girluser.png");
        this.animationPlayer2 = ASSET_MANAGER.getAsset("./sprites/entities/boyuser.png");


        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.instructionsBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 2 - 100, (720 / 2) + 146, 200, 50);
        this.creditsBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 2 - 65, (720 / 2) + 215, 130, 50);
        this.exitBB = new BoundingBox(600 - 50, 650 - 45, 100, 50);

        this.player1BB = new BoundingBox((720 / 2) - 210, (720 / 2) - 55, 80, 125);
        this.player2BB = new BoundingBox((720 / 2) + 90, (720 / 2) - 55, 80, 125);

        this.credits = false;
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            if (this.mouseBB.collide(this.player1BB)) {
                this.game.camera.loadLevel(introCutscene);
            } else if (this.mouseBB.collide(this.player2BB)) {
                this.game.camera.loadLevel(introCutscene);
                this.game.male = true;
            }

            // credits
            else if (this.mouseBB.collide(this.creditsBB)) {
                this.credits = true;
            }

            // exit credits screen
            else {
                if (this.mouseBB.collide(this.exitBB)) {
                    this.credits = false;
                }
            }

            this.game.click = null;
        }

        // update mouse area
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {

        // main screen
        if (!this.credits) {
            setBlackStroke(ctx);
            ctx.lineWidth = 6;
            ctx.textAlign = "center";

            //title
            ctx.font = "Bold 60px Courier";
            ctx.fillText("Felon For You", PARAMS.CANVAS_WIDTH / 2, 100);

            ctx.font = "Bold 35px Courier";

            //choose your player
            ctx.fillText("Choose your Agent Spy:", PARAMS.CANVAS_WIDTH / 2, 250);

            //purple hair girl
            if (this.mouseBB.collide(this.player1BB)) {
                setRedStroke(ctx);
            }
            ctx.drawImage(this.animationPlayer1, 0, 0, 128, 208, (720 / 2) - 200, (720 / 2) - 45, 128 / 2, 208 / 2);
            ctx.strokeRect(this.player1BB.left, this.player1BB.top, this.player1BB.width, this.player1BB.height);

            // RESET TEXT
            setBlackStroke(ctx);

            //brown hair boy
            if (this.mouseBB.collide(this.player2BB)) {
                setRedStroke(ctx);
            }
            ctx.drawImage(this.animationPlayer2, 0, 0, 128, 208, (720 / 2) + 100, (720 / 2) - 45, 128 / 2, 208 / 2);
            ctx.strokeRect(this.player2BB.left, this.player2BB.top, this.player2BB.width, this.player2BB.height);

            // RESET TEXT and make font smaller
            setBlackStroke(ctx);
            ctx.font = "Bold 25px Courier";

            // how to play button
            if (this.mouseBB.collide(this.instructionsBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("HOW TO PLAY", ctx.canvas.width / 2, 720 / 2 + 180);
            ctx.strokeRect(this.instructionsBB.left, this.instructionsBB.top, this.instructionsBB.width, this.instructionsBB.height);

            // RESET TEXT
            setBlackStroke(ctx);

            // credits
            if (this.mouseBB.collide(this.creditsBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("CREDITS", ctx.canvas.width / 2, 720 / 2 + 250);
            ctx.strokeRect(this.creditsBB.left, this.creditsBB.top, this.creditsBB.width, this.creditsBB.height);

        }

        // credits screen
        else {
            setBlackStroke(ctx);
            ctx.lineWidth = 6;
            ctx.textAlign = "center";
            ctx.font = "Bold 60px Courier";
            ctx.fillText("CREDITS", 720 / 2, 100);

            ctx.textAlign = "left";
            ctx.font = "Bold 35px Courier";

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
        }
    };
};