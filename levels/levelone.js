class Level1Part1 {
    constructor(game, hud, darkness, level, spyCharacter) {
        this.game = game;
        this.hud = hud;
        this.level = level;
        this.spyCharacter = spyCharacter;

        this.setUpLevel();
    };

    setUpLevel() {
        // casefile chatbox
        this.game.addEntity(new CasefileChatbox(this.game));

        // HUD
        this.game.addEntity(this.hud);
        this.hud.setText("Phase 1 - 1");
        this.hud.setTextColor("black");

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

        //long Wooden Patterned Tables
        for (let i = 0; i < this.level.longWoodenPatternedTables.length; i++) {
            let table = this.level.longWoodenPatternedTables[i];
            this.game.addEntity(new LongWoodenPatternedTable(this.game, table.x * PARAMS.BLOCKWIDTH, table.y * PARAMS.BLOCKWIDTH));
        }

        for (let i = 0; i < this.level.beds.length; i++) {
            let bed = this.level.beds[i];
            this.game.addEntity(new Bed(this.game, bed.x * PARAMS.BLOCKWIDTH, bed.y * PARAMS.BLOCKWIDTH));
        }

        // bed with win condition
        this.cama = new Bed(this.game, 500 * PARAMS.BLOCKWIDTH, 220 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(this.cama);
        let camaX = this.cama.x;
        let camaY = this.cama.y;
        let camaW = this.cama.dWidth;
        let camaH = this.cama.dHeight;
        this.cama.sneakerBB = new BoundingBox(camaX - camaW / 2, camaY - camaH / 2, camaW * 2, camaH * 2);

        //spy
        this.game.addEntity(this.spyCharacter);

        // guards
        // this.game.addEntity(new Guard(this.game, 388, 216, false));
        // this.game.addEntity(new Guard(this.game, 550, 125, true));

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
    };

    draw(ctx) {
        // method not used but declaration is necessary for game engine
    };
};

//-------------------------------------------------------------------------

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
        // Timer
        this.ingameTimer = new IngameTimer(this.game);
        this.game.addEntity(this.ingameTimer);

        // HUD
        this.game.addEntity(this.hud);
        this.hud.setText("Phase 1 - 2");
        this.hud.setTextColor("white");

        // darkness
        this.game.addEntity(this.darkness);

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

        //long Wooden Patterned Tables
        for (let i = 0; i < this.level.longWoodenPatternedTables.length; i++) {
            let table = this.level.longWoodenPatternedTables[i];
            this.game.addEntity(new LongWoodenPatternedTable(this.game, table.x * PARAMS.BLOCKWIDTH, table.y * PARAMS.BLOCKWIDTH));
        }

        for (let i = 0; i < this.level.beds.length; i++) {
            let bed = this.level.beds[i];
            this.game.addEntity(new Bed(this.game, bed.x * PARAMS.BLOCKWIDTH, bed.y * PARAMS.BLOCKWIDTH));
        }

        // bed with win condition
        this.cama = new Bed(this.game, 500 * PARAMS.BLOCKWIDTH, 220 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(this.cama);
        let camaX = this.cama.x;
        let camaY = this.cama.y;
        let camaW = this.cama.dWidth;
        let camaH = this.cama.dHeight;
        this.cama.winBB = new BoundingBox(camaX - camaW / 2, camaY - camaH / 2, camaW * 2, camaH * 2);

        // guards
        this.game.addEntity(new Guard(this.game, 388, 216, false));
        this.game.addEntity(new Guard(this.game, 550, 125, true));

        // stephanie
        this.game.addEntity(new Stephanie(this.game));

        // richie
        this.game.addEntity(new Richie(this.game));

        // billionaire
        this.game.addEntity(new Billionaire(this.game));

        //spy
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