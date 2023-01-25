class SceneManager {
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
        //HUD?
        ctx.font = "bold 24px sans-serif";
        ctx.fillStyle = "White";
        ctx.fillText("Chloe",500,500);

        // Title Screen
        /*if (this.title) {
            let width = 100;
            let height = 100;
            ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites/spy.png"), 0, 0, width, height);
            ctx.fillStyle = this.game.mouse && this.game.mouse.y > 100 && this.game.mouse.y < 200 ? "Black": "White";
            // if (the line above) then ctx.drawImage of an icon to go with the word "play"
            ctx.fillText("Play", 100, 100);
        }

        else if (this.title && this.credits) {
            // do nothing rn
            // overlay a credit textbox
        }*/
    };
}

class TestTitleScreen {
    constructor(game) {
        this.game = game;

        this.BB = new BoundingBox(0,0,1,1);
        this.mouseBB = new BoundingBox(0,0,1,1);
        this.playBB = new BoundingBox((720 / 2) - 50,(720 / 2) - 50,100,100);
        this.exitBB = new BoundingBox(700,700,100,100);


        this.play = false;
        this.credits = false;
    };

    update() {
        /*if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            this.game.click = null;
        }*/

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {

        if (!this.play) {
            this.setBlackStroke(ctx);
            //ctx.lineWidth = 1000;
            ctx.textAlign = "center";

            //title
            ctx.font = "30px Courier";
            ctx.fillText("Felon For You", 720 / 2, 100);

            //ctx.textAlign = "left";

            //play
            if (this.mouseBB.collide(this.playBB)) {
                this.setPinkStroke(ctx);
            }
            ctx.fillText("PLAY", 720 / 2, 720 / 2);
            ctx.strokeRect(this.playBB.left, this.playBB.top, this.playBB.width, this.playBB.height);

            this.setBlackStroke(ctx);
        }

        else {
            this.setBlackStroke(ctx);
            if (this.mouseBB.collide(this.exitBB)) {
                this.setPinkStroke(ctx);
            }

            ctx.lineWidth = 10;
            ctx.font = "30px Courier";
            ctx.fillText("EXIT", 700, 700);
            //ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        }
    };

    setBlackStroke(ctx) {
        ctx.strokeStyle = "Black";
        ctx.fillStyle = "Black";
    }

    setPinkStroke(ctx) {
        ctx.strokeStyle = "Pink";
        ctx.fillStyle = "Pink";
    }

}