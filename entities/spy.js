class Spy {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/girluser.png");
        if (this.game.male) {
            // currently, the sprites differ in width, so might need to change them to match
            // because the sprite_boy_brown is not animating properly
            this.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/boyuser.png");
        }

        this.width = 16 * PARAMS.BLOCKWIDTH;
        this.height = 26 * PARAMS.BLOCKWIDTH;

        this.direction = 0;
        this.state = 0;

        this.x = x;
        this.y = y;
        this.velocity = 300;

        this.spotted = false;

        this.stephInteract = false;
        this.richieInteract = false;
        this.billionaireInteract = false;


        // use for decision tree
        this.game.chatState = 0;
        this.text = "";

        this.updateBB();

        this.animations = [];
        this.loadAnimations();
        this.hideChat = true;
    };

    loadAnimations() {
        for (let i = 0; i < 4; i++) { // three states
            this.animations.push([]);
            for (let j = 0; j < 5; j++) { // four directions
                this.animations[i].push([]);
            }
        }

        // state = 0 is the idle animation
        // 0, 1, 2, 3 are right, down, left, up
        this.animations[0][0] = new Animator(this.spritesheet, 0, 648, 120, 208, 1, 0.2);
        this.animations[0][1] = new Animator(this.spritesheet, 0, 0, 128, 208, 1, 0.2);
        this.animations[0][2] = new Animator(this.spritesheet, 0, 432, 120, 208, 1, 0.2);
        this.animations[0][3] = new Animator(this.spritesheet, 0, 216, 120, 208, 1, 0.2);

        // state = 1 is the walking animation
        // 0, 1, 2, 3 are right, down, left, up
        this.animations[1][0] = new Animator(this.spritesheet, 0, 648, 120, 208, 4, 0.2);
        this.animations[1][1] = new Animator(this.spritesheet, 0, 0, 128, 208, 4, 0.2);
        this.animations[1][2] = new Animator(this.spritesheet, 0, 432, 120, 208, 4, 0.2);
        this.animations[1][3] = new Animator(this.spritesheet, 0, 216, 120, 208, 4, 0.2);


        // state = 2 is the running animation
        // 0, 1, 2, 3 are right, down, left, up
        this.animations[2][0] = new Animator(this.spritesheet, 0, 648, 120, 208, 4, 0.2);
        this.animations[2][1] = new Animator(this.spritesheet, 0, 0, 128, 208, 4, 0.2);
        this.animations[2][2] = new Animator(this.spritesheet, 0, 432, 120, 208, 4, 0.2);
        this.animations[2][3] = new Animator(this.spritesheet, 0, 216, 120, 208, 4, 0.2);

    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, this.width, this.height);

    };

    update() {
        //movement
        if (this.spotted === false) {
            if (!this.game.up && !this.game.down && !this.game.left && !this.game.right) {
                this.state = 0; // idle
            } else {
                if (this.game.right && this.game.left && this.game.up && this.game.down) {
                    this.state = 0; // idle
                } else if (this.game.up && this.game.run && !this.game.down) {
                    this.direction = 3; // up
                    this.state = 2; // running
                    this.y -= this.velocity* 2 *this.game.clockTick;
                } else if (this.game.up && !this.game.down) {
                    this.direction = 3; // up
                    this.state = 1; // walking
                    this.y -= this.velocity*this.game.clockTick;
                } else if (this.game.down && this.game.run && !this.game.up) {
                    this.direction = 1; // down
                    this.state = 2; // running
                    this.y += this.velocity* 2 *this.game.clockTick;
                } else if (this.game.down && !this.game.up) {
                    this.direction = 1; // down
                    this.state = 1; // walking
                    this.y += this.velocity*this.game.clockTick;
                } else if (this.game.up && this.game.down) {
                    this.direction = 3; // up
                    this.state = 0; // idle
                }

                if (this.game.right && this.game.left && this.game.up && this.game.down) {
                    this.state = 0; // idle
                } else if (this.game.right && this.game.run && !this.game.left) {
                    this.direction = 0; // right
                    this.state = 2; // running
                    this.x += this.velocity* 2 *this.game.clockTick;
                } else if (this.game.right && !this.game.left) {
                    this.direction = 0; // right
                    this.state = 1; // walking
                    this.x += this.velocity*this.game.clockTick;
                } else if (this.game.left && this.game.run && !this.game.right) {
                    this.direction = 2; // left
                    this.state = 2; // running
                    this.x -= this.velocity* 2 *this.game.clockTick;
                } else if (this.game.left && !this.game.right) {
                    this.direction = 2; // left
                    this.state = 1; // walking
                    this.x -= this.velocity*this.game.clockTick;
                } else if (this.game.right && this.game.left && this.game.up) {
                    this.direction = 3; // up
                    this.state = 1; // walking
                } else if (this.game.right && this.game.left && this.game.down) {
                    this.direction = 1; // down
                    this.state = 1; // walking
                } else if (this.game.right && this.game.left) {
                    this.direction = 0; // right
                    this.state = 0; // idle
                }
            }

        } else {
            // Do nothing
        }

        //Update position
        this.updateBB();

        //collision
        var that = this;
        this.game.entities.forEach(function (entity) {
            //if the entity has a bounding box and we collided with it
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof  Furniture || entity instanceof NPC) {

                    if(entity.BB.right <= (that.lastBB.left+20)){ // from right
                        that.x += entity.BB.right - that.lastBB.left;
                    }
                    else if(entity.BB.left >= (that.lastBB.right-20)){ // from left
                        that.x -= that.lastBB.right - entity.BB.left;
                    }
                    else if(entity.BB.bottom <= (that.lastBB.top+20)){ //from below
                        that.y += entity.BB.bottom - that.lastBB.top;
                    }
                    else if(entity.BB.top >= (that.lastBB.bottom-20)){ // from above
                        that.y -= that.lastBB.bottom - entity.BB.top;
                    }
                    that.updateBB();
                }

                // LOSE GAME if collide with Guard
                else if (entity instanceof Guard) {
                    //that.gameOver = true;
                    that.game.camera.loadLevel(loseScreen);
                }
            }

            // collide with guard sight
            else if (entity.sightBB && that.BB.collide(entity.sightBB)) {
                if (entity instanceof Guard) {
                    entity.spottedSpy();
                    that.state = 0; // idle
                    that.spotted = true;
                }
            }

            //
            // INTERACTIONS
            //

            // trigger cutscene
            if (that.game.currLvl.label === "Phase 1-1" && that.game.chatState === 4 && that.chatbox.setVisible === false) {
                that.game.camera.loadLevel(levelOneCutscene);
            }

            // win game
            if (that.game.currLvl.label === "Phase 1-2" && that.game.chatState === 4 && that.chatbox.setVisible === false) {
                that.game.camera.loadLevel(winScreen);
            }

            // reset variable
            that.hideChat = true;

            if (entity instanceof Richie) {
                if (entity.interactBB && that.BB.collide(entity.interactBB)) {
                    console.log("R collision!!");
                    that.richieInteract = true;
                    if (that.game.interact && that.hideChat) {
                        that.game.interact = false;
                        that.hideChat = false;

                        that.text = loadText(that.game.currLvl, "richie", that.game.chatState);
                        that.game.chatState = that.updateState(that.game.currLvl, "richie", that.game.chatState);

                        that.chatbox = new Chatbox(that.game, that.text);
                        that.game.addEntityToTop(that.chatbox);
                        that.chatbox.setVisible = true;
                    }
                } else {
                    that.richieInteract = false;
                }
            }

            else if (entity instanceof Billionaire) {
                if (entity.interactBB && that.BB.collide(entity.interactBB)) {
                    console.log("B collision!!");
                    that.billionaireInteract = true;
                    if (that.game.interact && that.hideChat) {
                        that.game.interact = false;
                        that.hideChat = false;

                        that.text = loadText(that.game.currLvl, "billionaire", that.game.chatState);
                        that.game.chatState = that.updateState(that.game.currLvl, "billionaire", that.game.chatState);

                        that.chatbox = new Chatbox(that.game, that.text);
                        that.game.addEntityToTop(that.chatbox);
                        that.chatbox.setVisible = true;
                    }
                } else {
                    that.billionaireInteract = false;
                }
            }

            else if (entity instanceof Stephanie) {
                if (entity.interactBB && that.BB.collide(entity.interactBB)) {
                    console.log("S collision!!");
                    that.stephInteract = true;
                    if (that.game.interact && that.hideChat) {
                        that.game.interact = false;
                        that.hideChat = false;

                        that.text = loadText(that.game.currLvl, "stephanie", that.game.chatState);
                        that.game.chatState = that.updateState(that.game.currLvl, "stephanie", that.game.chatState);

                        that.chatbox = new Chatbox(that.game, that.text);
                        that.game.addEntityToTop(that.chatbox);
                        that.chatbox.setVisible = true;
                    }
                } else {
                    that.stephInteract = false;
                }
            }

            that.updateBB();
        });
    };


    draw(ctx) {
        this.animations[this.state][this.direction].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);

        // interact message
        if (this.stephInteract || this.billionaireInteract || this.richieInteract) {
            setBlackStroke(ctx);
            ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 - 85, PARAMS.CANVAS_HEIGHT - 55, 170,40);
            ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 - 85, PARAMS.CANVAS_HEIGHT - 55, 170,40);

            ctx.textAlign = "center";
            setWhiteStroke(ctx);
            ctx.fillText("Can Interact", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT - 30);
        }

        // debug
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.font = "Bold 20px Courier";
            ctx.textAlign = "left";
            ctx.fillText("x: " + this.x / PARAMS.BLOCKWIDTH, this.BB.x - this.game.camera.x, (this.BB.y - 25) - this.game.camera.y);
            ctx.fillText("y: " + this.y / PARAMS.BLOCKWIDTH, this.BB.x - this.game.camera.x, (this.BB.y - 10) - this.game.camera.y);


            ctx.lineWidth = 4;
            ctx.strokeStyle = 'red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };

    /*// for character interaction decision tree
    loadText(level, entity, chatState) {
        // stephanie
        if (entity === "stephanie") {
            this.text = level.stephanie[chatState].message;
        }

        // richie
        else if (entity === "richie") {
            this.text = level.richie[chatState].message;
        }

        // billionaire
        else if (entity === "billionaire") {
            this.text = level.billionaire[chatState].message;
        }

        // butler
        else if (entity === "butler") {
            this.text = level.butler[chatState].message;
        }
    };*/

    updateState(level, entity, chatState) {
        // stephanie
        if (entity === "stephanie") {
            if (level.stephanie[chatState].stateIncr === "true") {
                return chatState + 1;
            } else {
                return chatState;
            }
        }

        // richie
        else if (entity === "richie") {
            if (level.richie[chatState].stateIncr === "true") {
                return chatState + 1;
            } else {
                return chatState;
            }

        }

        // billionaire
        else if (entity === "billionaire") {
            console.log("billionaire");
            if (level.billionaire[chatState].stateIncr === "true") {
                return chatState + 1;
            } else {
                return chatState;
            }
        }
    };
};
