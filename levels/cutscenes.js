class LevelOneCutscene {
    constructor(game) {
        this.game = game;

        this.x = 0;
        this.y = 0;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.nextBB = new BoundingBox(602 - 50,660 - 45,100,50);
        this.slideNum = 1;
    };

    update() {
        // if user clicks on exit button then go to level one
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.nextBB)) {
                if (this.slideNum === 5) {
                    this.game.camera.clearEntities();
                    this.game.camera.loadLevel(levelOne2);
                    roseDisplay = true;
                } else {
                    this.slideNum++;
                }
            }
            this.game.click = null;
        }

        // update location of mouse pointer
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }

        //Checks for Skip Intro and Skip Phase 1 checkboxes
        checkForSkippedParts(this.game);
    };

    draw(ctx) {
        // black box to cover screen
        //ctx.strokeRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        setBlackStroke(ctx);
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        // white on black background
        setWhiteStroke(ctx);

        // dialog and images
        this.drawCutscene(ctx, this.slideNum);

        // exit button
        if (this.mouseBB.collide(this.nextBB)) {
            setRedStroke(ctx);
        }
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 35px Courier";
        ctx.fillText("NEXT", 602, 650);
        ctx.strokeRect(this.nextBB.left, this.nextBB.top, this.nextBB.width, this.nextBB.height);
    };

    drawCutscene(ctx, slideNum) {
        ctx.font = "Bold 25px Courier";
        ctx.textAlign = "left";

        let bSprite = ASSET_MANAGER.getAsset("./sprites/entities/billionaire_portraits.png");
        let sSprite = ASSET_MANAGER.getAsset("./sprites/entities/stephanie_portraits.png");
        let rSprite = ASSET_MANAGER.getAsset("./sprites/entities/richie_portraits.png");

        this.imageX = 340;
        this.imageY = 16;

        // original pic width and height
        this.imageW = 294;
        this.imageH = 294;

        // Draw width and height
        this.dWidth = 32 * PARAMS.BLOCKWIDTH;
        this.dHeight = 32 * PARAMS.BLOCKWIDTH;

        // text
        let bText = "Hello, everyone! This is our first rose ceremony together. The person who I feel the " +
            "greatest spark with will receive this rose.";
        let sText = "Roses are like so romantic! Especially red ones...reminds me of like burning passion.";
        let rText = "Eek! *repositions himself to show his best \"come hither\" expression*";

        // slides
        if (slideNum === 1) {
            ctx.fillText("Some time after Mr. Billionaire's toast...", 20, 20);
        }

        else if (slideNum === 2) {
            ctx.fillText("Some time after Mr. Billionaire's toast...", 20, 20);

            // billionaire portrait
            ctx.drawImage(bSprite, this.imageX, this.imageY, this.imageW, this.imageH, 95, 60, this.dWidth, this.dHeight);
            wrapText(ctx, bText, PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH / 2)
        }

        else if (slideNum === 3) {
            ctx.fillText("Some time after Mr. Billionaire's toast...", 20, 20);

            // billionaire portrait
            ctx.drawImage(bSprite, this.imageX, this.imageY, this.imageW, this.imageH, 95, 60, this.dWidth, this.dHeight);
            wrapText(ctx, bText, PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH / 2);

            // steph
            ctx.drawImage(sSprite, this.imageX, this.imageY, this.imageW, this.imageH, 95, 200, this.dWidth, this.dHeight);
            wrapText(ctx, sText, PARAMS.CANVAS_WIDTH / 2, 220, PARAMS.CANVAS_WIDTH / 2);
        }

        else if (slideNum === 4) {
            ctx.fillText("Some time after Mr. Billionaire's toast...", 20, 20);

            // billionaire portrait
            ctx.drawImage(bSprite, this.imageX, this.imageY, this.imageW, this.imageH, 95, 60, this.dWidth, this.dHeight);
            wrapText(ctx, bText, PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH / 2);

            // steph
            ctx.drawImage(sSprite, this.imageX, this.imageY, this.imageW, this.imageH, 95, 200, this.dWidth, this.dHeight);
            wrapText(ctx, sText, PARAMS.CANVAS_WIDTH / 2, 220, PARAMS.CANVAS_WIDTH / 2);

            // richie
            ctx.drawImage(rSprite, this.imageX, this.imageY, this.imageW, this.imageH, 95, 340, this.dWidth, this.dHeight);
            wrapText(ctx, rText, PARAMS.CANVAS_WIDTH / 2, 340, PARAMS.CANVAS_WIDTH / 2);

        }

        else if (slideNum === 5) {
            ctx.fillText("Some time after Mr. Billionaire's toast...", 20, 20);

            // billionaire portrait
            ctx.drawImage(bSprite, this.imageX, this.imageY, this.imageW, this.imageH, 95, 60, this.dWidth, this.dHeight);
            wrapText(ctx, bText, PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH / 2);

            // steph
            ctx.drawImage(sSprite, this.imageX, this.imageY, this.imageW, this.imageH, 95, 200, this.dWidth, this.dHeight);
            wrapText(ctx, sText, PARAMS.CANVAS_WIDTH / 2, 220, PARAMS.CANVAS_WIDTH / 2);

            // richie
            ctx.drawImage(rSprite, this.imageX, this.imageY, this.imageW, this.imageH, 95, 340, this.dWidth, this.dHeight);
            wrapText(ctx, rText, PARAMS.CANVAS_WIDTH / 2, 340, PARAMS.CANVAS_WIDTH / 2);

            // billionaire
            ctx.drawImage(bSprite, 32, 16, this.imageW, this.imageH, 95, 480, this.dWidth, this.dHeight);
            bText = "*makes eye contact with...you!*     Meeting you today has lit a fire in my soul, and I feel it burning " +
                "bright. Will you accept this rose?";
            wrapText(ctx, bText, 340, 480, PARAMS.CANVAS_WIDTH / 2);
        }
    };
};


class IntroCutscene {
    constructor(game) {
        this.game = game;

        this.x = 0;
        this.y = 0;

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.nextBB = new BoundingBox(602 - 50, 660 - 45, 100, 50);
        this.slideNum = 1;
    };

    update() {
        // if user clicks on exit button then go to level one
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            if (this.mouseBB.collide(this.nextBB)) {
                if (this.slideNum === 7) {
                    this.game.camera.clearEntities();
                    this.game.camera.loadLevel(levelOne1);
                } else {
                    this.slideNum++;
                }
            }
            this.game.click = null;
        }

        // update location of mouse pointer
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }

        //Checks for Skip Intro and Skip Phase 1 checkboxes
        checkForSkippedParts(this.game);
    };

    draw(ctx) {
        // black box to cover screen
        //ctx.strokeRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        setBlackStroke(ctx);
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        // white on black background
        setWhiteStroke(ctx);

        // dialog and images
        this.drawCutscene(ctx, this.slideNum);

        // exit button
        if (this.mouseBB.collide(this.nextBB)) {
            setRedStroke(ctx);
        }
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 35px Courier";
        ctx.fillText("NEXT", 602, 650);
        ctx.strokeRect(this.nextBB.left, this.nextBB.top, this.nextBB.width, this.nextBB.height);
    };

    drawCutscene(ctx, slideNum) {
        ctx.font = "Bold 25px Courier";
        ctx.textAlign = "center";

        if (slideNum === 1) {
            ctx.fillText("Hello, Agent Spy.", PARAMS.CANVAS_WIDTH / 2, 30, PARAMS.CANVAS_WIDTH);
            ctx.fillText("You have a new mission.", PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH);
        } else if (slideNum === 2) {
            ctx.fillText("Hello, Agent Spy.", PARAMS.CANVAS_WIDTH / 2, 30, PARAMS.CANVAS_WIDTH);
            ctx.fillText("You have a new mission.", PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH);

            ctx.fillText("Months ago, you secured a spot to date the", PARAMS.CANVAS_WIDTH / 2, 110,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("eccentric Mr.Billionaire, \"The Bachelor\"", PARAMS.CANVAS_WIDTH / 2, 140,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("style.", PARAMS.CANVAS_WIDTH / 2, 170, PARAMS.CANVAS_WIDTH);
        } else if (slideNum === 3) {
            ctx.fillText("Hello, Agent Spy.", PARAMS.CANVAS_WIDTH / 2, 30, PARAMS.CANVAS_WIDTH);
            ctx.fillText("You have a new mission.", PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH);

            ctx.fillText("Months ago, you secured a spot to date the", PARAMS.CANVAS_WIDTH / 2, 110,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("eccentric Mr.Billionaire, \"The Bachelor\"", PARAMS.CANVAS_WIDTH / 2, 140,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("style.", PARAMS.CANVAS_WIDTH / 2, 170, PARAMS.CANVAS_WIDTH);

            ctx.fillText("After his sudden stroke of genius with a", PARAMS.CANVAS_WIDTH / 2, 220,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("patent idea, he is the lead suspect in the", PARAMS.CANVAS_WIDTH / 2, 250,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("arson relating to his business competitor.", PARAMS.CANVAS_WIDTH / 2, 280,
                PARAMS.CANVAS_WIDTH);
        } else if (slideNum === 4) {
            ctx.fillText("Hello, Agent Spy.", PARAMS.CANVAS_WIDTH / 2, 30, PARAMS.CANVAS_WIDTH);
            ctx.fillText("You have a new mission.", PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH);

            ctx.fillText("Months ago, you secured a spot to date the", PARAMS.CANVAS_WIDTH / 2, 110,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("eccentric Mr.Billionaire, \"The Bachelor\"", PARAMS.CANVAS_WIDTH / 2, 140,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("style.", PARAMS.CANVAS_WIDTH / 2, 170, PARAMS.CANVAS_WIDTH);

            ctx.fillText("After his sudden stroke of genius with a", PARAMS.CANVAS_WIDTH / 2, 220,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("patent idea, he is the lead suspect in the", PARAMS.CANVAS_WIDTH / 2, 250,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("arson relating to his business competitor.", PARAMS.CANVAS_WIDTH / 2, 280,
                PARAMS.CANVAS_WIDTH);

            ctx.fillText("They claim he stole the patent, but there", PARAMS.CANVAS_WIDTH / 2, 330,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("is no proof.", PARAMS.CANVAS_WIDTH / 2, 360, PARAMS.CANVAS_WIDTH);
        } else if (slideNum === 5) {
            ctx.fillText("Hello, Agent Spy.", PARAMS.CANVAS_WIDTH / 2, 30, PARAMS.CANVAS_WIDTH);
            ctx.fillText("You have a new mission.", PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH);

            ctx.fillText("Months ago, you secured a spot to date the", PARAMS.CANVAS_WIDTH / 2, 110,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("eccentric Mr.Billionaire, \"The Bachelor\"", PARAMS.CANVAS_WIDTH / 2, 140,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("style.", PARAMS.CANVAS_WIDTH / 2, 170, PARAMS.CANVAS_WIDTH);

            ctx.fillText("After his sudden stroke of genius with a", PARAMS.CANVAS_WIDTH / 2, 220,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("patent idea, he is the lead suspect in the", PARAMS.CANVAS_WIDTH / 2, 250,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("arson relating to his business competitor.", PARAMS.CANVAS_WIDTH / 2, 280,
                PARAMS.CANVAS_WIDTH);

            ctx.fillText("They claim he stole the patent, but there", PARAMS.CANVAS_WIDTH / 2, 330,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("is no proof.", PARAMS.CANVAS_WIDTH / 2, 360, PARAMS.CANVAS_WIDTH);

            ctx.fillText("This wacky spin-off of \"The Bachelor\" is", PARAMS.CANVAS_WIDTH / 2, 410,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("the perfect cover to roam the mansion,", PARAMS.CANVAS_WIDTH / 2, 440,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("searching for clues.", PARAMS.CANVAS_WIDTH / 2, 470, PARAMS.CANVAS_WIDTH);
        } else if (slideNum === 6) {
            ctx.fillText("Hello, Agent Spy.", PARAMS.CANVAS_WIDTH / 2, 30, PARAMS.CANVAS_WIDTH);
            ctx.fillText("You have a new mission.", PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH);

            ctx.fillText("Months ago, you secured a spot to date the", PARAMS.CANVAS_WIDTH / 2, 110,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("eccentric Mr.Billionaire, \"The Bachelor\"", PARAMS.CANVAS_WIDTH / 2, 140,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("style.", PARAMS.CANVAS_WIDTH / 2, 170, PARAMS.CANVAS_WIDTH);

            ctx.fillText("After his sudden stroke of genius with a", PARAMS.CANVAS_WIDTH / 2, 220,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("patent idea, he is the lead suspect in the", PARAMS.CANVAS_WIDTH / 2, 250,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("arson relating to his business competitor.", PARAMS.CANVAS_WIDTH / 2, 280,
                PARAMS.CANVAS_WIDTH);

            ctx.fillText("They claim he stole the patent, but there", PARAMS.CANVAS_WIDTH / 2, 330,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("is no proof.", PARAMS.CANVAS_WIDTH / 2, 360, PARAMS.CANVAS_WIDTH);

            ctx.fillText("This wacky spin-off of \"The Bachelor\" is", PARAMS.CANVAS_WIDTH / 2, 410,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("the perfect cover to roam the mansion,", PARAMS.CANVAS_WIDTH / 2, 440,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("searching for clues.", PARAMS.CANVAS_WIDTH / 2, 470, PARAMS.CANVAS_WIDTH);

            ctx.fillText("Prove Mr.Billionaire committed this crime to", PARAMS.CANVAS_WIDTH / 2, 520,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("complete the mission.", PARAMS.CANVAS_WIDTH / 2, 550, PARAMS.CANVAS_WIDTH);
        } else if (slideNum === 7) {
            ctx.fillText("Hello, Agent Spy.", PARAMS.CANVAS_WIDTH / 2, 30, PARAMS.CANVAS_WIDTH);
            ctx.fillText("You have a new mission.", PARAMS.CANVAS_WIDTH / 2, 60, PARAMS.CANVAS_WIDTH);

            ctx.fillText("Months ago, you secured a spot to date the", PARAMS.CANVAS_WIDTH / 2, 110,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("eccentric Mr.Billionaire, \"The Bachelor\"", PARAMS.CANVAS_WIDTH / 2, 140,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("style.", PARAMS.CANVAS_WIDTH / 2, 170, PARAMS.CANVAS_WIDTH);

            ctx.fillText("After his sudden stroke of genius with a", PARAMS.CANVAS_WIDTH / 2, 220,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("patent idea, he is the lead suspect in the", PARAMS.CANVAS_WIDTH / 2, 250,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("arson relating to his business competitor.", PARAMS.CANVAS_WIDTH / 2, 280,
                PARAMS.CANVAS_WIDTH);

            ctx.fillText("They claim he stole the patent, but there", PARAMS.CANVAS_WIDTH / 2, 330,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("is no proof.", PARAMS.CANVAS_WIDTH / 2, 360, PARAMS.CANVAS_WIDTH);

            ctx.fillText("This wacky spin-off of \"The Bachelor\" is", PARAMS.CANVAS_WIDTH / 2, 410,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("the perfect cover to roam the mansion,", PARAMS.CANVAS_WIDTH / 2, 440,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("searching for clues.", PARAMS.CANVAS_WIDTH / 2, 470, PARAMS.CANVAS_WIDTH);

            ctx.fillText("Prove Mr.Billionaire committed this crime to", PARAMS.CANVAS_WIDTH / 2, 520,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("complete the mission.", PARAMS.CANVAS_WIDTH / 2, 550, PARAMS.CANVAS_WIDTH);

            ctx.fillText("Good luck, Agent Spy, and look out for those", PARAMS.CANVAS_WIDTH / 2, 600,
                PARAMS.CANVAS_WIDTH);
            ctx.fillText("pesky guards!", PARAMS.CANVAS_WIDTH / 2, 630, PARAMS.CANVAS_WIDTH);
        }
    };
}

class EndingPart1Cutscene {
    constructor(game) {
        this.game = game;

        this.x = 0;
        this.y = 0;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.nextBB = new BoundingBox(602 - 50,660 - 45,100,50);
        this.slideNum = 1;
    };

    update() {
        // if user clicks on exit button then go to level one
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.nextBB)) {
                if (this.slideNum === 4) {
                    this.game.camera.clearEntities();
                    this.game.camera.loadLevel(endingPart2Cutscene);
                } else {
                    this.slideNum++;
                }
            }
            this.game.click = null;
        }

        // update location of mouse pointer
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }

        //Checks for Skip Intro and Skip Phase 1 checkboxes
        checkForSkippedParts(this.game);
    };

    draw(ctx) {
        // black box to cover screen
        //ctx.strokeRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        setBlackStroke(ctx);
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        // white on black background
        setWhiteStroke(ctx);

        // dialog and images
        this.drawCutscene(ctx, this.slideNum);

        // exit button
        if (this.mouseBB.collide(this.nextBB)) {
            setRedStroke(ctx);
        }
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 35px Courier";
        ctx.fillText("NEXT", 602, 650);
        ctx.strokeRect(this.nextBB.left, this.nextBB.top, this.nextBB.width, this.nextBB.height);
    };

    drawCutscene(ctx, slideNum) {
        ctx.font = "Bold 25px Courier";
        ctx.textAlign = "left";

        let bSprite = ASSET_MANAGER.getAsset("./sprites/entities/billionaire_portraits.png");
        let sSprite = ASSET_MANAGER.getAsset("./sprites/entities/stephanie_portraits.png");
        let rSprite = ASSET_MANAGER.getAsset("./sprites/entities/richie_portraits.png");

        this.imageX = 340;
        this.imageY = 16;

        // original pic width and height
        this.imageW = 294;
        this.imageH = 294;

        // Draw width and height
        this.dWidth = 32 * PARAMS.BLOCKWIDTH;
        this.dHeight = 32 * PARAMS.BLOCKWIDTH;

        if (slideNum === 1) {
            ctx.fillText("With the 3 pieces of evidence you found,", 50, 20);
            ctx.fillText("your mission was complete", 160, 45);

        }

        else if (slideNum === 2) {
            ctx.fillText("With the 3 pieces of evidence you found,", 50, 20);
            ctx.fillText("your mission was complete", 160, 45);

            // billionaire portrait
            ctx.drawImage(bSprite, 340, 320, this.imageW, this.imageH, 20, 80, this.dWidth, this.dHeight);
            let bText = "Mr. Billionaire was arrested on charges for arson and theft. Not even his father could bail him out of that one.";
            wrapText(ctx, bText, PARAMS.CANVAS_WIDTH / 2, 90, PARAMS.CANVAS_WIDTH / 2);

        }

        else if (slideNum === 3) {
            ctx.fillText("With the 3 pieces of evidence you found,", 50, 20);
            ctx.fillText("your mission was complete", 160, 45);

            // billionaire portrait
            ctx.drawImage(bSprite, 340, 320, this.imageW, this.imageH, 20, 80, this.dWidth, this.dHeight);
            let bText = "Mr. Billionaire was arrested on charges for arson and theft. Not even his father could bail him out of that one.";
            wrapText(ctx, bText, PARAMS.CANVAS_WIDTH / 2, 90, PARAMS.CANVAS_WIDTH / 2);

            // steph
            ctx.drawImage(sSprite, 36, 628, this.imageW, this.imageH, 370, 240, this.dWidth, this.dHeight);
            // richie
            ctx.drawImage(rSprite, 36, 628, this.imageW, this.imageH, 530, 240, this.dWidth, this.dHeight);

            let sText = "The contestants were shocked when they heard the news.         \"I really like thought he could be like the one.\"            - Stephanie";
            wrapText(ctx, sText, 20, 270, PARAMS.CANVAS_WIDTH / 2);

        }

        else if (slideNum === 4) {
            ctx.fillText("With the 3 pieces of evidence you found,", 50, 20);
            ctx.fillText("your mission was complete", 160, 45);

            // billionaire portrait
            ctx.drawImage(bSprite, 340, 320, this.imageW, this.imageH, 20, 80, this.dWidth, this.dHeight);
            let bText = "Mr. Billionaire was arrested on charges for arson and theft. Not even his father could bail him out of that one.";
            wrapText(ctx, bText, PARAMS.CANVAS_WIDTH / 2, 90, PARAMS.CANVAS_WIDTH / 2);

            // steph
            ctx.drawImage(sSprite, 36, 628, this.imageW, this.imageH, 370, 240, this.dWidth, this.dHeight);
            // richie
            ctx.drawImage(rSprite, 36, 628, this.imageW, this.imageH, 530, 240, this.dWidth, this.dHeight);

            let sText = "The contestants were shocked when they heard the news.         \"I really like thought he could be like the one.\"            - Stephanie";
            wrapText(ctx, sText, 20, 270, PARAMS.CANVAS_WIDTH / 2);

            // steph
            ctx.drawImage(sSprite, this.imageX, this.imageY, this.imageW, this.imageH, 20, 420, this.dWidth, this.dHeight);
            // richie
            ctx.drawImage(rSprite, this.imageX, this.imageY, this.imageW, this.imageH, 180, 420, this.dWidth, this.dHeight);

            let rText = "Surprisingly, Stephanie and Richie bonded so much from this whole experience that they ended up getting together.";
            wrapText(ctx, rText, PARAMS.CANVAS_WIDTH / 2, 440, PARAMS.CANVAS_WIDTH / 2);

        }
    };
};

class EndingPart2Cutscene {
    constructor(game) {
        this.game = game;

        this.x = 0;
        this.y = 0;

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.nextBB = new BoundingBox(602 - 50, 660 - 45, 100, 50);
        this.slideNum = 1;
    };

    update() {
        // if user clicks on exit button then go to level one
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            if (this.mouseBB.collide(this.nextBB)) {
                if (this.slideNum === 3) {
                    this.game.camera.clearEntities();
                    this.game.camera.loadLevel(winScreen);
                } else {
                    this.slideNum++;
                }
            }
            this.game.click = null;
        }

        // update location of mouse pointer
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }

        //Checks for Skip Intro and Skip Phase 1 checkboxes
        checkForSkippedParts(this.game);
    };

    draw(ctx) {
        // black box to cover screen
        //ctx.strokeRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        setBlackStroke(ctx);
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        // white on black background
        setWhiteStroke(ctx);

        // dialog and images
        this.drawCutscene(ctx, this.slideNum);

        // exit button
        if (this.mouseBB.collide(this.nextBB)) {
            setRedStroke(ctx);
        }
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 35px Courier";
        ctx.fillText("NEXT", 602, 650);
        ctx.strokeRect(this.nextBB.left, this.nextBB.top, this.nextBB.width, this.nextBB.height);
    };

    drawCutscene(ctx, slideNum) {
        ctx.font = "Bold 25px Courier";
        ctx.textAlign = "left";

        let cSprite = ASSET_MANAGER.getAsset("./sprites/entities/car_mechanic_portraits.png");
        let kSprite = ASSET_MANAGER.getAsset("./sprites/entities/kitchen_worker_portraits.png");
        let gSprite = ASSET_MANAGER.getAsset("./sprites/entities/gardener_portraits.png");

        this.imageX = 340;
        this.imageY = 16;

        // original pic width and height
        this.imageW = 294;
        this.imageH = 294;

        // Draw width and height
        this.dWidth = 32 * PARAMS.BLOCKWIDTH;
        this.dHeight = 32 * PARAMS.BLOCKWIDTH;

        if (slideNum === 1) {
            // car mechanic portrait
            ctx.drawImage(cSprite, 32, 16, this.imageW, this.imageH, 530, 20, this.dWidth, this.dHeight);
            let bText = "With the investigation into Mr. Billionaire's life, it turns out the car mechanic, Kent, was actually Mr. Billionaire's uncle. " +
                "Looking closer, you can definitely see the family resemblance.";
            wrapText(ctx, bText, 20, 30, PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6);


        } else if (slideNum === 2) {

            // car mechanic portrait
            ctx.drawImage(cSprite, 32, 16, this.imageW, this.imageH, 530, 20, this.dWidth, this.dHeight);
            let bText = "With the investigation into Mr. Billionaire's life, it turns out the car mechanic, Kent, was actually Mr. Billionaire's uncle. " +
                "Looking closer, you can definitely see the family resemblance.";
            wrapText(ctx, bText, 20, 30, PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6);

            //kitchen worker
            ctx.drawImage(kSprite, this.imageX, this.imageY, this.imageW, this.imageH, 20, 190, this.dWidth, this.dHeight);
            //gardener
            ctx.drawImage(gSprite, this.imageX, this.imageY, this.imageW, this.imageH, 20, 330, this.dWidth, this.dHeight);

            let sText = "Also from the investigation, it was found that Mr. Billionaire's Dad ended up being involved in the crime. Because of this," +
                    "the mansion became rightfully Kent's. He made sure all the staff got sufficient raises." +
                    " He became quite good friends with Alfred the butler, who was finally able to retire thanks to Kent.";
            wrapText(ctx, sText, PARAMS.CANVAS_WIDTH / 2 - PARAMS.CANVAS_WIDTH / 6, 220, PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6);


        } else if (slideNum === 3) {
            // car mechanic portrait
            ctx.drawImage(cSprite, 32, 16, this.imageW, this.imageH, 530, 20, this.dWidth, this.dHeight);
            let bText = "With the investigation into Mr. Billionaire's life, it turns out the car mechanic, Kent, was actually Mr. Billionaire's uncle. " +
                "Looking closer, you can definitely see the family resemblance.";
            wrapText(ctx, bText, 20, 30, PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6);

            //kitchen worker
            ctx.drawImage(kSprite, this.imageX, this.imageY, this.imageW, this.imageH, 20, 190, this.dWidth, this.dHeight);
            //gardener
            ctx.drawImage(gSprite, this.imageX, this.imageY, this.imageW, this.imageH, 20, 330, this.dWidth, this.dHeight);

            let sText = "Also from the investigation, it was found that Mr. Billionaire's Dad ended up being involved in the crime. Because of this," +
                "the mansion became rightfully Kent's. He made sure all the staff got sufficient raises." +
                " He became quite good friends with Alfred the butler, who was finally able to retire thanks to Kent.";
            wrapText(ctx, sText, PARAMS.CANVAS_WIDTH / 2 - PARAMS.CANVAS_WIDTH / 6, 220, PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6);

            ctx.textAlign = "center";
            let rText = "It has been an honor working with you, now on to your next mission Agent Spy!";
            wrapText(ctx, rText, PARAMS.CANVAS_WIDTH / 2, 530, PARAMS.CANVAS_WIDTH / 2 +  PARAMS.CANVAS_WIDTH / 6);

        }
    };
}