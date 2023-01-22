const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites/sprite_girl_purple.png");
ASSET_MANAGER.queueDownload("./Sprites/sprite_boy_brown.png");
ASSET_MANAGER.queueDownload("./Sprites/sprite_alphabet_8.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new SpyCharacter(gameEngine));
	gameEngine.addEntity(new BillionaireCharacter(gameEngine));
	gameEngine.addEntity(new AlphabetTest(gameEngine));
	gameEngine.addEntity(new CharacterTest(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
