class SpyCharacter {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/sprite_girl_purple.png"), 8, 650, 124, 210, 4, 0.2);

        this.x = 50;
        this.y = 0;
        this.speed = 100;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if (this.x > 1024 / 4) this.x = 50;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};