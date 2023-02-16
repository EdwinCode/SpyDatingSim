let levelOne = {
    label: "Phase 1",
    butler: false,
    guards: false,

    // THE UNITS OF MEASUREMENT FOR THE BELOW CODE ARE IN BLOCKWIDTHS!

    //background
    plainWalls: [
        // Room 1 top walls
        // Start at x = 4.5 because the Room 1 left wall starts at 0 and a left wall takes up 4.5 BLOCKWIDTHS so 0 + 4.5 = 4.5.
        {x: 4.5, y: 0, count: 5}, // A plain wall piece has a width of 31 BLOCKWIDTHS. Thus, this ends at x = 4.5 + 5 * 31 = 159.5
        // Room 1 bottom walls
        /* Start at y = 128 because of the following math to line up the bottom edge:
        The Room 1 left walls start at 0, have a height of 16, count of 10.
        A plain wall piece has a height of 32 BLOCKWIDTHS.
        0 + (16 * 10) - 32 = 128
         */
        {x: 4.5, y: 128, count: 5}
    ],

    sideWallLefts: [
        // Room 1 left walls
        {x: 0, y: 0, count: 10}
    ],

    sideWallRights: [
        // Room 1 right walls
        // The Room 1 plain walls end at x = 159.5, so we start there. Line it up to the left wall with y = 0.
        {x:159.5, y: 0, count: 10}
    ],

    wallBottoms: [
    ],

    bigRugs: [
        //{x:-470, y: 89}, {x: 230, y: 89}
    ],

    //furniture
    bigTables: [
        //{x: -15, y: 200}, {x: 500, y: 200}
    ],

    bigCouches: [
        /*
        Room 1 couch, place at the center bottom of room.
        x = [(Room beginning of right wall - end of left wall) / 2] - [couch width / 2]
        x = ((159.5 - 4.5) / 2) - (32/2) = 61.5
        y = [(Room top of bottom wall) - (couch height)] = 128 - 13
         */
        {x: 66, y: 115}
    ],

    chairRights: [
        //{x: -100, y: 210}
    ],

    chairLefts: [
        //{x: 100, y: 210}
    ],

};

let credits = {
    label: "credits",
    text: [
        "Felon For You"
    ]
};

let titleScreen = {
    label: "title screen"
};

let introCutscene = {
    label: "intro"
};

let loseScreen = {
    label: "lose screen"
};