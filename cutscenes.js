class IntroCutscene {
    constructor(game) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Cutscenes/Intro.png");
        this.animation = new Animator(this.spritesheet, 0, 0, 700, 700, 28, 0.2);

        this.x = 0;
        this.y = 0;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.exitBB = new BoundingBox(600 - 50,650 - 45,100,50);
    };

    update() {

        // if on last frame of animator, then display last frame
        if (this.animation.currentFrame() === this.animation.frameCount - 1) {
            this.animation = new Animator(this.spritesheet, 0, 0, 700, 700, 1, 0.2);
        }

        // if user clicks on exit button then go to level one
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.exitBB)) {
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(levelOne);
            }

            this.game.click = null;
        }

        // update location of mouse pointer
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {
        // exit button
        this.setBlackStroke(ctx);
        if (this.mouseBB.collide(this.exitBB)) {
            this.setRedStroke(ctx);
        }

        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 35px Courier";
        ctx.fillText("NEXT", 600, 640);
        ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        // cutscene
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE * 2);
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