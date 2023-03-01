class Itemsbag {
    constructor(game) {
        this.game = game;

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
        setWhiteStroke(ctx);

        // view item box
        this.setViewItemBox(ctx, null);

        // item blurb box
        this.setItemBlurbBox(ctx, "Choose an item below.");

        // main items boxes
        ctx.fillStyle = "black";
        ctx.fillRect(0,PARAMS.CANVAS_HEIGHT / 2, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT / 2);
        setWhiteStroke(ctx);
        ctx.strokeRect(0,PARAMS.CANVAS_HEIGHT / 2, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT / 2);

        // individual item boxes
        // column 1
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 6 - 3, 525,120,40);
        // column 2
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 - 60, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 - 60, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 - 60, 525,120,40);
        // column 3
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        //ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, 525,120,40);

        ctx.fillStyle = "black";

        // column 1
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 6 - 3, 525,120,40);
        // column 2
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 - 60, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 - 60, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 - 60, 525,120,40);

        // column 3
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 40,120,40);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 114,120,40);
        //ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 6 - 3, 525,120,40);

        // reset text color
        setWhiteStroke(ctx);

        // place items in drawn boxes
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

    setViewItemBox(ctx, image, x, y, scaleX, scaleY) {
        // clear old image
        ctx.clearRect(0,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);

        // remake view box
        setBlackStroke(ctx);
        ctx.fillRect(0,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);

        // draw image
        if (image != null) {
            let img = image;
            ctx.drawImage(img, x, y, scaleX, scaleY);
        }
    };

    setItemBlurbBox(ctx, text) {
        // clear old text
        ctx.clearRect(PARAMS.CANVAS_WIDTH / 2,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);

        // remake blurb box
        setBlackStroke(ctx);
        ctx.fillRect(PARAMS.CANVAS_WIDTH / 2,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        setWhiteStroke(ctx);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2,0,PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);

        // add new text
        ctx.textAlign = "left";
        ctx.font = "Bold 20px Courier";
        wrapText(ctx, text, PARAMS.CANVAS_WIDTH / 2 + 10, 20, PARAMS.CANVAS_WIDTH / 2);
    };

    setButton(ctx, text) {
        setWhiteStroke(ctx);
        ctx.textAlign = "center";

        if (this.mouseBB.collide(this.buttonBB)) {
            setRedStroke(ctx);
        }
        ctx.fillText(text, PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 - 15);
        ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 + PARAMS.CANVAS_WIDTH / 4 - 40, PARAMS.CANVAS_HEIGHT / 2 - 36, 80, 30);
    };

    //
    // DRAW Helper Methods
    //

    // ITEMS
    // case file    flashlight    clue two
    // sneakers     rose          clue three
    // cape         clue one
    drawItems(ctx) {
        // add items according to booleans
        ctx.textAlign = "center";

        //
        // COL ONE ITEMS 1-3
        //

        // CASE FILE
        if (caseFileDisplay) {
            if (this.mouseBB.collide(this.casefileBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("Case File", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickCase) {
                this.setItemBlurbBox(ctx, "You have chosen the case file!                                      " +
                    "           This file was given to you at the beginning of the first level. It contains details " +
                    "pertinent to your case. Refer back to this file to refresh your memory on the details of your " +
                    "case.                                               " +
                    "Click the 'view' button to see the case file.");
                let img = ASSET_MANAGER.getAsset("./sprites/casefile_icon.jpg");
                this.setViewItemBox(ctx, img, PARAMS.CANVAS_WIDTH / 13, PARAMS.CANVAS_WIDTH / 30, 3 * 80, 3 * 100);
                this.setButton(ctx, "VIEW");
            }
        } else {
            ctx.fillText("---", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 65);
        }

        // reset text color
        setWhiteStroke(ctx);

        // SNEAKERS
        if (sneakerDisplay) {
            if (this.mouseBB.collide(this.sneakerBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("Sneakers", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 140);

            if (this.clickSneaker) {
                this.setItemBlurbBox(ctx, "You have chosen the sneakers! Wearing these will allow you " +
                    "the ability to run without having to press the 'shift' key.   Use the direction keys " +
                    "to move with the new applied run velocity.             Be aware that the 'shift' key " +
                    "will be disabled if you are wearing sneakers. So, you can't go any faster than running. " +
                    "To take off the sneakers, click the 'apply' button again.");
                this.setViewItemBox(ctx, null);  // show sneaker img
                this.setButton(ctx, "APPLY");
            }
        } else {
            ctx.fillText("---", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 140);
        }

        // reset text color
        setWhiteStroke(ctx);

        // CAPE
        if (capeDisplay) {
            if (this.mouseBB.collide(this.capeBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("Cape", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 210);

            if (this.clickCape) {
                this.setItemBlurbBox(ctx, "You have chosen the cape! Wearing this item will help you evade " +
                    "the guards. You will not be visible. So, if you are within the sight of a guard, you won't " +
                    "have to worry about being seen and caught. However, just because you're invisible doesn't mean " +
                    "you can't bump into things! So, you can still be caught if you collide with a guard.       " +
                    "Click the 'apply' button to take the cape on and off.");
                this.setViewItemBox(ctx, "");  // show cape img
                this.setButton(ctx, "APPLY");
            }
        } else {
            ctx.fillText("---", PARAMS.CANVAS_WIDTH / 4, PARAMS.CANVAS_HEIGHT / 2 + 210);
        }


        //
        // COL TWO ITEMS 4-6
        //

        // reset text color
        setWhiteStroke(ctx);

        // FLASHLIGHT
        if (flashlightDisplay) {
            if (this.mouseBB.collide(this.flashlightBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("Flashlight", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickClueOne) {
                this.setItemBlurbBox(ctx, "You have chosen the flashlight!");
                this.setViewItemBox(ctx, "To be implemented clue img");  // show clue
            }
        } else {
            ctx.fillText("---", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2 + 65);
        }

        // reset text color
        setWhiteStroke(ctx);

        // ROSE
        if (roseDisplay) {
            if (this.mouseBB.collide(this.roseBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("Rose", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickClueTwo) {
                this.setItemBlurbBox(ctx, "You have chosen the rose!");
                this.setViewItemBox(ctx, "");  // show rose
            }
        } else {
            ctx.fillText("---", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2 + 140);
        }

        // reset text color
        setWhiteStroke(ctx);

        // CLUE ONE
        if (clueOneDisplay) {
            if (this.mouseBB.collide(this.clueOneBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("Clue One", PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickClueOne) {
                this.setItemBlurbBox(ctx, "You have chosen the lighter fluid! This is your first found clue. " +
                    "                                           It was hidden and disguised as water...strange. Even " +
                    "though, this is a weird clue, it still doesn't prove Mr. Billionaire did the crime.             " +
                    "                             There are more clues to be found, so get back out there, Agent Spy!");
                this.setViewItemBox(ctx, "To be implemented clue img");  // show clue
            }
        } else {
            ctx.fillText("---", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2 + 210);
        }

        //
        // COL THREE ITEMS 7-8
        //

        // reset text color
        setWhiteStroke(ctx);

        // CLUE TWO
        if (clueTwoDisplay) {
            if (this.mouseBB.collide(this.clueTwoBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("Clue Two", PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickClueTwo) {
                this.setItemBlurbBox(ctx, "");
                this.setViewItemBox(ctx, "To be implemented clue img");  // show clue
            }
        } else {
            ctx.fillText("---", (3 * PARAMS.CANVAS_WIDTH) / 4, PARAMS.CANVAS_HEIGHT / 2 + 65);
        }

        // reset text color
        setWhiteStroke(ctx);

        // CLUE THREE
        if (clueThreeDisplay) {
            if (this.mouseBB.collide(this.clueThreeBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("Clue Three", PARAMS.CANVAS_WIDTH / 6 - 3, PARAMS.CANVAS_HEIGHT / 2 + 65);

            if (this.clickClueThree) {
                this.setItemBlurbBox(ctx, "");
                this.setViewItemBox(ctx, "To be implemented clue img");  // show clue
            }
        } else {
            ctx.fillText("---", (3 * PARAMS.CANVAS_WIDTH) / 4, PARAMS.CANVAS_HEIGHT / 2 + 140);
        }
    };
};
