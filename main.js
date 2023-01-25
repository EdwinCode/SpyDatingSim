const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//backgrounds

//entities
ASSET_MANAGER.queueDownload("./Sprites/sprite_girl_purple.png");
ASSET_MANAGER.queueDownload("./Sprites/spy.png");

//ASSET_MANAGER.queueDownload("./Sprites/sprite_boy_brown.png");
//ASSET_MANAGER.queueDownload("./Sprites/sprite_alphabet_x8.png");
//ASSET_MANAGER.queueDownload("./Sprites/date_candidate_1.png");
//ASSET_MANAGER.queueDownload("./Sprites/date_candidate_2.png");
//ASSET_MANAGER.queueDownload("./Sprites/guard.png");

//cutscenes

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;

	/*gameEngine.addEntity(new Guard(gameEngine));
	gameEngine.addEntity(new Date_Candidate_1(gameEngine));
	gameEngine.addEntity(new Date_Candidate_2(gameEngine));
	gameEngine.addEntity(new SpyCharacter(gameEngine));
	gameEngine.addEntity(new BillionaireCharacter(gameEngine));
	gameEngine.addEntity(new AlphabetTest(gameEngine));
	gameEngine.addEntity(new CharacterTest(gameEngine));*/

	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
