class Chatbox {
    constructor(game, text) {
        this.game = game;
        this.text = text;
        this.textLength = text.length;

        this.chatboxX = 0;
        this.chatboxY = 500;

        this.setVisible = false;

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.exitBB = new BoundingBox(600 - 50, 650 - 45, 100, 50);
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // exit chat box
           if (this.mouseBB.collide(this.exitBB)) {
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
            ctx.fillText("EXIT", 600, 640);
            ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

            // npc text
            ctx.fillText(this.text, this.chatboxX + 10, this.chatboxY + 20);
        }
    };
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

class HintChat {
    constructor(game, level) {
        this.game = game;
        this.level = level;

        // determine which hint to give based on character interaction
        this.numItems = 0;

        this.hints = [];
        this.loadHints();
        //this.hideHints = true;
    };

    loadHints() {
        // jagged array
        for (let i = 0; i < 2; i++) { // one level, two parts
            this.hints.push([]);
        }

        for (let j = 0; j < 2; j++) { // two hints for lvl 1 pt 1
            this.hints[1].push([]);
        }

        for (let j = 0; j < 3; j++) { // three hints for lvl 1 pt 2
            this.hints[1].push([]);
        }

        // level one, part one hints
        this.hints[0][0] = "Talk to Mr.Billionaire.";
        this.hints[0][1] = "Talk to Stephanie and Richie.";

        // level one, part two hints
        this.hints[1][0] = "Look in the trashcan.";
        this.hints[1][1] = "Look at the table surfaces.";
        this.hints[1][2] = "Look in the cabinets near the wet table.";
    };

    update() {

    };

    draw(ctx) {

    };
};