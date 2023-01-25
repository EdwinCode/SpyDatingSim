class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;

        this.gameOver = false;

        this.title = true;
        this.credits = false;
        this.level = null;

        this.menuSelect = {
            play: false,
            credits: false
        }
        this.menuSelect = -10;
        this.creditsLineIndex = 0;
        this.menuButtonTimer = 0.15;
        this.menubuttonCooldown = 0.15;

        this.spy = new SpyCharacter(this.game);

        this.loadLevel(levelOne, 0, 0, false, true);
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level, x, y, transition, title) {
        this.title = title;
        this.level = level;
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

        this.game.camera.paused = false;


    };

    update() {

        if (this.title && this.game.click) {
            // if "play"
            if (this.game.mouse && this.game.mouse.y > 10 && this.game.mouse.y < 11 ? "Grey": "White") {
                this.title = false;
                this.spy = new SpyCharacter(this.game);
                this.loadLevel(levelOne,0, 0, false);
            }
            // if "about"
            // if "credits"
        }

        if (this.gameOver) {
            //do nothing right now
        }
    };

    draw(ctx) {
        //HUD?

        // Title Menu
        if (this.title && !this.credits) {
            let width = 100;
            let height = 100;
            ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites/spy.png"), 0, 0, width, height);
            ctx.fillStyle = this.game.mouse && this.game.mouse.y > 10 && this.game.mouse.y < 11 ? "Black": "White";
            // if (the line above) then ctx.drawImage of an icon to go with the word "play"
            ctx.fillText("Play", 10, 10);
        }

        else if (this.title && this.credits) {
            // do nothing rn
            // overlay a credit textbox
        }
    };

}