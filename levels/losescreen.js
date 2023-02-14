class LoseScreen {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.restartBB = new BoundingBox((720 / 2) - 95, (720 / 2) - 45, 190, 70);

    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            if (this.mouseBB.collide(this.restartBB)) {
                console.log("collided")
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(titleScreen);
            }

            this.game.click = null;
        }

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {

        this.setBlackStroke(ctx);
        ctx.lineWidth = 6;
        ctx.textAlign = "center";

        //title
        ctx.font = "Bold 60px Courier";
        ctx.fillText("You Have Been", 720 / 2, 100);
        ctx.fillText("Caught!", 720 / 2, 160);

        ctx.font = "Bold 35px Courier";

        this.setBlackStroke(ctx);

        //restart
        if (this.mouseBB.collide(this.restartBB)) {
            console.log("red stroke set");
            this.setRedStroke(ctx);
        }
        ctx.fillText("RESTART", 720 / 2, 720 / 2);
        ctx.strokeRect(this.restartBB.left, this.restartBB.top, this.restartBB.width, this.restartBB.height);



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