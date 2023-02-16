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
        // Room 1 big table at the center of the room (from big couch calculation, center of room is (164 - 0) /2).
        // x = (center of room - [width of big table / 2]) = (82 - (28 / 2)) = 68
        // y = (height of room / 2) - (big table height / 2) = [(Room end of bottom wall - beginning of top wall) / 2] - [table height / 2]
        // y = ((160 - 0) / 2) - (32 / 2) = 64
        {x: 68, y: 64}
    ],

    bigCouches: [
        /*
        Room 1 couch, place at the center bottom of room.
        x = (Width of room / 2) - (couch width / 2) = [(Room end of right wall - beginning of left wall) / 2] - [couch width / 2]
        x = ((164 - 0) / 2) - (32/2) = 66
        y = [(Room top of bottom wall) - (couch height)] = 128 - 13 = 115
         */
        {x: 66, y: 115}
    ],

    chairRights: [
        // Room 1 chair, place directly next to the table (x) and center it relative to table which is centered in the room (y).
        // x = (table start - chair width) = (68 - 14) = 54
        // From Room 1 big table calculation, center of room in y is 80.
        // y = (center of room - [chair height / 2]) = (80 - (16 / 2)) = 72
        {x: 54, y: 72}
    ],

    chairLefts: [
        // Room 1 chair, place directly next to the table (x) and center it relative to table which centered in the room (y).
        // x = (table start + table width) = (68 + 28) = 96
        // y is same as Room 1 chair left.
        {x: 96, y: 72}
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