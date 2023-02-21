class Itemsbag {
    constructor(game) {
        this.game = game;

        // display booleans
        this.game.casefileDisplay = false;
        this.sneakersDisplay = false;
        this.capeDisplay = false;
        this.clueOneDisplay = false;
        this.clueTwoDisplay = false;
        this.clueThreeDisplay = false;

        // items bounding boxes
        // to be added to
        this.casefileBB = new BoundingBox(60,60,100,50);

        // other bounding boxes
        this.exitBB = new BoundingBox(600 - 50, 650 - 45, 100, 50);
        this.mouseBB = new BoundingBox(0,0,1,1);
    };

    setBagConditions(casefileDisplay) {
        this.game.casefileDisplay = casefileDisplay;
    }

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            // show casefile
            if (this.mouseBB.collide(this.casefileBB)) {
                this.game.addEntityToTop(new CasefileChatbox(this.game));
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
        // basic items bag
        setWhiteStroke(ctx);
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        // change text color and text fill
        setBlackStroke(ctx);

        // exit
        if (this.mouseBB.collide(this.exitBB)) {
            setRedStroke(ctx);
        }
        ctx.fillText("EXIT", 600, 640);
        ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        // add items
        if (this.game.casefileDisplay) {
            if (this.mouseBB.collide(this.casefileBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("Case File", 60, 60);
            ctx.strokeRect(this.casefileBB.left, this.casefileBB.top, this.casefileBB.width, this.casefileBB.height);
        }
    };
}
