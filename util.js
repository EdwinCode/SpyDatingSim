/** Global Parameters Object */
const params = { };

/**
 * @param {Number} n
 * @returns Random Integer Between 0 and n-1
 */
const randomInt = n => Math.floor(Math.random() * n);

/**
 * @param {Number} r Red Value
 * @param {Number} g Green Value
 * @param {Number} b Blue Value
 * @returns String that can be used as a rgb web color
 */
const rgb = (r, g, b) => `rgba(${r}, ${g}, ${b})`;

/**
 * @param {Number} r Red Value
 * @param {Number} g Green Value
 * @param {Number} b Blue Value
 * @param {Number} a Alpha Value
 * @returns String that can be used as a rgba web color
 */
const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;

/**
 * @param {Number} h Hue
 * @param {Number} s Saturation
 * @param {Number} l Lightness
 * @returns String that can be used as a hsl web color
 */
const hsl = (h, s, l) => `hsl(${h}, ${s}%, ${l}%)`;

/** Creates an alias for requestAnimationFrame for backwards compatibility */
window.requestAnimFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        /**
         * Compatibility for requesting animation frames in older browsers
         * @param {Function} callback Function
         * @param {DOM} element DOM ELEMENT
         */
        ((callback, element) => {
            window.setTimeout(callback, 1000 / 60);
        });
})();

// add global parameters here

const PARAMS = {
    DEBUG: true,
    SKIPPHASE1: true,
    SKIPINTRO: true,
    SCALE: 0.5,
    BITWIDTH: 8
};

/**
 * Returns distance from two points
 * @param {Number} p1, p2 Two objects with x and y coordinates
 * @returns Distance between the two points
 */
const getDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

//
// TEXT
//

function setBlackStroke(ctx) {
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
};

function setRedStroke(ctx) {
    ctx.strokeStyle = "rgb(139,0,0)";
    ctx.fillStyle = "rgb(139,0,0)";
};

function setWhiteStroke(ctx) {
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
};

function wrapText(ctx, text, textLocationX, textLocationY, maxWidth) {
    let lineHeight = 20;

    let words = text.split(' ');
    let line = '';

    for(let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + ' ';
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;

        if (testWidth > maxWidth && i > 0) {
            ctx.fillText(line, textLocationX, textLocationY);
            line = words[i] + ' ';
            textLocationY += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    ctx.fillText(line, textLocationX, textLocationY);
}

//
// Character Interaction Tools
//

// for character interaction decision tree
function loadText(level, entity, chatState) {
    // stephanie
    if (entity === "stephanie") {
         return level.stephanie[chatState].message;
    }

    // richie
    else if (entity === "richie") {
        return level.richie[chatState].message;
    }

    // billionaire
    else if (entity === "billionaire") {
        return level.billionaire[chatState].message;
    }

    // kitchen worker
    else if (entity === "kitchenWorker") {
        return level.kitchenWorker[chatState].message;
    }

    // gardener
    else if (entity === "gardener") {
        return level.gardener[chatState].message;
    }

    // guard
    else if (entity === "guard") {
        return level.guard[chatState].message;
    }

    // car mechanic
    else if (entity === "carMechanic") {
        return level.carMechanic[chatState].message;
    }

    // butler
    else if (entity === "butler") {
        return level.butler[chatState].message;
    }

    // ---------- OBJECTS -------------

    // billionaire statue
    else if (entity === "billionaireStatue") {
        return level.billionaireStatue[chatState].message;
    }

    // fridge
    else if (entity === "fridge") {
        return level.fridge[chatState].message;
    }

    // monitor
    else if (entity === "monitor") {
        return level.monitor[chatState].message;
    }

    //ITEMS
    // toolbox
    else if (entity === "toolbox") {
        if (flashlightDisplay === true) {
            return "This is where you found the flashlight."
        } else {
            return level.toolbox[chatState].message;
        }
    }

    // 3 pieces of evidence

    else if (entity === "waterTank") {
        if (clueOneDisplay === true) {
            return "This is where you found the lighter fluid."
        } else {
            return level.waterTank[chatState].message;
        }
    }

    else if (entity === "greyCar") {
        if (clueTwoDisplay === true) {
            return "This is where you found the gps."
        } else {
            return level.greyCar[chatState].message;
        }
    }

    else if (entity === "paintingTwo") {
        if (clueThreeDisplay === true) {
            return "This is where you found the patent."
        } else {
            return level.paintingTwo[chatState].message;
        }
    }
};

function loadImage(level, entity, chatState) {
    // stephanie
    if (entity === "stephanie") {
        return level.stephanie[chatState].portraitNumber;
    }

    // richie
    else if (entity === "richie") {
        return level.richie[chatState].portraitNumber;
    }

    // billionaire
    else if (entity === "billionaire") {
        return level.billionaire[chatState].portraitNumber;
    }

    // kitchen worker
    else if (entity === "kitchenWorker") {
        return level.kitchenWorker[chatState].portraitNumber;
    }

    // gardener
    else if (entity === "gardener") {
        return level.gardener[chatState].portraitNumber;
    }

    // guard
    else if (entity === "guard") {
        return level.guard[chatState].portraitNumber;
    }

    // car mechanic
    else if (entity === "carMechanic") {
        return level.carMechanic[chatState].portraitNumber;
    }

    // butler
    else if (entity === "butler") {
        return level.butler[chatState].portraitNumber;
    }

    // ---------- OBJECTS -------------

    // billionaire statue
    else if (entity === "billionaireStatue") {
        return level.billionaireStatue[chatState].portraitNumber;
    }

    // fridge
    else if (entity === "fridge") {
        return level.fridge[chatState].portraitNumber;
    }

    // monitor
    else if (entity === "monitor") {
        return level.monitor[chatState].portraitNumber;
    }

    //ITEMS
    // toolbox
    else if (entity === "toolbox") {
        return level.toolbox[chatState].portraitNumber;
    }

    // 3 pieces of evidence

    else if (entity === "waterTank") {
        return level.waterTank[chatState].portraitNumber;
    }

    else if (entity === "greyCar") {
        return level.greyCar[chatState].portraitNumber;
    }

    else if (entity === "paintingTwo") {
        return level.paintingTwo[chatState].portraitNumber;
    }

}

function checkForSkippedParts(game) {
    this.game = game;

    // skip intro
    PARAMS.SKIPINTRO = document.getElementById("skipIntro").checked;
    if (PARAMS.SKIPINTRO) {

        this.game.camera.currentLevel = levelOne1;
        this.game.currLvl = levelOne1;

        this.game.camera.clearEntities();

        this.game.camera.hud = new HUD(this.game, this.game.camera.itemsBag);
        this.game.camera.spyCharacter = new Spy(this.game, 124  * PARAMS.BLOCKWIDTH, -127  * PARAMS.BLOCKWIDTH);
        this.game.camera.darkness = new Darkness(this.game, this.game.camera.spyCharacter.x, this.game.camera.spyCharacter.y);

        //SETTING UP CURRENT FURNITURE IN THE MANSION
        this.currentLevelFurniture = levelOneFurniture;
        this.game.addEntity(new Level1Part1(this.game, this.game.camera.hud, this.game.camera.darkness, this.currentLevelFurniture, this.game.camera.spyCharacter));

        document.getElementById("skipIntro").checked = false;
    }

    // skip phase 1 of level 1
    PARAMS.SKIPPHASE1 = document.getElementById("skipPhaseOne").checked;
    if (PARAMS.SKIPPHASE1) {
        this.game.camera.currentLevel = levelOneCutscene;
        this.game.currLvl = levelOneCutscene;

        this.game.camera.loadLevel(levelOneCutscene);
        document.getElementById("skipPhaseOne").checked = false;
    }
}

//
// Items Bag
//

let caseFileDisplay = false;
let sneakerDisplay = false;
let capeDisplay = false;
let flashlightDisplay = false;
let roseDisplay = false;
let TBD = false;
let clueOneDisplay = false;
let clueTwoDisplay = false;
let clueThreeDisplay = false;
