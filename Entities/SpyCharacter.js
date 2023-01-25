class SpyCharacter {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/sprite_girl_purple.png"), 8, 650, 124, 210, 4, 0.2);

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/sprite_girl_purple.png");

        this.x = 50;
        this.y = 0;

        this.direction = 0;
        this.state = 0;

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (let i = 0; i < 5; i++) { // four states
            this.animations.push([]);
            for (let j = 0; j < 5; j++) { // four directions
                this.animations[i].push([]);
            }
        }

        // state = 0 is the idle animation
        // 0, 1, 2, 3 are right, down, left, up
        this.animations[0][0] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[0][1] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[0][2] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[0][3] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);

        // state = 1 is the walking animation
        // 0, 1, 2, 3 are right, down, left, up
        this.animations[1][0] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[1][1] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[1][2] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[1][3] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);

        // state = 2 is the running animation
        // 0, 1, 2, 3 are right, down, left, up
        this.animations[2][0] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[2][1] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[2][2] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[2][3] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);

        // state = 3 is the sitting animation
        // 0, 1, 2, 3 are right, down, left, up
        this.animations[3][0] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[3][1] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[3][2] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
        this.animations[3][3] = new Animator(this.spritesheet, 8, 650, 124, 210, 4, 0.2);
    };

    update() {
        if (this.game.keys['w'] && !this.game.keys['s']) {
            this.direction = 3; // up
            this.state = 1; // walking
            this.y -= 4;
        } else if (this.game.keys['s'] && !this.game.keys['w']) {
            this.direction = 1; // down
            this.state = 1; // walking
            this.y += 4;
        }

        if (this.game.keys['d'] && !this.game.keys['a']) {
            this.direction = 0; // right
            this.state = 1; // walking
            this.x += 4;
        } else if (this.game.keys['a'] && !this.game.keys['d']) {
            this.direction = 2; // left
            this.state = 1; // walking
            this.x -= 4;
        }

        if (!this.game.keys['w'] && !this.game.keys['s'] && !this.game.keys['d'] && !this.game.keys['a']) {
            this.state = 3;
        }

        // stay within canvas bounds
        if(this.x > 700) this.x = 0;
        if(this.x < 0) this.x = 700;
        if(this.y > 700) this.y = 0;
        if(this.y < 0) this.y = 700;
    };
    draw(ctx) {
        this.animations[this.state][this.direction].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};