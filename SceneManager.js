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

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/spy.png");
        this.elapsed = 0;

        this.play = false;
        this.credits = false;
    }

    update() {
        this.elapsed += this.game.clockTick;
        if (this.game.keys["."]) {
            //this.game.camera.title = false;
            this.removeFromWorld = true;
            this.game.camera.loadLevel(this.level, 0, 0, false, false);
        }
    }

    draw(ctx) {

        if (!this.play) {
            this.setBlackStroke(ctx);
            ctx.lineWidth = 12;
            ctx.textAlign = "center";

            //title
            ctx.font = "30px Courier";
            ctx.fillText("Felon For You", 100, 100);

            //play
        }

        ctx.fillStyle = "Black";
        ctx.fillRect(0, 0, 500, 500);

        ctx.font = "30px Courier";

        ctx.fillStyle = "White";
        ctx.fillText("Test", 210, 260);
    };

    setBlackStroke(ctx) {
        ctx.strokeStyle = "Black";
        ctx.fillStyle = "Black";
    }

}