let levelOne = {
    label: "Phase 1",
    butler: false,
    guards: false,

    // THE UNITS OF MEASUREMENT FOR THE BELOW CODE ARE IN BLOCKWIDTHS!

    //background
    sideWallLefts: [ // count makes them grow downwards
        // Room 1 left walls
        {x: 0, y: 0, count: 23},
    ],

    plainWalls: [
        // Room 1 top walls
        // Start at x = 4.5 because the Room 1 left wall starts at 0 and a left wall takes up 4.5 BLOCKWIDTHS so 0 + 4.5 = 4.5.
        {x: 4.5, y: 0, count: 10}, // A plain wall piece has a width of 31 BLOCKWIDTHS. Thus, this ends at x = 4.5 + 10 * 31 = 314.5
        // Room 1 bottom walls
        /* Start at y = 336 because of the following math to line up the bottom edge:
        The Room 1 left walls start at 0, have a height of 16, count of 23.
        A plain wall piece has a height of 32 BLOCKWIDTHS.
        We have 23 walls on the left side.
        0 + (16 * 23) - 32 = 336
         */
        {x: 4.5, y: 336, count: 10}
    ],

    sideWallRights: [
        // Room 1 right walls
        // The Room 1 plain walls end at x = 314.5, so we start there. Line it up to the left wall with y = 0.
        {x: 314.5, y: 0, count: 10},
        // We have 10 walls (height 16), then 2 big rugs (height 24) before we start these walls so:
        // y = 0 + (16 * 10) + (24 * 2) = 208
        {x: 314.5, y: 208, count: 10}
    ],

    bigRugs: [
        // We want half the rug in and out of the rooms.
        /*
        Room 1 right rugs:
        For top rug, y = 0 + (16 * 10) = 160
        For bottom rug y = top rug + 24 = 160 + 24 = 184
         */
        {x: 296.25, y: 160},
        {x: 296.25, y: 184}
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

    butler: [
        {message: "Talk to Mr.Billionaire.",
            state: 0,
            stateIncr: false},
        {message: "Talk to Stephanie.",
            state: 1,
            stateIncr: false},
        {message: "Talk to Richie.",
            state: 2,
            stateIncr: false},
        {message: "Go back to Mr.Billionaire.",
            state: 3,
            stateIncr: false}
    ],

    stephanie: [
        { message: "Talk to Mr.Billionaire.",
            state: 0,
            stateIncr: "false"},
        { message: "Hi, I'm Stephanie! Isn't Mr. Billionaire so wonderful? " +
                "He's definitely a tall drink of water.",
            state: 1,
            stateIncr: "true"},
        { message: "*is suddenly thirsty*",
            state: 2,
            stateIncr: "false"},
        { message: "*is suddenly thirsty*",
            state: 3,
            stateIncr: "true"}
    ],

    richie: [
        { message: "Talk to Mr.Billionaire.",
            state: 0,
            stateIncr: false},
        { message: "I'm going to live up to my name and win Mr. Billionaire's heart!",
            state: 1,
            stateIncr: false},
        { message: "Oh, beware of the water here. That stuff I had earlier was nasty.",
            state: 2,
            stateIncr: true},
        { message: "Then again, maybe that water does wonders for the skin...",
            state: 3,
            stateIncr: false}
    ],

    billionaire: [
        { message: "Welcome to the mansion! I'm so glad you could make it. " +
                "I'll be giving a toast soon. Make yourself comfortable.",
            state: 0,
            stateIncr: "true"},
        { message: "You should get familiar with the other contestants.",
            state: 1,
            stateIncr: "false"},
        { message: "You should get familiar with the other contestants.",
            state: 2,
            stateIncr: "false"},
        { message: "*annoying clinging of silverware on a glass* I'd like to give a toast." +
                "Welcome to my mansion! I know we'll have a great time. Let the sparks ignite.",
            state: 3,
            stateIncr: "true"}
    ]
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