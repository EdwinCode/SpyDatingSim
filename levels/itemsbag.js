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
        this.sneakerBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        this.capeBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 6 - 3, 525,120,40);
        this.clueOneBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        this.clueTwoBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        this.clueThreeBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, 525,120,40);

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

                else if (this.clickSneaker) {
                    // apply sneaker if not applied
                    // remove sneaker application if applied
                }

                else if (this.clickCape) {
                    // apply sneaker if not applied
                    // remove sneaker application if applied
                }
            }

            // show casefile
            if (this.mouseBB.collide(this.casefileBB)) {
                this.clickCase = true;
                this.clickSneaker = false;
                this.clickCape = false;
                this.clickClueOne = false;
                this.clickClueTwo = false;
                this.clickClueThree = false;
            }

            // show sneaker
            if (this.mouseBB.collide(this.sneakerBB)) {
                this.clickCase = false
                this.clickSneaker = true;
                this.clickCape = false;
                this.clickClueOne = false;
                this.clickClueTwo = false;
                this.clickClueThree = false;
            }

            // show cape
            if (this.mouseBB.collide(this.capeBB)) {
                this.clickCase = false;
                this.clickSneaker = false;
                this.clickCape = true;
                this.clickClueOne = false;
                this.clickClueTwo = false;
                this.clickClueThree = false;
            }

            // show clue one
            if (this.mouseBB.collide(this.clueOneBB)) {
                this.clickCase = false;
                this.clickSneaker = false;
                this.clickCape = false;
                this.clickClueOne = true;
                this.clickClueTwo = false;
                this.clickClueThree = false;
            }

            // show clue two
            if (this.mouseBB.collide(this.clueTwoBB)) {
                this.clickCase = false;
                this.clickSneaker = false;
                this.clickCape = false;
                this.clickClueOne = false;
                this.clickClueTwo = true;
                this.clickClueThree = false;
            }

            // show clue three
            if (this.mouseBB.collide(this.clueThreeBB)) {
                this.clickCase = false;
                this.clickSneaker = false;
                this.clickCape = false;
                this.clickClueOne = false;
                this.clickClueTwo = false;
                this.clickClueThree = true;
            }

            // close out of the items bag
            if (this.mouseBB.collide(this.exitBB)) {
                this.removeFromWorld = true;
            }

            // reset user click
            this.game.click = null;
        }

        // update mouse location
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

        this.drawItems(ctx);

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

    //
    // DRAW Helper Methods
    //

    drawItems(ctx) {
        // add items according to booleans
        ctx.textAlign = "center";

        // CASE FILE
        if (this.game.casefileDisplay) {
            if (this.mouseBB.collide(this.casefileBB)) {
                setWhiteStroke(ctx);
            }
            ctx.fillText("Case File", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickCase) {
                this.setItemBlurbBox(ctx, "You have chosen the case file. This file provides you with " +
                    "the pertinent information for your case.");
                this.setViewItemBox(ctx, "");  // show nothing
                this.setButton(ctx, "VIEW");
            }
        } else {
            ctx.fillText("---", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 65);
        }

        // reset text color
        setBlackStroke(ctx);

        // SNEAKERS
        if (this.game.sneakerDisplay) {
            if (this.mouseBB.collide(this.casefileBB)) {
                setWhiteStroke(ctx);
            }
            ctx.fillText("Sneakers", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 140);

            if (this.clickSneaker) {
                this.setItemBlurbBox(ctx, "");
                this.setViewItemBox(ctx, "To be implemented sneaker img");  // show sneaker img
                this.setButton(ctx, "APPLY");
            }
        } else {
            ctx.fillText("---", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 140);
        }

        // reset text color
        setBlackStroke(ctx);

        // CAPE
        if (this.game.capeDisplay) {
            if (this.mouseBB.collide(this.casefileBB)) {
                setWhiteStroke(ctx);
            }
            ctx.fillText("Cape", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 210);

            if (this.clickCape) {
                this.setItemBlurbBox(ctx, "");
                this.setViewItemBox(ctx, "To be implemented cape img");  // show cape img
                this.setButton(ctx, "APPLY");
            }
        } else {
            ctx.fillText("---", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 210);
        }

        // reset text color
        setBlackStroke(ctx);

        // CLUE ONE
        if (this.game.clueOneDisplay) {
            if (this.mouseBB.collide(this.casefileBB)) {
                setWhiteStroke(ctx);
            }
            ctx.fillText("Clue One", PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickClueOne) {
                this.setItemBlurbBox(ctx, "");
                this.setViewItemBox(ctx, "To be implemented clue img");  // show clue
            }
        } else {
            ctx.fillText("---", (3 * PARAMS.CANVAS_WIDTH) / 4, PARAMS.CANVAS_HEIGHT / 2 + 65);
        }

        // reset text color
        setBlackStroke(ctx);

        // CLUE TWO
        if (this.game.clueTwoDisplay) {
            if (this.mouseBB.collide(this.casefileBB)) {
                setWhiteStroke(ctx);
            }
            ctx.fillText("Clue Two", PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickClueTwo) {
                this.setItemBlurbBox(ctx, "");
                this.setViewItemBox(ctx, "To be implemented clue img");  // show clue
            }
        } else {
            ctx.fillText("---", (3 * PARAMS.CANVAS_WIDTH) / 4, PARAMS.CANVAS_HEIGHT / 2 + 140);
        }

        // reset text color
        setBlackStroke(ctx);

        // CLUE THREE
        if (this.game.clueThreeDisplay) {
            if (this.mouseBB.collide(this.casefileBB)) {
                setWhiteStroke(ctx);
            }
            ctx.fillText("Clue Three", PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickClueThree) {
                this.setItemBlurbBox(ctx, "");
                this.setViewItemBox(ctx, "To be implemented clue img");  // show clue
            }
        } else {
            ctx.fillText("---", (3 * PARAMS.CANVAS_WIDTH) / 4, PARAMS.CANVAS_HEIGHT / 2 + 210);
        }
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
