class Chatbox {
    constructor(game, text) {
        this.game = game;
        this.text = text;

        this.chatboxX = 0;
        this.chatboxY = 500;
        this.chatboxW;
        this.chatboxH;


        this.setVisible = false;

    };

    update() {

    };

    draw(ctx) {
        // rectangle at bottom of screen, black background, white text
        // get text from constructor
        if (this.setVisible) {
            ctx.strokeStyle = "Black";
            ctx.fillStyle = "Black";
            ctx.lineWidth = 4;
            ctx.textAlign = "left";
            ctx.font = "Bold 20px Courier";

            // HUD box
            ctx.strokeRect(this.chatboxX, this.chatboxY, 700, 200);
            ctx.fillRect(this.chatboxX, this.chatboxY, 700, 200);

            //ctx.strokeStyle = "White";
            ctx.fillStyle = "White";

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