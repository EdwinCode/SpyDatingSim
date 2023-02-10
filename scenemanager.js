class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.gameOver = false;

        this.spyCharacter = new Spy(this.game, -100, 55);

        this.darkness = new Darkness(this.game, 0, 0);

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
            this.game.addEntity(new TitleScreen(this.game));
        }

        if (this.currentLevel === introCutscene) {
            this.clearEntities();
            this.game.addEntity(new IntroCutscene(this.game));
        }

        if (this.currentLevel === levelOne) {
            this.clearEntities();

            this.game.addEntity(new HUD(this.game));


            //big couch
            for (let i = 0; i < level.bigCouches.length; i++) {
                let couch = level.bigCouches[i];
                this.game.addEntity(new BigCouch(this.game, couch.x, couch.y));
            }

            //chair right
            for (let i = 0; i < level.chairRights.length; i++) {
                let chairRight = level.chairRights[i];
                this.game.addEntity(new ChairRight(this.game, chairRight.x, chairRight.y));
            }

            //chair left
            for (let i = 0; i < level.chairLefts.length; i++) {
                let chairLeft = level.chairLefts[i];
                this.game.addEntity(new ChairLeft(this.game, chairLeft.x, chairLeft.y));
            }

            //big table
            for (let i = 0; i < level.bigTables.length; i++) {
                let table = level.bigTables[i];
                this.game.addEntity(new BigTable(this.game, table.x, table.y));
            }

            //spy
            this.game.addEntity(this.spyCharacter);


            //plain wall
            for (let i = 0; i < level.plainWalls.length; i++) {
                let plainWall = level.plainWalls[i];
                this.game.addEntity(new PlainWall(this.game, plainWall.x, plainWall.y));
            }

            //side wall left
            for (let i = 0; i < level.sideWallLefts.length; i++) {
                let sideWallLeft = level.sideWallLefts[i];
                this.game.addEntity(new SideWallLeft(this.game, sideWallLeft.x, sideWallLeft.y));
            }

            //side wall right
            for (let i = 0; i < level.sideWallRights.length; i++) {
                let sideWallRight = level.sideWallRights[i];
                this.game.addEntity(new SideWallRight(this.game, sideWallRight.x, sideWallRight.y));
            }

            //wall bottom
            for (let i = 0; i < level.wallBottoms.length; i++) {
                let wallBottom = level.wallBottoms[i];
                this.game.addEntity(new WallBottom(this.game, wallBottom.x, wallBottom.y));
            }

            //big rug
            for (let i = 0; i < level.bigRugs.length; i++) {
                let rug = level.bigRugs[i];
                this.game.addEntity(new BigRug(this.game, rug.x, rug.y));
            }

            this.game.camera.paused = false;

        }

    };

    update() {

        let midpointX = PARAMS.CANVAS_WIDTH  / 2 - this.spyCharacter.width / 2;
        this.x = this.spyCharacter.x - midpointX;

        let midpointY = PARAMS.CANVAS_HEIGHT / 2 - this.spyCharacter.height / 2;
        this.y = this.spyCharacter.y - midpointY;

        //CHANGE THE CHECK TO WHATEVER ACTIVATES THE QUICK TIME EVENT
        //MIGHT JUST HAVE IT BE A SEPARATE "LEVEL"
        if(!this.game.entities.includes(this.darkness) && this.spyCharacter.x > 500) {
            this.game.addEntityToTop(this.darkness);
            this.game.addEntityToTop(new HUD(this.game));
            this.game.addEntityToTop(new IngameTimer(this.game));
        }
    };

    draw(ctx) {
        //
    };
}