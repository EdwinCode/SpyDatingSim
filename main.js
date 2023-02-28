const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//entities
ASSET_MANAGER.queueDownload("./sprites/entities/girluser.png");
ASSET_MANAGER.queueDownload("./sprites/entities/boyuser.png");
ASSET_MANAGER.queueDownload("./sprites/entities/billionaire.png");
ASSET_MANAGER.queueDownload("./sprites/entities/stephanie.png");
ASSET_MANAGER.queueDownload("./sprites/entities/richie.png");
ASSET_MANAGER.queueDownload("./sprites/entities/darkness.png");
ASSET_MANAGER.queueDownload("./sprites/entities/guard.png");
ASSET_MANAGER.queueDownload("./sprites/entities/stephanie_portraits.png");
ASSET_MANAGER.queueDownload("./sprites/entities/richie_portraits.png");
ASSET_MANAGER.queueDownload("./sprites/entities/billionaire_portraits.png");

// HUD icons
ASSET_MANAGER.queueDownload("./sprites/alfred.png");
ASSET_MANAGER.queueDownload("./sprites/suitcase.png");

//cutscenes
ASSET_MANAGER.queueDownload("./sprites/cutscenes/intro.png");
ASSET_MANAGER.queueDownload("./sprites/casefile.png");

//furniture
ASSET_MANAGER.queueDownload("./sprites/furniture/House_Tileset.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/furniture.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/Cars.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/billionaire_statue.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/door.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/shoes.png");


//NOT CURRENTLY USED
ASSET_MANAGER.queueDownload("./sprites/furniture/floorAndWall.png");





ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);

	new Scenemanager(gameEngine);

	gameEngine.start();
});