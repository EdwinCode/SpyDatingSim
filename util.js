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
    // Changing the scale breaks things, which means we aren't using it correctly.
    SCALE: 0.45,
    /*
    Since our sprites are almost entirely multiples of 8 for width and height, we should use
    a bitwidth of 8. This will let us change the scale and not break the world layout.
    By using SCALE * BITWIDTH we can establish a blockwidth that we use when drawing things.
    We would take the numbers we currently have and replace them with (BLOCKWIDTH * [Width or Height factor]).
    In theory, we could then change the scale to be whatever we need and the layouts would remain the same.
    We also would need to apply the scale to position update (after all velocity changes), bounding boxes, etc.
    I need this working before finishing the rooms.
    */
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

    // butler
    else if (entity === "butler") {
        return level.butler[chatState].message;
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

    // butler
    else if (entity === "butler") {
        return level.butler[chatState].portraitNumber;
    }

}

//
// Items Bag
//

let caseFileDisplay = false;
let sneakerDisplay = false;
let capeDisplay = false;
let clueOneDisplay = false;
let clueTwoDisplay = false;
let clueThreeDisplay = false;
