const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites/date_candidate_1.png");
ASSET_MANAGER.queueDownload("./Sprites/date_candidate_2.png");
ASSET_MANAGER.queueDownload("./Sprites/guard.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;


	gameEngine.addEntity(new Guard(gameEngine));

	gameEngine.addEntity(new Date_Candidate_1(gameEngine));

	gameEngine.addEntity(new Date_Candidate_2(gameEngine));




	gameEngine.init(ctx);

	gameEngine.start();
});
