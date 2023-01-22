/*class CharacterTest {
    constructor(game) {
        this.game = game;

        // Get spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Sprite_BlueHair_Guy.png");
        this.animator = new Animator(this.spritesheet, 245, 3775, 800, 1065, 4, 0.25);

        this.animationIndex = 0;
        this.gameWindowDimension = 1050;

        this.startX = (2234 - this.gameWindowDimension) / 2;
        this.startY = (1074 - this.gameWindowDimension) / 2;

        this.x = (2234 - this.gameWindowDimension) / 2;
        this.y = (1074 - this.gameWindowDimension) / 2;
        this.speed = 100;

        // Store the animation types
        this.animations = [];
        this.getAnimations();

    };

    update() {
        //this.x += this.speed*this.game.clockTick;
        //if (this.x > 1024 / 4) this.x = -220;

        // Don't go off screen in positive x direction
        if (this. x > this.startX + this.gameWindowDimension) {
            this.x = this.startX + this.gameWindowDimension;
        }

        // Don't go off screen in negative x direction
        if (this.x < this.startX) {
            this.x = this.startX;
        }

        // Don't go off screen in positive y direction
        if (this.y > this.startY + this.gameWindowDimension) {
            this.y = this.startY + this.gameWindowDimension;
        }

        // Don't go off screen in negative y direction
        if (this.y < this.startY) {
            this.y = this.startY;
        }

        // Update on player control
        if (this.game.keys["d"] || this.game.keys["D"]) {
            this.x += this.speed * this.game.clockTick;
            this.index = 0;
        } else if (this.game.keys["a"] || this.game.keys["A"]) {
            this.x -= this.speed * this.game.clockTick;
            this.index = 1;
        } else if (this.game.keys["w"] || this.game.keys["W"]) {
            this.y -= this.speed * this.game.clockTick;
            this.index = 2;
        } else if (this.game.keys["s"] || this.game.keys["S"]) {
            this.y += this.speed * this.game.clockTick;
            this.index = 3;
        } else {

            // If the player is not pressing a key
            if (this.index === 3 || this.index === 6) {
                this.index = 0;
            } else if (this.index === 4) {
                this.index = 1;
            } else if (this.index === 5) {
                this.index = 2;
            }
        }
    };

    draw(ctx) {
        this.animations[this.animationIndex].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        //this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

    getAnimations() {
        // idle right and idle down
        this.animations[0] = new Animator(this.spritesheet, 245, 3775, 800, 1065, 1, 1000);

        // idle left
        this.animations[1] = new Animator(this.spritesheet, 245, 3775, 800, 1065, 1, 1000);

        // idle up
        this.animations[2] = new Animator(this.spritesheet, 245, 3775, 800, 1065, 1, 1000);

        // walk right
        this.animations[3] = new Animator(this.spritesheet, 245, 3775, 800, 1065, 1, 1000);

        // walk left
        this.animations[4] = new Animator(this.spritesheet, 245, 3775, 800, 1065, 1, 1000);

        // walk up
        this.animations[5] = new Animator(this.spritesheet, 245, 3775, 800, 1065, 1, 1000);

        // walk down
        this.animations[6] = new Animator(this.spritesheet, 245, 3775, 800, 1065, 1, 1000);
    }
}*/

// Test class
class CharacterTest {
    constructor(game) {
        this.game = game;

        // Get spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/sprite_boy_brown.png");
        this.animator = new Animator(this.spritesheet, 8, 650, 107, 210, 4, 0.01);

        this.animationIndex = 0;
        this.gameWindowDimensionX = 1024;
        this.gameWindowDimensionY = 768;

        this.startX = 0;
        this.startY = 0;

        this.x = 0;
        this.y = 0;
        this.speed = 200;

        // Store the animation types
        this.animations = [];
        this.getAnimations();

    };

    update() {

        // Don't go off screen in positive x direction
        if (this. x >= this.startX + this.gameWindowDimensionX) {
            this.x = this.startX + this.gameWindowDimensionX;
        }

        // Don't go off screen in negative x direction
        if (this.x <= this.startX) {
            this.x = this.startX;
        }

        // Don't go off screen in positive y direction
        if (this.y > this.startY + this.gameWindowDimensionY) {
            this.y = this.startY + this.gameWindowDimensionY;
        }

        // Don't go off screen in negative y direction
        if (this.y < this.startY) {
            this.y = this.startY;
        }

        // Update on player control


        // walk right
        if (this.game.keys["d"]) {
            this.x += this.speed * this.game.clockTick;
            this.index = 3;
        }
        // walk left
        else if (this.game.keys["a"]) {
            this.x -= this.speed * this.game.clockTick;
            this.index = 4;
        }
        // walk up
        else if (this.game.keys["w"]) {
            this.y -= this.speed * this.game.clockTick;
            this.index = 5;
        }
        // walk down
        else if (this.game.keys["s"]) {
            this.y += this.speed * this.game.clockTick;
            this.index = 6;
        }

        else {

            // If the player is not pressing a key

            // walking right or down then idle right/down
            if (this.index === 3 || this.index === 6) {
                this.index = 0;
            }
            // walking left then idle left
            else if (this.index === 4) {
                this.index = 1;
            }
            // walking up, then idle up
            else if (this.index === 5) {
                this.index = 2;
            }
        }
    };

    draw(ctx) {
        this.animations[this.animationIndex].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

    getAnimations() {
        // idle right and idle down
        this.animations[0] = new Animator(this.spritesheet, 8, 650, 107, 210, 4, 0.2);

        // idle left
        this.animations[1] = new Animator(this.spritesheet, 8, 650, 107, 210, 1, 0.2);

        // idle up
        this.animations[2] = new Animator(this.spritesheet, 8, 650, 107, 210, 4, 0.2);

        // walk right
        this.animations[3] = new Animator(this.spritesheet, 8, 650, 107, 210, 4, 0.2);

        // walk left
        this.animations[4] = new Animator(this.spritesheet, 8, 650, 107, 210, 4, 0.2);

        // walk up
        this.animations[5] = new Animator(this.spritesheet, 8, 650, 107, 210, 4, 0.2);

        // walk down
        this.animations[6] = new Animator(this.spritesheet, 8, 8, 107, 210, 4, 0.2);
    }
}