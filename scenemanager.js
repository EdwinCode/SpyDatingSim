class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.gameOver = false;

        //this.spy = new SpyCharacter(this.game);

        //this.loadLevel(levelOne, 0, 0, true);

        this.loadLevel(titleScreen);
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level) {
        /*this.level = level;
        this.title = title;
        this.clearEntities();
        this.x = 0;

        this.spy.x = x;
        this.spy.y = y;
        this.spy.removeFromWorld = false;

        let that = this;
        let spy = false;

        this.game.entities.forEach(function (entity) {
            if (that.spy === entity) spy = true;
        });

        if (!spy) this.game.addEntity(this.spy);

        this.game.camera.paused = false;*/

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
       /* this.menuButtonTimer += this.game.clockTick;
        this.timer += this.game.clockTick;

        if (this.title && this.game.click) {
            // if "play"
            if (this.game.click && this.game.click.y > 100 && this.game.click.y < 200 ? "Grey": "White") {
                this.title = false;
                this.spy = new SpyCharacter(this.game);
                this.loadLevel(levelOne,0, 0, false);
            }
            // if "about"
            // if "credits"
        }

        if (this.gameOver) {
            //do nothing right now
        }*/
    };

    draw(ctx) {

    };
}

class TestTitleScreen {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.playBB = new BoundingBox((720 / 2) - 50,(720 / 2) - 45,100,70);
        this.exitBB = new BoundingBox(700,700,70,70);

        this.play = false;
        this.credits = false;
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.playBB)) {
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(levelOne);
            }

            else {
                if (this.mouseBB.collide(this.exitBB)) {

                }
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

            //ctx.textAlign = "left";

            ctx.font = "Bold 35px Courier";

            //play
            if (this.mouseBB.collide(this.playBB)) {
                this.setRedStroke(ctx);
            }
            ctx.fillText("PLAY", 720 / 2, 720 / 2);
            ctx.strokeRect(this.playBB.left, this.playBB.top, this.playBB.width, this.playBB.height);

            this.setBlackStroke(ctx);
        }

        /*else {
            this.setBlackStroke(ctx);
            if (this.mouseBB.collide(this.exitBB)) {
                this.setRedStroke(ctx);
            }

            ctx.lineWidth = 10;
            ctx.font = "30px Courier";
            ctx.fillText("EXIT", 700, 700);
            //ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        }*/
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