class TitleScreen {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.playBB = new BoundingBox((720 / 2) - 50,(720 / 2) - 45,100,70);
        this.creditsBB = new BoundingBox((720 / 2) - 85,(720 / 2) + 155,170,70);
        this.exitBB = new BoundingBox(600 - 50,650 - 45,100,50);

        this.credits = false;
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.playBB)) {
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(introCutscene);
            } else if (this.mouseBB.collide(this.creditsBB)) {
                this.credits = true;
            } else {
                if (this.mouseBB.collide(this.exitBB)) {
                    this.credits = false;
                }
            }

            this.game.click = null;
        }

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {

        if (!this.credits) {
            this.setBlackStroke(ctx);
            ctx.lineWidth = 6;
            ctx.textAlign = "center";

            //title
            ctx.font = "Bold 60px Courier";
            ctx.fillText("Felon For You", 720 / 2, 100);

            ctx.font = "Bold 35px Courier";

            //play
            if (this.mouseBB.collide(this.playBB)) {
                this.setRedStroke(ctx);
            }
            ctx.fillText("PLAY", 720 / 2, 720 / 2);
            ctx.strokeRect(this.playBB.left, this.playBB.top, this.playBB.width, this.playBB.height);

            this.setBlackStroke(ctx);

            //credits
            if (this.mouseBB.collide(this.creditsBB)) {
                this.setRedStroke(ctx);
            }
            ctx.fillText("CREDITS", 720 / 2, 720 / 2 + 200);
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
            ctx.fillText("CREDITS",720 / 2, 100);

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