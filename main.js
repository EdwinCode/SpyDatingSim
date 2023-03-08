const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//entities
ASSET_MANAGER.queueDownload("./sprites/entities/girluser.png");
ASSET_MANAGER.queueDownload("./sprites/entities/boyuser.png");
ASSET_MANAGER.queueDownload("./sprites/entities/billionaire.png");
ASSET_MANAGER.queueDownload("./sprites/entities/stephanie.png");
ASSET_MANAGER.queueDownload("./sprites/entities/richie.png");
ASSET_MANAGER.queueDownload("./sprites/entities/darkness.png");
ASSET_MANAGER.queueDownload("./sprites/entities/darknessLighter.png");
ASSET_MANAGER.queueDownload("./sprites/entities/guard.png");
ASSET_MANAGER.queueDownload("./sprites/entities/stephanie_portraits.png");
ASSET_MANAGER.queueDownload("./sprites/entities/richie_portraits.png");
ASSET_MANAGER.queueDownload("./sprites/entities/billionaire_portraits.png");
ASSET_MANAGER.queueDownload("./sprites/entities/kitchen_worker.png");
ASSET_MANAGER.queueDownload("./sprites/entities/kitchen_worker_portraits.png");
ASSET_MANAGER.queueDownload("./sprites/entities/gardener.png");
ASSET_MANAGER.queueDownload("./sprites/entities/gardener_portraits.png");
ASSET_MANAGER.queueDownload("./sprites/entities/car_mechanic.png");
ASSET_MANAGER.queueDownload("./sprites/entities/car_mechanic_portraits.png");

//EXTRA
ASSET_MANAGER.queueDownload("./sprites/emotes.png");
ASSET_MANAGER.queueDownload("./sprites/blackbox.png");
ASSET_MANAGER.queueDownload("./sprites/mysterybackground.png");

// HUD icons
ASSET_MANAGER.queueDownload("./sprites/alfred.png");
ASSET_MANAGER.queueDownload("./sprites/suitcase.png");

// item icons
ASSET_MANAGER.queueDownload("./sprites/casefile_icon.jpg");
ASSET_MANAGER.queueDownload("./sprites/flashlight.png");
ASSET_MANAGER.queueDownload("./sprites/gps.png");
ASSET_MANAGER.queueDownload("./sprites/patent.png");
ASSET_MANAGER.queueDownload("./sprites/rose.png");

//cutscenes
ASSET_MANAGER.queueDownload("./sprites/cutscenes/intro.png");
ASSET_MANAGER.queueDownload("./sprites/casefile.png");
ASSET_MANAGER.queueDownload("./sprites/casefileUpdated.png");

//furniture
ASSET_MANAGER.queueDownload("./sprites/furniture/House_Tileset.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/toolbox.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/furniture.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/cars.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/billionaire_statue.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/door.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/shoes.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/water_tank.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/drinks.png");

ASSET_MANAGER.queueDownload("./sprites/furniture/trellis.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/window.png");

ASSET_MANAGER.queueDownload("./sprites/furniture/garagedoor.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/cars.png");

ASSET_MANAGER.queueDownload("./sprites/furniture/flooring.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/marblefloor.png");

ASSET_MANAGER.queueDownload("./sprites/furniture/PlantPots.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/Roses.png");
ASSET_MANAGER.queueDownload("./sprites/furniture/Floorings.png");

// music
ASSET_MANAGER.queueDownload("./music/Jazz.mp3");
ASSET_MANAGER.queueDownload("./music/PinkPanther.mp3");
ASSET_MANAGER.queueDownload("./music/MissionImpossible.mp3");

//sound effects
ASSET_MANAGER.queueDownload("./sound_effects/treasure.mp3");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;

	ASSET_MANAGER.autoRepeat("./music/PinkPanther.mp3");
	ASSET_MANAGER.autoRepeat("./music/Jazz.mp3");

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);

	new Scenemanager(gameEngine);

	gameEngine.start();
});