let levelOneFurniture = {
    // THE UNITS OF MEASUREMENT FOR THE BELOW CODE ARE IN BLOCKWIDTHS!

    sideWallLefts: [ // Count makes them grow downwards
        {x: 0, y: 0, count: 7},
        {x: 0, y: 160, count: 7},

        {x: 0, y: -240, count: 7},
        {x: 0, y: -80, count: 5},

        {x: 0, y: -480, count: 7},
        {x: 0, y: -320, count: 5},

        {x: -252.5, y: 0, count: 17},
        {x: -252.5, y: -240, count: 15},
        {x: -252.5, y: -480, count: 15},
    ],

    plainWalls: [
        // Start at x = 4.5 because the Room 1 left wall starts at 0 and a left wall takes up 4.5 BLOCKWIDTHS so 0 + 4.5 = 4.5.
        {x: 4.5, y: 0, count: 3}, // A plain wall piece has a width of 31 BLOCKWIDTHS. Count makes them grow rightward
        {x: 159.5, y: 0, count: 3},

        {x: 257, y: 0, count: 3},
        {x: 412, y: 0, count: 3},

        {x: 4.5, y: -240, count: 3},
        {x: 159.5, y:-240, count: 3},

        {x: 257, y: -240, count: 3},
        {x: 412, y: -240, count: 3},

        {x: 4.5, y: 240, count: 8},
        {x: 257, y: 240, count: 8},

        {x: 4.5, y: -480, count: 8},
        {x: 257, y: -480, count: 8},

        {x: -248, y: -480, count: 8},
        {x: -248, y: 240, count: 8},

        {x: -248, y: -240, count: 3},
        {x: -93, y: -240, count: 3},

        {x: -248, y: 0, count: 3},
        {x: -93, y: 0, count: 3}
    ],

    sideWallRights: [ // Count makes them grow downwards
        {x: 252.5, y: 0, count: 7},
        {x: 252.5, y: 160, count: 7},

        {x: 252.5, y: -240, count: 7},
        {x: 252.5, y: -80, count: 5},

        {x: 505, y: 0, count: 17},
        {x: 505, y: -240, count: 15},
        {x: 505, y: -480, count: 15},

        {x: 252.5, y: -480, count: 7},
        {x: 252.5, y: -320, count: 5}
    ],

    bigRugs: [
        {x: 234.25, y: 112},
        {x: 234.25, y: 136},

        {x: 234.25, y: -128},
        {x: 234.25, y: -104},

        {x: 234.25, y:-368},
        {x: 234.25, y:-344},

        {x: -18.25, y: 112},
        {x: -18.25, y: 136},

        {x: -18.25, y: -128},
        {x: -18.25, y: -104},

        {x: -18.25, y: -368},
        {x: -18.25, y: -344}
    ],

    // ------------------------ OFFICE FURNITURE -------------------

    wideBlueMonitor: [
        {x: 103, y: -472},
        {x: 133, y: -472}
    ],

    gamerPC: [
        {x: 80, y: -460},
        {x: 161, y: -460},
    ],

    blackHandleChairUp: [
        {x: 106, y: -430},
        {x: 136, y: -430},
    ],

    officeDesk: [
        {x: 100, y: -460},
        {x: 130, y: -460}
    ],

    whiteBoard: [
        {x: 177, y: -335},
    ],

    redStool: [
        {x: 155, y: -289},
        {x: 175, y: -270},
        {x: 200, y: -270},
        {x: 216, y: -289},

    ],


    // ------------------------ KITCHEN FURNITURE -------------------

    kitchenSet: [
        {x: 360, y: -481}
    ],

    fridge: [
        {x: 278, y: -475}
    ],

    kitchenCounterLeft: [
        // left side
        {x: 257, y: -455},

        {x: 300, y: -455},

        // right side
        {x: 440, y: -455},

        //bottom
        {x: 358, y: -400}
    ],

    kitchenCounterRight: [
        // left side
        {x: 340, y: -455},

        // right side
        {x: 480, y: -455},

        // bottom side
        {x: 480, y: -400},
    ],

    kitchenCounterMiddle: [
        //left side
        {x: 318, y: -455},

        // right side
        {x: 465, y: -455},

        // bottom side
        {x: 383, y: -400},
        {x: 408, y: -400},
        {x: 433, y: -400},
        {x: 458, y: -400},
    ],

    microwave: [
        {x: 330, y: -465}
    ],

    kitchenCabinet: [
        {x: 441, y: -480},
        {x: 471, y: -480}
    ],

    tanChairRight: [
        {x: 316, y: -322},
    ],

    tanChairUp: [
        {x: 348, y: -297},
        {x: 388, y: -297},
        {x: 428, y: -297},
        {x: 468, y: -297},
    ],

    tanChairDown: [
        {x: 348, y: -343},
        {x: 388, y: -343},
        {x: 428, y: -343},
        {x: 468, y: -343},
    ],

    // ------------------------ LOUNGE FURNITURE -------------------

    piano: [
        {x: 30, y: -66}
    ],

    tanSofa: [
        {x: 40, y: -220},
        {x: 178, y: -220}
    ],

    orangePatternedTable: [
        {x: 40, y: -190},
        {x: 178, y: -190}
    ],

    pacManGame: [
        {x: 186, y: -70},
        {x: 208, y: -70},
        {x: 230, y: -70}
    ],

    bigCouches: [
        {x: 42, y: -161},
        {x: 180, y: -161}
    ],

    chairRights: [
        {x: 21, y: -188},
        {x: 159, y: -188}
    ],

    chairLefts: [
        {x: 83, y: -188},
        // x = 96 + 174
        {x: 220, y: -188}
    ],


    // ------------------------ BATHROOM FURNITURE -------------------

    shower: [
        {x: 427, y: -70},
        {x: 452, y: -70},
        {x: 477, y: -70}
    ],

    toilet: [
        {x: 282, y: -57}
    ],

    bathtub: [
        {x: 405, y: -142},
        {x: 321, y: -142}
    ],

    bathroomSink: [
        // left side
        {x: 261, y: -215},
        {x: 306, y: -215},

        // right side
        {x: 415, y: -215},
        {x: 462, y: -215}
    ],

    bathroomMirror: [
        //left side
        {x: 257, y: -235},
        {x: 287, y: -235},
        {x: 318, y: -235},

        //right side
        {x: 412, y: -235},
        {x: 443, y: -235},
        {x: 473, y: -235}
    ],

    trashcan: [
        {x: 262, y: -50}
    ],


    // ------------------------ BEDROOM FURNITURE -------------------

    bigWhiteBed: [
        {x: 407, y: 156}
    ],

    bedroomMirror: [
        {x: 450, y: 3}
    ],

    wardrobes: [
        {x: 415, y: 6},
        {x: 477, y: 6}
    ],

    lamp: [

        {x: 384, y: 160},
        {x: 469, y: 160}
    ],

    smallBlueTable: [
        {x: 380, y: 170},
        {x: 465, y: 170}
    ],




    // ------------ Multiple Rooms ---------------------

    longWoodenPatternedTables: [

        //office
        {x: 174, y: -295},

        //kitchen
        {x: 335, y: -320},
        {x: 375, y: -320},

        {x: 415, y: -320},
        {x: 455, y: -320},


    ],

    bookshelves: [
        //office
        {x: 4.5, y: -475},
        {x: 25, y: -475},
        {x: 208, y: -475},
        {x: 228, y: -475},

        //bedroom
        {x: 257, y: 6},
        {x: 280, y: 6},
        {x: 303, y: 6},
        {x: 326, y: 6}

    ],



    beds: [
        {x: 445.5, y: -126}
    ],
}

let levelOne1 = {
    label: "Phase 1-1",


    //NPC PORTRAIT NUMBERS
    // 0 = neutral, 1 = happy, 2 = sad, 3 = mad, 4 = surprised

    butler: [
        {message: "Talk to Mr.Billionaire. He has a welcome message. Also, make sure to take a look around. You " +
                "never know what you might find in this big mansion...",
            state: 0,
            portraitNumber: 0,
            stateIncr: false},
        {message: "Talk to Stephanie. She's also dating Mr. Billionaire.",
            state: 1,
            portraitNumber: 0,
            stateIncr: false},
        {message: "Talk to Richie. He's also dating Mr. Billionaire, and is such a gossip queen...much like myself.",
            state: 2,
            portraitNumber: 0,
            stateIncr: false},
        {message: "Someone is going to give a toast. Go back to them to hear it.",
            state: 3,
            portraitNumber: 0,
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
        { message: "*annoying clinking of silverware on a glass* I'd like to give a toast. " +
                "Welcome to my mansion! I know we'll have a great time. Later, I'll be handing " +
                "out the first impression rose. *wink* Let the sparks ignite!",
            state: 3,
            portraitNumber: 5,
            stateIncr: "true"}
    ]
};


let levelOne2 = {
    label: "Phase 1-2",

    // // THE UNITS OF MEASUREMENT FOR THE BELOW CODE ARE IN BLOCKWIDTHS!
    //
    // //background
    // sideWallLefts: [ // count makes them grow downwards
    //     // Room 1 left walls
    //     {x: 0, y: 0, count: 23},
    //     {x: 0, y: -368, count: 23}
    // ],
    //
    // plainWalls: [
    //     // Room 1 top walls
    //     // Start at x = 4.5 because the Room 1 left wall starts at 0 and a left wall takes up 4.5 BLOCKWIDTHS so 0 + 4.5 = 4.5.
    //     {x: 4.5, y: 0, count: 4}, // A plain wall piece has a width of 31 BLOCKWIDTHS. Thus, this ends at x = 4.5 + 10 * 31 = 314.5
    //     {x: 190.5, y: 0, count: 4},
    //
    //     {x: 319, y: 0, count: 4},
    //     {x: 505, y: 0, count: 4},
    //     {x: 4.5, y: -368, count: 10},
    //     {x: 319, y: -368, count: 10},
    //
    //     // Room 1 bottom walls
    //     /* Start at y = 336 because of the following math to line up the bottom edge:
    //     The Room 1 left walls start at 0, have a height of 16, count of 23.
    //     A plain wall piece has a height of 32 BLOCKWIDTHS.
    //     We have 23 walls on the left side.
    //     0 + (16 * 23) - 32 = 336
    //      */
    //     {x: 4.5, y: 336, count: 10},
    //     {x: 319, y: 336, count: 10}
    // ],
    //
    // sideWallRights: [
    //     // Room 1 right walls
    //     // The Room 1 plain walls end at x = 314.5, so we start there. Line it up to the left wall with y = 0.
    //     {x: 314.5, y: 0, count: 10},
    //     // We have 10 walls (height 16), then 2 big rugs (height 24) before we start these walls so:
    //     // y = 0 + (16 * 10) + (24 * 2) = 208
    //     {x: 314.5, y: 208, count: 10},
    //
    //     {x: 314.5, y: -368, count: 10},
    //     {x: 314.5, y: -160, count: 10},
    //
    //     {x: 629, y: 0, count: 23},
    //     {x: 629, y: -368, count: 23}
    // ],
    //
    // bigRugs: [
    //     // We want half the rug in and out of the rooms.
    //     /*
    //     Room 1 right rugs:
    //     For top rug, y = 0 + (16 * 10) = 160
    //     For bottom rug y = top rug + 24 = 160 + 24 = 184
    //      */
    //     {x: 296.25, y: 160},
    //     {x: 296.25, y: 184},
    //
    //     {x: 296.25, y: -208},
    //     {x: 296.25, y: -184}
    // ],
    //
    // //furniture
    // longWoodenPatternedTables: [
    //     // Room 1 big tables, place wherever they look nice
    //     {x: 68, y: 64},
    //     {x: 242, y: 64}
    // ],
    //
    // bigCouches: [
    //     /*
    //     Room 1 couch, place at the center bottom of room.
    //     x = (Width of room / 2) - (couch width / 2) = [(Room end of right wall - beginning of left wall) / 2] - [couch width / 2]
    //     x = ((164 - 0) / 2) - (32/2) = 66
    //     y = [(Room top of bottom wall) - (couch height)] = 128 - 13 = 115
    //      */
    //     {x: 66, y: 115},
    //     {x: 240, y: 115}
    // ],
    //
    // chairRights: [
    //     // Room 1 chairs, place directly next to the table (x) and center it relative to table (y).
    //     // x = (table start - chair width) = (68 - 14) = 54
    //     // y = (table top placement + [table height / 2] - [chair height / 2]) = (64 + (32 / 2) - (16 / 2)) = 72
    //     {x: 54, y: 72},
    //     // x = distance between tables + chair from first table
    //     // x = (242 - 68) + 54 = 174 + 54 = 228
    //     {x: 228, y: 72}
    // ],
    //
    // chairLefts: [
    //     // Room 1 chair, place directly next to the table (x) and center it relative to table which centered in the room (y).
    //     // x = (table start + table width) = (68 + 28) = 96
    //     // y is same as Room 1 chair left.
    //     {x: 96, y: 72},
    //     // x = 96 + 174
    //     {x: 270, y: 72}
    // ],
    //
    // beds: [
    //     {x: 500, y: -150}
    // ],

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