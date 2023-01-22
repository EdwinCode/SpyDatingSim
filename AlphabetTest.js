class AlphabetTest {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/sprite_alphabet_x8.png"), 8, 8, 48, 72, 5, 0.5);

        this.x = 200;
        this.y = 700;
        this.speed = 100;
    };

    update() {
        this.x = 200;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};