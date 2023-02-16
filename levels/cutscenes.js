class IntroCutscene {
    constructor(game) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/cutscenes/Intro.png");
        this.animation = new Animator(this.spritesheet, 0, 0, 700, 700, 64, 0.1);

        this.xStart = (this.animation.frameCount * 700) - 700;

        this.x = 0;
        this.y = 0;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.exitBB = new BoundingBox(602 - 50,660 - 45,100,50);
    };

    update() {

        // if on last frame of animator, then display last frame
        if (this.animation.currentFrame() === this.animation.frameCount - 1) {
            this.animation = new Animator(this.spritesheet, this.xStart, 0, 700, 700, 1, 0.2);
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
        setBlackStroke(ctx);
        if (this.mouseBB.collide(this.exitBB)) {
            setRedStroke(ctx);
        }

        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 35px Courier";
        ctx.fillText("NEXT", 602, 650);
        ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        // cutscene
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.95);
    };
};