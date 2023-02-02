const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//entities
ASSET_MANAGER.queueDownload("./Sprites/sprite_girl_purple.png");

//cutscene
ASSET_MANAGER.queueDownload("./Sprites/Cutscenes/Intro.png");

//furniture
ASSET_MANAGER.queueDownload("./Sprites/Furniture/House_Tileset.png");


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
