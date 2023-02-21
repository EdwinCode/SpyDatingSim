class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        // declare these here for game camera tracking
        this.hud = new HUD(this.game);
        this.spyCharacter = new Spy(this.game, -100, 55);
        this.darkness = new Darkness(this.game, 0, 0);

        // items bag tracking
        this.itemsBag = new Itemsbag(this.game);

        this.loadLevel(titleScreen);
    };

    saveItemsBagConditions(itemsBag) {
        this.itemsBag = itemsBag;
    }

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level) {
        this.currentLevel = level;
        this.game.currLvl = level;
        this.clearEntities();

        // lose screen
        if (this.currentLevel === loseScreen) {
            this.game.addEntity(new LoseScreen(this.game));
        }

        // win screen
        if (this.currentLevel === winScreen) {
            this.game.addEntity(new WinScreen(this.game));
        }

        // title screen
        if (this.currentLevel === titleScreen) {
            this.game.addEntity(new TitleScreen(this.game));
        }

        // intro cutscene
        if (this.currentLevel === introCutscene) {
            this.game.addEntity(new IntroCutscene(this.game));
        }

        // level one part 1
        if (this.currentLevel === levelOne1) {
            this.hud = new HUD(this.game);
            this.spyCharacter = new Spy(this.game, 25 * PARAMS.BLOCKWIDTH, 62 * PARAMS.BLOCKWIDTH);
            this.darkness = new Darkness(this.game, this.spyCharacter.x, this.spyCharacter.y);
            this.game.addEntity(new Level1Part1(this.game, this.hud, this.darkness, this.currentLevel, this.spyCharacter));
        }

        // level one cutscene
        if (this.currentLevel === levelOneCutscene) {
            this.game.addEntity(new LevelOneCutscene(this.game));
        }

        // level one, part 2
        if (this.currentLevel === levelOne2) {
            this.hud = new HUD(this.game);
            this.spyCharacter = new Spy(this.game, 25 * PARAMS.BLOCKWIDTH, 62 * PARAMS.BLOCKWIDTH);
            this.darkness = new Darkness(this.game, this.spyCharacter.x, this.spyCharacter.y);
            this.game.addEntity(new Level1Part2(this.game, this.hud, this.darkness, this.currentLevel, this.spyCharacter));
        }

    };

    update() {

        let midpointX = PARAMS.CANVAS_WIDTH  / 2 - this.spyCharacter.width / 2;
        this.x = this.spyCharacter.x - midpointX;

        let midpointY = PARAMS.CANVAS_HEIGHT / 2 - this.spyCharacter.height / 2;
        this.y = this.spyCharacter.y - midpointY;

        //CHANGE THE CHECK TO WHATEVER ACTIVATES THE QUICK TIME EVENT
        //MIGHT JUST HAVE IT BE A SEPARATE "LEVEL"
        /*if(!this.game.entities.includes(this.darkness) && this.spyCharacter.x > 500) {
            this.game.addEntityToTop(this.darkness);
            this.game.addEntityToTop(this.hud);
            this.game.addEntityToTop(new IngameTimer(this.game));
        }*/
    };

    draw(ctx) {
        //
    };
}