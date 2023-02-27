class Level1Part1 {
    constructor(game, hud, darkness, level, spyCharacter) {
        this.game = game;
        this.hud = hud;
        this.level = level;
        this.spyCharacter = spyCharacter;

        this.setUpLevel();
        setUpLevelOneFurniture(this.game, this.level);
    };

    setUpLevel() {
        // casefile chatbox
        this.game.addEntity(new CasefileChatbox(this.game));

        // HUD
        this.game.addEntity(this.hud);
        this.hud.setText("Phase 1 - 1");
        this.hud.setTextColor("black");

        //spy
        this.game.addEntity(this.spyCharacter);

        //MAYBE ADD STATIONARY GUARDS FOR PART 1?
        // guards
        // this.game.addEntity(new Guard(this.game, 388, 216, false));
        // this.game.addEntity(new Guard(this.game, 550, 125, true));

        // billionaire
        this.game.addEntity(new Billionaire(this.game, 139 * PARAMS.BLOCKWIDTH, -171 * PARAMS.BLOCKWIDTH));

        // stephanie
        this.game.addEntity(new Stephanie(this.game, 75 * PARAMS.BLOCKWIDTH, -75 * PARAMS.BLOCKWIDTH));

        // richie
        this.game.addEntity(new Richie(this.game, 84 * PARAMS.BLOCKWIDTH, -178 * PARAMS.BLOCKWIDTH));

    };



    update() {
        // method not used but declaration is necessary for game engine
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
        setUpLevelOneFurniture(this.game, this.level);
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

        // guards
        this.game.addEntity(new Guard(this.game, 388, 216, false));
        this.game.addEntity(new Guard(this.game, 550, 125, true));

        // // stephanie
        // this.game.addEntity(new Stephanie(this.game));
        //
        // // richie
        // this.game.addEntity(new Richie(this.game));
        //
        // // billionaire
        // this.game.addEntity(new Billionaire(this.game));

        //spy
        this.game.addEntity(this.spyCharacter);
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


// set up for level one furniture so we dont have to duplicate it again
function setUpLevelOneFurniture(game, level) {
    this.game = game;
    this.level = level;

    // ------------------------ KITCHEN FURNITURE -------------------

    //microwave
    for (let i = 0; i < this.level.microwave.length; i++) {
        let microwave = this.level.microwave[i];
        this.game.addEntity(new Microwave(this.game, microwave.x * PARAMS.BLOCKWIDTH, microwave.y * PARAMS.BLOCKWIDTH));
    }

    //kitchenCabinet
    for (let i = 0; i < this.level.kitchenCabinet.length; i++) {
        let kitchenCabinet = this.level.kitchenCabinet[i];
        this.game.addEntity(new KitchenCabinet(this.game, kitchenCabinet.x * PARAMS.BLOCKWIDTH, kitchenCabinet.y * PARAMS.BLOCKWIDTH));
    }

    //kitchenSet
    for (let i = 0; i < this.level.kitchenSet.length; i++) {
        let kitchenSet = this.level.kitchenSet[i];
        this.game.addEntity(new KitchenSet(this.game, kitchenSet.x * PARAMS.BLOCKWIDTH, kitchenSet.y * PARAMS.BLOCKWIDTH));
    }

    //fridge
    for (let i = 0; i < this.level.fridge.length; i++) {
        let fridge = this.level.fridge[i];
        this.game.addEntity(new Fridge(this.game, fridge.x * PARAMS.BLOCKWIDTH, fridge.y * PARAMS.BLOCKWIDTH));
    }

    //kitchenCounterLeft
    for (let i = 0; i < this.level.kitchenCounterLeft.length; i++) {
        let kitchenCounterLeft = this.level.kitchenCounterLeft[i];
        this.game.addEntity(new KitchenCounterLeft(this.game, kitchenCounterLeft.x * PARAMS.BLOCKWIDTH, kitchenCounterLeft.y * PARAMS.BLOCKWIDTH));
    }

    //kitchenCounterRight
    for (let i = 0; i < this.level.kitchenCounterRight.length; i++) {
        let kitchenCounterRight = this.level.kitchenCounterRight[i];
        this.game.addEntity(new KitchenCounterRight(this.game, kitchenCounterRight.x * PARAMS.BLOCKWIDTH, kitchenCounterRight.y * PARAMS.BLOCKWIDTH));
    }

    //kitchenCounterMiddle
    for (let i = 0; i < this.level.kitchenCounterMiddle.length; i++) {
        let kitchenCounterMiddle = this.level.kitchenCounterMiddle[i];
        this.game.addEntity(new KitchenCounterMiddle(this.game, kitchenCounterMiddle.x * PARAMS.BLOCKWIDTH, kitchenCounterMiddle.y * PARAMS.BLOCKWIDTH));
    }

    //tanChairRight
    for (let i = 0; i < this.level.tanChairRight.length; i++) {
        let tanChairRight = this.level.tanChairRight[i];
        this.game.addEntity(new TanChairRight(this.game, tanChairRight.x * PARAMS.BLOCKWIDTH, tanChairRight.y * PARAMS.BLOCKWIDTH));
    }

    //tanChairUp
    for (let i = 0; i < this.level.tanChairUp.length; i++) {
        let tanChairUp = this.level.tanChairUp[i];
        this.game.addEntity(new TanChairUp(this.game, tanChairUp.x * PARAMS.BLOCKWIDTH, tanChairUp.y * PARAMS.BLOCKWIDTH));
    }

    //tanChairDown
    for (let i = 0; i < this.level.tanChairDown.length; i++) {
        let tanChairDown = this.level.tanChairDown[i];
        this.game.addEntity(new TanChairDown(this.game, tanChairDown.x * PARAMS.BLOCKWIDTH, tanChairDown.y * PARAMS.BLOCKWIDTH));
    }

    //long Wooden Patterned Tables
    for (let i = 0; i < this.level.longWoodenPatternedTables.length; i++) {
        let table = this.level.longWoodenPatternedTables[i];
        this.game.addEntity(new LongWoodenPatternedTable(this.game, table.x * PARAMS.BLOCKWIDTH, table.y * PARAMS.BLOCKWIDTH));
    }


    // ------------------------ LOUNGE FURNITURE -------------------

    //piano
    for (let i = 0; i < this.level.piano.length; i++) {
        let piano = this.level.piano[i];
        this.game.addEntity(new Piano(this.game, piano.x * PARAMS.BLOCKWIDTH, piano.y * PARAMS.BLOCKWIDTH));
    }

    //tanSofa
    for (let i = 0; i < this.level.tanSofa.length; i++) {
        let tanSofa = this.level.tanSofa[i];
        this.game.addEntity(new TanSofa(this.game, tanSofa.x * PARAMS.BLOCKWIDTH, tanSofa.y * PARAMS.BLOCKWIDTH));
    }

    //orangePatternedTable
    for (let i = 0; i < this.level.orangePatternedTable.length; i++) {
        let orangePatternedTable = this.level.orangePatternedTable[i];
        this.game.addEntity(new OrangePatternedTable(this.game, orangePatternedTable.x * PARAMS.BLOCKWIDTH, orangePatternedTable.y * PARAMS.BLOCKWIDTH));
    }

    //pacManGame
    for (let i = 0; i < this.level.pacManGame.length; i++) {
        let pacManGame = this.level.pacManGame[i];
        this.game.addEntity(new PacManGame(this.game, pacManGame.x * PARAMS.BLOCKWIDTH, pacManGame.y * PARAMS.BLOCKWIDTH));
    }


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


    // ------------------------ BATHROOM FURNITURE -------------------

    //shower
    for (let i = 0; i < this.level.shower.length; i++) {
        let shower = this.level.shower[i];
        this.game.addEntity(new Shower(this.game, shower.x * PARAMS.BLOCKWIDTH, shower.y * PARAMS.BLOCKWIDTH));
    }

    //toilet
    for (let i = 0; i < this.level.toilet.length; i++) {
        let toilet = this.level.toilet[i];
        this.game.addEntity(new Toilet(this.game, toilet.x * PARAMS.BLOCKWIDTH, toilet.y * PARAMS.BLOCKWIDTH));
    }

    //bathtub
    for (let i = 0; i < this.level.bathtub.length; i++) {
        let bathtub = this.level.bathtub[i];
        this.game.addEntity(new Bathtub(this.game, bathtub.x * PARAMS.BLOCKWIDTH, bathtub.y * PARAMS.BLOCKWIDTH));
    }

    //bathroomSink
    for (let i = 0; i < this.level.bathroomSink.length; i++) {
        let bathroomSink = this.level.bathroomSink[i];
        this.game.addEntity(new BathroomSink(this.game, bathroomSink.x * PARAMS.BLOCKWIDTH, bathroomSink.y * PARAMS.BLOCKWIDTH));
    }

    //bathroomMirror
    for (let i = 0; i < this.level.bathroomMirror.length; i++) {
        let bathroomMirror = this.level.bathroomMirror[i];
        this.game.addEntity(new BathroomMirror(this.game, bathroomMirror.x * PARAMS.BLOCKWIDTH, bathroomMirror.y * PARAMS.BLOCKWIDTH));
    }

    //trashcan
    for (let i = 0; i < this.level.trashcan.length; i++) {
        let trashcan = this.level.trashcan[i];
        this.game.addEntity(new Trashcan(this.game, trashcan.x * PARAMS.BLOCKWIDTH, trashcan.y * PARAMS.BLOCKWIDTH));
    }


    // ------------------------ BEDROOM FURNITURE -------------------

    //bigWhiteBed
    for (let i = 0; i < this.level.bigWhiteBed.length; i++) {
        let bigWhiteBed = this.level.bigWhiteBed[i];
        this.game.addEntity(new BigWhiteBed(this.game, bigWhiteBed.x * PARAMS.BLOCKWIDTH, bigWhiteBed.y * PARAMS.BLOCKWIDTH));
    }

    //bedroomMirror
    for (let i = 0; i < this.level.bedroomMirror.length; i++) {
        let bedroomMirror = this.level.bedroomMirror[i];
        this.game.addEntity(new BedroomMirror(this.game, bedroomMirror.x * PARAMS.BLOCKWIDTH, bedroomMirror.y * PARAMS.BLOCKWIDTH));
    }

    //wardrobe
    for (let i = 0; i < this.level.wardrobes.length; i++) {
        let wardrobe = this.level.wardrobes[i];
        this.game.addEntity(new Wardrobe(this.game, wardrobe.x * PARAMS.BLOCKWIDTH, wardrobe.y * PARAMS.BLOCKWIDTH));
    }

    //lamp
    for (let i = 0; i < this.level.lamp.length; i++) {
        let lamp = this.level.lamp[i];
        this.game.addEntity(new Lamp(this.game, lamp.x * PARAMS.BLOCKWIDTH, lamp.y * PARAMS.BLOCKWIDTH));
    }

    //bookshelves
    for (let i = 0; i < this.level.bookshelves.length; i++) {
        let bookshelves = this.level.bookshelves[i];
        this.game.addEntity(new Bookshelf(this.game, bookshelves.x * PARAMS.BLOCKWIDTH, bookshelves.y * PARAMS.BLOCKWIDTH));
    }

    //smallBlueTable
    for (let i = 0; i < this.level.smallBlueTable.length; i++) {
        let smallBlueTable = this.level.smallBlueTable[i];
        this.game.addEntity(new SmallBlueTable(this.game, smallBlueTable.x * PARAMS.BLOCKWIDTH, smallBlueTable.y * PARAMS.BLOCKWIDTH));
    }




    // for (let i = 0; i < this.level.beds.length; i++) {
    //     let bed = this.level.beds[i];
    //     this.game.addEntity(new Bed(this.game, bed.x * PARAMS.BLOCKWIDTH, bed.y * PARAMS.BLOCKWIDTH));
    // }

    // bed with win condition
    this.cama = new Bed(this.game, 500 * PARAMS.BLOCKWIDTH, 220 * PARAMS.BLOCKWIDTH);
    this.game.addEntity(this.cama);
    let camaX = this.cama.x;
    let camaY = this.cama.y;
    let camaW = this.cama.dWidth;
    let camaH = this.cama.dHeight;
    this.cama.sneakerBB = new BoundingBox(camaX - camaW / 2, camaY - camaH / 2, camaW * 2, camaH * 2);

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
}