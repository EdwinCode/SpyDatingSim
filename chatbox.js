class Chatbox {
    constructor(game, text) {
        this.game = game;
        this.text = text;

        this.chatboxX = 0;
        this.chatboxY = 500;

        this.setVisible = false;

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.exitBB = new BoundingBox(612, 615, 50, 50);
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // exit chat box
           if (this.mouseBB.collide(this.exitBB)) {
               this.setVisible = false;
               this.removeFromWorld = true;
               console.log("removed chat");
            }

            this.game.click = null;
        }

        // update mouse area
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {
        // rectangle at bottom of screen, black background, white text
        // get text from constructor
        if (this.setVisible) {
            ctx.lineWidth = 4;
            ctx.textAlign = "left";
            ctx.font = "Bold 20px Courier";

            setBlackStroke(ctx);

            // chat box
            ctx.strokeRect(this.chatboxX, this.chatboxY, 700, 200);
            ctx.fillRect(this.chatboxX, this.chatboxY, 700, 200);

            setWhiteStroke(ctx);

            // exit button
            if (this.mouseBB.collide(this.exitBB)) {
                setRedStroke(ctx);
            }
            // draw triangle
            ctx.beginPath();
            ctx.moveTo(650, 640);
            ctx.lineTo(630, 630);
            ctx.lineTo(630, 650);
            ctx.fill();
            // draw exit BB
            ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

            setWhiteStroke(ctx);

            // npc text
            this.wrapText(ctx, this.text);
        }
    };

    wrapText(ctx, text) {
        let textLocationX = this.chatboxX + 10;
        let textLocationY = this.chatboxY + 20;

        let maxWidth = 700;
        let lineHeight = 20;

        let words = text.split(' ');
        let line = '';

        for(let i = 0; i < words.length; i++) {
            let testLine = line + words[i] + ' ';
            let metrics = ctx.measureText(testLine);
            let testWidth = metrics.width;

            if (testWidth > maxWidth && i > 0) {
                ctx.fillText(line, textLocationX, textLocationY);
                line = words[i] + ' ';
                textLocationY += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        ctx.fillText(line, textLocationX, textLocationY);
    }
};

class CasefileChatbox {
    constructor(game, text) {

        this.game = game;
        this.text = text;

        // image that looks like a case file
        this.spritesheet;

        this.chatboxX = 0;
        this.chatboxY;
        this.chatboxW;
        this.chatboxH;
    };
};