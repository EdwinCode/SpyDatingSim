const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//entities
ASSET_MANAGER.queueDownload("./sprites/entities/girluser.png");
ASSET_MANAGER.queueDownload("./sprites/entities/boyuser.png");
ASSET_MANAGER.queueDownload("./sprites/entities/billionaire.png");
ASSET_MANAGER.queueDownload("./sprites/entities/darkness.png");
ASSET_MANAGER.queueDownload("./sprites/entities/guard.png");
ASSET_MANAGER.queueDownload("./sprites/alfred.png");
ASSET_MANAGER.queueDownload("./sprites/suitcase.png");

//cutscene
ASSET_MANAGER.queueDownload("./sprites/cutscenes/Intro.png");

//furniture
ASSET_MANAGER.queueDownload("./sprites/furniture/House_Tileset.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;

	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);

	new Scenemanager(gameEngine);

	gameEngine.start();
});
