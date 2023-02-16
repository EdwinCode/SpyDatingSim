class IngameTimer {
    constructor(game) {
        this.game = game;

        this.time = 200;

    };

    update() {
        if (this.timer === undefined) {
            this.timer = 0;
        } else {
            this.timer += this.game.clockTick;
        }

        if (this.timer > 0.4) {
            this.time -= 1;
            this.timer = undefined;
        }
    };

    draw(ctx) {
        setBlackStroke(ctx);
        ctx.lineWidth = 4;
        ctx.textAlign = "center";

        ctx.fillStyle = "#d9d9d9";

        // circle
        ctx.beginPath();
        ctx.arc(100, 580, 60, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();

        setBlackStroke(ctx);

        // Timer
        ctx.font = "Bold 30px Courier";
        ctx.fillText("Timer", 100, 565);
        ctx.font = "Bold 25px Courier";
        ctx.fillStyle = "Red";
        ctx.fillText(this.time, 100, 605);

    };
};