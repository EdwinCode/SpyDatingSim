class HUD {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.butlerBB = new BoundingBox(680 / 3 - 50,8,100,30);
        this.suitcaseBB = new BoundingBox(680 - (680 / 3) - 60,8,120,30);
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
        ctx.lineWidth = 4;
        ctx.textAlign = "center";
        ctx.font = "Bold 20px Courier";

        // HUD box
        ctx.strokeRect(0, 0, 680, 45);

        // butler
        if (this.mouseBB.collide(this.butlerBB)) {
            this.setRedStroke(ctx);
        }
        ctx.fillText("Butler", 680 / 3, 28);
        ctx.strokeRect(this.butlerBB.left, this.butlerBB.top, this.butlerBB.width, this.butlerBB.height);

        this.setBlackStroke(ctx);

        // suitcase
        if (this.mouseBB.collide(this.suitcaseBB)) {
            this.setRedStroke(ctx);
        }
        ctx.fillText("Suitcase", 680 - (680 / 3), 28);
        ctx.strokeRect(this.suitcaseBB.left, this.suitcaseBB.top, this.suitcaseBB.width, this.suitcaseBB.height);

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