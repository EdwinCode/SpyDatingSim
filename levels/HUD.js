class HUD {
    constructor(game, itemsBag) {
        this.game = game;
        this.itemsBag = itemsBag;

        this.levelText = "";
        this.textColor = "";

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.butlerBB = new BoundingBox(545,5,60,54);
        this.itemsBagBB = new BoundingBox(615,5,60,54);
    };

    setText(text) {
        this.levelText = text;
    };

    setTextColor(color) {
        this.textColor = color;
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            // new Chatbox with Butler hints
            if (this.mouseBB.collide(this.butlerBB)) {
                this.hintText = loadText(this.game.currLvl, "butler", this.game.chatState);
                this.chatbox = new Chatbox(this.game, this.hintText);
                this.game.addEntityToTop(this.chatbox);
                this.chatbox.setVisible = true;
            }

            // new items bag
            else if (this.mouseBB.collide(this.itemsBagBB)) {
                this.itemsBag = new Itemsbag(this.game);
                this.itemsBag.setCaseFileDisplay(true);
                this.game.addEntityToTop(this.itemsBag);
            }
            // reset user click
            this.game.click = null;
        }

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {
        setBlackStroke(ctx);
        ctx.lineWidth = 3;
        ctx.textAlign = "left";
        ctx.font = "Bold 20px Courier";

        ctx.strokeStyle = this.textColor;
        ctx.fillStyle = this.textColor;

        // level
        ctx.fillText(this.levelText, 2, 15);

        ctx.fillStyle = 'gray';

        // butler
        if (this.mouseBB.collide(this.butlerBB)) {
            ctx.fillStyle = "rgb(93,93,93)";
        }
        ctx.strokeRect(this.butlerBB.left, this.butlerBB.top, this.butlerBB.width, this.butlerBB.height);
        ctx.fillRect(this.butlerBB.left, this.butlerBB.top, this.butlerBB.width, this.butlerBB.height);
        this.butlerIcon = ASSET_MANAGER.getAsset("./sprites/alfred.png")
        ctx.drawImage(this.butlerIcon, 556, 6, 3 * 13, 3 * 18);

        ctx.fillStyle = 'gray';

        // suitcase
        if (this.mouseBB.collide(this.itemsBagBB)) {
            ctx.fillStyle = "rgb(93,93,93)";
        }
        ctx.strokeRect(this.itemsBagBB.left, this.itemsBagBB.top, this.itemsBagBB.width, this.itemsBagBB.height);
        ctx.fillRect(this.itemsBagBB.left, this.itemsBagBB.top, this.itemsBagBB.width, this.itemsBagBB.height);
        this.butlerIcon = ASSET_MANAGER.getAsset("./sprites/suitcase.png")
        ctx.drawImage(this.butlerIcon, 615, 5, 3 * 20, 3 * 18);

        setBlackStroke(ctx);
    };
}