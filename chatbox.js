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
    constructor(game) {

        this.game = game;

        // image that looks like a case file
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/casefile.png");

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.exitBB = new BoundingBox(565, 520, 75, 30);
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // exit chat box
            if (this.mouseBB.collide(this.exitBB)) {
                this.removeFromWorld = true;
            }

            this.game.click = null;
        }

        // update mouse area
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {
        // casefile
        ctx.drawImage(this.spritesheet, 0, 0, 460, 340, PARAMS.CANVAS_WIDTH / 2 - (460 * 1.5 / 2), PARAMS.CANVAS_HEIGHT / 2 - (340 * 1.5 / 2), 460 * 1.5, 340 * 1.5);

        // text
        ctx.fillStyle = "white";
        ctx.font = "18px Courier";
        ctx.fillRect(380, 300, 260, 200);
        setBlackStroke(ctx);
        ctx.fillText("OVERVIEW:", 387, 310);
        ctx.fillText("Subject burned down the", 387, 325);
        ctx.fillText("headquarters of his", 387, 340);
        ctx.fillText("business competitor to", 387, 355);
        ctx.fillText("cover up his true crime.", 387, 370);
        ctx.fillText("He stole a patent,", 387, 385);
        ctx.fillText("marketing it as his own.", 387, 400);
        ctx.fillText("He is the lead suspect,", 387, 415);
        ctx.fillText("but there is no solid", 387, 430);
        ctx.fillText("proof of this. There is", 387, 445);
        ctx.fillText("only the word of one", 387, 460);
        ctx.fillText("witness who saw him", 387, 475);
        ctx.fillText("take the patent.", 387, 490);
        ctx.fillText("OBJECTIVE: Find the", 387, 515);
        ctx.fillText("original patent.", 387, 530);

        // exit button
        setBlackStroke(ctx);
        if (this.mouseBB.collide(this.exitBB)) {
            setRedStroke(ctx);
        }

        ctx.lineWidth = 2;
        ctx.textAlign = "center";
        ctx.font = "Bold 25px Courier";
        ctx.fillText("EXIT", 603, 542);
        ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);
    };
};