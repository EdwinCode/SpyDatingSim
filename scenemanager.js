class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.loadLevel(titleScreen);
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level) {
        this.currentLevel = level;

        if (this.currentLevel === titleScreen) {
            this.game.addEntity(new TestTitleScreen(this.game));
        }

        if (this.currentLevel === levelOne) {
            this.clearEntities();
            this.game.addEntity(new SpyCharacter(this.game));
        }


    };

    update() {

    };

    draw(ctx) {

    };
}

class TestTitleScreen {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.playBB = new BoundingBox((720 / 2) - 50,(720 / 2) - 45,100,70);

        this.play = false;
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.playBB)) {
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(levelOne);
            }

            this.game.click = null;
        }

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {

        if (!this.play) {
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