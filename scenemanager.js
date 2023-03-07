class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        // items bag tracking
        this.itemsBag = null;

        // declare these here for game camera tracking
        this.hud = new HUD(this.game, this.itemsBag);
        this.spyCharacter = new Spy(this.game, 124  * PARAMS.BLOCKWIDTH, -127  * PARAMS.BLOCKWIDTH);
        this.darkness = new Darkness(this.game, 0, 0);

        this.currentLevelFurniture = levelOneFurniture;

        this.loadLevel(titleScreen);
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level) {
        this.currentLevel = level;
        this.game.currLvl = level;


        // lose screen
        if (this.currentLevel === loseScreen) {
            this.clearEntities();
            this.game.addEntity(new LoseScreen(this.game));
        }

        // win screen
        if (this.currentLevel === winScreen) {
            this.clearEntities();
            this.game.addEntity(new WinScreen(this.game));
        }

        // title screen
        if (this.currentLevel === titleScreen) {
            this.clearEntities();
            this.game.addEntity(new TitleScreen(this.game));
        }

        // intro cutscene
        if (this.currentLevel === introCutscene) {
            this.clearEntities();
            this.game.addEntity(new IntroCutscene(this.game));
        }

        // level one part 1
        if (this.currentLevel === levelOne1) {

            this.clearEntities();

            this.hud = new HUD(this.game, this.itemsBag);
            this.spyCharacter = new Spy(this.game, 124  * PARAMS.BLOCKWIDTH, -127  * PARAMS.BLOCKWIDTH);
            this.darkness = new Darkness(this.game, this.spyCharacter.x, this.spyCharacter.y);

            //SETTING UP CURRENT FURNITURE IN THE MANSION
            this.currentLevelFurniture = levelOneFurniture;
            this.game.addEntity(new Level1Part1(this.game, this.hud, this.darkness, this.currentLevelFurniture, this.spyCharacter));
        }

        // level one cutscene
        if (this.currentLevel === levelOneCutscene) {
            this.clearEntities();
            this.game.addEntity(new LevelOneCutscene(this.game));
        }

        // level one, part 2
        if (this.currentLevel === levelOne2) {
            this.clearEntities();
            //this.itemsBag = getItemsBag();
            this.hud = new HUD(this.game, this.itemsBag);
            this.spyCharacter = new Spy(this.game, 25 * PARAMS.BLOCKWIDTH, 62 * PARAMS.BLOCKWIDTH);
            this.darkness = new Darkness(this.game, this.spyCharacter.x, this.spyCharacter.y);

            //SETTING UP CURRENT FURNITURE IN THE MANSION
            this.currentLevelFurniture = levelOneFurniture;
            this.game.addEntity(new Level1Part2(this.game, this.hud, this.darkness, this.currentLevelFurniture, this.spyCharacter));
        }

        // ending part 1 cutscene
        if (this.currentLevel === endingPart1Cutscene) {
            this.clearEntities();
            this.game.addEntity(new EndingPart1Cutscene(this.game));
        }

        // ending part 2 cutscene
        if (this.currentLevel === endingPart2Cutscene) {
            this.clearEntities();
            this.game.addEntity(new EndingPart2Cutscene(this.game));
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