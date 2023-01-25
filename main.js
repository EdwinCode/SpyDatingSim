const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//entities
ASSET_MANAGER.queueDownload("./Sprites/sprite_girl_purple.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);

	new Scenemanager(gameEngine);

	gameEngine.start();
});
