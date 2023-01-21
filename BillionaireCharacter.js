class BillionaireCharacter {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/sprite_boy_brown.png"), 8, 650, 105, 210, 4, 0.2);

        this.x = 0;
        this.y = 768/2;
        this.speed = 100;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if (this.x > 1024 / 4) this.x = -220;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};