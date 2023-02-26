class Chatbox {
    static OPEN = false;
    constructor(game, text, portraitNumber, spritesheet, isButler) {
        this.game = game;
        this.text = text;
        this.portraitNumber = portraitNumber;
        this.spritesheet = spritesheet;
        this.isButler = isButler;

        this.chatboxX = 0;
        this.chatboxY = 500;

        this.imageX = 0;
        this.imageY = 0;

        // original pic width and height
        this.imageW = 294;
        this.imageH = 294;

        // Draw width and height
        this.dWidth = 45 * PARAMS.BLOCKWIDTH;
        this.dHeight = 45 * PARAMS.BLOCKWIDTH;

        this.setVisible = false;

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.exitBB = new BoundingBox(612, 615, 50, 50);
    };

    getImageXandY(portraitNumber) {
        // 0 = neutral, 1 = happy, 2 = sad, 3 = mad, 4 = surprised
        if (portraitNumber === 0) {
            this.imageX = 32;
            this.imageY = 16;
        } else if (portraitNumber === 1) {
            this.imageX = 340;
            this.imageY = 16;
        } else if (portraitNumber === 2) {
            this.imageX = 36;
            this.imageY = 320;
        } else if (portraitNumber === 3) {
            this.imageX = 340;
            this.imageY = 320;
        } else if (portraitNumber === 4) {
            this.imageX = 36;
            this.imageY = 628;
        }
    }

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // exit chat box
           if (this.mouseBB.collide(this.exitBB)) {
               this.setVisible = false;
               this.removeFromWorld = true;
               this.imageX = 0;
               this.imageY = 0;
               Chatbox.OPEN = false;
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

            //Different drawing specs for butler
            if (this.isButler) {
                // this.imageX = ;
                // this.imageY = ;
                this.imageW = 104;
                this.imageH = 156;

                this.dWidth = 28 * PARAMS.BLOCKWIDTH;;
                this.dHeight = 41 * PARAMS.BLOCKWIDTH;;


            } else {
                this.getImageXandY(this.portraitNumber);
            }

            ctx.drawImage(this.spritesheet, this.imageX, this.imageY, this.imageW, this.imageH, this.chatboxX + 10, this.chatboxY + 10, this.dWidth, this.dHeight);


            // npc text
            //TO CHANGE WHERE THE TEXT IS IN THE CHAT BOX
            wrapText(ctx, this.text, this.chatboxX + 195, this.chatboxY + 30, 490);
        }
    };
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
                caseFileDisplay = true;
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