let levelOne1 = {
    label: "Phase 1-1",

    // THE UNITS OF MEASUREMENT FOR THE BELOW CODE ARE IN BLOCKWIDTHS!

    //background
    sideWallLefts: [ // count makes them grow downwards
        // Room 1 left walls
        {x: 0, y: 0, count: 23},
        {x: 0, y: -368, count: 23}
    ],

    plainWalls: [
        // Room 1 top walls
        // Start at x = 4.5 because the Room 1 left wall starts at 0 and a left wall takes up 4.5 BLOCKWIDTHS so 0 + 4.5 = 4.5.
        {x: 4.5, y: 0, count: 4}, // A plain wall piece has a width of 31 BLOCKWIDTHS. Thus, this ends at x = 4.5 + 10 * 31 = 314.5
        {x: 190.5, y: 0, count: 4},

        {x: 319, y: 0, count: 4},
        {x: 505, y: 0, count: 4},
        {x: 4.5, y: -368, count: 10},
        {x: 319, y: -368, count: 10},

        // Room 1 bottom walls
        /* Start at y = 336 because of the following math to line up the bottom edge:
        The Room 1 left walls start at 0, have a height of 16, count of 23.
        A plain wall piece has a height of 32 BLOCKWIDTHS.
        We have 23 walls on the left side.
        0 + (16 * 23) - 32 = 336
         */
        {x: 4.5, y: 336, count: 10},
        {x: 319, y: 336, count: 10}
    ],

    sideWallRights: [
        // Room 1 right walls
        // The Room 1 plain walls end at x = 314.5, so we start there. Line it up to the left wall with y = 0.
        {x: 314.5, y: 0, count: 10},
        // We have 10 walls (height 16), then 2 big rugs (height 24) before we start these walls so:
        // y = 0 + (16 * 10) + (24 * 2) = 208
        {x: 314.5, y: 208, count: 10},

        {x: 314.5, y: -368, count: 10},
        {x: 314.5, y: -160, count: 10},

        {x: 629, y: 0, count: 23},
        {x: 629, y: -368, count: 23}
    ],

    bigRugs: [
        // We want half the rug in and out of the rooms.
        /*
        Room 1 right rugs:
        For top rug, y = 0 + (16 * 10) = 160
        For bottom rug y = top rug + 24 = 160 + 24 = 184
         */
        {x: 296.25, y: 160},
        {x: 296.25, y: 184},

        {x: 296.25, y: -208},
        {x: 296.25, y: -184}
    ],

    //furniture
    bigTables: [
        // Room 1 big tables, place wherever they look nice
        {x: 68, y: 64},
        {x: 242, y: 64}
    ],

    bigCouches: [
        /*
        Room 1 couch, place at the center bottom of room.
        x = (Width of room / 2) - (couch width / 2) = [(Room end of right wall - beginning of left wall) / 2] - [couch width / 2]
        x = ((164 - 0) / 2) - (32/2) = 66
        y = [(Room top of bottom wall) - (couch height)] = 128 - 13 = 115
         */
        {x: 66, y: 115},
        {x: 240, y: 115}
    ],

    chairRights: [
        // Room 1 chairs, place directly next to the table (x) and center it relative to table (y).
        // x = (table start - chair width) = (68 - 14) = 54
        // y = (table top placement + [table height / 2] - [chair height / 2]) = (64 + (32 / 2) - (16 / 2)) = 72
        {x: 54, y: 72},
        // x = distance between tables + chair from first table
        // x = (242 - 68) + 54 = 174 + 54 = 228
        {x: 228, y: 72}
    ],

    chairLefts: [
        // Room 1 chair, place directly next to the table (x) and center it relative to table which centered in the room (y).
        // x = (table start + table width) = (68 + 28) = 96
        // y is same as Room 1 chair left.
        {x: 96, y: 72},
        // x = 96 + 174
        {x: 270, y: 72}
    ],

    beds: [
        {x: 500, y: -150}
    ],

    //NPC PORTRAIT NUMBERS
    // 0 = neutral, 1 = happy, 2 = sad, 3 = mad, 4 = surprised

    butler: [
        {message: "Talk to Mr.Billionaire. He has a welcome message. Also, make sure to take a look around. You " +
                "never know what you might find in this big mansion...",
            state: 0,
            stateIncr: false},
        {message: "Talk to Stephanie. She's also dating Mr. Billionaire.",
            state: 1,
            stateIncr: false},
        {message: "Talk to Richie. He's also dating Mr. Billionaire, and is such a gossip queen...much like myself.",
            state: 2,
            stateIncr: false},
        {message: "Someone is going to give a toast. Go back to them to hear it.",
            state: 3,
            stateIncr: false}
    ],

    stephanie: [
        { message: "Talk to Mr.Billionaire. He wants to meet everyone first.",
            state: 0,
            portraitNumber: 0,
            stateIncr: "false"},
        { message: "So, you met Mr. Billionaire? Isn't he so wonderful? " +
                "He's definitely a tall drink of water.",
            state: 1,
            portraitNumber: 1,
            stateIncr: "true"},
        { message: "*is suddenly thirsty*",
            state: 2,
            portraitNumber: 0,
            stateIncr: "false"},
        { message: "*is suddenly thirsty*",
            state: 3,
            portraitNumber: 0,
            stateIncr: "false"}
    ],

    richie: [
        { message: "Steph says that Mr. Billionaire said to talk to him first.",
            state: 0,
            portraitNumber: 0,
            stateIncr: "false"},
        { message: "I'm going to live up to my name...Richie Rich...and win Mr. Billionaire's heart!",
            state: 1,
            portraitNumber: 1,
            stateIncr: "false"},
        { message: "Oh, beware of the water here. That stuff I had earlier was nasty.",
            state: 2,
            portraitNumber: 2,
            stateIncr: "true"},
        { message: "Then again, maybe that water does wonders for the skin...",
            state: 3,
            portraitNumber: 0,
            stateIncr: "false"}
    ],

    billionaire: [
        { message: "Welcome to the mansion! I'm so glad you could make it. " +
                "I'll be giving a toast soon. Make yourself comfortable.",
            state: 0,
            portraitNumber: 1,
            stateIncr: "true"},
        { message: "It's mix and mingle time before we start the real party!",
            state: 1,
            portraitNumber: 0,
            stateIncr: "false"},
        { message: "You should get familiar with the other contestants.",
            state: 2,
            portraitNumber: 0,
            stateIncr: "false"},
        { message: "*annoying clinging of silverware on a glass* I'd like to give a toast. " +
                "Welcome to my mansion! I know we'll have a great time. Later, I'll be handing " +
                "out the first impression rose. *wink* Let the sparks ignite!",
            state: 3,
            portraitNumber: 1,
            stateIncr: "true"}
    ]
};

let levelOne2 = {
    label: "Phase 1-2",

    // THE UNITS OF MEASUREMENT FOR THE BELOW CODE ARE IN BLOCKWIDTHS!

    //background
    sideWallLefts: [ // count makes them grow downwards
        // Room 1 left walls
        {x: 0, y: 0, count: 23},
        {x: 0, y: -368, count: 23}
    ],

    plainWalls: [
        // Room 1 top walls
        // Start at x = 4.5 because the Room 1 left wall starts at 0 and a left wall takes up 4.5 BLOCKWIDTHS so 0 + 4.5 = 4.5.
        {x: 4.5, y: 0, count: 4}, // A plain wall piece has a width of 31 BLOCKWIDTHS. Thus, this ends at x = 4.5 + 10 * 31 = 314.5
        {x: 190.5, y: 0, count: 4},

        {x: 319, y: 0, count: 4},
        {x: 505, y: 0, count: 4},
        {x: 4.5, y: -368, count: 10},
        {x: 319, y: -368, count: 10},

        // Room 1 bottom walls
        /* Start at y = 336 because of the following math to line up the bottom edge:
        The Room 1 left walls start at 0, have a height of 16, count of 23.
        A plain wall piece has a height of 32 BLOCKWIDTHS.
        We have 23 walls on the left side.
        0 + (16 * 23) - 32 = 336
         */
        {x: 4.5, y: 336, count: 10},
        {x: 319, y: 336, count: 10}
    ],

    sideWallRights: [
        // Room 1 right walls
        // The Room 1 plain walls end at x = 314.5, so we start there. Line it up to the left wall with y = 0.
        {x: 314.5, y: 0, count: 10},
        // We have 10 walls (height 16), then 2 big rugs (height 24) before we start these walls so:
        // y = 0 + (16 * 10) + (24 * 2) = 208
        {x: 314.5, y: 208, count: 10},

        {x: 314.5, y: -368, count: 10},
        {x: 314.5, y: -160, count: 10},

        {x: 629, y: 0, count: 23},
        {x: 629, y: -368, count: 23}
    ],

    bigRugs: [
        // We want half the rug in and out of the rooms.
        /*
        Room 1 right rugs:
        For top rug, y = 0 + (16 * 10) = 160
        For bottom rug y = top rug + 24 = 160 + 24 = 184
         */
        {x: 296.25, y: 160},
        {x: 296.25, y: 184},

        {x: 296.25, y: -208},
        {x: 296.25, y: -184}
    ],

    //furniture
    bigTables: [
        // Room 1 big tables, place wherever they look nice
        {x: 68, y: 64},
        {x: 242, y: 64}
    ],

    bigCouches: [
        /*
        Room 1 couch, place at the center bottom of room.
        x = (Width of room / 2) - (couch width / 2) = [(Room end of right wall - beginning of left wall) / 2] - [couch width / 2]
        x = ((164 - 0) / 2) - (32/2) = 66
        y = [(Room top of bottom wall) - (couch height)] = 128 - 13 = 115
         */
        {x: 66, y: 115},
        {x: 240, y: 115}
    ],

    chairRights: [
        // Room 1 chairs, place directly next to the table (x) and center it relative to table (y).
        // x = (table start - chair width) = (68 - 14) = 54
        // y = (table top placement + [table height / 2] - [chair height / 2]) = (64 + (32 / 2) - (16 / 2)) = 72
        {x: 54, y: 72},
        // x = distance between tables + chair from first table
        // x = (242 - 68) + 54 = 174 + 54 = 228
        {x: 228, y: 72}
    ],

    chairLefts: [
        // Room 1 chair, place directly next to the table (x) and center it relative to table which centered in the room (y).
        // x = (table start + table width) = (68 + 28) = 96
        // y is same as Room 1 chair left.
        {x: 96, y: 72},
        // x = 96 + 174
        {x: 270, y: 72}
    ],

    beds: [
        {x: 500, y: -150}
    ],

    butler: [
        {message: "Look in the trashcan.",
            state: 0,
            stateIncr: false},
        {message: "Look at the table surfaces.",
            state: 1,
            stateIncr: false},
        {message: "Look in the cabinets near the wet table.",
            state: 2,
            stateIncr: false},
        {message: "Look in the cabinets near the wet table.",
            state: 3,
            stateIncr: false}
    ]
};

let titleScreen = {
    label: "title screen"
};

let introCutscene = {
    label: "intro"
};

let levelOneCutscene = {
    label: "level one"
};

let hints = {
    label: "lose screen"
};

let itemsBag = {
    label: "win screen"
};

let loseScreen = {
    label: "lose screen"
};

let winScreen = {
    label: "win screen"
};