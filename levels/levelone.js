class Level1Part1 {
    constructor(game, hud, darkness, level, spyCharacter) {
        this.game = game;
        this.hud = hud;
        this.darkness = darkness;
        this.level = level;
        this.spyCharacter = spyCharacter;

        this.setUpLevel();
    };

    setUpLevel() {
        // HUD
        this.game.addEntity(this.hud);
        this.hud.setText("Phase 1 - 1", "white");

        //big couch
        for (let i = 0; i < this.level.bigCouches.length; i++) {
            let couch = this.level.bigCouches[i];
            this.game.addEntity(new BigCouch(this.game, couch.x * PARAMS.BLOCKWIDTH, couch.y * PARAMS.BLOCKWIDTH));
        }

        //chair right
        for (let i = 0; i < this.level.chairRights.length; i++) {
            let chairRight = this.level.chairRights[i];
            this.game.addEntity(new ChairRight(this.game, chairRight.x * PARAMS.BLOCKWIDTH, chairRight.y * PARAMS.BLOCKWIDTH));
        }

        //chair left
        for (let i = 0; i < this.level.chairLefts.length; i++) {
            let chairLeft = this.level.chairLefts[i];
            this.game.addEntity(new ChairLeft(this.game, chairLeft.x * PARAMS.BLOCKWIDTH, chairLeft.y * PARAMS.BLOCKWIDTH));
        }

        //big table
        for (let i = 0; i < this.level.bigTables.length; i++) {
            let table = this.level.bigTables[i];
            this.game.addEntity(new BigTable(this.game, table.x * PARAMS.BLOCKWIDTH, table.y * PARAMS.BLOCKWIDTH));
        }

        for (let i = 0; i < this.level.beds.length; i++) {
            let bed = this.level.beds[i];
            this.game.addEntity(new Bed(this.game, bed.x * PARAMS.BLOCKWIDTH, bed.y * PARAMS.BLOCKWIDTH));
        }

        //spy
        // this.spyCharacter = new Spy(this.game, -100, 55);
        this.game.addEntity(this.spyCharacter);

        // guard
        // this.game.addEntity(new Guard(this.game, 88, 216, false));
        //
        // this.game.addEntity(new Guard(this.game, 295, 125, true));

        this.game.addEntity(new Guard(this.game, 388, 216, false));
        this.game.addEntity(new Guard(this.game, 550, 125, true));

        // billionaire
        this.game.addEntity(new Billionaire(this.game, 80 * PARAMS.BLOCKWIDTH, 192 * PARAMS.BLOCKWIDTH));

        // stephanie
        this.game.addEntity(new Stephanie(this.game, 100 * PARAMS.BLOCKWIDTH, 100 * PARAMS.BLOCKWIDTH));

        // richie
        this.game.addEntity(new Richie(this.game, 150 * PARAMS.BLOCKWIDTH, 100 * PARAMS.BLOCKWIDTH));

        //plain wall
        for (let i = 0; i < this.level.plainWalls.length; i++) {
            let plainWall = this.level.plainWalls[i];
            this.game.addEntity(new PlainWall(this.game, plainWall.x * PARAMS.BLOCKWIDTH, plainWall.y * PARAMS.BLOCKWIDTH, plainWall.count));
        }

        //side wall left
        for (let i = 0; i < this.level.sideWallLefts.length; i++) {
            let sideWallLeft = this.level.sideWallLefts[i];
            this.game.addEntity(new SideWallLeft(this.game, sideWallLeft.x * PARAMS.BLOCKWIDTH, sideWallLeft.y * PARAMS.BLOCKWIDTH, sideWallLeft.count));
        }

        //side wall right
        for (let i = 0; i < this.level.sideWallRights.length; i++) {
            let sideWallRight = this.level.sideWallRights[i];
            this.game.addEntity(new SideWallRight(this.game, sideWallRight.x * PARAMS.BLOCKWIDTH, sideWallRight.y * PARAMS.BLOCKWIDTH, sideWallRight.count));
        }

        //big rug
        for (let i = 0; i < this.level.bigRugs.length; i++) {
            let rug = this.level.bigRugs[i];
            this.game.addEntity(new BigRug(this.game, rug.x * PARAMS.BLOCKWIDTH, rug.y * PARAMS.BLOCKWIDTH));
        }

        this.game.camera.paused = false;
    };

    update() {
        // method not used but declaration is necessary for game engine
        // if(!this.game.entities.includes(this.darkness) && this.spyCharacter.x > 320 * PARAMS.BLOCKWIDTH) {
        //     this.game.addEntityToTop(this.darkness);
        //     this.hud.setTextColor("white");
        //     this.game.addEntityToTop(this.hud);
        //     this.game.addEntityToTop(new IngameTimer(this.game));
        // }
    };

    draw(ctx) {
        // method not used but declaration is necessary for game engine
    };
};

class Level1Part2 {
    constructor(game, hud, darkness, level, spyCharacter) {
        this.game = game;
        this.hud = hud;
        this.darkness = darkness;
        this.level = level;
        this.spyCharacter = spyCharacter;

        this.timerWasZero = false;

        this.setUpLevel();
    };

    setUpLevel() {

        this.ingameTimer = new IngameTimer(this.game);
        this.game.addEntity(this.ingameTimer);
        this.game.addEntity(this.darkness);

        // HUD
        this.game.addEntity(this.hud);
        this.hud.setText("Phase 1 - 2", "white");

        //big couch
        for (let i = 0; i < this.level.bigCouches.length; i++) {
            let couch = this.level.bigCouches[i];
            this.game.addEntity(new BigCouch(this.game, couch.x * PARAMS.BLOCKWIDTH, couch.y * PARAMS.BLOCKWIDTH));
        }

        //chair right
        for (let i = 0; i < this.level.chairRights.length; i++) {
            let chairRight = this.level.chairRights[i];
            this.game.addEntity(new ChairRight(this.game, chairRight.x * PARAMS.BLOCKWIDTH, chairRight.y * PARAMS.BLOCKWIDTH));
        }

        //chair left
        for (let i = 0; i < this.level.chairLefts.length; i++) {
            let chairLeft = this.level.chairLefts[i];
            this.game.addEntity(new ChairLeft(this.game, chairLeft.x * PARAMS.BLOCKWIDTH, chairLeft.y * PARAMS.BLOCKWIDTH));
        }

        //big table
        for (let i = 0; i < this.level.bigTables.length; i++) {
            let table = this.level.bigTables[i];
            this.game.addEntity(new BigTable(this.game, table.x * PARAMS.BLOCKWIDTH, table.y * PARAMS.BLOCKWIDTH));
        }

        for (let i = 0; i < this.level.beds.length; i++) {
            let bed = this.level.beds[i];
            this.game.addEntity(new Bed(this.game, bed.x * PARAMS.BLOCKWIDTH, bed.y * PARAMS.BLOCKWIDTH));
        }

        // guard
        // this.game.addEntity(new Guard(this.game, 88, 216, false));
        //
        // this.game.addEntity(new Guard(this.game, 295, 125, true));

        this.game.addEntity(new Guard(this.game, 388, 216, false));
        this.game.addEntity(new Guard(this.game, 550, 125, true));

        // stephanie
        this.game.addEntity(new Stephanie(this.game));

        // richie
        this.game.addEntity(new Richie(this.game));

        // billionaire
        this.game.addEntity(new Billionaire(this.game));

        //spy
        // this.spyCharacter = new Spy(this.game, -100, 55);
        this.game.addEntity(this.spyCharacter);

        //plain wall
        for (let i = 0; i < this.level.plainWalls.length; i++) {
            let plainWall = this.level.plainWalls[i];
            this.game.addEntity(new PlainWall(this.game, plainWall.x * PARAMS.BLOCKWIDTH, plainWall.y * PARAMS.BLOCKWIDTH, plainWall.count));
        }

        //side wall left
        for (let i = 0; i < this.level.sideWallLefts.length; i++) {
            let sideWallLeft = this.level.sideWallLefts[i];
            this.game.addEntity(new SideWallLeft(this.game, sideWallLeft.x * PARAMS.BLOCKWIDTH, sideWallLeft.y * PARAMS.BLOCKWIDTH, sideWallLeft.count));
        }

        //side wall right
        for (let i = 0; i < this.level.sideWallRights.length; i++) {
            let sideWallRight = this.level.sideWallRights[i];
            this.game.addEntity(new SideWallRight(this.game, sideWallRight.x * PARAMS.BLOCKWIDTH, sideWallRight.y * PARAMS.BLOCKWIDTH, sideWallRight.count));
        }

        //big rug
        for (let i = 0; i < this.level.bigRugs.length; i++) {
            let rug = this.level.bigRugs[i];
            this.game.addEntity(new BigRug(this.game, rug.x * PARAMS.BLOCKWIDTH, rug.y * PARAMS.BLOCKWIDTH));
        }

        this.game.camera.paused = false;
    };

    update() {
        // method not used but declaration is necessary for game engine

        if (this.ingameTimer.timeIsZero === true && this.timerWasZero === false) {
            this.ingameTimer.removeFromWorld = true;
            this.timerWasZero = true;
            this.game.addEntity(new Guard(this.game, (this.spyCharacter.x - 400) / PARAMS.BLOCKWIDTH, this.spyCharacter.y / PARAMS.BLOCKWIDTH, false));

        }
    };

    draw(ctx) {
        // method not used but declaration is necessary for game engine
    };
};