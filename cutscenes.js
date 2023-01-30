class IntroCutscene {
    constructor(game) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Cutscenes/levelOne.png");
        this.animation = new Animator(this.spritesheet, 0, 0, 700, 700, 28, 0.2);

        this.still = false;

        this.x = 0;
        this.y = 0;

    };

    update() {
        console.log(this.animation.frameCount);
        console.log(this.animation.currentFrame());

        if (this.animation.currentFrame() === this.animation.frameCount - 1) {
            console.log("true");
            this.animation = new Animator(this.spritesheet, 0, 0, 700, 700, 1, 0.2);
            this.still = true;
        }

        if (this.still) {

        }

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE * 2);
    };
}