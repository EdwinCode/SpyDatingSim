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
        this.velocity = 550;

        this.spotted = false;

        //INTERACTIONS
        this.stephInteract = false;
        this.richieInteract = false;
        this.billionaireInteract = false;
        this.kitchenWorkerInteract = false;
        this.gardenerInteract = false;
        this.guardInteract = false;
        this.carMechanicInteract = false;

        //OBJECT INTERACTIONS
        this.billionaireStatueInteract = false;
        this.fridgeInteract = false;
        this.monitorInteract = false;

        //ENDING INTERACTION
        this.doorInteract = false;

        //ITEMS
        this.toolboxInteract = false;
        this.greyCarInteract = false;
        this.paintingTwoInteract = false;
        this.waterTankInteract = false;


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
        this.BB = new BoundingBox(this.x, this.y + 16 * PARAMS.BLOCKWIDTH, this.width - PARAMS.BLOCKWIDTH, this.height - 16 * PARAMS.BLOCKWIDTH);

    };

    update() {
        //movement
        if (!Chatbox.OPEN) {
            if (this.spotted === false) {
                if (!this.game.up && !this.game.down && !this.game.left && !this.game.right) {
                    this.state = 0; // idle
                } else {
                    if (this.game.right && this.game.left && this.game.up && this.game.down) {
                        this.state = 0; // idle
                    } else if (this.game.up && this.game.run && !this.game.down) {
                        this.direction = 3; // up
                        this.state = 2; // running
                        this.y -= this.velocity * 1.5 * this.game.clockTick * PARAMS.SCALE;
                    } else if (this.game.up && !this.game.down) {
                        this.direction = 3; // up
                        this.state = 1; // walking
                        this.y -= this.velocity * this.game.clockTick * PARAMS.SCALE;
                    } else if (this.game.down && this.game.run && !this.game.up) {
                        this.direction = 1; // down
                        this.state = 2; // running
                        this.y += this.velocity * 1.5 * this.game.clockTick * PARAMS.SCALE;
                    } else if (this.game.down && !this.game.up) {
                        this.direction = 1; // down
                        this.state = 1; // walking
                        this.y += this.velocity * this.game.clockTick * PARAMS.SCALE;
                    } else if (this.game.up && this.game.down) {
                        this.direction = 3; // up
                        this.state = 0; // idle
                    }

                    if (this.game.right && this.game.left && this.game.up && this.game.down) {
                        this.state = 0; // idle
                    } else if (this.game.right && this.game.run && !this.game.left) {
                        this.direction = 0; // right
                        this.state = 2; // running
                        this.x += this.velocity * 1.5 * this.game.clockTick * PARAMS.SCALE;
                    } else if (this.game.right && !this.game.left) {
                        this.direction = 0; // right
                        this.state = 1; // walking
                        this.x += this.velocity * this.game.clockTick * PARAMS.SCALE;
                    } else if (this.game.left && this.game.run && !this.game.right) {
                        this.direction = 2; // left
                        this.state = 2; // running
                        this.x -= this.velocity * 1.5 * this.game.clockTick * PARAMS.SCALE;
                    } else if (this.game.left && !this.game.right) {
                        this.direction = 2; // left
                        this.state = 1; // walking
                        this.x -= this.velocity * this.game.clockTick * PARAMS.SCALE;
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
        }

        //Update position
        this.updateBB();

        //collision
        var that = this;
        this.game.entities.forEach(function (entity) {
            //if the entity has a bounding box and we collided with it
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof  Furniture || entity instanceof NPC) {

                    if(that.lastBB.bottom - 5 * PARAMS.BLOCKWIDTH <= entity.BB.top && that.game.down){ // from above
                        that.y = entity.BB.top - that.height;
                    }
                    else if(that.lastBB.top + 5 * PARAMS.BLOCKWIDTH >= entity.BB.bottom && that.game.up){ // from below
                        that.y += (entity.BB.bottom - that.lastBB.top);
                    }
                    else if(that.lastBB.left + 5 * PARAMS.BLOCKWIDTH >= entity.BB.right && that.game.left){ //from right
                        that.x += (entity.BB.right - that.lastBB.left);
                    }
                    else if(that.lastBB.right - 5 * PARAMS.BLOCKWIDTH <= entity.BB.left && that.game.right){ // from left
                        that.x = entity.BB.left - that.width;
                    }
                    that.updateBB();
                }

                // LOSE GAME if collide with Guard
                else if (entity instanceof Guard) {
                    PARAMS.IMMUNITY = document.getElementById("immunity").checked;

                    //guards are harmless
                    if (that.game.currLvl === levelOne1) {
                        if(that.lastBB.bottom - 5 * PARAMS.BLOCKWIDTH <= entity.BB.top && that.game.down){ // from above
                            that.y = entity.BB.top - that.height;
                        }
                        else if(that.lastBB.top + 5 * PARAMS.BLOCKWIDTH >= entity.BB.bottom && that.game.up){ // from below
                            that.y += (entity.BB.bottom - that.lastBB.top);
                        }
                        else if(that.lastBB.left + 5 * PARAMS.BLOCKWIDTH >= entity.BB.right && that.game.left){ //from right
                            that.x = entity.BB.right;
                        }
                        else if(that.lastBB.right - 5 * PARAMS.BLOCKWIDTH <= entity.BB.left && that.game.right){ // from left
                            that.x = entity.BB.left - that.width;
                        }
                        that.updateBB();
                    } else if (PARAMS.IMMUNITY) {
                        // do nothing
                    } else {
                        that.game.camera.loadLevel(loseScreen);
                    }
                }
            }

            // collide with guard sight
            if (entity.sightBB && that.BB.collide(entity.sightBB)) {
                if (entity instanceof Guard) {

                    PARAMS.IMMUNITY = document.getElementById("immunity").checked;

                    //guards are harmless
                    if (that.game.currLvl === levelOne1) {
                        // do nothing
                    } else if (PARAMS.IMMUNITY) {
                        // do nothing
                    } else {
                        entity.spottedSpy();

                        if (entity.hasExclamation === false) {
                            that.game.addEntityToTop(new ExclamationEmote(that.game, entity, entity.x, entity.y));
                            entity.hasExclamation = true;
                        }
                        that.state = 0; // idle
                        that.spotted = true;
                    }
                }
            }

            //ENDING INTERACTION
            if (entity instanceof Door) {

                //only interactable if all 3 clues found
                if (clueOneDisplay && clueTwoDisplay && clueThreeDisplay) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                        that.noInteract = false;
                        that.doorInteract = true;


                        if (that.game.interact && that.hideChat) {

                            // WIN game
                            that.game.camera.loadLevel(endingPart1Cutscene);
                            that.game.savedTime = that.game.phase2Timer.time;


                            // that.game.interact = false;
                            // that.hideChat = false;
                            //
                            // that.text = loadText(that.game.currLvl, "door", that.game.chatState);
                            // that.image = loadImage(that.game.currLvl, "billionaireStatue", that.game.chatState);
                            // that.game.chatState = that.updateState(that.game.currLvl, "billionaireStatue", that.game.chatState);
                            //
                            // that.spritesheet = ASSET_MANAGER.getAsset("./sprites/blackbox.png");
                            //
                            // that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, true);
                            // that.game.addEntityToTop(that.chatbox);
                            // that.chatbox.setVisible = true;
                            //
                            // //TO PAUSE THE GAME
                            // Chatbox.OPEN = true;
                        }
                    } else {
                        that.doorInteract = false;
                        that.noInteract = true;
                    }
                }
            }

            //
            // ITEMS
            //

            if (!(clueOneDisplay && clueTwoDisplay && clueThreeDisplay)) {

                if (entity instanceof Toolbox) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {
                        that.toolboxInteract = true;
                        if (that.game.interact && that.hideChat) {
                            that.game.interact = false;
                            that.hideChat = false;

                            that.text = loadText(that.game.currLvl, "toolbox", that.game.chatState);
                            that.image = loadImage(that.game.currLvl, "toolbox", that.game.chatState);
                            that.game.chatState = that.updateState(that.game.currLvl, "toolbox", that.game.chatState);

                            that.spritesheet = ASSET_MANAGER.getAsset("./sprites/blackbox.png");

                            that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, false);
                            that.game.addEntityToTop(that.chatbox);
                            that.chatbox.setVisible = true;

                            //TO PAUSE THE GAME
                            Chatbox.OPEN = true;


                            if (that.game.chatState > 2) {
                                //Flashlight chatbox
                                if (!flashlightDisplay) {
                                    that.game.addEntityToTop(new ItemsChatbox(that.game, ASSET_MANAGER.getAsset("./sprites/flashlight.png"), 0, 0, 612, 272, PARAMS.CANVAS_WIDTH / 3.5, PARAMS.CANVAS_WIDTH / 3, 76.5 * PARAMS.BLOCKWIDTH, 34 * PARAMS.BLOCKWIDTH));
                                }
                                flashlightDisplay = true;
                            }

                        }
                    } else {
                        that.toolboxInteract = false;
                    }

                }

                if (that.game.camera.currentLevel === levelOne2) {
                    if (entity instanceof WaterTank) {
                        if (entity.interactBB && that.BB.collide(entity.interactBB)) {
                            that.waterTankInteract = true;
                            if (that.game.interact && that.hideChat) {
                                that.game.interact = false;
                                that.hideChat = false;

                                that.text = loadText(that.game.currLvl, "waterTank", that.game.chatState);
                                that.image = loadImage(that.game.currLvl, "waterTank", that.game.chatState);
                                that.game.chatState = that.updateState(that.game.currLvl, "waterTank", that.game.chatState);

                                that.spritesheet = ASSET_MANAGER.getAsset("./sprites/blackbox.png");

                                that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, false);
                                that.game.addEntityToTop(that.chatbox);
                                that.chatbox.setVisible = true;

                                //TO PAUSE THE GAME
                                Chatbox.OPEN = true;


                                //clueone chatbox
                                if (!clueOneDisplay) {
                                    that.game.addEntityToTop(new ItemsChatbox(that.game, ASSET_MANAGER.getAsset("./sprites/furniture/water_tank.png"), 18, 4, 198, 529, PARAMS.CANVAS_WIDTH / 2.5, PARAMS.CANVAS_WIDTH / 6.5, 132, 352.66));
                                    that.game.savedTime = that.game.phase2Timer.time;
                                }
                                clueOneDisplay = true;
                            }
                        } else {
                            that.waterTankInteract = false;
                        }

                    }

                    if (entity instanceof GreyCar) {
                        if (entity.interactBB && that.BB.collide(entity.interactBB)) {
                            that.greyCarInteract = true;
                            if (that.game.interact && that.hideChat) {
                                that.game.interact = false;
                                that.hideChat = false;

                                that.text = loadText(that.game.currLvl, "greyCar", that.game.chatState);
                                that.image = loadImage(that.game.currLvl, "greyCar", that.game.chatState);
                                that.game.chatState = that.updateState(that.game.currLvl, "greyCar", that.game.chatState);

                                that.spritesheet = ASSET_MANAGER.getAsset("./sprites/blackbox.png");

                                that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, false);
                                that.game.addEntityToTop(that.chatbox);
                                that.chatbox.setVisible = true;

                                //TO PAUSE THE GAME
                                Chatbox.OPEN = true;


                                //cluetwo chatbox
                                if (!clueTwoDisplay) {
                                    that.game.addEntityToTop(new ItemsChatbox(that.game, ASSET_MANAGER.getAsset("./sprites/gps.png"), 0, 0, 128, 128, PARAMS.CANVAS_WIDTH / 3.5, PARAMS.CANVAS_WIDTH / 5, 256, 256));
                                    that.game.savedTime = that.game.phase2Timer.time;
                                }
                                clueTwoDisplay = true;
                            }
                        } else {
                            that.greyCarInteract = false;
                        }

                    }

                    if (entity instanceof PaintingTwo) {
                        if (entity.interactBB && that.BB.collide(entity.interactBB)) {
                            that.paintingTwoInteract = true;
                            if (that.game.interact && that.hideChat) {
                                that.game.interact = false;
                                that.hideChat = false;

                                that.text = loadText(that.game.currLvl, "paintingTwo", that.game.chatState);
                                that.image = loadImage(that.game.currLvl, "paintingTwo", that.game.chatState);
                                that.game.chatState = that.updateState(that.game.currLvl, "paintingTwo", that.game.chatState);

                                that.spritesheet = ASSET_MANAGER.getAsset("./sprites/blackbox.png");

                                that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, false);
                                that.game.addEntityToTop(that.chatbox);
                                that.chatbox.setVisible = true;

                                //TO PAUSE THE GAME
                                Chatbox.OPEN = true;

                                //cluethree chatbox
                                if (!clueThreeDisplay) {
                                    that.game.addEntityToTop(new ItemsChatbox(that.game, ASSET_MANAGER.getAsset("./sprites/patent.png"), 0, 0, 293, 300, PARAMS.CANVAS_WIDTH / 3.5, PARAMS.CANVAS_WIDTH / 5, 293, 300));
                                    that.game.savedTime = that.game.phase2Timer.time;
                                }
                                clueThreeDisplay = true;

                            }
                        } else {
                            that.paintingTwoInteract = false;
                        }

                    }
                }

                //
                // INTERACTIONS
                //

                // trigger cutscene
                if (that.game.currLvl.label === "Phase 1-1" && that.game.chatState === 7 && that.chatbox.setVisible === false) {
                    that.game.camera.loadLevel(levelOneCutscene);
                }

                // win game
                if (that.game.currLvl.label === "Phase 1-2" && that.game.chatState === 7 && that.chatbox.setVisible === false) {
                    that.game.camera.loadLevel(winScreen);
                }

                // reset variable
                that.hideChat = true;

                // Richie
                if (entity instanceof Richie) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                        that.noInteract = false;
                        that.richieInteract = true;

                        if (that.game.interact && that.hideChat) {
                            that.game.interact = false;
                            that.hideChat = false;

                            that.text = loadText(that.game.currLvl, "richie", that.game.chatState);
                            that.image = loadImage(that.game.currLvl, "richie", that.game.chatState);

                            that.game.chatState = that.updateState(that.game.currLvl, "richie", that.game.chatState);

                            that.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/richie_portraits.png");


                            that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, false);
                            that.game.addEntityToTop(that.chatbox);
                            that.chatbox.setVisible = true;

                            //TO PAUSE THE GAME
                            Chatbox.OPEN = true;
                        }
                    } else {
                        that.richieInteract = false;
                        that.noInteract = true;
                    }
                }

                // Billionaire
                else if (entity instanceof Billionaire) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                        that.noInteract = false;
                        that.billionaireInteract = true;

                        if (that.game.interact && that.hideChat) {
                            that.game.interact = false;
                            that.hideChat = false;

                            that.text = loadText(that.game.currLvl, "billionaire", that.game.chatState);
                            that.image = loadImage(that.game.currLvl, "billionaire", that.game.chatState);
                            that.game.chatState = that.updateState(that.game.currLvl, "billionaire", that.game.chatState);

                            that.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/billionaire_portraits.png");

                            that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, false);
                            that.game.addEntityToTop(that.chatbox);
                            that.chatbox.setVisible = true;

                            //TO PAUSE THE GAME
                            Chatbox.OPEN = true;
                        }
                    } else {
                        that.billionaireInteract = false;
                        that.noInteract = true;
                    }
                }

                // Stephanie
                else if (entity instanceof Stephanie) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                        that.noInteract = false;
                        that.stephInteract = true;

                        if (that.game.interact && that.hideChat) {
                            that.game.interact = false;
                            that.hideChat = false;

                            that.text = loadText(that.game.currLvl, "stephanie", that.game.chatState);
                            that.image = loadImage(that.game.currLvl, "stephanie", that.game.chatState);
                            that.game.chatState = that.updateState(that.game.currLvl, "stephanie", that.game.chatState);

                            //PISKEL INFO
                            // x4 scale
                            //Padding: 8 pixels wide, 4 pixels length
                            that.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/stephanie_portraits.png");

                            that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, false);
                            that.game.addEntityToTop(that.chatbox);
                            that.chatbox.setVisible = true;

                            //TO PAUSE THE GAME
                            Chatbox.OPEN = true;
                        }
                    } else {
                        that.stephInteract = false;
                        that.noInteract = true;
                    }
                }

                // NPC kitchen
                else if (entity instanceof KitchenWorker) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                        that.noInteract = false;
                        that.kitchenWorkerInteract = true;

                        if (that.game.interact && that.hideChat) {
                            that.game.interact = false;
                            that.hideChat = false;

                            that.text = loadText(that.game.currLvl, "kitchenWorker", that.game.chatState);
                            that.image = loadImage(that.game.currLvl, "kitchenWorker", that.game.chatState);
                            that.game.chatState = that.updateState(that.game.currLvl, "kitchenWorker", that.game.chatState);

                            that.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/kitchen_worker_portraits.png");

                            that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, false);
                            that.game.addEntityToTop(that.chatbox);
                            that.chatbox.setVisible = true;

                            //TO PAUSE THE GAME
                            Chatbox.OPEN = true;
                        }
                    } else {
                        that.kitchenWorkerInteract = false;
                        that.noInteract = true;
                    }
                }

                // NPC garden
                else if (entity instanceof Gardener) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                        that.noInteract = false;
                        that.gardenerInteract = true;

                        if (that.game.interact && that.hideChat) {
                            that.game.interact = false;
                            that.hideChat = false;

                            that.text = loadText(that.game.currLvl, "gardener", that.game.chatState);
                            that.image = loadImage(that.game.currLvl, "gardener", that.game.chatState);
                            that.game.chatState = that.updateState(that.game.currLvl, "gardener", that.game.chatState);

                            that.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/gardener_portraits.png");

                            that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, false);
                            that.game.addEntityToTop(that.chatbox);
                            that.chatbox.setVisible = true;

                            //TO PAUSE THE GAME
                            Chatbox.OPEN = true;
                        }
                    } else {
                        that.gardenerInteract = false;
                        that.noInteract = true;
                    }
                }

                // NPC guard
                else if (entity instanceof Guard) {
                    if (that.game.currLvl === levelOne1) {
                        if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                            that.noInteract = false;
                            that.guardInteract = true;

                            if (that.game.interact && that.hideChat) {
                                that.game.interact = false;
                                that.hideChat = false;

                                that.text = loadText(that.game.currLvl, "guard", that.game.chatState);
                                that.image = loadImage(that.game.currLvl, "guard", that.game.chatState);
                                that.game.chatState = that.updateState(that.game.currLvl, "guard", that.game.chatState);

                                that.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/guard.png");

                                that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, true);
                                that.game.addEntityToTop(that.chatbox);
                                that.chatbox.setVisible = true;

                                //TO PAUSE THE GAME
                                Chatbox.OPEN = true;
                            }
                        }
                        // add extra check since there are multiple guards
                        else if (that.noInteract) {
                            that.guardInteract = false;
                        }
                    }
                } else if (entity instanceof CarMechanic) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                        that.noInteract = false;
                        that.carMechanicInteract = true;

                        if (that.game.interact && that.hideChat) {
                            that.game.interact = false;
                            that.hideChat = false;

                            that.text = loadText(that.game.currLvl, "carMechanic", that.game.chatState);
                            that.image = loadImage(that.game.currLvl, "carMechanic", that.game.chatState);
                            that.game.chatState = that.updateState(that.game.currLvl, "carMechanic", that.game.chatState);

                            that.spritesheet = ASSET_MANAGER.getAsset("./sprites/entities/car_mechanic_portraits.png");

                            that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, false);
                            that.game.addEntityToTop(that.chatbox);
                            that.chatbox.setVisible = true;

                            //TO PAUSE THE GAME
                            Chatbox.OPEN = true;
                        }
                    } else {
                        that.carMechanicInteract = false;
                        that.noInteract = true;
                    }
                }


                // ----------- OBJECT INTERACTIONS -------------------


                else if (entity instanceof BillionaireStatue) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                        that.noInteract = false;
                        that.billionaireStatueInteract = true;

                        if (that.game.interact && that.hideChat) {
                            that.game.interact = false;
                            that.hideChat = false;

                            that.text = loadText(that.game.currLvl, "billionaireStatue", that.game.chatState);
                            that.image = loadImage(that.game.currLvl, "billionaireStatue", that.game.chatState);
                            that.game.chatState = that.updateState(that.game.currLvl, "billionaireStatue", that.game.chatState);

                            that.spritesheet = ASSET_MANAGER.getAsset("./sprites/blackbox.png");

                            that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, true);
                            that.game.addEntityToTop(that.chatbox);
                            that.chatbox.setVisible = true;

                            //TO PAUSE THE GAME
                            Chatbox.OPEN = true;
                        }
                    } else {
                        that.billionaireStatueInteract = false;
                        that.noInteract = true;
                    }

                } else if (entity instanceof Fridge) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                        that.noInteract = false;
                        that.fridgeInteract = true;

                        if (that.game.interact && that.hideChat) {
                            that.game.interact = false;
                            that.hideChat = false;

                            that.text = loadText(that.game.currLvl, "fridge", that.game.chatState);
                            that.image = loadImage(that.game.currLvl, "fridge", that.game.chatState);
                            that.game.chatState = that.updateState(that.game.currLvl, "fridge", that.game.chatState);

                            that.spritesheet = ASSET_MANAGER.getAsset("./sprites/blackbox.png");

                            that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, true);
                            that.game.addEntityToTop(that.chatbox);
                            that.chatbox.setVisible = true;

                            //TO PAUSE THE GAME
                            Chatbox.OPEN = true;
                        }
                    } else {
                        that.fridgeInteract = false;
                        that.noInteract = true;
                    }

                } else if (entity instanceof WideBlueMonitor) {
                    if (entity.interactBB && that.BB.collide(entity.interactBB)) {

                        that.noInteract = false;
                        that.monitorInteract = true;

                        if (that.game.interact && that.hideChat) {
                            that.game.interact = false;
                            that.hideChat = false;

                            that.text = loadText(that.game.currLvl, "monitor", that.game.chatState);
                            that.image = loadImage(that.game.currLvl, "monitor", that.game.chatState);
                            that.game.chatState = that.updateState(that.game.currLvl, "monitor", that.game.chatState);

                            that.spritesheet = ASSET_MANAGER.getAsset("./sprites/blackbox.png");

                            that.chatbox = new Chatbox(that.game, that.text, that.image, that.spritesheet, true);
                            that.game.addEntityToTop(that.chatbox);
                            that.chatbox.setVisible = true;

                            //TO PAUSE THE GAME
                            Chatbox.OPEN = true;

                        }
                    }
                    // add extra check since there are multiple monitors
                    if (that.noInteract) {
                        that.monitorInteract = false;
                    }
                }
            }


            that.updateBB();
        });


    };


    draw(ctx) {
        if (!Chatbox.OPEN) {
            this.animations[this.state][this.direction].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);
        } else {
            this.animations[this.state][this.direction].drawStillFrame(ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);
        }

        if (this.doorInteract) {
            setBlackStroke(ctx);
            ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 - 85, PARAMS.CANVAS_HEIGHT - 55, 170,40);
            ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 - 85, PARAMS.CANVAS_HEIGHT - 55, 170,40);

            ctx.textAlign = "center";
            setWhiteStroke(ctx);
            let interactText = "";
            //ending
            if(this.doorInteract) interactText = "Escape";

            ctx.fillText(interactText, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT - 30);
        }

        // interact message
        if (this.stephInteract || this.billionaireInteract || this.richieInteract || this.kitchenWorkerInteract || this.gardenerInteract || this.guardInteract
            || this.carMechanicInteract || this.billionaireStatueInteract || this.fridgeInteract || this.monitorInteract || this.toolboxInteract
            || this.greyCarInteract || this.waterTankInteract || this.paintingTwoInteract) {

            if (!(clueOneDisplay && clueTwoDisplay && clueThreeDisplay)) {

                setBlackStroke(ctx);
                ctx.strokeRect(PARAMS.CANVAS_WIDTH / 2 - 85, PARAMS.CANVAS_HEIGHT - 55, 170, 40);
                ctx.fillRect(PARAMS.CANVAS_WIDTH / 2 - 85, PARAMS.CANVAS_HEIGHT - 55, 170, 40);

                ctx.textAlign = "center";
                setWhiteStroke(ctx);

                let interactText = "";
                if (this.stephInteract) interactText = "Stephanie";
                else if (this.richieInteract) interactText = "Richie";
                else if (this.billionaireInteract) interactText = "Mr.Billionaire";
                else if (this.kitchenWorkerInteract) interactText = "Kitchen Worker";
                else if (this.gardenerInteract) interactText = "Gardener";
                else if (this.guardInteract) interactText = "Guard";
                else if (this.carMechanicInteract) interactText = "Car Mechanic";

                //objects
                else if (this.billionaireStatueInteract) interactText = "Statue";
                else if (this.fridgeInteract) interactText = "Fridge";
                else if (this.monitorInteract) interactText = "Monitor";

                //items
                else if (this.toolboxInteract) interactText = "Toolbox";
                else if (this.greyCarInteract) interactText = "Grey Car";
                else if (this.waterTankInteract) interactText = "Water Tank";
                else if (this.paintingTwoInteract) interactText = "Painting";

                ctx.fillText(interactText, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT - 30);
            }
        }

        // debug
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.font = "Bold 20px Courier";
            ctx.textAlign = "left";
            setWhiteStroke(ctx);
            ctx.fillText("x: " + this.x / PARAMS.BLOCKWIDTH, this.BB.x - this.game.camera.x, (this.BB.y - 65) - this.game.camera.y);
            ctx.fillText("y: " + this.y / PARAMS.BLOCKWIDTH, this.BB.x - this.game.camera.x, (this.BB.y - 50) - this.game.camera.y);


            ctx.lineWidth = 4;
            ctx.strokeStyle = 'red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };

    updateState(level, entity, chatState) {
        // stephanie
        if (entity === "stephanie") {
            if (level.stephanie[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }
        }

        // richie
        else if (entity === "richie") {
            if (level.richie[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }

        }

        // billionaire
        else if (entity === "billionaire") {
            if (level.billionaire[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }
        }

        // kitchen worker
        else if (entity === "kitchenWorker") {
            if (level.kitchenWorker[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }
        }

        // gardener
        else if (entity === "gardener") {
            if (level.gardener[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }
        }

        // guard
        else if (entity === "guard") {
            if (level.guard[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }
        }

        // guard
        else if (entity === "carMechanic") {
            if (level.carMechanic[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }
        }


        // ------------- OBJECT INTERACTIONS ------------

        // billionaire statue
        else if (entity === "billionaireStatue") {
            if (level.billionaireStatue[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }
        }

        // fridge
        else if (entity === "fridge") {
            if (level.fridge[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }
        }

        // monitor
        else if (entity === "monitor") {
            if (level.monitor[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }
        }

        // ------------------------------ ITEMS -----------------------------

        // toolbox
        else if (entity === "toolbox") {
            if (level.toolbox[chatState].stateIncr === true) {
                return chatState + 1;
            } else {
                return chatState;
            }
        }


        // 3 pieces of evidence

        // water tank
        else if (entity === "waterTank") {
            if (level.waterTank[chatState].stateIncr === true) {
                if (clueOneDisplay === false) {
                    return chatState + 1;
                } else {
                    return chatState;
                }
            } else {
                return chatState;
            }
        }

        // grey car
        else if (entity === "greyCar") {
            if (level.greyCar[chatState].stateIncr === true) {
                if (clueTwoDisplay === false) {
                    return chatState + 1;
                } else {
                    return chatState;
                }
            } else {
                return chatState;
            }
        }

        // painting two
        else if (entity === "paintingTwo") {
            if (level.paintingTwo[chatState].stateIncr === true) {
                if (clueThreeDisplay === false) {
                    return chatState + 1;
                } else {
                    return chatState;
                }
            } else {
                return chatState;
            }
        }
    };
};
