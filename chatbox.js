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
        this.dWidth = 42 * PARAMS.BLOCKWIDTH;
        this.dHeight = 42 * PARAMS.BLOCKWIDTH;

        this.setVisible = false;

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.exitBB = new BoundingBox(612, 615, 50, 50);
    };

    getImageXandY(portraitNumber) {
        // 0 = neutral, 1 = happy, 2 = sad, 3 = mad, 4 = surprised, 5 = special (only for billionaire)
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
        } else if (portraitNumber === 5) {
            this.imageX = 340;
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

               if (clueOneDisplay && clueTwoDisplay && clueThreeDisplay && !this.isButler) {
                   this.game.addEntityToTop(new EndingChatbox(this.game));
               }
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
                this.imageW = 116;
                this.imageH = 156;

                this.dWidth = 31 * PARAMS.BLOCKWIDTH;
                this.dHeight = 41 * PARAMS.BLOCKWIDTH;

            }
            else {
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

        this.firstTime = false;

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
        setBlackStroke(ctx);
        ctx.fillRect(0,0,PARAMS.CANVAS_WIDTH,PARAMS.CANVAS_HEIGHT);
        setWhiteStroke(ctx);
        ctx.textAlign = "center";

        if (this.firstTime) {
            ctx.fillText("A New Item...", PARAMS.CANVAS_WIDTH / 2, 50);
            ctx.fillText("This will be in your items bag.", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT - 50);
        }

        // casefile
        ctx.drawImage(this.spritesheet, 0, 0, 460, 340, PARAMS.CANVAS_WIDTH / 2 - (460 * 1.5 / 2), PARAMS.CANVAS_HEIGHT / 2 - (340 * 1.5 / 2), 460 * 1.5, 340 * 1.5);

        // text
        ctx.textAlign = "left";
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

class CasefileUpdatedChatbox {
    constructor(game) {
        this.game = game;

        this.firstTime = false;

        // image that looks like a case file
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/casefileUpdated.png");

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
        setBlackStroke(ctx);
        ctx.fillRect(0,0,PARAMS.CANVAS_WIDTH,PARAMS.CANVAS_HEIGHT);
        setWhiteStroke(ctx);
        ctx.textAlign = "center";

        if (this.firstTime) {
            ctx.fillText("An Updated Item...", PARAMS.CANVAS_WIDTH / 2, 50);
            ctx.fillText("This will be in your items bag.", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT - 50);
        }

        // casefile
        ctx.drawImage(this.spritesheet, 0, 0, 460, 340, PARAMS.CANVAS_WIDTH / 2 - (460 * 1.5 / 2), PARAMS.CANVAS_HEIGHT / 2 - (340 * 1.5 / 2), 460 * 1.5, 340 * 1.5);

        ctx.textAlign = "left";
        ctx.fillStyle = "white";
        ctx.font = "18px Courier";
        ctx.fillRect(40, 300, 260, 200);
        setBlackStroke(ctx);
        ctx.fillText("OVERVIEW:", 47, 310);
        ctx.fillText("Subject burned down the", 47, 325);
        ctx.fillText("headquarters of his", 47, 340);
        ctx.fillText("business competitor to", 47, 355);
        ctx.fillText("cover up his true crime.", 47, 370);
        ctx.fillText("He stole a patent,", 47, 385);
        ctx.fillText("marketing it as his own.", 47, 400);
        ctx.fillText("He is the lead suspect,", 47, 415);
        ctx.fillText("but there is no solid", 47, 430);
        ctx.fillText("proof of this. There is", 47, 445);
        ctx.fillText("only the word of one", 47, 460);
        ctx.fillText("witness who saw him", 47, 475);
        ctx.fillText("take the patent.", 47, 490);
        ctx.fillText("OBJECTIVE: Find the", 47, 515);
        ctx.fillText("original patent.", 47, 530);

        // text
        ctx.textAlign = "left";
        ctx.fillStyle = "white";
        ctx.font = "18px Courier";
        ctx.fillRect(380, 300, 260, 200);
        setBlackStroke(ctx);
        ctx.fillText("NEXT OBJECTIVE:", 387, 160);
        ctx.fillText("Roam the mansion and", 387, 185);
        ctx.fillText("search for clues when", 387, 200);
        ctx.fillText("it is dark and the", 387, 215);
        ctx.fillText("mansion is quiet. Be", 387, 230);
        ctx.fillText("quick when searching.", 387, 245);
        ctx.fillText("Nighttime is shorter", 387, 260);
        ctx.fillText("than you think. Use", 387, 275);
        ctx.fillText("special items, clues", 387, 290);
        ctx.fillText("gathered from your", 387, 305);
        ctx.fillText("previous interactions,", 387, 320);
        ctx.fillText("and the butler’s hints", 387, 335);
        ctx.fillText("to find three pieces of", 387, 350);
        ctx.fillText("evidence. When you find", 387, 365);
        ctx.fillText("all three, make your", 387, 380);
        ctx.fillText("way to the front door", 387, 395);
        ctx.fillText("to escape. Then your", 387, 410);
        ctx.fillText("mission will be", 387, 425);
        ctx.fillText("complete.", 387, 440);
        ctx.fillText("Good luck, Agent Spy, ", 387, 470);
        ctx.fillText("and remember to watch", 387, 485);
        ctx.fillText("out for those pesky", 387, 500);
        ctx.fillText("guards.\n", 387, 515);





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

class ItemsChatbox {
    constructor(game, spritesheet, sx, sy, sw, sh, x, y, dWidth, dHeight) {
        Object.assign(this, {game, spritesheet, sx, sy, sw, sh, x, y, dWidth, dHeight});

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.exitBB = new BoundingBox(565, 520, 75, 30);
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // exit chat box
            if (this.mouseBB.collide(this.exitBB)) {
                this.removeFromWorld = true;
                this.firstTime = false;
            }

            this.game.click = null;
        }

        // update mouse area
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {
        setBlackStroke(ctx);
        ctx.fillRect(0,0,PARAMS.CANVAS_WIDTH,PARAMS.CANVAS_HEIGHT);
        setWhiteStroke(ctx);
        ctx.textAlign = "center";

        ctx.fillText("A New Item...", PARAMS.CANVAS_WIDTH / 2, 50);
        ctx.fillText("This will be in your items bag.", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT - 50);


        ctx.drawImage(this.spritesheet, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.dWidth, this.dHeight);

        // exit button
        setWhiteStroke(ctx);
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

class EndingChatbox {
    constructor(game) {
        Object.assign(this, {game});

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.exitBB = new BoundingBox(565, 520, 75, 30);
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // exit chat box
            if (this.mouseBB.collide(this.exitBB)) {
                this.removeFromWorld = true;
                this.firstTime = false;
            }

            this.game.click = null;
        }

        // update mouse area
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {
        setBlackStroke(ctx);
        ctx.fillRect(0,0,PARAMS.CANVAS_WIDTH,PARAMS.CANVAS_HEIGHT);
        setWhiteStroke(ctx);

        ctx.textAlign = "center";

        ctx.fillText("You have found all three clues to use", PARAMS.CANVAS_WIDTH / 2, 80);
        ctx.fillText("as pieces of evidence", PARAMS.CANVAS_WIDTH / 2, 110);
        ctx.fillText("against Mr. Billionaire!", PARAMS.CANVAS_WIDTH / 2, 140);


        ctx.fillText("Your final task is to get out of there.", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT/2);
        ctx.fillText("Get to the front door and escape.", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT/2 + 30);
        ctx.fillText("Good luck Agent Spy!", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT/2 + 60);



        // exit button
        setWhiteStroke(ctx);
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