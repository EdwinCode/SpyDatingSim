class TitleScreen {
    constructor(game) {
        this.game = game;

        this.animationPlayer1 = new Animator(ASSET_MANAGER.getAsset("./sprites/entities/sprite_girl_purple.png"), 8, 8, 136, 210, 1, 0.2);
        this.animationPlayer2 = new Animator(ASSET_MANAGER.getAsset("./sprites/entities/sprite_boy_brown.png"), 8, 8, 120, 208, 1, 0.2);


        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.creditsBB = new BoundingBox(this.game.ctx.canvas.width / 2 - 80, (720 / 2) + 155, 160, 70);
        this.exitBB = new BoundingBox(600 - 50, 650 - 45, 100, 50);

        this.player1BB = new BoundingBox((720 / 2) - 210, (720 / 2) - 55, 80, 125);
        this.player2BB = new BoundingBox((720 / 2) + 90, (720 / 2) - 55, 80, 125);

        this.credits = false;
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            if (this.mouseBB.collide(this.player1BB)) {
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(introCutscene);
            } else if (this.mouseBB.collide(this.player2BB)) {
                this.game.camera.clearEntities();
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

        if (!this.credits) {
            this.setBlackStroke(ctx);
            ctx.lineWidth = 6;
            ctx.textAlign = "center";

            //title
            ctx.font = "Bold 60px Courier";
            ctx.fillText("Felon For You", ctx.canvas.width / 2, 100);

            ctx.font = "Bold 35px Courier";

            //choose your player
            ctx.fillText("Choose your Agent Spy:", ctx.canvas.width / 2, 250);

            //purple hair girl
            if (this.mouseBB.collide(this.player1BB)) {
                this.setRedStroke(ctx);
            }
            this.animationPlayer1.drawFrame(this.game.clockTick, ctx,(720 / 2) - 200, (720 / 2) - 45,PARAMS.SCALE/6);
            ctx.strokeRect(this.player1BB.left, this.player1BB.top, this.player1BB.width, this.player1BB.height);

            this.setBlackStroke(ctx);

            //brown hair boy
            if (this.mouseBB.collide(this.player2BB)) {
                this.setRedStroke(ctx);
            }
            this.animationPlayer2.drawFrame(this.game.clockTick, ctx,(720 / 2) + 100, (720 / 2) - 45,PARAMS.SCALE/6);
            ctx.strokeRect(this.player2BB.left, this.player2BB.top, this.player2BB.width, this.player2BB.height);

            //play
            /*if (this.mouseBB.collide(this.playBB)) {
                this.setRedStroke(ctx);
            }
            ctx.fillText("PLAY", 720 / 2, 720 / 2);
            ctx.strokeRect(this.playBB.left, this.playBB.top, this.playBB.width, this.playBB.height);*/

            this.setBlackStroke(ctx);

            //credits
            if (this.mouseBB.collide(this.creditsBB)) {
                this.setRedStroke(ctx);
            }
            ctx.fillText("CREDITS", ctx.canvas.width / 2, 720 / 2 + 200);
            ctx.strokeRect(this.creditsBB.left, this.creditsBB.top, this.creditsBB.width, this.creditsBB.height);

        } else {
            this.setBlackStroke(ctx);
            if (this.mouseBB.collide(this.exitBB)) {
                this.setRedStroke(ctx);
            }

            ctx.lineWidth = 6;
            ctx.textAlign = "center";
            ctx.font = "Bold 35px Courier";
            ctx.fillText("EXIT", 600, 640);
            ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        }

        if (this.credits) {
            this.setBlackStroke(ctx);
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
        }
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