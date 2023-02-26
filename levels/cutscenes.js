class LevelOneCutscene {
    constructor(game) {
        this.game = game;

        this.x = 0;
        this.y = 0;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.exitBB = new BoundingBox(602 - 50,660 - 45,100,50);
    };

    update() {
        // if user clicks on exit button then go to level one
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.exitBB)) {
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(levelOne2);
            }

            this.game.click = null;
        }

        // update location of mouse pointer
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {
        // black box to cover screen
        //ctx.strokeRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        setBlackStroke(ctx);
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        // white on black background
        setWhiteStroke(ctx);

        // dialog and images
        this.drawCutscene(ctx);

        // exit button
        if (this.mouseBB.collide(this.exitBB)) {
            setRedStroke(ctx);
        }
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 35px Courier";
        ctx.fillText("NEXT", 602, 650);
        ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);
    };

    drawCutscene(ctx) {
        ctx.font = "Bold 25px Courier";
        ctx.textAlign = "left";

        ctx.fillText("Some time after Mr. Billionaire's toast...", 20, 20);

        let bSprite = ASSET_MANAGER.getAsset("./sprites/entities/billionaire_portraits.png");
        let sSprite = ASSET_MANAGER.getAsset("./sprites/entities/stephanie_portraits.png");
        let rSprite = ASSET_MANAGER.getAsset("./sprites/entities/richie_portraits.png");

        this.imageX = 340;
        this.imageY = 16;

        // original pic width and height
        this.imageW = 294;
        this.imageH = 294;

        // Draw width and height
        this.dWidth = 32 * PARAMS.BLOCKWIDTH;
        this.dHeight = 32 * PARAMS.BLOCKWIDTH;

        // billionaire portrait
        ctx.drawImage(bSprite, this.imageX, this.imageY, this.imageW, this.imageH, PARAMS.CANVAS_WIDTH / 6, 60, this.dWidth, this.dHeight);
        let bText = "Hello, everyone! This is our first rose ceremony together. The person who I feel the " +
            "greatest spark with will receive this rose.";
        wrapText(ctx, bText, PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH / 2)

        // steph
        ctx.drawImage(sSprite, this.imageX, this.imageY, this.imageW, this.imageH, (2 * PARAMS.CANVAS_WIDTH) / 3, 200, this.dWidth, this.dHeight);
        let sText = "Roses are so romantic! Especially red ones...reminds me of burning passion.";
        wrapText(ctx, sText, 20, 220, PARAMS.CANVAS_WIDTH / 2)

        // richie
        ctx.drawImage(rSprite, this.imageX, this.imageY, this.imageW, this.imageH, PARAMS.CANVAS_WIDTH / 6, 310, this.dWidth, this.dHeight);
        let rText = "Eek! *repositions himself to show his best \"come hither\" expression*";
        wrapText(ctx, rText, PARAMS.CANVAS_WIDTH / 2, 340, PARAMS.CANVAS_WIDTH / 2)

        // billionaire
        ctx.drawImage(bSprite, 32, 16, this.imageW, this.imageH, (2 * PARAMS.CANVAS_WIDTH) / 3, 455, this.dWidth, this.dHeight);
        bText = "*makes eye contact with...you!*     Meeting you today has lit a fire in my soul, and I feel it burning " +
            "bright. Will you accept this rose?";
        wrapText(ctx, bText, 20, 460, PARAMS.CANVAS_WIDTH / 2)
    };
};

class IntroCutscene {
    constructor(game) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/cutscenes/intro.png");
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
                this.game.camera.loadLevel(levelOne1);
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