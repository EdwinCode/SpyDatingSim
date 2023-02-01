class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.gameOver = false;

        this.spyCharacter = new Spy(this.game, 0, 55);

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
            //this.game.addEntity(new IntroCutscene(this.game));
            this.game.addEntity(this.spyCharacter);
            this.game.addEntity(new HUD(this.game));

            for (let i = 0; i < level.bigTables.length; i++) {
                let table = level.bigTables[i];
                this.game.addEntity(new BigTable(this.game, table.x, table.y));
            }
            this.game.camera.paused = false;
        }

    };

    update() {

        let midpointX = PARAMS.CANVAS_WIDTH  / 2 - this.spyCharacter.width / 2;
        this.x = this.spyCharacter.x - midpointX;

        let midpointY = PARAMS.CANVAS_HEIGHT / 2 - this.spyCharacter.height / 2;
        this.y = this.spyCharacter.y - midpointY;
    };

    draw(ctx) {
        //
    };
}

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

class TestTitleScreen {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.playBB = new BoundingBox((720 / 2) - 50,(720 / 2) - 45,100,70);
        this.creditsBB = new BoundingBox((720 / 2) - 85,(720 / 2) + 155,170,70);
        this.exitBB = new BoundingBox(600 - 50,650 - 45,100,50);

        this.credits = false;
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.playBB)) {
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(levelOne);
            } else if (this.mouseBB.collide(this.creditsBB)) {
                this.credits = true;
            } else {
                if (this.mouseBB.collide(this.exitBB)) {
                    this.credits = false;
                }
            }

            this.game.click = null;
        }

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {

        if (!this.credits) {
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

            //credits
            if (this.mouseBB.collide(this.creditsBB)) {
                this.setRedStroke(ctx);
            }
            ctx.fillText("CREDITS", 720 / 2, 720 / 2 + 200);
            ctx.strokeRect(this.creditsBB.left, this.creditsBB.top, this.creditsBB.width, this.creditsBB.height);

        } else {
            this.setBlackStroke(ctx);
            if (this.mouseBB.collide(this.exitBB)) {
                this.setRedStroke(ctx);
            }

            ctx.lineWidth = 6;
            ctx.textAlign = "center";
            ctx.font = "Bold 35px Courier";
            ctx.fillText("EXIT", 600, 640);
            ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        }

        if (this.credits) {
            this.setBlackStroke(ctx);
            ctx.lineWidth = 6;
            ctx.textAlign = "center";
            ctx.font = "Bold 60px Courier";
            ctx.fillText("CREDITS",720 / 2, 100);

            ctx.textAlign = "left";
            ctx.font = "Bold 35px Courier";

            ctx.fillText("DEVELOPERS:", 40, 200);
            ctx.fillText("Maria Babko", 40, 240);
            ctx.fillText("Chloe Duncan", 40, 280);
            ctx.fillText("Edwin Solis-Bruno", 40, 320);
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