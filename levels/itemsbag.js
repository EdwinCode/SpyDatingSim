class Itemsbag {
    constructor(game) {
        this.game = game;

        // display booleans
        this.game.casefileDisplay = false;
        this.game.sneakerDisplay = false;
        this.game.capeDisplay = false;
        this.game.clueOneDisplay = false;
        this.game.clueTwoDisplay = false;
        this.game.clueThreeDisplay = false;

        // items bounding boxes
        // to be added to
        this.casefileBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);

        // other bounding boxes
        this.exitBB = new BoundingBox(550, 605, 100, 50);
        this.mouseBB = new BoundingBox(0,0,1,1);
        this.buttonBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 4 - 40, PARAMS.CANVAS_HEIGHT / 2 - 36, 80, 30);
    };

    //
    // SETTERS
    //

    setCaseFileDisplay(file) {
        this.game.casefileDisplay = file;
    }

    setSneakerDisplay(sneaker) {
        this.game.sneakerDisplay = sneaker;
    }

    setCapeDisplay(cape) {
        this.game.capeDisplay = cape;
    }

    setClueOneDisplay(clue) {
        this.game.clueOneDisplay = clue;
    }

    setClueTwoDisplay(clue) {
        this.game.clueTwoDisplay = clue;
    }

    setClueThreeDisplay(clue) {
        this.game.clueThreeDisplay = clue;
    }

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.buttonBB)) {
                if (this.clickCase) {
                    this.game.addEntityToTop(new CasefileChatbox(this.game));
                }
            }

            // show casefile
            if (this.mouseBB.collide(this.casefileBB)) {
                this.clickCase = true;
            }
            // to be implemented
            // else if sneaker -> apply
            // else if cape -> apply
            // else if clues -> view

            else if (this.mouseBB.collide(this.exitBB)) {
                this.removeFromWorld = true;
            }

            this.game.click = null;
        }

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {
        // change text color and text fill
        setBlackStroke(ctx);

        // view item box
        this.setViewItemBox(ctx, "");

        // item blurb box
        this.setItemBlurbBox(ctx, "Choose an item below.");

        // main items boxes
        ctx.fillStyle = "white";
        ctx.fillRect(0,PARAMS.CANVAS_HEIGHT / 2, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT / 2);
        setBlackStroke(ctx);
        ctx.strokeRect(0,PARAMS.CANVAS_HEIGHT / 2, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT / 2);

        // individual item boxes
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 6 - 3, 525,120,40);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, 525,120,40);
        ctx.fillStyle = "gray";
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 6 - 3, 525,120,40);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, 525,120,40);

        // reset text color
        setBlackStroke(ctx);

        // add items according to booleans
        ctx.textAlign = "center";

        if (this.game.casefileDisplay) {
            if (this.mouseBB.collide(this.casefileBB)) {
                setWhiteStroke(ctx);
            }
            ctx.fillText("Case File", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickCase) {
                this.setItemBlurbBox(ctx, "You have chosen the case file.");
                this.setButton(ctx, "VIEW");
            }
        }

        // reset text color
        setBlackStroke(ctx);

        if (this.game.sneakerDisplay) {
            if (this.clickSneaker) {

            }
        }

        // reset text color
        setBlackStroke(ctx);

        if (this.game.capeDisplay) {

        }

        // reset text color
        setBlackStroke(ctx);

        if (this.game.clueOneDisplay) {

        }

        // reset text color
        setBlackStroke(ctx);

        if (this.game.clueTwoDisplay) {

        }

        // reset text color
        setBlackStroke(ctx);

        if (this.game.clueThreeDisplay) {

        }

        // exit button
        if (this.mouseBB.collide(this.exitBB)) {
            setRedStroke(ctx);
        }
        ctx.font = "Bold 35px Courier";
        ctx.fillText("EXIT", 600, 640);
        ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        // reset text color
        setBlackStroke(ctx);
        ctx.textAlign = "left";
    };

    setViewItemBox(ctx, text) {
        // clear old image
        ctx.clearRect(0,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);

        // remake view box
        ctx.fillStyle = "gray";
        ctx.fillRect(0,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        setBlackStroke(ctx);
        ctx.strokeRect(0,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);

        // add new image
        ctx.textAlign = "left";
        wrapText(ctx, text, PARAMS.CANVAS_WIDTH / 2 + 10, 20, PARAMS.CANVAS_WIDTH / 2 - 10);
    }

    setItemBlurbBox(ctx, text) {
        // clear old text
        ctx.clearRect(PARAMS.CANVAS_WIDTH / 2,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);

        // remake blurb box
        setWhiteStroke(ctx);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 2,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        setBlackStroke(ctx);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);

        // add new text
        ctx.textAlign = "left";
        ctx.font = "Bold 20px Courier";
        wrapText(ctx, text, PARAMS.CANVAS_WIDTH / 2 + 10, 20, PARAMS.CANVAS_WIDTH / 2 - 10);
    }

    setButton(ctx, text) {
        setBlackStroke(ctx);
        ctx.textAlign = "center";

        if (this.mouseBB.collide(this.buttonBB)) {
            setRedStroke(ctx);
        }
        ctx.fillText(text, PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 - 15);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 4 - 40, PARAMS.CANVAS_HEIGHT / 2 - 36, 80, 30);
    };
}
