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
        this.mouseBB = new BoundingBox(0,0,1,1);
        this.casefileBB = new BoundingBox(60,60,100,50);
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            // show casefile
            if (this.mouseBB.collide(this.casefileBB)) {
                this.game.addEntityToTop(new CasefileChatbox(this.game));
            }
            // to be implemented
            /*else {
                if (this.mouseBB.collide()) {
                    // do something

                }
            }*/

            this.game.click = null;
        }

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {
        // basic items bag
        setWhiteStroke(ctx);
        ctx.fillRect(50,50,500,500);

        // change text color and fill
        setBlackStroke(ctx);

        // add items
        if (this.game.casefileDisplay) {
            console.log("yup")
            if (this.mouseBB.collide(this.casefileBB)) {
                setRedStroke(ctx);
            }
            ctx.fillText("Casefile", 60, 60);
            ctx.strokeRect(this.casefileBB.x, this.casefileBB.y, this.casefileBB.width, this.casefileBB.height);
        }
    };
}
