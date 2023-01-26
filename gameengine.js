// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];

        // Information on the input
        this.click = null;
        this.mouse = null;
        this.wheel = null;

        // TODO: maybe use the line below to store the last direction pressed
        // to make some nice animation features (turn in that direction)
        //this.lastKey = {};
        this.setKeysNotPressed();
        this.inCanvas = true; // tells whether in the game area
        this.lastDirection = 0; // right

        // Options and the Details
        this.options = options || {
            debugging: false,
        };
    };

    setKeysNotPressed() {
        this.up = false;
        this.down = false;
        this.right = false;
        this.left = false;
        this.run = false;
    }

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, this.ctx.canvas);
        };
        gameLoop();
    };

    startInput() {
        // TODO: remove that = this and use the function declaration
        // show below with the getXandY method
        var that = this;
        const getXandY = e => ({
            x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
            y: e.clientY - this.ctx.canvas.getBoundingClientRect().top
        });

        this.ctx.canvas.addEventListener("mousemove", e => {
            if (this.options.debugging) {
                console.log("MOUSE_MOVE", getXandY(e));
            }
            this.mouse = getXandY(e);
        });

        this.ctx.canvas.addEventListener("click", e => {
            if (this.options.debugging) {
                console.log("CLICK", getXandY(e));
            }
            this.click = getXandY(e);
        });

        this.ctx.canvas.addEventListener("wheel", e => {
            if (this.options.debugging) {
                console.log("WHEEL", getXandY(e), e.wheelDelta);
            }
            e.preventDefault(); // Prevent Scrolling
            this.wheel = e;
        });

        this.ctx.canvas.addEventListener("contextmenu", e => {
            if (this.options.debugging) {
                console.log("RIGHT_CLICK", getXandY(e));
            }
            e.preventDefault(); // Prevent Context Menu
            this.rightclick = getXandY(e);
        });

        function keydownListener (e) {
            //e.preventDefault();
            switch (e.code) {
                case "ShiftLeft":
                case "ShiftRight":
                    that.run = true;
                    break;
                case "ArrowLeft":
                case "KeyA":
                    that.left = true;
                    that.lastDirection = 2; // left
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.right = true;
                    that.lastDirection = 0; // right
                    break;
                case "ArrowUp":
                case "KeyW":
                    that.up = true;
                    that.lastDirection = 3; // up
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.down = true;
                    that.lastDirection = 1; // down
                    break;
            }
        }
        function keyUpListener (e) {
            //e.preventDefault();
            switch (e.code) {
                case "ShiftLeft":
                case "ShiftRight":
                    that.run = false;
                    break;
                case "ArrowLeft":
                case "KeyA":
                    that.left = false;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.right = false;
                    break;
                case "ArrowUp":
                case "KeyW":
                    that.up = false;
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.down = false;
                    break;
            }
        }

        that.keydown = keydownListener;
        that.keyup = keyUpListener;

        this.ctx.canvas.addEventListener("keydown", that.keydown);
        this.ctx.canvas.addEventListener("keyup", that.keyup);

        window.addEventListener('blur', () => {
            that.inCanvas = false;
            that.setKeysNotPressed();
        });

        document.getElementById("gameWorld").addEventListener('blur', () => {
            that.inCanvas = false;
            that.setKeysNotPressed();
        });

    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    draw() {
        // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw latest things first
        for (let i = this.entities.length - 1; i >= 0; i--) {
            this.entities[i].draw(this.ctx, this);
        }
    };

    update() {
        let entitiesCount = this.entities.length;

        for (let i = 0; i < entitiesCount; i++) {
            let entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }

        for (let i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

    // this.up = false;
    // this.down = false;
    // this.right = false;

    disableLeft() {
        this.left = false;
        this.run = false;
    }


}

// KV Le was here :)