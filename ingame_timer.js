class Ingame_Timer {

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./ingame_timer.png"),
            0, 0, 0, 0, 0, 0);

        this.x = 0;
        this.y = 0;
        this.speed = 0;
    };

    update() {
    };

    draw(ctx) {

    };
}