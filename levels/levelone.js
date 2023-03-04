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
        // game rules
        //this.game.addEntityToTop(new HowToPlay(this.game));

        // casefile chatbox
        let caseFile = new CasefileChatbox(this.game);
        caseFile.firstTime = true;
        this.game.addEntityToTop(caseFile);


        // alfred help chatboxes
        let text = "Hi, I'm Alfred.                                                                " +
            "If you need in-game help, click my icon in the upper right corner.                      " +
            "                                Now, let's review gameplay.";
        let sheet = ASSET_MANAGER.getAsset("./sprites/alfred.png");
        let chatbox = new Chatbox(this.game, text, 0, sheet, true);
        this.game.addEntity(chatbox);
        chatbox.setVisible = true;

        text = "To play, use the arrow or 'wasd' keys to move, 'shift' to run, and 'e' to interact." +
            "                                                                  " +
            "Enjoy your stay at the mansion.";
        chatbox = new Chatbox(this.game, text, 0, sheet, true);
        this.game.addEntity(chatbox);
        chatbox.setVisible = true;

        // HUD
        this.game.addEntity(this.hud);
        this.hud.setText("Phase 1");
        this.hud.setTextColor("black");

        //spy
        this.game.addEntity(this.spyCharacter);

        // guards
        //entrance left side
        this.game.addEntity(new Guard(this.game, 11 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 0));
        this.game.addEntity(new Guard(this.game, 73 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 0));
        //entrance left side
        this.game.addEntity(new Guard(this.game, 165 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 0));
        this.game.addEntity(new Guard(this.game, 229 * PARAMS.BLOCKWIDTH, 10 * PARAMS.BLOCKWIDTH, 0));

        //NPC SET UP

        // billionaire
        this.game.addEntity(new Billionaire(this.game, 125 * PARAMS.BLOCKWIDTH, -171 * PARAMS.BLOCKWIDTH));

        // stephanie
        this.game.addEntity(new Stephanie(this.game, 75 * PARAMS.BLOCKWIDTH, -100 * PARAMS.BLOCKWIDTH));

        // richie
        this.game.addEntity(new Richie(this.game, 31 * PARAMS.BLOCKWIDTH, -150 * PARAMS.BLOCKWIDTH));

        // kitchen worker
        this.game.addEntity(new KitchenWorker(this.game, 310 * PARAMS.BLOCKWIDTH, -425 * PARAMS.BLOCKWIDTH));

        //gardener
        this.game.addEntity(new Gardener(this.game, -170 * PARAMS.BLOCKWIDTH, 80 * PARAMS.BLOCKWIDTH));

        //car mechanic
        this.game.addEntity(new CarMechanic(this.game, -145 * PARAMS.BLOCKWIDTH, -380 * PARAMS.BLOCKWIDTH));


        //TESTING HEART EMOTE
        //this.game.addEntity(new HeartEmote(this.game, 125 * PARAMS.BLOCKWIDTH, -171 * PARAMS.BLOCKWIDTH))

    };



    update() {
        //Checks for Skip Intro and Skip Phase 1 checkboxes
        checkForSkippedParts(this.game);
    };

    draw(ctx) {
        // method not used but declaration is necessary for game engine
    };
}


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
        this.hud.setText("Phase 2");
        this.hud.setTextColor("white");

        // darkness
        this.game.addEntity(this.darkness);

        //spy
        this.game.addEntity(this.spyCharacter);

        // guards
        // 1 = left-right, 2 = up-down

        //entrance
        this.game.addEntity(new Guard(this.game, 229 * PARAMS.BLOCKWIDTH, 70 * PARAMS.BLOCKWIDTH, 2));
        this.game.addEntity(new Guard(this.game, 70 * PARAMS.BLOCKWIDTH, 200 * PARAMS.BLOCKWIDTH, 1));

        //lounge
        this.game.addEntity(new Guard(this.game, 65 * PARAMS.BLOCKWIDTH, -33 * PARAMS.BLOCKWIDTH, 1));
        this.game.addEntity(new Guard(this.game, 130 * PARAMS.BLOCKWIDTH, -180 * PARAMS.BLOCKWIDTH, 2));
        this.game.addEntity(new Guard(this.game, 10 * PARAMS.BLOCKWIDTH, -180 * PARAMS.BLOCKWIDTH, 2));
        this.game.addEntity(new Guard(this.game, 230 * PARAMS.BLOCKWIDTH, -180 * PARAMS.BLOCKWIDTH, 2));

        //green house
        this.game.addEntity(new Guard(this.game, -23 * PARAMS.BLOCKWIDTH, 70 * PARAMS.BLOCKWIDTH, 2));

        //patio
        this.game.addEntity(new Guard(this.game, -190 * PARAMS.BLOCKWIDTH, -32 * PARAMS.BLOCKWIDTH, 1));
        this.game.addEntity(new Guard(this.game, -190 * PARAMS.BLOCKWIDTH, -218 * PARAMS.BLOCKWIDTH, 1));

        //garage
        this.game.addEntity(new Guard(this.game, -20 * PARAMS.BLOCKWIDTH, -410 * PARAMS.BLOCKWIDTH, 2));

        //office
        this.game.addEntity(new Guard(this.game, 230 * PARAMS.BLOCKWIDTH, -410 * PARAMS.BLOCKWIDTH, 2));

        //kitchen
        this.game.addEntity(new Guard(this.game, 310 * PARAMS.BLOCKWIDTH, -275 * PARAMS.BLOCKWIDTH, 1));

        //bedroom
        this.game.addEntity(new Guard(this.game, 315 * PARAMS.BLOCKWIDTH, 40 * PARAMS.BLOCKWIDTH, 1));


    };

    update() {
        // method not used but declaration is necessary for game engine

        if (this.ingameTimer.timeIsZero === true && this.timerWasZero === false) {
            this.ingameTimer.removeFromWorld = true;
            this.timerWasZero = true;
            this.game.addEntity(new Guard(this.game, this.spyCharacter.x - 300, this.spyCharacter.y, 1));

        }
    };

    draw(ctx) {
        // method not used but declaration is necessary for game engine
    };
}


// set up for level one furniture so we dont have to duplicate it again
function setUpLevelOneFurniture(game, level) {
    this.game = game;
    this.level = level;


    // ------------------------ OFFICE FURNITURE -------------------

    //wideBlueMonitor
    for (let i = 0; i < this.level.wideBlueMonitor.length; i++) {
        let wideBlueMonitor = this.level.wideBlueMonitor[i];
        this.game.addEntity(new WideBlueMonitor(this.game, wideBlueMonitor.x * PARAMS.BLOCKWIDTH, wideBlueMonitor.y * PARAMS.BLOCKWIDTH));
    }

    //gamerPC
    for (let i = 0; i < this.level.gamerPC.length; i++) {
        let gamerPC = this.level.gamerPC[i];
        this.game.addEntity(new GamerPC(this.game, gamerPC.x * PARAMS.BLOCKWIDTH, gamerPC.y * PARAMS.BLOCKWIDTH));
    }

    //blackHandleChairUp
    for (let i = 0; i < this.level.blackHandleChairUp.length; i++) {
        let blackHandleChairUp = this.level.blackHandleChairUp[i];
        this.game.addEntity(new BlackHandleChairUp(this.game, blackHandleChairUp.x * PARAMS.BLOCKWIDTH, blackHandleChairUp.y * PARAMS.BLOCKWIDTH));
    }

    //officeDesk
    for (let i = 0; i < this.level.officeDesk.length; i++) {
        let officeDesk = this.level.officeDesk[i];
        this.game.addEntity(new OfficeDesk(this.game, officeDesk.x * PARAMS.BLOCKWIDTH, officeDesk.y * PARAMS.BLOCKWIDTH));
    }

    //whiteBoard
    for (let i = 0; i < this.level.whiteBoard.length; i++) {
        let whiteBoard = this.level.whiteBoard[i];
        this.game.addEntity(new WhiteBoard(this.game, whiteBoard.x * PARAMS.BLOCKWIDTH, whiteBoard.y * PARAMS.BLOCKWIDTH));
    }

    //redStool
    for (let i = 0; i < this.level.redStool.length; i++) {
        let redStool = this.level.redStool[i];
        this.game.addEntity(new RedStool(this.game, redStool.x * PARAMS.BLOCKWIDTH, redStool.y * PARAMS.BLOCKWIDTH));
    }


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

    // ------------------------ ENTRANCE FURNITURE -------------------

    //bigCubePainting
    for (let i = 0; i < this.level.bigCubePainting.length; i++) {
        let bigCubePainting = this.level.bigCubePainting[i];
        this.game.addEntity(new BigCubePainting(this.game, bigCubePainting.x * PARAMS.BLOCKWIDTH, bigCubePainting.y * PARAMS.BLOCKWIDTH));
    }

    //starryNight
    for (let i = 0; i < this.level.starryNight.length; i++) {
        let starryNight = this.level.starryNight[i];
        this.game.addEntity(new StarryNight(this.game, starryNight.x * PARAMS.BLOCKWIDTH, starryNight.y * PARAMS.BLOCKWIDTH));
    }

    //billionaireStatue
    for (let i = 0; i < this.level.billionaireStatue.length; i++) {
        let billionaireStatue = this.level.billionaireStatue[i];
        this.game.addEntity(new BillionaireStatue(this.game, billionaireStatue.x * PARAMS.BLOCKWIDTH, billionaireStatue.y * PARAMS.BLOCKWIDTH));
    }

    //door
    for (let i = 0; i < this.level.door.length; i++) {
        let door = this.level.door[i];
        this.game.addEntity(new Door(this.game, door.x * PARAMS.BLOCKWIDTH, door.y * PARAMS.BLOCKWIDTH));
    }

    //goldenShoe
    for (let i = 0; i < this.level.goldenShoe.length; i++) {
        let goldenShoe = this.level.goldenShoe[i];
        this.game.addEntity(new GoldenShoe(this.game, goldenShoe.x * PARAMS.BLOCKWIDTH, goldenShoe.y * PARAMS.BLOCKWIDTH));
    }

    //rainbowShoe
    for (let i = 0; i < this.level.rainbowShoe.length; i++) {
        let rainbowShoe = this.level.rainbowShoe[i];
        this.game.addEntity(new RainbowShoe(this.game, rainbowShoe.x * PARAMS.BLOCKWIDTH, rainbowShoe.y * PARAMS.BLOCKWIDTH));
    }

    //tanShoe
    for (let i = 0; i < this.level.tanShoe.length; i++) {
        let tanShoe = this.level.tanShoe[i];
        this.game.addEntity(new TanShoe(this.game, tanShoe.x * PARAMS.BLOCKWIDTH, tanShoe.y * PARAMS.BLOCKWIDTH));
    }

    //blackShoe
    for (let i = 0; i < this.level.blackShoe.length; i++) {
        let blackShoe = this.level.blackShoe[i];
        this.game.addEntity(new BlackShoe(this.game, blackShoe.x * PARAMS.BLOCKWIDTH, blackShoe.y * PARAMS.BLOCKWIDTH));
    }

    //greyShoe
    for (let i = 0; i < this.level.greyShoe.length; i++) {
        let greyShoe = this.level.greyShoe[i];
        this.game.addEntity(new GreyShoe(this.game, greyShoe.x * PARAMS.BLOCKWIDTH, greyShoe.y * PARAMS.BLOCKWIDTH));
    }

    //whiteShoe
    for (let i = 0; i < this.level.whiteShoe.length; i++) {
        let whiteShoe = this.level.whiteShoe[i];
        this.game.addEntity(new WhiteShoe(this.game, whiteShoe.x * PARAMS.BLOCKWIDTH, whiteShoe.y * PARAMS.BLOCKWIDTH));
    }

    //longTanTable
    for (let i = 0; i < this.level.longTanTable.length; i++) {
        let longTanTable = this.level.longTanTable[i];
        this.game.addEntity(new LongTanTable(this.game, longTanTable.x * PARAMS.BLOCKWIDTH, longTanTable.y * PARAMS.BLOCKWIDTH));
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

    // -----------------------------------------------------------------

    // DRAW HERE TO DRAW ON TOP OF WALLS (useful for pictures and doors)

    // -----------------------------------------------------------------

    // ------------------------ PATIO FURNITURE -------------------

    for (let i = 0; i < this.level.trellis.length; i++) {
        let trellis = this.level.trellis[i];
        this.game.addEntity(new Trellis(this.game, trellis.x * PARAMS.BLOCKWIDTH, trellis.y * PARAMS.BLOCKWIDTH, trellis.count));
    }

    // ------------------------------------------------------------

    //
    // DRAW WALLS
    //

    // ------------------------------------------------------------



    // for (let i = 0; i < this.level.beds.length; i++) {
    //     let bed = this.level.beds[i];
    //     this.game.addEntity(new Bed(this.game, bed.x * PARAMS.BLOCKWIDTH, bed.y * PARAMS.BLOCKWIDTH));
    // }

    // bed with win condition
    // this.cama = new Bed(this.game, 500 * PARAMS.BLOCKWIDTH, 220 * PARAMS.BLOCKWIDTH);
    // this.game.addEntity(this.cama);
    // let camaX = this.cama.x;
    // let camaY = this.cama.y;
    // let camaW = this.cama.dWidth;
    // let camaH = this.cama.dHeight;
    // this.cama.sneakerBB = new BoundingBox(camaX - camaW / 2, camaY - camaH / 2, camaW * 2, camaH * 2);

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

    // ------------------------ PATIO FURNITURE -------------------

    for (let i = 0; i < this.level.plantOne.length; i++) {
        let plantOne = this.level.plantOne[i];
        this.game.addEntity(new RowOnePlant(this.game, plantOne.x * PARAMS.BLOCKWIDTH, plantOne.y * PARAMS.BLOCKWIDTH));
    }

    for (let i = 0; i < this.level.patioBench.length; i++) {
        let patioBench = this.level.patioBench[i];
        this.game.addEntity(new PatioBench(this.game, patioBench.x * PARAMS.BLOCKWIDTH, patioBench.y * PARAMS.BLOCKWIDTH));
    }

    for (let i = 0; i < this.level.patioChairLeft.length; i++) {
        let patioChairLeft = this.level.patioChairLeft[i];
        this.game.addEntity(new GreenPatioChairRight(this.game, patioChairLeft.x * PARAMS.BLOCKWIDTH, patioChairLeft.y * PARAMS.BLOCKWIDTH));
    }

    for (let i = 0; i < this.level.patioFloor.length; i++) {
        let patioFloor = this.level.patioFloor[i];
        this.game.addEntity(new PatioFloor(this.game, patioFloor.x * PARAMS.BLOCKWIDTH, patioFloor.y * PARAMS.BLOCKWIDTH, patioFloor.count));
    }

    // ------------------------------------------------------------

    this.game.camera.paused = false;
}